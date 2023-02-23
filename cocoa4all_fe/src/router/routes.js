const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "login", component: () => import("pages/SigninPage.vue") },
      { path: "register1", component: () => import("pages/UserRegister1.vue") },
      { path: "register2", component: () => import("pages/UserRegister2.vue") },
      { path: "register3", component: () => import("pages/UserRegister3.vue") },
      {
        path: "userinfo1",
        component: () => import("pages/UserInfoChange1.vue"),
      },
      {
        path: "userinfo2",
        component: () => import("pages/UserInfoChange2.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "userlist", component: () => import("pages/admin/UserList.vue") },
      {
        path: "userdetail",
        component: () => import("pages/admin/UserDetail.vue"),
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
