import * as THREE from 'three'
import AFRAME from 'aframe'
import loadSvg from 'load-svg'
import parseSVG from './svg-parser'
// import svgMesh3d from 'svg-mesh-3d'
// const CreateGeom = require('three-simplicial-complex')(THREE)

window.AFRAME.registerComponent('svg-geometry', {
  schema: {
    path: {
      type: 'string'
    },
    url: {
      type: 'string'
    }
  },
  init () {
    this.el.setObject3D('mesh', new AFRAME.THREE.Object3D())
  },
  update (oldData) {
    function d3threeD (exports) {
      const DEGS_TO_RADS = Math.PI / 180
      // const UNIT_SIZE = 100
      const DIGIT_0 = 48
      const DIGIT_9 = 57
      const COMMA = 44
      const SPACE = 32
      const PERIOD = 46
      const MINUS = 45

      exports.transformSVGPath = pathStr => {
        let path = new THREE.ShapePath()

        let idx = 1
        let len = pathStr.length
        let activeCmd
        let x = 0
        let y = 0
        let nx = 0
        let ny = 0
        let firstX = null
        let firstY = null
        let x1 = 0
        let x2 = 0
        let y1 = 0
        let y2 = 0
        let rx = 0
        let ry = 0
        let xar = 0
        let laf = 0
        let sf = 0
        let cx
        let cy

        function eatNum () {
          let sidx
          let c
          let isFloat = false
          let s

          while (idx < len) {
            c = pathStr.charCodeAt(idx)

            if (c !== COMMA && c !== SPACE) break
            idx++
          }

          if (c === MINUS) {
            sidx = idx++
          } else {
            sidx = idx
          }

          // eat number

          while (idx < len) {
            c = pathStr.charCodeAt(idx)

            if (DIGIT_0 <= c && c <= DIGIT_9) {
              idx++
              continue
            } else if (c === PERIOD) {
              idx++
              isFloat = true
              continue
            }

            s = pathStr.substring(sidx, idx)
            return isFloat ? parseFloat(s) : parseInt(s)
          }

          s = pathStr.substring(sidx)
          return isFloat ? parseFloat(s) : parseInt(s)
        }

        function nextIsNum () {
          var c
          // do permanently eat any delims...

          while (idx < len) {
            c = pathStr.charCodeAt(idx)

            if (c !== COMMA && c !== SPACE) break

            idx++
          }

          c = pathStr.charCodeAt(idx)
          return (c === MINUS || (DIGIT_0 <= c && c <= DIGIT_9))
        }

        var canRepeat
        activeCmd = pathStr[ 0 ]

        while (idx <= len) {
          canRepeat = true

          switch (activeCmd) {
          // moveto commands, become lineto's if repeated
          case 'M':
            x = eatNum()
            y = eatNum()
            path.moveTo(x, y)
            activeCmd = 'L'
            firstX = x
            firstY = y
            break

          case 'm':
            x += eatNum()
            y += eatNum()
            path.moveTo(x, y)
            activeCmd = 'l'
            firstX = x
            firstY = y
            break

          case 'Z':
          case 'z':
            canRepeat = false
            if (x !== firstX || y !== firstY) path.lineTo(firstX, firstY)
            break

            // - lines!
          case 'L':
          case 'H':
          case 'V':
            nx = (activeCmd === 'V') ? x : eatNum()
            ny = (activeCmd === 'H') ? y : eatNum()
            path.lineTo(nx, ny)
            x = nx
            y = ny
            break

          case 'l':
          case 'h':
          case 'v':
            nx = (activeCmd === 'v') ? x : (x + eatNum())
            ny = (activeCmd === 'h') ? y : (y + eatNum())
            path.lineTo(nx, ny)
            x = nx
            y = ny
            break

            // - cubic bezier
          case 'C':
            x1 = eatNum(); y1 = eatNum()
            break

          case 'S':
            if (activeCmd === 'S') {
              x1 = 2 * x - x2
              y1 = 2 * y - y2
            }

            x2 = eatNum()
            y2 = eatNum()
            nx = eatNum()
            ny = eatNum()
            path.bezierCurveTo(x1, y1, x2, y2, nx, ny)
            x = nx; y = ny
            break

          case 'c':
            x1 = x + eatNum()
            y1 = y + eatNum()
            break

          case 's':
            if (activeCmd === 's') {
              x1 = 2 * x - x2
              y1 = 2 * y - y2
            }

            x2 = x + eatNum()
            y2 = y + eatNum()
            nx = x + eatNum()
            ny = y + eatNum()
            path.bezierCurveTo(x1, y1, x2, y2, nx, ny)
            x = nx; y = ny
            break

            // - quadratic bezier
          case 'Q':
            x1 = eatNum(); y1 = eatNum()
            break

          case 'T':
            if (activeCmd === 'T') {
              x1 = 2 * x - x1
              y1 = 2 * y - y1
            }
            nx = eatNum()
            ny = eatNum()
            path.quadraticCurveTo(x1, y1, nx, ny)
            x = nx
            y = ny
            break

          case 'q':
            x1 = x + eatNum()
            y1 = y + eatNum()
            break

          case 't':
            if (activeCmd === 't') {
              x1 = 2 * x - x1
              y1 = 2 * y - y1
            }

            nx = x + eatNum()
            ny = y + eatNum()
            path.quadraticCurveTo(x1, y1, nx, ny)
            x = nx; y = ny
            break

            // - elliptical arc
          case 'A':
            rx = eatNum()
            ry = eatNum()
            xar = eatNum() * DEGS_TO_RADS
            laf = eatNum()
            sf = eatNum()
            nx = eatNum()
            ny = eatNum()
            if (rx !== ry) console.warn('Forcing elliptical arc to be a circular one:', rx, ry)

            // SVG implementation notes does all the math for us! woo!
            // http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes

            // step1, using x1 as x1'

            x1 = Math.cos(xar) * (x - nx) / 2 + Math.sin(xar) * (y - ny) / 2
            y1 = -Math.sin(xar) * (x - nx) / 2 + Math.cos(xar) * (y - ny) / 2

            // step 2, using x2 as cx'

            var norm = Math.sqrt((rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1) /
            (rx * rx * y1 * y1 + ry * ry * x1 * x1))

            if (laf === sf) norm = -norm

            x2 = norm * rx * y1 / ry
            y2 = norm * -ry * x1 / rx

            // step 3

            cx = Math.cos(xar) * x2 - Math.sin(xar) * y2 + (x + nx) / 2
            cy = Math.sin(xar) * x2 + Math.cos(xar) * y2 + (y + ny) / 2

            var u = new THREE.Vector2(1, 0)
            var v = new THREE.Vector2((x1 - x2) / rx, (y1 - y2) / ry)

            var startAng = Math.acos(u.dot(v) / u.length() / v.length())

            if (((u.x * v.y) - (u.y * v.x)) < 0) startAng = -startAng

            // we can reuse 'v' from start angle as our 'u' for delta angle
            u.x = (-x1 - x2) / rx
            u.y = (-y1 - y2) / ry

            var deltaAng = Math.acos(v.dot(u) / v.length() / u.length())

            // This normalization ends up making our curves fail to triangulate...

            if (((v.x * u.y) - (v.y * u.x)) < 0) deltaAng = -deltaAng
            if (!sf && deltaAng > 0) deltaAng -= Math.PI * 2
            if (sf && deltaAng < 0) deltaAng += Math.PI * 2

            path.absarc(cx, cy, rx, startAng, startAng + deltaAng, sf)
            x = nx
            y = ny
            break

          default:
            throw new Error('Wrong path command: ' + activeCmd)
          }

          // just reissue the command

          if (canRepeat && nextIsNum()) continue

          activeCmd = pathStr[idx++]
        }

        return path
      }
    }

    const $d3g = {}
    d3threeD($d3g)

    return loadSvg(this.data.url, (err, svg) => {
      if (err) throw err

      let pathsGroup = new AFRAME.THREE.Group()
      var teste = parseSVG(svg)

      for (var i = 0; i < teste.length; i++) {
        var path = $d3g.transformSVGPath(teste[i].path)
        var simpleShapes = path.toShapes(true)
        const material = new AFRAME.THREE.MeshBasicMaterial({
          side: THREE.DoubleSide,
          color: teste[i].fill
        })

        for (var j = 0; j < simpleShapes.length; j++) {
          var simpleShape = simpleShapes[j]
          // console.log(simpleShape)
          var shape3d = new AFRAME.THREE.ExtrudeBufferGeometry(simpleShape, {
            amount: 30,
            bevelEnabled: false
          })

          var mesh = new AFRAME.THREE.Mesh(shape3d, material)
          mesh.scale.x = 0.05
          mesh.scale.y = 0.05
          mesh.scale.z = 0.05
          mesh.rotation.x = Math.PI
          // mesh.position.x = 0
          // mesh.position.y = 0
          // mesh.position.z = 0
          // mesh.position.set(0, 0, 0)
          pathsGroup.add(mesh)
        }
      }
      this.el.setObject3D('mesh', pathsGroup)
      // var box = new AFRAME.THREE.Box3().setFromObject().getSize()
      console.log()
      // console.log(this.el.getObject3D('mesh'))
      // this.el.getObject3D('mesh').position.x = (box.min.x - box.max.x) / 2
      // this.el.getObject3D('mesh').position.y = ((box.min.y * -1)) / 2
      // this.el.getObject3D('mesh').position.z = 2
      this.el.getObject3D('mesh').position.x = -6
      this.el.getObject3D('mesh').position.y = 6
      this.el.getObject3D('mesh').position.z = 4
    })
  },
  tick () {}
})
