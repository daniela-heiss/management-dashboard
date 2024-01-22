---
Date: 20.10.23
Title: Fullstack Webdev
Name: Daniel, Daniela und Jason
---


# **Fullstack Webentwicklung**


### Who did What?
Daniela: Frontend und Serviceschicht
Daniel: Backend
Jason: Datenbanken & Virtualisierung 


### Requirements to the Project
Frontend: Angular 
Backend: Node.JS
Datenbanke: MariaDB

# Documentation

## Installation & Setup
Since we're using Linux for our Testing/Prod environment, this Installation will follow a "Linux Debian" setup.
#### Docker installation
- Debian & Ubuntu:
    > sudo apt install docker  
    > sudo apt install docker-compose
- Make sure you have docker correctly setup
    - User is in group docker
        > groups
    - if output does not inclue "docker"
        > sudo usermod -a -G docker "username"
        - and reboot machine.
- You can download the source code in a .zip or clone the repo
    - If you want to use https, you can skip the next step
    - If you want to clone using SSH: Please make sure you have setup an SSH-Key for the cloning. 
        - If you haven't, please follow this guide from Github (this is for Linux): 
            > https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux
#### Installing the Repo:
- Git clone the repo.
    > git clone 
    - https:
    > https://gitlab.ai.it.hs-worms.de/fullstack-webapplications-wise-2023/group-d/fwa-project
    - ssh:
    > [git@gitlab.ai.it.hs-worms.de:fullstack-webapplications-wise-2023/group-d/fwa-project.git](git@gitlab.ai.it.hs-worms.de:fullstack-webapplications-wise-2023/group-d/fwa-project.git)
- enter fwa-project/
    > cd fwa-project/
- Install npm
    > sudo apt install npm 
- Install the Node packages needed
    > npm install
- Use following Command to fire up the Docker Container:
    > docker-compose -f docker-compose.yml up --detach
    - Should you run into an "no such file" error. (Happens on WSL environments).
        > sudo service docker start
#### Importing the Dummy-Data into the DB
- Step into the DB folder
    > cd db/
- Once inside you can use the following command to import (If you've changed the Password in docker-compose, you may use a different set of user:password)
    > docker exec -i db mariadb -u root -p"example" fwaProject < fwaProject.sql

#### Running the Server
- Go into fwa-project/app/ folder to install needed modules for the Backend:
    > cd ../app/
    > npm install
- After installing, run the backend Server:
    > node apps.js &
- Now you can go and setup the front-end:
    > cd ../website/
    > npm install
    > npm run ng serve

#### Accessing the Homepage
- The most simple step, navigate to
    > http://localhost:4200/
- and you will see the homepage.

## Managing Data
#### Managing the DB
- You can manage the DB by either using the mariadb-cli tool which is in included in the Docker container
- You can use the Phpmyadmin interface which you can find under: 
    > Find it under: localhost:8085
    > Server: fwaProject | User: root | Pass: example
- You will find our Database modell in the TPC-H specification

## Tests
#### Running Backend Tests
- If you want to run Backend Tests:
    - Make sure you're in folder app/
    > npm test
- If you want to run Frontend Tests:
    - Make sure you're in folder website/
    > npm run ng test