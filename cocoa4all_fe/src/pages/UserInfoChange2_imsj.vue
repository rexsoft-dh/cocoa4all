<template>
  <q-page>
    <div
      style="
        margin-left: 50px;
        height: auto;
        width: 100%;
        border-bottom: 3px solid lightgrey;
      "
    >
      <h5 class="q-mb-sm text-weight-bolder">회원정보 수정</h5>
    </div>

    <div class="row">
      <div style="margin: 40px 0px 0px 80px; width: 150px; text-align: center">
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section>기본정보</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>비밀번호 변경</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>회원 탈퇴</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col">
      <div
          style="
            margin: 100px 50px 100px 80px; 
            padding: 200px 200px 200px 200px;
            height: auto;
            width: 90%;
            border: 1.5px solid grey;
            color: grey;
          "
        
        >
        <div class="q-pa-md">
        
          기존 비밀번호*
          <q-space></q-space>
          <q-input square outlined v-model="password" label="8자이상, 문자/숫자/기호 사용" filled :type="isPwd ? 'password' : 'text'" >
             </q-input>
          
        </div>

        <div class="q-pa-md">
        신규 비밀번호*
          <q-space></q-space>
          <q-input square outlined v-model="password" label="8자이상, 문자/숫자/기호 사용" filled :type="isPwd ? 'password' : 'text'" >
             </q-input>
        </div>

        <div class="q-pa-md">
          신규 비밀번호 확인*
          <q-space></q-space>
          <q-input square outlined v-model="password" label="8자이상, 문자/숫자/기호 사용" filled :type="isPwd ? 'password' : 'text'" >
             </q-input>
            
        </div>
        <div class="flex flex-center">
          <q-btn color="primary" label="저장" />

        </div>
      </div>
      
       </div>
    </div>
    
   
  
    <div>
      <q-footer
        class="bg-grey-4 bottom"
        style="
          color: black;
          height: 70px;
          text-align: center;
          line-height: 70px;
          font-size: large;
          font-weight: bold;
        "
      >
        Footer
      </q-footer>
    </div>
  </q-page>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'sjimPage2'
})
</script>
