m1semester
mdec
mjan
mfeb
mmarch
mapma
mjun
m1semester
m1semester
m2semester
month4s2

if (!e_moct) { e_moct = 0 };
if (!e_h_moct) { e_h_moct = 0 };

if (!pe_moct) { pe_moct = 0 };

if (!e_mnov) { e_mnov = 0 };
if (!e_h_mnov) { e_h_mnov = 0 };

if (!pe_mnov) { pe_mnov = 0 };

if (!e_mdec) { e_mdec = 0 };
if (!e_h_mdec) { e_h_mdec = 0 };

if (!pe_mdec) { pe_mdec = 0 };

if (!e_mjan) { e_mjan = 0 };
if (!e_h_mjan) { e_h_mjan = 0 };

if (!pe_mjan) { pe_mjan = 0 };

if (!e_mfeb) { e_mfeb = 0 };
if (!e_h_mfeb) { e_h_mfeb = 0 };

if (!pe_mfeb) { pe_mfeb = 0 };

if (!e_mmarch) { e_mmarch = 0 };
if (!e_h_mmarch) { e_h_mmarch = 0 };

if (!pe_mmarch) { pe_mmarch = 0 };

if (!e_mapma) { e_mapma = 0 };
if (!e_h_mapma) { e_h_mapma = 0 };

if (!pe_mapma) { pe_mapma = 0 };

if (!e_mjun) { e_mjun = 0 };
if (!e_h_mjun) { e_h_mjun = 0 };

if (!pe_mjun) { pe_mjun = 0 };

if (!e_mjul) { e_mjul = 0 };
if (!e_h_mfee_mjul) { e_h_mfee_mjul = 0 };

if (!pe_mjul) { pe_mjul = 0 };

if (!e_m1semester) { e_m1semester = 0 };
if (!e_h_m1semester) { e_h_m1semester = 0 };

if (!pe_m1semester) { pe_m1semester = 0 }

if (!e_m2semester) { e_m2semester = 0 };
if (!e_h_m2semester) { e_h_m2semester = 0 };

if (!pe_m2semester) { pe_m2semester = 0 };

let aar = {}
aar[`k_listen_${arrMonths}`] = data

var average = d[`average_${arrMonths}`];
var rank_moct = d[`rank_${arrMonths}`];
var k_listen_moct = d[`k_listen_${arrMonths}`];
var k_speak_moct = d[`k_speak_${arrMonths}`];
var k_reading_moct = d[`k_reading_${arrMonths}`];
var k_dictation_moct = d[`k_dictation_${arrMonths}`];
var k_writing_moct = d[`k_writing_${arrMonths}`];
var k_grammar_moct = d[`k_grammar_${arrMonths}`];
var k_homework_moct = d[`k_homework_${arrMonths}`];
var math_speak_moct = d[`math_speak_${arrMonths}`];
var math_moct = d[`math_${arrMonths}`];
var math_h_moct = d[`math_h_${arrMonths}`];
var sci_moct = d[`sci_${arrMonths}`];
var sci_h_moct = d[`sci_h_${arrMonths}`];
var soc_moct = d[`soc_${arrMonths}`];
var soc_h_moct = d[`soc_h_${arrMonths}`];
var e_moct = d[`e_${arrMonths}`];
var e_h_moct = d[`e_h_${arrMonths}`];
var pe_moct = d[`pe_${arrMonths}`];

update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);

let aar = {}
aar[`e_${arrMonths}`] = data
if (setID) {
  update(ref(db, `SalaMOM/classes/` + `${dbYears}/` + `${dbGrade.replace(/^0+/, '')}/` + setID), aar);
}

var average = d.val().average_moct;
var rank = d.val().rank_moct;

var k_reading_moct = d.val().k_reading_moct;
var k_dictation_moct = d.val().k_dictation_moct;
var k_writing_moct = d.val().k_writing_moct;
var k_grammar_moct = d.val().k_grammar_moct;
var k_homework_moct = d.val().k_homework_moct;

var math_speak_moct = d.val().math_speak_moct;
var math_moct = d.val().math_moct;
var math_h_moct = d.val().math_h_moct;

var sci_moct = d.val().sci_moct;
var sci_h_moct = d.val().sci_h_moct;

var soc_h_moct = d.val().soc_h_moct;

var e_moct = d.val().e_moct;
var e_h_moct = d.val().e_h_moct;

var pe_moct = d.val().pe_moct;
var geor_moct = d.val().geor_moct;
var hist_moct = d.val().hist_moct;
var moral_moct = d.val().moral_moct;

let noSp = id.replace(/\s+/g, "");

if (!k_reading_moct) { k_reading_moct = 0 };
if (!k_dictation_moct) { k_dictation_moct = 0 };
if (!k_writing_moct) { k_writing_moct = 0 };
if (!k_grammar_moct) { k_grammar_moct = 0 };
if (!k_homework_moct) { k_homework_moct = 0 };

if (!math_speak_moct) { math_speak_moct = 0 };
if (!math_moct) { math_moct = 0 };
if (!math_h_moct) { math_h_moct = 0 };

if (!sci_moct) { sci_moct = 0 };
if (!sci_h_moct) { sci_h_moct = 0 };

if (!soc_h_moct) { soc_h_moct = 0 };

if (!e_moct) { e_moct = 0 };
if (!e_h_moct) { e_h_moct = 0 };

if (!pe_moct) { pe_moct = 0 };
if (!geor_moct) { geor_moct = 0 };
if (!hist_moct) { hist_moct = 0 };
if (!moral_moct) { moral_moct = 0 };

vertical - align: middle;

<div className="input-group mb-3">
  <span className="input-group-text"
    id="basic-addon2">GRADE</span>
  <input className="form-control"
    type="text"
    value={getteacher_type}
    onChange={e => { setgetteacher_type(e.target.value) }}
    id="user_teacher_type" />
</div>


