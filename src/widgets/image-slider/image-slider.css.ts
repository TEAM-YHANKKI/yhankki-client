import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const sliderWrapper = style({
  width: '100%',
  borderRadius: '20px',
  aspectRatio: '1080 / 1350',
  overflow: 'hidden',
});

export const swiperContainer = style({
  width: '100%',
  height: 'auto',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  aspectRatio: 'auto',
});

export const skeletonWrapper = style({
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  backgroundColor: themeVars.color.gray_30,
});
