const openMenuIcon = document.getElementById('open_menu_icon');
const closeMenuIcon = document.getElementById('close_menu_icon');
const mobileMenuBox = document.getElementById('mobile_menu_box');

openMenuIcon.addEventListener('click', () => {
    mobileMenuBox.classList.add('active_mobile_menu');
    document.body.classList.toggle('active_menu');
})

closeMenuIcon.addEventListener('click', () => {
    mobileMenuBox.classList.remove('active_mobile_menu');
    document.body.classList.toggle('active_menu')
})

