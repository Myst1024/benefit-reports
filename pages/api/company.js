// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(companyData);
};

export const companyData = {
  id: 0,
  name: "Widgets Inc.",
  totalCost: 9001,
  employeeCost: 4001,
  companyCost: 5000,
};
