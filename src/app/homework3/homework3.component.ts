import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework3',
  templateUrl: './homework3.component.html',
  styleUrls: ['./homework3.component.css']
})
export class Homework3Component implements OnInit {
  showSecret: boolean = false;
  secret: string = 'Rawrrr';
  logs: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
  }
}
