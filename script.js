// Navbar Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Saweria Integration
document.getElementById('saweriaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // GANTI USERNAME DI SINI
    const username = "USERNAME_ANDA"; 

    const name = encodeURIComponent(document.getElementById('donorName').value);
    const amount = document.getElementById('donorAmount').value;
    const msg = encodeURIComponent(document.getElementById('donorMessage').value);
    const program = document.getElementById('donorProgram').value;
    
    if (amount < 10000) {
        alert("Minimal donasi adalah Rp 10.000");
        return;
    }

    // Tampilkan efek loading sederhana
    const btn = document.querySelector('.btn-donate-submit');
    btn.innerText = "Mengarahkan ke Saweria...";
    btn.style.opacity = "0.7";

    // Redirect ke Saweria dengan Parameter
    setTimeout(() => {
        const saweriaUrl = `https://saweria.co/${username}?amt=${amount}&msg=${msg}%20(Program:%20${program})&name=${name}`;
        window.open(saweriaUrl, '_blank');
        btn.innerText = "Konfirmasi Donasi via Saweria";
        btn.style.opacity = "1";
    }, 1000);
});