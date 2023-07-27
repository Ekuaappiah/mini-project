<template>
  <div class="home">
    <div class="nav">
  <div class="cont-1">
    <!-- <img id="logo" src="../assets/pics/clip.png" alt="logo"> -->
    <router-link to="/Home" style="text-decoration: none;"><h1><i>CAMPUS CONNECT</i></h1></router-link> 
  </div> 
  <div class="cont2">
      <input type="text" placeholder="Search Interests" v-model="searchTerm" @keyup="searchProfiles">
      
      <router-link to="/UserProfile">

        <img id="profile" :src="profileImage" alt="">
      </router-link>

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

  <div class="slideshow">
    <img :src="currentImage" :alt="currentImageAlt" class="slide" />
  </div><br>

  <h1 style="
    text-align: center;
    background-color:  rgba(4, 179, 136, 0.50);
    max-width: 98vw;
  ">INTERESTS</h1>

  <div class="profiles">
    <div v-for="profile in selectedProfiles" :key="profile.id" class="profile-card">
      <img :src="profile.image" alt="Profile Image" /><br>
      <router-link :to="'/profile/' + profile.id" style="text-decoration: none;"><h2>{{ profile.name }}</h2></router-link>
      <h4>Connect with mutual friends</h4>
    </div>
  </div>
  <footer>CAMPUS CONNECT | KNUST</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
      {
        src: require("@/assets/pics/college.jpg" ),
        alt :"Image 1"
      },
      {
        src: require("@/assets/pics/Business.jpeg" ),
        alt :"Image 2"
      },
      {
        src: require("@/assets/pics/cybersecurity.jpg" ),
        alt :"Image 3"
      },
      {
        src: require("@/assets/pics/AI.png" ),
        alt :"Image 4"
      },
      {
        src: require("@/assets/pics/content.jpg" ),
        alt :"Image 5"
      },
      {
        src: require("@/assets/pics/books.jpg" ),
        alt :"Image 6"
      },
      {
        src: require("@/assets/pics/data.jpg" ),
        alt :"Image 7"
      }
      ],
      currentImageIndex: 0,
      selectedProfiles: [],
      profiles: [],
      searchTerm: '',
      filteredProfiles: [],
      profileImage: ''
    };
  },
  mounted(){
  const storedData = localStorage.getItem('AllProfiles');
  this.profiles = JSON.parse(storedData) || [];

  this.profileImage = localStorage.getItem('profileImage');

  this.startSlideshow();
},
  created() {
    const storedInterests = localStorage.getItem('selectedInterests');
    if (storedInterests) {
      this.selectedProfiles = JSON.parse(storedInterests);
    }
  },
  methods: {
    searchProfiles() {
      this.filteredProfiles = this.profiles.filter(profile => profile.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    },
    startSlideshow() {
      setInterval(() => {
        this.nextImage();
      }, 3000); // Change image every 3 seconds (adjust this value to set the interval)
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex].src;
    },
    currentImageAlt() {
      return this.images[this.currentImageIndex].alt;
    },
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .nav{
    display: block;
  }

}

.nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* gap: 35%; */
  box-sizing: border-box;
}
.cont2{
  float: right;
  display:flex;
  box-sizing: border-box;
  flex-wrap: wrap;
}

input{
  margin-top: 40px;
  height:20px;
  border:none;
  width: 290px;
  border-radius: 10px;
background: rgba(255, 255, 255, 0.10);
}
#profile{
  width:75px;
  height:70px;
  border-radius: 10px;
}
.profiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap:35px;
}

.profile-card {
  box-sizing: border-box;
  border: 2px solid rgba(4, 179, 136, 0.50);
  width: 300px;
  padding: 5px;
  margin-bottom: 30px;
}

img{
  padding-left:30px;
  width:200px;
  height:150px;
}

p {
  margin: 10px 0;
}
h2{
  text-align: center;
  margin: 10px 0;
  padding-left:10px;
  color:rgb(162, 162, 177);
  text-decoration-color: white;
}
h2:hover{
  color: white;
}
h4{
  padding-left:12px;
  color: rgb(110, 101, 16);
  text-align: center;
}
.slideshow {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
}

.slide {
  width: 90%;
  height: auto;
  transition: transform 1s ease;
}
footer{
  margin-top: 20px;
}
</style>
