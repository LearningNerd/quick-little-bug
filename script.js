console.log('making another commit with no bugs...');
console.log('new release! fixes bug, yayyy!');

// newUncaughtErrorHere();

try {
  // bugAfterGitPush();
  newBugBecauseOtherBugDidntTriggerAnIssue();
} catch (err) {
  Sentry.captureException(err);
}

