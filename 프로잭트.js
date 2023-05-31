var btn = document.querySelector("input");
var txt = document.querySelector("input");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.value === "서비스 코드") {
        btn.value = "서비스 코드";
        txt.textContent = "118-345";
    } else {
        btn.value = "118-345";
        txt.textContent = "118-345";
    }
}
