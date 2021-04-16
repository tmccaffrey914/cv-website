import React from 'react';
import {FlashingStar} from './Stars.jsx';
import astronaut from "../public/astronaut.png";
import moon from "../public/moon.png";
import './scss/main.scss';

const NUMBER_OF_FLASHING_STARS = 40;


class VisualInterlude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dustPosition: 0,
      astronautPosition: 0
    };
    this.dust = React.createRef();
    this.astronaut = React.createRef();
  }

  componentDidMount() {
    const dustCoordinates = this.dust.current.getBoundingClientRect();
    const astronautCoordinates = this.astronaut.current.getBoundingClientRect();
    this.setState({
      dustPosition: dustCoordinates.y,
      astronautPosition: astronautCoordinates.y
    });
  }

  resolveDustTransformation(factorOfTranslation, direction) {
    let difference = (this.props.scrollPosition - this.state.dustPosition) * direction;
    return `translate(${difference/(factorOfTranslation/2)}rem, ${difference/factorOfTranslation}rem)`
  }

  resolveAstronautTransformation() {
    let difference = this.props.scrollPosition - this.state.astronautPosition;
    return `translate(${difference/50}rem, ${difference/100}rem) rotate(${difference/15}deg)`
  }

  render() {
    return (
      <section class="interlude" onMouseMove={this.handleMouseMove}>
        {
          [...Array(NUMBER_OF_FLASHING_STARS)].map( (star, index) => {
            return <FlashingStar number={index} cursorX={this.props.cursorX} cursorY={this.props.cursorY}/>
          })
        }
        <img ref={this.dust} class="moon" style={{top: "30%", left: "25%", maxWidth: "1%", maxHeight: "1%", transform: this.resolveDustTransformation(125, 1)}} src={moon} alt="moon"/>
        <img ref={this.dust} class="moon" style={{top: "26%", left: "26%", maxWidth: "2%", maxHeight: "2%", transform: this.resolveDustTransformation(150, 1)}} src={moon} alt="moon"/>
        <img ref={this.dust} class="moon" style={{top: "24%", left: "24%", maxWidth: "1%", maxHeight: "1%", transform: this.resolveDustTransformation(110, 1)}} src={moon} alt="moon"/>
        <img ref={this.astronaut} class="astronaut" style={{transform: this.resolveAstronautTransformation()}} src={astronaut} alt="astronaut"/>
      </section>
    );
  }

}

export default VisualInterlude;
