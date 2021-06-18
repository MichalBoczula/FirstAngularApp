import { Component } from "@angular/core";

@Component({
  selector: "app-homework2",
  templateUrl: "./homework2.component.html"
})

export class HomeworkComponent2 {
  Msg: string = "Here will be username";
  Username = "";

  constructor() {

  }

  displayName() {
    if (this.Username.trim() !== "" || this.Username.trim.length !== 0) {
      this.Msg = this.Username;
      this.Username = "";
    }
    else
    {
      this.Msg = "Username is empty or white spaces";
    }
  }

}
