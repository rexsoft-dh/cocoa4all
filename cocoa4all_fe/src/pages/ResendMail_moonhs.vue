<template>
    <q-page>
      <q-breadcrumbs class="text-brown">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary" />
        </template>
  
        <q-breadcrumbs-el label="> 인증메일 다시보내기" />
      </q-breadcrumbs>

      <div class="text-center"> 
        <br /><br /><br /><br /><br />
        입력하신 이메일 주소는 xxx@xxx.xxx 입니다. <br />
        이메일 주소를 다시 확인해보시고, 스팸메일함도 확인해보세요.<br />
        <br /><br /><br /><br /><br />
        <q-btn color="primary" label="인증이메일 다시보내기" />
          <br /><br />
        <q-btn color="primary" label=" 이메일 주소 변경하기  " />
        </div>
    </q-page>
    
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {};
    },
  
    methods: {},
  });
  </script>
  