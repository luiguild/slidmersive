// import * as THREE from 'three'
import AFRAME from 'aframe'
import loadSvg from 'load-svg'
import parseSVG from './svg-parser'
import d3threeD from './d3-threeD'

const getPaths = file =>
  new Promise((resolve, reject) =>
    loadSvg(file, (err, svg) => {
      if (err) throw reject(err)
      return resolve(parseSVG(svg))
    })
  )

window.AFRAME.registerComponent('svg-path-extruder', {
  schema: {
    url: {
      type: 'string'
    },
    scale: {
      type: 'number',
      default: 1
    },
    extrude: {
      type: 'number',
      default: 0.1
    },
    overrideColor: {
      type: 'string'
    }
  },
  $d3g: {},
  init () {
    this.el.setObject3D('mesh', new AFRAME.THREE.Object3D())
    d3threeD(this.$d3g)
  },
  update () {
    if (this.data.url) {
      const pathsGroup = new AFRAME.THREE.Group()

      return getPaths(this.data.url).then(svg => {
        if (svg.length > 0) {
          svg
            .map(elm => {
              console.log(this.data.overrideColor)
              return {
                ...elm,
                material: new AFRAME.THREE.MeshLambertMaterial({
                  side: AFRAME.THREE.DoubleSide,
                  color: this.data.overrideColor
                    ? this.data.overrideColor
                    : elm.fill
                })
              }
            })
            .map(elm => {
              return {
                ...elm,
                shape: this.$d3g
                  .transformSVGPath(elm.path)
              }
            })
            .map(elm => {
              return {
                ...elm,
                shape: new AFRAME.THREE.ExtrudeBufferGeometry(elm.shape, {
                  amount: this.data.extrude,
                  bevelEnabled: false
                })
              }
            })
            .map(elm => {
              return new AFRAME.THREE.Mesh(elm.shape, elm.material)
            })
            .forEach((elm, indx, arr) => {
              elm.scale.x = (0.0095 * this.data.scale)
              elm.scale.y = (0.0095 * this.data.scale)
              elm.scale.z = (this.data.extrude + (indx * 0.004))
              elm.rotation.x = Math.PI
              pathsGroup.add(elm)
            })

          this.el.setObject3D('mesh', pathsGroup)
          this.el.getObject3D('mesh').position.z = 0

          // initialize bounding box
          let boundingBox = {
            min: new AFRAME.THREE.Vector3(Number.MAX_VALUE),
            max: new AFRAME.THREE.Vector3(Number.MIN_VALUE)
          }
          let offset = new AFRAME.THREE.Vector3()

          // get bounding box of group
          for (let i = 0; i < pathsGroup.children.length; ++i) {
            let geometry = pathsGroup.children[i].geometry
            geometry.computeBoundingBox()
            let childBox = geometry.boundingBox.getCenter()

            // bbox min
            boundingBox.min.x = Math.min(childBox.x, boundingBox.min.x)
            boundingBox.min.y = Math.min(childBox.y, boundingBox.min.y)
            boundingBox.min.z = this.data.extrude

            // bbox max
            boundingBox.max.x = Math.max(childBox.x, boundingBox.max.x)
            boundingBox.max.y = Math.max(childBox.y * 2, boundingBox.max.y)
            boundingBox.max.z = this.data.extrude
          }

          // get center of bbox
          offset.addVectors(boundingBox.min, boundingBox.max)
          offset.multiplyScalar(-0.5)

          // move all meshes
          for (let i = 0; i < pathsGroup.children.length; ++i) {
            // apply matrix translation
            pathsGroup.children[i].geometry.applyMatrix(new AFRAME.THREE.Matrix4().makeTranslation(offset.x, offset.y, offset.z))
            // update bbox of each mesh
            pathsGroup.children[i].geometry.computeBoundingBox()
          }
        }
      })
    }
  }
})
