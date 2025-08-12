
document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const envelopeScreen = document.getElementById('envelope-screen');
  const invite = document.getElementById('invite');
  const pop = document.getElementById('pop');
  const bgMusic = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');
  let musicPlaying = false;

  function openEnvelope() {
    // play small pop
    try { pop.currentTime = 0; pop.play(); } catch(e) {}
    // animate
    envelope.classList.add('open');
    // after animation, hide the envelope screen and show invitation
    setTimeout(() => {
      envelopeScreen.classList.add('hidden');
      envelopeScreen.style.display = 'none';
      invite.classList.remove('hidden');
      // autoplay music if user interacted (we already had click)
      try { bgMusic.play(); musicPlaying = true; musicBtn.textContent = '⏸️'; } catch(e) {}
    }, 900);
  }

  envelope.addEventListener('click', () => openEnvelope());
  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openEnvelope();
  });

  musicBtn.addEventListener('click', () => {
    if (!musicPlaying) {
      bgMusic.play(); musicPlaying = true; musicBtn.textContent = '⏸️';
    } else {
      bgMusic.pause(); musicPlaying = false; musicBtn.textContent = '🎵';
    }
  });

  // Countdown
  const target = new Date('Oct 25, 2025 21:00:00').getTime();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      daysEl.textContent = '00'; hoursEl.textContent = '00'; minutesEl.textContent = '00'; secondsEl.textContent = '00';
      clearInterval(timer);
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);

    daysEl.textContent = String(days).padStart(2,'0');
    hoursEl.textContent = String(hours).padStart(2,'0');
    minutesEl.textContent = String(minutes).padStart(2,'0');
    secondsEl.textContent = String(seconds).padStart(2,'0');
  }
  updateCountdown();
  const timer = setInterval(updateCountdown,1000);
});
