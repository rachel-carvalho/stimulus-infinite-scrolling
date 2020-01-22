import { Controller } from 'stimulus'

export default class Loader extends Controller {
  static targets = ['list', 'button', 'loading']

  get page() {
    return parseInt(this.data.get('page') || (this.page = 1))
  }

  set page(value) {
    return this.data.set('page', value)
  }

  connect() {
  }

  load() {
    this.loadingTarget.style.display = 'block'
    this.buttonTarget.disabled = true
  }
}
