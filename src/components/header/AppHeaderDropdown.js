import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const [userImg, setuserImg] = useState('');
  const [userName, setuserName] = useState('');
  const handlelogout = () => {
    localStorage.setItem('isLoggedIn', 'false')
    Swal.fire({
      text: "សូមមេត្តារង់ចាំបន្តិច!",
      icon: "success",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    setTimeout(() => {
      navigate('/login');
      localStorage.removeItem('currentPage')
      localStorage.removeItem('user_role')
      localStorage.removeItem('user_name')
      localStorage.removeItem('user_img')
      window.location.reload();

    }, 2300);

  }
  const img_url = localStorage.getItem('user_img');
  const username = localStorage.getItem('user_name');
  const url = 'https://res.cloudinary.com/salamomschool/image/upload/v1713680567/user_icon.jpg';
  useEffect(() => {
    if (img_url) {
      setuserImg(localStorage.getItem('user_img'));
    } else {
      setuserImg(url)
    }
    if (username) {
      setuserName(localStorage.getItem('user_name'))
    } else {
      setuserName('User')
    }
  }, [])
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={userImg} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          <strong>{userName}</strong>
        </CDropdownItem>
        <CDropdownItem onClick={handlelogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
