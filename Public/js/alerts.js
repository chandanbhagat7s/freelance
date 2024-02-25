



export const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};
export const alertt = (status, message) => {
    // console.log("called");

    hideAlert()

    const markup = `<div class="alert alert-${status} fixed-top " role="alert" style="z-index:3;">
      ${message}
    </div>`;
    document.querySelector('body').insertAdjacentHTML("beforebegin", markup);

    window.setTimeout(hideAlert, 5000)
}













