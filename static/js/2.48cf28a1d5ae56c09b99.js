webpackJsonp([2],{882:function(t,e,a){var l=a(63)(a(903),a(923),null,null,null);t.exports=l.exports},887:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"htable",data:function(){return{tableData:[{title:"商机编号",text:"1"},{title:"项目名称",text:"XXXX开发项目"},{title:"渠道",text:"今日头条"},{title:"商机编号",text:"1"},{title:"商机编号",text:"1"},{title:"商机编号",text:"1"}]}},computed:{}}},888:function(t,e,a){var l=a(63)(a(887),a(889),null,null,null);t.exports=l.exports},889:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"htable"},[a("table",{staticClass:"htable_body",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("tbody",t._l(t.tableData,function(e,l){return a("tr",{key:l},[a("td",{staticClass:"tdTitle"},[a("div",{staticClass:"cell"},[t._v(t._s(e.title))])]),t._v(" "),a("td",{staticClass:"tdText"},[a("div",{staticClass:"cell"},[t._v(t._s(e.text))])])])}))])])},staticRenderFns:[]}},903:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(888),s=a.n(l);e.default={name:"chanceDetail",components:{HTable:s.a},data:function(){return{total:0,page:10,listLoading:!1,linkTableData:[],tableData:[],ruleForm:{name:"",region:"",date1:""},rules:{name:[{required:!0,message:"请输入",trigger:"blur"}],region:[{required:!0,message:"请选择",trigger:"change"}]}}},watch:{params:{handler:function(t){this.getData(t)},deep:!0}},computed:{state:function(){return this.$store.state.app}},methods:{getData:function(t){},pageChange:function(t){this.params.page=t},PageSizeChange:function(t){this.params.limit=t},remove:function(t){this.listData.splice(t,1)},edit:function(t){},onSelect:function(t,e){},onSelectionChange:function(t){this.selection=t}},created:function(){this.getData(this.params)},mounted:function(){}}},923:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("div",{staticClass:"clearfix list-button"},[a("div",{staticClass:"pull-right",staticStyle:{"margin-right":"10px"}},[a("el-button",{on:{click:function(t){}}},[t._v("保存")])],1)]),t._v(" "),a("div",{staticClass:"clearfix list-center"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"clearfix list-button"},[a("div",{staticClass:"pull-left"},[a("h4",{staticClass:"list-button-text"},[t._v("联系人基本信息：")])])]),t._v(" "),a("div",{staticClass:"clearfix list-center"},[a("el-col",{attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"联系人编号",prop:"name"}},[a("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"name"}},[a("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属客户",prop:"name"}},[a("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"生日",required:""}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.ruleForm.date1,callback:function(e){t.$set(t.ruleForm,"date1",e)},expression:"ruleForm.date1"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"角色",prop:"name"}},[a("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)],1)],1)],1)]),t._v(" "),a("el-col",{staticStyle:{"padding-left":"15px"},attrs:{span:12}},[a("div",{staticClass:"clearfix list-button"},[a("div",{staticClass:"pull-left"},[a("h4",{staticClass:"list-button-text"},[t._v("联系方式：")])])]),t._v(" "),a("div",{staticClass:"clearfix list-center"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"chanceTable",attrs:{data:t.linkTableData},on:{"selection-change":function(t){}}},[a("el-table-column",{attrs:{type:"way",label:"联系人方式",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remarks",label:"备注",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(t){}}},[t._v("查看")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-col",{staticStyle:{height:"32px"},attrs:{span:20}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total","page-size":10,total:t.total},on:{"current-change":function(t){}}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"clearfix list-button",staticStyle:{margin:"0"}},[a("div",{staticClass:"pull-right",staticStyle:{"margin-right":"20px"}},[a("el-button",{on:{click:function(t){}}},[t._v("新增联系方式")])],1)])])],1)],1)])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"clearfix list-center"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"chanceTable",attrs:{data:t.tableData},on:{"selection-change":function(t){}}},[a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remarks",label:"备注",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(t){}}},[t._v("查看")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-col",{staticStyle:{height:"32px"},attrs:{span:20}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total","page-size":10,total:t.total},on:{"current-change":function(t){}}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"clearfix list-button",staticStyle:{margin:"0"}},[a("div",{staticClass:"pull-right",staticStyle:{"margin-right":"20px"}},[a("el-button",{on:{click:function(t){}}},[t._v("新增快递地址")])],1)])])],1)],1),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"list-center-bottom",staticStyle:{height:"140px",border:"1px solid #dfdfdf",background:"#fafafa"}},[a("el-input",{attrs:{type:"textarea"}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix list-button"},[a("div",{staticClass:"pull-left"},[a("h4",{staticClass:"list-button-text"},[t._v("快递地址：")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix list-button"},[a("div",{staticClass:"pull-left"},[a("h4",{staticClass:"list-button-text"},[t._v("备注：")])])])}]}}});
//# sourceMappingURL=2.48cf28a1d5ae56c09b99.js.map