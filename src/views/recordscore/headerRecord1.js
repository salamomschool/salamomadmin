import React, { useEffect, useState, useRef } from "react";
import firebase from '../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowThickBottom, cilDataTransferDown, cilPen, cilPlus, cilSearch, cilTrash, cilUser } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow } from "@coreui/react";
import { Table } from "react-bootstrap";

const HeaderTable1 = [
  {
    n0: 'ល.រ',
    name: 'ឈ្មោះពេញ',
    gender: 'ភេទ',
    sub: 'E',
    "subjects": [
      "អង់គ្លេស",
      "កិ.(អង់គ្លេស)",
    ]
  },
  {
    n0: 'ល.រ',
    name: 'ឈ្មោះពេញ',
    gender: 'ភេទ',
    sub: 'Sci',
    "subjects": [
      "វិទ្យាសាស្ត្រ",
      "កិ.(វិទ្យាសាស្ត្រ)",
    ]
  },
  {
    n0: 'ល.រ',
    name: 'ឈ្មោះពេញ',
    gender: 'ភេទ',
    sub: 'M',
    "subjects": [
      "គណិតវិទ្យា",
      "កិ.(គណិតវិទ្យា)",
      "គ.ផ្ទាល់មាត់",
    ]
  },
  {
    n0: 'ល.រ',
    name: 'ឈ្មោះពេញ',
    gender: 'ភេទ',
    sub: 'PE',
    "subjects": [
      "កីឡា",
    ]
  },
  {
    n0: 'ល.រ',
    name: 'ឈ្មោះពេញ',
    gender: 'ភេទ',
    sub: 'K',
    "subjects": [
      "ការស្តាប់",
      "ការនិយាយ",
      "អំណាន",
      "សរសេរតាមអាន",
      "តែងសេចក្តី",
      "វេយ្យករណ៍",
      "កិ.(ខ្មែរ)"
    ]
  },

]

export default HeaderTable1

