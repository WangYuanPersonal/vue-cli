// import Login from "@/view/login";
const Login = r => require.ensure([], () => r(require("@/view/login")));
export default [
  {
    path: "/Login",
    name: "Login",
    component: Login
  }
];
