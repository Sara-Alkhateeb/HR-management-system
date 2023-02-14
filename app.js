'use strict';

function EmployeesData(EmployeeID, FullName, Department, Level, img) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.img = img;
    
}

let DataSam1 = new EmployeesData(1001, "Lana Ali", "Finance", "Senior", "./EXTRA/lana.jpg");
let DataSam2 = new EmployeesData(1002, "Tamara Ayoub", "Marketing", "Senior", "./EXTRA/tamara.jpg");
let DataSam3 = new EmployeesData(1003, "Safi Walid", "Administration", "Mid-Senior", "./EXTRA/safi.jpg");
let DataSam4 = new EmployeesData(1004, "Omar Zaid", "Development", "Senior", "./EXTRA/omar.jpg");
let DataSam5 = new EmployeesData(1005, "Rana Saleh", "Development", "Junior", "./EXTRA/rana.jpg");
let DataSam6 = new EmployeesData(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./EXTRA/hadi.jpg");
let DataSam7 = new EmployeesData(1000, "Ghazi Samer", "Administration", "Senior", "./EXTRA/ghazi.jpg");



EmployeesData.prototype.Salary = function () {
    let min;
    let max;
    if (this.Level == "Senior") {

        min = 1500;
        max = 2000;
        var RanSalary = Math.floor(Math.random() * (max - min + 1)) + min;

    }
    else if (this.Level == "Mid-Senior") {

        min = 1000;
        max = 1500;

        var RanSalary = Math.floor(Math.random() * (max - min + 1)) + min


    }
    else if (this.Level == "Junior") {

        min = 500;
        max = 1000;
        var RanSalary = Math.floor(Math.random() * (max - min + 1)) + min


    }
    return RanSalary;
}


EmployeesData.prototype.NetSalary = function () {

    var NetSalary = this.Salary() - (this.Salary() * .075);
    return NetSalary;
}
//console.log(DataSam1.NetSalary());

// EmployeesData.prototype.render = function () {

//     document.write(`${this.img} <br> Name:  ${this.FullName} -ID: ${this.id} <br> 
//     Department:${this.Department} -Level: ${this.Level} <br> ${this.NetSalary}`);
//     document.write("<br>");
// }


/*DataSam1.render()
DataSam2.render() 
DataSam3.render() 
DataSam4.render() 
DataSam5.render() 
DataSam6.render()
DataSam7.render()*/

const generatedIds = new Set();

function generateEmployeeId() {
    let id;
    do {
        id = Math.floor(Math.random() * 9000) + 1000;
    } while (generatedIds.has(id));
    generatedIds.add(id);
    return id.toString();
}




let NewUser = document.getElementById("NewUser");
NewUser.addEventListener('submit', addNewUserHandler);

function addNewUserHandler(event) {
    event.preventDefault();
    let EmployeeID = generateEmployeeId();
    let FullName = event.target.Fullname.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let img = event.target.imgUrl.value;
    let NewUser = new EmployeesData(EmployeeID, FullName, Department, Level, img);
    NewUser.render();
}

EmployeesData.prototype.render = function () {

    const container = document.getElementById('Userinfo');

    const divEl = document.createElement('div');
    container.appendChild(divEl);
    divEl.classList.add("user")

    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.img);
    

    const nameEl = document.createElement('h3');
    divEl.appendChild(nameEl);
    nameEl.textContent = `Name: ${this.FullName}`;

    const IdEl = document.createElement('h3');
    divEl.appendChild(IdEl);
    IdEl.textContent = `ID: ${this.EmployeeID}`;

    const DepartmentEl = document.createElement('h3');
    divEl.appendChild(DepartmentEl);
    DepartmentEl.textContent = `Department: ${this.Department}`;

    const LevelEl = document.createElement('h3');
    divEl.appendChild(LevelEl);
    LevelEl.textContent = `Level: ${this.Level}`;

    const SalaryEl = document.createElement('h3');
    divEl.appendChild(SalaryEl);
    SalaryEl.textContent = ` ${this.NetSalary()}`;

    console.log(container)
}
