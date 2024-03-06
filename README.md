# Conserje Inteligente

El proyecto "Conserje Inteligente" es una solución de software que busca automatizar y mejorar las tareas y responsabilidades de un conserje o recepcionista.

## Guía para iniciar el proyecto

Aquí están los comandos que necesitas para iniciar tu proyecto. Asegúrate de tener instalado Node.js la versión 18.16.1 y Yarn en tu sistema antes de ejecutar estos comandos.

```bash
# Instala las dependencias del proyecto
yarn install

# Construye el proyecto
yarn build

# Inicia el servidor de desarrollo
yarn dev
```

Sigue estos pasos en orden. Primero, yarn install instalará todas las dependencias necesarias para tu proyecto. Luego, yarn build creará una versión de producción de tu proyecto. Finalmente, yarn dev iniciará el servidor de desarrollo, permitiéndote ver y probar tu proyecto en un entorno local.

## Estructura del Proyecto

Este proyecto utiliza una arquitectura de capas para desarrollar un backend usando Parse Server con Cloud Functions. A continuación se describe la estructura de las carpetas del proyecto:

- 📂 `cloud`: Carpeta principal que contiene todas las Cloud Functions.
  - 📄 `main.ts`: Archivo principal que es la entrada de todas las Cloud Functions.
  - 📂 `conserge-inteligente`: Carpeta del proyecto.
    - 📂 `controllers`: Contiene los controladores que se encargan de enviar la respuesta al cliente.
      - 📄 `adviceController.ts`: Controlador para las operaciones relacionadas con los Advice.
      - 📄 `cocktailController.ts`: Controlador para las operaciones relacionadas con los cócteles.
      - 📄 `eventController.ts`: Controlador para las operaciones relacionadas con los eventos.
      - 📄 `foodController.ts`: Controlador para las operaciones relacionadas con la comida.
      - 📄 `reservationController.ts`: Controlador para las operaciones relacionadas con las reservas.
      - 📄 `serviceController.ts`: Controlador para las operaciones relacionadas con los servicios.
      - 📄 `personController.ts`: Controlador para las operaciones relacionadas con las personas.
      - 📄 `drinkControllers.ts`: Controlador para las operaciones relacionadas con las bebidas.
      - 📄 `userController.ts`: Controlador para las operaciones relacionadas con las usuarios
    - 📂 `services`: Contiene los servicios que se encargan de la lógica del negocio.
      - 📄 `adviceService.ts`: Servicio para la lógica de negocio relacionada con los Advice.
      - 📄 `cocktailService.ts`: Servicio para la lógica de negocio relacionada con los cócteles.
      - 📄 `eventService.ts`: Servicio para la lógica de negocio relacionada con los eventos.
      - 📄 `foodService.ts`: Servicio para la lógica de negocio relacionada con la comida.
      - 📄 `reservationService.ts`: Servicio para la lógica de negocio relacionada con las reservas.
      - 📄 `serviceService.ts`: Servicio para la lógica de negocio relacionada con los servicios.
      - 📄 `personService.ts`: Servicio para la lógica de negocio relacionada con las personas.
      - 📄 `drinkService.ts`: Servicio para la lógica de negocio relacionada con las bebidas.
      - 📄 `userService.ts`: Servicio para la lógica de negocio relacionada con las usuarios.
    - 📂 `database`: Se encarga de la interacción con la base de datos.
      - 📄 `advices.ts`: Interacción con la base de datos para los Advice.
      - 📄 `cocktails.ts`: Interacción con la base de datos para los cócteles.
      - 📄 `events.ts`: Interacción con la base de datos para los eventos.
      - 📄 `foods.ts`: Interacción con la base de datos para la comida.
      - 📄 `reservations.ts`: Interacción con la base de datos para las reservas.
      - 📄 `services.ts`: Interacción con la base de datos para los servicios.
      - 📄 `persons.ts`: Interacción con la base de datos para las personas.
      - 📄 `drinks.ts`: Interacción con la base de datos para las bebidas.
      - 📄 `users.ts`: Interacción con la base de datos para los usuarios.
    - 📂 `triggers`: Contiene los triggers de Parse .
      - 📄 `trigger.ts`: Importa todos los triggers para tener una sola entrada para estos.
      - 📄 `userTriggers.ts`: Triggers relacionados con los usuarios.
      - 📄 `drinkTriggers.ts`: Triggers relacionados con las bebidas.
      - 📄 `adviceTriggers.ts`: Triggers relacionados con los advice.
      - 📄 `cocktailTriggers.ts`: Triggers relacionados con los cócteles.
      - 📄 `eventTriggers.ts`: Triggers relacionados con los eventos.
      - 📄 `foodTriggers.ts`: Triggers relacionados con la comida.
      - 📄 `reservationTriggers.ts`: Triggers relacionados con las reservas.
      - 📄 `serviceTriggers.ts`: Triggers relacionados con los servicios.
      - 📄 `personTriggers.ts`: Triggers relacionados con las personas.
    - 📂 `models`: Contiene las interfaces de cada una de las entidades.
      - 📄 `advice.interface.ts`: Interfaz para Advice.
      - 📄 `cocktail.interface.ts`: Interfaz para los cócteles.
      - 📄 `event.interface.ts`: Interfaz para los eventos.
      - 📄 `food.interface.ts`: Interfaz para la comida.
      - 📄 `reservation.interface.ts`: Interfaz para las reservas.
      - 📄 `service.interface.ts`: Interfaz para los servicios.
      - 📄 `person.interface.ts`: Interfaz para las personas.
      - 📄 `drink.interface.ts`: Interfaz para las bebidas.
      - 📄 `user.interface.ts`: Interfaz para las usuarios.
    - 📂 `routes`: Contiene las rutas de las Cloud Functions.
      - 📄 `index.ts`: Importa todas las Cloud Functions para tener una sola entrada para estas.
      - 📄 `adviceClouds.ts`: Cloud Functions relacionadas con los advice.
      - 📄 `cocktailClouds.ts`: Cloud Functions relacionadas con los cócteles.
      - 📄 `eventClouds.ts`: Cloud Functions relacionadas con los eventos.
      - 📄 `foodClouds.ts`: Cloud Functions relacionadas con la comida.
      - 📄 `reservationClouds.ts`: Cloud Functions relacionadas con las reservas.
      - 📄 `serviceClouds.ts`: Cloud Functions relacionadas con los servicios.
      - 📄 `personClouds.ts`: Cloud Functions relacionadas con las personas.
      - 📄 `drinkClouds.ts`: Cloud Functions relacionadas con las bebidas.
      - 📄 `userClouds.ts`: Cloud Functions relacionadas con los usuarios.
    - 📂 `schemas`: Contiene los esquemas de validación con Yup.
      - 📄 `adviceSchema.ts`: Esquema de validación para los advice.
      - 📄 `cocktailSchema.ts`: Esquema de validación para los cócteles.
      - 📄 `eventSchema.ts`: Esquema de validación para los eventos.
      - 📄 `foodSchema.ts`: Esquema de validación para la comida.
      - 📄 `reservationSchema.ts`: Esquema de validación para las reservas.
      - 📄 `serviceSchema.ts`: Esquema de validación para los servicios.
      - 📄 `personSchema.ts`: Esquema de validación para las personas.
      - 📄 `drinkSchema.ts`: Esquema de validación para las bebidas.
      - 📄 `userSchema.ts`: Esquema de validación para los usuarios.
    - 📂 `validators`: Contiene la lógica de validación que se importa en los triggers.
      - 📄 `validateUser.ts`: Validación para los usuarios.
      - 📄 `validateDrink.ts`: Validación para las bebidas.
      - 📄 `validateAdvice.ts`: Validación para los advice.
      - 📄 `validateCocktail.ts`: Validación para los cócteles.
      - 📄 `validateEvent.ts`: Validación para los eventos.
      - 📄 `validateFood.ts`: Validación para la comida.
      - 📄 `validateReservation.ts`: Validación para las reservas.
      - 📄 `validateService.ts`: Validación para los servicios.
      - 📄 `validatePerson.ts`: Validación para las personas.
    - 📂 `utils`: Contiene funciones que realizan tareas repetitivas y que se pueden llamar en cualquier lugar del código.
      - 📄 `accesControl.ts`: Función para verificar rol del usuario, y controlar el acceso segun un rol determinado.
      - 📄 `assignRoles.ts`: Permite asignar roles a los usuarios
      - 📄 `authHelpers.ts`: Función para verificar si un usuario esta autenticado.
      - 📄 `sendToIaEndpoints.ts`: Función para enviar datos al endpoint de una API de inteligencia atificial(IA)

Cada carpeta y archivo tiene un propósito específico y juntos forman la estructura completa del proyecto.

# Descripción detallada

- 📂 `controllers`: Contiene los controladores que se encargan de manejar las solicitudes entrantes y enviar respuestas a los clientes. Cada controlador se encarga de una entidad específica y contiene funciones para manejar las operaciones CRUD (Crear, Leer, Actualizar, Borrar) para esa entidad.

- 📂 `validators`: Contiene la lógica de validación que se utiliza en los triggers y en otras partes de la aplicación para asegurar que los datos sean válidos antes de ser procesados o almacenados en la base de datos.

- 📂 `services`: Contiene los servicios que encapsulan la lógica del negocio. Cada servicio se encarga de una entidad específica y contiene funciones para realizar operaciones relacionadas con esa entidad, como asignación roles, verificación de roles, etc.

- 📂 `routes`: Contiene las rutas de las Cloud Functions. Cada archivo en esta carpeta define las rutas o endpoints para una entidad específica y asocia cada ruta con una función del controlador correspondiente.

- 📂 `models`: Contiene las interfaces de cada una de las entidades. Las interfaces definen la estructura de los datos para cada entidad, especificando los campos y sus tipos.

- 📂 `database`: Se encarga de la interacción con la base de datos. Contiene archivos que definen las operaciones de la base de datos para cada entidad, como consultas, inserciones, actualizaciones y eliminaciones.

- 📂 `triggers`: Esta carpeta contiene los triggers de Parse. Los triggers son funciones que se ejecutan automáticamente en respuesta a ciertos eventos en la aplicación, como la creación, actualización o eliminación de un objeto. En este proyecto, los triggers se utilizan para realizar dos tareas principales:

  - **Validación**: Antes de que se realice una operación en una entidad (como crear, actualizar o eliminar), el trigger correspondiente verifica que los datos sean válidos. Esto puede incluir comprobar que los campos obligatorios estén presentes, que los datos estén en el formato correcto, etc.
  - **Verificación de sesión**: Los triggers también se utilizan para comprobar si un usuario está autenticado antes de permitirle realizar una operación. Si un usuario no está autenticado, la operación se rechaza.

- 📂 `utils`: Esta carpeta contiene funciones que realizan tareas repetitivas y que se pueden llamar en cualquier lugar del código. En el proyecto se utiliza para verificar roles, verificar si un usuario esta autenticado entre otros.

# Formato de respuestas

Puede ser un objeto, un string o un array dependiendo de la solicitud

## Objeto de Respuesta

```json
{
  "status": "success",
  "result": true,
  "data"
}
```

# Descripción de los errores

Cada error devuelto por la API tiene un código y un mensaje asociado.

## Objeto de Error

Cuando ocurre un error, la API devuelve un objeto de error en la respuesta. Ejemplo de como se ve el objeto error:

```json
{
  "status": "error",
  "result": false,
  "errorDetails": {
    "code": 101,
    "message": "Objeto no encontrado"
  }
}
```

A continuación se muestra la tabla con la descripción y código de cada error:

## ParseException.ErrorCode Enumeration

hola memlsls

| Member Name                 | Value | Description                                                                                                                                                                                          |
| --------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OtherCause                  | -1    | Error code indicating that an unknown error or an error unrelated to Parse occurred.                                                                                                                 |
| InternalServerError         | 1     | Error code indicating that something has gone wrong with the server. If you get this error code, it is Parse's fault. Please report the bug to https://parse.com/help.                               |
| ConnectionFailed            | 100   | Error code indicating the connection to the Parse servers failed.                                                                                                                                    |
| ObjectNotFound              | 101   | Error code indicating the specified object doesn't exist.                                                                                                                                            |
| InvalidQuery                | 102   | Error code indicating you tried to query with a datatype that doesn't support it, like exact matching an array or object.                                                                            |
| InvalidClassName            | 103   | Error code indicating a missing or invalid classname. Classnames are case-sensitive. They must start with a letter, and a-zA-Z0-9\_ are the only valid characters.                                   |
| MissingObjectId             | 104   | Error code indicating an unspecified object id.                                                                                                                                                      |
| InvalidKeyName              | 105   | Error code indicating an invalid key name. Keys are case-sensitive. They must start with a letter, and a-zA-Z0-9\_ are the only valid characters.                                                    |
| InvalidPointer              | 106   | Error code indicating a malformed pointer. You should not see this unless you have been mucking about changing internal Parse code.                                                                  |
| InvalidJSON                 | 107   | Error code indicating that badly formed JSON was received upstream. This either indicates you have done something unusual with modifying how things encode to JSON, or the network is failing badly. |
| CommandUnavailable          | 108   | Error code indicating that the feature you tried to access is only available internally for testing purposes.                                                                                        |
| NotInitialized              | 109   | You must call Parse.initialize before using the Parse library.                                                                                                                                       |
| IncorrectType               | 111   | Error code indicating that a field was set to an inconsistent type.                                                                                                                                  |
| InvalidChannelName          | 112   | Error code indicating an invalid channel name. A channel name is either an empty string (the broadcast channel) or contains only a-zA-Z0-9\_ characters and starts with a letter.                    |
| PushMisconfigured           | 115   | Error code indicating that push is misconfigured.                                                                                                                                                    |
| ObjectTooLarge              | 116   | Error code indicating that the object is too large.                                                                                                                                                  |
| OperationForbidden          | 119   | Error code indicating that the operation isn't allowed for clients.                                                                                                                                  |
| CacheMiss                   | 120   | Error code indicating the result was not found in the cache.                                                                                                                                         |
| InvalidNestedKey            | 121   | Error code indicating that an invalid key was used in a nested JSONObject.                                                                                                                           |
| InvalidFileName             | 122   | Error code indicating that an invalid filename was used for ParseFile. A valid file name contains only a-zA-Z0-9\_. characters and is between 1 and 128 characters.                                  |
| InvalidACL                  | 123   | Error code indicating an invalid ACL was provided.                                                                                                                                                   |
| Timeout                     | 124   | Error code indicating that the request timed out on the server. Typically this indicates that the request is too expensive to run.                                                                   |
| InvalidEmailAddress         | 125   | Error code indicating that the email address was invalid.                                                                                                                                            |
| DuplicateValue              | 137   | Error code indicating that a unique field was given a value that is already taken.                                                                                                                   |
| InvalidRoleName             | 139   | Error code indicating that a role's name is invalid.                                                                                                                                                 |
| ExceededQuota               | 140   | Error code indicating that an application quota was exceeded. Upgrade to resolve.                                                                                                                    |
| ScriptFailed                | 141   | Error code indicating that a Cloud Code script failed.                                                                                                                                               |
| ValidationFailed            | 142   | Error code indicating that a Cloud Code validation failed.                                                                                                                                           |
| FileDeleteFailed            | 153   | Error code indicating that deleting a file failed.                                                                                                                                                   |
| RequestLimitExceeded        | 155   | Error code indicating that the application has exceeded its request limit.                                                                                                                           |
| InvalidEventName            | 160   | Error code indicating that the provided event name is invalid.                                                                                                                                       |
| UsernameMissing             | 200   | Error code indicating that the username is missing or empty.                                                                                                                                         |
| PasswordMissing             | 201   | Error code indicating that the password is missing or empty.                                                                                                                                         |
| UsernameTaken               | 202   | Error code indicating that the username has already been taken.                                                                                                                                      |
| EmailTaken                  | 203   | Error code indicating that the email has already been taken.                                                                                                                                         |
| EmailMissing                | 204   | Error code indicating that the email is missing, but must be specified.                                                                                                                              |
| MustCreateUserThroughSignup | 207   | Error code indicating that a user can only be created through signup.                                                                                                                                |
| AccountAlreadyLinked        | 208   | Error code indicating that an account being linked is already linked to another user.                                                                                                                |
| InvalidSessionToken         | 209   | Error code indicating that the current session token is invalid.                                                                                                                                     |
| LinkedIdMissing             | 250   | Error code indicating that a user cannot be linked to an account because that account's id could not be found.                                                                                       |
| InvalidLinkedSession        | 251   | Error code indicating that a user with a linked (e.g. Facebook) account has an invalid session.                                                                                                      |
| UnsupportedService          | 252   | Error code indicating that a service being linked (e.g. Facebook or Twitter) is unsupported.                                                                                                         |

para más información consultar la documentación: https://parseplatform.org/Parse-SDK-dotNET/api/html/T_Parse_ParseException_ErrorCode.htm

# Arquitectura de Seguridad para API en Parse Server

La seguridad consta de 4 capas

1. **Autenticación de Usuarios**:

   - El usuario intenta realizar una operación CRUD.
   - Verificamos si el usuario está autenticado.

2. **Control de Acceso Basado en Roles (RBAC)**:

   - Si el usuario está autenticado, entonces verificamos el rol del usuario.
   - Tienes 4 roles: superadmin, IA, admin, user.
   - Según el rol del usuario, se le permite o no realizar la operación.

3. **Control de Acceso a Nivel de Objeto (ACL)**:

   - Si el usuario tiene el rol correcto, entonces verificas los permisos a nivel de objeto.
   - Controlamos quiénes pueden leer o escribir un objeto específico.

4. **Permisos a Nivel de Clase (CLP)**:
   - Además de los ACL, también puedemos establecer permisos a nivel de clase.
   - Controlas las operaciones que se pueden realizar en una clase entera.
