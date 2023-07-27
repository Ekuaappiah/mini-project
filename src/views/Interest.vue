<template>
  <div class="home">
    <div class="nav">
    <div class="cont-1">

    <router-link to="/Home" style="text-decoration: none;"> <h1><i>CAMPUS CONNECT</i></h1></router-link> 
   </div>
   <div class="cont2">
      <input type="text" placeholder="Search Interests" v-model="searchTerm" @keyup="searchProfiles">
      <router-link to="/UserProfile"><img id="profile" :src="profileImage" alt=""></router-link>
  </div>
</div>

  <div v-if="filteredProfiles.length">
    <div v-if="searchTerm !== '' && filteredProfiles.length">
      <ul>
        <li v-for="profile in filteredProfiles" :key="profile.id">
          <router-link :to="'/profile/' + profile.id" style="text-decoration: none;"><h2>{{ profile.name }}</h2></router-link>
        </li>
      </ul>
    </div>
    </div>

   <div class="line"></div>

   <div class="cont">


  <!-- <img style="cursor:pointer;"
  @click="redirectToPreviousPage" :src="require('@/assets/pics/icon.png' )"  alt=""> -->
     
</div>

<h2 style="
    text-align: center;
    background-color:  rgba(4, 179, 136, 0.50);
    max-width: 98vw;
  ">PEOPLE YOU CAN CONNECT WITH</h2>


<div class="profiles">
      <div v-for="user in userProfiles" :key="user.id" class="profile-card">
        <div id="align">
        <img id="img" :src="user.image" alt="Profile Image" />
        <div class="profile-info">
          <h3>{{ user.name }}</h3>
          <p>{{ user.bio }}</p>
         <div class="connectUser">
          <a :href="user.connect"><button id="connect"
          >Connect</button></a>
        </div>
        </div>
      </div>
    </div>
  </div>
  <footer>CAMPUS CONNECT | KNUST</footer>
   </div>
</template>

<script>
export default {
  methods: {
    redirectToPreviousPage() {
      this.$router.push(-1);
    },
    searchProfiles() {
      this.filteredProfiles = this.profiles.filter(profile => profile.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
  data(){
    return{
      profileImage: '',
      profiles: [],
      searchTerm: '',
      filteredProfiles: [],
      userProfiles: [
        {
          id: 1,
          name: 'Emmanuella Appiah',
          image: require('@/assets/pics/profile.jpeg'),
          bio: 'Shares 2 other interests with you',
          connect: '/Emmanuella'
        },
        {
          id: 2,
          name: 'Princess Padmore',
          image: require('@/assets/pics/princess.jpeg'),
          bio: 'Shares 3 other interests with you',
          connect: '/Princess'
        },
        {
          id: 3,
          name: 'Adelaide Adomako',
          image: require('@/assets/pics/adelaide.jpeg'),
          bio: 'Shares 2 other interests with you'
        },
        {
          id: 4,
          name: 'Frederick Mark',
          image: require('@/assets/pics/fred.jpeg'),
          bio: 'Shares 4 other interests with you'
        }
      ]
    }
  },
  mounted(){
    this.profileImage = localStorage.getItem('profileImage');
  },
  created(){
    const storedData = localStorage.getItem('AllProfiles');
  this.profiles = JSON.parse(storedData) || [];
  }

}
</script>

<style scoped>
@media (max-width: 768px) {
  .profile-card{
    width: 350px;
  }

}
.nav{
  display: flex;
  flex-wrap: wrap;
  /* gap: 35%; */
  justify-content: space-between;
  box-sizing: border-box;
}
.cont2{
  float: right;
  display:flex;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}
input{
  margin-top: 40px;
  height:22px;
  border:none;
  width: 300px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.10);
}
#img{
  width:380px;
  height:380px;
}
#align{
  box-sizing: border-box;
  text-align: center;
}
#profile{
  width:75px;
  height:70px;
  border-radius: 10px;
}
.profiles {
  box-sizing: border-box;
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  gap:50px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
}
.cont{
  display: flex;
  flex-wrap: wrap;
  gap: 30%;
}
a:hover{cursor: pointer;}

#connect{
border-radius: 5px;
background: #04B388;
color: #FFF;
display: flex;
width: 170px;
height: 40px;
justify-content: center;
align-items: center;
cursor: pointer;
}
.connectUser{
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
align-items: center;  
}
.profile-card {
  box-sizing: border-box;
  border: 2px solid rgba(4, 179, 136, 0.50);
  width: 500px;
  margin-bottom: 30px;
  cursor: pointer;
}

.profile-info {
  margin-top: 10px;
}
a{text-decoration: none; color: ;}

</style>
