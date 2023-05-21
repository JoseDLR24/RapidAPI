const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': 'cd12becd80msh255ae4e84d97919p18e06cjsn068d85340058'
	}
};


fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then(response => response.json())
	.then(data => {
		// Title, genre, platform, thumbnail, publisher, release_date
		data.map(game =>{
			const card = `
			<div class="gameItem">
				<h2>${game.title}</h2>
				<img src="${game.thumbnail}" alt="${game.title} thumbnail">
                <p>Genre: ${game.genre}</p>
                <p>Platform: ${game.platform}</p>
                <p>Release Date: ${game.release_date}</p>
                <p>Publisher: ${game.publisher}</p>
			</div>
			`;
			document.querySelector('#games').innerHTML += card;
		})
	
	
	})
	.catch(err => console.error(err));