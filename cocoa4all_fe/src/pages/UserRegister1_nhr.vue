<template>
  <!-- 작성: 남혜령 -->
  <q-page>
    <PageTitle :title="'회원가입'" :pathdata="[{ label: '회원가입', to: '/register' }]" />

    <div class="q-gutter-md" style="display: flex; justify-content: center">
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <q-step :name="1" title="1. 약관동의" :done="step > 1" style="width: 1120px">
          <div class="q-mx-sm">
            <p class="text-primary text-weight-bolder">> 개인정보 수집 및 이용에 대한 안내</p>
            <div class="row items-start example-container">
              <div class="example-cell" tabindex="0">
                ● 수집하는 개인정보의 항목 <br /><br />
                가. 질병관리청은 COCOA DB(가칭)의 원활한 운영 및 관리를 위해 최초 사용자가입 당시 아래와 같은 개인정보를 수집하고 있습니다.
                <br />
                - 필수항목 : 성명, 소속기관명, 이메일, 휴대전화번호 <br />
                - 선택항목 : 소속기관부서, 연락처 <br />
                나. 서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다. <br />
                - IP Address, 방문일시, 웹브라우저 종류, OS종류 <br /><br />

                ● 개인정보와 수집 및 이용 목적 <br /><br />
                가. 소아호흡기, 알레르기질환 통합 정보 포털 서비스 이용 권한 승인 <br />
                나. 소아호흡기, 알레르기질환 통합 데이터 관리 <br />
                다. 업무 활용(설문 조사 등) <br /><br />

                ● 개인정보의 보유 및 이용기간 <br /><br />
                등록된 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지페 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
                <br />
                - 사용자 승인 반려 및 승인기간 종료 시 보존 개인정보 <br />
                ① 보존항목 : 성명, 휴대폰번호, 소속기관명, 이메일, 소속기관부서, 연락처 <br />
                ② 보존사유 : 반려 사용자의 재가입 방지, 종료 후 서비스 재이용
                <br />
                ③ 보존기간 : 승인 반려일, 승인기간 종료일로부터 1년
                <br /><br />
                ● 권리 <br />
                원칙적으로 개인정보 보호법에 의해 개인정보 수집 동의를 거부할 권리가 있으며, 수집 동의 거부 시에는 COCOA DB(가칭)의 이용이 불가합니다.
              </div>
            </div>
            <div class="q-mb-lg" style="float: right">
              <div class="q-mt-sm q-mr-xl q-mb-sm">
                <q-checkbox v-model="teal" size="xs" color="primary" label="위의 '개인정보 수집 및 이용에 대한 안내'에 동의합니다." />
              </div>
              <div class="q-mr-sm">
                <q-btn v-if="teal == false" class="q-px-xl q-py-xs" color="grey-5" label="다음" style="float: right" />
                <q-btn v-if="teal == true" class="q-px-xl q-py-xs" color="primary" label="다음" style="float: right" to="./register2" />
              </div>
            </div>
          </div>
        </q-step>

        <q-step :name="2" title="2. 본인인증" :done="step > 2" style="width: 1120px"> </q-step>
        <q-step :name="3" title="3. 개인정보 입력" :done="step > 3" style="width: 1120px"> </q-step>
        <q-step :name="4" title="4. 이메일 인증" :done="step > 4" style="width: 1120px"> </q-step>
        <q-step :name="5" title="5. 가입신청 완료" style="width: 1120px"> </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import PageTitle from 'components/PageTitle.vue';

export default {
  components: {
    PageTitle,
  },

  setup() {
    return {
      step: ref(1),
      teal: ref(false),
    };
  },
};
</script>

<style lang="sass" scoped>
.example-container
  .example-cell
    margin: 2px
    padding: 4px 8px
    box-shadow: inset 0 0 0 1.5px $grey-6
</style>
