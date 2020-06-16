import { Component, OnInit, Input } from '@angular/core';
import { BenefitModel } from '../../models/benefit.model';

@Component({
  selector: 'benefit-list',
  templateUrl: './benefit-list.component.html',
  styleUrls: ['./benefit-list.component.scss']
})
export class BenefitListComponent implements OnInit {

  @Input() benefits: Array<BenefitModel>; 

  ngOnInit() {

  }

}
