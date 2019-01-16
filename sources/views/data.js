import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class DataView extends JetView{
	config(){
		return {
			cols: [
				{
					view: "list",
					select: true,
					width: 250,
					on: {
						onAfterSelect: function (id) {
							$$(id).show();
						}
					},
					data: ["Countries", "Statuses"]
				},
				{
					cells: [
						{
							view: "datatable",
							id: "Countries",
							select: true,
							editable: true,
							editaction: "dblclick",
							autoConfig: true,
							columns: [
								{
									id: "Name",
									header: "Full Name",
									fillspace: 1,
									editor:"text",
									template: "<span>#Name#</span>  <span class='removeBtn'>{common.trashIcon()}</span>",
								}
							]
						},
						{
							view: "datatable",
							id: "Statuses",
							select: true,
							editable: true,
							editaction: "dblclick",
							autoConfig: true,
							columns: [
								{
									id: "Name",
									header: "Name",
									fillspace: 1,
									editor:"text"
								},
								{
									id: "Icon",
									header: "Icon",
									fillspace: 1,
									editor:"text",
									template: "<span>#Icon#</span>  <span class='removeBtn'>{common.trashIcon()}</span>",
								},
							]
						}
					]
				}
			]
		};
	}
	init(){
		this.$$("Countries").parse(countries);
		this.$$("Statuses").parse(statuses);
	}
	
}