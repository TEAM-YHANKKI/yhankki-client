import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '0.8rem 1.2rem',
  borderRadius: '100px',
  backgroundColor: themeVars.color.gray_5,
});

export const title = style({
  color: themeVars.color.gray_100,
  ...themeVars.font.button_m_12,
});

export const bar = style({
  width: '2px',
  height: '12px',
  backgroundColor: themeVars.color.gray_30,
});

export const noticeText = style({
  color: themeVars.color.gray_100,
  ...themeVars.font.caption_r_12,

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flex: 1,
});
