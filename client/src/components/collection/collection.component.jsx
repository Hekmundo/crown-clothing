import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionContainer, Title, Items } from './collection.styles';
import CollectionItem from '../collection-item/collection-item.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const Collection = ({ match }) => {
  const collection = useSelector((state) =>
    selectCollection(match.params.collectionId)(state)
  );

  const { title, items } = collection;
  return (
    <CollectionContainer>
      <Title>{title.toUpperCase()}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionContainer>
  );
};

export default WithSpinner(Collection);
