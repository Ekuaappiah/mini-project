<template>
<div class="home">

<div class="nav">
  <div class="cont-1">
    <!-- <img id="logo" src="../assets/pics/clip.png" alt="logo"> -->
   <h1><i>CAMPUS CONNECT</i></h1>
  </div>
  <button class="gstart" type="submit" @click="goToPage">Get Started</button>
</div>

<div class="line"></div>
 
<div class="cont-2">

  <div class="sec1">
    <div class="left-info">
      Connects students with similar fields of interest, share knowledge, skills and build long lasting networks and relationships.
    </div>
    <br><br>

    <div class="sec1-button">
    <button class="gstart1"  type="submit" @click="goToPage">Get Started</button>
    <button class="gstart1"  id="color" type="submit" @click="goToPage2">Sign In</button>

    </div>
  </div>
  <div class="sec-2">
    <img id="img-1" src="../assets/pics/college.jpg" alt="">
    <div class="s2">
      <img src="../assets/pics/f2.png" alt="" class="img-2">
      <img src="../assets/pics/f3.png" alt="" class="img-2">
    </div>
  </div>
</div>
<footer>CAMPUS CONNECT | KNUST &copy 2023 </footer>
</div>
</template>

<script>


export default {
  name: 'LandingPage',
  methods: {
    goToPage() {
      this.$router.push('/Signup');
    },
    goToPage2() {
      this.$router.push('/Signin');
    }
  }
  
}
</script>

<style>
/* Media Queries */
@media (max-width: 768px) {
  .nav{
    margin-left: 20px;
    box-sizing: border-box;
    padding: 0;
    width:100%;
  }
  .line{margin-top: 10px; margin-left: 30px; }

  .cont-2 div{
    font-size: 30px;
    display: block;
    width: 96vw;
  }
}

@media (min-width: 769px) and (max-width: 1280px) {
  .cont-2 div{
    display: block;
    width: fit-content;
  }
  #left-info{
    display: block;
  }
}


/* MAIN CSS */
.home{
  box-sizing: border-box;
  padding-left: 10px;
  margin: 0 auto;
  text-align: left;
  background: linear-gradient(180deg, #1A312E 0%, #0C0F0E 100%);
  width: 94vw;
  height: 100vh;
}
.nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
}
.cont-1{
  display:flex;
  box-sizing: border-box;
  gap: 15px;
}
#logo{
width: 50px;
height: 42px;
padding-right: 5px;
}
h1{
margin-top: 50px;
color: #FFF;
font-size: 40px;
font-weight: 600;
line-height: normal;
}
.gstart{
margin-top: 55px;
font-size: 18px;
color: #FFF;
border-radius: 19.2px;
background: #04B388;
width: 180px;
height: 42px;
float: right;
}
.line{
width: 95vw;
height: 2px;
background: rgba(255, 255, 255, 0.25);
margin-bottom: 30px;
}
/* Main Content */
.cont-2{
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.sec1{
box-sizing: border-box;
padding-left: 30px;
padding-right: 30px;
margin-top: 80px;
max-width:560px;
font-size: 40px;
font-weight: 400;
}
.sec1-button{
  display:inline-grid;
  grid-template-columns: 230px 230px; 
}
.gstart1{
color: #FFF;
border-radius: 19.2px;
background: #04B388;
width: 190px;
height: 45px;
font-size: 22px;
}
#color{
  background: none;
  border:1px solid #04B388;
}
.gstart:hover, 
.gstart1:hover{
  cursor: pointer;
  color: #1A312E;
}
.sec-2{
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-self: center;
  box-sizing: border-box;
  width: 750px;
  padding-bottom: 30px;
}
#img-1{
  width:410px;
  height:400px;
  flex-shrink: 0;
  border-radius: 380px;
  display: block;
}
.s2{
  display: flex;
  flex-direction: column;
}
.img-2{
  width: 260px;
  height: 220px;
}
footer{
  width: 100%;
  font-size: 30px;
  font-weight: 800px;
  text-align: center;
  background-color: rgba(4, 179, 136, 0.50);
  height: fit-content;
}
</style>
