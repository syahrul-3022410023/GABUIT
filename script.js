/* ==========================================================================
   8-BIT MOOD BOOSTER - EMOJI SPAM & DRINKING SOUND SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Audio Synthesizer (8-Bit Sound Effects & Drinking Sound)
    // ----------------------------------------------------------------------
    let audioCtx = null;
    let isSoundOn = true;

    function initAudio() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    function playBeep(freq, type = 'square', duration = 0.1, gainVal = 0.08) {
        if (!isSoundOn) return;
        try {
            initAudio();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.log('Audio error:', e);
        }
    }

    // 8-Bit Slurp / Drinking Sound Effect (Slurp... Slurp... Ahh! ✨)
    function playDrinkingSound() {
        if (!isSoundOn) return;
        initAudio();

        // 3 Quick straw gulps (frequency sweeps down)
        const gulps = [0, 130, 260];
        gulps.forEach((delay) => {
            setTimeout(() => {
                try {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'sawtooth';

                    // Pitch drops rapidly like slurping boba through a straw
                    osc.frequency.setValueAtTime(750, audioCtx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(160, audioCtx.currentTime + 0.1);

                    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

                    osc.connect(gain);
                    gain.connect(audioCtx.destination);

                    osc.start();
                    osc.stop(audioCtx.currentTime + 0.1);
                } catch (e) {
                    console.log('Audio error:', e);
                }
            }, delay);
        });

        // Satisfied "Ahhh! ✨" high chime after drinking
        setTimeout(() => {
            const notes = [659.25, 880.00, 1174.66]; // E5, A5, D6
            notes.forEach((freq, idx) => {
                setTimeout(() => {
                    playBeep(freq, 'sine', 0.15, 0.1);
                }, idx * 70);
            });
        }, 420);
    }

    // Happy Fanfare Sound (Chiptune melody)
    function playHappyFanfare() {
        if (!isSoundOn) return;
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                playBeep(freq, 'triangle', 0.15, 0.12);
            }, idx * 60);
        });
    }

    // Controls
    const btnSound = document.getElementById('btn-sound');
    const soundStatus = document.getElementById('sound-status');
    const soundIcon = document.getElementById('sound-icon');

    btnSound.addEventListener('click', () => {
        initAudio();
        isSoundOn = !isSoundOn;
        soundStatus.textContent = isSoundOn ? 'ON' : 'OFF';
        soundIcon.textContent = isSoundOn ? '🔊' : 'MUTE';
        if (isSoundOn) {
            playHappyFanfare();
            showToast('🔊 Suara 8-Bit Aktif!');
        }
    });

    const btnCrt = document.getElementById('btn-crt');
    const crtStatus = document.getElementById('crt-status');

    btnCrt.addEventListener('click', () => {
        document.body.classList.toggle('crt-active');
        const isActive = document.body.classList.contains('crt-active');
        crtStatus.textContent = isActive ? 'ON' : 'OFF';
        playBeep(isActive ? 600 : 300, 'square', 0.08);
    });

    document.addEventListener('click', function firstTouch() {
        initAudio();
        document.removeEventListener('click', firstTouch);
    }, { once: true });

    // ----------------------------------------------------------------------
    // 2. Main Interactions
    // ----------------------------------------------------------------------
    const startView = document.getElementById('start-view');
    const cardView = document.getElementById('card-view');
    const btnStartBooster = document.getElementById('btn-start-booster');
    const btnBoba = document.getElementById('btn-boba');

    // Click Big Button -> Show Card + Spam Emotes
    btnStartBooster.addEventListener('click', (e) => {
        startView.classList.add('hidden');
        cardView.classList.remove('hidden');
        
        playHappyFanfare();
        triggerHappySpam(e.clientX, e.clientY, "+1000 SEMANGAT! 🌟");
    });

    // Click Boba Button -> Play Drinking SFX (Slurp!) + Spam Boba & Heart Emotes
    btnBoba.addEventListener('click', (e) => {
        // Play Realistic 8-Bit Drinking Sound Effect!
        playDrinkingSound();
        
        triggerHappySpam(e.clientX, e.clientY, "SLURP! BOBA SERUPUT! 🧋✨");
    });

    function triggerHappySpam(x, y, textLabel) {
        // Screen Shake Effect
        document.body.classList.add('shake-screen');
        setTimeout(() => {
            document.body.classList.remove('shake-screen');
        }, 360);

        // Spawn 28+ Emotes bursting all over the screen
        spawnEmojiBurst(x, y);

        // Spawn Floating Arcade Text
        spawnFloatingText(x, y, textLabel);
    }

    // ----------------------------------------------------------------------
    // 3. Emoji Explosion & Particle Fountain
    // ----------------------------------------------------------------------
    function spawnEmojiBurst(originX, originY) {
        const emojis = ['🧋', '💖', '✨', '🥤', '🌸', '⭐', '🎉', '🥳', '🥰', '🎓', '💫', '🍦', '😋'];
        const count = 28;

        const startX = originX || window.innerWidth / 2;
        const startY = originY || window.innerHeight / 2;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'emoji-particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5);
            const speed = Math.random() * 180 + 80;
            
            const tx = Math.cos(angle) * speed + 'px';
            const ty = Math.sin(angle) * speed - 60 + 'px';
            const rot = (Math.random() - 0.5) * 480 + 'deg';

            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;
            particle.style.setProperty('--tx', tx);
            particle.style.setProperty('--ty', ty);
            particle.style.setProperty('--rot', rot);

            document.body.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) particle.parentNode.removeChild(particle);
            }, 1400);
        }
    }

    function spawnFloatingText(x, y, text) {
        const floatingEl = document.createElement('div');
        floatingEl.className = 'floating-text';
        floatingEl.textContent = text;

        floatingEl.style.left = `${x || window.innerWidth / 2}px`;
        floatingEl.style.top = `${(y || window.innerHeight / 2) - 40}px`;

        document.body.appendChild(floatingEl);

        setTimeout(() => {
            if (floatingEl.parentNode) floatingEl.parentNode.removeChild(floatingEl);
        }, 1250);
    }

    // ----------------------------------------------------------------------
    // 4. Toast Notification
    // ----------------------------------------------------------------------
    const toastContainer = document.getElementById('toast-container');

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'pixel-toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 3000);
    }
});
