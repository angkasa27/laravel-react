# Laravel with React

This is just a testing page for exploring laravel with react

## Requirement
Make sure you have the following installed:
- PHP (version 8.2 or above)
- Composer
- Node.js and npm

## Init Project

#### Install Dependencies
```
composer install
npm install
```

#### Set Up Env


#### Set Up Database
```
touch database/database.sqlite
php artisan migrate
```


## Run Project

Just run
```
composer run-script dev
```

or if you prefer to run the front end and backend separately
```
php artisan serve
npm run dev
```

Once both servers are running, open your browser and navigate to `localhost:8000` or `http://127.0.0.1:8000` to see the application.