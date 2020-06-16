import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from '@/core/domain/models/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() employees: Array<EmployeeModel>;

  ngOnInit() {

  }

}
