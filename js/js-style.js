$(document).ready(
    $('#user-recall').submit(function(e) {
        var userPhone = document.querySelector('.user-phone--js'),
            userName = document.querySelector('.user-name--js');
        if(!userPhone.value || !userName.value) {
            $.ajax({
                url: "https://formspree.io/baxthegreatest@yandex.ru",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            }); 
        } else {
            e.preventDefault()
        }
    })
);

