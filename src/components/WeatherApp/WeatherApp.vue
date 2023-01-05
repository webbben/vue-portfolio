<template>
    <v-card dark class="fadeIn ma-2">
        <v-container>
            <div v-if="loading">
            <v-progress-circular
                indeterminate
            />
            </div>

            <div v-if="!loading">
                <v-row>
                    <v-col>
                        <span class="title">Madison, WI</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>{{this.weather}}</v-col>
                    <v-col>
                        <v-icon large>{{this.icon}}</v-icon>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span>{{this.temp}} °F</span>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        
        
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
            icon: String,
        }
    },
    methods: {
        async loadWeather(units) {
            this.loading = true
            const weatherData = await loadWeatherData(units)
            this.weather = weatherData.weather
            this.temp = weatherData.temp
            this.icon = weatherData.icon
            console.log(weatherData)
            this.loading = false
        }
    },
    mounted() {
        this.loadWeather("F")
    }
}

</script>