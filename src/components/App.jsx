	import React, {Component} from 'react';
	import FindBar from './FindBar.jsx';
	import Profile from './Profile.jsx';

	class App extends Component{

		constructor(props){

			super(props);
			this.state ={
				"userName": 'adityavikramdv',
				"userData":[],
				"userRepos":[],
				"perPage": 5

			};
		}

		componentDidMount(){
			this.getUserData();
			this.getUserRepos();
		}
		onUserSearch(user){
			this.setState({userName:user}, function () {
				this.getUserData();
			this.getUserRepos();
			});
			
			

		}

		//Fetch User data from Git Hub
		getUserData(){
			$.ajax({
				url:'https://api.github.com/users/'+this.state.userName+'?client_id='+this.props.clientId + '&client_secret='+this.props.clientSecret,
				dataType:'json',
				cache:false,
				success:function(data){
					this.setState({userData:data});
				}.bind(this),
				error:function(msg){
					this.setState({userName:null});
					}.bind(this)
				});
			
		}
		//Fetch User Repository Information from Git Hub
		getUserRepos(){
			$.ajax({
				url:'https://api.github.com/users/'+this.state.userName+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId + '&client_secret='+this.props.clientSecret+'&sort=created',
				dataType:'json',
				cache:false,
				success:function(data){
					this.setState({userRepos:data});
				}.bind(this),
				error:function(msg){
					this.setState({userName:null});
					}.bind(this)
				});
		}
		render(){
			return (
				<div className="container">
					<FindBar onUserSearch = {this.onUserSearch.bind(this)}/>
					<Profile {...this.state} />	
				</div>)
		}
	}

App.propTypes = {
	clientId :React.PropTypes.string,
	clientSecret:React.PropTypes.string
}
App.defaultProps ={
	clientId:'ff705aefe3e62a3c35fb',
	clientSecret: 'c430aa1d5b4f936ab55ad7957886ce5d22cb8a5d'
};

	export default App;