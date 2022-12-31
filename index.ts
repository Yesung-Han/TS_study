//함수 디폴트 매개변수 타이핑
const a = (n: number = 3) => {

}

// 타입스크립트가 추론을 못할때 기본값 넣어주기
const add = <T extends unknown>(x: T, y: T) => ({x,y});
const add = <T = unknown>(x: T, y: T) => ({x,y});