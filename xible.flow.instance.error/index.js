'use strict';

module.exports = (NODE) => {
  const triggerIn = NODE.getInputByName('trigger');
  triggerIn.on('trigger', (conn, state) => {
    NODE.error(new Error(NODE.data.errorMessage || 'unspecified'), state);
  });
};
