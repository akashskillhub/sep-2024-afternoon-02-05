exports.sendSMS = ({ numbers, message }) => new Promise((resolve, reject) => {

    var unirest = require("unirest");

    var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2")

    req.query({
        "authorization": process.env.SMS_KEY,
        "message": message,
        "language": "english",
        "route": "q",
        "numbers": numbers,
    });

    req.headers({
        "cache-control": "no-cache"
    });


    req.end(function (res) {
        if (res.error) {
            console.log("unable to send sms", res.error)
            reject("unable to send sms")
            throw new Error(res.error);
        }

        console.log("sms send")
        resolve("sms send success")
    });
})