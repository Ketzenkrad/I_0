//Class
class Options {
    //attr_acessor
    constructor(height = '24px', width = '24px', background = '#8e44ad', fontSize = '24px', textAlign = 'center') {
            //@instance
            this.height = height;
            this.width = width;
            this.background = background;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            //log
            console.log('Test++, attr_acessor');
        } //def
    create(text) {
        //создание div'a
        let div = document.createElement('div');
        //его параметры;
        div.style.display = 'inline-block';
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.background;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        div.textContent = text;
        //Добавляем
        document.body.appendChild(div);
        //log
        console.log('Test++, create');
    }
}
//object
let block = new Options('480px', '480px', '#8e44ad', '24px', 'justify');
//print
block.create('Test output message');
//log
console.log(`Test: ${block}`);