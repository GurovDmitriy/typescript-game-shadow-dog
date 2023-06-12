class Controller {
  constructor(btnRight) {
    document.addEventListener("keypress", (evt) => {
      console.log(evt)
      btnRight(evt)
    })
  }
}

export default Controller
