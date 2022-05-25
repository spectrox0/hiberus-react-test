import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const saveCache = <T>(key: string, value: T) => {
  if (!value) return
  cookies.set(key, typeof value === 'string' ? value : JSON.stringify(value))
}

export const getCache = <T>(key: string): T | undefined => {
  const value = cookies.get(key)
  if (!value) return
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export const removeCache = (key: string) => {
  cookies.remove(key)
}
