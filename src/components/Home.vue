<template>
    <v-container>
        <v-row>
            Home
        </v-row>
        <v-row>
            <WeatherApp />
        </v-row>
    </v-container>
</template>

<script>

import WeatherApp from './WeatherApp/WeatherApp.vue';

export default {
    components: {
        WeatherApp
    }
}

</script>