import React, { Suspense, useEffect, useRef, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import { Nav } from 'react-bootstrap'
import { onChildChanged } from 'firebase/database'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const DefaultLayoutAdmin = React.lazy(() => import('./layout/DefaultLayoutAdmin'))
const DefaultLayoutOfficeTimeTable = React.lazy(() => import('./layout/DefaultLayoutOfficeTimeTable'))
const DefaultLayoutOfficeTimeTableAugust = React.lazy(() => import('./layout/DefaultLayoutOfficeTimeTableAugust'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Home = React.lazy(() => import('./views/dashboard/Dashboard'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  // const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  // const storedTheme = useSelector((state) => state.theme)
  const checkLogin = useRef(localStorage.getItem('isLoggedIn'))
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userRoles, setuserRoles] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.href.split('?')[0])
  //   const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
  //   if (theme) {
  //     setColorMode(theme)
  //   }
  //   if (isColorModeSet()) {
  //     return
  //   }
  //   setColorMode(storedTheme)
  // }, [])
  const storedRoute = localStorage.getItem('currentPage');
  useEffect(() => {

    if (checkLogin.current === 'true') {
      setIsLoggedIn(true)
      localStorage.setItem('currentPage', location.pathname);
      if (location.pathname === '/studentsadmin') {

      }
      setuserRoles(localStorage.getItem('user_role'))
    } else {
      setIsLoggedIn(false)
    }
    if (storedRoute === location.pathname) {
      navigate(storedRoute);
    }
  }, [storedRoute])

  // console.log(userRoles);
  return (
    // <HashRouter>
    //   <Suspense
    //     fallback={
    //       <div className="pt-3 text-center">
    //         <CSpinner color="primary" variant="grow" />
    //       </div>
    //     }
    //   >
    <Routes>
      <Route exact path="/login" name="Login Page" element={
        !isLoggedIn ? <Login /> : <Navigate to={storedRoute} replace />} />
      {/* <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
      <Route path='/studentadmin' name="បញ្ជីព័ត៌មានផ្ទាល់ខ្លួនសិស្ស(រដ្ឋបាល)" element={<DefaultLayoutAdmin />  } />
      <Route path='/OfficeTimeTable' name="កាលវិភាគទូទៅ(រដ្ឋបាល)" element={<DefaultLayoutOfficeTimeTable />  } />
      <Route path='/OfficeTimeTableAugust' name="កាលវិភាគខែសីហា(រដ្ឋបាល)" element={<DefaultLayoutOfficeTimeTableAugust />  } />
      <Route path="*" name="ទំព័រដើម" element={
        isLoggedIn ? <DefaultLayout /> : <Navigate to="/login" replace /> } />
    </Routes>
    //   </Suspense>
    // </HashRouter>
  )
}

export default App
