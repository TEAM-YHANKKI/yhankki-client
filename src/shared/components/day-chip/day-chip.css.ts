import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const chip = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  minWidth: 0,
  maxWidth: '4.9rem',
  height: '6.1rem',
  padding: '0.8rem 1.2rem 1.2rem 1.2rem',
  borderRadius: '23px',
  border: `1px solid ${themeVars.color.gray_10}`,
  backgroundColor: themeVars.color.gray_0,
  color: themeVars.color.gray_50,
  cursor: 'pointer',
});

export const dayText = style({
  color: 'inherit',
  ...themeVars.font.caption_r_12,
});

export const dateText = style({
  color: 'inherit',
  ...themeVars.font.title_m_18,
});

export const selected = style({
  border: 'none',
  backgroundColor: themeVars.color.point_2,
  color: themeVars.color.secondary_3,
});
