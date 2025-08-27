function checkfortask() {
    let task=document.getElementById("val").value;
    if(task!==""){
        return true;
    }else{
        document.getElementById("optext").innerHTML=
            `<q style="color:red; font-weight:bold">Please Type The things you want to do in the text box</q>`;
        return false;
    }
}

function updatetaskleft(count){
    if(count===0){
        document.getElementById("no-tasks").innerHTML=`<q style="color:wheat; font-style:italic">--no tasks yet</q>`;
        document.getElementById("optext").innerHTML=``;
        document.getElementById("opin").innerHTML=`<q style="color:wheat; font-style:italic">No incomplete tasks, You are doing great!</q>`;
    }else if(count===1){
        document.getElementById("no-tasks").innerHTML=``;
        document.getElementById("opin").innerHTML=`<p style="font-weight:bold">1 incomplete task left</p>`;
    }else{
        document.getElementById("no-tasks").innerHTML=``;
        document.getElementById("opin").innerHTML=`<p style="font-weight:bold">${count} incomplete tasks left</p>`;
    }
}

function updatetodo(){
    let istaskexists=checkfortask();

    if(istaskexists===true){
        let task=document.getElementById("val").value;

        let count=document.getElementsByClassName("incomplete");
        let countval=count.length;

        let todo=document.getElementById("todo");
        todo.innerHTML+=`<li class="incomplete" value=${countval+1}>
            <label for="${countval+1}">${task}</label>
            <input type="checkbox" id="${countval+1}" value=${countval+1} onchange="updatedone(this.value)">
        </li>`;

        document.getElementById("optext").innerHTML=`<p style="color:#88907F; font-weight:bold">--You added a new task: ${task}--</p>`;

        document.getElementById("val").value="";

        // refresh count after adding
        countval = document.getElementsByClassName("incomplete").length;
        updatetaskleft(countval);
    }
}

updatetaskleft(document.getElementsByClassName("incomplete").length);

function updatedone(val) {
    let todoul = document.getElementById("todo");
    let todoli = todoul.querySelector(`li[value="${val}"]`);
    let completed=document.getElementById("completed");
    if (todoli) {
        completed.innerHTML+=`<li class="complete"cd D:\Study Material\Programming\WebDev\myfreecodecampstuff\PersonalProjects\project2
>${todoli.textContent}</li>`
        document.getElementById("optext").innerHTML=`<p style="color:#6DA189; font-weight:bold">--You completed a task: ${todoli.textContent}--</p>`;
        todoul.removeChild(todoli);
    }

    let countval = document.getElementsByClassName("incomplete").length;
    updatetaskleft(countval);
}
