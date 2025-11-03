//  tsc 파일명 -> 파일명.ts -> 파일명.js로 컴파일
// tsx 파일명 -> js파일 생성하지 않고 한번에 타입스크립트 파일을 실행
const b: number = 1;
console.log(b)


// 매개변수에 타입은 타입스크립트가 추론이 불가 -> message 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
// export const hello = (message: string) => {
//   console.log(`hello ${message}`)
// }


