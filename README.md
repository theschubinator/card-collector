# Card Collector
An application to help a user keep track of their sports cards. You can track your cards by name, value, date, or brand.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for developement.

### Understanding the File Structure
###### Rails
The main Rails applicaiton resides within /app directory. 
Here you will have access to the controllers, models, and other important resources
###### React
The React application resides withint the /client directory. 
Inside ofR /client/src you will find all the components of the 
React application and where all the Magic happends!

### Forking the Repo
	 1. Go ahead an fork the repo from above. 
	 2. Click on the Cone or download button above and copy the github link to your clipboard. 
	 3. Then open your terminal on your local machine and navigate to the directory where 
	    you would like to place the repo. 
	 4. In the terminal type, ```clone git@github.com:theschubinator/card-collector.git```
	 5. Next type cd card-collector and open your favorite code editor to begin working.  

### Getting the Application Running in Development 
First lets install the necessary gem files. In the root of your project, type ...
```
bundle install
```
Next, lets setup our Client-Side React Application. Again from the root of your directory type ...
```
cd client && npm install
```
Inside of lib/tasks there is a rake file that utilizes the foreman gem that we can 
take advantage of to start both our rails and react servers. From the root of the 
directory type ...
```
rake start
```
and this should start your servers, and automatically open your application in the browser.

### Setting up the database
This application utilizes a postgres database. If you need to setup the database you can do so by typing...
```
rake db:create
```
This will create our new database. Likewise, if something goes wrong, you can drop the database and start the process over by typing...
```
rake db:drop
```
Next, we need to add our migrations. This will add models and schema to our database by typing...
```
rake db:migrate
```
Finally, we can add some seed data to our application by typing...
```
rake db:seed
```
From here you should be able to follow the directions above to start off your application in developement. 
If you seeded the data, there should already be a user to play around with my logging in with the following credintials 
```
username: test 
password: test
```

### Questions
If you have any issues or thoughts with the application please email them to andrew.schubert1986@gmail.com.