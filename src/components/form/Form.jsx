import React, { Component } from 'react';
import {FormContainer, Label, Input, SubmitButton} from './Form.styled'

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    if (this.isContactExists(name)) {
      alert(`Contact with name "${name}" already exists!`);
      return;
    }

    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  isContactExists = (name) => {
    return this.props.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={this.handleNameChange}
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            value={number}
            onChange={this.handleNumberChange}
          />
        </Label>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </FormContainer>
    );
  }
}

export default Form;