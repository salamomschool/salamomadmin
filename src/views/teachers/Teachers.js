import React, { useEffect, useState, useRef } from "react";
import firebase from '../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowThickBottom, cilDataTransferDown, cilPlus, cilSave, cilSearch, cilUser } from "@coreui/icons";
import { createPopper } from '@popperjs/core';
import { saveAs } from 'file-saver';

const Teachers = () => {
  //Array set
  const [dbGetStaffs, setdbGetStaffs] = useState([]);
  const [dbGetStaffsBackup, setdbGetStaffsBackup] = useState([]);
  const [levelPrimary, setlevelPrimary] = useState('');
  const [levelSecondary, setlevelSecondary] = useState('');
  const [levelKinder, setlevelKinder] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  //Btn set
  const btnAdd = useRef('');
  const btnUp = useRef('');
  const btnDe = useRef('');

  //Set ref
  const NameEn = useRef(null);
  const db = getDatabase();

  useEffect(() => {
    const dbStaffs = ref(db, `/SalaMOM/staffs`);

    onValue(dbStaffs, (data) => {
      const dataSet = data.val();
      setdbGetStaffsBackup(dataSet);
      const sortedJobs = Object.values(dataSet).sort((a, b) => {
        return a.teacher_level.localeCompare(b.teacher_level);
      });
      setdbGetStaffs(sortedJobs ? Object.values(sortedJobs) : []); // Convert object to array
    })
  }, []);

  const searchInput = document.getElementById("searchInput");
  const tbody = document.querySelector("table tbody");
  setTimeout(() => {

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

  // /Set Selete subjects
  setTimeout(() => {
    const selectedSubjectsInput = document.getElementById("selectedSubjects");
    const subjectList = document.getElementById("subjectList");
    subjectList.addEventListener("change", (event) => {
      const checkedSubjects = [];
      const checkboxes = subjectList.querySelectorAll("input[type='checkbox']");
      for (const checkbox of checkboxes) {
        if (checkbox.checked) {
          checkedSubjects.push(checkbox.value);
        }
      }
      selectedSubjectsInput.value = checkedSubjects.join(" "); // Join selected values with comma
      setgeneral_kindergaten(checkedSubjects.join(" "))
      // setlevelKinder(checkedSubjects)
    });
  }, 250);

  setTimeout(() => {
    const selectedSubjectsInput2 = document.getElementById("selectedSubjects2");
    const subjectList2 = document.getElementById("subjectList2");
    subjectList2.addEventListener("change", (event) => {
      const checkedSubjects = [];
      const checkboxes = subjectList2.querySelectorAll("input[type='checkbox']");
      for (const checkbox of checkboxes) {
        if (checkbox.checked) {
          checkedSubjects.push(checkbox.value);
        }
      }
      selectedSubjectsInput2.value = checkedSubjects.join(" "); // Join selected values with comma
      setgeneral_primary(checkedSubjects.join(" "))
      // setlevelPrimary(checkedSubjects)

    });

  }, 250);


  setTimeout(() => {
    const selectedSubjectsInput3 = document.getElementById("selectedSubjects3");
    const subjectList3 = document.getElementById("subjectList3");
    subjectList3.addEventListener("change", (event) => {
      const checkedSubjects = [];
      const checkboxes = subjectList3.querySelectorAll("input[type='checkbox']");
      for (const checkbox of checkboxes) {
        if (checkbox.checked) {
          checkedSubjects.push(checkbox.value);
        }
      }
      selectedSubjectsInput3.value = checkedSubjects.join(" "); // Join selected values with comma
      setgeneral_secondary(checkedSubjects.join(" "))
      // setlevelSecondary(checkedSubjects)

    });

  }, 250);

  //Save data to json file
  const currentDate = new Date().toLocaleDateString('en-GB');
  const saveDataAll = () => {
    const blob = new Blob([JSON.stringify(dbGetStaffsBackup, null, 2)], { type: 'application/json' });
    saveAs(blob, `${currentDate}_បញ្ជីព័ត៌មានផ្ទាល់ខ្លួនបុគ្គលិក.json`);
  };

  //Restore data
  const uploadFileToFirebase = () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonData = JSON.parse(event.target.result);
      Swal.fire({
        title: "តើអ្នកប្រាកដឬ? សូមត្រួពិនិត្យទិន្ន័យឲ្យបានច្បាស់មុននិងបញ្ចូល!!",
        showCancelButton: true,
        confirmButtonText: "Restore",
      }).then((result) => {
        if (result.isConfirmed) {
          const backupRef = ref(db, `/SalaMOM/staffs/`);
          set(backupRef, jsonData)
            .then(() => {
              console.log('Data uploaded successfully');
            })
            .catch((error) => {
              console.error('Error uploading data:', error);
            });
        }
      });



    };
    reader.readAsText(selectedFile);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const [user_id, setuser_id] = useState('');
  const [fullname, setfullname] = useState('');
  const [user_short_name, setuser_short_name] = useState('');
  const [position, setposition] = useState('');
  const [name_latin, setname_latin] = useState('');
  const [gender, setgender] = useState('');
  const [date_of_birth, setdate_of_birth] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [identity_card_number, setidentity_card_number] = useState('');
  const [village, setvillage] = useState('');
  const [district, setdistrict] = useState('');
  const [commune, setcommune] = useState('');
  const [province, setprovince] = useState('');
  const [place_of_birth, setplace_of_birth] = useState('');
  const [current_village, setcurrent_village] = useState('');
  const [current_district, setcurrent_district] = useState('');
  const [current_commune, setcurrent_commune] = useState('');
  const [current_province, setcurrent_province] = useState('');
  const [full_address, setfull_address] = useState('');
  const [staff_card, setstaff_card] = useState('');
  const [start_working_date, setstart_working_date] = useState('');
  const [pedagogy_certificate, setpedagogy_certificate] = useState('');
  const [degree_level, setdegree_level] = useState('');
  const [public_entity_name, setpublic_entity_name] = useState('');
  const [general_kindergaten, setgeneral_kindergaten] = useState('');
  const [general_primary, setgeneral_primary] = useState('');
  const [general_secondary, setgeneral_secondary] = useState('');
  const [father_name, setfather_name] = useState('');
  const [father_occupation, setfather_occupation] = useState('');
  const [mother_name, setmother_name] = useState('');
  const [mother_occupation, setmother_occupation] = useState('');
  const [spouse_name, setspouse_name] = useState('');
  const [spouse_occupation, setspouse_occupation] = useState('');
  const [get_url_pic, setget_url_pic] = useState('');
  const [get_url, setget_url] = useState('');
  const [id, setid] = useState('');
  const [headteacher, setheadteacher] = useState('');
  const [teacherLevel, setteacherLevel] = useState('');

  //Click button and laod data inside input
  const handleClick = (event) => {
    btnAdd.current.style.display = 'none';
    btnUp.current.style.display = 'block';
    btnDe.current.style.display = 'block';
    const data = event.currentTarget; // Get the clicked button element
    const user_id = data.dataset.user_id;
    const fullname = data.dataset.fullname;
    const user_short_name = data.dataset.user_short_name;
    const position = data.dataset.position;
    const name_latin = data.dataset.name_latin;
    const gender = data.dataset.gender;
    const date_of_birth = data.dataset.date_of_birth;
    const phone_number = data.dataset.phone_number;
    const village = data.dataset.village;
    const teacher_level = data.dataset.teacherlevel;
    const head_teacher = data.dataset.head_teacher;
    const district = data.dataset.district;
    const commune = data.dataset.commune;
    const province = data.dataset.province;
    const place_of_birth = data.dataset.place_of_birth;
    const current_village = data.dataset.current_village;
    const current_district = data.dataset.current_district;
    const current_commune = data.dataset.current_commune;
    const current_province = data.dataset.current_province;
    const full_address = data.dataset.full_address;
    const staff_card = data.dataset.staff_card;
    const start_working_date = data.dataset.start_working_date;
    const pedagogy_certificate = data.dataset.pedagogy_certificate;
    const degree_level = data.dataset.degree_level;
    const public_entity_name = data.dataset.public_entity_name;
    const general_kindergaten = data.dataset.general_kindergaten;
    const general_primary = data.dataset.general_primary;
    const general_secondary = data.dataset.general_secondary;
    const father_name = data.dataset.father_name;
    const father_occupation = data.dataset.father_occupation;
    const mother_name = data.dataset.mother_name;
    const mother_occupation = data.dataset.mother_occupation;
    const spouse_name = data.dataset.spouse_name;
    const spouse_occupation = data.dataset.spouse_occupation;
    const get_url_pic = data.dataset.get_url_pic;
    const get_url = data.dataset.get_url;
    const id = data.dataset.id;

    setuser_id(user_id);
    setfullname(fullname);
    setuser_short_name(user_short_name);
    setposition(position);
    setname_latin(name_latin);
    setgender(gender);
    setdate_of_birth(date_of_birth);
    setvillage(village);
    setdistrict(district);
    setteacherLevel(teacher_level);
    setheadteacher(head_teacher);
    setcommune(commune);
    setphone_number(phone_number);
    setprovince(province);
    setplace_of_birth(place_of_birth);
    setcurrent_village(current_village);
    setcurrent_district(current_district);
    setcurrent_commune(current_commune);
    setcurrent_province(current_province);
    setfull_address(full_address);
    setstaff_card(staff_card);
    setstart_working_date(start_working_date);
    setpedagogy_certificate(pedagogy_certificate);
    setdegree_level(degree_level);
    setpublic_entity_name(public_entity_name);
    setgeneral_kindergaten(general_kindergaten);
    setgeneral_primary(general_primary);
    setgeneral_secondary(general_secondary);
    setfather_name(father_name);
    setfather_occupation(father_occupation);
    setmother_name(mother_name);
    setmother_occupation(mother_occupation);
    setspouse_name(spouse_name);
    setspouse_occupation(spouse_occupation);
    setget_url_pic(get_url_pic);
    setget_url(get_url);
    if (!get_url_pic) {
      setget_url_pic('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    } else {
      setget_url_pic(get_url_pic);
    }
    if (!get_url) {
      setget_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    } else {
      setget_url(get_url);
    }
    setid(id);
  };
  const AddNew = () => {
    btnAdd.current.style.display = 'block';
    btnUp.current.style.display = 'none';
    btnDe.current.style.display = 'none';
    setuser_id('');
    setfullname('');
    setuser_short_name('');
    setposition('');
    setname_latin('');
    setgender('');
    setdate_of_birth('');
    setvillage('');
    setdistrict('');
    setteacherLevel('');
    setphone_number('');
    setcommune('');
    setprovince('');
    setplace_of_birth('');
    setcurrent_village('');
    setcurrent_district('');
    setcurrent_commune('');
    setcurrent_province('');
    setfull_address('');
    setstaff_card('');
    setstart_working_date('');
    setpedagogy_certificate('');
    setdegree_level('');
    setpublic_entity_name('');
    setgeneral_kindergaten('');
    setgeneral_primary('');
    setgeneral_secondary('');
    setfather_name('');
    setfather_occupation('');
    setmother_name('');
    setmother_occupation('');
    setspouse_name('');
    setspouse_occupation();
    setget_url_pic('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setget_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setid('');

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase();
    set(ref(db, `/SalaMOM/staffs/` + fullname), {
      id: fullname,
      user_id: user_id,
      fullname: fullname,
      user_short_name: user_short_name,
      position: position,
      name_latin: name_latin,
      gender: gender,
      date_of_birth: date_of_birth,
      phone_number: phone_number,
      teacher_level: teacherLevel,
      head_teacher: headteacher,
      identity_card_number: identity_card_number,
      village: village,
      district: district,
      commune: commune,
      province: province,
      place_of_birth: place_of_birth,
      current_village: current_village,
      current_district: current_district,
      current_commune: current_commune,
      current_province: current_province,
      full_address: full_address,
      staff_card: staff_card,
      start_working_date: start_working_date,
      pedagogy_certificate: pedagogy_certificate,
      degree_level: degree_level,
      public_entity_name: public_entity_name,
      general_kindergaten: general_kindergaten,
      general_primary: general_primary,
      general_secondary: general_secondary,
      father_name: father_name,
      father_occupation: father_occupation,
      mother_name: mother_name,
      mother_occupation: mother_occupation,
      spouse_name: spouse_name,
      spouse_occupation: spouse_occupation,
      get_url_pic: get_url_pic,
      get_url: get_url,
    });
    // if (levelKinder) {
    //   levelKinder.forEach(e => {
    //     set(ref(db, `/DataSubs/staffs/kindergarten/${e}/` + fullname), {
    //       id: e,
    //       user_id: user_id,
    //       fullname: fullname,
    //       user_short_name: user_short_name,
    //       position: position,
    //       name_latin: name_latin,
    //       head_teacher: headteacher,
    //       gender: gender,
    //       phone_number: phone_number,
    //       teacher_level: teacherLevel,
    //       get_url_pic: get_url_pic,
    //       get_url: get_url,
    //     });
    //   })
    // }
    // if (levelPrimary) {
    //   levelPrimary.forEach(e => {
    //     set(ref(db, `/DataSubs/staffs/primary/${e}/` + fullname), {
    //       id: e,
    //       user_id: user_id,
    //       fullname: fullname,
    //       user_short_name: user_short_name,
    //       position: position,
    //       name_latin: name_latin,
    //       head_teacher: headteacher,
    //       gender: gender,
    //       phone_number: phone_number,
    //       teacher_level: teacherLevel,
    //       get_url_pic: get_url_pic,
    //       get_url: get_url,
    //     });
    //   })
    // }
    // if (levelSecondary) {
    //   levelSecondary.forEach(e => {
    //     set(ref(db, `/DataSubs/staffs/secondary/${e}/` + fullname), {
    //       id: e,
    //       user_id: user_id,
    //       fullname: fullname,
    //       user_short_name: user_short_name,
    //       position: position,
    //       name_latin: name_latin,
    //       head_teacher: headteacher,
    //       gender: gender,
    //       phone_number: phone_number,
    //       teacher_level: teacherLevel,
    //       get_url_pic: get_url_pic,
    //       get_url: get_url,
    //     });
    //   })
    // }


    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    setuser_id('');
    setfullname('');
    setuser_short_name('');
    setposition('');
    setname_latin('');
    setgender('');
    setdate_of_birth('');
    setvillage('');
    setdistrict('');
    setteacherLevel('');
    setheadteacher('');
    setphone_number('');
    setcommune('');
    setprovince('');
    setplace_of_birth('');
    setcurrent_village('');
    setcurrent_district('');
    setcurrent_commune('');
    setcurrent_province('');
    setfull_address('');
    setstaff_card('');
    setstart_working_date('');
    setpedagogy_certificate('');
    setdegree_level('');
    setpublic_entity_name('');
    setgeneral_kindergaten('');
    setgeneral_primary('');
    setgeneral_secondary('');
    setfather_name('');
    setfather_occupation('');
    setmother_name('');
    setmother_occupation('');
    setspouse_name('');
    setspouse_occupation();
    setget_url_pic('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setget_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setid('');

  };
  const UpdateInformation = (e) => {
    e.preventDefault();
    const db = getDatabase();
    update(ref(db, `/SalaMOM/staffs/` + fullname), {
      id: fullname,
      user_id: user_id,
      fullname: fullname,
      user_short_name: user_short_name,
      position: position,
      name_latin: name_latin,
      gender: gender,
      date_of_birth: date_of_birth,
      phone_number: phone_number,
      teacher_level: teacherLevel,
      head_teacher: headteacher,
      identity_card_number: identity_card_number,
      village: village,
      district: district,
      commune: commune,
      province: province,
      place_of_birth: place_of_birth,
      current_village: current_village,
      current_district: current_district,
      current_commune: current_commune,
      current_province: current_province,
      full_address: full_address,
      staff_card: staff_card,
      start_working_date: start_working_date,
      pedagogy_certificate: pedagogy_certificate,
      degree_level: degree_level,
      public_entity_name: public_entity_name,
      general_kindergaten: general_kindergaten,
      general_primary: general_primary,
      general_secondary: general_secondary,
      father_name: father_name,
      father_occupation: father_occupation,
      mother_name: mother_name,
      mother_occupation: mother_occupation,
      spouse_name: spouse_name,
      spouse_occupation: spouse_occupation,
      get_url_pic: get_url_pic,
      get_url: get_url,
    });
    // if (levelKinder) {
    //   levelKinder.forEach(e => {
    //     set(ref(db, `/DataSubs/staffs/kindergarten/${e}/` + fullname), {
    //       id: e,
    //       user_id: user_id,
    //       fullname: fullname,
    //       user_short_name: user_short_name,
    //       position: position,
    //       name_latin: name_latin,
    //       gender: gender,
    //       head_teacher: headteacher,
    //       phone_number: phone_number,
    //       teacher_level: teacherLevel,
    //       get_url_pic: get_url_pic,
    //       get_url: get_url,
    //     });
    //   })
    // }
    // if (levelPrimary) {
    //   levelPrimary.forEach(e => {
    //     set(ref(db, `/DataSubs/staffs/primary/${e}/` + fullname), {
    //       id: e,
    //       user_id: user_id,
    //       fullname: fullname,
    //       user_short_name: user_short_name,
    //       position: position,
    //       name_latin: name_latin,
    //       gender: gender,
    //       head_teacher: headteacher,
    //       phone_number: phone_number,
    //       teacher_level: teacherLevel,
    //       get_url_pic: get_url_pic,
    //       get_url: get_url,
    //     });
    //   })
    // }
    // if (levelSecondary) {
    //   levelSecondary.forEach(e => {
    //     set(ref(db, `/DataSubs/staffs/secondary/${e}/` + fullname), {
    //       id: e,
    //       user_id: user_id,
    //       fullname: fullname,
    //       user_short_name: user_short_name,
    //       position: position,
    //       name_latin: name_latin,
    //       gender: gender,
    //       head_teacher: headteacher,
    //       phone_number: phone_number,
    //       teacher_level: teacherLevel,
    //       get_url_pic: get_url_pic,
    //       get_url: get_url,
    //     });
    //   })
    // }
    setTimeout(() => {
      const subjectList = document.getElementById("subjectList");
      const subjectList2 = document.getElementById("subjectList2");
      const subjectList3 = document.getElementById("subjectList3");
      const checkboxes = subjectList.querySelectorAll("input[type='checkbox']");
      const checkboxes2 = subjectList2.querySelectorAll("input[type='checkbox']");
      const checkboxes3 = subjectList3.querySelectorAll("input[type='checkbox']");
      for (const checkbox of checkboxes) {
        checkbox.checked = false
      }
      for (const checkbox of checkboxes2) {
        checkbox.checked = false
      }
      for (const checkbox of checkboxes3) {
        checkbox.checked = false
      }
    }, 500);
    Swal.fire({
      text: "ព័ត៍មានបានកែត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    setuser_id('');
    setfullname('');
    setuser_short_name('');
    setposition('');
    setname_latin('');
    setgender('');
    setdate_of_birth('');
    setvillage('');
    setdistrict('');
    setteacherLevel('');
    setheadteacher('');
    setphone_number('');
    setcommune('');
    setprovince('');
    setplace_of_birth('');
    setcurrent_village('');
    setcurrent_district('');
    setcurrent_commune('');
    setcurrent_province('');
    setfull_address('');
    setstaff_card('');
    setstart_working_date('');
    setpedagogy_certificate('');
    setdegree_level('');
    setpublic_entity_name('');
    setgeneral_kindergaten('');
    setgeneral_primary('');
    setgeneral_secondary('');
    setfather_name('');
    setfather_occupation('');
    setmother_name('');
    setmother_occupation('');
    setspouse_name('');
    setspouse_occupation();
    setget_url_pic('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setget_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setid('');

  };
  const RemoveInformation = (e) => {
    e.preventDefault();
    const db = getDatabase();
    remove(ref(db, `/SalaMOM/staffs/` + fullname));
    Swal.fire({
      text: "ព័ត៍មានបានលុបត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    setuser_id('');
    setfullname('');
    setuser_short_name('');
    setposition('');
    setname_latin('');
    setgender('');
    setdate_of_birth('');
    setvillage('');
    setdistrict('');
    setteacherLevel('');
    setphone_number('');
    setcommune('');
    setprovince('');
    setheadteacher('');
    setplace_of_birth('');
    setcurrent_village('');
    setcurrent_district('');
    setcurrent_commune('');
    setcurrent_province('');
    setfull_address('');
    setstaff_card('');
    setstart_working_date('');
    setpedagogy_certificate('');
    setdegree_level('');
    setpublic_entity_name('');
    setgeneral_kindergaten('');
    setgeneral_primary('');
    setgeneral_secondary('');
    setfather_name('');
    setfather_occupation('');
    setmother_name('');
    setmother_occupation('');
    setspouse_name('');
    setspouse_occupation();
    setget_url_pic('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setget_url('https://res.cloudinary.com/salamomschool/image/upload/v1709357129/fab63d7f9d9dd9de94019d884eac4a25.png')
    setid('');

  };

  //Set User image
  const otherButtonRef = useRef(null);
  const otherButtonRef2 = useRef(null);

  const ImageUpload = () => {
    const targetFolder = `Staff_pictures/`;

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
      formData.append("public_id", NameEn.current.value + `_` + randomNumber);

      axios.post("https://api.cloudinary.com/v1_1/salamomschool/image/upload", formData)
        .then((response) => {
          setget_url_pic(response.data.secure_url);
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
                      src={get_url_pic}
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
                  value={get_url_pic}
                  onChange={(e) => setget_url_pic(e.target.value)}
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
    const targetFolder = `Staff_pictures/`;

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
      formData.append("public_id", NameEn.current.value + `_` + randomNumber + `_signture`);

      axios.post("https://api.cloudinary.com/v1_1/salamomschool/image/upload", formData)
        .then((response) => {
          setget_url(response.data.secure_url);
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
                      src={get_url}
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
                  value={get_url}
                  onChange={(e) => setget_url(e.target.value)}
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
        const id = item.fullname;
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
    myData.forEach(d => {
      const id = d.id;
      const Duser_id = d.user_id;
      const Dfullname = d.fullname;
      const Duser_short_name = d.user_short_name;
      const Dposition = d.position;
      const Dname_latin = d.name_latin;
      const Dgender = d.gender;
      const Ddate_of_birth = d.date_of_birth;
      const Dphone_number = d.phone_number;
      const Didentity_card_number = d.identity_card_number;
      const Dplace_of_birth = d.place_of_birth;
      const Dfull_address = d.full_address;
      const Dstaff_card = d.staff_card;
      const Dstart_working_date = d.start_working_date;
      const Dpedagogy_certificate = d.pedagogy_certificate;
      const Ddegree_level = d.degree_level;
      const Dpublic_entity_name = d.public_entity_name;
      const Dgeneral_kindergaten = d.general_kindergaten;
      const Dgeneral_primary = d.user_id;
      const Dgeneral_secondary = d.general_secondary;
      const Dfather_name = d.father_name;
      const Dfather_occupation = d.father_occupation;
      const Dmother_name = d.mother_name;
      const Dmother_occupation = d.mother_occupation;
      const Dspouse_name = d.spouse_name;
      const Dspouse_occupation = d.spouse_occupation;
      // setuser_id(d.user_id);
      // setfullname(d.fullname);
      // setuser_short_name(d.user_short_name);
      // setposition(d.position);
      // setname_latin(d.name_latin);
      // setgender(d.gender);
      // setdate_of_birth(d.date_of_birth);
      // setvillage(d.village);
      // setdistrict(d.district);
      // setcommune(d.commune);
      // setphone_number(d.phone_number);
      // setprovince(d.province);
      // setplace_of_birth(d.place_of_birth);
      // setcurrent_village(d.current_village);
      // setcurrent_district(d.current_district);
      // setcurrent_commune(d.current_commune);
      // setcurrent_province(d.current_province);
      // setfull_address(d.full_address);
      // setstaff_card(d.staff_card);
      // setstart_working_date(d.start_working_date);
      // setpedagogy_certificate(d.pedagogy_certificate);
      // setdegree_level(d.degree_level);
      // setpublic_entity_name(d.public_entity_name);
      // setgeneral_kindergaten(d.general_kindergaten);
      // setgeneral_primary(d.general_primary);
      // setgeneral_secondary(d.general_secondary);
      // setfather_name(d.father_name);
      // setfather_occupation(d.father_occupation);
      // setmother_name(d.mother_name);
      // setmother_occupation(d.mother_occupation);
      // setspouse_name(d.spouse_name);
      // setspouse_occupation(d.spouse_occupation);
      // setget_url_pic(d.get_url_pic);
      // setget_url(d.get_url);
      const db = getDatabase();
      setTimeout(() => {
        update(ref(db, '/SalaMOM/staffs/' + id), {
          id: Dfullname,
          user_id: Duser_id,
          fullname: Dfullname,
          user_short_name: Duser_short_name,
          position: Dposition,
          name_latin: Dname_latin,
          gender: Dgender,
          date_of_birth: Ddate_of_birth,
          phone_number: Dphone_number,
          identity_card_number: Didentity_card_number,
          place_of_birth: Dplace_of_birth,
          full_address: Dfull_address,
          staff_card: Dstaff_card,
          start_working_date: Dstart_working_date,
          pedagogy_certificate: Dpedagogy_certificate,
          degree_level: Ddegree_level,
          public_entity_name: Dpublic_entity_name,
          general_kindergaten: Dgeneral_kindergaten,
          general_primary: Dgeneral_primary,
          general_secondary: Dgeneral_secondary,
          father_name: Dfather_name,
          father_occupation: Dfather_occupation,
          mother_name: Dmother_name,
          mother_occupation: Dmother_occupation,
          spouse_name: Dspouse_name,
          spouse_occupation: Dspouse_occupation,
        });

      }, 500);
    })

  }
  const primaryPush = (e) => {
    const setID = e.target.dataset.id
    const firm = e.target.dataset.firm
    const data = e.target.innerHTML

    if (firm === 'kinder') {
      update(ref(db, `/SalaMOM/staffs/` + setID), {
        general_kindergaten: data,
      });
    }
    if (firm === 'primary') {
      update(ref(db, `/SalaMOM/staffs/` + setID), {
        general_primary: data,
      });
    }
    if (firm === 'secondary') {
      update(ref(db, `/SalaMOM/staffs/` + setID), {
        general_secondary: data,
      });
    }
  };
  const setNumber = (e) => {
    const setID = e.target.dataset.id
    const data = e.target.innerHTML
    if (setID) {
      update(ref(db, `/SalaMOM/staffs/` + setID), {
        t_grade: data,
      });
    }
  }
  const setTlevel = (e) => {
    const setID = e.target.dataset.id
    const data = e.target.value
    if (setID) {
      update(ref(db, `/SalaMOM/staffs/` + setID), {
        teacher_level: data,
      });
    }

  }
  const setTtype = (e) => {
    const setID = e.target.dataset.id
    const data = e.target.value
    if (setID) {
      update(ref(db, `/SalaMOM/staffs/` + setID), {
        teacher_type: data,
      });
    }

  }


  return (
    <>
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card card-primary card-outline">
          <div className="card-body">
            <h4 className="card-title">បញ្ជីព័ត៌មានផ្ទាល់ខ្លួនបុគ្គលិក</h4>
            <p className="card-description">
            </p>
            <div className="text-end">
              <button id="addNew" type="button" className="btn btn-success btn-sm me-2"
                onClick={AddNew}
                style={{ color: "white" }}
                data-bs-toggle="modal" data-bs-target="#add_staffs">
                <CIcon icon={cilUser} /> បង្កើតថ្មី
              </button>

              <button data-bs-toggle="modal" data-bs-target="#importModal" type="button"
                style={{ color: "white" }}
                id="importStd" className="btn btn-warning btn-sm me-2">
                <CIcon icon={cilArrowBottom} /> Import
                </button>
                <button
                  data-bs-toggle="modal" data-bs-target="#add_student_backup"
                  id="getDataBackup"
                  style={{
                    color: "white",
                    fontWeight: 'bold'
                  }}
                  type="button"
                  className="btn btn-primary btn-sm me-2"><CIcon icon={cilSave} /> Backup</button>

            </div>
            <div className="input-group" style={{ padding: '15px' }}>
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="searchInput" placeholder="ស្វែងរក"
                aria-label="search" aria-describedby="search" />
            </div>
            <div
              style={{
                overflowX: 'auto',
                padding: '10px',
                height: '35rem',
              }}
            >
              <table className="table table-bordered table-hover">
                <thead>
                  <tr className="frezze">
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }} className="text-center">ល.រ</td>
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
                      className="text-center">លំដាប់</td>
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
                      className="text-center">កម្រិត</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">ប្រភេទ</td>

                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">មុខវិជ្ជាមត្តេយ្យ</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">មុខវិជ្ជាបឋម</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">មុខវិជ្ជាមធ្យម</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">ភារកិច្ច</td>
                    <td
                      style={{
                        backgroundColor: "rgb(23, 116, 153)",
                        color: "white"
                      }}
                      className="text-center">ទូរស័ព្ឌ</td>
                  </tr>
                </thead>
                <tbody id="showUserdata" className="new_account">
                  {dbGetStaffs.map((user, index) => (
                    <tr key={user.id}>
                      <td className="text-center">{index + 1}</td>
                      <td
                        onClick={handleClick}
                        id={user.id.replace(/\s/g, "")}
                        data-bs-toggle="modal"
                        data-bs-target="#add_staffs"
                        data-user_id={user.user_id}
                        data-fullname={user.fullname}
                        data-user_short_name={user.user_short_name}
                        data-position={user.position}
                        data-name_latin={user.name_latin}
                        data-gender={user.gender}
                        data-date_of_birth={user.date_of_birth}
                        data-phone_number={user.phone_number}
                        data-head_teacher={user.head_teacher}
                        data-identity_card_number={user.identity_card_number}
                        data-village={user.village}
                        data-district={user.district}
                        data-commune={user.commune}
                        data-province={user.province}
                        data-place_of_birth={user.place_of_birth}
                        data-current_village={user.current_village}
                        data-current_district={user.current_district}
                        data-current_commune={user.current_commune}
                        data-current_province={user.current_province}
                        data-full_address={user.full_address}
                        data-staff_card={user.staff_card}
                        data-start_working_date={user.start_working_date}
                        data-pedagogy_certificate={user.pedagogy_certificate}
                        data-degree_level={user.degree_level}
                        data-public_entity_name={user.public_entity_name}
                        data-general_kindergaten={user.general_kindergaten}
                        data-general_primary={user.general_primary}
                        data-general_secondary={user.general_secondary}
                        data-father_name={user.father_name}
                        data-father_occupation={user.father_occupation}
                        data-mother_name={user.mother_name}
                        data-mother_occupation={user.mother_occupation}
                        data-spouse_name={user.spouse_name}
                        data-spouse_occupation={user.spouse_occupation}
                        data-get_url_pic={user.get_url_pic}
                        data-get_url={user.get_url}
                        data-teacherlevel={user.teacher_level}
                        data-teacher_type={user.teacher_type}
                        data-id={user.id}
                      >{user.fullname}</td>
                      <td className="text-center"
                        data-id={user.id}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={setNumber}
                        dangerouslySetInnerHTML={{ __html: user.t_grade }}
                      >
                      </td>
                      <td className="text-start">{user.name_latin}</td>
                      <td className="text-center">{user.gender}</td>
                      <td className="text-center">{
                        <select
                          className="text-center"
                          data-id={user.id}
                          value={user.teacher_level}
                          onChange={setTlevel}
                        >
                          <option>ជ្រើសរើស</option>
                          <option value='primary'>បឋមសិក្សា</option>
                          <option value='secondary'>អនុវិទ្យាល័យ</option>
                          <option value='highschool'>វិទ្យាល័យ</option>
                        </select>
                      }</td>
                      <td className="text-center">{
                        <select
                          className="text-center"
                          data-id={user.id}
                          value={user.teacher_type}
                          onChange={setTtype}
                        >
                          <option>ជ្រើសរើស</option>
                          <option value='general'>ទូទៅ</option>
                          <option value='english'>អង់គ្លេស</option>
                        </select>
                      }</td>
                      <td className="text-center"
                        data-id={user.id}
                        data-firm={'kinder'}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={primaryPush}
                        dangerouslySetInnerHTML={{ __html: user.general_kindergaten }}
                      >
                      </td>
                      <td className="text-center"
                        data-id={user.id}
                        data-firm={'primary'}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={primaryPush}
                        dangerouslySetInnerHTML={{ __html: user.general_primary }}
                      ></td>
                      <td className="text-center"
                        data-id={user.id}
                        data-firm={'secondary'}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={primaryPush}
                        dangerouslySetInnerHTML={{ __html: user.general_secondary }}
                      ></td>
                      <td className="text-center">{user.position}</td>
                      <td className="text-start">{user.phone_number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Import Teacher Data */}
          <div className="modal fade" id="importModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <ion-icon name="chevron-back-outline"
                    data-bs-dismiss="modal"></ion-icon>
                  <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">
                    បញ្ចូលព័ត៍មានបុគ្គលិក</h1>
                  <h1></h1>
                </div>
                <div className="modal-body">
                  <div>
                    <form enctype="multipart/form-data">
                      <a href="https://firebasestorage.googleapis.com/v0/b/salamom-d3246.appspot.com/o/SalaMOM%2Fextra%2Fsample%20import%20staffs%20information.xlsx?alt=media&token=d337cdd4-cef2-430b-b128-7aad8a0d57bd"
                        target="_blank" rel="noopener noreferrer"
                        style={{ color: "rgb(255, 47, 47)" }}
                      >ចុចទីនេះ ដើម្បីទាញយកគំរូជា
                        Excel</a>
                      <div className="mb-3">
                        <label for="formFile" className="form-label">សូមជ្រើសរើសឯកសារជា
                          Excel</label>
                        <ExcelImport />

                        {/* <input className="form-control" type="file" id="upload"
                          name="files[]" /> */}
                      </div>
                    </form>
                    <div
                      style={{ overflowX: 'auto' }}>
                      <table className="table table-bordered whiteBack table-hover kh"
                        style={{ fontSize: '12px' }}>
                        <thead
                          style={{ backgroundColor: 'blanchedalmond', fontWeight: 'bold' }}>
                          <tr>
                            <th scope="col"> # </th>
                            <th scope="col"> ID </th>
                            <th scope="col"> អត្តលេខ</th>
                            <th scope="col"> ភារកិច្ច </th>
                            <th scope="col"> គោត្តនាមនិងនាម</th>
                            <th scope="col"> អក្សរឡាតាំង </th>
                            <th scope="col"> ភេទ </th>
                            <th scope="col"> ថ្ងៃខែឆ្នាំកំណើត </th>
                            <th scope="col"> ទូរស័ព្ឌ </th>
                            <th scope="col"> លេខអត្តសញ្ញាណប័ណ្ណ </th>
                            <th scope="col"> ទីកន្លែងកំណើត </th>
                            <th scope="col"> ទីលំនៅបច្ចុប្បន្ន </th>
                            <th scope="col"> លេខកាត </th>
                            <th scope="col"> ថ្ងៃខែចូលបម្រើការងារ </th>
                            <th scope="col"> សញ្ញាបត្រគរុកោសល្យ </th>
                            <th scope="col"> កម្រិតវប្បធម៌ </th>
                            <th scope="col"> អង្គភាពរដ្ឋ </th>
                            <th scope="col"> មត្តេយ្យសិក្សា </th>
                            <th scope="col"> បឋមសិក្សា </th>
                            <th scope="col"> អនុវិទ្យាល័យ-វិទ្យាល័យ </th>
                            <th scope="col"> ឈ្មោះឪពុក </th>
                            <th scope="col"> មុខរបរ </th>
                            <th scope="col"> ឈ្មោះម្តាយ </th>
                            <th scope="col"> មុខរបរ </th>
                            <th scope="col"> ឈ្មោះប្តី/ប្រព្ធ </th>
                            <th scope="col"> មុខរបរ </th>
                          </tr>
                        </thead>
                        <tbody id="showTable" style={{ color: 'black' }}>
                          {myData.map((data, index) => (
                            <tr>
                              <td className="text-center">{index + 1}</td>
                              <td className="text-center">{data.id}</td>
                              <td className="text-center">{data.user_id}</td>
                              <td className="text-center">{data.position}</td>
                              <td className="text-center">{data.fullname}</td>
                              <td className="text-center">{data.name_latin}</td>
                              <td className="text-center">{data.gender}</td>
                              <td className="text-center">{data.date_of_birth}</td>
                              <td className="text-center">{data.phone_number}</td>
                              <td className="text-center">{data.identity_card_number}</td>
                              <td className="text-center">{data.place_of_birth}</td>
                              <td className="text-center">{data.full_address}</td>
                              <td className="text-center">{data.staff_card}</td>
                              <td className="text-center">{data.start_working_date}</td>
                              <td className="text-center">{data.pedagogy_certificate}</td>
                              <td className="text-center">{data.degree_level}</td>
                              <td className="text-center">{data.public_entity_name}</td>
                              <td className="text-center">{data.general_kindergaten}</td>
                              <td className="text-center">{data.general_primary}</td>
                              <td className="text-center">{data.general_secondary}</td>
                              <td className="text-center">{data.father_name}</td>
                              <td className="text-center">{data.father_occupation}</td>
                              <td className="text-center">{data.mother_name}</td>
                              <td className="text-center">{data.mother_occupation}</td>
                              <td className="text-center">{data.spouse_name}</td>
                              <td className="text-center">{data.spouse_occupation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button id="btnRows" type="button"
                    onClick={importData}
                    style={{ color: "white" }}
                    className="btn btn-success btn-sm">
                    <CIcon icon={cilDataTransferDown} />បញ្ជូនទិន្នន័យ</button>
                </div>
              </div>
            </div>
          </div>
          {/* Input Teacher Data */}
          <div className="modal fade" id="add_staffs" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="fw-bold">បង្កើតព័ត៌មានផ្ទាល់ខ្លួនបុគ្គលិក</h4>
                </div>
                <div className="modal-body">
                  <div className="alert alert-success hidden" role="alert" id="get_alert">
                    A simple success alert—check it out!
                  </div>
                  <div className="content" id="new-teacher">
                    <div className="form-container">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-lg-6">
                                <label
                                  for="teacher_teacher_id">អត្តលេខ</label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={user_id}
                                  onChange={(e) => setuser_id(e.target.value)}
                                  className="form-control" required="required"
                                  style={{ color: 'black', lineHeight: '2' }}
                                  type="text" name="teacher[teacher_id]"
                                  id="fill1" />
                              </div>
                              <div className="col-lg-6">
                                <label for="teacher_duty">ភារកិច្ច</label>
                                <select className="form-control"
                                  value={position}
                                  onChange={(e) => setposition(e.target.value)}
                                  style={{ color: 'black', lineHeight: '2' }}
                                  name="teacher[duty_id]" id="fill2">
                                  <option value="45">

                                  </option>
                                  <option value="នាយក">
                                    នាយក
                                  </option>
                                  <option value="នាយិកា">
                                    នាយិកា
                                  </option>
                                  <option value="នាយករង">
                                    នាយករង
                                  </option>
                                  <option value="នាយិការង">
                                    នាយិការង
                                  </option>
                                  <option
                                    value="ប្រធានផ្នែកចំណេះទូទៅខ្មែរ">
                                    ប្រធានផ្នែកចំណេះទូទៅខ្មែរ
                                  </option>
                                  <option value="ប្រធានផ្នែកអន្តរជាតិ">
                                    ប្រធានផ្នែកអន្តរជាតិ
                                  </option>
                                  <option
                                    value="ប្រធានផ្នែកបរទេសក្រៅម៉ោង">
                                    ប្រធានផ្នែកបរទេសក្រៅម៉ោង
                                  </option>
                                  <option value="ប្រធានផ្នែករដ្ឋបាល">
                                    ប្រធានផ្នែករដ្ឋបាល
                                  </option>
                                  <option value="ប្រធានគណនេយ្យ">
                                    ប្រធានគណនេយ្យ
                                  </option>
                                  <option value="ប្រធានក្រុមបច្ចេកទេស">
                                    ប្រធានក្រុមបច្ចេកទេស
                                  </option>
                                  <option value="អនុប្រធានក្រុម">
                                    អនុប្រធានក្រុម
                                  </option>
                                  <option value="គ្រូបង្រៀន">
                                    គ្រូបង្រៀន
                                  </option>
                                  <option value="គ្រូចំណេះទូទៅខ្មែរ">
                                    គ្រូចំណេះទូទៅខ្មែរ
                                  </option>
                                  <option value="គ្រូភាសាចិន">
                                    គ្រូភាសាចិន
                                  </option>
                                  <option
                                    value="គ្រូភាសាអង់គ្លេសក្រៅម៉ោង">
                                    គ្រូភាសាអង់គ្លេសក្រៅម៉ោង
                                  </option>
                                  <option value="គ្រូភាសាអង់គ្លេសពេញម៉ោង">
                                    គ្រូភាសាអង់គ្លេសពេញម៉ោង
                                  </option>
                                  <option value="គ្រូបរទេស">
                                    គ្រូបរទេស
                                  </option>
                                  <option value="គ្រូកីឡា">
                                    គ្រូកីឡា
                                  </option>
                                  <option value="គ្រូរោងជាង">
                                    គ្រូរោងជាង
                                  </option>
                                  <option value="គ្រូកសិកម្ម">
                                    គ្រូកសិកម្ម
                                  </option>
                                  <option value="គ្រូសិល្បៈ">
                                    គ្រូសិល្បៈ
                                  </option>
                                  <option value="គ្រូកុំព្យូទ័រ">
                                    គ្រូកុំព្យូទ័រ
                                  </option>
                                  <option value="គ្រូបណ្តុះគុណធម៌">
                                    គ្រូបណ្តុះគុណធម៌
                                  </option>
                                  <option value="គ្រូយុវជន">
                                    គ្រូយុវជន
                                  </option>
                                  <option value="ជំនួយការគ្រូ">
                                    ជំនួយការគ្រូ
                                  </option>
                                  <option value="លេខាធិការ">
                                    លេខាធិការ
                                  </option>
                                  <option value="បណ្ណារក្ស">
                                    បណ្ណារក្ស
                                  </option>
                                  <option value="បេឡាករ">
                                    បេឡាករ
                                  </option>
                                  <option value="អ្នកទទួលភ្ញៀវ">
                                    អ្នកទទួលភ្ញៀវ
                                  </option>
                                  <option value="សន្តិសុខ">
                                    សន្តិសុខ
                                  </option>
                                  <option value="អ្នកបើកបរ">
                                    អ្នកបើកបរ
                                  </option>
                                  <option value="អ្នកអនាម័យ">
                                    អ្នកអនាម័យ
                                  </option>
                                  <option value="ជាងទឹកភ្លើង">
                                    ជាងទឹកភ្លើង
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label
                                  for="teacher_full_name_kh">គោត្តនាមនិងនាម</label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={fullname}
                                  onChange={(e) => setfullname(e.target.value)}
                                  className="form-control" required="required"
                                  type="text" name="teacher[full_name_kh]"
                                  style={{ color: 'black', lineHeight: '2' }}
                                  id="fill3" />
                              </div>
                              <div className="col-lg-6">
                                <label
                                  for="teacher_full_name_latin">អក្សរឡាតាំង</label>
                                <input autocomplete="off"
                                  value={name_latin}
                                  onChange={(e) => setname_latin(e.target.value)}
                                  ref={NameEn}
                                  onkeyup="this.value = this.value.toUpperCase()"
                                  style={{ color: 'black', lineHeight: '2' }}
                                  className="form-control" type="text"
                                  name="teacher[full_name_latin]"
                                  id="fill4" />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6">
                                <label for="teacher_gender">ភេទ</label><span
                                  className="text-red">*</span>
                                <select className="form-control"
                                  value={gender}
                                  onChange={(e) => setgender(e.target.value)}
                                  style={{ color: 'black', lineHeight: '2' }}
                                  required="required"
                                  name="teacher[gender]" id="fill5">
                                  <option value="">
                                    ជ្រើសរើសភេទ
                                  </option>
                                  <option value="ប្រុស">
                                    ប្រុស
                                  </option>
                                  <option value="ស្រី">
                                    ស្រី
                                  </option>
                                </select>
                              </div>

                              <div className="col-lg-6">
                                <label
                                  for="teacher_date_of_birth">ថ្ងៃខែឆ្នាំកំណើត</label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={date_of_birth}
                                  onChange={(e) => setdate_of_birth(e.target.value)}
                                  placeholder="ថ្ងៃ/ខែ/ឆ្នាំ"
                                  style={{ color: 'black', lineHeight: '2' }}
                                  className="form-control date-input-mask"
                                  required="required" type="text"
                                  name="teacher[date_of_birth]"
                                  id="fill6" />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6">
                                <label
                                  for="teacher_phone_number">ទូរស័ព្ឌ</label><span
                                    className="text-red">*</span>
                                <input autocomplete="off"
                                  value={phone_number}
                                  onChange={(e) => setphone_number(e.target.value)}
                                  className="form-control" required="required"
                                  style={{ color: 'black', lineHeight: '2' }}
                                  type="text" name="teacher[phone_number]"
                                  id="fill7" />
                              </div>

                              <div className="col-lg-6">
                                <label
                                  for="teacher_identity_card_number">លេខអត្តសញ្ញាណប័ណ្ណ</label>
                                <input autocomplete="off"
                                  value={identity_card_number}
                                  onChange={(e) => setidentity_card_number(e.target.value)}
                                  className="form-control" type="text"
                                  style={{ color: 'black', lineHeight: '2' }}
                                  name="teacher[identity_card_number]"
                                  id="fill8" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label
                                  for="teacher_short_name">ឈ្មោះអក្សរកាត់</label>
                                <input autocomplete="off"
                                  value={user_short_name}
                                  onChange={(e) => setuser_short_name(e.target.value)}
                                  className="form-control" required="required"
                                  style={{ color: 'black', lineHeight: '2' }}
                                  type="text" id="fill35" />
                              </div>
                              <div className="col-lg-6">
                                <label
                                  for="teacher_short_name">គ្រូបន្ទុកថ្នាក់</label>
                                <select className="form-control text-center"
                                  value={headteacher}
                                  onChange={(e) => setheadteacher(e.target.value)}
                                  style={{ color: 'black', lineHeight: '2' }}
                                  required="required"
                                  id="fill5">
                                  <option value="">
                                    ជ្រើសរើស
                                  </option>
                                  <option value="head_teacher">
                                    គ្រូបន្ទុកថ្នាក់
                                  </option>
                                  <option value="not_head_teacher">
                                    គ្រូធម្មតា
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <label
                                  for="teacher_short_name">គ្រូកម្រិត</label>
                                <select className="form-control text-center"
                                  value={teacherLevel}
                                  onChange={(e) => setteacherLevel(e.target.value)}
                                  style={{ color: 'black', lineHeight: '2' }}
                                  required="required"
                                  id="fill5">
                                  <option value='កម្រិតថ្នាក់'>
                                    កម្រិតថ្នាក់
                                  </option>
                                  <option value='primary'>
                                    បឋមសិក្សា
                                  </option>
                                  <option value='secondary'>
                                    អនុវិទ្យាល័យ
                                  </option>
                                  <option value='highschool'>
                                    វិទ្យាល័យ
                                  </option>
                                </select>
                              </div>
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

                          <div className="row place-container">
                            <div className="place-devider">
                              ទីកន្លែងកំណើត</div>
                            <div id="province" className="col-lg-3">
                              <label for="fill11">ខេត្ត/ក្រុង</label>
                              <input autocomplete="off" className="form-control"
                                value={province}
                                onChange={(e) => setprovince(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill11" />
                            </div>

                            <div id="district" className="col-lg-3">
                              <label for="fill12">ស្រុក/ខណ្ឌ</label>
                              <input autocomplete="off" className="form-control"
                                value={district}
                                onChange={(e) => setdistrict(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill12" />
                            </div>

                            <div id="commune" className="col-lg-3">
                              <label for="fill13">ឃុំ/សង្កាត់</label>
                              <input autocomplete="off" className="form-control"
                                value={commune}
                                onChange={(e) => setcommune(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill13" />
                            </div>

                            <div id="village" className="col-lg-3">
                              <label for="fill14">ភូមិ</label>
                              <input autocomplete="off" className="form-control"
                                value={village}
                                onChange={(e) => setvillage(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill14" />
                            </div>

                            <div className="col-lg-12">
                              <div className="col-lg-12">
                                <label
                                  for="fill15">ឬវាយបញ្ជូលទីកន្លែងកំណើត</label>
                                <textarea className="form-control"
                                  value={place_of_birth}
                                  onChange={(e) => setplace_of_birth(e.target.value)}
                                  style={{ color: 'black', lineHeight: '2' }}
                                  name="placeOfBirth" id="fill15"
                                  cols="50" rows="5"></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="row place-container">
                            <div className="place-devider">
                              ទីលំនៅបច្ចុប្បន្ន</div>
                            <div id="current-province" className="col-lg-3">
                              <label for="fill16">ខេត្ត/ក្រុង</label>
                              <input autocomplete="off" className="form-control"
                                value={current_province}
                                onChange={(e) => setcurrent_province(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill16" />
                            </div>

                            <div id="current-district" className="col-lg-3">
                              <label for="fill17">ស្រុក/ខណ្ឌ</label>
                              <input autocomplete="off" className="form-control"
                                value={current_district}
                                onChange={(e) => setcurrent_district(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill17" />
                            </div>

                            <div id="current-commune" className="col-lg-3">
                              <label for="fill18">ឃុំ/សង្កាត់</label>
                              <input autocomplete="off" className="form-control"
                                value={current_commune}
                                onChange={(e) => setcurrent_commune(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill18" />
                            </div>

                            <div id="current-village" className="col-lg-3">
                              <label for="fill19">ភូមិ</label>
                              <input autocomplete="off" className="form-control"
                                value={current_village}
                                onChange={(e) => setcurrent_village(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text"
                                name="teacher[full_birth_address]"
                                id="fill19" />
                            </div>

                            <div className="col-lg-12">
                              <label
                                for="fill20">ឬវាយបញ្ជូលទីលំនៅបច្ចុប្បន្ន</label>
                              <textarea className="form-control"
                                value={full_address}
                                onChange={(e) => setfull_address(e.target.value)}
                                name="placeOfBirth"
                                style={{ color: 'black', lineHeight: '2' }}
                                id="fill20" cols="50" rows="5"></textarea>
                            </div>
                          </div>

                          <div className="row place-container">
                            <div className="place-devider">
                              ព័ត៌មានកាត</div>

                            <div className="col-lg-12">
                              <label for="fill21">លេខកាត</label>
                              <input autocomplete="off" className="form-control"
                                value={staff_card}
                                onChange={(e) => setstaff_card(e.target.value)}
                                style={{ color: 'black', lineHeight: '2' }}
                                type="text" name="teacher[card_uuid]"
                                id="fill21" />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="card">
                                <div className="card-header">
                                  <h5><b>ព័ត៌មានការងារ</b>
                                  </h5>
                                </div>
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <label
                                        for="fill22">ថ្ងៃខែចូលបម្រើការងារ</label>
                                      <input autocomplete="off"
                                        value={start_working_date}
                                        onChange={(e) => setstart_working_date(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        className="form-control date-input-mask"
                                        type="text"
                                        name="teacher[start_working_date]"
                                        id="fill22" />
                                    </div>

                                    <div className="col-lg-3">
                                      <label
                                        for="fill23">សញ្ញាបត្រគរុកោសល្យ</label>
                                      <select className="form-control"
                                        value={pedagogy_certificate}
                                        onChange={(e) => setpedagogy_certificate(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        name="pedagogy_certificate"
                                        id="fill23">
                                        <option value="">
                                          ជ្រើសរើសសញ្ញាបត្រគរុកោសល្យ
                                        </option>
                                        <option
                                          value="គ្រូមតេ្តយ្យ">
                                          គ្រូមតេ្តយ្យ
                                        </option>
                                        <option
                                          value="គ្រូបឋមសិក្សា">
                                          គ្រូបឋមសិក្សា
                                        </option>
                                        <option
                                          value="គ្រូមធ្យមសិក្សាបឋមភូមិ">
                                          គ្រូមធ្យមសិក្សាបឋមភូមិ
                                        </option>
                                        <option
                                          value="វគ្គបណ្តុះបណ្តាលគរុកោសល្យ">
                                          វគ្គបណ្តុះបណ្តាលគរុកោសល្យ
                                        </option>
                                        <option
                                          value="គ្រូកិច្ចសន្យា">
                                          គ្រូកិច្ចសន្យា
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-3">
                                      <label
                                        for="fill24">កម្រិតវប្បធម៌</label>
                                      <select className="form-control"
                                        value={degree_level}
                                        onChange={(e) => setdegree_level(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        name="teacher[degree_level]"
                                        id="fill24">
                                        <option value="">
                                          ជ្រើសរើសកម្រិតវប្បធម៌
                                        </option>
                                        <option value="ម.ទុតិយភូមិ">
                                          ម.ទុតិយភូមិ
                                        </option>
                                        <option value="បរិញ្ញាបត្រ">
                                          បរិញ្ញាបត្រ
                                        </option>
                                        <option
                                          value="បរិញ្ញាបត្រជាន់ខ្ពស់">
                                          បរិញ្ញាបត្រជាន់ខ្ពស់
                                        </option>
                                        <option value="បណ្ឌិត">
                                          បណ្ឌិត
                                        </option>
                                      </select>
                                    </div>

                                    <div className="col-lg-3">
                                      <label
                                        for="fill25">អង្គភាពរដ្ឋ</label>
                                      <input autocomplete="off"
                                        value={public_entity_name}
                                        onChange={(e) => setpublic_entity_name(e.target.value)}
                                        className="form-control"
                                        type="text"
                                        style={{ color: 'black', lineHeight: '2' }}
                                        name="teacher[public_entity_name]"
                                        id="fill25" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="card">
                                <div className="card-header">
                                  <h5><b>មុខវិជ្ជាឯកទេស</b>
                                  </h5>
                                </div>

                                <div className="card-body p-0">

                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="subject-title">
                                        ចំណេះទូទៅខ្មែរ
                                      </div>
                                      <div className="p-2">
                                        <div className="row">
                                          <div
                                            className="dropdown dropup">
                                            <button
                                              className="btn dropdown-toggle fw-bold"
                                              type="button"
                                              id="dropdownMenuButton1"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false">
                                              មត្តេយ្យសិក្សា
                                            </button>
                                            <ul className="dropdown-menu menu-lg-scroll"
                                              style={{ color: 'black', lineHeight: '2' }}
                                              aria-labelledby="dropdownMenuButton1"
                                              id="subjectList">
                                              <li>
                                                <a
                                                  className="dropdown-item">
                                                  <input
                                                    type="checkbox"
                                                    id="subject-math"
                                                    value="បុរេសំណេរ" />
                                                  <label
                                                    for="subject-math">បុរេសំណេរ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="បុរេគណិត" />
                                                <label
                                                  for="subject-math">បុរេគណិត</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="គំនូរ" />
                                                <label
                                                  for="subject-math">គំនូរ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="រឿងនិទាន" />
                                                <label
                                                  for="subject-math">រឿងនិទាន</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សង្កេត" />
                                                <label
                                                  for="subject-math">សង្កេត</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ចម្រៀង" />
                                                <label
                                                  for="subject-math">ចម្រៀង</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ចិត្តចលភាព" />
                                                <label
                                                  for="subject-math">ចិត្តចលភាព</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="អង់គ្លេស" />
                                                <label
                                                  for="subject-math">អង់គ្លេស</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សិក្សាសីលធម៌" />
                                                <label
                                                  for="subject-math">សិក្សាសីលធម៌</label><br /></a>
                                              </li>
                                            </ul>
                                          </div>
                                          <input
                                            value={general_kindergaten}
                                            onInput={(e) => setgeneral_kindergaten(e.target.value)}
                                            autocomplete="off"
                                            className="form-control"
                                            style={{ color: 'black', lineHeight: '2' }}
                                            type="text"
                                            id="selectedSubjects" />

                                        </div>
                                        <div className="row">
                                          <div
                                            className="dropdown dropup">
                                            <button
                                              className="btn dropdown-toggle fw-bold"
                                              type="button"
                                              id="dropdownMenuButton2"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false">
                                              បឋមសិក្សា
                                            </button>
                                            <ul className="dropdown-menu menu-lg-scroll"
                                              style={{ color: 'black', lineHeight: '2' }}
                                              aria-labelledby="dropdownMenuButton2"
                                              id="subjectList2">
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="អក្សរផ្ចង់" />
                                                <label
                                                  for="subject-math">អក្សរផ្ចង់</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សរសេរតាមអាន" />
                                                <label
                                                  for="subject-math">សរសេរតាមអាន</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="អំណាន" />
                                                <label
                                                  for="subject-math">អំណាន</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="តែងសេចក្តី" />
                                                <label
                                                  for="subject-math">តែងសេចក្តី</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="គណិតវិទ្យា" />
                                                <label
                                                  for="subject-math">គណិតវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ភូមិវិទ្យា" />
                                                <label
                                                  for="subject-math">ភូមិវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ប្រវត្តិវិទ្យា" />
                                                <label
                                                  for="subject-math">ប្រវត្តិវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សិល្បៈ/គំនូរ" />
                                                <label
                                                  for="subject-math">សិល្បៈ/គំនូរ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សិក្សាសង្គម" />
                                                <label
                                                  for="subject-math">សិក្សាសង្គម</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="វិទ្យាសាស្ត្រ" />
                                                <label
                                                  for="subject-math">វិទ្យាសាស្ត្រ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="អក្សរសាស្ត្រខ្មែរ" />
                                                <label
                                                  for="subject-math">អក្សរសាស្ត្រខ្មែរ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="អង់គ្លេស" />
                                                <label
                                                  for="subject-math">អង់គ្លេស</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="កីឡា" />
                                                <label
                                                  for="subject-math">កីឡា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សិក្សាសីលធម៌" />
                                                <label
                                                  for="subject-math">សិក្សាសីលធម៌</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សកម្មភាព" />
                                                <label
                                                  for="subject-math">សកម្មភាព</label><br /></a>
                                              </li>

                                            </ul>
                                          </div>
                                          <input
                                            value={general_primary}
                                            onInput={(e) => setgeneral_primary(e.target.value)}
                                            autocomplete="off"
                                            className="form-control"
                                            style={{ color: 'black', lineHeight: '2' }}
                                            type="text"
                                            id="selectedSubjects2" />
                                        </div>
                                        <div className="row">
                                          <div
                                            className="dropdown dropup">
                                            <button
                                              className="btn dropdown-toggle fw-bold"
                                              type="button"
                                              id="dropdownMenuButton3"
                                              data-bs-toggle="dropdown"
                                              aria-expanded="false">
                                              អនុវិទ្យាល័យ-វិទ្យាល័យ
                                            </button>
                                            <ul className="dropdown-menu menu-lg-scroll"
                                              style={{ color: 'black', lineHeight: '2' }}
                                              aria-labelledby="dropdownMenuButton3"
                                              id="subjectList3">
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="អក្សរសាស្ត្រខ្មែរ" />
                                                <label
                                                  for="subject-math">អក្សរសាស្ត្រខ្មែរ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="គណិតវិទ្យា" />
                                                <label
                                                  for="subject-math">គណិតវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="រូបវិទ្យា" />
                                                <label
                                                  for="subject-math">រូបវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="គីមីវិទ្យា" />
                                                <label
                                                  for="subject-math">គីមីវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ជីវៈវិទ្យា" />
                                                <label
                                                  for="subject-math">ជីវៈវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ប្រវត្តិវិទ្យា" />
                                                <label
                                                  for="subject-math">ប្រវត្តិវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ផែនដីវិទ្យា" />
                                                <label
                                                  for="subject-math">ផែនដីវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សីលធម៌-ពលរដ្ឋ" />
                                                <label
                                                  for="subject-math">សីលធម៌-ពលរដ្ឋ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="ភូមិវិទ្យា" />
                                                <label
                                                  for="subject-math">ភូមិវិទ្យា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="អង់គ្លេស" />
                                                <label
                                                  for="subject-math">អង់គ្លេស</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="កីឡា" />
                                                <label
                                                  for="subject-math">កីឡា</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សិក្សាសីលធម៌" />
                                                <label
                                                  for="subject-math">សិក្សាសីលធម៌</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="គេហៈ" />
                                                <label
                                                  for="subject-math">គេហៈ</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សកម្មភាព" />
                                                <label
                                                  for="subject-math">សកម្មភាព</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="សេដ្ឋកិច្ច" />
                                                <label
                                                  for="subject-math">សេដ្ឋកិច្ច</label><br /></a>
                                              </li>
                                              <li><a
                                                className="dropdown-item"><input
                                                  type="checkbox"
                                                  id="subject-math"
                                                  value="កុំព្យូទ័រ" />
                                                <label
                                                  for="subject-math">កុំព្យូទ័រ</label><br /></a>
                                              </li>

                                            </ul>
                                          </div>
                                          <input
                                            value={general_secondary}
                                            onInput={(e) => setgeneral_secondary(e.target.value)}
                                            autocomplete="off"
                                            style={{ color: 'black', lineHeight: '2' }}
                                            className="form-control"
                                            type="text"
                                            id="selectedSubjects3" />

                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>

                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="card">
                                <div className="card-header">
                                  <h5><b>ព័ត៌មានគ្រួសារ</b>
                                  </h5>
                                </div>

                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <label
                                        for="fill29">ឈ្មោះឪពុក</label>
                                      <input autocomplete="off"
                                        value={father_name}
                                        onChange={(e) => setfather_name(e.target.value)}
                                        className="form-control"
                                        type="text"
                                        style={{ color: 'black', lineHeight: '2' }}
                                        name="teacher[father_name]"
                                        id="fill29" />
                                    </div>

                                    <div className="col-lg-3">
                                      <label
                                        for="fill30">មុខរបរ</label>
                                      <input className="form-control"
                                        value={father_occupation}
                                        onChange={(e) => setfather_occupation(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        type="text"
                                        name="teacher[father_occupation]"
                                        id="fill30" />
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-3">
                                      <label
                                        for="fill31">ឈ្មោះម្តាយ</label>
                                      <input autocomplete="off"
                                        value={mother_name}
                                        onChange={(e) => setmother_name(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        className="form-control"
                                        type="text"
                                        name="teacher[mother_name]"
                                        id="fill31" />
                                    </div>

                                    <div className="col-lg-3">
                                      <label
                                        for="fill32">មុខរបរ</label>
                                      <input className="form-control"
                                        value={mother_occupation}
                                        onChange={(e) => setmother_occupation(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        type="text"
                                        name="teacher[mother_occupation]"
                                        id="fill32" />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <label
                                        for="fill33">ឈ្មោះប្តី/ប្រព្ធ</label>
                                      <input autocomplete="off"
                                        value={spouse_name}
                                        onChange={(e) => setspouse_name(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        className="form-control"
                                        type="text"
                                        name="teacher[spouse_name]"
                                        id="fill33" />
                                    </div>

                                    <div className="col-lg-3">
                                      <label
                                        for="fill34">មុខរបរ</label>
                                      <input className="form-control"
                                        value={spouse_occupation}
                                        onChange={(e) => setspouse_occupation(e.target.value)}
                                        style={{ color: 'black', lineHeight: '2' }}
                                        type="text"
                                        name="teacher[spouse_occupation]"
                                        id="fill34" />
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button id="btnAdd" ref={btnAdd} onClick={handleSubmit}
                      className="btn btn-success btn-rounded btn-fw btn-sm">បញ្ចូល</button>
                    <button id="btnUpdate" ref={btnUp} onClick={UpdateInformation}
                      className="btn btn-warning btn-rounded btn-fw btn-sm">កែ</button>
                    <button id="btnDelete" ref={btnDe} onClick={RemoveInformation}
                      className="btn btn-danger btn-rounded btn-fw btn-sm">លុប</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="modal fade" id="add_student_backup" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header text-center">
            </div>
            <div className="modal-body">
              <label for="formFile" class="form-label">សូមជ្រើសរើសទិន្ន័យជា (.json)</label>
              <input class="form-control" type="file" accept=".json" onChange={handleFileChange} />
            </div>
            <div className="modal-footer">
              <button id="btnUpgrade"
                style={{
                  color: 'white'
                }}
                onClick={saveDataAll}
                className="btn btn-success btn-rounded btn-fw btn-sm">Backup</button>
              <button id="btnUpgrade"
                style={{
                  color: 'darkblue'
                }}
                onClick={uploadFileToFirebase}
                className="btn btn-warning btn-rounded btn-fw btn-sm">Restore</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Teachers
