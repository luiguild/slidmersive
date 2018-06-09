import store from '@/vuex'
import {
  mapActions
} from 'vuex'

window.AFRAME.registerComponent('vuex-watcher', {
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
  init () {
    Object.assign(this, mapActions('aframe', this.data.actions))
  },
  tick () {
    this.data.attributes.forEach((attr, indx) => {
      const value = this.el.getAttribute(attr)
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
  }
})
