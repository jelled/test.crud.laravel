# Crud Test App

## Task
Create a module with CRUD (Create, read, update and delete) operation with list pagination, proper routing and validation. Preferred to be seen in the form of webservice, with a base API to operate all the options. Looking for POC (proof of concept).


-   Write a restful api that allows CRUD access to a single resource with validation for POST/PUT requests.
-   Allow filtering of result set based on pagination values (ie grab page X or result set with Y items/page).
-   Front-end application to display information
-   Preferred framework: Laravel


## Installation Instructions
Clone the repository to your directory and open a command window

    git clone git@github.com:jelled/test.crud.laravel.git

Update any required packages

    composer update

Add your database credentials to

    /app/config/database.php

Setup the tables

    php artisan migrate

Seed the tables

    php artisan db:seed

Fire up laravel's built in server

    php artisan serve

And open your browser to

    http://localhost:8000


## REST Routes
Get Paginated Results

    http://localhost:8000/players

Get Single Result

    GET http://localhost:8000/players/:id

Create a new record

    POST http://localhost:8000/players

Delete a record

    DELETE http://localhost:8000/players/:id

Update a record

    PUT http://localhost:8000/players/:id
