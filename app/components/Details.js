var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils/utils');
var DayItem = require('./DayItem');
var convertTemp = utils.convertTemp;

var styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 1200,
        margin: '50px auto'
    },
    descriptionContainer: {
        fontSize: 34,
        fontWeight: 100,
        maxWidth: 400,
        margin: '0 auto',
        textAlign: 'center'
    }
}

function Details(props) {
    return (
        <div style={styles.container}>
            <DayItem day={props.weather} />
            <div style={styles.descriptionContainer}>
                <p>{props.city}</p>
                <p>{props.weather.weather[0].description}</p>
                <p>min temp: {convertTemp(props.weather.temp.min)} degrees</p>
                <p>max temp: {convertTemp(props.weather.temp.max)} degrees</p>
                <p>humidity: {props.weather.humidity}</p>
            </div>
        </div>
    )
}

Details.propTypes = {
    weather: PropTypes.object.isRequired,
    city: PropTypes.string.isRequired
}

module.exports = Details;