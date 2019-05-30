import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifs: [], 
			selectedGifID: "2es7KiuoYLR3d5ye5v"
		}

		this.search("homer thinking")
	}

	search = (query) => {
		giphy('nAD8YUqiBSfdkEjGANIACzpbPj8AeSzH').search({
			q: query,
			rating: 'g'
		}, (error, result) => {
			this.setState({
				gifs: result.data
			});
		});
	}

	render() {
		return (
			<div>
				<div className="left-scene">
					<SearchBar />
					<div className="selected-gif">
						<Gif id={this.state.selectedGifID} />
					</div> 
				</div>

				<div className="right-scene">
					<GifList gifs={this.state.gifs} />
				</div>
			</div>	
		)
	}
}

export default App;
