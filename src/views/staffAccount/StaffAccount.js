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
  const [dataStaff, setdataStaff] = useState([])
  const [dataArray, setdataArray] = useState([])
  const [dataYear, setdataYear] = useState([])
  const [dataPrimary, setdataPrimary] = useState([])
  const [dataSecandary, setdataSecandary] = useState([])
  const [dataHigh, setdataHigh] = useState([])
  const [dataSubjects, setdataSubjects] = useState([])
  const user_username = useRef(null);//Get from select and from input
  const user_password = useRef(null);
  const user_url = useRef(null);
  const user_role = useRef(null);
  const user_subs = useRef(null);
  const user_teacher_year = useRef(null);
  const [myId, setmyId] = useState('')
  const [name, setname] = useState('')

  const BtnUpdate = useRef('')
  const BtnPush = useRef('')
  const BtnDelete = useRef('')
  const db = getDatabase();
  const dbStaff = ref(db, `SalaMOM/staffs`);
  const dbArray = ref(db, `/SalaMOM/users/`);
  const dbYear = ref(db, `/SalaMOM/tools/years/`);
  const dbSubjects = ref(db, `/SalaMOM/tools/subjects/`);

  const dbPrimaryClass = ref(db, `/SalaMOM/tools/class/បឋមសិក្សា`);
  const dbSecondaryClass = ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ`);
  const dbHighClass = ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ`);

  useEffect(() => {
    onValue(dbStaff, (data) => {
      const dataSet = data.val();
      setdataStaff(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbArray, (data) => {
      const dataSet = data.val();
      setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbYear, (data) => {
      const dataSet = data.val();
      setdataYear(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbPrimaryClass, (data) => {
      const dataSet = data.val();
      setdataPrimary(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbSecondaryClass, (data) => {
      const dataSet = data.val();
      setdataSecandary(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbHighClass, (data) => {
      const dataSet = data.val();
      setdataHigh(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbSubjects, (data) => {
      const dataSet = data.val();
      setdataSubjects(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    BtnUpdate.current.style.display = 'none'
  }, [])

  const SetPicture = (d) => {
    if (d.get_url_pic) {
      return (< img className="me-3" style={{ width: "50px" }
      } src={d.get_url_pic} alt="image" />
      )
    } else {

      return (< img className="me-3" style={{ width: "50px" }
      } src="https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png" alt="image" />
      )
    }
  }
  setTimeout(() => {
    //Select username and img url
    const dropdownContent = document.querySelector('.dropdown-content');
    const selectedLabelInput = document.getElementById('user_teacher_id');
    const imageUrlInput = document.getElementById('user_url');


    dropdownContent.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const label = event.target.dataset.label;
        const imageUrl = event.target.dataset.image;
        selectedLabelInput.value = label;
        imageUrlInput.value = imageUrl;
        setname(label)
        user_url.current.value = imageUrl
        dropdownContent.classList.remove('show');
      }
    });



    //Set Grade and Subject together

    const gradeInputs = document.querySelectorAll('#selection input[type="checkbox"][id^="grade"]');
    const subjectInputs = document.querySelectorAll('#selection input[type="checkbox"][id^="subject"]');
    const btn = document.getElementById('add');

    const input1 = document.getElementById('selectedSubjects3');
    const input2 = document.getElementById('getInput');

    function addSelected() {
      let selectedValues = [];
      const grades = document.querySelectorAll('input[id^="grade"]');
      for (const grade of grades) {
        if (grade.checked) {
          selectedValues.push(grade.value);
        }
      }

      const subjects = document.querySelectorAll('input[id^="subject"]');
      for (const subject of subjects) {
        if (subject.checked) {
          selectedValues.push(subject.value);
        }
      }
      // setTimeout(() => {
      //   if (selectedValues.length === 0) {
      //     Swal.fire({
      //       text: "សូមជ្រើសរើសយ៉ាងហោចឲ្យបាន១មុខ!",
      //       icon: "error",
      //       showConfirmButton: false,
      //       timer: 2500,
      //     });
      //   }
      // }, 500);
      // 1. Create Combined Strings
      const lastArrayElement = selectedValues.pop();
      const combinations = selectedValues.filter(item => item !== lastArrayElement).map(item => `${item}-${lastArrayElement}`);

      // 2. Join into Final String
      const resultString = combinations.join(' '); // Add spaces between combinations

      // console.log(combinations);
      // Append the newly selected value to the existing input, if any
      input1.value = input1.value ? `${input1.value} ${resultString}` : `${input1.value} ${resultString}`;

      // Clear the checkbox selections
      grades.forEach(checkbox => checkbox.checked = false);
      subjects.forEach(checkbox => checkbox.checked = false);

      // Update input2 with the latest value from input1
      // input2.value = input1.value;
    }

    btn.addEventListener('click', addSelected);

  }, 500);
  const handleShowData = (e) => {
    const getId = e.currentTarget.dataset.staffid
    const getUsername = e.currentTarget.dataset.fullname
    const getPassword = e.currentTarget.dataset.password
    const getUrl = e.currentTarget.dataset.pictureurl
    const getRole = e.currentTarget.dataset.role
    const getSubs = e.currentTarget.dataset.subs
    const getname = e.currentTarget.dataset.name
    const getYear = e.currentTarget.dataset.teacheryear

    user_username.current.value = getUsername
    user_password.current.value = getPassword
    user_url.current.value = getUrl
    user_role.current.value = getRole
    user_subs.current.value = getSubs
    user_teacher_year.current.value = getYear
    setmyId(getId)
    setname(getname)
    BtnPush.current.style.display = 'none'
    BtnUpdate.current.style.display = 'inline-block'
    BtnDelete.current.style.display = 'inline-block'
  }

  const emptyFill = () => {
    BtnPush.current.style.display = 'inline-block'
    BtnUpdate.current.style.display = 'none'
    BtnDelete.current.style.display = 'none'

    user_username.current.value = null
    user_url.current.value = null
    user_role.current.value = null
    user_subs.current.value = null
    user_teacher_year.current.value = null
    setname('')
    const number = dataArray.length
    console.log(number);
    if (number == null) {
      setmyId(0)
    } else {
      setmyId(number+1)
    }

    setTimeout(() => {
      //Auto password
      function generateRandomString() {
        const digits = "0123456789";
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const small_letter = uppercaseLetters.toLowerCase();
        let result = "";

        // Generate two random digits
        for (let i = 0; i < 3; i++) {
          result += digits[Math.floor(Math.random() * digits.length)];
        }

        // Generate two random uppercase letters
        for (let i = 0; i < 2; i++) {
          result += small_letter[Math.floor(Math.random() * uppercaseLetters.length)];
        }

        // Shuffle the characters for a more random order (optional)
        result = result.split("").sort(() => Math.random() - 0.5).join("");

        return result;
      }
      //Click create new to clear the form// Random password// username with no space
      const randomString = generateRandomString();
      user_password.current.value = randomString

    }, 500);
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

      set(ref(db, `/SalaMOM/users/` + myId), {
        id: myId,
        fullname: name,
        user_username: user_username.current.value,
        user_password: user_password.current.value,
        user_url: user_url.current.value,
        user_role: user_role.current.value,
        user_subs: user_subs.current.value,
        user_teacher_year: user_teacher_year.current.value,
      });
      user_username.current.value = null
      user_password.current.value = null
      user_url.current.value = null
      user_role.current.value = null
      user_subs.current.value = null
      user_teacher_year.current.value = null
      setmyId('')
      setname('')

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

      update(ref(db, `/SalaMOM/users/` + myId), {
        id: myId,
        fullname: name,
        user_username: user_username.current.value,
        user_password: user_password.current.value,
        user_url: user_url.current.value,
        user_role: user_role.current.value,
        user_subs: user_subs.current.value,
        user_teacher_year: user_teacher_year.current.value,
      });
      user_username.current.value = null
      user_password.current.value = null
      user_url.current.value = null
      user_role.current.value = null
      user_subs.current.value = null
      user_teacher_year.current.value = null
      setmyId('')
      setname('')
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
      remove(ref(db, `/SalaMOM/users/` + myId));
      user_username.current.value = null
      user_password.current.value = null
      user_url.current.value = null
      user_role.current.value = null
      user_subs.current.value = null
      user_teacher_year.current.value = null
      setmyId('')
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
  const SearchUsers = () => {
    setTimeout(() => {
      const searchInput = document.getElementById("searchInput");
      const tbody = document.querySelector("table tbody");

      searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        const matchingRows = Array.from(tbody.querySelectorAll("tr")).filter((row) => {
          return Array.from(row.querySelectorAll("td")).some((cell) => {
            return cell.textContent.toLowerCase().includes(searchTerm);
          });
        });

        for (const row of tbody.querySelectorAll("tr")) {
          row.classList.add("hidden"); // Hide all rows initially
        }

        for (const row of matchingRows) {
          row.classList.remove("hidden"); // Show only matching rows
        }
      });

    }, 1500);
    return (
      <>
        <div className="input-group" style={{ padding: "15px" }}>
          <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
            <span
              style={{
                height: "38px"
              }}
              className="input-group-text" id="search">
              <CIcon icon={cilSearch} />
            </span>
          </div>
          <input type="text" className="form-control" id="searchInput" placeholder="ស្វែងរក"
            aria-label="search" aria-describedby="search"></input>
        </div>

      </>
    )
  }

  const setSubject = (e) => {
    const setID = e.target.dataset.id
    const data = e.target.innerHTML
    if (setID) {
      update(ref(db, `/SalaMOM/users/` + setID), {
        user_subs: data,
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
                <h4 className="card-title">បង្កើតគណនីបុគ្គលិក</h4>
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
                  <SearchUsers />
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
                      className="border-dark text-center">ឈ្មោះបុគ្គលិក</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">ឈ្មោះចូលប្រព័ន្ធ</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">លេខសម្ងាត់</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">សិទ្ធិប្រើប្រាស់ប្រព័ន្ធ</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">មុខវិជ្ជាបង្រៀន</CTableDataCell>
                    <CTableDataCell
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="border-dark text-center">ឆ្នាំសិក្សា</CTableDataCell>

                  </CTableRow>
                </CTableHead>
                <CTableBody className="staff_account">
                  {dataArray.map((d, index) => (
                    <CTableRow>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-start"
                        onClick={handleShowData}
                        data-bs-toggle="modal"
                        data-bs-target="#AddNewSub"
                        data-fullname={d.user_username}
                        data-name={d.fullname}
                        data-password={d.user_password}
                        data-role={d.user_role}
                        data-subs={d.user_subs}
                        data-teacheryear={d.user_teacher_year}
                        data-pictureurl={d.user_url}
                        data-staffid={d.id}
                      >
                        <img className="me-2" style={{ width: "40px" }} src={d.user_url} alt="image"></img>
                        {d.fullname}</td>
                      <td className="text-center">{d.user_username}</td>
                      <td className="text-center">{d.user_password}</td>
                      <td className="text-center">{d.user_role}</td>
                      <td className="text-center"
                        data-id={d.id}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={setSubject}
                        dangerouslySetInnerHTML={{ __html: d.user_subs }}
                      ></td>
                      <td className="text-center">
                        <select className="text-center"
                          onChange={e => {
                            const data = e.target.options[e.target.selectedIndex].value;
                            const id = d.id;
                            if (id) {
                              update(ref(db, `/SalaMOM/users/` + id), {
                                user_teacher_year: data,
                              });
                            }
                          }}
                        value={d.user_teacher_year}
                        >
                          <option value="">ជ្រើសរើសឆ្នាំសិក្សា
                          </option>
                          {dataYear.map((d, index) => (
                            <option value={d.yearEn}>{d.yearKh}</option>
                          ))}
                      </select>
                      </td>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <div className="modal fade" id="AddNewSub" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="dropdown dropup">
                        <button className="btn dropdown-toggle" type="button"
                          id="dropdownMenuName" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          ឈ្មោះបុគ្គលិក
                        </button>
                        <ul className="dropdown-menu menu-lg-scroll dropdown-content"
                          aria-labelledby="dropdownMenuName" id="select_username">
                          {dataStaff.map((d, index) => (
                            <li class="dropdown-item" data-label={d.id} data-image={d.get_url_pic}>
                              <span className="me-3">{index + 1}.</span>
                              {SetPicture(d)}
                              {d.id}</li>
                          ))}
                        </ul>

                      </div>
                      <p>
                        <input className="form-control" type="text"
                          value={myId}
                          onInput={e => { setmyId(e.target.value) }}
                          placeholder="ID"
                        />

                        <input className="form-control" type="text"
                          value={name}
                          placeholder="Username"
                          onInput={e => { setname(e.target.value) }}
                          onkeyup="this.value = this.value.toLowerCase()"
                          name="user[username]" id="user_teacher_id" />
                        <input className="form-control" type="hidden"
                          ref={user_url}
                          onkeyup="this.value = this.value.toLowerCase()"
                          name="user[username]" id="user_url" />

                      </p>
                      <p>
                        <label for="user_teacher_id">ឆ្នាំសិក្សា</label>
                        <select
                          ref={user_teacher_year}
                          className="form-control" style={{ color: "black", lineHeight: "2" }}
                          id="user_teacher_year">
                          <option value="">ជ្រើសរើសឆ្នាំសិក្សា
                          </option>
                          {dataYear.map((d, index) => (
                            <option value={d.yearEn}>{d.yearKh}</option>
                          ))}
                        </select>
                      </p>
                      <p>
                        <label for="user_name">ឈ្មោះចូលប្រព័ន្ធ</label>
                        <input className="form-control" type="text"
                          ref={user_username}
                          onkeyup="this.value = this.value.toLowerCase()"
                          name="user[username]" id="user_username" />
                      </p>
                      <p>
                        <label for="user_name">លេខសម្ងាត់</label>
                        <input className="form-control" type="text" name="user_password"
                          ref={user_password}
                          id="user_password" />
                      </p>
                      <p>
                        <label for="user_role">សិទ្ធិប្រើប្រាស់ប្រព័ន្ធ</label>
                        <select
                          ref={user_role}
                          className="form-control" style={{ color: "black", lineHeight: "2" }}
                          id="user_role">
                          <option value="">
                            ជ្រើសរើសសិទ្ធិប្រើប្រាស់ប្រព័ន្ធ
                          </option>
                          <option value="admin">Admin សាលា
                          </option>
                          <option value="is_branch">នាយកសាខា
                          </option>
                          <option value="supervisor">
                            ប្រធានផ្នែក</option>
                          <option value="assistant">
                            ជំនួយការ</option>
                          <option value="is_accountant">
                            គណនេយ្យករ</option>
                          <option value="receptionist">
                            អ្នកចុះឈ្មោះសិស្ស</option>
                          <option value="is_teacher">គ្រូបង្រៀន
                          </option>
                        </select>
                      </p>
                      <p>
                        <div className="dropdown dropup">
                          <label for="user_subs">មុខវិជ្ជាបង្រៀន</label> <br />
                          <button className="btn dropdown-toggle" type="button"
                            id="dropdownMenuButton4" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            ថ្នាក់រៀន
                          </button>
                          <ul className="dropdown-menu menu-lg-scroll"
                            aria-labelledby="dropdownMenuButton3" id="subjectList4">
                            {dataPrimary.map((d, index) => (
                              <li><a class="dropdown-item"><input type="checkbox"
                                className="me-2"
                                id={'grade' + d.clEn} value={d.clEn} />
                                <label for="subject-math">{d.clKh}</label>
                                <br /></a></li>
                            ))}
                            {dataSecandary.map((d, index) => (
                              <li><a class="dropdown-item"><input type="checkbox"
                                className="me-2"
                                id={'grade' + d.clEn} value={d.clEn} />
                                <label for="subject-math">{d.clKh}</label>
                                <br /></a></li>
                            ))}
                            {dataHigh.map((d, index) => (
                              <li><a class="dropdown-item"><input type="checkbox"
                                className="me-2"
                                id={'grade' + d.clEn} value={d.clEn} />
                                <label for="subject-math">{d.clKh}</label>
                                <br /></a></li>
                            ))}
                          </ul>
                          <button className="btn dropdown-toggle" type="button"
                            id="dropdownMenuButton3" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            មុខវិជ្ជា
                          </button>
                          <ul className="dropdown-menu menu-lg-scroll"
                            aria-labelledby="dropdownMenuButton3" id="subjectList3">
                            {dataSubjects.map((d, index) => (
                              <li><a class="dropdown-item"><input type="checkbox"
                                className="me-2"
                                id={'subject' + d.subEn} value={d.subAbr} />
                                <label for="subject-math">{d.subKh}</label>
                                <br /></a></li>
                            ))}
                          </ul>
                          <p className="text-center">
                            <button
                              style={{ color: "white" }}
                              className="btn btn-success btn-rounded btn-fw btn-sm"
                              id="add">ដាក់ចូលគ្នា</button></p>
                        </div>
                        <input
                          ref={user_subs}
                          autocomplete="off" className="form-control" type="text"
                          id="selectedSubjects3" />
                      </p>

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
