import { BranchModel } from "./branch.model";
import { EmployeeModel } from "./employee.model";

export interface BenefitModel {
    branch: BranchModel,
    employee: EmployeeModel
    value: number
}