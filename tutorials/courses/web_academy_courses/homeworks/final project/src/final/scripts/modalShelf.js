//modal book-shelf!

export function modalShelf() {
    const modal = document.querySelector(".modal-mask");
    const btn = document.querySelector(".book__button");
    const span = document.querySelector(".book-page-shelf__close");


    btn.addEventListener('click', openModal);
    span.addEventListener('click', closeModal);
    window.addEventListener('click', closeAll);

        function openModal() {
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }

        function closeModal() {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    }

        function closeAll(event) {
        if (event.target == modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
    }
}
