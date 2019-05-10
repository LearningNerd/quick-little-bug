console.log('making another commit with no bugs...');
console.log('new release! fixes bug, yayyy!');

newUncaughtErrorHere();

try {
  // bugAfterGitPush();
} catch (err) {
  Sentry.captureException(err);
}

