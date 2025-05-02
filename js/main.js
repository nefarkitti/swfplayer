const list = document.getElementById("list")

let listedCollections = []

window.addEventListener("DOMContentLoaded", () => {

    axios.get('collection.json').then(res => {
        listData = res.data
        
        for (const key in listData) {

            let item = listData[key]

            if (!listedCollections.includes(item["collection"])) {
                listedCollections.push(item["collection"])
                list.innerHTML += `<div class="collection">${item["collection"]}</div>`
            }

            list.innerHTML += `<a href="play.html?id=${key}">
            <img class="thumbnail" src="thumbnails/${key}.jpg">
            <span class="name">${item["name"]}</span>
            <span class="author">by ${item["author"]}</span>
            </a>`
        }

    })

});