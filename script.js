window.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('main-title');
    const catchphrase = document.getElementById('main-catch');
  
    // 0.5秒後にh1表示
    setTimeout(() => {
      title.classList.add('visible');
    }, 500);
  
    // 1.5秒後にp表示
    setTimeout(() => {
      catchphrase.classList.add('visible');
    }, 1500);
  });


const countdownElement = document.getElementById('countdown');
//カウントダウンの対象日
const targetDate = new Date('2026-02-22T00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;
  
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML = "イベントが始まりました！";
      clearInterval(interval);
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}


const interval = setInterval(updateCountdown, 1000);
updateCountdown();