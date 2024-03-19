
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('addPlayer');
    const playersContainer = document.getElementById('playersContainer');
    const playersInfo = document.getElementById('playersInfo');
    let currentPlayer = 1;

    button.addEventListener('click', function() {
        if (currentPlayer <= 10) {
            const player = document.createElement('div');
            player.id = `player${currentPlayer}`;
            let valu = currentPlayer.toString()
            player.innerHTML = `
                <h3>Плеер ${currentPlayer}</h3>
                <video width="300" height="200" controls>
                <source src="https://test.plrjs.com/sample.mp4" type="video/mp4">
                </video>
                <button id="renameButton">Переименовать</button>
                <input id="renameInput" type="text" value="${currentPlayer}">
                <button id="addFileButton">Добавить файл</button>
                <input id="fileInput" type="file">
                `;
            playersContainer.appendChild(player);

            const script = document.createElement('script');
            script.src = `Players/player${currentPlayer}.js`;
            script.type = 'text/javascript';
            document.head.appendChild(script);

            currentPlayer++;

        } else {
            alert('Добавлено максимальное количество видеопроигрывателей');
        }
        });
        playersContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('renameButton')) {
                const player = event.target.parentNode;
                const newName = player.querySelector('.renameInput').value;
                player.querySelector('h3').innerText = `Плеер $\{newName}`;
            }

            if (event.target.classList.contains('addFileButton')) {
                const player = event.target.parentNode;
                const fileInput = player.querySelector('.fileInput');
                const file = fileInput.files[0];
                const reader = new FileReader();
                reader.onload = function(event) {
                    player.querySelector('video').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }

    });
});

/*
document.getElementById('addPlayerBtn').addEventListener('click', function() {
    for (let i = 1; i <= 3; i++) {
        const player = new Playerjs({id: `player$\{i\}`, file: `https://test\.plrjs\.com/sample$\{i\}\.mp4`});
        document.getElementById(`player$\{i\}`).style.marginTop = '20px';
    }
});

document.getElementById('addPlayerBtn').addEventListener('click', function() {
    for (let i = 1; i <= 10; i++) {
        if (i <= 3 || document.querySelectorAll('.player').length % 3 === 0) {
            const player = new Playerjs({ id: `player$\{\i}`, file: `https://test\.plrjs\.com/sample$\{i\}\.mp4`});
            const playerDiv = document.createElement('div');
            playerDiv.id = `player$\{i\}`;
            playerDiv.classList.add('player');
            document.getElementById('playersContainer').appendChild(playerDiv);
        }
    }
}); */