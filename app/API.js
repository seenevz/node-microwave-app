class API {
  // Resolves the API requests that have been intercepted
  static exec(resp) {
    const parts = API.urlParts;
    console.log("Executing call for the following request => ", parts);

    if (parts[0] == "api") {
      if (parts[1] == "user") {
        console.log("insert request handler for =>", parts[2]);
      } else if (parts[1] == "microwave") {
        console.log("insert request handler for =>", parts[2]);
        resp.end("Responding from microwave!");
      }
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

module.exports = API;
