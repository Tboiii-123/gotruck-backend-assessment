
Tech Stack Used

Express .js
Node.js
MongoDB,
Mongoose



1>Clone the repository

git clone https://github.com/Tboiii-123/gotruct-backend-assessment.git


2>Install dependencies

npm install


3>Create .env file

MONGODB_URL= your_mongogodb_url


4> Run Server

npm start



Postman endpoint

http://localhost:3000/products   POST

request:
{
  "name": "Samsung Galaxy S10",
  "price": 950,
  "description": "Latest Samsung flagship smartphone with AI features",
  "category": "Electronnics"

}


http://localhost:3000/products   GET

Getting all items in the database

Response:
[
    {
        "_id": "69de422389e4ad6478bace23",
        "name": "Samsung Galaxy S2224",
        "price": 950,
        "description": "Latest Samsung flagship smartphone with AI features",
        "category": "Electronics",
        "__v": 0
    },
    {
        "_id": "69de426cf38723b33c2c1ba3",
        "name": "Samsung Galaxy S2224",
        "price": 950,
        "description": "Latest Samsung flagship smartphone with AI features",
        "category": "Electronics",
        "__v": 0
    },

]
