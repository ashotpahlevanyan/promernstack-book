!function(e){function t(t){for(var r,l,o=t[0],i=t[1],s=t[2],f=0,d=[];f<o.length;f++)l=o[f],a[l]&&d.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(c&&c(t);d.length;)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={1:0},u=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="./";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=i;u.push([70,0]),n()}({24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=o(n(0)),u=n(7),l=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("p",null,"This is a placeholder for editing issue ",this.props.match.params.id),a.default.createElement(u.Link,{to:"/issues"},"Back to issue list"))}}]),t}();t.default=i,i.propTypes={match:l.default.shape({params:l.default.shape({id:l.default.string})}).isRequired}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(0)),u=l(n(1));n(7);function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clearFilter=e.clearFilter.bind(e),e.setFilterOpen=e.setFilterOpen.bind(e),e.setFilterAssigned=e.setFilterAssigned.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"setFilterOpen",value:function(e){e.preventDefault(),this.props.setFilter({status:"Open"})}},{key:"setFilterAssigned",value:function(e){e.preventDefault(),this.props.setFilter({status:"Assigned"})}},{key:"clearFilter",value:function(e){e.preventDefault(),this.props.setFilter({})}},{key:"render",value:function(){var e=function(){return a.default.createElement("span",null," | ")};return a.default.createElement("div",null,a.default.createElement("a",{href:"#",onClick:this.clearFilter},"All Issues"),a.default.createElement(e,null),a.default.createElement("a",{href:"#",onClick:this.setFilterOpen},"Open Issues"),a.default.createElement(e,null),a.default.createElement("a",{href:"#",onClick:this.setFilterAssigned},"Assigned Issues"))}}]),t}();t.default=o,o.propTypes={setFilter:u.default.func.isRequired}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(0)),u=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleSubmit=e.handleSubmit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.issueAdd;this.props.createIssue({owner:t.owner.value,title:t.title.value,status:"New",created:new Date}),t.owner.value="",t.title.value=""}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("form",{name:"issueAdd",onSubmit:this.handleSubmit},a.default.createElement("input",{type:"text",name:"owner",placeholder:"Owner"}),a.default.createElement("input",{type:"text",name:"title",placeholder:"Title"}),a.default.createElement("button",null,"Add")))}}]),t}();t.default=o,o.propTypes={createIssue:u.default.func.isRequired}},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(0));n(27);var u=s(n(1)),l=n(7),o=s(n(26)),i=s(n(25));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={issues:[]},r.createIssue=r.createIssue.bind(r),r.loadData=r.loadData.bind(r),r.setFilter=r.setFilter.bind(r),r.setFilter({}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"setFilter",value:function(e){this.props.history.push({pathname:this.props.location.pathname,query:e})}},{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){var t=e.location,n=this.props.location;console.log(n),t.query!=n.query&&this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/issues"+this.props.location.search).then(function(t){t.ok?t.json().then(function(t){t.records.forEach(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate))}),e.setState({issues:t.records})}):t.json().then(function(e){alert("Failed to fetch issue: "+e.message)})}).catch(function(e){alert("Error in fetching data from server + "+e.message)})}},{key:"createIssue",value:function(e){var t=this;fetch("/api/issues/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){e.ok?e.json().then(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate));var n=t.state.issues.concat(e);t.setState({issues:n})}):e.json().then(function(e){alert("Failed to add issue: "+e.message)})}).catch(function(e){alert("Error in sending Data to server : "+e.message)})}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Issue Tracker"),a.default.createElement(i.default,{setFilter:this.setFilter}),a.default.createElement("hr",null),a.default.createElement(d,{issues:this.state.issues}),a.default.createElement("hr",null),a.default.createElement(o.default,{createIssue:this.createIssue}))}}]),t}(),f=function(e){return a.default.createElement("tr",null,a.default.createElement("td",null,a.default.createElement(l.Link,{to:"/issues/"+e.issue._id},e.issue._id.substr(-4))),a.default.createElement("td",null,e.issue.status),a.default.createElement("td",null,e.issue.owner),a.default.createElement("td",null,e.issue.created.toDateString()),a.default.createElement("td",null,e.issue.effort),a.default.createElement("td",null,e.issue.completionDate?e.issue.completionDate.toDateString():""),a.default.createElement("td",null,e.issue.title))};function d(e){var t=e.issues.map(function(e){return a.default.createElement(f,{key:e._id,issue:e})});return a.default.createElement("table",{className:"bordered-table"},a.default.createElement("thead",null,a.default.createElement("tr",null,a.default.createElement("th",null,"Id"),a.default.createElement("th",null,"Status"),a.default.createElement("th",null,"Owner"),a.default.createElement("th",null,"Created"),a.default.createElement("th",null,"Effort"),a.default.createElement("th",null,"Completion date"),a.default.createElement("th",null,"Title"))),a.default.createElement("tbody",null,t))}f.propTypes={issue:u.default.shape({owner:u.default.string.isRequired,title:u.default.string.isRequired,_id:u.default.string,status:u.default.string,created:u.default.string,effort:u.default.number,completionDate:u.default.string}).isRequired},d.propTypes={issues:u.default.arrayOf({}).isRequired},c.propTypes={location:u.default.shape({}).isRequired},t.default=c},69:function(e,t,n){"use strict";var r=i(n(0)),a=i(n(67)),u=n(7),l=i(n(28)),o=i(n(24));function i(e){return e&&e.__esModule?e:{default:e}}var s=document.getElementById("contents"),c=function(){return r.default.createElement("p",null,"Page Not Fount")};a.default.render(r.default.createElement(function(){return r.default.createElement(u.BrowserRouter,null,r.default.createElement(u.Switch,null,r.default.createElement(u.Redirect,{exact:!0,from:"/",to:"/issues"}),r.default.createElement(u.Route,{exact:!0,path:"/issues/",component:(0,u.withRouter)(l.default)}),r.default.createElement(u.Route,{exact:!0,path:"/issues/:id",component:o.default}),r.default.createElement(u.Route,{path:"*",component:c})))},null),s)},70:function(e,t,n){e.exports=n(69)}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lzc3VlRWRpdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0lzc3VlRmlsdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSXNzdWVBZGQuanN4Iiwid2VicGFjazovLy8uL3NyYy9Jc3N1ZUxpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIndlYnBhY2tKc29ucENhbGxiYWNrIiwiZGF0YSIsIm1vZHVsZUlkIiwiY2h1bmtJZCIsImNodW5rSWRzIiwibW9yZU1vZHVsZXMiLCJleGVjdXRlTW9kdWxlcyIsImkiLCJyZXNvbHZlcyIsImxlbmd0aCIsImluc3RhbGxlZENodW5rcyIsInB1c2giLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJtb2R1bGVzIiwicGFyZW50SnNvbnBGdW5jdGlvbiIsInNoaWZ0IiwiZGVmZXJyZWRNb2R1bGVzIiwiYXBwbHkiLCJjaGVja0RlZmVycmVkTW9kdWxlcyIsInJlc3VsdCIsImRlZmVycmVkTW9kdWxlIiwiZnVsbGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIjEiLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsInZhbHVlIiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInAiLCJqc29ucEFycmF5Iiwid2luZG93Iiwib2xkSnNvbnBGdW5jdGlvbiIsImJpbmQiLCJzbGljZSIsIl9yZWFjdFJvdXRlckRvbSIsIklzc3VlRWRpdCIsIl9yZWFjdDIiLCJkZWZhdWx0IiwiQ29tcG9uZW50IiwiY3JlYXRlRWxlbWVudCIsInRoaXMiLCJwcm9wcyIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJMaW5rIiwidG8iLCJwcm9wVHlwZXMiLCJfcHJvcFR5cGVzMiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIklzc3VlRmlsdGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9fcHJvdG9fXyIsImdldFByb3RvdHlwZU9mIiwiY2xlYXJGaWx0ZXIiLCJzZXRGaWx0ZXJPcGVuIiwic2V0RmlsdGVyQXNzaWduZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRGaWx0ZXIiLCJzdGF0dXMiLCJTZXBhcmF0b3IiLCJocmVmIiwib25DbGljayIsImZ1bmMiLCJJc3N1ZUFkZCIsImhhbmRsZVN1Ym1pdCIsImZvcm0iLCJkb2N1bWVudCIsImZvcm1zIiwiaXNzdWVBZGQiLCJjcmVhdGVJc3N1ZSIsIm93bmVyIiwidGl0bGUiLCJjcmVhdGVkIiwiRGF0ZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiSXNzdWVMaXN0IiwiY29udGV4dCIsInN0YXRlIiwiaXNzdWVzIiwibG9hZERhdGEiLCJxdWVyeSIsImhpc3RvcnkiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicHJldlByb3BzIiwib2xkUXVlcnkiLCJuZXdRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJfdGhpczIiLCJmZXRjaCIsInNlYXJjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsInJlY29yZHMiLCJmb3JFYWNoIiwiaXNzdWUiLCJjb21wbGV0aW9uRGF0ZSIsInNldFN0YXRlIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJjYXRjaCIsImVyciIsIm5ld0lzc3VlIiwiX3RoaXMzIiwibWV0aG9kIiwiaGVhZGVycyIsIkNvbnRlbnQtVHlwZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlZElzc3VlIiwibmV3SXNzdWVzIiwiY29uY2F0IiwiX0lzc3VlRmlsdGVyMiIsIklzc3VlVGFibGUiLCJfSXNzdWVBZGQyIiwiSXNzdWVSb3ciLCJfaWQiLCJzdWJzdHIiLCJ0b0RhdGVTdHJpbmciLCJlZmZvcnQiLCJpc3N1ZVJvd3MiLCJtYXAiLCJrZXkiLCJjbGFzc05hbWUiLCJudW1iZXIiLCJhcnJheU9mIiwiY29udGVudE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIk5vTWF0Y2giLCJfcmVhY3REb20yIiwicmVuZGVyIiwiQnJvd3NlclJvdXRlciIsIlN3aXRjaCIsIlJlZGlyZWN0IiwiZXhhY3QiLCJmcm9tIiwiUm91dGUiLCJwYXRoIiwiY29tcG9uZW50Iiwid2l0aFJvdXRlciIsIl9Jc3N1ZUxpc3QyIiwiX0lzc3VlRWRpdDIiXSwibWFwcGluZ3MiOiJhQUNBLFNBQUFBLEVBQUFDLEdBT0EsSUFOQSxJQUtBQyxFQUFBQyxFQUxBQyxFQUFBSCxFQUFBLEdBQ0FJLEVBQUFKLEVBQUEsR0FDQUssRUFBQUwsRUFBQSxHQUdBTSxFQUFBLEVBQUFDLEtBQ1FELEVBQUFILEVBQUFLLE9BQW9CRixJQUM1QkosRUFBQUMsRUFBQUcsR0FDQUcsRUFBQVAsSUFDQUssRUFBQUcsS0FBQUQsRUFBQVAsR0FBQSxJQUVBTyxFQUFBUCxHQUFBLEVBRUEsSUFBQUQsS0FBQUcsRUFDQU8sT0FBQUMsVUFBQUMsZUFBQUMsS0FBQVYsRUFBQUgsS0FDQWMsRUFBQWQsR0FBQUcsRUFBQUgsSUFJQSxJQURBZSxLQUFBaEIsR0FDQU8sRUFBQUMsUUFDQUQsRUFBQVUsT0FBQVYsR0FPQSxPQUhBVyxFQUFBUixLQUFBUyxNQUFBRCxFQUFBYixPQUdBZSxJQUVBLFNBQUFBLElBRUEsSUFEQSxJQUFBQyxFQUNBZixFQUFBLEVBQWlCQSxFQUFBWSxFQUFBVixPQUE0QkYsSUFBQSxDQUc3QyxJQUZBLElBQUFnQixFQUFBSixFQUFBWixHQUNBaUIsR0FBQSxFQUNBQyxFQUFBLEVBQWtCQSxFQUFBRixFQUFBZCxPQUEyQmdCLElBQUEsQ0FDN0MsSUFBQUMsRUFBQUgsRUFBQUUsR0FDQSxJQUFBZixFQUFBZ0IsS0FB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c3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdXG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsbGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsbGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFs3MCwwXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc3N1ZUVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+VGhpcyBpcyBhIHBsYWNlaG9sZGVyIGZvciBlZGl0aW5nIGlzc3VlIHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZH08L3A+XG4gICAgICAgIDxMaW5rIHRvPVwiL2lzc3Vlc1wiPkJhY2sgdG8gaXNzdWUgbGlzdDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSXNzdWVFZGl0LnByb3BUeXBlcyA9IHtcbiAgbWF0Y2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGFyYW1zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuIiwiXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc3N1ZUZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2xlYXJGaWx0ZXIgPSB0aGlzLmNsZWFyRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGaWx0ZXJPcGVuID0gdGhpcy5zZXRGaWx0ZXJPcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGaWx0ZXJBc3NpZ25lZCA9IHRoaXMuc2V0RmlsdGVyQXNzaWduZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldEZpbHRlck9wZW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnNldEZpbHRlcih7c3RhdHVzOiAnT3Blbid9KTtcbiAgfVxuICBzZXRGaWx0ZXJBc3NpZ25lZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0RmlsdGVyKHtzdGF0dXM6ICdBc3NpZ25lZCd9KTtcbiAgfVxuICBjbGVhckZpbHRlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuc2V0RmlsdGVyKHt9KTtcbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgU2VwYXJhdG9yID0gKCkgPT4gPHNwYW4+IHwgPC9zcGFuPjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj0nIycgb25DbGljaz17dGhpcy5jbGVhckZpbHRlcn0+QWxsIElzc3VlczwvYT5cbiAgICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXt0aGlzLnNldEZpbHRlck9wZW59PlxuICAgICAgICAgIE9wZW4gSXNzdWVzXG4gICAgICAgIDwvYT5cbiAgICAgICAgPFNlcGFyYXRvci8+XG4gICAgICAgIDxhIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuc2V0RmlsdGVyQXNzaWduZWR9PkFzc2lnbmVkIElzc3VlczwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSXNzdWVGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBzZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gICd1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtcy5pc3N1ZUFkZDtcbiAgICB0aGlzLnByb3BzLmNyZWF0ZUlzc3VlKHtcbiAgICAgIG93bmVyOiBmb3JtLm93bmVyLnZhbHVlLFxuICAgICAgdGl0bGU6IGZvcm0udGl0bGUudmFsdWUsXG4gICAgICBzdGF0dXM6ICdOZXcnLFxuICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICB9KTtcbiAgICAvLyBjbGVhciB0aGUgZm9ybSBmb3IgdGhlIG5leHQgaW5wdXRcbiAgICBmb3JtLm93bmVyLnZhbHVlID0gJyc7XG4gICAgZm9ybS50aXRsZS52YWx1ZSA9ICcnO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gbmFtZT1cImlzc3VlQWRkXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwib3duZXJcIiBwbGFjZWhvbGRlcj1cIk93bmVyXCIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgLz5cbiAgICAgICAgICA8YnV0dG9uPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbklzc3VlQWRkLnByb3BUeXBlcyA9IHtcbiAgY3JlYXRlSXNzdWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBJc3N1ZUFkZCBmcm9tICcuL0lzc3VlQWRkLmpzeCc7XG5pbXBvcnQgSXNzdWVGaWx0ZXIgZnJvbSAnLi9Jc3N1ZUZpbHRlci5qc3gnO1xuXG5jbGFzcyBJc3N1ZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc3N1ZXM6IFtdLFxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUlzc3VlID0gdGhpcy5jcmVhdGVJc3N1ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZERhdGEgPSB0aGlzLmxvYWREYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGaWx0ZXIgPSB0aGlzLnNldEZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0RmlsdGVyKHt9KTtcbiAgfVxuXG4gIHNldEZpbHRlcihxdWVyeSkge1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHtwYXRobmFtZTogdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSwgcXVlcnl9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCBvbGRRdWVyeSA9IHByZXZQcm9wcy5sb2NhdGlvbjtcbiAgICBjb25zdCBuZXdRdWVyeSA9IHRoaXMucHJvcHMubG9jYXRpb247XG4gICAgY29uc29sZS5sb2cobmV3UXVlcnkpO1xuICAgIGlmKG9sZFF1ZXJ5LnF1ZXJ5ID09IG5ld1F1ZXJ5LnF1ZXJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkRGF0YSgpO1xuICB9XG5cbiAgbG9hZERhdGEoKSB7XG4gICAgZmV0Y2goYC9hcGkvaXNzdWVzJHt0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdUb3RhbCBDb3VudCBvZiByZWNvcmRzOiAnLCBkYXRhLl9tZXRhZGF0YS50b3RhbF9jb3VudCk7XG4gICAgICAgICAgZGF0YS5yZWNvcmRzLmZvckVhY2goKGlzc3VlKSA9PiB7XG4gICAgICAgICAgICBpc3N1ZS5jcmVhdGVkID0gbmV3IERhdGUoaXNzdWUuY3JlYXRlZCk7XG4gICAgICAgICAgICBpZiAoaXNzdWUuY29tcGxldGlvbkRhdGUpIHtcbiAgICAgICAgICAgICAgaXNzdWUuY29tcGxldGlvbkRhdGUgPSBuZXcgRGF0ZShpc3N1ZS5jb21wbGV0aW9uRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzc3VlczogZGF0YS5yZWNvcmRzIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChlcnJvcikgPT4ge1xuICAgICAgICAgIGFsZXJ0KGBGYWlsZWQgdG8gZmV0Y2ggaXNzdWU6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgYWxlcnQoYEVycm9yIGluIGZldGNoaW5nIGRhdGEgZnJvbSBzZXJ2ZXIgKyAke2Vyci5tZXNzYWdlfWApO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlSXNzdWUobmV3SXNzdWUpIHtcbiAgICBmZXRjaCgnL2FwaS9pc3N1ZXMvJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0lzc3VlKSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKCh1cGRhdGVkSXNzdWUpID0+IHtcbiAgICAgICAgICB1cGRhdGVkSXNzdWUuY3JlYXRlZCA9IG5ldyBEYXRlKHVwZGF0ZWRJc3N1ZS5jcmVhdGVkKTtcbiAgICAgICAgICBpZiAodXBkYXRlZElzc3VlLmNvbXBsZXRpb25EYXRlKSB7XG4gICAgICAgICAgICB1cGRhdGVkSXNzdWUuY29tcGxldGlvbkRhdGUgPSBuZXcgRGF0ZSh1cGRhdGVkSXNzdWUuY29tcGxldGlvbkRhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdJc3N1ZXMgPSB0aGlzLnN0YXRlLmlzc3Vlcy5jb25jYXQodXBkYXRlZElzc3VlKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNzdWVzOiBuZXdJc3N1ZXMgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoYEZhaWxlZCB0byBhZGQgaXNzdWU6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgYWxlcnQoYEVycm9yIGluIHNlbmRpbmcgRGF0YSB0byBzZXJ2ZXIgOiAke2Vyci5tZXNzYWdlfWApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SXNzdWUgVHJhY2tlcjwvaDE+XG4gICAgICAgIDxJc3N1ZUZpbHRlciBzZXRGaWx0ZXI9e3RoaXMuc2V0RmlsdGVyfS8+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8SXNzdWVUYWJsZSBpc3N1ZXM9e3RoaXMuc3RhdGUuaXNzdWVzfSAvPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPElzc3VlQWRkIGNyZWF0ZUlzc3VlPXt0aGlzLmNyZWF0ZUlzc3VlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBJc3N1ZVJvdyA9IHByb3BzID0+IChcbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIDxMaW5rIHRvPXtgL2lzc3Vlcy8ke3Byb3BzLmlzc3VlLl9pZH1gfT57cHJvcHMuaXNzdWUuX2lkLnN1YnN0cigtNCl9PC9MaW5rPlxuICAgIDwvdGQ+XG4gICAgPHRkPntwcm9wcy5pc3N1ZS5zdGF0dXN9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmlzc3VlLm93bmVyfTwvdGQ+XG4gICAgPHRkPntwcm9wcy5pc3N1ZS5jcmVhdGVkLnRvRGF0ZVN0cmluZygpfTwvdGQ+XG4gICAgPHRkPntwcm9wcy5pc3N1ZS5lZmZvcnR9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmlzc3VlLmNvbXBsZXRpb25EYXRlID8gcHJvcHMuaXNzdWUuY29tcGxldGlvbkRhdGUudG9EYXRlU3RyaW5nKCkgOiAnJ308L3RkPlxuICAgIDx0ZD57cHJvcHMuaXNzdWUudGl0bGV9PC90ZD5cbiAgPC90cj5cbik7XG5cbmZ1bmN0aW9uIElzc3VlVGFibGUocHJvcHMpIHtcbiAgY29uc3QgaXNzdWVSb3dzID0gcHJvcHMuaXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVSb3cga2V5PXtpc3N1ZS5faWR9IGlzc3VlPXtpc3N1ZX0gLz4pO1xuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJib3JkZXJlZC10YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPklkPC90aD5cbiAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICAgICAgICA8dGg+T3duZXI8L3RoPlxuICAgICAgICAgIDx0aD5DcmVhdGVkPC90aD5cbiAgICAgICAgICA8dGg+RWZmb3J0PC90aD5cbiAgICAgICAgICA8dGg+Q29tcGxldGlvbiBkYXRlPC90aD5cbiAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2lzc3VlUm93c31cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cblxuSXNzdWVSb3cucHJvcFR5cGVzID0ge1xuICBpc3N1ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvd25lcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgX2lkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVmZm9ydDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb21wbGV0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbklzc3VlVGFibGUucHJvcFR5cGVzID0ge1xuICBpc3N1ZXM6IFByb3BUeXBlcy5hcnJheU9mKHtcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbklzc3VlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICB9KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSXNzdWVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSXNzdWVMaXN0IGZyb20gJy4vSXNzdWVMaXN0LmpzeCc7XG5pbXBvcnQgSXNzdWVFZGl0IGZyb20gJy4vSXNzdWVFZGl0LmpzeCc7XG5cbmNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnRzJyk7XG5jb25zdCBOb01hdGNoID0gKCkgPT4gPHA+UGFnZSBOb3QgRm91bnQ8L3A+O1xuXG5jb25zdCBSb3V0ZWRBcHAgPSAoKSA9PiAoXG4gIDxSb3V0ZXI+XG4gICAgPFN3aXRjaD5cbiAgICAgIDxSZWRpcmVjdCBleGFjdCBmcm9tPVwiL1wiIHRvPVwiL2lzc3Vlc1wiIC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9pc3N1ZXMvXCIgY29tcG9uZW50PXt3aXRoUm91dGVyKElzc3VlTGlzdCl9IC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9pc3N1ZXMvOmlkXCIgY29tcG9uZW50PXtJc3N1ZUVkaXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vTWF0Y2h9IC8+XG4gICAgPC9Td2l0Y2g+XG4gIDwvUm91dGVyPlxuKTtcblxuXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlZEFwcCAvPiwgY29udGVudE5vZGUpO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==