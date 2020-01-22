import { Controller } from 'stimulus'

export default class Loader extends Controller {
  static targets = ['list', 'button', 'loading']

  get page() {
    return parseInt(this.data.get('page') || (this.page = 1))
  }

  set page(value) {
    return this.data.set('page', value)
  }

  async load() {
    this.toggleLoading(true)
    this.listTarget.insertAdjacentHTML('beforeend', await this.newHTML())
    this.toggleLoading(false)
  }

  toggleLoading(loading) {
    this.loadingTarget.style.display = loading ? 'block' : 'none'
    this.buttonTarget.disabled = loading
  }

  async newHTML() {
    const response = await fetch(location.href, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
    return response.text()
  }
}
