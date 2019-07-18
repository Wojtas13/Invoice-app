import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Client } from '../../invoicing/model/item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '[app-clients-positions]',
  templateUrl: './clients-positions.component.html',
  styleUrls: ['./clients-positions.component.scss']
})
export class ClientsPositionsComponent implements OnInit {
  faTrash = faTrash;

  constructor() {}
  @Input()
  private client: Client[];
  @Input()
  private lp: number;
  @Input()
  private itemRemoved: EventEmitter<Client[]> = new EventEmitter<Client[]>();

  ngOnInit() {

  }

  removeClient(): void {
    this.itemRemoved.next(this.client);
  }
}
