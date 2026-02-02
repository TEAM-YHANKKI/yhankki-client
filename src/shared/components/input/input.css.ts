import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const input = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '3.9rem',
  padding: '0.6rem 2rem',
  borderRadius: '10rem',
  border: `1px solid ${themeVars.color.gray_30}`,
  backgroundColor: themeVars.color.gray_0,
  caretColor: themeVars.color.primary_2,
  ...themeVars.font.body_r_16,

  '::placeholder': {
    color: themeVars.color.gray_50,
    opacity: 1,
  },

  ':focus': {
    borderColor: themeVars.color.primary_2,
    outline: 'none',
  },
});
