import { JetView, plugins } from "webix-jet";

export default class SettingsView extends JetView {
  config() {
    const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();
    
    return {
      view: "segmented", multiview: true, value: lang,
      options: [
        { id: "langRu", value: "RU", width: 40 },
        { id: "langEn", value: "EN", width: 40 }],
        click:() => this.toggleLanguage(), value:lang
    }
  }
  toggleLanguage(){
		const langs = this.app.getService("locale");
		const value = this.getRoot().queryView({ name:"lang" }).getValue();
		langs.setLang(value);
  }
  init(){
		this.use(plugins.Locale);
	}
}