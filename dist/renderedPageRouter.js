'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _HelloWorld = require('../src/HelloWorld.jsx');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _template = require('template.js');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderedPageRouter = new _express2.default();

renderedPageRouter.get('*', (req, res) => {
  const html = _server.renderToString;
});
//# sourceMappingURL=renderedPageRouter.js.map