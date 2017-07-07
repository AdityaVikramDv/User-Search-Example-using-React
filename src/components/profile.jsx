import React,{Component} from 'react';
import RepoList from './RepoList.jsx';
import Chips from './Chips.jsx';

class Profile extends Component{
	render(){
	return (
		
			<div className="row">
			<div className="col s4">
			<div className="card">
			<div className="card-image">
			<img src={this.props.userData.avatar_url}/>
			<span className="card-title">{this.props.userData.name}</span>
			</div>

			<div className="card-content">
			<div className="row">
			<div className="col s4">
			<h6 className="red-text">User Id:</h6>
			<p>{this.props.userData.login}</p>
			</div>

			<div className="col">
			<h6 className="red-text">Bio:</h6>
			<p>{this.props.userData.bio}</p>
			</div>
			<div className="col">
			<h6 className="red-text">Location:</h6>
			<p>{this.props.userData.location}</p>
			</div>
			</div>
			</div>
			<div className="card-action purple darken-4">
			<a href={this.props.userData.html_url} target='_blank'>Git Hub</a>
			</div>
			</div>
			</div>


		<div className="col s8">
			<div className="row">
				<Chips item='Followers' itemCount = {this.props.userData.followers} colorPalete="chip red darken-2"/>
				<Chips item='Following' itemCount = {this.props.userData.following} colorPalete="chip green darken-1"/>
				<Chips item='Gists' itemCount = {this.props.userData.public_gists} colorPalete="chip blue darken-1"/>
				<Chips item='Repos' itemCount = {this.props.userData.public_repos} colorPalete="chip orange darken-2"/>
			</div>	
   		</div>



   			
   		<div className="col s8"> 
			<RepoList userRepos = {this.props.userRepos}/>	
   		</div>
   			
	</div>)
	}
}


export default Profile;