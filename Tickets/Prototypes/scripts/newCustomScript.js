// Sidebar stuff
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')


function toggleSidebar() {
  sidebar.classList.toggle('closed');
  toggleButton.classList.toggle('rotate');
  closeAllSubMenus();
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

// Filter søgning - Under Ticket Status.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#searchinput input').addEventListener('input', function () {
      const searchValue = this.value.toLowerCase();
      const rows = document.querySelectorAll('tbody tr');
  
      rows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        row.style.display = rowText.includes(searchValue) ? '' : 'none';
      });
    });
  });

// Funktion til at fjerne backdrop manuelt når du lukker den igen. 
function removeBackdrops() {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.body.classList.remove('modal-open'); 
    document.body.style.overflow = ''; 
  }


// Håndtere klik-funktion på tabellen - Tickets.
document.querySelectorAll('table tbody tr').forEach(row => {
    row.addEventListener('click', function () {
      var ticketNumber = this.cells[0].textContent;
      var ticketCustomerName = this.cells[1].textContent;
      var ticketEmail = this.cells[2].textContent;
      var ticketTitle = this.cells[3].textContent;
      var ticketDescription = this.cells[4].textContent; 
      var ticketStatus = this.cells[5].textContent;
      var ticketCreated = this.cells[7].textContent;
  
      document.getElementById('modalTicketNumber').value = ticketNumber;
      document.getElementById('modalTicketCustomerName').value = ticketCustomerName;
      document.getElementById('modalTicketEmail').value = ticketEmail;
      document.getElementById('modalTicketTitle').value = ticketTitle;
      document.getElementById('modalTicketDescription').value = ticketDescription;
      document.getElementById('modalTicketStatus').value = ticketStatus;
      document.getElementById('modalTicketCreated').value = ticketCreated;
  
      var ticketModal = new bootstrap.Modal(document.getElementById('ticketModal'));
      ticketModal.show();
  
      // Håndter fjernelse af backdrop ved lukning
      document.getElementById('ticketModal').addEventListener('hidden.bs.modal', removeBackdrops);
    });
  });
  
  // Håndtere klik-funktion på tabellen - Kunder.
  document.querySelectorAll('table tbody tr').forEach(row => {
    row.addEventListener('click', function () {
      var kundeNumber = this.cells[0].textContent;
      var kundeFirstname = this.cells[1].textContent;
      var kundeLastname = this.cells[2].textContent;
      var kundePhoneNumber = this.cells[3].textContent;
      var kundeEmail = this.cells[4].textContent;
      var kundeAdresse = this.cells[5].textContent;
      var kundeSreetnumber = this.cells[6].textContent;
      var kundeCity = this.cells[7].textContent;
      var kundeZipCode = this.cells[8].textContent;
  
      document.getElementById('modalKundeNumber').value = kundeNumber;
      document.getElementById('modalKundefornavn').value = kundeFirstname;
      document.getElementById('modalKundeefternavn').value = kundeLastname;
      document.getElementById('modalKundetelefon').value = kundePhoneNumber;
      document.getElementById('modalKundeEmail').value = kundeEmail;
      document.getElementById('modalKundeadresse').value = kundeAdresse;
      document.getElementById('modalStreetnumber').value = kundeSreetnumber;
      document.getElementById('modalCity').value = kundeCity;
      document.getElementById('modalZipCode').value = kundeZipCode;
  
      var ticketModal = new bootstrap.Modal(document.getElementById('kundeModal'));
      ticketModal.show();
  
      document.getElementById('kundeModal').addEventListener('hidden.bs.modal', removeBackdrops);
    });
  });
  
  // Håndtere klik-funktion på tabellen - Bruger.
  document.querySelectorAll('table tbody tr').forEach(row => {
    row.addEventListener('click', function () {
      var userNumber = this.cells[0].textContent;
      var userFirstname = this.cells[1].textContent;
      var userLastname = this.cells[2].textContent;
      var userUsername = this.cells[3].textContent;
      var userEmail = this.cells[4].textContent;
      var userPhoneNumber = this.cells[5].textContent;
      var userrole = this.cells[6].textContent;
  
      document.getElementById('modalUserNumber').value = userNumber;
      document.getElementById('modalUserfornavn').value = userFirstname;
      document.getElementById('modalUserefternavn').value = userLastname;
      document.getElementById('modalUserUsername').value = userUsername;
      document.getElementById('modalUserEmail').value = userEmail;
      document.getElementById('modalUserPhoneNumber').value = userPhoneNumber;
      document.getElementById('modalUserRole').value = userrole;
  
      var ticketModal = new bootstrap.Modal(document.getElementById('userModal'));
      ticketModal.show();
  
      // Håndter fjernelse af backdrop ved lukning
      document.getElementById('userModal').addEventListener('hidden.bs.modal', removeBackdrops);
    });
  });