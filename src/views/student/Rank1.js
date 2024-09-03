import React, { useEffect, useState, useRef } from "react";
import firebase from '../../components/firebaseConfig';
import { getDatabase, ref, set, update, remove, push, onValue } from "firebase/database";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import Form from 'react-bootstrap/Form';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowCircleTop, cilArrowThickBottom, cilPeople, cilPlus, cilSearch, cilTrash } from "@coreui/icons";
import { Modal, Button } from 'react-bootstrap';

import moment from "moment/moment";
import momentkh from "@thyrith/momentkh"


const View1Award = () => {
  const [users, setUsers] = useState([]);
  const [numberRank1, setnumberRank1] = useState('')
  const [numberRank2, setnumberRank2] = useState('')
  const [numberRank3, setnumberRank3] = useState('')
  const [numberRank4, setnumberRank4] = useState('')
  const [mydbYear, setmydbYear] = useState(localStorage.getItem('school_year_st') || 'default');
  const [dbGade, setdbGrade] = useState(localStorage.getItem('school_grade_st') || 'default');
  const db = getDatabase();

  let numberArray = []
  users.map((data, index) => {
    const ii = data.rank_moct
    numberArray.push(ii)
  })
  const getStd = ref(db, `/SalaMOM/classes/${mydbYear}/${dbGade.replace(/^0+/, '')}/`);

  useEffect(() => {
    onValue(getStd, (data) => {
      const dataSet = data.val();
      setUsers(dataSet ? Object.values(dataSet) : []); // Convert object to array
    })

  }, [])

  useEffect(() => {
    let elementCounts = {};
    let elementCounts2 = {};
    for (let num of numberArray) {
      if (num in elementCounts) {
        elementCounts[num] += 1;
      } else {
        elementCounts[num] = 1;
      }
    }
    setnumberRank1(elementCounts[1])
    setnumberRank2(elementCounts[2])
    setnumberRank3(elementCounts[3])
    setnumberRank4(elementCounts[4])
  })


  if (numberRank1 == 2) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-2">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  {/* <div className="gridRow1-2"> */}
                  <div key={data} className="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className={`name-user item${index} `}

                      >{data.fullname}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2">
          <div className="gridRow">

            {users.map((data, index) => {

              if (data.rank_moct === 3) {
                var number = '៣'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number2">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>
                    </div>
                  </>
                )
              }
            })}

          </div>
          <div className="gridRow3">

            {users.map((data, index) => {

              if (data.rank_moct === 4) {
                var number = '៤'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number2">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>

                    </div>
                  </>
                )
              }
            })}

          </div>
        </div>
        <div className="gridRow1">
          <div className="gridRow">
            {users.map((data, index) => {
              if (data.rank_moct === 5) {
                var number = '៥'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number2">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                        style={{
                          marginLeft: '34vw',
                          marginRight: '34vw',
                        }}
                      >{data.fullname}</p>

                    </div>
                  </>
                )
              }
            })}

          </div>
        </div>

      </>
    )
  }
  else if (numberRank2 == 2) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-tt2">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  {/* <div className="gridRow1-2"> */}
                  <div key={data} className="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className={`name-user item${index} `}
                        style={{
                          marginLeft: '34vw',
                          marginRight: '34vw',
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2-2">
          {users.map((data, index) => {
            if (data.rank_moct === 2) {
              var number = '២'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                      style={{
                        marginLeft: '12vw',
                        marginRight: '12vw',
                      }}
                    >{data.fullname}</p>

                  </div>
                </>
              )
            }
          })}

        </div>
        <div className="gridRow1-t2">
          <div className="gridRow3-t2">

            {users.map((data, index) => {

              if (data.rank_moct === 4) {
                var number = '៤'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number2">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>
                    </div>
                  </>
                )
              }
            })}

          </div>
          <div className="gridRow3-t2">

            {users.map((data, index) => {

              if (data.rank_moct === 5) {
                var number = '៥'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number2">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>

                    </div>
                  </>
                )
              }
            })}

          </div>

        </div>

      </>
    )
  }
  else if (numberRank3 == 2) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-tt2">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  {/* <div className="gridRow1-2"> */}
                  <div key={data} className="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className={`name-user item${index} `}
                        style={{
                          marginLeft: '34vw',
                          marginRight: '34vw',
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2-2">
          {users.map((data, index) => {
            if (data.rank_moct === 2) {
              var number = '២'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                      style={{
                        marginLeft: '12vw',
                        marginRight: '12vw',
                      }}
                    >{data.fullname}</p>

                  </div>
                </>
              )
            }
            if (data.rank_moct === 3) {
              var number = '៣'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>
                  </div>
                </>
              )
            }
            if (data.rank_moct === 5) {
              var number = '៥'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>
                  </div>
                </>
              )
            }

          })}

        </div>
      </>
    )
  }
  else if (numberRank4 == 2) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-tt2">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  {/* <div className="gridRow1-2"> */}
                  <div key={data} className="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className={`name-user item${index} `}
                        style={{
                          marginLeft: '34vw',
                          marginRight: '34vw',
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2-2">
          {users.map((data, index) => {
            if (data.rank_moct === 2) {
              var number = '២'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                      style={{
                        marginLeft: '12vw',
                        marginRight: '12vw',
                      }}
                    >{data.fullname}</p>

                  </div>
                </>
              )
            }
            if (data.rank_moct === 3) {
              var number = '៣'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>
                  </div>
                </>
              )
            }
            if (data.rank_moct === 4) {
              var number = '៤'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>
                  </div>
                </>
              )
            }

          })}

        </div>
      </>
    )
  }
  else if (numberRank4 == 3) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-tt2">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  {/* <div className="gridRow1-2"> */}
                  <div key={data} className="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className={`name-user item${index} `}
                        style={{
                          marginLeft: '34vw',
                          marginRight: '34vw',
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2-2">
          {users.map((data, index) => {
            if (data.rank_moct === 2) {
              var number = '២'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                      style={{
                        marginLeft: '12vw',
                        marginRight: '12vw',
                      }}
                    >{data.fullname}</p>

                  </div>
                </>
              )
            }
            if (data.rank_moct === 3) {
              var number = '៣'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>
                  </div>
                </>
              )
            }
            if (data.rank_moct === 4) {
              var number = '៤'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>
                  </div>
                </>
              )
            }

          })}

        </div>
      </>
    )
  }
  else if (numberRank3 == 3) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-tt2">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  {/* <div className="gridRow1-2"> */}
                  <div key={data} className="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className={`name-user item${index} `}
                        style={{
                          marginLeft: '34vw',
                          marginRight: '34vw',
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2-2">
          {users.map((data, index) => {
            if (data.rank_moct === 2) {
              var number = '២'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                      style={{
                        marginLeft: '12vw',
                        marginRight: '12vw',
                      }}
                    >{data.fullname}</p>

                  </div>
                </>
              )
            }
            if (data.rank_moct === 3) {
              var number = '៣'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>
                  </div>
                </>
              )
            }
          })}

        </div>
      </>
    )
  }
  else if (numberRank2 == 3) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-tt2">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  {/* <div className="gridRow1-2"> */}
                  <div key={data} className="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className={`name-user item${index} `}
                        style={{
                          marginLeft: '34vw',
                          marginRight: '34vw',
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2-2">
          {users.map((data, index) => {
            if (data.rank_moct === 2) {
              var number = '២'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                      style={{
                        marginLeft: '12vw',
                        marginRight: '12vw',
                      }}
                    >{data.fullname}</p>

                  </div>
                </>
              )
            }
            if (data.rank_moct === 5) {
              var number = '៥'
              return (
                <>
                  <div key={index}
                    class="text-center">
                    <div className="rank_number2">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}>{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div className="image-container">
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                    </div>
                    <p
                      className="name-user"
                    >{data.fullname}</p>

                  </div>
                </>
              )
            }

          })}

        </div>
      </>
    )
  }
  else if (numberRank1 == 3) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1-3">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  <div key={data}>
                    <div className="rank_number">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div>
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className="name-user"
                        style={{
                          marginLeft: '5vw',
                          marginRight: '5vw'
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2">
          <div className="gridRow">

            {users.map((data, index) => {

              if (data.rank_moct === 2) {
                var number = '២'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>
                    </div>
                  </>
                )
              }
            })}

          </div>
          <div className="gridRow3">

            {users.map((data, index) => {

              if (data.rank_moct === 3) {
                var number = '៣'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>

                    </div>
                  </>
                )
              }
            })}

          </div>
        </div>
        <div className="gridRow2">
          <div className="gridRow">

            {users.map((data, index) => {

              if (data.rank_moct === 4) {
                var number = '៤'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>

                    </div>
                  </>
                )
              }
            })}

          </div>
          <div className="gridRow3">

            {users.map((data, index) => {


              if (data.rank_moct === 5) {
                var number = '៥'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'
                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <div
                      >
                        <p
                          className="name-user"
                        >{data.fullname}</p>
                      </div>

                    </div>
                  </>
                )
              }
            })}

          </div>
        </div>

      </>
    )
  }
  else if (numberRank1 == 1) {
    return (
      <>
        <div className="container-award">
          <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
        </div>
        <div className="gridRow1">
          {users.map((data, index) => {
            if (data.rank_moct === 1) {
              var number = '១'
              return (
                <>
                  <div key={data}>
                    <div className="rank_number">
                      <strong
                        style={{
                          fontFamily: 'kh moul',
                          fontSize: '2.5vw'

                        }}
                      >{number}</strong>
                    </div>
                    <div className="awardPic">
                      <img
                        src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                        style={{
                          width: '7vw',
                          height: '7vw',
                        }}
                      />
                    </div>
                    <div>
                      <img
                        alt="Image description"
                        src={data.user_picture_url}
                        className="pic_border"
                        style={{
                          width: '14vw',
                          height: '16vw'
                        }}

                      />
                      <p className="name-user"
                        style={{
                          marginLeft: '35vw',
                          marginRight: '35vw'
                        }}
                      >{data.fullname}</p>
                    </div>
                  </div>
                </>
              )
            }
          })}
        </div>
        <div className="gridRow2">
          <div className="gridRow">

            {users.map((data, index) => {

              if (data.rank_moct === 2) {
                var number = '២'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>
                    </div>
                  </>
                )
              }
            })}

          </div>
          <div className="gridRow3">

            {users.map((data, index) => {

              if (data.rank_moct === 3) {
                var number = '៣'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>

                    </div>
                  </>
                )
              }
            })}

          </div>
        </div>
        <div className="gridRow2">
          <div className="gridRow">

            {users.map((data, index) => {

              if (data.rank_moct === 4) {
                var number = '៤'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'

                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <p
                        className="name-user"
                      >{data.fullname}</p>

                    </div>
                  </>
                )
              }
            })}

          </div>
          <div className="gridRow3">

            {users.map((data, index) => {


              if (data.rank_moct === 5) {
                var number = '៥'
                return (
                  <>
                    <div key={index}
                      class="text-center">
                      <div className="rank_number">
                        <strong
                          style={{
                            fontFamily: 'kh moul',
                            fontSize: '2.5vw'
                          }}>{number}</strong>
                      </div>
                      <div className="awardPic">
                        <img
                          src="https://res.cloudinary.com/salamomschool/image/upload/v1718172272/awardFrame.png"
                          style={{
                            width: '7vw',
                            height: '7vw',
                          }}
                        />
                      </div>
                      <div className="image-container">
                        <img
                          alt="Image description"
                          src={data.user_picture_url}
                          className="pic_border"
                          style={{
                            width: '14vw',
                            height: '16vw'
                          }}

                        />
                      </div>
                      <div
                      >
                        <p
                          className="name-user"
                        >{data.fullname}</p>
                      </div>

                    </div>
                  </>
                )
              }
            })}

          </div>
        </div>

      </>
    )
  }

}

export default View1Award;
