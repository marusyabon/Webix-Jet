import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

let userInfo = "<div class='user_icon'></div><p class='user_name'>#Name#</p><p class='user_email'>#Email#</p>";

export default class DataView extends JetView{

	config(){
		return {
      cols: [
        {
          view: "list",
          width: 250,
          css: "users_list",
          select: true,
          data: contacts,
          template: userInfo,
          type: {
            height: 50
          }
        },
        {
          view: "form",
          id: "userForm",
          autoheight: false,
          elements: [
            { view: "text", label: "User name", name: "u_name" },
            { view: "text", label: "Email", name: "u_email" }
          ]
        }
      ]
    };
	}
}