const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "login",
        component: () => import("src/pages/SigninPage_doar.vue"),
      },
      {
        path: "register1",
        component: () => import("pages/UserRegister1_nhr.vue"),
      },
      {
        path: "register2",
        component: () => import("pages/UserRegister2_jangkh.vue"),
      },
      {
        path: "register3",
        component: () => import("pages/UserRegister3_moonhs.vue"),
      },
      {
        path: "userinfo1",
        component: () => import("pages/UserInfoChange1_jangyj.vue"),
      },
      {
        path: "userinfo2",
        component: () => import("pages/UserInfoChange2_imsj.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "userlist",
        component: () => import("pages/admin/UserList_yangjh.vue"),
      },
      {
        path: "userdetail",
        component: () => import("pages/admin/UserDetail_jangbh.vue"),
      },
      {
        path: "searchuser",
        component: () => import("pages/admin/SearchUser.vue"),
      },
      {
        path: "serachdata",
        component: () => import("pages/admin/SearchData.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
