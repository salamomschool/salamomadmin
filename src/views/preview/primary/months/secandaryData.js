import React, { useEffect, useState, useRef } from "react";
import firebase from '../../../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowThickBottom, cilDataTransferDown, cilPen, cilPlus, cilPrint, cilSave, cilSearch, cilTrash, cilUser } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow } from "@coreui/react";
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import { meta } from "eslint-plugin-prettier";
import jsPDF from 'jspdf';

export default function SecondaryData() {
  const db = getDatabase();

  const [dbLevel, setdbLevel] = useState(localStorage.getItem('dbLevelPreview') || 'default')
  const [dbGrade, setdbGrade] = useState(localStorage.getItem('dbGradePreview') || 'default')
  const [dbMonths, setdbMonths] = useState(localStorage.getItem('dbMonthsPreview') || 'default')
  const [dbYears, setdbYears] = useState(localStorage.getItem('dbYearsPreview') || 'default')
  const [dbDivi, setdbDivi] = useState(localStorage.getItem('dbDiviPreview') || 'default')
  const [dataStd, setdataStd] = useState([])
  const [dataAllGrades, setdataAllGrades] = useState([])
  const [dataAverage, setdataAverage] = useState([])
  const [getGrade, setgetGrade] = useState([])
  const [maleNum, setmaleNum] = useState(0)
  const [failNum, setfailNum] = useState(0)
  const [failMale, setfailMale] = useState(0)
  const [failFemale, setfailFemale] = useState(0)
  const [totalKh, settotalKh] = useState(0)
  const [femaleKh, setfemaleKh] = useState(0)
  const [passKh, setpassKh] = useState(0)
  const [passFemaleKh, setpassFemaleKh] = useState(0)
  const [failKh, setfailKh] = useState(0)
  const [failFemaleKh, setfailFemaleKh] = useState(0)
  const [saveDate, setsaveDate] = useState(localStorage.getItem('saveDate') || 'default')

  const [dbYearKh, setdbYearKh] = useState(localStorage.getItem('dbYearsKhPreview') || 'default')

  const [date, setDate] = useState(localStorage.getItem('saveDate') || 'default');
  const [month, setMonth] = useState(localStorage.getItem('saveMonth') || 'default');
  const [year, setYear] = useState(localStorage.getItem('saveYear') || 'default');
  const [valeDate, setvaleDate] = useState(localStorage.getItem('valeDate') || 'default');
  const [isChecked, setIsChecked] = useState(localStorage.getItem('checked_four') || 'false');

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
    localStorage.setItem('saveDate', date);
    setsaveDate(localStorage.getItem('saveDate') || 'default')
  }, [date]);
  useEffect(() => {
    localStorage.setItem('saveYear', year);
    setYear(localStorage.getItem('saveYear') || 'default')
  }, [year]);
  useEffect(() => {
    localStorage.setItem('saveMonth', month);
    setMonth(localStorage.getItem('saveMonth') || 'default')
  }, [month]);
  useEffect(() => {
    localStorage.setItem('valeDate', valeDate);
    setvaleDate(localStorage.getItem('valeDate') || 'default')
  }, [valeDate]);
  useEffect(() => {
    localStorage.setItem('dbYearsKhPreview', dbYearKh);
    setdbYearKh(localStorage.getItem('dbYearsKhPreview') || 'default')
  }, [dbYearKh]);
  // useEffect(() => {
  //   localStorage.setItem('checked_four', isChecked);
  //   setIsChecked(localStorage.getItem('checked_four') || 'default')
  // }, [isChecked]);

  //Array g1-3
  let primary_g_p1 = [
    '07A',
    '08A',
    '09A',
    '07B',
    '08B',
    '09B',
    '07C',
    '08C',
    '09C',
  ]
  let primary_g2 = [
    '08A',
    '09A',
    '08B',
    '09B',
    '08C',
    '09C',
  ]
  //Array g1
  let primary_g1 = [
    '07A',
    '07B',
    '07C',
  ]
  //Array g4-6
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

  //Conver array for different class
  function arrayClass(getClass) {
    const khmerDigits = {
      "7A": primary_g_p1,
      "8A": primary_g_p1,
      "9A": primary_g_p1,
      "7B": primary_g_p1,
      "8B": primary_g_p1,
      "9B": primary_g_p1,
      "7C": primary_g_p1,
      "8C": primary_g_p1,
      "9C": primary_g_p1,
    };

    if (getClass) {
      return khmerDigits[getClass]; // Use dictionary for single digits
    }
  }
  const classArray = arrayClass(dbGrade.replace(/^0/, ""))

  //Array months for showing data
  const monthsArr = [
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'AprilMay',
    'June',
    'July',
    'firstSemester',
    'secondSemester',
    'firstSemesterResult',
    'secondSemesterResult',
    'fourmonths1',
    'fourmonths2',
    'AnnualYear',
    'allSemesters',
  ];

  //Get array months for database using
  function arrayMonths(getArMonths) {
    const khmerDigits = {
      October: "moct",
      November: "mnov",
      December: "mdec",
      January: "mjan",
      February: "mfeb",
      March: "mmarch",
      AprilMay: "mapma",
      June: "mjun",
      July: "mjul",
      firstSemester: "m1semester",
      secondSemester: "m2semester",
      firstSemesterResult: "firstSemesterResult",
      secondSemesterResult: "secondSemesterResult",
      fourmonths1: "fourmonths1",
      fourmonths2: "fourmonths2",
      AnnualYear: "AnnualYear",
      allSemesters: "allSemesters",
    };

    if (getArMonths) {
      return khmerDigits[getArMonths]; // Use dictionary for single digits
    }
  }
  const arrMonths = arrayMonths(dbMonths)

  //Save File to Excel
  const exportToExcel2 = (type, fn, dl) => {
    var elt = document.getElementById("showData");
    var wb = XLSX.utils.table_to_book(elt, { sheet: `${dbGrade}-${subMonth} ` });
    return dl
      ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
      : XLSX.writeFile(wb, fn || `លទ្ធផល/${dbGrade}/ ` + `${subMonth}.` + ("xlsx"));
  };
  const exportToExcel4 = () => {
    const content = document.getElementById("show_data_result").innerHTML;
    const encodedContent = encodeURIComponent(content);

    const link = document.createElement("a");
    link.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet," + encodedContent;
    // link.download = "my-exported-document.xls";
    link.download = `លទ្ធផល/${dbGrade}/ ` + `${subMonth}.xls`;
    link.click();
  }
  const exportToExcel5 = () => {
    const content = document.getElementById("showData").innerHTML;
    const encodedContent = encodeURIComponent(content);

    const link = document.createElement("a");
    link.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet," + encodedContent;
    link.download = "my-exported-document.xlsx";
    link.click();
  }
  const exportToExcel = () => {
    const content = document.getElementById("allData").innerHTML;
    const encodedContent = encodeURIComponent(content);

    const link = document.createElement("a");
    link.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + btoa(unescape(encodeURIComponent(content)));
    link.download = `លទ្ធផល/${dbGrade}/ ` + `${subMonth}.xls`;
    link.click();
  }
  const exportToExcel6 = () => {
    // Get the table data
    const table = document.getElementById("showData");
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });

    // Apply styles to the cells
    const sheet = workbook.Sheets["Sheet1"];
    for (let cell in sheet) {
      if (sheet[cell].t) { // Check if the cell is not a special property
        // Example: Apply a background color to all cells
        sheet[cell].s = {
          fill: {
            fgColor: { rgb: "FFFF00" } // Yellow background
          }
        };
      }
    }

    // Create a binary string representation of the workbook
    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

    // Convert the binary string to a Blob
    const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "my-exported-document.xlsx";
    link.click();
  };

  // Helper function to convert a string to an ArrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };


  const SaveToWordEn = () => {
    const content = document.getElementById("showData").innerHTML;
    const encodedContent = encodeURIComponent(content);

    const link = document.createElement("a");
    link.href = "data:application/msword," + encodedContent;
    link.download = "my-exported-document.doc";
    link.click();
  }
  const SaveToExGen = () => {
    const content = document.getElementById("showData").innerHTML;
    const encodedContent = encodeURIComponent(content);

    const link = document.createElement("a");
    link.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet," + encodedContent;
    link.download = "my-exported-document.xls";
    link.click();
  }

  //Conver to Khmer number for all
  function gradeKH(number) {
    if (number < 0) {
      return "-" + gradeKH(Math.abs(number)); // Handle negative numbers
    }
    const khmerDigits = {
      0: "០",
      1: "១",
      2: "២",
      3: "៣",
      4: "៤",
      5: "៥",
      6: "៦",
      7: "៧",
      8: "៨",
      9: "៩"
    };

    if (number < 10) {
      return khmerDigits[number]; // Use dictionary for single digits
    } else {
      const tensDigit = Math.floor(number / 10);
      const onesDigit = number % 10;
      return khmerDigits[tensDigit] + khmerDigits[onesDigit]; // Combine digits
    }
  }

  function letterKH(number) {
    const khmerDigits = {
      A: "ក",
      B: "ខ",
      C: "គ",
      D: "ឃ",
      E: "ង",
    };

    if (number) {
      return khmerDigits[number]; // Use dictionary for single digits
    }
  }

  //Conver to Khmer months title
  function subMonths(months) {
    const khmerDigits = {
      October: "តុលា",
      November: "វិច្ឆិកា",
      December: "ធ្នូ",
      January: "មករា",
      February: "កុម្ភៈ",
      March: "មីនា",
      AprilMay: "មេសា-ឧសភា",
      June: "មិថុនា",
      July: "កក្កដា",
      firstSemester: "ឆមាសទី១",
      secondSemester: "ឆមាសទី២",
      firstSemesterResult: "ប្រចាំឆមាសទី១",
      secondSemesterResult: "ប្រចាំឆមាសទី២",
      fourmonths1: "ពិន្ទុ៤ខែឆមាសទី១",
      fourmonths2: "ពិន្ទុ៤ខែឆមាសទី២",
      AnnualYear: "ប្រចាំឆ្នាំ",
    };

    if (months) {
      return khmerDigits[months]; // Use dictionary for single digits
    }
  }

  function subMonthsPrint(months) {
    const khmerDigits = {
      October: "ចំណាត់ថ្នាក់ប្រចាំខែ តុលា",
      November: "ចំណាត់ថ្នាក់ប្រចាំខែ វិច្ឆិកា",
      December: "ចំណាត់ថ្នាក់ប្រចាំខែ ធ្នូ",
      January: "ចំណាត់ថ្នាក់ប្រចាំខែ មករា",
      February: "ចំណាត់ថ្នាក់ប្រចាំខែ កុម្ភៈ",
      March: "ចំណាត់ថ្នាក់ប្រចាំខែ មីនា",
      AprilMay: "ចំណាត់ថ្នាក់ប្រចាំខែ មេសា-ឧសភា",
      June: "ចំណាត់ថ្នាក់ប្រចាំខែ មិថុនា",
      July: "ចំណាត់ថ្នាក់ប្រចាំខែ កក្កដា",
      firstSemester: "ចំណាត់ថ្នាក់ប្រឡង ឆមាសទី១",
      secondSemester: "ចំណាត់ថ្នាក់ប្រឡង ឆមាសទី២",
      firstSemesterResult: "ចំណាត់ថ្នាក់ ប្រចាំឆមាសទី១",
      secondSemesterResult: "ចំណាត់ថ្នាក់ ប្រចាំឆមាសទី២",
      fourmonths1: "ចំណាត់ថ្នាក់ ពិន្ទុ៤ខែឆមាសទី១",
      fourmonths2: "ចំណាត់ថ្នាក់ ពិន្ទុ៤ខែឆមាសទី២",
      AnnualYear: "ចំណាត់ថ្នាក់ ប្រចាំឆ្នាំ",
    };

    if (months) {
      return khmerDigits[months]; // Use dictionary for single digits
    }
  }

  //Conver to Khmer number result
  const numericPart = parseInt(dbGrade);
  const alphabeticPart = dbGrade.replace(/\d+/g, '');
  let numKh = gradeKH(numericPart)
  let lettersKh = letterKH(alphabeticPart)
  let subMonth = subMonths(dbMonths)
  let subMonthPrinting = subMonthsPrint(dbMonths)

  //Database
  const dataAll = ref(db, `/SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}`);
  const dbAllGrade = ref(db, `/SalaMOM/tools/class/` + dbLevel);

  useEffect(() => {
    onValue(dataAll, (data) => {
      const dataSet = data.val();
      if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
        //Get Students numbers
        let num = 0; //Male Total
        let j = 0; //Total Fail std
        let k = 0;//Male fail
        let l = 0;//Female fail
        data.forEach(e => {
          let g = e.val().gender
          let h = e.val()[`average_${arrMonths}`]
          let i = ''
          let n = ''
          if (h <= 24.9) {
            i = 'ធ្លាក់'
            n = `ធ្លាក់${g}`
          }
          let m = 'ប'
          let fa = 'ធ្លាក់'
          if (g === m) {
            num++
          }
          if (i === fa) {
            j++
          }
          if (n === 'ធ្លាក់ប') {
            k++
          }
          if (n === 'ធ្លាក់ស') {
            l++
          }
          setdataAverage(h)
        })
        setmaleNum(num)
        setfailNum(j)
        setfailMale(k)
        setfailFemale(l)

      }
      if (['fourmonths1', 'fourmonths2'].includes(dbMonths)) {
        //Get Students numbers
        let num = 0; //Male Total
        let j = 0; //Total Fail std
        let k = 0;//Male fail
        let l = 0;//Female fail
        data.forEach(e => {
          let g = e.val().gender
          let h = e.val()[`getAverage_${arrMonths}`]
          let i = ''
          let n = ''
          if (h <= 24.9) {
            i = 'ធ្លាក់'
            n = `ធ្លាក់${g}`
          }
          let m = 'ប'
          let fa = 'ធ្លាក់'
          if (g === m) {
            num++
          }
          if (i === fa) {
            j++
          }
          if (n === 'ធ្លាក់ប') {
            k++
          }
          if (n === 'ធ្លាក់ស') {
            l++
          }
          setdataAverage(h)
        })
        setmaleNum(num)
        setfailNum(j)
        setfailMale(k)
        setfailFemale(l)

      }
      if (['AnnualYear'].includes(dbMonths)) {
        //Get Students numbers
        let num = 0; //Male Total
        let j = 0; //Total Fail std
        let k = 0;//Male fail
        let l = 0;//Female fail
        data.forEach(e => {
          let g = e.val().gender
          let h = e.val()[`total_${arrMonths}`]
          let i = ''
          let n = ''
          if (h <= 24.99) {
            i = 'ធ្លាក់'
            n = `ធ្លាក់${g}`
          }
          let m = 'ប'
          let fa = 'ធ្លាក់'
          if (g === m) {
            num++
          }
          if (i === fa) {
            j++
          }
          if (n === 'ធ្លាក់ប') {
            k++
          }
          if (n === 'ធ្លាក់ស') {
            l++
          }
          setdataAverage(h)
        })
        setmaleNum(num)
        setfailNum(j)
        setfailMale(k)
        setfailFemale(l)

      }
      if (['firstSemesterResult', 'secondSemesterResult'].includes(dbMonths)) {
        if (dbMonths === 'firstSemesterResult') {
          //Get Students numbers
          let num = 0; //Male Total
          let j = 0; //Total Fail std
          let k = 0;//Male fail
          let l = 0;//Female fail
          data.forEach(e => {
            let g = e.val().gender
            let h = e.val()[`average_ALLfirstSemesterResult`]
            let i = ''
            let n = ''
            if (h <= 24.99) {
              i = 'ធ្លាក់'
              n = `ធ្លាក់${g}`
            }
            let m = 'ប'
            let fa = 'ធ្លាក់'
            if (g === m) {
              num++
            }
            if (i === fa) {
              j++
            }
            if (n === 'ធ្លាក់ប') {
              k++
            }
            if (n === 'ធ្លាក់ស') {
              l++
            }
            setdataAverage(h)
          })
          setmaleNum(num)
          setfailNum(j)
          setfailMale(k)
          setfailFemale(l)

        }
        if (dbMonths === 'secondSemesterResult') {
          //Get Students numbers
          let num = 0; //Male Total
          let j = 0; //Total Fail std
          let k = 0;//Male fail
          let l = 0;//Female fail
          data.forEach(e => {
            let g = e.val().gender
            let h = e.val()[`average_ALLsecondSemesterResult`]
            let i = ''
            let n = ''
            if (h <= 24.99) {
              i = 'ធ្លាក់'
              n = `ធ្លាក់${g}`
            }
            let m = 'ប'
            let fa = 'ធ្លាក់'
            if (g === m) {
              num++
            }
            if (i === fa) {
              j++
            }
            if (n === 'ធ្លាក់ប') {
              k++
            }
            if (n === 'ធ្លាក់ស') {
              l++
            }
            setdataAverage(h)
          })
          setmaleNum(num)
          setfailNum(j)
          setfailMale(k)
          setfailFemale(l)

        }

      }
      if ([
        'October',
        'November',
        'December',
        'January',
        'February',
        'March',
        'AprilMay',
        'June',
        'July',
      ].includes(dbMonths)) {
        //Get Students numbers
        let num = 0; //Male Total
        let j = 0; //Total Fail std
        let k = 0;//Male fail
        let l = 0;//Female fail
        data.forEach(e => {
          let g = e.val().gender
          let h = e.val()[`average_${arrMonths}`]
          let i = ''
          let n = ''
          if (h <= 24.99) {
            i = 'ធ្លាក់'
            n = `ធ្លាក់${g}`
          }
          let m = 'ប'
          let fa = 'ធ្លាក់'
          if (g === m) {
            num++
          }
          if (i === fa) {
            j++
          }
          if (n === 'ធ្លាក់ប') {
            k++
          }
          if (n === 'ធ្លាក់ស') {
            l++
          }
          setdataAverage(h)
        })
        setmaleNum(num)
        setfailNum(j)
        setfailMale(k)
        setfailFemale(l)

      }
      let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array
      // dataAllGrades.sort(function (a, b) { return b.fullname - a.fullname });

      dataAllGrades.sort((a, b) => {
        if (a.fullname < b.fullname) return -1;
        if (a.fullname > b.fullname) return 1;
        return 0;
      });

      setdataStd(dataAllGrades); // Convert object to array

    })

    // Database Grades
    onValue(dbAllGrade, (data) => {
      const dataSet = data.val();
      data.forEach(e => {
        let en = e.val().clEn
        setgetGrade(en)
      })
      setdataAllGrades(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })

  }, [])

  //Serach Data
  const SearchData = () => {
    setTimeout(() => {
      const searchInput = document.getElementById('inputsearchInput');
      const tbody1 = document.getElementById('showData');
      const tbody = tbody1.querySelector('tbody');
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
    }, 1000);

    return (
      <>
        <div className="input-group">
          <div style={{ height: '2.4rem', marginBottom: '5px' }}
            className="input-group-prepend hover-cursor">
            <span className="input-group-text" id="search">
              <CIcon icon={cilSearch} />
            </span>
          </div>
          <input type="text" className="form-control" id="inputsearchInput"
            placeholder="ស្វែងរក" aria-label="search" aria-describedby="search" />
        </div>

      </>
    )
  }

  //Show pass and fail students
  const ShowPassFail = () => {
    const total_st = () => {
      const num = dataStd.length
      return num
    }
    function stKh(number) {
      if (number < 0) {
        return "-" + stKh(Math.abs(number)); // Handle negative numbers
      }
      const khmerDigits = {
        0: "០",
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩"
      };

      if (number < 10) {
        return khmerDigits[number]; // Use dictionary for single digits
      } else {
        const tensDigit = Math.floor(number / 10);
        const onesDigit = number % 10;
        return khmerDigits[tensDigit] + khmerDigits[onesDigit]; // Combine digits
      }
    }

    const st = total_st()
    let total_stKh = stKh(st);

    const total_female = () => {
      const st = dataStd.length
      let num = parseFloat(st) - parseFloat(maleNum)
      return num
    }
    const female = total_female()
    let total_femaleKh = stKh(female).toString().padStart(2, '០')

    const total_pass = () => {
      const st = dataStd.length
      let num = parseFloat(st) - parseFloat(failNum)
      return num
    }
    const pass = total_pass()
    let total_passKh = stKh(pass).toString().padStart(2, '០')

    const total_passFemale = () => {
      const st = dataStd.length
      let num = parseFloat(female) - parseFloat(failFemale)
      return num
    }
    const passFemale = total_passFemale()
    let total_passFemaleKh = stKh(passFemale).toString().padStart(2, '០')
    let total_failNumKh = stKh(failNum).toString().padStart(2, '០')
    let total_failFemaleKh = stKh(failFemale).toString().padStart(2, '០')
    settotalKh(total_stKh)
    setfemaleKh(total_femaleKh)
    setpassKh(total_passKh)
    setpassFemaleKh(total_passFemaleKh)
    setfailKh(total_failNumKh)
    setfailFemaleKh(total_failFemaleKh)
    return (
      <>
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>សិស្សសរុប៖ <strong id="st_all" style={{ color: 'blue' }}>{total_stKh}</strong>
                </th>
                <th>សិស្សស្រី៖ <strong id="st_female" style={{ color: 'blue' }}>{total_femaleKh}</strong>
                </th>
                <th>សិស្សជាប់៖ <strong id="st_pass"
                  style={{ color: 'green' }}>{total_passKh}</strong></th>
                <th>សិស្សស្រី៖ <strong id="st_pass_female"
                  style={{ color: 'green' }}>{total_passFemaleKh}</strong></th>
                <th>សិស្សធ្លាក់៖ <strong id="total_fail_st"
                  style={{ color: 'red' }}>{total_failNumKh}</strong></th>
                <th>សិស្សស្រី៖ <strong id="total_fail_female"
                  style={{ color: 'red' }}>{total_failFemaleKh}</strong></th>
              </tr>
            </thead>
          </table>
          <SearchData />
        </div>

      </>
    )
  }

  const check_value = (e) => {
    let id = e.target.dataset.id
    let data = e.target.value
    let aar = {}
    aar[`check_${arrMonths}`] = data
    if (id) {
      try {
        update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);

      } catch (error) {
        console.log(error);
      }
    }
  }
  const Check_btn = () => {
    const setValue = (e) => {
      const data = e.target.checked
      setIsChecked(
        localStorage.setItem('checked_four', data)
      )
      window.location.reload()
    }
    return (
      <>
        <div className="form-check form-switch ">
          {
            isChecked === "false" ?
              <>
                <input
                  className="form-check-input btn"
                  type="checkbox"
                  onChange={setValue}
                />

              </>
              :
              isChecked === "true" ?
                <>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked
                    onChange={setValue}
                  />

                </>
                :
                <>

                </>
          }
        </div>
      </>
    )
  }
  //Show data in tbody of main table preview

  const ShowAllData = () => {

    return (
      <>
        {dataAllGrades.map((d) => {
          let data = d.clEn
          return (
            <>
              {/* Grade 1-3 */}
              {dbLevel === 'អនុវិទ្យាល័យ' &&
                data.includes(dbGrade) &&
                monthsArr.includes(dbMonths) &&
                primary_g_p1.includes(dbGrade) ? (
                <>
                  {dataStd.map((d, index) => {
                    var set = d
                    var id = d.id;
                    var fullname = d.fullname;
                    var user_grade = d.user_grade;
                    var gender = d.gender;
                    var average = d[`average_${arrMonths}`];
                    var average_seme_1 = d[`average_m1semester`];
                    var average_seme_2 = d[`average_m2semester`];
                    var rank_moct = d[`rank_${arrMonths}`];

                    var k_moct = d[`k_${arrMonths}`];
                    var k_dic_moct = d[`k_dic_${arrMonths}`];
                    var k_wri_moct = d[`k_wri_${arrMonths}`];

                    var math_moct = d[`math_${arrMonths}`];
                    var hist_moct = d[`hist_${arrMonths}`];
                    var ict_moct = d[`ict_${arrMonths}`];
                    var mo_moct = d[`mo_${arrMonths}`];
                    var e_moct = d[`e_${arrMonths}`];
                    var pe_moct = d[`pe_${arrMonths}`];
                    var earth_moct = d[`earth_${arrMonths}`];
                    var geor_moct = d[`geor_${arrMonths}`];
                    var phy_moct = d[`phy_${arrMonths}`];
                    var chem_moct = d[`chem_${arrMonths}`];
                    var hom_moct = d[`hom_${arrMonths}`];
                    var eco_moct = d[`eco_${arrMonths}`];
                    var bio_moct = d[`bio_${arrMonths}`];
                    var av_seme_result1 = d[`average_resultm1semester`];
                    var av_seme_result2 = d[`average_resultm2semester`];
                    var av_year = d[`average_year`];
                    var av_yearRank = d[`average_yearRank`];

                    var rank = d[`showRank_${arrMonths}`];
                    var rank_k_ = d[`k_${arrMonths}Rank`];
                    var rank_k_dic_ = d[`k_dic_${arrMonths}Rank`];
                    var rank_k_wri_ = d[`k_wri_${arrMonths}Rank`];
                    var rank_math_ = d[`math_${arrMonths}Rank`];
                    var rank_hist_ = d[`hist_${arrMonths}Rank`];
                    var rank_ict_ = d[`ict_${arrMonths}Rank`];
                    var rank_mo_ = d[`mo_${arrMonths}Rank`];
                    var rank_earth_ = d[`earth_${arrMonths}Rank`];
                    var rank_geor_ = d[`geor_${arrMonths}Rank`];
                    var rank_phy_ = d[`phy_${arrMonths}Rank`];
                    var rank_chem_ = d[`chem_${arrMonths}Rank`];
                    var rank_hom_ = d[`hom_${arrMonths}Rank`];
                    var rank_eco_ = d[`eco_${arrMonths}Rank`];
                    var rank_bio_ = d[`bio_${arrMonths}Rank`];
                    var rank_e_ = d[`e_${arrMonths}Rank`];
                    var rank_pe_ = d[`pe_${arrMonths}Rank`];
                    var rank_seme = d[`showRank${arrMonths}Rank`];
                    var rank_fourmonths1 = d[`getAverage_fourmonths1Rank`];
                    var rank_fourmonths2 = d[`getAverage_fourmonths2Rank`];
                    var av_seme_result1_rank = d[`average_resultm1semesterRank`];
                    var av_seme_result2_rank = d[`average_resultm2semesterRank`];

                    var k_listen_moct_s = d[`k_listen_m1semester`];
                    var k_speak_moct_s = d[`k_speak_m1semester`];
                    var k_reading_moct_s = d[`k_reading_m1semester`];
                    var k_dictation_moct_s = d[`k_dictation_m1semester`];
                    var k_writing_moct_s = d[`k_writing_m1semester`];
                    var k_grammar_moct_s = d[`k_grammar_m1semester`];
                    var k_homework_moct_s = d[`k_homework_m1semester`];
                    var math_speak_moct_s = d[`math_speak_m1semester`];
                    var math_moct_s = d[`math_m1semester`];
                    var math_h_moct_s = d[`math_h_m1semester`];
                    var sci_moct_s = d[`sci_m1semester`];
                    var sci_h_moct_s = d[`sci_h_m1semester`];
                    var soc_moct_s = d[`soc_m1semester`];
                    var soc_h_moct_s = d[`soc_h_m1semester`];
                    var e_moct_s = d[`e_m1semester`];
                    var e_h_moct_s = d[`e_h_m1semester`];
                    var pe_moct_s = d[`pe_m1semester`];

                    var k_listen_moct_s2 = d[`k_listen_m2semester`];
                    var k_speak_moct_s2 = d[`k_speak_m2semester`];
                    var k_reading_moct_s2 = d[`k_reading_m2semester`];
                    var k_dictation_moct_s2 = d[`k_dictation_m2semester`];
                    var k_writing_moct_s2 = d[`k_writing_m2semester`];
                    var k_grammar_moct_s2 = d[`k_grammar_m2semester`];
                    var k_homework_moct_s2 = d[`k_homework_m2semester`];
                    var math_speak_moct_s2 = d[`math_speak_m2semester`];
                    var math_moct_s2 = d[`math_m2semester`];
                    var math_h_moct_s2 = d[`math_h_m2semester`];
                    var sci_moct_s2 = d[`sci_m2semester`];
                    var sci_h_moct_s2 = d[`sci_h_m2semester`];
                    var soc_moct_s2 = d[`soc_m2semester`];
                    var soc_h_moct_s2 = d[`soc_h_m2semester`];
                    var e_moct_s2 = d[`e_m2semester`];
                    var e_h_moct_s2 = d[`e_h_m2semester`];
                    var pe_moct_s2 = d[`pe_m2semester`];


                    var rank_k_listen_y = d[`k_listen_m1semesterRank`];
                    var rank_k_speak_y = d[`k_speak_m1semesterRank`];
                    var rank_k_reading_y = d[`k_reading_m1semesterRank`];
                    var rank_k_dictation_y = d[`k_dictation_m1semesterRank`];
                    var rank_k_writing_y = d[`k_writing_m1semesterRank`];
                    var rank_k_grammar_y = d[`k_grammar_m1semesterRank`];
                    var rank_k_homework_y = d[`k_homework_m1semesterRank`];
                    var rank_math_speak_y = d[`math_speak_m1semesterRank`];
                    var rank_math_y = d[`math_m1semesterRank`];
                    var rank_math_h_y = d[`math_h_m1semesterRank`];
                    var rank_sci_y = d[`sci_m1semesterRank`];
                    var rank_sci_h_y = d[`sci_h_m1semesterRank`];
                    var rank_soc_y = d[`soc_m1semesterRank`];
                    var rank_soc_h_y = d[`soc_h_m1semesterRank`];
                    var rank_e_y = d[`e_m1semesterRank`];
                    var rank_e_h_y = d[`e_h_m1semesterRank`];
                    var rank_pe_y = d[`pe_m1semesterRank`];

                    var rank_k_listen_y2 = d[`k_listen_m2semesterRank`];
                    var rank_k_speak_y2 = d[`k_speak_m2semesterRank`];
                    var rank_k_reading_y2 = d[`k_reading_m2semesterRank`];
                    var rank_k_dictation_y2 = d[`k_dictation_m2semesterRank`];
                    var rank_k_writing_y2 = d[`k_writing_m2semesterRank`];
                    var rank_k_grammar_y2 = d[`k_grammar_m2semesterRank`];
                    var rank_k_homework_y2 = d[`k_homework_m2semesterRank`];
                    var rank_math_speak_y2 = d[`math_speak_m2semesterRank`];
                    var rank_math_y2 = d[`math_m2semesterRank`];
                    var rank_math_h_y2 = d[`math_h_m2semesterRank`];
                    var rank_sci_y2 = d[`sci_m2semesterRank`];
                    var rank_sci_h_y2 = d[`sci_h_m2semesterRank`];
                    var rank_soc_y2 = d[`soc_m2semesterRank`];
                    var rank_soc_h_y2 = d[`soc_h_m2semesterRank`];
                    var rank_e_y2 = d[`e_m2semesterRank`];
                    var rank_e_h_y2 = d[`e_h_m2semesterRank`];
                    var rank_pe_y2 = d[`pe_m2semesterRank`];

                    var total_ = d[`total_${arrMonths}`];
                    var getAverage_ = d[`getAverage_${arrMonths}`];
                    var check_ = d[`check_${arrMonths}`];
                    var average_ALL = d[`average_ALL${arrMonths}`];
                    var total_ALL = d[`total_ALL${arrMonths}`];
                    var getAverage_ALL1 = d[`getAverage_fourmonths1`];
                    var getAverage_ALL2 = d[`getAverage_fourmonths2`];
                    var getAverage_ALL1Rank = d[`getAverage_fourmonths1Rank`];
                    var getAverage_ALL2Rank = d[`getAverage_fourmonths2Rank`];
                    var average_seme1 = d[`average_m1semester`];
                    var average_seme2 = d[`average_m2semester`];
                    var total_average_seme1 = d[`total_all_score_m1semester`];
                    var total_average_seme2 = d[`total_all_score_m2semester`];

                    var average_mnov = d[`average_mnov`];
                    var average_mdec = d[`average_mdec`];
                    var average_mjan = d[`average_mjan`];
                    var average_mfeb = d[`average_mfeb`];

                    var average_mmarch = d[`average_mmarch`];
                    var average_mapma = d[`average_mapma`];
                    var average_mjun = d[`average_mjun`];
                    var average_mjul = d[`average_mjul`];

                    var showRank_m1semester = d[`showRank_m1semester`];
                    var showRank_m2semester = d[`showRank_m2semester`];
                    if (!av_seme_result1) { av_seme_result1 = 0 };
                    if (!getAverage_ALL1) { getAverage_ALL1 = 0 };
                    if (!getAverage_ALL2) { getAverage_ALL2 = 0 };
                    if (!av_seme_result2) { av_seme_result2 = 0 };
                    if (av_seme_result1 === 'NaN') {
                      av_seme_result1 = '0.00';
                    }
                    if (getAverage_ALL1 === 'NaN') {
                      getAverage_ALL1 = '0.00';
                    }
                    if (getAverage_ALL2 === 'NaN') {
                      getAverage_ALL2 = '0.00';
                    }
                    if (!k_moct) { k_moct = 0 };
                    if (!k_dic_moct) { k_dic_moct = 0 };
                    if (!k_wri_moct) { k_wri_moct = 0 };
                    if (!hist_moct) { hist_moct = 0 };
                    if (!ict_moct) { ict_moct = 0 };
                    if (!mo_moct) { mo_moct = 0 };
                    if (!earth_moct) { earth_moct = 0 };
                    if (!geor_moct) { geor_moct = 0 };
                    if (!phy_moct) { phy_moct = 0 };
                    if (!chem_moct) { chem_moct = 0 };
                    if (!hom_moct) { hom_moct = 0 };
                    if (!eco_moct) { eco_moct = 0 };
                    if (!bio_moct) { bio_moct = 0 };

                    if (!math_moct) { math_moct = 0 };

                    if (!e_moct) { e_moct = 0 };

                    if (!pe_moct) { pe_moct = 0 };
                    if (!rank_moct) { rank_moct = 0 };

                    if (!average_mnov) { average_mnov = 0 };
                    if (!average_mdec) { average_mdec = 0 };
                    if (!average_mjan) { average_mjan = 0 };
                    if (!average_mfeb) { average_mfeb = 0 };

                    if (!average_mmarch) { average_mmarch = 0 };
                    if (!average_mapma) { average_mapma = 0 };
                    if (!average_mjun) { average_mjun = 0 };
                    if (!average_mjul) { average_mjul = 0 };


                    //Total all score
                    var total_all_score =
                      parseFloat(k_moct) +
                      parseFloat(k_dic_moct) +
                      parseFloat(k_wri_moct) +
                      parseFloat(math_moct) +
                      parseFloat(hist_moct) +
                      parseFloat(ict_moct) +
                      parseFloat(mo_moct) +
                      parseFloat(earth_moct) +
                      parseFloat(geor_moct) +
                      parseFloat(phy_moct) +
                      parseFloat(chem_moct) +
                      parseFloat(hom_moct) +
                      parseFloat(eco_moct) +
                      parseFloat(bio_moct) +
                      parseFloat(e_moct) +
                      parseFloat(pe_moct);
                    if (!total_all_score) { total_all_score = "00" }
                    //មធ្យមភាគ
                    var st_average =
                      parseFloat(total_all_score) / dbDivi;
                    st_average = st_average.toFixed(2);
                    if (st_average === 'NaN') {
                      st_average = 0;
                    }

                    //Mention average
                    let mention_year = '';
                    var my = parseFloat(av_year);
                    if (my < 25) {
                      mention_year = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_year = "មធ្យម"
                    } else if (my < 40) {
                      mention_year = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_year = "ល្អ";
                    }
                    let mention = '';
                    var my = parseFloat(average);
                    if (my < 25) {
                      mention = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention = "មធ្យម"
                    } else if (my < 40) {
                      mention = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention = "ល្អ";
                    }
                    let mention_four = '';
                    var my = parseFloat(getAverage_);
                    if (my < 25) {
                      mention_four = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_four = "មធ្យម"
                    } else if (my < 40) {
                      mention_four = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_four = "ល្អ";
                    }
                    let mention_four1 = '';
                    var my = parseFloat(getAverage_ALL1);
                    if (my < 25) {
                      mention_four1 = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_four1 = "មធ្យម"
                    } else if (my < 40) {
                      mention_four1 = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_four1 = "ល្អ";
                    }
                    let mention_four2 = '';
                    var my = parseFloat(getAverage_ALL2);
                    if (my < 25) {
                      mention_four2 = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_four2 = "មធ្យម"
                    } else if (my < 40) {
                      mention_four2 = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_four2 = "ល្អ";
                    }
                    let mention_seme = '';
                    var my = parseFloat(average_ALL);
                    if (my < 25) {
                      mention_seme = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_seme = "មធ្យម"
                    } else if (my < 40) {
                      mention_seme = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_seme = "ល្អ";
                    }
                    let mention_seme1 = '';
                    var my = parseFloat(getAverage_ALL1);
                    if (my < 25) {
                      mention_seme1 = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_seme1 = "មធ្យម"
                    } else if (my < 40) {
                      mention_seme1 = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_seme1 = "ល្អ";
                    }
                    let mention_seme_result1 = '';
                    var my = parseFloat(av_seme_result1);
                    if (my < 25) {
                      mention_seme_result1 = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_seme_result1 = "មធ្យម"
                    } else if (my < 40) {
                      mention_seme_result1 = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_seme_result1 = "ល្អ";
                    }
                    let mention_seme_result2 = '';
                    var my = parseFloat(av_seme_result2);
                    if (my < 25) {
                      mention_seme_result2 = "ខ្សោយ"
                    } else if (my < 32.5) {
                      mention_seme_result2 = "មធ្យម"
                    } else if (my < 40) {
                      mention_seme_result2 = "ល្អបង្គួរ";
                    } else if (my >= 40) {
                      mention_seme_result2 = "ល្អ";
                    }

                    //Pass or Fail
                    let message = '';
                    var num = parseFloat(st_average)
                    if (num < 25) {
                      message = 'ធ្លាក់'
                    } else if (num >= 25) {
                      message = 'ជាប់'
                    }
                    //Pass or Fail
                    let messageR1 = '';
                    var num = parseFloat(av_seme_result1)
                    if (num < 25) {
                      messageR1 = 'ធ្លាក់'
                    } else if (num >= 25) {
                      messageR1 = 'ជាប់'
                    }
                    let messageYear = '';
                    var num = parseFloat(av_year)
                    if (num < 25) {
                      messageYear = 'ធ្លាក់'
                    } else if (num >= 25) {
                      messageYear = 'ជាប់'
                    }
                    //Click cell to selected text
                    const clickText = (e) => {
                      var data = e.target
                      const range = document.createRange();
                      range.selectNodeContents(data);
                      const selection = window.getSelection();
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    //Key Enter/Arrow Up and down
                    const keyNext = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber);
                        const nextCell = document.querySelector(`[data-keynumber="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber);
                        const nextCell = document.querySelector(`[data-keynumber="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber);
                        const nextCell = document.querySelector(`[data-keynumber="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext2 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber2);
                        const nextCell = document.querySelector(`[data-keynumber2="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber2);
                        const nextCell = document.querySelector(`[data-keynumber2="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber2);
                        const nextCell = document.querySelector(`[data-keynumber2="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext3 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber3);
                        const nextCell = document.querySelector(`[data-keynumber3="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber3);
                        const nextCell = document.querySelector(`[data-keynumber3="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber3);
                        const nextCell = document.querySelector(`[data-keynumber3="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext4 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber4);
                        const nextCell = document.querySelector(`[data-keynumber4="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber4);
                        const nextCell = document.querySelector(`[data-keynumber4="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber4);
                        const nextCell = document.querySelector(`[data-keynumber4="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext5 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber5);
                        const nextCell = document.querySelector(`[data-keynumber5="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber5);
                        const nextCell = document.querySelector(`[data-keynumber5="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber5);
                        const nextCell = document.querySelector(`[data-keynumber5="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext6 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber6);
                        const nextCell = document.querySelector(`[data-keynumber6="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber6);
                        const nextCell = document.querySelector(`[data-keynumber6="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber6);
                        const nextCell = document.querySelector(`[data-keynumber6="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext7 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber7);
                        const nextCell = document.querySelector(`[data-keynumber7="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber7);
                        const nextCell = document.querySelector(`[data-keynumber7="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber7);
                        const nextCell = document.querySelector(`[data-keynumber7="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext8 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber8);
                        const nextCell = document.querySelector(`[data-keynumber8="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber8);
                        const nextCell = document.querySelector(`[data-keynumber8="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber8);
                        const nextCell = document.querySelector(`[data-keynumber8="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext9 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber9);
                        const nextCell = document.querySelector(`[data-keynumber9="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber9);
                        const nextCell = document.querySelector(`[data-keynumber9="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber9);
                        const nextCell = document.querySelector(`[data-keynumber9="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext10 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber10);
                        const nextCell = document.querySelector(`[data-keynumber10="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber10);
                        const nextCell = document.querySelector(`[data-keynumber10="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber10);
                        const nextCell = document.querySelector(`[data-keynumber10="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext11 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber11);
                        const nextCell = document.querySelector(`[data-keynumber11="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber11);
                        const nextCell = document.querySelector(`[data-keynumber11="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber11);
                        const nextCell = document.querySelector(`[data-keynumber11="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext12 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber12);
                        const nextCell = document.querySelector(`[data-keynumber12="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber12);
                        const nextCell = document.querySelector(`[data-keynumber12="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber12);
                        const nextCell = document.querySelector(`[data-keynumber12="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext13 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber13);
                        const nextCell = document.querySelector(`[data-keynumber13="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber13);
                        const nextCell = document.querySelector(`[data-keynumber13="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber13);
                        const nextCell = document.querySelector(`[data-keynumber13="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext14 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber14);
                        const nextCell = document.querySelector(`[data-keynumber14="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber14);
                        const nextCell = document.querySelector(`[data-keynumber14="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber14);
                        const nextCell = document.querySelector(`[data-keynumber14="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext15 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber15);
                        const nextCell = document.querySelector(`[data-keynumber15="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber15);
                        const nextCell = document.querySelector(`[data-keynumber15="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber15);
                        const nextCell = document.querySelector(`[data-keynumber15="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext16 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber16);
                        const nextCell = document.querySelector(`[data-keynumber16="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber16);
                        const nextCell = document.querySelector(`[data-keynumber16="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber16);
                        const nextCell = document.querySelector(`[data-keynumber16="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    const keyNext17 = (event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber17);
                        const nextCell = document.querySelector(`[data-keynumber17="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber17);
                        const nextCell = document.querySelector(`[data-keynumber17="${currentIndex + 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        const currentCell = event.target;
                        const currentIndex = parseInt(currentCell.dataset.keynumber17);
                        const nextCell = document.querySelector(`[data-keynumber17="${currentIndex - 1}"]`);
                        if (nextCell) {
                          const range = document.createRange();
                          range.selectNodeContents(nextCell);
                          const selection = window.getSelection();
                          selection.removeAllRanges();
                          selection.addRange(range);
                        }
                        if (nextCell) {
                          nextCell.focus();
                        }
                      }
                    }
                    if (['allSemesters'].includes(dbMonths)) {
                      if (dbMonths === 'firstSemester') {
                        return (
                          <>
                            <tr key={d.id}>
                              <td>{index + 1}</td>
                              <td className="text-start textStart">{fullname}</td>
                              <td>{gender}</td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_ }}
                              ></td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_dic_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_dic_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_dic_ }}
                              ></td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_wri_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_wri_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_wri_ }}
                              ></td>
                              <td
                                data-keynumber2={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`mo_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext2}
                                dangerouslySetInnerHTML={{ __html: mo_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_mo_ }}
                              ></td>
                              <td
                                data-keynumber3={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`hist_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext3}
                                dangerouslySetInnerHTML={{ __html: hist_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_hist_ }}
                              ></td>
                              <td
                                data-keynumber4={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`geor_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext4}
                                dangerouslySetInnerHTML={{ __html: geor_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_geor_ }}
                              ></td>
                              <td
                                data-keynumber5={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`math_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext5}
                                dangerouslySetInnerHTML={{ __html: math_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_math_ }}
                              ></td>
                              <td
                                data-keynumber6={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`phy_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext6}
                                dangerouslySetInnerHTML={{ __html: phy_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_phy_ }}
                              ></td>
                              <td
                                data-keynumber7={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`chem_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext7}
                                dangerouslySetInnerHTML={{ __html: chem_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_chem_ }}
                              ></td>
                              <td
                                data-keynumber8={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`bio_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext8}
                                dangerouslySetInnerHTML={{ __html: bio_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_bio_ }}
                              ></td>
                              <td
                                data-keynumber9={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`earth_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext9}
                                dangerouslySetInnerHTML={{ __html: earth_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_earth_ }}
                              ></td>
                              <td
                                data-keynumber10={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`e_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext10}
                                dangerouslySetInnerHTML={{ __html: e_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_e_ }}
                              ></td>
                              <td
                                data-keynumber11={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`ict_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext11}
                                dangerouslySetInnerHTML={{ __html: ict_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_ict_ }}
                              ></td>
                              <td
                                data-keynumber12={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`hom_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext12}
                                dangerouslySetInnerHTML={{ __html: hom_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_hom_ }}
                              ></td>
                              <td
                                data-keynumber13={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`pe_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext13}
                                dangerouslySetInnerHTML={{ __html: pe_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_pe_ }}
                              ></td>

                              <td className="fw-bold" style={{ color: 'darkgreen' }}
                                dangerouslySetInnerHTML={{ __html: total_all_score }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: st_average }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_seme }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_fourmonths1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_four1 }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result1_rank }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_seme_result1 }}
                              ></td>
                              <td style={{ color: 'blue' }}
                                dangerouslySetInnerHTML={{ __html: messageR1 }}
                              ></td>
                            </tr>
                          </>
                        )

                      }

                    }
                    if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
                      if (dbMonths === 'firstSemester') {
                        return (
                          <>
                            <tr key={d.id}>
                              <td>{index + 1}</td>
                              <td className="text-start textStart">{fullname}</td>
                              <td>{gender}</td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_ }}
                              ></td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_dic_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_dic_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_dic_ }}
                              ></td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_wri_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_wri_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_wri_ }}
                              ></td>
                              <td
                                data-keynumber2={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`mo_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext2}
                                dangerouslySetInnerHTML={{ __html: mo_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_mo_ }}
                              ></td>
                              <td
                                data-keynumber3={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`hist_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext3}
                                dangerouslySetInnerHTML={{ __html: hist_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_hist_ }}
                              ></td>
                              <td
                                data-keynumber4={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`geor_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext4}
                                dangerouslySetInnerHTML={{ __html: geor_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_geor_ }}
                              ></td>
                              <td
                                data-keynumber5={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`math_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext5}
                                dangerouslySetInnerHTML={{ __html: math_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_math_ }}
                              ></td>
                              <td
                                data-keynumber6={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`phy_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext6}
                                dangerouslySetInnerHTML={{ __html: phy_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_phy_ }}
                              ></td>
                              <td
                                data-keynumber7={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`chem_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext7}
                                dangerouslySetInnerHTML={{ __html: chem_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_chem_ }}
                              ></td>
                              <td
                                data-keynumber8={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`bio_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext8}
                                dangerouslySetInnerHTML={{ __html: bio_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_bio_ }}
                              ></td>
                              <td
                                data-keynumber9={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`earth_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext9}
                                dangerouslySetInnerHTML={{ __html: earth_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_earth_ }}
                              ></td>
                              <td
                                data-keynumber10={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`e_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext10}
                                dangerouslySetInnerHTML={{ __html: e_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_e_ }}
                              ></td>
                              <td
                                data-keynumber11={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`ict_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext11}
                                dangerouslySetInnerHTML={{ __html: ict_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_ict_ }}
                              ></td>
                              <td
                                data-keynumber12={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`hom_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext12}
                                dangerouslySetInnerHTML={{ __html: hom_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_hom_ }}
                              ></td>
                              <td
                                data-keynumber13={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`pe_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext13}
                                dangerouslySetInnerHTML={{ __html: pe_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_pe_ }}
                              ></td>

                              <td className="fw-bold" style={{ color: 'darkgreen' }}
                                dangerouslySetInnerHTML={{ __html: total_all_score }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: st_average }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_seme }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_fourmonths1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_four1 }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result1_rank }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_seme_result1 }}
                              ></td>
                              <td style={{ color: 'blue' }}
                                dangerouslySetInnerHTML={{ __html: messageR1 }}
                              ></td>
                            </tr>
                          </>
                        )

                      }
                      if (dbMonths === 'secondSemester') {
                        return (
                          <>
                            <tr key={d.id}>
                              <td>{index + 1}</td>
                              <td className="text-start textStart">{fullname}</td>
                              <td>{gender}</td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_ }}
                              ></td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_dic_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_dic_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_dic_ }}
                              ></td>
                              <td
                                data-keynumber={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`k_wri_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext}
                                dangerouslySetInnerHTML={{ __html: k_wri_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_k_wri_ }}
                              ></td>
                              <td
                                data-keynumber2={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`mo_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext2}
                                dangerouslySetInnerHTML={{ __html: mo_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_mo_ }}
                              ></td>
                              <td
                                data-keynumber3={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`hist_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext3}
                                dangerouslySetInnerHTML={{ __html: hist_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_hist_ }}
                              ></td>
                              <td
                                data-keynumber4={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`geor_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext4}
                                dangerouslySetInnerHTML={{ __html: geor_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_geor_ }}
                              ></td>
                              <td
                                data-keynumber5={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`math_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext5}
                                dangerouslySetInnerHTML={{ __html: math_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_math_ }}
                              ></td>
                              <td
                                data-keynumber6={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`phy_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext6}
                                dangerouslySetInnerHTML={{ __html: phy_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_phy_ }}
                              ></td>
                              <td
                                data-keynumber7={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`chem_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext7}
                                dangerouslySetInnerHTML={{ __html: chem_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_chem_ }}
                              ></td>
                              <td
                                data-keynumber8={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`bio_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext8}
                                dangerouslySetInnerHTML={{ __html: bio_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_bio_ }}
                              ></td>
                              <td
                                data-keynumber9={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`earth_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext9}
                                dangerouslySetInnerHTML={{ __html: earth_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_earth_ }}
                              ></td>
                              <td
                                data-keynumber10={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`e_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext10}
                                dangerouslySetInnerHTML={{ __html: e_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_e_ }}
                              ></td>
                              <td
                                data-keynumber11={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`ict_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext11}
                                dangerouslySetInnerHTML={{ __html: ict_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_ict_ }}
                              ></td>
                              <td
                                data-keynumber12={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`hom_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext12}
                                dangerouslySetInnerHTML={{ __html: hom_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_hom_ }}
                              ></td>
                              <td
                                data-keynumber13={index + 1}
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => {
                                  const setID = d.id
                                  const data = e.target.innerHTML
                                  let aar = {}
                                  aar[`pe_${arrMonths}`] = data
                                  if (setID) {
                                    update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                  }
                                }}
                                onClick={clickText}
                                onKeyDown={keyNext13}
                                dangerouslySetInnerHTML={{ __html: pe_moct }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_pe_ }}
                              ></td>

                              <td className="fw-bold" style={{ color: 'darkgreen' }}
                                dangerouslySetInnerHTML={{ __html: total_all_score }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: st_average }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_seme }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL2 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_fourmonths2 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_four2 }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result2 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result2_rank }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_seme_result2 }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: average_seme_1 }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: rank_fourmonths1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_four1 }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result1 }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: av_seme_result1_rank }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_seme_result1 }}
                              ></td>
                              <td style={{ color: 'black' }}
                                dangerouslySetInnerHTML={{ __html: av_year }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: av_yearRank }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_year }}
                              ></td>

                              <td style={{ color: 'blue' }}
                                dangerouslySetInnerHTML={{ __html: messageYear }}
                              ></td>
                            </tr>
                          </>
                        )

                      }
                    }

                    if (['fourmonths1', 'fourmonths2'].includes(dbMonths)) {
                      if (dbMonths === 'fourmonths1') {
                        return (
                          <>
                            <tr key={d.id}>
                              <td>{index + 1}</td>
                              <td className="text-start textStart">{fullname}</td>
                              <td>{gender}</td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_mnov }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_mdec }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_mjan }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_mfeb }}
                              ></td>
                              <td className="fw-bold" style={{ color: 'darkgreen' }}
                                dangerouslySetInnerHTML={{ __html: total_ }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: getAverage_ }}
                              ></td>
                              <td style={{ color: 'red', verticalAlign: 'middle' }}
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL1Rank }}
                              ></td>
                              <td style={{ color: 'red', verticalAlign: 'middle' }}
                                dangerouslySetInnerHTML={{ __html: mention_four }}
                              ></td>
                              <td style={{ color: 'blue', verticalAlign: 'middle' }}
                              // dangerouslySetInnerHTML={{ __html: check_ }}
                              >
                                <select
                                  style={{
                                    color: 'white',
                                    borderColor: '#e3e3e3',
                                    borderRadius: '5px',
                                    backgroundColor: 'black'
                                  }}
                                  className="text-center"
                                  data-id={id}
                                  onChange={check_value}
                                  value={check_}
                                >
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                </select>
                              </td>
                            </tr>
                          </>
                        )
                      }
                      if (dbMonths === 'fourmonths2') {
                        return (
                          <>
                            <tr key={d.id}>
                              <td>{index + 1}</td>
                              <td className="text-start textStart">{fullname}</td>
                              <td>{gender}</td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_mapma }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_mjun }}
                              ></td>
                              <td className="fw-bold" style={{ color: 'darkgreen' }}
                                dangerouslySetInnerHTML={{ __html: total_ }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: getAverage_ }}
                              ></td>
                              <td style={{ color: 'red', verticalAlign: 'middle' }}
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL2Rank }}
                              ></td>
                              <td style={{ color: 'red', verticalAlign: 'middle' }}
                                dangerouslySetInnerHTML={{ __html: mention_four }}
                              ></td>
                              <td style={{ color: 'blue', verticalAlign: 'middle' }}
                              // dangerouslySetInnerHTML={{ __html: check_ }}
                              >
                                <select
                                  style={{
                                    color: 'white',
                                    borderColor: '#e3e3e3',
                                    borderRadius: '5px',
                                    backgroundColor: 'black'
                                  }}
                                  className="text-center"
                                  data-id={id}
                                  onChange={check_value}
                                  value={check_}
                                >
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                </select>
                              </td>
                            </tr>
                          </>
                        )
                      }

                    }
                    if ([
                      'October',
                      'November',
                      'December',
                      'January',
                      'February',
                      'March',
                      'AprilMay',
                      'June',
                      'July',
                    ].includes(dbMonths)) {
                      return (
                        <>
                          <tr key={d.id}>
                            <td>{index + 1}</td>
                            <td className="text-start textStart">{fullname}</td>
                            <td>{gender}</td>
                            <td
                              data-keynumber={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`k_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext}
                              dangerouslySetInnerHTML={{ __html: k_moct }}
                            ></td>
                            <td
                              data-keynumber={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`k_dic${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext}
                              dangerouslySetInnerHTML={{ __html: k_dic_moct }}
                            ></td>
                            <td
                              data-keynumber={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`k_wri${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext}
                              dangerouslySetInnerHTML={{ __html: k_wri_moct }}
                            ></td>
                            <td
                              data-keynumber2={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`mo_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext2}
                              dangerouslySetInnerHTML={{ __html: mo_moct }}
                            ></td>
                            <td
                              data-keynumber3={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`hist_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext3}
                              dangerouslySetInnerHTML={{ __html: hist_moct }}
                            ></td>
                            <td
                              data-keynumber4={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`geor_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext4}
                              dangerouslySetInnerHTML={{ __html: geor_moct }}
                            ></td>
                            <td
                              data-keynumber5={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`math_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext5}
                              dangerouslySetInnerHTML={{ __html: math_moct }}
                            ></td>
                            <td
                              data-keynumber6={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`phy_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext6}
                              dangerouslySetInnerHTML={{ __html: phy_moct }}
                            ></td>
                            <td
                              data-keynumber7={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`chem_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext7}
                              dangerouslySetInnerHTML={{ __html: chem_moct }}
                            ></td>
                            <td
                              data-keynumber8={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`bio_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext8}
                              dangerouslySetInnerHTML={{ __html: bio_moct }}
                            ></td>
                            <td
                              data-keynumber9={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`earth_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext9}
                              dangerouslySetInnerHTML={{ __html: earth_moct }}
                            ></td>
                            <td
                              data-keynumber10={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`e_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext10}
                              dangerouslySetInnerHTML={{ __html: e_moct }}
                            ></td>
                            <td
                              data-keynumber11={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`ict_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext11}
                              dangerouslySetInnerHTML={{ __html: ict_moct }}
                            ></td>
                            <td
                              data-keynumber12={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`hom_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext12}
                              dangerouslySetInnerHTML={{ __html: hom_moct }}
                            ></td>
                            <td
                              data-keynumber13={index + 1}
                              contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const setID = d.id
                                const data = e.target.innerHTML
                                let aar = {}
                                aar[`pe_${arrMonths}`] = data
                                if (setID) {
                                  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
                                }
                              }}
                              onClick={clickText}
                              onKeyDown={keyNext13}
                              dangerouslySetInnerHTML={{ __html: pe_moct }}
                            ></td>
                            <td className="fw-bold" style={{ color: 'darkgreen' }}
                              dangerouslySetInnerHTML={{ __html: total_all_score }}
                            ></td>
                            <td
                              dangerouslySetInnerHTML={{ __html: st_average }}
                            ></td>
                            <td style={{ color: 'red' }}
                              dangerouslySetInnerHTML={{ __html: rank }}
                            ></td>
                            <td style={{ color: 'red' }}
                              dangerouslySetInnerHTML={{ __html: mention }}
                            ></td>
                            <td style={{ color: 'blue' }}
                              dangerouslySetInnerHTML={{ __html: message }}
                            ></td>
                          </tr>
                        </>
                      )
                    }
                    if (['firstSemesterResult', 'secondSemesterResult'].includes(dbMonths)) {
                      if (dbMonths === 'firstSemesterResult') {
                        return (
                          <>
                            <tr key={d.id}>
                              <td>{index + 1}</td>
                              <td className="text-start textStart">{fullname}</td>
                              <td>{gender}</td>
                              <td
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL1 }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_seme1 }}
                              ></td>
                              <td className="fw-bold" style={{ color: 'darkgreen' }}
                                dangerouslySetInnerHTML={{ __html: total_ALL }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_ALL }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: showRank_m1semester }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_seme }}
                              ></td>
                              <td style={{ color: 'blue' }}
                                dangerouslySetInnerHTML={{ __html: '' }}
                              ></td>
                            </tr>
                          </>
                        )

                      }
                      if (dbMonths === 'secondSemesterResult') {
                        return (
                          <>
                            <tr key={d.id}>
                              <td>{index + 1}</td>
                              <td className="text-start textStart">{fullname}</td>
                              <td>{gender}</td>
                              <td
                                dangerouslySetInnerHTML={{ __html: getAverage_ALL2 }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_seme2 }}
                              ></td>
                              <td className="fw-bold" style={{ color: 'darkgreen' }}
                                dangerouslySetInnerHTML={{ __html: total_ALL }}
                              ></td>
                              <td
                                dangerouslySetInnerHTML={{ __html: average_ALL }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: showRank_m2semester }}
                              ></td>
                              <td style={{ color: 'red' }}
                                dangerouslySetInnerHTML={{ __html: mention_seme }}
                              ></td>
                              <td style={{ color: 'blue' }}
                                dangerouslySetInnerHTML={{ __html: '' }}
                              ></td>
                            </tr>
                          </>
                        )

                      }

                    }

                  })}
                </>
              ) : (
                <>
                  {/* <h1>No Data</h1> */}
                </>
              )
              }
            </>
          )

        })}
      </>
    )
  }
  //Print Result
  const HeaderPrintResult = () => {
    return (
      <>
        <th className="border-dark" style={{ verticalAlign: 'middle' }}>ល.រ</th>
        <th className="border-dark" style={{ width: '15vh', verticalAlign: 'middle' }}>គោត្តនាម-នាម</th>
        <th className="border-dark" style={{ verticalAlign: 'middle' }}>ភេទ</th>
        <th className="border-dark" style={{ verticalAlign: 'middle' }}>ពិន្ទុសរុប</th>
        <th className="border-dark" style={{ verticalAlign: 'middle' }}>មធ្យមភាគ</th>
        <th className="border-dark" style={{ width: '8vh', verticalAlign: 'middle' }}>ចំណាត់ថ្នាក់</th>
        <th className="border-dark" style={{ verticalAlign: 'middle' }}>និទ្ទេស</th>
        <th className="border-dark" style={{ verticalAlign: 'middle' }}>ផ្សេងៗ</th>
      </>
    )
  }
  const [dbPreviewPrint, setdbPreviewPrint] = useState([])

  //Push rank
  useEffect(() => {
    const dbPreviewData = [...dataStd]
    //Push total score and average to firebase
    dataStd.map((d) => {
      if (primary_g_p1.includes(dbGrade)) {
        var id = d.id;
        var fullname = d.fullname;
        var user_grade = d.user_grade;
        var gender = d.gender;
        var average = d[`average_${arrMonths}`];
        var rank_moct = d[`rank_${arrMonths}`];

        // var k_moct = d[`k_${arrMonths}`];
        // var k_dic_moct = d[`k_dic${arrMonths}`];
        // var k_wri_moct = d[`k_wri${arrMonths}`];
        // var math_moct = d[`math_${arrMonths}`];
        // var hist_moct = d[`hist_${arrMonths}`];
        // var ict_moct = d[`ict_${arrMonths}`];
        // var mo_moct = d[`mo_${arrMonths}`];
        // var e_moct = d[`e_${arrMonths}`];
        // var pe_moct = d[`pe_${arrMonths}`];
        // var earth_moct = d[`earth_${arrMonths}`];
        // var geor_moct = d[`geor_${arrMonths}`];
        // var phy_moct = d[`phy_${arrMonths}`];
        // var chem_moct = d[`chem_${arrMonths}`];
        // var hom_moct = d[`hom_${arrMonths}`];
        // var eco_moct = d[`eco_${arrMonths}`];
        // var bio_moct = d[`bio_${arrMonths}`];
        var k_moct = d[`k_${arrMonths}`];
        var k_dic_moct = d[`k_dic_${arrMonths}`];
        var k_wri_moct = d[`k_wri_${arrMonths}`];

        var math_moct = d[`math_${arrMonths}`];
        var hist_moct = d[`hist_${arrMonths}`];
        var ict_moct = d[`ict_${arrMonths}`];
        var mo_moct = d[`mo_${arrMonths}`];
        var e_moct = d[`e_${arrMonths}`];
        var pe_moct = d[`pe_${arrMonths}`];
        var earth_moct = d[`earth_${arrMonths}`];
        var geor_moct = d[`geor_${arrMonths}`];
        var phy_moct = d[`phy_${arrMonths}`];
        var chem_moct = d[`chem_${arrMonths}`];
        var hom_moct = d[`hom_${arrMonths}`];
        var eco_moct = d[`eco_${arrMonths}`];
        var bio_moct = d[`bio_${arrMonths}`];
        var av_seme_result1 = d[`average_resultm1semester`];
        var av_seme_result2 = d[`average_resultm2semester`];

        let checkFour1 = 4;
        var average_mnov = d[`average_mnov`];
        var average_mdec = d[`average_mdec`];
        var average_mjan = d[`average_mjan`];
        var average_mfeb = d[`average_mfeb`];
        var average_seme1 = d[`average_m1semester`];
        var average_seme2 = d[`average_m2semester`];
        var average_four1 = d[`getAverage_fourmonths1`];

        let checkFour2 = 2;
        var average_mmarch = d[`average_mmarch`];
        var average_mapma = d[`average_mapma`];
        var average_mjun = d[`average_mjun`];
        var average_mjul = d[`average_mjul`];
        var check_ = d[`check_${arrMonths}`];

        var getAverage_ALL1 = d[`getAverage_fourmonths1`];
        var getAverage_ALL2 = d[`getAverage_fourmonths2`];

        if (!check_) { check_ = '0' };
        if (!getAverage_ALL1) { getAverage_ALL1 = '0' };
        if (!getAverage_ALL2) { getAverage_ALL2 = '0' };
        if (!av_seme_result1) { av_seme_result1 = '0' };
        if (!av_seme_result2) { av_seme_result2 = '0' };

        if (!k_moct) { k_moct = '0' };
        if (!k_dic_moct) { k_dic_moct = '0' };
        if (!k_wri_moct) { k_wri_moct = '0' };
        if (!hist_moct) { hist_moct = '0' };
        if (!ict_moct) { ict_moct = '0' };
        if (!mo_moct) { mo_moct = '0' };
        if (!earth_moct) { earth_moct = '0' };
        if (!geor_moct) { geor_moct = '0' };
        if (!phy_moct) { phy_moct = '0' };
        if (!chem_moct) { chem_moct = '0' };
        if (!hom_moct) { hom_moct = '0' };
        if (!eco_moct) { eco_moct = '0' };
        if (!bio_moct) { bio_moct = '0' };

        if (!math_moct) { math_moct = '0' };

        if (!e_moct) { e_moct = '0' };

        if (!pe_moct) { pe_moct = '0' };

        if (!rank_moct) { rank_moct = '0' };
        if (!check_) { check_ = "0.00" };

        if (!average_mnov) {
          average_mnov = '0.00'
        };
        if (!average_mdec) {
          average_mdec = '0.00'
        };
        if (!average_mjan) {
          average_mjan = '0.00'
        };
        if (!average_mfeb) {
          average_mfeb = '0.00'
        };

        if (!average_mmarch) {
          average_mmarch = '0.00'
        };
        if (!average_mapma) {
          average_mapma = '0.00'
        };
        if (!average_mjun) {
          average_mjun = '0.00'
        };
        if (!average_mjul) {
          average_mjul = '0.00'
        };
        if (average_mnov == '0.00') {
          checkFour1 -= 1;
        }
        if (average_mdec == '0.00') {
          checkFour1 -= 1;
        }
        if (average_mjan == '0.00') {
          checkFour1 -= 1;
        }
        if (average_mfeb == '0.00') {
          checkFour1 -= 1;
        }

        if (average_mapma == '0.00') {
          checkFour2 -= 1;
        }
        if (average_mjun == '0.00') {
          checkFour2 -= 1;
        }

        //Total the 4 months semester 1
        var fourtotal1 =
          parseFloat(average_mnov) +
          parseFloat(average_mdec) +
          parseFloat(average_mjan) +
          parseFloat(average_mfeb)
        if (!fourtotal1) { fourtotal1 = 0 }
        if (fourtotal1 === 'NaN') {
          fourtotal1 = 0;
        }

        fourtotal1 = fourtotal1.toFixed(2)
        var totalFour1 = parseFloat(fourtotal1) / parseFloat(check_)
        totalFour1 = totalFour1.toFixed(2)
        if (totalFour1 === 'NaN') {
          totalFour1 = 0;
        }

        //Total the 4 months semester 2
        var fourtotal2 =
          parseFloat(average_mapma) +
          parseFloat(average_mjun);

        if (!fourtotal2) { fourtotal2 = 0 }
        if (fourtotal2 === 'NaN') {
          fourtotal2 = 0;
        }

        fourtotal2 = fourtotal2.toFixed(2)
        var totalFour2 = parseFloat(fourtotal2) / parseFloat(check_)
        totalFour2 = totalFour2.toFixed(2)
        if (totalFour2 === 'NaN') {
          totalFour2 = 0;
        }


        //Total all score
        var total_all_score =
          parseFloat(k_moct) +
          parseFloat(k_dic_moct) +
          parseFloat(k_wri_moct) +
          parseFloat(math_moct) +
          parseFloat(hist_moct) +
          parseFloat(ict_moct) +
          parseFloat(mo_moct) +
          parseFloat(earth_moct) +
          parseFloat(geor_moct) +
          parseFloat(phy_moct) +
          parseFloat(chem_moct) +
          parseFloat(hom_moct) +
          parseFloat(eco_moct) +
          parseFloat(bio_moct) +
          parseFloat(e_moct) +
          parseFloat(pe_moct);
        if (!total_all_score) { total_all_score = "00" }
        //មធ្យមភាគ
        var st_average =
          parseFloat(total_all_score) / dbDivi;
        st_average = st_average.toFixed(2);
        if (st_average === 'NaN') {
          st_average = 0;
        }

        //Total 1st semester result
        var tsr1 = (parseFloat(st_average) + parseFloat(getAverage_ALL1)) / 2;
        tsr1 = tsr1.toFixed(2);
        if (tsr1 === 'NaN') {
          tsr1 = 0;
        }
        var tsr2 = (parseFloat(st_average) + parseFloat(getAverage_ALL2)) / 2;
        tsr2 = tsr2.toFixed(2);
        if (tsr2 === 'NaN') {
          tsr2 = 0;
        }
        if (dbMonths === 'secondSemester') {
          var av_year = (parseFloat(av_seme_result1) + parseFloat(av_seme_result2)) / 2;
          av_year = av_year.toFixed(2);
          if (av_year === 'NaN') {
            av_year = '0.00';
          }
          try {
            let aar = {}
            aar[`average_year`] = av_year;
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          } catch (error) {
            console.log(error);

          }
        }
        if (!tsr1) {
          tsr1 = '0.00';
        }
        if (!tsr2) {
          tsr2 = '0.00';
        }
        //Push data to firebase
        if (['fourmonths1', 'fourmonths2'].includes(dbMonths)) {
          if (dbMonths === 'fourmonths1') {
            if (isChecked === "true") {
              console.log('ok');

              let aar = {}
              aar[`total_${arrMonths}`] = fourtotal1
              aar[`getAverage_${arrMonths}`] = totalFour1
              // aar[`check_${arrMonths}`] = checkFour1
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }

            } else if (isChecked === 'false') {
              let aar = {}
              aar[`total_${arrMonths}`] = fourtotal1
              aar[`getAverage_${arrMonths}`] = totalFour1
              aar[`check_${arrMonths}`] = checkFour1
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }

            }
          }
          if (dbMonths === 'fourmonths2') {
            if (isChecked === "true") {
              let aar = {}
              aar[`total_${arrMonths}`] = fourtotal2
              aar[`getAverage_${arrMonths}`] = totalFour2
              // aar[`check_${arrMonths}`] = checkFour2
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }

            } else if (isChecked === "false") {
              let aar = {}
              aar[`total_${arrMonths}`] = fourtotal2
              aar[`getAverage_${arrMonths}`] = totalFour2
              aar[`check_${arrMonths}`] = checkFour2
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }

            }
          }
        }
        if ([
          'October',
          'November',
          'December',
          'January',
          'February',
          'March',
          'AprilMay',
          'June',
          'July',
        ].includes(dbMonths)) {
          let aar = {}
          aar[`average_${arrMonths}`] = st_average
          aar[`total_all_score_${arrMonths}`] = total_all_score
          if (id) {
            update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
          }
        }
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          if (dbMonths === 'firstSemester') {
            let aar = {}
            aar[`average_${arrMonths}`] = st_average
            aar[`total_all_score_${arrMonths}`] = total_all_score
            aar[`average_result${arrMonths}`] = tsr1
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          }
          if (dbMonths === 'secondSemester') {
            let aar = {}
            aar[`average_${arrMonths}`] = st_average
            aar[`total_all_score_${arrMonths}`] = total_all_score
            aar[`average_result${arrMonths}`] = tsr2
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          }

        }
        if (['firstSemesterResult', 'secondSemesterResult'].includes(dbMonths)) {
          if (dbMonths === 'firstSemesterResult') {
            var totalALL = parseFloat(totalFour1) + parseFloat(average_seme1);
            totalALL = totalALL.toFixed(2)
            var averageALL = parseFloat(totalALL) / 2;
            averageALL = averageALL.toFixed(2);

            let aar = {}
            aar[`average_ALL${arrMonths}`] = averageALL
            aar[`total_ALL${arrMonths}`] = totalALL
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          }
          if (dbMonths === 'secondSemesterResult') {
            var totalALL = parseFloat(totalFour2) + parseFloat(average_seme2);
            totalALL = totalALL.toFixed(2)
            var averageALL = parseFloat(totalALL) / 2;
            averageALL = averageALL.toFixed(2);
            let aar = {}
            aar[`average_ALL${arrMonths}`] = averageALL
            aar[`total_ALL${arrMonths}`] = totalALL
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          }

        }
      }

    })

    //Sort data to get Rank
    if ([
      'October',
      'November',
      'December',
      'January',
      'February',
      'March',
      'AprilMay',
      'June',
      'July',
    ].includes(dbMonths)) {
      dbPreviewData.sort(function (a, b) { return b[`average_${arrMonths}`] - a[`average_${arrMonths}`] });

      for (let i = 0; i < dbPreviewData.length; i++) {
        let avg = dbPreviewData[i][`average_${arrMonths}`];
        let studentsWithRank = dbPreviewData.filter(
          (student) => student[`average_${arrMonths}`] === avg
        );
        for (let student of studentsWithRank) {
          student[`rank_${arrMonths}`] = i + 1;
        }
        i += studentsWithRank.length - 1;
      }
      setdbPreviewPrint(dbPreviewData)
      dbPreviewData.map((d) => {
        let rank = d[`rank_${arrMonths}`]
        let id = d.id
        try {
          if (id) {
            let aar = {}
            aar[`showRank_${arrMonths}`] = rank
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          }
        } catch (error) {
          console.log('Error:', error);
        }
      })

    }
    if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
      dbPreviewData.sort(function (a, b) { return b[`average_result${arrMonths}`] - a[`average_result${arrMonths}`] });

      for (let i = 0; i < dbPreviewData.length; i++) {
        let avg = dbPreviewData[i][`average_result${arrMonths}`];
        let studentsWithRank = dbPreviewData.filter(
          (student) => student[`average_result${arrMonths}`] === avg
        );
        for (let student of studentsWithRank) {
          student[`average_result${arrMonths}Rank`] = i + 1;
        }
        i += studentsWithRank.length - 1;
      }
      setdbPreviewPrint(dbPreviewData)
      dbPreviewData.map((d) => {
        let rank = d[`average_result${arrMonths}Rank`]
        let id = d.id
        try {
          if (id) {
            let aar = {}
            aar[`average_result${arrMonths}Rank`] = rank
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          }
        } catch (error) {
          console.log('Error:', error);
        }
      })



    }
    if (['secondSemester'].includes(dbMonths)) {
      dbPreviewData.sort(function (a, b) { return b[`average_year`] - a[`average_year`] });

      for (let i = 0; i < dbPreviewData.length; i++) {
        let avg = dbPreviewData[i][`average_year`];
        let studentsWithRank = dbPreviewData.filter(
          (student) => student[`average_year`] === avg
        );
        for (let student of studentsWithRank) {
          student[`average_yearRank`] = i + 1;
        }
        i += studentsWithRank.length - 1;
      }
      setdbPreviewPrint(dbPreviewData)
      dbPreviewData.map((d) => {
        let rank = d[`average_yearRank`]
        let id = d.id
        try {
          if (id) {
            let aar = {}
            aar[`average_yearRank`] = rank
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          }
        } catch (error) {
          console.log('Error:', error);
        }
      })



    }
    if (['fourmonths1', 'fourmonths2'].includes(dbMonths)) {
        dbPreviewData.sort(function (a, b) { return b[`getAverage_${arrMonths}`] - a[`getAverage_${arrMonths}`] });
        for (let i = 0; i < dbPreviewData.length; i++) {
          let avg = dbPreviewData[i][`getAverage_${arrMonths}`];
          let studentsWithRank = dbPreviewData.filter(
            (student) => student[`getAverage_${arrMonths}`] === avg
          );
          for (let student of studentsWithRank) {
            student[`getAverage_${arrMonths}Rank`] = i + 1;
          }
          i += studentsWithRank.length - 1;
        }
        {
          dbPreviewData.map((d) => {
            var id = d.id
            var rank = d[`getAverage_${arrMonths}Rank`]
            if (!rank) {
              rank = '0.00'
            }
            let aar = {}
            aar[`getAverage_${arrMonths}Rank`] = rank
            if (id) {
              update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
            }
          })
        }
      }
    if (['firstSemesterResult', 'secondSemesterResult'].includes(dbMonths)) {
      const semesterResultArray = [...dataStd];
      if (dbMonths === 'firstSemesterResult') {
        semesterResultArray.sort(function (a, b) { return b[`average_ALLfirstSemesterResult`] - a[`average_ALLfirstSemesterResult`] });

        for (let i = 0; i < semesterResultArray.length; i++) {
          let avg = semesterResultArray[i][`average_ALLfirstSemesterResult`];
          let studentsWithRank = semesterResultArray.filter(
            (student) => student[`average_ALLfirstSemesterResult`] === avg
          );
          for (let student of studentsWithRank) {
            student[`rank_m1semester`] = i + 1;
          }
          i += studentsWithRank.length - 1;
        }
        setdbPreviewPrint(semesterResultArray)
        semesterResultArray.map((d) => {
          let rank = d[`rank_m1semester`]
          let id = d.id
          try {
            if (id) {
              let aar = {}
              aar[`showRank_m1semester`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            }
          } catch (error) {
            console.log('Error:', error);
          }
        })
      }
      if (dbMonths === 'secondSemesterResult') {
        semesterResultArray.sort(function (a, b) { return b[`average_ALLsecondSemesterResult`] - a[`average_ALLsecondSemesterResult`] });

        for (let i = 0; i < semesterResultArray.length; i++) {
          let avg = semesterResultArray[i][`average_ALLsecondSemesterResult`];
          let studentsWithRank = semesterResultArray.filter(
            (student) => student[`average_ALLsecondSemesterResult`] === avg
          );
          for (let student of studentsWithRank) {
            student[`rank_m2semester`] = i + 1;
          }
          i += studentsWithRank.length - 1;
        }
        setdbPreviewPrint(semesterResultArray)
        semesterResultArray.map((d) => {
          let rank = d[`rank_m2semester`]
          let id = d.id
          try {
            if (id) {
              let aar = {}
              aar[`showRank_m2semester`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            }
          } catch (error) {
            console.log('Error:', error);
          }
        })
      }

    }
  }, [dataStd])

  //Get rank for 1st and 2nd semester
  const GetRankSemester = () => {
    const dbSemester = [...dataStd]
    if (primary_g_p1.includes(dbGrade)) {
      // useEffect(() => {
      //   if (['fourmonths1', 'fourmonths2'].includes(dbMonths)) {
      //     dbSemester.sort(function (a, b) { return b[`getAverage_${arrMonths}`] - a[`getAverage_${arrMonths}`] });
      //     for (let i = 0; i < dbSemester.length; i++) {
      //       let avg = dbSemester[i][`getAverage_${arrMonths}`];
      //       let studentsWithRank = dbSemester.filter(
      //         (student) => student[`getAverage_${arrMonths}`] === avg
      //       );
      //       for (let student of studentsWithRank) {
      //         student[`getAverage_${arrMonths}Rank`] = i + 1;
      //       }
      //       i += studentsWithRank.length - 1;
      //     }
      //     {
      //       dbSemester.map((d) => {
      //         var id = d.id
      //         var rank = d[`getAverage_${arrMonths}Rank`]
      //         if (!rank) {
      //           rank = '0.00'
      //         }
      //         let aar = {}
      //         aar[`getAverage_${arrMonths}Rank`] = rank
      //         if (id) {
      //           update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
      //         }
      //       })
      //     }
      //   }
      // }, [dbSemester])
      // useEffect(() => {
      //   if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
      //     if (dbMonths === 'firstSemester') {
      //       dbSemester.sort(function (a, b) { return b[`average_result${arrMonths}se1`] - a[`average_result${arrMonths}se1`] });
      //       for (let i = 0; i < dbSemester.length; i++) {
      //         let avg = dbSemester[i][`average_result${arrMonths}se1`];
      //         let studentsWithRank = dbSemester.filter(
      //           (student) => student[`average_result${arrMonths}se1`] === avg
      //         );
      //         for (let student of studentsWithRank) {
      //           student[`average_result${arrMonths}se1Rank`] = i + 1;
      //         }
      //         i += studentsWithRank.length - 1;
      //       }
      //       {
      //         dbSemester.map((d) => {
      //           var id = d.id
      //           var rank = d[`average_result${arrMonths}se1Rank`]
      //           if (!rank) {
      //             rank = '0.00'
      //           }
      //           let aar = {}
      //           aar[`average_result${arrMonths}se1Rank`] = rank
      //           if (id) {
      //             update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
      //           }
      //         })
      //       }

      //     }
      //     if (dbMonths === 'secondSemester') {
      //       dbSemester.sort(function (a, b) { return b[`average_result${arrMonths}se2`] - a[`average_result${arrMonths}se2`] });
      //       for (let i = 0; i < dbSemester.length; i++) {
      //         let avg = dbSemester[i][`average_result${arrMonths}se2`];
      //         let studentsWithRank = dbSemester.filter(
      //           (student) => student[`average_result${arrMonths}se2`] === avg
      //         );
      //         for (let student of studentsWithRank) {
      //           student[`average_result${arrMonths}se2Rank`] = i + 1;
      //         }
      //         i += studentsWithRank.length - 1;
      //       }
      //       {
      //         dbSemester.map((d) => {
      //           var id = d.id
      //           var rank = d[`average_result${arrMonths}se2Rank`]
      //           if (!rank) {
      //             rank = '0.00'
      //           }
      //           let aar = {}
      //           aar[`average_result${arrMonths}se2Rank`] = rank
      //           if (id) {
      //             update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
      //           }
      //         })
      //       }

      //     }
      //   }
      // }, [dbSemester])
      // useEffect(() => {
      //   if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
      //     dbSemester.sort(function (a, b) { return b[`average_result${arrMonths}se1`] - a[`average_result${arrMonths}se1`] });
      //     for (let i = 0; i < dbSemester.length; i++) {
      //       let avg = dbSemester[i][`average_result${arrMonths}se1`];
      //       let studentsWithRank = dbSemester.filter(
      //         (student) => student[`average_result${arrMonths}se1`] === avg
      //       );
      //       for (let student of studentsWithRank) {
      //         student[`average_result${arrMonths}se1Rank`] = i + 1;
      //       }
      //       i += studentsWithRank.length - 1;
      //     }
      //     {
      //       dbSemester.map((d) => {
      //         var id = d.id
      //         var rank = d[`average_result${arrMonths}se1Rank`]
      //         if (!rank) {
      //           rank = '0.00'
      //         }
      //         let aar = {}
      //         aar[`k_${arrMonths}Rank`] = rank
      //         if (id) {
      //           update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
      //         }
      //       })
      //     }
      //   }
      // }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`k_${arrMonths}`] - a[`k_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`k_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`k_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`k_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`k_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`k_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`k_dic_${arrMonths}`] - a[`k_dic_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`k_dic_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`k_dic_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`k_dic_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`k_dic_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`k_dic_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`k_wri_${arrMonths}`] - a[`k_wri_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`k_wri_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`k_wri_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`k_wri_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`k_wri_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`k_wri_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`math_${arrMonths}`] - a[`math_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`math_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`math_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`math_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`math_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`math_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`hist_${arrMonths}`] - a[`hist_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`hist_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`hist_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`hist_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`hist_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`hist_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`ict_${arrMonths}`] - a[`ict_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`ict_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`ict_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`ict_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`ict_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`ict_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`mo_${arrMonths}`] - a[`mo_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`mo_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`mo_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`mo_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`mo_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`mo_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`e_${arrMonths}`] - a[`e_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`e_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`e_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`e_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`e_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`e_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`pe_${arrMonths}`] - a[`pe_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`pe_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`pe_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`pe_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`pe_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`pe_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`earth_${arrMonths}`] - a[`earth_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`earth_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`earth_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`earth_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`earth_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`earth_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`geor_${arrMonths}`] - a[`geor_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`geor_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`geor_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`geor_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`geor_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`geor_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`phy_${arrMonths}`] - a[`phy_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`phy_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`phy_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`phy_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`phy_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`phy_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`chem_${arrMonths}`] - a[`chem_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`chem_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`chem_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`chem_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`chem_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`chem_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`hom_${arrMonths}`] - a[`hom_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`hom_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`hom_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`hom_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`hom_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`hom_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`eco_${arrMonths}`] - a[`eco_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`eco_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`eco_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`eco_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`eco_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`eco_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`bio_${arrMonths}`] - a[`bio_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`bio_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`bio_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`bio_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`bio_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`bio_${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])
      useEffect(() => {
        if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
          dbSemester.sort(function (a, b) { return b[`total_all_score_${arrMonths}`] - a[`total_all_score_${arrMonths}`] });
          for (let i = 0; i < dbSemester.length; i++) {
            let avg = dbSemester[i][`total_all_score_${arrMonths}`];
            let studentsWithRank = dbSemester.filter(
              (student) => student[`total_all_score_${arrMonths}`] === avg
            );
            for (let student of studentsWithRank) {
              student[`total_all_score_${arrMonths}Rank`] = i + 1;
            }
            i += studentsWithRank.length - 1;
          }
          {
            dbSemester.map((d) => {
              var id = d.id
              var rank = d[`total_all_score_${arrMonths}Rank`]
              if (!rank) {
                rank = '0.00'
              }
              let aar = {}
              aar[`showRank${arrMonths}Rank`] = rank
              if (id) {
                update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + id), aar);
              }
            })
          }
        }
      }, [dbSemester])


    }
  }


  const ViewPrint = () => {
    return (
      <>
        <div id="print_result_all">
          <table className="table table-bordered border-dark">
            <thead
              style={{
                fontSize: '1.5vw',
                lineHeight: '1.5'
              }}
            >
              <tr>
                <HeaderPrintResult />
              </tr>
            </thead>
            <tbody
              style={{
                fontSize: '1.5vw',
                lineHeight: '1.5',
                padding: '10px'
              }}
            >

              {dbPreviewPrint.map((d, index) => {
                let average = parseFloat(d[`average_${arrMonths}`]);
                let total = parseFloat(d[`total_all_score_${arrMonths}`]);
                average = average.toFixed(2)
                total = total.toFixed(2)
                let mention = '';
                var my = parseFloat(average);
                if (my <= 24.99) {
                  mention = "ខ្សោយ"
                } else if (my <= 25) {
                  mention = "មធ្យម"
                } else if (my <= 33) {
                  mention = "ល្អបង្គួរ";
                } else if (my <= 40) {
                  mention = "ល្អ";
                }
                return (
                  <>
                    <tr key={d.id}>
                      <td className="border-dark">{index + 1}</td>
                      <td className="border-dark text-start">
                        <span
                          style={{ marginInlineStart: '1rem' }}
                        >{d.fullname}</span></td>
                      <td className="border-dark">{d.gender}</td>
                      <td className="border-dark">{total}</td>
                      <td className="border-dark">{average}</td>
                      <td className="border-dark" style={{ color: 'red' }}>{d[`rank_${arrMonths}`]}</td>
                      <td className="border-dark" style={{ color: 'red' }}>{mention}</td>
                      <td className="border-dark"></td>
                    </tr>
                  </>
                )
              })}
            </tbody>

          </table>
          <Col
            className="mt-2"
            style={{
              fontSize: '1.5vw',
              lineHeight: '1.5',
            }}
          >
            <Row style={{ marginRight: '4vh' }}>
              <Col className="text-end fw-bold">
                - បញ្ឈប់បញ្ចីត្រឹមចំនួន
                <span id="total_pass_all" style={{ color: 'blue' }}> {totalKh} </span>
                នាក់ ស្រី <span id="total_female"
                  style={{ color: 'blue' }}> {femaleKh} </span> នាក់
              </Col>
            </Row>
            <Row style={{ marginRight: '4vh' }}>
              <Col className="text-end fw-bold">
                - សិស្សជាប់មធ្យមភាគ <span
                  id="total_pass_st" style={{ color: 'blue' }}> {passKh} </span> នាក់
                ស្រី <span id="total_pass_female"
                  style={{ color: 'blue' }}> {passFemaleKh} </span> នាក់              </Col>
            </Row>
            <Row style={{ marginRight: '4vh' }}>
              <Col className="text-end fw-bold">
                - សិស្សធ្លាក់មធ្យមភាគ
                <span id="total_fail_std" style={{ color: 'blue' }}> {failKh} </span>
                នាក់ ស្រី <span id="total_fail_female_st"
                  style={{ color: 'blue' }}> {failFemaleKh} </span> នាក់
              </Col>
            </Row>
            <Row style={{ marginRight: '3vh' }}>
              <Col>
                <div
                  style={{
                    position: 'relative',

                  }}>
                  <div
                    style={{
                      position: 'relative',
                      display: 'block',
                      width: '10vw',
                      height: 'auto'
                    }}
                  >
                    <img
                      style={{
                        position: 'relative',
                        display: 'block',
                        width: '30vw',
                        left: '100%',
                        height: 'auto'
                      }}
                      src="https://res.cloudinary.com/salamomschool/image/upload/v1720781504/principleSign2.png" />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      marginTop: '1.8vw',
                      top: '10%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      padding: '10px 20px',
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    <p>បានឃើញ និងឯកភាព</p>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      marginTop: '1.8vw',
                      top: '25%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      padding: '10px 20px',
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}
                  >
                    <p>នាយិកាសាលា</p>
                  </div>
                </div>

              </Col>

              <Col className="text-end fw-bold mt-2">
                រាជធានីភ្នំពេញ, ថ្ងៃទី
                <span id="get_date_num" style={{ color: 'blue' }}> {date} </span>
                ខែ<span id="get_month" style={{ color: 'blue' }}> {month} </span>
                ឆ្នាំ <span id="get_year" style={{ color: 'blue' }}> {year} </span>
                <div
                  style={{ marginRight: '5vh' }}
                  className="mt-2">
                  <span>គ្រូទទួលបន្ទុកថ្នាក់</span>
                </div>
              </Col>
            </Row>

          </Col>
        </div>

      </>
    )
  }
  //Print Preview Result
  function printPreview() {
    const printContent = document.getElementById('showData');
    const newWindow = window.open();
    newWindow.document.write(`
        <html>
        <head>
        <title>លទ្ធផល-${dbGrade} ខែ${subMonth}</title>

        <style>
        .textCenter{
          text-align: start;
        }
        .textStart{
          text-align: start;
          width: 10rem;
        }

        @media print {
            @page {
                size: landscape;
                margin-top: 3mm;
                margin-right: 4mm;
                margin-bottom: 3mm;
                margin-left: 4mm;
            }
            }
            @font-face {
            font-family: "KhOSSiemreap";
            src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1710682946/fonts/01a09003da4063952afa7734f4f393af.ttf");
            font-weight: normal
            }
            * {
            font-family: KhOSSiemreap;
            font-size: 1.1vw;
            line-height: 1.3;
            }
            body {
                -webkit-print-color-adjust: exact;
                }
            table {
                width: 100%;
                border-collapse: collapse; }
            th, td {
                border: 1px solid black;
                color: black;
                text-align: center;
                padding:5px }
            #show_data_print td:nth-child(2){
                text-align: left;
                width: 10rem;
                padding: 5px;
            }
        </style>
        </head><body>`);
    newWindow.document.write(printContent.outerHTML);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.focus();
    setTimeout(() => {
      newWindow.print();
    }, 500);
    // newWindow.close();

  }

  const ControlerContent = () => {
    const printDiv = () => {
      const printContent = document.getElementById('print_result_all');
      const newWindow = window.open();
      newWindow.document.write(`
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>លទ្ធផល-${numKh}(${lettersKh}) ${subMonth}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

        <style>
        @media print {
           @media print {
            @page {
                size: A4;
                margin-top: 3mm;
                margin-right: 4mm;
                margin-bottom: 3mm;
                margin-left: 4mm;
                transform: scale(0.1);
                transform-origin: 0 0;
            }
        }

        @font-face {
            font-family: "KhOSSiemreap";
            src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1710682946/fonts/01a09003da4063952afa7734f4f393af.ttf");
            font-weight: normal
        }
        @font-face {
            font-family: "kh moul";
            src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1711085952/fonts/kh%20moul.TTF");
            font-weight: normal
        }

        * {
            font-family: KhOSSiemreap
        }
        .pavachana {
            font-family: kh moul
        }
        body {
            -webkit-print-color-adjust: exact;
        }

        table {
            border-collapse: collapse;
            line-height: 1;
            padding: 20dvh;

        }

        th,
        td {
            border: 0px solid black;
            color: black;
            text-align: center;
            padding: 8px;
        }

        #show_data_print td:nth-child(2) {
            text-align: left;
            width: 10vh;
            padding: 20dvh;
        }
        .head_table{
            font-size: 1.5vw;
            line-height: 1;
            padding: 20dvh;
        }
        {
            font-size: 1.5vw;
            line-height: 1;
            padding: 20dvh;
        }
        .container-principal-sign {
        position: relative;
          top: -15%;

        }
        .sign-imag{
          position: absolute;
          display: block;
          width: 30vw;
          height: auto;
          }
          .place-sign{
          position: absolute;
          display: block;
          width: 30vw;
          height: auto;
          left: 10vw;
        }
          .overlay-text {
          position: absolute; /* Positions the text on top of the image */
          top: 0%;
          margin-top: 1.8vw;
          left: 50%;
          font-weight: bold;
          transform: translate(-50%, -50%); /* Centers the text within the image */
          padding: 10px 20px;
          text-align: center;
        }
        .headSize{
          font-size: 1.5vw;
          line-height: 1.5
        }
        .line_limit{
            width: 28vh;
        }
        .line_limit2{
            width: 20vh;
        }
            }
        </style>
        </head>
        <body>
            <div>
        <table class="table table-borderless head_table headSize">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th class="pavachana">ព្រះរាជាណាចក្រកម្ពុជា</th>
                </tr>
                <tr>
                    <th class="text-start">មន្ទីអប់រំយុវជន និង កីឡា រាជធានីភ្នំពេញ</th>
                    <th></th>
                    <th class="pavachana">ជាតិ សាសនា ព្រះមហាក្សត្រ</th>
                </tr>
                <tr>
                    <th class="text-start line_limit">ការិយាល័យអប់រំយុវជន និងកីឡានៃរដ្ឋបាលខណ្ឌសែនសុខ</th>
                    <th></th>
                    <th><img src="https://res.cloudinary.com/salamomschool/image/upload/v1711107157/fonts/takteng.png.png" style="width: 10vh;" alt="image"></th>
                </tr>
                <tr>
                    <th class="text-start">សាលាបឋមសិក្សា៖ មុំ</th>
                    <th class="line_limit2">${subMonthPrinting}</th>
                    <th></th>
                </tr>
                <tr>
                    <th class="text-start">ថ្នាក់ទី ${numKh} (${lettersKh})</th>
                    <th>ឆ្នាំសិក្សា ${dbYearKh}</th>
                </tr>
            </thead>
            </table>
        </div>

        `);
      newWindow.document.write(printContent.outerHTML);
      newWindow.document.write('</body></html>');
      newWindow.document.close();
      newWindow.focus();
      setTimeout(() => {
        newWindow.print();
      }, 1000);

    }
    function dateKh(number) {
      if (number < 0) {
        return "-" + dateKh(Math.abs(number)); // Handle negative numbers
      }
      const khmerDigits = {
        0: "០",
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩"
      };

      if (number < 10) {
        return khmerDigits[number]; // Use dictionary for single digits
      } else {
        const tensDigit = Math.floor(number / 10);
        const onesDigit = number % 10;
        return khmerDigits[tensDigit] + khmerDigits[onesDigit]; // Combine digits
      }
    }
    function convertYear(number) {
      if (number < 0) {
        return "-" + convertYear(Math.abs(number)); // Handle negative numbers
      }

      const khmerDigits = {
        0: "០",
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩"
      };

      // Handle numbers of any digit length:
      let result = "";
      while (number > 0) {
        const digit = number % 10;
        result = khmerDigits[digit] + result; // Append digits in reverse order
        number = Math.floor(number / 10);
      }

      return result;
    }

    const inputDate = (event) => {
      const selectedDate = new Date(event.target.value);
      let date = new Date(selectedDate);
      let year = date.getFullYear();
      let day = date.getDate();
      let month = date.getMonth();
      let month2 = date.getMonth();

      if (month == 0) { month = 'មករា' };
      if (month == 1) { month = 'កុម្ភៈ' };
      if (month == 2) { month = 'មីនា' };
      if (month == 3) { month = 'មេសា' };
      if (month == 4) { month = 'ឧសភា' };
      if (month == 5) { month = 'មិថុនា' };
      if (month == 6) { month = 'កក្កដា' };
      if (month == 7) { month = 'សីហា' };
      if (month == 8) { month = 'កញ្ញា' };
      if (month == 9) { month = 'តុលា' };
      if (month == 10) { month = 'វិច្ឆិកា' };
      if (month == 11) { month = 'ធ្នូ' };

      const yearKh = convertYear(year).toString().padStart(2, '០')
      const dayKh = dateKh(day).toString().padStart(2, '០')
      if (date) {
        localStorage.setItem('saveDate', dayKh)
        localStorage.setItem('saveMonth', month)
        localStorage.setItem('saveYear', yearKh)
        localStorage.setItem('valeDate', `${year}/${day}/${month2}`)
      }
      setMonth(month)
      setDate(dayKh)
      setYear(yearKh)
    }
    return (
      <>
        <Col>
          <Row>
            <Col>
              <div>
                <button type="button" id="btnSave"
                  className="btn btn-warning rounded shadowed btn-sm me-1 mb-1 dropdown-toggle"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <CIcon icon={cilPrint} className="me-2" />Print
                </button>
                <ul className="dropdown-menu">
                  <li><a onClick={printPreview} className="dropdown-item" id="btn_print"><CIcon icon={cilPrint} className="me-2" />Print ពិនិត្យ</a>
                  </li>
                  <li><a onClick={printDiv} className="dropdown-item" id="btn_print_result"><CIcon icon={cilPrint} className="me-2" /> Print លទ្ធផល</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <button id="btn_save"
                onClick={exportToExcel}
                className="btn btn-warning btn-sm"
                type="button">
                <CIcon icon={cilSave} className="me-2" />
                Save</button>
            </Col>
            <Col>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">ថ្ងៃខែឆ្នាំ</span>
                <input className="form-control text-center" type="date"
                  value={valeDate}
                  onChange={inputDate}
                  style={{ color: 'black', lineHeight: '2' }} id="sle_date" />
              </div>
            </Col>
          </Row>
        </Col>

      </>
    )
  }

  //Header of table preview
  const HeaderTable = () => {
    if (primary_g_p1.includes(dbGrade)) {
      if (['allSemesters'].includes(dbMonths)) {
        return (
          <>
            <thead>
              <tr className="frezze">
                <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ល.រ</th>
                <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ឈ្មោះ</th>
                <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភេទ</th>
                <th colSpan={6} style={{ backgroundColor: '#85f56c', color: 'black' }}>ភាសាខ្មែរ</th>
                <th colSpan={6} style={{ backgroundColor: '#F56C6CFF', color: 'black' }}>សីលធម៌</th>
                <th colSpan={6} style={{ backgroundColor: '#F5E16CFF', color: 'black' }}>ប្រវត្តិវិទ្យា</th>
                <th colSpan={6} style={{ backgroundColor: '#756CF5FF', color: 'black' }}>ភូមិវិទ្យា</th>
                <th colSpan={6} style={{ backgroundColor: '#F56C6CFF', color: 'black' }}>គណិតវិទ្យា</th>
                <th colSpan={6} style={{ backgroundColor: '#CE6CF5FF', color: 'black' }}>រូបវិទ្យា</th>
                <th colSpan={6} style={{ backgroundColor: '#77F56CFF', color: 'black' }}>គីមីវិទ្យា</th>
                <th colSpan={6} style={{ backgroundColor: '#F56C95FF', color: 'black' }}>ជីវវិទ្យា</th>
                <th colSpan={6} style={{ backgroundColor: '#FFFD72FF', color: 'black' }}>ផែនដីវិទ្យា</th>
                <th colSpan={6} style={{ backgroundColor: '#6cf5f3', color: 'black' }}>អង់គ្លេស</th>
              </tr>
              <tr id="show_hearder" className="frezze">
                <th style={{ backgroundColor: '#85f56c', color: 'black' }}>ឆមាស១</th>
                <th style={{ backgroundColor: '#85f56c', color: 'red' }}>ចំ</th>
                <th style={{ backgroundColor: '#85f56c', color: 'black' }}>ឆមាស២</th>
                <th style={{ backgroundColor: '#85f56c', color: 'red' }}>ចំ</th>
                <th style={{ backgroundColor: '#85f56c', color: 'black' }}>សរុប</th>
                <th style={{ backgroundColor: '#85f56c', color: 'red' }}>ចំ</th>

                <th style={{ backgroundColor: '#F56C6CFF', color: 'black' }}>ឆមាស១</th>
                <th style={{ backgroundColor: '#F56C6CFF', color: 'red' }}>ចំ</th>
                <th style={{ backgroundColor: '#F56C6CFF', color: 'black' }}>ឆមាស២</th>
                <th style={{ backgroundColor: '#F56C6CFF', color: 'red' }}>ចំ</th>
                <th style={{ backgroundColor: '#F56C6CFF', color: 'black' }}>សរុប</th>
                <th style={{ backgroundColor: '#F56C6CFF', color: 'red' }}>ចំ</th>
              </tr>
            </thead>
          </>
        )

      }
      if (['firstSemester', 'secondSemester'].includes(dbMonths)) {
        if (dbMonths === 'firstSemester') {
          return (
            <>
              <thead>
                <tr id="show_hearder" className="frezze">
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ល.រ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ឈ្មោះ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភេទ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភាសាខ្មែរ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សរសេរតាមអាន</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>តែងសេចក្តី</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សីលធម៌</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រវត្តិវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភូមិវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គណិតវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>រូបវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គីមីវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ជីវវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ផែនដីវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អង់គ្លេស</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កុំព្យូទ័រ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គេហវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កីឡា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>ពិន្ទុសរុប</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>មធ្យមភាគ</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>ចំណាត់ថ្នាក់</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>និទ្ទេស</th>
                  <th style={{ backgroundColor: '#AEF5C0FF', color: 'black' }}>ម.ភាគ ៤ ខែ</th>
                  <th style={{ backgroundColor: '#AEF5C0FF', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#AEF5C0FF', color: 'black' }}>និទេ្ទស</th>
                  <th style={{ backgroundColor: '#F5AEEFFF', color: 'black' }}>ប្រចាំឆមាសទី១</th>
                  <th style={{ backgroundColor: '#F5AEEFFF', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#F5AEEFFF', color: 'black' }}>និទេ្ទស</th>
                  <th style={{ backgroundColor: '#F5AEEFFF', color: 'black' }}>លទ្ធផល</th>
                </tr>
              </thead>
            </>
          )

        }
        if (dbMonths === 'secondSemester') {
          return (
            <>
              <thead>
                <tr id="show_hearder" className="frezze">
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ល.រ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ឈ្មោះ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភេទ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភាសាខ្មែរ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សរសេរតាមអាន</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>តែងសេចក្តី</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សីលធម៌</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រវត្តិវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភូមិវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គណិតវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>រូបវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គីមីវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ជីវវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ផែនដីវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អង់គ្លេស</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កុំព្យូទ័រ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គេហវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កីឡា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>ពិន្ទុសរុប</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>មធ្យមភាគ</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>ចំណាត់ថ្នាក់</th>
                  <th style={{ backgroundColor: '#B3AEF5FF', color: 'black' }}>និទ្ទេស</th>
                  <th style={{ backgroundColor: '#B4F5AEFF', color: 'black' }}>ម.ភាគ ២ខែ</th>
                  <th style={{ backgroundColor: '#B4F5AEFF', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#B4F5AEFF', color: 'black' }}>និទេ្ទស</th>
                  <th style={{ backgroundColor: '#AEF5E9FF', color: 'black' }}>ម.ភាគ ប្រចាំឆមាសទី២</th>
                  <th style={{ backgroundColor: '#AEF5E9FF', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#AEF5E9FF', color: 'black' }}>និទេ្ទស</th>
                  <th style={{ backgroundColor: '#F5AEAEFF', color: 'black' }}>ម.ភាគ ឆមាសទី១</th>
                  <th style={{ backgroundColor: '#F5AEAEFF', color: 'black' }}>ម.ភាគ ៤ខែ</th>
                  <th style={{ backgroundColor: '#F5AEAEFF', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#F5AEAEFF', color: 'black' }}>និទេ្ទស</th>
                  <th style={{ backgroundColor: '#C3AEF5FF', color: 'black' }}>ម.ភាគ ប្រចាំឆមាសទី១</th>
                  <th style={{ backgroundColor: '#C3AEF5FF', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#C3AEF5FF', color: 'black' }}>និទេ្ទស</th>
                  <th style={{ backgroundColor: '#F3AEF5FF', color: 'black' }}>ម.ភាគ ប្រចាំឆ្នាំ</th>
                  <th style={{ backgroundColor: '#F3AEF5FF', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#F3AEF5FF', color: 'black' }}>និទេ្ទស</th>
                  <th style={{ backgroundColor: '#F3AEF5FF', color: 'black' }}>លទ្ធផល</th>
                </tr>
              </thead>
            </>
          )

        }

      }
      if (['firstSemesterResult', 'secondSemesterResult'].includes(dbMonths)) {
        return (
          <>
            <thead>
              <tr id="show_hearder" className="frezze">
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ល.រ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ឈ្មោះ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភេទ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពិន្ទុ៤ខែ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>
                  {dbMonths === 'firstSemesterResult' ? 'ពិន្ទុឆមាសទី១' : dbMonths === 'secondSemesterResult' ? 'ពិន្ទុឆមាសទី២' : ''}
                </th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពិន្ទុសរុប</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>មធ្យមភាគ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំណាត់ថ្នាក់</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>និទ្ទេស</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ផ្សេងៗ</th>
              </tr>
            </thead>
          </>
        )

      }
      if (['AnnualYear'].includes(dbMonths)) {
        if (primary_g1.includes(dbGrade)) {
          return (
            <>
              <thead>
                <tr className="frezze">
                  <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ល.រ</th>
                  <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ឈ្មោះ</th>
                  <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភេទ</th>
                  <th colSpan={24} style={{ backgroundColor: '#85f56c', color: 'black' }}>ឆមាសទី១</th>
                  <th colSpan={24} style={{ backgroundColor: '#6cf5f3', color: 'black' }}>ឆមាសទី២</th>
                </tr>
                <tr id="show_hearder" className="frezze">
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភាសាខ្មែរ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សីលធម៌</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រវត្តិវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភូមិវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គណិតវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>រូបវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គីមីវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ជីវវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ផែនដីវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អង់គ្លេស</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កុំព្យូទ័រ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គេហវិទ្យា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កីឡា</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពិសរ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>មភ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>និទ</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ខែ4-1</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ខែ4-2</th>
                  <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រចាំឆ្នាំ</th>
                </tr>
              </thead>
            </>
          )
        }
        // else {
        //   return (
        //     <>
        //       <thead>
        //         <tr className="frezze">
        //           <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ល.រ</th>
        //           <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ឈ្មោះ</th>
        //           <th rowSpan={2} style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភេទ</th>
        //           <th colSpan={24} style={{ backgroundColor: '#85f56c', color: 'black' }}>ឆមាសទី១</th>
        //           <th colSpan={24} style={{ backgroundColor: '#6cf5f3', color: 'black' }}>ឆមាសទី២</th>
        //         </tr>
        //         <tr id="show_hearder" className="frezze">
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សរ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>តែង</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គណិ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>វិទ្យា</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភូមិ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រវ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពល</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កីឡា</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អង់</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពិសរ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>មភ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>និទ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សរ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>តែង</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គណិ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>វិទ្យា</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភូមិ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រវ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពល</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កីឡា</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អង់</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពិសរ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>មភ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'red' }}>ចំ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>និទ</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ខែ4-1</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ខែ4-2</th>
        //           <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រចាំឆ្នាំ</th>
        //         </tr>
        //       </thead>
        //     </>
        //   )

        // }

      }
      if (['fourmonths1', 'fourmonths2'].includes(dbMonths)) {
        if (dbMonths === 'fourmonths1') {
          return (
            <>
              <thead>
                <tr id="show_hearder" className="frezze">
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ល.រ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ឈ្មោះ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ភេទ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>វិច្ឆិកា</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ធ្នូ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>មករា</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>កុម្ភៈ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ពិន្ទុសរុប</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>មធ្យមភាគ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ចំណាត់ថ្នាក់</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>និទ្ទេស</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>តួចែក
                    <Check_btn />
                  </th>
                </tr>
              </thead>
            </>
          )
        }
        if (dbMonths === 'fourmonths2') {
          return (
            <>
              <thead>
                <tr id="show_hearder" className="frezze">
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ល.រ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ឈ្មោះ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ភេទ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>មេសា-ឧសភា</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>មិថុនា</th>

                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ពិន្ទុសរុប</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>មធ្យមភាគ</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>ចំណាត់ថ្នាក់</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>និទ្ទេស</th>
                  <th style={{
                    backgroundColor: '#f5f0ae',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}>តួចែក
                    <Check_btn />
                  </th>
                </tr>
              </thead>
            </>
          )
        }
      }

      if ([
        'October',
        'November',
        'December',
        'January',
        'February',
        'March',
        'AprilMay',
        'June',
        'July',
      ].includes(dbMonths)) {
        return (
          <>
            <thead>
              <tr id="show_hearder" className="frezze">
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ល.រ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ឈ្មោះ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភេទ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភាសាខ្មែរ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សរសេរតាមអាន</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>តែងសេចក្តី</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>សីលធម៌</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ប្រវត្តិវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ភូមិវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គណិតវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>រូបវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គីមីវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ជីវវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ផែនដីវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>អង់គ្លេស</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កុំព្យូទ័រ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>គេហវិទ្យា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>កីឡា</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ពិន្ទុសរុប</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>មធ្យមភាគ</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>ចំណាត់ថ្នាក់</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>និទ្ទេស</th>
                <th style={{ backgroundColor: '#f5f0ae', color: 'black' }}>លទ្ធផល</th>
              </tr>
            </thead>
          </>
        )
      }
    }

  }

  //Main content show
  const ShowAllPart = () => {
    return (
      <>
        <ControlerContent />
        <ShowPassFail />
        <GetRankSemester />
        <div id="allData">
          <table className="table table-bordered table-hover" id="showData">
            <HeaderTable />
            <tbody id="show_data_result" className="new_account">
              <ShowAllData />
            </tbody>
          </table>
        </div>
        {dataAverage ?
          (<>
            <div style={{ display: 'none' }}>
              <ViewPrint />

            </div>

          </>)
          : (
            <>
            </>
          )
        }

      </>
    )
  }

  return <ShowAllPart />
}


