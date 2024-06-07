Mind


La aplicación "Mind" es una plataforma innovadora diseñada para ayudar, relajar y calmar a los usuarios mediante el uso de audios y luces controladas por un dispositivo Arduino. Con un enfoque en el bienestar y la comodidad, "Mind" ofrece una experiencia única para quienes buscan aliviar el estrés y mejorar su estado de ánimo.
Podemos encontrala en la rama ProyectoFinal 
Funcionalidades Principales

    Reproducción de audios relajantes.
    Control de luces mediante Arduino para crear ambientes tranquilos.
    Recomendaciones personalizadas de métodos de relajación basadas en las preferencias del usuario.

Componentes Principales
Componente de Audio

El componente de audio permite a los usuarios reproducir una variedad de pistas relajantes para ayudar en la relajación y el bienestar.
Componente de Arduino

Utilizando un Arduino Uno, un protoboard, resistencias y LEDs, "Mind" controla las luces para crear ambientes calmantes y relajantes.
Base de Datos

"Mind" utiliza Supabase como su base de datos para almacenar información de usuarios y preferencias de relajación.
Servidor

El servidor de "Mind", desarrollado con Express.js, utiliza Socket.IO para la comunicación en tiempo real entre el cliente y el servidor. Además, se utiliza SerialPort para la comunicación con el dispositivo Arduino.
Configuración y Ejecución del Proyecto

Para ejecutar el proyecto "Mind", sigue estos pasos:

    Asegúrate de tener un Arduino Uno, un protoboard, resistencias y LEDs.
    Clona el repositorio desde GitHub.
    Instala las dependencias del proyecto utilizando el comando npm install.
    Inicia el servidor con el comando npm run server.
    Inicia la aplicación con el comando npm run dev.

Uso de la Aplicación

Una vez que la aplicación esté en funcionamiento, los usuarios pueden registrarse, explorar diferentes opciones de audios y luces, y recibir recomendaciones personalizadas basadas en sus preferencias.

Colaboradores

El desarrollo del proyecto "Mind" fue posible gracias al esfuerzo y la dedicación de un equipo multidisciplinario de cuatro integrantes:

  *Valentina Arango*: Valentina desempeñó un papel fundamental en el diseño de la experiencia de usuario (UX) de la aplicación "Mind", asegurando una experiencia cohesiva y atractiva para los usuarios finales. Su creatividad y atención al detalle fueron fundamentales para garantizar que la aplicación fuera intuitiva y fácil de usar. Además, contribuyó significativamente al desarrollo del servidor, implementando funcionalidades clave para la interacción entre el cliente y el servidor.

  *Sebastian Gonzalez*: Sebastian fue responsable de la maquetación de las pantallas de la aplicación "Mind" y del desarrollo de componentes clave. Utilizando sus habilidades en CSS, creó interfaces visualmente atractivas y funcionales. Además, lideró el desarrollo del sistema de control de luces utilizando Arduino, integrando de manera efectiva la tecnología de hardware con la aplicación.

  *Santiago Cuadros*: Santiago también participó en la maquetación de las pantallas de la aplicación "Mind", contribuyendo con su experiencia en el diseño de componentes para garantizar una interfaz coherente y fácil de navegar. Además, desempeñó un papel importante en el desarrollo del servidor, implementando características esenciales para la comunicación entre el cliente y el servidor.

  *Juan Martin Lopez*: Juan Martin se destacó en el diseño y la conceptualización del proyecto, utilizando herramientas como Figma para dar vida a la visión del equipo. Además de su habilidad en diseño, Juan Martin contribuyó al desarrollo del front-end, aplicando su experiencia en CSS y componentes para mejorar la estética y la usabilidad de la aplicación.

El trabajo en equipo, la colaboración y la creatividad de estos cuatro colaboradores fueron esenciales para el éxito del proyecto "Mind". Su dedicación y compromiso garantizaron la entrega de una aplicación de alta calidad que busca mejorar el bienestar y la comodidad de sus usuarios.


Notas Adicionales

La aplicación "Mind" ofrece una característica especial: la capacidad de recomendar métodos de relajación personalizados según las elecciones de los usuarios durante el registro.
