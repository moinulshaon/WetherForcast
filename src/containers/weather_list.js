import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    rendererWeather (cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td className="chart-container">
                    <Chart data={temps} color="blue" units="K"/>
                </td>
                <td className="chart-container">
                    <Chart data={pressures} color="red" units="hPa"/>
                </td>
                <td className="chart-container">
                    <Chart data={humidities} color="green" units="%"/>
                </td>
            </tr>
        );
    }
    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temparature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.rendererWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps (state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);
