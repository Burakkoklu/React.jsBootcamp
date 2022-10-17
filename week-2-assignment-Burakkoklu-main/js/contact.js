renderHeader({activePage:"contact.html"});
const root = document.querySelector("#root");
const renderContactForm = function (){
    const form = document.createElement("form");
    const template =`
            <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email </label>
        <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Mesaj</label>
        <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
        <button type="submit" class="btn btn-primary">Gönder</button>
        </div>
    `;
    form.innerHTML=template
    root.appendChild(form);
    form.addEventListener("submit", sendForm)

}


const sendForm = function(event){
    event.preventDefault();
    const frm = event.currentTarget;
    const formData =new FormData(frm)
    const parameters={
        email:formData.get("email"),
        message:formData.get("message")
    }
    //api'ye gönder
    
    const response =true;
    if(response){
        //sonuç başarılı ise kullanıcıya başarılı bilgisi ver
        //formu resetle
    alert("Mesaj Başarılı Bir Şekilde Alındı")
    frm.reset();
    }
    else{
        //sonuç başarısız ise kullanıcıya başarısız bilgisi ver
        alert("Bir Problem Oluştu Mesajınızı Mesajınızı Alamadık")
    }
};
renderContactForm();