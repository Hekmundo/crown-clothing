import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  Name,
  Price,
} from './collection-item.styles';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>£{price}</Price>
      </CollectionFooter>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
