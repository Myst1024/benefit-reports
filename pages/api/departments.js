// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(departmentData);
};

const departmentData = [
  {
    id: 0,
    name: "engineering",
    totalCost: 3001,
    employeeCost: 1501,
    companyCost: 1500,
  },
  {
    id: 1,
    name: "human resources",
    totalCost: 2000,
    employeeCost: 1000,
    companyCost: 1000,
  },
  {
    id: 2,
    name: "customer services",
    totalCost: 4000,
    employeeCost: 3000,
    companyCost: 1000,
  },
];
