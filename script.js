$(function() {
    $('input.custom-checkbox').on('change', function() {
        $('input.custom-checkbox').not(this).prop('checked', false);  
    });
});
