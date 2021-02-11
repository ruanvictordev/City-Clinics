

let app = new Vue({
    el: "#app",
      data: {
           clinics: [],
           clinica: {
                id: '',
                nomeClinica: '',
                descricaoClinica: '',
                telefoneClinica: '',
                emailClinica: '',
                imagemClinica: '',
           },
           isEdit: false
        },
        saveClinic(clinica){
            //console.log(clinica)
            let clinics = localStorage.getItem('clinicsApp');
            clinica.id = new Date().getTime();
            if(clinics){
                //atulizar clinicas no localStorage
                clinics = JSON.parse(clinics);
                clinics.push(clinica);
            }else{
                clinics = [clinica]; //p/ novo cadastro
            }
            this.clinics = clinics;
            //ou atualizar localStorage independente de nova clínica ou nova adição
            localStorage.setItem('clinicsApp', JSON.stringify(clinics))

            location.reload();
        },
        removeClinica(clinicaId){
            let clinics = localStorage.getItem('clinicsApp');

            if (!clinics) return;

                clinics = JSON.parse(clinics);
                clinics = clinics.filter((clinica) => {
                     return clinica.id != clinicaId;
                });
                this.clinics = clinics; //Atualiza o site automaticamente
                localStorage.setItem('clinicsApp', JSON.stringify(clinics));
        },
        editaClinica(clinica){
            this.clinica = clinica;
            this.isEdit = true;
        },
        updateClinic(clinica){
            let clinics = this.clinics.map(clinicaMap => {
                if (clinicaMap.id == clinica.id) {
                    return clinica;
                }

                return clinicaMap;
            });
                this.clinics = clinics;
                this.isEdit = false;
                localStorage.setItem('clinicsApp', JSON.stringify(clinics));

                location.reload();
        },
    }
)