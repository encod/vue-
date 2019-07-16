<template lang="html">
    <div id="app" :class="appLoadedClass">
        <aca-header>
            <span v-show="showLeft" slot="left">
                <component :is="headerLeftBackBtn"></component>
            </span>
            <span v-show="!hasSearch" slot="title">{{ title }}</span>
            <div v-show="hasSearch" slot="search" class="searchWrap">
                <component :is="searchInput"></component>
            </div>
            <span v-show="showRight" slot="right">
                <component :is="headerRightBtn"></component>
            </span>
        </aca-header>
        <div class="mainBox">
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive" class="academyContent" @setHeader="setHeader"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" class="academyContent" @setHeader="setHeader"></router-view>
            </transition>
            <!-- <transition>
            </transition> -->
        </div>
    </div>
</template>

<script lang="babel">
import _ from 'lodash'
import router from './router'
import Header from './components/Header.vue'

const headerLeftPlaceholder = {
    template: '<span v-on:click="back" class="backBtn">&nbsp;</span>',
    methods: {
        back () {
            router.back()
        }
    }
}
export default {
    name: 'App',
    data () {
        return {
            title: '',
            headerLeftBackBtn: headerLeftPlaceholder,
            showLeft: false,
            hasSearch: false,
            searchInput: null,
            showRight: false,
            headerRightBtn: null,
            appLoadedClass: '',
        }
    },
    components: {
        acaHeader: Header,
    },
    mounted () {
        this.appLoadedClass = 'appLoaded'
    },
    methods: {
        setHeader (config) {
            _.extend(this, {
                title: '',
                headerLeftBackBtn: headerLeftPlaceholder,
                showLeft: true,
                hasSearch: false,
                showRight: false,
                headerRightBtn: null,
            }, config)
        },
    }
}
</script>
<style src="@/assets/styles/app.styl" lang="stylus"></style>
