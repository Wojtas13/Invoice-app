import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceSummary } from '../model/item';
import { InvoiceItem } from '../model/item';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  invoiceItem: InvoiceItem;

  displayCommas(price: InvoiceSummary): string {
    const parts = price.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}
