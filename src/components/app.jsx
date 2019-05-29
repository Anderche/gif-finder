import React, { Component } from 'react';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
	render() {
		const gifs = [
			{ id: "2es7KiuoYLR3d5ye5v"},
			{ id: "l4q7TIW8nEZYOJUf6"}
		];

		return (
			<div>
				<div className="left-scene">
					<SearchBar />
					<div className="selected-gif">
						<Gif id="2es7KiuoYLR3d5ye5v" />
					</div>
				</div>

				<div className="right-scene">
					<GifList gifs={gifs} />
				</div>
			</div>	
		);
	}
}

export default App;
