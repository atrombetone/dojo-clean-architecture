import { Component, OnInit, Output, Input } from '@angular/core';
import { GetEmployeesUseCaseFactory } from '@/main/factories/employee-factory';
import { EmployeeModel } from '@/core/domain/models/employee';
import { GetEmployeesUseCase } from '@/core/usecases/employee';
import { RequestModel } from '@/core/domain/models/request';
import { GetRequestDetailUseCase } from '@/core/usecases/request';
import { RequestFactory } from '@/main/factories/request-detail-factory';
import { makeEmptyRequestDetail } from '@/providers/usecases/network/request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-screen',
  templateUrl: './request-screen.component.html',
  styleUrls: ['./request-screen.component.scss'],
})
export class RequestScreenComponent implements OnInit {

  private getRequestDetail: GetRequestDetailUseCase;
  @Input()
  request: RequestModel;

  constructor(private requestFactory: RequestFactory, private route: ActivatedRoute) {
    this.getRequestDetail = requestFactory.getRequestDetailUseCase();
  }

  ngOnInit() {
    this.request = makeEmptyRequestDetail();
  }

  ngAfterViewInit() {
    this.getRequestDetailById();
  }

  getRequestDetailById() {
    // Vou trocar p/ observable para deixar reativo
    this.route.paramMap.subscribe(params => {      
      if (params.has('requestNumber')) {
        console.log(params.get('requestNumber'));
        this.getRequestDetail.getRequestDetail(Number.parseInt(params.get('requestNumber')))
        .then(requestDetail => this.request = requestDetail);
      }
      
    });    
  }
}
