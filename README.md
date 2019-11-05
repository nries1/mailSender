# mailSender
A script that allows developers to send emails for free.

 ## DISCLAIMER:
 The script that listens for GET requests at https://tinyurl.com/emailfordevs will send emails through a gmail account (named    emailfordevs@gmail.com). The account is not monitored. However, the folk at Google AND the owners of the account WILL be able to view aspects of the emails that you construct when using the API. This API is intended for testing. You SHOULD NEVER send personal, or protected information through this API.

Still here? Good! As long as you're using it for testing, this mail sender will hopefully save you some time and money when trying to send automated emails during development.

## User Manual:
1. Copy, or otherwise insert the script in send_email.js into your project
2. When you are ready to send an email, call the sendEmail function with the following parameters

    **Parameter**\___________________**Type**_______________________ **Content**
      recipient\____________________string\____________________The email address of the recipient

  The mail sender script listens for GET requests at the URL https://tinyurl.com/emailfordevs
  When it receives a GET request it looks for a single parameter, named 'package.'
  The package parameter must pe preceded by a '?' e.g. https://tinyurl.com/emailfordevs?package=                                 {recipient:xxx,subject:xxx,body:xxx}
  The package parameter should be an object with the following properties:
  {
      recipient (required): (String email address of recipient),
      subject (required): (String subject line of email),
      body (required): (String email body. Can be html or plain text),
      options (optional): {
                            bcc	(String	a comma-separated list of email addresses to BCC),
                            cc	(String	a comma-separated list of email addresses to CC),
                            htmlBody	(String	if set, devices capable of rendering HTML will use it instead of the required                                          body argument you can add an optional inlineImages field in HTML body if you have                                              inlined images for your email),
                            inlineImages	(Object	a JavaScript object containing a mapping from image key (String) to image data (BlobSource); this assumes that the htmlBody parameter is used and contains references to these images in the format <img src="cid:imageKey" />
name	String	the name of the sender of the email (default: the user's name)
noReply	Boolean	true if the email should be sent from a generic no-reply email address to discourage recipients from responding to emails; this option is only possible for G Suite accounts, not Gmail users
replyTo	String	an email address to use as the default reply-to address (default: the user's email address)
                           }
  }
  

(1) Send a simple GET request to https://tinyurl.com/emailfordevs and append the content and options of the message to the         url.

   
    
    
