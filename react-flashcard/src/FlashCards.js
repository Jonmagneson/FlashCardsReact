import React from "react";
import FlashCard from "./FlashCard"
import { Table, } from "semantic-ui-react";


const FlashCards = ({ flashCards, remove }) => (
  <Table color="green">
    <Table.Header>
      <h1>"Let's Flash Some Cars! (I mean cards...)"</h1>
    </Table.Header>
      <br />
    <Table.Body>
      {
        flashCards.map( (flashcard, index) => (
          <FlashCard key={index} {...flashcard} remove={remove}/>
          //                    ...speads out contacts to (id) (name) (phone) in seperated objects
        ))
      }
    </Table.Body>
  </Table>
)

export default FlashCards;