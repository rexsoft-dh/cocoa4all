<template>
  <q-toolbar>
    <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer">
      <q-tooltip class="bg-black" :offset="[10, 10]">메뉴오픈</q-tooltip>
    </q-btn>

    <div class="q-ml-lg">
      <a href="https://nih.go.kr" target="_blank">
        <q-img src="/cdc_logo.gif" style="width: 150px" />
      </a>
    </div>

    <q-toolbar-title class="q-gutter-md row q-pa-md q-mx-md">
      <div>
        <span class="text-grey-10 title4">
          <!-- <a href="/">소아호흡기알레르기질환코호트<br />자료공유시스템</a> -->
          <a href="/">COCOA4ALL<br />System</a>
        </span>
      </div>
    </q-toolbar-title>

    <div class="q-gutter-xs row">
      <q-btn flat color="black" icon="notifications_active" to="/user/notification" size="md">
        <q-badge rounded color="red" label="1" />
      </q-btn>
      <q-item clickable tag="a" to="/user/profile" style="">
        <q-item-section avatar style="max-width: 50px; min-width: 0px">
          <q-avatar>
            <q-icon name="account_circle" size="md" />
            <!-- <q-btn
                flat
                color="black"
                icon="account_circle"
                to="/user/profile"
                size="lg"
              /> -->
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.username }}님</q-item-label>
          <q-item-label caption> {{ user.user_level }} </q-item-label>
        </q-item-section>
      </q-item>
      <q-btn flat color="black" icon="logout" @click="logout" size="md">
        <q-tooltip>로그아웃</q-tooltip>
      </q-btn>
    </div>
  </q-toolbar>
  <q-separator />
  <q-tabs inline-label :breakpoint="0" align="justify" indicator-color="indigo-8" active-color="black" class="bg-white text-grey">
    <q-route-tab label="서비스 이용 안내" class="title-font" to="/service_info" exact />
    <q-route-tab label="데이터 한 눈에 보기" class="title-font" to="/stat_at_a_glance" />
    <q-route-tab label="나의 연구 현황" class="title-font" to="/register1" />
    <q-route-tab label="공개 연구" class="title-font" to="/register1" />
  </q-tabs>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainHeader',

  props: ['user'],
  emits: ['toggleLeftDrawer'],

  data() {
    return {
      per_value: 30,
      version: process.env.VERSION,
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.$emit('toggleLeftDrawer');
    },
    logout() {
      // this.$emit('logout');
    },
  },
});
</script>

<style lang="sass" scoped>
a
  color: black
  text-decoration: none
.main_header_border
  border-color: #4F5A9A
  border-width: 2px
</style>
