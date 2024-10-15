# 📅 Nöbet Çizelgesi 📊
Bu proje, nöbet tutacak 56  kişinin belirli zaman dilimlerinde organize edilmesine yardımcı olan bir uygulamadır. Kullanıcılar, yeni nöbet çizelgeleri oluşturabilir ve mevcut çizelgeleri görüntüleyebilir. 📅 Nöbet sürelerinin eşit dağıtılması sağlanmış ve rastgele pay edilmesi engellenmiştir.  

## 📸 Sunum 📸
![](https://github.com/Fiartaks/27-Nobet-Cizelgesi/blob/main/gif%20and%20png/nobet.gif)

## 📸 Screenshots 📸

![](https://github.com/Fiartaks/27-Nobet-Cizelgesi/blob/main/gif%20and%20png/nobet2.png)


## 💻 Projede Neler Var?
- 📅 **Dinamik Nöbet Çizelgesi:** Kullanıcılar, belirli tarihler için yeni nöbet çizelgeleri oluşturabilir.
- 👥 **İsim Listesi:** Nöbet tutacak kişilerin detaylı bir listesi mevcuttur.
- 🌟 **Modern ve Kullanıcı Dostu Tasarım:** Responsive bir arayüz ile her cihazda kullanılabilir.

## 🛠️ Projede Yapılanlar

### JavaScript İşlevselliği 🌐

- **Nöbet Tutacak Kişi Listesi:** 
  - Nöbet tutacak kişilerin isimleri bir dizi içerisinde saklandı. 📝
  
- **Haftanın Günleri:** 
  - Haftanın günleri bir dizi içinde tanımlandı, böylece her güne ait nöbet planı oluşturulabilir. 📅

- **Nöbet Çizelgesi Oluşturma:** 
  - `generateSchedule` fonksiyonu kullanılarak her yeni çağrıldığında:
    - Mevcut nöbet çizelgesi temizleniyor. 🧹
    - Belirlenmiş zaman dilimlerine göre nöbetçiler atanıyor. ⏰
    - Nöbetçiler tıklanabilir hale getiriliyor ve kullanıcının bu kişilere tıklayarak detayları görmesi sağlanıyor. 👆
    - Nöbet günleri *localStorage*'da kaydediliyor, böylece kullanıcı bir günün nöbetlerini daha sonra görüntüleyebilir. 💾

- **Modal Açma ve Kapatma:** 
  - `openModal` fonksiyonu, kullanıcı bir nöbetçiyi tıkladığında o kişi ile ilgili detayları göstermek için kullanılıyor. 📜
  - Kullanıcı modalı kapatmak için sağ üst köşedeki "x" butonuna ya da modal dışına tıklayabiliyor. ❌

- **Günlerin Nöbet Çizelgesini Görüntüleme:** 
  - `displaySchedule` fonksiyonu, kullanıcı belirli bir günün nöbet çizelgesini görmek istediğinde çağrılıyor. 🔍
  - Seçilen günün nöbetçileri *localStorage*'dan alınıp tabloya ekleniyor. 📊

## 🚀 Kullanılan Teknolojiler
- **HTML** 🌐
- **CSS** 🎨
- **JavaScript** 🖥️

