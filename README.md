Last Project for CS50's Web Programming with Python and Javascript.

[comment]: <> (porque es distinto y mas complejo que los anteriores.)

[comment]: <> (que hay en cada uno de los archivos creados)

[comment]: <> (como se usa la aplicacion)

Description:
SafeApp es un sitio donde puedes generar y guardar passwords.
SafeApp is an app where you can generate and save logins and passwords from your online accounts or real life.

Consta de 3 secciones principales:
It has three main sections:

- Passwords, esta es la pagina principal donde puedes ver toda la base de datos,
  estan todos los passwords hide, y con un click se despliega la informacion. Se puede copiar el usuario o el password con un solo click en el field, dando comodidad y eficiencia para poder realizar tareas cotidianas.
  en esta misma seccion existe la posibilidad de poder editar cada una de las entries.
- Passwords Sections, this is the main page, where you can visualize all your stored entries.
  By default your entries are hided and just the title and date is showed, you can click them and it will display the rest of the information.
  At the bottom of every entry, there's a edit option, where you can actually edit your entry.

- Generator, en esta seccion generas las nuevas entries para tu database. Esta la posibilidad de elegir un password generado randomly, que siempre a lo menos genera un password de 6 con 2 numeros, un lowercase y un uppercase, se puede manejar la longitud hasta 50 caracteres y poner simbolos.
- Generator, here is where you can develop the news entries for your database. The fields are:
  Title: (mandatory) Whats the general name of your entry ie: gmail
  Username: weareequals@gmail.com
  Password: (mandatory) Here is the real feature of the app, you can generate a strong password for your account in a real interactive way. so the best way to manage your accounts is having this open while you acre acreating the account.
  Notes: Any special note that you want to put, ie: account valid until 1/1/2023.

- Profile, se visualizan la cantidad de passwords que tienes guardados, hay dos opciones principales, exportar todos los passwords a un txt file, o borrar el profile (con un dialogo de confirmacion)
- Profile, Here you can visualize your username, the passwords quantity.
  Also have the option of export the datbase to textfile so you can store locally or print it.
  And you can delete your account, after a confirmation dialog.
  These two options are next to the other, because if you want to emigrate, you do it easily here.

La aplicacion se usa creando un usuario, posteriormente, agregando entries con passwords ya creados o generados para crear un nuevo account en alguna otra parte.

Este ultimo proyecto tiene una mayor dificultad ya que usa un password generator que realiza el trabajo en el backend, recibiendo los parametros desde el frontend en tiempo real.
Ademas la aplicacion tiene una alta respuesta a lo que el usuario realice, ya sea destacando botones o las lineas

[comment]: <> (cualquier otra informacion)
