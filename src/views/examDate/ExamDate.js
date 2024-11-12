import React, { useEffect, useState, useRef } from "react";
import firebase from '../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowThickBottom, cilDataTransferDown, cilPen, cilPlus, cilSearch, cilTrash, cilUser } from "@coreui/icons";
import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow } from "@coreui/react";

const ExamDate = () => {
  //Array
  const [dataSubject, setdataSubject] = useState([])
  const [dataArray, setdataArray] = useState([])
  const showMonth = useRef(null); //Show in select when select data
  const [dbeGetYear, setdbeGetYear] = useState([]);
  const [getMonth, setgetMonth] = useState([]);
  const [mydbYear, setmydbYear] = useState(localStorage.getItem('examYear') || 'default');
  const [selectedDate, setSelectedDate] = useState('');

  const db = getDatabase();
  const monthMark = ref(db, `/SalaMOM/tools/permitted/`);
  const dbYear = ref(db, `/SalaMOM/tools/years`);
  const dbSubjects = ref(db, `/SalaMOM/tools/subjects/`);

  // useEffect(() => {

  // }, [mydbYear]);

  useEffect(() => {
    onValue(monthMark, (data) => {
      const dataSet = data.val();
      setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbYear, (data) => {
      const dataSet = data.val();
      setdbeGetYear(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbSubjects, (data) => {
      const dataSet = data.val();
      setdataSubject(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    localStorage.setItem('examYear', mydbYear);
    setmydbYear(localStorage.getItem('examYear') || 'default')
  }, [mydbYear])


  const SelectYear = () => {
    const handleYear = (event) => {
      const year = event.target.value;
      setmydbYear(year);
      // localStorage.setItem('school_year', year);
    }
    return (
      <div>
        <div className="input-group mb-2 me-2">
          <span className="input-group-text btn btn-primary"
            id="basic-addon2">ឆ្នាំសិក្សា</span>
          <select
            className="form-select text-center"
            value={mydbYear}
            onChange={handleYear}
            style={{ color: "black", fontSize: "13px", lineHeight: "2" }}
            id="sle_year">
            <option>ឆ្នាំសិក្សា</option>
            {dbeGetYear.map((option) => (
              <option key={option.yearEn} value={option.yearEn}>
                {option.yearKh}
              </option>
            ))}
          </select>
        </div>
      </div>

    );
  };

  const InputDate = () => {

    const handleDateChange = (event) => {
      const date = new Date(event.target.value);
      const formattedDate = formatDate(date);
      setSelectedDate(formattedDate);
    };

    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    return (
      <div>
        <tr>
          <td>
            <input
              style={{
                width: '47px'
              }}
              className="form-control ms-2"
              type="date"
              id="dateInput"
              onChange={handleDateChange}
            />

          </td>
          <td>
            <p className="ms-2">Date: {selectedDate}</p>

          </td>
        </tr>
      </div>
    );
  }
  const handleMonth = (e) => {
    e.preventDefault()
    const data = e.target.value;
    setgetMonth(data)

  }



  // const UpdateData = () => {
  //   BtnPush.current.style.display = 'inline-block'
  //   BtnUpdate.current.style.display = 'none'
  //   const db = getDatabase();
  //   if (myId) {
  //     Swal.fire({
  //       text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
  //       icon: "success",
  //       showConfirmButton: false,
  //       timer: 2200,
  //     });

  //     update(ref(db, `/SalaMOM/tools/permitted/` + myId), {
  //       id: getMonth.current.value,
  //       show_add_month: getMonth.current.value,
  //       status: situation.current.value
  //     });
  //     situation.current.value = null
  //     showMonth.current.value = null
  //     getMonth.current.value = null
  //   } else {
  //     Swal.fire({
  //       text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
  //       icon: "error",
  //       showConfirmButton: false,
  //       timer: 2200,
  //     });

  //   }
  // }

  // const deleteData = (e) => {
  //   const deid = e.target.dataset.idde
  //   Swal.fire({
  //     title: "ប្រាកដឬដែរអ្នកចង់លុបវា?",
  //     text: "អ្នកមិនអាចយកវាត្រលប់មកវិញបានទេ!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "លុបចេញ",
  //     cancelButtonText: "មិនយល់ព្រម"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       if (deid) {
  //         Swal.fire({
  //           text: `បានលុបត្រឹមត្រូវ`,
  //           icon: "success",
  //           showConfirmButton: false,
  //           timer: 2200,
  //         });
  //         remove(ref(db, `/SalaMOM/tools/permitted/` + deid));

  //       }
  //     }
  //   });
  // }
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card card-primary card-outline">
          <div className="card-body">
            <div className="text-center">
              <div className="row">
                <h4 className="card-title">កំណត់កាលបរិច្ឆេទប្រឡង</h4>
                <table>
                  <tr>
                    <td>
                      <div className="input-group mb-2 me-2">
                        <span className="input-group-text btn btn-primary"
                          id="basic-addon2">កម្រិត</span>
                        <select
                          className="form-select text-center" id="sle_status"
                          style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                          <option>ជ្រើសរើសកម្រិត</option>
                          <option value="set1">ថ្នាក់ទី 1-3</option>
                          <option value="set2">ថ្នាក់ទី 4-6</option>
                          <option value="set3">ថ្នាក់ទី 7-9</option>
                          <option value="set4">ថ្នាក់ទី 10</option>
                          <option value="set5">ថ្នាក់ទី 11-12</option>
                        </select>
                      </div>

                    </td>
                    <td>
                      <SelectYear />
                    </td>
                    <td>
                      <div className="input-group mb-2 me-2">
                        <span className="input-group-text btn btn-primary"
                          id="basic-addon2">ខែ</span>
                        <select
                          value={getMonth}
                          className="form-select text-center" id="sle_status"
                          onChange={handleMonth}
                          style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                          <option>ជ្រើសរើសខែ</option>
                          <option value="October">តុលា</option>
                          <option value="November">វិច្ឆិកា</option>
                          <option value="December">ធ្នូ</option>
                          <option value="January">មករា</option>
                          <option value="February">កុម្ភៈ</option>
                          <option value="March">មីនា</option>
                          <option value="April-May">មេសា-ឧសភា</option>
                          <option value="June">មិថុនា</option>
                          <option value="July">កក្កដា</option>
                          <option value="1st Semester">ឆមាសទី១</option>
                          <option value="2nd Semester">ឆមាសទី២</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="input-group mb-2">
                        <span className="input-group-text btn btn-primary"
                          id="basic-addon2">មុខវិជ្ជា</span>
                        <select
                          className="form-control text-center"
                          aria-describedby="basic-addon2"
                          style={{ color: "black", fontSize: "13px", lineHeight: "2" }}
                          onChange={e => {
                            const sbkh = e.target.selectedOptions[0].dataset.kh
                            setsubjectChecks(sbkh)
                          }}
                          id="select_sub">
                          <option>ជ្រើសរើសមុខវិជ្ជា
                          </option>
                          {dataSubject.map((d, index) => {

                            return <option value={d.subAbr} data-kh={d.id}>{d.id}</option>
                          }
                          )}
                        </select>

                      </div>
                    </td>
                    <td className="text-center">
                      <InputDate />
                    </td>
                    <td>
                      <div className="input-group mb-2 me-2">
                        <span className="input-group-text btn btn-primary"
                          id="basic-addon2">ម៉ោង</span>
                        <select
                          className="form-select text-center" id="sle_status"
                          style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                          <option>ជ្រើសរើសម៉ោង</option>
                          <option value="08:00-08:45">08:00-08:45</option>
                          <option value="08:45-09:30">08:45-09:30</option>
                          <option value="09:50-11:20">09:50-11:20</option>
                          <option value="12:20-01:05">12:20-01:05</option>
                          <option value="01:05-01:50">01:05-01:50</option>
                          <option value="02:05-03:35">02:05-03:35</option>
                        </select>
                      </div>

                    </td>
                    <td>
                      <div className="input-group mb-2 me-2">
                        <span className="input-group-text btn btn-primary"
                          id="basic-addon2">រយះពេល</span>
                        <select
                          className="form-select text-center" id="sle_status"
                          style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                          <option>ជ្រើសរើសរយះពេល</option>
                          <option value="45">45</option>
                          <option value="90">90</option>
                        </select>
                      </div>

                    </td>
                  </tr>
                </table>
                <div>
                  <CButton
                    style={{ color: "white" }}
                    type="button" className="btn btn-success btn-sm">
                    <CIcon icon={cilArrowThickBottom} />   បញ្ចូល
                  </CButton>
                  <CButton
                    style={{ color: "white" }}
                    type="button" className="btn btn-warning btn-sm">
                    <CIcon icon={cilPen} />   កែ
                  </CButton>
                  <div style={{ padding: "5px" }}>

                  </div>
                  <input autocomplete="off" style={{ color: "black", lineHeight: "2" }}
                    className="form-control" type="hidden" id="show_add_month" />
                </div>
              </div>
            </div>
            <div
              style={{ overflowX: "auto", padding: "15px" }}>
              <CTable className="table table-bordered table-hover">
                <CTableHead>
                  <CTableRow className="frezze">
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">ល.រ</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">ខែអនុញ្ញាត</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">បច្ចុប្បន្នភាព</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">លុប</CTableDataCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {dataArray.map((d, index) => (

                    <CTableRow>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center"
                        data-status={d.status}
                        data-month={d.id}
                      >{d.id}</td>
                      <td
                        data-idde={d.id}
                        class="text-center border-dark" style={{ color: "red" }}><CIcon icon={cilTrash} /></td>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ExamDate
