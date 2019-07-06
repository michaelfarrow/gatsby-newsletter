import moment from 'moment'

export const DATE_FORMAT = 'DD-MM-YYYY'
export const DATE_REGEX =
  '(?:0[1-9]|(?:[1-2][0-9])|3[0-1])-(?:0[1-9]|1[0-2])-\\d{4}'
export const DATE_FORMAT_FRIENDLY = 'Do MMMM YYYY'

export default function date(str) {
  if (!str) return null
  return moment(str, DATE_FORMAT)
}
