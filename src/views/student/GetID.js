
export default function GetId(users) {
  let myArr = []
  users.map((e, index) => {
    let id = e.id
    myArr.push(id)
  })
  let idNumber = myArr[myArr.length - 1]
  const getSum = () => {
    if (idNumber){
    let lastNumber = idNumber.slice(2, 4)
    var sum = parseFloat(lastNumber) + 1;
      return sum
    }
  }
  const result = getSum()
  return result
}
