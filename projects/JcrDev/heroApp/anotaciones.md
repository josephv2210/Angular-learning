# Anotaciones del curso

el presente repositorio tiene como objetivo recopilar las anotaciones del curso de desarrollo de aplicaciones web. A continuación, se detallan los puntos más importantes tratados durante las sesiones:

## arquitaectura

se crearon 3 carpetas principales:
core: no debe depender de features
global, unico en toda la app
features: si puede usar core y features
funcionalidades especificas de la app, puede depender de core y features
shared: no depende ni de core ni features
puede utilizar codigo reutilizable, como componentes, servicios o utilidades que pueden ser compartidos entre diferentes partes de la aplicación.
