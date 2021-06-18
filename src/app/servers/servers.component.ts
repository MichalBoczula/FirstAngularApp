import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName: string = 'name';
  servers: Array<string> = ['test1', 'test2'];

  constructor() { }

  ngOnInit(): void {
  }

}
