import { Component } from 'react'
import renderProps from '../utils/renderProps'
import noop from '../utils/noop'

class State extends Component {
  state = {
    ...this.props.initial,
  }

  _setState = (updater, cb = noop) => {
    this.setState(updater, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state)
      }
      cb()
    })
  }

  render() {
    return renderProps(this.props, {
      state: this.state,
      setState: this._setState,
    })
  }
}

export default State
