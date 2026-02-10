import { themeVars } from '@shared/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const slideUp = keyframes({
  '0%': { transform: 'translate(0, 20px)', opacity: 0 },
  '100%': { transform: 'translate(0, 0)', opacity: 1 },
});

export const toastContainer = style({
  position: 'fixed',
  bottom: '2.5rem',
  left: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1000,
});

export const toastBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  width: '100%',
  maxWidth: '35rem',
  height: '5.6rem',
  padding: '0 2.4rem',
  backgroundColor: themeVars.color.gray_70,
  color: themeVars.color.gray_0,
  borderRadius: '10px',
  animation: `${slideUp} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2rem',
  height: '2rem',
  color: themeVars.color.gray_0,
  flexShrink: 0,
});

export const message = style({
  ...themeVars.font.button_m_14,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
