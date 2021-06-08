import styled from 'styled-components';
import { Items } from '../collection/collection.styles';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
  width: -moz-fit-content;
  width: fit-content;
  cursor: pointer;
`;

export const ItemsPreview = styled(Items)``;
