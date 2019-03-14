import React from 'react'
import {Button} from 'semantic-ui-react'

export default class Toggle extends React.Component {
  state = {
    on: false,
  }

  

  toggle = () => {
    this.setState ({
      on: !this.state.on
    })
  }
  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <Button color="teal" onClick={this.toggle}>Show/Hide</Button>        
      </div>
    )
  }
}
