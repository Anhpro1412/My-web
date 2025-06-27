  window.onload = function () {
    const age = prompt("Bạn bao nhiêu tuổi?");
    if (age === null || age === "") {
      alert("Vui lòng nhập tuổi để tiếp tục.");
      location.reload();
    } else if (parseInt(age) >= 18) {
      alert("Bạn đã quá 18 tuổi già quá rồi. Truy cập bị từ chối!");
      window.location.href = "https://www.google.com"; // Hoặc trang từ chối
    }
    // Nếu < 18 thì không làm gì, cho truy cập bình thường
  };