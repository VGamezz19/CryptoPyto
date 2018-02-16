# 💱CryptoPyto

## Aplicación
Haga [Click aqui](http://cryptopyto.surge.sh/) para ver el diseño **actual** de la aplicacion.

## MockUp Inicial
![Imagen](https://github.com/VGamezz19/CryptoPyto/blob/vicBranch/design/mockUp.png)

# APP CRYPTOMONEDA
Aplicación que va a recoger datos de una API a tiempo real, para ver el mercado actual de las crypto monedas.

## Equipo
   - [Pablo Hortelano](https://github.com/phortela1n)
   - [Victor Gámez](https://github.com/VGamezz19)
   - [Nacho Miralles](https://github.com/nachomirsol)

## Tecnologias
   - ReactJS
   - ES6
   - API-Client
   - Jasmine
   - Jest
   - Bootstrap
   - jQuery
   - Sass
   - flexBox
   - Css3
   - Html5
   

### API 
    documentacion: https://www.cryptocompare.com/api/

## Flujo de trabajo 
Para desarrollar el flujo de trabajo se han utilizado las siguientes herramientas
   


### - Metodologias Agile con Trello
Hemos realizado un tablero KANBAM, con **4 apartados**, TODO, DOING, REVIEW y DONE, (enfocado a la metodologia `Scrum`) empezando por la creación de tareas y reparto de trabajo
por etiquetas de colores.

 **url:** https://trello.com/b/foWvSrdT/spa-09-02-2018



### GIT
Se ha creado un repositorio con el nombre de la app y se ha invitado a todos los integrantes del equipo. Hay dos ramas principales,
la rama master que sólo se tocará al principio una vez creada y al final para pasar todo el trabajo, y la rama develop.
Además, cada uno de nosotros se ha creado una rama propia para ir subiendo las actualizaciones.


 **url:** https://github.com/VGamezz19/CryptoPyto


### Explicación Proyecto
Cryptopyto es una app que permitirá realizar la búsqueda de las diferentes criptomonedas existentes en el mercado y mostrará los resultados a tiempo real. Para ello se ha procedido de la siguiente manera:


#### Estructura de la API
El archivo cryptoApi.js contendrá todas las llamadas a la API en cuestión. Se compone principalmente de 3 llamadas:
1. **cryptoApi.getCoins:** Nos devolverá la información de todas las monedas del mercado en un array de objetos.
2. **cryptoApi.getCoinHistorical:** Nos devolverá el historial de datos de la moneda que le solicitemos, los 20 últimos movimientos.
3. **cryptoApi.getCoinLastHistory:** Nos devolverá el último movimiento de datos obtenidos de la moneda buscada.


#### Estructura de directorios SRC
```
├── API-Cli
│   └── cryptoApi.js
├── __test__
│   ├── App.test.js
│   └── __test__RowComponent
│       ├── RowComponent.js
│       └── components
│           ├── ColChart.js
│           ├── ColChartRealTime.js
│           ├── ColName.js
│           ├── ColPrice.js
│           └── LoaderRow.js
├── components
│   ├── App.js
│   └── ContentApp
│       ├── ContentCoins
│       │   ├── ContentCoins.js
│       │   └── components
│       │       ├── IconsRow.js
│       │       └── Loader.js
│       ├── RowComponent
│       │   ├── RowComponent.js
│       │   └── components
│       │       ├── ColChart.js
│       │       ├── ColChartRealTime.js
│       │       ├── ColName.js
│       │       ├── ColPrice.js
│       │       └── LoaderRow.js
│       └── Search
│           ├── Search.js
│           └── components
│               ├── ContentRowSelect.js
│               ├── InputSearch.js
│               └── SelectInput.js
├── index.js
└── registerServiceWorker.js
```

#### Estructura de componentes React
La estructura principal de la aplicación contará un total de 10 componentes, distribuidos jerárquicamente como se muestra en el siguiente diagrama:
![image](https://github.com/VGamezz19/CryptoPyto/blob/nachoreactdir/public/img/flow-hierarchy-components1.png)

- **App** será el componente principal y será el encargado de transferir la información entre sus dos subcomponentes smart: ContentCoins y Search. App realizará la primera llamada a la API, cryptoApi.getCoins, para obtener toda la información de todas las monedas y así poder transferirla a sus dos subcomponentes. App además realiza otra llamada a una API creada específicamente para mostrar los iconos de las criptomonedas.

- El componente **Search** contendrá principalmente el input que se encargará de capturar los caracteres que introduzca el usuario para realizar la búsqueda instantánea de las criptomonedas que se aproximen a la búsqueda realizada. Se dividirá en 3 subcomponentes a los cuales le transferirá información: **ContentRowSelect**, **InputSearch** e **SelectInput**.

- El componente **ContentCoins** será el encargado de mostrar todas las rows o filas de la tabla con las criptomonedas. Este componente ContentCoins contedrá 3 subcomponentes a los cuales les transferirá la información: IconsRow, Loader y RowComponent.

- El componente **Loader** simplemente mostrará un icono de loading mientras se va cargando la información. Será un dump component.

- **IconsRow** es un dump component que se encargará de mostrar más filas cuando apretamos sobre el icono de la flecha.

- **RowComponent** será también un smart component y tendrá la responsabilidad de hacer la segunda y tercera llamadas a la API. La segunda llamada, cryptoApi.getCoinHistorical servirá para obtener el histórico de los 20 últimos movimientos de cada moneda. La tercera llamada, cryptoApi.getCoinLastHistory servirá para obtener el último valor de cada moneda, para lo cual necesitamos realizar las peticiones cada 15 segundos. Toda la información recibida de la API la utilizará el RowComponent para transferírsela a sus 5 subcomponentes dump: **ColName**, **ColPrice**,**ColChartHistory**, **ColChartRealTime** y **LoaderRow**.

- **ColName** es el componente que mostrará el nombre de la moneda. Éste se obtiene desde la primera llamada a la API en en el componente App y simplemente se va transmitiendo entre los subcomponentes hasta llegar a ColName.

- **ColPrice** es el componente funcional encargado de mostrar el valor actual de la moneda. Se actualizará cada 15 segundos.

- **ColChartHistory** es un componente funcional y mostrará la información de los 20 últimos valores de la moneda en forma de gráfico estático.

- **ColChartRealTime** es también un componente funcional y mostrará en forma de gráfico dinámico el último valor de la moneda. Se actualizará cada 15 segundos igual que ColPrice.

- **LoaderRow** es un componente funcional que utilizará RowComponent para realizar una animación mientras se van cargando las filas.
