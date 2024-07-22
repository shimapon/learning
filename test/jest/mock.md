3 兄弟  
⚠️ mock のリセットは必ず行う

## jest.fn()

- 何かを完全に mock したい時、その振る舞いを完全に制御したい場合に使用
- コールバック関数のテストや特定の関数がどのように呼び出されるべきかをテストするときに便利

```ts
const mockFunction = jest.fn();

// 返り値を設定できる
mockFunction.mockReturnValue("returnValue");
```

mockImplementation の場合、後から実装を変更することができる
👉

```ts
// ①
const mockFunction = jest.fn((num1, num2) => num1 + num2);

// ②
const mockFunction = jest.fn();
mockFunction.mockImplementation((num1, num2) => num1 + num2);
```

## jest.SpyOn()

オブジェクトの特定のメソッドに対してスパイを設定し、そのメソッドの呼び出しを追跡する。  
通常通りそのモジュールやメソッドは実行される。※ mockImplementation も使える

```ts
// テスト対象
export function greet(name: string) {
  console.log(`Hello, ${name}!`);
  console.log(`Hi!, ${name}!`);
  console.log(`Ola!, ${name}!`);
}
```

```ts
import { greet } from "./component/greet";

describe("greet", () => {
  // 複数のspyOnの実装を一気に戻したいとき
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("greet", () => {
    const spyOnGreet = jest.spyOn(console, "log");
    greet("Ken");
    expect(spyOnGreet).toHaveBeenCalledTimes(3);

    spyOnGreet.mockRestore();
  });
});
```

## jest.mock()

ライブラリや外部依存関係の mock 化

```ts
import moment from "moment";

// mock対象
export function getData() {
  const result = moment().format();
  return result;
}
```

👉

```ts
import { getData } from "./component/getData";

// このテストファイル内全てのテストで使用されるmomentがmockに置き換わる
jest.mock("moment");

describe("getData", () => {
  beforeEach(() => {
    (moment as any).mockImplementation(() => ({
      format: jest.fn().mockReturnValue("2023-06-11"),
    }));
  });

  it("mock moment", () => {
    const result = getData();
    expect(result).toBe("2023-06-11");
  });
});
```

### Advanced

コンポーネントそのものを mock する

```tsx
import { PeopleInfo } from "./PeopleInfo";

// テスト対象のコンポーネント
export const Parent = () => {
  const people = [
    { id: 1, name: "ken", age: 24 },
    { id: 2, name: "taro", age: 55 },
    { id: 3, name: "hoge", age: 4 },
  ];

  return (
    <div>
      <p>名前と年齢の一覧です</p>
      {people.map((elem) => (
        <PeopleInfo key={elem.id} name={elem.name} age={elem.age} />
      ))}
    </div>
  );
};
```

👉

```tsx
import { Parent } from "component/Parent";

jest.mock("component/PeopleInfo");

describe("Parent", () => {
  beforeEach(() => {
    jest.mock("component/PeopleInfo", () => {
      return {
        PeopleInfo: () => <div>mock PeopleInfo</div>,
      };
    });
  });

  it("mock PeopleInfo", () => {
    const wrapper = shallow(<Parent />);
    expect(wrapper.find("PeopleInfo").length).toBe(3);
  });
});
```

## 参考

https://qiita.com/only/items/466a09c8602466fe2333
