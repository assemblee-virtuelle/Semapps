const objectCurrentToId = activityJson => {
  if (activityJson.object && typeof activityJson.object === 'object') {
    const { current, ...object } = activityJson.object;
    return {
      ...activityJson,
      object: {
        id: current,
        ...objectCurrentToId(object)
      }
    };
  } else {
    return activityJson;
  }
};

const objectIdToCurrent = activityJson => {
  if (activityJson.object && typeof activityJson.object === 'object') {
    const { id, '@id': arobaseId, ...object } = activityJson.object;
    return {
      ...activityJson,
      object: {
        current: id || arobaseId,
        ...objectIdToCurrent(object)
      }
    };
  } else {
    return activityJson;
  }
};

// Items or recipients may be string or array, so default to array for easier handling
const defaultToArray = value => {
  return !value ? undefined : Array.isArray(value) ? value : [value];
};

module.exports = {
  objectCurrentToId,
  objectIdToCurrent,
  defaultToArray
};
