(function(t){function e(e){for(var n,o,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],i[o]&&p.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={1:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([1,0]),r()})({1:function(t,e,r){t.exports=r("Vtdi")},Vtdi:function(t,e,r){"use strict";r.r(e);r("dE+T"),r("bHtr"),r("dRSK"),r("INYr"),r("HEwt"),r("Z2Ku"),r("yt8O"),r("6AQ9"),r("Vd3H"),r("0E+W"),r("yM4b"),r("IXt9"),r("f3/d"),r("9AAn"),r("fyVe"),r("U2t9"),r("2atp"),r("+auO"),r("MtdB"),r("Jcmo"),r("nzyx"),r("BC7C"),r("x8ZO"),r("9P93"),r("BJ/l"),r("eHKK"),r("pp/T"),r("CyHz"),r("bBoP"),r("x8Yj"),r("hLT2"),r("xfY5"),r("Ljet"),r("/KAi"),r("fN96"),r("7h0T"),r("sbF8"),r("h/M4"),r("knhD"),r("XfKG"),r("BP8U"),r("91GP"),r("RQRG"),r("/uf1"),r("/8Fb"),r("DW2E"),r("mYba"),r("jm62"),r("JduL"),r("5Pf0"),r("uaHG"),r("ZNX/"),r("mura"),r("25dN"),r("Zshi"),r("V/DX"),r("FlsD"),r("RW0V"),r("z2o2"),r("/SS/"),r("hhXQ"),r("VRzm"),r("CX2u"),r("3xty"),r("I5cv"),r("iMoV"),r("uhZd"),r("0YWM"),r("694e"),r("LTTk"),r("9rMk"),r("IlFx"),r("xpiv"),r("oZ/O"),r("klPD"),r("knU9"),r("Oyvg"),r("OEbY"),r("SRfc"),r("pIFo"),r("KKXr"),r("OG14"),r("a1Th"),r("T39b"),r("ioFf"),r("rE2o"),r("hEkN"),r("nIY7"),r("+oPb"),r("SMB2"),r("oDIu"),r("rvZc"),r("0mN4"),r("bDcW"),r("nsiH"),r("VpUO"),r("L9s1"),r("0LDn"),r("tUrg"),r("9XZr"),r("7VC1"),r("eI33"),r("FLlr"),r("84bF"),r("9VmF"),r("FEjr"),r("Zz4T"),r("JCqj"),r("xm80"),r("sFw1"),r("NO8f"),r("aqI/"),r("Faw5"),r("r1bV"),r("tuSo"),r("nCnK"),r("Y9lz"),r("Tdpu"),r("EK0E"),r("wCsR"),r("R5XZ"),r("Ew+T"),r("rGqo"),r("ls82");var n=r("Kw5r"),i=r("zlta"),a=r.n(i);r("v0CA");n["default"].use(a.a,{});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-toolbar",{attrs:{app:"",color:"amber"}},[r("v-spacer"),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),r("v-spacer")],1),r("v-spacer"),r("v-content",[r("Form",{attrs:{updateItem:t.updateItem},on:{addTask:t.addNewTask}}),r("List",{attrs:{items:t.items},on:{removeTask:t.removeTask,updateTask:t.updateTask}})],1)],1)},s=[],u=r("o0o1"),c=r.n(u),l=r("MECJ"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{xs6:"",sm6:"","offset-sm3":""}},[r("v-card",[r("v-card-title",[r("v-spacer"),r("h2",[t._v("What to do")]),r("v-spacer")],1),r("v-divider"),r("v-card-text",[r("form",[r("v-text-field",{attrs:{"error-messages":t.titleErrors,counter:25,label:"Title",required:""},on:{input:function(e){t.$v.title.$touch()},blur:function(e){t.$v.title.$touch()}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("v-text-field",{attrs:{"error-messages":t.descriptionErrors,label:"Description",required:""},on:{input:function(e){t.$v.description.$touch()},blur:function(e){t.$v.description.$touch()}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),r("v-btn",{attrs:{color:"yellow"},on:{click:t.submit}},[t._v("submit")]),r("v-btn",{attrs:{color:"yellow"},on:{click:t.clear}},[t._v("clear")])],1)])],1)],1)],1)},p=[],v=r("Hc5T"),f=r("ta7f"),h={props:{updateItem:Object},mixins:[v["validationMixin"]],validations:{title:{required:f["required"],maxLength:Object(f["maxLength"])(25)},description:{required:f["required"]}},data:function(){return{title:"",description:"",idTemp:""}},watch:{updateItem:function(t){this.idTemp=t._id,this.title=t.title,this.description=t.description}},computed:{titleErrors:function(){var t=[];return this.$v.title.$dirty?(!this.$v.title.maxLength&&t.push("Title must be at most 25 characters long"),!this.$v.title.required&&t.push("Title is required."),t):t},descriptionErrors:function(){var t=[];return this.$v.description.$dirty?(!this.$v.description.required&&t.push("description is required"),t):t}},methods:{submit:function(){this.$emit("addTask",{_id:this.idTemp,title:this.$v.title.$model,description:this.$v.description.$model}),this.$v.$touch(),this.clear()},clear:function(){this.$v.$reset(),this.title="",this.description=""}}},m=h,b=r("KHd+"),k=Object(b["a"])(m,d,p,!1,null,null,null),T=k.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-data-iterator",{attrs:{items:t.items,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,"content-tag":"v-layout",row:"",wrap:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return r("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[r("v-card",[r("v-card-title",[r("h3",[t._v(t._s(e.item.title))])]),r("v-divider"),r("v-list",{attrs:{dense:""}},[r("v-list-tile",[r("v-list-tile-content",[t._v("Description:")]),r("v-list-tile-content",[t._v(t._s(e.item.description))])],1)],1),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"orange"},on:{click:function(r){t.update(e.item)}}},[t._v("Update")]),r("v-btn",{attrs:{flat:"",color:"orange"},on:{click:function(r){t.remove(e.item._id)}}},[t._v("Delete")])],1)],1)],1)}}])})],1)},w=[],y={props:{items:Array},data:function(){return{rowsPerPageItems:[4,8,12],pagination:{rowsPerPage:4}}},methods:{remove:function(t){this.$emit("removeTask",t)},update:function(t){var e={_id:t._id,title:t.title,description:t.description};this.$emit("updateTask",e)}}},g=y,_=Object(b["a"])(g,x,w,!1,null,null,null),$=_.exports,O=r("yT7P"),j=r("Ez3a"),E=r("vDqi"),P="",I=function(){try{var t=E({method:"get",url:"".concat(P,"/task/")});return t}catch(t){return t}},q=function(t){try{var e=E({method:"post",url:"".concat(P,"/task/new"),data:t});return e}catch(t){return t}},F=function(t){try{var e=E({method:"delete",url:"".concat(P,"/task/").concat(t)});return e}catch(t){return t}},M=function(t){var e=t._id,r=Object(j["a"])(t,["_id"]);try{var n=E({method:"put",url:"".concat(P,"/task/").concat(e),data:Object(O["a"])({},r)});return n}catch(t){return t}},K={getAllTask:I,saveTask:q,removeTask:F,updateTask:M},S={name:"App",components:{Form:T,List:$},data:function(){return{title:"MEVN - STACK",items:[],updateItem:{},update:!1}},methods:{addNewTask:function(){var t=Object(l["a"])(c.a.mark(function t(e){var r;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.update){t.next=6;break}return t.next=3,K.updateTask(e);case 3:return t.sent,this.items=this.items.map(function(t){return t._id===e._id&&(t=e),t}),t.abrupt("return",this.update=!1);case 6:return t.next=8,K.saveTask(e);case 8:r=t.sent,this.items.unshift(r.data.result);case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),removeTask:function(){var t=Object(l["a"])(c.a.mark(function t(e){var r;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=this.items.find(function(t){return t._id===e}),t.next=3,K.removeTask(e);case 3:this.items.splice(r,1);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),updateTask:function(){var t=Object(l["a"])(c.a.mark(function t(e){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.updateItem=e,this.update=!0;case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},mounted:function(){var t=Object(l["a"])(c.a.mark(function t(){var e;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K.getAllTask();case 2:e=t.sent,this.items=e.data.result;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},V=S,C=Object(b["a"])(V,o,s,!1,null,null,null),D=C.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(D)}}).$mount("#app")}});
//# sourceMappingURL=app.8621da66.js.map