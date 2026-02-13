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

  width: '100%',
  minHeight: 'calc(100vh - 8.4rem)',
  backgroundColor: themeVars.color.gray_0,
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',
  marginTop: '-3.6rem',
  padding: '3.6rem 2.4rem 8.6rem 2.4rem',
  zIndex: themeVars.zIndex.overlay,
});

export const mainLogo = style({
  position: 'absolute',
  top: '3.2rem',
  width: '14.8rem',
  height: '3.2rem',
});

export const noticeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.5rem',
  flex: 1,
  color: themeVars.color.gray_70,
  ...themeVars.font.title_m_18,
});

export const icon = style({
  width: '5rem',
  height: '5rem',
  color: themeVars.color.gray_50,
});

export const homeButton = style({
  marginTop: '1rem',
  padding: '0 2.4rem',
  transition: 'transform 0.2s ease, opacity 0.2s ease',

  ':hover': {
    opacity: 0.9,
    transform: 'scale(1.02)',
  },

  ':active': {
    transform: 'scale(0.98)',
  },
});
