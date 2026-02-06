import { fullWidth } from '@pages/home/home.css';
import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '2rem 2.4rem',
});

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  paddingBottom: '1.2rem',
  borderBottom: `1px solid ${themeVars.color.gray_10}`,
  ...themeVars.font.title_m_18,
});

export const select = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const description = style({
  color: themeVars.color.gray_50,
  ...themeVars.font.caption_r_14,
});

export const dropdown = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const menuList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  marginBottom: '0.4rem',
});

export const menu = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  ...themeVars.font.body_r_16,
});

export const checkbox = style({
  appearance: 'none',
  WebkitAppearance: 'none',

  position: 'relative',
  width: '24px',
  height: '24px',
  border: `1px solid ${themeVars.color.gray_10}`,
  borderRadius: '4px',
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',

  selectors: {
    '&:checked': {
      backgroundColor: themeVars.color.point_1,
      borderColor: themeVars.color.point_2,
    },
    // 체크 표시(V) 직접 그리기 (가상 요소)
    '&:checked::after': {
      content: '""',
      position: 'absolute',
      width: '8px',
      height: '16px',
      border: `solid ${themeVars.color.point_2}`,
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
      marginBottom: '2px',
    },
    '&:focus-visible': {
      boxShadow: '0 0 0 2px rgba(0, 40, 120, 0.3)',
    },
  },
});

export const restaurantSelect = style({
  width: '9.8rem',
});

export const cornerSelect = style({
  width: '8.2rem',
});
