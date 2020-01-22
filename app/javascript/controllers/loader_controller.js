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

  async load() {
    this.loadingTarget.style.display = 'block'
    this.buttonTarget.disabled = true
    const response = await fetch(location.href, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
    const html = await response.text()
    this.listTarget.insertAdjacentHTML('beforeend', html)
    this.loadingTarget.style.display = 'none'
    this.buttonTarget.disabled = false
  }
}
