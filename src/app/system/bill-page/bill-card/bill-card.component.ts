import { Component, OnInit, Input } from '@angular/core';

import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  euro: number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    const rubRate = 1 / rates['RUB'];
    this.dollar = rates['USD'] * rubRate * this.bill.value;
    this.euro = rates['EUR'] * rubRate * this.bill.value;
    console.log(this.currency);
  }

}
