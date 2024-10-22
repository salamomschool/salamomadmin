import React, { useEffect, useState, useRef } from "react";

export default function GetId(users) {
  const [mydbLevel, setmydbLevel] = useState(localStorage.getItem('school_level_st') || 'default');
  useEffect(() => {
    localStorage.setItem('school_level_st', mydbLevel);
    setmydbLevel(localStorage.getItem('school_level_st') || 'default')
  }, [mydbLevel]);

  let myArr = []
  users.map((e, index) => {
    let id = e.id
    myArr.push(id)

  })
  let idNumber = myArr[myArr.length - 1]
  const getSum = () => {
    if (mydbLevel == 'បឋមសិក្សា') {
      if (idNumber) {
        let lastNumber = idNumber.slice(2, 4)
        var sum = parseFloat(lastNumber) + 1;
        return sum
      }
    }
    if (mydbLevel == 'អនុវិទ្យាល័យ') {
      if (idNumber) {
        let lastNumber = idNumber.slice(2, 4)
        var sum = parseFloat(lastNumber) + 1;
        return sum
      }
    }
    if (mydbLevel == 'វិទ្យាល័យ') {
      if (idNumber) {
        let lastNumber = idNumber.slice(3, 5)
        var sum = parseFloat(lastNumber) + 1;
        return sum
      }
    }
  }
  const result = getSum()
  return result
}
