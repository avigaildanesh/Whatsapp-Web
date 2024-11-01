# React Chat Application

## Overview

The React Chat Application is a simple web-based chat platform built using React. It provides users with the ability to register an account, log in, and engage in real-time conversations with other users.

## Features

- User Registration: Users can create an account by providing a username, password, and display name.
- User Login: Registered users can log in to access the chat interface.
- Real-time Chat: Users can send and receive messages in real-time with other logged-in users.
- Private Routing: Certain routes are protected and can only be accessed by authenticated users.

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository: `git clone https://github.com/asaf27064/ex2AP.git`
2. Navigate to the project directory: `cd ex2AP`
3. Install server dependencies: `cd server` then `npm install`
4. Install client dependencies: `cd client` then `npm install` **(only if need to open another client)**

## Usage

1. Start the server:
   - Navigate to the server directory: `cd server`
   - Start the server: `npm start`

2. Open your browser and navigate to `http://localhost:5000` to access the client application.

## Project Structure

The project follows a specific directory structure to organize the server and client components:

- `client`: Contains the client-side code and assets.
  - `public`: Contains static assets that will be served by the client.
  - `src`: Contains the source code for the client application.
    - `Components`: Contains reusable components used in the client application.
    - `image`: Contains images and graphics used in the client application.
    - `Pages`: Contains the individual pages or views of the client application.

- `server`: Contains the server-side code and configurations.
  - `controllers`: Contains the logic for handling API requests and business logic.
  - `models`: Contains the database models and schemas used by the server.
  - `public`: Contains static assets that will be served by the server.
    - `build`: Contains the production build of the client application.
      - `static`: Contains static assets bundled by the client build process.
  - `routes`: Contains the API route definitions and associated middleware.
  - `services`: Contains additional services or utilities used by the server.

## Authors

-Asaf Ohana
-Nadav Barda
-Avigail Danesh
