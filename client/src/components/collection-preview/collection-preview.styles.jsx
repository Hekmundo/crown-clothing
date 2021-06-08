import styled from 'styled-components';
import {
  ShopItemsContainer,
  CollectionAndPreviewContainer,
} from '../../pages/shop/shop.styles';

export const CollectionPreviewContainer = styled(CollectionAndPreviewContainer)`
  @media screen and (max-width: 400px) {
    border-bottom: 1px solid darkgrey;
  }
`;

export const ItemsContainer = styled(ShopItemsContainer)``;

export const Title = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
`;
