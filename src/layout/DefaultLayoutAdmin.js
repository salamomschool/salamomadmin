import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Studentsadmin from '../views/student/Students'

const DefaultLayoutAdmin = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100">
        {/* <AppHeader /> */}
        <div className="body flex-grow-1">
          <Studentsadmin />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayoutAdmin
