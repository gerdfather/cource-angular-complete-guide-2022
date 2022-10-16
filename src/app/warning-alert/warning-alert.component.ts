import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p><span>WARNING</span>The Warning Alert Component is here!</p>
  `,
  styles: [`
    span { 
      color: azure;
      background: crimson;
      border: 1px solid darkblue;
      padding: 6px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
