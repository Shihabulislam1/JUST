// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RideSharing {

   struct User {
    string metamaskID;
    string name; 
    string email;
    string number;
    uint fare;
    string location;
    string destination;
    string date;
    string time;

   }

   struct Booked{
    string metamaskID;
    string name; 
    string email;
    string number;
    uint fare;
    string location;
    string destination;
    // string date;
    // string time;
    string RidermetaID;
    bool request;
    bool paid;
   }

   address public owner;
   constructor(){
    owner= msg.sender;
   }
   
   mapping(address => User) public users;
   address[] public userAddresses;

    mapping(address => Booked) public books;
   address[] public bookingAddresses;

   /*modifier onlyOwner() {
       require(msg.sender == owner, "Not the owner");
       _;
   }*/

   function addUser(string memory _metamaskID, string memory _name, string memory _email, string memory _number, uint _fare, string memory _location, string memory _destination, string memory _date, string memory _time) public  {
        User memory newUser = User(_metamaskID, _name, _email, _number, _fare, _location, _destination, _date, _time);
        users[msg.sender] = newUser;
        userAddresses.push(msg.sender);
   }

   function Booking(string memory _metamaskID, string memory _name, string memory _email, string memory _number, uint _fare, string memory _location, string memory _destination, string memory _rider, bool _requested, bool _paid) public {
    Booked memory newBook= Booked(_metamaskID, _name, _email, _number, _fare, _location, _destination, _rider,_requested,_paid);
    books[msg.sender]= newBook;
    bookingAddresses.push(msg.sender);
   }

   function getAllUsers() external view returns(User[] memory) {
        User[] memory allUsers = new User[](userAddresses.length);
        for (uint i = 0; i < userAddresses.length; i++) {
            allUsers[i] = users[userAddresses[i]];
        }
        return allUsers;
   }

   

    function getAllbooking() external view returns(Booked[] memory) {
        Booked[] memory allbookings = new Booked[](userAddresses.length);
        for (uint i = 0; i < userAddresses.length; i++) {
            allbookings[i] = books[bookingAddresses[i]];
        }
        return allbookings;
   }

       function getBookingByUser(string memory _metamaskID) public view returns (Booked memory) {
        for (uint i = 0; i < bookingAddresses.length; i++) {
            if (keccak256(bytes(books[bookingAddresses[i]].metamaskID)) == keccak256(bytes(_metamaskID))) {
                return books[bookingAddresses[i]];
            }
        }
        revert("Booking not found");
    }

    function getBookingByRider(string memory _riderMetamaskID) public view returns (Booked memory) {
    for (uint i = 0; i < bookingAddresses.length; i++) {
        if (keccak256(bytes(books[bookingAddresses[i]].RidermetaID)) == keccak256(bytes(_riderMetamaskID))) {
            return books[bookingAddresses[i]];
        }
    }
    revert("Booking not found");
}    

   function deleteBooking(address _bookingAddress) public  {
        delete books[_bookingAddress];
        for (uint i = 0; i < bookingAddresses.length; i++) {
            if (bookingAddresses[i] == _bookingAddress) {
                delete bookingAddresses[i];
                break;
            }
        }
   }

      function deleteUser(address _userAddress) public  {
        delete users[_userAddress];
        for (uint i = 0; i < userAddresses.length; i++) {
            if (userAddresses[i] == _userAddress) {
                delete userAddresses[i];
                break;
            }
        }
   }

//    function rideCard() external {

//    }
      function requestPayment(address _riderAddress) public {
    require(msg.sender != _riderAddress, "You can't request to yourself");
        require(books[_riderAddress].request == false, "You have already requested");
        books[_riderAddress].request = true;
   }

   function isPaid(address _riderAddress) public view returns(bool) {
    return books[_riderAddress].paid;
        }

//    function rideFare() external payable{
//     uint fareAmount = books[msg.sender].fare;
//     require(msg.value >= fareAmount, "Not enough to pay the fare");
//     books[msg.sender].paid = true;
//     payable(owner).transfer(fareAmount);

//    }
event FarePaid(address indexed user, address indexed rider, uint fareAmount);

function rideFare(address riderAddress) external payable {
    uint fareAmount = books[msg.sender].fare;
    require(msg.value >= fareAmount, "Not enough to pay the fare");

    // Mark the booking as paid
    books[msg.sender].paid = true;

    // Transfer the fare amount to the rider
    payable(riderAddress).transfer(msg.value);
    
    // Emit an event for logging purposes
    emit FarePaid(msg.sender, riderAddress, fareAmount);

    // If the msg.value is greater than fareAmount, refund the excess amount back to the user
    if (msg.value > fareAmount) {
        payable(msg.sender).transfer(msg.value - fareAmount);
    }
}



   function contractBalance() external view returns(uint){
   return address(this).balance;
   }

   function sendEthRider(address _rider) public payable{
    require(msg.sender != _rider, "You can't send Ether to yourself");
    payable(_rider).transfer(msg.value);
     }

}

// Contract Address: 0x5F361cfF91e092067aab82E5231E877553D1a39d