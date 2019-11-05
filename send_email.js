function doGet(e) {
  //handle possible failures
  //1) missing the package parameter
  if (!e.parameter.package) return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "Error: Missing required parameter: 'package'"}))
  
  //2) not enough email quota remaining
  if (MailApp.getRemainingDailyQuota() <= 0) return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "Error: The Mail Sender application has reached it send limits for the day. Please try again tomorrow" }))
  var req;
  
  //3) package parameter is not proper JSON
  try {
    req = JSON.parse(e.parameter.package);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "Error: Attempt to parse the paackage parameter rerturned the following error: "+error}))
  }
  
  //4) the recipient, subject or body parameters are not type string, or the options param is not an object
  if (typeof req.recipient !== 'string') return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "Error: The recipient parameter must be of type 'string'"}));
  if (typeof req.subject !== 'string') return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "Error: The subject parameter must be of type 'string'"}));
  if (typeof req.body !== 'string') return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "Error: The body parameter must be of type 'string'"}));
  if (!isObject(req.options)) return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "Error: The options parameter must be of type 'object Object.'"}));
  
  //5) the body contains html but the options object does not contain an htmlBody property
  if (req.body.indexOf("<") !== -1 &&
      req.body.indexOf("</") !== -1 && 
      !req.options.hasOwnProperty("htmlBody")) return ContentService.createTextOutput(JSON.stringify({"msg": "mail send failed", "sent": false, "error": "It looks like you are trying to pass html to the body to the mail sender. If that is the case, mail sender requires that the htmlBody property in the options object be set to the value of your html body."}));
    try  {
      MailApp.sendEmail(req.recipient, req.subject, req.body, req.options || {})
      var out = {"msg": "mail sent", "sent": true}
    }
    catch(err) {
      var out = {"msg": "mail send failed", "sent": false, "error": err}
      MailApp.sendEmail('nries1@gmail.com', 'mail send failed', err);
    }
  finally {
    return ContentService.createTextOutput(JSON.stringify(out));
  }
}

function isObject(obj) {
  return Object.prototype.toString.call(obj).match(/Object/g) !== null
}

function test() {
  var package = {recipient: "nries@schools.nyc.gov", subject: "this is a subject", body: "<div>Body</div>", options: {htmlBody: "<div>Body</div>"}}
  Logger.log(UrlFetchApp.fetch("https://script.google.com/macros/s/AKfycbxUOJGr0pqAiKBbDRqrn9H2mgr6Rtk3X0FR632SCLH40GgSBRE/exec?package="+encodeURIComponent(JSON.stringify(package))))
}
