import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Content,
  Title,
  Subtitle,
} from './directory-item.styles';

const DirectoryItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <DirectoryItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <Content>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </DirectoryItemContainer>
);

// withRouter() gives component access to react-router props
export default withRouter(DirectoryItem);
