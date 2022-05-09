# DICOM image handler

![Image](https://github.com/JwRicauter/imageHandler/blob/master/frontend/public/example.png?raw=true)


This is a project made it with django and react to create and explore dicom images with meta data.

## Installation

You need to have python, node and pip/yarn for django and react -or another package handlers for those project- to run this project. 

Firs of all, create a virtual environment and activate it.

```
python3 -m venv /path/to/new/virtual/environment
source /path/to/new/virtual/environment/bin/activate
``` 

After that in the backend/imagehandler folder, install the django requirements with the command:

```
pip3 install -r requirements.txt
```

Finally, run the backend with the comand

```
DJANGO_ENV=development ./manage.py runserver
```

In another tab, access to the frontend folder and run:

```
yarn install
```

Finally add this variables inside an .env file and run the front end:

```
REACT_APP_API_HOST=http://localhost:8000/api
WDS_SOCKET_PORT=3000
```

```
yarn start
```

And that's everything, run the project in ```localhost:8000``` to checkout the app!

