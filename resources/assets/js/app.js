$(document).ready(function(){
    $('.datatable').dynatable();
    $('.chosen-select').chosen();
    $(".form-confirm-delete").submit(function() {
        var deleteName = $('.delete-name',this).val();
        var c = confirm("Are you sure you want to delete "+deleteName+"?");
        return c;
    });
});