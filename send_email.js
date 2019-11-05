const sendEmail = (recipient, subject, body, options) => {
  //handle errors
  //1 recipient, subject, body parameters are not strings
  if (![recipient, subject, body].every(arg => typeof arg === "string"))
    throw new Error(
      "The recipient, subject, and body parameters must be strings"
    );
  //2) the object parameter is not an object
  if (
    options !== undefined &&
    Object.prototype.toString.call(options).match(/Object/g) === null
  )
    throw new Error("the options parameter must be an object");
  const package = encodeURIComponent(
    JSON.stringify({
      recipient,
      subject,
      body,
      options
    })
  );
  //3) the body contains html but the options object does not contain an htmlBody property
  if (
    body.indexOf("<") !== -1 &&
    body.indexOf("</") !== -1 &&
    !options.hasOwnProperty("htmlBody")
  ) {
    throw new Error(
      "Your email body appears to contain HTML. But you have not provided an htmlBody property to the options parameter. In order to send an email with html in the body, set the 'htmlBody' property in the options object equal to the html string that you want to send."
    );
  }
  const url = `https://tinyurl.com/emailfordevs?package=${package}`;
  return new Promise((resolve, reject) => {
    window
      .fetch(url, { method: "GET" })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
