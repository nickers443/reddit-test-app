function task1(a: string, b: string): string {
  return a.concat(b)
}

////////////////////////////////

interface ITask2 {
  howIDoIt: string
  simeArray: Array<string | number>
  withData: Array<{
    howIDoIt: string
    simeArray: Array<string | number>
  }>
}

const MyHometask: ITask2 = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
}

////////////////////////////////

const arrTask3: IArrayTask3<number> = [1, 2, 3, 4, 5]

interface IArrayTask3<T> {
  [N: number]: T
  reduce(fn: (a: T, b: T) => number): number
}

arrTask3.reduce((a: number, b: number) => a + b)

////////////////////////////////

interface IHomeTask {
  data: string
  numbericData: number
  date: Date
  externalData: {
    basis: number
    value: string
  }
}

const homeTask4: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win',
  },
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
