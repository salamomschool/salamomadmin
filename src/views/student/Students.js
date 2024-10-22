import React, { useEffect, useState, useRef } from "react";
import firebase from '../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowCircleTop, cilArrowThickBottom, cilPeople, cilPlus, cilSearch, cilTrash } from "@coreui/icons";
import { Modal, Button } from 'react-bootstrap';
import View1Award from "./Rank1";
import moment from "moment/moment";
import momentkh from "@thyrith/momentkh"
import GetId from "src/views/student/GetID.js";
var lettt = momentkh(moment)
var today = lettt()

const Students = () => {
  //Array set
  const [users, setUsers] = useState([]);
  const [lastId, setlastId] = useState('');
  GetId(users)
  const result = GetId(users)

  const [dropStd, setdropStd] = useState([]);
  const [dbeGetYear, setdbeGetYear] = useState([]);
  const [sleGrade, setsleGrade] = useState([]);

  //Value set
  const [dbGade, setdbGrade] = useState(localStorage.getItem('school_grade_st') || 'default');
  const [mydbYear, setmydbYear] = useState(localStorage.getItem('school_year_st') || 'default');
  const [mydbLevel, setmydbLevel] = useState(localStorage.getItem('school_level_st') || 'default');
  const [upgradeYear, setupgradeYear] = useState(localStorage.getItem('upgradeYear') || 'default')
  const [upgradeGrade, setupgradeGrade] = useState(localStorage.getItem('upgradeGrade') || 'default')
  const [dropYear, setdropYear] = useState(localStorage.getItem('dropYear') || 'default')
  const [dropGrade, setdropGrade] = useState(localStorage.getItem('dropGrade') || 'default')
  const [restoreYear, setrestoreYear] = useState(localStorage.getItem('restoreYear') || 'default')
  const [restoreGrade, setrestoreGrade] = useState(localStorage.getItem('restoreGrade') || 'default')
  const [goodGood, setgoodGood] = useState(localStorage.getItem('goodGood') || 'default')
  const [awarPrintDate, setawarPrintDate] = useState(localStorage.getItem('awarPrintDate') || 'default')
  //Btn set
  const btnAdd = useRef('');
  const btnUp = useRef('');
  const btnDe = useRef('');
  const btnUpgrade = useRef(null);

  const [numberRank1, setnumberRank1] = useState('')
  const [numberRank2, setnumberRank2] = useState('')
  const [numberRank3, setnumberRank3] = useState('')
  const [numberRank4, setnumberRank4] = useState('')
  const [numberRank5, setnumberRank5] = useState('')
  const [yearAnimals, setyearAnimals] = useState('')
  const [yearKH, setyearKH] = useState('')
  const [yearNumber, setyearNumber] = useState('')
  const [en_level, seten_level] = useState('')
  //Set ref
  const NameEn = useRef(null);
  const db = getDatabase();
  const dbYear = ref(db, `/SalaMOM/tools/years`);

  const dbPrimary = ref(db, `/SalaMOM/tools/class/${mydbLevel}`);
  const getStd = ref(db, `/SalaMOM/classes/${mydbYear}/${dbGade.replace(/^0+/, '')}/`);
  const getDropStd = ref(db, `/SalaMOM/classes/dropstd/${mydbYear}/${dbGade.replace(/^0+/, '')}`);
  // const [modifiedArray, setModifiedArray] = useState(dbGade.map((item) => item.replace(/^0+/, '')));
  let numberArray = []

  users.map((data, index) => {
    const ii = data.rank_moct
    numberArray.push(ii)

  })

  ///Simple Khmer Date
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('printDateAward').addEventListener('change', () => {

        var d = document.getElementById('printDateAward').value;
        function convertToKhmerNumeral(number) {
          if (number < 0) {
            return "-" + convertToKhmerNumeral(Math.abs(number)); // Handle negative numbers
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
        if (d) {
          let date = new Date(d);
          let year = date.getFullYear();
          let day = date.getDate();
          let month = date.getMonth();

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
          let get_day_kh = convertToKhmerNumeral(day);
          get_day_kh = get_day_kh.toString().padStart(2, '0')
          let get_year_kh = convertYear(year);
          localStorage.setItem('get_day_kh_admin_award', get_day_kh);
          localStorage.setItem('month_admin_award', month);
          localStorage.setItem('get_year_kh_admin_award', get_year_kh);

        }
      })

    }, 1000);

  }, [])


  useEffect(() => {
    onValue(dbYear, (data) => {
      const dataSet = data.val();
      setdbeGetYear(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    onValue(dbPrimary, (data) => {
      const level = data.val();
      setsleGrade(level ? Object.values(level) : []);
    })

    onValue(getStd, (data) => {
      const dataSet = data.val();
      setUsers(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
  }, []);
  useEffect(() => {
    let elementCounts = {};
    for (let num of numberArray) {
      if (num in elementCounts) {
        elementCounts[num] += 1; // Increment count if element exists
      } else {
        elementCounts[num] = 1; // Initialize count to 1 for new element
      }
    }
    setnumberRank1(elementCounts[1])
    setnumberRank2(elementCounts[2])
  })

  // useEffect(() => {
  //   let elementCounts = {};
  //   for (let num of numberArray) {
  //     if (num in elementCounts) {
  //       elementCounts[num] += 1; // Increment count if element exists
  //     } else {
  //       elementCounts[num] = 1; // Initialize count to 1 for new element
  //     }
  //   }
  //   setnumberRank2(elementCounts[2])
  // })

  useEffect(() => {
    let elementCounts = {};
    for (let num of numberArray) {
      if (num in elementCounts) {
        elementCounts[num] += 1; // Increment count if element exists
      } else {
        elementCounts[num] = 1; // Initialize count to 1 for new element
      }
    }
    setnumberRank3(elementCounts[3])
  })

  useEffect(() => {
    let elementCounts = {};
    for (let num of numberArray) {
      if (num in elementCounts) {
        elementCounts[num] += 1; // Increment count if element exists
      } else {
        elementCounts[num] = 1; // Initialize count to 1 for new element
      }
    }
    setnumberRank4(elementCounts[4])
  })

  useEffect(() => {
    let elementCounts = {};
    for (let num of numberArray) {
      if (num in elementCounts) {
        elementCounts[num] += 1; // Increment count if element exists
      } else {
        elementCounts[num] = 1; // Initialize count to 1 for new element
      }
    }
    setnumberRank5(elementCounts[5])
  })

  useEffect(() => {
    onValue(getDropStd, (data) => {
      const dataSet = data.val();
      setdropStd(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })

  }, [])
  useEffect(() => {
    localStorage.setItem('school_level_st', mydbLevel);
    setmydbLevel(localStorage.getItem('school_level_st') || 'default')
  }, [mydbLevel]);
  useEffect(() => {
    localStorage.setItem('school_grade_st', dbGade);
    setdbGrade(localStorage.getItem('school_grade_st') || 'default')
  }, [dbGade]);
  useEffect(() => {
    localStorage.setItem('school_year_st', mydbYear);
    setmydbYear(localStorage.getItem('school_year_st') || 'default')
  }, [mydbYear]);

  useEffect(() => {
    localStorage.setItem('upgradeYear', upgradeYear);
    setupgradeYear(localStorage.getItem('upgradeYear') || 'default')
  }, [upgradeYear]);
  useEffect(() => {
    localStorage.setItem('upgradeGrade', upgradeGrade);
    setupgradeGrade(localStorage.getItem('upgradeGrade') || 'default')
  }, [upgradeGrade]);
  useEffect(() => {
    localStorage.setItem('dropYear', dropYear);
    setdropYear(localStorage.getItem('dropYear') || 'default')
  }, [dropYear]);
  useEffect(() => {
    localStorage.setItem('dropGrade', dropGrade);
    setdropGrade(localStorage.getItem('dropGrade') || 'default')
  }, [dropGrade]);
  useEffect(() => {
    localStorage.setItem('restoreYear', restoreYear);
    setrestoreYear(localStorage.getItem('restoreYear') || 'default')
  }, [restoreYear]);
  useEffect(() => {
    localStorage.setItem('restoreGrade', restoreGrade);
    setrestoreGrade(localStorage.getItem('restoreGrade') || 'default')
  }, [restoreGrade]);
  useEffect(() => {
    localStorage.setItem('goodGood', goodGood);
    setgoodGood(localStorage.getItem('goodGood') || 'default')
  }, [goodGood]);
  useEffect(() => {
    localStorage.setItem('awarPrintDate', awarPrintDate);
    setawarPrintDate(localStorage.getItem('awarPrintDate') || 'default')
  }, [awarPrintDate]);
  //Set value for year
  const SelectYear = () => {
    const handleYear = (event) => {
      const year = event.target.value;
      setmydbYear(year);
      // localStorage.setItem('school_year', year);
    }
    return (
      <div>
        {/* <Form.Label for="user_teacher_id"
                    className="fw-bold">ជ្រើសរើសឆ្នាំសិក្សា</Form.Label> */}
        <select
          className="text-center"
          value={mydbYear}
          onChange={handleYear}
          style={{
            color: '#23074d',
            lineHeight: '1',
            borderRight: "0",
            borderLeft: "0",
            borderTop: "0",
            borderBottom: "2px solid #005AA7",
            fontWeight: "bold",
            background: "transparent",
          }}
          id="sle_year">
          <option>ឆ្នាំសិក្សា</option>
          {dbeGetYear.map((option) => (
            <option key={option.yearEn} value={option.yearEn}>
              {option.yearKh}
            </option>
          ))}
        </select>
      </div>

    );
  };

  const LevelSelect = () => {
    //Create school level
    const schoolLvl = [
      { value: '', label: 'កម្រិតថ្នាក់' },
      { value: 'បឋមសិក្សា', label: 'បឋមសិក្សា' },
      { value: 'វិទ្យាល័យ', label: 'វិទ្យាល័យ' },
      { value: 'អនុវិទ្យាល័យ', label: 'អនុវិទ្យាល័យ' },
    ];
    const handleSubjectChange = (event) => {
      const subject = event.target.value;
      setmydbLevel(subject);
      const db = getDatabase();
      const dbPrimary = ref(db, `/SalaMOM/tools/class/${subject}`);

      onValue(dbPrimary, (data) => {
        const level = data.val();
        setsleGrade(level ? Object.values(level) : []);
      })


    };


    return (
      <div>
        {/* <Form.Label for="user_teacher_id" className="fw-bold">ជ្រើសរើសកម្រិត</Form.Label> */}
        <select className="text-center"
          value={mydbLevel}
          onChange={handleSubjectChange}
          style={{
            color: "#23074d",
            lineHeight: "1",
            borderRight: "0",
            borderLeft: "0",
            borderTop: "0",
            borderBottom: "2px solid #005AA7",
            fontWeight: "bold",
            background: "transparent",

          }}
          id="sle_level">
          {schoolLvl.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  //Set Grades
  const SelectGrade = () => {
    //Set value for grade to show the table
    const selectGade = (event) => {
      const grade = event.target.value;
      setdbGrade(grade);
      localStorage.setItem('school_grade_st', grade);
      const db = getDatabase();
      const starCountRef = ref(db, `/SalaMOM/classes/${mydbYear}/${grade.replace(/^0+/, '')}`);
      window.location.reload()
      onValue(starCountRef, (data) => {
        const dataSet = data.val();
        setUsers(dataSet ? Object.values(dataSet) : []); // Convert object to array
      })

    }
    return (
      <div>
        {/* <Form.Label for="user_teacher_id" className="fw-bold">ជ្រើសរើសថ្នាក់</Form.Label> */}
        <select className="text-center"
          value={dbGade}
          onChange={selectGade}
          style={{
            color: "#23074d",
            lineHeight: "1",
            borderRight: "0",
            borderLeft: "0",
            borderTop: "0",
            borderBottom: "2px solid #005AA7",
            fontWeight: "bold",
            background: "transparent",
            width: "6rem"
          }}
          id="sle_grade">
          <option>ថ្នាក់ទី</option>
          {sleGrade.map((option) => (
            <option key={option.clEn} value={option.clEn}>
              {option.clKh}
            </option>
          ))}
        </select>
      </div>
    )
  }

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

    ///Old Khmer Date
    const ddd = new Date(awarPrintDate)
    const month = ddd.getMonth()
    const year = ddd.getFullYear()

    let setmonth = moment(month, 'm');
    let setyear = moment(year, 'yyy');
    let setNumber = moment(year, 'm');
    setyearAnimals(setmonth.toLunarDate('a'))
    setyearKH(setyear.toLunarDate('b'))
    setyearNumber(setNumber.toLunarDate('e'))


    const checkall = document.getElementById('forCheckAll')
    // const btn = document.getElementById('getData')
    const allChecks = document.querySelectorAll('input[id^="stdcheck"]');
    // let arrayStd = [];
    // btn.addEventListener('click', () => {
    //   console.log(arrayStd);

    //   allChecks.forEach(e => {
    //     const id = e.dataset.id
    //     const fullname = e.dataset.fullname
    //     const name_latin = e.dataset.enname
    //     const gender = e.dataset.gender
    //     const user_picture_url = e.dataset.pic
    //     const user_identity_url = e.dataset.pic_id
    //     const index = arrayStd.findIndex(user => user.fullname === fullname);
    //     arrayStd.forEach(data => {
    //       const id = data.id
    //       console.log(id);
    //       if (e.checked) {
    //         if (fullname.includes(id)) {
    //         } else {
    //           arrayStd.push({
    //             id: id,
    //             fullname: fullname,
    //             name_latin: name_latin,
    //             gender: gender,
    //             user_picture_url: user_picture_url,
    //             user_identity_url: user_identity_url
    //           })
    //         }
    //       } else {
    //         if (index > -1) {
    //           arrayStd.splice(index, 1);
    //         }
    //       }
    //     })
    //     // if (e.checked) {

    //     //   const id = e.dataset.id
    //     //   const fullname = e.dataset.fullname
    //     //   const name_latin = e.dataset.enname
    //     //   const gender = e.dataset.gender
    //     //   const user_picture_url = e.dataset.pic
    //     //   const user_identity_url = e.dataset.pic_id

    //     //   // console.log(id, fullname, name_latin);
    //     //   arrayStd.push({
    //     //     id: id,
    //     //     fullname: fullname,
    //     //     name_latin: name_latin,
    //     //     gender: gender,
    //     //     user_picture_url: user_picture_url,
    //     //     user_identity_url:user_identity_url
    //     //   })
    //     // }
    //   })


    // })
    // checkall.addEventListener('click', () => {
    //   allChecks.forEach(e => {
    //     e.checked = true
    //   })
    // })
    // for (const checkbox of allChecks) {
    //   const id = checkbox.dataset.id
    //   const fullname = checkbox.dataset.fullname
    //   const name_latin = checkbox.dataset.name_latin
    //   const gender = checkbox.dataset.gender
    //   const user_picture_url = checkbox.dataset.user_picture_url
    //   const user_identity_url = checkbox.dataset.user_identity_url
    //   if (checkbox.checked) {
    //     // arrayStd.push(grade.value);
    //   }
    // }

  }, 200);

  const [user_id, setuser_id] = useState('');
  const [fullname, setfullname] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [name_latin, setname_latin] = useState('');
  const [gender, setgender] = useState('');
  const [enGender, setenGender] = useState('');
  const [user_grade, setuser_grade] = useState('');
  const [date_of_birth, setdate_of_birth] = useState('');
  const [user_age, setuser_age] = useState('');
  const [village, setvillage] = useState('');
  const [district, setdistrict] = useState('');
  const [commune, setcommune] = useState('');
  const [province, setprovince] = useState('');
  const [place_of_birth, setplace_of_birth] = useState('');
  const [current_village, setcurrent_village] = useState('');
  const [current_district, setcurrent_district] = useState('');
  const [current_commune, setcurrent_commune] = useState('');
  const [current_province, setcurrent_province] = useState('');
  const [current_address, setcurrent_address] = useState('');
  const [father_name, setfather_name] = useState('');
  const [father_occupation, setfather_occupation] = useState('');
  const [mother_name, setmother_name] = useState('');
  const [mother_occupation, setmother_occupation] = useState('');
  const [parents_phone_number, setparents_phone_number] = useState('');
  const [user_facebook, setuser_facebook] = useState('');
  const [user_guardian, setuser_guardian] = useState('');
  const [guardian_occupation, setguardian_occupation] = useState('');
  const [guardian_phone_number, setguardian_phone_number] = useState('');
  const [other_information, setother_information] = useState('');
  const [user_relationship, setuser_relationship] = useState('');
  const [user_picture_url, setuser_picture_url] = useState('');
  const [user_identity_url, setuser_identity_url] = useState('');
  const [getGradeLetter, setgetGradeLetter] = useState('');
  const [id, setid] = useState('');
  // useEffect(() => {
  //   if (dbGade) {
  //     let grade = dbGade.replace(/^0+/, '')
  //     let newId = grade + result
  //     setid(newId)
  //     console.log(newId);
  //   }
  // }, [result])

  const SetLevel = () => {
    if (user_grade.slice(2) === 'A') {
      return (
        <>
          <select className="form-control text-center"
            style={{ lineHeight: "2", color: 'black', fontSize: '14px' }}
            required="required"
            value={en_level}
            onChange={e => { seten_level(e.target.value) }}
            name="student[gender]" id="fill31">
            <option value="">
              កម្រិតភាសាអង់គ្លេស
            </option>
            <option value="level1A">
              Level 1A
            </option>
            <option value="level2A">
              Level 2A
            </option>
            <option value="level3A">
              Level 3A
            </option>
            <option value="level4A">
              Level 4A
            </option>
            <option value="level5A">
              Level 5A
            </option>
            <option value="level6A">
              Level 6A
            </option>
          </select>

        </>
      )
    }
    if (user_grade.slice(2) === 'B') {
      return (
        <>
          <select className="form-control text-center"
            style={{ lineHeight: "2", color: 'black', fontSize: '14px' }}
            required="required"
            value={en_level}
            onChange={e => { seten_level(e.target.value) }}
            name="student[gender]" id="fill31">
            <option value="">
              កម្រិតភាសាអង់គ្លេស
            </option>
            <option value="level1B">
              Level 1B
            </option>
            <option value="level2B">
              Level 2B
            </option>
            <option value="level3B">
              Level 3B
            </option>
            <option value="level4B">
              Level 4B
            </option>
            <option value="level5B">
              Level 5B
            </option>
            <option value="level6B">
              Level 6B
            </option>
          </select>

        </>
      )
    }
  }
  //Click button and laod data inside input
  const handleClick = (event) => {
    btnAdd.current.style.display = 'none';
    btnUp.current.style.display = 'block';
    btnDe.current.style.display = 'block';

    const data = event.currentTarget; // Get the clicked button element
    // const user_id = data.dataset.user_id;
    const fullname = data.dataset.fullname;
    // const first_name = data.dataset.first_name;
    // const last_name = data.dataset.last_name;
    const name_latin = data.dataset.name_latin;
    var gender = data.dataset.gender;
    // const date_of_birth = data.dataset.date_of_birth;
    const user_grade = data.dataset.user_grade;
    const en_level = data.dataset.en_level;
    // const user_age = data.dataset.user_age;
    // const village = data.dataset.village;
    // const district = data.dataset.district;
    // const commune = data.dataset.commune;
    // const province = data.dataset.province;
    // const place_of_birth = data.dataset.place_of_birth;
    // const current_village = data.dataset.current_village;
    // const current_district = data.dataset.current_district;
    // const current_commune = data.dataset.current_commune;
    // const current_province = data.dataset.current_province;
    // const current_address = data.dataset.current_address;
    // const father_name = data.dataset.father_name;
    // const father_occupation = data.dataset.father_occupation;
    // const mother_name = data.dataset.mother_name;
    // const mother_occupation = data.dataset.mother_occupation;
    // const parents_phone_number = data.dataset.parents_phone_number;
    // const user_facebook = data.dataset.user_facebook;
    // const user_guardian = data.dataset.user_guardian;
    // const guardian_occupation = data.dataset.guardian_occupation;
    // const guardian_phone_number = data.dataset.guardian_phone_number;
    // const other_information = data.dataset.other_information;
    // const user_relationship = data.dataset.user_relationship;
    const user_picture_url = data.dataset.user_picture_url;
    const user_identity_url = data.dataset.user_identity_url;
    const id = data.dataset.id;
    if (gender === 'ប') {
      setenGender('M')
    }
    if (gender === 'ស') {
      setenGender('F')
    }
    setuser_id(user_id);
    setfullname(fullname);
    // setfirst_name(first_name);
    // setlast_name(last_name);
    setname_latin(name_latin);
    setgender(gender);
    seten_level(en_level);
    setuser_grade(dbGade);
    // setdate_of_birth(date_of_birth);
    // setuser_grade(user_grade);
    // setuser_age(user_age);
    // setvillage(village);
    // setdistrict(district);
    // setcommune(commune);
    // setprovince(province);
    // setplace_of_birth(place_of_birth);
    // setcurrent_village(current_village);
    // setcurrent_district(current_district);
    // setcurrent_commune(current_commune);
    // setcurrent_province(current_province);
    // setcurrent_address(current_address);
    // setfather_name(father_name);
    // setfather_occupation(father_occupation);
    // setmother_name(mother_name);
    // setmother_occupation(mother_occupation);
    // setparents_phone_number(parents_phone_number);
    // setuser_facebook(user_facebook);
    // setuser_guardian(user_guardian);
    // setguardian_occupation(guardian_occupation);
    // setguardian_phone_number(guardian_phone_number);
    // setother_information(other_information);
    // setuser_relationship(user_relationship);
    if (!user_picture_url) {
      setuser_picture_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    } else {
      setuser_picture_url(user_picture_url);
    }
    if (!user_identity_url) {
      setuser_identity_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    } else {
      setuser_identity_url(user_identity_url);
    }
    setid(id);
  };
  const AddNew = () => {
    btnAdd.current.style.display = 'block';
    btnUp.current.style.display = 'none';
    btnDe.current.style.display = 'none';
    // setuser_id('');
    setfullname('');
    // setfirst_name('');
    // setlast_name('');
    setname_latin('');
    seten_level('');
    setgender('');
    setuser_grade(dbGade);
    // setdate_of_birth('');
    // setuser_age('');
    // setvillage('');
    // setdistrict('');
    // setcommune('');
    // setprovince('');
    // setplace_of_birth('');
    // setcurrent_village('');
    // setcurrent_district('');
    // setcurrent_commune('');
    // setcurrent_province('');
    // setcurrent_address('');
    // setfather_name('');
    // setfather_occupation('');
    // setmother_name('');
    // setmother_occupation('');
    // setparents_phone_number('');
    // setuser_facebook('');
    // setuser_guardian('');
    // setguardian_occupation('');
    // setguardian_phone_number('');
    // setother_information('');
    // setuser_relationship('');
    setuser_picture_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setuser_identity_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    // setid('');
    if (dbGade) {
      let grade = dbGade.replace(/^0+/, '')
      let newId = grade + result
      setid(newId)

    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    set(ref(db, `/SalaMOM/classes/${mydbYear}/${dbGade.replace(/^0+/, '')}/` + id), {
      id: id,
      // user_id: user_id,
      fullname: fullname,
      // first_name: first_name,
      // last_name: last_name,
      name_latin: name_latin,
      en_level: en_level,
      en_gender: enGender,
      gender: gender,
      user_grade: user_grade,
      // date_of_birth: date_of_birth,
      // user_age: user_age,
      // village: village,
      // district: district,
      // commune: commune,
      // province: province,
      // place_of_birth: place_of_birth,
      // current_village: current_village,
      // current_district: current_district,
      // current_commune: current_commune,
      // current_province: current_province,
      // current_address: current_address,
      // father_name: father_name,
      // father_occupation: father_occupation,
      // mother_name: mother_name,
      // mother_occupation: mother_occupation,
      // parents_phone_number: parents_phone_number,
      // user_facebook: user_facebook,
      // user_guardian: user_guardian,
      // guardian_occupation: guardian_occupation,
      // guardian_phone_number: guardian_phone_number,
      // other_information: other_information,
      // user_relationship: user_relationship,
      user_picture_url: user_picture_url,
      user_identity_url: user_identity_url,
    });
    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    setfullname('');
    setname_latin('');
    seten_level('');
    setgender('');
    setuser_grade(dbGade.replace(/^0+/, ''));
    setuser_picture_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setuser_identity_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setid('');

  };

  const UpdateInformation = (e) => {
    e.preventDefault();
    const db = getDatabase();
    update(ref(db, `/SalaMOM/classes/${mydbYear}/${dbGade.replace(/^0+/, '')}/` + id), {
      id: id,
      // user_id: user_id,
      fullname: fullname,
      // first_name: first_name,
      // last_name: last_name,
      name_latin: name_latin,
      en_level: en_level,
      gender: gender,
      user_grade: user_grade,
      // date_of_birth: date_of_birth,
      // user_age: user_age,
      // village: village,
      // district: district,
      // commune: commune,
      // province: province,
      // place_of_birth: place_of_birth,
      // current_village: current_village,
      // current_district: current_district,
      // current_commune: current_commune,
      // current_province: current_province,
      // current_address: current_address,
      // father_name: father_name,
      // father_occupation: father_occupation,
      // mother_name: mother_name,
      // mother_occupation: mother_occupation,
      // parents_phone_number: parents_phone_number,
      // user_facebook: user_facebook,
      // user_guardian: user_guardian,
      // guardian_occupation: guardian_occupation,
      // guardian_phone_number: guardian_phone_number,
      // other_information: other_information,
      // user_relationship: user_relationship,
      user_picture_url: user_picture_url,
      user_identity_url: user_identity_url,
    });
    Swal.fire({
      text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    setfullname('');
    // setname_latin('');
    setgender('');
    setuser_grade(dbGade.replace(/^0+/, ''));
    setuser_picture_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setuser_identity_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setid('');

  };
  const RemoveInformation = (e) => {
    e.preventDefault();
    const db = getDatabase();
    Swal.fire({
      title: "តើអ្នកប្រាកដឬ?",
      showCancelButton: true,
      confirmButtonText: "លុប",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        update(ref(db, `/SalaMOM/classes/dropstd/${mydbYear}/${dbGade.replace(/^0+/, '')}/` + id), {
          id: id,
          fullname: fullname,
          name_latin: name_latin,
          en_level: en_level,
          gender: gender,
          user_grade: user_grade,
          user_picture_url: user_picture_url,
          user_identity_url: user_identity_url
        });
        setTimeout(() => {
          remove(ref(db, `/SalaMOM/classes/${mydbYear}/${dbGade.replace(/^0+/, '')}/` + id));
          setfullname('');
          setname_latin('');
          seten_level('');
          setgender('');
          setuser_grade(dbGade.replace(/^0+/, ''));
          setuser_picture_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
          setuser_identity_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
          setid('');

        }, 1000);
      }
    });

  };

  //Set User image
  const otherButtonRef = useRef(null);
  const otherButtonRef2 = useRef(null);

  const ImageUpload = () => {
    const targetFolder = `Student_pictures/${mydbYear}/${dbGade}`;

    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [imageSelected, setImageSelected] = useState("");
    const [imagUrl, setimagUrl] = useState("");
    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
      //Rendom digtal number with letter
      const randomDigits = Math.floor(Math.random() * 9000) + 1000; // 1000 to 9999

      // Generate a random letter (uppercase A-Z) using String.fromCharCode() and Math.floor()
      const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

      // Combine digits and letter
      const combinedNumber = randomDigits.toString() + randomLetter;

      setRandomNumber(combinedNumber);

    }, [])

    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("folder", targetFolder);
      formData.append("upload_preset", "mom_img");
      formData.append("public_id", `${fullname}_pic__${randomNumber}`);

      axios.post("https://api.cloudinary.com/v1_1/salamomschool/image/upload", formData)
        .then((response) => {
          setuser_picture_url(response.data.secure_url);
          setimagUrl(response.data.secure_url);
        });
    }
    const handleFileChange = (event) => {
      const data = event.target.files[0];
      setImageSelected(data);
    };
    const handleClick = () => {
      if (otherButtonRef.current) {
        otherButtonRef.current.click(); // Simulates a click on the other button
      }
    };
    return (
      <div>
        <div className="image__wrap">
          <table
            className="table-borderless table text-center">
            <tr>
              <td>
                <input type="file"
                  onChange={handleFileChange}
                  id="myFile"
                  ref={otherButtonRef}
                  accept="image/*"
                  style={{ display: "none" }}></input>
                <button id="uploadButton"
                  onClick={handleClick}
                  style={{ backgroundColor: "transparent", border: "none", color: "aliceblue" }}>
                  <div className="img-preview"
                    style={{ padding: "15rem" }}>
                    <img className="image-full-height"
                      src={user_picture_url}
                      id="uploadedImage">
                    </img>

                  </div>
                  <div className="image__edit">
                    <span>ជ្រើសរើសរូបថត</span>
                  </div>

                </button>
              </td>
            </tr>

            <tr>
              <td style={{ display: "block" }}>
                <input
                  value={user_picture_url}
                  onChange={(e) => setuser_picture_url(e.target.value)}
                  type="text" id="showURL" />
              </td>
            </tr>
          </table>

        </div>
      </div>
    );
  }
  //Set user identity paper
  const ImageUpload2 = () => {
    const targetFolder = `Student_pictures/${mydbYear}/${dbGade}`;

    const [imageSelected, setImageSelected] = useState("");
    const [imagUrl, setimagUrl] = useState("");
    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
      //Rendom digtal number with letter
      const randomDigits = Math.floor(Math.random() * 9000) + 1000; // 1000 to 9999

      // Generate a random letter (uppercase A-Z) using String.fromCharCode() and Math.floor()
      const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

      // Combine digits and letter
      const combinedNumber = randomDigits.toString() + randomLetter;

      setRandomNumber(combinedNumber);

    }, [])

    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("folder", targetFolder);
      formData.append("upload_preset", "mom_img");
      formData.append("public_id", `${fullname}_iden__${randomNumber}`);

      axios.post("https://api.cloudinary.com/v1_1/salamomschool/image/upload", formData)
        .then((response) => {
          setuser_identity_url(response.data.secure_url);
          setimagUrl(response.data.secure_url);
        });
    }
    const handleFileChange2 = (event) => {
      const data = event.target.files[0];
      setImageSelected(data);
    };
    const handleClick2 = () => {
      if (otherButtonRef2.current) {
        otherButtonRef2.current.click(); // Simulates a click on the other button
      }
    };
    return (
      <div>
        <div className="image__wrap">
          <table
            className="table-borderless table text-center">
            <tr>
              <td>
                <input type="file"
                  onChange={handleFileChange2}
                  id="myFile"
                  ref={otherButtonRef2}
                  accept="image/*"
                  style={{ display: "none" }}></input>
                <button id="uploadButton"
                  onClick={handleClick2}
                  style={{ backgroundColor: "transparent", border: "none", color: "aliceblue" }}>
                  <div className="img-preview"
                    style={{ padding: "15rem" }}>
                    <img className="image-full-height"
                      src={user_identity_url}
                      id="uploadedImage">
                    </img>

                  </div>
                  <div className="image__edit">
                    <span>ជ្រើសរើសរូបសំបុត្រកំណើត</span>
                  </div>

                </button>
              </td>
            </tr>

            <tr>
              <td style={{ display: "block" }}>
                <input
                  value={user_identity_url}
                  onChange={(e) => setuser_identity_url(e.target.value)}
                  type="text" id="showURL" />
              </td>
            </tr>
          </table>

        </div>
      </div>
    );
  }

  //Import Data
  const [myData, setmyData] = useState([]);
  function ExcelImport() {
    const [file, setFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState(null);
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
      // handleUpload();
      setUploadMessage(null); // Clear previous message
    };
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const workbook = XLSX.read(event.target.result, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);

        try {
          // Upload processed data to Firebase Realtime Database
          uploadDataToDatabase(data);
          // console.log(data);
          setmyData(data);
          setUploadMessage('Data imported successfully!');
        } catch (error) {
          console.error('Error importing data:', error);
          setUploadMessage('An error occurred during upload. Please try again.');
        }
      };
      reader.readAsArrayBuffer(file);
    }

    const uploadDataToDatabase = async (data) => {
      // Implement logic to write data to Firebase database
      // You can write data as individual objects or a single array
      data.forEach((item) => {
        const id = item.id;
        // console.log(id);
        // Example: Write each item as a separate object under a specific path
        // const dataRef = database.ref('your-database-path').push();
        // dataRef.set(item);
      });
    };

    return (
      <div>
        <input className="form-control" type="file" accept=".xlsx" onChange={handleFileChange} />
      </div>
    );
  }
  const importData = () => {
    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    if (myData) {
      myData.forEach(d => {
        var id = d.id;
        // var user_id = d.user_id;
        var fullname = d.fullname;
        // var first_name = d.first_name;
        // var last_name = d.last_name;
        var name_latin = d.name_latin;
        var gender = d.gender;
        var user_grade = dbGade;
        var en_level = d.en_level;
        var new_gender = ''
        if (gender === 'ប') {
          new_gender = 'M'
        }
        if (gender === 'ស') {
          new_gender = 'F'
        }
        if (!en_level) {
          en_level = ''
        }
        if (!name_latin) {
          name_latin = ''
        }
        // const date_of_birth = d.date_of_birth;
        // const user_age = d.user_age;
        // const village = d.village;
        // const district = d.district;
        // const commune = d.commune;
        // const province = d.province;
        // const place_of_birth = d.place_of_birth;
        // const current_village = d.current_village;
        // const current_district = d.current_district;
        // const current_commune = d.current_commune;
        // const current_province = d.current_province;
        // const current_address = d.current_address;
        // const father_name = d.father_name;
        // const father_occupation = d.father_occupation;
        // const mother_name = d.mother_name;
        // const mother_occupation = d.mother_occupation;
        // const parents_phone_number = d.parents_phone_number;
        // const user_facebook = d.user_facebook;
        // const user_guardian = d.user_guardian;
        // const guardian_occupation = d.guardian_occupation;
        // const guardian_phone_number = d.guardian_phone_number;
        // const other_information = d.other_information;
        // const user_relationship = d.user_relationship;
        // const name_latin = d.name_latin;
        // console.log(id);
        // setuser_id(d.user_id);
        // setfullname(d.fullname);
        // setfirst_name(d.first_name);
        // setlast_name(d.last_name);
        // setname_latin(d.name_latin);
        // setgender(d.gender);
        // setuser_grade(d.user_grade);
        // setdate_of_birth(d.date_of_birth);
        // setuser_age(d.user_age);
        // setuser_grade(d.user_grade);
        // setvillage(d.village);
        // setdistrict(d.district);
        // setcommune(d.commune);
        // setprovince(d.province);
        // setplace_of_birth(d.place_of_birth);
        // setcurrent_village(d.current_village);
        // setcurrent_district(d.current_district);
        // setcurrent_commune(d.current_commune);
        // setcurrent_province(d.current_province);
        // setcurrent_address(d.current_address);
        // setfather_name(d.father_name);
        // setfather_occupation(d.father_occupation);
        // setmother_name(d.mother_name);
        // setmother_occupation(d.mother_occupation);
        // setparents_phone_number(d.parents_phone_number);
        // setuser_facebook(d.user_facebook);
        // setuser_guardian(d.user_guardian);
        // setguardian_occupation(d.guardian_occupation);
        // setguardian_phone_number(d.guardian_phone_number);
        // setother_information(d.other_information);
        // setuser_relationship(d.user_relationship);

        const db = getDatabase();
        setTimeout(() => {
          update(ref(db, `/SalaMOM/classes/${mydbYear}/${dbGade.replace(/^0+/, '')}/` + id), {
            id: id,
            // user_id: user_id,
            fullname: fullname,
            // first_name: first_name,
            // last_name: last_name,
            name_latin: name_latin,
            en_level: en_level,
            gender: gender,
            en_gender: new_gender,
            user_grade: dbGade,
            // date_of_birth: date_of_birth,
            // user_age: user_age,
            // village: village,
            // district: district,
            // commune: commune,
            // province: province,
            // place_of_birth: place_of_birth,
            // current_village: current_village,
            // current_district: current_district,
            // current_commune: current_commune,
            // current_province: current_province,
            // current_address: current_address,
            // father_name: father_name,
            // father_occupation: father_occupation,
            // mother_name: mother_name,
            // mother_occupation: mother_occupation,
            // parents_phone_number: parents_phone_number,
            // user_facebook: user_facebook,
            // user_guardian: user_guardian,
            // guardian_occupation: guardian_occupation,
            // guardian_phone_number: guardian_phone_number,
            // other_information: other_information,
            // user_relationship: user_relationship,
            // user_picture_url: user_picture_url,
            // user_identity_url: user_identity_url,
          });

        }, 500);
      })
    }
  }
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedUsers2, setSelectedUsers2] = useState([]);

  const handleCheckboxChange = (e, user) => {
    e.stopPropagation();
    const isChecked = e.target.checked;
    const id = e.target.dataset.id
    const fullname = e.target.dataset.fullname
    const name_latin = e.target.dataset.enname
    const en_level = e.target.dataset.en_level
    const gender = e.target.dataset.gender
    const en_gender = e.target.dataset.en_gender
    const user_picture_url = e.target.dataset.pic
    const user_identity_url = e.target.dataset.pic_id
    const arr = ({
      fullname: fullname,
      gender: gender,
      en_gender: en_gender,
      name_latin: name_latin,
      en_level: en_level,
      id: id,
      user_picture_url: user_picture_url,
      user_identity_url: user_identity_url,
    })

    setSelectedUsers(prevSelectedUsers =>
      isChecked
        ? [...prevSelectedUsers, user]
        : prevSelectedUsers.filter(selectedUser => selectedUser.id !== user.id)
    );
  };

  const handleSelectAllChange = (e) => {
    e.stopPropagation();
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);
    setSelectedUsers(isChecked ? users : []);
  };

  const handleCheckboxChange2 = (e, data) => {
    e.stopPropagation();
    const isChecked = e.target.checked;
    const id = e.target.dataset.id
    const fullname = e.target.dataset.fullname
    const name_latin = e.target.dataset.enname
    const en_level = e.target.dataset.en_level
    const gender = e.target.dataset.gender
    const user_picture_url = e.target.dataset.pic
    const user_identity_url = e.target.dataset.pic_id
    const arr = ({
      fullname: fullname,
      gender: gender,
      name_latin: name_latin,
      id: id,
      user_picture_url: user_picture_url,
      user_identity_url: user_identity_url,
    })

    setSelectedUsers2(prevSelectedUsers =>
      isChecked
        ? [...prevSelectedUsers, data]
        : prevSelectedUsers.filter(selectedUser => selectedUser.id !== data.id)
    );
  };



  function MyComponent() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAllChecked2, setSelectAllChecked2] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => {
      setShowModal(false);
    };
    const handleSelectAllChange2 = (e) => {
      e.stopPropagation();
      const isChecked = e.target.checked;
      setSelectAllChecked2(isChecked);
      setSelectedItems(isChecked ? dropStd : []);
    };

    // console.log("Selected items:", selectedItems); // Process data before closing
    const handleCheckboxChange = (itemId, e) => {
      e.stopPropagation(); // Prevent modal dismissal
      setSelectedItems(prevItems =>
        prevItems.includes(itemId)
          ? prevItems.filter(item => item !== itemId)
          : [...prevItems, itemId]
      );
    };
    const usersObject = selectedItems.reduce((acc, user) => {
      var new_en_gender = ''
      if (user.gender === 'ប') {
        new_en_gender = 'M'
      }
      if (user.gender === 'ស') {
        new_en_gender = 'F'
      }
      acc[user.id] = {
        id: user.id,
        fullname: user.fullname,
        gender: user.gender,
        en_gender: new_en_gender,
        en_level: user.en_level,
        name_latin: user.name_latin,
        user_picture_url: user.user_picture_url,
        user_identity_url: user.user_identity_url,
        user_grade: restoreGrade.replace(/^0+/, '')
      };
      return acc;
    }, {});

    const restoreData = () => {
      const db = getDatabase();
      if (selectedItems) {
        Swal.fire({
          title: "តើអ្នកប្រាកដឬ?",
          showCancelButton: true,
          confirmButtonText: "Restore",
        }).then((result) => {
          if (result.isConfirmed) {
            update(ref(db, `/SalaMOM/classes/${restoreYear}/${restoreGrade.replace(/^0+/, '')}/`), usersObject);
            setTimeout(() => {
              Swal.fire({
                text: "ព័ត៍មានបានវិលត្រលប់មកវិញត្រឹមត្រូវ!",
                icon: "success",
                showConfirmButton: false,
                timer: 2200,
              });
              remove(ref(db, `/SalaMOM/classes/dropstd/${mydbYear}/${dbGade.replace(/^0+/, '')}/`), usersObject);

            }, 500);
          }
        });

      }
    }
    const removeData = () => {
      const db = getDatabase();
      if (selectedItems) {
        Swal.fire({
          title: "តើអ្នកប្រាកដឬ?",
          showCancelButton: true,
          confirmButtonText: "លុប",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
              icon: "success",
              showConfirmButton: false,
              timer: 2200,
            });
            remove(ref(db, `/SalaMOM/classes/dropstd/${mydbYear}/${dbGade.replace(/^0+/, '')}/`), usersObject);
          }
        });
      }
    }
    return (
      <>
        <Button
          onClick={handleOpenModal}
          style={{
            color: "white"
          }}
          type="button"
          className="btn btn-danger btn-sm me-2"><CIcon icon={cilTrash} />
        </Button>

        <Modal show={showModal} onHide={handleCloseModal} size="xl">
          {/* <Modal.Header> */}
          <div className="modal-header text-center">
            {/* <p>បញ្ជូន៖</p> */}
            <select
              className="text-center"
              value={restoreYear}
              onChange={e => {
                localStorage.setItem('restoreYear', e.target.value)
                setrestoreYear(e.target.value)
              }}
              style={{
                color: '#23074d',
                lineHeight: '1',
                borderRight: "0",
                borderLeft: "0",
                borderTop: "0",
                borderBottom: "2px solid #005AA7",
                fontWeight: "bold",
                background: "transparent",

              }}
              id="sle_year">
              <option>ឆ្នាំសិក្សា</option>
              {dbeGetYear.map((option) => (
                <option key={option.yearEn} value={option.yearEn}>
                  {option.yearKh}
                </option>
              ))}
            </select>
            <select className="text-center"
              value={restoreGrade}
              onChange={e => {
                localStorage.setItem('restoreGrade', e.target.value)
                setrestoreGrade(e.target.value)
              }}
              style={{
                color: "#23074d",
                lineHeight: "1",
                borderRight: "0",
                borderLeft: "0",
                borderTop: "0",
                borderBottom: "2px solid #005AA7",
                fontWeight: "bold",
                background: "transparent",
                width: "6rem"
              }}
              id="sle_grade">
              <option>ថ្នាក់ទី</option>
              {sleGrade.map((option) => (
                <option key={option.clEn} value={option.clEn}>
                  {option.clKh}
                </option>
              ))}
            </select>
          </div>
          {/* </Modal.Header> */}
          <Modal.Body>
            <div style={{ overflow: 'auto' }}>
              <table className="table table-bordered border-dark"

              >
                <thead className="table-bordered border-dark">
                  <tr className="table-bordered border-dark">
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">ល.រ</th>
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">ID</th>
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">គោត្តនាមនិងនាម</th>
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">អក្សរឡាតាំង</th>
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">ភេទ(KH)</th>
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">ភេទ(EN)</th>
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">ថ្នាក់</th>
                    <th
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark">កម្រិតអង់គ្លេស</th>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center table-bordered border-dark"><input type="checkbox" checked={selectAllChecked2} onChange={handleSelectAllChange2}></input></td>

                  </tr>
                </thead>
                <tbody>

                  {dropStd.map((data, index) => {
                    if (data) {
                      return (
                        <>
                          <tr className="text-center table-bordered border-dark">
                            <td className="text-center table-bordered border-dark">{index + 1}</td>
                            <td className="text-center table-bordered border-dark">{data.id}</td>
                            <td className="text-center table-bordered border-dark">{data.fullname}</td>
                            <td className="text-center table-bordered border-dark">{data.name_latin}</td>
                            <td className="text-center table-bordered border-dark">{data.gender}</td>
                            <td className="text-center table-bordered border-dark">{data.en_gender}</td>
                            <td className="text-center table-bordered border-dark">{data.user_grade}</td>
                            <td className="text-center table-bordered border-dark">{data.en_level}</td>
                            <td className="text-center table-bordered border-dark"><input
                              data-fullname={data.fullname}
                              data-enname={data.name_latin}
                              data-gender={data.gender}
                              data-en_level={data.en_level}
                              data-en_gender={data.en_gender}
                              data-pic={data.data_picture_url}
                              data-pic_id={data.data_identity_url}
                              data-id={data.id}
                              checked={selectedItems.includes(data)}
                              onChange={(e) => handleCheckboxChange(data, e)}
                              type="checkbox" id="stdcheck2" /></td>

                          </tr>
                        </>
                      )
                    }
                  })}
                </tbody>
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer className="text-center">

            <button id="btnUpgrade"
              onClick={restoreData}
              style={{ color: 'white' }}
              className="btn btn-success btn-rounded btn-fw btn-sm">Restore</button>

            <button
              style={{ color: 'white' }}
              onClick={removeData}
              className="btn btn-danger btn-rounded btn-fw btn-sm">
              Delete
            </button>
            {/* You might have other actions here */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  const GoodStd = () => {
    const [show, setShow] = useState(false);
    const [khMonth, setkhMonth] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // if (goodGood === 'oct') {
    //   setkhMonth('តុលា')
    // }
    // if (goodGood === 'nov') {
    //   setkhMonth('វិច្ឆិកា')
    // }
    // if (goodGood === 'dec') {
    //   setkhMonth('ធ្នូ')
    // }
    // if (goodGood === 'jan') {
    //   setkhMonth('មករា')
    // }
    // if (goodGood === 'feb') {
    //   setkhMonth('កុម្ភៈ')
    // }
    // if (goodGood === 'mar') {
    //   setkhMonth('មិនា')
    // }
    // if (goodGood === 'apr') {
    //   setkhMonth('មេសា-ឧសភា')
    // }
    // if (goodGood === 'jun') {
    //   setkhMonth('មិថុនា')
    // }
    // if (goodGood === 'jul') {
    //   setkhMonth('កក្កដា')
    // }
    // if (goodGood === 'firstseme') {
    //   setkhMonth('ឆមាសទី១')
    // }
    // if (goodGood === 'firstsemeresult') {
    //   setkhMonth('ប្រចាំឆមាសទី១')
    // }
    // if (goodGood === 'secnodseme') {
    //   setkhMonth('ឆមាសទី២')
    // }
    // if (goodGood === 'secnodsemeresult') {
    //   setkhMonth('ប្រចាំឆមាសទី២')
    // }
    // if (goodGood === 'finalyear') {
    //   setkhMonth('ប្រចាំឆ្នាំ')
    // }
    return (
      <>
        <button
          data-bs-toggle="modal" data-bs-target="#good_students"
          id="getData"
          style={{
            color: "white"
          }}
          type="button"
          className="btn btn-primary btn-sm me-2"><CIcon icon={cilPeople} /> តារាងកិត្តិយស</button>

      </>
    )
  }
  function PrintAward() {
    const printContent = document.getElementById('myPrintAward');
    const newWindow = window.open();
    newWindow.document.write(`
        <html>
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>កាលវិភាគរួម</title>

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
            }
            body {
                transform: scale(0.95); /* Adjust scaling as needed */
            }
                * {
    -webkit-print-color-adjust: exact; /* WebKit browsers (Chrome, Safari) */
  }
        }

        @font-face {
            font-family: "KhOSSiemreap";
            src: url("https://res.cloudinary.com/salamomschool/raw/upload/v1710682946/fonts/01a09003da4063952afa7734f4f393af.ttf");
            font-weight: normal
        }
        @font-face {
            font-family: "AKbalthom";
            src: url("./src/assets/AKBALTHOMKHMERHAND.ttf");
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

        }

        th,
        td,
        tr {
            border: 0px solid black;
            color: black;
            text-align: center;
            padding: 8px;
        }

        #show_data_print td:nth-child(2) {
            text-align: left;
            width: 10vh;

        }
        .head_table{
            font-size: 1.2vw;
            line-height: 1;
            width: 100%;
            height: auto;

        }
        .text_table{
            font-size: 1.2vw;
            line-height: 1;

        }
        .line_limit{
            width: 23vh;
        }
        .line_limit2{
            width: 20vh;
        }
        .title{
            font-family:kh moul;
            color: darkblue;
            vertical-align:middle;
            text-align: center;
          }
.gridRow {
  display: grid;
  grid-template-columns: minmax(1, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
  line-height: 0;


}
.gridRow-t2 {
  display: grid;
  grid-template-columns: minmax(1, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
  line-height: 0;


}
.gridRow1 {
  display: grid;
  grid-template-columns: minmax(1, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
  line-height: 0;
}
.gridRow1-tt2 {
  display: grid;
  grid-template-columns: minmax(1, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
line-height: 0;
}
.gridRow1-t2 {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
  line-height: 0;
}
.gridRow3 {
  display: grid;
  grid-template-columns: minmax(1, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
line-height: 0;
}
.gridRow3-t2 {
  display: grid;
  grid-template-columns: 50vw 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
line-height: 0;
}
.gridRow4 {
  display: grid;
  grid-template-columns: minmax(1, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
line-height: 0;
}
.name1-2{
  margin-left: 20vw;
  margin-right: 20vw;
}

.gridRow2 {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  margin-top: 0;
line-height: 0;
}
.gridRow1-2 {
  display: grid;
  grid-template-columns: 50vw 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
line-height: 0;

}
.gridRow2-2 {
  display: grid;
  grid-template-columns: 50vw 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  line-height: 0;
}
.gridRow2-2:last-child {
  justify-self: center; /* Horizontally center the item within the row */
  align-self: center; /* Vertically center the item within the row */
}
.gridRow1-3 {
  display: grid;
  grid-template-columns: minmax(0, 1fr)28vw 1fr;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  line-height: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1fr;
  margin-top: 0;

}
.awardPic {
  position: relative;
  top: 16vw;
  right: 11vw;
}

.rank_number {
  position: relative;
  top: 18.5vw;
  right: 11vw;
  z-index: 2;
}
.rank_number2 {
  position: relative;
  top: 18.5vw;
  right: 11vw;
  z-index: 2;
}

.pic_border {
  border: 5px solid rgba(255, 153, 0, 0.486);
  box-shadow: 0px 0px 10px rgba(255, 145, 18, 0.603);
  border-radius: 20px;
}
  .name-user1 {
  margin-top: 1.3rem;
  line-height: 2;
  font-weight: bold;
  border: 1px solid orange;
  width: 18rem;
  border-radius: 15px;
  background-color: #cbf7f7;
  box-shadow: 0px 0px 10px rgba(255, 145, 18, 0.603);
  font-family: kh moul;
  color: #0b6e16;
  font-size: 22px;
}
  .name-user{
      background-color: #cbf7f7;
      box-shadow: 0px 0px 10px rgba(255, 145, 18, 0.603);
      font-family: kh moul;
      color: #0b6e16;
      font-size: 2vw;
      margin-top: 1.3rem;
      font-weight: bold;
      border: 1px solid orange;
      line-height: 2;
      border-radius: 15px;
      text-align: center;
      vertical-align: middle;
      margin-left: 10vw;
      margin-right: 10vw;
  }
  .logo {
  text-align: center;
  align-items: center;
  width: 9vw;

}
.item0{
  margin-left: 10vw;
  margin-right: 10vw;
}
.item1{
  margin-left: 10vw;
  margin-right: 10vw;
}

        .mytr {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .textMiddle{
          vertical-align:middle;
        }
        .sb-color{
          color: darkblue;
        }
        .myLogo{
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .fontKH{
            font-family:kh moul;
        }
        .myKhmoul {
          font-family: kh moul;
        }
      .addSize{
            font-size: 1.8vh;
      }
      .sizeLetter{
            font-size: 1.1vh;
      }
      .sizeLetter2{
            font-size: 1.3vh;
      line-height: 2;

      }
      .imgBack{
        background-image: url("src/assets/images/coverAward.png");
        background-size: contain;
        background-repeat: no-repeat;
        padding: 1vw;
        margin-bottom: 20vw;
        background-position: center center;
        position: absolute;
        top: 0; /* Align to the top of the container */
        left: 0; /* Align to the left of the container */
        width: 100%; /* Optional: Set width to 100% for full coverage */
        height: 100%; /* Optional: Set height to 100% for full coverage */
        z-index: 10;
      }

      .piccontainer {
        position: relative;
      }

      .container-award {
        position: absolute;
        width: 97vw;
        height: 65vh;
      }
      .container-principal {
        position: absolute;
        width: 50vw;
        height: 0vw;
      }

      .image-middle {
        width: 20vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
        .container-principal-sign {
        position: relative;
          top: 15%;

        }
        .sign-imag{
          position: absolute;
          display: block;
          width: 25vw;
          height: auto;
          }
          .place-sign{
          position: absolute;
          display: block;
          width: 30vw;
          height: auto;
          left: 16vw;
        }
          .overlay-text {
          position: absolute; /* Positions the text on top of the image */
          top: 30%;
          left: 50%;
          margin-top: 0.9vw;
          font-weight: bold;
          transform: translate(-50%, -50%); /* Centers the text within the image */
          padding: 10px 20px;
          text-align: center;
        }

    .myimg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-size: contain;
      background-repeat: no-repeat;

    }
      body,table, * {
        margin: 0;
      }
      .limitSize{
        width: 38vw;
      }
        .colorTitle{
          color: #09aee6;
        }
            }
        </style>
        </head>
        <body class="imgBack">
        <div>
        <table class=" head_table">
            <thead>
                <tr>
                    <th></th>
                    <th class="pavachana addSize limitSize" style="color:#09aee6;">ព្រះរាជាណាចក្រកម្ពុជា</th>
                    <th class="pavachana"></th>
                </tr>
                <tr>
                    <th class="text-start"></th>
                    <th class="pavachana addSize limitSize" style="color:#09aee6;">ជាតិ សាសនា ព្រះមហាក្សត្រ
                    <br/>
                    <br/>
                    <img src="https://res.cloudinary.com/salamomschool/image/upload/v1711107157/fonts/takteng.png.png" style="width: 10vh;" alt="image">

                    </th>
                    <th class="pavachana"></th>
                </tr>
                <tr>
                    <th class="text-center line_limit"><img src="https://res.cloudinary.com/salamomschool/image/upload/v1714370275/salamomlogo.png" class="text-center logo"></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th class="text-center pavachana sizeLetter" style="color:#09aee6;">មត្តេយ្យ បឋម និងមធ្យមសិក្សាសាលាមុំ</th>
                    <th class="pavachana"></th>
                    <th class="pavachana"></th>
                </tr>
                <tr>
                    <th class="text-start"></th>
                    <th></th>
                </tr>
            </thead>
            </table>
            <table class=" head_table">
              <thead>
                <tr>
                  <th class="text-end"></th>
                  <th class="title"
                    style="color:#09aee6;font-size:6vw;-webkit-text-stroke: 0.5px #000;"
                  >តារាងកិត្តិយស</th>

                </tr>
                <tr style="line-height: 2;">
                  <th class="text-end"></th>
                  <th class="title sizeLetter2"
                    style="color:#09aee6;"
                  >ប្រចាំខែ ឧសភា (២០២៣-២០២៤)</th>

                </tr>
                <tr>
                  <th class="text-end"></th>
                  <th class="title sizeLetter2"
                    style="color:#09aee6;"
                  >ថ្នាក់ទី ៥ (ខ)</th>

                </tr>
              </thead>
            </table>

        `);
    newWindow.document.write(printContent.outerHTML);
    newWindow.document.write(`
                  <table class=" border-dark text_table m-3">
                  <thead>

                      <tr>
                          <th style="width:35vh;"></th>
                          <th class="text-center text_table sizeLetter"
                          style="color:#09aee6;font-family:AKbalthom;"
                          >
                          ថ្ងៃ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          ខែ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          ឆ្នាំំ ${yearAnimals}&nbsp;${yearNumber}&nbsp;ព.ស ${yearKH}

                          </th>
                      </tr>
                      <tr>
                          <th style="width:25vh;" class="sizeLetter">បានឃើញ និងឯកភាព</th>
                          <th class="text-center text_table sizeLetter"
                          style="color:#09aee6;font-family:AKbalthom;"
                          >ថ្ងៃទី
                              <span id="get_date_num" style="color: blue;"></span>
                              ខែ <span id="get_month" style="color: blue;"></span>
                              ឆ្នាំ <span id="get_year" style="color: blue;"></span>
                          </th>
                      </tr>
                      <tr>
                          <th style="width:25vh;height: 0vh;" class="text-center text_table pavachana sizeLetter">
                          <div class="container-principal-sign">
                          <div class="place-sign">
                          <img class="sign-imag" src="https://res.cloudinary.com/salamomschool/image/upload/v1720781504/principleSign2.png" />
                          </div>
                          <div class="overlay-text">
                          <p>នាយិកាសាលា</p>
                          </div>
                          </div>
                              </th>
                          <th class="text-center text_table sizeLetter"
                          style="color:#09aee6;font-family:AKbalthom;"
                          >គ្រូបន្ទុកថ្នាក់</th>
                      </tr>
                      <tr>
                          <th style="width:25vh;" class="text-center text_table"></th>
                          <th class="text-center text_table pavachana"></th>
                      </tr>
                  </thead>
              </table>
        </div>
            <script>
                  let d1 = localStorage.getItem('get_day_kh_admin_award');
                  let d2 = localStorage.getItem('month_admin_award');
                  let d3 = localStorage.getItem('get_year_kh_admin_award');
                  var get_date_num = document.getElementById('get_date_num')
                  var get_month = document.getElementById('get_month')
                  var get_year = document.getElementById('get_year')
                  get_date_num.innerText = d1;
                  get_month.innerText = d2;
                  get_year.innerText = d3;
            </script>
    </body>
    </html>`);
    newWindow.document.close();
    newWindow.focus();
    setTimeout(() => {
      newWindow.print();
    }, 1000);
    // newWindow.close();

  }

  // const showID = () => {
  //   users.map((e, index) => {
  //     let id = e.id
  //     console.log(id);
  //   })
  // }
  // showID()
  // const View1 = () => {
  //   if (numberRank1 == 2) {
  //     return (
  //       <>
  //         <div className="container-award">
  //           <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
  //         </div>

  //         <div className="gridRow1-2">
  //           {users.map((data, index) => {
  //             if (data.rank_moct === 1) {
  //               var number = '១'
  //               return (
  //                 <>
  //                   {/* <div className="gridRow1-2"> */}
  //                   <div key={data} className="text-center">
  //                     <div className="rank_number2">
  //                       <strong
  //                         style={{
  //                           fontFamily: 'kh moul',
  //                           fontSize: '2.5vw'

  //                         }}
  //                       >{number}</strong>
  //                     </div>
  //                     <div className="awardPic">
  //                       <img
  //                         src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                         style={{
  //                           width: '7vw',
  //                           height: '7vw',
  //                         }}
  //                       />
  //                     </div>
  //                     <div className="text-center">
  //                       <img
  //                         alt="Image description"
  //                         src={data.user_picture_url}
  //                         className="pic_border"
  //                         style={{
  //                           width: '14vw',
  //                           height: '16vw'
  //                         }}

  //                       />
  //                       <p className={`name-user item${index} `}

  //                       >{data.fullname}</p>
  //                     </div>
  //                   </div>
  //                   {/* </div> */}
  //                 </>
  //               )
  //             }
  //           })}
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 3) {
  //                 var number = '៣'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number2">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 4) {
  //                 var number = '៤'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number2">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>
  //         <div className="gridRow1">
  //           <div className="gridRow">
  //             {users.map((data, index) => {
  //               if (data.rank_moct === 5) {
  //                 var number = '៥'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number2">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                         style={{
  //                           marginLeft: '34vw',
  //                           marginRight: '34vw',
  //                         }}
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>

  //       </>
  //     )
  //   } else if (numberRank1 == 1) {
  //     return (
  //       <>
  //         <div className="container-award">
  //           <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
  //         </div>
  //         <div className="gridRow1">
  //           {users.map((data, index) => {
  //             if (data.rank_moct === 1) {
  //               var number = '១'
  //               return (
  //                 <>
  //                   <div key={data}>
  //                     <div className="rank_number">
  //                       <strong
  //                         style={{
  //                           fontFamily: 'kh moul',
  //                           fontSize: '2.5vw'

  //                         }}
  //                       >{number}</strong>
  //                     </div>
  //                     <div className="awardPic">
  //                       <img
  //                         src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                         style={{
  //                           width: '7vw',
  //                           height: '7vw',
  //                         }}
  //                       />
  //                     </div>
  //                     <div>
  //                       <img
  //                         alt="Image description"
  //                         src={data.user_picture_url}
  //                         className="pic_border"
  //                         style={{
  //                           width: '14vw',
  //                           height: '16vw'
  //                         }}

  //                       />
  //                       <p className="name-user"
  //                         style={{
  //                           marginLeft: '35vw',
  //                           marginRight: '35vw'
  //                         }}
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </div>
  //                 </>
  //               )
  //             }
  //           })}
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 2) {
  //                 var number = '២'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 3) {
  //                 var number = '៣'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 4) {
  //                 var number = '៤'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {


  //               if (data.rank_moct === 5) {
  //                 var number = '៥'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'
  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <div
  //                       >
  //                         <p
  //                           className="name-user"
  //                         >{data.fullname}</p>
  //                       </div>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>

  //       </>
  //     )
  //   }
  //   if (numberRank2 == 1) {
  //     console.log(numberRank2);

  //     return (
  //       <>
  //         <div className="gridRow1">
  //           {users.map((data, index) => {
  //             if (data.rank_moct === 1) {
  //               var number = '១'
  //               return (
  //                 <>
  //                   <div key={data}>
  //                     <div className="rank_number">
  //                       <strong
  //                         style={{
  //                           fontFamily: 'kh moul',
  //                           fontSize: '2.5vw'

  //                         }}
  //                       >{number}</strong>
  //                     </div>
  //                     <div className="awardPic">
  //                       <img
  //                         src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                         style={{
  //                           width: '7vw',
  //                           height: '7vw',
  //                         }}
  //                       />
  //                     </div>
  //                     <div>
  //                       <img
  //                         alt="Image description"
  //                         src={data.user_picture_url}
  //                         className="pic_border"
  //                         style={{
  //                           width: '14vw',
  //                           height: '16vw'
  //                         }}

  //                       />
  //                       <p className="name-user"
  //                         style={{
  //                           marginLeft: '35vw',
  //                           marginRight: '35vw'
  //                         }}
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </div>
  //                 </>
  //               )
  //             }
  //           })}
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 2) {
  //                 var number = '២'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 3) {
  //                 var number = '៣'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 4) {
  //                 var number = '៤'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {


  //               if (data.rank_moct === 5) {
  //                 var number = '៥'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'
  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <div
  //                       >
  //                         <p
  //                           className="name-user"
  //                         >{data.fullname}</p>
  //                       </div>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>

  //       </>
  //     )
  //   } else if (numberRank1 == 1) {
  //     return (
  //       <>
  //         <div className="gridRow1">
  //           {users.map((data, index) => {
  //             if (data.rank_moct === 1) {
  //               var number = '១'
  //               return (
  //                 <>
  //                   <div key={data}>
  //                     <div className="rank_number">
  //                       <strong
  //                         style={{
  //                           fontFamily: 'kh moul',
  //                           fontSize: '2.5vw'

  //                         }}
  //                       >{number}</strong>
  //                     </div>
  //                     <div className="awardPic">
  //                       <img
  //                         src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                         style={{
  //                           width: '7vw',
  //                           height: '7vw',
  //                         }}
  //                       />
  //                     </div>
  //                     <div>
  //                       <img
  //                         alt="Image description"
  //                         src={data.user_picture_url}
  //                         className="pic_border"
  //                         style={{
  //                           width: '14vw',
  //                           height: '16vw'
  //                         }}

  //                       />
  //                       <p className="name-user"
  //                         style={{
  //                           marginLeft: '35vw',
  //                           marginRight: '35vw'
  //                         }}
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </div>
  //                 </>
  //               )
  //             }
  //           })}
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 2) {
  //                 var number = '២'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 3) {
  //                 var number = '៣'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 4) {
  //                 var number = '៤'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {


  //               if (data.rank_moct === 5) {
  //                 var number = '៥'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'
  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <div
  //                       >
  //                         <p
  //                           className="name-user"
  //                         >{data.fullname}</p>
  //                       </div>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>

  //       </>
  //     )
  //   }
  //   if (numberRank2 == 2) {
  //     return (
  //       <>
  //         <div className="gridRow1">
  //           {users.map((data, index) => {
  //             if (data.rank_moct === 1) {
  //               var number = '១'
  //               return (
  //                 <>
  //                   <div key={data}>
  //                     <div className="rank_number">
  //                       <strong
  //                         style={{
  //                           fontFamily: 'kh moul',
  //                           fontSize: '2.5vw'

  //                         }}
  //                       >{number}</strong>
  //                     </div>
  //                     <div className="awardPic">
  //                       <img
  //                         src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                         style={{
  //                           width: '7vw',
  //                           height: '7vw',
  //                         }}
  //                       />
  //                     </div>
  //                     <div>
  //                       <img
  //                         alt="Image description"
  //                         src={data.user_picture_url}
  //                         className="pic_border"
  //                         style={{
  //                           width: '14vw',
  //                           height: '16vw'
  //                         }}

  //                       />
  //                       <p className="name-user"
  //                         style={{
  //                           marginLeft: '35vw',
  //                           marginRight: '35vw'
  //                         }}
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </div>
  //                 </>
  //               )
  //             }
  //           })}
  //         </div>
  //         <div className="gridRow1-3">
  //           {users.map((data, index) => {
  //             if (data.rank_moct === 2) {
  //               var number = '២'
  //               return (
  //                 <>
  //                   {/* <div className="gridRow1-2"> */}
  //                   <div key={data} className="text-center">
  //                     <div className="rank_number2">
  //                       <strong
  //                         style={{
  //                           fontFamily: 'kh moul',
  //                           fontSize: '2.5vw'

  //                         }}
  //                       >{number}</strong>
  //                     </div>
  //                     <div className="awardPic">
  //                       <img
  //                         src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                         style={{
  //                           width: '7vw',
  //                           height: '7vw',
  //                         }}
  //                       />
  //                     </div>
  //                     <div className="text-center">
  //                       <img
  //                         alt="Image description"
  //                         src={data.user_picture_url}
  //                         className="pic_border"
  //                         style={{
  //                           width: '14vw',
  //                           height: '16vw'
  //                         }}

  //                       />
  //                       <p className={`name-user item${index} `}

  //                       >{data.fullname}</p>
  //                     </div>
  //                   </div>
  //                   {/* </div> */}
  //                 </>
  //               )
  //             }
  //           })}
  //         </div>

  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 4) {
  //                 var number = '៤'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {


  //               if (data.rank_moct === 5) {
  //                 var number = '៥'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'
  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <div
  //                       >
  //                         <p
  //                           className="name-user"
  //                         >{data.fullname}</p>
  //                       </div>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>

  //       </>
  //     )
  //   } else if (numberRank1 == 1) {
  //     return (
  //       <>
  //         <div className="gridRow1">
  //           {users.map((data, index) => {
  //             if (data.rank_moct === 1) {
  //               var number = '១'
  //               return (
  //                 <>
  //                   <div key={data}>
  //                     <div className="rank_number">
  //                       <strong
  //                         style={{
  //                           fontFamily: 'kh moul',
  //                           fontSize: '2.5vw'

  //                         }}
  //                       >{number}</strong>
  //                     </div>
  //                     <div className="awardPic">
  //                       <img
  //                         src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                         style={{
  //                           width: '7vw',
  //                           height: '7vw',
  //                         }}
  //                       />
  //                     </div>
  //                     <div>
  //                       <img
  //                         alt="Image description"
  //                         src={data.user_picture_url}
  //                         className="pic_border"
  //                         style={{
  //                           width: '14vw',
  //                           height: '16vw'
  //                         }}

  //                       />
  //                       <p className="name-user"
  //                         style={{
  //                           marginLeft: '35vw',
  //                           marginRight: '35vw'
  //                         }}
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </div>
  //                 </>
  //               )
  //             }
  //           })}
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 2) {
  //                 var number = '២'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>
  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 3) {
  //                 var number = '៣'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>
  //         <div className="gridRow2">
  //           <div className="gridRow">

  //             {users.map((data, index) => {

  //               if (data.rank_moct === 4) {
  //                 var number = '៤'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'

  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <p
  //                         className="name-user"
  //                       >{data.fullname}</p>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //           <div className="gridRow3">

  //             {users.map((data, index) => {


  //               if (data.rank_moct === 5) {
  //                 var number = '៥'
  //                 return (
  //                   <>
  //                     <div key={index}
  //                       class="text-center">
  //                       <div className="rank_number">
  //                         <strong
  //                           style={{
  //                             fontFamily: 'kh moul',
  //                             fontSize: '2.5vw'
  //                           }}>{number}</strong>
  //                       </div>
  //                       <div className="awardPic">
  //                         <img
  //                           src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
  //                           style={{
  //                             width: '7vw',
  //                             height: '7vw',
  //                           }}
  //                         />
  //                       </div>
  //                       <div className="image-container">
  //                         <img
  //                           alt="Image description"
  //                           src={data.user_picture_url}
  //                           className="pic_border"
  //                           style={{
  //                             width: '14vw',
  //                             height: '16vw'
  //                           }}

  //                         />
  //                       </div>
  //                       <div
  //                       >
  //                         <p
  //                           className="name-user"
  //                         >{data.fullname}</p>
  //                       </div>

  //                     </div>
  //                   </>
  //                 )
  //               }
  //             })}

  //           </div>
  //         </div>

  //       </>
  //     )
  //   }

  // }
  const TestPreview = () => {

    return (
      <>
        <div id="myPrintAward">
          <View1Award />

        </div>

      </>
    )
  }

  const SortData = () => {
    const dbAll = [...users].sort((a, b) => a.fullname.localeCompare(b.fullname));
    return (
      <>
        {
          dbAll.map((user, index) => {
            return (
              <>
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{user.user_grade}</td>
                  <td className='text-center' style={{ width: "100px", height: "80px" }}>
                    <img style={{ width: "80%", height: "100%" }} src={user.user_picture_url === undefined ? 'https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png' : user.user_picture_url}></img></td>
                  <td
                    onClick={handleClick}
                    id={user.id.replace(/\s/g, "")}
                    data-bs-toggle="modal"
                    data-bs-target="#add_student"
                    // data-user_id={user.id}
                    data-fullname={user.fullname}
                    // data-first_name={user.first_name}
                    // data-last_name={user.last_name}
                    data-name_latin={user.name_latin}
                    data-gender={user.gender}
                    data-en_gender={user.en_gender}
                    data-en_level={user.en_level}
                    // data-date_of_birth={user.date_of_birth}
                    // data-user_age={user.user_age}
                    // data-user_grade={user.user_grade}
                    // data-village={user.village}
                    // data-district={user.district}
                    // data-commune={user.commune}
                    // data-province={user.province}
                    // data-place_of_birth={user.place_of_birth}
                    // data-current_village={user.current_village}
                    // data-current_district={user.current_district}
                    // data-current_commune={user.current_commune}
                    // data-current_province={user.current_province}
                    // data-current_address={user.current_address}
                    // data-father_name={user.father_name}
                    // data-father_occupation={user.father_occupation}
                    // data-mother_name={user.mother_name}
                    // data-mother_occupation={user.mother_occupation}
                    // data-parents_phone_number={user.parents_phone_number}
                    // data-user_facebook={user.user_facebook}
                    // data-user_guardian={user.user_guardian}
                    // data-guardian_occupation={user.guardian_occupation}
                    // data-guardian_phone_number={user.guardian_phone_number}
                    // data-other_information={user.other_information}
                    // data-user_relationship={user.user_relationship}
                    data-user_picture_url={user.user_picture_url}
                    data-user_identity_url={user.user_identity_url}
                    data-id={user.id}
                  >{user.fullname}</td>
                  <td className="text-center">{user.name_latin}</td>
                  <td className="text-center">{user.gender}</td>
                  <td className="text-center">{user.en_level}</td>
                  <td className="text-center"><input
                    data-fullname={user.fullname}
                    data-enname={user.name_latin}
                    data-gender={user.gender}
                    data-pic={user.user_picture_url}
                    data-pic_id={user.user_identity_url}
                    data-id={user.id}
                    onChange={(event) => handleCheckboxChange(event, user)}
                    checked={selectedUsers.some(selectedUser => selectedUser.id === user.id)}
                    type="checkbox" id="stdcheck" /></td>
                </tr>
              </>
            )

          }
          )
        }

      </>
    )

  }
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card card-primary card-outline">
          <div className="card-body">
            <div style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
              <h4 className="card-title" style={{ lineHeight: '2' }}>
                បញ្ជីព័ត៌មានផ្ទាល់ខ្លួនសិស្ស
              </h4>
              <table className="table borderless">
                <tr>
                  <td
                    style={{
                      width: "2rem"
                    }}
                    className="border-0 text-center col-lg-3">
                    <SelectYear />
                  </td>

                  <td className="border-0 text-center col-lg-3">
                    <LevelSelect />
                  </td>
                  <td
                    style={{
                      width: "5rem"
                    }}
                    className="border-0 text-center col-lg-3">
                    <SelectGrade />
                  </td>
                </tr>
                <tr>
                  <td className="border-0 text-center">
                  </td>
                  <td className="border-0 col-lg-3 text-center">
                  </td>
                  <td className="border-0 text-center"></td>

                </tr>
              </table>
              <div className="text-center">

                <button id="addNew" type="button" className="btn btn-success btn-sm me-2"
                  onClick={AddNew}
                  style={{
                    color: "white"
                  }}
                  data-bs-toggle="modal" data-bs-target="#add_student">
                  <CIcon icon={cilPlus} /> បង្កើតថ្មី
                </button>
                <button data-bs-toggle="modal" data-bs-target="#importModal"
                  style={{
                    color: "black",
                    fontWeight: 'bold'
                  }}
                  type="button" id="importStd" className="btn btn-warning btn-sm me-2">
                  <CIcon icon={cilArrowThickBottom} /> Import
                </button>
                <button
                  data-bs-toggle="modal" data-bs-target="#add_student_upgrade"
                  id="getData"
                  style={{
                    color: "white"
                  }}
                  type="button"
                  className="btn btn-info btn-sm me-2"><CIcon icon={cilArrowCircleTop} /> Upgrade</button>
                {/* <DropStd /> */}
                <MyComponent />
                <GoodStd />
              </div>
            </div>

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

            <div style={{ overflowX: "auto", padding: "15px", height: "50rem", scrollbarWidth: "block" }}>
              <table className="table table-bordered table-hover" id="showStudents">
                <thead>
                  <tr className="frezze">
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">ល.រ</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">ថ្នាក់ទី</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">រូបភាព</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">គោត្តនាមនិងនាម</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">អក្សរឡាតាំង</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">ភេទ</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">កម្រិតអង់គ្លេស</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center"><input type="checkbox" checked={selectAllChecked} onChange={handleSelectAllChange}></input></td>
                  </tr>
                </thead>
                <tbody id="showUserdata">
                  <SortData />
                </tbody>
              </table>
            </div>
          </div>

          <div className="modal fade" id="importModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <ion-icon name="chevron-back-outline"
                    data-bs-dismiss="modal"></ion-icon>
                  <h3 className="modal-title text-center fw-bold" id="exampleModalLabel">
                    បញ្ចូលព័ត៍មានសិស្ស</h3>
                </div>
                <div className="modal-body">
                  <div>
                    <form enctype="multipart/form-data">
                      <a href="https://firebasestorage.googleapis.com/v0/b/salamom-d3246.appspot.com/o/SalaMOM%2Fstudents%2Fsample%20import%20student%20information.xlsx?alt=media&token=196edd2c-2c66-45fc-ac03-0923f0f201ba"
                        target="_blank" rel="noopener noreferrer"
                        style={{ color: "green" }}
                      >ចុចទីនេះ ដើម្បីទាញយកគំរូជា
                        Excel</a>
                      <div className="mb-3">
                        <Form.Label for="formFile" className="form-label">សូមជ្រើសរើសឯកសារជា
                          Excel</Form.Label>
                        <ExcelImport />
                        {/* <input className="form-control" type="file" id="upload"
                                                        name="files[]"></input> */}
                      </div>
                    </form>
                    <div style={{ overflowX: "auto" }}>
                      <table className="table table-bordered whiteBack table-hover kh"
                        style={{ fontSize: "12px" }}>
                        <thead
                          style={{ backgroundColor: "blanchedalmond", fontWeight: "bold" }}>
                          <tr>
                            <th scope="col"> # </th>
                            <th scope="col"> ID </th>
                            {/* <th scope="col"> លេខសំគាល់សិស្ស</th> */}
                            <th scope="col"> នាមត្រកូល និង នាមខ្លួន</th>
                            {/* <th scope="col"> នាមត្រកូល</th>
                            <th scope="col"> នាមខ្លួន </th> */}
                            <th scope="col"> អក្សរឡាតាំង </th>
                            <th scope="col"> ថ្នាក់ទី </th>
                            <th scope="col"> ភេទ(KH) </th>
                            <th scope="col"> ភេទ(EN) </th>
                            <th scope="col"> កម្រិតអង់គ្លេស </th>
                            {/* <th scope="col"> ថ្ងៃខែឆ្នាំកំណើត </th> */}
                            {/* <th scope="col"> អាយុ </th> */}
                            {/* <th scope="col"> ភូមិ </th>
                            <th scope="col"> ស្រុក/ខណ្ឌ</th>
                            <th scope="col"> ឃុំ/សង្កាត់</th>
                            <th scope="col"> ខេត្ត/ក្រុង</th>
                            <th scope="col"> ឬវាយបញ្ជូលទីកន្លែងកំណើត</th>
                            <th scope="col"> ភូមិ </th>
                            <th scope="col"> ស្រុក/ខណ្ឌ </th>
                            <th scope="col"> ឃុំ/សង្កាត់ </th>
                            <th scope="col"> ខេត្ត/ក្រុង </th>
                            <th scope="col"> ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន </th>
                            <th scope="col"> ឈ្មោះឪពុក </th>
                            <th scope="col"> មុខរបរ </th>
                            <th scope="col"> ឈ្មោះម្តាយ </th>
                            <th scope="col"> មុខរបរ </th>
                            <th scope="col"> ទូរស័ព្ឌ ឪពុក-ម្តាយ</th>
                            <th scope="col"> ហ្វែសបុក/Facebook</th>
                            <th scope="col"> អាណាព្យាបាល</th>
                            <th scope="col"> មុខរបរ </th>
                            <th scope="col"> ទូរស័ព្ឌ អាណាព្យាបាល</th>
                            <th scope="col"> ផ្សេងៗ</th>
                            <th scope="col"> ត្រូវជា</th> */}

                          </tr>
                        </thead>
                        <tbody id="showTable" style={{ color: "black" }}>
                          {myData.map((data, index) => (
                            <tr> {/* Add a unique key for each row */}
                              <td className="text-center">{index + 1}</td>
                              <td className="text-center">{data.id}</td>
                              {/* <td className="text-center">{data.user_id}</td> */}
                              <td className="text-center">{data.fullname}</td>
                              {/* <td className="text-center">{data.first_name}</td>
                              <td className="text-center">{data.last_name}</td> */}
                              <td className="text-center">{data.name_latin}</td>
                              <td className="text-center">{dbGade}</td>
                              <td className="text-center">{data.gender}</td>
                              <td className="text-center">{data.gender === 'ស' ? 'F' : data.gender === 'ប' ? 'M' : 'inherit'}</td>
                              <td className="text-center">{data.en_level}</td>
                              {/* <td className="text-center">{data.date_of_birth}</td> */}
                              {/* <td className="text-center">{data.user_age}</td>
                              <td className="text-center">{data.village}</td>
                              <td className="text-center">{data.district}</td>
                              <td className="text-center">{data.commune}</td>
                              <td className="text-center">{data.province}</td>
                              <td className="text-center">{data.place_of_birth}</td>
                              <td className="text-center">{data.current_village}</td>
                              <td className="text-center">{data.current_district}</td>
                              <td className="text-center">{data.current_commune}</td>
                              <td className="text-center">{data.current_province}</td>
                              <td className="text-center">{data.current_address}</td>
                              <td className="text-center">{data.father_name}</td>
                              <td className="text-center">{data.father_occupation}</td>
                              <td className="text-center">{data.mother_name}</td>
                              <td className="text-center">{data.mother_occupation}</td>
                              <td className="text-center">{data.parents_phone_number}</td>
                              <td className="text-center">{data.user_facebook}</td>
                              <td className="text-center">{data.user_guardian}</td>
                              <td className="text-center">{data.guardian_occupation}</td>
                              <td className="text-center">{data.guardian_phone_number}</td>
                              <td className="text-center">{data.other_information}</td>
                              <td className="text-center">{data.user_relationship}</td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={importData}
                    style={{ color: 'white' }}
                    id="btn_upload" type="button" className="btn btn-success btn-sm">
                    <CIcon icon={cilArrowBottom} />បញ្ជូនទិន្នន័យ</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="add_student" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="fw-bold">បង្កើតព័ត៌មានផ្ទាល់ខ្លួនសិស្ស</h4>

                </div>
                <div className="modal-body">
                  <div className="content" id="new-teacher">
                    <div className="form-container">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-6">
                                <Form.Label
                                  for="student_student_id">លេខសំគាល់សិស្ស</Form.Label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={id}
                                  onChange={(e) => setid(e.target.value)}
                                  className="form-control" required="required"
                                  style={{ lineHeight: "2" }} type="text"
                                  name="student[student_id]" id="fill1" />
                              </div>
                              <div className="col-lg-6">
                                <Form.Label for="student_duty">គោត្តនាម
                                  និងនាម</Form.Label>
                                <span className="text-red">*</span>
                                <input autocomplete="off"
                                  value={fullname}
                                  onChange={(e) => setfullname(e.target.value)}
                                  className="form-control" required="required"
                                  style={{ lineHeight: "2" }} type="text"
                                  name="student[full_name_kh]"
                                  id="fill2" />
                              </div>
                              <div className="col-lg-6">
                                <label for="student_gender">កម្រិតភាសាអង់គ្លេស</label><span
                                  className="text-red">*</span>
                                <SetLevel />
                              </div>

                            </div>
                            <div className="row">
                              {/* <div className="col-lg-6">
                                <Form.Label
                                  for="student_full_name_kh">នាមត្រកូល</Form.Label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={first_name}
                                  onChange={(e) => setfirst_name(e.target.value)}
                                  className="form-control" required="required"
                                  style={{ lineHeight: "2" }} type="text"
                                  name="student[full_name_kh]"
                                  id="fill3" />
                              </div>
                              <div className="col-lg-6">
                                <Form.Label
                                  for="student_full_name_kh">នាមខ្លួន</Form.Label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={last_name}
                                  onChange={(e) => setlast_name(e.target.value)}
                                  className="form-control" required="required"
                                  style={{ lineHeight: "2" }} type="text"
                                  name="student[full_name_kh]"
                                  id="fill4" />
                              </div> */}
                              <div className="col-lg-6">
                                <Form.Label
                                  for="student_full_name_latin">អក្សរឡាតាំង</Form.Label>
                                <span className="text-red">*</span>
                                <input autocomplete="off"
                                  value={name_latin}
                                  onChange={(e) => setname_latin(e.target.value)}
                                  ref={NameEn}
                                  style={{ lineHeight: "2" }}
                                  onkeyup="this.value = this.value.toUpperCase()"
                                  className="form-control" type="text"
                                  name="student[full_name_latin]"
                                  id="fill5" />
                              </div>
                              <div className="col-lg-6">
                                <Form.Label
                                  for="student_full_name_latin">ថ្នាក់ទី</Form.Label>
                                <span className="text-red">*</span>
                                <input autocomplete="off"
                                  value={user_grade}
                                  onChange={(e) => setuser_grade(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  onkeyup="this.value = this.value.toUpperCase()"
                                  className="form-control" type="text"
                                  name="student[full_name_latin]"
                                  id="fill6" />
                              </div>

                            </div>

                            <div className="row">
                              <div className="col-lg-6">
                                <Form.Label for="student_gender">ភេទ</Form.Label><span
                                  className="text-red">*</span>
                                <select className="form-control text-center"
                                  value={gender}
                                  onChange={(e) => setgender(e.target.value)}
                                  style={{ color: "black", lineHeight: 2, fontSize: '14px' }}
                                  required="required"
                                  name="student[gender]" id="fill7">
                                  <option value="">
                                    ជ្រើសរើសភេទ
                                  </option>
                                  <option value="ប">
                                    ប្រុស
                                  </option>
                                  <option value="ស">
                                    ស្រី
                                  </option>
                                </select>
                              </div>

                              {/* <div className="col-lg-6">
                                <Form.Label
                                  for="student_date_of_birth">ថ្ងៃខែឆ្នាំកំណើត</Form.Label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={date_of_birth}
                                  onChange={(e) => setdate_of_birth(e.target.value)}
                                  placeholder="ថ្ងៃ/ខែ/ឆ្នាំ"
                                  style={{ lineHeight: "2" }}
                                  className="form-control date-input-mask"
                                  required="required" type="text"
                                  name="student[date_of_birth]"
                                  id="fill8" />
                              </div> */}
                              {/* <div className="col-lg-6">
                                <Form.Label for="student_gender">អាយុ</Form.Label>
                                <input autocomplete="off" placeholder="អាយុ"
                                  value={user_age}
                                  onChange={(e) => setuser_age(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  className="form-control" type="text"
                                  name="student[date_of_birth]"
                                  id="fill9" />

                              </div> */}
                            </div>

                            <div className="row">
                              <div className="col-lg-3">
                                <div id="branch-profile">
                                  <ImageUpload2 />

                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 m-3 d-flex">
                            <div id="branch-profile">
                              <ImageUpload />
                            </div>
                          </div>
                        </div>
                        {/* <br />
                        <div className="row place-container">
                          <div className="place-devider">
                            ទីកន្លែងកំណើត</div>
                          <div id="village" className="col-lg-3">
                            <Form.Label for="fill14">ភូមិ</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={village}
                              onChange={(e) => setvillage(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[full_birth_address]"
                              id="fill10" />
                          </div>

                          <div id="district" className="col-lg-3">
                            <Form.Label for="fill12">ស្រុក/ខណ្ឌ</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={district}
                              onChange={(e) => setdistrict(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[full_birth_address]"
                              id="fill11" />
                          </div>

                          <div id="commune" className="col-lg-3">
                            <Form.Label for="fill13">ឃុំ/សង្កាត់</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={commune}
                              onChange={(e) => setcommune(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[full_birth_address]"
                              id="fill12" />
                          </div>

                          <div id="province" className="col-lg-3">
                            <Form.Label for="fill11">ខេត្ត/ក្រុង</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={province}
                              onChange={(e) => setprovince(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[address]" id="fill13" />
                          </div>

                          <div className="col-lg-12">
                            <div className="col-lg-12">
                              <Form.Label
                                for="fill15">ឬវាយបញ្ជូលទីកន្លែងកំណើត</Form.Label>
                              <textarea className="form-control"
                                value={place_of_birth}
                                onChange={(e) => setplace_of_birth(e.target.value)}
                                style={{ lineHeight: "2" }} name="placeOfBirth"
                                id="fill14" cols="50" rows="5"></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="row place-container">
                          <div className="place-devider">
                            ទីលំនៅបច្ចុប្បន្ន</div>
                          <div id="current-village" className="col-lg-3">
                            <Form.Label for="fill19">ភូមិ</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={current_village}
                              onChange={(e) => setcurrent_village(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[full_birth_address]"
                              id="fill15" />
                          </div>

                          <div id="current-district" className="col-lg-3">
                            <Form.Label for="fill17">ស្រុក/ខណ្ឌ</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={current_district}
                              onChange={(e) => setcurrent_district(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[full_birth_address]"
                              id="fill16" />
                          </div>

                          <div id="current-commune" className="col-lg-3">
                            <Form.Label for="fill18">ឃុំ/សង្កាត់</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={current_commune}
                              onChange={(e) => setcurrent_commune(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[full_birth_address]"
                              id="fill17" />
                          </div>

                          <div id="current-province" className="col-lg-3">
                            <Form.Label for="fill16">ខេត្ត/ក្រុង</Form.Label>
                            <input autocomplete="off" className="form-control"
                              value={current_province}
                              onChange={(e) => setcurrent_province(e.target.value)}
                              style={{ lineHeight: "2" }} type="text"
                              name="student[full_birth_address]"
                              id="fill18" />
                          </div>

                          <div className="col-lg-12">
                            <Form.Label
                              for="fill20">ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន</Form.Label>
                            <textarea className="form-control" name="placeOfBirth"
                              value={current_address}
                              onChange={(e) => setcurrent_address(e.target.value)}
                              style={{ lineHeight: "2" }} id="fill19" cols="50"
                              rows="5"></textarea>
                          </div>
                        </div> */}

                        {/* <div className="row place-container">
                          <div className="place-devider">
                            ព័ត៌មានគ្រួសារ
                          </div>

                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-5">
                                <Form.Label
                                  for="fill29">ឈ្មោះឪពុក</Form.Label>
                                <input autocomplete="off"
                                  value={father_name}
                                  onChange={(e) => setfather_name(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  className="form-control" type="text"
                                  name="student[father_name]"
                                  id="fill20" />
                              </div>

                              <div className="col-lg-3">
                                <Form.Label for="fill30">មុខរបរ</Form.Label>
                                <input className="form-control"
                                  value={father_occupation}
                                  onChange={(e) => setfather_occupation(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  type="text"
                                  name="student[father_occupation]"
                                  id="fill21" />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-5">
                                <Form.Label
                                  for="fill31">ឈ្មោះម្តាយ</Form.Label>
                                <input autocomplete="off"
                                  value={mother_name}
                                  onChange={(e) => setmother_name(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  className="form-control" type="text"
                                  name="student[mother_name]"
                                  id="fill22" />
                              </div>

                              <div className="col-lg-3">
                                <Form.Label for="fill32">មុខរបរ</Form.Label>
                                <input className="form-control"
                                  value={mother_occupation}
                                  onChange={(e) => setmother_occupation(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  type="text"
                                  name="student[mother_occupation]"
                                  id="fill23" />
                              </div>
                              <div className="col-lg-5">
                                <Form.Label for="fill30">ទូរស័ព្ឌ
                                  ឪពុក-ម្តាយ</Form.Label>
                                <input className="form-control"
                                  value={parents_phone_number}
                                  onChange={(e) => setparents_phone_number(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  type="text"
                                  name="student[father_occupation]"
                                  id="fill24" />
                              </div>
                              <div className="col-lg-5">
                                <Form.Label
                                  for="fill32">ហ្វែសបុក/Facebook</Form.Label>
                                <input className="form-control"
                                  value={user_facebook}
                                  onChange={(e) => setuser_facebook(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  type="text"
                                  name="student[mother_occupation]"
                                  id="fill25" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-5">
                                <Form.Label
                                  for="fill31">អាណាព្យាបាល</Form.Label>
                                <input autocomplete="off"
                                  value={user_guardian}
                                  onChange={(e) => setuser_guardian(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  className="form-control" type="text"
                                  name="student[mother_name]"
                                  id="fill26" />
                              </div>

                              <div className="col-lg-3">
                                <Form.Label for="fill32">មុខរបរ</Form.Label>
                                <input className="form-control"
                                  value={guardian_occupation}
                                  onChange={(e) => setguardian_occupation(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  type="text"
                                  name="student[mother_occupation]"
                                  id="fill27" />
                              </div>
                              <div className="col-lg-3">
                                <Form.Label for="fill32">ទូរស័ព្ឌ
                                  អាណាព្យាបាល</Form.Label>
                                <input className="form-control"
                                  value={guardian_phone_number}
                                  onChange={(e) => setguardian_phone_number(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  type="text"
                                  name="student[mother_occupation]"
                                  id="fill28" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <Form.Label for="fill33">ផ្សេងៗ</Form.Label>
                                <textarea className="form-control"
                                  value={other_information}
                                  onChange={(e) => setother_information(e.target.value)}
                                  style={{ lineHeight: "2" }}
                                  name="placeOfBirth" id="fill29"
                                  cols="50" rows="5"></textarea>
                              </div>

                            </div>
                            <div className="row">
                              <div className="col-lg-3">
                                <Form.Label for="fill34">ត្រូវជា</Form.Label>
                                <select className="form-control"
                                  value={user_relationship}
                                  onChange={(e) => setuser_relationship(e.target.value)}
                                  style={{ color: "black", lineHeight: "2", height: "3rem" }}
                                  required="required"
                                  name="student[gender]"
                                  id="fill30">
                                  <option value="">
                                    ជ្រើសរើស
                                  </option>
                                  <option value="សិស្សទូទៅ">
                                    សិស្សទូទៅ
                                  </option>
                                  <option value="កូនបុគ្គលិក">
                                    កូនបុគ្គលិក
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div> */}

                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button id="btnAdd"
                    ref={btnAdd}
                    onClick={handleSubmit}
                    className="btn btn-success btn-rounded btn-fw btn-sm">បញ្ចូល</button>
                  <button id="btnUpdate"
                    ref={btnUp}
                    onClick={UpdateInformation}
                    className="btn btn-warning btn-rounded btn-fw btn-sm">កែ</button>
                  <button id="btnDelete"
                    onClick={RemoveInformation}
                    ref={btnDe}
                    className="btn btn-danger btn-rounded btn-fw btn-sm">លុប</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="add_student_upgrade" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <select
                    className="text-center"
                    value={upgradeYear}
                    onChange={e => {
                      localStorage.setItem('upgradeYear', e.target.value)
                      setupgradeYear(e.target.value)
                    }}
                    style={{
                      color: '#23074d',
                      lineHeight: '1',
                      borderRight: "0",
                      borderLeft: "0",
                      borderTop: "0",
                      borderBottom: "2px solid #005AA7",
                      fontWeight: "bold",
                      background: "transparent",

                    }}
                    id="sle_year">
                    <option>ឆ្នាំសិក្សា</option>
                    {dbeGetYear.map((option) => (
                      <option key={option.yearEn} value={option.yearEn}>
                        {option.yearKh}
                      </option>
                    ))}
                  </select>
                  <select className="text-center"
                    value={upgradeGrade}
                    onChange={e => {
                      localStorage.setItem('upgradeGrade', e.target.value)
                      setupgradeGrade(e.target.value)
                    }}
                    style={{
                      color: "#23074d",
                      lineHeight: "1",
                      borderRight: "0",
                      borderLeft: "0",
                      borderTop: "0",
                      borderBottom: "2px solid #005AA7",
                      fontWeight: "bold",
                      background: "transparent",
                      width: "6rem"
                    }}
                    id="sle_grade">
                    <option>ថ្នាក់ទី</option>
                    {sleGrade.map((option) => (
                      <option key={option.clEn} value={option.clEn}>
                        {option.clKh}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="modal-body">
                  <div style={{ overflow: 'auto' }}>
                    <table className="table table-bordered border-dark"

                    >
                      <thead className="table-bordered border-dark">
                        <tr className="table-bordered border-dark">
                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">ល.រ</th>
                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">ID</th>
                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">គោត្តនាមនិងនាម</th>
                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">អក្សរឡាតាំង</th>

                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">ភេទ(KH)</th>
                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">ភេទ(EN)</th>
                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">ថ្នាក់</th>
                          <th
                            style={{
                              backgroundColor: "rgb(23, 116, 153)",
                              color: "white"
                            }}
                            className="text-center table-bordered border-dark">កម្រិតអង់គ្លេស</th>

                        </tr>
                      </thead>
                      <tbody>

                        {selectedUsers.map((data, index) => {
                          const btnUpgra = document.querySelector('#btnUpgrade')
                          btnUpgra.addEventListener('click', () => {
                            var id = data.id
                            var fullname = data.fullname
                            var gender = data.gender
                            var en_gender = data.en_gender
                            var en_level = data.en_level
                            var name_latin = data.name_latin
                            var user_picture_url = data.user_picture_url
                            var user_identity_url = data.user_identity_url
                            var user_grade = upgradeGrade.replace(/^0+/, '')
                            if (!user_picture_url) {
                              user_picture_url = ''

                            } else {
                              user_picture_url = data.user_picture_url

                            }
                            if (!user_identity_url) {
                              user_identity_url = ''

                            } else {
                              user_identity_url = data.user_identity_url

                            }
                            if (!en_gender) {
                              en_gender = ''
                            }
                            if (!en_level) {
                              en_level = ''
                            }
                            if (id) {
                              update(ref(db, `/SalaMOM/classes/${upgradeYear}/${upgradeGrade.replace(/^0+/, '')}/` + id), {
                                id: id,
                                fullname: fullname,
                                gender: gender,
                                en_gender: en_gender,
                                en_level: en_level,
                                name_latin: name_latin,
                                user_grade: user_grade,
                                user_picture_url: user_picture_url,
                                user_identity_url: user_identity_url,
                              });
                              Swal.fire({
                                text: "ព័ត៍មានបានបញ្ជូនទៅថ្នាក់ថ្មីត្រឹមត្រូវ!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                              });
                            }

                          })

                          return (
                            <>
                              <tr className="text-center table-bordered border-dark">
                                <td className="text-center table-bordered border-dark">{index + 1}</td>
                                <td className="text-center table-bordered border-dark">{data.id}</td>
                                <td className="text-center table-bordered border-dark">{data.fullname}</td>
                                <td className="text-center table-bordered border-dark">{data.name_latin}</td>
                                <td className="text-center table-bordered border-dark">{data.gender}</td>
                                <td className="text-center table-bordered border-dark">{data.en_gender}</td>
                                <td className="text-center table-bordered border-dark">{data.user_grade}</td>
                                <td className="text-center table-bordered border-dark">{data.en_level}</td>
                              </tr>
                            </>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button id="btnUpgrade"
                    ref={btnUpgrade}
                    className="btn btn-success btn-rounded btn-fw btn-sm">Upgrade</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="good_students" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h5 className="modal-title fw-bold" id="myModalLabel">
                    តារាងកិត្តិយស ថ្នាក់ទី {dbGade.replace(/\s/g, "")}
                  </h5>

                  <div>
                    <select
                      value={goodGood}
                      onChange={e => {
                        localStorage.setItem('goodGood', e.target.value)
                        setgoodGood(e.target.value)
                      }}
                      className="text-center">
                      <option>ជ្រើសរើសខែ</option>
                      <option value='oct'>តុលា</option>
                      <option value='nov'>វិច្ឆិកា</option>
                      <option value='dec'>ធ្នូ</option>
                      <option value='jan'>មករា</option>
                      <option value='feb'>កុម្ភៈ</option>
                      <option value='mar'>មីនា</option>
                      <option value='apr'>មេសា-ឧសភា</option>
                      <option value='jun'>មិថុនា</option>
                      <option value='jul'>កក្កដា</option>
                      <option value='firstseme'>ឆមាសទី១</option>
                      <option value='firstsemeresult'>ប្រចាំឆមាសទី១</option>
                      <option value='secnodseme'>ឆមាសទី២</option>
                      <option value='secnodsemeresult'>ប្រចាំឆមាសទី២</option>
                      <option value='finalyear'>ប្រចាំឆ្នាំ</option>
                    </select>
                  </div>
                  <button id="btnUpgrade"
                    onClick={PrintAward}
                    className="btn btn-success btn-rounded btn-fw btn-sm">Printing</button>
                  <input type="date" id="printDateAward" value={awarPrintDate} onChange={e => { setawarPrintDate(e.target.value) }} />

                </div>
                <div className="modal-body">
                  <TestPreview />
                </div>

                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    //   </div>
    // </div>

  )
}

export default Students
