export const capitalLetter = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const PRESSURE_UNIT = 0.750062
export const getPressureMn = (hpa) => {
  return Math.round(hpa * PRESSURE_UNIT)
}

export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik'})
}