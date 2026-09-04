/* ==========================================================================
   TAMAN BUNGA SPESIAL & BUKET REALISTIS - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. Data Penjelasan Bunga & Pesan Mood Booster
    // ----------------------------------------------------------------------
    const flowerData = {
        mawar: {
            name: "Mawar Merah",
            icon: "🌹",
            badge: "Simbol Cinta & Semangat",
            explanation: "Mawar merah melambangkan cinta yang tulus dan semangat yang mendalam. Kelopaknya yang indah mengingatkan bahwa di balik setiap tantangan ada keindahan yang menanti.",
            message: "Jangan tidak mood lagi yaa... ❤️ Ingat kalau kamu itu sosok yang sangat berharga dan dicintai setiap hari!",
            svg: `<svg viewBox="0 0 100 130">
                    <path d="M50,65 Q47,95 50,125" stroke="#2d6a4f" stroke-width="4.5" fill="none"/>
                    <path d="M50,95 Q30,85 22,100 Q40,105 50,95" fill="#40916c"/>
                    <g transform="translate(50, 42)">
                        <circle cx="0" cy="0" r="26" fill="#ff758f"/>
                        <path d="M-18,-4 C-25,-20 0,-28 16,-16 C26,-4 16,20 -4,22 C-20,24 -26,8 -18,-4 Z" fill="#ff4d6d"/>
                        <path d="M-12,-12 C-8,-22 12,-20 14,-8 C16,6 4,16 -10,12 C-18,8 -16,-4 -12,-12 Z" fill="#c9184a"/>
                    </g>
                  </svg>`
        },
        matahari: {
            name: "Bunga Matahari",
            icon: "🌻",
            badge: "Simbol Keceriaan & Mentari",
            explanation: "Bunga matahari selalu tumbuh menghadap ke arah cahaya. Melambangkan keceriaan, kehangatan, serta optimisme yang tak pernah padam.",
            message: "Seperti bunga matahari, senyuman manis kamu itu bisa menerangi hariku. Jangan biarkan bad mood memadamkan ceriamu ya! ☀️",
            svg: `<svg viewBox="0 0 100 130">
                    <path d="M50,68 Q52,95 50,125" stroke="#38b000" stroke-width="5" fill="none"/>
                    <g transform="translate(50, 42)">
                        <g fill="#ffb703">
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(0)"/>
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(45)"/>
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(90)"/>
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(135)"/>
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(180)"/>
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(225)"/>
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(270)"/>
                            <ellipse cx="0" cy="-22" rx="4" ry="12" transform="rotate(315)"/>
                        </g>
                        <circle cx="0" cy="0" r="12" fill="#582f0e"/>
                    </g>
                  </svg>`
        },
        lily: {
            name: "Lily Putih",
            icon: "🪷",
            badge: "Simbol Ketenangan & Ketulusan",
            explanation: "Lily putih adalah lambang ketenangan jiwa, kesucian, dan kejujuran hati. Memberikan nuansa damai bagi siapa saja yang memandangnya.",
            message: "Tarik napas dalam-dalam... Lepaskan rasa lelah dan kesal di pikiranmu. Biarkan hatimu kembali tenang & damai ya. 🌿",
            svg: `<svg viewBox="0 0 100 130">
                    <path d="M50,68 Q45,95 50,125" stroke="#2d6a4f" stroke-width="4" fill="none"/>
                    <g transform="translate(50, 42)">
                        <path d="M0,-30 Q18,-12 12,8 Q0,4 0,8 Q0,4 -12,8 Q-18,-12 0,-30 Z" fill="#ffffff" stroke="#fcd5ce" stroke-width="1.5"/>
                        <path d="M-22,-8 Q-8,-20 0,-4 Q-12,12 -22,-8 Z" fill="#f8edeb"/>
                        <path d="M22,-8 Q8,-20 0,-4 Q12,12 22,-8 Z" fill="#f8edeb"/>
                    </g>
                  </svg>`
        },
        tulip: {
            name: "Tulip Pink",
            icon: "🌷",
            badge: "Simbol Harapan Baru",
            explanation: "Tulip pink mengekspresikan kasih sayang, perhatian lembut, dan harapan baru. Setiap harinya membawa kesempatan manis yang baru.",
            message: "Setiap hari adalah awal yang baru. Kalau hari ini ada yang kurang menyenangkan, besok pasti akan jauh lebih indah! 🌸",
            svg: `<svg viewBox="0 0 100 130">
                    <path d="M50,68 Q52,95 50,125" stroke="#40916c" stroke-width="4.5" fill="none"/>
                    <g transform="translate(50, 42)">
                        <path d="M-18,-16 Q-22,12 0,20 Q22,12 18,-16 Q0,-26 -18,-16 Z" fill="#ff758f"/>
                        <path d="M-18,-16 Q-4,0 0,20 Q-24,8 -18,-16 Z" fill="#ff4d6d"/>
                        <path d="M18,-16 Q4,0 0,20 Q24,8 18,-16 Z" fill="#b5179e"/>
                    </g>
                  </svg>`
        },
        anggrek: {
            name: "Anggrek Ungu",
            icon: "🪻",
            badge: "Simbol Keanggunan & Kekuatan",
            explanation: "Anggrek ungu melambangkan keanggunan, keunikan, serta kekuatan diri yang tangguh. Tumbuh mekar dengan indah dan bertahan kuat.",
            message: "Kamu itu sosok yang hebat, pinter, dan luar biasa! Aku bangga banget sama kamu. Senyum lagi yuk! ✨",
            svg: `<svg viewBox="0 0 100 130">
                    <path d="M50,68 Q46,95 50,125" stroke="#2d6a4f" stroke-width="4" fill="none"/>
                    <g transform="translate(50, 45)">
                        <path d="M0,-25 C12,-30 20,-12 0,0 C-20,-12 -12,-30 0,-25 Z" fill="#e0aaff"/>
                        <path d="M-24,-4 C-28,12 -8,20 0,0 Z" fill="#c77dff"/>
                        <path d="M24,-4 C28,12 8,20 0,0 Z" fill="#c77dff"/>
                        <circle cx="0" cy="2" r="4" fill="#ffb703"/>
                    </g>
                  </svg>`
        },
        daisy: {
            name: "Daisy Putih",
            icon: "🌼",
            badge: "Simbol Kesederhanaan & Bahagia",
            explanation: "Daisy putih melambangkan ketulusan, kepolosan, dan kebahagiaan manis yang ditemukan dalam hal-hal kecil di sekitar kita.",
            message: "Kebahagiaan itu sederhana. Senyum kecil darimu sudah cukup membuat hariku terasa sangat indah! 😊",
            svg: `<svg viewBox="0 0 100 130">
                    <path d="M50,68 Q52,95 50,125" stroke="#38b000" stroke-width="4" fill="none"/>
                    <g transform="translate(50, 45)">
                        <g fill="#ffffff">
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(0)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(40)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(80)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(120)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(160)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(200)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(240)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(280)"/>
                            <ellipse cx="0" cy="-18" rx="4" ry="10" transform="rotate(320)"/>
                        </g>
                        <circle cx="0" cy="0" r="9" fill="#ffb703"/>
                    </g>
                  </svg>`
        }
    };

    // ----------------------------------------------------------------------
    // 2. Web Audio Synthesizer (Realistic Romantic Chimes & Fanfare)
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

    function playNote(freq, type = 'sine', duration = 0.4, gainVal = 0.1) {
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

    // Melodic sound effects
    function playFlowerPickSFX() {
        if (!isSoundOn) return;
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, idx) => {
            setTimeout(() => playNote(freq, 'sine', 0.3, 0.08), idx * 80);
        });
    }

    function playSaveToBouquetSFX() {
        if (!isSoundOn) return;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            setTimeout(() => playNote(freq, 'triangle', 0.4, 0.1), idx * 90);
        });
    }

    function playGrandFanfare() {
        if (!isSoundOn) return;
        const notes = [440, 554.37, 659.25, 880, 1108.73]; // A major arpeggio
        notes.forEach((freq, idx) => {
            setTimeout(() => playNote(freq, 'sine', 0.6, 0.12), idx * 110);
        });
    }

    function playHugSFX() {
        if (!isSoundOn) return;
        const notes = [659.25, 783.99, 987.77, 1318.51];
        notes.forEach((freq, idx) => {
            setTimeout(() => playNote(freq, 'sine', 0.5, 0.09), idx * 75);
        });
    }

    // Audio button toggle
    const btnAudio = document.getElementById('btn-audio');
    const audioLabel = document.getElementById('audio-label');
    const audioIcon = document.getElementById('audio-icon');

    btnAudio.addEventListener('click', () => {
        initAudio();
        isSoundOn = !isSoundOn;
        audioLabel.textContent = isSoundOn ? 'Musik: On' : 'Musik: Mute';
        audioIcon.textContent = isSoundOn ? '🎵' : '🔇';
        if (isSoundOn) {
            playSaveToBouquetSFX();
            showRomanticToast("🎵 Suara & Musik Diaktifkan!");
        }
    });

    document.addEventListener('click', function enableAudioFirstTouch() {
        initAudio();
        document.removeEventListener('click', enableAudioFirstTouch);
    }, { once: true });

    // ----------------------------------------------------------------------
    // 3. Ambient Falling Petals Canvas Physics Engine
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('petal-canvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const petalColors = ['#ff758f', '#ff4d6d', '#ffb3c1', '#f72585', '#c77dff', '#ffffff'];
    const petals = [];
    const petalCount = 35;

    class Petal {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * -height;
            this.size = Math.random() * 8 + 6;
            this.speedY = Math.random() * 1.2 + 0.6;
            this.speedX = Math.random() * 0.8 - 0.4;
            this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 2 - 1;
            this.oscillation = Math.random() * 0.02;
            this.angle = Math.random() * Math.PI * 2;
        }

        update() {
            this.y += this.speedY;
            this.angle += this.oscillation;
            this.x += Math.sin(this.angle) * 0.8 + this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > height + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.65;
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < petalCount; i++) {
        petals.push(new Petal());
    }

    function animatePetals() {
        ctx.clearRect(0, 0, width, height);
        petals.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animatePetals);
    }
    animatePetals();

    // ----------------------------------------------------------------------
    // 4. Garden Core Logic: Picking & Bouquet State
    // ----------------------------------------------------------------------
    const pickedFlowers = new Set();
    const totalFlowers = Object.keys(flowerData).length;
    let currentSelectedId = null;

    const flowerCards = document.querySelectorAll('.flower-card');
    const pickedCountEl = document.getElementById('picked-count');
    const progressFillEl = document.getElementById('progress-fill');
    const bouquetTray = document.getElementById('bouquet-tray');
    const emptyTrayMsg = document.getElementById('empty-tray-msg');
    const btnGrandView = document.getElementById('btn-grand-view');

    // Modals
    const flowerModal = document.getElementById('flower-modal');
    const modalClose = document.getElementById('modal-close');
    const modalFlowerIcon = document.getElementById('modal-flower-icon');
    const modalFlowerBadge = document.getElementById('modal-flower-badge');
    const modalFlowerName = document.getElementById('modal-flower-name');
    const modalExplanation = document.getElementById('modal-explanation');
    const modalMessage = document.getElementById('modal-message');
    const modalBtnConfirm = document.getElementById('modal-btn-confirm');

    const grandModal = document.getElementById('grand-modal');
    const grandClose = document.getElementById('grand-close');
    const grandFlowersDisplay = document.getElementById('grand-flowers-display');
    const btnHug = document.getElementById('btn-hug');
    const btnReplay = document.getElementById('btn-replay');
    const btnReset = document.getElementById('btn-reset');

    // Click flower card -> Open Modal
    flowerCards.forEach(card => {
        card.addEventListener('click', () => {
            const flowerId = card.getAttribute('data-id');
            openFlowerModal(flowerId);
        });
    });

    function openFlowerModal(flowerId) {
        currentSelectedId = flowerId;
        const data = flowerData[flowerId];
        if (!data) return;

        playFlowerPickSFX();

        modalFlowerIcon.textContent = data.icon;
        modalFlowerBadge.textContent = data.badge;
        modalFlowerName.textContent = data.name;
        modalExplanation.textContent = data.explanation;
        modalMessage.textContent = data.message;

        if (pickedFlowers.has(flowerId)) {
            modalBtnConfirm.textContent = "Sudah Ada Di Buket 💐";
            modalBtnConfirm.disabled = true;
            modalBtnConfirm.style.opacity = "0.7";
        } else {
            modalBtnConfirm.textContent = "Simpan Ke Buket 💐";
            modalBtnConfirm.disabled = false;
            modalBtnConfirm.style.opacity = "1";
        }

        flowerModal.classList.remove('hidden');
    }

    modalClose.addEventListener('click', () => {
        flowerModal.classList.add('hidden');
    });

    flowerModal.addEventListener('click', (e) => {
        if (e.target === flowerModal) flowerModal.classList.add('hidden');
    });

    // Save to bouquet button inside modal
    modalBtnConfirm.addEventListener('click', () => {
        if (currentSelectedId && !pickedFlowers.has(currentSelectedId)) {
            pickedFlowers.add(currentSelectedId);
            playSaveToBouquetSFX();
            updateGardenState();
            showRomanticToast(`💐 ${flowerData[currentSelectedId].name} ditambahkan ke buket!`);
        }
        flowerModal.classList.add('hidden');
    });

    function updateGardenState() {
        const count = pickedFlowers.size;

        // Update progress text & bar
        pickedCountEl.textContent = `${count} / ${totalFlowers} 💐`;
        const percentage = (count / totalFlowers) * 100;
        progressFillEl.style.width = `${percentage}%`;

        // Mark picked cards
        flowerCards.forEach(card => {
            const id = card.getAttribute('data-id');
            if (pickedFlowers.has(id)) {
                card.classList.add('picked');
                const actionTag = card.querySelector('.tag-action');
                if (actionTag) actionTag.textContent = "Sudah Diambil ✨";
            } else {
                card.classList.remove('picked');
                const actionTag = card.querySelector('.tag-action');
                if (actionTag) actionTag.textContent = `Ambil Bunga ${flowerData[id].icon}`;
            }
        });

        // Render bouquet tray
        if (count > 0) {
            emptyTrayMsg.style.display = 'none';
        } else {
            emptyTrayMsg.style.display = 'block';
        }

        // Render tray items
        bouquetTray.querySelectorAll('.tray-flower-item').forEach(el => el.remove());
        pickedFlowers.forEach(id => {
            const item = document.createElement('div');
            item.className = 'tray-flower-item';
            item.title = flowerData[id].name;
            item.innerHTML = flowerData[id].svg;
            item.addEventListener('click', () => openFlowerModal(id));
            bouquetTray.appendChild(item);
        });

        // Show Grand Button when all flowers are picked
        if (count === totalFlowers) {
            btnGrandView.classList.remove('hidden');
        } else {
            btnGrandView.classList.add('hidden');
        }
    }

    // Grand celebration modal
    btnGrandView.addEventListener('click', () => {
        openGrandModal();
    });

    function openGrandModal() {
        playGrandFanfare();
        grandFlowersDisplay.innerHTML = '';
        pickedFlowers.forEach(id => {
            const iconSpan = document.createElement('span');
            iconSpan.className = 'grand-flower-icon';
            iconSpan.textContent = flowerData[id].icon;
            grandFlowersDisplay.appendChild(iconSpan);
        });
        grandModal.classList.remove('hidden');
        spawnBurstParticles();
    }

    grandClose.addEventListener('click', () => {
        grandModal.classList.add('hidden');
    });

    grandModal.addEventListener('click', (e) => {
        if (e.target === grandModal) grandModal.classList.add('hidden');
    });

    // Virtual Hug Button
    btnHug.addEventListener('click', (e) => {
        playHugSFX();
        spawnHugBurst(e.clientX, e.clientY);
        showRomanticToast("🤗 Pelukan Erat Virtual Berhasil Terkirim!");
    });

    // Replay / Reset
    btnReplay.addEventListener('click', () => {
        grandModal.classList.add('hidden');
        resetGarden();
    });

    btnReset.addEventListener('click', () => {
        resetGarden();
        showRomanticToast("🔄 Taman bunga telah ditanam ulang!");
    });

    function resetGarden() {
        pickedFlowers.clear();
        updateGardenState();
    }

    // ----------------------------------------------------------------------
    // 5. Celebration Bursts & Toast
    // ----------------------------------------------------------------------
    function spawnHugBurst(originX, originY) {
        const icons = ['🤗', '💖', '✨', '🌸', '💐', '🥰', '❤️'];
        const count = 25;
        const startX = originX || window.innerWidth / 2;
        const startY = originY || window.innerHeight / 2;

        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'hug-particle';
            p.textContent = icons[Math.floor(Math.random() * icons.length)];

            const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5);
            const dist = Math.random() * 160 + 60;
            const tx = Math.cos(angle) * dist + 'px';
            const ty = Math.sin(angle) * dist - 50 + 'px';
            const rot = (Math.random() - 0.5) * 360 + 'deg';

            p.style.left = `${startX}px`;
            p.style.top = `${startY}px`;
            p.style.setProperty('--tx', tx);
            p.style.setProperty('--ty', ty);
            p.style.setProperty('--rot', rot);

            document.body.appendChild(p);

            setTimeout(() => {
                if (p.parentNode) p.parentNode.removeChild(p);
            }, 1800);
        }
    }

    function spawnBurstParticles() {
        spawnHugBurst(window.innerWidth / 2, window.innerHeight / 2);
    }

    function showRomanticToast(msg) {
        const toast = document.createElement('div');
        toast.className = 'romantic-toast';
        toast.textContent = msg;
        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 3200);
    }
});
