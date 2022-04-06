#!/bin/bash

if [ "$DEBUG" != "true" ]; then
    #npm run build
    #echo "starting prod server"
    #npm install -g serve 
    #serve -s build -l 80
    echo "starting dev server"
    npm run start
else
    echo "starting dev server"
    npm run start
fi
