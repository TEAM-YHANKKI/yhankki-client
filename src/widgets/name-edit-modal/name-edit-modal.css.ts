import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 2.4rem',
});

export const titleContainer = style({
  display: 'flex',
  gap: '1rem',
  borderBottom: `1px solid ${themeVars.color.gray_30}`,
});

export const modalTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  color: themeVars.color.gray_50,
  ...themeVars.font.caption_r_14,
  paddingBottom: '1.2rem',
});

export const mainTitleText = style({
  display: 'flex',
  justifyContent: 'space-between',
  color: themeVars.color.gray_100,
  ...themeVars.font.title_m_18,
});

export const input = style({
  height: '3.9rem',
  margin: '1.6rem 0 2rem 0',
});

export const crossIcon = style({
  width: '1.5rem',
  height: '1.5rem',
  cursor: 'pointer',
});
