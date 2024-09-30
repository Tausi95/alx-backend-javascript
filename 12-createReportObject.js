// Function to combine employee objects into a report object
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },  // Spread to clone the employees list
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;  // Get the number of departments
    },
  };
}

