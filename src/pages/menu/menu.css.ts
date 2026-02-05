import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const gradientHeader = style({
  position: 'relative',
  width: '100%',
  height: '12rem',
  padding: '0 3.2rem',
  background: `linear-gradient(180deg, ${themeVars.color.primary_2} 44.71%, ${themeVars.color.point_2} 223.55%)`,
});

export const mainContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
  minHeight: 'calc(100vh - 12rem)',
  backgroundColor: themeVars.color.gray_5,
  padding: '0 2.4rem',
  zIndex: themeVars.zIndex.overlay,
});

export const mainLogo = style({
  position: 'absolute',
  top: '3.2rem',
  width: '14.8rem',
  height: '3.2rem',
});

export const tabWrapper = style({
  marginTop: '-2.85rem',
  zIndex: themeVars.zIndex.overlay,
});

export const restaurantInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginTop: '2.8rem',
  color: themeVars.color.gray_100,
  ...themeVars.font.title_m_24,
});

export const detailInfo = style({
  ...themeVars.font.body_r_16,
});
