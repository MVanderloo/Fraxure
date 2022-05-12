# Fraxure Dev Manual

## Setting up the Application
### Requirements:
Access to the repository
Computer with internet access, and the following software
Python v3
Nodejs v14 

### Repository:
The application is a website that will be running on some machine. The repository will need to be cloned to that machine.

### Dependencies:
For the backend, Python 3 is needed along with some packages. These are contained within Fraxure/backend/requirements.txt.
*** For the sec_edgar_downloader package, lines 266 - 270 must be commented out of _utils.py so the download path matches what the code expects ***
For the frontend, the application dependencies are contained within package.lock, and are downloaded with ‘yarn install’.

## Running the Application
### Fraxure:
Running our application entails starting both the frontend and backend, and ensuring they are pointed at each other. At this stage, two terminals are needed to run both components. Flask runs on port 3000 by default and React is set to run on port 5000. 

### Frontend:
Our frontend lives in the directory Fraxure/frontend. Our frontend was created with create-react-app through npm, and used yarn as our javascript package manager. For scripts including running the frontend, use ‘yarn run start’. The frontend React components were largely created by hand with HTML and javascript. 

### Backend:
Our backend lives in the directory Fraxure/backend. It is a flask app with entrypoint backend/app.py. Its respective functionality is split into various directories. To run the backend, you should run the flask application either through the flask command line tool ‘flask run’ or running the entrypoint application directly, ‘python app.py’. It is recommended to create a virtual environment using the venv package.

## Further Development
There were many features that we had planned but did not get to. To develop the application further, here are some good places to start
Setup Production environment for flask, rather than using Dev server
Serve static react build rather than live rendering
Store TagTog credentials with the browser/backend so you do not have to login every time
Show table of results from search and have various actions for filtering and modifying what is sent to TagTog
There is an unfinished version of the website created with react-bootstrap under the frontendUI branch in the directory frontend2, that can be utilized for further development.
