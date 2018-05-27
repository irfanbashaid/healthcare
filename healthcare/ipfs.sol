pragma solidity ^0.4.21;

contract ipfs

{

   struct patient_data_base

   {

       address data_hash;

   }

   mapping(uint256 => patient_data_base) public patient_data_base_map;//patient_data_base_map[90].data_hash

   function get_data(uint256 patient_id, address _ipfs_hash) public payable returns(bool)

   {

       patient_data_base_map[patient_id].data_hash = _ipfs_hash;

       return true;

   }

   function show_data(uint256 patient_id) public constant returns(address)

   {

       return patient_data_base_map[patient_id].data_hash;

   }

}