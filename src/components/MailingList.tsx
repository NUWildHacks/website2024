import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between !important;
`;

const Input = styled.input`
  background-color: var(--lightgreenbackground);
  border: none;
  height: 40px;
  width: 48%;
  max-height: 50px;
  border-radius: 10px;
  color: var(--darkgreen);
  text-transform: lowercase;
  padding-left: 10px !important;

  &::placeholder {
    color: var(--darkgreen);
    text-decoration: underline;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 10px;
  }

  &:focus {
    outline-color: var(--lightgreen);
  }
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  max-height: 50px;
  border-radius: 10px;
  background-color: var(--lightgreenbackground);
  border: none;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px !important;
  color: var(--darkgreen);

  input {
    width: 100%;
    background-color: var(--lightgreenbackground);
    border: none;
    color: var(--darkgreen);
    height: 100%;
    padding-left: 10px;

    &::placeholder {
      color: var(--darkgreen);
      text-decoration: underline;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 10px;
    }

    &:focus {
      outline-color: var(--lightgreen);
    }
  }
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
        // setSuccess(data.success);
      })
      .catch((error) => {
        console.log(error);
        // setSuccess('error');
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
      <div>
        <Button>
          <input
            autoComplete="off"
            placeholder="Email address here..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
            required
          ></input>
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </div>
    </Form>
  );
}
