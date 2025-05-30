enum D {
    Field,
    Castle,
    Road
}

/**
 * Info about each tile in public/tiles/. Used for generation logic to make sure the map syncs up nicely.
 */
export const TileInfo: { [key: string]: D[] } = {
    "1.png": [D.Castle, D.Field, D.Field, D.Field],
    "2.png": [D.Castle, D.Field, D.Castle, D.Field],
    "3.png": [D.Castle, D.Field, D.Field, D.Castle],
    "4.png": [D.Castle, D.Castle, D.Field, D.Field],
    "5.png": [D.Castle, D.Castle, D.Field, D.Field],
    "6.png": [D.Castle, D.Castle, D.Field, D.Castle],
    "7.png": [D.Road, D.Field, D.Road, D.Field],
    "8.png": [D.Field, D.Field, D.Road, D.Road],
    "9.png": [D.Field, D.Field, D.Road, D.Field],
    "10.png": [D.Field, D.Field, D.Field, D.Field],
    "11.png": [D.Castle, D.Castle, D.Castle, D.Castle],
    "12.png": [D.Castle, D.Road, D.Field, D.Road],
    "13.png": [D.Castle, D.Field, D.Field, D.Field],
    "14.png": [D.Field, D.Castle, D.Field, D.Castle],
    "15.png": [D.Field, D.Castle, D.Field, D.Castle],
    "16.png": [D.Field, D.Castle, D.Field, D.Castle],
    "17.png": [D.Castle, D.Castle, D.Field, D.Field],
    "18.png": [D.Castle, D.Road, D.Road, D.Field],
    "19.png": [D.Castle, D.Field, D.Road, D.Road],
    "20.png": [D.Castle, D.Road, D.Road, D.Road],
    "21.png": [D.Castle, D.Castle, D.Road, D.Road],
    "22.png": [D.Castle, D.Castle, D.Road, D.Road],
    "23.png": [D.Castle, D.Road, D.Road, D.Castle],
    "24.png": [D.Castle, D.Road, D.Road, D.Castle],
    "25.png": [D.Castle, D.Castle, D.Field, D.Castle],
    "26.png": [D.Castle, D.Castle, D.Field, D.Castle],
    "27.png": [D.Castle, D.Castle, D.Road, D.Castle],
    "28.png": [D.Castle, D.Castle, D.Road, D.Castle],
    "29.png": [D.Road, D.Field, D.Road, D.Field],
    "30.png": [D.Field, D.Field, D.Road, D.Road],
    "31.png": [D.Field, D.Road, D.Road, D.Road],
    "32.png": [D.Road, D.Road, D.Road, D.Road]
}