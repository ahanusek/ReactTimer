var React = require('react');


var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired
	},

	render: function(){
		var {countdownStatus} = this.props;

		function renderButton(){
			if(countdownStatus === "paused"){
				return <button className="button success">Start</button>
			} else if(countdownStatus === "started"){
				return <button className="button warning">Pause</button>
			}
		};

		return (
			<div className="controls-container">
				{renderButton()}
				<button className="button alert">Clear</button>
			</div>
		)
	}
});


module.exports = Controls;
