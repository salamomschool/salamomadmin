const updateTimeTable = (e) => {
  const db = getDatabase();
  const id = user_id.current.value
  const imgUrl = user_img.current.value
  const nickname = user_nick.current.value
  const subs = set_user_sub.current.value
  const grade = user_g
  if (data_cell === 'cell1') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_mor_t1: grade,
      img_mon_mor_t1: imgUrl,
      sub_mon_mor_t1: subs,
      tname_mon_mor_t1: id,
      t_grade_mon_mor_t1: getT_grade,
      teacher_type_mon_mor_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t1: grade,
      img_mon_mor_t1: imgUrl,
      sub_mon_mor_t1: subs,
      tname_mon_mor_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t1: grade,
        img_mon_mor_t1: imgUrl,
        sub_mon_mor_t1: subs,
        tname_mon_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t1: grade,
        img_mon_mor_t1: imgUrl,
        sub_mon_mor_t1: subs,
        tname_mon_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t1: grade,
        img_mon_mor_t1: imgUrl,
        sub_mon_mor_t1: subs,
        tname_mon_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell2') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_mor_t2: grade,
      img_mon_mor_t2: imgUrl,
      sub_mon_mor_t2: subs,
      tname_mon_mor_t2: id,
      t_grade_mon_mor_t2: getT_grade,
      teacher_type_mon_mor_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t2: grade,
      img_mon_mor_t2: imgUrl,
      sub_mon_mor_t2: subs,
      tname_mon_mor_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t2: grade,
        img_mon_mor_t2: imgUrl,
        sub_mon_mor_t2: subs,
        tname_mon_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t2: grade,
        img_mon_mor_t2: imgUrl,
        sub_mon_mor_t2: subs,
        tname_mon_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t2: grade,
        img_mon_mor_t2: imgUrl,
        sub_mon_mor_t2: subs,
        tname_mon_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell3') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_mor_t3: grade,
      img_mon_mor_t3: imgUrl,
      sub_mon_mor_t3: subs,
      tname_mon_mor_t3: id,
      t_grade_mon_mor_t3: getT_grade,
      teacher_type_mon_mor_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t3: grade,
      img_mon_mor_t3: imgUrl,
      sub_mon_mor_t3: subs,
      tname_mon_mor_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t3: grade,
        img_mon_mor_t3: imgUrl,
        sub_mon_mor_t3: subs,
        tname_mon_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t3: grade,
        img_mon_mor_t3: imgUrl,
        sub_mon_mor_t3: subs,
        tname_mon_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t3: grade,
        img_mon_mor_t3: imgUrl,
        sub_mon_mor_t3: subs,
        tname_mon_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell4') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_mor_t4: grade,
      img_mon_mor_t4: imgUrl,
      sub_mon_mor_t4: subs,
      tname_mon_mor_t4: id,
      t_grade_mon_mor_t4: getT_grade,
      teacher_type_mon_mor_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t4: grade,
      img_mon_mor_t4: imgUrl,
      sub_mon_mor_t4: subs,
      tname_mon_mor_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t4: grade,
        img_mon_mor_t4: imgUrl,
        sub_mon_mor_t4: subs,
        tname_mon_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t4: grade,
        img_mon_mor_t4: imgUrl,
        sub_mon_mor_t4: subs,
        tname_mon_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t4: grade,
        img_mon_mor_t4: imgUrl,
        sub_mon_mor_t4: subs,
        tname_mon_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell5') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_aft_t1: grade,
      img_mon_aft_t1: imgUrl,
      sub_mon_aft_t1: subs,
      tname_mon_aft_t1: id,
      t_grade_mon_aft_t1: getT_grade,
      teacher_type_mon_aft_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t1: grade,
      img_mon_aft_t1: imgUrl,
      sub_mon_aft_t1: subs,
      tname_mon_aft_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t1: grade,
        img_mon_aft_t1: imgUrl,
        sub_mon_aft_t1: subs,
        tname_mon_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t1: grade,
        img_mon_aft_t1: imgUrl,
        sub_mon_aft_t1: subs,
        tname_mon_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t1: grade,
        img_mon_aft_t1: imgUrl,
        sub_mon_aft_t1: subs,
        tname_mon_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell6') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_aft_t2: grade,
      img_mon_aft_t2: imgUrl,
      sub_mon_aft_t2: subs,
      tname_mon_aft_t2: id,
      t_grade_mon_aft_t2: getT_grade,
      teacher_type_mon_aft_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t2: grade,
      img_mon_aft_t2: imgUrl,
      sub_mon_aft_t2: subs,
      tname_mon_aft_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t2: grade,
        img_mon_aft_t2: imgUrl,
        sub_mon_aft_t2: subs,
        tname_mon_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t2: grade,
        img_mon_aft_t2: imgUrl,
        sub_mon_aft_t2: subs,
        tname_mon_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t2: grade,
        img_mon_aft_t2: imgUrl,
        sub_mon_aft_t2: subs,
        tname_mon_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell7') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_aft_t3: grade,
      img_mon_aft_t3: imgUrl,
      sub_mon_aft_t3: subs,
      tname_mon_aft_t3: id,
      t_grade_mon_aft_t3: getT_grade,
      teacher_type_mon_aft_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t3: grade,
      img_mon_aft_t3: imgUrl,
      sub_mon_aft_t3: subs,
      tname_mon_aft_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t3: grade,
        img_mon_aft_t3: imgUrl,
        sub_mon_aft_t3: subs,
        tname_mon_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t3: grade,
        img_mon_aft_t3: imgUrl,
        sub_mon_aft_t3: subs,
        tname_mon_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t3: grade,
        img_mon_aft_t3: imgUrl,
        sub_mon_aft_t3: subs,
        tname_mon_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell8') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_mon_aft_t4: grade,
      img_mon_aft_t4: imgUrl,
      sub_mon_aft_t4: subs,
      tname_mon_aft_t4: id,
      t_grade_mon_aft_t4: getT_grade,
      teacher_type_mon_aft_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t4: grade,
      img_mon_aft_t4: imgUrl,
      sub_mon_aft_t4: subs,
      tname_mon_aft_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,

    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t4: grade,
        img_mon_aft_t4: imgUrl,
        sub_mon_aft_t4: subs,
        tname_mon_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t4: grade,
        img_mon_aft_t4: imgUrl,
        sub_mon_aft_t4: subs,
        tname_mon_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t4: grade,
        img_mon_aft_t4: imgUrl,
        sub_mon_aft_t4: subs,
        tname_mon_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell9') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_mor_t1: grade,
      img_tue_mor_t1: imgUrl,
      sub_tue_mor_t1: subs,
      tname_tue_mor_t1: id,
      t_grade_tue_mor_t1: getT_grade,
      teacher_type_tue_mor_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t1: grade,
      img_tue_mor_t1: imgUrl,
      sub_tue_mor_t1: subs,
      tname_tue_mor_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t1: grade,
        img_tue_mor_t1: imgUrl,
        sub_tue_mor_t1: subs,
        tname_tue_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t1: grade,
        img_tue_mor_t1: imgUrl,
        sub_tue_mor_t1: subs,
        tname_tue_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t1: grade,
        img_tue_mor_t1: imgUrl,
        sub_tue_mor_t1: subs,
        tname_tue_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell10') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_mor_t2: grade,
      img_tue_mor_t2: imgUrl,
      sub_tue_mor_t2: subs,
      tname_tue_mor_t2: id,
      t_grade_tue_mor_t2: getT_grade,
      teacher_type_tue_mor_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t2: grade,
      img_tue_mor_t2: imgUrl,
      sub_tue_mor_t2: subs,
      tname_tue_mor_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t2: grade,
        img_tue_mor_t2: imgUrl,
        sub_tue_mor_t2: subs,
        tname_tue_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t2: grade,
        img_tue_mor_t2: imgUrl,
        sub_tue_mor_t2: subs,
        tname_tue_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t2: grade,
        img_tue_mor_t2: imgUrl,
        sub_tue_mor_t2: subs,
        tname_tue_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell11') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_mor_t3: grade,
      img_tue_mor_t3: imgUrl,
      sub_tue_mor_t3: subs,
      tname_tue_mor_t3: id,
      t_grade_tue_mor_t3: getT_grade,
      teacher_type_tue_mor_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t3: grade,
      img_tue_mor_t3: imgUrl,
      sub_tue_mor_t3: subs,
      tname_tue_mor_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t3: grade,
        img_tue_mor_t3: imgUrl,
        sub_tue_mor_t3: subs,
        tname_tue_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t3: grade,
        img_tue_mor_t3: imgUrl,
        sub_tue_mor_t3: subs,
        tname_tue_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t3: grade,
        img_tue_mor_t3: imgUrl,
        sub_tue_mor_t3: subs,
        tname_tue_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell12') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_mor_t4: grade,
      img_tue_mor_t4: imgUrl,
      sub_tue_mor_t4: subs,
      tname_tue_mor_t4: id,
      t_grade_tue_mor_t4: getT_grade,
      teacher_type_tue_mor_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t4: grade,
      img_tue_mor_t4: imgUrl,
      sub_tue_mor_t4: subs,
      tname_tue_mor_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t4: grade,
        img_tue_mor_t4: imgUrl,
        sub_tue_mor_t4: subs,
        tname_tue_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t4: grade,
        img_tue_mor_t4: imgUrl,
        sub_tue_mor_t4: subs,
        tname_tue_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t4: grade,
        img_tue_mor_t4: imgUrl,
        sub_tue_mor_t4: subs,
        tname_tue_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell13') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_aft_t1: grade,
      img_tue_aft_t1: imgUrl,
      sub_tue_aft_t1: subs,
      tname_tue_aft_t1: id,
      t_grade_tue_aft_t1: getT_grade,
      teacher_type_tue_aft_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t1: grade,
      img_tue_aft_t1: imgUrl,
      sub_tue_aft_t1: subs,
      tname_tue_aft_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t1: grade,
        img_tue_aft_t1: imgUrl,
        sub_tue_aft_t1: subs,
        tname_tue_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t1: grade,
        img_tue_aft_t1: imgUrl,
        sub_tue_aft_t1: subs,
        tname_tue_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t1: grade,
        img_tue_aft_t1: imgUrl,
        sub_tue_aft_t1: subs,
        tname_tue_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell14') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_aft_t2: grade,
      img_tue_aft_t2: imgUrl,
      sub_tue_aft_t2: subs,
      tname_tue_aft_t2: id,
      t_grade_tue_aft_t2: getT_grade,
      teacher_type_tue_aft_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t2: grade,
      img_tue_aft_t2: imgUrl,
      sub_tue_aft_t2: subs,
      tname_tue_aft_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t2: grade,
        img_tue_aft_t2: imgUrl,
        sub_tue_aft_t2: subs,
        tname_tue_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t2: grade,
        img_tue_aft_t2: imgUrl,
        sub_tue_aft_t2: subs,
        tname_tue_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t2: grade,
        img_tue_aft_t2: imgUrl,
        sub_tue_aft_t2: subs,
        tname_tue_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell15') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_aft_t3: grade,
      img_tue_aft_t3: imgUrl,
      sub_tue_aft_t3: subs,
      tname_tue_aft_t3: id,
      t_grade_tue_aft_t3: getT_grade,
      teacher_type_tue_aft_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t3: grade,
      img_tue_aft_t3: imgUrl,
      sub_tue_aft_t3: subs,
      tname_tue_aft_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t3: grade,
        img_tue_aft_t3: imgUrl,
        sub_tue_aft_t3: subs,
        tname_tue_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t3: grade,
        img_tue_aft_t3: imgUrl,
        sub_tue_aft_t3: subs,
        tname_tue_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t3: grade,
        img_tue_aft_t3: imgUrl,
        sub_tue_aft_t3: subs,
        tname_tue_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell16') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_tue_aft_t4: grade,
      img_tue_aft_t4: imgUrl,
      sub_tue_aft_t4: subs,
      tname_tue_aft_t4: id,
      t_grade_tue_aft_t4: getT_grade,
      teacher_type_tue_aft_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t4: grade,
      img_tue_aft_t4: imgUrl,
      sub_tue_aft_t4: subs,
      tname_tue_aft_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t4: grade,
        img_tue_aft_t4: imgUrl,
        sub_tue_aft_t4: subs,
        tname_tue_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t4: grade,
        img_tue_aft_t4: imgUrl,
        sub_tue_aft_t4: subs,
        tname_tue_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t4: grade,
        img_tue_aft_t4: imgUrl,
        sub_tue_aft_t4: subs,
        tname_tue_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell17') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_mor_t1: grade,
      img_wed_mor_t1: imgUrl,
      sub_wed_mor_t1: subs,
      tname_wed_mor_t1: id,
      t_grade_wed_mor_t1: getT_grade,
      teacher_type_wed_mor_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t1: grade,
      img_wed_mor_t1: imgUrl,
      sub_wed_mor_t1: subs,
      tname_wed_mor_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t1: grade,
        img_wed_mor_t1: imgUrl,
        sub_wed_mor_t1: subs,
        tname_wed_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t1: grade,
        img_wed_mor_t1: imgUrl,
        sub_wed_mor_t1: subs,
        tname_wed_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t1: grade,
        img_wed_mor_t1: imgUrl,
        sub_wed_mor_t1: subs,
        tname_wed_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell18') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_mor_t2: grade,
      img_wed_mor_t2: imgUrl,
      sub_wed_mor_t2: subs,
      tname_wed_mor_t2: id,
      t_grade_wed_mor_t2: getT_grade,
      teacher_type_wed_mor_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t2: grade,
      img_wed_mor_t2: imgUrl,
      sub_wed_mor_t2: subs,
      tname_wed_mor_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t2: grade,
        img_wed_mor_t2: imgUrl,
        sub_wed_mor_t2: subs,
        tname_wed_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t2: grade,
        img_wed_mor_t2: imgUrl,
        sub_wed_mor_t2: subs,
        tname_wed_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t2: grade,
        img_wed_mor_t2: imgUrl,
        sub_wed_mor_t2: subs,
        tname_wed_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell19') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_mor_t3: grade,
      img_wed_mor_t3: imgUrl,
      sub_wed_mor_t3: subs,
      tname_wed_mor_t3: id,
      t_grade_wed_mor_t3: getT_grade,
      teacher_type_wed_mor_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t3: grade,
      img_wed_mor_t3: imgUrl,
      sub_wed_mor_t3: subs,
      tname_wed_mor_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t3: grade,
        img_wed_mor_t3: imgUrl,
        sub_wed_mor_t3: subs,
        tname_wed_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t3: grade,
        img_wed_mor_t3: imgUrl,
        sub_wed_mor_t3: subs,
        tname_wed_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t3: grade,
        img_wed_mor_t3: imgUrl,
        sub_wed_mor_t3: subs,
        tname_wed_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell20') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_mor_t4: grade,
      img_wed_mor_t4: imgUrl,
      sub_wed_mor_t4: subs,
      tname_wed_mor_t4: id,
      t_grade_wed_mor_t4: getT_grade,
      teacher_type_wed_mor_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t4: grade,
      img_wed_mor_t4: imgUrl,
      sub_wed_mor_t4: subs,
      tname_wed_mor_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t4: grade,
        img_wed_mor_t4: imgUrl,
        sub_wed_mor_t4: subs,
        tname_wed_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t4: grade,
        img_wed_mor_t4: imgUrl,
        sub_wed_mor_t4: subs,
        tname_wed_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t4: grade,
        img_wed_mor_t4: imgUrl,
        sub_wed_mor_t4: subs,
        tname_wed_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell21') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_aft_t1: grade,
      img_wed_aft_t1: imgUrl,
      sub_wed_aft_t1: subs,
      tname_wed_aft_t1: id,
      t_grade_wed_aft_t1: getT_grade,
      teacher_type_wed_aft_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t1: grade,
      img_wed_aft_t1: imgUrl,
      sub_wed_aft_t1: subs,
      tname_wed_aft_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t1: grade,
        img_wed_aft_t1: imgUrl,
        sub_wed_aft_t1: subs,
        tname_wed_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t1: grade,
        img_wed_aft_t1: imgUrl,
        sub_wed_aft_t1: subs,
        tname_wed_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t1: grade,
        img_wed_aft_t1: imgUrl,
        sub_wed_aft_t1: subs,
        tname_wed_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell22') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_aft_t2: grade,
      img_wed_aft_t2: imgUrl,
      sub_wed_aft_t2: subs,
      tname_wed_aft_t2: id,
      t_grade_wed_aft_t2: getT_grade,
      teacher_type_wed_aft_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t2: grade,
      img_wed_aft_t2: imgUrl,
      sub_wed_aft_t2: subs,
      tname_wed_aft_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t2: grade,
        img_wed_aft_t2: imgUrl,
        sub_wed_aft_t2: subs,
        tname_wed_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t2: grade,
        img_wed_aft_t2: imgUrl,
        sub_wed_aft_t2: subs,
        tname_wed_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t2: grade,
        img_wed_aft_t2: imgUrl,
        sub_wed_aft_t2: subs,
        tname_wed_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell23') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_aft_t3: grade,
      img_wed_aft_t3: imgUrl,
      sub_wed_aft_t3: subs,
      tname_wed_aft_t3: id,
      t_grade_wed_aft_t3: getT_grade,
      teacher_type_wed_aft_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t3: grade,
      img_wed_aft_t3: imgUrl,
      sub_wed_aft_t3: subs,
      tname_wed_aft_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t3: grade,
        img_wed_aft_t3: imgUrl,
        sub_wed_aft_t3: subs,
        tname_wed_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t3: grade,
        img_wed_aft_t3: imgUrl,
        sub_wed_aft_t3: subs,
        tname_wed_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t3: grade,
        img_wed_aft_t3: imgUrl,
        sub_wed_aft_t3: subs,
        tname_wed_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell24') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_wed_aft_t4: grade,
      img_wed_aft_t4: imgUrl,
      sub_wed_aft_t4: subs,
      tname_wed_aft_t4: id,
      t_grade_wed_aft_t4: getT_grade,
      teacher_type_wed_aft_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t4: grade,
      img_wed_aft_t4: imgUrl,
      sub_wed_aft_t4: subs,
      tname_wed_aft_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t4: grade,
        img_wed_aft_t4: imgUrl,
        sub_wed_aft_t4: subs,
        tname_wed_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t4: grade,
        img_wed_aft_t4: imgUrl,
        sub_wed_aft_t4: subs,
        tname_wed_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t4: grade,
        img_wed_aft_t4: imgUrl,
        sub_wed_aft_t4: subs,
        tname_wed_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell25') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_mor_t1: grade,
      img_thu_mor_t1: imgUrl,
      sub_thu_mor_t1: subs,
      tname_thu_mor_t1: id,
      t_grade_thu_mor_t1: getT_grade,
      teacher_type_thu_mor_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t1: grade,
      img_thu_mor_t1: imgUrl,
      sub_thu_mor_t1: subs,
      tname_thu_mor_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t1: grade,
        img_thu_mor_t1: imgUrl,
        sub_thu_mor_t1: subs,
        tname_thu_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t1: grade,
        img_thu_mor_t1: imgUrl,
        sub_thu_mor_t1: subs,
        tname_thu_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t1: grade,
        img_thu_mor_t1: imgUrl,
        sub_thu_mor_t1: subs,
        tname_thu_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell26') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_mor_t2: grade,
      img_thu_mor_t2: imgUrl,
      sub_thu_mor_t2: subs,
      tname_thu_mor_t2: id,
      t_grade_thu_mor_t2: getT_grade,
      teacher_type_thu_mor_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t2: grade,
      img_thu_mor_t2: imgUrl,
      sub_thu_mor_t2: subs,
      tname_thu_mor_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t2: grade,
        img_thu_mor_t2: imgUrl,
        sub_thu_mor_t2: subs,
        tname_thu_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t2: grade,
        img_thu_mor_t2: imgUrl,
        sub_thu_mor_t2: subs,
        tname_thu_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t2: grade,
        img_thu_mor_t2: imgUrl,
        sub_thu_mor_t2: subs,
        tname_thu_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell27') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_mor_t3: grade,
      img_thu_mor_t3: imgUrl,
      sub_thu_mor_t3: subs,
      tname_thu_mor_t3: id,
      t_grade_thu_mor_t3: getT_grade,
      teacher_type_thu_mor_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t3: grade,
      img_thu_mor_t3: imgUrl,
      sub_thu_mor_t3: subs,
      tname_thu_mor_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t3: grade,
        img_thu_mor_t3: imgUrl,
        sub_thu_mor_t3: subs,
        tname_thu_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t3: grade,
        img_thu_mor_t3: imgUrl,
        sub_thu_mor_t3: subs,
        tname_thu_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t3: grade,
        img_thu_mor_t3: imgUrl,
        sub_thu_mor_t3: subs,
        tname_thu_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell28') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_mor_t4: grade,
      img_thu_mor_t4: imgUrl,
      sub_thu_mor_t4: subs,
      tname_thu_mor_t4: id,
      t_grade_thu_mor_t4: getT_grade,
      teacher_type_thu_mor_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t4: grade,
      img_thu_mor_t4: imgUrl,
      sub_thu_mor_t4: subs,
      tname_thu_mor_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t4: grade,
        img_thu_mor_t4: imgUrl,
        sub_thu_mor_t4: subs,
        tname_thu_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t4: grade,
        img_thu_mor_t4: imgUrl,
        sub_thu_mor_t4: subs,
        tname_thu_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t4: grade,
        img_thu_mor_t4: imgUrl,
        sub_thu_mor_t4: subs,
        tname_thu_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell29') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_aft_t1: grade,
      img_thu_aft_t1: imgUrl,
      sub_thu_aft_t1: subs,
      tname_thu_aft_t1: id,
      t_grade_thu_aft_t1: getT_grade,
      teacher_type_thu_aft_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t1: grade,
      img_thu_aft_t1: imgUrl,
      sub_thu_aft_t1: subs,
      tname_thu_aft_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t1: grade,
        img_thu_aft_t1: imgUrl,
        sub_thu_aft_t1: subs,
        tname_thu_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t1: grade,
        img_thu_aft_t1: imgUrl,
        sub_thu_aft_t1: subs,
        tname_thu_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t1: grade,
        img_thu_aft_t1: imgUrl,
        sub_thu_aft_t1: subs,
        tname_thu_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell30') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_aft_t2: grade,
      img_thu_aft_t2: imgUrl,
      sub_thu_aft_t2: subs,
      tname_thu_aft_t2: id,
      t_grade_thu_aft_t2: getT_grade,
      teacher_type_thu_aft_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t2: grade,
      img_thu_aft_t2: imgUrl,
      sub_thu_aft_t2: subs,
      tname_thu_aft_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t2: grade,
        img_thu_aft_t2: imgUrl,
        sub_thu_aft_t2: subs,
        tname_thu_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t2: grade,
        img_thu_aft_t2: imgUrl,
        sub_thu_aft_t2: subs,
        tname_thu_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t2: grade,
        img_thu_aft_t2: imgUrl,
        sub_thu_aft_t2: subs,
        tname_thu_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell31') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_aft_t3: grade,
      img_thu_aft_t3: imgUrl,
      sub_thu_aft_t3: subs,
      tname_thu_aft_t3: id,
      t_grade_thu_aft_t3: getT_grade,
      teacher_type_thu_aft_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t3: grade,
        img_thu_aft_t3: imgUrl,
        sub_thu_aft_t3: subs,
        tname_thu_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t3: grade,
        img_thu_aft_t3: imgUrl,
        sub_thu_aft_t3: subs,
        tname_thu_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t3: grade,
      img_thu_aft_t3: imgUrl,
      sub_thu_aft_t3: subs,
      tname_thu_aft_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t3: grade,
        img_thu_aft_t3: imgUrl,
        sub_thu_aft_t3: subs,
        tname_thu_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell32') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_thu_aft_t4: grade,
      img_thu_aft_t4: imgUrl,
      sub_thu_aft_t4: subs,
      tname_thu_aft_t4: id,
      t_grade_thu_aft_t4: getT_grade,
      teacher_type_thu_aft_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t4: grade,
      img_thu_aft_t4: imgUrl,
      sub_thu_aft_t4: subs,
      tname_thu_aft_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t4: grade,
        img_thu_aft_t4: imgUrl,
        sub_thu_aft_t4: subs,
        tname_thu_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t4: grade,
        img_thu_aft_t4: imgUrl,
        sub_thu_aft_t4: subs,
        tname_thu_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t4: grade,
        img_thu_aft_t4: imgUrl,
        sub_thu_aft_t4: subs,
        tname_thu_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell33') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_mor_t1: grade,
      img_fri_mor_t1: imgUrl,
      sub_fri_mor_t1: subs,
      tname_fri_mor_t1: id,
      t_grade_fri_mor_t1: getT_grade,
      teacher_type_fri_mor_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t1: grade,
      img_fri_mor_t1: imgUrl,
      sub_fri_mor_t1: subs,
      tname_fri_mor_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t1: grade,
        img_fri_mor_t1: imgUrl,
        sub_fri_mor_t1: subs,
        tname_fri_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t1: grade,
        img_fri_mor_t1: imgUrl,
        sub_fri_mor_t1: subs,
        tname_fri_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t1: grade,
        img_fri_mor_t1: imgUrl,
        sub_fri_mor_t1: subs,
        tname_fri_mor_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell34') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_mor_t2: grade,
      img_fri_mor_t2: imgUrl,
      sub_fri_mor_t2: subs,
      tname_fri_mor_t2: id,
      t_grade_fri_mor_t2: getT_grade,
      teacher_type_fri_mor_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t2: grade,
      img_fri_mor_t2: imgUrl,
      sub_fri_mor_t2: subs,
      tname_fri_mor_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t2: grade,
        img_fri_mor_t2: imgUrl,
        sub_fri_mor_t2: subs,
        tname_fri_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t2: grade,
        img_fri_mor_t2: imgUrl,
        sub_fri_mor_t2: subs,
        tname_fri_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t2: grade,
        img_fri_mor_t2: imgUrl,
        sub_fri_mor_t2: subs,
        tname_fri_mor_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell35') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_mor_t3: grade,
      img_fri_mor_t3: imgUrl,
      sub_fri_mor_t3: subs,
      tname_fri_mor_t3: id,
      t_grade_fri_mor_t3: getT_grade,
      teacher_type_fri_mor_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t3: grade,
      img_fri_mor_t3: imgUrl,
      sub_fri_mor_t3: subs,
      tname_fri_mor_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t3: grade,
        img_fri_mor_t3: imgUrl,
        sub_fri_mor_t3: subs,
        tname_fri_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t3: grade,
        img_fri_mor_t3: imgUrl,
        sub_fri_mor_t3: subs,
        tname_fri_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t3: grade,
        img_fri_mor_t3: imgUrl,
        sub_fri_mor_t3: subs,
        tname_fri_mor_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell36') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_mor_t4: grade,
      img_fri_mor_t4: imgUrl,
      sub_fri_mor_t4: subs,
      tname_fri_mor_t4: id,
      t_grade_fri_mor_t4: getT_grade,
      teacher_type_fri_mor_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t4: grade,
      img_fri_mor_t4: imgUrl,
      sub_fri_mor_t4: subs,
      tname_fri_mor_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t4: grade,
        img_fri_mor_t4: imgUrl,
        sub_fri_mor_t4: subs,
        tname_fri_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t4: grade,
        img_fri_mor_t4: imgUrl,
        sub_fri_mor_t4: subs,
        tname_fri_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t4: grade,
        img_fri_mor_t4: imgUrl,
        sub_fri_mor_t4: subs,
        tname_fri_mor_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell37') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_aft_t1: grade,
      img_fri_aft_t1: imgUrl,
      sub_fri_aft_t1: subs,
      tname_fri_aft_t1: id,
      t_grade_fri_aft_t1: getT_grade,
      teacher_type_fri_aft_t1: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t1: grade,
      img_fri_aft_t1: imgUrl,
      sub_fri_aft_t1: subs,
      tname_fri_aft_t1: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t1: grade,
        img_fri_aft_t1: imgUrl,
        sub_fri_aft_t1: subs,
        tname_fri_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t1: grade,
        img_fri_aft_t1: imgUrl,
        sub_fri_aft_t1: subs,
        tname_fri_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t1: grade,
        img_fri_aft_t1: imgUrl,
        sub_fri_aft_t1: subs,
        tname_fri_aft_t1: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell38') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_aft_t2: grade,
      img_fri_aft_t2: imgUrl,
      sub_fri_aft_t2: subs,
      tname_fri_aft_t2: id,
      t_grade_fri_aft_t2: getT_grade,
      teacher_type_fri_aft_t2: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t2: grade,
      img_fri_aft_t2: imgUrl,
      sub_fri_aft_t2: subs,
      tname_fri_aft_t2: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t2: grade,
        img_fri_aft_t2: imgUrl,
        sub_fri_aft_t2: subs,
        tname_fri_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t2: grade,
        img_fri_aft_t2: imgUrl,
        sub_fri_aft_t2: subs,
        tname_fri_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t2: grade,
        img_fri_aft_t2: imgUrl,
        sub_fri_aft_t2: subs,
        tname_fri_aft_t2: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell39') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_aft_t3: grade,
      img_fri_aft_t3: imgUrl,
      sub_fri_aft_t3: subs,
      tname_fri_aft_t3: id,
      t_grade_fri_aft_t3: getT_grade,
      teacher_type_fri_aft_t3: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t3: grade,
      img_fri_aft_t3: imgUrl,
      sub_fri_aft_t3: subs,
      tname_fri_aft_t3: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t3: grade,
        img_fri_aft_t3: imgUrl,
        sub_fri_aft_t3: subs,
        tname_fri_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t3: grade,
        img_fri_aft_t3: imgUrl,
        sub_fri_aft_t3: subs,
        tname_fri_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t3: grade,
        img_fri_aft_t3: imgUrl,
        sub_fri_aft_t3: subs,
        tname_fri_aft_t3: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else if (data_cell === 'cell40') {

    Swal.fire({
      text: "ព័ត៍មានបានបញ្ចូលត្រឹមត្រូវ!",
      icon: "success",
      showConfirmButton: false,
      timer: 2200,
    });
    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/${selectTimeTable}/` + grade), {
      grade_fri_aft_t4: grade,
      img_fri_aft_t4: imgUrl,
      sub_fri_aft_t4: subs,
      tname_fri_aft_t4: id,
      t_grade_fri_aft_t4: getT_grade,
      teacher_type_fri_aft_t4: getteacher_type,
      nickname: nickname,
      permission: userType,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t4: grade,
      img_fri_aft_t4: imgUrl,
      sub_fri_aft_t4: subs,
      tname_fri_aft_t4: id,
      nickname: nickname,
      permission: userType,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type,
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t4: grade,
        img_fri_aft_t4: imgUrl,
        sub_fri_aft_t4: subs,
        tname_fri_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t4: grade,
        img_fri_aft_t4: imgUrl,
        sub_fri_aft_t4: subs,
        tname_fri_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t4: grade,
        img_fri_aft_t4: imgUrl,
        sub_fri_aft_t4: subs,
        tname_fri_aft_t4: id,
        nickname: nickname,
        permission: userType,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type,
      });
    }
  }
  else {
    Swal.fire({
      text: "ព័ត៍មានកែមិនត្រឹមត្រូវ!",
      icon: "error",
      showConfirmButton: false,
      timer: 1600,
    });
  }
}
