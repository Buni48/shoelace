import { registerTranslation } from '../utilities/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'tr',
  $name: 'Türkçe',
  $dir: 'ltr',

  clearEntry: 'Girişi sil',
  close: 'Kapat',
  copy: 'Kopya',
  currentValue: 'Mevcut değer',
  goToSlide: (slide, count) => `${count} slayttan ${slide} slayta gidin`,
  hidePassword: 'Şifreyi sakla',
  loading: 'Yükleme',
  nextSlide: 'Sonraki slayt',
  numOptionsSelected: num => {
    if (num === 0) return 'Hiçbir seçenek seçilmedi';
    if (num === 1) return '1 seçenek seçildi';
    return `${num} seçenek seçildi`;
  },
  previousSlide: 'Bir onceki slayt',
  progress: 'İlerleme',
  remove: 'Kaldır',
  resize: 'Yeniden boyutlandır',
  scrollToEnd: 'Sona kay',
  scrollToStart: 'Başa kay',
  selectAColorFromTheScreen: 'Ekrandan bir renk seçin',
  showPassword: 'Şifreyi göster',
  toggleColorFormat: 'Renk biçimini değiştir'
};

registerTranslation(translation);

export default translation;
