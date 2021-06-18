import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [`.online {color: green}
            .offline {color: red}`]
})

export class ServerComponent {
  ServerId: number = 10;
  ServerStatus: string = "";
  AllowNewServer: boolean = true;
  Msg: string = "hasn't clicked yet";
  InputMsg: string = '';
  Name: string = "No Name :("
  Temp: string = "";
  ServerName: string = "";
  ServerCreated: boolean = false;
  InputedName: string = "";

  constructor() {
    setTimeout(() => {
      this.AllowNewServer = false;
    }, 1000);

    this.ServerStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  GetServerStatus() {
    return this.ServerStatus;
  }

  ClickMsg() {
    this.Msg = "btn has been clicked :)";
  }

  DisplayInputedData(event: Event) {
    this.InputMsg = (<HTMLInputElement>event.target).value;
  }

  DisplayData() {
    this.Name = `Hello ${this.Temp}`;
    this.Temp = "";
  }

  InputData(event: Event) {
    this.Temp = (<HTMLInputElement>event.target).value;
  }

  DisplayServerName() {
    if (this.InputedName.trim() !== "") {
      this.ServerCreated = true;
      this.ServerName = this.InputedName;
      this.InputedName = "";
    }
  }

  GetColor() {
    return this.ServerStatus === "online"? "green" : "red";
  }
}
