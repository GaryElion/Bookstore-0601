let modal = document.querySelector('.modal');


modal.addEventListener('click', function (e) {
    let element = e.target;
    if (element == modal) {
        modal.classList.toggle('hidden');
    }
})

document.getElementById('clickopen').addEventListener('click', function () {
    modal.classList.toggle('hidden');
})


closemodal();
modal_content_event('.modal .modal-content-2');


//關閉modal
function closemodal() {
    let close = document.querySelector('.modal .close');
    close.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    let cancel = document.querySelector('.modal .cancel');
    cancel.addEventListener('click', function () {
        modal.classList.add('hidden');
    });
}

//modal事件
function modal_content_event(type) {
    let modal_content = document.querySelector(type);
    modal_content.display = 'flex'
    modal_content.classList.toggle('open');
}
