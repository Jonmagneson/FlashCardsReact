import React from 'react';
import Contacts from "./Contacts"
import { Container, Header, } from "semantic-ui-react"


class App extends React.Component {
  state = {
    contacts: [
      { id: 1, firstName: "Jerry", phone: "801-121-55656" },
      { id: 2, firstName: "Geroge", phone: "626-567-1872" },
      { id: 3, firstName: "Cosmo", phone: "802-134-9876" }
    ]
  };

  render() {
    return (
      <Container textAlign='center'>
        <Header as="h1">React Contact List</Header>
        <hr />
        <Contacts contactList={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
