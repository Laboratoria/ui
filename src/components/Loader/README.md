## Loader

### Import

```js
import { Loader } from 'laboratoria-ui';
```

### How to use

El componente `Loader` utiliza por defecto `size="medium"` y `color="primary"`.

```js
    <Loader />
```
Existen tres medidas estándar para el `Loader`:

- `"small" : 30px`
- `"medium" : 40px` (default)
- `"large" : 50px`

```js
    <Loader size="small" />
    <Loader size="medium" />
    <Loader size="large" />
```
También se puede enviar una medida personalizada utilizando el prop `size`:

```js
    <Loader size={80} />
```

El componente `Loader` tiene dos colores:

- `"primary" : #ffe521` (default)
- `"secondary" : #000000`

```js
    <Loader color="primary" />
    <Loader color="secondary" />
```

### Information

Aquí puedes revisar el código del componente: [Loader](https://github.com/Laboratoria/ui/blob/master/src/components/Loader/Loader.jsx)
