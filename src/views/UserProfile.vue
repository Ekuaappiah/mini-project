<template>
  <div class="home">
  <div id="nav">
  <div class="cont-1">
    <!-- <img id="logo" src="../assets/pics/clip.png" alt="logo"> -->
    <router-link to="/Home" style="text-decoration: none;"> <h1><i>CAMPUS CONNECT</i></h1></router-link> 
  </div>
</div>
  <div class="cont">
    
    <h1>Profile Settings</h1>
 

  <div class="logout-button">
      <button id="logout" @click="showPopup">Logout</button>
      <div class="popup" v-if="showLogoutPopup">
        <p>Are you sure you want to logout?</p>
        <button class="option" @click="logout">Logout</button><br>
        <button class="option" @click="cancelLogout">Cancel</button>
      </div>
</div>
</div>


<div class="settings">
<div class="one">
  <div id="upload-pic">

    <img :src="profileImage" alt="Profile Picture" id="profile" v-if="profileImage"/>

    <div class="flexmode">
    <input id="file" type="file" accept="image/*" @change="onFileChange"/>

    <button  id="upload-button" @click="updateProfilePicture" v-if="profileImage" >Update Profile Picture</button>
    </div>
    <br>
  </div>

  <h2>PERSONAL DETAILS</h2>
  <div class="personal-info">
  <label>Full Name: </label><br>
  <input type="text" required  v-model="fullname">

  <label>Email: </label>
  <input type="email" required v-model="email">

  <label>Password: </label>
  <input type="password" v-model="password" required>

  <label>Date of Birth: </label><br>
  <input type="date" v-model="dob">

  <label for="phonenumber">PHONE NUMBER</label><br>
  <input type="tel" placeholder="(0000)-000-000" v-model="number">

  </div>

</div>
<div class="two">
  <h2>EDUCATIONAL DETAILS | KNUST</h2>
  <label>Name of College: </label><br>
  <input type="text" placeholder="eg. College of Science" v-model="college">

  <label>Program Of Study</label><br>
  <input type="text" v-model="program" placeholder="eg.Computer Science">

  <label>Year</label><br>
  <input type="number" placeholder="eg.1" v-model="year"><br>

  <h2>PREVIOUS DETAILS</h2>
  <label>Name Of High School Attended</label>
  <input type="text" placeholder="eg.Methodist Girls High School" v-model="SeniorHigh">

  <label>Name Of Course Offered: </label>
  <input type="text" placeholder="eg.General Arts" v-model="course">

  <label>Year Duration: </label>
  <input type="text" placeholder="eg. 2017-2020" v-model="duration">
  
</div>

<div class="three">
  <h2> ADDITIONAL INFORMATION</h2>
  <label>Fields of Interest: </label>
  <textarea cols="30" rows="5" v-model="selectedInterestsText">
  </textarea><br>

<label>Experiences: </label>
<form @submit.prevent="uploadExperience" class="upload">
  <textarea v-model="thought" cols="30" rows="10"></textarea>
  <button type="submit" >Upload</button>
</form>
<button id="save-button" @click="saveSettings">Save Settings</button>

</div>
</div>
<footer>CAMPUS CONNECT | KNUST</footer>
</div>
</template>

<script>
export default {
  data(){
    return{
      fullname : '',
      email : ' ',
      password: '',
      dob: '',
      program: '',
      number: '',
      college: '',
      SeniorHigh: '',
      year: '',
      course: '',
      duration: '',
      profileImage: null,
      selectedInterestsText: '' ,
      thought: '',
      showLogoutPopup: false
    }
  },
  mounted(){
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
      this.fullname = userData.fullname;
      this.password = userData.password;
      this.email = userData.email;
    }
    
  const ProfileData = JSON.parse(localStorage.getItem('ProfileData'));
  if(ProfileData) {
    this.dob= ProfileData.dob,
    this.program= ProfileData.program,
    this.number= ProfileData.number,
    this.college= ProfileData.college,
    this.SeniorHigh= ProfileData.SeniorHigh,
    this.year= ProfileData.year,
    this.course= ProfileData.course,
    this.duration= ProfileData.duration
  }


  const selectedInterests = JSON.parse(localStorage.getItem('selectedInterests'));
  if (selectedInterests && selectedInterests.length > 0) {
    this.selectedInterestsText = selectedInterests.map(interest => interest.name).join(' , ');
  }

  const Experiences=JSON.parse(localStorage.getItem('Experiences'));
  if (Experiences){
    this.thought=Experiences.thought
  }

  this.profileImage = localStorage.getItem('profileImage');

  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.profileImage = reader.result;
      };
      reader.readAsDataURL(file);

      alert('Please click on the update profile button.')
    },
    updateProfilePicture() {
      // Save the profile picture to local storage
      localStorage.setItem('profileImage', this.profileImage);

      alert('Profile photo has been updated sucessfully.')
    },
    uploadExperience(){
      const Experiences={
        thought: this.thought
      }
      localStorage.setItem('Experiences', JSON.stringify(Experiences));
    },
    saveSettings(){

      const ProfileData ={
      dob: this.dob,
      program: this.program,
      number: this.number,
      college: this.college,
      SeniorHigh: this.SeniorHigh,
      year: this.year,
      course: this.course,
      duration: this.duration
      }

      localStorage.setItem('ProfileData', JSON.stringify(ProfileData));

      alert('Your data has been saved.')
    },
    showPopup() {
      this.showLogoutPopup = true;
    },
    logout() {
      // Implement your logout logic here
      console.log('Logged out successfully!');
      this.showLogoutPopup = this.$router.push('/');
      alert('You are logging out.')
    },
    cancelLogout() {
      this.showLogoutPopup = false;
    }
}
</script>

<style scoped>
.cont{
  display: flex;
  flex-wrap: wrap;
  gap: 30%;
}
.settings{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.one, .two, .three{
  box-sizing: border-box;
  padding: 15px 20px 15px 20px;
  width: 430px;
  height: 760px;
  overflow: hidden;
}
.two, .three{
  padding-top: 40px;
}
#profile{
  width:130px;
  height:125px;
  border-radius: 80px;
}
#upload-pic{
  display: flex;
  gap:35px;
  box-sizing: border-box;
}
#file{
  border-radius: 5px;
  background: unset;
  margin-top: 40px;
  height: 15px;
  width:205px;
  font-size: 14px;
  padding-left: 5px;
}
#upload-button,#save-button, #logout{
border-radius: 5px;
background: #04B388;
color: #FFF;
display: flex;
width: 170px;
height: 31px;
justify-content: center;
align-items: center;
cursor: pointer;
}
label{
color: #fcf9f9;
font-size: 16px;
font-weight: 500;
padding-bottom: 20px;
}
input{
  margin-top: 5px;
  padding: 10px 0px 10px 10px;
  height:20px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.10);
  padding-left: 2px;
  border: none;
}
textarea{
  margin-top: 5px;
  padding: 5px;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.10);
  color: #FFF;
  margin-bottom: 20px;
}
ul{
  margin-top: 5px;
  padding: 10px 0px 10px 10px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.10);
  padding-left: 2px;
  border: none;
}
.upload{
  margin-top: 0;
  border: none;
}
#save-button{
  font-size: 20px;
  padding: 20px;
  margin-left: 90px;
}
#logout{
  margin-top: 30px;
  font-size: 20px;
  padding: 10px;
}

.popup {
  width: 200px;
  height: 160px;
  display: block;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.50);
  background: #04B388; 
  padding: 10px;
  z-index: 1;
  font-size: 18px;
}
.logout-button:hover .popup {
  display: block;
}
.option{
border: 1.538px solid rgba(255, 255, 255, 0.50);
color: #FFF;
background: unset;
display: flex;
width: 100px;
height: 25px;
padding: 5px 15px;
justify-content: center;
align-items: center;
gap: 2px;
flex-shrink: 0;
}
.option:hover{
  cursor: pointer;
}
</style>
