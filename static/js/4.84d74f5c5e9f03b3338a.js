webpackJsonp([4],{878:function(t,e,l){var a=l(63)(l(899),l(916),null,null,null);t.exports=a.exports},887:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"htable",data:function(){return{tableData:[{title:"商机编号",text:"1"},{title:"项目名称",text:"XXXX开发项目"},{title:"渠道",text:"今日头条"},{title:"商机编号",text:"1"},{title:"商机编号",text:"1"},{title:"商机编号",text:"1"}]}},computed:{}}},888:function(t,e,l){var a=l(63)(l(887),l(889),null,null,null);t.exports=a.exports},889:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"htable"},[l("table",{staticClass:"htable_body",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[l("tbody",t._l(t.tableData,function(e,a){return l("tr",{key:a},[l("td",{staticClass:"tdTitle"},[l("div",{staticClass:"cell"},[t._v(t._s(e.title))])]),t._v(" "),l("td",{staticClass:"tdText"},[l("div",{staticClass:"cell"},[t._v(t._s(e.text))])])])}))])])},staticRenderFns:[]}},899:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(888),n=l.n(a);e.default={name:"chanceDetail",components:{HTable:n.a},data:function(){return{total:0,page:10,listLoading:!1,tableData:[],ruleForm:{name:"",region:"",date1:""},rules:{name:[{required:!0,message:"请输入",trigger:"blur"}],region:[{required:!0,message:"请选择",trigger:"change"}]},stateOptions:[{value:"state1",label:"全部"},{value:"state2",label:"新线索"},{value:"state3",label:"跟进中"},{value:"state4",label:"已成单"},{value:"state5",label:"已终止"}],stateValue:""}},watch:{params:{handler:function(t){this.getData(t)},deep:!0}},computed:{state:function(){return this.$store.state.app}},methods:{getData:function(t){},pageChange:function(t){this.params.page=t},PageSizeChange:function(t){this.params.limit=t},remove:function(t){this.listData.splice(t,1)},edit:function(t){},onSelect:function(t,e){},onSelectionChange:function(t){this.selection=t}},created:function(){this.getData(this.params)},mounted:function(){}}},916:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"list"},[l("div",{staticClass:"clearfix list-button"},[t._m(0),t._v(" "),l("div",{staticClass:"pull-right",staticStyle:{"margin-right":"10px"}},[l("el-button",{on:{click:function(t){}}},[t._v("创建合同")]),t._v(" "),l("el-button",{on:{click:function(t){}}},[t._v("删除")]),t._v(" "),l("el-button",{on:{click:function(t){}}},[t._v("保存")])],1)]),t._v(" "),l("div",{staticClass:"clearfix list-center"},[l("el-col",{attrs:{span:12}},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"商机编号",prop:"name"}},[l("el-input",{model:{value:t.ruleForm.index,callback:function(e){t.$set(t.ruleForm,"index",e)},expression:"ruleForm.index"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[l("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"渠道",prop:"name"}},[l("el-input",{model:{value:t.ruleForm.channel,callback:function(e){t.$set(t.ruleForm,"channel",e)},expression:"ruleForm.channel"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"商机登记时间",required:""}},[l("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.ruleForm.date1,callback:function(e){t.$set(t.ruleForm,"date1",e)},expression:"ruleForm.date1"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"状态",prop:"region"}},[l("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择商机状态"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}},t._l(t.stateOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),l("el-form-item",{attrs:{label:"销售负责人",prop:"name"}},[l("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"客户名称",prop:"name"}},[l("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)],1)],1)],1),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"clearfix list-center"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"chanceTable",attrs:{data:t.tableData},on:{"selection-change":function(t){}}},[l("el-table-column",{attrs:{type:"index",label:"联系人编号",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"role",label:"角色",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"联系人姓名",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"contactPhone",label:"手机号码",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"address",label:"收件地址",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"small"},on:{click:function(t){}}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){}}},[t._v("删除")])]}}])})],1),t._v(" "),l("el-col",{staticClass:"toolbar",attrs:{span:24}},[l("el-col",{staticStyle:{height:"32px"},attrs:{span:20}},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total","page-size":10,total:t.total},on:{"current-change":function(t){}}})],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("div",{staticClass:"clearfix list-button",staticStyle:{margin:"0"}},[l("div",{staticClass:"pull-right",staticStyle:{"margin-right":"20px"}},[l("el-button",{on:{click:function(t){}}},[t._v("新增联系人")])],1)])])],1)],1),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"list-center-bottom",staticStyle:{height:"140px",border:"1px solid #dfdfdf",background:"#fafafa"}},[l("el-input",{attrs:{type:"textarea"}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pull-left"},[l("h4",{staticClass:"list-button-text"},[t._v("商机基本信息：")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"clearfix list-button"},[l("div",{staticClass:"pull-left"},[l("h4",{staticClass:"list-button-text"},[t._v("客户联系人信息：")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"clearfix list-button"},[l("div",{staticClass:"pull-left"},[l("h4",{staticClass:"list-button-text"},[t._v("商机描述：")])])])}]}}});
//# sourceMappingURL=4.84d74f5c5e9f03b3338a.js.map