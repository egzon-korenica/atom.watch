'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Raphael from 'raphael';
Vue.use(VueRouter);

import App from './Components/App/index.vue';

export const router = new VueRouter({
  base: __dirname,
  routes: [
    {
        name: 'index',
        path: '/',
        component: App
    },
    {
        name: 'egzon',
        path: '/clock/:fmt/:tz',
        component: App
    },
    {
        name: 'clock-with-style',
        path: '/clock/:fmt/:tz/:style',
        component: App
    },
    {
        name: 'egzon',
        path: '/timer',
        component: App
    },
    {
        name: 'timer-with-style',
        path: '/timer/:style',
        component: App
    },
    {
        name: 'finalcountdown',
        path: '/countdown/:time',
        component: App
    },
    {
        name: 'countdown-with-style',
        path: '/countdown/:time/:style',
        component: App
    },
  ]
});

const chars = {
          "0": "m 2.198995,50.552489 c 0,-22.099448 12.43094,-45.303868 30.66299,-45.303868 18.23204,0 30.93922,23.20442 30.93922,45.303868 0,22.099447 -12.70718,44.19889 -30.93922,44.19889 -18.23205,0 -30.66299,-22.099443 -30.66299,-44.19889",
          "1": "m 25.417457,5.648839 c 0,0 15.19337,0 15.19337,0 0,0 0,88.674037 0,88.674037 0,0 0,0 0,0 0,0 0,0 0,0",
          "2": "m 7.848463,29.456352 c 1.65746,-32.0441986 48.0663,-30.9392266 48.89503,0.552486 0,9.392265 -8.01105,20.441989 -20.16575,33.701657 -7.7348,8.83978 -18.78453,18.23204 -28.17679,30.38674 0,0 49.72376,0 49.72376,0",
          "3": "m 14.818762,25.138122 c -1.38122,-14.917127 11.32596,-19.889503 18.78453,-19.889503 31.21547,0 25.6906,43.093923 0,43.093923 32.32044,0 27.90055,46.408839 0.27624,46.408839 -25.4143602,0 -24.3093902,-16.574585 -24.0331502,-20.441989",
          "4": "m 63.924893,74.294939 c 0,0 -61.8784582,0 -61.8784582,0 0,0 47.5138082,-66.8508296 47.5138082,-66.8508296 0,0 0,66.8508296 0,66.8508296 0,0 0,18.23204 0,18.23204",
          "5": "m 60.892959,5.8734488 c -30.38674,0 -30.38674,0 -30.38674,0 -10.49724,32.0441992 -10.49724,32.0441992 -10.49724,32.0441992 13.81216,-6.629834 40.3315,3.867403 40.3315,28.176796 -2.76243,29.834254 -42.54144,38.121546 -55.2486199,13.812154",
          "6": "m 38.754531,5.7267336 c 0,0 0,0 0,0 C 17.207571,38.323419 4.5003914,45.505739 3.3954114,64.29027 c 3.31492,43.40387 61.8784596,36.46409 59.1160296,0 C 58.644031,31.141099 19.970001,30.036126 7.5390614,49.925629",
          "7": "m 2.62251,5.790256 c 0,0 61.32596,0 61.32596,0 0,0 -17.29281,30.607734 -17.29281,30.607734 0,0 -22.2652,31.104968 -22.2652,31.104968 0,0 -22.32044,26.68509 -22.32044,26.68509",
          "8": "m 34.670928,48.342539 c -31.4917187,-0.552486 -31.4917187,-42.5414355 0,-42.5414355 29.28176,0 29.28176,42.5414355 0,42.5414355 -31.4917187,0 -35.9116087,45.856357 0,45.856357 29.28176,0 29.28176,-45.856357 0,-45.856357",
          "9": "m 58.46103,50.446899 c -12.43094,19.8895 -51.1049734,18.78453 -54.9723764,-14.36464 -2.76243101,-36.46409014 55.8011054,-45.3038681 59.1160224,0 -1.104972,18.78453 -13.812155,25.96685 -35.359116,58.56354 0,0 0,0 0,0",
          ":": "m 33.0001,25 m -2,0 a 2,2 0 1 0 4,0 2,2 0 1 0 -4,0 m 2,50 m -2,0 a 2,2 0 1 0 4,0 2,2 0 1 0 -4,0",
          ".": "m 33.0001,92.198897 m -2,0 a 2,2 0 1 0 4,0 2,2 0 1 0 -4,0",
          " ": ""
};


Vue.directive('tween-chars', (el, binding, vnode) => {
    if (el.children.length < binding.value.value.length) {
        el.tweenHolders = [];
        el.innerHTML = "";
        for (let i = 0; i < binding.value.value.length; i++) {
            let holder = document.createElement('span');
            el.tweenHolders[i] = Raphael(holder, 66, 100).path(chars[binding.value.value[i]]).attr({
                "stroke": binding.value.color,
                "stroke-width": "4",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
            });
            el.appendChild(holder);
        }
        return;
    }

Vue.directive('tween-chars', (el, binding, vnode) => {
    if (el.children.length < binding.value.value.length) {
        el.tweenHolders = [];
        el.innerHTML = "";
        for (let i = 0; i < binding.value.value.length; i++) {
            let holder = document.createElement('span');
            el.tweenHolders[i] = Raphael(holder, 66, 100).path(chars[binding.value.value[i]]).attr({
                "stroke": binding.value.color,
                "stroke-width": "4",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
            });
            el.appendChild(holder);
        }
        return;
}
    

Vue.directive('copy-on-click', {
    bind: (el) => {
        el.addEventListener('click', (e) => {
            let textarea = document.createElement('textarea');
            let success = undefined;
            let failed = undefined;
            if (typeof(el.CopyOnClickValue) === "object") {
                textarea.appendChild(document.createTextNode(el.CopyOnClickValue.value));
                success = el.CopyOnClickValue.success;
                failed = el.CopyOnClickValue.failed;
            }
            else {
                textarea.appendChild(document.createTextNode(el.CopyOnClickValue));
            }
            textarea.style.position = "fixed";
            textarea.style.left = "-100px";
            textarea.style.top = "-100px";
            textarea.style.opacity = 0;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                if (document.execCommand('copy')) {

                    if (success !== undefined) {
                        success();
                        console.log("success");
                    }
                }
                else {
                    if (failed !== undefined) {
                        failed();
                    }
                }
            }
            catch (err) {
                if (failed !== undefined) {
                    failed(err);
                }
                else {
                    console.error(err);
                }
            }
            textarea.remove();
        });
    },
    update: (el, binding) => {
        el.CopyOnClickValue = binding.value;
    }
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)  
});
