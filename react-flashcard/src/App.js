import React from 'react';
import FlashForm from "./FlashForm";
import FlashCards from "./FlashCards"
import { Container, Header, Button, Icon } from "semantic-ui-react"; 


class App extends React.Component {
  state = {
    flashCards: [
      { id: 1, cardFront: "FRONT", cardBack: "BACK"},
      { id: 2, cardFront: "Face", cardBack: "Butt"},
    ],
    showForm: false,
  }

  getId = () => Math.floor((1 + Math.random()) * 10000);
  
  addCard = (cardInfo) => {
    let flashcard = { id: this.getId(), ...cardInfo, };
    this.setState({ flashCards: [...this.state.flashCards, flashcard], });
  };

  removeCard = (id) => {
    let {flashCards} = this.state
    const remaining = flashCards.filter( flashCards => {
      return (flashCards.id !== id)
    })
    this.setState({ flashCards: [...remaining]})
  };

  toggleForm = () => this.setState({ showForm: ! this.state.showForm, });


  render() {
    const { showForm, } = this.state
    return (
      <Container textAlign="center" style={{ paddingTop: "25px"}}>
        <Header as="h1">React FlashCards </Header>
        <br />
        
        
        <FlashCards 
          flashCards={this.state.flashCards} 
          remove={this.removeCard} 
        />
        <Button icon color="blue" onClick={this.toggleForm}><p>new card</p>
          <Icon name={`angle double ${showForm ? "up" : "down"}`} />
        </Button>
        { showForm ? <FlashForm addCard={this.addCard} /> : null }           
        <br />
      </Container>
    );
  }
}

export default App;
