# VideoCallWebApp

## About

VideoCallWebApp is a project where you can host a call meetings, chat and send audio voice, that I made with my friend [AnouarSaadi][1] and [elahyani][2].

## Understanding the configuration

docker-compose contains two containers, a container for database and another one for visualizing postgres database
</br>the environment variables contains:
- `POSTGRES_PASSWORD` -- password for postgres
- `POSTGRES_PASSWORD` -- the user for postgres
- `POSTGRES_PASSWORD` -- the db name for postgres
- `PGADMIN_DEFAULT_EMAIL` -- the email for pgadmin
- `PGADMIN_DEFAULT_PASSWORD` -- the password for pgadmin

## Building and running the project

1. Download/Clone this repo

        git clone https://github.com/Pyt45/VideoCallWebApp

2. `cd` into the root directory and run `npm i`

        cd VideoCallWebApp
        npm i

3.  Run `npm`
	
		npm start

4.	Access The app using your browser.
	
		https://localhost:3001 # server
		https://localhost:3000 # client

[1]: https://github.com/AnouarSaadi
[2]: https://github.com/elahyani