export default function createEmployeesObject(departmentName, employees) {
  const departmentEmployeesObject = {
    [departmentName]: employees,
  };

  return departmentEmployeesObject;
}
