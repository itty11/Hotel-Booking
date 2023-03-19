$(function() {
  // API URL for getting room data
  const API_URL = "https://api.example.com/hotel/rooms";
  
  // Load room data from API
  $.getJSON(API_URL, function(data) {
    // Display rooms in table
    let roomList = "";
    data.forEach(function(room) {
      room
