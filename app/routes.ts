import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from '@react-router/dev/routes'

export default [
  // Home
  index('routes/home.tsx'),

  /**
    prefix
    Antepone un path a un grupo de rutas. No crea componente, no crea `<Outlet />`, no agrega ningún nivel al árbol. Devuelve un array,
   */
  ...prefix('/auth', [
    layout('layouts/auth-layout.tsx', [
      // Login
      route('login', 'routes/auth/login-page.tsx'),
      route('register', 'routes/auth/register-page.tsx'),
    ]),
  ]),
] satisfies RouteConfig
