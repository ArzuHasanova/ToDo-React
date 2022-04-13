let completed = [];
let notCompleted = [];
let allTabs = ["All notes", "Completed", "Not completed"];
let activeTab = 0;

let list = document.querySelector("#list");

alert("Please firstly add new note!");

function addNote() {
    if(this.document.querySelector("#userInput").value != "")
    {
        notCompleted.push(this.document.querySelector("#userInput").value);
        this.document.querySelector("#userInput").value = "";
        
        if(activeTab === 0)
        {
            showAll();
            return;
        }
        else if(activeTab === 1)
        {
            showCompleted();
            return;
        }
        
        showNotCompleted();
        return;
    }
}

function clearAll() {
    let answer = confirm("Are you sure to delete all the notes?");

    if(answer)
    {
        while(completed.length != 0)
        {
            completed.pop();
        }

        while(notCompleted.length != 0)
        {
            notCompleted.pop();
        }
        list.innerHTML = "";
    }
}

function showAll() {
    list.innerHTML = "";
    for(let i = notCompleted.length - 1 ; i >= 0; i--)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)");
        a.classList.add("notCompleted");
        a.innerText = notCompleted[i];
        list.append(a);
    }

    for(let i = 0 ; i < completed.length; i++)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)");
        a.classList.add("completed");
        a.innerText = completed[i];
        list.append(a);
    }
}

function showCompleted() {
    list.innerHTML = "";
    for(let i = 0 ; i < completed.length; i++)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)");
        a.classList.add("completed");
        a.innerText = completed[i];
        list.append(a);
    }
}

function showNotCompleted() {
    list.innerHTML = "";
    for(let i = notCompleted.length - 1 ; i >= 0; i--)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.classList.add("notCompleted");
        a.setAttribute("onClick", "markAsCompleted(this)")
        a.innerText = notCompleted[i];
        list.append(a);
    }
}


function markAsCompleted(element) {

    let txt = element.innerText;
    if(completed.indexOf(txt) != -1)
    {
        notCompleted.push(txt);
        completed.splice(completed.indexOf(txt), 1);
    }
    else
    {
        completed.push(txt);
        notCompleted.splice(notCompleted.indexOf(txt), 1);
    }
    if(activeTab === 0)
    {
        showAll();
        return;
    }
    else if(activeTab === 1)
    {
        showCompleted();
        return;
    }
    
    showNotCompleted();
    return;

}

function changeTab(tab) {
    let tabs = document.getElementsByClassName("nav-link");
    for(let i = 0; i < tabs.length; i++)
    {
        tabs[i].setAttribute("style", "border: none");
    }

    tab.setAttribute("style", "color: red;");
    activeTab = allTabs.indexOf(tab.innerText);
}

changeTab(document.getElementsByClassName("nav-link")[0]);
