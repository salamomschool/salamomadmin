{
  dbPreview.map((d, index) => {
    // result(d)
  })
}
const result = (d) => {
  setTimeout(() => {
    const id = d.nickname
    console.log(id);
    const tdElements = document.querySelectorAll('.countCell6');
    const extractedText = [];

    tdElements.forEach((element) => {
      extractedText.push(element.textContent);
    });

    setmonArray(extractedText);
  }, 1000);
  const countFilledCells = monArray.reduce((count, row) => {
    return count + (row !== "" ? 1 : 0);
  }, 0);

}
