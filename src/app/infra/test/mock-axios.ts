import * as faker from 'faker'

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.random.number()
})
