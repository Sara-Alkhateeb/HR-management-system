'use strict';


let jsonArr = localStorage.getItem("allemployees");
let employeesArr = JSON.parse(jsonArr);
console.log(employeesArr);

let departmentObject = {};
for (let i = 0; i < employeesArr.length; i++) {
  let field = employeesArr[i].Department;

  if (departmentObject[field]) {
    departmentObject[field].totalSalaryAll += employeesArr[i].salary;
    departmentObject[field].employeeCount++;
  } else {
    departmentObject[field] = {
      totalSalaryAll: employeesArr[i].salary,
      employeeCount: 1,
      avgSalary: 0
    };
  }
}

// Calculate average salary for each department
Object.keys(departmentObject).forEach(field => {
  const avgSalary = departmentObject[field].totalSalaryAll / departmentObject[field].employeeCount;
  departmentObject[field].avgSalary = avgSalary;
});

// Generate table rows for each department
const tableRows = Object.keys(departmentObject).map(field => {
  const employeeCount = departmentObject[field].employeeCount;
  const totalSalaryAll = departmentObject[field].totalSalaryAll.toFixed(2);
  const avgSalary = departmentObject[field].avgSalary.toFixed(2);

  return `
    <tr>
      <td>${field}</td>
      <td>${employeeCount}</td>
      <td>${totalSalaryAll}</td>
      <td>${avgSalary}</td>
    </tr>
  `;
});

// Update the table with the generated rows
const table = document.querySelector('#employee-table');
table.innerHTML = `
  <thead>
    <tr>
      <th>Department</th>
      <th>Employee Count</th>
      <th>Total Salary</th>
      <th>Average Salary</th>
    </tr>
  </thead>
  <tbody>
    ${tableRows.join('')}
  </tbody>
`;


// Calculate total number of employees
let totalEmployeeCount = 0;
Object.keys(departmentObject).forEach(field => {
  totalEmployeeCount += departmentObject[field].employeeCount;
});

// Calculate total salary for all departments
let totalSalaryAll = 0;
Object.keys(departmentObject).forEach(field => {
  totalSalaryAll += departmentObject[field].totalSalaryAll;
});

// Calculate average salary for all departments
const totalAvgSalary = totalSalaryAll / totalEmployeeCount;

// Generate table footer
const tableFooter = `
  <tfoot>
    <tr>
      <td>Total Sum :</td>
      <td>${totalEmployeeCount}</td>
      <td>${totalSalaryAll.toFixed(2)}</td>
      <td>${totalAvgSalary.toFixed(2)}</td>
    </tr>
  </tfoot>
`;

// Add the table footer
table.innerHTML += tableFooter;




