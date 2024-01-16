import styled from 'styled-components';
import icon from '../assets/wildhacks2024-icon.png';

const NavBarContainer = styled.nav`
  background: var(--darkgreen);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  height: 80px;
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
  background: var(--darkgreen);
  border: none;
  padding: 10px 20px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  &:hover {
    clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
    background: var(--brown);
  }

  a {
    text-decoration: none;
    font-size: 20px;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  color: var(--beige);
  margin: 0;
`;

const Navbar: React.FC = () => {
  return (
    <NavBarContainer>
      <Logo src={icon} alt="WildHacks 2024 Logo" />
      <List>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#sponsors">Sponsors</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
        <Button>Dashboard</Button>
      </List>
    </NavBarContainer>
  );
};

export default Navbar;
