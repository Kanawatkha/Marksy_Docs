// รอให้หน้าเว็บโหลดเสร็จก่อน
document.addEventListener('DOMContentLoaded', () => {

    // Highlight เมนูปัจจุบันอัตโนมัติ (Active State)
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link-custom');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    // (Optional) เพิ่ม Logic สำหรับ Mobile Menu Animation ถ้าต้องการความซับซ้อนในอนาคต
    // ตอนนี้ใช้ Bootstrap Collapse จัดการพื้นฐานไปก่อน
});