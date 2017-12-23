<template>
    <div>
        <div v-if="programs === undefined" id="noConfig">
            :'( No programs loaded. Check connection to PLC.
        </div>
        <div v-else id="programsListContainer">
            <program-item v-for="(item, index) in this.programs"
                v-bind:key="index"
                v-bind:programName="item" />
        </div>
    </div>
</template>

<script>
    import { mapState, } from 'vuex';
    import ProgramItem from '@/components/ProgramItem';

    export default {
        components: { ProgramItem, },
        computed: {
            ...mapState([ 'programs', ]),
        },
        data() {
            return {};
        },
    };
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
