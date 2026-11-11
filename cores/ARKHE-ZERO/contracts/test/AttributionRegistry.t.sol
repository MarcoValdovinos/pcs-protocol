// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../AttributionRegistry.sol";

contract AttributionRegistryTest is Test {
    AttributionRegistry registry;

    function setUp() public {
        registry = new AttributionRegistry();
    }

    function testRegister() public {
        AttributionRegistry.AttributionContract memory c;
        c.agentDID = bytes32(uint256(1));
        c.signatureAgent = hex"01";
        c.signatureCreator = hex"02";
        c.signatureOperator = hex"03";
        registry.register(c.agentDID, c);
        assertTrue(registry.registered(c.agentDID));
    }
}
