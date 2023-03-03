<template>
  <q-page>
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="회원가입2" icon="widgets" />
    </q-breadcrumbs>

    <div>
    <div class="q-gutter-y-md">
      <div class="q-mt-xl">
      <q-btn-toggle
        v-model="model"
        spread
        toggle-color="light-blue-6"
        color="white"
        text-color="black"
        :options="[
          {label: '1. 약관 동의', value: 'one'},
          {label: '2. 본인인증', value: 'two'},
          {label: '3. 개인정보 입력', value: 'three'},
          {label: '4. 이메일 인증', value: 'four'},
          {label: '5. 가입신청 완료', value: 'five'}
        ]"
      />
      </div>
  </div>
   </div>

  <div class="row">
    <div class="col-1">
    </div>
    <div class="q-mt-xl">
    <div class="col">
    가입하실 사용자 권한을 선택 해주세요*
    </div>
    </div>
    <div class="col-1">
    </div>
    <div class="col">
     <div class="q-ma-lg">
      <div class="q-gutter-md row items-start">
        <q-select
          filled 
         v-model="single"
         label=""
         style="width: 250px"
         :options="[
            {label: '연구자', value: 'one'},
            {label: '관리자', value: 'two'}
          ]"
        />
    </div>
    </div>
    </div>
  </div>

<div class="row">
  <div class="col-1">
  </div>
  <div class="q-mtl-xl">
  <div class="col">
    이메일 주소(ID)*
  </div>
  </div>
</div>

<div class="row">
    <div class="col-1">
    </div>
      <div class="col-11">
        <div class="q-gutter-md" style="max-width: 450px">
          <q-input filled v-model="text" :dense="dense" />
        </div> 
      </div>
</div>

<div class="row">
    <div class="col-1">
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-mt-xl">
      비밀번호*  
      </div>
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-mt-xl">
      비밀번호 확인*
      </div>
    </div>
</div>

<div class="row">
    <div class="col-1">
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-gutter-md" style="max-width: 280px">
      <q-input filled v-model="text" :dense="dense" label="8자 이상, 문자/숫자/기호 사용" />
      </div> 
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-gutter-md" style="max-width: 280px">
      <q-input filled v-model="text" :dense="dense" label="8자 이상, 문자/숫자/기호 사용" />
      </div>
    </div>
</div>

<div class="row">
    <div class="col-1">
    </div>
    <div class="q-mt-xl">
    <div class="col-5 col-xl-auto">
      소속 기관*  
    </div>
    </div>
</div>

<div class="row">
    <div class="col-1">
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-gutter-md" style="max-width: 280px">
      <q-input filled v-model="text" :dense="dense" />
      </div> 
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-py-sm q-gutter-sm">
       <q-btn to="/start/pick-quasar-flavour" label="검색" outline color="black" />
      </div>
    </div>
</div>

<div class="row">
    <div class="col-1">
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-mt-xl">
      소속기관 부서  
      </div>
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-mt-xl">
      기관(부서) 연락처
      </div>
    </div>
</div>

<div class="row">
    <div class="col-1">
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-gutter-md" style="max-width: 280px">
      <q-input filled v-model="text" :dense="dense" />
      </div> 
    </div>
    <div class="col-5 col-xl-auto">
      <div class="q-gutter-md" style="max-width: 280px">
      <q-input filled v-model="text" :dense="dense" />
      </div>
    </div>
</div>


<div class="row">
    <div class="col-5">
    </div>
    <div class="col-2 col-xl-auto">
      <div class="q-mt-lg q-gutter-sm">
       <q-btn no-caps color="light-blue-6" label="다음" />
      </div> 
    </div>
    <div class="col-5">
    </div>
</div>




  </q-page>
</template>

<script>
import { defineComponent,ref } from "vue";

export default defineComponent({
  data() {
    return {};
  },

  methods: {},

  setup () {
    return {
      single: ref(null),
      
      options: [
        '연구자', '관리자'
      ]
    }
  }

});

</script>
