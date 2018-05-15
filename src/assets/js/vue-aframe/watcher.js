import store from '@/vuex'
import {
  mapActions
} from 'vuex'

window.AFRAME.registerComponent('vuex-watcher', {
  element: {},
  oldValue: {},
  newValue: {},
  $store: store,
  schema: {
    attributes: {
      type: 'array'
    },
    actions: {
      type: 'array'
    }
  },
  tick () {
    this.data.attributes.forEach((attr, indx) => {
      const value = this.element.getAttribute(attr)
      this.newValue[attr] = JSON.stringify(value)

      if (this.newValue[attr] !== this.oldValue[attr]) {
        const action = this.data.actions[indx]

        this.oldValue[attr] = this.newValue[attr]

        if (action) {
          this[action]({
            [attr]: value
          })
        }
      }
    })
  },
  init () {
    this.element = this.el.sceneEl.camera.el
    Object.assign(this, mapActions('aframe', this.data.actions))
  }
})
