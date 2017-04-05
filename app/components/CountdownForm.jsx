var React = require('react');


var CountdownForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var seconds = parseInt(this.refs.seconds.value, 10);
		if(typeof seconds === "number" && seconds > 0){
			this.props.onSetCountdown(seconds);
			this.refs.seconds.value = "";
		}

	},
	render: function(){
		return (
			<div className="countdown-form-container">
				<form	onSubmit={this.onFormSubmit}>
					<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
					<button className="button expanded" type="submit">Start</button>
				</form>
			</div>
		)
	}
});

module.exports = CountdownForm;
