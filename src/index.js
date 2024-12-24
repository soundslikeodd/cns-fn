export default (
  ...classNames
) => classNames
  .filter(c => c)
  .reduce((a, c) => {
    const isArray = Array.isArray(c);
    if (isArray) return [...a, c];
    const isObject = typeof c === 'object';
    if (isObject) {
      // eslint-disable-next-line no-undef
      console.error('cns-fn incountered an element of type object, skipping');
      return a;
    }
    return [...a, c];
  }, [])
  .join(' ');
