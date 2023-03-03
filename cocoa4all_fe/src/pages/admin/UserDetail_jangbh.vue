<template>
  <q-page
    ><div class="q-px-md">
      <q-bar class="bg-white"
        ><q-space />
        <q-btn
          flat
          class="q-ma-md text-subtitle2 text-weight-bold"
          outline
          style="color: #363636"
          icon-right="logout"
          label="관리자 페이지 나가기"
        />
      </q-bar>
    </div>
    <div class="q-ml-sm">
      <q-breadcrumbs class="text-dark">
        <template v-slot:separator>
          <q-icon size="2em" name="chevron_right" color="dark" />
        </template>

        <q-breadcrumbs-el
          class="text-weight-bolder text-dark text-h6"
          label="회원관리"
        />
        <q-breadcrumbs-el
          class="text-weight-bolder text-h6"
          label="신청자 상세 정보"
        />
      </q-breadcrumbs>
      <div class="q-ma-sm"></div>
      <div style="margin: 40px 80px; height: auto; width: 84%">
        <q-card flat bordered class="my-card bg-grey-4" style="height: 600px">
          <div class="row">
            <div class="col">
              <q-card-section>
                <div class="text-h6 text-weight-bolder">계정 정보</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div class="col">이메일 주소(계정)</div>
                        <div class="col">
                          abc@naver.com
                          <q-btn
                            dense
                            unelevated
                            color="grey-7"
                            label="인증완료"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">비밀번호</div>
                        <div class="col">
                          <q-input
                            class="bg-white"
                            borderless
                            dense
                            outlined
                            standout
                            v-model="text"
                            placeholder="비밀번호 변경"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">가입일자</div>
                        <div class="col">2021-08-23</div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </div>
            <q-separator vertical inset />
            <div class="col">
              <q-card-section>
                <div class="text-h6 text-weight-bolder">
                  빈칸으로 두는 법 찾기
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div class="col">사용자 구분</div>
                        <div class="col">연구원</div>
                      </div>
                      <div class="row">
                        <div class="col">할당 DB</div>
                        <div class="col">없음</div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>

          <q-separator inset />
          <div class="row">
            <div class="col">
              <q-card-section>
                <div class="text-h6 text-weight-bolder">인증 정보</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div class="col">이름</div>
                        <div class="col">김영희</div>
                      </div>
                      <div class="row">
                        <div class="col">생년월일</div>
                        <div class="col">1991-09-28</div>
                      </div>
                      <div class="row">
                        <div class="col">성별</div>
                        <div class="col">여</div>
                      </div>
                      <div class="row">
                        <div class="col">휴대폰 번호</div>
                        <div class="col">
                          010-1234-5789<q-btn
                            dense
                            unelevated
                            color="grey-7"
                            label="인증완료"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </div>
            <q-separator vertical inset />
            <div class="col">
              <q-card-section>
                <div class="text-h6 text-weight-bolder">
                  개인 정보(직접 입력)
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="q-pa-md">
                  <div class="row">
                    <div class="col">
                      <div class="row">
                        <div class="col">소속기관</div>
                        <div class="col">분당 서울대학교병원</div>
                      </div>
                      <div class="row">
                        <div class="col">부서</div>
                        <div class="col">소화기내과</div>
                      </div>
                      <div class="row">
                        <div class="col">부서(소속기관) 연락처</div>
                        <div class="col">-</div>
                      </div>
                      <div class="row">
                        <div class="col">직위</div>

                        <div class="col">PhD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>

          <q-separator inset />
          <q-card-section class="q-pt-none">
            <div class="q-pa-md">
              <div class="text-h6 text-weight-bolder">
                <div class="row">
                  <div class="col">승인 내용</div>

                  <div class="col">
                    <div class="col">신규가입</div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="row">
        <div class="col-3">
          <div style="margin: 0px 80px">
            <q-btn
              class="text-subtitle2 text-weight-bold"
              outline
              style="color: #54e3ff"
              label="목록
    "
              to="userlist"
            />
          </div>
        </div>
        <div class="col-6"></div>

        <div class="col-1">
          <div class="row">
            <q-btn round color="indigo-10" icon="done"></q-btn>
            <div>승인</div>
          </div>
        </div>
        <div class="col-1">
          <div class="row">
            <q-btn round color="red" icon="close" />
            <div>반려</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script></script>

<style></style>
