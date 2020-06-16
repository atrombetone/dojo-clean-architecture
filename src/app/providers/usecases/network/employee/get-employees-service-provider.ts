import { HttpGetClient, HttpStatusCode, HttpResponse, HttpGetParams } from "@/providers/protocols/http";
import { UnexpectedError } from '@/core/domain/errors';
import { EmployeeModel } from '@/core/domain/models/employee';
import { IGetEmployeesService } from '@/core/usecases/employee';

type ActionParam = {
  httpResponse?: HttpResponse,
}


const statusCodeResponseActionMap = new Map<number, Function>()
  .set(HttpStatusCode.ok, ({ httpResponse }: ActionParam) => httpResponse.body)
  .set(HttpStatusCode.noContent, ({ }: ActionParam) => [])
  .set(HttpStatusCode.forbidden, ({ }: ActionParam) => { throw new UnexpectedError(); });

export class GetEmployeesServiceProvider implements IGetEmployeesService {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<EmployeeModel[]>,
  ) {}

  async getEmployees(): Promise<EmployeeModel[]> {
    const httpGetParams: HttpGetParams = {
      url: this.url,
    }
    const httpResponse = await this.httpGetClient.get(httpGetParams);

    const functionToBeExecuted = this.getFunctionBasedOnResponseStatusCode(httpResponse.statusCode);

    if (!functionToBeExecuted) {
      throw new UnexpectedError();
    }

    return functionToBeExecuted({ httpResponse });
  }

  private getFunctionBasedOnResponseStatusCode(statusCode: number) {
    return statusCodeResponseActionMap.get(statusCode)
  }

}
