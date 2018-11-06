import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('action-completed');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "Action Completed",
        icon: "success"
        // text: "This is a great alert, isn't it?",
      });
    });
  }
}

export { bindSweetAlertButtonDemo };
