let roles = new Map([
    ['r1', 'User'],
    ['r2', 'Guest'],
    ['r3', 'Admin'],
    ]);
    
let names=["abc","huw","xyz"];
let roll=["111","222","333"];
let year=["2017","2018","2019"];
let branch=["cse","ece","mech"];

function display1()
{
    display();
    document.getElementById("div3").style.display="none";
    document.getElementById("div2").style.display="none";
    document.getElementById("div1").style.display="block";
}

function display2()
{
    document.getElementById("div1").style.display="block";
    document.getElementById("div3").style.display="none";
    document.getElementById("div2").style.display="block";
}

function display3()
{
    document.getElementById("div1").style.display="block";
    document.getElementById("div2").style.display="none";
    document.getElementById("div3").style.display="block";
}

function display4()
{
    document.getElementById("add").style.display="none";
    document.getElementById("del").style.display="none";
    document.getElementById("det").style.display="none";
    document.getElementById("dem").style.display="block";
}

function display()
{

    let table = document.getElementById("t");
    table.innerHTML="";

    let newrow = table.insertRow(0);
    let cell11=newrow.insertCell(0);
    let cell22=newrow.insertCell(1);
    let cell33=newrow.insertCell(2);
    let cell44=newrow.insertCell(3);
    let cell55=newrow.insertCell(4);
    
    cell11.innerHTML="NAME";
    cell22.innerHTML="ROLLNO";
    cell33.innerHTML="YEAR";
    cell44.innerHTML= "BRANCH";
    cell55.innerHTML="SELECT";
    
    for(let k=0;k<roll.length;k++)
    {
        let row = table.insertRow(k+1);
        let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        let cell3=row.insertCell(2);
        let cell4=row.insertCell(3);
        let cell5=row.insertCell(4);
     
        cell1.innerHTML=names[k];
        cell2.innerHTML=roll[k];
        cell3.innerHTML=year[k];
        cell4.innerHTML=branch[k] ;
        
        let chk=document.createElement("input");
        chk.type="checkbox";
        chk.id="box";
        chk.name="checkbox";
        cell5.appendChild(chk);
    }

}

function validation()
{
let name=document.getElementById("n").value;
let rollno=document.getElementById("r").value;
let year=document.getElementById("y").value;
let branch=document.getElementById("B").value;
const pat1=/^[A-Za-z]+$/;
const pat2=/^[0-9]+$/;

    if(!pat1.test(name))
	{
        let msg=`Hello ${roles.get('r2')},Enter only string values in name field`
         window.alert(msg);
	}

    else if(!pat2.test(rollno))
	{
        let msg=`Hello ${roles.get('r2')},Enter only numeric values in rollno field`
        window.alert(msg);
    }

    else if(!pat2.test(year))
	{
        let msg=`Hello ${roles.get('r2')},Enter only numeric values in year field`
        window.alert(msg);
    } 

    else if(!pat1.test(branch))
	{
        let msg=`Hello ${roles.get('r2')},Enter only string values in branch field`
        window.alert(msg);
    }

    else
    {
        let f=1;
        for(let val of roll)
         {
            if(val==document.getElementById("r").value)
            {
                f=0;
                break;
            }
         }

        if(f == 0)
        {
            class message
            {
                 mssg()
                {
                    return `Hello ${roles.get('r2')}`;
                }
            }
           
            const m=new message();
            let msg=`${m.mssg()},Record for this rollno. already exists`;
            window.alert(msg);
        }
        else
        {
           add();
           
           let callback = (notification) => notification();

           callback(function()
           {
                window.alert("Successfully Inserted");
           });
        }
    }
}

function add()
{
    let a=document.getElementById("n").value;
    names.push(a);
    let b=document.getElementById("r").value;
    roll.push(b);
    let c=document.getElementById("y").value;
    year.push(c);
    let d=document.getElementById("B").value;
    branch.push(d);
    display();
}

function edit()
{
    let table = document.getElementById("t");
    let rowCount = table.rows.length;
    let notchecked=rowCount;
    for(let i=0; i<rowCount; i++) {
        let row = table.rows[i];
      
        let chkbox = row.cells[4].childNodes[0];
        if(true == chkbox.checked) {
            let val=row.cells[1].innerHTML;
            document.getElementById("r").value=row.cells[1].innerHTML;
            rowCount--;
            i--;
            break;
         }
    }
    if(rowCount==notchecked)
    {
        window.alert("No Row Selected.Please Select the row to be edited");
    }
    
}

function save()
{
    let name=document.getElementById("n").value;
    let rollno=document.getElementById("r").value;
    let year=document.getElementById("y").value;
    let branch=document.getElementById("B").value;
    const pat1=/^[A-Za-z]+$/;
    const pat2=/^[0-9]+$/;
    
        if(!pat1.test(name))
        {
            let msg=`Hello ${roles.get('r2')},Enter only string values in name field`
             window.alert(msg);
        }
    
        else if(!pat2.test(rollno))
        {
            let msg=`Hello ${roles.get('r2')},Enter only numeric values in rollno field`
            window.alert(msg);
        }
    
        else if(!pat2.test(year))
        {
            let msg=`Hello ${roles.get('r2')},Enter only numeric values in year field`
            window.alert(msg);
        } 
    
        else if(!pat1.test(branch))
        {
            let msg=`Hello ${roles.get('r2')},Enter only string values in branch field`
            window.alert(msg);
        }
        else
        {
          let a=document.getElementById("r").value;
          let b=roll.indexOf(a);
          names[b]=document.getElementById("n").value;
          roll[b]=document.getElementById("r").value;
          year[b]=document.getElementById("y").value;
          branch[b]=document.getElementById("B").value;
          display();

          function callback(notification)
          {
          notification();
          }

          callback(function()
         {
         window.alert("Successfully Edited");
         });
       }	    
}

function del()
{
    let table = document.getElementById("t");
    let rowCount = table.rows.length;
    let notchecked=rowCount;
    for(let i=0; i<rowCount; i++) {
        let row = table.rows[i];
      
        let chkbox = row.cells[4].childNodes[0];
        if('checkbox' == chkbox.type && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
         }
    }

    if(rowCount==notchecked)
    {
        window.alert("No Row Selected.Please Select the rows to be deleted");
    }
    else
    {
    function callback(notification)
    {
     notification();
    }

    callback(function()
    {
         window.alert("Successfully Deleted");
    });
    }
}





