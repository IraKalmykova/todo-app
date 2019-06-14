(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(7),o=a.n(s),c=a(8),r=a(1),m=a(2),i=a(4),u=a(3),d=a(5),h=(a(15),function(e){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:"",value:e.value,onChange:e.handleChange})))}),f=function(e){return n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},n.a.createElement("strong",null,e.count.length)," item left"),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{href:"#/",className:0===e.addClass?"selected":"",onClick:e.showAllItems},"All")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/active",className:1===e.addClass?"selected":"",onClick:e.showActiveItems},"Active")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/completed",className:2===e.addClass?"selected":"",onClick:e.showCompletedItems},"Completed"))),n.a.createElement("button",{type:"button",className:"clear-completed",onClick:e.removeAllCompletedItems},"Clear completed"))},v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={checked:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"main"},n.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox"}),n.a.createElement("label",{htmlFor:"toggle-all",onClick:this.props.checkedAllItems},"Mark all as complete"),n.a.createElement("ul",{className:"todo-list"},this.props.items.map(function(t,a){return n.a.createElement("li",{key:t.value,className:t.done?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{className:"toggle",type:"checkbox",onClick:function(){return e.props.handleClickToDone(t.value)}}),n.a.createElement("label",null,t.value),n.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return e.props.removeCompletedItem(t.value)}})))})))}}]),t}(n.a.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={value:"",items:[],count:0,checked:!1},a.addToValue=function(e){a.setState({value:e.target.value})},a.addToItems=function(){a.state.value&&a.setState(function(e){return{items:[].concat(Object(c.a)(e.items),[{index:a.state.items.length+1,value:a.state.value,done:!1}]),value:""}})},a.handleClickToDone=function(e){var t=!0,l=!1,n=void 0;try{for(var s,o=a.state.items[Symbol.iterator]();!(t=(s=o.next()).done);t=!0){var c=s.value;c.value===e&&(c.done=!c.done)}}catch(r){l=!0,n=r}finally{try{t||null==o.return||o.return()}finally{if(l)throw n}}a.setState({items:a.state.items})},a.showAllItems=function(){a.setState({count:0})},a.showActiveItems=function(){a.setState({count:1})},a.showCompletedItems=function(){a.setState({count:2})},a.removeAllCompletedItems=function(){var e=a.state.items.filter(function(e){return!e.done});a.setState({items:e})},a.removeCompletedItem=function(e){var t=a.state.items.filter(function(t){return t.value!==e});a.setState({items:t})},a.checkedAllItems=function(){var e=!0,t=!1,l=void 0;try{for(var n,s=a.state.items[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){n.value.done=!a.state.checked}}catch(o){t=!0,l=o}finally{try{e||null==s.return||s.return()}finally{if(t)throw l}}a.state.checked=!a.state.checked,a.setState({items:a.state.items,checked:a.state.checked})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"todoapp"},n.a.createElement(h,{value:this.state.value,handleChange:this.addToValue,handleSubmit:this.addToItems}),n.a.createElement(v,{items:0===this.state.count?this.state.items:1===this.state.count?this.state.items.filter(function(e){return!e.done}):this.state.items.filter(function(e){return e.done}),handleClickToDone:this.handleClickToDone,checkedAllItems:this.checkedAllItems,removeCompletedItem:this.removeCompletedItem}),n.a.createElement(f,{count:this.state.items.filter(function(e){return!e.done}),showAllItems:this.showAllItems,showActiveItems:this.showActiveItems,showCompletedItems:this.showCompletedItems,removeAllCompletedItems:this.removeAllCompletedItems,addClass:this.state.count}))}}]),t}(n.a.Component);o.a.render(n.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e6d76946.chunk.js.map