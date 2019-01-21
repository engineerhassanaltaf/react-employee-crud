export const addEmployee = (employee) => {
  fetch('http://localhost:8081/addEmployee', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(employee)
  });
}

export const editEmployee = (employee, updatingIndex) => {
  fetch('http://localhost:8081/editEmployee', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      employeeIndex: updatingIndex,
      ...employee
    })
  });
}

export const deleteEmployee = (index) => {
  fetch('http://localhost:8081/deleteEmployee', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ index: index })
  });
}

export const getEmployees = () => {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:8081/getEmployees', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      }
    }).then((response) => {
      return response.json();
    }).then((json) => {
      resolve(json.data);
    });
  });
}