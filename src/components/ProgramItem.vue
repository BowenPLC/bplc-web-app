<template>
    <div id="outer">
        <div id="inner"> {{ this.programName }} </div>
        <button v-on:click="run()">▶</button>
        <button v-on:click="stop()">◼</button>
    </div>
</template>

<script>
    import { mapGetters, } from 'vuex';
    import api from '../utils/api';

    export default {
        props: {
            programName: {
                type: String,
                required: true,
            },
        },
        methods: {
            run() {
                api.startProgram(this.programName);
            },
            stop() {
                api.stopProgram();
            },
        },
    };
</script>

<style lang="scss" scoped>
    #outer {
        width: auto;
        border: 1px solid #AAAAAA;
        background-color: #DDDDDD;
        border-radius: .5em;
        margin: 1em;
    }

    #inner {
        margin: .4em;
        font-size: 2em;
        display: inline-block;
    }

    button {
        border: 1px solid #AAAAAA;
        font-size: 1.5em;
        border-radius: .3em;
        margin-right: .5em;
        width: 2em;
    }
</style>
