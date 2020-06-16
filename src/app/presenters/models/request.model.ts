import { BenefitModel } from "./benefit.model";

export interface RequestModel {
    requestNumber: number,
    status: string,
    benefits: BenefitModel[]
}