export type Unit =
  | 'B'
  | 'Byte'
  | 'Bytes'
  | 'KB'
  | 'Kilobyte'
  | 'Kilobytes'
  | 'MB'
  | 'Megabyte'
  | 'Megabytes'
  | 'GB'
  | 'Gigabyte'
  | 'Gigabytes'
  | 'TB'
  | 'Terabyte'
  | 'Terabytes'
  | 'PB'
  | 'Petabyte'
  | 'Petabytes'
  | 'EB'
  | 'Exabyte'
  | 'Exabytes'
  | 'ZB'
  | 'Zettabyte'
  | 'Zettabytes'
  | 'YB'
  | 'Yottabyte'
  | 'Yottabytes'
  | 'KiB'
  | 'Kibibyte'
  | 'Kibibytes'
  | 'MiB'
  | 'Mebibyte'
  | 'Mebibytes'
  | 'GiB'
  | 'Gibibyte'
  | 'Gibibytes'
  | 'TiB'
  | 'Tebibyte'
  | 'Tebibytes'
  | 'PiB'
  | 'Pebibyte'
  | 'Pebibytes'
  | 'EiB'
  | 'Exbibyte'
  | 'Exbibytes'
  | 'ZiB'
  | 'Zebibyte'
  | 'Zebibytes'
  | 'YiB'
  | 'Yobibyte'
  | 'Yobibytes'
/**
 * Convert bytes to readable size and vice versa.
 */
declare function byte(value: number, options?: {
  long?: boolean
  format?: 'string'
  prefix?: 'metric' | 'binary'
}): `${number} ${Unit}`
declare function byte(value: number, options?: {
  long?: boolean
  format?: 'array'
  prefix?: 'metric' | 'binary'
}): [number, Unit]
declare function byte(value: `${number} ${Unit}`): number
export default byte
