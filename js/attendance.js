let attendanceData =
  JSON.parse(localStorage.getItem("attendance")) || [];

function markAttendance(){

  let name =
    document.getElementById("studentName").value;

  let status =
    document.getElementById("status").value;

  attendanceData.push({
    name,
    status
  });

  localStorage.setItem(
    "attendance",
    JSON.stringify(attendanceData)
  );

  showAttendance();
}

function showAttendance(){

  let list =
    document.getElementById("attendanceList");

  list.innerHTML = "";

  attendanceData.forEach(student => {

    let li = document.createElement("li");

    li.innerText =
      `${student.name} - ${student.status}`;

    list.appendChild(li);

  });
}

showAttendance();
