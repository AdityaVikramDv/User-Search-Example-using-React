import React,{Component} from 'react';
import RepoList from './RepoList.jsx'

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
			<div className="card-action blue">
			<a href={this.props.userData.html_url} target='_blank'>Visit Profile</a>
			</div>
			</div>
			</div>
			<div className="col s5">

			<nav className="white lighten-3">
			<div className="nav-wrapper">
			<ul id="nav-mobile" className="">
			<li><a href="#"><span className="new badge  yellow accent-4" data-badge-caption="Followers">{this.props.userData.followers}</span></a></li>
			<li><a href="#"><span className="new badge green" data-badge-caption="Following">{this.props.userData.following}</span></a></li>
			<li><a href="#"><span className="new badge deep-orange darken-3" data-badge-caption="Gists">{this.props.userData.public_gists}</span></a></li>
			<li><a href="#"><span className="new badge blue" data-badge-caption="Repos">{this.props.userData.public_repos}</span></a></li>
			</ul>
			</div>
			</nav>
   			</div>
   			
   			<div className="row"> 
					<RepoList userRepos = {this.props.userRepos}/>	
   			</div>
   			
			</div>


			
			)
	}
}


export default Profile;