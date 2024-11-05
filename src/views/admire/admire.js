import React, { useEffect, useState, useRef } from "react";
import firebase from '../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowThickBottom, cilDataTransferDown, cilPen, cilPlus, cilPrint, cilSearch, cilTrash, cilUser } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow } from "@coreui/react";
import { Container, Row, Col, FormControl } from 'react-bootstrap';

const MonthScore = () => {
  const db = getDatabase();
  const [arrayGrade, setarrayGrade] = useState([])
  const [arrayYears, setarrayYears] = useState([])

  const [dbLevel, setdbLevel] = useState(localStorage.getItem('dbLevelAdmire') || 'default')
  const [dbGrade, setdbGrade] = useState(localStorage.getItem('dbGradeAdmire') || 'default')
  const [dbGradeKh, setdbGradeKh] = useState(localStorage.getItem('dbGradeAdmireKh') || 'default')
  const [dbMonths, setdbMonths] = useState(localStorage.getItem('dbMonthsAdmire') || 'default')
  const [dbYears, setdbYears] = useState(localStorage.getItem('dbYearsAdmire') || 'default')
  const [dbDivi, setdbDivi] = useState(localStorage.getItem('dbDiviAdmire') || 'default')
  const [positionOne, setpositionOne] = useState(localStorage.getItem('tname1') || 'default')
  const [positionTwo, setpositionTwo] = useState(localStorage.getItem('tname2') || 'default')
  const [positionThree, setpositionThree] = useState(localStorage.getItem('tname3') || 'default')
  const [dataStd, setdataStd] = useState([])
  const [dataStdEn, setdataStdEn] = useState([])
  const [arrayHeader, setarrayHeader] = useState([]);
  const [arrayHeaderEn, setarrayHeaderEn] = useState('');

  useEffect(() => {
    localStorage.setItem('dbLevelAdmire', dbLevel);
    setdbLevel(localStorage.getItem('dbLevelAdmire') || 'default')
  }, [dbLevel]);
  useEffect(() => {
    localStorage.setItem('dbGradeAdmire', dbGrade);
    setdbGrade(localStorage.getItem('dbGradeAdmire') || 'default')
  }, [dbGrade]);
  useEffect(() => {
    localStorage.setItem('dbGradeAdmireKh', dbGradeKh);
    setdbGradeKh(localStorage.getItem('dbGradeAdmireKh') || 'default')
  }, [dbGradeKh]);
  useEffect(() => {
    localStorage.setItem('dbMonthsAdmire', dbMonths);
    setdbMonths(localStorage.getItem('dbMonthsAdmire') || 'default')
  }, [dbMonths]);
  useEffect(() => {
    localStorage.setItem('dbYearsAdmire', dbYears);
    setdbYears(localStorage.getItem('dbYearsAdmire') || 'default')
  }, [dbYears]);
  useEffect(() => {
    localStorage.setItem('dbDiviAdmire', dbDivi);
    setdbDivi(localStorage.getItem('dbDiviAdmire') || 'default')
  }, [dbDivi]);

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
  let gradeLevel = [
    'level1A',
    'level2A',
    'level3A',
    'level1B',
    'level2B',
    'level3B',
    'level1C',
    'level2C',
    'level3C',
    'level4A',
    'level5A',
    'level6A',
    'level4B',
    'level5B',
    'level6B',
    'level4C',
    'level5C',
    'level6C',
  ]

  const dbGradeRef = ref(db, `/SalaMOM/tools/class/` + dbLevel);
  const dbNameAdmire = ref(db, `/SalaMOM/tools/class/${dbLevel}/${dbGradeKh}/t_admire`);
  const dbNameAdmireEn = ref(db, `/SalaMOM/tools/class/${dbLevel}/${dbGradeKh}`);
  const dbYearRef = ref(db, `/SalaMOM/tools/years`);
  const dataAll = ref(db, `/SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}`);
  const dataAllEn = ref(db, `/SalaMOM/classes/` + `${dbYears}/`);

  useEffect(() => {
    onValue(dbGradeRef, (data) => {
      const dataSet = data.val();

      setarrayGrade(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbNameAdmireEn, (data) => {
      const dataSet = data.val();
      let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array
      const enName = dataSet.t_admireEn;
      setarrayHeaderEn(enName);
      localStorage.setItem('tname3', enName);

    })
    onValue(dbNameAdmire, (data) => {
      const dataSet = data.val();
      let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array

      dataAllGrades.sort((a, b) => {
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
      });
      dataAllGrades.map((d, index) => {
        const pos = d.position;
        const name = d.tname;

        if (pos == 1) {
          localStorage.setItem('tname1', name);
        }
        if (pos == 2) {
          localStorage.setItem('tname2', name);
        }
        // if (pos == 3) {
        //   localStorage.setItem('tname3', name);
        // }

      })
      setarrayHeader(dataAllGrades); // Convert object to array
    })
    onValue(dbYearRef, (data) => {
      const dataSet = data.val();
      setarrayYears(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    //Database students
    onValue(dataAll, (data) => {
      const dataSet = data.val();
      let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array

      dataAllGrades.sort((a, b) => {
        if (a.fullname < b.fullname) return -1;
        if (a.fullname > b.fullname) return 1;
        return 0;
      });
      setdataStd(dataAllGrades); // Convert object to array
    })
    onValue(dataAllEn, (data) => {
      const dataSet = data.val();
      let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array

      dataAllGrades.sort((a, b) => {
        if (a.fullname < b.fullname) return -1;
        if (a.fullname > b.fullname) return 1;
        return 0;
      });
      let allData = [];
      data.forEach(e => {
        e.forEach(d => {
          const id = d.val().id;
          const fullname = d.val().fullname;
          const en_level = d.val().en_level;
          const gender = d.val().gender;
          const user_grade = d.val().user_grade;
          if (['01A'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level1A') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }
          if (['01B'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level1B') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }

          if (['02A'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level2A') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }
          if (['02B'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level2B') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }

          if (['03A'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level3A') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }
          if (['03B'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level3B') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }

          if (['04A'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level4A') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }
          if (['04B'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level4B') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }

          if (['05A'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level5A') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }
          if (['05B'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level5B') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }

          if (['06A'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level6A') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }
          if (['06B'].includes(dbGrade)) {
            //Grade A
            if (en_level === 'level6B') {
              allData.push({
                id: id,
                fullname: fullname,
                en_level: en_level,
                user_grade: user_grade,
                gender: gender,
              });
            }
          }




        })
      })
      setdataStdEn(allData);
    })

  }, [])

  const printDiv = () => {
    const printContent = document.getElementById('print_result_all');
    const newWindow = window.open();
    newWindow.document.write(`
        <html>
        <head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>លទ្ធផល</title>

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
                width: 100%;
                border-collapse: collapse;
            }

            th,
            td,
            tr,
            tbody {
                text-align: center;
            }

            .myTable {
                width: 100%;
                border-collapse: collapse;
            }

            .myTable th,
            td {
                /* padding: 8px; */
                text-align: center;
                border: 1px solid #000000;
            }

            .myTbody {
                width: 100%;
                border-collapse: collapse;
            }

            .myTbody td,
            td {
                /* padding: 8px; */
                text-align: center;
                border: 1px solid #000000;
            }

            .myFooter {
                width: 100%;
                border-collapse: collapse;
            }

            .myFooter th,
            td {
                /* padding: 8px; */
                text-align: center;
                border: 1px solid #00000000;
            }

            .text-start {
                text-align: left;
            }
            #show_data_print td:nth-child(2) {
                text-align: left;
                width: 10vh;
                padding: 20dvh;
            }

            .head_table {
                font-size: 1.5vw;
                line-height: 1;
                padding: 20dvh;
            }

            .container-principal-sign {
                position: relative;
                top: -15%;

            }

            .sign-imag {
                position: absolute;
                display: block;
                width: 30vw;
                height: auto;
            }

            .place-sign {
                position: absolute;
                display: block;
                width: 30vw;
                height: auto;
                left: 10vw;
            }

            .overlay-text {
                position: absolute;
                /* Positions the text on top of the image */
                top: 0%;
                margin-top: 1.8vw;
                left: 50%;
                font-weight: bold;
                transform: translate(-50%, -50%);
                /* Centers the text within the image */
                padding: 10px 20px;
                text-align: center;
            }

            .headSize {
                font-size: 1.5vw;
                line-height: 1.5
            }

            .headSizeFooter {
                font-size: 1.5vw;
                line-height: 1.5
            }

            .line_limit {
                width: 28vh;
            }

            .al {
                width: 45vh;
            }

            .line_limit2 {
                width: 25vh;
            }

            .table-show {
                padding: 10px;
            }
        }
            .text-started td:nth-child(2) {
  text-align: left;
  padding: 5px;

}

    </style>

</head>

<body>
<div class="allContain">
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class="pavachana">ព្រះរាជាណាចក្រកម្ពុជា</th>
                    </tr>
                    <tr>
                        <th class="text-start">ការិយាល័យអប់រំយុវជន និងកីឡានៃរដ្ឋបាលខណ្ឌសែនសុខ</th>
                        <th></th>
                        <th class="pavachana">ជាតិ សាសនា ព្រះមហាក្សត្រ</th>
                    </tr>
                    <tr>
                        <th class="text-start line_limit">បឋមសិក្សា សាលាមុំ</th>
                        <th></th>
                        <th><img src="https://res.cloudinary.com/salamomschool/image/upload/v1711107157/fonts/takteng.png.png"
                                style="width: 10vh;" alt="image"></th>
                    </tr>
                    <tr>
                        <th class="text-start"></th>
                        <th class="line_limit2">គ្រូត្រួតពិនិត្យសិស្សដែលត្រូវទទួលរង្វាន់: ថ្នាក់ទី <span id="stdgrade"></span></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th class="text-start"></th>
                        <th>ផ្នែក..........................(សប្តាហ៍ទី.....)</th>
                    </tr>
                </thead>
            </table>
        </div>

    </div>

        `);
    newWindow.document.write(printContent.outerHTML);
    newWindow.document.write(`
    <div class="allContain">
        <div>
            <table>
                <thead>
                    <tr>
                        <th class="text-start al">វិន័យ បទបញ្ជាផ្ទៃក្នុង: <span id="name1">ហុិន ធារី</span></th>
                        <th>ភ្នំពេញថ្ងៃទី......... ខែ...........ឆ្នាំ ២០......</th>
                    </tr>
                    <tr>
                        <th class="text-start">សីលធម៌: <span id="name2">ហុិន ធារី</span></th>
                        <th>គ្រូទទួលបន្ទុក</th>
                    </tr>
                    <tr>
                        <th class="text-start">ខិតខំរៀនសូត្រ: <span id="name3">ហុិន ធារី</span></th>
                        <th></th>
                    </tr>

                </thead>
            </table>
        </div>

    </div>


    <script>
        var name1 = localStorage.getItem('tname1');
        var name2 = localStorage.getItem('tname2');
        var name3 = localStorage.getItem('tname3');
        var grade = localStorage.getItem('dbGradeAdmireKh');

        document.getElementById("name1").innerHTML = name1;
        document.getElementById("name2").innerHTML = name2;
        document.getElementById("name3").innerHTML = name3;
        document.getElementById("stdgrade").innerHTML = grade;

    </script>

      </body ></html >`);
    newWindow.document.close();
    newWindow.focus();
    setTimeout(() => {
      newWindow.print();
    }, 1000);

  }
  const printDivEn = () => {
    const printContent = document.getElementById('print_result_all_en');
    const newWindow = window.open();
    newWindow.document.write(`
        <html>
        <head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>លទ្ធផល</title>

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
                width: 100%;
                border-collapse: collapse;
            }

            th,
            td,
            tr,
            tbody {
                text-align: center;
            }

            .myTable {
                width: 100%;
                border-collapse: collapse;
            }

            .myTable th,
            td {
                /* padding: 8px; */
                text-align: center;
                border: 1px solid #000000;
            }

            .myTbody {
                width: 100%;
                border-collapse: collapse;
            }

            .myTbody td,
            td {
                /* padding: 8px; */
                text-align: center;
                border: 1px solid #000000;
            }

            .myFooter {
                width: 100%;
                border-collapse: collapse;
            }

            .myFooter th,
            td {
                /* padding: 8px; */
                text-align: center;
                border: 1px solid #00000000;
            }

            .text-start {
                text-align: left;
            }
            #show_data_print td:nth-child(2) {
                text-align: left;
                width: 10vh;
                padding: 20dvh;
            }

            .head_table {
                font-size: 1.5vw;
                line-height: 1;
                padding: 20dvh;
            }

            .container-principal-sign {
                position: relative;
                top: -15%;

            }

            .sign-imag {
                position: absolute;
                display: block;
                width: 30vw;
                height: auto;
            }

            .place-sign {
                position: absolute;
                display: block;
                width: 30vw;
                height: auto;
                left: 10vw;
            }

            .overlay-text {
                position: absolute;
                /* Positions the text on top of the image */
                top: 0%;
                margin-top: 1.8vw;
                left: 50%;
                font-weight: bold;
                transform: translate(-50%, -50%);
                /* Centers the text within the image */
                padding: 10px 20px;
                text-align: center;
            }

            .headSize {
                font-size: 1.5vw;
                line-height: 1.5
            }

            .headSizeFooter {
                font-size: 1.5vw;
                line-height: 1.5
            }

            .line_limit {
                width: 28vh;
            }

            .al {
                width: 45vh;
            }

            .line_limit2 {
                width: 25vh;
            }

            .table-show {
                padding: 10px;
            }
        }
            .text-started td:nth-child(2) {
  text-align: left;
  padding: 5px;

}

    </style>

</head>

<body>
<div class="allContain">
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class="pavachana">ព្រះរាជាណាចក្រកម្ពុជា</th>
                    </tr>
                    <tr>
                        <th class="text-start">ការិយាល័យអប់រំយុវជន និងកីឡានៃរដ្ឋបាលខណ្ឌសែនសុខ</th>
                        <th></th>
                        <th class="pavachana">ជាតិ សាសនា ព្រះមហាក្សត្រ</th>
                    </tr>
                    <tr>
                        <th class="text-start line_limit">បឋមសិក្សា សាលាមុំ</th>
                        <th></th>
                        <th><img src="https://res.cloudinary.com/salamomschool/image/upload/v1711107157/fonts/takteng.png.png"
                                style="width: 10vh;" alt="image"></th>
                    </tr>
                    <tr>
                        <th class="text-start"></th>
                        <th class="line_limit2">គ្រូត្រួតពិនិត្យសិស្សដែលត្រូវទទួលរង្វាន់: ថ្នាក់ទី <span id="stdgrade"></span></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th class="text-start"></th>
                        <th>ផ្នែក ខិតខំរៀនសូត្រ (ខែ..............)<th>
                    </tr>
                </thead>
            </table>
        </div>

    </div>

        `);
    newWindow.document.write(printContent.outerHTML);
    newWindow.document.write(`
    <div class="allContain">
        <div>
            <table>
                <thead>
                    <tr>
                        <th class="text-start al">វិន័យ បទបញ្ជាផ្ទៃក្នុង: <span id="name1">ហុិន ធារី</span></th>
                        <th>ភ្នំពេញថ្ងៃទី......... ខែ...........ឆ្នាំ ២០......</th>
                    </tr>
                    <tr>
                        <th class="text-start">សីលធម៌: <span id="name2">ហុិន ធារី</span></th>
                        <th>គ្រូទទួលបន្ទុក</th>
                    </tr>
                    <tr>
                        <th class="text-start">ខិតខំរៀនសូត្រ: <span id="name3">ហុិន ធារី</span></th>
                        <th></th>
                    </tr>

                </thead>
            </table>
        </div>

    </div>


    <script>
        var name1 = localStorage.getItem('tname1');
        var name2 = localStorage.getItem('tname2');
        var name3 = localStorage.getItem('tname3');
        var grade = localStorage.getItem('dbGradeAdmireKh');

        document.getElementById("name1").innerHTML = name1;
        document.getElementById("name2").innerHTML = name2;
        document.getElementById("name3").innerHTML = name3;
        document.getElementById("stdgrade").innerHTML = grade;

    </script>

      </body ></html >`);
    newWindow.document.close();
    newWindow.focus();
    setTimeout(() => {
      newWindow.print();
    }, 1000);

  }


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
      ];
    }

    const select = (d) => {
      let data = d.target.value;
      setdbLevel(d.target.value)
      localStorage.setItem('dbLevelAdmire', data)
      window.location.reload()
    }
    const grade = (d) => {
      let data = d.target.value;
      const selectedOption = d.target.options[d.target.selectedIndex];
      let datakh = selectedOption.dataset.kh;
      setdbGrade(d.target.value)
      localStorage.setItem('dbGradeAdmire', data);
      localStorage.setItem('dbGradeAdmireKh', datakh);
      window.location.reload()
    }
    const months = (d) => {
      let data = d.target.value;
      setdbMonths(d.target.value)
      localStorage.setItem('dbMonthsAdmire', data)
      window.location.reload()
    }
    const year = (d) => {
      let data = d.target.value;
      let datakh = d.target.options[d.target.selectedIndex].dataset.khyear
      setdbYears(d.target.value)
      localStorage.setItem('dbYearsAdmire', data)
      localStorage.setItem('dbYearsKhAdmire', datakh)
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
                <option key={option.clEn} data-kh={option.clKh} value={option.clEn}>
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


        </Row>
        <Row className="mt-2">
          <Col>
            <div>
              <button type="button" id="btnSave"
                className="btn btn-warning rounded shadowed btn-sm me-1 mb-1 dropdown-toggle"
                data-bs-toggle="dropdown" aria-expanded="false">
                <CIcon icon={cilPrint} className="me-2" />Print
              </button>
              <ul className="dropdown-menu">
                <li><a onClick={printDivEn} className="dropdown-item" id="btn_print"><CIcon icon={cilPrint} className="me-2" />Print អង់គ្លេស</a>
                </li>
                <li><a onClick={printDiv} className="dropdown-item" id="btn_print_result"><CIcon icon={cilPrint} className="me-2" /> Print ទូទៅ</a>
                </li>
              </ul>
            </div>

          </Col>
        </Row>
      </Col>

    );
  }

  //Header of the table
  const HeaderTable = () => {

    return (
      <>
        <tr>
          <th >ល.រ</th>
          <th>ឈ្មោះពេញ</th>
          <th>ភេទ</th>
          {arrayHeader.map((d, index) => {

            return (
              <>
                <th>{d.tname}</th>
              </>
            )
          })}
        </tr>
      </>
    )
  }
  const HeaderTableEn = () => {

    return (
      <>
        <tr>
          <th rowspan="4">ល.រ</th>
          <th rowspan="4">ឈ្មោះពេញ</th>
          <th rowspan="4">ភេទ</th>
          <th rowspan="4">ថ្នាក់</th>
          <th colspan="12">{arrayHeaderEn}</th>
        </tr>
        <tr>
          <th colspan="4">វិន័យ បទបញ្ជាផ្ទៃក្នុង</th>
          <th colspan="4">សីលធម៌</th>
          <th colspan="4">ខិតខំរៀនសូត្រ</th>
        </tr>
        <tr>
          <th colspan="4">សប្តាហ៍</th>
          <th colspan="4">សប្តាហ៍</th>
          <th colspan="4">សប្តាហ៍</th>
        </tr>
        <tr>
          <th>ទី១</th>
          <th>ទី២</th>
          <th>ទី៣</th>
          <th>ទី៤</th>
          <th>ទី១</th>
          <th>ទី២</th>
          <th>ទី៣</th>
          <th>ទី៤</th>
          <th>ទី១</th>
          <th>ទី២</th>
          <th>ទី៣</th>
          <th>ទី៤</th>
        </tr>
      </>
    )
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
                <div className="row" id="print_result_all">
                  <table class="myTable">
                    <thead>
                      <HeaderTable />
                    </thead>
                    <tbody class="myTbody text-started">
                      {dataStd.map((d, index) => {

                        return (
                          <>
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="text-start">{d.fullname}</td>
                              <td>{d.gender}</td>
                              {arrayHeader.map((_, i) => (
                                <td key={i}></td>
                              ))}
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </table>

                  {/* <table className="table table-bordered table-me">
                    <thead>
                      <HeaderTable />
                    </thead>
                    <tbody>
                      {dataStd.map((d, index) => {

                        return (
                          <>
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="text-start">{d.fullname}</td>
                              <td>{d.gender}</td>
                              {arrayHeader.map((_, i) => (
                                <td key={i}></td>
                              ))}
                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>

          <div className="card card-primary card-outline">
            <div className="card-body">
              <div className="text-center">
                <div className="row" id="print_result_all_en">
                  <table className="myTable">
                    <thead>
                      <HeaderTableEn />
                    </thead>
                    <tbody class="myTbody text-started">
                      {dataStdEn.map((d, index) => {

                        return (
                          <>
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td className="text-start">{d.fullname}</td>
                              <td>{d.gender}</td>
                              <td>{d.user_grade}</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>

                            </tr>
                          </>
                        )
                      })}
                    </tbody>
                  </table>
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
