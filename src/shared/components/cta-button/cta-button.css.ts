import { themeVars } from '@shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const ctaButtonRecipe = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4.6rem',
    borderRadius: '32px',
    cursor: 'pointer',
    ...themeVars.font.button_b_16,
    ':disabled': {
      backgroundColor: themeVars.color.gray_10,
      color: themeVars.color.gray_70,
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: themeVars.color.primary_2,
        color: themeVars.color.gray_0,
      },
      sub: {
        border: `1px solid ${themeVars.color.primary_2}`,
        backgroundColor: themeVars.color.primary_1,
        color: themeVars.color.secondary_3,
      },
      navy: {
        backgroundColor: themeVars.color.secondary_3,
        color: themeVars.color.gray_0,
      },
    },
  },
});
