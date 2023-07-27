<template>
  <div class="home">
  <form @submit.prevent="submitForm"> 
    <div class="container">
      <div class="header-part">
        <a v-bind:href="linkUrl">
          <img src="../assets/pics/icon.png" alt="">
        </a>
        <h1 class="header">SIGN UP</h1>
      </div>

    <input type="text" required  v-model="fullname" placeholder="Full Name">

    <input type="email" required v-model="email" placeholder="Email Address">

    <input type="password" v-model="password" required placeholder="Password">
    <br>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>I have read and accepted the terms and conditions</label>
    </div>
    <br>
    <div class="submit">
      <button id="button" type="submit"> Continue </button>
    </div>
    </div>
  </form>
</div>
<footer>CAMPUS CONNECT | KNUST</footer>
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
    submitForm(){
      const userData ={
      fullname: this.fullname,
      password: this.password,
      email: this.email
     }

     // Store user data in local storage
     localStorage.setItem('userData', JSON.stringify(userData));

     alert('You have created an account. Please login')

    // Redirect to the login view component
    this.$router.push('/Signin');    
    }
  }

}
</script>

<style>
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
padding-left: 22px;
align-items: center;
justify-content: center;
}
.header{
padding-left:50px;
text-align: center;
color: #FFF;
font-size: 46px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
form {
padding-bottom: 20px;
max-width: 400px;
margin: 90px auto;
text-align: left;
max-height:680px;
border: 4px solid rgba(4, 179, 136, 0.50);  
border-radius: 10px ;
}

input{
display: flex;
width: 300px;
padding: 17px ;
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
border-radius: 10px;
height: 50px;
justify-content: center;
align-items: center;
gap: 12px;
flex-shrink: 0;
color:#fff;
font-size: 18px;
}
#button:hover{cursor:pointer}

.error{
  color:red;
}

</style>