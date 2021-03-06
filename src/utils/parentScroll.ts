export const getScrollParent = (target: HTMLElement): HTMLElement => {
  let t = target;

  const check = () => t.scrollHeight > t.clientHeight + 100;
  let hasVerticalScrollbar = check();

  while (!hasVerticalScrollbar) {
    if (!t.parentElement) break;
    t = t.parentElement;
    hasVerticalScrollbar = check();
  }

  return t;
};

export const parentScrollMove = (
  target: HTMLElement,
  option: ScrollToOptions
) => {
  const parentTarget = getScrollParent(target);
  parentTarget.scrollTo(option);
};

export const parentScrollMoveToElement = (target: HTMLElement) => {
  parentScrollMove(target, {
    top: target.offsetTop,
  });
};

export const focusWithScroll = (target?: HTMLElement | null) => {
  if (!target) return;
  target.focus();
  parentScrollMoveToElement(target);
};
