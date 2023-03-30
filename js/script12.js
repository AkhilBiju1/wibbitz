$(document).ready(function () {

    $("form.ajax ").submit(function (event) {
        
        event.preventDefault();
        var $this = $(this)

        var url = $this.attr("action");
        var method = $this.attr("method")


        jQuery.ajax({
            type: method,
            url: url,
            dataType: "json",
            data: new FormData(this),
            processData: false,
            contentType: false,
            cache: false,
            success: function (data) {
                
                var title = data["title"]
                var messege = data["messege"]
                var status = data["status"]

                swal.fire({
                    icon: status,
                    title: title,
                    text: messege
                    
                })
                if (status == "success") {
                    $this.trigger("reset")
                }
                
            },
            error: function (error) {
               console.log(error); 
            }
        })

    })
})