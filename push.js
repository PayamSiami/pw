const push = require("web-push");

let vapidKeys = {
  publicKey:
    "BNjY4of2n-yquSEUqL5qaT6YYO-kZmYFgWTNRAeTuf4T5LYGyNWQ3nH2NzYn87NRgCIXRFbCbWa1aJxJO9pKUHg",
  privateKey: "RUqla8K80zLU1KjonvRQkZfZhU8e5vfd7a1LEZYclNc",
};

push.setVapidDetails(
  "mailto:test@test",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test message");
