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


### Anforderungen ans Projekt
Frontend: Angular 
Backend: Node.JS
Datenbanke: MariaDB

# Documentation


| Inhaltsverzeichnis | 
| -------- | 
| [Dependencies & Installation](#Dependencies)|
| [Database](#Database)|

## Dependencies & Installation
Since we're using Linux for our Testing/Prod environment, this Installation will follow a Linux Debian setup.
#### Docker installation
- Debian & Ubuntu:
    > sudo apt install docker  
    > sudo apt install docker-compose
- We require Access to clone a Gitlab repo. Please make sure you have setup an SSH-Key for the cloning. If you haven't, please follow this guide from Githubd (this is for Linux): 
    > https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux
#### Installing the Repo:
- Git clone the repo.
- enter fwa-project/
    > cd fwa-project/
- Use following Command to fire up the Docker Container:
    > docker-compose -f docker-compose.yml up --detach
#### Importing the Dummy-Data into the DB
- Step into the DB folder
    > cd db/
- Once inside you can use the following command to import (If you've changed the Password in docker-compose, you may use a different set of user:password)
    > docker exec -i db mariadb -u root -p"example" fwaProject < fwa_project.sql

## Database
#### Managing the DB
- You can manage the DB by either using the mariadb-cli tool which is in included in the Docker container
- You can use the Phpmyadmin interface which you can find under: 
    > Find it under: localhost:8085
    > Server: fwaProject | User: root | Pass: example
