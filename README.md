# Django-React-Test

Test project for separate django and react

## Setup

### Backend

- Environment variables
  - `BUILD_CONFIG`: dev / prod
  - `SECRET_KEY`
  - Postgresql Database (Production)
    - `DATABASE_NAME`
    - `DATABASE_USER`
    - `DATABASE_PASSWORD`
    - `DATABASE_HOST`
    - `DATABASE_PORT`

### Frontend

- Environment variables
  - `REACT_APP_BASEURL`: Base url of the backend without trailing forward slash

## Running

### Backend
1. Open a terminal and cd command to backend directory
2. Create an environment variable and activate
    ```
    python -m venv venv
    venv\Scripts\activate
    ```
3. Install packages
    ```
    pip install -r requirements.txt
    ```
4. Go to source and do migrations
    ```
    cd src
    python manage.py makemigrations
    python manage.py migrate
    ```
5. Create a superuser and follow the prompts
    ```
    python manage.py createsuperuser
    ```
6. Run server
    ```
    python manage.py runserver
    ```
7. Populate data in here: http://127.0.0.1:8000/admin/item/item/

### Frontend
1. Open a terminal and cd command to frontend directory
2. Install packages
    ```
    npm install
    ```
3. Run frontend
    ```
    npm start
    ```

## Frameworks / Tools Used

1. Django
2. ReactJS

## Resources

1. [Front end template](https://mdbootstrap.com/) from Material Design Bootstrap
