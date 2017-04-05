var React = require('react');


var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},
	onStatusChange: function(newStatus){
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	render: function(){
		var {countdownStatus} = this.props;

		var renderButton = () => {
			if(countdownStatus !== "started"){
				return <button className="button success" onClick={this.onStatusChange('started')} >Start</button>
			} else {
				return <button className="button warning" onClick={this.onStatusChange('paused')} >Pause</button>
			}
		};

		return (
			<div className="controls-container">
				{renderButton()}
				<button className="button alert" onClick={this.onStatusChange('stopped')} >Clear</button>
			</div>
		)
	}
});


module.exports = Controls;
