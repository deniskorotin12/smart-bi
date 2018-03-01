<template>
    <section class='udid-section'>
        <div class="infrormation"></div>
        <h1>Як отримати ідентифікатор (UDID) для iPhone, iPod або iPad</h1>
        <h2>Крок 1:</h2>
            <p>Запустіть ITunes</p>
            <img src="http://smartbi.com.ua/Krok1.jpg" alt="Крок Перший">
        <h2>Крок 2:</h2>
            <p>Підключіть свій iPhone, iPod або iPad.</p>
            <img src="http://smartbi.com.ua/Krok2.jpg" alt="Крок Другий">
        <h2>Крок 3:</h2>
            <p>Клікніть по назві пристрою в меню програми.</p>
            <img src="http://smartbi.com.ua/Krok3.jpg" alt="Крок Третій">
        <h2>Крок 4:</h2>
            <p>Клікніть по назві пристрою в меню програми.</p>
            <img src="http://smartbi.com.ua/Krok4.jpg" alt="Крок Четвертий">
        <h2>Крок 5:</h2>
            <p>Зверніть увагу, що серійний номер перетворитися на довгий рядок з літер і цифр. Це і є ідентифікатор / UDID.</p>
            <img src="http://smartbi.com.ua/Krok5.jpg" alt="Крок П'ятий">
   
    </section>
   
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    comp() {
      const comp = document.getElementById("computer-version");
      const phone = document.getElementById("phone-version");
      if (comp) {
        comp.style.display = "block";
      }
      if (phone) {
        phone.style.display = "none";
      }
    },
    phone() {
     const comp = document.getElementById("computer-version");
      const phone = document.getElementById("phone-version");
      if (comp) {
        comp.style.display = "none";
      }
      if (phone) {
        phone.style.display = "block";
      }
    }
  }
};
</script>
<style>

#udid-phone{
    border: none;
    cursor: pointer;
    background: #0152a3;
    padding: 1vh;
    color: white;
    border-radius: 5px;
    font-size: 2vh;
    text-transform: uppercase;
}
#udid-comp{
    border: none;
    cursor: pointer;
    background: #0152a3;
    padding: 1vh;
    color: white;
    border-radius: 5px;
    font-size: 2vh;
    text-transform: uppercase;
}

#udid-phone:hover{
    background:transparent;
    border: 2px solid #0152a3;
    color: #0152a3;
}
#udid-comp:hover{
    background:transparent;
    border: 2px solid #0152a3;
    color: #0152a3;
}


#computer-version {
  display: none;
}
#phone-version {
  display: none;
}
.udid-section {
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 6vh;
  left: 0;
  overflow: none;
}
.information {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0px 0px;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border: none;
}
img:last-child {
  margin-bottom: 6vh;
}
</style>
