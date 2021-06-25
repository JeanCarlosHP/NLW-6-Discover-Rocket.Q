export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open() {
        // Add a classe active na modal
        modalWrapper.classList.add('active')
    }

    function close() {
        // Remove a classe active da modal
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}