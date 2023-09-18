import './global'

import { describe, expect, it } from 'bun:test'

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
} from '.'

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

describe('@xeraph-dev/colors', () => {
  describe('reset', () => {
    it('module', () => expect(reset('test')).toBe(`test${RESET}`))
    it('global', () => expect('test'.reset).toBe(`test${RESET}`))
  })
  describe('bright', () => {
    it('module', () => expect(bright('test')).toBe(`${BRIGHT}test${RESET}`))
    it('global', () => expect('test'.bright).toBe(`${BRIGHT}test${RESET}`))
  })
  describe('dim', () => {
    it('module', () => expect(dim('test')).toBe(`${DIM}test${RESET}`))
    it('global', () => expect('test'.dim).toBe(`${DIM}test${RESET}`))
  })
  describe('underscore', () => {
    it('module', () => expect(underscore('test')).toBe(`${UNDERSCORE}test${RESET}`))
    it('global', () => expect('test'.underscore).toBe(`${UNDERSCORE}test${RESET}`))
  })
  describe('reverse', () => {
    it('module', () => expect(reverse('test')).toBe(`${REVERSE}test${RESET}`))
    it('global', () => expect('test'.reverse).toBe(`${REVERSE}test${RESET}`))
  })
  describe('hidden', () => {
    it('module', () => expect(hidden('test')).toBe(`${HIDDEN}test${RESET}`))
    it('global', () => expect('test'.hidden).toBe(`${HIDDEN}test${RESET}`))
  })
  describe('black', () => {
    it('module', () => expect(black('test')).toBe(`${BLACK}test${RESET}`))
    it('global', () => expect('test'.black).toBe(`${BLACK}test${RESET}`))
  })
  describe('red', () => {
    it('module', () => expect(red('test')).toBe(`${RED}test${RESET}`))
    it('global', () => expect('test'.red).toBe(`${RED}test${RESET}`))
  })
  describe('green', () => {
    it('module', () => expect(green('test')).toBe(`${GREEN}test${RESET}`))
    it('global', () => expect('test'.green).toBe(`${GREEN}test${RESET}`))
  })
  describe('yellow', () => {
    it('module', () => expect(yellow('test')).toBe(`${YELLOW}test${RESET}`))
    it('global', () => expect('test'.yellow).toBe(`${YELLOW}test${RESET}`))
  })
  describe('blue', () => {
    it('module', () => expect(blue('test')).toBe(`${BLUE}test${RESET}`))
    it('global', () => expect('test'.blue).toBe(`${BLUE}test${RESET}`))
  })
  describe('magenta', () => {
    it('module', () => expect(magenta('test')).toBe(`${MAGENTA}test${RESET}`))
    it('global', () => expect('test'.magenta).toBe(`${MAGENTA}test${RESET}`))
  })
  describe('cyan', () => {
    it('module', () => expect(cyan('test')).toBe(`${CYAN}test${RESET}`))
    it('global', () => expect('test'.cyan).toBe(`${CYAN}test${RESET}`))
  })
  describe('white', () => {
    it('module', () => expect(white('test')).toBe(`${WHITE}test${RESET}`))
    it('global', () => expect('test'.white).toBe(`${WHITE}test${RESET}`))
  })
  describe('gray', () => {
    it('module', () => expect(gray('test')).toBe(`${GRAY}test${RESET}`))
    it('global', () => expect('test'.gray).toBe(`${GRAY}test${RESET}`))
  })
  describe('bgblack', () => {
    it('module', () => expect(bgblack('test')).toBe(`${BGBLACK}test${RESET}`))
    it('global', () => expect('test'.bgblack).toBe(`${BGBLACK}test${RESET}`))
  })
  describe('bgred', () => {
    it('module', () => expect(bgred('test')).toBe(`${BGRED}test${RESET}`))
    it('global', () => expect('test'.bgred).toBe(`${BGRED}test${RESET}`))
  })
  describe('bggreen', () => {
    it('module', () => expect(bggreen('test')).toBe(`${BGGREEN}test${RESET}`))
    it('global', () => expect('test'.bggreen).toBe(`${BGGREEN}test${RESET}`))
  })
  describe('bgyellow', () => {
    it('module', () => expect(bgyellow('test')).toBe(`${BGYELLOW}test${RESET}`))
    it('global', () => expect('test'.bgyellow).toBe(`${BGYELLOW}test${RESET}`))
  })
  describe('bgblue', () => {
    it('module', () => expect(bgblue('test')).toBe(`${BGBLUE}test${RESET}`))
    it('global', () => expect('test'.bgblue).toBe(`${BGBLUE}test${RESET}`))
  })
  describe('bgmagenta', () => {
    it('module', () => expect(bgmagenta('test')).toBe(`${BGMAGENTA}test${RESET}`))
    it('global', () => expect('test'.bgmagenta).toBe(`${BGMAGENTA}test${RESET}`))
  })
  describe('bgcyan', () => {
    it('module', () => expect(bgcyan('test')).toBe(`${BGCYAN}test${RESET}`))
    it('global', () => expect('test'.bgcyan).toBe(`${BGCYAN}test${RESET}`))
  })
  describe('bgwhite', () => {
    it('module', () => expect(bgwhite('test')).toBe(`${BGWHITE}test${RESET}`))
    it('global', () => expect('test'.bgwhite).toBe(`${BGWHITE}test${RESET}`))
  })
  describe('bggray', () => {
    it('module', () => expect(bggray('test')).toBe(`${BGGRAY}test${RESET}`))
    it('global', () => expect('test'.bggray).toBe(`${BGGRAY}test${RESET}`))
  })
  describe('edge cases', () => {
    it('avoid reset resetted string', () => {
      expect('test'.reset.reset).toBe(`test${RESET}`)
    })
    it('reset over resetted color', () => {
      expect(reset('test'.red)).toBe(`${RED}test${RESET}`)
    })
    it('restore current color', () =>
      expect(`test ${'restored'.red} correctly`.dim).toBe(
        `${DIM}test ${RED}restored${RESET}${DIM} correctly${RESET}`,
      ))
    it('multiple restore current color', () =>
      expect(`${'complex'.blue} test ${'restored'.red} correctly`.bggray).toBe(
        `${BGGRAY}${BLUE}complex${RESET}${BGGRAY} test ${RED}restored${RESET}${BGGRAY} correctly${RESET}`,
      ))
    it('multiple foreground and background color', () => {
      expect('background'.red).toBe(`${RED}background${RESET}`)
      expect(`and ${'background'.red}`.bgmagenta).toBe(`${BGMAGENTA}and ${RED}background${RESET}`)
      expect(`foreground ${`and ${'background'.red}`.bgmagenta} color`.bggray).toBe(
        `${BGGRAY}foreground ${BGMAGENTA}and ${RED}background${RESET}${BGGRAY} color${RESET}`,
      )
      expect(
        `${'complex'.blue} foreground ${`and ${'background'.red}`.bgmagenta} color`.bggray,
      ).toBe(
        `${BGGRAY}${BLUE}complex${RESET}${BGGRAY} foreground ${BGMAGENTA}and ${RED}background${RESET}${BGGRAY} color${RESET}`,
      )
    })
  })
})
