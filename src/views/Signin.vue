<template>
  <div class="home">
  <form @submit.prevent="loginForm"> 
    <div class="container">
      <div class="header-part">
        <a v-bind:href="linkUrl">
          <img src="../assets/pics/icon.png" alt="">
        </a>
        <h1 class="header">SIGN IN</h1>
      </div>

    <input type="email" required v-model="email" placeholder="Email Address">

    <input type="password" v-model="password" required placeholder="Password">
    
    <br>
    <div class="submit">
      <button id="button" type="submit"> Continue </button>
    </div>

    <br>
    <div id="info">Do you have an account? <router-link  style="color:#04B388" to="/Signup">Sign Up</router-link></div>
    </div>
  </form>
</div>
<footer>CAMPUS CONNECT | KNUST &copy 2023 </footer>
</template>

<script>

export default {
  data(){
    return{
      fullname : '',
      email : ' ',
      password: '',
      terms: false,
      linkUrl: '/'
    }
  },
  
  methods: {
  loginForm(){
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData && userData.email === this.email && userData.password === this.password) {

  // Successful login, redirect to the desired page
    alert('You are logged in.')
    this.$router.push('/Proceed');
  } else {
  // Handle incorrect credentials
  alert('Please try again')
  console.warn('Try Again')
  }
    }

  }

}
</script>

<style scoped>
/* Media queries */
@media (max-width: 768px) {
  /* Styles for screens with a maximum width of 768px (e.g., mobile phones) */
  .home {
    padding: 0;
  }
  form{
    width: fit-content;
  }
  input{
    padding-left: 0;
    width: 300px;
  }
}

body {
  margin: 0;
  border: 0;
  background: linear-gradient(180deg, #1A312E 0%, #0C0F0E 100%);
  width: 100%;
  height: 100vh;
  box-sizing:border-box;
}
img{
  width: 40px;
  height: 40px;
  margin-top:40px;
}
.header-part{
  display:flex;
  box-sizing:border-box;
}
.container{
box-sizing: border-box;
padding-left: 25px;
align-items: center;
justify-content: center;
padding-right: 15px;
}
.header{
padding-left:50px;
text-align: center;
color: #FFF;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
form {
box-sizing:border-box;
padding-bottom: 20px;
max-width: 410px;
margin: 100px auto;
text-align: left;
height:500px;
border: 4px solid rgba(4, 179, 136, 0.50);  
border-radius: 10px ;
}

input{
margin-top:40px;
display: flex;
max-width: 300px;
padding: 13px ;
background: rgba(255, 255, 255, 0.10);
margin-bottom:20px ;
color: #fff;
font-size: 18px;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
#button{
background: #04B388;
display: flex;
width: 330px;
border-radius: 12px;
height: 50px;
justify-content: center;
align-items: center;
gap: 12px;
flex-shrink: 0;
color:#fff;
font-size: 18px;
}
#button:hover{cursor:pointer}

#info{
  text-align: right;
  margin-right: 50px;
}
</style>