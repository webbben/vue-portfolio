<template>
    <v-container fluid>
        <v-row>
            <v-col class="text-sm-center">
                <h3 class="ma-1">Resume</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2>Education</h2>
                <v-divider />
            </v-col>
        </v-row>
        <v-row 
            v-for="item in education" 
            :key="'e_' + item.university"
            class="mb-n6"
        >
            <EducationCard
                class="fadeIn"
                v-bind:university="item.university" 
                v-bind:degrees="item.degrees"
                v-bind:date="item.dates"
                v-bind:location="item.location"
            />
        </v-row>
        <v-row>
            <v-col>
                <h2>Work Experience</h2>
                <v-divider />
            </v-col>
        </v-row>
        <v-row 
            v-for="item in work" 
            :key="item.company"
            class="mb-n6"
        >
            <WorkCard
                class="fadeIn"
                v-bind:company="item.company" 
                v-bind:details="item.details"
                v-bind:date="item.dates"
                v-bind:location="item.location"
                v-bind:jobTitle="item.jobTitle"
            />
        </v-row>
    </v-container>
</template>

<script>
import EducationCard from './EducationCard.vue';
import WorkCard from './WorkCard.vue';
import resumeData from './resumeDataProvider';
import '@/styles/animations.css';

export default {
    components: {
        EducationCard,
        WorkCard
    },
    data () {
        return {
            education: resumeData.education,
            work: resumeData.work
        }
    }
}
</script>