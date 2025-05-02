window.RufflePlayer = window.RufflePlayer || {};

let windowIndex = window.location.search
const urlParams = new URLSearchParams(windowIndex);

let id = urlParams.get("id")

window.addEventListener("DOMContentLoaded", () => {

    axios.get('collection.json').then(res => {
        listData = res.data
        if (listData[id]) {

            document.title = listData[id]["name"]

            let ruffle = window.RufflePlayer.newest();
            let player = ruffle.createPlayer();
            let container = document.getElementById("container");
            container.appendChild(player);
            player.ruffle().load(`./swfs/${id}.swf`);

        } else {

            history.back()
            
        }
    })

});