<template>
    <v-card dark class="fadeIn ma-2">
        <div v-if="loading">
            <v-progress-circular
                indeterminate
            />
        </div>

        <div v-if="weather">
            <v-card-title>Madison, WI</v-card-title>
            <v-card-subtitle>{{this.weather}}</v-card-subtitle>
            <v-card-text>{{this.temp}}</v-card-text>
        </div>
        
    </v-card>
</template>

<script>

import loadWeatherData from '@/components/WeatherApp/weatherDataProvider';
import '@/styles/animations.css'


export default {
    data () {
        return {
            loading: false,
            weather: String,
            temp: Number,
            image: String,
        }
    },
    methods: {
        async loadWeather(units) {
            this.loading = true
            const weatherData = await loadWeatherData(units)
            this.weather = weatherData.weather
            this.temp = weatherData.temp
            console.log(weatherData)
            this.loading = false
        }
    },
    mounted() {
        this.loadWeather("F")
    }
}

</script>