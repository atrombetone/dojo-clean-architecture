// Esse helper existe porque o Jasmine não consegue pegar exceptions de funções async
// Obs: Jest é muito melhor, não precisa disso
export const asyncExceptionCaptureHelper = async (toBeBinded: any, functionToTest: Function, ...otherArgs: any[]): Promise<Error> => {
  let error: Promise<Error>;
  try {
    functionToTest = functionToTest.bind(toBeBinded);
    const result = await functionToTest(...otherArgs);
  } catch (e) {
    error = e;
  }
  return error;
}
