<template>
    <div id="outer">
        <div v-bind:class="this.style"
             v-on:click="toggle()" />
    </div>
</template>

<script>
    import { mapGetters, } from 'vuex';

    export default {
        props: {
            moduleName: {
                type: String,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            },
        },
        computed: {
            ...mapGetters([ 'getIO', ]),
            style() {
                return this.getIO(this.moduleName, this.index) ? 'high' : 'low';
            },
        },
        methods: {
            toggle() {
                const newState = !this.getIO(this.moduleName, this.index);
                this.$store.dispatch('setIOState', [ this.moduleName, this.index, newState, ]);
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #outer {
        border: 2px solid #000000;
        margin: .25em;
    }

    #outer > div {
        width: 2em;
        height: 2em;
    }

    .high {
        background-color: #FF0000;
    }

    .low {
        background-color: #636363;
    }
</style>
