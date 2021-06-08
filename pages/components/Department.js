import { useState } from "react";
import Spinner from "./Spinner";
import styles from "../../styles/Home.module.scss";

export default function Department(props) {
  const [expanded, setExpanded] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(false);

  function handleMoreDetailsClick() {
    if (expanded === false && employees.length === 0) {
      getEmployeeData(props.id);
    }
    setExpanded(!expanded);
  }

  /**
   * Fetches employee data based on provided departmentId and sets it to state
   * Timeout added to demonstrate loading spinner
   * @param {Number} departmentId
   */
  async function getEmployeeData(departmentId) {
    setLoadingEmployees(true);
    const res = await fetch(
      `http://localhost:3000/api/employees?departmentId=${departmentId}`
    );
    const data = await res.json();

    setTimeout(() => {
      setEmployees(data);
      setLoadingEmployees(false);
    }, 1500);
  }

  const EmployeeTable = loadingEmployees ? (
    <Spinner />
  ) : (
    <table className={styles.employeeTable}>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Family Size</th>
          <th>Cost paid by Employee</th>
          <th>Cost paid by Company</th>
          <th>Total Cost</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.familySize}</td>
              <td>${employee.employeeCost}</td>
              <td>${employee.companyCost}</td>
              <td>${employee.totalCost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div className={styles.department}>
      <h3 className={styles.sectionHeader}>{props.name}</h3>
      <p>Total Cost of Insurance: ${props.totalCost}</p>
      <p>Total paid by Employees: ${props.employeeCost}</p>
      <p>Total paid by Company: ${props.companyCost}</p>
      <button className={styles.moreDetails} onClick={handleMoreDetailsClick}>
        {!expanded ? "More Details" : "Less Details"}
      </button>
      {}
      {expanded && EmployeeTable}
    </div>
  );
}
