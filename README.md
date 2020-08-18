[![Donate](https://img.shields.io/badge/PayPal-Donate-coral.svg?logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TLYVDH7FVHDLS)
![node_version](https://img.shields.io/badge/node-%3E%3D10.0.0-brightgreen.svg?logo=Node.js)
[![Heroku](https://img.shields.io/badge/Heroku-fakeapi-blueviolet.svg?logo=Heroku)](https://gkonst-fakeapi.herokuapp.com/)

# fakeAPI

This is a simple `nodejs` application that return a fake data for your API request.

#### Table of Contents:
 - [Getting Started](#getting-started)
   * [Prerequisites](#prerequisites)
   * [Installing](#installing)
   * [Running](#running)
 - [Examples](#examples)
 - [Built With](#built-with)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

First, you need to install `nodejs`. You can get it here (https://nodejs.org/en/)

If done, check the version (it should be >= 10.0.0)
```bash
$ node -v
v12.18.3
```

### Installing

Clone repo and install packages
```bash
git clone https://github.com/g-konst/fakeApi && cd fakeApi
npm install
```

### Running

To run `fakeApi` on your local machine, use this command:
```bash
$ node app.js
```
or with npm
```bash
$ npm start
```

### Examples

```bash
curl 'http://localhost:3000/api/' \
    -H 'content-type: application/json' \
    -d '{
      "_repeats": 2,
      "user": "name.findName",
      "id": "random.number",
      "company": "company.companyName",
      "email": "internet.email",
      "avatar": "internet.avatar",
      "jobs": "name.jobTitle",
      "is_active": "random.boolean",
      "phone": "phone.phoneNumber",
      "posts": {
          "text": "lorem.sentences",
          "_repeats": 3
      }
}'
```

<details>
  <summary>Response</summary>

```json
[
    {
        "user": "Muriel Lind",
        "id": 19287,
        "company": "Little LLC",
        "email": "Kaela27@gmail.com",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/davidhemphill/128.jpg",
        "jobs": "National Group Executive",
        "is_active": false,
        "phone": "447-661-3540",
        "posts": [
            {
                "text": "Ut et voluptatem atque mollitia exercitationem nihil voluptatibus doloribus reprehenderit. Cumque voluptatem dignissimos nihil eos voluptates earum deleniti.",
                "id": 0
            },
            {
                "text": "Dolorem inventore corporis ea asperiores iste. Esse qui ducimus sequi adipisci animi ratione. Perspiciatis labore consequatur placeat doloribus similique ipsum.",
                "id": 1
            },
            {
                "text": "Incidunt aliquam ea qui officia earum animi neque. Voluptatem sed ad incidunt in provident voluptatem. Voluptas error cum. Debitis a doloremque officia laudantium.",
                "id": 2
            }
        ]
    },
    {
        "user": "Shemar Schmidt",
        "id": 58963,
        "company": "O'Reilly - Schuppe",
        "email": "Savannah.Kertzmann98@yahoo.com",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rude/128.jpg",
        "jobs": "Human Metrics Supervisor",
        "is_active": false,
        "phone": "390.219.0639",
        "posts": [
            {
                "text": "Exercitationem modi sit. Ducimus eum aliquam saepe natus enim quae architecto. Fugiat nisi voluptatem quisquam placeat.",
                "id": 0
            },
            {
                "text": "Architecto rerum aperiam recusandae est nam culpa. Dolorum sint in.",
                "id": 1
            },
            {
                "text": "Tempora aliquid repudiandae doloremque optio. Qui molestias possimus qui et distinctio. Odio praesentium occaecati. Impedit unde recusandae quidem. Ratione voluptatum quia debitis laborum. Quae aut officiis aliquid ab exercitationem aperiam aut architecto.",
                "id": 2
            }
        ]
    }
]
```
</details>

```bash
curl 'http://localhost:3000/api/' \
    -H 'content-type: application/json' \
    -d '{
      "_repeats": 0,
      "id": "",
      "pages": "random.number",
      "users": {
          "_repeats": 2,
          "user": "name.findName",
          "id": "random.number",
          "email": "internet.email",
          "avatar": "internet.avatar"
      },
      "posts": { "text": "lorem.sentences", "image": "random.image", "post_date": "date.past", "_repeats": 5 }
}'

```

<details>
  <summary>Response</summary>

```json
{
    "id": 0,
    "pages": 66582,
    "users": [
        {
            "user": "Stefanie Gleason V",
            "id": 91768,
            "email": "Monserrat_Crist1@gmail.com",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ainsleywagon/128.jpg"
        },
        {
            "user": "Justus Torp",
            "id": 98365,
            "email": "Kasandra60@yahoo.com",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg"
        }
    ],
    "posts": [
        {
            "text": "Et quia reprehenderit magni quia qui a. Nemo et atque consequuntur sunt deleniti vero blanditiis nostrum odit. Occaecati aliquam nihil sit. Et qui mollitia nihil et perspiciatis.",
            "image": "http://lorempixel.com/640/480/food",
            "post_date": "2020-07-15T07:56:47.498Z",
            "id": 0
        },
        {
            "text": "Ad eos alias non nemo velit culpa dolores id iure. Quibusdam reiciendis aliquam aut.",
            "image": "http://lorempixel.com/640/480/animals",
            "post_date": "2019-10-18T22:48:21.956Z",
            "id": 1
        },
        {
            "text": "Quos veritatis natus molestiae sed est repudiandae provident aperiam. Mollitia sunt quia ipsam aut et temporibus est necessitatibus. Odio minus debitis.",
            "image": "http://lorempixel.com/640/480/fashion",
            "post_date": "2020-02-08T23:05:27.043Z",
            "id": 2
        },
        {
            "text": "Accusamus aut qui quidem dicta fuga recusandae laboriosam totam. Dicta rerum sed ut voluptatibus repellat perspiciatis quo. Consequatur velit vero minima hic dolorem.",
            "image": "http://lorempixel.com/640/480/animals",
            "post_date": "2020-04-17T19:01:21.657Z",
            "id": 3
        },
        {
            "text": "Deleniti consequuntur et sed eaque rerum iure veritatis fuga. Quam molestias quod fuga accusantium. Ea iste qui qui molestiae autem provident et modi.",
            "image": "http://lorempixel.com/640/480/animals",
            "post_date": "2019-09-22T01:37:39.868Z",
            "id": 4
        }
    ]
}
```

</details>

You can also change locale by adding a `locale` parameter to request query:

```bash
curl 'http://localhost:3000/api/?locale=it' \
    -H 'content-type: application/json' \
    -d '{
      "id": "random.number",
      "avatar": "internet.avatar",
      "user_card": "helpers.createCard"
}'

```

<details>
  <summary>Response</summary>

```json
[
    {
        "id": 2314,
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dzantievm/128.jpg",
        "user_card": {
            "name": "Giancarlo Rizzi",
            "username": "Ingrid93",
            "email": "Odino.Vitali@email.it",
            "address": {
                "streetA": "Martinelli Via",
                "streetB": "45009 D'amico Rotonda",
                "streetC": "3774 Ferrari Strada Suite 457",
                "streetD": "Suite 522",
                "city": "Sesto Deborah",
                "state": "Monza e della Brianza",
                "country": "Georgia",
                "zipcode": "28909",
                "geo": {
                    "lat": "-55.5395",
                    "lng": "90.5205"
                }
            },
            "phone": "017 667 6626",
            "website": "odino.org",
            "company": {
                "name": "Cattaneo e figli",
                "catchPhrase": "nazionale programmabile Paradigma",
                "bs": "mission-critical guida modelli"
            },
            "posts": [
                {
                    "words": "assumenda inventore ullam",
                    "sentence": "Enim aut id ut ipsa illo veritatis quo omnis.",
                    "sentences": "Illo facere fuga reprehenderit cupiditate ea sit. Fugit a et maiores est. Id omnis beatae similique natus placeat commodi. Corporis voluptatem dolorum expedita placeat omnis dolorem accusamus.",
                    "paragraph": "Ut sed voluptatem consequuntur ex debitis molestiae sed sint. Quia neque doloremque quia nihil et est enim. Suscipit magni natus nihil sit. Tempora tempora aut temporibus sit autem alias."
                },
                {
                    "words": "tenetur explicabo consequatur",
                    "sentence": "Repellat possimus praesentium quia eligendi.",
                    "sentences": "Omnis non sint cum dolore minus et. Recusandae ex sed quo qui fuga. Non voluptatem placeat vero et rerum reiciendis. Earum possimus id aut doloremque recusandae molestiae. Et facilis nostrum voluptatem aut voluptate maiores assumenda et.",
                    "paragraph": "Officiis qui quia. Quae omnis molestias deleniti dolorum ut aut id. Dolores libero corporis nobis et ut fuga. Neque rerum laboriosam est ipsum nihil id et et est."
                },
                {
                    "words": "enim ea distinctio",
                    "sentence": "Est earum aliquid dolorem magnam perferendis.",
                    "sentences": "Aut ut eum est sunt voluptatem laboriosam praesentium doloremque ducimus. Libero cupiditate saepe illo dolorem excepturi earum molestias illo. Et provident nam et. Ut porro quasi aut.",
                    "paragraph": "Culpa praesentium asperiores id et a est dolorem quia neque. Eveniet voluptate et. Sint tempore excepturi odit debitis error iure ex rerum in. Pariatur voluptates qui qui possimus sed est aut voluptas."
                }
            ],
            "accountHistory": [
                {
                    "amount": "825.17",
                    "date": "2012-02-02T00:00:00.000Z",
                    "business": "Negri, Romano and Fontana",
                    "name": "Credit Card Account 1820",
                    "type": "deposit",
                    "account": "85827485"
                },
                {
                    "amount": "470.66",
                    "date": "2012-02-02T00:00:00.000Z",
                    "business": "Carbon, Bernardi and Rizzi",
                    "name": "Investment Account 5741",
                    "type": "invoice",
                    "account": "18964923"
                },
                {
                    "amount": "265.48",
                    "date": "2012-02-02T00:00:00.000Z",
                    "business": "Lombardi SPA",
                    "name": "Checking Account 8190",
                    "type": "invoice",
                    "account": "00521733"
                }
            ]
        }
    }
]
```
</details>

## Built With

* [Faker.js](https://www.npmjs.com/package/faker) - generate massive amounts of fake data in the browser and node.js.
* [Express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.

If you want to support this project, you can just:

<a href="https://www.buymeacoffee.com/FKCYvTtue" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 42px !important; width: 174px !important" ></a>
