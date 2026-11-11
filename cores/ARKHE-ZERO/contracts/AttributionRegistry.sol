// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AttributionRegistry {
    struct AttributionContract {
        bytes32 agentDID;
        bytes32 creatorDID;
        bytes32 operatorDID;
        uint8 autonomyLevel;
        uint256 collateralKRN;
        uint256 maxLiabilityKRN;
        bytes32 rulesHash;
        uint256 timestamp;
        bytes signatureAgent;
        bytes signatureCreator;
        bytes signatureOperator;
    }

    mapping(bytes32 => AttributionContract) public contracts;
    mapping(bytes32 => bool) public registered;

    event ContractRegistered(bytes32 indexed agentDID, bytes32 rulesHash);

    function register(bytes32 _agentDID, AttributionContract calldata _c) external {
        require(!registered[_agentDID], "Ya registrado");
        require(_c.signatureAgent.length > 0, "Falta firma agente");
        require(_c.signatureCreator.length > 0, "Falta firma creador");
        require(_c.signatureOperator.length > 0, "Falta firma operador");
        contracts[_agentDID] = _c;
        registered[_agentDID] = true;
        emit ContractRegistered(_agentDID, _c.rulesHash);
    }
}
