<template>
    <section class="main-page">
       <div class="container">
                    <section id="leftSection">
                        <i class="material-icons main">insert_chart</i>
                    </section>
                    <section id="rightSection">
                        <div id="mainContent">
                            <div id="header-text">Звітність</div>
                            <div id="level-two-text">на базі SmartBI</div>
                            <div id="downloading-text">Для користування - потрібно зареєструватися</div>
                            <div>
                               <router-link to="/registration" id="reg-button"> Реєстрація </router-link>
                            </div>
                            
                        </div>
                    </section>
                </div>
    </section>
</template>


<script>
    
</script>

 <style>
.material-icons.main{
    font-size: 4vh;
}
#leftSection {
  height: 100%;
  width: 33%;
  background: linear-gradient(to bottom, rgb(254, 53, 45), rgb(188, 6, 3));
}
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: row;
}
#reg-button {
  text-decoration: none;
  background: rgb(211, 22, 17);
  text-transform: uppercase;
  width: auto;
  padding: 0.5em;
  border: none;
  color: white;
  border-radius: 3px;
  font-size: 20px;
  cursor: pointer;
}
#reg-button:hover {
  color: rgb(211, 22, 17);
  border: 1.5px solid rgb(211, 22, 17);
  font-weight: 500;
  background: transparent;
  box-shadow: 1px 1px 3px #555;
  text-shadow: 1px 1px 1px #555;
}
#downloading-text {
  font-size: 22px;
  margin-bottom: 3em;
  color: black;
}
#header-text {
  font-size: 80px;
  color: rgb(220, 28, 23);
}
#level-two-text {
  color: rgb(153, 153, 153);
  font-size: 20px;
  padding-bottom: 2em;
}
#mainContent {
  margin-top: 20%;
  margin-left: 20%;
}
.material-icons.main {
  font-size: 30vh;
  color: white;
  float: right;
  margin-top: 20%;
  margin-right: 10%;
}

@media (max-width: 1200px) {
  #mainContent {
    margin-top: 25%;
  }
  #header-text {
    font-size: 7.4vh;
  }
  #level-two-text,
  #downloading-text {
    font-size: 2.8vh;
  }
  #reg-button {
    font-size: 2vh;
  }
}
@media (min-width: 1500px) {
  #mainContent {
    padding-top: 10%;
  }
}
@media (min-width: 2500px) {
  #mainContent {
    margin-top: 30%;
  }
  #header-text {
    font-size: 7.4vh;
  }
  #level-two-text,
  #downloading-text {
    font-size: 2.8vh;
  }
  #reg-button {
    font-size: 2vh;
  }
}
.main-page{
    height: calc(100vh - 6vh);
}

</style>
