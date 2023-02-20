

// const tablecontainer = document.getElementById('department-table-body');
// const divtable = document.createElement('div');
// tablecontainer.appendChild(divtable);


// function datadepartment() {

//     for (let i = 0; i < employeesArr.length; i++) {
//         const department = employeesArr[i].department;
//         const emsalary = employeesArr[i].salary;
//         return numberofEm = NumberofEmployees(department);
//         return totalSalary = TotalSalaryCalculation(emsalary);
//         return eachavgsalary = AvregSalaryCalculation(totalSalary, numberofEm);
       

//     }}

 
// function render(){
//     for (let x= 0; x < employeesArr.length; x++) {
//     const row = document.createElement('tr');

//     const nuEmA = document.createElement('td');
//     nuEmA.textContent = NumberofEmployees();

//     const avgs = document.createElement('td');
//     avgs.textContent = TotalSalaryCalculation();

//     const totals = document.createElement('td');
//     totals.textContent = AvregSalaryCalculation();

//     const departmentlist = document.createElement('td');
//     departmentlist.textContent =(employeesArr[i].department);
//     row.appendChild(departmentlist);

//     row.appendChild(nuEmA);
//     row.appendChild(avgs);
//     row.appendChild(totals);

//     table.appendChild(row);
// }}


// function NumberofEmployees() {
//     let numberofEm = 0;
 
//     for (let i = 0; i < employeesArr.length; i++) {
//         if (employeesArr[i].department == "Finance") {
//             var financeEm = 0;
//             numberofEm = financeEm++
//             TotalSalaryCalculation();
//             AvregSalaryCalculation();


//         } else if (employeesArr[i].department == "Marketing") {
//             var marketingEm = 0;
//             numberofEm = marketingEm++
//             TotalSalaryCalculation();
//             AvregSalaryCalculation();

//         } else if (employeesArr[i].department == "Administration") {
//             var administrationEm = 0;
//             numberofEm = administrationEm++
//             TotalSalaryCalculation();
//             AvregSalaryCalculation();

//         } else if (employeesArr[i].department == "Development") {
//             var developmentEm = 0;
//             numberofEm = developmentEm++
//             TotalSalaryCalculation();
//             AvregSalaryCalculation();
//         }
//     }

//     return numberofEm;
// }


// function TotalSalaryCalculation() {

//     for (let i = 0; i < employeesArr.length; i++) {
//         if (employeesArr[i].department == "Finance") {

//             var totalSalaryFinance = 0;
//             totalSalaryFinance = totalSalaryFinance + emsalary;
//             return totalSalaryFinance;

//         } else if (employeesArr[i].department == "Marketing") {
//             var totalSalaryMarketing = 0;
//             totalSalaryMarketing = totalSalaryMarketing + emsalary;
//             return totalSalaryMarketing;

//         } else if (employeesArr[i].department == "Administration") {
//             var totalSalaryAdministration = 0;
//             totalSalaryAdministration = totalSalaryAdministration + emsalary;
//             return totalSalaryAdministration;

//         } else if (employeesArr[i].department == "Development") {
//             var totalSalaryDevelopment = 0;
//             totalSalaryDevelopment = totalSalaryDevelopment + emsalary;
//             return totalSalaryDevelopment;
//         }
//     }
// }


// TotalSalaryCalculation();

// function AvregSalaryCalculation() {

//     var avregsalary = TotalSalaryCalculation() / NumberofEmployees();
//     return avregsalary;

// }
// console.log(TotalSalaryCalculation);
// console.log(AvregSalaryCalculation);
// render();



// function NumberofallEmployees(department) {
//     let numEmployees = 0;

//     for (let i = 0; i < employeesArr.length; i++) {
//         if (employeesArr[i].department === department) {
//             numEmployees++;
//         }
//     }

//     return numEmployees;}





// function render() {
// for (let i = 0; i < employeesArr.length; i++) {
//     // create row and cells
//     tablecontainer.appendChild(departmentlist);
//     const departmentlist = document.createElement('td');
//     departmentlist.textContent = jsonArr[i].department;

//     departmentlist.appendChild(nuEmA);
//     const nuEmA = document.createElement('td');
//     nuEmA.textContent = jsonArr[i].NumberofEmployees();

//     departmentlist.appendChild(avgs);
//     const avgs = document.createElement('td');
//     avgs.textContent = jsonArr[i].TotalSalaryCalculation();

//     departmentlist.appendChild(totals);
//     const totals = document.createElement('td');
//     totals.textContent = jsonArr[i].TotalSalaryCalculation();

// }};
