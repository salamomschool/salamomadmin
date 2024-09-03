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

const MonthScore = () => {
  //Array
  const [dataArray, setdataArray] = useState([])
  const yearKh = useRef(null);//Get from select and from input
  const yearEn = useRef(null);
  const [myId, setmyId] = useState('')

  const BtnUpdate = useRef('')
  const BtnPush = useRef('')
  const BtnDelete = useRef('')
  const db = getDatabase();
  const dbSubjects = ref(db, `/SalaMOM/tools/years/`);

  useEffect(() => {
    onValue(dbSubjects, (data) => {
      const dataSet = data.val();
      setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    yearKh.current.value = myId
    BtnUpdate.current.style.display = 'none'
  }, [])

  const handleShowData = (e) => {
    const getyearKh = e.target.dataset.yearkh
    const getyearEn = e.target.dataset.yearen

    yearKh.current.value = getyearKh
    yearEn.current.value = getyearEn
    setmyId(getyearKh)

    BtnPush.current.style.display = 'none'
    BtnUpdate.current.style.display = 'inline-block'
    BtnDelete.current.style.display = 'inline-block'
  }

  const emptyFill = () => {
    BtnPush.current.style.display = 'inline-block'
    BtnUpdate.current.style.display = 'none'
    BtnDelete.current.style.display = 'none'

    yearKh.current.value = null
    yearEn.current.value = null
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

      set(ref(db, `/SalaMOM/tools/years/` + myId), {
        id: yearKh.current.value,
        yearEn: yearEn.current.value,
        yearKh: yearKh.current.value,
      });
      yearKh.current.value = null
      yearEn.current.value = null

    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });

    }
  }

  const UpdateData = () => {
    const db = getDatabase();
    if (myId) {
      Swal.fire({
        text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
        icon: "success",
        showConfirmButton: false,
        timer: 2200,
      });

      update(ref(db, `/SalaMOM/tools/years/` + myId), {
        id: yearKh.current.value,
        yearEn: yearEn.current.value,
        yearKh: yearKh.current.value,
      });
      yearEn.current.value = null
      yearKh.current.value = null
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
    if (myId) {
      Swal.fire({
        text: `បានលុបត្រឹមត្រូវ`,
        icon: "success",
        showConfirmButton: false,
        timer: 2200,
      });
      remove(ref(db, `/SalaMOM/tools/years/` + myId));
      yearEn.current.value = null
      yearKh.current.value = null
      BtnPush.current.style.display = 'inline-block'
      BtnUpdate.current.style.display = 'none'
      BtnDelete.current.style.display = 'none'
    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });
    }
  }
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card card-primary card-outline">
          <div className="card-body">
            <div className="text-center">
              <div className="row">
                <h4 className="card-title">បង្កើតឆ្នាំសិក្សាថ្មី</h4>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={emptyFill}
                    data-bs-toggle="modal"
                    data-bs-target="#AddNewSub"
                    style={{ color: 'white' }}
                    id="btn_upload" type="button" className="btn btn-success btn-sm">
                    <CIcon icon={cilPlus} /> បង្កើតថ្មី</button>
                </div>
                <div>

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
                      className="border-dark text-center">ឆ្នាំសិក្សាភាសារខ្មែរ</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">ឆ្នាំសិក្សាភាសារអង់គ្លេស</CTableDataCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {dataArray.map((d, index) => (
                    <CTableRow>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center"
                        onClick={handleShowData}
                        data-bs-toggle="modal"
                        data-bs-target="#AddNewSub"
                        data-yearkh={d.yearKh}
                        data-yearen={d.yearEn}
                        data-yearid={d.id}
                      >{d.yearEn}</td>
                      <td className="text-center">{d.yearKh}</td>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <div className="modal fade" id="AddNewSub" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              className="col-sm-3 fw-bold fw-bold">ឆ្នាំសិក្សាភាសារខ្មែរ</label>
                            <div className="col-sm-9">
                              <input
                                onChange={(e) => { setmyId(e.target.value) }}
                                ref={yearKh} type="text" className="form-control" id="subKh" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label
                              className="col-sm-3 fw-bold">ឆ្នាំសិក្សាភាសារអង់គ្លេស</label>
                            <div className="col-sm-9">
                              <input ref={yearEn} type="text" className="form-control" id="subEn" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="modal-footer">
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
                      <button
                        ref={BtnDelete}
                        onClick={deleteData}
                        style={{ color: 'white' }}
                        id="btn_upload" type="button" className="btn btn-danger btn-sm">
                        <CIcon icon={cilTrash} /></button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MonthScore
