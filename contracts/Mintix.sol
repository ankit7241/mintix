// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Tix.sol";

contract Mintix {
    // State Variables
    // Owner of the contract
    address payable public owner;

    // Contract address of the Tix NFT
    address public tixContractAddress;

    string[] private _cities;

    // Mapping cities that exist in platform
    mapping(string => bool) private _cityExists;

    // Mapping admin address to Theatre-CId, tCId
    mapping(address => string) private _theatreByAdmin;

    // Mapping cities to Theatre-CIds, tCId
    mapping(string => string[]) private _theatresByCity;

    // Mapping tCId to Movie-CIds, mCId
    mapping(string => string[]) private _moviesForTheatre;

    // Mapping mCId to sId
    mapping(string => string[]) private _showsOfMovie;

    // Mapping sId to seatMapping
    // ticketMapping: seatNumber=>ocupancyStatus, ture if seat is taken
    mapping(string => mapping(uint256 => bool)) public _seatsStatusOfShow;

    // Events
    event WithdrawalEvent(uint256 amount, uint256 when);
    event AddTheatreEvent(string indexed city, string indexed tCId);
    event AddMovieEvent(
        string indexed tCId,
        string indexed mCId,
        string[] SIDs
    );

    constructor() payable {
        owner = payable(msg.sender);
    }

    // Function Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller must be owner");
        _;
    }

    // Functions
    function compare(string memory str1, string memory str2) private pure returns (bool) {
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
    }

    function withdraw() public onlyOwner {
        emit WithdrawalEvent(address(this).balance, block.timestamp);
        owner.transfer(address(this).balance);
    }

    // To store the tix NFT Contract Address in state variable
    function saveTixContract(address _tixContractAddress) public onlyOwner {
        tixContractAddress = _tixContractAddress;
    }

    // List theatre in the platform
    function addTheatre(string memory city, string memory tCId) public {
        require(compare(_theatreByAdmin[msg.sender], "") == true, "Theatre already exists for caller");
    
        // Step1: Add city to cities
        if (_cityExists[city] == false) {
            _cities.push(city);
            _cityExists[city] = true;
        }

        // Step2: Add city=>tCId to theatresBycity mapping
        _theatresByCity[city].push(tCId);

        // Step3: Add admin=>tCId to theatreByAdmin mapping
        _theatreByAdmin[msg.sender] = tCId;

        // Step4: Emit the event
        emit AddTheatreEvent(city, tCId);
    }

    // List movie for the theatre
    function addMovie(string memory mCId, string[] memory sId) public {
        // Step1: Add mCId to moviesOfTheatre mapping
        _moviesForTheatre[_theatreByAdmin[msg.sender]].push(mCId);

        // Step2: Add mCId=>SIDs to showsOfMovie mapping
        _showsOfMovie[mCId] = sId;

        // Step3: Initialise seatOccupancyStatus
        // Initialised by default

        // Step4: Emit the event
        emit AddMovieEvent(_theatreByAdmin[msg.sender], mCId, sId);
    }

    // Return list of cities
    function getCities() public view returns (string[] memory cities) {
        return _cities;
    }

    // Return theatres for a city
    function getTheatres(string memory city)
        public
        view
        returns (string[] memory theatres)
    {
        return _theatresByCity[city];
    }

    // Return movies for a theatre
    function getMovies(string memory tCId)
        public
        view
        returns (string[] memory movies)
    {
        return _moviesForTheatre[tCId];
    }

    // Function to mint Tix
    function mintTix(string memory sId, uint256[] memory seatNumbers, uint256 tokenId) public {
        // Step1: Call Tix contract function to mint NFT
        Tix(tixContractAddress).mint(msg.sender, tokenId);

        // Step2: Update the seatOccupancyStatus to true
        for (uint256 i = 0; i < seatNumbers.length; i++) {
            require(_seatsStatusOfShow[sId][seatNumbers[i]] == false, "Seats are already minted");
            _seatsStatusOfShow[sId][seatNumbers[i]] = true;
        }
    }

    // Function to burn Tix
    function burnTix(string memory sId, uint256[] memory seatNumbers, uint256 tokenId) public {
        // Step1: Call Tix contract function to burn NFT
        Tix(tixContractAddress).burn(tokenId);

        // Step2: Update the seatOccupancyStatus to false
        for (uint256 i = 0; i < seatNumbers.length; i++) {
            require(_seatsStatusOfShow[sId][seatNumbers[i]] == true, "Seats are empty");
            _seatsStatusOfShow[sId][seatNumbers[i]] = false;
        }
    }
}
