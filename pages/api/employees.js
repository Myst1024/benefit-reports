// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.query.departmentId);

  const departmentId = req.query.departmentId;

  let employees = [];
  if (typeof departmentId === "undefined") {
    employees = employeeData;
  } else {
    employees = getEmployeesByDepartmentId(departmentId);
  }

  res.status(200).json(employees);
};

/*
 * @param {Number} departmentId
 * @returns {Array}
 */
function getEmployeesByDepartmentId(departmentId) {
  return employeeData.filter((employee) => {
    return employee.department === Number(departmentId);
  });
}

const employeeData = [
  {
    id: 0,
    department: 0,
    name: "Jon",
    familySize: 1,
    totalCost: 1501,
    employeeCost: 751,
    companyCost: 750,
  },
  {
    id: 1,
    department: 0,
    name: "John",
    familySize: 4,
    totalCost: 1500,
    employeeCost: 750,
    companyCost: 750,
  },
  {
    id: 2,
    department: 1,
    name: "Joan",
    familySize: 3,
    totalCost: 2000,
    employeeCost: 1000,
    companyCost: 1000,
  },
  {
    id: 2,
    department: 2,
    name: "Joanne",
    familySize: 3,
    totalCost: 4000,
    employeeCost: 3000,
    companyCost: 1000,
  },
];
