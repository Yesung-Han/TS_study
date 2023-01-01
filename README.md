# TS_study - TS 올인원 정리

### TS를 할때 알아야 할 단 한가지: 
- 타입스크립트는 결국 자바스크립트로 변환된다.(트랜스 파일 : 고수준 언어 -> 고수준 언어)

### TS는 언어이자 트랜스파일러다.
- tsconfig.json에 변환 옵션 기입
- tsconfig.json이 가장 중요한 파일
- package.json의 types 속성에 적힌 파일이 메인 타이핑 파일이다.

### TS 관련 명령어
```
npm i typescript  ⇒ 타입스크립트 설치
tsc —noEmit       ⇒ 타입체크 실행 (VSCODE는 자동으로 이거 실행해서 타입검사 해줌)
npx tsc           ⇒ 타입스크립트 컴파일러 실행, 에러가 있어도 js로 바꿔주긴 함.
npx tsc —init     ⇒ tsconfig.json이 생성 됨
```
> 타입스크립트 문법만 빠르게 배우고 싶다 ⇒ 플레이그라운드에서 테스트 해볼 것  
[TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/play?#code/Q)

### tsconfig.json 에서 기본으로 설정해주는 것들
``` json
{
  "allowJs" : true, // true 로켜두면 JS 랑 동시에 사용가능 ⇒ JS → TS 로 바꿀때 사용
  "strict": true, // 이거는 항상 true로 켜두기 ⇒ 타입스크립트 사용하는 의미 지킴
  "target": "es2016", // 환경에 따라 어떤 JS로 바꿀지 정하기
  "module": "commonjs", // "ES2022"와 "ES2015" 둘 차이 없음, 노드 모듈 사용하고 싶으면 "commonjs"
  "forceConsistentCasingInFileNames" : true, // 대소문자 꼭 지켜서만 import 하도록 강제
  "skipLibCheck" : true, // 설치한 패키지들에서 사용되는 .d.ts 파일들까지는 타입 채킹 안하겠다.
  "esModuleInterop" : true, // 이거는 나중에 배울 것
}
```
> 타입스크립트는 자바스크립트의 변수, 매개변수, 리턴 값에 타입을 붙여놓은 것이다.  
타입자리(: 부터 = 사이: 부터 = 사이)를 지워도 JS가 되야 한다.

### 변수에 타입 지정하기
``` typescript
const a: string = ‘123’;
const b: number = ‘123’; // 이렇게 소문자로 작성
const c: undefined = undefined;
const d: null = null;
const e: boolean = true;
const f: any = true; // any를 쓰면 타입스크립트를 쓰는 의미가 사라진다~~~
```

### 함수에 타입지정하기
``` typescript
function add (x: number, y: number): number { return x + y; }
```

### 인터페이스로도 타입 지정이 가능한데 이렇게는 거의 안씀
``` typescript
interface Add {
  (x: number, y: number): number;
}
const add: Add = (x, y) ⇒ x + y;
```
### 배열
``` typescript
const arr: string[] = [’123’, ‘456’];
```
### 제너릭을 사용한 배열 정의
``` typescript
const arr2: Array<number> = [123, 456];
```
### 튜플 - 고정된 길이의 배열
``` typescript
const arr3 = [number, number, string] = [1,1,’123’];
```
### 타입을 고정된 원시값으로 지정 - 상수 같은것 정의 할때
``` typescript
const f: 5 = 5;
```
### 객체
``` typescript
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
```