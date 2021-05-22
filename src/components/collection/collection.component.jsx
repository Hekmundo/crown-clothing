import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionContainer, Title, Items } from './collection.styles';
import CollectionItem from '../collection-item/collection-item.component';

const Collection = ({ collection }) => {
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
