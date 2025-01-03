// Validasi Form Transaksi
document.addEventListener('DOMContentLoaded', () => {
    const transaksiForm = document.querySelector('#transaksiForm');
    
    if (transaksiForm) {
        transaksiForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah pengiriman default
            
            const namaTransaksi = document.querySelector('#namaTransaksi').value.trim();
            const jumlahTransaksi = document.querySelector('#jumlahTransaksi').value.trim();
            const kategoriTransaksi = document.querySelector('#kategoriTransaksi').value.trim();
            
            if (!namaTransaksi || !jumlahTransaksi || !kategoriTransaksi) {
                alert('Semua kolom harus diisi!');
                return;
            }
            
            alert('Transaksi berhasil disimpan!');
            transaksiForm.reset(); // Reset formulir setelah pengisian
        });
    }
});

function toggleNavbar() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  // Tutup modal jika pengguna klik di luar konten
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  };


const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const price = urlParams.get('price')
    if (product) {
        document.getElementById('product').value = product;
    }

    if (price) {
    document.getElementById('price').value = `Rp. ${parseInt(price).toLocaleString('id-ID')}`;
}


document.getElementById('payment-method').addEventListener('change', function () {
    const selectedPayment = this.value;
    const creditCardForm = document.getElementById('credit-card-form');
   
    if (selectedPayment === 'Credit/Debit Card') {
        creditCardForm.style.display = 'block';
    } else {
        creditCardForm.style.display = 'none';
    }
});

document.getElementById('payment-method').addEventListener('change', function () {
    const selectedPayment = this.value;
    const vaForm = document.getElementById('va_field');
    const vaNumber = document.getElementById("virtual_account_number");

    const virtualAccountNumber = "1234567890 (BANK BCA)";


    if (selectedPayment === 'Virtual Account') {
        vaForm.style.display = 'block';
        vaNumber.value = virtualAccountNumber; // Masukkan nomor VA
    } else {
        vaForm.style.display = 'none';
    }
});

document.getElementById('payment-method').addEventListener('change', function () {
    const selectedPayment = this.value;
    const qrisForm = document.getElementById('qris_field');
    const barcode = document.getElementById("barcode");

    const barcodeUrl = "img/barcode.jpg";

    if (selectedPayment === 'QRIS') {
        qrisForm.style.display = 'block';
        barcode.src = barcodeUrl; // Tampilkan barcode QRIS
    } else {
        qrisForm.style.display = 'none';
    }
});

document.getElementById('copy_button').addEventListener('click', function() {
    // Ambil elemen input
    var input = document.getElementById('virtual_account_number');
    
    // Pilih isi input
    input.select();
    input.setSelectionRange(0, 99999); // Untuk perangkat mobile

    // Salin isi input ke clipboard
    document.execCommand('copy');

    // Tampilkan pesan bahwa salinan berhasil (opsional)
    alert('Nomor Virtual Account telah disalin: ' + input.value);
});


/*Login*/
document.getElementsById("loginButton").addEventListener("click", function() {
    window.location.href = "home.html";
});

document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        window.location.href = "home.html";
        alert("Login Berhasil!")
    } else {
        alert("username atau password salah!");
    }
})