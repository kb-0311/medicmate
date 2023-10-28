// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
//Pending prescription

contract MediContract {
    constructor(){
        owner = msg.sender;
        admin.push(owner);
        prescription_count = 0;
    }

    address public owner;
    address[] public admin;
    uint256 public prescription_count;

    //Add admin
    function addAdmin(address ad) public{
        require(msg.sender == owner, "Only the owner can add admin");
        admin.push(ad);
    }

    uint256[] public pending;
    function removeElement(uint256 index) private {
        require(index < pending.length, "Index out of bounds");

        // Move the last element to the index being removed
        pending[index] = pending[pending.length - 1];
        // Remove the last element
        pending.pop();
    }
    function getPending() public view returns(uint256 [] memory){
        return pending;
    }
    struct Patient {
        address patient_address;
        uint256 age;
        string gender;
    }
    struct Assistant {
        uint256 license_number;
        address assistant_address;
        string name;
        uint256 age;
        string gender;
    }
    struct Doctor {
        uint256 license_number;
        address doctor_address;
        string name;
        uint256 age;
        string gender;
    }
    struct Pharmacist {
        uint256 license_number;
        address pharmacist_address;
        string name;
    }

    Assistant[] public assistants;
    Doctor[] public doctors;
    Patient[] public patients;
    Pharmacist[] public pharmacists;

    // struct Medicine{
    //     string name;
    //     string dosage;
    //     string duration;
    // }
    struct Prescription {
        uint256 prescription_id;
        address patient_address;
        address assistant_address;
        address doctor_address;
        address pharmacist_address;
        string[] symptoms;
        string[] diseases;
        string final_disease;
        string [] medicines;
        // Medicine[] medicines;
        bool allDone;
    }
    Prescription[] public prescriptions;
    function getAllPrescription() public view returns (Prescription[] memory) {
        return prescriptions;
    }

    //Default Prescription struct to initialize
    function createDefaultStruct() public view returns (Prescription memory) {
        Prescription memory defaultStruct;
        defaultStruct.prescription_id = prescriptions.length;
        defaultStruct.patient_address = address(0);
        defaultStruct.assistant_address = address(0);
        defaultStruct.doctor_address = address(0);
        defaultStruct.pharmacist_address = address(0);
        string[] memory emptyString;
        defaultStruct.symptoms = emptyString;
        defaultStruct.diseases = emptyString;
        defaultStruct.medicines = emptyString;
        defaultStruct.allDone = false;
        return defaultStruct;
    }


    //Mapping

    //Address => position(0-based) + 1  (Done this to check if exists or not)

    mapping(address => uint256) public Patient_mapper;
    mapping(address => uint256) public Assistant_mapper;
    mapping(address => uint256) public Doctor_mapper;
    mapping(address => uint256) public Pharmacist_mapper;



    function addPatient(uint256 _age, string memory _gender) public {
        address _address = msg.sender;
        patients.push(Patient(_address, _age, _gender));
        Patient_mapper[_address] = patients.length;
    }
    function addAssistant(uint256 _lc_no,string memory _name, uint256 _age, string memory _gender) public {
         address _address = msg.sender;
        assistants.push(Assistant(_lc_no,_address,_name, _age, _gender));
        Assistant_mapper[_address] = assistants.length;
    }
    function addDoctor(uint256 _lc_no,string memory _name, uint256 _age, string memory _gender) public {
        address _address = msg.sender;
        doctors.push(Doctor(_lc_no,_address,_name, _age, _gender));
        Doctor_mapper[_address] = doctors.length;
    }
    function addPharmacist(uint256 _lc_no,string memory _name) public {
         address _address = msg.sender;
        pharmacists.push(Pharmacist(_lc_no,_address,_name));
        Pharmacist_mapper[_address] = pharmacists.length;
    }

    function countChar(string memory _input, bytes1 _char) private pure  returns (uint) {
        uint count = 0;
        bytes memory stringBytes = bytes(_input);
        for (uint i = 0; i < stringBytes.length; i++) {
            if (stringBytes[i] == _char) {
                count++;
            }
        }
        return count;
    }

    function addPrescriptionStep0()public{
        //Debatable
        prescriptions.push(createDefaultStruct());
        prescription_count++;
    }
    function addPrescriptionStep1(string[] memory _symptoms,string[] memory _diseases)public{
        require(Assistant_mapper[msg.sender]!=0, "Unauthorized action");
        uint256 _prescription_id = prescription_count;
        prescription_count++;
        prescriptions.push(createDefaultStruct());
        require(prescriptions[_prescription_id].assistant_address==address(0),"Overriding not allowed");
        prescriptions[_prescription_id].assistant_address = msg.sender;
        prescriptions[_prescription_id].prescription_id = _prescription_id;
        prescriptions[_prescription_id].symptoms = _symptoms;
        prescriptions[_prescription_id].diseases = _diseases;
        pending.push(_prescription_id);
    }
    function addPrescriptionStep2(uint256 _prescription_id, string memory _final_disease,string[] memory _medicines)public{
        require(Doctor_mapper[msg.sender]!=0, "Unauthorized action");
        require(prescriptions[_prescription_id].doctor_address==address(0),"Overriding not allowed");

        for (uint256 i = 0; i < _medicines.length; i++) {
            string memory m = _medicines[i];
            bytes1 charToCount = '#';
            uint256 hash_cnt = countChar(m,charToCount);
            require(hash_cnt==3,"Wrong string passed");
        }
        prescriptions[_prescription_id].doctor_address = msg.sender;
        prescriptions[_prescription_id].medicines = _medicines;
        prescriptions[_prescription_id].final_disease = _final_disease;
        removeElement(_prescription_id);
    }

    function addPrescriptionStep3(uint256 _prescription_id)public{
        require(Doctor_mapper[msg.sender]!=0, "Unauthorized action");
        require(prescriptions[_prescription_id].doctor_address==address(0),"Overriding not allowed");
        prescriptions[_prescription_id].pharmacist_address = msg.sender;

        //Debatable
        prescriptions[_prescription_id].allDone = true;
    }


    //Get by Index


    //All getter functions
    function getPatient(uint index) public view returns (Patient memory) {
        require(index < patients.length, "Index out of bounds");
        Patient memory p = patients[index];
        return p;
    }
    function getDoctor(uint index) public view returns (Doctor memory) {
        require(index < doctors.length, "Index out of bounds");
        Doctor memory p = doctors[index];
        return p;
    }
    function getAssistant(uint index) public view returns (Assistant memory) {
        require(index < assistants.length, "Index out of bounds");
        Assistant memory p = assistants[index];
        return p;
    }
    function getPharmacist(uint index) public view returns (Pharmacist memory) {
        require(index < pharmacists.length, "Index out of bounds");
        Pharmacist memory p = pharmacists[index];
        return p;
    }

    function getPrescription(uint index) public view returns (Prescription memory) {
        // require(index < prescriptions.length, "Index out of bounds");
        Prescription memory p = prescriptions[index];
        return p;
    }
}