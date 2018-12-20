# Star Notary Service

## Project specification 

https://review.udacity.com/#!/rubrics/2297/view


Using network 'rinkeby'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x1e66c53a737e05a5e86097a205e81e24cf1d1bfa08418ef4216058d2316960b5
  Migrations: 0x4643e29c45b353053e75863bcf0240b8632748a5
Saving successful migration to network...
  ... 0x7711734ca9bf2d36566cae12896484a04dbfc287341a67a97bc057d82dfa5e62
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing StarNotary...
  ... 0x4e757ba5582ad7dfb781f8386a1483b9a98d8ae96983e2f4164c8a12de9d7dc4
  StarNotary: 0x295550643d09b9f8b9f644f0096173e731836f29
Saving successful migration to network...
  ... 0x8e50ce462ecec25072756c2e88d66f99b7a896de66efe6675546ab8171a29acd
Saving artifacts...

## contract address
[0x295550643d09b9f8b9f644f0096173e731836f29](https://rinkeby.etherscan.io/address/0x295550643d09b9f8b9f644f0096173e731836f29)

## transaction hash
(0x4e757ba5582ad7dfb781f8386a1483b9a98d8ae96983e2f4164c8a12de9d7dc4)
https://rinkeby.etherscan.io/tx/0x4e757ba5582ad7dfb781f8386a1483b9a98d8ae96983e2f4164c8a12de9d7dc4

### 
I used a Remix contract to test and the associated transaction was:

https://rinkeby.etherscan.io/tx/0xea006fe65f0b8ee7bef7da0c0d31b9b5f655c0b458b0c6fbcaedc8ba0880244b

```
  pragma solidity >=0.4.20;

contract StarNotary {
    function putStarUpForSale(uint256 tokenId, uint256 price) public;
    function createStar(string memory name, string memory story,  string memory ra, string memory dec, string memory mag) public returns (uint256);
    function getOwnerOf(uint256 tokenId) public view returns (address);
}

contract Untitled {
    StarNotary starNotary = StarNotary(0x295550643D09b9F8B9F644f0096173E731836f29);
    
    function putStarUpForSale(uint256 tokenId, uint256 price) public {
        return starNotary.putStarUpForSale(tokenId, price);
    }
    
    function createStar(string memory name, string memory story, string memory ra, string memory dec, string memory mag) public returns (uint256){
       return starNotary.createStar(name, story, ra, dec, mag);
    }
    
    function getOwnerOf(uint256 tokenId) public view returns (address) {
        return starNotary.getOwnerOf(tokenId);
    }
    
    function createStarAndPutItOnSale(string memory name, string memory story, string memory ra, string memory dec, string memory mag, uint256 price) public returns (address) {
        uint256 tokenId = this.createStar(name, story, ra, dec, mag);
        this.putStarUpForSale(tokenId, price);
        address starOwner = this.getOwnerOf(tokenId);
        return starOwner;
    }
  }
```

## star tokenId
1

## Udacity honor code
- Udacity team with their fine tutorial on Solidity :-)
