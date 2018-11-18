// @flow
export type Foo = number | Foo[];

const num: Foo = 1;
const ary: Foo = [1, 2];
