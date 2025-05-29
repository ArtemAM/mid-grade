// Имитация API для получения пользователя
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 500;

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`Failed to fetch user ${userId}`));
      } else {
        resolve({
          id: userId,
          name: `User ${userId}`,
          details: `Additional details for user ${userId}`,
        });
      }
    }, delay);
  });
}

// Имитация API для получения постов
function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    const delay = Math.random() * 1500 + 300;

    setTimeout(() => {
      resolve({
        userId: userId,
        posts: [
          `Post 1 by User ${userId}`,
          `Post 2 by User ${userId}`,
          `Post 3 by User ${userId}`,
        ],
      });
    }, delay);
  });
}

const userIds = [1, 2, 3, 4, 5];

async function solve() {
  for (const userId of userIds) {
    try {
      const user = await fetchUserData(userId);
      const posts = await fetchUserPosts(user.id);
      printSuccess(user.name, posts.posts);
    } catch (error) {
      printError(error.message);
    }
  }
}

async function solveAdvanced() {
  // Promise.race
  console.log("\n---Promise.race result---:");
  try {
    const firstCompletedRace = await Promise.race(
      userIds.map((userId) => promiseAllForUserAndPosts(userId))
    );
    printSuccess(firstCompletedRace[0].name, firstCompletedRace[1].posts);
  } catch (error) {
    printError(error.message);
  }

  // Promise.any
  console.log("\n---Promise.any result---:");
  try {
    const firstCompletedAny = await Promise.any(
      userIds.map((userId) => promiseAllForUserAndPosts(userId))
    );
    printSuccess(firstCompletedAny[0].name, firstCompletedAny[1].posts);
  } catch (error) {
    printError(error.message);
  }

  // // Promise.all
  console.log("\n---Promise.all result---:");
  try {
    const allResults = await Promise.all(
      userIds.map((userId) => promiseAllForUserAndPosts(userId))
    );
    allResults.forEach(([user, posts]) => {
      printSuccess(user.name, posts.posts);
    });
  } catch (error) {
    printError(error.message);
  }
}

async function solveWithRetry() {
  for (const userId of userIds) {
    try {
      const user = await fetchUserDataWithRetry(userId);
      const posts = await fetchUserPosts(user.id);
      printSuccess(user.name, posts.posts);
    } catch (error) {
      printError(error.message);
    }
  }
}

const printSuccess = (userName, posts) => {
  console.log(`${userName}:`);
  console.log("Posts:", posts);
  console.log("-----------------------------");
};

const printError = (errorMessage) => {
  console.log("Error:", errorMessage);
  console.log("-----------------------------");
};

const promiseAllForUserAndPosts = async (userId) => {
  return Promise.all([fetchUserData(userId), fetchUserPosts(userId)]);
};

async function fetchUserDataWithRetry(userId, maxRetries = 3) {
  for (let countTry = 1; countTry <= maxRetries; countTry++) {
    try {
      const user = await fetchUserData(userId);
      return user;
    } catch (error) {
      console.log(`Failed try count: ${countTry}, for user ${userId}`);
    }
  }

  throw new Error(`All ${maxRetries} tries failed for user ${userId}`);
}

solve();
// solveAdvanced();
// solveWithRetry();
