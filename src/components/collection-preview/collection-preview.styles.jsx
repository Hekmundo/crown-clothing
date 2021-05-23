import styled from 'styled-components';
import { Items } from '../collection/collection.styles';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const ItemsPreview = styled(Items);
