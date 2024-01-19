import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  gap: 16px;
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Input = styled.input`
  background-color: var(--lightgreenbackground);
  border: none;
  border-radius: 8px;
  color: var(--darkgreen);
  padding: 12px;
  flex: 1;
  font-family: LinuxBiolinum;
  font-size: 16px;

  &::placeholder {
    color: var(--darkgreen);
    letter-spacing: 0.1rem;
    opacity: 0.5;
  }

  &:hover {
    outline: 2px solid var(--lightgreen);
  }

  &:focus {
    outline: 2px solid var(--darkgreen);
  }
`;

const Button = styled.button`
  flex: 25%;
  border: none;
  background: var(--lightgreen);
  border-radius: 8px;
  color: var(--beige);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: LinuxBiolinum;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:active {
    background: var(--darkgreen);
  }

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    background: var(--lightgreen);
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Email = styled(Input)`
  flex: 75%;
`;

const Success = styled.p`
  color: var(--darkgreen);
  flex: 1;
  text-align: center;
`;

const Error = styled.p`
  color: red;
  flex: 1;
  text-align: center;
`;

export default function MailingList() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const api = 'https://api.dilanxd.com/wildhacks/subscribe';
  const form = useRef<HTMLFormElement>(null);

  const subscriberData = {
    firstName: first,
    lastName: last,
    email: email,
  };

  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscriberData),
    };

    fetch(api, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setState(data.success ? 'success' : 'error');
      })
      .catch((error) => {
        console.log(error);
        setState('error');
      });
  };

  return (
    <>
      {state === 'success' ? (
        <Success>
          You've successfully joined the WildHacks mailing list! We'll be in
          touch soon.
        </Success>
      ) : state === 'error' ? (
        <Error>
          Something went wrong when trying to join the mailing list. You may
          already be subscribed! If you believe you are not, please contact us
          at wildhacks@northwestern.edu.
        </Error>
      ) : (
        <Form ref={form} onSubmit={subscribe}>
          <Row>
            <Input
              autoComplete="off"
              placeholder="first name"
              onChange={(e) => setFirst(e.target.value)}
              value={first}
              required
            />
            <Input
              autoComplete="off"
              placeholder="last name"
              onChange={(e) => setLast(e.target.value)}
              value={last}
              required
            />
          </Row>
          <Row>
            <Email
              autoComplete="off"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <Button type="submit" disabled={state === 'loading'}>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>{state === 'loading' ? 'Joining...' : 'Join'}</span>
            </Button>
          </Row>
        </Form>
      )}
    </>
  );
}
