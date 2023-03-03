<template>
  <div>
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <a href="/">모두의 코코아</a>
      </q-toolbar-title>
      <div>사용자: {{ userID }}</div>
    </q-toolbar>

    <q-tabs align="center">
      <q-route-tab to="/login" label="로그인" />
      <q-route-tab to="/register1" label="회원가입1" />
      <q-route-tab to="/register2" label="회원가입2" />
      <q-route-tab to="/register3" label="회원가입3" />
      <q-route-tab to="/userinfo1" label="회원정보 수정1" />
      <q-route-tab to="/userinfo2" label="회원정보 수정2" />
      <q-route-tab to="/admin/userlist" label="가입신청 리스트" />
      <q-route-tab to="/admin/userdetail" label="신청자 상세 정보" />
      <q-route-tab to="/admin/searchuser" label="회원검색" />
      <q-route-tab to="/admin/serachdata" label="데이터검색" />
    </q-tabs>
  </div>
</template>

<script>
export default {
  props: ["prop_userinfo"],

  data() {
    return {
      userID: this.prop_userinfo.userID,
    };
  },
};
</script>

<style lang="scss" scoped></style>
