<template>
  <!-- Modal HTML -->
  <div class="modal-dialog modal-login">
    <div class="modal-content">
      <form @click="submitForm" method="submit">
        <div class="modal-header">
          <h4 class="modal-title">Login</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            &times;
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Username</label>
            <p>{{ formData.uName }}</p>
            <input
              v-model="formData.uName"
              type="text"
              id="uname"
              class="form-control"
              required="required"
            />
          </div>
          <div class="form-group">
            <div class="clearfix">
              <label>Password</label>
              <p>{{ formData.uPassword }}</p>
              <a href="#" class="pull-right text-muted"
                ><small>Forgot?</small></a
              >
            </div>
            <input
              v-model="formData.uPassword"
              type="password"
              id="psw"
              class="form-control"
              required="required"
            />
          </div>
        </div>
        <div class="modal-footer">
          <label class="checkbox-inline pull-left"
            ><input type="checkbox" /> Remember me</label
          >
          <input
            @click="login"
            type="submit"
            class="btn btn-primary pull-right"
            value="Login"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import { ref } from "vue";
export default {
  name: "LoginPage",
  props: {
    msg: String,
  },

  data() {
    const formData = {
      uName: "",
      uPassword: "",
    };

    function login() {
      let uName = document.getElementById("uname").value;
      let uPassword = document.getElementById("psw").value;
      console.log(uName, uPassword);

      let users = new Array();
      let user1 = {
        userName: "Test",
        password: "Test1234",
      };
      users.push(user1);
      console.log(users);
      if (
        user1.userName === this.formData.uName &&
        user1.password === this.formData.uPassword
      ) {
        console.log("Login successful");
        localStorage.setItem("token", "12345");
        this.$router.push({ path: "/favorites" });
      } else {
        console.log("wrong username or password");
      }
    }
    return {
      login,
      formData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-login {
  width: 320px;
  margin: 30px auto;
}
.modal-login .modal-content {
  border-radius: 1px;
  border: none;
}
.modal-login .modal-header {
  position: relative;
  justify-content: center;
  background: #f2f2f2;
}
.modal-login .modal-body {
  padding: 30px;
}
.modal-login .modal-footer {
  background: #f2f2f2;
}
.modal-login h4 {
  text-align: center;
  font-size: 26px;
}
.modal-login label {
  font-weight: normal;
  font-size: 13px;
}
.modal-login .form-control,
.modal-login .btn {
  min-height: 38px;
  border-radius: 2px;
}
.modal-login .hint-text {
  text-align: center;
}
.modal-login .close {
  position: absolute;
  top: 15px;
  right: 15px;
}
.modal-login .checkbox-inline {
  margin-top: 12px;
}
.modal-login input[type="checkbox"] {
  margin-top: 2px;
}
.modal-login .btn {
  min-width: 100px;
  background: #3498db;
  border: none;
  line-height: normal;
}
.modal-login .btn:hover,
.modal-login .btn:focus {
  background: #248bd0;
}
.modal-login .hint-text a {
  color: #999;
}
.trigger-btn {
  display: flex;
  margin-left: 30px;
}
</style>
