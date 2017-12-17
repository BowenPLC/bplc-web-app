<template>
    <div id="app">
        <div>
            <div class="masthead">Bowen PLC</div>
        </div>
        <div id="contentContainer">
            <div id="tabsBar">
                <div id="tabsContainer">
                    <button v-on:click="switchTab('IO')" v-bind:class="activeTabStyle('IO')">I/O</button>
                    <button v-on:click="switchTab('Configuration')" v-bind:class="activeTabStyle('Configuration')">Configuration</button>
                    <button v-on:click="switchTab('Programs')" v-bind:class="activeTabStyle('Programs')">Programs</button>
                </div>
            </div>
            <div id="mainContent">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, } from 'vuex';

    export default {
        methods: {
            activeTabStyle: function(tabName) {
                return this.$route.name === tabName ? 'selectedTab' : 'unselectedTab';
            },
            switchTab: function(tabName) {
                this.$router.push(tabName);
            },
            ...mapActions([ 'getConfig', 'getCompleteIOMap', ]),
        },
        mounted() {
            let gotInitialState = false;
            setInterval(() => {
                this.getCompleteIOMap();
                if (!gotInitialState) {
                    gotInitialState = true;
                    this.getConfig();
                }
            }, 150);
        },
        data() {
            return { route: this.$route, };
        },
    };
</script>

<style lang="scss">
    $main-background-color: #F0F0F0;

    #app {
        background-color: rgb(0, 0, 202);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .masthead {
        font-weight: bold;
        font-size: 3em;
        font-family: Impact;
        color: white;
        margin-left: 1em;
    }

    #tabsBar {
        background-color: #5555FF;
        flex: 0 1 auto;
    }

    #tabsContainer {
        margin-left: 1em;
        vertical-align: bottom;
    }

    #tabsContainer > button {
        border: none;
        font-size: 1.5em;
    }

    #tabsContainer > button:focus {
        outline: 0;
    }

    #contentContainer {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .unselectedTab {
        background-color: #5555FF;
        color: white;
    }

    .selectedTab {
        background-color: $main-background-color;
        border-radius: .5em .5em 0 0;
    }

    #mainContent {
        background-color: $main-background-color;
        flex: 1 1 auto;
    }

    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
</style>
