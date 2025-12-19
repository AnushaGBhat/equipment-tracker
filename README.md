##  Equipment Tracker 

This is a simple full-stack web application built as part of a take-home internship assignment.
The application allows users to manage equipment details including adding, updating, viewing, and deleting records.

##  Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express
* **Database:** JSON file (local storage)
* **Tools:** Git, VS Code

##  Features

* View all equipment in a table
* Add new equipment
* Edit existing equipment
* Delete equipment
* Search equipment by name or type 
* Sort equipment by name 


##  Application Screenshot





##  How Search Works

The search functionality is implemented on the **frontend**.

* A search input box allows users to type keywords.
* The equipment list is filtered dynamically using JavaScript’s `filter()` method.
* Search is **case-insensitive** and works for:

  * Equipment **name**
  * Equipment **type**

### Example:

* Typing `mix` shows only equipment with type or name containing `mix`
* Clearing the search box shows all equipment again

This approach avoids unnecessary backend calls and keeps the UI responsive.



##  How Sorting Works

Sorting is implemented on the **frontend table**.

* Clicking the **Name** column header sorts the equipment list alphabetically.
* Sorting toggles between:

  * Ascending (A → Z)
  * Descending (Z → A)
* JavaScript’s `sort()` and `localeCompare()` methods are used.

This keeps the implementation simple and easy to understand for an intern-level project.



##  How to Run the Project Locally

### Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:7000
```


### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```


##  Assumptions Made

* Authentication is not required
* Single-user usage
* JSON file is sufficient for demonstrating CRUD operations
* Focus is on functionality rather than UI design


## Improvements If Given More Time
* Add pagination for large datasets
* Improve UI styling and responsiveness
* Add form-level error messages




