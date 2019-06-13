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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
