import { JetView } from "webix-jet";
import { contacts } from "models/contacts";
import { countries } from "models/countries";
import { statuses } from "models/statuses";

export default class FormView extends JetView {
    config() {
        return {
            view: "form",
            localId: "userForm",
            autoheight: false,
            elements: [
                { view: "text", label: "User name", name: "Name" },
                { view: "text", label: "Email", name: "Email" },
                { view: "combo", label: "Country", name: "country", options: { body: { template: "#Name#", data: countries } } },
                { view: "combo", label: "Status", name: "statuses", options: { body: { template: "#Name#", data: statuses } } },
                {
                    view: "button", value: "Save",
                    click: () => {
                        const values = this.getRoot().getValues();
	                    this.app.callEvent("onDataEditStop", [values]);
                    }
                },
            ]
        }
    }

    urlChange(view){
        const id = this.getParam("id");
        
        if (id){
            view.setValues(contacts.getItem(id))
        }
    }
}

