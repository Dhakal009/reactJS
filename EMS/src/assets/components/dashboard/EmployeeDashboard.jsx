import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../taskList/TaskList'
function EmployeeDashboard() {
  return (
    <div className='text-white px-10 py-15 bg-[#1C1C1C] h-screen' >
    <Header/>
    <TaskListNumber/>
    <TaskList />
    </div>
  )
}

export default EmployeeDashboard 