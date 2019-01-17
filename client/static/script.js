function requestEndpoint(url){

    $.ajax(
        {
            url: url,
            success: function(result){
                $("#response").html(result);
            },
            error: function(result,status,xhr){
                $("#response").html(result.statusText);
                console.log(result);
            }
        }
    );
}
