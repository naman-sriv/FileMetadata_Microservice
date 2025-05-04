# File Metadata Microservice

This is a simple microservice built with Node.js and Express that allows users to upload a file and receive information about it, specifically the file's name, type (MIME type), and size.

## Functionality

When a user uploads a file through the provided form, the server processes the file and responds with a JSON object containing the following metadata:

-   `name`: The original name of the uploaded file.
-   `type`: The MIME type of the uploaded file.
-   `size`: The size of the uploaded file in bytes.

## Setup

To run this microservice locally, you need to have Node.js and npm (or yarn) installed on your system.

1.  **Clone the repository (if you have the code in one):**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
    This will install the necessary packages, including Express, CORS, dotenv, and Multer.

3.  **Create a `.env` file (optional but recommended for port configuration):**
    Create a file named `.env` in the root directory of the project and add the following (you can change the port if needed):
    ```
    PORT=3000
    ```

4.  **Run the application:**
    ```bash
    npm start
    # or
    node server.js
    ```
    (Assuming your main server file is named `server.js`. If it's `app.js`, use `node app.js`).

    The server will start listening on the specified port (default is 3000 if no `.env` file is used or the `PORT` variable is not set). You should see a message in your console indicating the port the application is running on.

## Usage

1.  Open your web browser and navigate to the root URL of the application (e.g., `http://localhost:3000`).

2.  You will see a simple HTML page with a file upload form.

3.  Click the "Choose File" button and select a file from your local system.

4.  Click the "Upload" button.

5.  The server will process the uploaded file and respond with a JSON object displayed on the page (in the `<h3 id="output">` element as per the provided HTML). This JSON object will contain the `name`, `type`, and `size` of the file you uploaded.

## API Endpoint

The file upload is handled by the following POST endpoint:

-   **`/upload`**: Accepts a `multipart/form-data` request with a file uploaded under the field name `file`. It responds with a JSON object containing the file's metadata.

    **Request Body (FormData):**
    -   `file`: The file to be uploaded.

    **Response (JSON):**
    ```json
    {
      "name": "example.txt",
      "type": "text/plain",
      "size": 12
    }
    ```
    (The actual values will depend on the uploaded file.)

## Technologies Used

-   Node.js
-   Express: A minimal and flexible Node.js web application framework.
-   CORS: Middleware for enabling Cross-Origin Resource Sharing.
-   dotenv: For loading environment variables from a `.env` file.
-   Multer: Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.

## Project Structure

├── .env             (Optional: Environment variable configuration)
├── public/
│   └── style.css    (Basic styling for the HTML page)
├── views/
│   └── index.html   (HTML form for file upload)
├── upload.js        (Multer configuration for handling file uploads)
├── server.js        (Main application server file)
├── package.json
├── package-lock.json (or yarn.lock)
└── README.md 
