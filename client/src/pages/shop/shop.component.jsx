import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ShopPageContainer } from './shop.styles';
import Spinner from '../../components/spinner/spinner.component';

const Collection = lazy(() =>
  import('../../components/collection/collection.component')
);
const CollectionsOverview = lazy(() =>
  import('../../components/collections-overview/collections-overview.component')
);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </Suspense>
    </ShopPageContainer>
  );
};

export default ShopPage;
