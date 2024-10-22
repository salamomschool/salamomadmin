import React, { useEffect, useState, useRef } from "react";
import firebase from '../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowThickBottom, cilCircle, cilDataTransferDown, cilPen, cilPlus, cilSearch, cilTrash, cilUser } from "@coreui/icons";
import { CButton, CModal, CModalBody, CModalFooter, CTable, CTableBody, CTableDataCell, CTableHead, CTableRow } from "@coreui/react";

const MonthScore = () => {
  //Array
  const [dataArray, setdataArray] = useState([])
  const [dataStaff, setdataStaff] = useState([])
  const [arrayGrade, setarrayGrade] = useState([])
  const [arrayAdmire, setarrayAdmire] = useState([])

  const clKh = useRef(null);//Get from select and from input
  const clEn = useRef(null);
  // const Level = useRef(null);
  const user_url = useRef(null);

  const [myId, setmyId] = useState('')
  const [teacherName, setteacherName] = useState('')
  const [teacherNameEn, setteacherNameEn] = useState('')
  const [Level, setLevel] = useState('')
  const [teacherAdmire, setteacherAdmire] = useState('')
  const [selectGrade, setselectGrad] = useState(localStorage.getItem('New_class_level') || 'default')
  const [selectGradeAdmire, setselectGradAdmire] = useState(localStorage.getItem('New_class_level_admire') || 'default')
  const [dbGradeAd, setdbGradeAd] = useState(localStorage.getItem('dbGradeNewAdmire') || 'default')
  const [teacherPosition, setteacherPosition] = useState('')
  const [idAdmire, setidAdmire] = useState('')

  const dataLevel = useRef(null)

  const BtnUpdate = useRef('')
  const BtnPush = useRef('')
  const BtnDelete = useRef('')
  const db = getDatabase();
  const dbStaff = ref(db, `SalaMOM/staffs`);
  const dbPrimaryClass = ref(db, `/SalaMOM/tools/class/បឋមសិក្សា`);
  const dbSecondaryClass = ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ`);
  const dbHighClass = ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ`);
  const dbGradeRefPrimary = ref(db, `/SalaMOM/tools/class/បឋមសិក្សា`);
  const dbGradeRefSecondary = ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ`);
  const dbGradeRefHigh = ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ`);
  const dbAdmirePrimary = ref(db, `/SalaMOM/tools/class/បឋមសិក្សា/${dbGradeAd}/t_admire`);
  const dbAdmireSecondary = ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ/${dbGradeAd}/t_admire`);
  const dbAdmireHigh = ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ/${dbGradeAd}/t_admire`);

  useEffect(() => {
    onValue(dbStaff, (data) => {
      const dataSet = data.val();
      setdataStaff(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })
    if (selectGrade == 'បឋមសិក្សា') {
      onValue(dbPrimaryClass, (data) => {
        const dataSet = data.val();
        setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
      })
      onValue(dbGradeRefPrimary, (data) => {
        const dataSet = data.val();
        setarrayGrade(dataSet ? Object.values(dataSet) : []); // Convert object to array
      })
      onValue(dbAdmirePrimary, (data) => {
        const dataSet = data.val();
        let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array
        // dataAllGrades.sort(function (a, b) { return b.fullname - a.fullname });

        dataAllGrades.sort((a, b) => {
          if (a.position < b.position) return -1;
          if (a.position > b.position) return 1;
          return 0;
        });

        setarrayAdmire(dataAllGrades); // Convert object to array
      })

    }
    if (selectGrade == 'អនុវិទ្យាល័យ') {
      onValue(dbSecondaryClass, (data) => {
        const dataSet = data.val();
        setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
      })
      onValue(dbGradeRefSecondary, (data) => {
        const dataSet = data.val();
        setarrayGrade(dataSet ? Object.values(dataSet) : []); // Convert object to array
      })
      onValue(dbAdmireSecondary, (data) => {
        const dataSet = data.val();
        let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array
        // dataAllGrades.sort(function (a, b) { return b.fullname - a.fullname });

        dataAllGrades.sort((a, b) => {
          if (a.position < b.position) return -1;
          if (a.position > b.position) return 1;
          return 0;
        });

        setarrayAdmire(dataAllGrades);
      })

    }
    if (selectGrade == 'វិទ្យាល័យ') {
      onValue(dbHighClass, (data) => {
        const dataSet = data.val();
        setdataArray(dataSet ? Object.values(dataSet) : []); // Convert object to array
      })
      onValue(dbGradeRefHigh, (data) => {
        const dataSet = data.val();
        setarrayGrade(dataSet ? Object.values(dataSet) : []); // Convert object to array
      })
      onValue(dbAdmireHigh, (data) => {
        const dataSet = data.val();
        let dataAllGrades = dataSet ? Object.values(dataSet) : []; // Convert object to array
        // dataAllGrades.sort(function (a, b) { return b.fullname - a.fullname });

        dataAllGrades.sort((a, b) => {
          if (a.position < b.position) return -1;
          if (a.position > b.position) return 1;
          return 0;
        });

        setarrayAdmire(dataAllGrades);
      })

    }

    clKh.current.value = myId
    BtnUpdate.current.style.display = 'none'
  }, [selectGrade])

  useEffect(() => {
    if (selectGrade) {
      dataLevel.current = selectGrade
    }

  }, [])
  const subKh = (e) => {
    e.preventDefault()
    clKh.current.value = e.target.value;
    setmyId(e.target.value)
  }
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
        setteacherName(label)
        user_url.current.value = imageUrl
        dropdownContent.classList.remove('show');
      }
    });
  }, 500);
  setTimeout(() => {
    //Select username and img url
    const dropdownContent = document.querySelector('.dropdown-content-en');
    const selectedLabelInput = document.getElementById('user_teacher_id_en');


    dropdownContent.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const label = event.target.dataset.label;
        selectedLabelInput.value = label;
        setteacherNameEn(label)
        dropdownContent.classList.remove('show');
      }
    });
  }, 500);


  // //Select teacher name for admire
  // useEffect(() => {
  //   const dropdownContent = document.querySelector('.dropdown-content-teacher');
  //   const selectedLabelInput = document.getElementById('user_teacher_admire');

  //   const handleClick = (event) => {
  //     if (event.target.tagName === 'LI') {
  //       const label = event.target.dataset.label;
  //       let currentValue = selectedLabelInput.value.split(', ').map(item => item.trim());

  //       if (!currentValue.includes(label)) {
  //         if (currentValue.length === 1 && currentValue[0] === '') {
  //           currentValue = []; // Handle initial empty value
  //         }
  //         const newValue = currentValue.length ? `${selectedLabelInput.value}, ${label}` : `${label} `;
  //         selectedLabelInput.value = newValue;
  //         setteacherAdmire(newValue);
  //       }
  //       dropdownContent.classList.remove('show');
  //     }
  //   };

  //   dropdownContent.addEventListener('click', handleClick);

  //   return () => {
  //     dropdownContent.removeEventListener('click', handleClick);
  //   };
  // }, [])

  const handleShowData = (e) => {
    const getclEn = e.target.dataset.clen
    const getclKh = e.target.dataset.clkh
    const getlevel = e.target.dataset.level
    const getpicture = e.target.dataset.picture
    const getTEn = e.target.dataset.ten
    // const getadmire = e.target.dataset.admire
    const getheadteacher = e.target.dataset.headteacher
    clKh.current.value = getclKh
    clEn.current.value = getclEn

    if (user_url.current) {
      user_url.current.value = getpicture
    } else {
      user_url.current.value = ''
    }
    if (!getheadteacher) {
      setteacherName('')
    } else {
      setteacherName(getheadteacher)

    }
    if (!getTEn) {
      setteacherNameEn('')
    } else {
      setteacherNameEn(getTEn)

    }
    // if (!getadmire) {
    //   setteacherAdmire('')
    // } else {
    //   setteacherAdmire(getadmire)

    // }
    setLevel(getlevel)
    // setteacherAdmire(getadmire);
    setmyId(getclKh)

    BtnPush.current.style.display = 'none'
    BtnUpdate.current.style.display = 'inline-block'
    BtnDelete.current.style.display = 'inline-block'
  }

  const emptyFill = () => {
    BtnPush.current.style.display = 'inline-block'
    BtnUpdate.current.style.display = 'none'
    BtnDelete.current.style.display = 'none'

    clKh.current.value = null
    clEn.current.value = null
    // Level.current.value = selectGrade
    setLevel(selectGrade)
    setteacherNameEn('')

    // setteacherAdmire('');

  }
  const setData = () => {
    const db = getDatabase();
    if (myId) {
      if (selectGrade === 'បឋមសិក្សា') {
        Swal.fire({
          text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          set(ref(db, `/SalaMOM/tools/class/បឋមសិក្សា/` + myId), {
            id: clKh.current.value,
            level: Level,
            clEn: clEn.current.value,
            clKh: clKh.current.value,
            head_teacher: teacherName,
            picture: user_url.current.value,
            t_admireEn: teacherNameEn,
          });

          clKh.current.value = null
          clEn.current.value = null
          user_url.current.value = null
          setLevel(selectGrade)
          setteacherName('')
          setteacherNameEn('')
        } catch (error) {
          console.log(error);

        }


      }
      if (selectGrade === 'អនុវិទ្យាល័យ') {
        Swal.fire({
          text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          set(ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ/` + myId), {
            id: clKh.current.value,
            level: Level,
            clEn: clEn.current.value,
            clKh: clKh.current.value,
            head_teacher: teacherName,
            picture: user_url.current.value,
            t_admireEn: teacherNameEn,

          });
          clKh.current.value = null
          clEn.current.value = null
          user_url.current.value = null
          setLevel(selectGrade)
          setteacherName('')
          setteacherNameEn('')
        } catch (error) {
          console.log(error);

        }


      }
      if (selectGrade === 'វិទ្យាល័យ') {
        Swal.fire({
          text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });

        try {
          set(ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ/` + myId), {
            id: clKh.current.value,
            level: Level,
            clEn: clEn.current.value,
            clKh: clKh.current.value,
            head_teacher: teacherName,
            picture: user_url.current.value,
            t_admireEn: teacherNameEn,

          });
          clKh.current.value = null
          clEn.current.value = null
          user_url.current.value = null
          setLevel(selectGrade)

          setteacherName('')
          setteacherNameEn('')
        } catch (error) {
          console.log(error);

        }


      }
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
      if (selectGrade === 'បឋមសិក្សា') {
        Swal.fire({
          text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          update(ref(db, `/SalaMOM/tools/class/បឋមសិក្សា/` + myId), {
            id: clKh.current.value,
            level: Level,
            clEn: clEn.current.value,
            clKh: clKh.current.value,
            head_teacher: teacherName,
            picture: user_url.current.value,
            t_admireEn: teacherNameEn,

          });
          clKh.current.value = null
          clEn.current.value = null
          user_url.current.value = null
          setLevel(selectGrade)
          setteacherName('')
          setteacherNameEn('')
        } catch (error) {
          console.log(error);

        }


      }
      if (selectGrade === 'អនុវិទ្យាល័យ') {
        Swal.fire({
          text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          update(ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ/` + myId), {
            id: clKh.current.value,
            level: Level,
            clEn: clEn.current.value,
            clKh: clKh.current.value,
            head_teacher: teacherName,
            picture: user_url.current.value,
            t_admireEn: teacherNameEn,

          });
          clKh.current.value = null
          clEn.current.value = null
          user_url.current.value = null
          setLevel(selectGrade)

          setteacherName('')
          setteacherNameEn('')
        } catch (error) {
          console.log(error);

        }


      }
      if (selectGrade === 'វិទ្យាល័យ') {
        Swal.fire({
          text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          update(ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ/` + myId), {
            id: clKh.current.value,
            level: Level,
            clEn: clEn.current.value,
            clKh: clKh.current.value,
            head_teacher: teacherName,
            picture: user_url.current.value,
            t_admireEn: teacherNameEn,

          });
          clKh.current.value = null
          clEn.current.value = null
          setLevel(selectGrade)
          user_url.current.value = null
          setteacherName('')
          setteacherNameEn('')
        } catch (error) {
          console.log(error);

        }


      }
    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនកែត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });

    }

  }

  const deleteData = (e) => {
    if (myId) {
      if (selectGrade === 'បឋមសិក្សា') {
        Swal.fire({
          text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          remove(ref(db, `/SalaMOM/tools/class/បឋមសិក្សា/` + myId));
          clKh.current.value = null
          clEn.current.value = null
          setLevel(selectGrade)
          user_url.current.value = null

          setteacherName('')
          setteacherNameEn('')
        } catch (error) {
          console.log(error);

        }


      }
      if (selectGrade === 'អនុវិទ្យាល័យ') {
        Swal.fire({
          text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          remove(ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ/` + myId));
          clKh.current.value = null
          clEn.current.value = null
          setLevel(selectGrade)
          user_url.current.value = null
          setteacherName('')
          setteacherNameEn('')

        } catch (error) {
          console.log(error);

        }

      }
      if (selectGrade === 'វិទ្យាល័យ') {
        Swal.fire({
          text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
          icon: "success",
          showConfirmButton: false,
          timer: 2200,
        });
        try {
          remove(ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ/` + myId));
          clKh.current.value = null
          clEn.current.value = null
          setLevel(selectGrade)
          user_url.current.value = null
          setteacherName('')
          setteacherNameEn('')

        } catch (error) {
          console.log(error);

        }

      }
    } else {
      Swal.fire({
        text: "ព័ត៍មានមិនលុបត្រឹមត្រូវ!",
        icon: "error",
        showConfirmButton: false,
        timer: 2200,
      });

    }
  }
  useEffect(() => {
    localStorage.setItem('New_class_level', selectGrade)
    setselectGrad(localStorage.getItem('New_class_level') || 'default')
  }, [selectGrade])
  useEffect(() => {
    localStorage.setItem('New_class_level_admire', selectGradeAdmire)
    setselectGrad(localStorage.getItem('New_class_level_admire') || 'default')
  }, [selectGradeAdmire])

  const LevelSelect = () => {
    return (
      <div>
        <select className="btn btn-primary btn-sm text-center me-3"
          value={selectGrade}
          onChange={(e) => setselectGrad(e.target.value)}
          style={{
            color: "white",
            lineHeight: "1",
          }}
          id="sle_level_admire">
          <option value='កម្រិតថ្នាក់'>
            កម្រិតថ្នាក់
          </option>
          <option value='បឋមសិក្សា'>
            បឋមសិក្សា
          </option>
          <option value='អនុវិទ្យាល័យ'>
            អនុវិទ្យាល័យ
          </option>
          <option value='វិទ្យាល័យ'>
            វិទ្យាល័យ
          </option>
        </select>
      </div>
    );
  };
  const LevelSelectAdmire = () => {
    return (
      <div>
        <select className="btn btn-primary btn-sm text-center me-3"
          value={selectGradeAdmire}
          onChange={(e) => setselectGradAdmire(e.target.value)}
          style={{
            color: "white",
            lineHeight: "1",
          }}
          id="sle_level">
          <option value='កម្រិតថ្នាក់'>
            កម្រិតថ្នាក់
          </option>
          <option value='បឋមសិក្សា'>
            បឋមសិក្សា
          </option>
          <option value='អនុវិទ្យាល័យ'>
            អនុវិទ្យាល័យ
          </option>
          <option value='វិទ្យាល័យ'>
            វិទ្យាល័យ
          </option>
        </select>
      </div>
    );
  };
  const grade = (d) => {
    let data = d.target.value;
    setdbGradeAd(d.target.value)
    localStorage.setItem('dbGradeNewAdmire', data)
    window.location.reload()
  }

  const SelectGrade = () => {

    return (
      <>
        <select
          value={dbGradeAd}
          onChange={grade}
          style={{ color: 'white' }}
          className="btn btn-success btn-sm text-center me-3">
          <option>ជ្រើសរើសថ្នាក់</option>
          {arrayGrade.map((option) => (
            <option key={option.clEn} value={option.clKh}>
              {option.clKh}
            </option>
          ))}
        </select>
      </>
    )
  }

  //set ID for admire
  useEffect(() => {
    const numAdmire = arrayAdmire[arrayAdmire.length - 1];
    const number = Math.floor(1000 + Math.random() * 9000);
    const idnum = `ad${number}`;
    setidAdmire(idnum);

  }, [arrayAdmire])

  const listDataClick = (e) => {
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;
    const position = e.target.dataset.pos;
    if (id) {
      setidAdmire(id);
      setteacherPosition(position);
      setteacherAdmire(name);
    }
  }


  const SubmitForm = () => {

    //Select teacher name for admire
    useEffect(() => {
      const dropdownContent = document.querySelector('.dropdown-content-teacher');
      const selectedLabelInput = document.getElementById('user_teacher_admire');

      const handleClick = (event) => {
        if (event.target.tagName === 'LI') {
          const label = event.target.dataset.label;
          selectedLabelInput.value = label;
          setteacherAdmire(label)
          dropdownContent.classList.remove('show');
        }
      };

      dropdownContent.addEventListener('click', handleClick);

      return () => {
        dropdownContent.removeEventListener('click', handleClick);
      };
    }, [])
    const selectPosition = [
      { value: ``, label: 'ជ្រើសរើសតួនាទី' },
      { value: `1`, label: 'វិន័យ' },
      { value: `2`, label: 'សីលធម៌' },
      { value: `3`, label: 'ការខិតខំរៀនសូត្រ' },
      { value: `4`, label: 'ធម្មតា' },
    ]
    const setDataAdmire = () => {
      if (idAdmire) {
        if (teacherAdmire) {

          if (selectGrade === 'បឋមសិក្សា') {
            Swal.fire({
              text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
              icon: "success",
              showConfirmButton: false,
              timer: 2200,
            });
            try {
              update(ref(db, `/SalaMOM/tools/class/បឋមសិក្សា/${dbGradeAd}/t_admire/` + idAdmire), {
                id: idAdmire,
                position: teacherPosition,
                tname: teacherAdmire,
              });
              setteacherPosition('');
              setteacherAdmire('');
            } catch (error) {
              console.log(error);
            }
          }
          if (selectGrade === 'អនុវិទ្យាល័យ') {
            Swal.fire({
              text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
              icon: "success",
              showConfirmButton: false,
              timer: 2200,
            });
            try {
              update(ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ/${dbGradeAd}/t_admire/` + idAdmire), {
                id: idAdmire,
                position: teacherPosition,
                tname: teacherAdmire,
              });
              setteacherPosition('');
              setteacherAdmire('');
            } catch (error) {
              console.log(error);
            }
          }
          if (selectGrade === 'វិទ្យាល័យ') {
            Swal.fire({
              text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
              icon: "success",
              showConfirmButton: false,
              timer: 2200,
            });
            try {
              update(ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ/${dbGradeAd}/t_admire/` + idAdmire), {
                id: idAdmire,
                position: teacherPosition,
                tname: teacherAdmire,
              });
              setteacherPosition('');
              setteacherAdmire('');
            } catch (error) {
              console.log(error);
            }
          }

        } else {
          Swal.fire({
            text: "ព័ត៍មានមិនត្រឹមត្រូវ!",
            icon: "error",
            showConfirmButton: false,
            timer: 2200,
          });
        }

      }
    }

    const deleteDataAdmire = () => {
      if (idAdmire) {
        if (teacherAdmire) {
          if (selectGrade === 'បឋមសិក្សា') {
            Swal.fire({
              title: "តើអ្នកប្រាកដឬ?",
              showCancelButton: true,
              confirmButtonText: "លុប",
            }).then((result) => {
              if (result.isConfirmed) {
                remove(ref(db, `/SalaMOM/tools/class/បឋមសិក្សា/${dbGradeAd}/t_admire/` + idAdmire));
                Swal.fire({
                  text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2200,
                });
              }
            });
          }
          if (selectGrade === 'វិទ្យាល័យ') {
            Swal.fire({
              title: "តើអ្នកប្រាកដឬ?",
              showCancelButton: true,
              confirmButtonText: "លុប",
            }).then((result) => {
              if (result.isConfirmed) {
                remove(ref(db, `/SalaMOM/tools/class/វិទ្យាល័យ/${dbGradeAd}/t_admire/` + idAdmire));
                Swal.fire({
                  text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2200,
                });
              }
            });
          }
          if (selectGrade === 'អនុវិទ្យាល័យ') {
            Swal.fire({
              title: "តើអ្នកប្រាកដឬ?",
              showCancelButton: true,
              confirmButtonText: "លុប",
            }).then((result) => {
              if (result.isConfirmed) {
                remove(ref(db, `/SalaMOM/tools/class/អនុវិទ្យាល័យ/${dbGradeAd}/t_admire/` + idAdmire));
                Swal.fire({
                  text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2200,
                });
              }
            });
          }

        } else {
          Swal.fire({
            text: "ព័ត៍មានលុបមិនត្រឹមត្រូវ!",
            icon: "error",
            showConfirmButton: false,
            timer: 2200,
          });
        }

      }
    }
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              {/* Select name */}
              <div className="col-md-6">
                <div className="form-group row">
                  <p>
                    <div className="form-group row">
                      <div className="dropdown dropup">
                        <button className="btn dropdown-toggle" type="button"
                          id="dropdownMenuName" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          ជ្រើសរើសគ្រូ
                        </button>
                        <ul className="dropdown-menu menu-lg-scroll dropdown-content-teacher"
                          aria-labelledby="dropdownMenuName" id="select_teacher">
                          {dataStaff.map((d, index) => (
                            <li className="dropdown-item" data-label={d.id} data-image={d.get_url_pic}>
                              <span className="me-3">{index + 1}.</span>
                              {SetPicture(d)}
                              {d.id}</li>
                          ))}
                        </ul>
                      </div>
                      <label
                        className="col-sm-3 fw-bold">គ្រូទទួលបន្ទុកប័ណ្ណសរសើរ</label>
                      <div className="col-sm-9">
                        <input className="form-control" type="text"
                          value={teacherAdmire}
                          onInput={e => { setteacherAdmire(e.target.value) }}
                          name="user[username]" id="user_teacher_admire" />
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 fw-bold">តួនាទី</label>
                  <div className="col-sm-9">
                    <select className="form-select text-center"
                      value={teacherPosition}
                      onChange={e => { setteacherPosition(e.target.value) }}
                    >
                      {selectPosition.map((d, index) => {
                        return (
                          <>
                            <option key={index} value={d.value}>{d.label}</option>
                          </>
                        )
                      })}
                    </select>

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-3 fw-bold">ID</label>
                  <div className="col-sm-9">
                    <input value={idAdmire} type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <CButton
                    onClick={setDataAdmire}
                    style={{ color: "white" }}
                    type="button" className="btn btn-success btn-sm me-2">
                    <CIcon icon={cilCircle} />   បញ្ចូល / កែ
                  </CButton>
                  {/* <CButton
                    onClick={UpdateData}
                    style={{ color: "white" }}
                    type="button" className="btn btn-warning btn-sm me-2">
                    <CIcon icon={cilPen} />   កែ
                  </CButton> */}
                  <button
                    onClick={deleteDataAdmire}
                    style={{ color: 'white' }}
                    type="button" className="btn btn-danger btn-sm me-2">
                    <CIcon icon={cilTrash} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <h4 className="card-title">បង្កើតថ្នាក់ថ្មី</h4>
                  <div className="d-flex justify-content-center">
                    <LevelSelect />
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
                        className="border-dark text-center">ថ្នាក់ជាភាសារខ្មែរ</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">ថ្នាក់ជាភាសារអង់គ្លេស</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">គ្រូបន្ទុកថ្នាក់</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">កម្រិតថ្នាក់</CTableDataCell>

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
                          data-clkh={d.clKh}
                          data-clen={d.clEn}
                          data-level={d.level}
                          data-picture={d.picture}
                          data-admire={d.t_admire}
                          data-ten={d.t_admireEn}
                          data-headteacher={d.head_teacher}
                          data-clid={d.id}
                        >{d.clKh}</td>
                        <td className="text-center">{d.clEn}</td>
                        <td className="text-center">{d.head_teacher}</td>
                        <td className="text-center">{d.level}</td>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
                <div className="modal fade" id="AddNewSub" tabIndex="-1"
                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="row">


                          <div className="col-md-6">
                            <div className="form-group row">
                              <p>
                                <div className="form-group row">
                                  <div className="dropdown dropup">
                                    <button className="btn dropdown-toggle" type="button"
                                      id="dropdownMenuName" data-bs-toggle="dropdown"
                                      aria-expanded="false">
                                      ជ្រើសរើសគ្រូ
                                    </button>
                                    <ul className="dropdown-menu menu-lg-scroll dropdown-content"
                                      aria-labelledby="dropdownMenuName" id="select_username">
                                      {dataStaff.map((d, index) => (
                                        <li className="dropdown-item" data-label={d.id} data-image={d.get_url_pic}>
                                          <span className="me-3">{index + 1}.</span>
                                          {SetPicture(d)}
                                          {d.id}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <label
                                    className="col-sm-3 fw-bold">គ្រូបន្ទុកថ្នាក់</label>
                                  <div className="col-sm-9">
                                    <input className="form-control" type="text"
                                      value={teacherName}
                                      onInput={e => { setteacherName(e.target.value) }}
                                      name="user[username]" id="user_teacher_id" />
                                  </div>
                                </div>


                                <input className="form-control" type="hidden"
                                  ref={user_url}
                                  name="user[username]" id="user_url" />

                              </p>
                            </div>
                          </div>


                          <div className="col-md-6">
                            <div className="form-group row">
                              <p>
                                <div className="form-group row">
                                  <div className="dropdown dropup">
                                    <button className="btn dropdown-toggle" type="button"
                                      id="dropdownMenuName" data-bs-toggle="dropdown"
                                      aria-expanded="false">
                                      ជ្រើសរើសគ្រូ
                                    </button>
                                    <ul className="dropdown-menu menu-lg-scroll dropdown-content-en"
                                      aria-labelledby="dropdownMenuName" id="select_username_en">
                                      {dataStaff.map((d, index) => (
                                        <li className="dropdown-item" data-label={d.id} data-image={d.get_url_pic}>
                                          <span className="me-3">{index + 1}.</span>
                                          {SetPicture(d)}
                                          {d.id}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <label
                                    className="col-sm-3 fw-bold">គ្រូអង់គ្លេស</label>
                                  <div className="col-sm-9">
                                    <input className="form-control" type="text"
                                      value={teacherNameEn}
                                      onInput={e => { setteacherNameEn(e.target.value) }}
                                      name="user[username]" id="user_teacher_id_en" />
                                  </div>
                                </div>

                              </p>
                            </div>
                          </div>


                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                className="col-sm-3 fw-bold">ថ្នាក់ជាភាសារខ្មែរ</label>
                              <div className="col-sm-9">
                                <input
                                  onChange={(e) => { setmyId(e.target.value) }}
                                  ref={clKh} type="text" className="form-control" id="subKh" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                className="col-sm-3 fw-bold">ថ្នាក់ជាភាសារអង់គ្លេស</label>
                              <div className="col-sm-9">
                                <input ref={clEn} type="text" className="form-control" id="subEn" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 fw-bold">កម្រិតថ្នាក់</label>
                              <div className="col-sm-9">
                                <input value={Level} type="text" className="form-control" id="subAbr" />
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
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card card-primary card-outline">
            <div className="card-body">
              <div className="text-center">
                <div className="row">
                  <h4 className="card-title">បញ្ជីឈ្មោះប័ណ្ណសរសើរ</h4>
                  <div className="d-flex justify-content-center">
                    <div className="container">
                      <div className="row text-center">
                        <div className="col text-end">
                          <LevelSelectAdmire />
                        </div>
                        <div className="col text-start">
                          <SelectGrade />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col align-items-center">
                          <SubmitForm />

                        </div>
                      </div>
                    </div>
                    {/* <button
                      onClick={emptyFill}
                      data-bs-toggle="modal"
                      data-bs-target="#AddNewSub"
                      style={{ color: 'white' }}
                      id="btn_upload" type="button" className="btn btn-success btn-sm">
                      <CIcon icon={cilPlus} /> បង្កើតថ្មី</button> */}
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
                        className="border-dark text-center">ឈ្មោះគ្រូ</CTableDataCell>
                      <CTableDataCell
                        style={{
                          backgroundColor: "rgb(23, 116, 153)",
                          color: "white"
                        }}
                        className="border-dark text-center">តួនាទី</CTableDataCell>


                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {arrayAdmire.map((d, index) => {

                      return (
                        <>
                          <CTableRow key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-center"
                              onClick={listDataClick}
                              data-id={d.id}
                              data-name={d.tname}
                              data-pos={d.position}
                            >{d.tname}</td>
                            <td className="text-center">
                              {d.position == '1' ? 'វិន័យ' :
                                d.position == '2' ? 'សីលធម៌' :
                                  d.position == '3' ? 'ការខិតខំរៀនសូត្រ' :
                                    d.position == '4' ? 'ធម្មតា' : ''}
                            </td>
                          </CTableRow>
                        </>
                      )
                    })}

                  </CTableBody>
                </CTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MonthScore
