<template>
  <div class="home" >
    <div id="nav">
    <h2>Select Your Interests(You can choose more than one)</h2>
    </div>
    <br>

    <div class="profiles">
      <div v-for="profile in profiles" :key="profile.id" class="profile-card">
        <div :class="{ 'selected': profile.selected }" @click="selectProfile(profile)" style="
          padding-left: 40px;
          box-sizing:border-box;
        ">
        <img :src="profile.image" alt="Profile Image" />
        <div class="profile-info">
          <h3>{{ profile.name }}</h3>
          <p>{{ profile.description }}</p>
        </div>
      </div>
    </div>
    </div>
    <br>
    <div class="align-button">
      <button id="button-1" @click="saveInterests"> Continue </button>
    </div>
     
      <footer>CAMPUS CONNECT | KNUST</footer>
  </div>
</template>

<script>
export default {
  methods:{
    saveInterests() {
      const AllProfiles=this.profiles
      localStorage.setItem('AllProfiles', JSON.stringify(AllProfiles));


      const selectedProfiles = this.profiles.filter(profile => profile.selected)

      localStorage.setItem('selectedInterests', JSON.stringify(selectedProfiles));

      this.$router.push('/Home');
    },
    selectProfile(profile) {
      profile.selected = !profile.selected;
    }
  },
  data() {
    return {
      profiles: [
        {
          id: 1,
          name: 'AI & Machine Learning',
          image: require("@/assets/pics/AI.png"),
          selected: false,
          link:'/AI'       
        },
        {
          id: 2,
          name: 'Architecture',
          image: require('@/assets/pics/architecture.jpg.webp'),
          selected: false,
          link:'/Architecture'
        },
        {
          id: 3,
          name: 'Construction',
          image: require('@/assets/pics/construction.jpg'),
          selected: false,
          link:'/Construction'
        },
        {
          id: 4,
          name: 'Design & Arts',
          image: require('@/assets/pics/Creative-arts.jpg'),
          selected: false,
          link:'/Design'
        },
        {
          id: 5,
          name: 'Cybersecurity',
          image: require('@/assets/pics/cybersecurity.jpg'),
          selected: false,
          link: '/Cybersecurity'
        },
        {
          id: 6,
          name: 'App & Web Development',
          image: require('@/assets/pics/Webdev.jpg'),
          selected: false,
          link: '/Appdev'
        },
        {
          id: 7,
          name: 'Education',
          image: require('@/assets/pics/education.jpg'),
          selected: false,
          link: '/Education'
        },
        {
          id: 8,
          name: 'Engineering',
          image: require('@/assets/pics/engineering.jpeg'),
          selected: false,
          link: '/Engineering'
        },
        {
          id: 9,
          name: 'Finance',
          image: require('@/assets/pics/finance.jpg.webp'),
          selected: false,
          link: '/Finance'
        },
        {
          id: 10,
          name: 'Health',
          image: require('@/assets/pics/health.jpg'),
          selected: false,
          link: '/Health'
        },
        {
          id: 11,
          name: 'Languages',
          image: require('@/assets/pics/languages.jpg'),
          selected: false,
          link: '/Languages'
        },
        {
          id: 12,
          name: 'Politics',
          image: require('@/assets/pics/politics.jpg'),
          selected: false,
          link: '/politics'
        },
        {
          id: 13,
          name: 'Sports',
          image: require('@/assets/pics/sports.jpg'),
          selected: false,
          link: '/sports'
        },
        {
          id: 14,
          name: 'Photography',
          image: require('@/assets/pics/photography.jpg.webp'),
          selected: false,
          link: '/photography'
        },
        {
          id: 15,
          name: 'Music',
          image: require('@/assets/pics/music.png.webp'),
          selected: false,
          link:'/music'
        },
        {
          id: 16,
          name: 'Food',
          image: require('@/assets/pics/Food.jpg'),
          selected: false,
          link: '/food'
        },
        {
          id: 17,
          name: 'Data Science',
          image: require('@/assets/pics/data.jpg'),
          selected: false,
          link: '/data'
        },
        {
          id: 18,
          name: 'Content Creation',
          image: require('@/assets/pics/content.jpg'),
          selected: false,
          link: '/content'
        },
        {
          id: 19,
          name: 'Business',
          image: require('@/assets/pics/Business.jpeg'),
          selected: false,
          link: '/business'
        },
        {
          id: 20,
          name: 'Books',
          image: require('@/assets/pics/books.jpg'),
          selected: false,
          link: '/books'
        },
        {
          id: 21,
          name: 'Robotics',
          image: require('@/assets/pics/robotics.png'),
          selected: false,
          link: '/Robotics'
        }
 // Add more profiles here
      ]
    };
  }
};
</script>

<style scoped>
#nav{
  box-sizing: border-box;
}
.searchbar{
  margin-top:35px;
  height:10px;
}
h2{
color: #FFF;
font-size: 45px;
font-weight: 700;
text-align: center;
}
img{
  width:200px;
  height:150px;
}
.profiles {
  display: flex;
  flex-wrap: wrap;
  gap:15px;
  justify-content: center;
  align-content: center;
}

.profile-card {
 border: 2px solid rgba(4, 179, 136, 0.50);
  width: 300px;
  margin-bottom: 30px;
  padding: 5px;
  cursor: pointer;
}

.profile-info {
  margin-top: 10px;
}
.selected {
  color:red;
}

#button-1{
background: #04B388;
width: 500px;
height: 50px;
color:#fff;
font-size: 20px;
margin-bottom: 30px;
}
#button-1:hover{cursor:pointer}
.align-button{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
