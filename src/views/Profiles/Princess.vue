<template><br>
  <div class="home">
  <div class="nav">
  <div class="cont-1">
    <!-- <img id="logo" :src="require('@/assets/pics/clip.png')" alt="logo"> -->
    <h1><i>CAMPUS CONNECT</i></h1>
  </div>
  <div class="cont2">
      <router-link to="/UserProfile"><img id="profile-img" :src="profileImage" alt=""></router-link>
  </div>
</div>
<div class="line"></div>

<div class="cont">
  <img @click="redirectToPreviousPage" :src="require('@/assets/pics/icon.png' )"  alt="">
  <h1>Princess Padmore</h1>
</div>
<div class="info-details">
  <div class="one">
    <img class="imgs" :src="require('@/assets/pics/princess.jpeg')" alt=""><br>
    <div>
      <h2 >Princess Padmore</h2>
      <p>Shares 3 other interests with you</p>

      <h2>Contact information</h2>
      <p>padmoregoka@gmail.com</p>
      <p>+233 595 566 763</p>

      <button class="connect">Connect</button>
    </div>

  </div>
  <div class="two">
    <h2>EDUCATION</h2>

    <div class="box">
      <img class="icon" :src="require('@/assets/pics/ion.jpg')" alt="">
      <div class="data">
        College of Science <br>
        Computer Science <br>
        Year 3
      </div>
    </div><br>
    <div class="box">
      <img class="icon" :src="require('@/assets/pics/ion.jpg')" alt="">
      <div class="data">
        Methodist Girls' High School <br>
        General Science <br>
        2017 - 2020
      </div>
    </div>
    <br>
    <h2>INTERESTS</h2>
      <div class="mini-box">Robotics</div>
      <div class="mini-box">Cybersecurity</div>
      <div class="mini-box">Machine Learning</div>
      <div class="mini-box">Data Analysis</div>
  </div>

  <div class="three">
    <h2>EXPERIENCE</h2>
    <div class="box">
      <img class="icon" :src="require('@/assets/pics/ion1.jpg')" alt="">
     <div class="data"> Still Learning.No experience yet</div>
    </div>
   
  </div>
</div>

</div>
</template>

<script>
export default {
data(){
  return{
   profileImage: ''
  }
},
methods: {
  redirectToPreviousPage() {
      this.$router.go(-1);
    }
},
mounted(){
  this.profileImage = localStorage.getItem('profileImage');
}
}
</script>

<style scoped>
.cont{
  display: flex;
  flex-wrap: wrap;
  gap: 30%;
}
img:hover{cursor: pointer;}
.info-details{
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
.one, .two, .three{
  border-radius: 12px;
  border: 2px solid #04B388;
  box-sizing: border-box;
  padding: 5px 20px 15px 20px;
  width: 400px;
  height: 670px;
  overflow: scroll;
}
.one{
  border: none;
}
.two, .three{
  margin-top: 40px;
}
.icon{
  margin-top: 10px;
width: 38px;
height: 38px;
border-radius: 10px;
}
.imgs{
width: 290px;
height: 300px;
flex-shrink: 0;
border-radius: 12px;
border: 2px solid #04B388;
}
.box{
display: flex;
gap: 15px;
box-sizing: border-box;
padding: 5px 15px ;
width: 290px;
height: 110px;
flex-shrink: 0;
border-radius: 10px;
background: #04B388;
font-weight: 700;
}
.data{
  margin-top: 15px;
}
.mini-box{
border-radius: 6px;
background: #04B388;
width: fit-content;
padding: 5px;
margin-top: 10px;
margin-bottom: 10px;
}
.connect{
display: flex;
width: 280px;
height: 45px;
color: #fff;
justify-content: center;
align-items: center;
gap: 12px;
flex-shrink: 0;
border-radius: 10px;
background: #04B388;
font-size: 20px;
}
#profile-img{
  width:75px;
  height:70px;
  border-radius: 10px;
}
</style>