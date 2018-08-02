# <i style="font-size:0.70em;" class="material-icons">timer</i> chronos 
> A date time manipulation library

## Install

```bash
npm i -S @infamoustrey/chronos
```

## Usage

```javascript
import Chronos from '@infamoustrey/chronos'

let my_date = new Chronos();

console.log( my_date.format('MM/DD/YYYY') ) // 01/01/2077

```

## Why

Why do we need another date manipulation library? The answer is we don't, however my limited use of [Moment](https://momentjs.com/), [Luxon](https://moment.github.io/luxon/), and [DateJS](http://www.datejs.com/) seems to constantly remind me that dependencies suck. Not that those libraries are bad, in fact they are extremely good at what they do. However along with those few functions that I actually use, come a slew of extra added functionality that I never do. Enter Chronos. 
