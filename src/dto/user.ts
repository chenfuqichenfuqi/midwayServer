import { Rule, RuleType } from '@midwayjs/validate'
export class UserDTO {
  @Rule(RuleType.number().required())
  id: number

  @Rule(RuleType.string().required().note('姓').note('dd'))
  firstName: string

  @Rule(RuleType.string().max(10))
  lastName: string

  @Rule(RuleType.number().max(60))
  age: number
}
