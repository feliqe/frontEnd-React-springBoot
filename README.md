## Spring boot - react backend APP


* Components de spring instalar
    * spring web
    * spring  Data JPA
    * MySQL Driver
    * spring boot DevTools
    * rest respositories

------------------------------------ CONCEPTOS -------------------------------

- en la class Product es donde definiremos los campos de la tabla de products de la base de datos.
- en ProductRepository se ingresa como respositories el nombre de la base de datos para poder realizar el CRUD a la tabla por medio de la configuración de spring boot, que permite realizar cada acción de CRUD sin definir funciones en los controladores.
- en application.properties es donde se ingresar la conexión a la base de datos.
- en POSTMAN se realiza la seccuencia de CRUD por medio de GET,POST, DELETE y PUT.
- en DataRestConfig realizamos la implementación de la función para poder acceder a visualizar el id de cada campos en la tabla cada vez que se realiza una consulta.

-----------------ORDEN DE CREACION DE DOCUMENTOS----------------

- crear package respositories
- crear package entities
- en entities crear la class Product
- en respositories crear la interface ProductRepository
- en la raiz crear la class DataRestConfig
