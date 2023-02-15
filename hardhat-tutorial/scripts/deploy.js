const { ethers } = require("hardhat");

async function main(){
  const whitelistContract = await ethers.getContractFactory("whitelist");

  const deployedwhitelistContract = await whitelistContract.deploy(10);

  await deployedwhitelistContract.deployed();

  console.log("Whitelist deployed to:", deployedwhitelistContract.address);

}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});