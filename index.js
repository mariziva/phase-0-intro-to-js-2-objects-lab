// Write your solution in this file!
const employee = {
    name: "Michael",
    streetAddress: "4133 Dickson"
};

function updateEmployeeWithKeyAndValue (employee, name, streetAddress) {
    const employee2 = {
        name: "Sam",
        streetAddress: "11 Broadway"
    }
    return Object (employee2);
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, name, streetAddress) {
    employee.streetAddress="12 Broadway";
    return Object (employee);
};

function deleteFromEmployeeByKey (employee, name) {
    const newEmployee = {
        streetAddress: "1234 Fake Street"
    }
    return Object (newEmployee);
};

function destructivelyDeleteFromEmployeeByKey (employee, name) {
    delete employee[name];
    return Object (employee);
};