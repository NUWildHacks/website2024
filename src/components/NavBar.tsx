import styled from 'styled-components';
import icon from '../assets/wildhacks2024.svg';
import { dashboard } from '../variables';
import { mobile } from '../styles';
import Button from './Button';

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
    text-decoration: none;
  }
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
        <Button href={dashboard} color="#654221">
          Dashboard
        </Button>
      </List>
    </NavBarContainer>
  );
};

export default Navbar;
