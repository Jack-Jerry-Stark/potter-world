
let app = {
    init: function () {
        app.addListenerToActions();
        //app.BgMouseOver();
        //app.BgMouseOut();
        app.setHours();
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

    },
    /*BgMouseOver: function() {
    const el = document.querySelector("#bg");
    const move = 20;
    
    el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -10 + "px"; 
    el.style.backgroundPositionY = -10 + "px";
    });
    }BgMouseOver: function() {
    document.querySelector(body).style.backgroundPositionY = "100px"
    },
    BgMouseOut: function() {
        document.querySelector(body).style.backgroundPositionY = "0px"
    },*/
    setHours: function(){
        let date = new Date();
        let hours = date.getHours();
        const body = document.getElementById('body');
        console.log(hours);
        if (hours > 20 || hours < 6 ){
            body.classList.add('night');
        }
        else if (hours < 9 || hours >17){
            body.classList.add('sunlight');
        }
        else if (hours >= 9 || hours < 17){
            body.classList.add('sun');
        }
        else{
            body.classList.add('night');
        }

    }
    // BgChangeHour: function() {
        

    //     const body = document.getElementById('body');
        
    //     hours.addEventListener('change', () => {
            
    //         });
    //     }
        
};
    document.addEventListener('DOMContentLoaded', app.init );

