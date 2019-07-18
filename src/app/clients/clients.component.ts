import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Client } from './clientModel/client';
import { ClientService } from './service/client-service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  faPlus = faPlus;

  private clientService: ClientService;
  private clients: Client[];

  constructor(clientService: ClientService) {
    this.clientService = clientService;
    this.clients = this.clientService.clients;
  }
  ngOnInit() {}

  removeClient(client: Client) {
    this.clients.filter(c => c.id !== client.id);
    this.clientService.clients = this.clients;
  }
}
