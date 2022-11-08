export const getSize = (el: HTMLDivElement) => {
  const width = el?.offsetWidth;
  const height = el?.offsetHeight;
  return { height, width };
};
