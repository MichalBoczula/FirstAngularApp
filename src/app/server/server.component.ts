import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})

export class ServerComponent {
  ServerId: number = 10;
  ServerStatus: string = "offline";
  AllowNewServer: boolean = true;
  Msg: string = "hasn't clicked yet";
  InputMsg: string = '';
  Name: string = "No Name :("
  Temp: string = "";

  constructor() {
    setTimeout(() => {
      this.AllowNewServer = false;
    }, 1000);
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
}
