import {JetView} from "webix-jet";

export default class CommonData extends JetView{
	constructor(app,name,data){
		super(app,name);
		this._tdata = data;
	}
	config(){
		return {
			rows:[
				{ view:"datatable", editable: true, autoConfig:true },
				{ view: "button", type: "form", value: "Add", click:() => {
					// const form = this.getRoot().queryView("form");
					// cnst grid = this.getRoot().queryView("datatable");
					let data = {
            "Name": "type new name",
            "Icon": ""
          };
          this.getRoot().queryView("datatable").add(data);
				}}
			]
		}
	}
	init(view){
		view.queryView("datatable").parse(this._tdata);
	}
}