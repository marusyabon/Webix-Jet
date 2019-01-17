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
						onAfterSelect: (id) => {
							this.$$(id).show();
						}
					},
					data: ["Countries", "Statuses"]
				},
				{
					cells: [
						{
							rows: [
								{
									cols: [
										{
											view: "button",
											value: "Add new",
											type: "form",
											width: 100,
											click() {
												let data = {
													"Name": "type new name"
												};
												$$("Countries").add(data);
											}
										},
										{}
									]
								},
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
											editor:"text"
										},
										{
											template: "<span class='removeBtn'>{common.trashIcon()}</span>",
										}
									],
									onClick: {
										removeBtn: function (e, id) {
											this.remove(id);
											return false;
										}
									}
								},
							]
						},
						{
							rows: [
								{
									cols: [
										{
											view: "button",
											value: "Add new",
											type: "form",
											width: 100,
											click() {
												let data = {
													"Name": "type new name"
												};
												$$("Statuses").add(data);
											}
										},
										{}
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
											editor: "text"
										},
										{
											id: "Icon",
											header: "Icon",
											fillspace: 1,
											editor: "text"
										},
										{
											template: "<span class='removeBtn'>{common.trashIcon()}</span>",
										}
									],
									onClick: {
										removeBtn: function (e, id) {
											this.remove(id);
											return false;
										}
									}
								}
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