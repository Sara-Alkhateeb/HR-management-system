'use strict';

let DataSam = {
    EmployeeID: 1000,
    FullName: "Ghazi Samer",
    Department: "Administration",
    Level: "Senior",
    img: "./EXTRA/ghazi.jpg"
}

function EmployeesData(EmployeeID, FullName, Department, Level,img) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
this.img=img;
}

let DataSam1 = new EmployeesData(1001, "Lana Ali", "Finance", "Senior","./EXTRA/lana.jpg");
let DataSam2 = new EmployeesData(1002, "Tamara Ayoub", "Marketing", "Senior","./EXTRA/tamara.jpg");
let DataSam3 = new EmployeesData(1003, "Safi Walid", "Administration", "Mid-Senior","./EXTRA/safi.jpg");
let DataSam4 = new EmployeesData(1004, "Omar Zaid", "Development", "Senior","./EXTRA/omar.jpg");
let DataSam5 = new EmployeesData(1005, "Rana Saleh", "Development", "Junior","./EXTRA/rana.jpg");
let DataSam6 = new EmployeesData(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./EXTRA/hadi.jpg");



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

/*function RandSalary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   
  }*/

EmployeesData.prototype.NetSalary = function() {

    var NetSalary = this.Salary()- (this.Salary() * .075);
    return NetSalary;
}
console.log(DataSam1.NetSalary());

EmployeesData.prototype.render = function () {

    document.write(`${this.FullName} ${this.NetSalary()}` );
document.write("<br>");
}


DataSam1.render()
DataSam2.render() 
DataSam3.render() 
DataSam4.render() 
DataSam5.render() 
DataSam6.render() 
