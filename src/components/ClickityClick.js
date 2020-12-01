import React from 'react';
// import ReactDOM from 'react-dom';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled
        }
    }, () => (console.log(this.state.toggled)))
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.toggled ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;

// ReactDOM.render(<ClickityClick />, document.getElementById('root'));