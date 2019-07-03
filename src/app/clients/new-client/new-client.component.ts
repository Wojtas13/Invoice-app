import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/invoicing/model/item';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  @Input()
  private client: Client;

  constructor() {}
  ngOnInit() {
  }

  createClient(clientForm: NgForm): void {
    
  }
}
