const age_form = document.getElementById('age_form')
const msg = document.getElementById('msg')
const fmsg = document.getElementById('footer-msg')



age_form.onsubmit= (e) => {
    e.preventDefault();

    let name= age_form.querySelector('input[name="name"]')
    let age= age_form.querySelector('input[name="age"]')
    let gender= age_form.querySelectorAll('input[name="gender"]')

    let gender_name ='';
    gender.forEach( item=> {
        if(item.checked) {
            gender_name= item.value
        }

    })


    /**
     * Form Validiton
     */

    if ( name.value=='' || age.value=='' || gender.value=='' ) {

        msg.innerHTML= setAlert('All Fields Are Required' );

    }else if ( ageCheck(age.value) == false) {
        msg.innerHTML= setAlert('Your Age Are Invalid', 'warning' );
    }else{
        fmsg.innerHTML =  marriageAgeCheck(name.value,age.value,gender_name)
    }

}