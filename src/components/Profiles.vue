<template>
  <div class="">
    <v-toolbar
      color="#757575"
      dark
    >
      <v-toolbar-title>Student List</v-toolbar-title>
    </v-toolbar>
    <div class="pt-2">
      <v-col cols="12">

        <v-card @click="selectStudent(item)" color="whitesmoke" :class="selectedId == item.userCode?'my-1 selected-student':'my-1'" v-for="item in datas" :key="item.userCode">
          <v-list-item>
             <v-list-item-avatar><img :src="'/assets/'+item.profilePic" class="cover-parent"></v-list-item-avatar>
            {{ item |fullName }}
          </v-list-item>
          <!-- <v-card-title class="subtitle-2"></v-card-title> -->
        </v-card>
      </v-col>



    </div>

  </div>
</template>

<script>
export default {
  name : 'Profiles',
  props: ['datas', 'selectedId'],
  data(){
    return {
    }
  },
  filters: {
    fullName : function(item){
      return item.fName + " " + item.mName + " " + item.lName
    }
  },
  methods: {
    selectStudent: function(item){
      this.$emit('select_student', item);
    }
  }
}
</script>

<style scoped>

.selected-student{
  background: #00968821;
}
.cover-parent{
  object-fit: cover
}
</style>
