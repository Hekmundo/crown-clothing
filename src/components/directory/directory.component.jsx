import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryContainer } from './directory.styles';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionsProps }) => (
      <DirectoryItem key={id} {...otherSectionsProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
