# Guess the Picture!

Este proyecto es un experimento para aprender acerca de `Angular` y sus *features*. La aplicación busca ser un juego sencillo, en que el jugador recibe cinco palabras generadas aleatoriamente y una imagen, y tiene que adivinar cuál de las palabras es el título o la leyenda de la imagen.

## Solución

Como es mencionado más arriba, esta aplicación fue desarrollada haciendo uso del *framework* `Angular` junto a la librería NGXS para manejar el estado. La aplicación es dividida en cuatro componentes y la `store` de NGXS es dividida en tres módulos distintos que implementan distintas acciones y contienen distintas partes del estado.

### Componentes

Como fue mencionado anteriormente, la aplicación es dividida en cuatro componentes que buscan separar las responsabilidades. Estas son divididas según tema, para que el código sea más mantenible. Cada componente se encuentra ubicado en uno de los directorios que se encuentran dentro del directorio `src/app`.

#### Score

Este componente corresponde a la funcionalidad relacionada al puntaje del jugador en el juego. Cuando el jugador adivina un título, éste gana un punto si acierta y no gana uno si no acierta. Este componente es responsable de mostrar esta información al jugador, para que sepa cómo le está yendo.

#### Picture

Este componente corresponde a la funcionalidad relacionada a la imagen desplegada. El componente se dedica tanto a cargar la imagen, como a desplegarla para mostrarla al usuario.

#### Words

Este componente actúa como contenedor para las palabras que el usuario puede adivinar. Así, también es responsable de cargar las distintas palabras.

#### Word

Este componente se encarga tanto de desplegar cada palabra, como a despachar las acciones relacionadas a esta. En otras palabras, se dedica a despachar la acción correspondiente a resolver cada apuesta. Además, se encarga de mostrar si la palabra es la correcta o si no lo es.

### Store

Como es mencionado más arriba, la `store` de NGXS es dividida en tres módulos pertinentes según las distintas responsabilidades. Estos se encuentran en los directorios que están ubicados dentro del directorio `src/store`.

#### Picture

Este módulo se encarga de guardar la información relacionada a la imagen, como la `URL` donde está ubicada. Además, se encarga de implementar las acciones correspondientes a cargar la imagen.

#### Score

Este módulo se encarga de guardar la información relacionada al puntaje, como la cantidad de aciertos del jugador y de los intentos totales. Además, se encarga de implementar las acciones correspondientes a actualizar el puntaje.

#### Words

Este módulo se encarga de guardar la información relacionada a las palabras, como las distintas palabras y la palabra correcta. Además, se encarga de implementar las acciones correspondientes a escoger la palabra correcta y adivinar el título.

## Corriendo la aplicación

Para correr la aplicación, es necesario haber instalada la línea de comandos de `Angular`. Para esto, una opción es ejecutar el comando

```
npm install -g @angular/cli
```

Luego, para correr la aplicación basta con correr

```
ng serve
```

y se obtendrá un servidor de desarrollo con *hot-reload*. La aplicación quedará corriendo en `http://localhost:4200/`.
