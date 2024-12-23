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

