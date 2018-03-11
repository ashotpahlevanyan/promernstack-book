const contentNode = document.getElementById('contents');

const continents = ['Africa','America','Asia','Australia','Europe'];
const br = <br />;
const message = continents.map(c => `Hello ${c}!`).join(' ');

const component = <p>{message}</p>;

ReactDOM.render(component, contentNode);