class App {
  constructor() {
    // Default to English since it is likely the more predominent of the two languages (80/20 rule)
    this.language = "en-ca";
  }

  init() {
    // Bind a click handler to the language toggle button
    document.getElementById('languageToggle').addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleLanguage();
    });
  }

  /**
   * Toggles between the two languages. If on the home page it loads the resource
   * from the locally bound JSON object. Otherwise for the about page it fetches
   * it from the API. This demonstrates two ways of delivering the resources to 
   * the page.
   */
  toggleLanguage() {
    this.language = (this.language === 'en-ca' ? 'fr-ca' : 'en-ca');
    if (document.querySelector('title').innerText.toLowerCase() === 'home') {
      // Demonstrates parsing JSON data that has been injected into the page during server-side rendering
      document.querySelectorAll("[data-res]").forEach(el => {
        el.innerText = embeddedRes['home'][el.dataset.res][this.language];
      });
    } else {
      // Demonstrates parsing JSON data that is retrieved via the API
      fetch(`api/locale/${this.language}`, {
        method: 'get'
      }).then((response) => {
        return response.json();
      }).then((json) => {
        document.querySelectorAll("[data-res]").forEach(el => {
          el.innerText = json['about'][el.dataset.res][this.language];
        });
      }).catch((err) => {
        console.error(err)
      });
    }
  }
}

window.addEventListener("load", e => {
  new App().init();
});
