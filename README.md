# About
:)
# Instructions
## Getting All Setup
Before you can build the project, some preparation needs to be done.
- Install [node.js](https://nodejs.org/en)
- Create an [expo.dev](https://expo.dev/) account
- Globally install expo-cli package via powershell

      npm install -g expo-cli

*If this step doesn't work, you need to fix your powershell permissions*

- Login to EAS via powershell
  
      eas login
  OR

      npx eas login

- Clone this repository

      git clone git@github.com:MyHighLow/UVI-Tracking-App.git

- SIDE NOTE: If you are having trouble with pushing commits because it would "expose your email", you can hide your email with this configuration

      git config --local user.email "<>"

- Install node packages

      cd UVI-Tracking-App

      npm install

## Building
To build the android app, run the following from within the project directory
    
    npx eas build --platform android

## Running
To run the android app, run the following from within the project directory

    npx expo start

This starts the expo server, and should generate a QR code that can be scanned with your mobile phone. This requires you install the **Expo Go** app on your device, and that your device and computer are on the same network.
