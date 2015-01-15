# Project 6 - Be home

Project 6 is een groepsproject van de Hogeschool van Amsterdam opleiding Communication and Multimedia Design.
Tijdens dit project hebben we samengewerkt met UNITiD Amsterdam als opdrachtgeven vanuit de HVA.
Dit project in Github bevat de source code van een Phonagap applicatie die wij ontwikkeld hebben als eindproduct voor dit project.

Om gebruik te kunnen maken van de source code is het van belang de volgende stappen even te doorlopen:
* Install nodejs
* Install NPM package manager
* Install gruntjs
* Install git client
* Run $ `cordova npm install`
* Test `cordova` command
* Install IOS sdk, xcode
* Run $ `npm install`
* Run $ `grunt development`
* Run $ `cordova build ios`
* Build ios application in Xcode

## Bestanden en mappen in de root

development - wordt gebruikt voor de Javascript en _scss_ development in de _www_ folder.
Gruntjs voegt de bestanden samen en verkleint het naar 1 bestand.

hooks - Phonegap map voor project hooks.

platform/ios - Phonegap maakt hier de smartphone applicatie na het runnen van $ `cordova build ios`.
In deze folders kunnen ook de uiteindelijke smartphone applicaties gemaakt worden.

plugins - Phonegap plugins voor de smartphone applicaties

www - In de www staan alle _HTML_, _Javascript_ en _css_ bestanden die phonegap gebruikt om de smartphone applicaties te maken.

## Workflow

Alle _HTML_ die gebruikt wordt is te vinden in _www/index.html_ en is verpakt in _handlebars_ templates. 
De _css_ die gebruikt wordt in de _HTML_ wordt gemaakt van _scss_ files die te vinden zijn in _development/scss_ en deze worden compiled door Grunt. `grunt development`
De _Javascript_ die gebruikt wordt in de _HTML_ wordt gemaakt van de losse .js files in _development/js_.
_Javascript_ regelt de routing van de pagina's in de applicatie, routing is te vinden in _development/js/app/router.js_
De _HTML_ kan gewoon getest worden in de browser, zorg er wel voor dat de mobile parameter op `false` staat bij het bekijken in de browser en op `true` bij het bekijken in de applicatie.
De mobile parameter is te vinden onderaan in de _www/index.html_

Als de _HTML_ is gemaakt en getest kan er een ios applicatie gemaakt worden via de cordova cli tools. Ga naar de root en run het $ `cordova build ios` command.
De _www_ map wordt nu gekopieerd naar _platfoms/ios_
Door het _Project.xcodeproj_ te open in Xcode kan er een ios applicatie gemaakt worden. Te vinden in _platforms/ios/Project.xcodeproj_
