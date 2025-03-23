# TechnicalTest - How to run the project

## Previous steps

1. Have **node.js version 18.20.7** installed. If you have another version, you must uninstall the programs and download the installer from https://nodejs.org/es/download. With the selected options shown in the image, download the Windows installer.
   
   ![image](https://github.com/user-attachments/assets/0ec6005c-74b1-4e29-80b1-b2829b0c3da0)

2. Clone the repository, and open it with an integrated development environment, such as Visual Studio Code, and in the backend folder, open a terminal and install the required dependencies by running:
   `npm install`
   
And then run it with the command:
   `npm run dev`

3. In the frontend folder, open a terminal and install the required dependencies by running:
   ```bash
   npm install

Install angular 16:
   ```bash
  npm install -g @angular/cli@16

And then run it with the command:
   ```bash
   ng serve

4. When the backend and frontend are running, in the browser search for http://localhost:4200/login, to log in there are 2 users:
   email: mariav@test.com, password: 12345678, role: admin
   email: juanfallas@test.com, password: 12345678, role: user

