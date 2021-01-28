import React from 'react';
import './App.css';
import InstaPost from './components/Posts';

const data = [{
		accountName: "Mr.Papi",
		image: "https://randomuser.me/api/portraits/men/63.jpg",
		caption: "Chef papi is cooking"
	},
	{
		accountName: "Mr.TechGuy",
		image: "https://randomuser.me/api/portraits/men/34.jpg",
		caption: "Tech Guy is creating the future"
	},
	{
		accountName: "Mrs.Fabulous",
		image: "https://randomuser.me/api/portraits/women/40.jpg",
		caption: "Fabulous is making sure everyone is fabulous"
	}
]

function App() {
	return (
		<div className="App">
		<h1 style={{ textAlign: 'center'}}>The Social Experiment</h1>
			{
				data.map(post => {
					return (
							<InstaPost
								key={post.accountName}
								accountName={post.accountName}
								image={post.image}
								caption={post.caption}
							 />
						)
				})
			}
		</div>
	)
}

export default App;