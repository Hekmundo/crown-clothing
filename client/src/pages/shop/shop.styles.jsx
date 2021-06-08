import styled from 'styled-components';

export const ShopPageContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

export const CollectionAndPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    width: 1100px;
  }
`;

export const ShopItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  justify-items: center;
  grid-gap: 15px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
