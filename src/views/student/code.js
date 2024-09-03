if (numberRank2 == 2) {
  return (
    <>
      <div className="container-award">
        <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
      </div>
      <div className="container-principal">
        <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720534434/principalSign.png" />
      </div>

      <div className="gridRow1">
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
      <div className="gridRow1-2">
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
      <div className="gridRow1">
        <div className="gridRow">

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
        <div className="gridRow3">

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
} else if (numberRank2 == 3) {
  return (
    <>
      <div className="container-award">
        <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
      </div>
      <div className="container-principal">
        <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720534434/principalSign.png" />
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
} else if (numberRank2 == 1) {
  return (
    <>
      <div className="container-award">
        <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720524252/imageAward.png" />
      </div>
      <div className="container-principal">
        <img className="image-middle" src="https://res.cloudinary.com/salamomschool/image/upload/v1720534434/principalSign.png" />
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


const searchInput = document.getElementById("searchInput");
const tbody = document.querySelector("table tbody");

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

<td className="text-center"
  data-id={user.id}
  contentEditable
  suppressContentEditableWarning
  onBlur={setNumber}
  dangerouslySetInnerHTML={{ __html: user.t_grade }}
>

  const setSubject = (e) => {
    const setID = e.target.dataset.id
  const data = e.target.innerHTML
  if (setID) {
    update(ref(db, `/SalaMOM/users/` + setID), {
      user_subs: data,
    });
    }
  }
