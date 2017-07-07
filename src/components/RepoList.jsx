import React,{Component} from 'react';

class RepoList extends Component{
	
    render(){
        return (
        <div className="row">
           <ul className="collection with-header">
                <li className="collection-header"><h4>Repositories</h4></li>
                {
                    this.props.userRepos.map(function(repo){
                        return (<li key={repo.id} className="collection-item">{repo.name} </li>)
                    })
                }
        
            </ul>
        </div>)
    }
}


export default RepoList;