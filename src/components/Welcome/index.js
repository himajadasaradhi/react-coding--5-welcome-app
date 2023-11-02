// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  changeStatus = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      this.setState(prevState => ({status: 'Subscribed'}))
    } else {
      this.setState(prevState => ({status: 'Subscribe'}))
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thankyou! Happy Learning</p>
        <button type="button" className="button" onClick={this.changeStatus}>
          {status}
        </button>
      </div>
    )
  }
}
export default Welcome
