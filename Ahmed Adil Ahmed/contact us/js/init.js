$(function(){
	
	$("#form").validate(
        
        {
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			company: {
				required: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		},
		
        
        messages: {
			name: {
				required: 'هذا الحقل مطلوب',
				minlength: 'أصغر طول : 3 أحرف'
			},
			address: {
				required: 'هذا الحقل مطلوب'
			},
			phone: {
				required: 'هذا الحقل مطلوب',
				number: 'رقم هاتف غير صالح',
				minlength: 'أصغر طول : 6 أرقام'
			},
			email: 'بريد إلكتروني غير صالح',
			message: {
            required: 'هذا الحقل مطلوب'
			}
		},
            
		success: function(label) {
			label.html('صالح').removeClass('error').addClass('ok');
			setTimeout(function(){
				label.fadeOut(500);
			}, 2000)
		}
	});
	
});