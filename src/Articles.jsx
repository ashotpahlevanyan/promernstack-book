import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const articles = [
  { title: 'First Article', key: 'first', text: 'Hello from First article' },
  { title: 'Second Article', key: 'second', text: 'Hello from Second article' },
  { title: 'Third Article', key: 'third', text: 'Hello from Third article' },
  { title: 'Fourth Article', key: 'fourth', text: 'Hello from Fourth article' },
];

class Article extends React.Component {
  render() {
    const article = articles.filter(art => art.key === this.props.match.params.articleId)[0];
    let template;
    if (article) {
      template = (
        <div>
          <h3 className="title">{article.title}</h3>
          <hr />
          <p className="text">{article.text}</p>
        </div>
      );
    } else {
      template = <div>No Article with that key</div>;
    }
    return template;
  }
}

const Articles = ({ match }) => (
  <div className="articles">
    <h2>Articles section</h2>
    <ul className="articles">
      {
        articles.map(article => (
          <li className="article" key={article.key}>
            <Link to={`${match.url}/${article.key}`}>{article.title}</Link>
          </li>
        ))
      }
    </ul>
    <Route path={`${match.url}/:articleId`} component={Article} />
  </div>
);

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      articleId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

Articles.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Articles;
