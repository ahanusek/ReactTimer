var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});


	describe('handleStatusChange', () => {
		it('should set state to started and count', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('started');

			expect(timer.state.count).toBe(0);
			expect(timer.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(timer.state.count).toBe(3);
				done();
			}, 3001);


		});

		it('should pause count on paused status', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('started');
			setTimeout(() => {
				timer.handleStatusChange('paused')
				expect(timer.state.count).toBe(3);
				expect(timer.state.countdownStatus).toBe('paused');
				done();
			}, 3001);
		});

		it('should stop count on stopped status', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('started');
			setTimeout(() => {
				timer.handleStatusChange('stopped')
				expect(timer.state.count).toBe(0);
				expect(timer.state.countdownStatus).toBe('stopped');
				done();
			}, 2001);
		});



	});
});
