import config from './component.resource.json';

const $inject = ['LANG_KEYS', '$translate', 'auth'];
class NavbarService {
  constructor(...injects) {
    NavbarService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = {
      config: config,
      lang: this.LANG_KEYS
    };
    this.currentLang = this.$translate.use();
    this.isAuthorized = this.auth.isAuthorized;
  }

  get(options) {
    if (options) {
      this.data.config = Object.assign({}, this.data.config, options);
    }
    return this.data;
  }

  changeLang(key) {
    this.$translate.use(key);
  }
}
NavbarService.$inject = $inject;
export default NavbarService;
