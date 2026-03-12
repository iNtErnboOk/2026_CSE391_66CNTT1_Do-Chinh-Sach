const submitBtn = document.getElementById("submit");
const searchInput = document.getElementById("search");
const rankFilter = document.getElementById("rankFilter");
const pointHeader = document.getElementById("pointHeader");

const students = [];
let nextId = 1;
let sortOrder = null; // null | "asc" | "desc"

const tbody = document.querySelector("tbody");
const thongKe = document.getElementById("thongKe");
const TB = document.getElementById("TB");

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const rankValue = rankFilter.value;

  let filtered = students;

  if (query) {
    filtered = filtered.filter((s) => s.name.toLowerCase().includes(query));
  }

  if (rankValue !== "all") {
    filtered = filtered.filter((s) => getRankLabel(s.point) === rankValue);
  }

  if (sortOrder) {
    filtered = [...filtered].sort((a, b) =>
      sortOrder === "asc" ? a.point - b.point : b.point - a.point,
    );
  }

  return filtered;
}

function updateSortIndicator() {
  const arrow = sortOrder === "asc" ? " ▲" : sortOrder === "desc" ? " ▼" : "";
  pointHeader.textContent = `Điểm${arrow}`;
}

function renderTable() {
  const visibleStudents = applyFilters();

  tbody.innerHTML = "";

  if (visibleStudents.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 5;
    td.textContent = "Không có kết quả";
    td.style.textAlign = "center";
    tr.appendChild(td);
    tbody.appendChild(tr);
  } else {
    visibleStudents.forEach((student, index) => {
      const tr = document.createElement("tr");

      const stt = document.createElement("td");
      stt.textContent = (index + 1).toString();

      const nameTd = document.createElement("td");
      nameTd.textContent = student.name;

      const pointTd = document.createElement("td");
      pointTd.textContent = student.point.toString();

      const rankTd = document.createElement("td");
      rankTd.textContent = getRankLabel(student.point);

      const actionTd = document.createElement("td");
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Xóa";
      removeBtn.addEventListener("click", () => {
        const idx = students.findIndex((s) => s.id === student.id);
        if (idx !== -1) {
          students.splice(idx, 1);
          renderTable();
        }
      });
      actionTd.appendChild(removeBtn);

      tr.append(stt, nameTd, pointTd, rankTd, actionTd);
      tbody.appendChild(tr);
    });
  }

  const total = students.reduce((acc, cur) => acc + cur.point, 0);
  const avg = students.length ? total / students.length : 0;

  thongKe.textContent = `Tổng số sinh viên: ${students.length} (hiển thị ${visibleStudents.length})`;
  TB.textContent = `Điểm trung bình: ${avg.toFixed(2)}`;
}

updateSortIndicator();

function getRankLabel(point) {
  if (point >= 8.5) return "Giỏi";
  if (point >= 7.0) return "Khá";
  if (point >= 5) return "Trung bình";
  return "Yếu";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const pointValue = parseFloat(document.getElementById("point").value);

  if (!nameInput) {
    alert("Vui lòng nhập tên");
    return;
  }

  if (isNaN(pointValue) || pointValue < 0 || pointValue > 10) {
    alert("Điểm không hợp lệ");
    return;
  }

  students.push({ id: nextId++, name: nameInput, point: pointValue });
  renderTable();

  document.getElementById("name").value = "";
  document.getElementById("point").value = "";
});

searchInput.addEventListener("input", () => {
  renderTable();
});

rankFilter.addEventListener("change", () => {
  renderTable();
});

pointHeader.addEventListener("click", () => {
  sortOrder = sortOrder === "asc" ? "desc" : "asc";
  updateSortIndicator();
  renderTable();
});

// Prevent 'Tìm kiếm' button from submitting the form (optional)
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", (e) => e.preventDefault());
