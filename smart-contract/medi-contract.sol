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
    struct Prescription{
        uint256 prescription_id;
        address patient_address;
        address assistant_address;
        address doctor_address;
        address pharmacist_address;
        string[] symptoms;
        string[] diseases;
        string [] medicines;
        // Medicine[] medicines;
        bool allDone;
    }
    Prescription[] public prescriptions;

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



    function addPatient(address _address, uint256 _age, string memory _gender) public {
        patients.push(Patient(_address, _age, _gender));
        Patient_mapper[_address] = patients.length;
    }
    function addAssistant(uint256 _lc_no, address _address,string memory _name, uint256 _age, string memory _gender) public {
        assistants.push(Assistant(_lc_no,_address,_name, _age, _gender));
        Assistant_mapper[_address] = assistants.length;
    }
    function addDoctor(uint256 _lc_no, address _address,string memory _name, uint256 _age, string memory _gender) public {
        doctors.push(Doctor(_lc_no,_address,_name, _age, _gender));
        Doctor_mapper[_address] = doctors.length;
    }
    function addPharmacist(uint256 _lc_no, address _address,string memory _name) public {
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
    function addPrescriptionStep1(uint256 prescription_id, string[] memory _symptoms)public{
        require(Assistant_mapper[msg.sender]!=0, "Unauthorized action");
        require(prescriptions[prescription_id].assistant_address==address(0),"Overriding not allowed");
        prescriptions[prescription_id].assistant_address = msg.sender;
        prescriptions[prescription_id].symptoms = _symptoms;
    }
    function addPrescriptionStep2(uint256 prescription_id, string[] memory _diseases,string[] memory _medicines)public{
        require(Doctor_mapper[msg.sender]!=0, "Unauthorized action");
        require(prescriptions[prescription_id].doctor_address==address(0),"Overriding not allowed");

        for (uint256 i = 0; i < _medicines.length; i++) {
            string memory m = _medicines[i];
            bytes1 charToCount = '#';
            uint256 hash_cnt = countChar(m,charToCount);
            require(hash_cnt==2,"Wrong string passed");
        }
        prescriptions[prescription_id].doctor_address = msg.sender;
        prescriptions[prescription_id].medicines = _medicines;
        prescriptions[prescription_id].diseases = _diseases;
    }
    function addPrescriptionStep3(uint256 prescription_id)public{
        require(Doctor_mapper[msg.sender]!=0, "Unauthorized action");
        require(prescriptions[prescription_id].doctor_address==address(0),"Overriding not allowed");
        prescriptions[prescription_id].pharmacist_address = msg.sender;

        //Debatable
        prescriptions[prescription_id].allDone = true;
    }

    function getPrescription(uint index) public view returns (string[] memory) {
        require(index < prescriptions.length, "Index out of bounds");
        Prescription memory p = prescriptions[index];
        return (p.medicines);
    }
    //Get by Index
    // function getPatient(uint index) public view returns (uint, string memory, uint) {
    //     require(index < patients.length, "Index out of bounds");
    //     Patient memory p = patients[index];
    //     return (p.id, p.name, p.age);
    // }
    // function getDoctor(uint index) public view returns (uint, string memory, uint) {
    //     require(index < doctors.length, "Index out of bounds");
    //     Doctor memory p = doctors[index];
    //     return (p.id, p.name, p.age);
    // }
    // function getAssistant(uint index) public view returns (uint, string memory, uint) {
    //     require(index < assistants.length, "Index out of bounds");
    //     Assistant memory p = assistants[index];
    //     return (p.id, p.name, p.age);
    // }
    // function getPharmacist(uint index) public view returns (uint, string memory, uint) {
    //     require(index < pharmacists.length, "Index out of bounds");
    //     Pharmacist memory p = pharmacists[index];
    //     return (p.id, p.name, p.age);
    // }
}
