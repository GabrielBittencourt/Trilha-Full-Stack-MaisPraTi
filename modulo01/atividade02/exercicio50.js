const prompt = require('prompt-sync')()

let hotels = []
let reservations = []
let nextReservationId = 1

function addHotel() {
  let id = hotels.length + 1
  let name
  let city
  let totalRooms

  while (true){
    name = prompt("Nome do hotel: ")
    if(!/^[a-zA-Z\s]+$/.test(name)){
      console.log("Nome inválido. O nome do hotel deve conter apenas letras.")
    }else{
      let duplicateName = false
      for(let i = 0; i < hotels.length; i++){
        if(hotels[i].name.toLowerCase() === name.toLowerCase()){
          duplicateName = true
          break
        }
      }
      if(duplicateName){
        console.log("O hotel " + name + " já existe.")
      }else{
        break
      }
    }
  }
  while(true){
    city = prompt("Nome da cidade: ")
    if(!/^[a-zA-Z\s]+$/.test(city)){
      console.log("Nome inválido. O nome do hotel deve conter apenas letras.")
    }else{
      break
    }
  }
  while (true){
    totalRooms = parseInt(prompt("Número de quartos: "))
    if(!Number.isInteger(totalRooms)){
      console.log("Número de quartos inválido. O número de quartos deve ser um inteiro.")
    }else{
      break
    }
  }  
  let hotel = {
    id: id,
    name: name,
    city: city,
    totalRooms: totalRooms,
    availableRooms: totalRooms,
    reviews: []
  }
  hotels.push(hotel)
  console.log("Hotel adicionado com sucesso!")
}
function searchHotelsByCity(){
  let city = prompt("Cidade: ")
  let hotelsInCity = []
  for(let i = 0; i < hotels.length; ++i){
    if(hotels[i].city.toLowerCase() === city.toLowerCase()){
      hotelsInCity.push(hotels[i])
    }
  }
  if(hotelsInCity.length === 0){
    console.log("Não foram encontrados hoteis em " + city.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + ".")
  }else{
    console.log("Hoteis em " + city.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + ":")
    hotelsInCity.forEach(hotel => console.log("Nome: - " + hotel.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " | Total de quartos: - " + hotel.totalRooms))
  }
}
function makeReservationByName(){
  let hotelName = prompt("Nome do hotel: ")
  let clientName = prompt("Nome do cliente: ")
  if(typeof hotelName !== 'string'){
    console.log("Nome do hotel inválido.")
    return
  }
  let hotel = null
  for(let i = 0; i < hotels.length; ++i){
    if(hotels[i].name.toLowerCase() === hotelName.toLowerCase()){
      hotel = hotels[i]
      break
    }
  }
  if(!hotel){
    console.log("Hotel " + hotelName.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " não encontrado.")
    return
  }
  if(hotel.availableRooms === 0){
    console.log("Desculpe, não há quartos disponíves no hotel " + hotelName.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + ".")
    return
  }
  let newReservation = {
    reservationId: nextReservationId++,
    hotelId: hotel.id,
    clientName: clientName,
    status: "reserved", // pode ser "reserved", "check-in", "check-out", "canceled"
    review: null
  }
  reservations.push(newReservation)
  --hotel.availableRooms
  console.log("Reserva feita com sucesso no  hotel " + hotelName.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " para o cliente " + clientName.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + ". ID da reserva: " + newReservation.reservationId)
}
function cancelReservation(){
  let reservationId = parseInt(prompt("ID da reserva: "))
  let reservation = null
  for(let i = 0; i < reservations.length; ++i){
    if(reservations[i].reservationId === reservationId){
      reservation = reservations[i]
      break
    }
  }
  if(!reservation){
    console.log("Reserva não encontrada.")
    return
  }
  if (reservation.status === "check-out"){
    console.log("Reserva já finalizada.")
    return
  }
  let hotel = null
  for(let i = 0; i < hotels.length; ++i){
    if(hotels[i].id === reservation.hotelId){
      hotel = hotels[i]
      break
    }
  }
  ++hotel.availableRooms
  reservation.status = "canceled"
  console.log("Reserva cancelada com sucesso.")
}
function listReservations(){
  if(reservations.length === 0){
    console.log("Sem reservas.")
    return
  }
  for(let i = 0; i < reservations.length; ++i){
    let reservation = reservations[i]
    let hotel = null
    for(let j = 0; j < hotels.length; ++j){
      if(hotels[j].id === reservation.hotelId){
        hotel = hotels[j]
        break
      }
    }
    let review = reservation.review !== null ? reservation.review : "Sem avaliação"
    console.log("ID da reserva: " + reservation.reservationId + " | Hotel: " + hotel.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " | Cliente: " + reservation.clientName.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " | Status: " + reservation.status + " | Avaliação: " + review)
  }
}
function checkIn(){
  let reservationId = parseInt(prompt("ID da reserva: "))
  let reservation = null
  for(let i = 0; i < reservations.length; ++i){
    if(reservations[i].reservationId === reservationId){
      reservation = reservations[i]
      break
    }
  }
  if(!reservation){
    console.log("Reserva não encontrada.")
    return
  }
  if(reservation.status !== "reserved"){
    console.log("Não foi possível fazer check-in para essa reserva.")
    return
  }
  reservation.status = "check-in"
  console.log("O check-in foi bem sucedido.")
}
function checkOut(){
  let reservationId = parseInt(prompt("ID da reserva: "))
  let reservation = null
  for(let i = 0; i < reservations.length; ++i){
    if(reservations[i].reservationId === reservationId){
      reservation = reservations[i]
      break
    }
  }
  if(!reservation){
    console.log("Reserva não encontrada.")
    return
  }
  if(reservation.status !== "check-in"){
    console.log("Não foi possível fazer check-out para essa reserva.")
    return
  }
  let hotel = null
  for(let i = 0; i < hotels.length; ++i){
    if(hotels[i].id === reservation.hotelId){
      hotel = hotels[i]
      break
    }
  }
  ++hotel.availableRooms
  reservation.status = "check-out"
  
  while(true){
    review = parseFloat(prompt("Avaliação (0 a 5): "))
    if (review >= 0 && review <= 5) {
      reservation.review = review
      hotel.reviews.push(review)
      console.log("Check-out feito e avaliação de " + review + " estrelas adicionada para o hotel " + hotel.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + ".")
      break
    }else{
      console.log("Avaliação inválida. Tente novamente.")
    }
    
  }
  
}
function generateOccupancyReport(){
  let hotelName = prompt("Nome do hotel: ")
  let hotel = null
  for(let i = 0; i < hotels.length; ++i){
    if (hotels[i].name.toLowerCase() === hotelName.toLowerCase()){
      hotel = hotels[i]
      break
    }
  }
  if(!hotel){
    console.log("Hotel " + hotelName.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " não encontrado.")
    return
  }
  let occupancy = ((hotel.totalRooms - hotel.availableRooms) / hotel.totalRooms) * 100
  console.log("Relatório de ocupação do hotel " + hotel.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + ": " + occupancy.toFixed(2) + "% ocupado.")
}
let verification = true
while(verification){
  console.log("\nSistema de reserva de hotel")
  console.log("1. Adicionar Hotel")
  console.log("2. Procurar hotéis por cidade")
  console.log("3. Fazer reserva")
  console.log("4. Cancelar reserva")
  console.log("5. Lista de reservas")
  console.log("6. Check-in")
  console.log("7. Check-out")
  console.log("8. Relatório de ocupação")
  console.log("0. Sair")
  let option = prompt("Escolha uma opção: ")
  switch(option){
    case '1':
      addHotel()
      break
    case '2':
      searchHotelsByCity()
      break
    case '3':
      makeReservationByName()
      break
    case '4':
      cancelReservation()
      break
    case '5':
      listReservations()
      break
    case '6':
      checkIn()
      break
    case '7':
      checkOut()
      break
    case '8':
      generateOccupancyReport()
      break
    case '0':
      console.log("Saindo...")
      verification = false
      break
    default:
      console.log("Opção inválida. Tente de novo.")
  }
}
