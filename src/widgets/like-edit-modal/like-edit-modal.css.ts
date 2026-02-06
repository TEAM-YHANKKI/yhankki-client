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
  width: '100%',
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

export const crossIcon = style({
  width: '1.5rem',
  height: '1.5rem',
  cursor: 'pointer',
});

export const menuListSection = style({
  marginTop: '1.6rem',
  marginBottom: '2rem',
});

export const menuList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const menuItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  ...themeVars.font.body_r_16,
});

export const inputSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginTop: '1.6rem',
});

export const input = style({
  height: '3.5rem',
  padding: '0.6rem 1.4rem',
});

export const icon = style({
  flexShrink: 0,
  width: '2.4rem',
  height: '2.4rem',
});
