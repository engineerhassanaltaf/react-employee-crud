import React, { Component } from 'react';
import Login from './screens/login/Login'
import EmployeeList from './screens/employee/EmployeeList';
import AddForm from './screens/employee/AddForm';

import swal from 'sweetalert';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
  }

  onLoginButtonClick(userName, password) {
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
    const { employees, employeeData } = this.state;
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
    return <AddForm
      isAddButtonActive={this.state.isAddButtonActive}
      employeeData={this.state.employeeData}
      onAddButtonClick={() => this.onAddButtonClick()}
      onSaveButtonClick={() => this.onSaveButtonClick()}
      onFirstNameChanged={(e) => this.onFirstNameChanged(e)}
      onLastNameChanged={(e) => this.onLastNameChanged(e)}
      onEmailChanged={(e) => this.onEmailChanged(e)}
      onSalaryChanged={(e) => this.onSalaryChanged(e)}
      onJobStartDateChanged={(e) => this.onJobStartDateChanged(e)}
    />
  }

  renderEmployees() {
    return <EmployeeList
      employees={this.state.employees}
      onEditButtonClick={(index) => this.onEditButtonClick(index)}
      onDeleteButtonClick={(index) => this.onDeleteButtonClick(index)}
      onAddEmployeesButtonClick={() => this.onAddEmployeesButtonClick()}
    />
  }

  renderLogin() {
    return <Login onLoginButtonClick={(userName, password) => this.onLoginButtonClick(userName, password)} />
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

        {isUserLoggedIn && <button onClick={() => this.onLogoutButtonClick()}>Logout</button>}
      </div >
    );
  }
}

export default App;
