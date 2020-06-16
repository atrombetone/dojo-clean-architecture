import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BenefitListComponent } from './benefit-list.component';
import { BenefitModel } from '../../models/benefit.model';
import { DocumentType } from '../../../core/domain/enum/document-type.enum';
import { BranchModel } from '../../models/branch.model';
import { EmployeeModel } from '../../models/employee.model';

describe('Componente de listagem de colaboradores', () => {
  let component: BenefitListComponent;
  let fixture: ComponentFixture<BenefitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criando componente de listagem de colaboradores', () => {

    let benefitMock = <BenefitModel[]>[{
      branch: <BranchModel>{
        documentNumber: "57525289000180",
        documentType: DocumentType.Cnpj
      },
      employee: <EmployeeModel>{
        cpf: "23103404050",
        name: "José da Silva"
      }
    },
    {
      branch: <BranchModel>{
        documentNumber: "57525289000180",
        documentType: DocumentType.Cnpj
      },
      employee: <EmployeeModel>{
        cpf: "98192508030",
        name: "Maria das Dores"
      }
    }];

    component.benefits = benefitMock;
    expect(component.benefits).toBe(benefitMock);
    });
    
});
