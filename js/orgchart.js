function OrgchartDemo() {
  this.define();
}
OrgchartDemo.prototype = {
  define: function () {
    // this.isWrapDraggable = false;//总开关
    // this.isWrapDraggableSub = true;//子开关
  },
  htmlContent: [
  '<div class="org_node_c" id="org_node_c_{id}" nid="{id}" pid="{pid}"><div class="org_node_c_inner">', //0
  '  <div class="comp-info">', //1
  '    <div class="title"><a href="javascript:;" target="_blank"><span title="{dept}">{dept}</span><em>（{employees}人）</em></a></div>', //2 span不可去除，否IE下不显示
  // '    <div class="edit" data-selector="edit-tip"><i class="text-icon icon-pencil"></i></div>',
  '    <i class="switch-flag {leaf} text-icon icon-minus" data-selector="switch-btn"></i>', //4 
  '  </div>',
  '</div></div>'
  ],
  // htmlContent: [
  // '<div class="org_node_c" id="org_node_c_{id}" nid="{id}" pid="{pid}"><div class="org_node_c_inner">',//0
  // '  <div class="comp-info">', //1
  // '    <a href="http://www.baidu.com" target="_blank"><span title="{dept}">{dept}</span><em>({employees})</em></a>',//2 span不可去除，否IE下不显示
  // '    <span class="edit" data-selector="edit-tip"><i class="text-icon icon-pencil"></i></span>', 
  // '    <i class="switch-flag {leaf} text-icon icon-minus" data-selector="switch-btn"></i>', //4 
  // '  </div>',
  // '</div></div>'
  // ],

  createHtmlContent: function (data) {
    var pid = this.context.DataObject.adapter.pid;
    var id = this.context.DataObject.adapter.id;
    var dept = this.context.DataObject.adapter.dept;
    var employees = this.context.DataObject.adapter.employees;
    var leaf = this.context.DataObject.adapter.leaf;

    var content = []; //克隆模板
    $.each(this.html.htmlContent, function (idx, val) {
      content.push(val);
    });
    content[0] = content[0].replace(/{id}/g, data[id]).replace(/{pid}/g, data[pid]);
    content[2] = content[2].replace(/{dept}/g, data[dept]).replace(/{employees}/g, data[employees]);
    content[4] = content[4].replace(/{leaf}/g, data[leaf]);

    var node = $(content.join(""));
    this.addEvent(node);

    return node;
  },
  onAppendNodeWithData: function (res) {
    var target = res.node.closest(".org_tr").closest(".org_td");
    var ctarget = res.oparent;
    target.hide();
    this.context.COE.setLine(target);
    this.context.COE.setLine(ctarget);
    //移动的节点ID
    var nodeId = res.node.attr("nid");
    //移入的父节点ID
    var nparentId = res.nparent.attr("nid");
    //TODO 发送请求重新保存节点ID
    // console.log('nodeId: '+ nodeId + "; nparentId: "+ nparentId);
  }
};

var data = [
  {
    "id": 1,
    "pid": 0,
    "logo": "../images/logo/1.jpg",
    "title": "CEO",
    "name": "张璟熙",
    "dept": "总裁办",
    "employees": 288
  },
  {
    "id": 2,
    "pid": 1,
    "logo": "../images/logo/2.jpg",
    "title": "CTO",
    "name": "张乔斯",
    "dept": "技术部",
    "employees": 28
  },
  {
    "id": 5,
    "pid": 2,
    "logo": "../images/logo/4.jpg",
    "title": "研发工程师1",
    "name": "张梦琪",
    "dept": "技术部",
    "employees": 1
  },
  {
    "id": 8,
    "pid": 5,
    "logo": "../images/logo/3.jpg",
    "title": "研发工程师2",
    "name": "张紫萱",
    "dept": "技术部",
    "employees": 1
  },
  {
    "id": 9,
    "pid": 8,
    "logo": "../images/logo/6.jpg",
    "title": "研发工程师3",
    "name": "张三",
    "dept": "技术部",
    "employees": 1
  },
  {
    "id": 6,
    "pid": 2,
    "logo": "../images/logo/5.jpg",
    "title": "研发工程师4",
    "name": "马延行",
    "dept": "技术部",
    "employees": 1
  },
  {
    "id": 11,
    "pid": 6,
    "logo": "../images/logo/5.jpg",
    "title": "研发工程师5",
    "name": "张三",
    "dept": "技术部",
    "employees": 1
  },
  {
    "id": 3,
    "pid": 1,
    "logo": "../images/logo/3.jpg",
    "title": "CPO",
    "name": "相札",
    "dept": "产品部",
    "employees": 33
  },
  {
    "id": 12,
    "pid": 3,
    "logo": "../images/logo/7.jpg",
    "title": "产品经理1",
    "name": "张湛忻",
    "dept": "产品部",
    "employees": 4
  },
  {
    "id": 7,
    "pid": 12,
    "logo": "../images/logo/9.jpg",
    "title": "产品经理2",
    "name": "张妤嫒",
    "dept": "产品部",
    "employees": 5
  },
  {
    "id": 13,
    "pid": 3,
    "logo": "../images/logo/8.jpg",
    "title": "产品经理3",
    "name": "张和栩",
    "dept": "产品部",
    "employees": 6
  },
  {
    "id": 14,
    "pid": 13,
    "logo": "../images/logo/5.jpg",
    "title": "产品经理4",
    "name": "马*泽",
    "dept": "产品部",
    "employees": 7
  },
  {
    "id": 15,
    "pid": 13,
    "logo": "../images/logo/5.jpg",
    "title": "产品经理5",
    "name": "马证强",
    "dept": "产品部",
    "employees": 9
  },
  {
    "id": 17,
    "pid": 1,
    "logo": "../images/logo/3.jpg",
    "title": "COO",
    "name": "杨蓉倚",
    "dept": "运营部",
    "employees": 15
  },
  {
    "id": 22,
    "pid": 17,
    "logo": "../images/logo/10.jpg",
    "title": "市场总经理",
    "name": "杨亮哲",
    "dept": "运营部",
    "employees": 3
  },
  {
    "id": 18,
    "pid": 22,
    "logo": "../images/logo/3.jpg",
    "title": "市场经理1",
    "name": "张三",
    "dept": "运营部",
    "employees": 5
  },
  {
    "id": 23,
    "pid": 22,
    "logo": "../images/logo/3.jpg",
    "title": "市场经理2",
    "name": "张三",
    "dept": "运营部",
    "employees": 6
  },
  {
    "id": 20,
    "pid": 22,
    "logo": "../images/logo/3.jpg",
    "title": "市场经理3",
    "name": "张三",
    "dept": "运营部",
    "employees": 7
  }
];

function transformData(callback) {
  // $.get('../orgdata.json', function (result) {
  //   var data = [];
  //   data.push({
  //     "id": result.root.data.id,
  //     "pid": result.root.data.parent_id,
  //     "dept": result.root.data.name,
  //     "employees": result.root.data.employees,
  //     "leaf": result.root.data.leaf_flag
  //   });
  //   loopGetData(result.root.childs);

  //   function loopGetData(datas) {
  //     for (var i = 0; i < datas.length; i++) {
  //       data.push({
  //         "id": datas[i].data.id,
  //         "pid": datas[i].data.parent_id,
  //         "dept": datas[i].data.name,
  //         "employees": datas[i].data.employees,
  //         "leaf": datas[i].data.leaf_flag
  //       });
  //       if (datas[i].childs && datas[i].childs.length) {
  //         loopGetData(datas[i].childs);
  //       }
  //     }
  //   }
  return callback && callback(data);
  // }, 'json');
}
$(function () {
  var demo = new OrgchartDemo();

  var adapter = {
    "id": "id",
    "pid": "pid",
    "dept": "dept",
    "employees": "employees",
    "leaf": "leaf"
  };
  var DemoOption = {
    "adapter": adapter,
    "htmlContent": demo.htmlContent,
    "createHtmlContent": demo.createHtmlContent,
    "onAppendNodeWithData": demo.onAppendNodeWithData
  };

  transformData(function (data) {
    new CreateOrgchartBS($.extend({
      "data": data,
      "wrap": $(".box-org-tree")
    }, DemoOption));
  });
});