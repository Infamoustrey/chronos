# API
> This page descripes the various functional endpoints of the chronos libary

## Chronos
The following functions apply to the Chronos date object

### `.add(amount, datetype)`
* `amount` Number (required)
* `datetype` String (required)

Adds the `amount` of the provided `datetype` to the chronos date object

### `.sub(amount, datetype)`
* `amount` Number (required)
* `datetype` String (required)

Subtracts the `amount` of the provided `datetype` from the chronos date object

### `.utc()`

Returns a `String` which contains the chronos date object formated in a UTC date string

### `.format(dateformat)`
* `dateformat` String (required)

Returns a `String` which contains the chronos date object formated in a custom date string

The following are valid date codes

* `MM` - Number of the Month. 1 for January and so on.
* `DD` - Number of the day of the Month, 1 for the first and so on.
* `YYYY` - Full Year, ex: 2018