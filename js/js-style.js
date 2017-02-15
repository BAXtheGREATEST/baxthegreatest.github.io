$(document).ready(
    $(document).on('keyup', '.user-phone--js', function(){
        var typedPhone = $(this).val();
        if (!typedPhone.match(/^[0-9]*$/)) {
            $(this).addClass('error');
        } else {
            $(this).removeClass('error');
        }
    }),

    $('#user-recall').submit(function(e) {
        var userPhone = document.querySelector('.user-phone--js'),
            userName = document.querySelector('.user-name--js'),
            selectedColor = document.querySelector('.visuallyhidden:checked');

        if(!userPhone.value || !userName.value) {
            $.ajax({
                url: "https://formspree.io/baxthegreatest@gmail.com",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            }); 
        } else {
            e.preventDefault()
        }
    })
);

