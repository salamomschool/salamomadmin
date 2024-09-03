import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  function MyButtonStaff({ to }) {
    const navigate = useNavigate(); // Import useNavigate hook

    const handleClick = () => {
      navigate(to);
    };

    return (
      <>
        <a onClick={handleClick} style={{ color: 'white' }} className="btn btn-primary rounded-4">ចុចទីនេះ...</a>
      </>
    );
  }
  function MyButtonStd({ to }) {
    const navigate = useNavigate(); // Import useNavigate hook

    const handleClick = () => {
      navigate(to);
    };

    return (
      <>
        <a onClick={handleClick} style={{color:'white'}} className="btn btn-primary rounded-4">ចុចទីនេះ...</a>
      </>
    );
  }
  function MyButtonTime({ to }) {
    const navigate = useNavigate(); // Import useNavigate hook

    const handleClick = () => {
      navigate(to);
    };

    return (
      <>
        <a onClick={handleClick} style={{color:'white'}} className="btn btn-primary rounded-4">ចុចទីនេះ...</a>
      </>
    );
  }
  function MyButtonTimeAug({ to }) {
    const navigate = useNavigate(); // Import useNavigate hook

    const handleClick = () => {
      navigate(to);
    };

    return (
      <>
        <a onClick={handleClick} style={{color:'white'}} className="btn btn-primary rounded-4">ចុចទីនេះ...</a>
      </>
    );
  }
  function MyButtonSetting({ to }) {
    const navigate = useNavigate(); // Import useNavigate hook

    const page1 = () => {
      navigate("/staffAccount");
    };
    const page2 = () => {
      navigate("/monthScore");
    };
    const page3 = () => {
      navigate("/newSubjects");
    };
    const page4 = () => {
      navigate("/newClass");
    };
    const page5 = () => {
      navigate("/newAcademicYear");
    };
    const page6 = () => {
      navigate("/newTimeTable");
    };

    return (
      <>
        <div class="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            សូមជ្រើសរើស
          </button>
          <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a class="dropdown-item" onClick={page1}>🧑‍🎓បង្កើតគណនីបុគ្គលិក</a></li>
            <li><a class="dropdown-item" onClick={page2}>🔛កំណត់ខែបញ្ចូលពិន្ទុ</a></li>
            <li><a class="dropdown-item" onClick={page3}>📰បង្កើតមុខវិជ្ជាថ្មី</a></li>
            <li><a class="dropdown-item" onClick={page4}>🏛️បង្កើតថ្នាក់ថ្មី</a></li>
            <li><a class="dropdown-item" onClick={page5}>🎉បង្កើតឆ្នាំសិក្សាថ្មី</a></li>
            <li><a class="dropdown-item" onClick={page6}>⌚បង្កើតម៉ោងសិក្សាទូទៅ</a></li>
          </ul>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="row">
        <div className="col-sm-6 mt-5 mb-5">
          <div className="card rounded-4"
            style={{
              top: '2vh'
            }}
          >
            <div className='text-center mt-2'
              style={{
                position: 'absolute',
                bottom: '15vh',
                left: '15vw'
              }}
            >
              <img style={{ width: '12vh' }} src="https://res.cloudinary.com/salamomschool/image/upload/v1720792423/icon/students.png.png" class="card-img-top" alt="picture" />
            </div>
            <div className="card-body"
              style={{
                height: '18vh'
              }}
            >
              <div className='text-center fw-bold'
                style={{
                  position: 'absolute',
                  top: '13vh',
                  textAlign: 'center'
                }}
              >
                <h5>បញ្ជីព័ត៌មានផ្ទាល់ខ្លួនសិស្ស</h5>
              </div>
            </div>
            <MyButtonStd to="/students"/>
          </div>
        </div>
        <div className="col-sm-6 mt-5 mb-5">
          <div className="card rounded-4"
            style={{
              top: '2vh'
            }}
          >
            <div className='text-center mt-2'
              style={{
                position: 'absolute',
                bottom: '15vh',
                left: '15vw'
              }}
            >
              <img style={{ width: '12vh' }} src="https://res.cloudinary.com/salamomschool/image/upload/v1720792422/icon/study.png" class="card-img-top" alt="picture" />
            </div>
            <div className="card-body"
              style={{
                height: '18vh'
              }}
            >
              <div className='text-center fw-bold'
                style={{
                  position: 'absolute',
                  top: '13vh',
                  textAlign: 'center'
                }}
              >
                <h5>បញ្ជីព័ត៌មានផ្ទាល់ខ្លួនបុគ្គលិក</h5>
              </div>
            </div>
            <MyButtonStaff to="/teachers" />
          </div>
        </div>
        <div className="col-sm-6 mt-5 mb-5">
          <div className="card rounded-4"
            style={{
              top: '2vh'
            }}
          >
            <div className='text-center mt-2'
              style={{
                position: 'absolute',
                bottom: '15vh',
                left: '15vw'
              }}
            >
              <img style={{ width: '12vh' }} src="https://res.cloudinary.com/salamomschool/image/upload/v1720792423/icon/study-time.png" class="card-img-top" alt="picture" />
            </div>
            <div className="card-body"
              style={{
                height: '18vh'
              }}
            >
              <div className='text-center fw-bold'
                style={{
                  position: 'absolute',
                  top: '13vh',
                  textAlign: 'center'
                }}
              >
                <h5>កាលវិភាគបង្រៀន</h5>
              </div>
            </div>
            <MyButtonTime to="/TimeTable" />
          </div>
        </div>
        <div className="col-sm-6 mt-5 mb-5">
          <div className="card rounded-4"
            style={{
              top: '2vh'
            }}
          >
            <div className='text-center mt-2'
              style={{
                position: 'absolute',
                bottom: '15vh',
                left: '15vw'
              }}
            >
              <img style={{ width: '12vh' }} src="https://res.cloudinary.com/salamomschool/image/upload/v1720792424/icon/time-table.png" class="card-img-top" alt="picture" />
            </div>
            <div className="card-body"
              style={{
                height: '18vh'
              }}
            >
              <div className='text-center fw-bold'
                style={{
                  position: 'absolute',
                  top: '13vh',
                  textAlign: 'center'
                }}
              >
                <h5>កាលវិភាគខែសីហា</h5>
              </div>
            </div>
            <MyButtonTimeAug to="/TimeTableAugust" />
          </div>
        </div>
        <div className="col-sm-6 mt-5 mb-5">
          <div className="card rounded-4"
            style={{
              top: '2vh'
            }}
          >
            <div className='text-center mt-2'
              style={{
                position: 'absolute',
                bottom: '15vh',
                left: '15vw'
              }}
            >
              <img style={{ width: '12vh' }} src="https://res.cloudinary.com/salamomschool/image/upload/v1720792423/icon/settings.png" class="card-img-top" alt="picture" />
            </div>
            <div className="card-body"
              style={{
                height: '18vh'
              }}
            >
              <div className='text-center fw-bold'
                style={{
                  position: 'absolute',
                  top: '13vh',
                  textAlign: 'center',

                }}
              >
                <h5>កំណត់ប្រើប្រាស់</h5>
              </div>
            </div>
            <MyButtonSetting to="/TimeTableAugust" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
