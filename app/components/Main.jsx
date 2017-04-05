var React = require('react');
var Nav = require('Nav');


var Main = props => {
	return (
		<div>
			<div>
				<div>
					<Nav></Nav>
					<div className="row">
						<div className="medium-6 medium-offset-3 columns">
							{props.children}
						</div>
					</div>

				</div>

			</div>
		</div>
	);
}

module.exports = Main;
