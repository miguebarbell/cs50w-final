#Last Project for CS50's Web Programming with Python and Javascript.

###Description:
SafeApp is an app where you can generate and save logins and passwords from your on line accounts or real life.
You can run this in your personal computer and store the passwords locally, not on line server involved.

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

- Passwords Sections, this is the main page, where you can visualize all your stored entries.
  By default your entries are hided and just the title and date is showed, you can click them and it will display the rest of the information.
  At the bottom of every entry, there's a edit option, where you can actually edit your entry.
  [main](safeapp/static/main.png)
  [edit](safeapp/static/edit.png)

- Generator, here is where you can develop the news entries for your database. The fields are:
  Title: (mandatory) Whats the general name of your entry ie: gmail
  Username: weareequals@gmail.com
  Password: (mandatory) Here is the real feature of the app, you can generate a strong password for your account in a real interactive way. So the best way to manage your accounts is having this open while you are creating the account.
  Notes: Any special note that you want to put, ie: account valid until 1/1/2023.
  ![pass](safeapp/static/passwords.gif)
  [generating](safeapp/static/generating.png)
- Profile, Here you can visualize your username, the passwords quantity.
  Also have the option of export the database to text file so you can store locally or print it.
  And you can delete your account, after a confirmation dialog.
  These two options are next to the other, because if you want to emigrate, you do it easily here.
  [profile](safeapp/static/profile.png)
  [export](safeapp/static/export.png)
  [delete](safeapp/static/delete.png)

##Usage
So every time you need a password, go to 127.0.0.1:8000, clearly before you have to activate the local server in the terminal (python manage.py runserver). If you manage multiple accounts you will need to leave open a tab so you can have a better management of your database.
You use the Application by creating an user, then go and start generating entries for your record.

##Argument
This project its difficult than the others, because use a own created python generator in the backend, that work in real
with the front end. Making the project more reactive when the user make an input. Also the most of the site is CSS reactive to the user movements, making it more intuitive and easy to read.

Superuser:
Let you administrate all the database from the dango interface.
django admin interface:
127.0.0.1:8000/admin

##Donate
Monero
837kvcXaBVR4XihEjLNE343kNcYiQS1y84uDoPcMUzhPdVAn54dm6pCAZ4eq7F8RcTNtUniBfgdmvGf5BAgdDjDPTdK29SR
[qrcode](safeapp/static/donations.png)
