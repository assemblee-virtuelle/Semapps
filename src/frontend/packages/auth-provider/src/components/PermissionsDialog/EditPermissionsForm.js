import React, { useMemo, useCallback } from 'react';
import { useAuthProvider } from 'react-admin';
import { List, makeStyles } from '@material-ui/core';
import AgentItem from "../AgentItem";
import { defaultToArray } from "../../utils";
import { agentsDefinitions } from "../../constants";
import usePermissionsWithRefetch from "../usePermissionsWithRefetch";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

const applyToAgentClass = (p, agentClass) => Array.isArray(p['acl:agentClass']) ? p['acl:agentClass'].includes(agentClass) : p['acl:agentClass'] === agentClass;
const appendPermission = (agents, agentId, agentType, mode) => {
  if( agents[agentId] ) {
    agents[agentId].permissions.push(mode);
  } else {
    agents[agentId] = {
      id: agentId,
      type: agentType,
      ...agentsDefinitions[agentType],
      permissions: [mode]
    };
  }
};

const EditPermissionsForm = ({ resourceId }) => {
  const classes = useStyles();
  const { permissions, refetch } = usePermissionsWithRefetch(resourceId);
  const authProvider = useAuthProvider();

  // Format list of authorized agents, based on the permissions returned for the resource
  const agents = useMemo(() => {
    let returnValue = {};
    if( permissions ) {
      for( let p of permissions ) {
        if( applyToAgentClass(p, 'foaf:Agent') ) {
          appendPermission(returnValue, 'foaf:Agent', 'anon', p['acl:mode']);
        }
        if( applyToAgentClass(p, 'acl:AuthenticatedAgent') ) {
          appendPermission(returnValue, 'acl:AuthenticatedAgent', 'anyUser', p['acl:mode']);
        }
        if( p['acl:agent'] ) {
          defaultToArray(p['acl:agent']).forEach(userUri => appendPermission(returnValue, userUri, 'user', p['acl:mode']));
        }
        if( p['acl:agentGroup'] ) {
          defaultToArray(p['acl:agentGroup']).forEach(groupUri => appendPermission(returnValue, groupUri, 'group', p['acl:mode']));
        }
      }
    }
    return returnValue;
  }, [permissions]);

  const addPermission = useCallback((agentId, agentType, mode) => {
    authProvider
      .addPermission(resourceId, agentId, agentType, mode)
      .then(() => refetch());
  }, [resourceId, authProvider, refetch]);

  const removePermission = useCallback((agentId, agentType, mode) => {
    authProvider
      .removePermission(resourceId, agentId, agentType, mode)
      .then(() => refetch());
  }, [resourceId, authProvider, refetch]);

  return(
    <List dense className={classes.list}>
      {Object.entries(agents).map(([agentId, agent]) => (
        <AgentItem key={agentId} agent={agent} addPermission={addPermission} removePermission={removePermission} />
      ))}
    </List>
  )
};

export default EditPermissionsForm;