import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const colors = {
  red: '#DA6771',
  redLight: '#e5949b',
  green: '#4EB071',
  greenDim: '#275839',
  yellow: '#fff099',
  blue: '#399EF4',
  blueLight: '#9fcff9',
  pink: '#B168DF',
  teal: '#21C5C7',
  grey: '#4A5160'
}

const colorSet: IColorSet = {
  base: {
    background: '#12171f',
    foreground: '#efefef',
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow,
  },
  syntax: {
    identifier: colors.blueLight,
    string: colors.red,
    number: colors.redLight,
    keyword: colors.blue,
    boolean: colors.blue,
    function: colors.teal,
    functionCall: colors.yellow,
    storage: colors.blue,
    comment: colors.grey,
    class: colors.teal,
    classMember: colors.teal,
    type: colors.green,
    this: colors.blue,
    cssClass: colors.blue,
    cssId: colors.red,
    cssTag: colors.teal,
    markdownQuote: '#c0c0c0'
  },
  ui: {
    background: '#12171f',
    foreground: '#efefef',
    accent: '#0a0d12',
    cursor: '#ffffff',
    guide: '#263040',
    invisibles: '#263040',
    rangeHighlight: '#263040',
    // Bright red 50% opacity
    findMatchHighlight: '#cb606080',
    // Brighter red 50% opacity
    currentFindMatchHighlight: '#ff777780',
    selection: '#153958',
    // Blue 50% opacity
    selectionHighlight: '#2b74b380',
    // White with ~10% opacity
    wordHighlight: '#ffffff18',
    wordHighlightStrong: '#ffffff18',
    activeLinkForeground: colors.blue,

    ansiBlack: '#666666',
    ansiRed: colors.red,
    ansiGreen: colors.green,
    ansiYellow: colors.yellow,
    ansiBlue: colors.blue,
    ansiMagenta: colors.pink,
    ansiCyan: colors.teal,
    ansiWhite: '#efefef',
    ansiBrightBlack: '#666666',
    ansiBrightRed: colors.red,
    ansiBrightGreen: colors.green,
    ansiBrightYellow: colors.yellow,
    ansiBrightBlue: colors.blue,
    ansiBrightMagenta: colors.pink,
    ansiBrightCyan: colors.teal,
    ansiBrightWhite: '#efefef'
  }
};

generateTheme('Sapphire', colorSet, path.join(__dirname, 'theme.json'));
