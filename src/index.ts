/**
 * @module module
 */

export const RESET = '\x1B[0m'
export const BRIGHT = '\x1B[1m'
export const DIM = '\x1B[2m'
export const UNDERSCORE = '\x1B[4m'
export const REVERSE = '\x1B[7m'
export const HIDDEN = '\x1B[8m'
export const BLACK = '\x1B[30m'
export const RED = '\x1B[31m'
export const GREEN = '\x1B[32m'
export const YELLOW = '\x1B[33m'
export const BLUE = '\x1B[34m'
export const MAGENTA = '\x1B[35m'
export const CYAN = '\x1B[36m'
export const WHITE = '\x1B[37m'
export const GRAY = '\x1B[90m'
export const BGBLACK = '\x1B[40m'
export const BGRED = '\x1B[41m'
export const BGGREEN = '\x1B[42m'
export const BGYELLOW = '\x1B[43m'
export const BGBLUE = '\x1B[44m'
export const BGMAGENTA = '\x1B[45m'
export const BGCYAN = '\x1B[46m'
export const BGWHITE = '\x1B[47m'
export const BGGRAY = '\x1B[100m'
export const RESET_PATTERN = /\x1b\[0m/gi

/**
 * Add a {@link RESET} modifier to the end of the string.
 *
 * @param str - String to reset
 * @param [COLOR] - Color to restore after each {@link RESET} if it's passed
 *
 * @example just add a reset
 * ```typescript
 * import { reset, RESET } from '@xeraph-dev/colors'
 * console.log(reset('test'))
 * ```
 * ```typescript
 * `test${RESET}`
 * ```
 *
 * @example add a color and reset it
 * ```typescript
 * import { reset, BLUE, RESET } from '@xeraph-dev/colors'
 * console.log(reset('test', BLUE))
 * ```
 * ```typescript
 * `${BLUE}test${RESET}`
 * ```
 *
 * @example with COLOR restored
 * ```typescript
 * import { reset, BLUE, BGRED, RESET } from '@xeraph-dev/colors'
 * console.log(reset(`${reset('test', BLUE)} restored`, BGRED))
 * ```
 * ```typescript
 * `${BGRED}${BLUE}test${RESET}${BGRED} restored${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const reset = (str: string, COLOR?: string) => {
  const colors = str.match(RESET_PATTERN) ?? ([] as string[])
  const strs = str.split(RESET_PATTERN)
  const merged: (string | undefined)[] = []
  let prev = strs.shift()
  while (prev) {
    merged.push(prev)
    const curr = strs.shift()
    if (!curr) break
    merged.push(colors[0])
    merged.push(COLOR)
    colors.shift()
    prev = curr
  }
  merged.push(RESET)
  merged.unshift(COLOR)
  return merged.join('')
}

/**
 * Add {@link BRIGHT} modified.
 *
 * @example
 * ```typescript
 * import { bright, BRIGHT, RESET } from '@xeraph-dev/colors'
 * console.log(bright('test'))
 * ```
 * ```typescript
 * `${BRIGHT}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bright = (str: string) => reset(`${BRIGHT}${str}`)

/**
 * Add {@link DIM} modified.
 *
 * @example
 * ```typescript
 * import { dim, DIM, RESET } from '@xeraph-dev/colors'
 * console.log(dim('test'))
 * ```
 * ```typescript
 * `${DIM}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const dim = (str: string) => reset(str, DIM)

/**
 * Add {@link UNDERSCORE} modified.
 *
 * @example
 * ```typescript
 * import { underscore, UNDERSCORE, RESET } from '@xeraph-dev/colors'
 * console.log(underscore('test'))
 * ```
 * ```typescript
 * `${UNDERSCORE}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const underscore = (str: string) => reset(str, UNDERSCORE)

/**
 * Add {@link UNDERSCORE} modified.
 *
 * @example
 * ```typescript
 * import { underscore, UNDERSCORE, RESET } from '@xeraph-dev/colors'
 * console.log(underscore('test'))
 * ```
 * ```typescript
 * `${UNDERSCORE}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const reverse = (str: string) => reset(str, REVERSE)

/**
 * Add {@link REVERSE} modified.
 *
 * @example
 * ```typescript
 * import { reverse, REVERSE, RESET } from '@xeraph-dev/colors'
 * console.log(reverse('test'))
 * ```
 * ```typescript
 * `${REVERSE}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const hidden = (str: string) => reset(str, HIDDEN)

/**
 * Add {@link HIDDEN} modified.
 *
 * @example
 * ```typescript
 * import { hidden, HIDDEN, RESET } from '@xeraph-dev/colors'
 * console.log(hidden('test'))
 * ```
 * ```typescript
 * `${HIDDEN}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const black = (str: string) => reset(str, BLACK)

/**
 * Add {@link BLACK} modified.
 *
 * @example
 * ```typescript
 * import { black, BLACK, RESET } from '@xeraph-dev/colors'
 * console.log(black('test'))
 * ```
 * ```typescript
 * `${BLACK}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const red = (str: string) => reset(str, RED)

/**
 * Add {@link GREEN} modified.
 *
 * @example
 * ```typescript
 * import { green, GREEN, RESET } from '@xeraph-dev/colors'
 * console.log(green('test'))
 * ```
 * ```typescript
 * `${GREEN}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const green = (str: string) => reset(str, GREEN)

/**
 * Add {@link YELLOW} modified.
 *
 * @example
 * ```typescript
 * import { yellow, YELLOW, RESET } from '@xeraph-dev/colors'
 * console.log(yellow('test'))
 * ```
 * ```typescript
 * `${YELLOW}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const yellow = (str: string) => reset(str, YELLOW)

/**
 * Add {@link BLUE} modified.
 *
 * @example
 * ```typescript
 * import { blue, BLUE, RESET } from '@xeraph-dev/colors'
 * console.log(blue('test'))
 * ```
 * ```typescript
 * `${BLUE}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const blue = (str: string) => reset(str, BLUE)

/**
 * Add {@link MAGENTA} modified.
 *
 * @example
 * ```typescript
 * import { magenta, MAGENTA, RESET } from '@xeraph-dev/colors'
 * console.log(magenta('test'))
 * ```
 * ```typescript
 * `${MAGENTA}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const magenta = (str: string) => reset(str, MAGENTA)

/**
 * Add {@link CYAN} modified.
 *
 * @example
 * ```typescript
 * import { cyan, CYAN, RESET } from '@xeraph-dev/colors'
 * console.log(cyan('test'))
 * ```
 * ```typescript
 * `${CYAN}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const cyan = (str: string) => reset(str, CYAN)

/**
 * Add {@link WHITE} modified.
 *
 * @example
 * ```typescript
 * import { white, WHITE, RESET } from '@xeraph-dev/colors'
 * console.log(white('test'))
 * ```
 * ```typescript
 * `${WHITE}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const white = (str: string) => reset(str, WHITE)

/**
 * Add {@link GRAY} modified.
 *
 * @example
 * ```typescript
 * import { gray, GRAY, RESET } from '@xeraph-dev/colors'
 * console.log(gray('test'))
 * ```
 * ```typescript
 * `${GRAY}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const gray = (str: string) => reset(str, GRAY)

/**
 * Add {@link BGBLACK} modified.
 *
 * @example
 * ```typescript
 * import { bgblack, BGBLACK, RESET } from '@xeraph-dev/colors'
 * console.log(bgblack('test'))
 * ```
 * ```typescript
 * `${BGBLACK}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bgblack = (str: string) => reset(str, BGBLACK)

/**
 * Add {@link BGRED} modified.
 *
 * @example
 * ```typescript
 * import { bgred, BGRED, RESET } from '@xeraph-dev/colors'
 * console.log(bgred('test'))
 * ```
 * ```typescript
 * `${BGRED}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bgred = (str: string) => reset(str, BGRED)

/**
 * Add {@link BGGREEN} modified.
 *
 * @example
 * ```typescript
 * import { bggreen, BGGREEN, RESET } from '@xeraph-dev/colors'
 * console.log(bggreen('test'))
 * ```
 * ```typescript
 * `${BGGREEN}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bggreen = (str: string) => reset(str, BGGREEN)

/**
 * Add {@link BGYELLOW} modified.
 *
 * @example
 * ```typescript
 * import { bgyellow, BGYELLOW, RESET } from '@xeraph-dev/colors'
 * console.log(bgyellow('test'))
 * ```
 * ```typescript
 * `${BGYELLOW}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bgyellow = (str: string) => reset(str, BGYELLOW)

/**
 * Add {@link BGBLUE} modified.
 *
 * @example
 * ```typescript
 * import { bgblue, BGBLUE, RESET } from '@xeraph-dev/colors'
 * console.log(bgblue('test'))
 * ```
 * ```typescript
 * `${BGBLUE}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bgblue = (str: string) => reset(str, BGBLUE)

/**
 * Add {@link BGMAGENTA} modified.
 *
 * @example
 * ```typescript
 * import { bgmagenta, BGMAGENTA, RESET } from '@xeraph-dev/colors'
 * console.log(bgmagenta('test'))
 * ```
 * ```typescript
 * `${BGMAGENTA}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bgmagenta = (str: string) => reset(str, BGMAGENTA)

/**
 * Add {@link BGCYAN} modified.
 *
 * @example
 * ```typescript
 * import { bgcyan, BGCYAN, RESET } from '@xeraph-dev/colors'
 * console.log(bgcyan('test'))
 * ```
 * ```typescript
 * `${BGCYAN}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bgcyan = (str: string) => reset(str, BGCYAN)

/**
 * Add {@link BGWHITE} modified.
 *
 * @example
 * ```typescript
 * import { bgwhite, BGWHITE, RESET } from '@xeraph-dev/colors'
 * console.log(bgwhite('test'))
 * ```
 * ```typescript
 * `${BGWHITE}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bgwhite = (str: string) => reset(str, BGWHITE)

/**
 * Add {@link BGGRAY} modified.
 *
 * @example
 * ```typescript
 * import { bggray, BGGRAY, RESET } from '@xeraph-dev/colors'
 * console.log(bggray('test'))
 * ```
 * ```typescript
 * `${BGGRAY}test${RESET}`
 * ```
 *
 * @since 1.0.0
 */
export const bggray = (str: string) => reset(str, BGGRAY)
