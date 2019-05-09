console.log('hi');

try {
  immaBug();
} catch (err) {
  Sentry.captureException(err);
}

