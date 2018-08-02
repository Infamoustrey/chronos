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

Returns a `String` which contains the chronos date object encoded in a UTC date string