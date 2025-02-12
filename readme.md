## bytes

### Setup

#### Node.js

```bash
npm i @boywithkeyboard/bytes
```

```ts
import { bytes } from '@boywithkeyboard/bytes'
```

#### Deno

```ts
import { bytes } from 'https://esm.sh/@boywithkeyboard/bytes'
```

### Usage

```ts
/*
 * Convert bytes to a readable size.
 */

bytes(100) // '100 B'
bytes(25000) // '25 KB'
bytes(50000000) // '50 MB'
bytes(1000000000000) // '1 TB'

bytes(100, { fmt: 'long' }) // '100 Bytes'
bytes(25000, { fmt: 'long' }) // '25 Kilobytes'
bytes(50000000, { fmt: 'long' }) // '50 Megabytes'
bytes(1000000000000, { fmt: 'long' }) // '1 Terabyte'

// Binary

bytes(25 * 1024, { unit: 'binary' }) // '25 KiB'
bytes(25 * 1024, { fmt: 'long', unit: 'binary' }) // '25 Kibibytes'

/*
 * Convert a readable size to bytes.
 */

bytes('100 B') // 100
bytes('25 KB') // 25*1000
bytes('50 MB') // 50*1000*1000
bytes('1 TB') // 1000*1000*1000*1000

bytes('100 Bytes') // 100
bytes('25 Kilobytes') // 25*1000*1000
bytes('50 Megabytes') // 50*1000*1000
bytes('1 Terabyte') // 1000*1000*1000*1000

// Binary

bytes('25 Kibibytes') // 25*1024
bytes('50 Mebibytes') // 50*1024*1024
bytes('1 Tebibyte') // 1*1024*1024*1024
```
