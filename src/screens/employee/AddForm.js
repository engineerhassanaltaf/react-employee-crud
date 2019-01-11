import React, { Component } from 'react';

class AddForm extends Component {
  render() {
    const { isAddButtonActive, employeeData } = this.props;
    return <div>
      {isAddButtonActive ? <h3>Add Employee</h3> : <h3>Update Employee</h3>}

      <input onChange={(e) => this.props.onFirstNameChanged(e)} placeholder="First name" value={employeeData.firstName} />
      <input onChange={(e) => this.props.onLastNameChanged(e)} placeholder="Last name" value={employeeData.lastName} />
      <input onChange={(e) => this.props.onEmailChanged(e)} placeholder="Email" value={employeeData.email} />
      <input onChange={(e) => this.props.onSalaryChanged(e)} placeholder="Salary" value={employeeData.salary} />
      <input onChange={(e) => this.props.onJobStartDateChanged(e)} placeholder="Job Start Date" value={employeeData.jobStartDate} />

      {
        isAddButtonActive ?
          <button onClick={() => this.props.onAddButtonClick()}>Add</button> :
          <button onClick={() => this.props.onSaveButtonClick()}>Save</button>
      }
    </div>
  }
}

export default AddForm