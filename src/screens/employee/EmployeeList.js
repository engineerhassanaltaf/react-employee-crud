import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        {this.props.employees.length ? <h3>Employees list</h3> : <h3>Employee list is empty</h3>}
        <ul>
          {this.props.employees.map((employee, index) => {
            return <div>
              <h5>User {index + 1}</h5>
              <button onClick={() => this.props.onEditButtonClick(index)}>Edit</button>
              <button onClick={() => this.props.onDeleteButtonClick(index)}>Delete</button>

              <li>First Name: {employee.firstName}</li>
              <li>Last Name: {employee.lastName}</li>
              <li>Email: {employee.email}</li>
              <li>Salary: {employee.salary}</li>
              <li>Job Start Date: {employee.jobStartDate}</li>
            </div>
          })}
        </ul>
        <button onClick={() => this.props.onAddEmployeesButtonClick()}>Add Employee</button>
      </div>
    )
  }

}

export default EmployeeList