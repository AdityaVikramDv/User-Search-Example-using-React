import React, {Component} from 'react';

class FindBar extends Component{

	onSearch(e){
		e.preventDefault();
		let user = this.refs.userInput.value.trim();
		if(!user){
			return ;
		}
		
		this.props.onUserSearch(user);
		this.refs.userInput.value = "";
	}

	render(){
		return(
		<div className="row">
				<div className="col s1">
					<img className="responsive-img" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png" />
				</div>

				<div className="col s8">
				<form onSubmit={this.onSearch.bind(this)}>
					<input id="icon_prefix" ref="userInput" type="text" placeholder="Search User Name" />
				</form>
				</div>
			</div>
			)
	}
}

export default FindBar; 