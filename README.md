# Expense Tracker

**Developer:** Joel P Jacob
**Project:** Expense Tracker

---

## Project Overview:

The objective of this project is to create a simple mobile app using React Native that tracks expenses, allowing users to add, view, and manage their expenses efficiently. This project evaluates skills in working with React Native, handling state management, implementing CRUD operations, and creating a responsive user interface.

---

## Features

### User Authentication
- **Registration Screen**: Users can register with Name, Email, and Password. Inputs are validated (e.g., valid email format, password length).
- **Login Screen**: Users can log in using their email and password. Credentials are validated against stored data.
- **Session Persistence**: Users remain logged in until they manually log out. Authenticated users are redirected to the Home screen on app restart.
- **Logout**: A logout button on the Home screen clears session data and redirects to the Login screen.

### Expense Management
- **Add Transaction**: Users can add transactions with a Title and Amount. Data is saved to local storage.
- **List Transactions**: All transactions are displayed in a list with Title and Amount. Users can navigate to this screen from the Home screen.
- **Delete Transactions**: Users can delete existing transactions. Local storage is updated after changes.

### Data Persistence
- All data (user accounts, transactions) persists across app restarts.
- Transactions are tied to the logged-in user (users only see their own data).
---

## Technical Setup

### Dependencies
- **React Native** (CLI)
- **Local Storage**: MMKV.
- **React Navigation** for screen navigation.
- **Redux** for state management.
---

**Usage Instructions:**
-----------------------

1.  **Clone the Repository:**

    -   Run the following command to clone the repository:

    `git clone https://github.com/JoelPJacob/ExpenseTracker.git`

2.  **Install Dependencies:**

    -   Navigate to the project directory and install the required dependencies:

    `cd ExpenseTracker
    
    npm install`

3.  **Run the Project:**

    -   For Android:

        bash

        `npm run-android`

4.  **APK Testing:**

    -   You can also download and install the APK file to test the app on an Android device.

* * * * *

# Technical Expectations

## State Management
- **Redux** is used for managing the application state. This ensures a centralized and predictable state management system for user authentication, transactions, and other global data.

## Navigation
- **Stack and Tab Navigators** are implemented using **React Navigation** for seamless navigation between screens.
  - Example flows:
    - Login → Home
    - Home → Transactions
  - Tab navigation is used for switching between key screens like Home and Transactions.

## Code Quality
- **Clean, Reusable Components**: Components are modular and reusable, following best practices for React Native development.
- **Proper Error Handling**: 
  - Login failures, invalid inputs, and other edge cases are handled gracefully with user-friendly error messages.
- **Meaningful Variable Names and Folder Structure**:
  - Variables, functions, and components are named descriptively to improve code readability.
  - The project follows a well-organized folder structure for better maintainability.


* * * * *

**Contact Information:**
------------------------

-   **Email**: joelpjacob@gmail.com
-   **GitHub**: <https://github.com/JoelPJacob>
-   **LinkedIn**: <https://linkedin.com/in/joel-p-jacob>