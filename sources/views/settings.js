import {JetView} from "webix-jet";

export default class SettingsView extends JetView{
	config(){
		return { view:"segmented", multiview:true, value:1, options:[
      { id:"langRu", value:"RU", width: 40 }, 
      { id:"langEn", value:"EN", width: 40 }]
    };
	}
}