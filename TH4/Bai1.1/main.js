const sub = document.getElementById("submit");
const tb = [];
sub.addEventListener("click", (e) => {
  e.preventDefault();
  const pointValue = parseFloat(document.getElementById("point").value);
  if (isNaN(pointValue) || pointValue < 0 || pointValue > 10) {
    alert("Điểm không hợp lệ");
  } else {
    const tr = document.createElement("tr");
    const stt = document.createElement("td");
    const name = document.createElement("td");
    const pointTd = document.createElement("td");
    const rank = document.createElement("td");
    const action = document.createElement("td");

    tr.appendChild(stt);
    tr.appendChild(name);
    tr.appendChild(pointTd);
    tr.appendChild(rank);
    tr.appendChild(action);

    const tbody = document.getElementsByTagName("tbody");
    tbody[0].appendChild(tr);

    const tr_tbody = document.querySelectorAll("tbody tr");
    stt.innerHTML = `${tr_tbody.length}`;

    const name_input = document.getElementById("name").value;
    name.innerHTML = name_input;
    pointTd.innerHTML = pointValue;

    if (pointValue >= 8.5) {
      rank.innerHTML = "Giỏi";
    } else if (pointValue >= 7.0) {
      rank.innerHTML = "Khá";
    } else if (pointValue >= 5) {
      rank.innerHTML = "Trung bình";
    } else {
      rank.innerHTML = "Yếu";
    }

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Xóa";
    removeBtn.addEventListener("click", () => tr.remove());
    action.appendChild(removeBtn);

    const thongKe = document.getElementById("thongKe");
    thongKe.innerHTML = `Tổng số sinh viên: ${tr_tbody.length}`;

    const TB = document.getElementById("TB");
    let result = 0;
    tb.push(pointValue);
    for (let i = 0; i < tb.length; i++) {
      result = result + tb[i];
    }
    TB.innerHTML = `Điểm trung bình: ${result / tb.length}`;
  }
});
