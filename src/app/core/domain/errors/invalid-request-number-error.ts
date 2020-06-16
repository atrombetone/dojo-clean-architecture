export class InvalidRequestNumberError extends Error {
  constructor (requestNumber: number) {
    super(`Número de Requisição inválido: ${requestNumber}`);
    this.name = 'InvalidRequestNumber';
  }
}
