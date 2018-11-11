module.exports = di => {
  di.service('hello', () => {
    return (name) => {
      console.log(`hello ${name}`);
    }
  });
};
