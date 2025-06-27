  window.onload = function () {
    const age = prompt("Bạn bao nhiêu tuổi?");
    if (age === null || age === "") {
      alert("Vui lòng nhập tuổi để tiếp tục.");
      location.reload();
    } else if (parseInt(age) >= 18) {
      alert("Bạn đã quá 18 tuổi già quá rồi. Truy cập bị từ chối!");
      window.location.href = "https://www.google.com"; // Hoặc trang từ chối
    }

  document.getElementById("cvBtn").addEventListener("click", function (e) {
    e.preventDefault();

    document.body.classList.add("shake");


    const img = document.createElement("img");
    img.src = "https://i.imgur.com/3pEpG9P.png"; 
    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.zIndex = "9999";
    img.style.maxWidth = "100vw";
    img.style.maxHeight = "100vh";


    const scream = new Audio("https://www.soundjay.com/human/sounds/scream-01.mp3");
    scream.play();

    document.body.appendChild(img);

    setTimeout(() => {
      img.remove();
      document.body.classList.remove("shake");
    }, 3000);
  });

  };