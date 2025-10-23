const key = "c2793ae25c0d4ba56edebf8a4f92765f"





function capturarDado() {
    
    let inputSet = document.getElementById("cep").value
    console.log(inputSet)
    buscarAPI(inputSet)

}



async function buscarAPI(inputSet) {
    let dados = await fetch(`https://viacep.com.br/ws/${inputSet}/json/`)
    .then(response => response.json())
    console.log(dados)
    
    let dadostempo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dados.localidade}&appid=${key}&units=metric&lang=pt_br`)
    .then(response2 => response2.json())
    console.log(dadostempo)
    dadosTela(dados, dadostempo)
    
}


function dadosTela(dados, dadostempo){
    let codicon = dadostempo.weather[0].icon
    let imgicon = `https://openweathermap.org/img/wn/${codicon}@2x.png`
    
    document.getElementById("estado").value = dados.uf
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("endereco").value = dados.logradouro
    document.getElementById("cidade-i").innerHTML = dadostempo.name
    document.getElementById("temp").innerHTML = dadostempo.main.temp
    document.getElementById("umi").innerHTML = dadostempo.main.humidity
    document.getElementById("Previsao").innerHTML = dadostempo.weather[0].description
    document.getElementById("img-icon").src = imgicon
    
    
     

}


 
