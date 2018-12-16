//import Raven from "raven-js";

function init() {
  /*Raven.config("https://b4f3b59038cd43028d0946a5c6b90488@sentry.io/1330159", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
  */
}

function log(error) {
  console.error(error);
  //Raven.captureException(error);
}

export default {
  init,
  log
};
