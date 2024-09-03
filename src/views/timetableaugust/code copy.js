const ControlUsers = () => {

  const deleteData = (e) => {
    const id = e.currentTarget.dataset.id
    if (id) {
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
          remove(ref(db, `/SalaMOM/tools/timeTable/${selectTimeTableYear}/by_teacher/${selectTimeTable}/` + id));
        }
      });
    }
    console.log(id);
  }



  return (
    <>
      <button
        data-bs-toggle="modal" data-bs-target="#forControlUsers"
        style={{ color: 'black', fontWeight: 'bold' }}
        className="btn btn-warning btn-sm text-center me-3">គ្រប់គ្រងឈ្មោះ</button>
      <div className="modal fade" id="forControlUsers" tabindex="-1" aria-labelledby="forPreviewPrimary" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <div class="content" id="time_tables">
                <div class="container-fluid">
                  <div class="row">
                    <h4 class="card-title text-center">កាលវិភាគបង្រៀនថ្នាក់ <span>{selectTimeTable}</span>
                    </h4>
                    <div class="col-lg-12">
                      <div style={{ overflow: 'auto' }} id="show_mouse">
                        <table className="table table-bordered" id="myTable" ref={tableRef}>
                          <thead>
                            <tr>
                              <th>ល.រ</th>
                              <th>ឈ្មោះគ្រូ</th>
                              <th>ឈ្មោះអក្សរកាត់</th>
                              <th>លុប</th>
                            </tr>
                          </thead>
                          <tbody id="add_row">
                            {controlUser.map((d, index) => (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{d.id}</td>
                                <td>{d.nickname}</td>
                                <td
                                  onClick={deleteData}
                                  data-id={d.id}
                                ><CIcon style={{ color: 'red' }} icon={cilTrash} /></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Printing</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
