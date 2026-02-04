import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const background = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100dvw',
  height: '100dvh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const modalBox = style({
  borderRadius: '20px',
  backgroundColor: themeVars.color.gray_5,
});
