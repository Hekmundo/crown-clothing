import styled, { css } from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 60px;
  z-index: 5;

  button {
    margin-top: auto;
  }

  @media screen and (max-width: 800px) {
    right: 30px;
  }
`;

const cartOverflow = css`
  overflow-y: scroll;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  ${(props) => (props.cartLength > 2 ? cartOverflow : '')}
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
