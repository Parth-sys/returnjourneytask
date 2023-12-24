http://localhost:3000/posts
This endpoint makes an HTTP POST request to create a new product on the fakestoreapi. The request should include a payload with the product's title, description, and price in the raw request body.

Request Body
title (string): The title of the product.

description (string): The description of the product.

price (number): The price of the product.

The response will have a status code of 200 and will include the newly created product's ID, title, and price.

Response
id (number): The ID of the newly created product.

title (string): The title of the newly created product.

price (number): The price of the newly created product.

description (string): The description of the product

﻿

Body
raw (json)
json
{
    "title":"wire",
    "description":"wire for electric fittings",
    "price":200
}


2. http://localhost:3000/posts
This endpoint makes an HTTP GET request to retrieve a list of posts from the server. The request does not contain a request body.

Response
Status: 200

The response returns a JSON object with a "message" key, containing an array of posts. Each post in the array includes the following properties:

"id": The unique identifier of the post.

"title": The title of the post.

"price": The price of the post.

"description": The description of the post.

"category": The category of the post.

"image": The image associated with the post.

"rating": An object containing the "rate" and "count" of the post's rating.

﻿3 .http://localhost:3000/posts/:id
This endpoint allows you to update a specific post by providing the post ID in the URL. The HTTP method used for this request is PUT.

Request Body
title (string, required): The title of the post.

description (string, required): The description of the post.

price (number, required): The price of the post.

Response
Upon a successful execution, the response will have a status code of 200 and will include a message object containing the updated post details, including the post ID, title, description, and price.

Example:

JSON
{
    "message": {
        "id": 0,
        "title": "",
        "price": 0,
        "description": ""
    }
}
﻿

Path Variables
id
21

Body
raw (json)
json
{
  "title":"wirerope",
  "description":"wirerope for tractors",
   "price":2000

}

4.  http://localhost:3000/posts/:id
  This API endpoint sends an HTTP DELETE request to delete a specific post identified by the provided ID.

  The request does not contain a request body.

 Response
 Status: 200

 { "message": "post deleted successfully" }

﻿

Path Variables
id
21

5.http://localhost:4000/posts/:id
This endpoint makes an HTTP GET request to retrieve a specific post by its ID. The request should be made to http://localhost:4000/posts/:id, where :id is the ID of the post to be retrieved.

The response to this request will have a status code of 200, indicating a successful request. The response body will contain a JSON object with the details of the post, including its ID, title, price, description, category, image, and rating. The rating includes the rate and count of the post.

Example response

{ "message":

{ "id": 1,

"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",

"price": 109.95,

"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg", "rating": { "rate": 3.9, "count": 120 } }

﻿

Path Variables
id
1
