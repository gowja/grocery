function shop(){
document.getElementById("table").style.visibility="visible";
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
       var res =JSON.parse(this.responseText);
       console.log(res);
       var ress=res.grocery;
       console.log(ress);
       var output="";
       for(var i=0;i<ress.length;i++){
            output+=`<tr>
            <td>${ress[i].slno}</td>
            <td>${ress[i].name}</td>
            <td>${ress[i].quantity}</td>
            <td>${ress[i].unit}</td>
            <td>${ress[i].department}</td>
            <td>${ress[i].notes}</td>
            </tr>`;
            console.log(output);
            document.getElementById("out").innerHTML=output;
            document.getElementById("out").style.textAlign="center";
            document.getElementById("out").style.border="1px solid black";
        }
    }
};
xhttp.open("GET","grocery.json",true);
xhttp.send();   
}