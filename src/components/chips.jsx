import React,{Component} from 'react';

class Chips extends Component{

	render(){

		return(<div className="col s3">
					<div className="chip">{this.props.item}</div>
					<div className={this.props.colorPalete}>{this.props.itemCount}</div>
				</div>)

	}
}

export default Chips