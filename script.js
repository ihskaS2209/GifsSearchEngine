// window.addEventListener('load', callServer);
// function callServer(){
//     let searchBoxVal = document.querySelector("#searchbox").value;
//     if(searchBoxVal.length==0){
//         searchBoxVal = "Forbes";
//     }

//     const URL = `https://newsapi.org/v2/everything?q=${searchBoxVal}&from=2022-07-15&sortBy=publishedAt&apiKey=1bd475af6a0a4f2da37a69e91012c446`;
//     const promise = fetch(URL);
//     promise.then(response=>{
//         response.json().then(result=>{
//             console.log("Data is ", result.data);
//             document.querySelector("#root").innerHTML = "";
//             result.data.forEach(obj => {
//                 createImage(obj.url);
//             })
//         }).catch(err=>{
//             console.log("Invalid JSON ", err);
//         })
//     }).catch(err=>{
//         console.log('Network Issue or Server Issue ', err);
//     });
//     console.log('Code...');
// }

// function createImage(url){
//     console.log("xcvbnm");
//     const img = document.createElement('img');
//     img.src = url;
//     document.querySelector('#root').appendChild(img);
// }


window.addEventListener('load', callServer);
function callServer(){
    let searchBoxVal = document.querySelector("#searchbox").value;
    if(searchBoxVal.length==0){
        searchBoxVal = "";
    }

    const URL = `https://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${searchBoxVal}&limit=5`;
    const promise = fetch(URL);
    promise.then(response=>{
        response.json().then(result=>{
            console.log("Data is ", result.data);
            document.querySelector("#root").innerHTML = "";
            result.data.forEach(obj => {
                createImage(obj.images.original.url);
            })
        }).catch(err=>{
            console.log("Invalid JSON ", err);
        })
    }).catch(err=>{
        console.log('Network Issue or Server Issue ', err);
    });
    console.log('Code...');
}

function createImage(url){
    console.log("xcvbnm");
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('#root').appendChild(img);
}

