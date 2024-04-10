import { SplashScreen } from "@capacitor/splash-screen";

//
// Replaces the text of a DOM element.
//
function replaceText(selector, text) {
    const element = document.getElementById(selector)
    if (element) {
        element.innerText = text;
    }
}

window.addEventListener('DOMContentLoaded', () => {

    replaceText('message', "Hello world!");

    SplashScreen.hide();
});