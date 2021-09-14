(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47ebda52"],{"01e3":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),i=n("a723"),s=n("9b76"),c=n("365c"),l=n("cf75");function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(l["d"])({label:Object(l["c"])(i["u"]),role:Object(l["c"])(i["u"],"status"),small:Object(l["c"])(i["g"],!1),tag:Object(l["c"])(i["u"],"span"),type:Object(l["c"])(i["u"],"border"),variant:Object(l["c"])(i["u"])},o["Qb"]),d=a["default"].extend({name:o["Qb"],functional:!0,props:p,render:function(t,e){var n,a=e.props,o=e.data,i=e.slots,l=e.scopedSlots,p=i(),d=l||{},b=Object(c["b"])(s["C"],{},d,p)||a.label;return b&&(b=t("span",{staticClass:"sr-only"},b)),t(a.tag,Object(r["a"])(o,{attrs:{role:b?a.role||"status":null,"aria-hidden":b?null:"true"},class:(n={},u(n,"spinner-".concat(a.type),a.type),u(n,"spinner-".concat(a.type,"-sm"),a.small),u(n,"text-".concat(a.variant),a.variant),n)}),[b||t()])}})},1079:function(t,e,n){"use strict";var a=n("541c");e["a"]=a["a"]},"897f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{lg:"6"}},[n("pagination-basic")],1),n("b-col",{attrs:{lg:"6"}},[n("pagination-separated")],1),n("b-col",{attrs:{xl:"6"}},[n("pagination-color")],1),n("b-col",{attrs:{xl:"6"}},[n("pagination-button-content")],1),n("b-col",{attrs:{lg:"6"}},[n("pagination-goto")],1),n("b-col",{attrs:{lg:"6"}},[n("pagination-size")],1),n("b-col",{attrs:{lg:"6"}},[n("pagination-pill")],1),n("b-col",{attrs:{lg:"6"}},[n("pagination-alignment")],1)],1)},r=[],o=n("a15b"),i=n("b28b"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Alignment"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeAlignment)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("By default the pagination component is left aligned. Change the alignment to ")]),n("code",[t._v("center, right")]),n("span",[t._v(" (")]),n("code",[t._v("right")]),n("span",[t._v(" is an alias for ")]),n("code",[t._v("end")]),n("span",[t._v(" )")]),n("span",[t._v(", or ")]),n("code",[t._v("fill")]),n("span",[t._v(" by setting the prop ")]),n("code",[t._v("align")]),n("span",[t._v(" to the appropriate value.")])]),n("div",{staticClass:"demo-spacing-0"},[n("span",[t._v("Radios using options")]),n("div",{staticClass:"my-1"},[n("b-form-radio",{attrs:{name:"vuexy-radio",value:"default",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" Default ")]),n("b-form-radio",{attrs:{name:"vuexy-radio",value:"right",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" Right ")]),n("b-form-radio",{attrs:{name:"vuexy-radio",value:"center",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" Center ")]),n("b-form-radio",{attrs:{name:"vuexy-radio",value:"fill",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" Fill ")])],1),n("b-pagination",{attrs:{"total-rows":t.rows,"base-url":"#",align:t.selected},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},c=[],l=n("26d2"),u=n("9e14"),p=n("d6e4"),d=n("1079"),b='\n<template>\n   <b-pagination\n    v-model="currentPage"\n    hide-goto-end-buttons\n    :total-rows="rows"\n  />\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data() {\n    return {\n      currentPage: 1,\n      perPage: 1,\n      rows: 100,\n    }\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="demo-spacing-0">\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      prev-class="prev-item"\n      next-class="next-item"\n    >\n      <template #prev-text>\n        <feather-icon\n          icon="ChevronLeftIcon"\n          size="18"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          icon="ChevronRightIcon"\n          size="18"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 1,\n    rows: 200,\n  }),\n}\n<\/script>\n',g='\n<template>\n  <div class="demo-spacing-0">\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-success"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-danger mt-2"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-info mb-0"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n data() {\n    return {\n      codeColorOption,\n      currentPage: 4,\n      perPage: 1,\n      rows: 200,\n    }\n  },\n}\n<\/script>\n',m='\n<template>\n  <div>\n    <div>\n      <h6>Goto first button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        first-number\n      />\n    </div>\n    <div class="mt-2">\n      <h6>Goto last button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        last-number\n      />\n    </div>\n    <div class="mt-2 demo-spacing-0">\n      <h6>Goto first and last button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        first-number\n        last-number\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 5,\n    perPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',v='\n<template>\n  <div>\n    <div>\n      <h6>Small</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        size="sm"\n      />\n    </div>\n\n    <div class="mt-2">\n      <h6>Default</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n      />\n    </div>\n\n    <div class="mt-2 demo-spacing-0">\n      <h6>Large</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        size="lg"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',h='\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- Use text in props --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      first-text="First"\n      prev-text="Prev"\n      next-text="Next"\n      align="left"\n      last-text="Last"\n    />\n\n    \x3c!-- Use emojis in props --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      first-text="⏮"\n      prev-text="⏪"\n      next-text="⏩"\n      align="left"\n      last-text="⏭"\n      class="mt-2"\n    />\n\n    \x3c!-- Use HTML and sub-components in slots --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      align="left"\n      class="mt-2"\n    >\n      <template\n        #first-text\n      >\n        <span class="text-success">First</span>\n      </template>\n      <template #prev-text>\n        <span class="text-danger">Prev</span>\n      </template>\n      <template #next-text>\n        <span class="text-warning">Next</span>\n      </template>\n      <template #last-text>\n        <span class="text-info">Last</span>\n      </template>\n      <template #ellipsis-text>\n        <div>\n          <b-spinner\n            small\n            type="grow"\n          />\n          <b-spinner\n            small\n            type="grow"\n          />\n        </div>\n      </template>\n      <template #page="{ page, active }">\n        <b v-if="active">{{ page }}</b>\n        <i v-else>{{ page }}</i>\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination, BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n    BSpinner,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 10,\n    rows: 100,\n  }),\n}\n<\/script>\n',x='\n<template>\n  <div>\n    <div>\n      <h6>Small Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n        size="sm"\n      />\n    </div>\n\n    <div class="mt-2">\n      <h6>Default Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n      />\n    </div>\n\n    <div class="mt-2 demo-spacing-0">\n      <h6>Large Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n        size="lg"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',P='\n<template>\n  <div class="demo-spacing-0">\n    <span>Radios using options</span>\n    <div class="my-1">\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="default"\n        inline\n      >\n        Default\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="right"\n        inline\n      >\n        Right\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="center"\n        inline\n      >\n        Center\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="fill"\n        inline\n      >\n        Fill\n      </b-form-radio>\n    </div>\n\n    \x3c!-- pagination --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      base-url="#"\n      :align="selected"\n    />\n  </div>\n</template>\n\n<script>\nimport { BPagination, BFormRadio } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n    BFormRadio,\n  },\n  data() {\n    return {\n      selected: \'default\',\n      currentPage: 1,\n      rows: 100,\n    }\n  },\n}\n<\/script>\n',O={components:{BCardCode:d["a"],BPagination:l["a"],BFormRadio:u["a"],BCardText:p["a"]},data:function(){return{selected:"default",codeAlignment:P,currentPage:1,rows:100}}},w=O,j=n("2877"),y=Object(j["a"])(w,s,c,!1,null,null,null),_=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v(" Quick first, previous, next, last, and page buttons for pagination control of another component (such as ")]),n("code",[t._v("<b-table>")]),n("span",[t._v("or lists).")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{attrs:{"hide-goto-end-buttons":"","total-rows":t.rows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},k=[],B={components:{BCardCode:d["a"],BPagination:l["a"],BCardText:p["a"]},data:function(){return{codeBasic:b,currentPage:1,perPage:1,rows:100}}},S=B,G=Object(j["a"])(S,C,k,!1,null,null,null),z=G.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Button content"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeContent)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("For a full list of all available slots see the")]),n("code",[t._v("Slots")]),n("span",[t._v("section below.")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next",align:"left","last-text":"Last"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),n("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"⏮","prev-text":"⏪","next-text":"⏩",align:"left","last-text":"⏭"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),n("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.rows,"per-page":t.perPage,align:"left"},scopedSlots:t._u([{key:"first-text",fn:function(){return[n("span",{staticClass:"text-success"},[t._v("First")])]},proxy:!0},{key:"prev-text",fn:function(){return[n("span",{staticClass:"text-danger"},[t._v("Prev")])]},proxy:!0},{key:"next-text",fn:function(){return[n("span",{staticClass:"text-warning"},[t._v("Next")])]},proxy:!0},{key:"last-text",fn:function(){return[n("span",{staticClass:"text-info"},[t._v("Last")])]},proxy:!0},{key:"ellipsis-text",fn:function(){return[n("div",[n("b-spinner",{attrs:{small:"",type:"grow"}}),n("b-spinner",{attrs:{small:"",type:"grow"}})],1)]},proxy:!0},{key:"page",fn:function(e){var a=e.page,r=e.active;return[n(r?"b":"i",[t._v(t._s(a))])]}}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},R=[],D=n("01e3"),I={components:{BCardCode:d["a"],BPagination:l["a"],BSpinner:D["a"],BCardText:p["a"]},data:function(){return{codeContent:h,currentPage:1,perPage:10,rows:100}}},F=I,$=Object(j["a"])(F,L,R,!1,null,null,null),T=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Color Option"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeColorOption)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To add pagination with different color option, use class")]),n("code",[t._v(".pagination-{colorName}")]),n("span",[t._v("with ")]),n("code",[t._v("<b-pagination>")]),n("span",[t._v("components.")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{staticClass:"pagination-success",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),n("b-pagination",{staticClass:"pagination-danger mt-2",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),n("b-pagination",{staticClass:"pagination-info mb-0",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},A=[],N={components:{BCardCode:d["a"],BPagination:l["a"],BCardText:p["a"]},data:function(){return{codeColorOption:g,currentPage:4,perPage:1,rows:200}}},q=N,V=Object(j["a"])(q,E,A,!1,null,null,null),M=V.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Goto first/last button type"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeGoto)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("If you prefer to have buttons with the first and last page number to go to the corresponding page, use the")]),n("code",[t._v("first-number")]),n("span",[t._v("and")]),n("code",[t._v("last-number")]),n("span",[t._v("props")]),t._v(". ")]),n("div",[n("h6",[t._v("Goto first button number")]),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("div",{staticClass:"mt-2"},[n("h6",[t._v("Goto last button number")]),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"last-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("div",{staticClass:"mt-2 demo-spacing-0"},[n("h6",[t._v("Goto first and last button number")]),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},Q=[],U={components:{BCardCode:d["a"],BPagination:l["a"],BCardText:p["a"]},data:function(){return{codeGoto:m,currentPage:5,perPage:1,rows:100}}},J=U,H=Object(j["a"])(J,W,Q,!1,null,null,null),K=H.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Pill style"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codePill)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Easily switch to pill style buttons by setting the")]),n("code",[t._v("pills")]),n("span",[t._v("prop.")])]),n("div",[n("h6",[t._v("Small Pills")]),n("b-pagination",{attrs:{pills:"","total-rows":t.rows,size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("div",{staticClass:"mt-2"},[n("h6",[t._v("Default Pills")]),n("b-pagination",{attrs:{pills:"","total-rows":t.rows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("div",{staticClass:"mt-2 demo-spacing-0"},[n("h6",[t._v("Large Pills")]),n("b-pagination",{attrs:{pills:"","total-rows":t.rows,size:"lg"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},Y=[],Z={components:{BCardCode:d["a"],BPagination:l["a"],BCardText:p["a"]},data:function(){return{codePill:x,currentPage:1,rows:100}}},tt=Z,et=Object(j["a"])(tt,X,Y,!1,null,null,null),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Separated"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSeparated)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To make space between seprated icons of pagination use ")]),n("code",[t._v(".prev-item")]),n("span",[t._v(" class for the ")]),n("code",[t._v("prev-class")]),n("span",[t._v(" prop and ")]),n("code",[t._v(".next-item")]),n("span",[t._v(" for the ")]),n("code",[t._v("next-class")]),n("span",[t._v(" prop.")])]),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{attrs:{"total-rows":t.rows,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},rt=[],ot={components:{BCardCode:d["a"],BPagination:l["a"],BCardText:p["a"]},data:function(){return{codeSeparated:f,currentPage:1,perPage:1,rows:200}}},it=ot,st=Object(j["a"])(it,at,rt,!1,null,null,null),ct=st.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Button size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSize)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Optionally change from the default button size by setting the")]),n("code",[t._v("size")]),n("span",[t._v("prop to either")]),n("code",[t._v("'sm'")]),n("span",[t._v("for smaller buttons or ")]),n("code",[t._v("'lg'")]),n("span",[t._v("for larger buttons.")])]),n("div",[n("h6",[t._v("Small")]),n("b-pagination",{attrs:{"total-rows":t.rows,size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("div",{staticClass:"mt-2"},[n("h6",[t._v("Default")]),n("b-pagination",{attrs:{"total-rows":t.rows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("div",{staticClass:"mt-2 demo-spacing-0"},[n("h6",[t._v("Large")]),n("b-pagination",{attrs:{"total-rows":t.rows,size:"lg"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)},ut=[],pt={components:{BCardCode:d["a"],BPagination:l["a"],BCardText:p["a"]},data:function(){return{codeSize:v,currentPage:1,rows:100}}},dt=pt,bt=Object(j["a"])(dt,lt,ut,!1,null,null,null),ft=bt.exports,gt={components:{BRow:o["a"],BCol:i["a"],PaginationAlignment:_,PaginationBasic:z,PaginationButtonContent:T,PaginationColor:M,PaginationGoto:K,PaginationPill:nt,PaginationSeparated:ct,PaginationSize:ft}},mt=gt,vt=Object(j["a"])(mt,a,r,!1,null,null,null);e["default"]=vt.exports},"9e14":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n("2b0e"),r=n("c637"),o=n("3c21"),i=n("d82f"),s=n("cf75"),c=n("dde7"),l=n("d3cb"),u=n("ad47"),p=n("d520"),d=n("90ef");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=Object(s["d"])(Object(i["m"])(f(f(f(f(f({},d["b"]),c["b"]),l["c"]),u["b"]),p["b"])),r["T"]),v=a["default"].extend({name:r["T"],mixins:[d["a"],l["b"],c["a"],u["a"],p["a"]],inject:{bvGroup:{from:"bvRadioGroup",default:!1}},props:m,watch:{computedLocalChecked:function(t,e){Object(o["a"])(t,e)||this.$emit(l["a"],t)}}})},a953:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n("2b0e"),r=n("a723"),o=n("cf75"),i=Object(o["d"])({plain:Object(o["c"])(r["g"],!1)},"formControls"),s=a["default"].extend({props:i,computed:{custom:function(){return!this.plain}}})},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n("2b0e"),r=n("a723"),o=n("cf75"),i=Object(o["d"])({size:Object(o["c"])(r["u"])},"formControls"),s=a["default"].extend({props:i,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},b28b:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n("b42e"),r=n("c637"),o=n("a723"),i=n("992e"),s=n("2326"),c=n("228e"),l=n("6c06"),u=n("7b1e"),p=n("b508"),d=n("d82f"),b=n("cf75"),f=n("fa73");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=["auto","start","end","center","baseline","stretch"],x=function(t,e,n){var a=t;if(!Object(u["p"])(n)&&!1!==n)return e&&(a+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),Object(f["c"])(a)):Object(f["c"])(a)},P=Object(p["a"])(x),O=Object(d["c"])(null),w=function(){var t=Object(c["b"])().filter(l["a"]),e=t.reduce((function(t,e){return t[e]=Object(b["c"])(o["i"]),t}),Object(d["c"])(null)),n=t.reduce((function(t,e){return t[Object(b["g"])(e,"offset")]=Object(b["c"])(o["p"]),t}),Object(d["c"])(null)),a=t.reduce((function(t,e){return t[Object(b["g"])(e,"order")]=Object(b["c"])(o["p"]),t}),Object(d["c"])(null));return O=Object(d["a"])(Object(d["c"])(null),{col:Object(d["h"])(e),offset:Object(d["h"])(n),order:Object(d["h"])(a)}),Object(b["d"])(Object(d["m"])(m(m(m(m({},e),n),a),{},{alignSelf:Object(b["c"])(o["u"],null,(function(t){return Object(s["a"])(h,t)})),col:Object(b["c"])(o["g"],!1),cols:Object(b["c"])(o["p"]),offset:Object(b["c"])(o["p"]),order:Object(b["c"])(o["p"]),tag:Object(b["c"])(o["u"],"div")})),r["y"])},j={name:r["y"],functional:!0,get props(){return delete this.props,this.props=w()},render:function(t,e){var n,r=e.props,o=e.data,s=e.children,c=r.cols,l=r.offset,u=r.order,p=r.alignSelf,d=[];for(var b in O)for(var f=O[b],g=0;g<f.length;g++){var m=P(b,f[g].replace(b,""),r[f[g]]);m&&d.push(m)}var h=d.some((function(t){return i["e"].test(t)}));return d.push((n={col:r.col||!h&&!c},v(n,"col-".concat(c),c),v(n,"offset-".concat(l),l),v(n,"order-".concat(u),u),v(n,"align-self-".concat(p),p),n)),t(r.tag,Object(a["a"])(o,{class:d}),s)}}},d3cb:function(t,e,n){"use strict";n.d(e,"a",(function(){return B})),n.d(e,"c",(function(){return S})),n.d(e,"b",(function(){return G}));var a,r,o=n("2b0e"),i=n("a723"),s=n("0056"),c=n("906c"),l=n("7b1e"),u=n("3c21"),p=n("58f2"),d=n("d82f"),b=n("cf75"),f=n("493b"),g=n("dde7"),m=n("a953"),v=n("ad47"),h=n("d520"),x=n("90ef"),P=n("8c18");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(p["a"])("checked",{defaultValue:null}),_=y.mixin,C=y.props,k=y.prop,B=y.event,S=Object(b["d"])(Object(d["m"])(w(w(w(w(w(w(w({},x["b"]),C),g["b"]),v["b"]),h["b"]),m["b"]),{},{ariaLabel:Object(b["c"])(i["u"]),ariaLabelledby:Object(b["c"])(i["u"]),button:Object(b["c"])(i["g"],!1),buttonVariant:Object(b["c"])(i["u"]),inline:Object(b["c"])(i["g"],!1),value:Object(b["c"])(i["a"])})),"formRadioCheckControls"),G=o["default"].extend({mixins:[f["a"],x["a"],_,P["a"],g["a"],v["a"],h["a"],m["a"]],inheritAttrs:!1,props:S,data:function(){return{localChecked:this.isGroup?this.bvGroup[k]:this[k],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(u["a"])(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(l["b"])(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},j(t,"btn-".concat(e),e),j(t,"disabled",this.isDisabled),j(t,"active",this.isChecked),j(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return w(w({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(a={},j(a,k,(function(){this["".concat(k,"Watcher")].apply(this,arguments)})),j(a,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),a),methods:(r={},j(r,"".concat(k,"Watcher"),(function(t){Object(u["a"])(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),j(r,"computedLocalCheckedWatcher",(function(t,e){Object(u["a"])(t,e)||this.$emit(B,t)})),j(r,"handleChange",(function(t){var e=this,n=t.target.checked,a=this.value,r=n?a:null;this.computedLocalChecked=a,this.$nextTick((function(){e.$emit(s["d"],r),e.isGroup&&e.bvGroup.$emit(s["d"],r)}))})),j(r,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),j(r,"focus",(function(){this.isDisabled||Object(c["d"])(this.$refs.input)})),j(r,"blur",(function(){this.isDisabled||Object(c["c"])(this.$refs.input)})),r),render:function(t){var e=this.isRadio,n=this.isBtnMode,a=this.isPlain,r=this.isCustom,o=this.isInline,i=this.isSwitch,s=this.computedSize,c=this.bvAttrs,l=this.normalizeSlot(),u=t("input",{class:[{"form-check-input":a,"custom-control-input":r,"position-static":a&&!l},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:w({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var p=t("label",{class:this.buttonClasses},[u,l]);return this.isGroup||(p=t("div",{class:["btn-group-toggle","d-inline-block"]},[p])),p}var d=t();return a&&!l||(d=t("label",{class:{"form-check-label":a,"custom-control-label":r},attrs:{for:this.safeId()}},l)),t("div",{class:[j({"form-check":a,"form-check-inline":a&&o,"custom-control":r,"custom-control-inline":r&&o,"custom-checkbox":r&&!e&&!i,"custom-switch":i,"custom-radio":r&&e},"b-custom-control-".concat(s),s&&!n),c.class],style:c.style},[u,d])}})},d520:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c}));var a=n("2b0e"),r=n("a723"),o=n("7b1e"),i=n("cf75"),s=Object(i["d"])({state:Object(i["c"])(r["g"],null)},"formState"),c=a["default"].extend({props:s,computed:{computedState:function(){return Object(o["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),i=n("a723"),s=n("cf75"),c=Object(s["d"])({textTag:Object(s["c"])(i["u"],"p")},o["u"]),l=a["default"].extend({name:o["u"],functional:!0,props:c,render:function(t,e){var n=e.props,a=e.data,o=e.children;return t(n.textTag,Object(r["a"])(a,{staticClass:"card-text"}),o)}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var a=n("2b0e"),r=n("a723"),o=n("906c"),i=n("cf75"),s="input, textarea, select",c=Object(i["d"])({autofocus:Object(i["c"])(r["g"],!1),disabled:Object(i["c"])(r["g"],!1),form:Object(i["c"])(r["u"]),id:Object(i["c"])(r["u"]),name:Object(i["c"])(r["u"]),required:Object(i["c"])(r["g"],!1)},"formControls"),l=a["default"].extend({props:c,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(o["B"])((function(){var e=t.$el;t.autofocus&&Object(o["u"])(e)&&(Object(o["v"])(e,s)||(e=Object(o["C"])(s,e)),Object(o["d"])(e))}))}))}}})}}]);
//# sourceMappingURL=chunk-47ebda52.2e13a715.js.map