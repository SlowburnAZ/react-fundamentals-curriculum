var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var getForecast = require('../utils/weatherhelpers').getForecast;
var getCurrentWeather = require('../utils/weatherhelpers').getCurrentWeather;

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDefaultProps: function() {
        return {
            direction: 'column'
        }
    },
    propTypes: {
        direction: PropTypes.string
    },
    getInitialState: function() {
        return {
            city: ''
        }
    },
    handleSubmitCity: function() {
        console.log(this.state.city);
        //getForecast(this.state.city);
        //getCurrentWeather(this.state.city);
        this.context.router.push({
            pathname: 'forecast/' + this.state.city
        });
    },
    handleUpdateCity: function(e) {
        this.setState({
            city: e.target.value
        });
    },
    render: function() {
        return (
            <GetCity
                direction={this.props.direction}
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                city={this.state.city} />
        )
    }
});

module.exports = GetCityContainer;