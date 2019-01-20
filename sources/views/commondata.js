import {JetView} from "webix-jet";

export default class CommonData extends JetView{
	constructor(app,name,data){
		super(app,name);
		this._tdata = data;
	}
	config() {
		return {
			rows: [
				{
					view: "datatable", editable: true, autoConfig: true, editaction:"dblclick",
				}, 
				{
					cols: [
						{
							view: "button", type: "form", value: "Add", click: () => {
								let newData = {
									"Name": "",
									"Icon": ""
								};
								this._tdata.add(newData);
							}
						},
						{
							view: "button", type: "form", value: "Remove", click: () => {
								let item = this.getRoot().queryView({view:"datatable"}).getSelectedId()
								this._tdata.remove(item);
							}
						}
					]
				}
			]
		}
	}
	init(view){
		view.queryView("datatable").parse(this._tdata);
	}
}