import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
  config() {
		const lang = this.app.getService("locale").getLang();

    return {
      rows:[
        {view: "segmented", multiview: true, value: lang, name:"lang" ,
          options: [
            { id: "ru", value: "RU", width: 40 },
            { id: "en", value: "EN", width: 40 }
          ],
          click:() => this.toggleLanguage(), value:lang
        },
        {}
       ] 
     }
  }
  toggleLanguage(){
		const langs = this.app.getService("locale");
    const button = this.getRoot().queryView({ name:"lang" });
		const value = button.getValue();
		langs.setLang(value);
  }
}