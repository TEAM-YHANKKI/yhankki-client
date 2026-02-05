import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const gradientHeader = style({
  position: 'relative',
  width: '100%',
  height: '12rem',
  padding: '0 3.2rem',
  background: `linear-gradient(180deg, ${themeVars.color.primary_2} 44.71%, ${themeVars.color.point_2} 223.55%)`,
});

export const overlayContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
  minHeight: 'calc(100vh - 8.4rem)',
  backgroundColor: themeVars.color.gray_0,
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',
  marginTop: '-3.6rem',
  padding: '3.6rem 2.4rem 0 2.4rem',
  zIndex: themeVars.zIndex.overlay,
});

export const mainLogo = style({
  position: 'absolute',
  top: '3.2rem',
  width: '14.8rem',
  height: '3.2rem',
});

export const homeText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  marginTop: '0.3rem',
  color: themeVars.color.gray_100,
  ...themeVars.font.title_m_24,
});

export const restaurantGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: '18.3rem',
  gap: '1.6rem',
  width: '100%',
});

export const fullWidth = style({
  gridColumn: '1 / span 2',
});

export const circleButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.2rem',
  marginTop: '1.6rem',
});
