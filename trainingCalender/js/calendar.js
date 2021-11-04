const year = document.querySelector(".year");
const month = document.querySelector(".month");
const tbody = document.querySelector("tbody");

let currentDate = new Date();
createCalendar();

function prev() {
  // 지난달
  currentDate.setMonth(currentDate.getMonth() - 1);
  createCalendar();
}

function next() {
  // 다음달
  currentDate.setMonth(currentDate.getMonth() + 1);
  createCalendar();
}

function createCalendar() {
  tbody.innerHTML = "";
  year.textContent = currentDate.getFullYear();
  month.textContent = currentDate.getMonth() + 1;

  let firstDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  let week = 0;

  let row = null;

  while (firstDate <= lastDate || week % 7 !== 0) {
    if (week % 7 === 0) {
      row = tbody.insertRow();
    }

    if (week % 7 === firstDate.getDay() && firstDate <= lastDate) {
      let td = row.insertCell();
      td.textContent = firstDate.getDate();
      firstDate.setDate(firstDate.getDate() + 1);
    } else {
      row.insertCell();
    }
    week++;
  }
}
