<template lang="html">
  <div class="">
    <v-app>
      <sidebar @toggle_nav="toggleNav" :navIsFull="navIsFull"/>
      <div :class="navIsFull?'page-content':''" id="id-page-content">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <v-card class="px-10 py-10 mt-10">
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="First Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Middle Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Last Name"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-text-field
                    v-model="address"
                    :rules="emailRules"
                    label="Address"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="department"
                    :items="departments"
                    label="Department"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >
                    Validate
                  </v-btn>

                  <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                  >
                    Reset Form
                  </v-btn>

                  <v-btn
                    color="warning"
                    @click="resetValidation"
                  >
                    Reset Validation
                  </v-btn>
                </v-form>
            </v-card>
          </v-col>
        </v-row>

      </div>
    </v-app>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
export default {
    name: 'Accounts',
    components: {
      Sidebar
    },
    data(){
      return{
        title: 'This is Accounts',
        navIsFull: true,
        departments: [
          'Web Development Department',
          'Architecture and Engineering Department',
          'Teacher and Education Department'
        ]
      }
    },
    methods: {
      toggleNav : function(){
        this.navIsFull = !this.navIsFull ;
      },
    }
}
</script>

<style scoped>
</style>
