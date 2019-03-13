import React from "react";
import { Button, Table, Card, } from "semantic-ui-react";

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
        <Card.Description>
          <hr />
          {cardBack}
        </Card.Description>
      </Card.Content>
      <Button.Group>
      <Button color="instagram" onClick={Toggle}>Show</Button>
      <Button color="olive">Edit</Button>
      <Button color="black" onClick={() => remove(id)}>Delete</Button>  
      </Button.Group>
    </Card>
  </Card.Group>
)
{/* <Button icon color="blue" onClick={this.toggleForm}>
          <Icon name={`angle double ${showForm ? "up" : "down"}`} />
        </Button> */}
export default FlashCard;