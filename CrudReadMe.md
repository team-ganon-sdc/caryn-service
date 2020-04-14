# App-Preview-Info-Carousel REST API

This ReadMe shows how to use these 4 different api calls.

1. [GET](#GET)
2. [POST](#POST)
3. [PUT](#PUT)
4. [DELETE](#DELETE)

## GET
> '/carousels/:id' returns the images, description, and additional text of the specific id

## POST
> '/carousels' adds new images/description/additional text to the carousels collection.
> content-type: application/json
> id: number, (needs to be unique)
> images: array of string(imageUrl)
> app_description: string
> additional_text: string

## PUT
> '/carousels/:id' updates images/description/additional text of the specific id
> content-type: application/json
> provide updated information in json format in request body

## DELETE
> '/carousels/:id' deletes images/description/additional text of the specific id