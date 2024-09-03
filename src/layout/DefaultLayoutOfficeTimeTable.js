import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import OfficeTimeTable from '../views/officeTimeTable/OfficeTimeTable'

const DefaultLayoutAdmin = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100">
        {/* <AppHeader /> */}
        <div className="body flex-grow-1">
          <OfficeTimeTable />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayoutAdmin
