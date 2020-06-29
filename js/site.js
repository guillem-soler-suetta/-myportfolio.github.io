let isModalOpen = (element) => {
    return element.hasClass('show') ? true : false;
}

let openModal = (element) => element.modal('toggle');