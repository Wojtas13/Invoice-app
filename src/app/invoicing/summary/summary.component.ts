import { Component, OnInit, Input } from '@angular/core';
import { InvoiceSummary } from '../model/item';
import { InvoiceItem } from '../model/item';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input()
  summary: InvoiceSummary;
  constructor() { }

  ngOnInit() {
  }

  

}
