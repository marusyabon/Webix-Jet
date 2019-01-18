import { JetView } from "webix-jet";
import { contacts } from "models/contacts";
import  FormvView from "./form";

let userInfo = "<div class='user_icon'></div><p class='user_name'>#Name#</p><p class='user_email'>#Email#</p><span class='remove_contact webix_icon wxi-close'></span>";

export default class ContactsVeiw extends JetView {

  config() {
    let list = {
      rows: [
        {
          view: "list",
          localId: "list",
          width: 300,
          css: "users_list",
          select: true,
          template: userInfo,
          type: {
            height: 50
          },
          onClick: {
            "remove_contact": function (e, id) {
              contacts.remove(id);
            }
          },
          on: {
						"onAfterSelect": (id) => {
							this.show("contacts?id="+id)
						}
					},
        },
        {
          view: "button",
          type: "form",
          value: "Add",
          click: () => {
            contacts.add({id: webix.uid(), "Name": "Type name", "Email": "example@gmail.com", "Status": 1, "Country": 1 });
          }
        },
        {
          height: 15
        }
      ]
    }
    return {
      cols: [
        list,
        { 
          $subview: FormvView        
        }
      ]
    };
  }
  init() {
    this.on(this.app, "onDataEditStop", (data) => {
      if (data) {
        contacts.updateItem(data.id, data)
      }
    });

    this.$$("list").sync(contacts);
  }

  urlChange(view) {
    var id = this.getParam("id") || contacts.getFirstId();
    view.queryView("list").select(id);
  }
}