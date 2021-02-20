import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import HighlightedText from './HighlightedText.jsx';
import {AboutInfoAndProjects, MoreProjects, Timeline} from './Timeline.jsx';
import VisualInterlude from './VisualInterlude.jsx';
import './scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cursorX: 0,
      cursorY: 0,
      scrollPosition: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    this.setState({
      scrollPosition: window.pageYOffset
    });
  }

  handleMouseMove(event) {
    this.setState({
      cursorX: event.pageX,
      cursorY: event.pageY
    });
  }

  render() {
    return (
      <div className="App" onMouseMove={this.handleMouseMove}>
        {Header(this.state.scrollPosition, this.state.cursorX, this.state.cursorY)}
        <main>
          <section class="highlight">
            <HighlightedText scrollPosition={this.state.scrollPosition}>
              Hey, thanks for visiting my portfolio website!
              I am a freelance Designer, Engineer and Problem Solver.
              Currently, I am working for IBM Cloud as an SRE but I have experience in
              Front & Backend Software Engineering, Web Design and DevOps.
            </HighlightedText>
          </section>
          <section class="timeline-section">
            <Timeline/>
            <AboutInfoAndProjects/>
          </section>
          <VisualInterlude scrollPosition={this.state.scrollPosition} cursorX={this.state.cursorX} cursorY={this.state.cursorY}/>
          <section class="projects-panel">
            <MoreProjects/>
          </section>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
