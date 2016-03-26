var express = require('express');
var nodemailer = require('nodemailer');
var mailConfig = require(appRoot +'/service/mail/mail-config.js');

var router = express.Router();

router.post('/SendEmailConfirmation', function (req, res) {
	console.log(req.body );
	var mailObj = req.body;
	var host = mailObj.Host;
	var email = mailObj.Email;
	var back2Url = mailObj.BacktoUrl;

	var activateLink = "http://" + host + '/#/?confirm='+ back2Url;
	
	var smtpTransport = nodemailer.createTransport(mailConfig.MAIL_TRANSFER_PROTOCOL, {
	  service: mailConfig.MAIL_SERVICE,
	  auth: {
	    XOAuth2: {
	      user: mailConfig.MAIL_USER, // Your gmail address.
	                                            // Not @developer.gserviceaccount.com
	      clientId: mailConfig.CLIENT_ID,
	      clientSecret: mailConfig.CLIENT_SECRET,
	      refreshToken: mailConfig.CLIENT_REFRESH_TOKEN,
	      accessToken: mailConfig.CLIENT_ACCESS_TOKEN
	    }
	  }
	});

	var mailOptions = {
		  from: "Caramel Srikho - กาละแม ศีขรภูมิ <caramel.srikho@gmail.com>", // sender address
		  to: email,
		  subject: "ยืนยันการลงทะเบียน ✔", // Subject line
		  generateTextFromHTML: true,
		  html : mailConfig.MAIL_CONTENT_TITLE +		  
'<tr><td align="center" bgcolor="#fbfcfd">'+
        '<table width="90%" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td align="center">'+
                '<!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
                '<div style="line-height: 44px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">'+
                        'การลงทะเบียนของท่านใกล้เสร็จสมบูรณ์'+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="4" color="#57697e" style="font-size: 15px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">'+
                        'กรุณากดปุ่มข้างล่างเพื่อการลงทะเบียนที่สมบูรณ์'+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">' +
                   '<a href="' + activateLink + '" style="background-color:#F64747;border-radius:4px;color:#ffffff;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:240px;align:center; " target="_blank">เปิดใช้งานบัญชี</a>'+
                '</div>'+
                '<div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
            '</td></tr>'+
        '</table> '+       
    '</td></tr>'+

mailConfig.MAIL_CONTENT_FOOTER,
attachments : mailConfig.MAIL_ATTACHMENTS
		}
		smtpTransport.sendMail(mailOptions, function(error, response){
		   if(error){
		       console.log(error);
		   }else{
		       console.log("Message sent: " + response.message);
		   }
		   smtpTransport.close();
		   res.sendStatus(200);
		});
});

router.get('/SendEmailCustomerNewOrder/:CustomerEmail/:RONo', function (req, res) {
	var email = req.params.CustomerEmail;
	var roNo = req.params.RONo;

	var smtpTransport = nodemailer.createTransport(mailConfig.MAIL_TRANSFER_PROTOCOL, {
	  service: mailConfig.MAIL_SERVICE,
	  auth: {
	    XOAuth2: {
	      user: mailConfig.MAIL_USER, // Your gmail address.
	                                            // Not @developer.gserviceaccount.com
	      clientId: mailConfig.CLIENT_ID,
	      clientSecret: mailConfig.CLIENT_SECRET,
	      refreshToken: mailConfig.CLIENT_REFRESH_TOKEN,
	      accessToken: mailConfig.CLIENT_ACCESS_TOKEN
	    }
	  }
	});
	var mailOptions = {
		  from: "Caramel Srikho - กาละแม ศีขรภูมิ <caramel.srikho@gmail.com>", // sender address
		  to: email,
		  subject: "ยืนยันคำสั่งซื้อเลขที่ " +roNo, // Subject line
		  generateTextFromHTML: true,
		  html : mailConfig.MAIL_CONTENT_TITLE +

'<tr><td align="center" bgcolor="#fbfcfd">'+
        '<table width="90%" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td align="center">'+
                '<!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
                '<div style="line-height: 44px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">'+
                        'ขอบคุณสำหรับคำสั่งซื้อของท่าน'+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="4" color="#57697e" style="font-size: 15px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">'+
                        'ระบบของเราได้รับคำสั่งซื้อของท่านเรียบร้อย ท่านสามารถติดตามสถานะคำสั่งซื้อของท่าน โดยไปที่เมนูประวัติการสั่งซื้อ'+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                   
                '</div>'+
                '<div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
            '</td></tr>'+
        '</table> '+       
    '</td></tr>'+
mailConfig.MAIL_CONTENT_FOOTER,
attachments : mailConfig.MAIL_ATTACHMENTS_CUSTOMER
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
		   if(error){
		    //   console.log(error);
		       res.sendStatus(500);
		   }else{
		    //   console.log("Message sent: " + response.message);
		   }
		   smtpTransport.close();
		   res.sendStatus(200);
		});
});

// Staff receive mail after customer create Receipt
router.get('/SendEmailStaffNewOrder/:RONo', function (req, res) {
//	var email = req.params.CustomerEmail;
	var roNo = req.params.RONo;

	var smtpTransport = nodemailer.createTransport(mailConfig.MAIL_TRANSFER_PROTOCOL, {
	  service: mailConfig.MAIL_SERVICE,
	  auth: {
	    XOAuth2: {
	      user: mailConfig.MAIL_USER, // Your gmail address.
	                                            // Not @developer.gserviceaccount.com
	      clientId: mailConfig.CLIENT_ID,
	      clientSecret: mailConfig.CLIENT_SECRET,
	      refreshToken: mailConfig.CLIENT_REFRESH_TOKEN,
	      accessToken: mailConfig.CLIENT_ACCESS_TOKEN
	    }
	  }
	});

	var mailOptions = {
		  from: "Caramel Srikho - กาละแม ศีขรภูมิ <caramel.srikho@gmail.com>", // sender address
		  to: "Caramel Srikho - กาละแม ศีขรภูมิ <caramel.srikho@gmail.com>",
		  subject: "ลูกค้าสร้างคำสั่งซื้อ หมายเลข " + roNo, // Subject line
		  generateTextFromHTML: true,
		  html : mailConfig.MAIL_CONTENT_TITLE +

'<tr><td align="center" bgcolor="#fbfcfd">'+
        '<table width="90%" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td align="center">'+
                '<!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
                '<div style="line-height: 44px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">'+
                        'ลูกค้าสร้างคำสั่งซื้อ หมายเลข '+ roNo +
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="4" color="#57697e" style="font-size: 15px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">'+
                        'กรุณาตรวจสอบรายการสั่งซื้อ '+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                   
                '</div>'+
                '<div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
            '</td></tr>'+
        '</table> '+       
    '</td></tr>'+

mailConfig.MAIL_CONTENT_FOOTER,
attachments : mailConfig.MAIL_ATTACHMENTS_STAFF
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
		   if(error){
		    //   console.log(error);
		       res.sendStatus(500);
		   }else{
		    //   console.log("Message sent: " + response.message);
		   }
		   smtpTransport.close();
		   res.sendStatus(200);
		});
});

// Send recovery link to input password
router.post('/SendEmailForgetPassword', function (req, res) {
	var mailObj = req.body;
	var CustomerEmail = mailObj.Email;
	var Host = mailObj.Host;
	var back2Url = mailObj.BacktoUrl;

	var forgetPasswordLink = 'http://' + Host + '/#/?forget='+ back2Url;
	
	var smtpTransport = nodemailer.createTransport(mailConfig.MAIL_TRANSFER_PROTOCOL, {
	  service: mailConfig.MAIL_SERVICE,
	  auth: {
	    XOAuth2: {
	      user: mailConfig.MAIL_USER, // Your gmail address.
	                                            // Not @developer.gserviceaccount.com
	      clientId: mailConfig.CLIENT_ID,
	      clientSecret: mailConfig.CLIENT_SECRET,
	      refreshToken: mailConfig.CLIENT_REFRESH_TOKEN,
	      accessToken: mailConfig.CLIENT_ACCESS_TOKEN
	    }
	  }
	});

	var mailOptions = {
		  from: "Caramel Srikho - กาละแม ศีขรภูมิ <caramel.srikho@gmail.com>", // sender address
		  to: CustomerEmail,
		  subject: "การเรียกคืนรหัสผ่านของท่าน", // Subject line
		  generateTextFromHTML: true,
		  html : mailConfig.MAIL_CONTENT_TITLE +

'<tr><td align="center" bgcolor="#fbfcfd">'+
        '<table width="90%" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td align="center">'+
                '<!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
                '<div style="line-height: 44px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">'+
                        'การเรียกคืนรหัสผ่านใหม่ ' +
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="4" color="#57697e" style="font-size: 15px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">'+
                        'กดปุ่มข้างล่างเพื่อเรียกคืนรหัสผ่าน , '+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                   '<a href="' + forgetPasswordLink + '" type="application/x-www-form-urlencoded" style="background-color:#F64747;border-radius:4px;color:#ffffff;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:240px;align:center; " target="_blank">Recovery Password</a>'+
                '</div>'+
                '<div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
            '</td></tr>'+
        '</table> '+       
    '</td></tr>'+
mailConfig.MAIL_CONTENT_FOOTER,
attachments : mailConfig.MAIL_ATTACHMENTS_FORGET_PASSWORD
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
		   if(error){
		       console.log(error, error.stack.split("\n"));
		       res.sendStatus(500);
		   }else{
		    //   console.log("Message sent: " + response.message);
		   }
		   smtpTransport.close();
		   res.sendStatus(200);
		});
});

// Approve Payment Document
router.get('/ApprovePaymentDocument/:UserId', function (req, res) {
	var UserId = req.params.UserId;
	// Load USer
    var LoadUserPromise = new Promise(function(resolve, reject) {
        var user_id = bson.BSONPure.ObjectID(UserId);
        db.collection(mongodbConfig.mongodb.user.name)
            .findOne({
                '_id': user_id
            }, function (err, user) {
              if ( !err) {
                resolve(user);
              }
              else {
              	console.log( err );
                reject(Error("Billing District broke"));
              }
        });
    });
    LoadUserPromise.then(function( CustomerUser ) {
        console.log( CustomerUser );
        var smtpTransport = nodemailer.createTransport(mailConfig.MAIL_TRANSFER_PROTOCOL, {
		  service: mailConfig.MAIL_SERVICE,
		  auth: {
		    XOAuth2: {
		      user: mailConfig.MAIL_USER, // Your gmail address.
		                                            // Not @developer.gserviceaccount.com
		      clientId: mailConfig.CLIENT_ID,
		      clientSecret: mailConfig.CLIENT_SECRET,
		      refreshToken: mailConfig.CLIENT_REFRESH_TOKEN,
		      accessToken: mailConfig.CLIENT_ACCESS_TOKEN
		    }
		  }
		});

		var mailOptions = {
			  from: "Caramel Srikho - กาละแม ศีขรภูมิ <caramel.srikho@gmail.com>", // sender address
			  to: CustomerUser.Email,
			  subject: "✔ การชำระเงินของท่านได้รับการอนุมัติ", // Subject line
			  generateTextFromHTML: true,
			  html : mailConfig.MAIL_CONTENT_TITLE +

			'<tr><td align="center" bgcolor="#fbfcfd">'+
        '<table width="90%" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td align="center">'+
                '<!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
                '<div style="line-height: 44px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">'+
                        'ระบบได้รับการจ่ายเงินของท่านเรียบร้อย '+ 
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="4" color="#57697e" style="font-size: 15px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">'+
                        'ระบบกำลังดำเนินการผลิต และส่งสินค้าให้กับท่าน ตามลำดับ '+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                   
                '</div>'+
                '<div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
            '</td></tr>'+
        '</table> '+       
    '</td></tr>'+
			mailConfig.MAIL_CONTENT_FOOTER,
			attachments : mailConfig.MAIL_ATTACHMENTS_APPROVE
		}

		smtpTransport.sendMail(mailOptions, function(error, response){
		   if(error){
		       console.log(error, error.stack.split("\n"));
		       res.sendStatus(500);
		   }else{
		    //   console.log("Message sent: " + response.message);
		   }
		   smtpTransport.close();
		   res.sendStatus(200);
		});
    },
    function ( err ) {
        console.log(err, err.stack.split("\n"));
    });
	
});

// Reject Payment Document
router.post('/RejectPaymentDocument', function (req, res) {
	console.log( 'UserId' + UserId );
	var ValidateForm = req.body;
	var UserId = ValidateForm.UserId;
	var RejectReason = ValidateForm.RejectReason;
	console.log( 'UserId' + UserId );
	console.log( 'RejectReason ' + RejectReason);
	var LoadUserPromise = new Promise(function(resolve, reject) {
    	var user_id = bson.BSONPure.ObjectID(UserId);
	    db.collection(mongodbConfig.mongodb.user.name)
	        .findOne({
	            '_id': user_id
	        },
	        function (err, User) {
	          if ( !err) {
	            resolve(User);
	          }
	          else {
	          	console.log( err );
	            reject(Error("Billing Province It broke"));
	          }
	    });
	});
	LoadUserPromise.then(function( CustomerUser ) {
	    console.log( CustomerUser );
	    var smtpTransport = nodemailer.createTransport(mailConfig.MAIL_TRANSFER_PROTOCOL, {
		  service: mailConfig.MAIL_SERVICE,
		  auth: {
		    XOAuth2: {
		      user: mailConfig.MAIL_USER, // Your gmail address.
		                                            // Not @developer.gserviceaccount.com
		      clientId: mailConfig.CLIENT_ID,
		      clientSecret: mailConfig.CLIENT_SECRET,
		      refreshToken: mailConfig.CLIENT_REFRESH_TOKEN,
		      accessToken: mailConfig.CLIENT_ACCESS_TOKEN
		    }
		  }
		});

		var mailOptions = {
			  from: "Caramel Srikho - กาละแม ศีขรภูมิ <caramel.srikho@gmail.com>", // sender address
			  to: CustomerUser.Email,
			  subject: "✗ เอกสารการชำระเงินไม่ถูกต้อง", // Subject line
			  generateTextFromHTML: true,
			  html : 
			  mailConfig.MAIL_CONTENT_TITLE +
			
			'<tr><td align="center" bgcolor="#fbfcfd">'+
        '<table width="90%" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td align="center">'+
                '<!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
                '<div style="line-height: 44px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">'+
                        'เรียน ท่านลูกค้าที่มีค่า '+ 
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="4" color="#57697e" style="font-size: 15px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">'+
                        'การชำระเงินของท่านไม่ได้รับการอนุมัติ เนื่องจาก <br>'+ RejectReason +
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                   
                '</div>'+
                '<div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
            '</td></tr>'+
        '</table> '+       
    '</td></tr>'+
			mailConfig.MAIL_CONTENT_FOOTER,
			attachments : mailConfig.MAIL_ATTACHMENTS_REJECT
		}

		smtpTransport.sendMail(mailOptions, function(error, response){
		   if(error){
		       console.log(error, error.stack.split("\n"));
		       res.sendStatus(500);
		   }else{
		    //   console.log("Message sent: " + response.message);
		   }
		   smtpTransport.close();
		   res.sendStatus(200);
		});
	},
	function ( err ) {
	    console.log(err, err.stack.split("\n"));
	});

	
});

router.get('/TestSend', function(req, res) {
	var mailObj = req.body;
	var CustomerEmail = mailObj.Email;
	var Host = mailObj.Host;
	var back2Url = mailObj.BacktoUrl;

	var smtpTransport = nodemailer.createTransport(mailConfig.MAIL_TRANSFER_PROTOCOL, {
	  service: mailConfig.MAIL_SERVICE,
	  auth: {
	    XOAuth2: {
	      user: mailConfig.MAIL_USER, // Your gmail address.
	                                            // Not @developer.gserviceaccount.com
	      clientId: mailConfig.CLIENT_ID,
	      clientSecret: mailConfig.CLIENT_SECRET,
	      refreshToken: mailConfig.CLIENT_REFRESH_TOKEN,
	      accessToken: mailConfig.CLIENT_ACCESS_TOKEN
	    }
	  }
	});

	var mailOptions = {
		  from: "Caramel Srikho <caramel.srikho@gmail.com>", // sender address
		  to: 'panya.javamania@gmail.com',
		  subject: "การเรียกคืนรหัสผ่านของท่าน", // Subject line
		  generateTextFromHTML: true,
		  html : mailConfig.MAIL_CONTENT_TITLE +
'<tr><td align="center" bgcolor="#fbfcfd">'+
        '<table width="90%" border="0" cellspacing="0" cellpadding="0">'+
            '<tr><td align="center">'+
                '<!-- padding --><div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
                '<div style="line-height: 44px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="5" color="#57697e" style="font-size: 34px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #57697e;">'+
                        'การลงทะเบียนของท่านใกล้เสร็จสมบูรณ์'+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                    '<font face="Arial, Helvetica, sans-serif" size="4" color="#57697e" style="font-size: 15px;">'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #57697e;">'+
                        'กรุณากดปุ่มข้างล่างเพื่อการลงทะเบียนที่สมบูรณ์'+
                    '</span></font>'+
                '</div>'+
                '<!-- padding --><div style="height: 40px; line-height: 40px; font-size: 10px;"> </div>'+
            '</td></tr>'+
            '<tr><td align="center">'+
                '<div style="line-height: 24px;">'+
                   '<a href="http://localhost:9999/urrngkflxmckqmreirrtur96867902/1-239504fdkfdl3434kfjdkjfdfkdfjdkfjdkfjdrjjtjglfglmbmv.mtrpoytpytryrt" style="background-color:#F64747;border-radius:4px;color:#ffffff;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:240px;align:center; " target="_blank">เปิดใช้งานบัญชี</a>'+
                '</div>'+
                '<div style="height: 60px; line-height: 60px; font-size: 10px;"> </div>'+
            '</td></tr>'+
        '</table> '+       
    '</td></tr>'+
mailConfig.MAIL_CONTENT_FOOTER,
attachments : mailConfig.MAIL_ATTACHMENTS_FORGET_PASSWORD
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
		   if(error){
		       console.log(error, error.stack.split("\n"));
		       res.sendStatus(500);
		   }else{
		    //   console.log("Message sent: " + response.message);
		   }
		   smtpTransport.close();
		   res.sendStatus(200);
		});
})
module.exports = router;
