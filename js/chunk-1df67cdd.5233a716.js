(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1df67cdd"],{"58ba":function(e,t,a){"use strict";a("9b23")},"5cf1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth-wrapper auth-v2"},[a("b-row",{staticClass:"auth-inner m-0"},[a("b-link",{staticClass:"brand-logo"},[a("vuexy-logo"),a("h2",{staticClass:"brand-text text-primary ml-1"},[e._v(" Vuexy ")])],1),a("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[a("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[a("b-img",{attrs:{fluid:"",src:e.imgUrl,alt:"Register V2"}})],1)]),a("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[a("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[a("b-card-title",{staticClass:"mb-1"},[e._v(" Adventure starts here 🚀 ")]),a("b-card-text",{staticClass:"mb-2"},[e._v(" Make your app management easy and fun! ")]),a("validation-observer",{ref:"registerForm",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[a("b-form",{staticClass:"auth-register-form mt-2",on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Username","label-for":"register-username"}},[a("validation-provider",{attrs:{name:"Username",vid:"username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"register-username",name:"register-username",state:!(r.length>0)&&null,placeholder:"johndoe"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("b-form-group",{attrs:{label:"Email","label-for":"register-email"}},[a("validation-provider",{attrs:{name:"Email",vid:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"register-email",name:"register-email",state:!(r.length>0)&&null,placeholder:"john@example.com"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("b-form-group",{attrs:{"label-for":"register-password",label:"Password"}},[a("validation-provider",{attrs:{name:"Password",vid:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[a("b-form-input",{staticClass:"form-control-merge",attrs:{id:"register-password",type:e.passwordFieldType,state:!(r.length>0)&&null,name:"register-password",placeholder:"············"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIcon},on:{click:e.togglePasswordVisibility}})],1)],1),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!0)})],1),a("b-form-group",[a("b-form-checkbox",{attrs:{id:"register-privacy-policy",name:"checkbox-1"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[e._v(" I agree to "),a("b-link",[e._v("privacy policy & terms")])],1)],1),a("b-button",{attrs:{variant:"primary",block:"",type:"submit",disabled:r}},[e._v(" Sign up ")])],1)]}}])}),a("p",{staticClass:"text-center mt-2"},[a("span",[e._v("Already have an account?")]),a("b-link",{attrs:{to:{name:"auth-login"}}},[a("span",[e._v(" Sign in instead")])])],1),a("div",{staticClass:"divider my-2"},[a("div",{staticClass:"divider-text"},[e._v(" or ")])]),a("div",{staticClass:"auth-footer-btn d-flex justify-content-center"},[a("b-button",{attrs:{variant:"facebook",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"FacebookIcon"}})],1),a("b-button",{attrs:{variant:"twitter",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"TwitterIcon"}})],1),a("b-button",{attrs:{variant:"google",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"MailIcon"}})],1),a("b-button",{attrs:{variant:"github",href:"javascript:void(0)"}},[a("feather-icon",{attrs:{icon:"GithubIcon"}})],1)],1)],1)],1)],1)],1)},s=[],n=a("7bb1"),i=a("088b"),o=a("a15b"),l=a("4918"),u=a("b28b"),c=a("aa59"),d=a("1947"),f=a("11de"),p=a("d6e4"),g=a("4968"),m=a("c3e6"),b=a("8226"),h=a("4797"),v=a("5e12"),k=a("ccc0"),y=a("8f03"),w=a("b91d"),x=a("4360"),C=a("7100"),j={components:{VuexyLogo:i["a"],BRow:o["a"],BImg:l["a"],BCol:u["a"],BLink:c["a"],BButton:d["a"],BForm:f["a"],BCardText:p["a"],BCardTitle:g["a"],BFormCheckbox:m["a"],BFormGroup:b["a"],BFormInput:h["a"],BInputGroup:v["a"],BInputGroupAppend:k["a"],ValidationProvider:n["b"],ValidationObserver:n["a"]},mixins:[w["a"]],data:function(){return{status:"",username:"",userEmail:"",password:"",sideImg:a("67df"),required:y["l"],email:y["g"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===x["a"].state.appConfig.layout.skin?(this.sideImg=a("99b7"),this.sideImg):this.sideImg}},methods:{register:function(){var e=this;this.$refs.registerForm.validate().then((function(t){t&&C["a"].register({username:e.username,email:e.userEmail,password:e.password}).then((function(t){C["a"].setToken(t.data.accessToken),C["a"].setRefreshToken(t.data.refreshToken),localStorage.setItem("userData",JSON.stringify(t.data.userData)),e.$ability.update(t.data.userData.ability),e.$router.push("/")})).catch((function(t){e.$refs.registerForm.setErrors(t.response.data.error)}))}))}}},T=j,I=(a("58ba"),a("2877")),_=Object(I["a"])(T,r,s,!1,null,null,null);t["default"]=_.exports},7100:function(e,t,a){"use strict";var r=a("5530");function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}var o=a("ade3"),l=(a("99af"),a("d3b7"),a("4de4"),{loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"}),u=function(){function e(t,a){var n=this;s(this,e),Object(o["a"])(this,"axiosIns",null),Object(o["a"])(this,"jwtConfig",Object(r["a"])({},l)),Object(o["a"])(this,"isAlreadyFetchingAccessToken",!1),Object(o["a"])(this,"subscribers",[]),this.axiosIns=t,this.jwtConfig=Object(r["a"])(Object(r["a"])({},this.jwtConfig),a),this.axiosIns.interceptors.request.use((function(e){var t=n.getToken();return t&&(e.headers.Authorization="".concat(n.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)}))}return i(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=this.axiosIns).post.apply(e,[this.jwtConfig.loginEndpoint].concat(a))}},{key:"register",value:function(){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=this.axiosIns).post.apply(e,[this.jwtConfig.registerEndpoint].concat(a))}},{key:"refreshToken",value:function(){return this.axiosIns.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}();function c(e,t){var a=new u(e,t);return{jwt:a}}var d=a("7f80"),f=c(d["a"],{}),p=f.jwt;t["a"]=p},"9b23":function(e,t,a){}}]);
//# sourceMappingURL=chunk-1df67cdd.5233a716.js.map