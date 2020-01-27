$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $('#contactForm :input').attr('disabled', 'disabled');
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"https://formsubmit.co/shivaji.mailbox@gmail.com",
                    success: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('.alert-success').removeClass("d-none");
                            setTimeout(function(){
                                $('.alert-success').fadeOut("slow");
                                $('#contactForm :input').val('');
                                $('#contactForm :input').removeAttr('disabled', '');
                            }, 2000);
                        });
                    },
                    error: function() {

                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('.alert-danger').removeClass("d-none").show();
                            setTimeout(function(){
                                $('.alert-danger').fadeOut("slow");
                                $('#contactForm :input').removeAttr('disabled', '');
                            }, 2000);
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})