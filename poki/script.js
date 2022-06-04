async function getData(e,data){
    
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/76`)
    var data = await response.json();
    console.log(data)
}
getData()