#Last Project for CS50's Web Programming with Python and Javascript.

Demonstration:
https://youtu.be/1NiM1BO5aiU
###Description:
SafeApp is an app where you can generate and save logins and passwords from your on line accounts or real life.
You can run this in your personal computer and store the passwords locally, without involving an online server.

###Requirements:

- Django

###Setup:
Make sure you have installed python.
Clone the github repository.
In the root folder, run:
pip install -r requirements.txt

###Running the app:
In the root folder:
python manage.py makemigrations safeapp
python manage.py migrate
python manage.py createsuperuser (follow the instructions)
python manage.py runserver
then go to your browser and goto:
127.0.0.1:8000
you can create a new user or continue using the superuser

##Description
It has three main sections:

### Passwords Section

This is the main page, where you can visualize all your stored entries.
By default your entries are hidden and just the title and date are shown. You can click them and it will display the rest of the information.
At the bottom of every entry, there's a edit option, where you can actually edit your entry.

![main](safeapp/static/main.png)
![edit](safeapp/static/edit.png)

###Generator Section

Here is where you can develop the new entries for your database. The fields are:

Title: (mandatory) Whats the general name of your entry ie: gmail

Username: weareequals@gmail.com

Password: (mandatory) Here is the real feature of the app, you can generate a strong password for your account in an interactive way. So the best way to manage your accounts is having this open while you are creating the account.

Notes: Any special note that you want to put, ie: account valid until 1/1/2023.

![pass](safeapp/static/passwords.gif)

![generating](safeapp/static/generating.png)

###Profile Section

Here you can visualize your username, the number of passwords.
It also has the option to export the database to text file so you can store locally or print it.
And you can delete your account, after a confirmation dialog.
These two options are next to the other, because if you want to emigrate, you do it easily here.

![profile](safeapp/static/profile.png)

![export](safeapp/static/export.png)
![delete](safeapp/static/delete.png)

##Usage
Every time you need a password, go to 127.0.0.1:8000, clearly before you have to activate the local server in the terminal (python manage.py runserver). If you manage multiple accounts you will need to leave a tab open so you can have a better management of your database.
You use the Application by creating an user, then go and start generating entries for your record.

##Summary
This project is more difficult than the others, because it uses a self-created python generator in the backend, which works in real time
with the front end. This makes the project more reactive when the user enters an input. Additionally, most of the site is CSS reactive to the user movements, making it more intuitive and easy to read.

Superuser:

Lets you administrate all the database from the dango interface.
django admin interface:
127.0.0.1:8000/admin

##Donate
Monero
8AWD9jQ1Enngz9KhzcS7zwJ1YcYJ82VdaGFT57uvZJqsNjMHzYwnS13XeXSPikXFUtf5i15pUEUYngWM1iFHUzkbUTPmSCS
![qrcode](safeapp/static/donations.png)
