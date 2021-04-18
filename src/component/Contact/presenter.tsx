import React from 'react';
import styled from 'styled-components';

const ContactPresenter = () => {
  return (
    <Container id='contact'>
      <TouchText>Get In Touch</TouchText>
      <ContactForm id='contact-form'>
        <form method='POST' action='https://formspree.io/f/xpzkwpoy'>
          <TextInput type='hidden' name='_subject' value='Contact request from personal website' />
          <TextInput type='email' name='_replyto' placeholder='Your email' required />
          <TextArea name='message' placeholder='Your message' required></TextArea>
          <SendButton type='submit'>Send</SendButton>
        </form>
      </ContactForm>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 15px;
  background: #3498db;
  text-align: center;
`;

const TouchText = styled.h2`
  margin: 0 0 15px 0;
  color: #fff;
  font-weight: 500;
`;

const ContactForm = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const TextInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  background: #333399;
  color: #fff;
  transition: 0.5s, ease, all;

  &:focus {
    outline: none;
    background: #333399;
  }
`;

const TextArea = styled.textarea`
  height: 150px;
  resize: none;
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  background: #3333ff;
  color: #fff;
  transition: 0.5s, ease, all;

  &:focus {
    outline: none;
    background: #3333ff;
  }
`;

const SendButton = styled.button`
  display: block;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  color: #3498db;
  font-weight: 700;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.5s, ease, all;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default ContactPresenter;

// $base-color: #3498db;
// $base-color-hover: darken($base-color, 10%);

// // Define background colors
// $background: #fff;
// $background-alt: #f2f2f5;

// // Define border colors
// $border: #dcd9d9;

// // Define text colors
// $heading: #374054;
// $text: #74808a;
