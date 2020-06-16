import { BenefitModel } from "./benefit.model";
import { RequestState } from "@/core/domain/enum";

export interface RequestModel {
    requestNumber: number,
    status: RequestState,
    benefits: BenefitModel[]
}