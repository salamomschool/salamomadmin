id: selectTime,
  time_setting_start_at: time_setting_start_at,
    time_setting_end_at: time_setting_end_at,
      time_setting_meridiem: time_setting_meridiem,
        time_setting_kind: time_setting_kind,

          var id = d.val().id;
var user_username = d.val().user_username;
var user_password = d.val().user_password;
var user_url = d.val().user_url;
var user_role = d.val().user_role;
var user_subs = d.val().user_subs;
var user_teacher_year = d.val().user_teacher_year;
const nameWithoutSpace = id.replace(/\s/g, "");

firebase
  .database()
  .ref(`SalaMOM/users/` + user_teacher_id.value)
  .update({
    id: user_teacher_id.value,
    user_username: user_username.value,
    user_password: user_password.value,
    user_url: user_url.value,
    user_role: user_role.value,
    user_subs: user_subs.value,
    user_teacher_year: user_teacher_year.value,
  })
