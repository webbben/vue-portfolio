<template>
    <v-card 
        class="ma-2" 
        dark 
        :href="link"
        max-height="300px"
        max-width="300px"
    >
        <v-card-title>{{title}}</v-card-title>
        <v-img
            :src="image"
            max-height="150"
            max-width="150"
            class="ma-1"
        ></v-img>
        <v-card-text>{{description}}</v-card-text>
    </v-card>
</template>

<script>

export default {
    props: {
        link: String,
        title: String,
        description: String,
        image: String
    }
}
</script>