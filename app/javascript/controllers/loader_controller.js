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
    const html = await this.loadNewHTML().catch((e) => console.log(e.message))
    this.listTarget.insertAdjacentHTML('beforeend', html || '')
    this.toggleLoading(false)
  }

  toggleLoading(loading) {
    this.loadingTarget.style.display = loading ? 'block' : 'none'
    this.buttonTarget.disabled = loading
  }

  async loadNewHTML() {
    const url = location.href
    const response = await fetch(url, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
    if (response.status < 200 || response.status >= 300)
      throw new Error(`HTTP status ${response.status} from ${url} \n\n ${await response.text()}`)
    return response.text()
  }
}
