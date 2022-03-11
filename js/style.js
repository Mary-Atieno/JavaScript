const dob = document.querySelector(".editform");
dob.addEventListener("submit",formCollect);

function formCollect(e) {
    e.preventDefault();
    
    var nom = document.querySelector("input[name=gender]:checked");

    if(nom == null){
        alert("please put in information")
    }

    var akan = document.querySelector(".p-3").value;


    const cc = akan.slice(0,2);
    const year = akan.slice(2,4);
    const month = akan.slice(5,7);
    const day = akan.slice(8,10);

    const exactDoW = ( ( (cc/4) -2*cc-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;

    const exactDay = exactDoW.toFixed();
    var open = document.querySelector("#akanNames");

        var akanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var akanFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

        var akanMale1 = akanMale[exactDay];
        var akanFemale1 = akanFemale[exactDay];

        if(nom.value == "male"){
            open.innerHTML = "congratulations your Akan name is " + "  " + akanMale1;
        }else{
            open.innerHTML = "congratulations your Akan name is " + "  " + akanFemale1;
        }
    
}
var formsubmission = document.querySelector("#submit");
formsubmit.onclick = function(){display()};

function display(){
    var open1 = document.querySelector(".congratulations");
    if(open1.style.display == "none"){
        open1.style.display = "flex";
    }else{
        open1.style.display = "flex";
    }

}



   

