import { Controller } from 'stimulus'

export default class Loader extends Controller {
  static targets = ['list', 'button', 'loading']

  connect() {
  }

  load() {
    this.loadingTarget.style.display = 'block'
    this.buttonTarget.disabled = true
  }
}
