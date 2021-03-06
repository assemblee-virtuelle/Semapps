import React from 'react';
import { usePermissionsOptimized } from 'react-admin';
import { List, ListActions } from '@semapps/archipelago-layout';
import PermissionsButton from '../PermissionsButton/PermissionsButton';
import { rightsToCreate, rightsToControl } from '../../constants';

const ListWithPermissions = ({ actions, resource, hasCreate, ...rest }) => {
  const { permissions } = usePermissionsOptimized(resource);
  return (
    <List
      {...rest}
      resource={resource}
      hasCreate={hasCreate && !!permissions && permissions.some(p => rightsToCreate.includes(p['acl:mode']))}
      actions={
        actions && permissions && permissions.some(p => rightsToControl.includes(p['acl:mode']))
          ? React.cloneElement(actions, { bulkActions: <PermissionsButton /> })
          : actions
      }
    />
  );
};

ListWithPermissions.defaultProps = {
  actions: <ListActions />
};

export default ListWithPermissions;
