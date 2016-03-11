var _ = require('lodash');

/**
 * Finds keys that are 1 item arrays and makes them be that 1 item.
 */

function flattenObject(target) {
  return _.mapValues(target, function(value) {
    if (_.isArray(value) && value.length === 1) {
      return value[0];
    }
    return value;
  });
}

exports = module.exports = flattenObject;
