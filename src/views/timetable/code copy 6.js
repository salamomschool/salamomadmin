const removeTimeTable = (e) => {
  const db = getDatabase();
  const id = user_id.current.value
  const imgUrl = user_img.current.value
  const nickname = user_nick
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
      grade_mon_mor_t1: null,
      img_mon_mor_t1: null,
      sub_mon_mor_t1: null,
      tname_mon_mor_t1: null,
      teacher_type_mon_mor_t1: null,
      t_grade_mon_mor_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t1: null,
      img_mon_mor_t1: null,
      sub_mon_mor_t1: null,
      tname_mon_mor_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t1: null,
        img_mon_mor_t1: null,
        sub_mon_mor_t1: null,
        tname_mon_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t1: null,
        img_mon_mor_t1: null,
        sub_mon_mor_t1: null,
        tname_mon_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t1: null,
        img_mon_mor_t1: null,
        sub_mon_mor_t1: null,
        tname_mon_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t1: null,
        img_mon_mor_t1: null,
        sub_mon_mor_t1: null,
        tname_mon_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_mor_t1: null,
          img_mon_mor_t1: null,
          sub_mon_mor_t1: null,
          tname_mon_mor_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_mon_mor_t2: null,
      img_mon_mor_t2: null,
      sub_mon_mor_t2: null,
      tname_mon_mor_t2: null,
      t_grade_mon_mor_t2: null,
      teacher_type_mon_mor_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t2: null,
      img_mon_mor_t2: null,
      sub_mon_mor_t2: null,
      tname_mon_mor_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t2: null,
        img_mon_mor_t2: null,
        sub_mon_mor_t2: null,
        tname_mon_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t2: null,
        img_mon_mor_t2: null,
        sub_mon_mor_t2: null,
        tname_mon_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t2: null,
        img_mon_mor_t2: null,
        sub_mon_mor_t2: null,
        tname_mon_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t2: null,
        img_mon_mor_t2: null,
        sub_mon_mor_t2: null,
        tname_mon_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_mor_t2: null,
          img_mon_mor_t2: null,
          sub_mon_mor_t2: null,
          tname_mon_mor_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_mon_mor_t3: null,
      img_mon_mor_t3: null,
      sub_mon_mor_t3: null,
      tname_mon_mor_t3: null,
      t_grade_mon_mor_t3: null,
      teacher_type_mon_mor_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t3: null,
      img_mon_mor_t3: null,
      sub_mon_mor_t3: null,
      tname_mon_mor_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t3: null,
        img_mon_mor_t3: null,
        sub_mon_mor_t3: null,
        tname_mon_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t3: null,
        img_mon_mor_t3: null,
        sub_mon_mor_t3: null,
        tname_mon_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t3: null,
        img_mon_mor_t3: null,
        sub_mon_mor_t3: null,
        tname_mon_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t3: null,
        img_mon_mor_t3: null,
        sub_mon_mor_t3: null,
        tname_mon_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_mor_t3: null,
          img_mon_mor_t3: null,
          sub_mon_mor_t3: null,
          tname_mon_mor_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_mon_mor_t4: null,
      img_mon_mor_t4: null,
      sub_mon_mor_t4: null,
      tname_mon_mor_t4: null,
      t_grade_mon_mor_t4: null,
      teacher_type_mon_mor_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_mor_t4: null,
      img_mon_mor_t4: null,
      sub_mon_mor_t4: null,
      tname_mon_mor_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_mor_t4: null,
        img_mon_mor_t4: null,
        sub_mon_mor_t4: null,
        tname_mon_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_mor_t4: null,
        img_mon_mor_t4: null,
        sub_mon_mor_t4: null,
        tname_mon_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t4: null,
        img_mon_mor_t4: null,
        sub_mon_mor_t4: null,
        tname_mon_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_mor_t4: null,
        img_mon_mor_t4: null,
        sub_mon_mor_t4: null,
        tname_mon_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_mor_t4: null,
          img_mon_mor_t4: null,
          sub_mon_mor_t4: null,
          tname_mon_mor_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_mon_aft_t1: null,
      img_mon_aft_t1: null,
      sub_mon_aft_t1: null,
      tname_mon_aft_t1: null,
      t_grade_mon_aft_t1: null,
      teacher_type_mon_aft_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t1: null,
      img_mon_aft_t1: null,
      sub_mon_aft_t1: null,
      tname_mon_aft_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t1: null,
        img_mon_aft_t1: null,
        sub_mon_aft_t1: null,
        tname_mon_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t1: null,
        img_mon_aft_t1: null,
        sub_mon_aft_t1: null,
        tname_mon_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t1: null,
        img_mon_aft_t1: null,
        sub_mon_aft_t1: null,
        tname_mon_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t1: null,
        img_mon_aft_t1: null,
        sub_mon_aft_t1: null,
        tname_mon_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_aft_t1: null,
          img_mon_aft_t1: null,
          sub_mon_aft_t1: null,
          tname_mon_aft_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_mon_aft_t2: null,
      img_mon_aft_t2: null,
      sub_mon_aft_t2: null,
      tname_mon_aft_t2: null,
      t_grade_mon_aft_t2: null,
      teacher_type_mon_aft_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t2: null,
      img_mon_aft_t2: null,
      sub_mon_aft_t2: null,
      tname_mon_aft_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t2: null,
        img_mon_aft_t2: null,
        sub_mon_aft_t2: null,
        tname_mon_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t2: null,
        img_mon_aft_t2: null,
        sub_mon_aft_t2: null,
        tname_mon_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t2: null,
        img_mon_aft_t2: null,
        sub_mon_aft_t2: null,
        tname_mon_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t2: null,
        img_mon_aft_t2: null,
        sub_mon_aft_t2: null,
        tname_mon_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_aft_t2: null,
          img_mon_aft_t2: null,
          sub_mon_aft_t2: null,
          tname_mon_aft_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_mon_aft_t3: null,
      img_mon_aft_t3: null,
      sub_mon_aft_t3: null,
      tname_mon_aft_t3: null,
      t_grade_mon_aft_t3: null,
      teacher_type_mon_aft_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t3: null,
      img_mon_aft_t3: null,
      sub_mon_aft_t3: null,
      tname_mon_aft_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t3: null,
        img_mon_aft_t3: null,
        sub_mon_aft_t3: null,
        tname_mon_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t3: null,
        img_mon_aft_t3: null,
        sub_mon_aft_t3: null,
        tname_mon_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t3: null,
        img_mon_aft_t3: null,
        sub_mon_aft_t3: null,
        tname_mon_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t3: null,
        img_mon_aft_t3: null,
        sub_mon_aft_t3: null,
        tname_mon_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_aft_t3: null,
          img_mon_aft_t3: null,
          sub_mon_aft_t3: null,
          tname_mon_aft_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_mon_aft_t4: null,
      img_mon_aft_t4: null,
      sub_mon_aft_t4: null,
      tname_mon_aft_t4: null,
      t_grade_mon_aft_t4: null,
      teacher_type_mon_aft_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_mon_aft_t4: null,
      img_mon_aft_t4: null,
      sub_mon_aft_t4: null,
      tname_mon_aft_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_mon_aft_t4: null,
        img_mon_aft_t4: null,
        sub_mon_aft_t4: null,
        tname_mon_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_mon_aft_t4: null,
        img_mon_aft_t4: null,
        sub_mon_aft_t4: null,
        tname_mon_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t4: null,
        img_mon_aft_t4: null,
        sub_mon_aft_t4: null,
        tname_mon_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_mon_aft_t4: null,
        img_mon_aft_t4: null,
        sub_mon_aft_t4: null,
        tname_mon_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_mon_aft_t4: null,
          img_mon_aft_t4: null,
          sub_mon_aft_t4: null,
          tname_mon_aft_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_mor_t1: null,
      img_tue_mor_t1: null,
      sub_tue_mor_t1: null,
      tname_tue_mor_t1: null,
      t_grade_tue_mor_t1: null,
      teacher_type_tue_mor_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t1: null,
      img_tue_mor_t1: null,
      sub_tue_mor_t1: null,
      tname_tue_mor_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t1: null,
        img_tue_mor_t1: null,
        sub_tue_mor_t1: null,
        tname_tue_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t1: null,
        img_tue_mor_t1: null,
        sub_tue_mor_t1: null,
        tname_tue_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t1: null,
        img_tue_mor_t1: null,
        sub_tue_mor_t1: null,
        tname_tue_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t1: null,
        img_tue_mor_t1: null,
        sub_tue_mor_t1: null,
        tname_tue_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_mor_t1: null,
          img_tue_mor_t1: null,
          sub_tue_mor_t1: null,
          tname_tue_mor_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_mor_t2: null,
      img_tue_mor_t2: null,
      sub_tue_mor_t2: null,
      tname_tue_mor_t2: null,
      t_grade_tue_mor_t2: null,
      teacher_type_tue_mor_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t2: null,
      img_tue_mor_t2: null,
      sub_tue_mor_t2: null,
      tname_tue_mor_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t2: null,
        img_tue_mor_t2: null,
        sub_tue_mor_t2: null,
        tname_tue_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t2: null,
        img_tue_mor_t2: null,
        sub_tue_mor_t2: null,
        tname_tue_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t2: null,
        img_tue_mor_t2: null,
        sub_tue_mor_t2: null,
        tname_tue_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t2: null,
        img_tue_mor_t2: null,
        sub_tue_mor_t2: null,
        tname_tue_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_mor_t2: null,
          img_tue_mor_t2: null,
          sub_tue_mor_t2: null,
          tname_tue_mor_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_mor_t3: null,
      img_tue_mor_t3: null,
      sub_tue_mor_t3: null,
      tname_tue_mor_t3: null,
      t_grade_tue_mor_t3: null,
      teacher_type_tue_mor_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t3: null,
      img_tue_mor_t3: null,
      sub_tue_mor_t3: null,
      tname_tue_mor_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t3: null,
        img_tue_mor_t3: null,
        sub_tue_mor_t3: null,
        tname_tue_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t3: null,
        img_tue_mor_t3: null,
        sub_tue_mor_t3: null,
        tname_tue_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t3: null,
        img_tue_mor_t3: null,
        sub_tue_mor_t3: null,
        tname_tue_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t3: null,
        img_tue_mor_t3: null,
        sub_tue_mor_t3: null,
        tname_tue_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_mor_t3: null,
          img_tue_mor_t3: null,
          sub_tue_mor_t3: null,
          tname_tue_mor_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_mor_t4: null,
      img_tue_mor_t4: null,
      sub_tue_mor_t4: null,
      tname_tue_mor_t4: null,
      t_grade_tue_mor_t4: null,
      teacher_type_tue_mor_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_mor_t4: null,
      img_tue_mor_t4: null,
      sub_tue_mor_t4: null,
      tname_tue_mor_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_mor_t4: null,
        img_tue_mor_t4: null,
        sub_tue_mor_t4: null,
        tname_tue_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_mor_t4: null,
        img_tue_mor_t4: null,
        sub_tue_mor_t4: null,
        tname_tue_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t4: null,
        img_tue_mor_t4: null,
        sub_tue_mor_t4: null,
        tname_tue_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_mor_t4: null,
        img_tue_mor_t4: null,
        sub_tue_mor_t4: null,
        tname_tue_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_mor_t4: null,
          img_tue_mor_t4: null,
          sub_tue_mor_t4: null,
          tname_tue_mor_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_aft_t1: null,
      img_tue_aft_t1: null,
      sub_tue_aft_t1: null,
      tname_tue_aft_t1: null,
      t_grade_tue_aft_t1: null,
      teacher_type_tue_aft_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t1: null,
      img_tue_aft_t1: null,
      sub_tue_aft_t1: null,
      tname_tue_aft_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t1: null,
        img_tue_aft_t1: null,
        sub_tue_aft_t1: null,
        tname_tue_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t1: null,
        img_tue_aft_t1: null,
        sub_tue_aft_t1: null,
        tname_tue_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t1: null,
        img_tue_aft_t1: null,
        sub_tue_aft_t1: null,
        tname_tue_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t1: null,
        img_tue_aft_t1: null,
        sub_tue_aft_t1: null,
        tname_tue_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_aft_t1: null,
          img_tue_aft_t1: null,
          sub_tue_aft_t1: null,
          tname_tue_aft_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_aft_t2: null,
      img_tue_aft_t2: null,
      sub_tue_aft_t2: null,
      tname_tue_aft_t2: null,
      t_grade_tue_aft_t2: null,
      teacher_type_tue_aft_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t2: null,
      img_tue_aft_t2: null,
      sub_tue_aft_t2: null,
      tname_tue_aft_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t2: null,
        img_tue_aft_t2: null,
        sub_tue_aft_t2: null,
        tname_tue_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t2: null,
        img_tue_aft_t2: null,
        sub_tue_aft_t2: null,
        tname_tue_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t2: null,
        img_tue_aft_t2: null,
        sub_tue_aft_t2: null,
        tname_tue_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t2: null,
        img_tue_aft_t2: null,
        sub_tue_aft_t2: null,
        tname_tue_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_aft_t2: null,
          img_tue_aft_t2: null,
          sub_tue_aft_t2: null,
          tname_tue_aft_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_aft_t3: null,
      img_tue_aft_t3: null,
      sub_tue_aft_t3: null,
      tname_tue_aft_t3: null,
      t_grade_tue_aft_t3: null,
      teacher_type_tue_aft_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t3: null,
      img_tue_aft_t3: null,
      sub_tue_aft_t3: null,
      tname_tue_aft_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t3: null,
        img_tue_aft_t3: null,
        sub_tue_aft_t3: null,
        tname_tue_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t3: null,
        img_tue_aft_t3: null,
        sub_tue_aft_t3: null,
        tname_tue_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t3: null,
        img_tue_aft_t3: null,
        sub_tue_aft_t3: null,
        tname_tue_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t3: null,
        img_tue_aft_t3: null,
        sub_tue_aft_t3: null,
        tname_tue_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_aft_t3: null,
          img_tue_aft_t3: null,
          sub_tue_aft_t3: null,
          tname_tue_aft_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_tue_aft_t4: null,
      img_tue_aft_t4: null,
      sub_tue_aft_t4: null,
      tname_tue_aft_t4: null,
      t_grade_tue_aft_t4: null,
      teacher_type_tue_aft_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_tue_aft_t4: null,
      img_tue_aft_t4: null,
      sub_tue_aft_t4: null,
      tname_tue_aft_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_tue_aft_t4: null,
        img_tue_aft_t4: null,
        sub_tue_aft_t4: null,
        tname_tue_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_tue_aft_t4: null,
        img_tue_aft_t4: null,
        sub_tue_aft_t4: null,
        tname_tue_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t4: null,
        img_tue_aft_t4: null,
        sub_tue_aft_t4: null,
        tname_tue_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_tue_aft_t4: null,
        img_tue_aft_t4: null,
        sub_tue_aft_t4: null,
        tname_tue_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_tue_aft_t4: null,
          img_tue_aft_t4: null,
          sub_tue_aft_t4: null,
          tname_tue_aft_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_mor_t1: null,
      img_wed_mor_t1: null,
      sub_wed_mor_t1: null,
      tname_wed_mor_t1: null,
      t_grade_wed_mor_t1: null,
      teacher_type_wed_mor_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t1: null,
      img_wed_mor_t1: null,
      sub_wed_mor_t1: null,
      tname_wed_mor_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t1: null,
        img_wed_mor_t1: null,
        sub_wed_mor_t1: null,
        tname_wed_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t1: null,
        img_wed_mor_t1: null,
        sub_wed_mor_t1: null,
        tname_wed_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t1: null,
        img_wed_mor_t1: null,
        sub_wed_mor_t1: null,
        tname_wed_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t1: null,
        img_wed_mor_t1: null,
        sub_wed_mor_t1: null,
        tname_wed_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_mor_t1: null,
          img_wed_mor_t1: null,
          sub_wed_mor_t1: null,
          tname_wed_mor_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_mor_t2: null,
      img_wed_mor_t2: null,
      sub_wed_mor_t2: null,
      tname_wed_mor_t2: null,
      t_grade_wed_mor_t2: null,
      teacher_type_wed_mor_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t2: null,
      img_wed_mor_t2: null,
      sub_wed_mor_t2: null,
      tname_wed_mor_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t2: null,
        img_wed_mor_t2: null,
        sub_wed_mor_t2: null,
        tname_wed_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t2: null,
        img_wed_mor_t2: null,
        sub_wed_mor_t2: null,
        tname_wed_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t2: null,
        img_wed_mor_t2: null,
        sub_wed_mor_t2: null,
        tname_wed_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t2: null,
        img_wed_mor_t2: null,
        sub_wed_mor_t2: null,
        tname_wed_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_mor_t2: null,
          img_wed_mor_t2: null,
          sub_wed_mor_t2: null,
          tname_wed_mor_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_mor_t3: null,
      img_wed_mor_t3: null,
      sub_wed_mor_t3: null,
      tname_wed_mor_t3: null,
      t_grade_wed_mor_t3: null,
      teacher_type_wed_mor_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t3: null,
      img_wed_mor_t3: null,
      sub_wed_mor_t3: null,
      tname_wed_mor_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t3: null,
        img_wed_mor_t3: null,
        sub_wed_mor_t3: null,
        tname_wed_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t3: null,
        img_wed_mor_t3: null,
        sub_wed_mor_t3: null,
        tname_wed_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t3: null,
        img_wed_mor_t3: null,
        sub_wed_mor_t3: null,
        tname_wed_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t3: null,
        img_wed_mor_t3: null,
        sub_wed_mor_t3: null,
        tname_wed_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_mor_t3: null,
          img_wed_mor_t3: null,
          sub_wed_mor_t3: null,
          tname_wed_mor_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_mor_t4: null,
      img_wed_mor_t4: null,
      sub_wed_mor_t4: null,
      tname_wed_mor_t4: null,
      t_grade_wed_mor_t4: null,
      teacher_type_wed_mor_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_mor_t4: null,
      img_wed_mor_t4: null,
      sub_wed_mor_t4: null,
      tname_wed_mor_t4: id,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_mor_t4: null,
        img_wed_mor_t4: null,
        sub_wed_mor_t4: null,
        tname_wed_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_mor_t4: null,
        img_wed_mor_t4: null,
        sub_wed_mor_t4: null,
        tname_wed_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t4: null,
        img_wed_mor_t4: null,
        sub_wed_mor_t4: null,
        tname_wed_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_mor_t4: null,
        img_wed_mor_t4: null,
        sub_wed_mor_t4: null,
        tname_wed_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_mor_t4: null,
          img_wed_mor_t4: null,
          sub_wed_mor_t4: null,
          tname_wed_mor_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_aft_t1: null,
      img_wed_aft_t1: null,
      sub_wed_aft_t1: null,
      tname_wed_aft_t1: null,
      t_grade_wed_aft_t1: null,
      teacher_type_wed_aft_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t1: null,
      img_wed_aft_t1: null,
      sub_wed_aft_t1: null,
      tname_wed_aft_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t1: null,
        img_wed_aft_t1: null,
        sub_wed_aft_t1: null,
        tname_wed_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t1: null,
        img_wed_aft_t1: null,
        sub_wed_aft_t1: null,
        tname_wed_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t1: null,
        img_wed_aft_t1: null,
        sub_wed_aft_t1: null,
        tname_wed_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t1: null,
        img_wed_aft_t1: null,
        sub_wed_aft_t1: null,
        tname_wed_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_aft_t1: null,
          img_wed_aft_t1: null,
          sub_wed_aft_t1: null,
          tname_wed_aft_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_aft_t2: null,
      img_wed_aft_t2: null,
      sub_wed_aft_t2: null,
      tname_wed_aft_t2: null,
      t_grade_wed_aft_t2: null,
      teacher_type_wed_aft_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t2: null,
      img_wed_aft_t2: null,
      sub_wed_aft_t2: null,
      tname_wed_aft_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t2: null,
        img_wed_aft_t2: null,
        sub_wed_aft_t2: null,
        tname_wed_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t2: null,
        img_wed_aft_t2: null,
        sub_wed_aft_t2: null,
        tname_wed_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t2: null,
        img_wed_aft_t2: null,
        sub_wed_aft_t2: null,
        tname_wed_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t2: null,
        img_wed_aft_t2: null,
        sub_wed_aft_t2: null,
        tname_wed_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_aft_t2: null,
          img_wed_aft_t2: null,
          sub_wed_aft_t2: null,
          tname_wed_aft_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_aft_t3: null,
      img_wed_aft_t3: null,
      sub_wed_aft_t3: null,
      tname_wed_aft_t3: null,
      t_grade_wed_aft_t3: null,
      teacher_type_wed_aft_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t3: null,
      img_wed_aft_t3: null,
      sub_wed_aft_t3: null,
      tname_wed_aft_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t3: null,
        img_wed_aft_t3: null,
        sub_wed_aft_t3: null,
        tname_wed_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t3: null,
        img_wed_aft_t3: null,
        sub_wed_aft_t3: null,
        tname_wed_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t3: null,
        img_wed_aft_t3: null,
        sub_wed_aft_t3: null,
        tname_wed_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t3: null,
        img_wed_aft_t3: null,
        sub_wed_aft_t3: null,
        tname_wed_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_aft_t3: null,
          img_wed_aft_t3: null,
          sub_wed_aft_t3: null,
          tname_wed_aft_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_wed_aft_t4: null,
      img_wed_aft_t4: null,
      sub_wed_aft_t4: null,
      tname_wed_aft_t4: null,
      t_grade_wed_aft_t4: null,
      teacher_type_wed_aft_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_wed_aft_t4: null,
      img_wed_aft_t4: null,
      sub_wed_aft_t4: null,
      tname_wed_aft_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_wed_aft_t4: null,
        img_wed_aft_t4: null,
        sub_wed_aft_t4: null,
        tname_wed_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_wed_aft_t4: null,
        img_wed_aft_t4: null,
        sub_wed_aft_t4: null,
        tname_wed_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t4: null,
        img_wed_aft_t4: null,
        sub_wed_aft_t4: null,
        tname_wed_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_wed_aft_t4: null,
        img_wed_aft_t4: null,
        sub_wed_aft_t4: null,
        tname_wed_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_wed_aft_t4: null,
          img_wed_aft_t4: null,
          sub_wed_aft_t4: null,
          tname_wed_aft_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_mor_t1: null,
      img_thu_mor_t1: null,
      sub_thu_mor_t1: null,
      tname_thu_mor_t1: null,
      t_grade_thu_mor_t1: null,
      teacher_type_thu_mor_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t1: null,
      img_thu_mor_t1: null,
      sub_thu_mor_t1: null,
      tname_thu_mor_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t1: null,
        img_thu_mor_t1: null,
        sub_thu_mor_t1: null,
        tname_thu_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t1: null,
        img_thu_mor_t1: null,
        sub_thu_mor_t1: null,
        tname_thu_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t1: null,
        img_thu_mor_t1: null,
        sub_thu_mor_t1: null,
        tname_thu_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t1: null,
        img_thu_mor_t1: null,
        sub_thu_mor_t1: null,
        tname_thu_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_mor_t1: null,
          img_thu_mor_t1: null,
          sub_thu_mor_t1: null,
          tname_thu_mor_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_mor_t2: null,
      img_thu_mor_t2: null,
      sub_thu_mor_t2: null,
      tname_thu_mor_t2: null,
      t_grade_thu_mor_t2: null,
      teacher_type_thu_mor_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t2: null,
      img_thu_mor_t2: null,
      sub_thu_mor_t2: null,
      tname_thu_mor_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t2: null,
        img_thu_mor_t2: null,
        sub_thu_mor_t2: null,
        tname_thu_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t2: null,
        img_thu_mor_t2: null,
        sub_thu_mor_t2: null,
        tname_thu_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t2: null,
        img_thu_mor_t2: null,
        sub_thu_mor_t2: null,
        tname_thu_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t2: null,
        img_thu_mor_t2: null,
        sub_thu_mor_t2: null,
        tname_thu_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_mor_t2: null,
          img_thu_mor_t2: null,
          sub_thu_mor_t2: null,
          tname_thu_mor_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_mor_t3: null,
      img_thu_mor_t3: null,
      sub_thu_mor_t3: null,
      tname_thu_mor_t3: null,
      t_grade_thu_mor_t3: null,
      teacher_type_thu_mor_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t3: null,
      img_thu_mor_t3: null,
      sub_thu_mor_t3: null,
      tname_thu_mor_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t3: null,
        img_thu_mor_t3: null,
        sub_thu_mor_t3: null,
        tname_thu_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t3: null,
        img_thu_mor_t3: null,
        sub_thu_mor_t3: null,
        tname_thu_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t3: null,
        img_thu_mor_t3: null,
        sub_thu_mor_t3: null,
        tname_thu_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t3: null,
        img_thu_mor_t3: null,
        sub_thu_mor_t3: null,
        tname_thu_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_mor_t3: null,
          img_thu_mor_t3: null,
          sub_thu_mor_t3: null,
          tname_thu_mor_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_mor_t4: null,
      img_thu_mor_t4: null,
      sub_thu_mor_t4: null,
      tname_thu_mor_t4: null,
      t_grade_thu_mor_t4: null,
      teacher_type_thu_mor_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_mor_t4: null,
      img_thu_mor_t4: null,
      sub_thu_mor_t4: null,
      tname_thu_mor_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_mor_t4: null,
        img_thu_mor_t4: null,
        sub_thu_mor_t4: null,
        tname_thu_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_mor_t4: null,
        img_thu_mor_t4: null,
        sub_thu_mor_t4: null,
        tname_thu_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t4: null,
        img_thu_mor_t4: null,
        sub_thu_mor_t4: null,
        tname_thu_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_mor_t4: null,
        img_thu_mor_t4: null,
        sub_thu_mor_t4: null,
        tname_thu_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_mor_t4: null,
          img_thu_mor_t4: null,
          sub_thu_mor_t4: null,
          tname_thu_mor_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_aft_t1: null,
      img_thu_aft_t1: null,
      sub_thu_aft_t1: null,
      tname_thu_aft_t1: null,
      t_grade_thu_aft_t1: null,
      teacher_type_thu_aft_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t1: null,
      img_thu_aft_t1: null,
      sub_thu_aft_t1: null,
      tname_thu_aft_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t1: null,
        img_thu_aft_t1: null,
        sub_thu_aft_t1: null,
        tname_thu_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t1: null,
        img_thu_aft_t1: null,
        sub_thu_aft_t1: null,
        tname_thu_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t1: null,
        img_thu_aft_t1: null,
        sub_thu_aft_t1: null,
        tname_thu_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t1: null,
        img_thu_aft_t1: null,
        sub_thu_aft_t1: null,
        tname_thu_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_aft_t1: null,
          img_thu_aft_t1: null,
          sub_thu_aft_t1: null,
          tname_thu_aft_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_aft_t2: null,
      img_thu_aft_t2: null,
      sub_thu_aft_t2: null,
      tname_thu_aft_t2: null,
      t_grade_thu_aft_t2: null,
      teacher_type_thu_aft_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t2: null,
      img_thu_aft_t2: null,
      sub_thu_aft_t2: null,
      tname_thu_aft_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t2: null,
        img_thu_aft_t2: null,
        sub_thu_aft_t2: null,
        tname_thu_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t2: null,
        img_thu_aft_t2: null,
        sub_thu_aft_t2: null,
        tname_thu_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t2: null,
        img_thu_aft_t2: null,
        sub_thu_aft_t2: null,
        tname_thu_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t2: null,
        img_thu_aft_t2: null,
        sub_thu_aft_t2: null,
        tname_thu_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_aft_t2: null,
          img_thu_aft_t2: null,
          sub_thu_aft_t2: null,
          tname_thu_aft_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_aft_t3: null,
      img_thu_aft_t3: null,
      sub_thu_aft_t3: null,
      tname_thu_aft_t3: null,
      t_grade_thu_aft_t3: null,
      teacher_type_thu_aft_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t3: null,
      img_thu_aft_t3: null,
      sub_thu_aft_t3: null,
      tname_thu_aft_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t3: null,
        img_thu_aft_t3: null,
        sub_thu_aft_t3: null,
        tname_thu_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t3: null,
        img_thu_aft_t3: null,
        sub_thu_aft_t3: null,
        tname_thu_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t3: null,
        img_thu_aft_t3: null,
        sub_thu_aft_t3: null,
        tname_thu_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t3: null,
        img_thu_aft_t3: null,
        sub_thu_aft_t3: null,
        tname_thu_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_aft_t3: null,
          img_thu_aft_t3: null,
          sub_thu_aft_t3: null,
          tname_thu_aft_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_thu_aft_t4: null,
      img_thu_aft_t4: null,
      sub_thu_aft_t4: null,
      tname_thu_aft_t4: null,
      t_grade_thu_aft_t4: null,
      teacher_type_thu_aft_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_thu_aft_t4: null,
      img_thu_aft_t4: null,
      sub_thu_aft_t4: null,
      tname_thu_aft_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_thu_aft_t4: null,
        img_thu_aft_t4: null,
        sub_thu_aft_t4: null,
        tname_thu_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_thu_aft_t4: null,
        img_thu_aft_t4: null,
        sub_thu_aft_t4: null,
        tname_thu_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t4: null,
        img_thu_aft_t4: null,
        sub_thu_aft_t4: null,
        tname_thu_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_thu_aft_t4: null,
        img_thu_aft_t4: null,
        sub_thu_aft_t4: null,
        tname_thu_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_thu_aft_t4: null,
          img_thu_aft_t4: null,
          sub_thu_aft_t4: null,
          tname_thu_aft_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_mor_t1: null,
      img_fri_mor_t1: null,
      sub_fri_mor_t1: null,
      tname_fri_mor_t1: null,
      t_grade_fri_mor_t1: null,
      teacher_type_fri_mor_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t1: null,
      img_fri_mor_t1: null,
      sub_fri_mor_t1: null,
      tname_fri_mor_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t1: null,
        img_fri_mor_t1: null,
        sub_fri_mor_t1: null,
        tname_fri_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t1: null,
        img_fri_mor_t1: null,
        sub_fri_mor_t1: null,
        tname_fri_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t1: null,
        img_fri_mor_t1: null,
        sub_fri_mor_t1: null,
        tname_fri_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t1: null,
        img_fri_mor_t1: null,
        sub_fri_mor_t1: null,
        tname_fri_mor_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_mor_t1: null,
          img_fri_mor_t1: null,
          sub_fri_mor_t1: null,
          tname_fri_mor_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_mor_t2: null,
      img_fri_mor_t2: null,
      sub_fri_mor_t2: null,
      tname_fri_mor_t2: null,
      t_grade_fri_mor_t2: null,
      teacher_type_fri_mor_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t2: null,
      img_fri_mor_t2: null,
      sub_fri_mor_t2: null,
      tname_fri_mor_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t2: null,
        img_fri_mor_t2: null,
        sub_fri_mor_t2: null,
        tname_fri_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t2: null,
        img_fri_mor_t2: null,
        sub_fri_mor_t2: null,
        tname_fri_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t2: null,
        img_fri_mor_t2: null,
        sub_fri_mor_t2: null,
        tname_fri_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t2: null,
        img_fri_mor_t2: null,
        sub_fri_mor_t2: null,
        tname_fri_mor_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_mor_t2: null,
          img_fri_mor_t2: null,
          sub_fri_mor_t2: null,
          tname_fri_mor_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_mor_t3: null,
      img_fri_mor_t3: null,
      sub_fri_mor_t3: null,
      tname_fri_mor_t3: null,
      t_grade_fri_mor_t3: null,
      teacher_type_fri_mor_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t3: null,
      img_fri_mor_t3: null,
      sub_fri_mor_t3: null,
      tname_fri_mor_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t3: null,
        img_fri_mor_t3: null,
        sub_fri_mor_t3: null,
        tname_fri_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t3: null,
        img_fri_mor_t3: null,
        sub_fri_mor_t3: null,
        tname_fri_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t3: null,
        img_fri_mor_t3: null,
        sub_fri_mor_t3: null,
        tname_fri_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t3: null,
        img_fri_mor_t3: null,
        sub_fri_mor_t3: null,
        tname_fri_mor_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_mor_t3: null,
          img_fri_mor_t3: null,
          sub_fri_mor_t3: null,
          tname_fri_mor_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_mor_t4: null,
      img_fri_mor_t4: null,
      sub_fri_mor_t4: null,
      tname_fri_mor_t4: null,
      t_grade_fri_mor_t4: null,
      teacher_type_fri_mor_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_mor_t4: null,
      img_fri_mor_t4: null,
      sub_fri_mor_t4: null,
      tname_fri_mor_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_mor_t4: null,
        img_fri_mor_t4: null,
        sub_fri_mor_t4: null,
        tname_fri_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_mor_t4: null,
        img_fri_mor_t4: null,
        sub_fri_mor_t4: null,
        tname_fri_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t4: null,
        img_fri_mor_t4: null,
        sub_fri_mor_t4: null,
        tname_fri_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_mor_t4: null,
        img_fri_mor_t4: null,
        sub_fri_mor_t4: null,
        tname_fri_mor_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_mor_t4: null,
          img_fri_mor_t4: null,
          sub_fri_mor_t4: null,
          tname_fri_mor_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_aft_t1: null,
      img_fri_aft_t1: null,
      sub_fri_aft_t1: null,
      tname_fri_aft_t1: null,
      t_grade_fri_aft_t1: null,
      teacher_type_fri_aft_t1: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t1: null,
      img_fri_aft_t1: null,
      sub_fri_aft_t1: null,
      tname_fri_aft_t1: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t1: null,
        img_fri_aft_t1: null,
        sub_fri_aft_t1: null,
        tname_fri_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t1: null,
        img_fri_aft_t1: null,
        sub_fri_aft_t1: null,
        tname_fri_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t1: null,
        img_fri_aft_t1: null,
        sub_fri_aft_t1: null,
        tname_fri_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t1: null,
        img_fri_aft_t1: null,
        sub_fri_aft_t1: null,
        tname_fri_aft_t1: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_aft_t1: null,
          img_fri_aft_t1: null,
          sub_fri_aft_t1: null,
          tname_fri_aft_t1: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_aft_t2: null,
      img_fri_aft_t2: null,
      sub_fri_aft_t2: null,
      tname_fri_aft_t2: null,
      t_grade_fri_aft_t2: null,
      teacher_type_fri_aft_t2: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t2: null,
      img_fri_aft_t2: null,
      sub_fri_aft_t2: null,
      tname_fri_aft_t2: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t2: null,
        img_fri_aft_t2: null,
        sub_fri_aft_t2: null,
        tname_fri_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t2: null,
        img_fri_aft_t2: null,
        sub_fri_aft_t2: null,
        tname_fri_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t2: null,
        img_fri_aft_t2: null,
        sub_fri_aft_t2: null,
        tname_fri_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t2: null,
        img_fri_aft_t2: null,
        sub_fri_aft_t2: null,
        tname_fri_aft_t2: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_aft_t2: null,
          img_fri_aft_t2: null,
          sub_fri_aft_t2: null,
          tname_fri_aft_t2: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_aft_t3: null,
      img_fri_aft_t3: null,
      sub_fri_aft_t3: null,
      tname_fri_aft_t3: null,
      t_grade_fri_aft_t3: null,
      teacher_type_fri_aft_t3: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t3: null,
      img_fri_aft_t3: null,
      sub_fri_aft_t3: null,
      tname_fri_aft_t3: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t3: null,
        img_fri_aft_t3: null,
        sub_fri_aft_t3: null,
        tname_fri_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t3: null,
        img_fri_aft_t3: null,
        sub_fri_aft_t3: null,
        tname_fri_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t3: null,
        img_fri_aft_t3: null,
        sub_fri_aft_t3: null,
        tname_fri_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t3: null,
        img_fri_aft_t3: null,
        sub_fri_aft_t3: null,
        tname_fri_aft_t3: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_aft_t3: null,
          img_fri_aft_t3: null,
          sub_fri_aft_t3: null,
          tname_fri_aft_t3: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
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
      grade_fri_aft_t4: null,
      img_fri_aft_t4: null,
      sub_fri_aft_t4: null,
      tname_fri_aft_t4: null,
      t_grade_fri_aft_t4: null,
      teacher_type_fri_aft_t4: null,
    });

    update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id), {
      grade_fri_aft_t4: null,
      img_fri_aft_t4: null,
      sub_fri_aft_t4: null,
      tname_fri_aft_t4: null,
      id: id,
      t_grade: getT_grade,
      teacher_type: getteacher_type
    });
    if (userType === 'no') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/អនុវិទ្យាល័យ/` + id), {
        grade_fri_aft_t4: null,
        img_fri_aft_t4: null,
        sub_fri_aft_t4: null,
        tname_fri_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (userType === 'ok') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/វិទ្យាល័យ/` + id), {
        grade_fri_aft_t4: null,
        img_fri_aft_t4: null,
        sub_fri_aft_t4: null,
        tname_fri_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }

    if (subs == 'E') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t4: null,
        img_fri_aft_t4: null,
        sub_fri_aft_t4: null,
        tname_fri_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (subs == 'PE') {
      update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
        grade_fri_aft_t4: null,
        img_fri_aft_t4: null,
        sub_fri_aft_t4: null,
        tname_fri_aft_t4: null,
        id: id,
        t_grade: getT_grade,
        teacher_type: getteacher_type
      });
    }
    if (getteacher_type === 'english') {
      if (subs == 'Di') {
        update(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_english/${selectTimeTable}/` + id), {
          grade_fri_aft_t4: null,
          img_fri_aft_t4: null,
          sub_fri_aft_t4: null,
          tname_fri_aft_t4: null,
          id: id,
          t_grade: getT_grade,
          teacher_type: getteacher_type
        });
      }
    }
  }
  else {
    Swal.fire({
      text: "ព័ត៍មានលុបមិនត្រឹមត្រូវ!",
      icon: "error",
      showConfirmButton: false,
      timer: 1600,
    });
  }
}
