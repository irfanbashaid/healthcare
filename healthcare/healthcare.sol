pragma solidity ^0.4.21;

import "./ipfs.sol";

contract healthcare

{

   ipfs contract_address;

   

   constructor(ipfs _contract_address) public

   {

       contract_address = _contract_address;

   }

   

   uint256 public patient_ids;

   

   struct Patient_detail

   {

       string patient_name;

       uint256 patient_birth_date;

       string place_of_birth;

       bool gender; //true: male, false: female

   }

   mapping(uint256 => Patient_detail) public Patient_detail_map;  //key: patient_id

   

   function get_info(string _patient_name, uint256 _patient_birth_date, string _place_of_birth, bool _gender) public payable returns(uint256) //successfully got the information

   {

       patient_ids += 1;

       Patient_detail_map[patient_ids].patient_name = _patient_name;

       Patient_detail_map[patient_ids].patient_birth_date = _patient_birth_date;

       Patient_detail_map[patient_ids].place_of_birth = _place_of_birth;

       if(_gender == true)

       {

           Patient_detail_map[patient_ids].gender = _gender;

       }

       

       return patient_ids;

   }

   

   function store_info(uint256 _patient_id, address _ipfs_hash) public payable returns(bool)

   {

       ipfs(contract_address).get_data(_patient_id, _ipfs_hash);  

       return true;

   }

   

   function show_data(uint256 id) public constant returns(address)

   {

       return ipfs(contract_address).show_data(id);

   }

}