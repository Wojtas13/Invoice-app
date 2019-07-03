import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clients-positions',
  templateUrl: './clients-positions.component.html',
  styleUrls: ['./clients-positions.component.scss']
})
export class ClientsPositionsComponent implements OnInit {
  faPlus = faPlus;

  @Input()
  private lp: number;

  constructor() { }

  ngOnInit() {
  }

}
