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

const MonthScore = () => {
  //Array
  const [dataArray, setdataArray] = useState([])
  const getMonth = useRef(null);//Get from select and from input
  const situation = useRef(null);
  const showMonth = useRef(null); //Show in select when select data
  const [myId, setmyId] = useState('')

  const BtnUpdate = useRef('')
  const BtnPush = useRef('')
  const db = getDatabase();
  const monthMark = ref(db, `/SalaMOM/tools/permitted/`);

  useEffect(() => {
    onValue(monthMark, (data) => {
      const dataSet = data.val();
      setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    BtnUpdate.current.style.display = 'none'

  }, [])
  const handleMonth = (e) => {
    e.preventDefault()
    getMonth.current.value = e.target.value;
    setmyId(e.target.value)
  }
  const handleShowData = (e) => {
    const month = e.target.dataset.month
    const status = e.target.dataset.status
    showMonth.current.value = month
    getMonth.current.value = month
    situation.current.value = status
    setmyId(month)

    BtnPush.current.style.display = 'inline-block'
    BtnUpdate.current.style.display = 'inline-block'
  }
  const setData = () => {
    const db = getDatabase();
    if (myId) {
      Swal.fire({
        text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
        icon: "success",
        showConfirmButton: false,
        timer: 2200,
      });

      set(ref(db, `/SalaMOM/tools/permitted/` + myId), {
        id: getMonth.current.value,
        show_add_month: getMonth.current.value,
        status: situation.current.value
      });

    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });

    }
  }
  function getItemStyle(d) {
    if (d.status === "active") {
      return { color: 'white', fontWeight: 'bold', backgroundColor: 'green', borderRadius: '5px', fontSize: '12px' };
    } else {
      return { color: 'dark', fontWeight: 'bold', backgroundColor: 'orange', borderRadius: '5px', fontSize: '12px' };
    }
  }

  const UpdateData = () => {
    BtnPush.current.style.display = 'inline-block'
    BtnUpdate.current.style.display = 'none'
    const db = getDatabase();
    if (myId) {
      Swal.fire({
        text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
        icon: "success",
        showConfirmButton: false,
        timer: 2200,
      });

      update(ref(db, `/SalaMOM/tools/permitted/` + myId), {
        id: getMonth.current.value,
        show_add_month: getMonth.current.value,
        status: situation.current.value
      });
      situation.current.value = null
      showMonth.current.value = null
      getMonth.current.value = null
    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });

    }
  }

  const deleteData = (e) => {
    const deid = e.target.dataset.idde
    Swal.fire({
      title: "ប្រាកដឬដែរអ្នកចង់លុបវា?",
      text: "អ្នកមិនអាចយកវាត្រលប់មកវិញបានទេ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "លុបចេញ",
      cancelButtonText: "មិនយល់ព្រម"
    }).then((result) => {
      if (result.isConfirmed) {
        if (deid) {
          Swal.fire({
            text: `បានលុបត្រឹមត្រូវ`,
            icon: "success",
            showConfirmButton: false,
            timer: 2200,
          });
          remove(ref(db, `/SalaMOM/tools/permitted/` + deid));

        }
      }
    });
  }
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card card-primary card-outline">
          <div className="card-body">
            <div className="text-center">
              <div className="row">
                <h4 className="card-title">កំណត់ខែបញ្ចូលពិន្ទុ</h4>
                <table className="table table-borderless border-0">
                  <tr>
                    <td>
                      <div className="form-group text-center">
                        <select
                          ref={situation}
                          className="form-select text-center" id="sle_status"
                          style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                          <option>ជ្រើសរើសស្ថានភាព</option>
                          <option value="active">កំពុងដំណើរការ</option>
                          <option value="pending">ផ្អាក</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className="form-group text-center">
                        <select
                          ref={showMonth}
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
                </table>
                <div>
                  <CButton
                    ref={BtnPush}
                    onClick={setData}
                    style={{ color: "white" }}
                    type="button" className="btn btn-success btn-sm">
                    <CIcon icon={cilArrowThickBottom} />   បញ្ចូល
                  </CButton>
                  <CButton
                    ref={BtnUpdate}
                    onClick={UpdateData}
                    style={{ color: "white" }}
                    type="button" className="btn btn-warning btn-sm">
                    <CIcon icon={cilPen} />   កែ
                  </CButton>
                  <div style={{ padding: "5px" }}>

                  </div>
                  <input autocomplete="off" style={{ color: "black", lineHeight: "2" }}
                    ref={getMonth}
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
                        onClick={handleShowData}
                        data-status={d.status}
                        data-month={d.id}
                      >{d.id}</td>
                      <td className="text-center">
                        <span style={getItemStyle(d)}>{d.status}</span>
                      </td>
                      <td
                        data-idde={d.id}
                        onClick={deleteData}
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

export default MonthScore
