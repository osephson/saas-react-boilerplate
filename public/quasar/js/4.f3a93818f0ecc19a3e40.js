webpackJsonp([4],{YJLM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("14gb"),r={data:function(){return{email:"",password:"",ready:!1}},created:function(){var t=this;s.a.$on("authSync",function(e){e&&t.$router.push({name:"showlist"})}),this.$store.getters["auth/isAuthorised"]&&this.$router.push({name:"home"})},methods:{doSubmit:function(){var t=this;this.$store.dispatch("auth/authenticate",{email:this.email,password:this.password}).then(function(){t.ready=!0,t.$router.push({name:"home"})})}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",[a("q-card-title",[t._v("\r\n    Welcome guest\r\n  ")]),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-main",[a("q-field",{attrs:{icon:"email",label:"Your Email"}},[a("q-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),a("q-field",{attrs:{icon:"lock",label:"Password"}},[a("q-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),a("q-card-separator"),t._v(" "),a("q-card-actions",[a("q-field",[a("q-btn",{attrs:{label:"Login"},on:{click:t.doSubmit}})],1)],1)],1)},o=[];i._withStripped=!0;var n=a("XyMi"),l=Object(n.a)(r,i,o,!1,null,null,null);l.options.__file="src\\app\\auth\\components\\Login.vue";e.default=l.exports}});