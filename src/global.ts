/**
 * @module global
 */

import {
  bgblack,
  bgblue,
  bgcyan,
  bggray,
  bggreen,
  bgmagenta,
  bgred,
  bgwhite,
  bgyellow,
  black,
  blue,
  bright,
  cyan,
  dim,
  gray,
  green,
  hidden,
  magenta,
  red,
  reset,
  reverse,
  underscore,
  white,
  yellow,
} from './index'

declare global {
  interface String {
    /**
     * Add {@link module.BGBLACK BGBLACK} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGBLACK, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bgblack)
     * ```
     * ```typescript
     * `${BGBLACK}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bgblack: string

    /**
     * Add {@link module.BGBLUE BGBLUE} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGBLUE, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bgblue)
     * ```
     * ```typescript
     * `${BGBLUE}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bgblue: string

    /**
     * Add {@link module.BGCYAN BGCYAN} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGCYAN, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bgcyan)
     * ```
     * ```typescript
     * `${BGCYAN}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bgcyan: string

    /**
     * Add {@link module.BGGRAY BGGRAY} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGGRAY, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bggray)
     * ```
     * ```typescript
     * `${BGGRAY}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bggray: string

    /**
     * Add {@link module.BGGREEN BGGREEN} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGGREEN, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bggreen)
     * ```
     * ```typescript
     * `${BGGREEN}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bggreen: string

    /**
     * Add {@link module.BGMAGENTA BGMAGENTA} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGMAGENTA, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bgmagenta)
     * ```
     * ```typescript
     * `${BGMAGENTA}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bgmagenta: string

    /**
     * Add {@link module.BGRED BGRED} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGRED, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bgred)
     * ```
     * ```typescript
     * `${BGRED}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bgred: string

    /**
     * Add {@link module.BGWHITE BGWHITE} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGWHITE, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bgwhite)
     * ```
     * ```typescript
     * `${BGWHITE}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bgwhite: string

    /**
     * Add {@link module.BGYELLOW BGYELLOW} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BGYELLOW, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bgyellow)
     * ```
     * ```typescript
     * `${BGYELLOW}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bgyellow: string

    /**
     * Add {@link module.BLACK BLACK} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BLACK, RESET } from '@xeraph-dev/colors'
     * console.log('test'.black)
     * ```
     * ```typescript
     * `${BLACK}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    black: string

    /**
     * Add {@link module.BLUE BLUE} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BLUE, RESET } from '@xeraph-dev/colors'
     * console.log('test'.blue)
     * ```
     * ```typescript
     * `${BLUE}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    blue: string

    /**
     * Add {@link module.BRIGHT BRIGHT} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BRIGHT, RESET } from '@xeraph-dev/colors'
     * console.log('test'.bright)
     * ```
     * ```typescript
     * `${BRIGHT}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    bright: string

    /**
     * Add {@link module.CYAN CYAN} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { CYAN, RESET } from '@xeraph-dev/colors'
     * console.log('test'.cyan)
     * ```
     * ```typescript
     * `${CYAN}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    cyan: string

    /**
     * Add {@link module.DIM DIM} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { DIM, RESET } from '@xeraph-dev/colors'
     * console.log('test'.dim)
     * ```
     * ```typescript
     * `${DIM}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    dim: string

    /**
     * Add {@link module.GRAY GRAY} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { GRAY, RESET } from '@xeraph-dev/colors'
     * console.log('test'.gray)
     * ```
     * ```typescript
     * `${GRAY}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    gray: string

    /**
     * Add {@link module.GREEN GREEN} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { GREEN, RESET } from '@xeraph-dev/colors'
     * console.log('test'.green)
     * ```
     * ```typescript
     * `${GREEN}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    green: string

    /**
     * Add {@link module.HIDDEN HIDDEN} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { HIDDEN, RESET } from '@xeraph-dev/colors'
     * console.log('test'.hidden)
     * ```
     * ```typescript
     * `${HIDDEN}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    hidden: string

    /**
     * Add {@link module.MAGENTA MAGENTA} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { MAGENTA, RESET } from '@xeraph-dev/colors'
     * console.log('test'.magenta)
     * ```
     * ```typescript
     * `${MAGENTA}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    magenta: string

    /**
     * Add {@link module.BLACK BLACK} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { BLACK, RESET } from '@xeraph-dev/colors'
     * console.log('test'.black)
     * ```
     * ```typescript
     * `${BLACK}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    red: string

    /**
     * Add a {@link module.RESET RESET} modifier to the end of the string.
     *
     * @readonly
     *
     * @example just add a reset
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { RESET } from '@xeraph-dev/colors'
     * console.log('test'.reset)
     * ```
     * ```typescript
     * `test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    reset: string

    /**
     * Add {@link module.REVERSE REVERSE} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { REVERSE, RESET } from '@xeraph-dev/colors'
     * console.log('test'.reverse)
     * ```
     * ```typescript
     * `${REVERSE}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    reverse: string

    /**
     * Add {@link module.UNDERSCORE UNDERSCORE} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { UNDERSCORE, RESET } from '@xeraph-dev/colors'
     * console.log('test'.underscore)
     * ```
     * ```typescript
     * `${UNDERSCORE}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    underscore: string

    /**
     * Add {@link module.WHITE WHITE} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { WHITE, RESET } from '@xeraph-dev/colors'
     * console.log('test'.white)
     * ```
     * ```typescript
     * `${WHITE}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    white: string

    /**
     * Add {@link module.YELLOW YELLOW} modified.
     *
     * @readonly
     *
     * @example
     * ```typescript
     * import '@xeraph-dev/colors/global'
     * import { YELLOW, RESET } from '@xeraph-dev/colors'
     * console.log('test'.yellow)
     * ```
     * ```typescript
     * `${YELLOW}test${RESET}`
     * ```
     *
     * @since 1.0.0
     */
    yellow: string
  }
}

Object.defineProperties(String.prototype, {
  reset: {
    get() {
      return reset(this)
    },
  },
  bright: {
    get() {
      return bright(this)
    },
  },
  dim: {
    get() {
      return dim(this)
    },
  },
  underscore: {
    get() {
      return underscore(this)
    },
  },
  reverse: {
    get() {
      return reverse(this)
    },
  },
  hidden: {
    get() {
      return hidden(this)
    },
  },
  black: {
    get() {
      return black(this)
    },
  },
  red: {
    get() {
      return red(this)
    },
  },
  green: {
    get() {
      return green(this)
    },
  },
  yellow: {
    get() {
      return yellow(this)
    },
  },
  blue: {
    get() {
      return blue(this)
    },
  },
  magenta: {
    get() {
      return magenta(this)
    },
  },
  cyan: {
    get() {
      return cyan(this)
    },
  },
  white: {
    get() {
      return white(this)
    },
  },
  gray: {
    get() {
      return gray(this)
    },
  },
  bgblack: {
    get() {
      return bgblack(this)
    },
  },
  bgred: {
    get() {
      return bgred(this)
    },
  },
  bggreen: {
    get() {
      return bggreen(this)
    },
  },
  bgyellow: {
    get() {
      return bgyellow(this)
    },
  },
  bgblue: {
    get() {
      return bgblue(this)
    },
  },
  bgmagenta: {
    get() {
      return bgmagenta(this)
    },
  },
  bgcyan: {
    get() {
      return bgcyan(this)
    },
  },
  bgwhite: {
    get() {
      return bgwhite(this)
    },
  },
  bggray: {
    get() {
      return bggray(this)
    },
  },
})
