---
id: known-issues
title: 'Known Issues'
---

## Known Issues

[Please look here first, to decide if it is a Typegoose or a Mongoose issue.](https://github.com/Automattic/mongoose/issues?utf8=✓&q=is%3Aissue+involves%3Ahasezoey)

### transpile-only

Never run `ts-node --transpile-only` or `tsc --transpile-only`, otherwise sometimes types are missing completly or are the wrong type.

### tsconfig-paths

TypeScript provides the option to alias paths (with `tsconfig-paths`), but is somehow incompatible with Typegoose, [more info in here](https://github.com/szokodiakos/typegoose/issues/392)

### Self-Containing classes

It is currently not possible to use a self-containing class (sub-documents)

```ts
class SomeClass {
  @prop()
  public ref: SomeClass; // ERROR "Maximum Class Stack Size Exceeded"
}
```

For References, this will work

```ts
class SomeClass {
  @prop({ ref: () => SomeClass }) // or hardcode the string
  public ref: Ref<SomeClass>;
}
```

### Babel

<span class="badge badge--warning">This Section may be outdated</span>

Using babel as a TypeScript compiler is known to cause problems (like incorrect types), we recommened you use `tsc` directly, or `ts-node` or `ts-jest` for jest-testing.

If Babel is still needed, then read [Babel TypeScript preset](https://babeljs.io/docs/en/babel-preset-typescript) and install the following plugins:  

- To reproduce the typescript decorators (`experimentalDecorators`), use [`@babel/plugin-proposal-decorators`](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)
- To reproduce the decorator metadata output (`emitDecoratorMetadata`), use [`babel-plugin-transform-typescript-metadata`](https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata)
- Plugin [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) is required to solve the error `Syntax error, Definitely assigned fields cannot be initialized here, but only in the constructor` which would come with using decorators (legacy / stage 1) nowdays

:::info
`emitDecoratorMetadata` is not strictly needed, see [Use Without `emitDecoratorMetadata`](./use-without-emitDecoratorMetadata.md)
:::

```js
module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ]
}
```

### prop on get & set

`@prop` cannot be applied to `get` & `set` (ES6), because virtuals do not accept options & [`schema.loadClass`](https://mongoosejs.com/docs/advanced_schemas.html#creating-from-es6-classes-using-loadclass) wouldn't load these.

### Webpack

Webpack's `minimize` cannot be used with typegoose, because typegoose relies heavily on reflection and property names.

In webpack, it can be disabled when adding the following to the webpack config:

```js
module.exports = {
  optimization: {
    minimize: false
  }
}
```

:::note
There are some workarounds for some minification problems, like the class name (which would be the model name) can be changed with [`customName`](../api/decorators/model-options#customname).
:::

### `@types/node` breaking change

Recently (early January 2022), there was a update in `@types/node`, which was actually a breaking change which causes typescript compile errors to show up (like for `GridFSBucketWriteStream` from mongodb).

~~The current only workaround is to pin the versions of `@types/node` used to ones before the update, which in the case of typegoose is `@types/node@12.20.39`.~~  
As of 02-02-2022 (d/m/y), mongoose has release `6.2.0` which upgraded `mongodb` to a version that has updated types, and typegoose `9.6.0` uses this mongoose version.
