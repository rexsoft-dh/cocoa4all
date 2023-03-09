<template>
  <q-layout view="hHh Lpr lFf">
    <!-- <q-header bordered class="bg-primary text-white" height-hint="98"> -->
    <q-header bordered class="bg-white text-black main_header_border">
      <MainHeader :user="userinfo" @toggleLeftDrawer="toggleLeftDrawer" />
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :breakpoint="600" :width="230">
      <MainLeftDrawer />
    </q-drawer>

    <q-page-container>
      <div class="q-ma-lg">
        <router-view />
      </div>
      <div class="q-mt-xl">
        <MainFooter />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import MainHeader from 'components/MainHeader.vue';
import MainLeftDrawer from 'components/MainLeftDrawer.vue';
import MainFooter from 'components/MainFooter.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    MainHeader,
    MainFooter,
    MainLeftDrawer,
  },

  data() {
    return {
      userinfo: {
        userID: 'gildong',
        username: 'Hong Gildong',
        affiliation: 'RexSoft',
      },
      leftDrawerOpen: false,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>

<style lang="sass"></style>
