# mailSender
A script that allows developers to send emails for free.

 ## DISCLAIMER:
 The script that listens for GET requests at https://tinyurl.com/emailfordevs will send emails through a gmail account (named    emailfordevs@gmail.com). The account is not monitored. However, the folk at Google AND the owners of the account WILL be able to view aspects of the emails that you construct when using the API. This API is intended for testing. You SHOULD NEVER send personal, or protected information through this API.

Still here? Good! As long as you're using it for testing, this mail sender will hopefully save you some time and money when trying to send automated emails during development.

## User Manual:
1. Copy, or otherwise insert the script in send_email.js into your project
2. When you are ready to send an email, call the sendEmail function with the following *required* parameters

    **Parameter**----------**Type**----------**Content**
    
      recipient ------------string----------The email address of the recipient
      
      subject --------------string----------The subject line of the email
      
      body ----------------string----------The body of the email
      
      options --------------Object----------An optional object for confuiuring the email
      
  3. *optionally* create and pass in an options object with the following parameters
  
      **Parameter**-----------------------------**Type**----------------------**Content**
      
      bcc-----------------------------string----------------------comma-separated list of email addresses to BCC
      
      cc-----------------------------string----------------------comma-separated list of email addresses to CC
      
      htmlBody-----------------------string----------------------string contained html formatted emaail body
      
      noReply------------------------boolean----------------------true if the email should be sent from a no-reply email address
      
      name---------------------------string----------------------name of the sender of the email
