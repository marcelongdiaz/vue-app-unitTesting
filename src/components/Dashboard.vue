<template>
  <div class="page-dashboard" key="1212">
    <v-app>
    <sidebar @toggle_nav="toggleNav" :navIsFull="navIsFull"/>
    <div :class="navIsFull?'page-content':''" id="id-page-content">
      <v-row col="12">
        <v-col md="9" sm="10" class="border-1">
          <profile-view :selectedStudent="selectedStudent"/>
        </v-col>
        <v-col md="3" sm="10" class="border-1">
          <profiles :datas="datas" :selectedId="selectedId" @select_student="selectStudent"/>
        </v-col>
      </v-row>
    </div>
</v-app>
  </div>

</template>

<script>
import Sidebar from './Sidebar'
import Profiles from './Profiles'
import ProfileView from './ProfileView'
import json from './../../public/json/students.json'
export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Profiles,
    ProfileView
  },
  data(){
    return{
      datas: [

      ],

      navIsFull: true,
      selectedId: '',
      selectedStudent:{
        studPerformance: {
          academics: 0,
          extracurricular: 0,
          currentGrade : 0
        }
      }
    }
  },

  mounted: function(){
    this.getStudentRecords();
  },
  methods : {
    toggleNav : function(){
      this.navIsFull = !this.navIsFull ;
    },
    getStudentRecords : function(){

      this.datas = json;
      this.selectedId = this.datas[0].userCode;
      this.selectedStudent = this.datas[0]

    },
    selectStudent : function(info){
      this.selectedStudent = info;
      this.selectedId = info.userCode;
    }
  }

}
</script>

<style lang="css" scoped>

/* .border-1{
  border: 1px solid gray;
} */
</style>
