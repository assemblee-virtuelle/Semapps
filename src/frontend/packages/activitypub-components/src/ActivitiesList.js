import React from 'react';
import { useQueryWithStore, ListContextProvider, LinearProgress } from 'react-admin';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  progress: { marginTop: theme.spacing(2) }
}));

const ActivitiesList = ({ children, source, record = {} }) => {
  if (React.Children.count(children) !== 1) {
    throw new Error('<ActivitiesList> only accepts a single child');
  }

  const classes = useStyles();

  const { data, loaded, loading, total } = useQueryWithStore({
    type: 'getList',
    resource: 'Activity',
    payload: { id: record[source] }
  });

  if (!loaded) {
    return <LinearProgress className={classes.progress} />;
  } else if (data.length === 0) {
    return 'Aucune activité pour le moment.';
  }

  const notes = data
    .filter(activity => activity.type === 'Create')
    .reduce((o, activity) => ({ ...o, [activity.object.id]: activity.object }), {});

  return (
    <ListContextProvider
      value={{
        basePath: '/Note',
        currentSort: { field: 'id', order: 'ASC' },
        data: notes,
        // defaultTitle: null,
        // displayedFilters: null,
        // filterValues: null,
        // hasCreate: null,
        // hideFilter: null,
        ids: Object.keys(notes),
        loaded,
        loading,
        // onSelect: null,
        // onToggleItem: null,
        // onUnselectItems: null,
        page: 1,
        perPage: 10,
        resource: 'Note',
        // selectedIds: null,
        // setFilters: null,
        // setPage: null,
        // setPerPage: null,
        // setSort: null,
        // showFilter: null,
        total
      }}
    >
      {children}
    </ListContextProvider>
  );
};

ActivitiesList.defaultProps = {
  addLabel: true
};

export default ActivitiesList;
