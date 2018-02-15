# CryptoPyto
Haga [Click aqui](http://disgusted-picture.surge.sh/) para ver el diseño **actual** de la aplicacion.

![Imagen](https://github.com/VGamezz19/CryptoPyto/blob/vicBranch/design/mockUp.png)

# APP CRYPTOMONEDA
Aplicación que va a recoger datos de una API a tiempo real, para ver el mercado actual de las crypto monedas.

## Equipo
   - Pablo Hortelano
   - Victor Gámez
   - Nacho Miralles

## Tecnologias
   - ReactJS
   - ES6
   - API-Client
   - sass
   - jquery
   - bootstrap
   - css3
   - flexBox
   - html5

### API 
    documentacion: https://www.cryptocompare.com/api/

## Flujo de trabajo 
Para desarrollar el flujo de trabajo se han utilizado las siguientes herramientas
   


### - Metodologias Agile con Trello
Hemos realizado un tablero KANBAM, con **4 apartados**, TODO, DOING, REVIEW y DONE, (enfocado a la metodologia `Scrum`) empezando por la creación de tareas y reparto de trabajo
por etiquetas de colores.

 **url:** https://trello.com/b/foWvSrdT/spa-09-02-2018



### - GIT
Se ha creado un repositorio con el nombre de la app y se ha invitado a todos los integrantes del equipo. Hay dos ramas principales,
la rama master que sólo se tocará al principio una vez creada y al final para pasar todo el trabajo, y la rama develop.
Además, cada uno de nosotros se ha creado una rama propia para ir subiendo las actualizaciones.


 **url:** https://github.com/VGamezz19/CryptoPyto


### Explicación Proyecto
Cryptopyto es una app que permitirá realizar la búsqueda de las diferentes criptomonedas existentes en el mercado y mostrará los resultados a tiempo real. Para ello se ha procedido de la siguiente manera:


#### Estructura de la API
El archivo cryptoApi.js contendrá todas las llamadas a la API en cuestión. Se compone principalmente de 3 llamadas:
1. cryptoApi.getCoins: Nos devolverá la información de todas las monedas del mercado en un array de objetos.
2. cryptoApi.getCoinHistorical: Nos devolverá el historial de datos de la moneda que le solicitemos, los 20 últimos movimientos.
3. cryptoApi.getCoinLastHistory: Nos devolverá el último movimiento de datos obtenidos de la moneda buscada.


#### Estructura de componentes React
![image](/Users/nachomirallessoler/Documents/App/CryptoPyto/public/img)
Vamos a tener un total de 7 componentes, distribuidos en 1 padre, 2 hijos y 1 nieto y 4 biznietos.
El padre será quien contendrá toda la App, la tabla. El hijo será una fila de la tabla y los nietos serán cada una de las columnas de la fila.
- El componente <App> será un smart component. 
- El componente hijo <RowComponent/> será un smart component.
- Los 4 nietos <ColName/><ColPrice><ColChartHistory><ColChartRealTime> serán functional components.

El componente App o padre de todos los componentes será el encargado de renderizar la app y de recibir los datos de la primera llamada de la Api cryptoApi.getCoins, con todas las monedas en un array de objetos. Por lo tanto tendrá estado, el que recibe toda la información de las monedas y las muestra, dataCoins:[] y showCoins:[]

El componente hijo <RowComponent dataCoin =... /> recibirá del padre la propiedad dataCoin, que contedrá toda la información de la moneda en cuestión. Este componente tendrá la responsabilidad de hacer la segunda llamada a la API cryptoApi.getCoinHistorical, que recibirá el histórico de los últimos 20 movimientos de la moneda en cuestión. Hasta aquí la parte estática.

Tras la llamada al histórico, este componente realizará también la tercera llamada a la API cryptoApi.getCoinHistorical. Esta llamada nos devolverá el último movimiento de valores de la moneda. Como se actualiza cada x minutos y su valor varía con el tiempo, esta última petición la introducimos en un setInterval, de esta manera se irán renderizando las últimas variaciones de la moneda.