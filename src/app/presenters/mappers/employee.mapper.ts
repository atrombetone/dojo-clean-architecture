import { Mapper } from "../../core/base/mapper";
import { EmployeeModel as EmployeeEntity } from "@/core/domain/models/employee";
import { EmployeeModel } from "../models/employee.model";

export class EmployeeMapper implements Mapper<EmployeeModel, EmployeeEntity> {

    mapFrom(employeeModel: EmployeeModel): EmployeeEntity {
        return <EmployeeEntity>{
            cpf: employeeModel.cpf,
            name: employeeModel.name
        };
    }

    mapTo(employeeEntity: EmployeeEntity): EmployeeModel {
        return <EmployeeModel>{
            cpf: employeeEntity.cpf,
            name: employeeEntity.name
        };
    }

}
