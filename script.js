// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let displayEmployees = [];
  // TODO: Get user input to create and return an array of employee objects
  
  /*WHILE LOOP THAT LOOPS UNTIL YOU DONT WANT TO ADD ANYMORE*/
  let addEmployee = true;
  while (addEmployee) {
    let firstName = prompt("First Name:");
    let lastName = prompt("Last Name:");
    let salary = prompt("Salary:");

    displayEmployees.push({ firstName, lastName, salary });

    addEmployee = confirm("Would you like to add more employees?");
  }

  return displayEmployees;
};


/*WHILE LOOP BUT ONLY WORKS ONCE*/
/*let firstName = "";
let lastName = "";
let salary = "";
while(firstName === "" || firstName === null) {
  firstName = prompt('First Name');
}
while(lastName === "" || lastName === null) {
  lastName = prompt ('Last Name');
}
while(salary === "" || salary === null) {
  salary = prompt ('Enter Salary');
}
}*/

/*LETS YOU ADD NAMES BUT ONLY 3 TIMES*/
/*let firstName = prompt ("First Name");
let lastName = prompt ("Last Name");
let salary = prompt ("Enter Salary");
let secondfirstName = prompt ("First Name");
let secondlastName = prompt ("Last Name");
let secondsalary = prompt ("Enter Salary");
let thirdfirstName = prompt ("First Name");
let thirdlastName = prompt ("Last Name");
let thirdsalary = prompt ("Enter Salary");
}*/

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
    let totalSalary = 0;
  
    employeesArray.forEach(employee => {
      totalSalary += parseFloat(employee.salary);
    });
  
    const averageSalary = totalSalary / employeesArray.length;
  
    const averageSalaryElement = document.querySelector('#average-salary');
  
    console.log(`The average employees salary between our ${employeesArray.length} employees is $${totalSalary.toFixed(2)}`);
  };

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Congratulations! Our random drawing winner is ${randomEmployee.firstName} ${randomEmployee.lastName}!`);
  };
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
