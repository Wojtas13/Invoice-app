import { Component, OnInit, Input } from '@angular/core';
import { ClientsItemFactory, FormItem } from './model/client';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  
  private clientsItemFactory: ClientsItemFactory;
  private formItems: FormItem[];



  constructor() {
    this.clientsItemFactory = new ClientsItemFactory();
   }

  ngOnInit() {
  }

}
