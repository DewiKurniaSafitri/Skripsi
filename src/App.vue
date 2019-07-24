<template>
  <div id="app">
    <header>
          <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <div class="container">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="Hello">Home</span></a>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Equipment</a>
            <div class="dropdown-content">
            <router-link :to="{name: 'Equipment'}">Add Equipment</router-link>
            <router-link :to="{name: 'EquipmentList'}">Equipment List</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Failure Report</a>
            <div class="dropdown-content">
            <router-link :to="{name: 'Failure'}">Add Failure</router-link>
            <router-link :to="{name: 'FailureList'}">Failure List</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">Repair</a>
            <div class="dropdown-content">
            <router-link :to="{name: 'Repair'}">Repair Report</router-link>
            <router-link :to="{name: 'RepairList'}">Repair List</router-link>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Downtime">Downtime </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Frequency">Frequency </a>
          </li>
        </ul>
      </div>
    </div>
</nav>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 66px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
* {
        margin:0; 
        padding:0;
    }

    nav {
        margin:auto;
        text-align: center;
        width: 100%;
        font-family: arial;
    } 

    nav ul {
        
        padding: 0 5px;
        list-style: none;
        position: relative;
        display: inline-table;
        width: 100%;
     }

    nav ul li{
        float:left;
    }

    nav ul li:hover{
        background:#d68d9a;
    }

    nav ul li:hover a{
        color:#000;
    }

    nav ul li a{
        display: block;
        padding: 25px;
        color: #fff;
        text-decoration: none;
    }

    .dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
