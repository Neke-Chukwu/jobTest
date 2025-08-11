ERC-20 Token Information API
This is a simple Node.js Express API that connects to the Ethereum Sepolia testnet to fetch and display information about an ERC-20 token. The current implementation fetches data for the DAI token.

video: https://drive.google.com/file/d/18muVdIunohV0GKUOpXVL0cCO5BdJJx7H/view?usp=drivesdk


Install dependencies:
This project uses express, ethers, and dotenv. You can install them with the following command:

pnpm install express ethers dotenv



Usage
Start the server:
From your terminal, run the following command in the project's root directory:

node index.js

The server will start on http://localhost:4001.

Access the API endpoint:
Open your web browser or use a tool like Postman or curl to access the endpoint:

http://localhost:4001/ApiTest

You should see a JSON response with the token's name, symbol, decimals, and total supply.

Tech Stack
Node.js: JavaScript runtime environment

Express: Web application framework for Node.js

ethers.js: Library for interacting with the Ethereum blockchain

