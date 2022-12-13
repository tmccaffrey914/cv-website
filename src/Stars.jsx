import React from 'react';
import './scss/main.scss';

class FlashingStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starXPosition: 0,
      starYPosition: 0
    }
    this.selector = React.createRef();
    this.starFlash = this.starFlash.bind(this);
  }

  componentDidMount = () => {
    const starCoordinates = this.selector.current.getBoundingClientRect();
    this.setState({
      starXPosition: starCoordinates.x,
      starYPosition: starCoordinates.y
    });
  };

  starFlash(cursorXPosition, cursorYPosition) {
    const xCursorProximity = this.state.starXPosition - cursorXPosition;
    const yCursorProximity = this.state.starYPosition - cursorYPosition;
    let averageProximity = xCursorProximity + yCursorProximity / 2;

    if (averageProximity < 10 && averageProximity > -10) {
      if (Math.round(averageProximity) > 0) {
        let flashSize = 7 - averageProximity;
        return {
          boxShadow: `0 0 ${flashSize}px ${flashSize / 2}px #FFF`
        }
      } else {
        let flashSize = 7 + averageProximity;
        return {
          boxShadow: `0 0 ${flashSize}px ${flashSize / 2}px #FFF`
        }
      }

    } else {
      let flashSize = 2;
      return {
        boxShadow: `0 0 ${flashSize}px ${flashSize / 2}px #FFF`
      }
    }
  }

  render() {
    return (
        <div class={`star-flashing-${this.props.number}`} ref={this.selector}>
          <div class="star" style={this.starFlash(this.props.cursorX, this.props.cursorY)}/>
        </div>
    );
  }
}


function ShootingStar(scrollPosition) {
  return <div class="star">
    <div class="star-shooting" style={{width: scrollPosition < 200 ? `${scrollPosition / 10}rem` : "20.0rem"}}/>
  </div>;
}


function SpinningStar(starNumber, scrollPosition) {
  return <div class={`star-spinning-${starNumber}`}>
    <div class="underlay" style={{transform: `rotate(${scrollPosition % 360}deg)`}} />
    <div class="overlay"/>
  </div>;
}


export {FlashingStar, ShootingStar, SpinningStar};
