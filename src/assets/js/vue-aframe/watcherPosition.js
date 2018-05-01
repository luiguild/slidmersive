import store from '@/vuex'
import {
  mapActions
} from 'vuex'

let pX
let pY
let pZ
let rX
let rY
let rZ

window.AFRAME.registerComponent('watcher-position', {
  $store: store,
  ...mapActions('aframe', [
    'setCameraPosition',
    'setCameraRotation'
  ]),
  tick () {
    const camera = this.el.sceneEl.camera.el
    const cameraPosition = camera.getAttribute('position')
    const cameraRotation = camera.getAttribute('rotation')

    if (cameraPosition) {
      if (pX !== cameraPosition.x ||
          pY !== cameraPosition.y ||
          pZ !== cameraPosition.z) {
        pX = cameraPosition.x
        pY = cameraPosition.y
        pZ = cameraPosition.z

        this.setCameraPosition({
          position: {
            x: pX,
            y: pY,
            z: pZ
          }
        })
      }
    }

    if (cameraRotation) {
      if (rX !== cameraRotation.x ||
          rY !== cameraRotation.y ||
          rZ !== cameraRotation.z) {
        rX = cameraRotation.x
        rY = cameraRotation.y
        rZ = cameraRotation.z

        this.setCameraRotation({
          rotation: {
            x: rX,
            y: rY,
            z: rZ
          }
        })
      }
    }
  },
  init () {}
})
