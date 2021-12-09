import './styles.css';

export class Header {
    constructor(label='', classList=[], headerTag=null) {
        this.label = label        
        this.classList = classList
        this.headerTag = headerTag
    }

    render() {       
        const header = document.createElement(this.headerTag)

        header.innerText = this.label

        if (Array.isArray(this.classList)) {
            this.classList.forEach(element => {
                header.classList.add(element)
            })
        } 
          
        return header
    }
}

export default Header