# About
:)
# Instructions
## Getting All Setup
Before you can build the project, some preparation needs to be done.
1. Install [node.js](https://nodejs.org/en)
1. Create an [expo.dev](https://expo.dev/) account
3. Globally install expo-cli package via powershell
>npm install -g expo-cli

4. Login to EAS via powershell
>eas login

OR
>npx eas login

5. Clone this repository
>git clone git@github.com:MyHighLow/UVI-Tracking-App.git

6. Install node packages
>cd UVI-Tracking-App
>npm install

## Building
To build the android app, run the following from within the project directory
>npx eas build --platform android

## Running
To run the android app, run the following from within the project directory
>npx expo start

This starts the expo server, and should generate a QR code that can be scanned with your mobile phone. This requires you install the **Expo Go** app on your device, and that your device and computer are on the same network.
