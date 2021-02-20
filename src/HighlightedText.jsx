import React from 'react';
import './scss/main.scss';

class HighlightedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
    this.selector = React.createRef();
  }

  componentDidMount() {
    const coordinates = this.selector.current.getBoundingClientRect();
    this.setState({position: (coordinates.y + coordinates.x) / 2});
  }

  render() {
    return (
      <div ref={this.selector} class="u-center-text">
        <span class="highlight-position highlight-text" style={{textShadow: `0.1rem ${((this.state.position - this.props.scrollPosition) / 50) / 10}rem 16px rgba(1, 17, 37, 1)`}}>
          {this.props.children}
        </span>
      </div>
    );
  }

}

export default HighlightedText;
