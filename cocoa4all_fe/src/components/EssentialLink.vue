<template>
  <q-list bordered separator>
    <q-item clickable v-ripple to="/login">
      <q-item-section> 로그인 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/register1">
      <q-item-section> 회원가입1 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/register2">
      <q-item-section> 회원가입2 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/register3">
      <q-item-section> 회원가입3 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/userinfo1">
      <q-item-section> 회원정보 수정1 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/userinfo2">
      <q-item-section> 회원정보 수정2 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/admin/userlist">
      <q-item-section> 가입신청 리스트 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/admin/userdetail">
      <q-item-section> 신청자 상세 정보 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/admin/searchuser">
      <q-item-section> 회원검색 </q-item-section>
    </q-item>
    <q-item clickable v-ripple to="/admin/serachdata">
      <q-item-section> 데이터검색 </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
});
</script>
