import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../model/client';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  clientModel = new Client('Mike', 'Johnson', '300-12-12-32');
  constructor() {}
  ngOnInit() {
  }

  createClient(clientForm: NgForm): void {
    console.log(clientForm);
  }
}
