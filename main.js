
	var tiles = document.querySelectorAll('td');
	var count = 0
	for(i = 0; i < tiles.length; i++){
		aTile = tiles[i]
		aTile.addEventListener('click', function(e){

			if(count % 2 === 0){
				e.target.innerText = 'x'
			} else if (count % 2 != 0){
				e.target.innerText = 'o'
			}
			count += 1
		})

		
	}

	// tiles.forEach(function(tile){
	// 	tile.addEventListener(function(e){
	// 		console.log('hi')
	// 	})
	// })
