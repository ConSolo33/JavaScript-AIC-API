async function clickedEvent(img_index, item_index) {
    let artwork = document.getElementsByTagName('img')[img_index].attributes[1].value;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'AIC-User-Agent': 'aic-bash ()'
    });

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${artwork}?fields=title,artist_title,date_display,place_of_origin,medium_display,`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json()

    console.log(response.data);

    document.querySelector(`#info`).insertAdjacentHTML("beforeend", response.data.title)
    document.querySelector(`#subinfo`).insertAdjacentHTML("beforeend", `Artist : ${response.data.artist_title} <br> Year: ${response.data.date_display} <br> Origin: ${response.data.place_of_origin} <br> Medium: ${response.data.medium_display}`)
    
    return(response.data)
}

function expand(id) {
    document.querySelector(`#info`).innerHTML = ""
    document.querySelector(`#subinfo`).innerHTML = ""
    let expandImg = document.getElementById('expanded-img');
    expandImg.src = id.src;
    expandImg.parentElement.style.display = "block";
}

function getInfo(id, event) {
    switch(id){
        case 'image1': {
            event.stopPropagation();
            expand(img1)
            clickedEvent(0,0)
            break;
        }
        case 'image2': {
            event.stopPropagation();
            expand(img2)
            clickedEvent(1,0)
            break;
        }
        case 'image3': {
            event.stopPropagation();
            expand(img3)
            clickedEvent(2,0)
            break;
        }
        case 'image4': {
            event.stopPropagation();
            expand(img4)
            clickedEvent(3,0)

            break;
        }
        case 'image5': {
            event.stopPropagation();
            expand(img5)
            clickedEvent(4,0)
            break;
        }
    }
}