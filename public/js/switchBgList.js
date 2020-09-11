// const chk = document.getElementById('chk');

// chk.addEventListener('change', () => {
//     document.body.classList.toggle('darkList');
// });

let app = {
    init: function () {
        app.addListenerToActions();
    },
    
    addListenerToActions: function() {
        const chk = document.getElementById('chk');
        chk.addEventListener('change', () => {
            app.darkOrLight();
        });
    },
    darkOrLight: function () {
        const logo = document.getElementById('logo');
        const bodyList = document.getElementById('bodyList');
        bodyList.classList.toggle('dark');
        //logo.classList.remove('logo');
        logo.classList.toggle('dark');
    }
    };
    
    document.addEventListener('DOMContentLoaded', app.init );


