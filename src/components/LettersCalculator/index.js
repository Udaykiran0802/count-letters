import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onCountLetters = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="calculator-section">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <form className="form-container">
              <label htmlFor="searchInput" className="para">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="searchInput"
                onChange={this.onCountLetters}
                placeholder="Enter the phrase"
                type="text"
              />
            </form>
            <p className="count-letters">No.of letters: {searchInput.length}</p>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image-size"
              alt="img"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
