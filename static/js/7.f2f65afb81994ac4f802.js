webpackJsonp([7],{"/NPh":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),i=o.n(n),s=o("NYxO"),a=o("FtLp"),r=o("sUDE"),c=(o("yv+l"),o("V/uN"),o("1SMS")),d={props:{},data:function(){return{}},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},beforeDestroy:function(){},components:{Scenario:a.default,Slide:r.default,Assets:c.a},computed:i()({},Object(s.c)("slides",["getSocketType"]),Object(s.c)("socket",["getSocketDataReceived"]),{getSyncRotation:function(){if("spectator"===this.getSocketType&&this.getSocketDataReceived.rotation){var t=this.getSocketDataReceived.rotation;return t.x+" "+t.y+" "+t.z}},getSyncPosition:function(){if("spectator"===this.getSocketType&&this.getSocketDataReceived.position){var t=this.getSocketDataReceived.position;return t.x+" "+t.y+" "+t.z}}}),methods:{},filters:{},watch:{}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a-scene",{attrs:{cursor:"rayOrigin: mouse"}},[e("Assets"),e("Scenario",[e("Slide")],1),e("a-entity",{attrs:{id:"leftHand","shoot-controls":"hand: left",weapon:"weapon",shoot:"shoot"}}),e("a-entity",{attrs:{id:"rightHandPivot"}},[e("a-entity",{attrs:{id:"rightHand","shoot-controls":"hand: right",weapon:"weapon",shoot:"shoot"}}),"spectator"===this.getSocketType?e("a-entity",{attrs:{rotation:this.getSyncRotation,position:this.getSyncPosition}},[e("a-entity",{attrs:{id:"player",camera:"camera","wasd-controls":"wasd-controls","look-controls":"look-controls","restrict-position":"restrict-position"}})],1):this._e(),"presenter"===this.getSocketType?e("a-entity",{attrs:{id:"player",camera:"camera","vuex-watcher":"\n        attributes: rotation, position;\n        actions: setCameraRotation, setCameraPosition;\n      ","wasd-controls":"wasd-controls","look-controls":"look-controls","restrict-position":"restrict-position"}}):this._e()],1)],1)},staticRenderFns:[]};var p=o("VU/8")(d,l,!1,function(t){o("NRWm")},null,null);e.default=p.exports},NRWm:function(t,e){}});
//# sourceMappingURL=7.f2f65afb81994ac4f802.js.map