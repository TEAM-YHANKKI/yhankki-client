import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '0 2rem',
  backgroundColor: themeVars.color.gray_5,
  borderTopLeftRadius: '18px',
  borderTopRightRadius: '18px',
});

export const tabItem = recipe({
  base: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.6rem 0.8rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    minWidth: 'fit-content',
    flexShrink: 0,
    ...themeVars.font.button_b_18,
  },
  variants: {
    isActive: {
      active: {
        color: themeVars.color.primary_3,
      },
      inactive: {
        color: themeVars.color.gray_30,
      },
    },
  },
});

export const underLine = style({
  position: 'absolute',
  bottom: 0,
  width: '80%',
  height: '4px',
  backgroundColor: themeVars.color.primary_3,
});
