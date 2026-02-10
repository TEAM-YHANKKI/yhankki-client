import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  width: '100%',
  height: '100dvh',
  fontSize: '62.5%',
  fontFamily: `'Noto Sans KR', sans-serif`,
  backgroundColor: '#f5f5f5',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  overflow: 'hidden',
});

globalStyle('#root', {
  width: '100%',
  minWidth: '375px',
  maxWidth: '430px',
  height: '100dvh',
  margin: '0 auto',
  backgroundColor: '#ffffff',

  overflowY: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
