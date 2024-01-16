import styled from 'styled-components';
import icon from '../assets/wildhacks2024-icon.png';
import { dashboard } from '../variables';

const NavBarContainer = styled.nav`
  background: var(--darkgreen);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 10px;
`;

const NavLink = styled.a`
  color: var(--beige);
  font-family: GentiumBookPlus;
`;

const Button = styled.button`
  position: relative;
  color: var(--beige);
  background: var(--brown);
  border: none;
  padding: 10px 20px;
  margin-left: 20px;
  overflow: hidden;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  color: var(--beige);
  margin: 0;
  text-transform: uppercase;

  & > a {
    padding-right: 20px;
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
        <Button>
          <a href={dashboard} target="_blank" rel="noopener noreferrer">
            Dashboard
          </a>
        </Button>
      </List>
    </NavBarContainer>
  );
};

export default Navbar;
