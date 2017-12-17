<template>
    <div v-if="configuration === undefined" id="noConfig">
            :'( No config loaded. Check connection to PLC.
        </div>
    <div v-else>
        <digital-output-module
            v-for="mod in configuration.modules"
            v-bind:key="mod.name"
            v-bind:module="mod" />
    </div>
</template>

<script>
    import { mapState, } from 'vuex';
    import DigitalOutputModule from '@/components/DigitalOutputModule';

    export default {
        components: { DigitalOutputModule, },
        computed: { ...mapState([ 'configuration', ]), },
    };
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
