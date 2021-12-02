const util = require("./util");

const constants = require("./constants");

module.exports = {
  Client: require("./client"),
  register(id) {
    return util.register(`discord-${id}`);
  },
  Commands: constants.RPCCommands,
  Events: constants.RPCEvents,
};
