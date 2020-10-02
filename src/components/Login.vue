<template>

  <v-app id="inspire">
      <v-main>
      <div class="div-login">
        <div class="bg-overlay">
        </div>


        <div class="login-form rounded">
            <h2>Sign in to continue</h2>
            <v-avatar height="120" width="120" class="avatar-container">
               <img
                 src="./../assets/vue-logo.png"
                 alt="John"
               >
             </v-avatar>

            <v-alert type="error" v-if="error.isError">
              {{ error.msg }}
            </v-alert>

            <v-alert type="success" v-if="success">
                Login Successfully
            </v-alert>

              <v-form class="login-form-content" ref="form" lazy-validation>
                <v-text-field
                  class="my-8"
                  v-model="username"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field
                  class="my-8"
                  v-model="password"
                  type="password"
                  label="Password"
                  required
                ></v-text-field>


                <v-btn @click="login" block class="ma-2" tile color="teal darken" dark>Login</v-btn>

              </v-form>
            </div>
      </div>
    </v-main>
</v-app>

</template>

<script>
export default {
  name : 'Login',
  data(){
    return{
      username : '',
      password : '',
      show1    : false,
      success  : false,
      error    : {msg: '', isError: false},
      users    : [
        {username : 'admin', password: '123'}
      ]
    }
  },
  methods: {
    login: function(){
      var self = this;
      if(this.username == "" || this.password == ""){
        self.error = {
          msg: 'Username and Password cannot be blank',
          isError: true
        };
      }
      else{

        var result = self.users.filter(item =>{
          if(item.username == self.username && item.password == self.password){
            return true;
          }
        });

        if(result.length != 0){
          self.error.isError = false;
          self.success = true;
          setTimeout(function(){
            window.location.href = '/dashboard'
          }, 3000)
        }
        else{
          self.error = {
            msg: 'Incorrect Email and Password.',
            isError: true
          };
        }

      }
    }
  }
}
</script>

<style lang="css" scoped>

.div-login{
  background: url('./../assets/bg.jpg');
  height: 100vh;
  width: 100vw;
  background-size: cover;
  position: relative;
}
.bg-overlay{
  height: 100%;
  width: 100%;
  background: #34495E;
  opacity: 0.8
}
.login-form{
  max-width: 450px;
  width: 100%;
  background: whitesmoke;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
.login-form h2{
  text-align: center;
  color: #009788;
  font-size: 1.5rem;
}
.avatar-container{
  display: block;
  margin: 50px auto;
}

.v-application .primary--text{
  color: #009788!important;
  caret-color: #009788!important;
}
</style>
