<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white" height-hint="98">
      <MainHeaderMenu :prop_userinfo="userinfo" />
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-item-label header> Essential Links </q-item-label>

      <EssentialLink />
    </q-drawer>

    <q-page-container class="q-ma-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import MainHeaderMenu from "components/MainHeaderMenu.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    MainHeaderMenu,
  },

  data() {
    return {
      userinfo: {
        userID: "gildong",
        username: "Hong Gildong",
        affiliation: "RexSoft",
      },
      leftDrawerOpen: false,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },

  setup() {
    return {
      essentialLinks: linksList,
    };
  },
});
</script>
