export const moveToIndex = (
  direction: boolean,
  currentIndex: number,
  lastIndex: number,
) => {
  if (direction) {
    return currentIndex < lastIndex ? currentIndex + 1 : currentIndex;
  }
  return currentIndex >= 1 ? currentIndex - 1 : currentIndex;
};
