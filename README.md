# Generador de Contraseñas con Flask

Este es un generador de contraseñas seguro implementado con Python (Flask) en el backend y HTML, CSS y JavaScript en el frontend. Permite a los usuarios especificar la longitud de la contraseña y los tipos de caracteres que desean incluir (mayúsculas, minúsculas, números y símbolos).

## Funcionalidades

* **Longitud Personalizable:** El usuario puede elegir la longitud de la contraseña deseada (entre 4 y 32 caracteres).
* **Selección de Tipos de Caracteres:** Opciones para incluir o excluir mayúsculas, minúsculas, números y símbolos.
* **Generación Segura:** Genera contraseñas aleatorias utilizando la librería `random` de Python.
* **Interfaz Web Sencilla:** Un formulario intuitivo para configurar las opciones de la contraseña.
* **Copiado al Portapapeles:** Un botón para copiar fácilmente la contraseña generada al portapapeles del usuario.
* **Validación:** Muestra mensajes de error si la longitud no es válida o si no se selecciona ningún tipo de carácter.

## Cómo Utilizar

1.  **Clona este repositorio** a tu máquina local:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
    (Reemplaza `<URL_DEL_REPOSITORIO>` con la URL de tu repositorio en GitHub).

2.  **Navega al directorio del proyecto:**
    ```bash
    cd generador_contrasenas_flask
    ```

3.  **Asegúrate de tener Flask instalado:** Si no lo tienes, puedes instalarlo con pip:
    ```bash
    pip install Flask
    ```

4.  **Ejecuta la aplicación Flask:**
    ```bash
    python app.py
    ```
    Esto iniciará el servidor de desarrollo de Flask.

5.  **Abre tu navegador web** y ve a `http://127.0.0.1:5000/`.

6.  **Configura las opciones de la contraseña:** Elige la longitud y los tipos de caracteres que deseas incluir.

7.  **Haz clic en el botón "Generar Contraseña".** La contraseña generada aparecerá en el campo de texto.

8.  **Haz clic en el botón "Copiar"** para copiar la contraseña al portapapeles.

## Tecnologías Utilizadas

* **Backend:** Python, Flask
* **Frontend:** HTML, CSS, JavaScript

## Posibles Mejoras Futuras

* **Indicador de Fortaleza de Contraseña:** Mostrar una estimación de la seguridad de la contraseña generada.
* **Opción para excluir caracteres similares** (ej: l, 1, o, 0).
* **Generación de "passphrases"** (frases fáciles de recordar pero seguras).
* **Personalización avanzada** de los conjuntos de caracteres.
* **Integración con un sistema de almacenamiento de contraseñas** (con precaución y seguridad).

## Autor

Isaacpsy
