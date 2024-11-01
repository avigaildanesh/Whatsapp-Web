# React Chat Application

## Overview

The React Chat Application is a simple web-based chat platform built using React. It provides users with the ability to register an account, log in, and engage in real-time conversations with other users.

## Features

- User Registration: Users can create an account by providing a username, password, and display name.
- User Login: Registered users can log in to access the chat interface.
- Real-time Chat: Users can send and receive messages in real-time with other logged-in users.
- Private Routing: Certain routes are protected and can only be accessed by authenticated users.

## Technologies Used

The key technologies used in this project are:

- React: A JavaScript library for building user interfaces.
- React Router: A library for managing navigation and routing in a React application.
- CSS: Cascading Style Sheets for styling the application.

## Project Structure

The project structure is organized as follows:

- `src/components`: This directory contains reusable React components used throughout the application.
  - `LoginScreen`: Renders the login screen and handles user authentication.
  - `RegisterScreen`: Renders the registration screen and handles user registration.
  - `ChatBox`: component represents the chat box header section. It displays the user's image and name, along with an option to open the file manager.
  - `AddContactModal`: component is a modal that allows users to add new contacts. It contains an input field for entering the contact's name or phone number. Pressing the "Add" button submits the form and adds the contact to the user's contact list.
  - `ChatInput`: component is responsible for handling the input and sending of chat messages. It displays an input field where users can type their messages and a "Send" button to send the message.
  - `ChatListPanel`: component displays the list of contacts available for chat. If the contact list is empty, it shows a message to add new people. It maps over the contact list and renders the `UserItem` component for each contact.
  - `Header`: component represents the header section of the chat application. It displays the user's image, username, and provides an option to add new contacts.
  - `Message`: component represents an individual chat message. It displays the content of the message and the timestamp when the message was sent.
  - `ChatScreen`: Displays the chat interface where users can send and receive messages.
  - `TextInput`: A reusable component for rendering text input fields.
  - `PasswordMessage`: A component for displaying password validation messages.
  - `ImageUpload`: A component for uploading user profile images.
- `src/image`: Contains the default user image (`minions.webp`) displayed when a user profile image is not uploaded.
- `src/App.js`: The main component serving as the entry point for rendering the application. It sets up the application routes and handles authentication logic.
- `src/index.js`: The entry point of the application responsible for rendering the root component (`App.js`) into the DOM.
- `src/index.css`: The CSS file for the application, containing global styles.

## Usage

To use the React Chat Application:

1. Clone the repository: `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git`
2. Navigate to the project directory: `cd react-chat-application`
3. Install dependencies: `npm install
4. Start the development server: `npm start`
5. Open the app in a web browser by visiting `http://localhost:3000`

## Author

Asaf Ohana
Nadav Barda
Avigail Danesh
