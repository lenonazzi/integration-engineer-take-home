# Integration Engineer Test

We appreciate your interest in the Integration Engineer role at our company. This test helps us understand your skills in creating a Node.js backend API and a ReactJS frontend. You should finish the test within a few hours. Please read the instructions carefully.

## Task Overview:

Your task is to build a simple task management application. This template offers a basic setup for a React frontend using Vite, which connects to a Node/Express backend. Users should be able to view, create, update, and delete tasks.

There are different parts to this exercise:

1. Set up the backend and frontend, resolving any issues that may arise (some issues might not have been noticed by the original developer since 'it works locally').
2. Complete the endpoints for task creation and deletion.
3. Implement missing functions in the React frontend to interact with the new endpoints for task creation and deletion.
4. Develop a new endpoint in the Express app for updating tasks. Create a UI allowing users to update tasks and communicate with this new endpoint.
5. Update the CSS to improve the usability of the solution.

*Additional Information*

* Tasks should be stored temporarily in memory; permanent storage is not necessary.
* Prevent creating or updating tasks with empty titles or descriptions. Display an error if users attempt to submit an invalid task. (Your backend should handle this check and return an error.)
* No guidance is available from the previous developer on setting up the project on a new machine. You'll need to use the existing files to figure it out, considering possible mistakes.
* The backend is in JavaScript, while the frontend React code is in a .tsx file. Make sure your work is valid TypeScript.
* Enable CORS support in the API to permit cross-origin requests.
* The app's rudimentary styling by the previous developer can be improved for better user experience.
* BONUS: If you can optimize the React app's rendering for efficiency, feel free to make changes.

*Submission Guidelines*

* Fork this GitHub repository to your own GitHub account.
* Develop the backend and frontend using the provided directory structure.
* Edit this README below to explain how to run both the backend and frontend.
* Once done, share the link to your forked repository via email.

*Evaluation Criteria*

* Functionality: Does the app meet the requirements and work error-free?
* Code Quality: Is the code well-structured, modular, and easy to understand?
* API Design: Did you design the API in a RESTful way? Is error handling and validation effective?
* Frontend Design: Is the frontend user-friendly, responsive, and visually appealing?
* Git Usage: Are your commits meaningful and code changes well-tracked?
* Documentation: Are instructions provided for setting up the app on a new machine?

Use this opportunity to showcase your skills. If you see fit, add extra features or improvements.

Please note that this test aims to be completed in a few hours. However, quality work is more important than speed. If you have questions, feel free to email us.

Best wishes, and we're excited to review your submission!

Regards,
The Duda Solutions Engineering Team

## Add any instructions to get your submission running below this line.

### 🚀 Getting Started

To set up and run the application, first clone this repository to your local machine using the following command in your terminal:
```bash
  git clone https://github.com/lenonazzi/integration-engineer-take-home.git
```

> [!IMPORTANT]
> Ensure you have [Node.js](https://nodejs.org/) installed for the application to run properly.

#### Running the Frontend

Navigate to the frontend folder:
```bash
  cd frontend
```

If this is your first time running the __frontend__ application, install the project dependencies:
```bash
  npm install
```

Then, you can start the application locally with:
```bash
  npm run dev
```

🎉 The frontend will be running on [localhost:5173](http://localhost:5173/)

#### Running the backend

Navigate to the backend folder:
```bash
  cd backend
```

If this is your first time running the __backend__ application, install the project dependencies:
```bash
  npm install
```

Then, you can start the application locally with:
```bash
  npm run dev
```

🎉 The backend will be running on [localhost:8000](http://localhost:8000/)

### 🔥 REST API

#### Get All Tasks

##### Request

`GET /api/tasks`

##### Response

```json
  [
    {
      "id": "c9a3fc13-ae69-499c-a793-3798439c2f1e",
      "title": "My task",
      "description": "Example of a task.",
      "complete": false
    }
  ]
```

#### Add a New Task

##### Request

`POST /api/tasks`

##### Body

```json
  {
    "title": "Hello!",
    "description": "Another example of a task."
  }
```

##### Response

An array containing all the tasks. See the [GET All Tasks](####-Get-all-tasks) route for a response example.

#### Update a Task

##### Request

`PATCH /api/tasks/:id`

##### Body

```json
  {
    "title": "Hello!",
    "description": "Another example of a task.",
    "complete": true
  }
```

> [!TIP]
> All fields are optional. You can use this endpoint to update only specific fields of a task.

##### Response

An array containing all the tasks. See the [GET All Tasks](####-Get-all-tasks) route for a response example.

#### Delete a task

##### Request

`DELETE /api/tasks/:id`

##### Response

An array containing all the tasks. See the [GET All Tasks](####-Get-all-tasks) route for a response example.
