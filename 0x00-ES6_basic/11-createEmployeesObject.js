// Function to create an object that contains a department and its employees
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],  // Using computed property names
  };
}



