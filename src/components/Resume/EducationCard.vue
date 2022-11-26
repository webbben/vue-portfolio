<template>
    <v-container fluid>
        <v-card 
            dark 
            class="pa-3" 
            elevation="6"
        >
            <v-row class="mb-1">
                <v-col>
                    <span class="title">{{university}}</span><span class="body-text">, {{location}}</span>
                </v-col>
                
                <v-col>
                    <p class="body-text dates">{{date.start}} - {{date.end}}</p>
                </v-col>
            </v-row>
            <v-row v-for="degree in degrees" :key="degree" class="my-n7">
                <v-col>
                    <p class="body-text">{{degree}}</p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>

export default {
    props: {
        university: { required: true, type: String },
        location: { required: true, type: String },
        degrees: { required: true, type: Array },
        date: { required: true, start: String, end: String }
    }
}

</script>

<style scoped>
.body-text {
    color: lightgray;
    font-size: 14px;
}

.dates {
    text-align: right;
}
</style>