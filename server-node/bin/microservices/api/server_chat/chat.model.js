class Chat {


    constructor(nickname,date,data) {
        this._nickname = nickname;
        this._date = date;
        this._data = data;
    }

    //////////////////////

    set nickname(value) {

        this._nickname = value;
    }


    get nickname() {
        return this._nickname;
    }

    ////////////////////////

    set date(value) {

     this._date = value;

    }


    get date() {
        return this._date;
    }

    set data(value) {
        
        this._data = value;

    }


    get data() {
        return this._data;
    }

}

module.exports={
    "ChatClassPointer":Chat
};