import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import firebase from '../../../components/firebaseConfig'
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import Swal from 'sweetalert2';

const Login = () => {
  const username = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()
  const isLoggedIn = useRef(null)
  const db = getDatabase();
  const dbUser = ref(db, `/SalaMOM/users`);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      isLoggedIn.current = localStorage.getItem('isLoggedIn')
    }
    const MyForm = document.querySelector('form')
    onValue(dbUser, (data) => {
      data.forEach(e => {
        const user_username = e.val().user_username;
        const user_password = e.val().user_password;
        const user_subs = e.val().user_subs;
        const user_url = e.val().user_url;
        const user_year = e.val().user_teacher_year;
        const user_role = e.val().user_role;
        // setGetUsername(user_username);
        // setGetPassword(user_password);
        // setuser_subs(user_subs);
        // setuser_url(user_url);
        // setuser_teacher_year(user_year);
        // setuser_role(user_role);

        const handleSubmit = (e) => {
          e.preventDefault();
          if (username.current.value == user_username) {
            if (password.current.value == user_password) {
              isLoggedIn.current = true
              localStorage.setItem('isLoggedIn', 'true')

              Swal.fire({
                text: "សូមមេត្តារង់ចាំបន្តិច!",
                icon: "success",
                showConfirmButton: false,
                timer: 3500,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                },
              });
              setTimeout(() => {
                if (user_role == 'admin') {

                  navigate('/dashboard'); // Redirect to the main page
                  window.location.reload();
                  localStorage.setItem('user_role', user_role)
                  localStorage.setItem('currentPage', '/dashboard')
                  localStorage.setItem('user_img', user_url)
                  localStorage.setItem('user_name', user_username)
                  localStorage.setItem('user_year', user_year)
                  // window.location.reload();
                }
                if (user_role == 'assistant') {
                  localStorage.setItem('currentPage', '/students')
                  localStorage.setItem('user_role', user_role)
                  localStorage.setItem('user_img', user_url)
                  localStorage.setItem('user_name', user_username)
                  localStorage.setItem('setSubs', user_subs);
                  localStorage.setItem('user_year', user_year)

                  navigate('/students'); // Redirect to the main page
                  window.location.reload();
                  // window.location.href = 'https://salamom-school.firebaseapp.com/pages/tools/uer-input-score.html'

                }

              }, 3600);
              // console.log(user_username, user_password, user_role, user_url);
            } else {
              Swal.fire({
                text: "ឈ្មោះប្រើប្រាស់ ឬលេខសំងាត់ មិនត្រឹមត្រូវ!",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
              });
            }

          }
        };
        // form.addEventListener('submit', handleSubmit);
        MyForm.addEventListener('submit', handleSubmit)

      })
    })

  }, [])
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <div class="brand-logo text-center">
                      <img src="https://res.cloudinary.com/salamomschool/image/upload/v1714370275/salamomlogo.png" alt="logo" width={"130rem"}/>
                    </div>
                    <p className="text-body-secondary m-3 text-center">សួស្តី! សូមបំពេញព័ត៍មានរបស់អ្នក។</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" ref={username} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        ref={password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4 text-center" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
