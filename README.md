# Way of Working

En la siguiente documentacion se detalla un flujo de trabajo sugerido para desarrollar la libreria de componentes
_oversoft-ui_.

# Desarrollo

Tener en cuenta antes de empezar un desarrollo en fijarse si ya existe ese componente. Para esto, pueden entrar a Chromatic
y fijarse si esta el componente conectado, o entrar en el storybook, o entrar en el trello y fijarse si hay una tarjeta
de ese componente.

## Trello

La herramienta de Trello la utilizamos para tener un seguimiento de los componentes que desarrollamos. Tambien se usa
para estar sincronizados entre devs en cuanto a los componentes, para no pisarnos y en caso de que haya dos mesas que
usan un mismo componente se ubica en la columna _(In Progress)_ la etiqueta _(High Priority)_ en la tarjeta del componente y asi el dev que lo hace lo desarrolla lo mas rapido
posible. Despues, cada columna es autoexplicativa.

**TODOS LOS COMPONENTES TIENEN QUE TENER SU TARJETA EN TRELLO.** Esto es para tener buen seguimiento de lo desarrollado.

## Estructura de carpetas/archivos

Cada componente va a estar contenido dentro de `src/`, lo vamos a desarrollar en la ruta
`/src/CarpetaPadre/CapetaDelComponente/` y el arbol de archivos que vamos a generar en esa carpeta sera el
siguiente:

```
- index.tsx
- LeftArrow.tsx
- LeftArrow.stories.tsx
- LeftArrow.styles.ts
- LeftArrow.test.tsx
```

Como resultado tendremos la ruta del componente de la siguente manera `src/Assets/LeftArrow`.

## Gitflow

- Se crea una rama por componente con el nombre/ruta del componente.
- Cuando se finaliza el desarrollo chequear cual es la ultima version publicada de la libreria e incrementar la
  version correspondiente con `npm version (patch || minor || major)`.
- Se hace un merge request a `develop` y si es necesario se asigna un revisor de codigo.

## Conexion de componentes con Chromatic

1. Para publicar la libreria en chromatic solo se debe corren el comando `npm run chomatic`.
2. Esperar a que finalice, al finalizar debe mostrar el link del proyecto actualizado.

## Prueba local de los componentes

1. Hacer un `npm run build` de la libería para compilar los componentes.
2. Hacer un `npm run test` para correr todas las pruebas.
3. Hacer un `npm run dist` para generar los archivos .js y .d dentro la carpeta dist.
4. Es necesario agregar en el archivo src/index.ts la importación y exportacion de todos los componentes.
5. Dentro de tu proyecto de React, instalar el paquete recién generado con el comando `npm i storybook-oversoft`.

## Versionado Semántico

La propuesta con respecto al versionado es usar como referencia el estandar de versionado semantico
([SemVer](https://semver.org/lang/es/)) y/o adaptarlo en la medida que veamos que es necesario. Tendriamos una version
con 3 campos: **MAJOR.MINOR.PATCH**

- Por cada nuevo fix/patch a cualquiera de los componentes de la version actual, que sea retrocompatible, se va a
  incrementar en 1 la **PATCH** version (`npm version patch`).
- Si se introducen nuevos componentes/funcionalidades tambien compatibles con la version actual, se incrementa la
  **MINOR** version en 1 y se reseta el PATCH a 0 (este reset ya lo hace solo _npm_ si usan el comando
  `npm version minor` para incrementar la version).
- Para la **primer version estable** de la libreria, se incrementara la **MAJOR** version de 0.x.x a 1.0.0 y se
  resetean minor y patch a 0 (`npm version major`). Queda a definir que criterios vamos a usar para publicar esta
  version.
- Por cada nuevo cambio que **no sea compatible** con la version anterior de la libreria se incrementa la **MAJOR**
  version en 1.

## Funcion del pipeline

El pipeline es el encargado de ejecutar los tests, publicar la nueva version de la libreria y ademas de deployar el
Storybook con el nuevo componente. Todo esto se hace automaticamente cuando se _pushea_ a la rama `develop` (Por nuestro
gitflow, se hace una nueva rama y despues se hace un merge request. Una vez mergeada la nueva rama en develop se ejecuta
el pipeline automaticamente)

# Instalación y utilización de la libreria

## Instalación

1. Tener visibilidad de https://devops.oversoft.com.ar/gitlab en la intranet (vpn).
2. Crear archivo `.npmrc` o `.yarnrc` _(dependiendo del manejador de paquetes que se use)_ con la sigiente
   linea/registry: `@oversoft:registry=https://devops.oversoft.com.ar/gitlab/api/v4/packages/npm/`
3. Ejecutar comando `npm install @oversoft/oversoft-ui` o con yarn `yarn add @oversoft/oversoft-ui`

## Utilización

Se importa el componente con la base de `@oversoft/oversoft-ui/dist` y despues el nombre completo del componente. Las
carpetas tienen un index, por lo que no hace falta llamar al componente .tsx en especifico. Por ejemplo, el import del
componente `Assets/LeftArrow` sería `@oversoft/oversoft-ui/dist/Assets/LeftArrow`

Ej práctico:

```JSX
import React from 'react';
import { LeftArrow } from '@oversoft/oversoft-ui';

export default function Header(){
    ...
    return <LeftArrow size={45}/>
}
```

# Links utiles:

- **_oversoft Ui Storybook:_** https://www.chromatic.com/library?appId=64a6dbac61ad3a417c9476a7
- **_oversoft Ui Storybook Invite:_** https://www.chromatic.com/start?inviteToken=chpi_6fcbfe84fb9a4124a1eb89638fc1ebf6&appId=64a6dbac61ad3a417c9476a7
- **_oversoft Ui Repo/GitHub:_** https://github.com/e-burgos/storybook-oversoft
- **_oversoft Ui Trello:_** https://trello.com/b/3Hb6LxJ7/oversoft-ui-trello
- **_oversoft Ui Trello Invite:_** https://trello.com/invite/b/3Hb6LxJ7/ATTI7280debd5dd8ae26c2d392f864c75e3297B25540/oversoft-ui-trello

# Library Docs:

- **_DataTable Docs:_** https://react-data-table-component.netlify.app/?path=/story/getting-started-intro--page

_Readme version: 1.0_
