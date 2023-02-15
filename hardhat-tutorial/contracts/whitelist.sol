pragma solidity ^0.8.0;

contract whitelist {
    
    uint8 public maxWhiteListedAddress;

    mapping(address=>bool) public whiteListedAddress;

    uint8 public whiteListedAddressCount;

    constructor(uint8 _maxWhiteListedAddress) {
        maxWhiteListedAddress = _maxWhiteListedAddress;
    }

    function addAddressToWhitelist() public{
        require(!whiteListedAddress[msg.sender], "sender has already been whitelisted");

        require(whiteListedAddressCount < maxWhiteListedAddress, "max number of whitelisted addresses reached");

        whiteListedAddress[msg.sender] = true;

        whiteListedAddressCount++;

    }

}