var d = document.getElementById('b');
var des = document.getElementById('descrip');
var c = document.getElementById('c');
var cat = document.getElementById('cat');
var dat = document.getElementById('d');
var date = document.getElementById('date');



function desc(){
    d.style.backgroundColor = '#d6d6d5f3';
   des.style.backgroundColor= '#d6d6d5f3';
   c.style.backgroundColor = '#FFFFFFFF';
    cat.style.backgroundColor= '#FFFFFFFF';
    dat.style.backgroundColor = '#FFFFFFFF';
    date.style.backgroundColor= '#FFFFFFFF';
   return false;
}

function cate(){
    d.style.backgroundColor = '#FFFF';
    des.style.backgroundColor= '#FFFF';
    c.style.backgroundColor = '#d6d6d5f3';
    cat.style.backgroundColor= '#d6d6d5f3';
    dat.style.backgroundColor = '#FFFFFFFF';
    date.style.backgroundColor= '#FFFFFFFF';
    return false;
}

function da(){
    dat.style.backgroundColor = '#d6d6d5f3';
    date.style.backgroundColor= '#d6d6d5f3';
    d.style.backgroundColor = '#FFFF';
    des.style.backgroundColor= '#FFFF';
    c.style.backgroundColor = '#FFFFFFFF';
    cat.style.backgroundColor= '#FFFFFFFF';
}

d.addEventListener('click',desc,false);
c.addEventListener('click',cate,false);
dat.addEventListener('click',da,false);

function checkedorNot(){
    let cb = document.querySelectorAll('.ch');
    let descdisp = document.querySelectorAll('.details');
    let d = document.querySelectorAll('.dat');
    for(let i=0;i<descdisp.length;i++){
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
        let dueDate = d[i].innerHTML;
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through';
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration = 'line-through';
            document.getElementById(cb[i].getAttribute('uid')).style.color = '#788';
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.color = '#788';
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none';
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration = 'none';
            document.getElementById(cb[i].getAttribute('uid')).style.color = 'black';
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.color = '#3d3d3d';
            }
        }
}