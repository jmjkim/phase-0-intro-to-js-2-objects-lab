// Write your solution in this file!
const employee = {
    name: "john wick",
    streetAddress: "123 loner way"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;

    return newEmployee;
};
const updateEmployee = updateEmployeeWithKeyAndValue(newEmployee, "name", "james bond");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];

    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    
    return employee;
};