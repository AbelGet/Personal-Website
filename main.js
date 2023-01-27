const modal = document.querySelector("#modal")
const modal1 = document.querySelector("#modal2")
const modal2 = document.querySelector("#modal3")
const openModal = document.querySelector(".openModal");
const openModal2 = document.querySelector(".openModal2");
const openModal3 = document.querySelector(".openModal3");
const closeModal = document.querySelector(".closeModal");
const closeModal2 = document.querySelector(".closeModal2");
const closeModal3 = document.querySelector(".closeModal3");

openModal.addEventListener('click', () => {
    modal.showModal();
    document.body.style.overflow = 'hidden';
})

closeModal.addEventListener('click', () => {
    modal.close();
    document.body.style.removeProperty('overflow');
})

openModal2.addEventListener('click', () => {
    modal1.showModal();
    document.body.style.overflow = 'hidden';
});

closeModal2.addEventListener('click', () => {
    modal1.close();
    document.body.style.removeProperty('overflow');
})

openModal3.addEventListener('click', () => {
    modal3.showModal();
    document.body.style.overflow = 'hidden';
});

closeModal3.addEventListener('click', () => {
    modal3.close(); document.body.style.removeProperty('overflow');
})