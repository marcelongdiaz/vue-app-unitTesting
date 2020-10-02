<template>
  <v-navigation-drawer v-model="drawer" permanent absolute class="o-visible" :mini-variant="!navIsFull">
    <v-list-item-group>
      <v-list nav>
       <v-list-item v-for="item in navLinks" :key="item.title" link :to="item.path">
         <v-list-item-icon>
           <v-icon>{{ item.icon }}</v-icon>
         </v-list-item-icon>

         <v-list-item-content v-if="navIsFull">
           <v-list-item-title>{{ item.name }}</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
     </v-list>
    </v-list-item-group>
    <!-- <a class="btn-toggle-nav"><v-icon>mdi-chevron-left</v-icon></a> -->
    <v-btn @click="toggleNav" color="teal" fab small class="btn-toggle-nav">
      <v-icon color="white">mdi-chevron-left</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['navIsFull'],
  data(){
    return{
      drawer    : true,
      navLinks  : [
        {name : 'Home', icon: 'mdi-home' , path: '/home'},
        {name : 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard'},
        {name : 'Settings', icon: 'mdi-cog', path: '/settings'},
        {name : 'Accounts', icon: 'mdi-account', path: '/accounts'},
        {name : 'Reports', icon: 'mdi-chart-histogram', path: '/reports'},
      ],
      navsomething: ''

    }
  },
  methods: {
    toggleNav : function(){
      // console.log('event')
      this.$emit('toggle_nav');
      // this.navsomething = 'hohoho'
    }
  }
}
</script>

<style lang="css" scoped>
.sidebar{
  min-width: 300px;
  height: 100%;
  padding: 10px;
  background: #34495E;
  color: whitesmoke;
  position: absolute;
  left: 0;
  top: 0;
}
.btn-toggle-nav{
  background-color: whitesmoke;
  padding: 6px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right : -20px;
  z-index: 15;
}
.btn-toggle-nav i{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.o-visible{
  overflow: visible;
}

</style>
