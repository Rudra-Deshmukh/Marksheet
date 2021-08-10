var students=[];
var num=0;

function get(x){
    return document.getElementById(x);
}

function addmarks(){
    if(get("math").value=="" || get("science").value=="" || get("english").value==""){
        get(info).innerText=`Please enter the marks`;
    }
    else{
        if(get("math").value>100 || get("science").value>100 || get("english").value>100){
            get(info).innerText=`The marks should be between 0 and 100`;
        }
        else{
            window[`student`+num]={
                name: (get("name").value).toLowerCase(),
                math: (get("math").value),
                science: (get("science").value),
                english: (get("english").value)
            }
            students.push(window[`student`+num]);
            num++;
            get("info").innerText=`Marks of ${num} students entered`;
            get("math").value="";
            get("science").value="";
            get("english").value="";
        }
    }
}

function result(){
    var input=get("stuname").value.toLowerCase();
    var output=get("output");
    for(var i=0; i<students.length; i++){
        if(students[i].name===input){
            var avgmarks=Math.round((Number(students[i].math+Number(students[i].science+Number(students[i].english))/3);
            output.innerHTML=`<h4>Math: ${students[i].math}</h4> 
                                <h4>science: ${students[i].science}</h4> 
                                <h4>english: ${students[i].english}</h4> 
                                <h4>Average Marks: ${avgmarks}</h4> `;
                                break;
        }
        else{
            output.innerHTML="<h4>No student found </h4>";
        }
    }
}