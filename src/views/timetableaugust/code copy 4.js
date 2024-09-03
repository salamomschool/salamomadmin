const setTimeTable = (e) => {
  const db = getDatabase();
  const id = user_id.current.value
  const imgUrl = user_img.current.value
  const nickname = user_nick.current.value
  const subs = set_user_sub.current.value
  const grade = user_g
  if (data_cell === 'cell1') {
    if (data_row_1.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_mor_t1: nickname,
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
    if (data_row_2.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_mor_t2: nickname,
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
    if (data_row_3.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_mor_t3: nickname,
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
    if (data_row_4.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_mor_t4: nickname,
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
    if (data_row_5.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_aft_t1: nickname,
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
    if (data_row_6.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_aft_t2: nickname,
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
    if (data_row_7.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_aft_t3: nickname,
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
    if (data_row_8.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_mon_aft_t4: nickname,
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
    if (data_row_9.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_tue_mor_t1: nickname,
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
    if (data_row_10.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_tue_mor_t2: nickname,
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
    if (data_row_11.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_tue_mor_t3: nickname,
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
    if (data_row_12.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_tue_mor_t4: nickname,
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
    if (data_row_13.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_tue_aft_t1: nickname,
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
    if (data_row_14.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
        nickname_tue_aft_t2: nickname,
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
    if (data_row_15.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_16.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_17.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_18.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_19.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_20.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_21.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_22.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_23.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_24.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_25.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_26.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_27.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_28.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_29.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_30.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_31.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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

    }
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
    if (data_row_32.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_33.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_34.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_35.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_36.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_37.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_38.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_39.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
    if (data_row_40.includes(id)) {
      Swal.fire({
        text: "ឈ្មោះគ្រូដូចគ្នា មិនអាចបញ្ចូលបាននោះទេ!",
        icon: "error",
        showConfirmButton: false,
        timer: 1600,
      });

    } else {
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
      text: "ព័ត៍មានបញ្ចូលមិនត្រឹមត្រូវ!",
      icon: "error",
      showConfirmButton: false,
      timer: 1600,
    });
  }
}
