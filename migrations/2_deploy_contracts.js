var Mintix = artifacts.require("Mintix");
var Tix = artifacts.require("Tix");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Mintix, { from: accounts[0] });
  await deployer.deploy(Tix, { from: accounts[0] });

  const mintixInsatance = await Mintix.deployed();
  const tixInstance = await Tix.deployed("");
  console.log(`mintix contract: ${Mintix.address}`);
  console.log(`tix contract: ${Tix.address}`);

  mintixInsatance.saveTixContract(Tix.address, { from: accounts[0] });
  tixInstance.saveMintixContract(Mintix.address, { from: accounts[0] });
};