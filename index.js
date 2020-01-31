//kelas untuk menampung angka
let obj = {
    number:'',
    temp:[],
    display:'',
    hasil: ''
}
//function operasi kalkulator keseluruhan
function hitung(aritmatika) {
    
    let displayCalculator = document.getElementsByClassName('screen')
    //variable menampilakan angka yang berada di class pada html dengan nama screen
    if(typeof aritmatika === 'string' && aritmatika == 'CLEAR'){
        obj.number =''
        obj.temp = []
        obj.display=''
        obj.hasil=''
    //fungsi tombol reset, melakukan pembersihan pada seluruh nilai pada objek
    }
    else if(obj.number.length < 1 && obj.temp.length < 1 && obj.display.length < 1 && obj.hasil.length < 1 && typeof aritmatika === 'string'){
        displayCalculator[0].value = `0`
        alert('Input Pertama Harus Angka')
    // kondisi dimana alert akan muncul apabila tombol operator ditekan sebelum ada angka yang dimasukkan terlebih dahulu
    }
    else if(typeof aritmatika === 'string' && typeof obj.temp[obj.temp.length-1] == 'string' && obj.number.length === 0){
        alert('Input Selanjutnya Harus Angka')
    //kondisi dimana alert akan muncul jikalau user menekan tombol operator lagi setelah operator sudah terbaca
    }
    else if(typeof aritmatika === 'number'){
        obj.number += aritmatika
        obj.display += aritmatika
    //jika nilai pada parameter yang didapat pada button di html bertipe number
    //maka nilai dari parameter tersebut akan dimasukan ke {obj.number} untuk ditampung dan {obj.display} untuk ditampilkan
    }
    else if(typeof aritmatika === 'string'){
    //kondisi apakah value yang dimasukan kedalam parameter aritmatika adalah string ?
        if(aritmatika == '='){
    //kondisi apakah value yang dimasukan kedalam aritmatika sama dengan '='
            obj.temp.push(obj.number*1)
            obj.number = ''
    //pindahkan seluruh data pada obj.number ke dalam obj.temp kemudaian obj.number diganti dengan empty string
            for (let i = 0; i < obj.temp.length; i++) {
    //proses loop yang dilakukan pada obj.temp untuk melakukan operasi matematis
                if(i%2===1){
    //jika index i pada proses loop berada di lokasi index yang bernilai ganjil
                    switch(obj.temp[i]){
    //kondisi untuk mencocokan operator pada index i yang bebrnilai ganjil
                        case '+': 
                            if(obj.hasil.length < 1){
    //jika panjang dari obj.hasil = 0
                                obj.hasil += obj.temp[i-1] + obj.temp[i+1]
    //obj.hasil akan diisi dengan nilai pada obj.temp pada index [i-1] dioprasikan dengan index [i+1]
                            }else{
                                obj.hasil = obj.hasil*1 + obj.temp[i+1]
                                obj.hasil = obj.hasil.toString()
                                // console.log(obj.hasil)
    //obj.hasil yang sudah memiliki nilai dapat dioprasikan kembali menggunakan operator yang sama atau berbeda
                            }
                            break
                        case '-': 
                            if(obj.hasil.length < 1){
                                obj.hasil += obj.temp[i-1] - obj.temp[i+1]
                            }else{
                                obj.hasil = obj.hasil*1 - obj.temp[i+1]
                                obj.hasil = obj.hasil + ''
                                // console.log(obj.hasil)
                            }
                            break
                        case '*': 
                            if(obj.hasil.length < 1){
                                obj.hasil += obj.temp[i-1] * obj.temp[i+1]
                            }else{
                                obj.hasil = obj.hasil*1 * obj.temp[i+1]
                                obj.hasil = obj.hasil + ''
                                // console.log(obj.hasil)
                            }
                            break
                        case '/': 
                            if(obj.hasil.length < 1){
                                obj.hasil += obj.temp[i-1] / obj.temp[i+1]
                            }else{
                                obj.hasil = obj.hasil*1 / obj.temp[i+1]
                                obj.hasil = obj.hasil + ''
                                // console.log(obj.hasil)
                            }
                            break
                    }
                }
            }
        obj.display = ''
//obj.display di set kembali menjadi empty string untuk dapat menampilkan hasil 
        }else{
            obj.temp.push(obj.number*1)
            obj.temp.push(aritmatika)
            obj.display += aritmatika
            obj.number = ''
//kondisi ketika nilai '=' belum ada pada parameter aritmatika
//proses ini akan terus menambahkan operator dan angka yang ditekan ke dalam obj.temp sampai tombol dengan nilai '=' di tekan
        }
    }
    if(obj.display.length > 0){
        displayCalculator[0].value = `${obj.display}`
//kondisi dapabila panjang dari obj.display lebih dari 0
//maka nilai yang ditampilakn adalah obj.display
    }
    
    else{

        displayCalculator[0].value = `${obj.hasil}`
        obj.hasil = ''
        obj.temp = []
        obj.number = ''
        obj.display = ''
    }
    // console.log(obj)
    // console.log(displayCalculator)
}