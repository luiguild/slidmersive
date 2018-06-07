import Vue from 'vue'
import AFRAME from 'aframe'
import textGeometryComponent from 'aframe-text-geometry-component'
import aframeAnimationComponent from 'aframe-animation-component'
import aframeLerpComponent from 'aframe-lerp-component'
import aframeEnvironmentComponent from 'aframe-environment-component'
import aframeFpsCounterComponent from 'aframe-fps-counter-component'
import * as aframeWatcher from './watcher'
import * as aframeSvgPathExtruder from './aframe-svg-path-extruder'

require('../a-blast')

Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-asset-item',
  'a-light',
  'a-entity',
  'a-animation',
  'a-box',
  'a-camera',
  'a-circle',
  'a-collada-model',
  'a-cone',
  'a-cursor',
  'a-curvedimage',
  'a-cylinder',
  'a-dodecahedron',
  'a-gltf-model',
  'a-icosahedron',
  'a-image',
  'a-light',
  'a-link',
  'a-obj-model',
  'a-octahedron',
  'a-plane',
  'a-ring',
  'a-sky',
  'a-sound',
  'a-sphere',
  'a-tetrahedron',
  'a-text',
  'a-torus',
  'a-torus-knot',
  'a-triangle',
  'a-video',
  'a-videosphere',
  'a-mixin'
]

const VueAframe = {
  install (Vue, options) {
    Vue.prototype.$AFRAME = AFRAME
    Vue.prototype.$textGeometryComponent = textGeometryComponent
    Vue.prototype.$aframeAnimationComponent = aframeAnimationComponent
    Vue.prototype.$aframeLerpComponent = aframeLerpComponent
    Vue.prototype.$aframeFpsCounterComponent = aframeFpsCounterComponent
    Vue.prototype.$aframeEnvironmentComponent = aframeEnvironmentComponent
    Vue.prototype.$aframeWatcher = aframeWatcher
    Vue.prototype.$aframeSvgPathExtruder = aframeSvgPathExtruder
  }
}

export default VueAframe
