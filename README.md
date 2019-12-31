# developer_profile_generator

# Description

A command line application that produces a dynamically generated PDF resume from a user provided GitHub profile.
The generated resume a user's bio image and location from
their GitHub profile as well as number of public repositories, followers, and following count. The headline
of the generated PDF matches the color that the user picks
from the initial prompts. 

The purpose of this application is to provide stakeholders
up-to-date information about members of a development team.
Rather than navigating to each team member's GitHub profile, 
this command-line application allows for quick and easy generation of profiles in PDF format. 

# How It Works
The Command-Line application functions as follows:
1. User is prompted to enter a GitHub username and to pick a color from a pre-generated list. 
2. Axios is used to retrieve user's GitHub data from the GitHub API
3. An HTML file is generated dynamically and then saved to the computer.
4. The HTML file is converted to a PDF file and saved to the computer. 
![gif](https://user-images.githubusercontent.com/53705501/71602516-b560e800-2b26-11ea-8479-8f246fc7b3cb.gif)

# Installing
1. Install dependencies by opening index.js in terminal and running command: npm install. 
![1](https://user-images.githubusercontent.com/53705501/71138442-87e87600-21d9-11ea-9879-067d2fc7cfdd.jpg)
2. Run application with node.js by running command: node index.js
3. Enter GitHub username when prompted.
4. Use arrows and return button to select color from list. 
![2](https://user-images.githubusercontent.com/53705501/71138443-87e87600-21d9-11ea-8dca-04fad0275415.jpg)
5. Navigate to saved pdf file on computer and open.
![3](https://user-images.githubusercontent.com/53705501/71138444-87e87600-21d9-11ea-91bc-4e02c396254e.jpg)


# Built With
JavaScript,
Node.js

# NPM
HTML-PDF,
Inquirer, 
Axios,
File System

# API
GitHub API

