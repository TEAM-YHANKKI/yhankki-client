import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  alignItems: 'center',
});

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5.2rem',
  height: '5.2rem',
  backgroundColor: themeVars.color.secondary_3,
  borderRadius: '100px',
  color: themeVars.color.gray_0,
});

export const label = style({
  color: themeVars.color.secondary_3,
  ...themeVars.font.button_m_12,
});
