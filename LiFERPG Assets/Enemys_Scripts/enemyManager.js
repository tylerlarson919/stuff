const triggerEnemyBehavior = (enemyName, behavior) => {
  if (enemyName === 'demon') {
    demon[behavior]();
  } else if (enemyName === 'headlessHorseman') {
    headlessHorseman[behavior]();
  }
};
