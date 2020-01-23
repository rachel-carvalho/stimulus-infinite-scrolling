import { Controller } from 'stimulus'

export default class Loader extends Controller {
  static targets = ['list', 'button', 'loading']

  get page() {
    return parseInt(this.data.get('page') || (this.page = 1))
  }

  set page(value) {
    return this.data.set('page', value)
  }

  get loading() {
    return this.data.get('loading') == 'true'
  }

  set loading(value) {
    this.data.set('loading', value)
    this.loadingTarget.style.display = value ? 'block' : 'none'
    this.buttonTarget.disabled = value
  }

  async load() {
    if (this.loading) return

    this.loading = true
    const html = await this.loadNewHTML().catch((e) => console.log(e.message))
    this.page++
    this.listTarget.insertAdjacentHTML('beforeend', html || '')
    this.loading = false
  }

  async loadNewHTML() {
    const url = `${location.href}?page=${this.page + 1}`
    const response = await fetch(url, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
    if (response.status < 200 || response.status >= 300)
      throw new Error(`HTTP status ${response.status} from ${url} \n\n ${await response.text()}`)
    return response.text()
  }
}
