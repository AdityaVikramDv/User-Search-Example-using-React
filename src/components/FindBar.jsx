import React, {Component} from 'react';

class FindBar extends Component{

	onSearch(e){
		e.preventDefault();
		let user = this.refs.userInput.value.trim();
		if(!user){
			return ;
		}
		
		this.props.onUserSearch(user);
		console.log(user);
		this.refs.userInput.value = "";
	}

	render(){
		return(<div>
			<nav className="blue darken-4">
					<div className="nav-wrapper">
					
					
    <form className="col m10 white black-text">
          <div className="input-field" >
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" ref="userInput" type="text" placeholder="User Name" className="validate" />
          </div>
        
      
    </form>
  
					<ul className="right">
					<li onClick={this.onSearch.bind(this)}><a href="#"><i className="material-icons">search</i></a></li>
					<li><a href="#"><i className="material-icons">refresh</i></a></li>
					</ul>
					</div>
					</nav>
		</div>)
	}
}

export default FindBar; 