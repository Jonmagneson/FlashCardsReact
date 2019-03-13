import React from "react";
import FlashCard from "./FlashCard"
import { Button, Table, } from "semantic-ui-react";

const FlashCards = ({ flashCards, remove }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Front</Table.HeaderCell>
        <Table.HeaderCell>Back</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

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