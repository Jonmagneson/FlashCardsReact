import React from 'react'
import { Button, Table, } from "semantic-ui-react"

const Contacts = ({ contactList, }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>        
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contactList.map( (contact, index) => (
          <Table.Row key={contact.id}>
            <Table.Cell>{ contact.name }</Table.Cell>        
            <Table.Cell>{ contact.phone }</Table.Cell>        
            <Table.Cell>
              <Button color="blue">Delete</Button>  
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)

export default Contacts