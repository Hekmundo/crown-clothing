import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => {
  const SpinnerWrapper = ({ ...otherProps }) => {
    const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state));
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };
  return SpinnerWrapper;
};

export default WithSpinner;
