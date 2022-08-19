import components from './components';

export default {
  install: (app, _options) => {
    Object.keys(components).forEach(key => {
      app.component(key, components[key]);
    });
  },
};
