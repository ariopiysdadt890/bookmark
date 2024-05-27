var webName = document.getElementById("siteName");
var url = document.getElementById("siteURL");



//local storage
var all ;
if(localStorage.getItem("all") !=null){
    all = JSON.parse(localStorage.getItem("all"))
    display()
}
else{
    all = []
}

//validation
function validurl(){
    var regexp = /^(https:)/
    if(regexp.test(url.value)==true){
        return true 
      }
    }

function validname(){
    var regex = /^\w{3,}(\s+\w+)*$/
    if(regex.test(webName.value)==true){
      return true 
    }
}
    
//value getter
function getvalues(){
       if(validname()==true && validurl()==true){
        var get = {
            siteName: webName.value,
            siteURL: url.value,
        };
        all.push(get);
        localStorage.setItem("all", JSON.stringify(all));
        clear();
        display();
        console.log(all);}
            else{document.getElementById("layer").classList.replace("d-none", "d-block");
            document.getElementById("alertBox").classList.replace("d-none", "d-block");
        }


};
//clear after submit
function clear(){
    (webName.value = ""),
    (url.value = "")
};
// display input
function display(){
    var cartoona = ""
    for(var i = 0; i < all.length; i++){
         cartoona += `
        <tbody>
        <tr>
        <td>${i + 1}</td>
        <td>${all[i].siteName}</td>
        <td><a href="${all[i].siteURL}" target="_blank"><button class="btn btn-warning text-white"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
        <td><button class="btn btn-danger" onclick="deleteall(${i})"><i class="fa-solid fa-trash-can"></i> delete</button></td>
    </tr>
    </tbody>
        `
    };
    document.getElementById("demo").innerHTML = cartoona
};
//delete button function
function deleteall(index) {
    console.log('Deleted!')
    all.splice(index, 1)
    display()
    localStorage.setItem("all", JSON.stringify(all));
}
//x button in alert
function del(){
        document.getElementById('alertBox').classList.replace('d-block','d-none')
        document.getElementById('layer').classList.replace('d-block','d-none')
}

function valid(){
    document.getElementById("siteName").classList.add("is-invalid")
    
}
function validr(){
    document.getElementById("siteURL").classList.add("is-invalid")
}
function validt(){
    var regexi = /^\w{2,}(\s+\w+)*$/
    if(regexi.test(webName.value)==true)
    {document.getElementById("siteName").classList.replace("is-invalid","is-valid")}
}
function validtr(){
    var regexit = /^(https:)/
    if(regexit.test(url.value)==true)
    {document.getElementById("siteURL").classList.replace("is-invalid","is-valid")}
}