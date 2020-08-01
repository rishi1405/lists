import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Employees(props) { 
  return <div style={{border:"3px solid red"}}>
    <label>Emp Id:<b>{props.data.Id}</b></label>
  </div>;
}

function Display(props){
  const list = props.employeeList;
  const listElements = list.map((emp) =>
  <Employees key={emp.Id} data={emp} ></Employees>
  );
  return<div>
    {listElements}
  </div>
}

const employees = [

  {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},

  {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},

  {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}

];

const ele=<Display employeeList={employees}></Display>

ReactDOM.render(ele,document.getElementById('root'));