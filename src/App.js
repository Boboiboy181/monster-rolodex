// import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-lists/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.scss';

const App = () => {
	const [searchField, setSearchField] = useState(''); // [value. set value function]
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(respone => respone.json())
			.then(monsters => {
				setMonsters(monsters);
			});
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	return (
		<div className="App">
			<h1 className='app-title'>First ReactJS App</h1>
			<SearchBox onChangeHandler={onSearchChange} placeholder='Search monster' className='monster-search-box' />
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			monsters: [],
// 			searchField: ''
// 		};
// 		console.log(1); //testing	
// 	}

// 	componentDidMount() {
// 		console.log(2); //testing
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((respone) => respone.json())
// 			.then(users => this.setState(() => {
// 				//	return { user } // return nhu the nay thi no khong co shallow merge, 
// 				// phai return cung field no moi merge cho minh
// 				return { monsters: users };
// 			},
// 				() => {
// 					console.log(users);
// 				}
// 			));
// 		// .then(users => this.setState({ monsters: users })) Cách 2 
// 	}

// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 		console.log(3); //testing
// 	};

// 	render() {
// 		console.log('render from app'); //testing
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLowerCase().includes(searchField);
// 		});
// 		// day la full list of monsters, tai sao la full list khi ma co filtered boi vi no khong co setstate,
// 		// lai thang monster o trong state, nen moi lan ma thang searcfiled thay doi thi no se filtered tren thang fulllist
// 		return (
// 			<div className="App">
// 				<h1 className='app-title'>First ReactJS App</h1>
// 				<SearchBox onChangeHandler={onSearchChange} placeholder='Search monster' className='monster-search-box' />
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;
