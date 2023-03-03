<template>
  <q-page>
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="가입 신청 리스트" icon="widgets" />
    </q-breadcrumbs>
    <a class="title_font">회원관리 > 가입 신청 리스트</a>
    <div class="search">
      <input type="text" placeholder="검색어 입력">
      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png">
    </div>
    <section class="main">
      <h1 class="d-none">게시판</h1>
        <div class="board">

          <table class="table">

            <thead class="thead">

                <tr>

                    <td>NO</td>

                    <td>신청일자</td>

                    <td>이름</td>

                    <td>소속</td>

                    <td>사용자 구분</td>

                    <td>요청사항</td>

                    <td>확인</td>

                    <td>결과</td>

                </tr>

            </thead>

            <tbody class="tbody">

                <tr>

                    <td>10</td>

                    <td>2021-08-23 14:20:00</td>

                    <td>김OO</td>

                    <td>서울대학교병원</td>

                    <td>연구자</td>

                    <td>신규가입</td>

                    <td><a style="color: blue;">v</a>
                    <b style="color: red;"> x </b></td>

                    <td> </td>

                    </tr>
                    <tr>


                    <td>9</td>

                    <td>2021-08-22 14:20:00</td>

                    <td>이OO</td>

                    <td>서울아산병원</td>

                    <td>업로드 담당자</td>

                    <td>신규가입</td>

                    <td>v x</td>

                    <td>승인</td>

                    </tr>
                    <tr>


                    <td>8</td>

                    <td>2021-08-21 14:20:00</td>

                    <td>김OO</td>

                    <td>(주)질병관리</td>

                    <td>연구자</td>

                    <td>신규가입</td>

                    <td><a style="color: blue;">v</a>
                    <b style="color: red;"> x </b></td>

                    <td> </td>
                    
                    </tr>
                    <tr>


                    <td>7</td>

                    <td>2021-08-20 14:20:00</td>

                    <td>이OO</td>

                    <td>(주)에비드넷</td>

                    <td>연구자</td>

                    <td>정보수정</td>

                    <td><a style="color: blue;">v</a>
                    <b style="color: red;"> x </b></td>

                    <td> </td>

                    </tr>
                    <tr>


                    <td>6</td>

                    <td>2021-08-20 14:20:00</td>

                    <td>김OO</td>

                    <td>OO대학교병원</td>

                    <td>연구자</td>

                    <td>정보수정</td>

                    <td>v x</td>

                    <td>반려</td>

                    </tr>
                    <tr>


                    <td>5</td>

                    <td>2021-08-20 14:20:00</td>

                    <td>이OO</td>

                    <td>서울OO병원</td>

                    <td>연구자</td>

                    <td>정보수정</td>

                    <td><a style="color: blue;">v</a>
                    <b style="color: red;"> x </b></td>

                    <td> </td>

                    </tr>
                    <tr>


                    <td>4</td>

                    <td>2021-08-20 14:20:00</td>

                    <td>김OO</td>

                    <td>OO대학교병원</td>

                    <td>연구자</td>

                    <td>신규가입</td>

                    <td>v x</td>

                    <td>승인</td>

                    </tr>
                    <tr>


                    <td>3</td>

                    <td>2021-08-20 14:20:00</td>

                    <td>이OO</td>

                    <td>서울OO병원</td>

                    <td>연구자</td>

                    <td>신규가입</td>

                    <td>v x</td>

                    <td>승인</td>

                    </tr>
                    <tr>


                    <td>2</td>

                    <td>2021-08-20 14:20:00</td>

                    <td>김OO</td>

                    <td>OO대학교병원</td>

                    <td>연구자</td>

                    <td>신규가입</td>

                    <td>v x</td>

                    <td>승인</td>

                    </tr>
                    <tr>


                    <td>1</td>

                    <td>2021-08-20 14:20:00</td>

                    <td>김OO</td>

                    <td>서울OO병원</td>

                    <td>연구자</td>

                    <td>신규가입</td>

                    <td>v x</td>

                    <td>승인</td>

                    </tr>
                </tbody>

          </table>
        </div>
      </section>
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
