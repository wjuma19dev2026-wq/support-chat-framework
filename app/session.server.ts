import { createCookieSessionStorage } from 'react-router'

type AppSessionData = {
  userId: string
  token: string
  name: string
}

type SessionFlashData = {
  error: string
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<AppSessionData, SessionFlashData>({
    cookie: {
      name: '__session',
      secrets: [process.env.SESSION_SECRET ?? 'dev-only-secret'],
      sameSite: 'lax',
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 1, // 1 día
    },
  })

export { getSession, commitSession, destroySession }
