'use strict';

var contentNode = document.getElementById('contents');

var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var br = React.createElement('br', null);
var message = continents.map(function (c) {
  return 'Hello ' + c + '!';
}).join('' + br);

var component = React.createElement(
  'p',
  null,
  message
);

ReactDOM.render(component, contentNode);