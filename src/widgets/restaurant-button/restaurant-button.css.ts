import { themeVars } from '@shared/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  variants: {
    restaurant: {
      studentHall: {
        border: `3px solid ${themeVars.color.primary_1}`,
        backgroundImage: `linear-gradient(180deg, ${themeVars.color.primary_1} 20%, ${themeVars.color.gray_0} 100%)`,
        ...themeVars.font.title_m_24,
      },
      dormitory: {
        border: `3px solid ${themeVars.color.point_2}`,
        backgroundImage: `linear-gradient(180deg, ${themeVars.color.point_2} 20%, ${themeVars.color.gray_0} 100%)`,
        ...themeVars.font.title_m_18,
      },
      yongoreum: {
        border: `3px solid ${themeVars.color.secondary_1}`,
        backgroundImage: `linear-gradient(180deg, ${themeVars.color.secondary_1} 20%, ${themeVars.color.gray_0} 100%)`,
        ...themeVars.font.title_m_18,
      },
    },
  },
});

export const imageArea = recipe({
  base: {
    display: 'block',
    width: '100%',
    height: '11.1rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  variants: {
    restaurant: {
      studentHall: {
        backgroundImage: 'url("/assets/images/studenthall.webp")',
      },
      dormitory: { backgroundImage: 'url("/assets/images/dormitory.webp")' },
      yongoreum: { backgroundImage: 'url("/assets/images/yongoreum.webp")' },
    },
  },
});

export const titleSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.6rem 2rem',
});

export const titleText = style({
  color: themeVars.color.gray_100,
  whiteSpace: 'pre-wrap',
  textAlign: 'left',
});

export const icon = recipe({
  base: {
    width: '18px',
    height: '21px',
    marginTop: '0.2rem',
    color: themeVars.color.secondary_3,
  },
  variants: {
    isLiked: {
      true: {
        opacity: '0.8',
      },
      false: {
        opacity: '0.1',
      },
    },
  },
  defaultVariants: {
    isLiked: false,
  },
});
