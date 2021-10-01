const resize = (): void => {
  console.log('common resize done!');
};
const scroll = (): void => {
  console.log('common scroll done!');
};

export default {
  init: (): void => {
    console.log('common init');
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', scroll);
    // resize()
    // scroll()
    console.log('common.tsを読み込んでいます');
  },
  resize: (): void => {
    resize();
  },
  scroll: (): void => {
    scroll();
  },
};
