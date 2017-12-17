<template>
    <div>
        <div v-if="configuration === undefined" id="noConfig">
            :'( No config loaded. Check connection to PLC.
        </div>
        <div v-else id="configJson">
            <pre>{{ formattedConfig }}</pre>
        </div>
    </div>
</template>

<script>
    import { mapState, } from 'vuex';

    export default {
        computed: {
            ...mapState([ 'configuration', ]),
            formattedConfig: function() {
                return JSON.stringify(this.configuration, undefined, 4);
            },
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    #noConfig {
        font-weight: bold;
        font-size: 2em;
        margin: 1em;
    }

    #configJson {
        width: auto;
        border: 1px solid #AAAAAA;
        background-color: #DDDDDD;
        border-radius: .5em;
        margin: 1em;
    }

    #configJson > pre {
        margin: 1em;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
</style>
