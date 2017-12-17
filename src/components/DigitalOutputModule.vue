<template>
    <div id="main">
        <div id="name"><div>{{ name }}</div></div>
        <div>
            <div id="outputsWrapper">
                <div id="outputsContainer">
                    <digital-output-item
                        v-for="(item, index) in Array(this.module.size)"
                        v-bind:key="index"
                        v-bind:moduleName="name"
                        v-bind:index="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DigitalOutputItem from '@/components/DigitalOutputItem';

    export default {
        components: { DigitalOutputItem, },
        props: {
            module: {
                type: Object,
                required: true,
            },
        },
        computed: {
            name() {
                return this.module.name;
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $background-color: #D0D0D0;

    #outputsWrapper {
        background-color: $background-color;
        display: inline-block;
        border-radius: 0em .5em .5em .5em;
    }

    #outputsContainer {
        display: flex;
        margin: .5em;
    }

    #main {
        margin: 3em;
    }

    #name {
        background-color: $background-color;
        display: inline-block;
        font-size: 1.5em;
        border-radius: .5em .5em 0 0;
    }

    #name > div {
        margin: .5em;
    }
</style>
