import {JetView} from "webix-jet";

export default class CommonData extends JetView{
	constructor(app,name,data){
		super(app, name);
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
								this._tdata.add({"Name":""});
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
		view.queryView("datatable").sync(this._tdata);		
	}
}