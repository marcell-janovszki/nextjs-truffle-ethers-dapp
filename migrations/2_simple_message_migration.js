const SimpleMessage = artifacts.require("SimpleMessage");

module.exports = function (deployer) {
  deployer.deploy(SimpleMessage);
};
