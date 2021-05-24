import React from 'react';
import {
  CollectionPreviewContainer,
  Title,
  ItemsPreview,
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <ItemsPreview>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </ItemsPreview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
