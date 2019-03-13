import React from "react";
import { Form, } from "semantic-ui-react";

class FlashForm extends React.Component {
  state = { cardFront: "", cardBack: "", };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state);
    this.setState({ cardFront: "", cardBack: "", });
  } 


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Front" 
            placeholder="Enter Text" 
            name="cardFront" 
            value={this.state.cardFront} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Back" 
            placeholder="Enter Text" 
            name="cardBack" 
            value={this.state.cardBack} 
            onChange={this.handleChange}
          />
          <Form.Button color="purple">Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default FlashForm;