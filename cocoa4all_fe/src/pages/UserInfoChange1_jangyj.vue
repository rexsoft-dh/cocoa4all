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
            margin: 40px 50px 0px 80px;
            padding: 50px 100px 50px 100px;
            height: auto;
            width: 70%;
            border: 1.5px solid grey;
            color: grey;
          "
        >
          <div class="container">
            <div style="height: 50px; line-height: 50px">사용자 권한</div>
            <div tabindex="0">
              <q-select
                dense
                outlined
                bg-color="grey-1"
                v-model="model"
                :options="options"
              />
            </div>
            <div><q-btn class="btn" outline>변경 요청</q-btn></div>
          </div>

          <div class="container">
            <div>할당 DB</div>
            <div>COCOA 코호트</div>
            <div></div>
          </div>

          <div class="container">
            <div>이름</div>
            <div>차민경</div>
            <div></div>
          </div>

          <div class="container">
            <div>생년월일</div>
            <div>19910928</div>
            <div></div>
          </div>

          <div class="container">
            <div>이메일 주소(ID)*</div>
            <q-input dense outlined bg-color="grey-1" />
            <div><q-btn class="btn" outline>이메일 인증</q-btn></div>
          </div>

          <div class="container">
            <div>휴대폰 번호*</div>
            <q-input dense outlined bg-color="grey-1" />
            <div><q-btn class="btn" outline>본인 인증</q-btn></div>
          </div>

          <div class="container2">
            <div>
              <div>소속 기관*</div>
              <div class="row">
                <q-input
                  dense
                  outlined
                  bg-color="grey-1"
                  style="width: 250px"
                />
                <q-btn outline class="btn">검색</q-btn>
              </div>
            </div>

            <div>
              <div>소속 기관 부서</div>
              <div><q-input dense outlined bg-color="grey-1" /></div>
            </div>
          </div>

          <div class="container2">
            <div>
              <div>직위</div>
              <q-input dense outlined bg-color="grey-1" style="width: 250px" />
            </div>

            <div>
              <div>기관(부서) 연락처</div>
              <q-input dense outlined bg-color="grey-1" />
            </div>
          </div>
        </div>
        <div>
          <q-btn
            unelevated
            style="padding: 10px 60px 10px 60px; margin: 2% 0 5% 66%"
            color="blue-6"
            text-color="white"
            label="저장"
          ></q-btn>
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
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),
      options: ["연구자", "데이터 관리자", "업로드 담당자"],
    };
  },
};
</script>

<style scoped>
.btn {
  height: 30px;
  padding: 0px 15px 0px 15px;
  margin-left: 30px;
  color: black;
  border-radius: 5px;
}

.container {
  display: grid;
  grid-template-columns: 4fr 2.5fr 2fr;
  grid-template-rows: 60px;
  justify-content: flex-start;
  margin-bottom: 15px;
  align-items: center;
}

.container2 {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 90px;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
}
</style>
