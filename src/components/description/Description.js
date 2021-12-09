import './styles.css';

export class Description {
    constructor(label='', classList=[]) {
        this.label = label        
        this.classList = classList
    }

    render() {
        const description = document.createElement('p')

        description.innerText = this.label

        if (Array.isArray(this.classList)) {
            this.classList.forEach(element => {
                description.classList.add(element)
            })
        } 
          
        return description
    }
}

export default Description