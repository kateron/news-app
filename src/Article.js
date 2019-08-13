import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className='article'>
        <Card.Img variant='top' src={this.props.urlToImage} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <a href={this.props.url}>
            <span className='badge badge-primary'>
              {this.props.source.name}
            </span>
          </a>
          <Card.Text className='article-description font-weight-light'>
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>
            Published at: {this.props.publishedAt}
          </small>
        </Card.Footer>
      </Card>
    );
  }
}

export default Article;
