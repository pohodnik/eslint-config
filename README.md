# @pohodnik/eslint-config
eslint configuration for pohodnik developers

## install
```bash
 yarn add -D @pohodnik/eslint-config
```

or 

```bash
 npm install --save-dev @pohodnik/eslint-config
```

## usage
in root of your project place file `.eslintrc` with content:

### basic
```json
{
    "extends": "@pohodnik"
}
```

### for react
```json
{
    "extends": ["@pohodnik", "@pohodnik/eslint-config/react"]
}
```

### for jest
```json
{
    "extends": ["@pohodnik", "@pohodnik/eslint-config/jest"]
}
```

### for all
```json
{
    "extends": [
        "@pohodnik",
        "@pohodnik/eslint-config/react",
        "@pohodnik/eslint-config/jest"
    ]
}
```
