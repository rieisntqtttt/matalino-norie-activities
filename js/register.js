function register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var gen = document.getElementById("gen").value;
    var password = document.getElementById("password").value;

    var real_suername = "rieisntqtttt";
    var real_passwordd = "12345";


    if(username === "" || name === "" || gen === "" || password === "") {
        document.getElementById("error").innerHTML = "All texboxes are required";
    }

    else {
        document.getElementById("error").innerHTML ="Registered Successfully";
    }
}
