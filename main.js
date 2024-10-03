//!  Nöbet tutacak kişiler.
const names = [
  "Fırat Akkuş",
  "Mustafa Taş",
  "M.Erhan Oduncu",
  "L.Umut Kısabacak",
  "Vahdettin Kaçmaz",
  "Ferda Ümür",
  "Sezer Özer",
  "Hüzeyfe Gündüz",
  "Rıza Koç",
  "Süleyman Aksoy",
  "Fikret Çetin",
  "Serhat Aydın",
  "Bülent Kılıç",
  "Oğuzhan Karaca",
  "Tamer Polat",
  "Orhan Eren",
  "Cenk Yıldırım",
  "Yiği Güneş",
  "Cem Kaplan",
  "Levent Taş",
  "Cihan Bal",
  "Edip Uçar",
  "Taner Akpınar",
  "Saffet Sönmez",
  "Turgut Ersoy",
  "Mahmut Şen",
  "Onur Kaya",
  "Ufuk Yurt",
  "Nazif Sarı",
  "Veli Korkmaz",
  "Faruk Doğan",
  "Sinan Kurt",
  "Eren Çelik",
  "Alper Bozkurt",
  "Caner Toros",
  "Selim Bingöl",
  "Volkan Özkan",
  "Halil Uysal",
  "Gökhan Özçelik",
  "Yunus Karakoç",
  "Koray Tan",
  "Burak Ilgaz",
  "Enes Köse",
  "Cengiz Çatal",
  "Orçun Topal",
  "Cüneyt Koçyiğit",
  "Erhan Kahraman",
  "Mert Günay",
  "Emre Şahin",
  "Metehan Duman",
  "Yavuz Dağ",
  "Tunç Oral",
  "Baran Ay",
  "Sedat Işık",
  "Kaan Baran",
  "Halit Akın",
];

//! Haftanın günleri. Her güne bir nöbet planı,
const weekdays = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];
// Şu anki nöbetin başladığı isim
let currentIndex = 0;
// Şu anki günün indeksi
let currentDayIndex = 0;

//! Bu fonksiyon her çağrıldığında yeni bir nöbet çizelgesi oluşturur.
function generateSchedule() {
  const scheduleTable = document.querySelector("#nobet-cizelgesi tbody");
  // !Eski nöbet çizelgesini temizler!
  scheduleTable.innerHTML = "";

  //! Nöbet tutulacak 2 saatlik zaman dilimleri
  const timeSlots = [
    "00:00 - 02:00",
    "02:00 - 04:00",
    "04:00 - 06:00",
    "06:00 - 08:00",
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
    "20:00 - 22:00",
    "22:00 - 00:00",
  ];
  //! Bugünün nöbetçileri saklanacak!
  const dailySchedule = [];

  // !Her zaman dilimi için bir döngü
  // !Her zaman dilimi için iki nöbetçi seçiliyor!
  for (let i = 0; i < timeSlots.length; i++) {
    // Yeni bir tablo satırı oluştur
    const row = document.createElement("tr");
    // Zamanı gösterecek hücre
    const timeCell = document.createElement("td");
    // İlk nöbetçi
    const person1Cell = document.createElement("td");
    // İkinci nöbetçi
    const person2Cell = document.createElement("td");
    // Zaman hücresine saat dilimini yaz
    timeCell.textContent = timeSlots[i];

    //! İsim listesinde sıradaki iki kişiyi seç
    const person1Index = (currentIndex + i * 2) % names.length;
    const person2Index = (currentIndex + i * 2 + 1) % names.length;
    const person1 = names[person1Index];
    const person2 = names[person2Index];

    //! Nöbetçi isimlerini hücrelere yaz
    person1Cell.textContent = person1;
    person2Cell.textContent = person2;

    //! Tıklanabilir hale getir
    person1Cell.onclick = () => openModal(person1, timeSlots[i]);
    person2Cell.onclick = () => openModal(person2, timeSlots[i]);

    //* Eğer Fırat Akkuş nöbetçiyse, mavi arka planı
    if (person1 === "Fırat Akkuş") {
      person1Cell.classList.add("highlight");
    }
    if (person2 === "Fırat Akkuş") {
      person2Cell.classList.add("highlight");
    }

    row.appendChild(timeCell); // Saat dilimini satıra ekle
    row.appendChild(person1Cell); // İlk nöbetçiyi satıra ekle
    row.appendChild(person2Cell); // İkinci nöbetçiyi satıra ekle
    scheduleTable.appendChild(row); // Satırı tabloya ekle

    //! Bugünkü nöbetçileri listeye ekleme
    dailySchedule.push({ slot: timeSlots[i], person1, person2 });
  }

  //! Günlük nöbetçileri hafızaya kaydet (local storage gibi düşün)
  localStorage.setItem(
    weekdays[currentDayIndex],
    JSON.stringify(dailySchedule)
  );

  //! Bir sonraki gün için nöbetçileri kaydır
  currentIndex = (currentIndex + timeSlots.length * 2) % names.length;

  //! Bugünün ismini taşıyan bir buton oluştur ve sakla
  if (currentDayIndex < weekdays.length) {
    const weekdayButtons = document.querySelector("#weekday-buttons");
    const newButton = document.createElement("button");
    newButton.textContent = weekdays[currentDayIndex];
    newButton.onclick = () => displaySchedule(weekdays[currentDayIndex]); // Butona tıklayınca o günün nöbetçilerini göster
    weekdayButtons.appendChild(newButton);
    currentDayIndex++;
  }
}

//! Modal açma fonksiyonu
function openModal(personName, timeSlot) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalTime = document.getElementById("modal-time");

  modalTitle.textContent = personName;
  modalTime.textContent = `Nöbet Saati: ${timeSlot}`; // Saat dilimini burada gösteriyoruz

  modal.style.display = "block"; // Modalı göster
}

//* Modalı kapatma fonksiyonu
document.getElementById("close").onclick = function () {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Modalı gizle
};

//* Modal dışına tıklanırsa kapat
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none"; // Modalı gizle
  }
};

//! Tıklanan günü göstermek için bir fonksiyon
function displaySchedule(day) {
  const scheduleTable = document.querySelector("#nobet-cizelgesi tbody");
  scheduleTable.innerHTML = ""; // Tabloyu temizle
  const dailySchedule = JSON.parse(localStorage.getItem(day)) || []; // Hafızadan o günü al

  //! Her zaman dilimi için sıra bu
  dailySchedule.forEach((item) => {
    const row = document.createElement("tr"); // Yeni satır
    const timeCell = document.createElement("td"); // Saat hücresi
    const person1Cell = document.createElement("td"); // İlk nöbetçi
    const person2Cell = document.createElement("td"); // İkinci nöbetçi

    timeCell.textContent = item.slot; // Saat dilimi
    person1Cell.textContent = item.person1; // Nöbetçi 1
    person2Cell.textContent = item.person2; // Nöbetçi 2

    // !Eğer Fırat Akkuş nöbetçiyse, mavi arka plan yap
    if (item.person1 === "Fırat Akkuş") {
      person1Cell.classList.add("highlight");
    }
    if (item.person2 === "Fırat Akkuş") {
      person2Cell.classList.add("highlight");
    }

    row.appendChild(timeCell); // Zamanı satıra ekle
    row.appendChild(person1Cell); // Nöbetçi 1'i satıra ekle
    row.appendChild(person2Cell); // Nöbetçi 2'yi satıra ekle
    scheduleTable.appendChild(row); // Satırı tabloya ekle
  });
}

//! Sayfa yüklendiğinde başlangıç nöbet çizelgesini oluştur
generateSchedule();
