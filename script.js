function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;

}

function break_create(){
 var label_break = document.createElement("br");
 return label_break
}

function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var input_ele = document.createElement(tagname)
    input_ele.setAttribute(attrname,attrvalue)
    input_ele.setAttribute(attrname1,attrvalue1);
    return input_ele

}

function break_create2(){
    var label_break = document.createElement("br");
    return label_break
   }

function label_create1(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;

}

function break_create1(){
    var label_break = document.createElement("br");
    return label_break
   }
   
   function input_create1(tagname,attrname,attrvalue,attrname1,attrvalue1){
       var input_ele = document.createElement(tagname)
       input_ele.setAttribute(attrname,attrvalue)
       input_ele.setAttribute(attrname1,attrvalue1);
       return input_ele
   
   }

   function break_create3(){
    var label_break = document.createElement("br");
    return label_break
   }

function label_create2(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;

}

function break_create4(){
    var label_break = document.createElement("br");
    return label_break
   }
   
   function input_create2(tagname,attrname,attrvalue,attrname1,attrvalue1){
       var input_ele = document.createElement(tagname)
       input_ele.setAttribute(attrname,attrvalue)
       input_ele.setAttribute(attrname1,attrvalue1);
       return input_ele
   
   }


   function break_create5(){
    var label_break = document.createElement("br");
    return label_break
   }

function label_create3(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;

}

function break_create6(){
    var label_break = document.createElement("br");
    return label_break
   }
   
   function input_create3(tagname,attrname,attrvalue,attrname1,attrvalue1){
       var input_ele = document.createElement(tagname)
       input_ele.setAttribute(attrname,attrvalue)
       input_ele.setAttribute(attrname1,attrvalue1);
       return input_ele
   
   }


   function break_create7(){
    var label_break = document.createElement("br");
    return label_break
   }

function label_create4(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;

}

function break_create8(){
    var label_break = document.createElement("br");
    return label_break
   }
   
   function input_create4(tagname,attrname,attrvalue,attrname1,attrvalue1){
       var input_ele = document.createElement(tagname)
       input_ele.setAttribute(attrname,attrvalue)
       input_ele.setAttribute(attrname1,attrvalue1);
       return input_ele
   
   }


   function break_create9(){
    var label_break = document.createElement("br");
    return label_break
   }

function label_create5(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;

}

function break_create10(){
    var label_break = document.createElement("br");
    return label_break
   }
   
   function input_create5(tagname,attrname,attrvalue,attrname1,attrvalue1){
       var input_ele = document.createElement(tagname)
       input_ele.setAttribute(attrname,attrvalue)
       input_ele.setAttribute(attrname1,attrvalue1);
       return input_ele
   
   }


var email = label_create("label","for","email","Email");
var email_brak = break_create();
var input_email = input_create("input","type","email","id","email")

var email_brak2 = break_create2();
var email1 = label_create1("label","for","Firstname","Firstname");
var email_brak1 = break_create1();
var input_email1 = input_create1("input","type","text","id","Firstname")

var email_brak3 = break_create3();
var email2 = label_create2("label","for","Middlename","Middlename");
var email_brak4 = break_create4();
var input_email2 = input_create2("input","type","text","id","Middlename")

var email_brak5 = break_create5();
var email3 = label_create3("label","for","Lastname","Lastname");
var email_brak6 = break_create6();
var input_email3 = input_create3("input","type","text","id","Lastname")

var email_brak7 = break_create7();
var email4 = label_create4("label","for","Password","Password");
var email_brak8 = break_create8();
var input_email4 = input_create4("input","type","password","id","Password")

var email_brak9 = break_create9();
var email5 = label_create5("label","for","File uplode","File uplode");
var email_brak10 = break_create10();
var input_email5 = input_create5("input","type","file","id","File uplode")

document.body.append(email,email_brak,input_email,email_brak2,email1,email_brak1,input_email1,email_brak3,email2,email_brak4,input_email2,email_brak5,email3,email_brak6,input_email3,email_brak7,email4,email_brak8,input_email4,email_brak9,email5,email_brak10,input_email5)