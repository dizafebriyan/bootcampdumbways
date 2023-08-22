class Testimonials {
    #quote="";
    #image="";

    constructor (quote,image){
        this.#quote=quote;
        this.#image=image;
    }
    get quote (){
        return this.#quote;
    }
    get image(){
        return this.#image;
    }
    get author(){
        throw new Error ("getAuthor() Method must be impelemented");
    }
    get testimonialHTML(){
        return `<div class="testimonial">
                    <img src="${this.image}" alt="Foto User">
                    <p class="quote">${this.quote}</p>
                    <p class="namequote">${this.author}</p>
                </div>`
    }

}

class AuthorTestimonials extends Testimonials{
    #author="";

    constructor(author,quote,image){
        super(quote,image);
        this.#author=author;
    }
    get author(){
        return this.#author;
    }
}

class CompanyTestimonials extends Testimonials {
    #company="";

    constructor (company,quote,image){
        super(quote,image);
        this.#company=company;
    }
    get author(){
        return this.#company + " company";
    }
}

const testimonial1 = new AuthorTestimonials(
    "- Febri",
    "Mantappp",
    "https://xsgames.co/randomusers/avatar.php?g=male"
    );
const testimonial2 =new AuthorTestimonials(
    "- Joko",
    "Sangat memberikan jasa yang profesional",
    "https://xsgames.co/randomusers/avatar.php?g=female"
)
const testimonial3= new CompanyTestimonials(
    "- PT Semen Baturaja",
    "Memberikan kualitas yang baik",
    "https://xsgames.co/randomusers/avatar.php?g=pixel"
)

let testimonialData = [testimonial1,testimonial2,testimonial3];
let testimonialHTML=``;

for (let i=0;i<testimonialData.length;i++){
    testimonialHTML += testimonialData[i].testimonialHTML; 
}

document.getElementById("testimonials").innerHTML = testimonialHTML;