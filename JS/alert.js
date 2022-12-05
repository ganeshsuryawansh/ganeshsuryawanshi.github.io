
//console.log("hii i am js");

function showalert() {
    console.log("i am inside alert function");
    let name = document.form1.name.value;

    if (name === "") {

        let n = document.getElementById("noti").innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Warning!</strong> You should Enter details before Send message.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

        //alert("Please Enter Your Name And Email");
    }
    else {
        let n = document.getElementById("noti").innerHTML = `<div class="alert alert-success  alert-dismissible fade show" role="alert">
        <strong></strong>Hello,`+name+`Your Message is Succsfully Send To Ganesh Suryawanshi! Welcome This Portal..
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

        //alert("Hello," + name + " Your Message is Succsfully Send To Ganesh Suryawanshi! Welcome This Portal");
    }
}