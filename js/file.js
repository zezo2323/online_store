// تهيئة Swiper
var swiper = new Swiper(".mySwiper", {
    speed: 600, // سرعة التنقل بين الشرائح
    parallax: true, // تأثير Parallax
    pagination: {
        el: ".swiper-pagination", // تحديد عنصر الصفحات
        clickable: true, // تفعيل النقر على الصفحات
    },
    navigation: {
        nextEl: ".swiper-button-next", // زر الانتقال للأمام
        prevEl: ".swiper-button-prev", // زر الانتقال للخلف
    },
});
const modalContainer = document.querySelector(".modal-container"),

btnlog = document.getElementById("btn-log"),
create = document.getElementById("create"),
login = document.getElementById("login"),
loginForm = document.querySelector(".login-form"),
registrationform = document.querySelector(".registration")
btnlog.onclick = () => {
    modalContainer.classList.add("open");
},
function closemodalcontainer() {
    modalContainer.classList.remove("open")
}
create.onclick = () => {
    loginForm.setAttribute("style", "transform: translateX(-500px)" );}
    registrationform.setAttribute("style", "transform: translateX(0px)" );}
    
login.onclick = () => {
      loginForm.setAttribute("style",);}
      registrationform.setAttribute("style", );