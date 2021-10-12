const consoleResize = (): void => {
  console.log('common resize done!');
};
const consoleScroll = (): void => {
  console.log('common scroll done!');
};

export default {
  init: (): void => {
    console.log('common init');
    window.addEventListener('resize', consoleResize);
    window.addEventListener('scroll', consoleScroll);
    // resize()
    // scroll()
    console.log('common.tsを読み込んでいます');
  },
  resize: (): void => {
    consoleResize();
  },
  scroll: (): void => {
    consoleScroll();
  },
};
