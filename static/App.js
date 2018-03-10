var contentNode = document.getElementById('contents');
var component = React.createElement(
  'h1',
  { className: 'heading' },
  ' Hello World There! '
);
ReactDOM.render(component, contentNode);