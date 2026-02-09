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
  padding: '0 2.4rem 2.4rem 2.4rem',
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
  marginTop: '1.2rem',
  color: themeVars.color.gray_100,
  ...themeVars.font.title_m_24,
});

export const detailInfo = style({
  ...themeVars.font.body_r_16,
});

export const menuDisplaySection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  marginTop: '1.2rem',
  padding: '2.4rem 1.9rem 3.2rem 1.9rem',
  backgroundColor: themeVars.color.gray_0,
  borderRadius: '30px',
});

export const menuList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const notice = style({
  display: 'flex',
  justifyContent: 'center',
  color: themeVars.color.gray_50,
  ...themeVars.font.caption_r_14,
});

export const emptyWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40rem',
  gap: '1.5rem',
  color: themeVars.color.gray_50,
});

export const emptyLogo = style({
  width: '6rem',
  height: '6rem',
});
export const emptyText = style({
  ...themeVars.font.title_m_18,
});

export const restaurantName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const instagramButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  borderRadius: '100%',
  backgroundColor: themeVars.color.gray_10,
  color: themeVars.color.gray_30,
});
