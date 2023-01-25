# Local Roots

## Description

The purpose of this applitation is to support people shopping locally. A user must be authenticated in order to use this application and therefore must sign up or log in. A user can post a product that they've seen or purchased from a local store to a global list of products that all users can view. A user can then look at this list of global products and add a product, along with the quantity, to their personal list of items that they're interested in and would like to purchase. On the user's personal items page they can edit the quanityt of that item or delete it from their list. A user can only edit quantities and delete products from their personal list of items. 

## Installation

1. Fork and clone the repo
2. Cd into the project and run the following:

```sh
bundle install
rails db:create
npm install --prefix client
```

The following commands are used to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

