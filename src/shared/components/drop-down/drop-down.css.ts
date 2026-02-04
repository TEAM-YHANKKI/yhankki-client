import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
});

export const trigger = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  padding: '0.6rem 1.2rem',
  borderRadius: '16px',
  border: `1px solid ${themeVars.color.gray_10}`,
  backgroundColor: themeVars.color.gray_0,
  color: themeVars.color.gray_70,
  ...themeVars.font.button_m_14,
});

export const optionList = style({
  position: 'absolute',
  top: 'calc(100% + 6px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  minWidth: '100%',
  padding: '0 1.2rem',
  borderRadius: '16px',
  border: `1px solid ${themeVars.color.gray_10}`,
  backgroundColor: themeVars.color.gray_0,
});

export const option = style({
  width: '100%',
  padding: '1rem 0',
  color: themeVars.color.gray_50,
  cursor: 'pointer',
  ...themeVars.font.caption_r_14,

  selectors: {
    '&:first-child': {
      paddingTop: '1.2rem',
    },
    '&:last-child': {
      paddingBottom: '1.2rem',
    },
    '&:not(:first-child)': {
      borderTop: `1px solid ${themeVars.color.gray_10}`,
    },
  },
});
