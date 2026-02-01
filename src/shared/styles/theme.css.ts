import { createGlobalTheme } from '@vanilla-extract/css';

import { color } from './tokens/color';
import { font } from './tokens/font';
import { typography } from './tokens/typography';

const tokens = {
  color: color,
  font: font,
  ...typography,
};

const themeVars = createGlobalTheme(':root', tokens);

export { themeVars, tokens };
