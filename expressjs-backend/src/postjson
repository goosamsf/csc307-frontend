#!/bin/bash
echo "This shell script uses __curl__ command letting user easily post users info"

read -p "Enter User id : " USERID 
read -p "Enter User's job : " JOB

read -p "Enter User's name : " NAME


curl -d '{ "id": "'"$USERID"'", "job" : "'"$JOB"'", "name" : "'"$NAME"'"}' -H 'Content-Type: application/json' -X POST http://localhost:8000/users
