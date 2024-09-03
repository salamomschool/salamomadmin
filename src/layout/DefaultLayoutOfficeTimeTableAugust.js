import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import OfficeTimeTableAugust from '../views/officeTimeTableAugust/OfficeTimeTableAugust'

const DefaultLayoutAdmin = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100">
        {/* <AppHeader /> */}
        <div className="body flex-grow-1">
          <OfficeTimeTableAugust />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayoutAdmin
