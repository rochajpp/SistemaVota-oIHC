const votes = {};
let count = 0;


function listOptions(){
    const select = document.querySelector("#option");

    while(select.firstChild){
        select.removeChild(select.firstChild);
    }

    if(count == 0){
        const option = document.createElement("option");
        option.value = "";
        option.disbaled = true;
        option.innerHTML = "Nenhuma chapa disponível!";

        select.appendChild(option);
        return;
    }

    for(var i = 0; i < count; i++){
        const option = document.createElement("option");;
        option.value = votes[i].id;
        option.innerHTML = votes[i].number + " - " + votes[i].name;

        select.appendChild(option);
    }
}


function addVote(){
    const option = document.querySelector("#option").value;
    const sucess = document.querySelector("#voteSucess");

    votes[option].quant++;
    sucess.style.bottom = "0rem";

    setTimeout(() => {
        sucess.style.bottom = "-10rem"
    }, 2000);

    return;
}


function register(){
    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;

    if(name == "" || number == ""){
        const err = document.querySelector("#registerErr2");
            err.style.bottom = "0rem";
            setTimeout(() => {          
                err.style.bottom = "-10rem";
            }, 2000);

        return;
    }

    for(var i = 0; i < count; i++){
        if(votes[i].number == number){
            const err = document.querySelector("#registerErr");
            err.style.bottom = "0rem";
            setTimeout(() => {          
                err.style.bottom = "-10rem";
            }, 2000);
               
            return;
        }
    }

    votes[count] = {id: count, name: name, number: number, quant: 0};
    count ++;

    const sucess = document.querySelector("#registerSucess");

    sucess.style.bottom = "0rem";

    setTimeout(() => {
        sucess.style.bottom = "-10rem";
    }, 2000);
    listOptions();
    return;
}


function result(){
    const result = document.querySelector("#result");
    const component = document.querySelector("#list");

    while(component.firstChild){
        component.removeChild(component.firstChild);
    }

    if(count == 0){
        const empty = document.createElement("li")
        empty.innerHTML = "Nenhum voto registrado!";
        
        component.appendChild(empty);
        return;
    }

    for(var i = 0; i < count; i++){
        const li = document.createElement("li");
        li.innerHTML = votes[i].quant + " voto(s): " + votes[i].number + " - " + votes[i].name;
        component.appendChild(li);
    }
}


