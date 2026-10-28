# Support Chat

Aplicación de chat de soporte construida con **React Router en Framework Mode**. El proyecto está en una etapa inicial: la base del stack ya está montada y las pantallas de autenticación existen como placeholders.

> Nombre del paquete: `support-chat-framwork` (sic). Pendiente decidir si se corrige a `support-chat-framework`.

## Estado actual

| URL         | Módulo                              | Estado                                        |
| ----------- | ----------------------------------- | --------------------------------------------- |
| `/`         | `app/routes/home.tsx`               | Placeholder con mensaje de bienvenida         |
| `/login`    | `app/routes/auth/login-page.tsx`    | Placeholder (`Login works!`)                  |
| `/register` | `app/routes/auth/register-page.tsx` | Placeholder (`Register works!`)               |
| —           | `app/layouts/auth-layout.tsx`       | Layout compartido para auth con `<Outlet />`  |

Ya implementado:

- Proyecto generado con `create-react-router` y renderizado del lado del servidor (SSR).
- Sistema de rutas declarativo en `app/routes.ts` usando `index`, `layout` y `route`.
- Layout de autenticación sin path propio: `/login` y `/register` comparten UI.
- `root.tsx` como documento base: `<html>`, `Meta`, `Links`, `Scripts`, `ScrollRestoration` y `ErrorBoundary` (incluye manejo de 404).
- Tailwind CSS 4 integrado vía plugin de Vite.
- shadcn/ui configurado (`components.json`) con estilo `base-sera`, color base `taupe`, iconos `lucide` y variables CSS en `app/app.css`.
- Componentes UI disponibles: `button`, `card`, `field`, `input`, `label`, `separator`.
- Tipografías Noto Sans Variable y Playfair Display Variable instaladas localmente.
- Alias de importación `~/*` → `app/*`.
- Prettier configurado (sin punto y coma, comillas simples, ancho 80).
- Dockerfile multi-stage listo para producción.

Todavía **no** hay: chat funcional, formularios de login/registro, `loader`/`action`, sesiones, base de datos, API ni tests.

## Stack

| Tecnología | Versión | Uso |
| --- | --- | --- |
| React Router | 8.5.1 | Framework Mode, SSR, rutas y datos |
| React | 19.2.8 | UI |
| TypeScript | 5.9.3 | Tipado estricto |
| Vite | 8.0.3 | Dev server y build |
| Tailwind CSS | 4.2.2 | Estilos (plugin de Vite) |
| shadcn/ui + Base UI | 4.23.0 | Componentes accesibles |
| Lucide React | 1.63.0 | Iconos |
| Prettier | — | Formato de código |
| Node.js | 24 (Alpine) | Runtime y contenedor |

## Rutas

`app/routes.ts`:

```ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  // Home
  index('routes/home.tsx'),

  // Auth
  layout('layouts/auth-layout.tsx', [
    // Login
    route('login', 'routes/auth/login-page.tsx'),
    route('register', 'routes/auth/register-page.tsx'),
  ]),
] satisfies RouteConfig
```

Árbol resultante:

```
root.tsx                   → documento base (siempre presente)
├── home.tsx               → /
└── auth-layout.tsx        → sin URL propia, envuelve a sus hijos
    ├── login-page.tsx     → /login
    └── register-page.tsx  → /register
```

La URL la define `routes.ts`, no la carpeta donde vive el archivo. Las pantallas de auth están en `app/routes/auth/` pero se sirven en `/login` y `/register`.

## Estructura del proyecto

```
app/
├── app.css                 # Tailwind, variables de tema, fuentes
├── root.tsx                # Documento HTML y ErrorBoundary global
├── routes.ts               # Configuración de rutas
├── components/
│   └── ui/                 # Componentes shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── field.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── separator.tsx
├── layouts/
│   └── auth-layout.tsx     # Layout compartido de autenticación
├── lib/
│   └── utils.ts            # Helper `cn` para clases
├── routes/
│   ├── home.tsx
│   └── auth/
│       ├── login-page.tsx
│       └── register-page.tsx
└── welcome/                # Assets y componente de bienvenida de la plantilla
components.json             # Configuración de shadcn/ui
react-router.config.ts      # ssr: true
vite.config.ts              # Plugins de Tailwind y React Router
```

## Requisitos

- Node.js 20+ (el Dockerfile usa Node 24)
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Aplicación disponible en `http://localhost:5173`.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción en `build/` |
| `npm start` | Sirve el build (`react-router-serve`) en `http://localhost:3000` |
| `npm run typecheck` | Genera tipos de rutas (`react-router typegen`) y ejecuta `tsc` |

## Configuración relevante

- **SSR activo** en `react-router.config.ts` (`ssr: true`).
- **Alias** `~/*` → `app/*` en `tsconfig.json`; también se resuelve en Vite con `resolve.tsconfigPaths: true`.
- **Tailwind 4** mediante `@tailwindcss/vite` y `@import "tailwindcss"` en `app/app.css`.
- **shadcn/ui** con `cssVariables: true`; los tokens de tema viven en `app/app.css` y los alias apuntan a `~/components`, `~/lib`, `~/hooks`.
- **Prettier**: sin `;`, comillas simples, `tabWidth: 2`, `printWidth: 80`, `trailingComma: "all"`.

## Despliegue con Docker

```bash
docker build -t support-chat .
docker run -p 3000:3000 support-chat
```

El contenedor usa un build multi-stage con Node 24 Alpine, instala solo dependencias de producción y ejecuta `npm start`. La salida del build queda en:

```
build/
├── client/   # Assets estáticos
└── server/   # Código del servidor
```

## Próximos pasos

- Maquetar los formularios de login y registro con los componentes de shadcn/ui.
- Añadir `action` a `/login` y `/register` para validación y mutaciones.
- Implementar sesiones y protección de rutas.
- Construir la UI del chat de soporte (lista de conversaciones, ventana de mensajes, envío).
- Definir persistencia (base de datos) y, si aplica, tiempo real con WebSockets/SSE.
- Añadir tests y un pipeline de CI.

## Notas

- El proyecto parte de la plantilla oficial de React Router; parte del contenido de `app/welcome/` sigue siendo de la plantilla y puede eliminarse cuando la home real esté lista.
- El nombre del paquete tiene un typo (`framwork`); si se renombra, actualizar `package.json` y `package-lock.json`.
