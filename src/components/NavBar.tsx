import styled from 'styled-components';
import icon from '../assets/wildhacks2024-icon.png';

const NavBarContainer = styled.nav`
  background: var(--darkgreen);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  height: 50px; /* Set the height of the navbar */
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
`;

const NavLink = styled.a`
  color: white;
  font-family: GentiumBookPlus;
`;

const Button = styled.button`
  position: relative;
  color: white;
  background: var(--darkgreen);
  border: none;
  padding: 10px 20px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); /* Rectangle */

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
  color: white;
  margin: 0;

  li {
    :hover {
      color: var(--brown);
    }

    a {
      text-decoration: none;
      color: var(--brown);
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavBarContainer>
      <Logo src={icon} />
      <List>
        <Button>
          <NavLink href="#about">About</NavLink>
        </Button>
        <Button>
          <NavLink href="#faq">FAQ</NavLink>
        </Button>
        <Button>
          <NavLink href="#sponsors">Sponsors</NavLink>
        </Button>
      </List>
    </NavBarContainer>
  );
};

export default Navbar;
