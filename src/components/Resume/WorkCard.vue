<template>
    <v-container fluid>
        <v-card 
            dark 
            class="pa-3" 
            elevation="6"
        >
            <v-row class="mb-1">
                <v-col>
                    <span class="title">{{company}}</span><span class="body-text">, {{location}}</span>
                    <p>{{jobTitle}}</p>
                </v-col>
                <v-col>
                    <p class="body-text dates">{{date.start}} - {{date.end}}</p>
                </v-col>
            </v-row>
            <v-row v-for="detail in details" :key="detail" class="my-n7">
                <v-col>
                    <p class="body-text">{{detail}}</p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>

export default {
    props: {
        company: String,
        date: { start: String, end: String },
        details: Array,
        jobTitle: String,
        location: String
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