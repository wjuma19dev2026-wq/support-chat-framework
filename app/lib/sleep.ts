/**
 * Espera el tiempo indicado en milisegundos antes de continuar.
 * Útil para simular latencia en loaders/actions durante el desarrollo.
 */
export const sleep = (ms: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}
