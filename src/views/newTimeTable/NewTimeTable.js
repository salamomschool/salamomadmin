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
  const [dataArrayAugust, setdataArrayAugust] = useState([])
  const startAt = useRef(null);//Get from select and from input
  const endAt = useRef(null);
  const meridiem = useRef(null);
  const kind = useRef(null);
  const [startAtAugust, setstartAtAugust] = useState('');
  const [endAtAugust, setendAtAugust] = useState('');
  const [meridiemAugust, setmeridiemAugust] = useState('');
  const [kindAugust, setkindAugust] = useState('');

  const [startTime, setstartTime] = useState('');
  const [endTime, setendTime] = useState('');
  const [myId, setmyId] = useState('')
  const [myIdAugust, setmyIdAugust] = useState('')

  const BtnUpdate = useRef('')
  const BtnPush = useRef('')
  const BtnDelete = useRef('')
  const BtnUpdateAugust = useRef('')
  const BtnPushAugust = useRef('')
  const BtnDeleteAugust = useRef('')
  const db = getDatabase();
  const dbSubjects = ref(db, `/SalaMOM/tools/times/`);
  const dbSubjectsAugust = ref(db, `/SalaMOM/tools/times_august/`);

  useEffect(() => {
    onValue(dbSubjects, (data) => {
      const dataSet = data.val();
      setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    // startAt.current.value = myId
    BtnUpdate.current.style.display = 'none'
  }, [])
  useEffect(() => {
    onValue(dbSubjectsAugust, (data) => {
      const dataSet = data.val();
      setdataArrayAugust(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    // startAt.current.value = myId
    BtnUpdateAugust.current.style.display = 'none'
  }, [])

  const handleShowData = (e) => {
    const getstartAt = e.target.dataset.startat
    const getendAt = e.target.dataset.endat
    const getmeridiem = e.target.dataset.meridiem
    const getkind = e.target.dataset.kind
    const getid = e.target.dataset.timebaleid


    startAt.current.value = getstartAt
    endAt.current.value = getendAt
    meridiem.current.value = getmeridiem
    kind.current.value = getkind
    setstartTime(getstartAt)
    setendTime(getendAt)
    setmyId(getid)
    BtnPush.current.style.display = 'none'
    BtnUpdate.current.style.display = 'inline-block'
    BtnDelete.current.style.display = 'inline-block'
  }
  const handleShowDataAugust = (e) => {
    const getstartAt = e.target.dataset.startat
    const getendAt = e.target.dataset.endat
    const getmeridiem = e.target.dataset.meridiem
    const getkind = e.target.dataset.kind
    const getid = e.target.dataset.timebaleid


    startAt.current.value = getstartAt
    endAt.current.value = getendAt
    meridiem.current.value = getmeridiem
    kind.current.value = getkind
    setstartAtAugust(getstartAt)
    setendAtAugust(getendAt)
    setmeridiemAugust(getmeridiem)
    setkindAugust(getkind)
    setmyIdAugust(getid)
    BtnPushAugust.current.style.display = 'none'
    BtnUpdateAugust.current.style.display = 'inline-block'
    BtnDeleteAugust.current.style.display = 'inline-block'
  }

  const emptyFill = () => {
    BtnPush.current.style.display = 'inline-block'
    BtnUpdate.current.style.display = 'none'
    BtnDelete.current.style.display = 'none'

    startAt.current.value = null
    endAt.current.value = null
    meridiem.current.value = null
    kind.current.value = null
    setmyId('')
  }
  const emptyFillAugust = () => {
    BtnPushAugust.current.style.display = 'inline-block'
    BtnUpdateAugust.current.style.display = 'none'
    BtnDeleteAugust.current.style.display = 'none'

    setstartAtAugust('')
    setendAtAugust('')
    setmeridiemAugust('')
    setkindAugust('')
    setmyIdAugust('')
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

      set(ref(db, `/SalaMOM/tools/times/` + myId), {
        id: myId,
        time_setting_start_at: startAt.current.value,
        time_setting_end_at: endAt.current.value,
        time_setting_meridiem: meridiem.current.value,
        time_setting_kind: kind.current.value,
      });
      startAt.current.value = null
      endAt.current.value = null
      meridiem.current.value = null
      kind.current.value = null
      setmyId('')

    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });

    }
  }
  const setDataAugust = () => {
    const db = getDatabase();
    if (myIdAugust) {
      Swal.fire({
        text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
        icon: "success",
        showConfirmButton: false,
        timer: 2200,
      });

      set(ref(db, `/SalaMOM/tools/times_august/` + myIdAugust), {
        id: myIdAugust,
        time_setting_start_at: startAtAugust,
        time_setting_end_at: endAtAugust,
        time_setting_meridiem: meridiemAugust,
        time_setting_kind: kindAugust,
      });
      setstartAtAugust('')
      setendAtAugust('')
      setmeridiemAugust('')
      setkindAugust('')
      setmyIdAugust('')

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

      update(ref(db, `/SalaMOM/tools/times/` + myId), {
        id: myId,
        time_setting_start_at: startAt.current.value,
        time_setting_end_at: endAt.current.value,
        time_setting_meridiem: meridiem.current.value,
        time_setting_kind: kind.current.value,
      });
      startAt.current.value = null
      endAt.current.value = null
      meridiem.current.value = null
      kind.current.value = null
      setmyId('')
    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });

    }
  }
  const UpdateDataAugust = () => {
    const db = getDatabase();
    if (myIdAugust) {
      Swal.fire({
        text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
        icon: "success",
        showConfirmButton: false,
        timer: 2200,
      });

      update(ref(db, `/SalaMOM/tools/times_august/` + myIdAugust), {
        id: myIdAugust,
        time_setting_start_at: startAtAugust,
        time_setting_end_at: endAtAugust,
        time_setting_meridiem: meridiemAugust,
        time_setting_kind: kindAugust,
      });
      setstartAtAugust('')
      setendAtAugust('')
      setmeridiemAugust('')
      setkindAugust('')
      setmyIdAugust('')
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
      remove(ref(db, `/SalaMOM/tools/times/` + myId));
      startAt.current.value = null
      endAt.current.value = null
      meridiem.current.value = null
      kind.current.value = null
      setmyId('')
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
  const deleteDataAugust = (e) => {
    if (myIdAugust) {
      Swal.fire({
        text: `បានលុបត្រឹមត្រូវ`,
        icon: "success",
        showConfirmButton: false,
        timer: 2200,
      });
      remove(ref(db, `/SalaMOM/tools/times_august/` + myIdAugust));
      setstartAtAugust('')
      setendAtAugust('')
      setmeridiemAugust('')
      setkindAugust('')
      setmyIdAugust('')
      BtnPushAugust.current.style.display = 'inline-block'
      BtnUpdateAugust.current.style.display = 'none'
      BtnDeleteAugust.current.style.display = 'none'
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
    <>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card card-primary card-outline">
            <div className="card-body">
              <div className="text-center">
                <div className="row">
                  <h4 className="card-title">បង្កើតម៉ោងសិក្សាទូទៅ</h4>
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
                        className="border-dark text-center">ប្រភេទម៉ោង</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">ម៉ោងផ្តើម</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">ម៉ោងបញ្ចប់</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">វេន</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">ប្រភេទ</CTableDataCell>

                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {dataArray.map((d, index) => (
                      <CTableRow key={d.id}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center"
                          onClick={handleShowData}
                          data-bs-toggle="modal"
                          data-bs-target="#AddNewSub"
                          data-startat={d.time_setting_start_at}
                          data-endat={d.time_setting_end_at}
                          data-meridiem={d.time_setting_meridiem}
                          data-kind={d.time_setting_kind}
                          data-timebaleid={d.id}
                        >{d.id}</td>
                        <td className="text-center">{d.time_setting_start_at}</td>
                        <td className="text-center">{d.time_setting_end_at}</td>
                        <td className="text-center">{d.time_setting_meridiem}</td>
                        <td className="text-center">{d.time_setting_kind}</td>
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
                              <label className="fw-bold" for="selectTime">ប្រភេទម៉ោង</label>
                              <div className="col-sm-8">
                                <select className="form-select text-center" id="selectTime"
                                  value={myId}
                                  onChange={(e) => { setmyId(e.target.value) }}
                                  style={{ color: 'black', fontSize: "13px", lineHeight: "2" }}>
                                  <option>ជ្រើសរើសប្រភេទម៉ោង</option>
                                  <option value="ម៉ោងទី១">ម៉ោងទី១</option>
                                  <option value="ម៉ោងទី២">ម៉ោងទី២</option>
                                  <option value="ម៉ោងទី៣">ម៉ោងទី៣</option>
                                  <option value="ម៉ោងទី៤">ម៉ោងទី៤</option>
                                  <option value="ម៉ោងទី៥">ម៉ោងទី៥</option>
                                  <option value="ម៉ោងទី៦">ម៉ោងទី៦</option>
                                  <option value="ម៉ោងទី៧">ម៉ោងទី៧</option>
                                  <option value="ម៉ោងទី៨">ម៉ោងទី៨</option>
                                  <option value="ម៉ោងចេញលេងទី១">ម៉ោងចេញលេងទី១</option>
                                  <option value="ម៉ោងចេញលេងទី២">ម៉ោងចេញលេងទី២</option>
                                  <option value="ម៉ោងសម្រាក">ម៉ោងសម្រាក</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col-sm-6">
                                <label className="fw-bold">ផ្តើម</label>
                                <input placeholder="ផ្តើម" autocomplete="off"
                                  ref={startAt}
                                  style={{ color: "black" }} className="form-control"
                                  required type="time"
                                />
                              </div>
                              <div className="col-sm-6">
                                <label className="fw-bold">បញ្ចប់</label>
                                <input placeholder="បញ្ចប់" autocomplete="off"
                                  ref={endAt}
                                  style={{ color: "black" }} className="form-control"
                                  required type="time"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                className="fw-bold">វេន</label>
                              <div className="col-sm-8">
                                <select class="form-select text-center" id="time_setting_meridiem"
                                  ref={meridiem}
                                  style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                                  <option>ជ្រើសរើសវេន</option>
                                  <option value="ព្រឹក">ព្រឹក</option>
                                  <option value="ល្ងាច">ល្ងាច</option>
                                </select>
                              </div>
                            </div>
                            <label for="time_setting_kind">ប្រភេទ</label>
                            <div className="col-sm-8">
                              <select class="form-select text-center" id="time_setting_kind"
                                ref={kind}
                                style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                                <option>ជ្រើសរើសប្រភេទ</option>
                                <option value="សិក្សា">សិក្សា</option>
                                <option value="ចេញលេង">ចេញលេង</option>
                                <option value="សម្រាក">សម្រាក</option>
                              </select>
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
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card card-primary card-outline">
            <div className="card-body">
              <div className="text-center">
                <div className="row">
                  <h4 className="card-title">បង្កើតម៉ោងសិក្សាខែសីហា</h4>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={emptyFillAugust}
                      data-bs-toggle="modal"
                      data-bs-target="#AddNewSubAugust"
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
                        className="border-dark text-center">ប្រភេទម៉ោង</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">ម៉ោងផ្តើម</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">ម៉ោងបញ្ចប់</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">វេន</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">ប្រភេទ</CTableDataCell>

                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {dataArrayAugust.map((d, index) => (
                      <CTableRow key={d}>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center"
                          onClick={handleShowDataAugust}
                          data-bs-toggle="modal"
                          data-bs-target="#AddNewSubAugust"
                          data-startat={d.time_setting_start_at}
                          data-endat={d.time_setting_end_at}
                          data-meridiem={d.time_setting_meridiem}
                          data-kind={d.time_setting_kind}
                          data-timebaleid={d.id}
                        >{d.id}</td>
                        <td className="text-center">{d.time_setting_start_at}</td>
                        <td className="text-center">{d.time_setting_end_at}</td>
                        <td className="text-center">{d.time_setting_meridiem}</td>
                        <td className="text-center">{d.time_setting_kind}</td>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
                <div className="modal fade" id="AddNewSubAugust" tabindex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="fw-bold" for="selectTime">ប្រភេទម៉ោង</label>
                              <div className="col-sm-8">
                                <select className="form-select text-center" id="selectTime"
                                  value={myIdAugust}
                                  onChange={(e) => { setmyIdAugust(e.target.value) }}
                                  style={{ color: 'black', fontSize: "13px", lineHeight: "2" }}>
                                  <option>ជ្រើសរើសប្រភេទម៉ោង</option>
                                  <option value="ម៉ោងទី១">ម៉ោងទី១</option>
                                  <option value="ម៉ោងទី២">ម៉ោងទី២</option>
                                  <option value="ម៉ោងទី៣">ម៉ោងទី៣</option>
                                  <option value="ម៉ោងទី៤">ម៉ោងទី៤</option>
                                  <option value="ម៉ោងទី៥">ម៉ោងទី៥</option>
                                  <option value="ម៉ោងទី៦">ម៉ោងទី៦</option>
                                  <option value="ម៉ោងចេញលេងទី១">ម៉ោងចេញលេងទី១</option>
                                  <option value="ម៉ោងចេញលេងទី២">ម៉ោងចេញលេងទី២</option>
                                  <option value="ម៉ោងសម្រាក">ម៉ោងសម្រាក</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col-sm-6">
                                <label className="fw-bold">ផ្តើម</label>
                                <input placeholder="ផ្តើម" autocomplete="off"
                                  value={startAtAugust}
                                  onChange={e => { setstartAtAugust(e.target.value) }}
                                  style={{ color: "black" }} className="form-control"
                                  required type="time"
                                />
                              </div>
                              <div className="col-sm-6">
                                <label className="fw-bold">បញ្ចប់</label>
                                <input placeholder="បញ្ចប់" autocomplete="off"
                                  value={endAtAugust}
                                  onChange={e => { setendAtAugust(e.target.value) }}
                                  style={{ color: "black" }} className="form-control"
                                  required type="time"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                className="fw-bold">វេន</label>
                              <div className="col-sm-8">
                                <select class="form-select text-center" id="time_setting_meridiem"
                                  value={meridiemAugust}
                                  onChange={e => { setmeridiemAugust(e.target.value) }}
                                  style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                                  <option>ជ្រើសរើសវេន</option>
                                  <option value="ព្រឹក">ព្រឹក</option>
                                  <option value="ល្ងាច">ល្ងាច</option>
                                </select>
                              </div>
                            </div>
                            <label for="time_setting_kind">ប្រភេទ</label>
                            <div className="col-sm-8">
                              <select class="form-select text-center" id="time_setting_kind"
                                value={kindAugust}
                                onChange={e => { setkindAugust(e.target.value) }}
                                style={{ color: "black", fontSize: "13px", lineHeight: "2" }}>
                                <option>ជ្រើសរើសប្រភេទ</option>
                                <option value="សិក្សា">សិក្សា</option>
                                <option value="ចេញលេង">ចេញលេង</option>
                                <option value="សម្រាក">សម្រាក</option>
                              </select>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="modal-footer">
                        <CButton
                          ref={BtnPushAugust}
                          onClick={setDataAugust}
                          style={{ color: "white" }}
                          type="button" className="btn btn-success btn-sm">
                          <CIcon icon={cilArrowThickBottom} />   បញ្ចូល
                        </CButton>
                        <CButton
                          ref={BtnUpdateAugust}
                          onClick={UpdateDataAugust}
                          style={{ color: "white" }}
                          type="button" className="btn btn-warning btn-sm">
                          <CIcon icon={cilPen} />   កែ
                        </CButton>
                        <button
                          ref={BtnDeleteAugust}
                          onClick={deleteDataAugust}
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
    </>
  )
}

export default MonthScore
