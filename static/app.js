!function(e){function t(t){for(var r,u,l=t[0],i=t[1],c=t[2],f=0,d=[];f<l.length;f++)u=l[f],o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=i;a.push([19,0]),n()}({19:function(e,t,n){"use strict";var r=u(n(0)),o=u(n(17)),a=u(n(7));function u(e){return e&&e.__esModule?e:{default:e}}var l=document.getElementById("contents");o.default.render(r.default.createElement(a.default,null),l)},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",null,"This is a placeholder to Filter Issues.")}}]),t}();t.default=l},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=(r=a)&&r.__esModule?r:{default:r};var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleSubmit=e.handleSubmit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.issueAdd;this.props.createIssue({owner:t.owner.value,title:t.title.value,status:"New",created:new Date}),t.owner.value="",t.title.value=""}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("form",{name:"issueAdd",onSubmit:this.handleSubmit},u.default.createElement("input",{type:"text",name:"owner",placeholder:"Owner"}),u.default.createElement("input",{type:"text",name:"title",placeholder:"Title"}),u.default.createElement("button",null,"Add")))}}]),t}();t.default=l},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0));n(6);var a=l(n(5)),u=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={issues:[]},e.createIssue=e.createIssue.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/issues/").then(function(t){t.ok?t.json().then(function(t){console.log("Total Count of records: ",t._metadata.total_count),t.records.forEach(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate))}),e.setState({issues:t.records})}):t.json().then(function(e){alert("Failed to fetch issue: "+e.message)})}).catch(function(e){alert("Error in fetching data from server"+e)})}},{key:"createIssue",value:function(e){var t=this;fetch("/api/issues/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){e.ok?e.json().then(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate));var n=t.state.issues.concat(e);t.setState({issues:n})}):e.json().then(function(e){alert("Failed to add issue: "+e.message)})}).catch(function(e){alert("Error in sending Data to server : "+e.message)})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"Issue Tracker"),o.default.createElement(u.default,null),o.default.createElement("hr",null),o.default.createElement(s,{issues:this.state.issues}),o.default.createElement("hr",null),o.default.createElement(a.default,{createIssue:this.createIssue}))}}]),t}();t.default=i;var c=function(e){return o.default.createElement("tr",null,o.default.createElement("td",null,e.issue._id),o.default.createElement("td",null,e.issue.status),o.default.createElement("td",null,e.issue.owner),o.default.createElement("td",null,e.issue.created.toDateString()),o.default.createElement("td",null,e.issue.effort),o.default.createElement("td",null,e.issue.completionDate?e.issue.completionDate.toDateString():""),o.default.createElement("td",null,e.issue.title))};function s(e){var t=e.issues.map(function(e){return o.default.createElement(c,{key:e._id,issue:e})});return o.default.createElement("table",{className:"bordered-table"},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Id"),o.default.createElement("th",null,"Status"),o.default.createElement("th",null,"Owner"),o.default.createElement("th",null,"Created"),o.default.createElement("th",null,"Effort"),o.default.createElement("th",null,"Completion date"),o.default.createElement("th",null,"Title"))),o.default.createElement("tbody",null,t))}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0lzc3VlRmlsdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSXNzdWVBZGQuanN4Iiwid2VicGFjazovLy8uL3NyYy9Jc3N1ZUxpc3QuanN4Il0sIm5hbWVzIjpbIndlYnBhY2tKc29ucENhbGxiYWNrIiwiZGF0YSIsIm1vZHVsZUlkIiwiY2h1bmtJZCIsImNodW5rSWRzIiwibW9yZU1vZHVsZXMiLCJleGVjdXRlTW9kdWxlcyIsImkiLCJyZXNvbHZlcyIsImxlbmd0aCIsImluc3RhbGxlZENodW5rcyIsInB1c2giLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJtb2R1bGVzIiwicGFyZW50SnNvbnBGdW5jdGlvbiIsInNoaWZ0IiwiZGVmZXJyZWRNb2R1bGVzIiwiYXBwbHkiLCJjaGVja0RlZmVycmVkTW9kdWxlcyIsInJlc3VsdCIsImRlZmVycmVkTW9kdWxlIiwiZnVsbGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIjEiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsInZhbHVlIiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInAiLCJqc29ucEFycmF5Iiwid2luZG93Iiwib2xkSnNvbnBGdW5jdGlvbiIsImJpbmQiLCJzbGljZSIsImNvbnRlbnROb2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIl9yZWFjdERvbTIiLCJkZWZhdWx0IiwicmVuZGVyIiwiX3JlYWN0MiIsImNyZWF0ZUVsZW1lbnQiLCJfSXNzdWVMaXN0MiIsIl9yZWFjdCIsIklzc3VlRmlsdGVyIiwiQ29tcG9uZW50IiwiSXNzdWVBZGQiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9fcHJvdG9fXyIsImdldFByb3RvdHlwZU9mIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImZvcm1zIiwiaXNzdWVBZGQiLCJwcm9wcyIsImNyZWF0ZUlzc3VlIiwib3duZXIiLCJ0aXRsZSIsInN0YXR1cyIsImNyZWF0ZWQiLCJEYXRlIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJJc3N1ZUxpc3QiLCJzdGF0ZSIsImlzc3VlcyIsImxvYWREYXRhIiwiX3RoaXMyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiX21ldGFkYXRhIiwidG90YWxfY291bnQiLCJyZWNvcmRzIiwiZm9yRWFjaCIsImlzc3VlIiwiY29tcGxldGlvbkRhdGUiLCJzZXRTdGF0ZSIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiLCJuZXdJc3N1ZSIsIl90aGlzMyIsIm1ldGhvZCIsImhlYWRlcnMiLCJDb250ZW50LVR5cGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVwZGF0ZWRJc3N1ZSIsIm5ld0lzc3VlcyIsImNvbmNhdCIsIl9Jc3N1ZUZpbHRlcjIiLCJJc3N1ZVRhYmxlIiwiX0lzc3VlQWRkMiIsIklzc3VlUm93IiwiX2lkIiwidG9EYXRlU3RyaW5nIiwiZWZmb3J0IiwiaXNzdWVSb3dzIiwibWFwIiwia2V5IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiYUFDQSxTQUFBQSxFQUFBQyxHQU9BLElBTkEsSUFLQUMsRUFBQUMsRUFMQUMsRUFBQUgsRUFBQSxHQUNBSSxFQUFBSixFQUFBLEdBQ0FLLEVBQUFMLEVBQUEsR0FHQU0sRUFBQSxFQUFBQyxLQUNRRCxFQUFBSCxFQUFBSyxP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bGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXVxuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMTksMF0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBJc3N1ZUxpc3QgZnJvbSAnLi9Jc3N1ZUxpc3QuanN4JztcblxuY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudHMnKTtcblxuUmVhY3RET00ucmVuZGVyKDxJc3N1ZUxpc3QgLz4sIGNvbnRlbnROb2RlKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXNzdWVGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+VGhpcyBpcyBhIHBsYWNlaG9sZGVyIHRvIEZpbHRlciBJc3N1ZXMuPC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc3N1ZUFkZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgZm9ybSA9IGRvY3VtZW50LmZvcm1zLmlzc3VlQWRkO1xuXHRcdHRoaXMucHJvcHMuY3JlYXRlSXNzdWUoe1xuXHRcdFx0b3duZXI6IGZvcm0ub3duZXIudmFsdWUsXG5cdFx0XHR0aXRsZTogZm9ybS50aXRsZS52YWx1ZSxcblx0XHRcdHN0YXR1czogJ05ldycsXG5cdFx0XHRjcmVhdGVkOiBuZXcgRGF0ZSgpLFxuXHRcdH0pO1xuXHRcdC8vY2xlYXIgdGhlIGZvcm0gZm9yIHRoZSBuZXh0IGlucHV0XG5cdFx0Zm9ybS5vd25lci52YWx1ZSA9ICcnO1xuXHRcdGZvcm0udGl0bGUudmFsdWUgPSAnJztcblx0fVxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxmb3JtIG5hbWU9XCJpc3N1ZUFkZFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm93bmVyXCIgcGxhY2Vob2xkZXI9XCJPd25lclwiIC8+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIC8+XG5cdFx0XHRcdFx0PGJ1dHRvbj5BZGQ8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0IElzc3VlQWRkIGZyb20gJy4vSXNzdWVBZGQuanN4JztcbmltcG9ydCBJc3N1ZUZpbHRlciBmcm9tICcuL0lzc3VlRmlsdGVyLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge2lzc3VlczogW119O1xuXHRcdHRoaXMuY3JlYXRlSXNzdWUgPSB0aGlzLmNyZWF0ZUlzc3VlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmxvYWREYXRhKCk7XG5cdH1cblxuXHRsb2FkRGF0YSgpIHtcblx0XHRmZXRjaCgnL2FwaS9pc3N1ZXMvJykudGhlbihyZXNwb25zZSA9Pntcblx0XHRcdGlmKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdHJlc3BvbnNlLmpzb24oKS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdUb3RhbCBDb3VudCBvZiByZWNvcmRzOiAnLCBkYXRhLl9tZXRhZGF0YS50b3RhbF9jb3VudCk7XG5cdFx0XHRcdFx0ZGF0YS5yZWNvcmRzLmZvckVhY2goaXNzdWUgPT4ge1xuXHRcdFx0XHRcdFx0aXNzdWUuY3JlYXRlZCA9IG5ldyBEYXRlKGlzc3VlLmNyZWF0ZWQpO1xuXHRcdFx0XHRcdFx0aWYoaXNzdWUuY29tcGxldGlvbkRhdGUpIHtcblx0XHRcdFx0XHRcdFx0aXNzdWUuY29tcGxldGlvbkRhdGUgPSBuZXcgRGF0ZShpc3N1ZS5jb21wbGV0aW9uRGF0ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXNzdWVzOiBkYXRhLnJlY29yZHN9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXNwb25zZS5qc29uKCkudGhlbihlcnJvciA9PiB7XG5cdFx0XHRcdFx0YWxlcnQoJ0ZhaWxlZCB0byBmZXRjaCBpc3N1ZTogJyArIGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KS5jYXRjaChlcnIgPT4ge1xuXHRcdFx0YWxlcnQoXCJFcnJvciBpbiBmZXRjaGluZyBkYXRhIGZyb20gc2VydmVyXCIgKyBlcnIpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlSXNzdWUobmV3SXNzdWUpIHtcblx0XHRmZXRjaCgnL2FwaS9pc3N1ZXMvJywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShuZXdJc3N1ZSksXG5cdFx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0cmVzcG9uc2UuanNvbigpLnRoZW4odXBkYXRlZElzc3VlID0+IHtcblx0XHRcdFx0XHR1cGRhdGVkSXNzdWUuY3JlYXRlZCA9IG5ldyBEYXRlKHVwZGF0ZWRJc3N1ZS5jcmVhdGVkKTtcblx0XHRcdFx0XHRpZiAodXBkYXRlZElzc3VlLmNvbXBsZXRpb25EYXRlKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGVkSXNzdWUuY29tcGxldGlvbkRhdGUgPSBuZXcgRGF0ZSh1cGRhdGVkSXNzdWUuY29tcGxldGlvbkRhdGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBuZXdJc3N1ZXMgPSB0aGlzLnN0YXRlLmlzc3Vlcy5jb25jYXQodXBkYXRlZElzc3VlKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpc3N1ZXM6IG5ld0lzc3Vlc30pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3BvbnNlLmpzb24oKS50aGVuKGVycm9yID0+IHtcblx0XHRcdFx0XHRhbGVydCgnRmFpbGVkIHRvIGFkZCBpc3N1ZTogJyArIGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KS5jYXRjaChlcnIgPT4ge1xuXHRcdFx0YWxlcnQoJ0Vycm9yIGluIHNlbmRpbmcgRGF0YSB0byBzZXJ2ZXIgOiAnICsgZXJyLm1lc3NhZ2UpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDE+SXNzdWUgVHJhY2tlcjwvaDE+XG5cdFx0XHRcdDxJc3N1ZUZpbHRlciAvPlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8SXNzdWVUYWJsZSBpc3N1ZXM9e3RoaXMuc3RhdGUuaXNzdWVzfS8+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxJc3N1ZUFkZCBjcmVhdGVJc3N1ZSA9IHt0aGlzLmNyZWF0ZUlzc3VlfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IElzc3VlUm93ID0gKHByb3BzKSA9PiAoXG5cdDx0cj5cblx0XHQ8dGQ+e3Byb3BzLmlzc3VlLl9pZH08L3RkPlxuXHRcdDx0ZD57cHJvcHMuaXNzdWUuc3RhdHVzfTwvdGQ+XG5cdFx0PHRkPntwcm9wcy5pc3N1ZS5vd25lcn08L3RkPlxuXHRcdDx0ZD57cHJvcHMuaXNzdWUuY3JlYXRlZC50b0RhdGVTdHJpbmcoKX08L3RkPlxuXHRcdDx0ZD57cHJvcHMuaXNzdWUuZWZmb3J0fTwvdGQ+XG5cdFx0PHRkPntwcm9wcy5pc3N1ZS5jb21wbGV0aW9uRGF0ZSA/IHByb3BzLmlzc3VlLmNvbXBsZXRpb25EYXRlLnRvRGF0ZVN0cmluZygpIDogJyd9PC90ZD5cblx0XHQ8dGQ+e3Byb3BzLmlzc3VlLnRpdGxlfTwvdGQ+XG5cdDwvdHI+XG4pO1xuXG5mdW5jdGlvbiBJc3N1ZVRhYmxlKHByb3BzKSB7XG5cdGNvbnN0IGlzc3VlUm93cyA9IHByb3BzLmlzc3Vlcy5tYXAoaXNzdWUgPT4gPElzc3VlUm93IGtleT17aXNzdWUuX2lkfSBpc3N1ZT17aXNzdWV9Lz4pO1xuXHRyZXR1cm4oXG5cdFx0PHRhYmxlIGNsYXNzTmFtZT0nYm9yZGVyZWQtdGFibGUnPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGg+SWQ8L3RoPlxuXHRcdFx0XHQ8dGg+U3RhdHVzPC90aD5cblx0XHRcdFx0PHRoPk93bmVyPC90aD5cblx0XHRcdFx0PHRoPkNyZWF0ZWQ8L3RoPlxuXHRcdFx0XHQ8dGg+RWZmb3J0PC90aD5cblx0XHRcdFx0PHRoPkNvbXBsZXRpb24gZGF0ZTwvdGg+XG5cdFx0XHRcdDx0aD5UaXRsZTwvdGg+XG5cdFx0XHQ8L3RyPlxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keT5cblx0XHRcdHtpc3N1ZVJvd3N9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9