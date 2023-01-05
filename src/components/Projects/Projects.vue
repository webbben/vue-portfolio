<template>
    <v-container>
        <v-row>
            <v-col class="text-sm-center">
                <h1>Projects</h1>
            </v-col>
        </v-row>
        <v-row>
            <div v-for="prj in projects" :key="prj.title">
                <Project
                    class="fadeIn"
                    v-bind:title="prj.title"
                    v-bind:description="prj.desc"
                    v-bind:link="prj.link"
                    v-bind:image="prj.image"
                />
            </div>
        </v-row>
    </v-container>
</template>

<script>
import Project from './Project.vue'
import projects from './projectDataProvider'
import '@/styles/animations.css';

export default {
    components: {
        Project
    },
    data () {
        return {
            projects: projects
        }
    }
}
</script>