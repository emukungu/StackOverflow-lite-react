import Swal from "sweetalert2";

const error = message => {
  Swal({
    title: "Error!",
    text: message,
    type: "error",
    customClass: "swal-wide",
    confirmButtonText: "OK"
  });
};
export default error;
