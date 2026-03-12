$(document).ready(function () {
  $.validator.addMethod(
    "deliveryDate",
    function (value) {
      let today = new Date();

      today.setHours(0, 0, 0, 0);

      let selected = new Date(value);

      let maxDate = new Date();

      maxDate.setDate(today.getDate() + 30);

      return selected >= today && selected <= maxDate;
    },
    "Ngày giao phải trong 30 ngày tới",
  );

  $("#orderForm").validate({
    rules: {
      product: {
        required: true,
      },

      quantity: {
        required: true,
        digits: true,
        min: 1,
        max: 99,
      },

      delivery: {
        required: true,
        deliveryDate: true,
      },

      address: {
        required: true,
        minlength: 10,
      },

      note: {
        maxlength: 200,
      },

      payment: {
        required: true,
      },
    },

    messages: {
      product: "Vui lòng chọn sản phẩm",

      quantity: {
        required: "Nhập số lượng",
        digits: "Phải là số",
        min: "Tối thiểu 1",
        max: "Tối đa 99",
      },

      delivery: {
        required: "Chọn ngày giao",
      },

      address: {
        required: "Nhập địa chỉ",
        minlength: "Ít nhất 10 ký tự",
      },

      note: {
        maxlength: "Tối đa 200 ký tự",
      },

      payment: "Chọn phương thức thanh toán",
    },

    submitHandler: function (form) {
      document.getElementById("confirmBox").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    },
  });
});
