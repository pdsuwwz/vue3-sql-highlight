// 声明全局命名空间
// import * as _Xxxxx from 'xxxxxxx'

declare namespace GlobalType {
  // type Xxxxx = typeof _Xxxxx
  type Xxxxx = { abc: number; }
}

export = GlobalType
export as namespace GlobalType;
