const btn = document.querySelector("#enviar");

btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    const name = document.querySelector("#txt_nome").value;//Recebe o nome
    const nameJunto = name.replace(/\s/g, '');//Remove espaços em branco
    const nameNum = nameJunto.length;//Nome em quantidade de letras
    // console.log(nameNum)
    // console.log(typeof (nameNum))
    const idade = parseInt(document.querySelector('#idade').value);//Recebe a idade transformada em number
    const dateToday = new Date();
    const today = dateToday.getDate();//Recebe o dia do mes

    // console.log(`A idade informada foi ${idade} e o seu tipo é`);
    // console.log(typeof (idade));

    const numSorte = (nameNum + idade + today);

    // console.log(`A soma entre ${nameNum} e ${idade} é : ${numSorte}`)

    console.log(`Hoje é dia ${today}`)
    const seuNumSorte = document.querySelector("#seuNumSorte");
    seuNumSorte.innerHTML = "SUA SORTE DE HOJE É:";

    const numSorteRes = document.querySelector("#numSorte");
    function numSorteResHtml(){numSorteRes.innerHTML = numSorte}
        
    setTimeout(numSorteResHtml, 5000);
});

