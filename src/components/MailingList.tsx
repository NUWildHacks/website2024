import { useState, useRef, FormEvent, ChangeEvent } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

const Name = styled.div`
  display: flex;
`;

const Input = styled.input`
  background-color: #d9d9d9;
  border: none;
  height: 40px;
  border-radius: 10px;
  color: var(--darkgreen);
  text-transform: lowercase;

  padding-left: 20px;
  /* width: 85%;
  background-color: #d9d9d9;
  border: none;
  height: 50px;
  border-radius: 10px;

  color: var(--darkgreen);
  padding-left: 20px;
  text-transform: lowercase;
  font-size: 15px;

  &::placeholder {
    color: #9e9e9e;
    text-decoration: underline;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 15px;
  }

  &:focus {
    outline-color: var(--lightgreen);
  } */
`;

export default function MailingList() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  //   const [success, setSuccess] = useState('');

  const api = 'https://api.dilanxd.com/wildhacks/subscribe';
  const form = useRef<HTMLFormElement>(null);

  const subscriberData = {
    firstName: first,
    lastName: last,
    email: email,
  };

  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscriberData),
    };

    fetch(api, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSuccess(data.success);
      })
      .catch((error) => {
        console.log(error);
        setSuccess('error');
      });
  };

  return (
    <Form ref={form} onSubmit={subscribe}>
      <Name>
        <Input
          autoComplete="off"
          placeholder="First name here..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirst(e.target.value)
          }
          value={first}
          required
        ></Input>
        <Input
          autoComplete="off"
          placeholder="Last name here..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLast(e.target.value)
          }
          value={last}
          required
        ></Input>
      </Name>
      <Input
        autoComplete="off"
        placeholder="Email address here..."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        value={email}
        required
      ></Input>
      {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
    </Form>
  );
}
