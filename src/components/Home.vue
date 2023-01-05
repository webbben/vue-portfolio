<template>
    <v-container>
        <v-row>
            <v-col class="text-sm-center">
                <h3>Home Dashboard</h3>
            </v-col>
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