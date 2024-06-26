# Backend Developer Assessment

- Task 1 : Implement User Authentication with JWT

- Task 2 : Secure API Endpoint for Authenticated Users Only

## Installation process

1. #### Clone the repo using this command

   ```bash
   git clone https://github.com/asha-github-1996/backend_assessment.git
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

### Endpoints

#### Signup - http://localhost:3000/api/auth/signup

#### Signin - http://localhost:3000/api/auth/signin

#### Logout - http://localhost:3000/api/auth/signout

#### Get user details - http://localhost:3000/api/user/:id

#### Update user - http://localhost:3000/api/user/update/:id
