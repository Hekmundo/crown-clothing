import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

export const selectSectionsForDirectory = createSelector(
  [selectDirectorySections],
  (sections) => Object.values(sections)
);

export const selectSectionLinkUrl = memoize((directoryTitle) =>
  createSelector(
    [selectDirectorySections],
    (sections) => sections[directoryTitle.toLowerCase()].linkUrl
  )
);
