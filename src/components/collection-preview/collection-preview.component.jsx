import React from 'react';
import { CollectionPreviewContainer, Title } from './collection-preview.styles';
import { Items } from '../collection/collection.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <Items>
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Items>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
