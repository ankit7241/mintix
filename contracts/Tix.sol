// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract Tix is ERC721Burnable {
    // State Variables
    string baseuri = "";

    // Owner of the contract
    address payable public contractOwner;
    // Mintix Platform Conctract
    address public mintixContractAddress;

    constructor(string memory _baseuri) ERC721("Mintix NFT", "tixNFT") {
        contractOwner = payable(msg.sender);
        baseuri = _baseuri;
    }

    // Function Modifiers
    modifier onlyOwner() {
        require(msg.sender == contractOwner, "Caller must be owner");
        _;
    }

    modifier onlyMintixContract() {
        require(
            msg.sender == mintixContractAddress,
            "Caller must be mintix platform"
        );
        _;
    }

    // To store the mintix Platform Contract Address in state variable
    function saveMintixContract(address _mintixContractAddress)
        public
        onlyOwner
    {
        mintixContractAddress = _mintixContractAddress;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseuri;
    }

    // Hook used to make prevent transfers
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override {
        address tokenOwner = ownerOf(tokenId);
        require(
            from == address(0) || (from == tokenOwner && to == address(0)),
            "Tix are non-transferable"
        );
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function mint(address to, uint256 tokenId) public onlyMintixContract {
        super._mint(to, tokenId);
    }

    function burn(uint256 tokenId) public override onlyMintixContract {
        super.burn(tokenId);
    }
}
