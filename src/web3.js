//overrides metamask v0.2 for our 1.0 version. 
//1.0 lets us use async and await instead of promises
import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
export default web3;

web3.version.getNetwork((err, netId) => {
    switch (netId) {
      case "1":
        console.log('This is mainnet')
        break
      case "2":
        console.log('This is the deprecated Morden test network.')
        break
      case "3":
        console.log('This is the ropsten test network.')
        break
      case "4":
        console.log('This is the Rinkeby test network.')
        break
      case "42":
        console.log('This is the Kovan test network.')
        break
      default:
        console.log('This is an unknown network.')
    }
})