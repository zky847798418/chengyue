webpackJsonp([7],{885:function(t,e,a){var n=a(63)(a(906),a(921),null,null,null);t.exports=n.exports},906:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"list",components:{},data:function(){return{total:7,page:10,listLoading:!1,tableData:[{id:1,name:"张三",sex:"男",contactPhone:"138-0013-8000"},{id:2,name:"李四",sex:"女",contactPhone:"138-0013-8000"},{id:3,name:"王二麻子",sex:"男",contactPhone:"138-0013-8000"},{id:4,name:"张三",sex:"男",contactPhone:"138-0013-8000"},{id:5,name:"李四",sex:"男",contactPhone:"138-0013-8000"},{id:6,name:"王二麻子",sex:"男",contactPhone:"138-0013-8000"},{id:7,name:"张三",sex:"男",contactPhone:"138-0013-8000"}]}},watch:{params:{handler:function(t){this.getData(t)},deep:!0}},computed:{state:function(){return this.$store.state.app}},methods:{createNew:function(){this.$router.push({path:"/crm/customerDetail",query:{type:"create"}})},getData:function(t){},pageChange:function(t){this.params.page=t},PageSizeChange:function(t){this.params.limit=t},remove:function(t){this.listData.splice(t,1)},edit:function(t){},onSelect:function(t,e){},onSelectionChange:function(t){this.selection=t},lookDetail:function(t){this.$router.push({path:"/crm/customerDetail",query:{type:"detail",id:t.id}})}},created:function(){this.getData(this.params)},mounted:function(){}}},921:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("div",{staticClass:"clearfix list-button"},[a("div",{staticClass:"pull-left"},[a("el-button",{on:{click:t.createNew}},[t._v("创建新客户")])],1)]),t._v(" "),a("div",{staticClass:"list-center"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"chanceTable",attrs:{data:t.tableData},on:{"row-click":t.lookDetail}},[a("el-table-column",{attrs:{prop:"id",label:"编号",width:"60",height:"40",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactPhone",label:"联系人手机号",align:"center"}})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total","page-size":10,total:t.total},on:{"current-change":function(t){}}})],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=7.46e3132f092e63362ff6.js.map