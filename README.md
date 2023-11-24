---
Date: 20.10.23 - Until End of Project
Title: Fullstack Webdev
Name: Daniel, Daniela und Jason
---


# **Fullstack Webentwicklung**


### Who's Expert?
Daniela: Most Frontend. 
Daniel: Backend(Alles ausser Datenbanken).
Jason: Datenbanken & Virtualisierung, Rest.


### Anforderungen ans Projekt
Frontend: Angular 
Backend: Node.JS
Datenbanke: MongoDB, MariaDB (Soll einfach austauschbar sein.)


### Fragen? 
Fragen wie Projekt vorgestellt wird.
- Decision support system erstellen.
    - Oeberflaeche soll ein Management System sein.
    - Basis fuer die ANwendung ist Datenmodell (uebung 2)
    - angular (fragen aus uebung 4)
- node.js backend soll auf eigene Test Api zugreifen und so die Daten abgreifen welche obige anforderungen erfuellen. 
Backend auch Docker? 
- Backend kann auch rein (Der prof empfiehlt) 
    
    
### Documentation


| Inhaltsverzeichnis | 
| -------- | 
| [Dependencies](#Dependencies)|
| [Database](#Database)|


#### Installation


> Debian: sudo apt install docker || sudo apt install docker-compose

Andere distro's funktionieren auch so, nur halt mit eigenem Package manager.
Dann das repo clonen und dann:

> docker-compose -f docker-compose.yml up --detach

#### Database
Hier stehen paar notizen zur DB
- Wir verwenden MariaDB
    - Warum?
        - Weil Jason (Der mann der DB) mit MariaDB schonma gearbeitet hat und so weniger lernzeit besteht.
- Zum Konfigurieren der DB verwenden wir phpmyadmin
    - Warum?
        - Siehe oben
    - Warum ueberhaupt extern Konfigurieren?
        - Spart viel zeit und aufwand
- docker-compose.yml 
    - Organisiert was gebraucht wird um den Docker container zu starten und zu benutzen.
