console.log('hi');

try {
  bugAfterGitPush();
} catch (err) {
  Sentry.captureException(err);
}

