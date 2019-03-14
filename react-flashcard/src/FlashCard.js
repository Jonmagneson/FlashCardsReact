import React from "react";
import { Button, Table, Card, } from "semantic-ui-react";
import Toggle from "./Toggle"

const FlashCard = ({ id, cardFront, cardBack, remove }) => (
  // <Table.Row>
  //   <Table.Cell>{cardFront}</Table.Cell>
  //   <Table.Cell>{cardBack}</Table.Cell>
  //   <Table.Cell>
  //     <Button color="blue" onClick={() => remove(id)}>Delete</Button>  
  //   </Table.Cell>
  // </Table.Row>


  <Card.Group>
    <Card>
      <Card.Content>
        {cardFront}
        <hr />
      </Card.Content>
      <Button.Group size="tiny">
        <Toggle>
          <Card.Content>
            <h3>{cardBack}</h3>
          </Card.Content>
          <hr />
          <Button color="blue">Edit</Button>
          <Button color="black" onClick={() => remove(id)}>Delete</Button>  
        </Toggle>
      </Button.Group>
    </Card>
  </Card.Group>
)

export default FlashCard;