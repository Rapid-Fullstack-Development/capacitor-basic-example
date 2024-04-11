# capacitor-basic-example

A basic example of using Capacitor for a mobile application that accompanies the book [Rapid Fullstack Development](https://rapidfullstackdevelopment.com/).

This was created by following the [Capacitor getting started guide](https://capacitorjs.com/docs/) and then making a bunch of simplifications.

## Pre reqs

You need [Node.js](https://nodejs.org) installed to run this.

## Setup

```bash
cd capacitor-basic-example
npm install
```

## Note

The web page (frontend) in this example is simply a static web page using HTML and JavaScript. This example requires no build step for the frontend. Normally you would probably want to use a bundler like Webpack or Vite, but I wanted this example to be as simple as possible and it uses a static web page as the mobile frontend for simplicity.

## Run it in the browser 

Runs the "mobile app" in your web browser:

```bash
npm start
```

This is just to show you that it's just a static web page.

## Run it on mobile

First, sync the web project into the mobile build:

```bash
npx cap sync
```

## Android

You need [Android Studio](https://developer.android.com/studio) installed for this.

Open the project in Android Studio:

```bash
npx cap open android
```

Once Android Studio has opened:
- Hit the Run button in the toolbar to run app on the Android emulator; or
- Connect your Android mobile device and hit the Run button to run on the real device (you may first need to setup your device for development).

Run on Android directly from the terminal:

```bash
npx cap run android
```

## iOS

You need a Mac and XCode installed for this.

Open the project in XCode:

```bash
npx cap open ios
```

Once XCode has opened:
- Hit the Run button in the toolbar to run app on the iOS emulator; or
- Connect your iPhone/iPad and hit the Run button to run on the real device (you may first need to setup your device for development).

Run on iOS directly from the terminal:

```bash
npx cap run ios
```




