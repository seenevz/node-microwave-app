const User = require("./models/user");
const Microwave = require("./models/microwave");

class API {
  // Resolves the get API requests that have been intercepted
  static getExec(req, resp) {
    const parts = API.urlParts;
    console.log("Executing call for the following get request => ", parts);

    if (parts[1] === "users") {
      if (!!parts[2]) {
        User.userById(parts[2]).then(user => {
          resp.setHeader("Content-Type", API.type);
          resp.end(JSON.stringify(user));
          return;
        });
      } else {
        User.allUsers().then(users => {
          resp.setHeader("Content-Type", API.type);
          resp.end(JSON.stringify(users));
        });
      }
    } else if (parts[1] === "microwaves") {
      if (!!parts[2]) {
        Microwave.microwaveById(parts[2]).then(Microwave => {
          resp.setHeader("Content-Type", API.type);
          resp.end(JSON.stringify(Microwave));
          return;
        });
      } else {
        Microwave.allMicrowaves().then(microwaves => {
          resp.setHeader("Content-Type", API.type);
          resp.end(JSON.stringify(microwaves));
        });
      }
    }
  }

  // Resolves the post API requests that have been intercepted
  static postExec(req, resp) {
    const parts = API.urlParts;
    console.log("Executing call for the following get request => ", parts);
    switch (parts[1]) {
      case "users":

      default:
        break;
    }
  }

  // Checks each request to make sure if it is an API request
  static catchAPIrequest(url) {
    console.log("api check url =>", url);
    // removes the leading forward slash from url
    url[0] === "/" ? (url = url.substring(1, url.lenght)) : null;
    // checks if its a string and a valid api url and then split it so it can be used by exec(), by storing it on api urlparts
    if (url.constructor === String) {
      const urlSplit = url.split("/");
      if (urlSplit[0] === "api") {
        console.log(urlSplit);
        API.urlParts = urlSplit;
        return true;
      }
      return false;
    }
  }
}

API.urlParts = null;
API.type = "application/json";

module.exports = API;
