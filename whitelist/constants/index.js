// export const WHITELIST_CONTRACT_ADDRESS = "0xF4E60c6c69f43fCc1A8d075c144E45B4beBB5839"; whitelist
export const WHITELIST_CONTRACT_ADDRESS = "0x9B4ff00a919b24aB6867Fb7F6B092E49F7Dc4343"; // whitelist_2
export const abi = [
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_maxWhitelistedAddresses",
        "type": "uint8"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "addAddressToWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxWhitelistedAddresses",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numAddressesWhitelisted",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "whitelistedAddresses",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
// export const abi = [
//       {
//         "inputs": [
//           {
//             "internalType": "uint8",
//             "name": "_maxWhiteListedAddress",
//             "type": "uint8"
//           }
//         ],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//       },
//       {
//         "inputs": [],
//         "name": "addAddressToWhitelist",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [],
//         "name": "maxWhiteListedAddress",
//         "outputs": [
//           {
//             "internalType": "uint8",
//             "name": "",
//             "type": "uint8"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//           }
//         ],
//         "name": "whiteListedAddress",
//         "outputs": [
//           {
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "inputs": [],
//         "name": "whiteListedAddressCount",
//         "outputs": [
//           {
//             "internalType": "uint8",
//             "name": "",
//             "type": "uint8"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//       }
//     ];