# JSON
JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer utilizado para transmitir y almacenar información estructurada.
Es ampliamente utilizado en JavaScript y en otros lenguajes de programación.

JSON se basa en dos estructuras de datos principales:

1. **Objeto**: Es una colección no ordenada de pares clave-valor. Las claves son cadenas de texto y los valores pueden ser de cualquier tipo de datos válido en JSON (números, cadenas, booleanos, objetos, arreglos o null). 
2. Un objeto en JSON se representa entre llaves ({}) y cada par clave-valor se separa por comas (,).

   Por ejemplo, un objeto JSON que representa a una persona podría ser:
   ```
   {
     "nombre": "Juan",
     "edad": 25,
     "ciudad": "Madrid"
   }
   ```

2. **Arreglo**: Es una secuencia ordenada de valores. Un arreglo en JSON se representa entre corchetes ([]) y los elementos se separan por comas.

   Por ejemplo, un arreglo JSON que contiene una lista de colores podría ser:
   ```
   ["rojo", "verde", "azul"]
   ```

JSON es ampliamente utilizado en aplicaciones web para enviar datos entre un servidor y un cliente, ya que es fácil de parsear y generar en JavaScript. 
Se utiliza para transmitir datos estructurados a través de servicios web y API RESTful, así como para almacenar configuraciones, datos de usuario y otros tipos de información.

En JavaScript, puedes convertir un objeto JavaScript en una cadena JSON utilizando el método `JSON.stringify()`, y puedes convertir una cadena JSON en un objeto JavaScript utilizando el método `JSON.parse()`. 
Estas funciones te permiten trabajar con datos en formato JSON de forma sencilla y conveniente.
