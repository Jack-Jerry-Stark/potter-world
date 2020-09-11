
let app = {
    init: function () {
        app.addListenerToActions();
        //app.BgMouseOver();
        //app.BgMouseOut();
        app.BgChangeHour();
    },
    
    addListenerToActions: function() {
        const chk = document.getElementById('chk');
        chk.addEventListener('change', () => {
            app.darkOrLight();
        });
    },
    darkOrLight: function () {
        const logo = document.getElementById('logo');
        const body = document.getElementById('body');
        body.classList.toggle('dark');
        //logo.classList.remove('logo');
        logo.classList.toggle('dark');

    },/*
    BgMouseOver: function() {
    const el = document.querySelector("#bg");
    const move = 20;
    
    el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -10 + "px"; 
    el.style.backgroundPositionY = -10 + "px";
    });
    }*/BgMouseOver: function() {
    document.querySelector(body).style.backgroundPositionY = "100px"
    },
    BgMouseOut: function() {
        document.querySelector(body).style.backgroundPositionY = "0px"
    },
    BgChangeHour: function() {
        let date = new Date();
        let hours = date.getHours();
        console.log(hours);
        const body = document.getElementById('body');
        hours.addEventListener('change', () => {
            switch(hours) {
                case(hours <=9): body.classList.toggle('sunlight');
            break;
            
            case(hours <=17): body.classList.toggle('sun');
            break;

            case(hours <=5): body.classList.toggle('night');
            break;
            }
            });
        }
        
};
    document.addEventListener('DOMContentLoaded', app.init );

