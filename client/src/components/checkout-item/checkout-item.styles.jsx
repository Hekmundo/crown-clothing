import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0px;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

const blockStyles = css`
  width: 23%;
  padding: 0px 2px;
`;

export const ImageContainer = styled.div`
  ${blockStyles}
  padding-right: 15px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Name = styled.span`
  ${blockStyles}
`;

export const Price = styled.span`
  ${blockStyles}
`;

export const Quantity = styled.span`
  ${blockStyles}
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 6px;
  cursor: pointer;
`;
