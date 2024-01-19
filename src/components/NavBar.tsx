import styled from 'styled-components';
import icon from '../assets/wildhacks2024.svg';
import { dashboard } from '../variables';
import { mobile } from '../styles';

const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--darkgreentranslucent);
  color: var(--beige);
  width: 100%;
  display: flex;
  justify-content: space-between;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  height: 80px;
  padding: 0 16px;

  ${mobile} {
    height: 48px;
  }
`;

const Logo = styled.img`
  height: 64px;
  width: 64px;
  margin-left: 10px;

  ${mobile} {
    height: 48px;
    width: 48px;
  }
`;

const NavLink = styled.a`
  color: var(--beige);
  font-family: GentiumBookPlus;
  padding: 5px;
  display: flex;
  align-items: center;

  letter-spacing: 0.1rem;

  &:hover {
    color: var(--gold);
  }
`;

const Button = styled.a`
  ${mobile} {
    display: none;
  }

  position: relative;
  color: var(--beige);
  background: var(--brown);
  border: none;
  margin-left: 18px;
  padding: 0;
  text-transform: uppercase;
  border-radius: 12px;

  --translate: -4px;

  &:hover {
    --translate: -6px;
  }

  &:active {
    --translate: -2px;
  }
`;

const ButtonContent = styled.span`
  padding: 8px 12px;
  border-radius: 12px;
  background: #9f7c5b;
  transform: translateY(var(--translate));
  display: flex;
  align-items: center;
  transition: transform 150ms ease-in-out;
  font-family: GentiumBookPlus;

  p {
    padding: 0 8px;
    letter-spacing: 0.1rem;
    font-size: 16px;
    font-weight: 700;
  }
`;

const ButtonSide = styled.span`
  width: 8px;
  height: 24px;
  background-color: var(--beige);
  margin: 0 5px;
  border-radius: 10px;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  color: var(--beige);
  margin: 0;
  text-transform: uppercase;
  gap: 20px;
  font-weight: 700;
  margin-right: 128px;

  ${mobile} {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavLink href="#landing">
        <Logo src={icon} alt="WildHacks 2024 Logo" />
      </NavLink>
      <List>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#sponsors">Sponsors</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
        <Button href={dashboard} target="_blank" rel="noreferrer">
          <ButtonContent>
            <ButtonSide />
            <p>Dashboard</p>
            <ButtonSide />
          </ButtonContent>
        </Button>
      </List>
    </NavBarContainer>
  );
};

export default Navbar;
