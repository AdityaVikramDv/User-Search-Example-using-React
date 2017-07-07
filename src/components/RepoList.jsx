import React,{Component} from 'react';

class RepoList extends Component{
	
    render(){
        return (<div>
            <ul>
                {
                    this.props.userRepos.map(function(repo){
                        return (<li key={repo.id}> {repo.name} </li>)
                    })
                }
            </ul>
        </div>);
    }
}


export default RepoList;