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
              if(this.getSelectedId() == id) {
                let id = contacts.getFirstId();
                id ? this.select(id) : this.$scope.app.show("/top/contacts");
                this.$scope.app.callEvent("onContactDelete");
              }
              contacts.remove(id);
            }
          },
          on: {
						"onAfterSelect": (id) => {
              this.setParam("id", id, true);
						}
					},
        },
        {
          view: "button",
          type: "form",
          value: "Add",
          click: () => {
            contacts.add({
               "Name": "",  
               "Email": "", 
            });
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
    this.$$("list").sync(contacts);
  }

  urlChange(view) {
    contacts.waitData.then(() => {
      var id = this.getParam("id") || contacts.getFirstId();
      if (id && contacts.exists()) {
        view.queryView("list").select(id);
      }
    })
  }
}