// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleMessage {
    event messageUpdate(string _message);

    string public message = "initial message.";

    function updateMessage(string memory _message) public {
        message = _message;
        emit messageUpdate(_message);
    }
}
