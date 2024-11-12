import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Students = React.lazy(() => import('./views/student/Students'))
const Studentsadmin = React.lazy(() => import('../src/layout/DefaultLayoutAdmin'))
const Teachers = React.lazy(() => import('./views/teachers/Teachers'))
const MonthScore = React.lazy(() => import('./views/monthScore/MonthScore'))
const NewSubjects = React.lazy(() => import('./views/newSubjects/NewSubjects'))
const NewClass = React.lazy(() => import('./views/newClass/NewClass'))
const NewAcademicYear = React.lazy(() => import('./views/newAcademicYear/NewAcademicYear'))
const NewTimeTable = React.lazy(() => import('./views/newTimeTable/NewTimeTable'))
const PreviewScore = React.lazy(() => import('./views/preview/PreviewScore'))
const StaffAccount = React.lazy(() => import('./views/staffAccount/StaffAccount'))
const TimeTable = React.lazy(() => import('./views/timetable/TimeTable'))
const OfficeTimeTable = React.lazy(() => import('./views/officeTimeTable/OfficeTimeTable'))
const OfficeTimeTableView = React.lazy(() => import('./views/officeTimeTable/OfficeTimeTable'))
const TimeTableAugust = React.lazy(() => import('./views/timetableaugust/TimeTableAugust'))
const OfficeTimeTableAugust = React.lazy(() => import('./views/officeTimeTableAugust/OfficeTimeTableAugust'))
const OfficeTimeTableAugustView = React.lazy(() => import('./views/officeTimeTableAugust/OfficeTimeTableAugust'))
const InputScore = React.lazy(() => import('./views/record/InputScore'))
const ExamDate = React.lazy(() => import('./views/examDate/ExamDate'))
const AdmireList = React.lazy(() => import('./views/admire/admire'))
const RecordScore = React.lazy(() => import('./views/recordscore/RecordScore'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '', exact: true, name: 'ទំព័រដើម' },
  { path: '/dashboard', name: 'ទំព័រដើម', element: Dashboard },
  { path: '/students', name: 'បញ្ជីព័ត៌មានផ្ទាល់ខ្លួនសិស្ស', element: Students },
  { path: '/previewscore', name: 'របាយការណ៍ពិន្ទុ', element: PreviewScore },
  { path: '/teachers', name: 'បញ្ជីព័ត៌មានបុគ្គលិក', element: Teachers },
  { path: '/monthScore', name: 'កំណត់ខែបញ្ចូលពិន្ទុ', element: MonthScore },
  { path: '/newSubjects', name: 'បង្កើតមុខវិជ្ជាថ្មី', element: NewSubjects },
  { path: '/newClass', name: 'បង្កើតថ្នាក់ថ្មី', element: NewClass },
  { path: '/newAcademicYear', name: 'បង្កើតឆ្នាំសិក្សាថ្មី', element: NewAcademicYear },
  { path: '/newTimeTable', name: 'បង្កើតម៉ោងសិក្សា', element: NewTimeTable },
  { path: '/staffAccount', name: 'បង្កើតគណនីបុគ្គលិក', element: StaffAccount },
  { path: '/recordScore/RecordScore', name: 'បញ្ចូលពិន្ទុ', element: RecordScore },
  { path: '/TimeTable', name: 'កាលវិភាគបង្រៀន', element: TimeTable },
  { path: '/OfficeTimeTable', name: 'កាលវិភាគបង្រៀន', element: OfficeTimeTable },
  { path: '/TimeTableAugust', name: 'កាលវិភាគខែសីហា', element: TimeTableAugust },
  { path: '/OfficeTimeTableAugust', name: 'កាលវិភាគខែសីហា', element: OfficeTimeTableAugust },
  { path: '/AdmireList', name: 'បញ្ជីឈ្មោះប័ណ្ណសរសើរ', element: AdmireList },
  { path: '/OfficeTimeTableView', name: 'កាលវិភាគបង្រៀន', element: OfficeTimeTableView },
  { path: '/OfficeTimeTableAugustView', name: 'កាលវិភាគខែសីហា', element: OfficeTimeTableAugustView },
  { path: '/recordscore', name: 'បញ្ជូលពិន្ទុ', element: RecordScore },
  { path: '/examdate', name: 'កាលវិភាគប្រឡង', element: ExamDate },
  // { path: '/theme', name: 'Theme', element: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', element: Colors },
  // { path: '/theme/typography', name: 'Typography', element: Typography },
  // { path: '/base', name: 'Base', element: Cards, exact: true },
  // { path: '/base/accordion', name: 'Accordion', element: Accordion },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Charts', element: Charts },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  // { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  // { path: '/notifications/badges', name: 'Badges', element: Badges },
  // { path: '/notifications/modals', name: 'Modals', element: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  // { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
