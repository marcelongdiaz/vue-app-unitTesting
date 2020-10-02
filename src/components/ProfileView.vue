<template lang="html">
  <div class="">
    <v-app class="app-profile-view">
      <v-card class="mb-16">
        <v-img src="./../assets/bg.jpg"
          height="200px"
        ></v-img>

        <div class="avatar-container">
          <img :src="'./assets/'+selectedStudent.profilePic" alt="">
        </div>
      </v-card>

      <h2 class="name-title">{{ selectedStudent | fullName }}</h2>
      <p class="subtitle-1">{{ selectedStudent.department }}</p>


      <v-row cols="12" class="ml-8 mr-8">
        <v-col md="4" sm="12">
          <v-card>
            <v-card-title class="headline">Address</v-card-title>

            <v-card-subtitle class="text-left">{{ selectedStudent.address }}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="4" sm="12">
          <v-card>
            <v-card-title class="headline">Department</v-card-title>

            <v-card-subtitle class="text-left">{{ selectedStudent.department }}</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="4" sm="12">
          <v-card>
            <v-card-title class="headline">User Code</v-card-title>

            <v-card-subtitle class="text-left subtitle-1">{{ selectedStudent.userCode }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col md="4" sm="12">

          <v-progress-circular
            :rotate="360"
            :size="150"
            :width="15"
            :value="selectedStudent.studPerformance.academics"
            color="teal"
            class="mb-4"
          >
            {{ selectedStudent.studPerformance.academics }}%
          </v-progress-circular>
          <h3 color="secondary">Academics</h3>
        </v-col>
        <v-col md="4" sm="12">

          <v-progress-circular
            :rotate="360"
            :size="150"
            :width="15"
            :value="selectedStudent.studPerformance.extracurricular"
            color="#f68002"
            class="mb-4"
          >
            {{ selectedStudent.studPerformance.extracurricular }}%
          </v-progress-circular>
          <h3 color="secondary">Extra-curricular</h3>
        </v-col>
        <v-col md="4" sm="12">

          <v-progress-circular
            :rotate="360"
            :size="150"
            :width="15"
            :value="selectedStudent.studPerformance.currentGrade"
            color="#4b016c"
            class="mb-4"
          >
            {{ selectedStudent.studPerformance.currentGrade }}%
          </v-progress-circular>
          <h3 color="secondary">Current Grade</h3>
        </v-col>
      </v-row>

    </v-app>

  </div>
</template>

<script>
export default {
  name : 'ProfileView',
  props: ['selectedStudent'],
  data(){
    return{

    }
  },
  filters: {
    fullName : function(item){
      return (item.fName + " " + item.mName + " " + item.lName);
    },
    profilePicture : function(file){
      return ('./../assets/'+file+'.jpg');
    }
  }
}
</script>

<style lang="css" scoped>

.avatar-container{
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50%!important;
  border: 3px solid white;
  position: absolute;
  bottom:-50px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.avatar-container img{
  height: 100%;
  width: 100%;
  object-fit:cover;
}
.name-title{
  text-align: center;
}
.app-profile-view{
  background: #00968821;
}
</style>
