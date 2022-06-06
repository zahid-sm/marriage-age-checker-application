//form validation 

const setAlert = (msg , type= 'danger') => {
    return ` <p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button  data-bs-dismiss="alert"  class="btn-close"></button></p> `
}


/**
 * Age Number Check
 */

const ageCheck = (num) => {
    
    let agepertten = /^[0-9]{1,3}$/;

    return agepertten.test(num)
}



/**
 * Marriage Age Check
 */

const marriageAgeCheck = (name, age, gender) => {

    if( gender >= 'Male') {

        let marriageAge = '21';

        if(age >= marriageAge) {
            return setAlert(`Hi ${name} Vaiya apnar Biyer Boyos hoyece`,'success')
        }else{
            return setAlert(`Hi ${name} vaiya apnar Biyer Boyos hoy ni`, "danger")
        }

    }else{
        if( gender >= 'Female') {

        let marriageAge = '18';

        if(age >= marriageAge) {
            return setAlert(`Hi ${name} Apu apnar Biyer Boyos hoyece`,'success')
        }else{
            return setAlert(`Hi ${name} Apu apnar Biyer Boyos hoy ni`, "danger")
        }
     }

    }
}