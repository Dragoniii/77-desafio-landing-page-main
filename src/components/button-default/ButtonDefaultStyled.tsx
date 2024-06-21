import styled from 'styled-components';

const ButtonDefaultStyled = styled.button`
  width: 140px;
  height: 60px;
  border: none;
  color: ${props => props.theme.colors.primay};
  background-color: ${props => props.theme.colors.tertiary};
  font-size: 1rem;
  margin: 2rem;
`;

export default ButtonDefaultStyled;
