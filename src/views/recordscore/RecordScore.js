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

const MonthScore = () => {
  //Array
  const [dataPrimary, setdataPrimary] = useState([])
  const [dataSecandary, setdataSecandary] = useState([])
  const [dataHigh, setdataHigh] = useState([])
  const [dataMonthAllowed, setdataMonthAllowed] = useState([])
  const [dataStudents, setdataStudents] = useState([])
  //New
  const [selectValueSubs, setselectValueSubs] = useState(localStorage.getItem('user_class') || 'default')
  const [selectClass, setselectClass] = useState(localStorage.getItem('user_classEn') || 'default')
  const [selectSubs, setselectSubs] = useState(localStorage.getItem('user_subs') || 'default')
  const [selectSubsKh, setselectSubsKh] = useState(localStorage.getItem('user_subsKh') || 'default')
  const [selectMonthShow, setselectMonthShow] = useState(localStorage.getItem('user_month') || 'default')
  const [userYear, setuserYear] = useState(localStorage.getItem('user_year') || 'default')

  const [user_login_subs, setuser_login_subs] = useState(localStorage.getItem('setSubs') || 'default')
  const [arraySub, setarraySub] = useState([])
  const [tableData, setTableData] = useState({}); // Load from Firebase

  const db = getDatabase();
  const dbMonthAllowed = ref(db, `/SalaMOM/tools/permitted`);

  const dbPrimaryClass = ref(db, `/SalaMOM/tools/class/បឋមសិក្សា`);
  const dbSecondaryClass = ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ`);
  const dbHighClass = ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ`);

  useEffect(() => {
    onValue(dbMonthAllowed, (data) => {
      const dataSet = data.val();
      setdataMonthAllowed(dataSet ? Object.values(dataSet) : []); // Convert object to array
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
  }, [])
  //Select Subjects

  useEffect(() => {
    const stringArray = user_login_subs.split(" ").filter(item => item);
    setarraySub(stringArray)
  }, [])
  useEffect(() => {
    localStorage.setItem('user_class', selectClass);
    setselectClass(localStorage.getItem('user_classEn') || 'default')
  }, [selectClass])
  useEffect(() => {
    localStorage.setItem('user_class', selectValueSubs);
    setselectValueSubs(localStorage.getItem('user_class') || 'default')
  }, [selectValueSubs])
  useEffect(() => {
    localStorage.setItem('user_subs', selectSubs);
    setselectSubs(localStorage.getItem('user_subs') || 'default')
  }, [selectSubs])
  useEffect(() => {
    localStorage.setItem('user_subsKh', selectSubsKh);
    setselectSubsKh(localStorage.getItem('user_subsKh') || 'default')
  }, [selectSubs])
  useEffect(() => {
    localStorage.setItem('user_month', selectMonthShow);
    setselectMonthShow(localStorage.getItem('user_month') || 'default')
  }, [selectMonthShow])

  useEffect(() => {
    const dbStudents = ref(db, `/SalaMOM/classes/` + `${userYear}/` + selectClass);
    onValue(dbStudents, (data) => {
      const dataSet = data.val();
      setTableData(dataSet || {});
      setdataStudents(dataSet ? Object.values(dataSet) : []);
    })
  }, [])
  //Data grade and subjects together and divide it
  const DataValueSub = (e) => {
    const getValue = e.target.value
    setselectValueSubs(getValue)
    var [cla] = getValue.substring(0, 2).split(" ");
    var [subs] = getValue.substring(3, 10).split(" ");
    if (subs == 'PE') {
      setselectSubsKh('កីឡា')
      localStorage.setItem('user_subsKh', 'កីឡា')
    }
    if (subs == 'E') {
      setselectSubsKh('អង់គ្លេស')
      localStorage.setItem('user_subsKh', 'អង់គ្លេស')
    }
    if (subs == 'ICT') {
      setselectSubsKh('កុំព្យូទ័រ')
      localStorage.setItem('user_subsKh', 'កុំព្យូទ័រ')
    }
    if (subs == 'M') {
      setselectSubsKh('គណិតវិទ្យា')
      localStorage.setItem('user_subsKh', 'គណិតវិទ្យា')
    }
    if (subs == 'C') {
      setselectSubsKh('គីមីវិទ្យា')
      localStorage.setItem('user_subsKh', 'គីមីវិទ្យា')
    }
    if (subs == 'Ho') {
      setselectSubsKh('គេហៈ')
      localStorage.setItem('user_subsKh', 'គេហៈ')
    }
    if (subs == 'Bio') {
      setselectSubsKh('ជីវៈវិទ្យា')
      localStorage.setItem('user_subsKh', 'ជីវៈវិទ្យា')
    }
    if (subs == 'H') {
      setselectSubsKh('ប្រវត្តិវិទ្យា')
      localStorage.setItem('user_subsKh', 'ប្រវត្តិវិទ្យា')
    }
    if (subs == 'ES') {
      setselectSubsKh('ផែនដីវិទ្យា')
      localStorage.setItem('user_subsKh', 'ផែនដីវិទ្យា')
    }
    if (subs == 'G') {
      setselectSubsKh('ភូមិវិទ្យា')
      localStorage.setItem('user_subsKh', 'ភូមិវិទ្យា')
    }
    if (subs == 'P') {
      setselectSubsKh('រូបវិទ្យា')
      localStorage.setItem('user_subsKh', 'រូបវិទ្យា')
    }
    if (subs == 'Ac') {
      setselectSubsKh('សកម្មភាព')
      localStorage.setItem('user_subsKh', 'សកម្មភាព')
    }
    if (subs == 'Bi') {
      setselectSubsKh('សិក្សាសីលធម៌')
      localStorage.setItem('user_subsKh', 'សិក្សាសីលធម៌')
    }
    if (subs == 'Mo') {
      setselectSubsKh('សីលធម៌-ពលរដ្ឋ')
      localStorage.setItem('user_subsKh', 'សីលធម៌-ពលរដ្ឋ')
    }
    if (subs == 'Eco') {
      setselectSubsKh('សេដ្ឋកិច្ច')
      localStorage.setItem('user_subsKh', 'សេដ្ឋកិច្ច')
    }
    if (subs == 'K') {
      setselectSubsKh('អក្សរសាស្ត្រខ្មែរ')
      localStorage.setItem('user_subsKh', 'អក្សរសាស្ត្រខ្មែរ')
    }
    if (subs == 'Sci') {
      setselectSubsKh('វិទ្យាសាស្ត្រ')
      localStorage.setItem('user_subsKh', 'វិទ្យាសាស្ត្រ')
    }
    if (subs == 'Soc') {
      setselectSubsKh('សិក្សាសង្គម')
      localStorage.setItem('user_subsKh', 'សិក្សាសង្គម')
    }
    localStorage.setItem('user_class', getValue)
    localStorage.setItem('user_classEn', cla.replace(/\b0+/g, ''))
    localStorage.setItem('user_subs', subs)
    setselectClass(cla)
    setselectSubs(subs)
    window.location.reload()
  }
  //Show months which are avaliable to use
  const ShowMonth = (e) => {
    const data = e.target.value
    localStorage.setItem('user_month', data)
    window.location.reload()
  }
  //Get grade from DataValueSub
  const SetGrade = () => {
    return (
      <select className="form-control text-center"
        value={selectValueSubs}
        onChange={DataValueSub}
        style={{ color: "black", lineHeight: "2", height: "2.5rem" }} id="sle_grade">
        <option>ជ្រើសរើសថ្នាក់</option>
        {arraySub.map((d, index) => (
          <option key={d} value={d.replace(/\b0+/g, '')}>{d.replace(/\b0+/g, '')}</option>
        ))}
      </select>
    )
  }
  //Header of the table
  const HeaderTable = () => {
    if (selectSubs === 'E') {
      return (
        <>
          <thead>
            <tr className="frezze">
              <th
                style={{
                  backgroundColor: "rgb(23, 116, 153)",
                  color: "white"
                }}
                className="border-dark text-center">ល.រ</th>
              <th
                style={{
                  backgroundColor: "rgb(23, 116, 153)",
                  color: "white"
                }}
                className="border-dark text-center">ឈ្មោះពេញ</th>
              <th
                style={{
                  backgroundColor: "rgb(23, 116, 153)",
                  color: "white"
                }}
                className="border-dark text-center">ភេទ</th>
              <th
                style={{
                  backgroundColor: "rgb(23, 116, 153)",
                  color: "white"
                }}
                className="border-dark text-center">{selectSubsKh}</th>
              <th
                style={{
                  backgroundColor: "rgb(23, 116, 153)",
                  color: "white"
                }}
                className="border-dark text-center">កិ.{selectSubsKh}</th>

            </tr>
          </thead>
        </>
      )
    }
  }
  //Select data in cell
  function SelectText(element) {
    const range = document.createRange();
    range.selectNodeContents(element.target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function EditableCell({ initialValue, databasePath }) {
    const [value, setValue] = useState(initialValue || '');
    const cellRef = useRef(null);

    const handleBlur = () => {
      // update(ref(database, databasePath), { value });
      update(ref(db, databasePath), {
        e_moct: value,
      });
      console.log(databasePath, value);
    };
    return (
      <td
        ref={cellRef}
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  }

  function App() {
    console.log(tableData);
    return (
      <div>
        <table>
          {/* Map over your table data to create rows and cells */}
          {Object.entries(tableData).map(([rowId, rowData]) => (
            <tr key={rowId}>
              {Object.entries(rowData).map(([cellId, cellValue]) => (
                <td key={cellId}>
                  <EditableCell
                  // initialValue={cellValue}
                  // databasePath={`table-data/${rowId}/${cellId}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  }


  const ScoreTable = () => {
    const dbF = getDatabase();
    const [value, setValue] = useState('');
    const cellRef = useRef(null);
    if (cellRef.current) {
      setValue(cellRef.current.value)

    }

    const handleBlur = (e) => {
      const setID = e.target.dataset.id
      const data = e.target.innerHTML

      update(ref(dbF, `/SalaMOM/classes/${userYear}/${selectClass}/` + setID), {
        e_moct: data,
      });

      console.log(e.target.dataset.id);
      console.log(e.target.innerHTML);
    };

    if (selectMonthShow === 'October') {
      if (selectSubs === 'E') {

        // useEffect(() => {
        //     update(ref(dbF, `/SalaMOM/classes/${userYear}/${selectClass}/` + getId), {
        //       e_moct: getData,
        //     });
        // }, [])

        const DataStudentArray = dataStudents.map((d, index) => {
          const id = d.id
          const gender = d.gender
          var e_moct = d.e_moct;
          var e_h_moct = d.e_h_moct;
          if (!e_moct) { e_moct = 0 }
          if (!e_h_moct) { e_h_moct = 0 }
          // if (getId) {
          //   console.log(getId,getData);
          //   update(ref(dbF, `/SalaMOM/classes/${userYear}/${selectClass}/` + getId), {
          //     e_moct: getData,
          //   });
          // }
          const editScore = (e) => {
            const setID = e.target.dataset.id
            const data = e.target.textContent
            setTimeout(() => {
              update(ref(dbF, `/SalaMOM/classes/${userYear}/${selectClass}/` + setID), {
                e_moct: data,
              });
            }, 2000);
          }
          const editScore2 = (e) => {
            const setID = e.target.dataset.id
            const data = e.target.textContent
            setTimeout(() => {
              update(ref(dbF, `/SalaMOM/classes/${userYear}/${selectClass}/` + setID), {
                e_h_moct: data,
              });
            }, 2000);
          }
          return (
            <>
              <tr key={d.id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{d.id}</td>
                <td className="text-center">{d.gender}</td>
                <td className="text-center" data-e_moct1={index + 1}
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const currentCell = e.target;
                      const currentIndex = parseInt(currentCell.dataset.e_moct1);
                      const nextCell = document.querySelector(`[data-e_moct1="${currentIndex + 1}"]`);
                      const focusedCell = document.activeElement;
                      if (focusedCell && focusedCell.tagName === "TD") {
                        const text = focusedCell.textContent;

                      }
                      if (nextCell) {
                        const range = document.createRange();
                        range.selectNodeContents(currentCell);
                        const selection = window.getSelection();
                        selection.removeAllRanges();
                        selection.addRange(range);
                        nextCell.focus();
                      }
                    }
                  }}
                  onClick={e => { SelectText(e) }}
                  data-id={d.id}
                  // onInput={editScore}
                  ref={cellRef}
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={handleBlur}
                  dangerouslySetInnerHTML={{ __html: d.e_moct }}
                >
                </td>
                <td contentEditable className="text-center" onClick={e => { SelectText(e) }} data-id={d.id} onInput={editScore2}>{d.e_h_moct}</td>
              </tr>
            </>
          )
        })
        return DataStudentArray;

      }
    }

  }


  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card card-primary card-outline">
          <div className="card-body">
            <div style={{ overflowX: "auto", padding: "15px" }}>
              <div className="text-center">
                <table className="table border-0 table-hover">
                  <thead>
                    <tr>
                      <td className="border-0 text-center">
                        <label for="user_teacher_id"
                          className="fw-bold">ជ្រើសរើសថ្នាក់</label>
                        <SetGrade />
                      </td>
                      <td className="border-0 text-center">
                        <label for="user_teacher_id" className="fw-bold">មុខវិជ្ជា</label>
                        <select className="form-control text-center" disabled
                          style={{ color: "black", lineHeight: "2", height: "2.5rem" }} id="sle_subs">
                          <option value={selectSubsKh}>{selectSubsKh}</option>
                        </select>
                      </td>
                      <td className="border-0 text-center">
                        <label for="user_teacher_id" className="fw-bold">ជ្រើសរើសខែ</label>
                        <select className="form-control text-center"
                          value={selectMonthShow}
                          onChange={ShowMonth}
                          style={{ color: "black", lineHeight: "2", height: "2.5rem" }} id="sle_month">
                          <option>ជ្រើសរើសខែ</option>
                          {dataMonthAllowed.map((d, index) => {
                            const id = d.id
                            var show_add_month = d.show_add_month;
                            var status = d.status;
                            var month = ''
                            if (show_add_month == 'October') { month = 'តុលា' };
                            if (show_add_month == 'November') { month = 'វិច្ឆិកា' };
                            if (show_add_month == 'December') { month = 'ធ្នូ' };
                            if (show_add_month == 'January') { month = 'មករា' };
                            if (show_add_month == 'February') { month = 'កុម្ភៈ' };
                            if (show_add_month == 'March') { month = 'មីនា' };
                            if (show_add_month == 'April-May') { month = 'មេសា-ឧសភា' };
                            if (show_add_month == 'June') { month = 'មិថុនា' };
                            if (show_add_month == 'July') { month = 'កក្កដា' };
                            if (show_add_month == '1st Semester') { month = 'ឆមាសទី១' };
                            if (show_add_month == '2nd Semester') { month = 'ឆមាសទី២' };

                            var monthKh = ''
                            if (selectMonthShow == 'October') { monthKh = 'តុលា' };
                            if (selectMonthShow == 'November') { monthKh = 'វិច្ឆិកា' };
                            if (selectMonthShow == 'December') { monthKh = 'ធ្នូ' };
                            if (selectMonthShow == 'January') { monthKh = 'មករា' };
                            if (selectMonthShow == 'February') { monthKh = 'កុម្ភៈ' };
                            if (selectMonthShow == 'March') { monthKh = 'មីនា' };
                            if (selectMonthShow == 'April-May') { monthKh = 'មេសា-ឧសភា' };
                            if (selectMonthShow == 'June') { monthKh = 'មិថុនា' };
                            if (selectMonthShow == 'July') { monthKh = 'កក្កដា' };
                            if (selectMonthShow == '1st Semester') { monthKh = 'ឆមាសទី១' };
                            if (selectMonthShow == '2nd Semester') { monthKh = 'ឆមាសទី២' };

                            if (['1st Semester', '2nd Semester'].includes(selectMonthShow)) {
                              setTimeout(() => {
                                document.getElementById('month_title').innerHTML = `សម្រាប់៖` + `${monthKh}`
                              }, 500)
                            }
                            else {

                              setTimeout(() => {
                                document.getElementById('month_title').innerHTML = `ខែ៖` + `${monthKh}`
                              }, 500)
                            }

                            if (show_add_month == 'October') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'November') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'December') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'January') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'February') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'March') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'April-May') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'June') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == 'July') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == '1st Semester') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }
                            if (show_add_month == '2nd Semester') {
                              if (status == 'active') {
                                return (
                                  <option value={show_add_month}>{month}</option>
                                )
                              }
                            }

                          })}
                        </select>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 grid-margin">
        <div className="card card-primary card-outline">
          <div className="card-body">
            <div className="text-center">
              <div className="row">
                <h4 className="card-title">បញ្ចូលពិន្ទុសិស្សថ្នាក់ទី
                  <strong
                    style={{ color: 'rgb(255, 0, 119)' }} id="grade_title">{selectClass}</strong> <strong
                      style={{ color: 'rgb(14, 90, 5)' }} id="month_title"></strong>
                </h4>
              </div>
            </div>
            <div
              style={{ overflowX: "auto", padding: "15px" }}>
              <Table className="table table-bordered table-hover">
                <HeaderTable />
                <tbody>
                  <ScoreTable />
                  {/* <App /> */}

                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MonthScore
