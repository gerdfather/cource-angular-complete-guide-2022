import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No servers was created.';
  serverName = 'Testserver';
  servers = ['Testserver', 'Testserver 2'];
  username = '';
  showDetails = false;
  toggleLog = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
    this.serverCreated = true;
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onDetailsToggle() {
    this.showDetails = !this.showDetails;
    let onOrOff = 'Details toggled ' + (this.showDetails ? 'ON' : 'OFF');
    let now = new Date();
    let date = now.toLocaleDateString('de-DE');
    let hours = (now.getSeconds() < 10 ? '0' : '') + now.getHours();
    let minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    let seconds =  (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
    let onOrOffWhen = onOrOff + ': ' + date + ' ' + hours + ':' + minutes + ':' + seconds;
    this.toggleLog.push(
      onOrOffWhen
    );
    console.log(onOrOffWhen);
  }
  resetUsername() {
    this.username = '';
  }
  isUsernameDefined() {
    return this.username !== ''
  }
}
