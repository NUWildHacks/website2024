import styled from 'styled-components';
import icon from '../assets/wildhacks2024-icon.png';
import { dashboard } from '../variables';
import { mobile } from '../styles';

const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--darkgreen);
  color: var(--beige);
  width: 100%;
  display: flex;
  justify-content: end;
  height: 80px;
  padding: 0 15px;

  ${mobile} {
    padding: 5px;
    height: 60px;
  }
`;

// const Logo = styled.img`
//   height: 80px;
//   width: 80px;
//   margin-left: 10px;

//   ${mobile} {
//     height: 50px;
//     width: 50px;
//     margin-top: 17px;
//     margin-left: 0px;
//     padding-right: 20px;
//   }
// `;

const NavLink = styled.a`
  color: var(--beige);
  font-family: 'GentiumBookPlus';
  padding: 5px;

  ${mobile} {
    padding: 0;
  }
`;

const Button = styled.button`
  ${mobile} {
    display: none;
  }

  position: relative;
  color: var(--beige);
  background: var(--brown);
  border: none;
  padding: 5px 5px;
  margin-left: 20px;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 10px;
  letter-spacing: 0.1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    width: 8px;
    height: 30px;
    background-color: var(--beige);
    margin: 0 5px;
    border-radius: 10px;
  }

  a {
    padding: 0 10px;

    ${mobile} {
      padding: 0 5px;
    }
  }

  ${mobile} {
    font-size: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space between;
  align-items: center;
  list-style-type: none;
  color: var(--beige);
  margin: 0;
  text-transform: uppercase;

  & > a {
    padding-right: 20px;
    ${mobile} {
      padding-right: 10px;
    }
    letter-spacing: 0.1rem;

    &:hover {
      color: var(--gold);
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavBarContainer>
      {/* <NavLink href="#landing">
        <Logo src={icon} alt="WildHacks 2024 Logo" />
      </NavLink> */}
      <List>
        <NavLink href="#landing">WildHacks</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#sponsors">Sponsors</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
        <Button>
          <div></div>
          <a href={dashboard} target="_blank" rel="noopener noreferrer">
            Dashboard
          </a>
          <div></div>
        </Button>
      </List>
    </NavBarContainer>
  );
};

export default Navbar;
