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
  gap: '2.8rem',
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

export const titleText = style({
  ...themeVars.font.title_m_24,
});

export const recruiting = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const teamSection = style({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: '100%',
  height: '45rem',
  padding: '2rem 2.4rem',
  backgroundImage: "url('/assets/images/team.webp')",
  backgroundSize: 'cover',
  borderRadius: '1.6rem',
  border: `1px solid ${themeVars.color.gray_10}`,
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
});

export const applyButton = style({
  width: '100%',
});
