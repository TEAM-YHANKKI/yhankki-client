import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '2rem 2.4rem',
  borderRadius: '0 2rem 2rem 2rem',
  backgroundColor: themeVars.color.gray_5,
});

export const menuList = style({
  display: 'flex',
  flexDirection: 'column',
  color: themeVars.color.gray_100,
  ...themeVars.font.body_r_16,
});

export const underLine = style({
  width: '100%',
  height: '1px',
  backgroundColor: themeVars.color.gray_30,
  marginTop: '2.8rem',
});

export const kcalInfo = style({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: '0.8rem',
  color: themeVars.color.gray_50,
  ...themeVars.font.caption_r_14,
});

export const likedMenuText = style({
  color: themeVars.color.primary_3,
  ...themeVars.font.button_b_16,
});
