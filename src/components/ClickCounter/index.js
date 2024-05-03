// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onButtonClick = () => {
    // console.log(this)
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The Button has been clicked <span className="number">{count}</span>{' '}
          times
        </h1>
        <div className="inner-div">
          <p>Click the button to increase the count</p>
          <button
            type="button"
            className="click-me-button"
            onClick={this.onButtonClick}
          >
            Click Me
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
