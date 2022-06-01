
/*刪除使用者 */
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", function changetoact(event) {
    const object = item.querySelector(".checkitem");
    object.classList.toggle("itemnone");
    object.classList.toggle("itemactive");
  });
});

/*modal */

var modal = document.getElementById("CreateModal");
var btn = document.getElementById("createuser");
var span = document.getElementById("closemodal");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*modal 下拉式選單 */
const user = document.querySelectorAll(
  ".modal-table tbody tr:not(.usercontent)"
);
const user2 = document.querySelectorAll(".modal-table .inputuser");
user.forEach(function (item, index) {
  item.addEventListener(
    "click",
    function togglecontent(even, a = index, array = user2) {
      const object = array[a];
      object.classList.toggle("openinput");
      object.classList.toggle("closeinput");
    }
  );
});
