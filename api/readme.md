### ```API Documentation```
```
Endpoints of the API for tasks.

GET All tasks => Localhost:3010/tasks

GET One task => Localhost:3010/tasks/:id

DELETE tasks => Localhost:3010/tasks

POST tasks => Localhost:3010/tasks

UPDATE tasks => Localhost:3010/tasks
```

```
Endpoints of the API for Users.

GET All Users => Localhost:3010/users

GET One User => Localhost:3010/users/:id

DELETE Users => Localhost:3010/users

POST Users => Localhost:3010/users

UPDATE Users => Localhost:3010/users

```
### ```Technologies```
```
DataBases =>  MongoDB y Mongoose
Back End => Expressjs, NodeJs, Javascript
Fron End =>  ReactJS-Typescript, Redux Toolkit, MaterialUI
Diseños =>  Figma, otros
```



### ```About```
```
Aplicacion de tareas para usuarios que esten trabajando en un E-commerce u otra plataforma y quieran organizar su trabajo para que sea mas facil y llevadero.
Se debe parecer a NOTION o ODOO ORM, pero implementado con Tienda nube y que tenga mas funcionalidades, sencillo de leer.
```
```
=>  Realizar un servidor el cual posea el CRUD completo de las tareas.
    => Primer Nivel =>  El usuario puede Crear, Borrar, Actualizar y obtener las diferentes tareas.
    

    => Segundo nivel => El usuario aparte de tener esas funcionalidades podra ver para que dia estan creadas las tareasy poder asignarselas a un producto de su tienda en particular.
```


```
=>  Realizar los diferentes Roles para poder elgir entre Premium y Standard user.
    => Primer Nivel => Usuario Standard podra hacer CRUD completo de las tasks.

    => Segundo Nivel =>  Definir que funcionalidades podra tener el usuario premium
```

```
=>  El usuario Premium debe abonar mensualmente un estimado de plata, segun la plataforma lo indique, a su vez se le va a dar permisos para poder tener diferentes pases a la app
    => Estudiar las diferentes formas de crear roles y poder realizar con diferentes pagos, que se descuenten mensualmente de la tarjeta de credito, a su vez que se pueda desuscribir como usuario Premium
```

```
=>  Estudiar la API de Tienda nube para obtener los productos desde la Tienda nube en la que se conecte el pluguing
    => Primer nivel => implementar una funcionalidad que me traiga el producto especificado de esa tienda nube para asgnarle una tarea


    => Segundo nivel => (Lo estoy pensando) Deberia de el usuario poder actualizar el producto en tienda nube desde nuestra plataforma, con las tasks que el le indica con un tiempo de finalizacion.
```