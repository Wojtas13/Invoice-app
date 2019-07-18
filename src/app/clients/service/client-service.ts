import { Injectable } from '@angular/core';
import { Client } from '../clientModel/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[];

  constructor() {
    this.clients = [{
      id: this.idGenerator(),
      firstName: 'John',
      lastName: 'Doe',
      taxNumber: '123456789'
    },
    {
      id: this.idGenerator(),
      firstName: 'Test',
      lastName: 'Test',
      taxNumber: '111999111'
    }
  ];
  }
  idGenerator() {
    return '_' + Math.random().toString(36).substr(2, 16);
  }
}
