import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSectionLinkUrl } from '../../redux/directory/directory.selectors';
import {
  CollectionPreviewContainer,
  Title,
  ItemsContainer,
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  const history = useHistory();
  const linkUrl = useSelector(selectSectionLinkUrl(title));

  return (
    <CollectionPreviewContainer>
      <Title onClick={() => history.push(linkUrl)}>{title.toUpperCase()}</Title>
      <ItemsContainer>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
