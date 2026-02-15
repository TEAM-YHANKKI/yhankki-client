import { themeVars } from '@shared/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.95)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100dvh',
  backgroundColor: themeVars.color.gray_0,
});

export const logoWrapper = style({
  width: '140px',
  height: 'auto',
  animation: `${fadeIn} 0.8s ease-out`,
});

export const logoImage = style({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});
