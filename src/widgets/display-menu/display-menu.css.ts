import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'flex-start',
});

export const cornerInfo = style({
  display: 'flex',
  gap: '1.2rem',
});

export const infoText = style({
  display: 'flex',
  flexDirection: 'column',
  color: themeVars.color.secondary_3,
  ...themeVars.font.title_m_18,
});

export const price = style({
  color: themeVars.color.gray_50,
  ...themeVars.font.caption_r_14,
});

export const bar = style({
  width: '8px',
  backgroundColor: themeVars.color.secondary_3,
});

export const mealInfoWrapper = style({
  flex: 1,
});
