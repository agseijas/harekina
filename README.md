# Project HAREKINA

It helps you build a page where any animal welfare organization can list all their adoptable animals: cats, dogs, birds, horses, etc.

It's using google drive as repository for the pets photos and info, so it should be really easy to use, you can just put the photos into a folder
and it will automatically generate a new pet card, if you write a spreadsheet in the same folder, it'll be filled with info about the pet, like
their colors, how loving it is, it's background, health status, etc.

Also about costs, it can be 0 if you use and it's enough what github, gdrive and netlify free plans allows.

## TODO

- Add search box
- Add extra build for adopted pets.
- Improve usability. When clicking in desktop over know me button, it doesn't do anything.
- Improve image resizing.

## Requisites

- A google drive account with enough space.
- A github account.
- (Optional) Somewhere to put the files online.
- (Optional) A domain.
- (Optional) Some dev skills.

## Costs

Using github, google drive and netlify the cost can be 0, but depending on your traffic these costs might rise.

## "But I don't have any dev skills"

Ok if you reached this github project it's because you might be a bit tech-savvy; but anyways, if you need help setting this up and you're a real
animal welfare association, group or individual that are trying to make the world better for non humans; open an issue here or send me an email and
I'll help you set it up for you (for free, of course!)

## Setup

It requires:

- Node
- Git

These are the steps:

- Go into google cloud and enable google drive API, create a service account credential in json format, put that into a file in the rool called `credentials.json`
- Pull this project
- Put some initial content in the google drive. Go to the how to use section for the initial configuration. You can just use the default one if you wish (where you'll have to use configs in english).
- Generate your service with `npm run generate`

### How to use

Considering that you have setup a google drive folder correctly, you have to:

- Create a folder for containing global config, images and info of each pet.

- Put a `logo.png` (or .jpg, or .jpeg, or .gif) file in the root of the folder. This logo can be of any size or style, so long as it looks good.

To create a new pet card and info:

- One spreadsheet file (name is not important, only that it's a google spreadsheet) where the data of the pet will be written by you, the first column will define each pet info, for example, name, birthdate, status, vaccines, etc. and the rest of the columns contain the values for that pet info. This is an example of the data to put in spreadsheet where the first column cells should be kept only for the titles of each data, the rest of the column cells are to be used at will to fill the info:

```yaml
name: mypet
description: a brief description of the pet
birthdate: 10/02/2024
adoption_status: for adoption
health: great
traits: loving, friendly with humans
colors: black and white
eye_color: green
race: common
family: child of the best pet ever
```

Every time you create a new spreadsheet you have to at least provide these data for each pet: name, description, birthdate and adoption_status

- A thumbnail image in portrait mode of the pet in a filed named `1.jpg`, it can be in any other image supported format (ie: `1.png`, `1.jpeg`...) but keeping the `1.x` filename format
- Other images, with any name in any format.

Required secrets:

- DRIVE_PARENT_FOLDER. The id of the parent containing all pets folders with info and images
- GOOGLE_SERVICE_ACCOUNT_JSON_IN_BASE64. The google cloud credentials of a service account in json format but encoded in base64.
- NETLIFY_AUTH_TOKEN. The Auth token of your netlify account.
- NETLIFY_SITE_ID. The side id in netlify of your site.

#### Customize the spreadsheet

You might want to configure the titles of each info in the pet spreadsheet because you don't like the names in the default one, or want to use titles in your language in each spreadsheet (for example `fecha_nacimiento` instead of `birthdate`), in that case, you might there you can copy the default [`./src/petconfig.csv`](./src/petconfig.csv) in the parent/root Drive folder and customize with your changes, example:

```csv
name,nombre
description,descripcion
birthdate,fecha_nacimiento
family,familia
adoption_status,estado_adopcion
colors,colores
type,raza
eyes,ojos
personality,personalidad
weight,peso
length,longitud
health,salud
...
```

There are some configuration values that are meant to configure the app, like date_format and lang_order.

- date_format. The format of the dates when introduced in the spreadsheet: dd/MM/YYYY as default.
- lang_order. The order of languages when introduced in the pet spreadsheet value columns; it has to use the format xx/xx/... where xx is each language acronym, by default: es/en

## Build

### Locally

To build locally, create a `local_drive` directory at the root, which contains the folders for each cat, an image called 1.jpg and some other images,
together with an info.csv file containing each pet info.

Then run `npm run generate_local`.

### To build remotely

run with `npm run generate`

## Text customization & localization

You can customize the texts by editing the texts in the file `texts.ts`

Localization support is yet to come, although some initial support is here and there in the codebase

## Analytics

Any analytics can be added by editing the `texts.ts`#lang/analytics property

## Why the name HareKina ?

The names of a cat and a dog, that unfortunately left us during the past year: Kina the cat with 16 and Hare the dog with 18 years old. They were the best and will be
missed very much.
