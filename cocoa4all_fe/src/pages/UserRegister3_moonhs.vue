<template>
  <q-page>
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="회원가입3" icon="widgets" />
    </q-breadcrumbs>

    
      <!-- <q-tab-panel class="text-center">
            <div class="text-h6"></div>
            인증메일이 xxx@xxx.xxx (으)로 전송되었습니다. <br />
            받으신 이메일을 열어 버튼을 클릭하면 인증이 완료됩니다. <br /> 
            (이메일 화면은 새창으로 열어주세요.) <br /> 
            아래 버튼을 눌러 회원가입을 마쳐주세요. <br /> 
      </q-tab-panel> -->

    <div class="q-pa-md">
     <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="1. 약관동의"
        :done="step > 1"
        :header-nav="step > 1"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="2. 본인인증"
        :done="step > 2"
        :header-nav="step > 2"
      >
        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="3. 개인정보 입력"
        :done="step > 3"
        :header-nav="step > 3"
      >
        <q-stepper-navigation>
          <q-btn @click="() => { done3 = true; step = 4 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="4. 이메일 인증"
        :done="step > 4"
        :header-nav="step > 4" class="text-center">
            <br /><br /><br />
            인증메일이 xxx@xxx.xxx (으)로 전송되었습니다. <br />
            받으신 이메일을 열어 버튼을 클릭하면 인증이 완료됩니다. <br /> 
            (이메일 화면은 새창으로 열어주세요.) <br /> 
            아래 버튼을 눌러 회원가입을 마쳐주세요. <br /><br /> 

        <q-stepper-navigation>
          <q-btn @click="() => { done4 = true; step = 5 }" color="primary" label="이메일인증완료" />
        </q-stepper-navigation>
        <br /><br /><br />
            이메일이 확인되지 않나요?<br />
            스팸편지함 확인 또는 <a href="/resend">인증메일 다시 보내기</a>
        <br /><br /><br />
      </q-step>

      <q-step
        :name="5"
        title="5. 가입신청 완료"
        :done="step > 5"
        :header-nav="step > 5"
      >

        <q-stepper-navigation>
          <q-btn color="primary" @click="done5 = true" label="가입신청 완료" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>

  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      step: ref(4)
    }
  }
}
</script>

