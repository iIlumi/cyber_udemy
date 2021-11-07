// sự kiện ready của trang web -> vừa load lên là chạy
// sk onload -> chạy khi tất cả code js, css chạy xong rồi chạy
// Phải chờ các thư viện trên chạy trước
// Nếu gọi hàm trực tiế sẽ là sự kiện ready - truncateCardTitle()

window.addEventListener("load", function () {
  truncateCardTitle();
});

// Phải convert qua arrray, ko loop trực tiếp được
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
const truncateCardTitle = () => {
  Array.from(document.getElementsByClassName("card-title")).forEach(
    (cardList) => {
      cardList.innerHTML = truncateString(cardList.innerHTML.trim(), 35);
    }
  );
};

const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num) + "..." : str;
