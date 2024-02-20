import styled from 'styled-components';
import { darken } from 'polished';
/* ${mobile} {
    display: none;
  } */
const Container = styled.a<{ color: string; $disabled?: boolean }>`
  position: relative;
  color: var(--beige);
  background: ${(props) => props.color};
  border: none;
  padding: 0;
  text-transform: uppercase;
  border-radius: 12px;

  --translate: -4px;

  &:hover {
    --translate: -6px;
    text-decoration: none;
  }

  &:active {
    --translate: -2px;
  }

  ${({ $disabled }) =>
    $disabled &&
    `
    pointer-events: none;
  `}
`;

const ButtonContent = styled.span<{ color: string }>`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${(props) => props.color};
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

interface ButtonProps {
  href: string;
  children?: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export default function Button({
  href,
  children,
  color,
  style,
  disabled,
}: ButtonProps) {
  return (
    <Container
      color={darken(0.1, color)}
      $disabled={disabled}
      href={disabled ? 'javascript:void(0)' : href}
      style={style}
      target="_blank"
      rel="noreferrer"
    >
      <ButtonContent color={color}>
        <ButtonSide />
        <p>{children}</p>
        <ButtonSide />
      </ButtonContent>
    </Container>
  );
}
