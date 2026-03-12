document.addEventListener("DOMContentLoaded", function () {
  const prices = {
    ao: 150000,
    quan: 200000,
    giay: 500000,
  };

  const product = document.querySelector("select[name='product']");
  const quantity = document.querySelector("input[name='quantity']");
  const total = document.getElementById("total");

  function calculateTotal() {
    let p = product.value;
    let q = quantity.value;

    if (p && q) {
      let result = prices[p] * q;

      total.textContent = Number(result).toLocaleString("vi-VN");
    }
  }

  product.addEventListener("change", calculateTotal);
  quantity.addEventListener("input", calculateTotal);

  const note = document.querySelector("textarea[name='note']");
  const counter = document.getElementById("noteCount");

  note.addEventListener("input", function () {
    let length = note.value.length;

    counter.textContent = length + "/200";

    if (length > 200) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
  });

  const confirmBtn = document.getElementById("confirmBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  confirmBtn.addEventListener("click", function () {
    document.getElementById("successMsg").textContent =
      "Đặt hàng thành công 🎉";

    document.getElementById("confirmBox").style.display = "none";
  });

  cancelBtn.addEventListener("click", function () {
    document.getElementById("confirmBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  document.getElementById("orderForm").addEventListener("submit", function () {
    let p = product.options[product.selectedIndex].text;
    let q = quantity.value;
    let t = total.textContent;
    let d = document.querySelector("input[name='delivery']").value;

    document.getElementById("orderSummary").textContent =
      "Sản phẩm: " +
      p +
      " | Số lượng: " +
      q +
      " | Tổng tiền: " +
      t +
      " | Ngày giao: " +
      d;
  });
});
