import React, { Component } from 'react';
import swal from 'sweetalert';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: 'admin@domain.com',
      password: 'admin',
      isUserLoggedIn: false,
      isDisplayEmployeeAddForm: false,
      isAddButtonActive: true,
      employees: [],
      employeeData: {
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        jobStartDate: ''
      }
    };

    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
    this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
    this.onAddEmployeesButtonClick = this.onAddEmployeesButtonClick.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.onUserNameChanged = this.onUserNameChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onFirstNameChanged = this.onFirstNameChanged.bind(this);
    this.onLastNameChanged = this.onLastNameChanged.bind(this);
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onSalaryChanged = this.onSalaryChanged.bind(this);
    this.onJobStartDateChanged = this.onJobStartDateChanged.bind(this);
  }

  onLoginButtonClick() {
    const { userName, password } = this.state;
    if (userName === 'admin@domain.com' && password === 'admin') {
      this.setState({
        isUserLoggedIn: true
      })
    }
    else {
      swal("Warning!", "Wrong Credentials");
    }
  }

  onLogoutButtonClick() {
    this.setState({
      isUserLoggedIn: false,
      isDisplayEmployeeAddForm: false
    })
  }

  onAddEmployeesButtonClick() {
    this.setState({
      isDisplayEmployeeAddForm: true
    })
  }

  onAddButtonClick() {
    const { employeeData, employees } = this.state;
    const employee = { ...employeeData };
    const emptyEmployee = {
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      jobStartDate: ''
    }

    employees.push(employee);
    this.setState({
      employeeData: emptyEmployee,
      employees: employees,
      isDisplayEmployeeAddForm: false
    })
  }

  onEditButtonClick(index) {
    const { employees } = this.state;
    this.setState({
      updatingIndex: index,
      employeeData: employees[index],
      isDisplayEmployeeAddForm: true,
      isAddButtonActive: false
    });
  }

  onDeleteButtonClick(index) {
    const { employees } = this.state;
    employees.splice(index, 1);

    this.setState({
      employees: employees
    });
  }

  i = 3;

  onSaveButtonClick() {
    const { employees, updatingIndex, employeeData } = this.state;
    employees[updatingIndex] = employeeData;
    const emptyEmployee = {
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      jobStartDate: ''
    }

    this.setState({
      employees: employees,
      employeeData: emptyEmployee,
      isDisplayEmployeeAddForm: false,
      isAddButtonActive: true
    });
  }

  onUserNameChanged(e) {
    this.setState({ userName: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  onFirstNameChanged(e) {
    const { employeeData } = this.state;
    employeeData.firstName = e.target.value;
    this.setState({ employeeData: employeeData });
  }

  onLastNameChanged(e) {
    const { employeeData } = this.state;
    employeeData.lastName = e.target.value;
    this.setState({ employeeData: employeeData });
  }

  onEmailChanged(e) {
    const { employeeData } = this.state;
    employeeData.email = e.target.value;
    this.setState({ employeeData: employeeData });
  }

  onSalaryChanged(e) {
    const { employeeData } = this.state;
    employeeData.salary = e.target.value;
    this.setState({ employeeData: employeeData });
  }

  onJobStartDateChanged(e) {
    const { employeeData } = this.state;
    employeeData.jobStartDate = e.target.value;
    this.setState({ employeeData: employeeData });
  }

  renderAddEmployeeForm() {
    const { employeeData, isAddButtonActive } = this.state;
    return (
      <div>
        {isAddButtonActive ? <h3>Add Employee</h3> : <h3>Update Employee</h3>}

        <input onChange={this.onFirstNameChanged} placeholder="First name" value={employeeData.firstName} />
        <input onChange={this.onLastNameChanged} placeholder="Last name" value={employeeData.lastName} />
        <input onChange={this.onEmailChanged} placeholder="Email" value={employeeData.email} />
        <input onChange={this.onSalaryChanged} placeholder="Salary" value={employeeData.salary} />
        <input onChange={this.onJobStartDateChanged} placeholder="Job Start Date" value={employeeData.jobStartDate} />

        {
          isAddButtonActive ?
            <button onClick={this.onAddButtonClick}>Add</button> :
            <button onClick={this.onSaveButtonClick}>Save</button>
        }
      </div>
    )
  }

  renderEmployees() {
    const { employees } = this.state;
    return (
      <div>
        {employees.length ? <h3>Employees list</h3> : <h3>Employee list is empty</h3>}
        <ul>
          {employees.map((employee, index) => {
            return <div>
              <h5>User {index + 1}</h5>
              <button onClick={this.onEditButtonClick.bind(this, index)}>Edit</button>
              <button onClick={this.onDeleteButtonClick.bind(this, index)}>Delete</button>

              <li>First Name: {employee.firstName}</li>
              <li>Last Name: {employee.lastName}</li>
              <li>Email: {employee.email}</li>
              <li>Salary: {employee.salary}</li>
              <li>Job Start Date: {employee.jobStartDate}</li>
            </div>
          })}
        </ul>
        <button onClick={this.onAddEmployeesButtonClick}>Add Employee</button>
      </div>
    )
  }

  renderLogin() {
    const { userName, password } = this.state;
    return (
      <div>
        <input onChange={this.onUserNameChanged} placeholder="First Name" value={userName} />
        <input onChange={this.onPasswordChanged} placeholder="Last Name" value={password} />

        <button onClick={this.onLoginButtonClick}>Login</button>
      </div>
    )
  }

  render() {
    const { isUserLoggedIn, isDisplayEmployeeAddForm } = this.state;
    return (
      <div>
        {/* when the user state is empty, show login */}
        {!isUserLoggedIn && this.renderLogin()}
        {/* when the user is logged in and Add button isn't clicked, show the List of Employees */}
        {isUserLoggedIn && !isDisplayEmployeeAddForm && this.renderEmployees()}
        {/* when the user is logged in and Add button is clicked, show the Add Form */}
        {isUserLoggedIn && isDisplayEmployeeAddForm && this.renderAddEmployeeForm()}

        {isUserLoggedIn && <button onClick={this.onLogoutButtonClick}>Logout</button>}
      </div >
    );
  }
}

export default App;
