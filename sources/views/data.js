import {JetView} from "webix-jet";
import CommonData from "views/commondata";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class DataView extends JetView{
	config() {
		let list = {
			view: "list",
			id: "list",
			select: true,
			width: 250,
			on: {
				onAfterSelect: (id) => {
					$$(id).show();
				}
			},
			data: [
				{ value: "Countries", id: "data:countries" },
				{ value: "Statuses", id: "data:statuses" }
			]
		}

		let data = {
			cells: [
				{
					id: "data:countries", $subview: new CommonData(this.app, "", countries)
				},
				{
					id: "data:statuses", $subview: new CommonData(this.app, "", statuses)
				}
			]
		}

		return {
			cols: [list, data]
		};
	}

	init(view){
		view.queryView("list").select("data:countries");	
	}
}