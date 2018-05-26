import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address

const address ='0xEA8e0b1940AC600b3ff8594B1f961188aFe31575';
//use the ABI from your contract
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
//export default  new web3(window.web3.currentProvider);
//this._tokenContract = this.web3.eth.contract(abi).at(this.address);
export default new web3.eth.contract(abi, address);
//export default  web3.eth.contract(abi).at(address);