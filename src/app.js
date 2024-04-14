const browserUpdate = require('browser-update/update.npm.js');
const template = require('./message.pug');
const isDev = process.env.NODE_ENV === 'development';

let config = {
  required: {
    e: 16,
    i: 12,
    f: 52,
    o: 44,
    s: 10.3,
    c: 57,
    samsung: 7.0,
    vivaldi: 1.2
  },
  insecure: true, // show defailt temlate
  test: isDev,
  reminder: 0,
  reminderClosed: 1,
  onshow: function () {
    require('./styles/overrides.scss');
    if (isDev) {
      // addTemplate();
    }
  },
};

function addTemplate() {
  require('./styles/styles.scss');
  let body = document.querySelector('body');
  let child = document.createElement('div');
  child.innerHTML = template();
  body.appendChild(child);
}

browserUpdate(config);
