<template>
  <q-page>
    <PageTitle :title="'로그인'" :pathdata="[{ label: '로그인', to: '/signin' }]" />

    <div class="q-gutter-md" style="display: flex; justify-content: center">
      <q-card flat square class="my-card-container">
        <q-card-section class="q-pb-none">
          <h5 class="text-h5 text-weight-bolder text-primary text-center q-my-md">로그인</h5>
          <q-form>
            <q-input square outlined v-model="email" type="email" label="ID(Email)" bg-color="white" />
            <q-card-actions vertical align="right">
              <q-checkbox v-model="rememberMe" label="아이디 기억하기" />
            </q-card-actions>
            <q-input square outlined v-model="password" type="password" label="Password" bg-color="white" />
          </q-form>
          <div v-if="loginStatus === 'error'">
            <q-card-actions vertical align="right">
              <div class="text-red text-bold">입력하신 정보가 올바르지 않습니다.</div>
            </q-card-actions>
          </div>
          <br />
          <q-btn square unelevated color="primary" size="lg" class="full-width" label="로그인" @click="login" />
          <div v-if="loginStatus === 'success'"></div>
          <q-breadcrumbs class="q-pa-md q-gutter-sm" separator="">
            <q-breadcrumbs-el color="primer" label="회원가입" to="register1" />
            <q-breadcrumbs-el color="primer" label="" to="#" />
            <q-breadcrumbs-el label="ID찾기" to="UserInfoChange1" />
            <q-breadcrumbs-el label="/PASSWORD 재설정" to="UserInfoChange2" />
          </q-breadcrumbs>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import PageTitle from 'components/PageTitle.vue';

export default defineComponent({
  name: 'SigninPage',

  components: {
    PageTitle,
  },

  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      loginStatus: '',
    };
  },

  methods: {
    rememberEmail() {
      if (this.rememberMe) {
        localStorage.setItem('email', this.email);
      } else {
        localStorage.removeItem('email');
      }
    },

    login() {
      // TODO: Perform actual authentication here
      localStorage.setItem('email', this.email);
      localStorage.setItem('rememberMe', this.rememberMe);

      if (this.email === 'admin' && this.password === 'password') {
        this.loginStatus = 'success';
        this.$router.push('IndexPage');
      } else {
        this.loginStatus = 'error';
      }
    },
  },

  created() {},

  mounted() {
    // 이메일 기억하기 체크박스 상태 확인
    this.rememberMe = localStorage.getItem('rememberMe') || false;
    // 이메일 기억하기 체크박스 체크 여부에 따라 이메일 필드 값 설정
    this.email = this.rememberMe ? localStorage.getItem('email') || '' : '';
  },

  setup() {},
});
</script>

<style lang="sass">
.my-card-container
  display: flex
  justify-content: center
  align-items: center
  width: 70%
  height: 100%
  background-color: #ebebeb
</style>
