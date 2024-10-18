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
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import PreviewPrimary from "./primary";

const MonthScore = () => {
  const db = getDatabase();
  const [arrayGrade, setarrayGrade] = useState([])
  const [arrayYears, setarrayYears] = useState([])

  const [dbLevel, setdbLevel] = useState(localStorage.getItem('dbLevelPreview') || 'default')
  const [dbGrade, setdbGrade] = useState(localStorage.getItem('dbGradePreview') || 'default')
  const [dbMonths, setdbMonths] = useState(localStorage.getItem('dbMonthsPreview') || 'default')
  const [dbYears, setdbYears] = useState(localStorage.getItem('dbYearsPreview') || 'default')
  const [dbDivi, setdbDivi] = useState(localStorage.getItem('dbDiviPreview') || 'default')

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


  const dbGradeRef = ref(db, `/SalaMOM/tools/class/` + dbLevel);
  const dbYearRef = ref(db, `/SalaMOM/tools/years`);
  useEffect(() => {
    onValue(dbGradeRef, (data) => {
      const dataSet = data.val();
      setarrayGrade(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbYearRef, (data) => {
      const dataSet = data.val();
      setarrayYears(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })

  }, [])

  const SlLevel = () => {
    const levels = [
      { value: ``, label: 'ជ្រើសរើសកម្រិត' },
      { value: `បឋមសិក្សា`, label: 'បឋមសិក្សា' },
      { value: `អនុវិទ្យាល័យ`, label: 'អនុវិទ្យាល័យ' },
      { value: `វិទ្យាល័យ`, label: 'វិទ្យាល័យ' },
    ];

    let month = [];

    if (dbLevel === 'អនុវិទ្យាល័យ' || dbLevel === 'វិទ្យាល័យ') {
      month = [
        { value: '', label: 'ជ្រើសរើសខែ' },
        { value: 'October', label: 'តុលា' },
        { value: 'November', label: 'វិច្ឆិកា' },
        { value: 'December', label: 'ធ្នូ' },
        { value: 'January', label: 'មករា' },
        { value: 'February', label: 'កុម្ភៈ' },
        { value: 'March', label: 'មីនា' },
        { value: 'AprilMay', label: 'មេសា-ឧសភា' },
        { value: 'June', label: 'មិថុនា' },
        { value: 'July', label: 'កក្កដា' },
        { value: 'firstSemester', label: 'ឆមាសទី១' },
        { value: 'secondSemester', label: 'ឆមាសទី២' },
        { value: 'fourmonths1', label: 'ពិន្ទុ៤ខែឆមាសទី១' },
        { value: 'fourmonths2', label: 'ពិន្ទុ២ខែឆមាសទី២' },
      ];
    } else {
      month = [
        { value: '', label: 'ជ្រើសរើសខែ' },
        { value: 'October', label: 'តុលា' },
        { value: 'November', label: 'វិច្ឆិកា' },
        { value: 'December', label: 'ធ្នូ' },
        { value: 'January', label: 'មករា' },
        { value: 'February', label: 'កុម្ភៈ' },
        { value: 'March', label: 'មីនា' },
        { value: 'AprilMay', label: 'មេសា-ឧសភា' },
        { value: 'June', label: 'មិថុនា' },
        { value: 'July', label: 'កក្កដា' },
        { value: 'firstSemester', label: 'ឆមាសទី១' },
        { value: 'secondSemester', label: 'ឆមាសទី២' },
        { value: 'firstSemesterResult', label: 'ប្រចាំឆមាសទី១' },
        { value: 'secondSemesterResult', label: 'ប្រចាំឆមាសទី២' },
        { value: 'fourmonths1', label: 'ពិន្ទុ៤ខែឆមាសទី១' },
        { value: 'fourmonths2', label: 'ពិន្ទុ៤ខែឆមាសទី២' },
        { value: 'AnnualYear', label: 'ប្រចាំឆ្នាំ' },
      ];
    }

    const divis = [
      { value: ``, label: 'ជ្រើសរើសតួចែក' },
      { value: `1`, label: '1' },
      { value: `2`, label: '2' },
      { value: `3`, label: '3' },
      { value: `4`, label: '4' },
      { value: `5`, label: '5' },
      { value: `6`, label: '6' },
      { value: `7`, label: '7' },
      { value: `8`, label: '8' },
      { value: `8.4`, label: '8.4' },
      { value: `9`, label: '9' },
      { value: `10`, label: '10' },
      { value: `11`, label: '11' },
      { value: `12`, label: '12' },
      { value: `12.5`, label: '12.5' },
      { value: `13`, label: '13' },
      { value: `14`, label: '14' },
      { value: `15`, label: '15' },
      { value: `16`, label: '16' },
      { value: `16.5`, label: '16.5' },
      { value: `17`, label: '17' },
      { value: `18`, label: '18' },
      { value: `19`, label: '19' },
      { value: `20`, label: '20' },
    ];
    const select = (d) => {
      let data = d.target.value;
      setdbLevel(d.target.value)
      localStorage.setItem('dbLevelPreview', data)
      window.location.reload()
    }
    const grade = (d) => {
      let data = d.target.value;
      setdbGrade(d.target.value)
      localStorage.setItem('dbGradePreview', data)
      window.location.reload()
    }
    const months = (d) => {
      let data = d.target.value;
      setdbMonths(d.target.value)
      localStorage.setItem('dbMonthsPreview', data)
      window.location.reload()
    }
    const year = (d) => {
      let data = d.target.value;
      let datakh = d.target.options[d.target.selectedIndex].dataset.khyear
      setdbYears(d.target.value)
      localStorage.setItem('dbYearsPreview', data)
      localStorage.setItem('dbYearsKhPreview', datakh)
      window.location.reload()
    }
    const divi = (d) => {
      let data = d.target.value;
      setdbDivi(d.target.value)
      localStorage.setItem('dbDiviPreview', data)
      window.location.reload()
    }
    return (
      <Col>
        <Row>
          <Col>
            <label>កម្រិត៖</label>
            <select className="form-select text-center btn btn-primary"
              value={dbLevel}
              onChange={select}
            >
              {levels.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Col>
          <Col>
            <label>ឆ្នាំសិក្សា៖</label>
            <select
              value={dbYears}
              onChange={year}
              className="form-select text-center btn btn-primary">
              <option>ជ្រើសរើសឆ្នាំសិក្សា</option>
              {arrayYears.map((option) => (
                <option key={option.yearEn} value={option.yearEn} data-khyear={option.yearKh}>
                  {option.yearKh}
                </option>
              ))}
            </select>
          </Col>
          <Col>
            <label>ថ្នាក់ទី៖</label>
            <select
              value={dbGrade}
              onChange={grade}
              className="form-select text-center btn btn-primary">
              <option>ជ្រើសរើសថ្នាក់</option>
              {arrayGrade.map((option) => (
                <option key={option.clEn} value={option.clEn}>
                  {option.clKh}
                </option>
              ))}
            </select>
          </Col>
          <Col>
            <label>ខែ៖</label>
            <select
              value={dbMonths}
              onChange={months}
              className="form-select text-center btn btn-primary">
              {month.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Col>
          <Col>
            <label>តួរួមចែក៖</label>
            <select
              value={dbDivi}
              onChange={divi}
              className="form-select text-center btn btn-primary">
              {divis.map((option) => (
                <option
                  key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Col>

        </Row>
      </Col>

    );
  }
  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card card-primary card-outline">
            <div className="card-body">
              <div className="text-center">
                <div className="row">
                  <SlLevel />
                </div>
              </div>
            </div>
          </div>
          <div className="card card-primary card-outline">
            <div className="card-body">
              <div className="text-center">
                <div className="row">
                  <PreviewPrimary />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MonthScore
