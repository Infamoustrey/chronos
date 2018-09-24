
/*
*   Created By Trey Foster
*/

class Chronos {

    /*
    *   Initialize the Chronos Object
    *   @param {string} - Date String to map to object
    */
    constructor(input){

        if(input == undefined) this.master = new Date();

    }


    /*
    *   Add a unit of time to the current date
    *   @param {number} - Amount of the Type of Time to Add
    *   @param {string} - The Type of Time to Add
    */
    add(amt, type){

        switch (type){
            case 'month':
                this.master.setMonth(this.master.getMonth()+amt)
                break
            case 'year':
                this.master.setFullYear(this.master.getFullYear()+amt)
                break
            case 'day':
                this.master.setDate(this.master.getDate()+amt)
                break
        }

        return this;
    }

    /*
    *   Subtract a unit of time to the current date
    *   @param {number} - Amount of the Type of Time to Subtract
    *   @param {string} - The Type of Time to Subtract
    *   @returns {Chronos} - Chronos Instance
    */
    sub(amt, type){

        switch (type){
            case 'month':
                this.master.setMonth(this.master.getMonth()-amt)
                break
            case 'year':
                this.master.setFullYear(this.master.getFullYear()-amt)
                break
            case 'day':
                this.master.setDate(this.master.getDate()-amt)
                break
        }

        return this;
    }

    /*
    *   Returns date as utc encoded string
    */
    utc(){ return this.master.toUTCString() }

    

    /*
    *   Formats Date based on specified format string
    *   @param {string} - desired format of the date
    */
    format(format){
        
        format = format.replace('MM', this.master.getMonth()+1 )
        format = format.replace('DD', this.master.getDate() )
        format = format.replace('YYYY', this.master.getFullYear() )

        return format
    }


}

module.exports = Chronos;
