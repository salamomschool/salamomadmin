import React, { useEffect, useState, useRef } from "react";
import firebase from '../../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowThickBottom, cilDataTransferDown, cilPen, cilPlus, cilSearch, cilTrash, cilUser } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow } from "@coreui/react";
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import PrimaryData from "./months/primaryData";

const PreviewPrimary = () => {
  const db = getDatabase();
  let all_grade = [];
  const [dbLevel, setdbLevel] = useState(localStorage.getItem('dbLevelPreview') || 'default')
  const [dbGrade, setdbGrade] = useState(localStorage.getItem('dbGradePreview') || 'default')
  const [dbMonths, setdbMonths] = useState(localStorage.getItem('dbMonthsPreview') || 'default')
  const [dbYears, setdbYears] = useState(localStorage.getItem('dbYearsPreview') || 'default')
  const [dbYearKh, setdbYearKh] = useState(localStorage.getItem('dbYearsKhPreview') || 'default')
  const [dbDivi, setdbDivi] = useState(localStorage.getItem('dbDiviPreview') || 'default')
  const [dataAllGrades, setdataAllGrades] = useState([])
  const [dataStd, setdataStd] = useState([])

  useEffect(() => {
    localStorage.setItem('dbLevelPreview', dbLevel);
    setdbLevel(localStorage.getItem('dbLevelPreview') || 'default')
  }, [dbLevel]);
  useEffect(() => {
    localStorage.setItem('dbGradePreview', dbGrade);
    setdbGrade(localStorage.getItem('dbGradePreview') || 'default')
  }, [dbGrade]);
  useEffect(() => {
    localStorage.setItem('dbMonthsPreview', dbMonths);
    setdbMonths(localStorage.getItem('dbMonthsPreview') || 'default')
  }, [dbMonths]);
  useEffect(() => {
    localStorage.setItem('dbYearsPreview', dbYears);
    setdbYears(localStorage.getItem('dbYearsPreview') || 'default')
  }, [dbYears]);
  useEffect(() => {
    localStorage.setItem('dbDiviPreview', dbDivi);
    setdbDivi(localStorage.getItem('dbDiviPreview') || 'default')
  }, [dbDivi]);
  useEffect(() => {
    localStorage.setItem('dbYearsKhPreview', dbYearKh);
    setdbYearKh(localStorage.getItem('dbYearsKhPreview') || 'default')
  }, [dbYearKh]);

  let primary_g_p1 = [
    '01A',
    '02A',
    '03A',
    '01B',
    '02B',
    '03B',
    '01C',
    '02C',
    '03C',
  ]
  let primary_g_p2 = [
    '04A',
    '05A',
    '06A',
    '04B',
    '05B',
    '06B',
    '04C',
    '05C',
    '06C',
  ]
  const dbAllGrade = ref(db, `/SalaMOM/tools/class/` + dbLevel);
  const dataAll = ref(db, `/SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}`);

  useEffect(() => {
    onValue(dbAllGrade, (data) => {
      const dataSet = data.val();
      data.forEach(e => {
        let en = e.val().clEn
      })
      setdataAllGrades(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })

  }, [])
  useEffect(() => {
    {
      dataAllGrades.map((d) => {
        all_grade.push(d.clEn)

      })
    }

  }, [dataAllGrades])



  return (
    <>
      <div class="table-fixed-top-left"
        style={{ overflowX: 'auto', padding: '15px', height: '35rem' }}>
        <PrimaryData />
      </div>
    </>
  )
}

export default PreviewPrimary
