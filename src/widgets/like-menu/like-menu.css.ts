import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '2rem 2.4rem',
  backgroundColor: themeVars.color.gray_5,
  borderRadius: '20px',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  ...themeVars.font.body_r_16,
});

export const icon = style({
  width: '2rem',
  height: '1.9rem',
  marginTop: '0.4rem',
});
