import"./assets/styles-1f07fd8e.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";const h="/goit-js-hw-10/assets/iconizer-free-icon-font-cross-circle-3917206-25f95916.svg",t={inputDate:document.querySelector("#datetime-picker"),btnStart:document.querySelector("[data-start]"),timerDays:document.querySelector("[data-days]"),timerHours:document.querySelector("[data-hours]"),timerMinutes:document.querySelector("[data-minutes]"),timerSeconds:document.querySelector("[data-seconds]")};t.btnStart.disabled=!0;let a;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a>new Date?t.btnStart.disabled=!1:(t.btnStart.disabled=!0,f.error({message:"Please choose a date in the future",backgroundColor:"red",messageColor:"white",position:"topRight",iconUrl:h,iconColor:"#959595"}))}};m(t.inputDate,S);t.btnStart.addEventListener("click",b);function y(e){const r=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:u,minutes:d,seconds:l}}function o(e){return String(e).padStart(2,0)}function b(){t.btnStart.disabled=!0;const e=setInterval(()=>{let n=a-Date.now();if(t.inputDate.disabled=!0,n<=0){clearInterval(e),t.inputDate.disabled=!1;return}const{days:s,hours:i,minutes:c,seconds:r}=y(n);t.timerDays.textContent=o(s),t.timerHours.textContent=o(i),t.timerMinutes.textContent=o(c),t.timerSeconds.textContent=o(r)},1e3)}
//# sourceMappingURL=commonHelpers.js.map