import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'
import navigation2 from '../_nav_teacher'
import navigation3 from '../_nav_staff'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [getuserRole, setgetuserRole] = useState(localStorage.getItem('user_role') || 'default')
  const [useNav, setuseNav] = useState('')
  useEffect(() => {
    if (getuserRole === 'admin') {
      setuseNav(navigation)
    } else if (getuserRole === 'assistant') {
      setuseNav(navigation2)
    }
    else if (getuserRole === 'is_teacher') {
      setuseNav(navigation3)
    }
  }, [])
  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/dashboard" className='text-center'>
          <CImage src='https://res.cloudinary.com/salamomschool/image/upload/v1714370275/salamomlogo.png' height={42}></CImage>

        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={useNav} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
