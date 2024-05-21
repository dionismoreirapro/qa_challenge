
# Projeto QAsr challenge

 O repositório tem 3 tipos de testes, web, API, mobile

## Projeto web
#### Pré-requisitos
> 1. node.js
> 2. cypress
> 3. cypress-cucumber-precessor
> 4. allure

#### Execução dos teste
> 1. npx cypress open


## Projeto API
#### Pré-requisitos
> 1. node.js
> 2. axios


#### Execução dos teste
> 1. npm test


## Projeto Mobile
#### Pré-requisitos
> 1. node.js
> 2. Appium
> 3. Appium Inspector
> 4. Emulador Android (Android Studio)
> 5. codeceptjs


### Configurações capability
> {
  "platformName": "Android",
  "appium:deviceName": "Android Emulator",
  "appium:automationName": "UIAutomator2",
  "appium:app": "Seu APK.apk"
}

#### Execução dos testes
> npx appium
> npx codeceptjs run --reporter mochawesome

