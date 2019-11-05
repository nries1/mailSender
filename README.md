# mailSender
A script that allows developers to send emails for free.

 ## DISCLAIMER:
 The script in send_email.js sends GET requests to an unmonitored Gmail account emailfordevs@gmail.com. However, the folk at Google AND the owners of the account WILL be able to view aspects of the emails that you construct when using sendEmail. This script is intended for testing. You SHOULD NEVER send personal, or protected information using this script.

Still here? Good! As long as you're using it for testing, this mail sender will hopefully save you some time and money when trying to send automated emails during development.

## User Manual:

structure of the sendEmail function:

`sendEmail(recipient[required string], subject[required string], body[required string], options[optional object])  // returns a promise`

1. Copy, or otherwise insert the script in send_email.js into your project
2. When you are ready to send an email, call the sendEmail function with the following *required* parameters

    **Parameter**----------**Type**----------**Content**
    
      recipient --------------string----------The email address of the recipient
      
      subject ---------------string----------The subject line of the email
      
      body ------------------string----------The body of the email
      
  3. *Optionally* create and pass in an options object with the following parameters
  
      **Parameter**----------**Type**----------**Content**
      
      bcc----------string----------comma-separated list of email addresses to BCC
      
      cc-----------string----------comma-separated list of email addresses to CC
      
      htmlBody-----string----------string contained html formatted emaail body
      
      noReply------boolean----------true if the email should be sent from a no-reply email address
      
      name------string----------name of the sender of the email
      
      
      ## Examples
      
      Call sendEmail with 3 required parameters
      ```
      var email = 'email@email.com'
      var subject = 'this is a subject'
      var body = 'this is a body'
      
      sendEmail(email, subject, body);
      .then(res => //do something)
      .catch(err => do something)
      ```
      Call sendEmail with options parameter included
      
      ```
      var email = 'email@email.com'
      var subject = 'this is a subject'
      var body = '<div style="color: green">This is an HTML body</div>'
      var ccEmails = ['email1@email.com', 'email2@email.com', 'email3@email.com']
      var options = {htmlBody: body, cc: ccEmails.join(','), noReply: true}      
      
      sendEmail('email@email.com', 'this is a subject', body, options);
      .then(res => //do something)
      .catch(err => do something)
      ```
