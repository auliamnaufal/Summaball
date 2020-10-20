var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BCVdAvGRqfLNvul_TKxq_as8wGaWiKMZrfgqGTyWB6bhCOcXL82MzkI3jODDOlwWZDAh2WZKFTFOMiVM1VxzXxc",
  privateKey: "VM1VKwaikO-m-Seqa9xkGB8bhahhIPNqOxMr1fDdKIQ",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dnP4JE9uRMo:APA91bGeglzOGppYKZmaB7gBuGGMfuspjCwdAl-yh82ZNXmarI6S_8tZRxwZ_9EUrOTglKYxNqz5t37CTKgIoDBbvTB_jDDqrcmovjSniuZC08-58dqeKVlvUv8oExK_qju5HWxogl7X",
  keys: {
    p256dh:
      "BNqHmuwWnfSOkhYL8TDqBT5qJctkaMgc970zd3/MCPe67PCJpzCzcMDUYdDAaScgs0LJwg4EEknEaPdjhb9NcxE=",
    auth: "G5PddvptZwUHHXNIphg7Og==",
  },
};
var payload = "Selamat anda terhubung dengan football summary";

var options = {
  gcmAPIKey: "261512994762",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
