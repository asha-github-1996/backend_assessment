# Backend Developer Assessment

- Task 1 : Implement User Authentication with JWT

- Task 2 : Secure API Endpoint for Authenticated Users Only

## Demo: https://real-estate-ds9g.onrender.com/

## Installation process

1. #### Clone the repo using this command

   ```bash
   git clone https://github.com/ashraf-kabir/mern-ecommerce.git
   ```

2. #### Install npm packages

   ```bash
   npm install
   ```

3. Go to the parent folder & create .env for connection, JWT_SECRET, MONGODB.

   ```bash
   sudo nano .env
   ```

   (ctrl+x to save & nano follow instruction there)

   ##### sample code for .env

   ```env
   MONGODB=YOUR_MONGODB_URI
   JWT_SECRET=YOUR_JWT_SECRET
   ```

4. Run the Express server by using this command

   ```bash
   npm start
   ```

### Server runs on http://localhost:3000

## Test the API using Postman

#### Register a new user using the http://localhost:3000/api/auth/signup endpoint.

#### Login using the http://localhost:3000/api/auth/signin endpoint to get a JWT token.

#### Logout using the http://localhost:3000/api/auth/signout endpoint

#### Access the http://localhost:3000/api/user/:id endpoint to get the user details.

#### Update the use profile using http://localhost:3000/api/user/update/:id endpoint.

## Tech Stack

- MongoDB
- Express.js
- Reactjs
- Nodejs
