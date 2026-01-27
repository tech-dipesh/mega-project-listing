// Bootsrap:
(function () {
  let forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach((form)=> {
      form.addEventListener('submit', (e)=> {
        if (!form.checkValidity()) {
          e.preventDefault()
          e.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()