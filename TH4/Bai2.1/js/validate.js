$(document).ready(function () {
  $.validator.addMethod(
    "validateName",
    function (value, element) {
      return this.optional(element) || /^[a-zA-ZÀ-ỹ\s]{3,}$/.test(value);
    },
    "Tên phải lớn hơn 3 ký tự và chỉ chứa chữ cái hoặc khoảng trắng",
  );
  $.validator.addMethod(
    "validatePhone",
    function (value, element) {
      return this.optional(element) || /^0[0-9]{9}$/.test(value);
    },
    "Số điện thoại bắt đầu từ 0 và có 10 chữ số",
  );
  $.validator.addMethod(
    "validatePassword",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)
      );
    },
    "Mật khẩu gồm 8 ký tự, ít nhất mọt chữ chữ cái viết hoa, một chữ cái viết thường, và 1 số",
  );
  $("#myForm").validate({
    rules: {
      name: {
        required: true,
        validateName: true,
      },
      email: {
        required: true,
        email: true,
      },
      SDT: {
        required: true,
        validatePhone: true,
      },
      password: {
        required: true,
        validatePassword: true,
      },
      "re-password": {
        required: true,
        equalTo: "[name='password']",
      },
      gender: {
        required: true,
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Vui lòng nhập họ tên",
      },
      email: {
        required: "Vui lòng nhập email",
        email: "Email không đúng định dạng",
      },
      SDT: {
        required: "Vui lòng nhập số điện thoại",
      },
      password: {
        required: "Vui lòng nhập mật khẩu",
      },
      "re-password": {
        required: "Nhập lại mật khẩu",
        equalTo: "Mật khẩu nhập lại không khớp",
      },
      gender: {
        required: "Vui lòng chọn giới tính",
      },
      checkbox: {
        required: "Vui lòng chọn điều khoản",
      },
    },
    submitHandler: function (form) {
      let name = document.getElementById("name").value;
      document.querySelector(".success span").textContent =
        "Đăng ký thành công! 🎉" + name;
      document.getElementById("myForm").style.display = "none";
    },
  });
});
