import {Donor} from '../classes/donor.js'

const d1 = new Donor(11 ,'richard', 'richardke18@', '11947316281' );


//getting the location´s client and put in memory system.
navigator.geolocation.watchPosition(
    (geoLoc)=>{
     let coordenadas = {
        latitude: geoLoc.coords.latitude,
        longitude: geoLoc.coords.longitude
     }

     d1.setLocalizacao(coordenadas)
    }, (error)=>{
        alert(`${error.message}, o site precisa da sua localização para verificar locais próximos`)
    }
    
)


console.log(d1)

