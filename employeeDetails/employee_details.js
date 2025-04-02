const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:"Javascript" },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,specialization:"R" },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000,specialization:"Python" },
      { id: 4, name: 'Tayler Johnson', age: 24, department: 'IT', salary: 60000,specialization:"Java" },
      { id: 5, name: 'Bob Davinson', age: 19, department: 'Finance', salary: 60000,specialization:"Python" },
    ];

 // Función para mostrar todos los empleados
 function displayEmployees(){
 const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
 document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

 function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';

    }}

function especializacion(){
    const pythonEs=employees.filter(employee=>employee.specialization=="Python");
    pythonEs.forEach((employee,index)=>console.log(`el usuario ${index}, se llama ${employee.name}, tiene una especializacion en ${employee.specialization} y gana: ${employee.salary}`))
    const esfilter = pythonEs.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = esfilter;
}