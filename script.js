 const mainPresets = [
            { name: '😊 Happy', emoji: '😊', headColor: '#74f5d2', mouthCurve: 50 },
            { name: '😎 Cool', emoji: '😎', headColor: '#4da6ff', mouthCurve: 20 },
            { name: '😳 Shy', emoji: '😳', headColor: '#ffb3ba', mouthCurve: -10 },
            { name: '🤩 Star', emoji: '🤩', headColor: '#ffd700', mouthCurve: 50 },
            { name: '😌 Calm', emoji: '😌', headColor: '#c7ceea', mouthCurve: 15 }
        ];

        const headPresets = [
            { name: 'Round', width: 250, height: 250 },
            { name: 'Wide', width: 300, height: 220 },
            { name: 'Tall', width: 220, height: 280 },
            { name: 'Small', width: 180, height: 180 },
            { name: 'Large', width: 320, height: 320 }
        ];

        const linearGradientPresets = [
    { name: 'Sunset', color1: '#ff6b6b', color2: '#feca57', angle: 45 },
    { name: 'Ocean', color1: '#4da6ff', color2: '#00d2d3', angle: 135 },
    { name: 'Forest', color1: '#26de81', color2: '#20bf6b', angle: 90 },
    { name: 'Purple', color1: '#a29bfe', color2: '#6c5ce7', angle: 180 },
    { name: 'Fire', color1: '#ff7979', color2: '#ff6348', angle: 0 },
    { name: 'Mint', color1: '#55efc4', color2: '#00b894', angle: 270 },
    { name: 'Pink', color1: '#fd79a8', color2: '#e17055', angle: 45 },
    { name: 'Sky', color1: '#74b9ff', color2: '#0984e3', angle: 135 },
    { name: 'Peach', color1: '#fab1a0', color2: '#ff7675', angle: 90 },
    { name: 'Lavender', color1: '#dfe6e9', color2: '#b2bec3', angle: 180 }
];

const radialGradientPresets = [
    { name: 'Glow', color1: '#ffeaa7', color2: '#fdcb6e', position: 30 },
    { name: 'Spotlight', color1: '#ffffff', color2: '#74b9ff', position: 20 },
    { name: 'Bubble', color1: '#a29bfe', color2: '#6c5ce7', position: 40 },
    { name: 'Sun', color1: '#ffeaa7', color2: '#ff7675', position: 25 },
    { name: 'Moon', color1: '#dfe6e9', color2: '#636e72', position: 35 },
    { name: 'Candy', color1: '#fd79a8', color2: '#e84393', position: 45 },
    { name: 'Berry', color1: '#ff7675', color2: '#d63031', position: 30 },
    { name: 'Ice', color1: '#74b9ff', color2: '#0984e3', position: 50 },
    { name: 'Lime', color1: '#55efc4', color2: '#00b894', position: 40 },
    { name: 'Coral', color1: '#fab1a0', color2: '#e17055', position: 35 }
];

        const hairPresets = [
            { name: 'Spiky', count: 5, length: 80, curve: -20, spread: 100 },
            { name: 'Wavy', count: 7, length: 70, curve: 40, spread: 140 },
            { name: 'Mohawk', count: 3, length: 100, curve: 0, spread: 60 },
            { name: 'Messy', count: 9, length: 60, curve: 25, spread: 160 },
            { name: 'Short', count: 6, length: 40, curve: 15, spread: 120 }
        ];

        const eyePresets = [
            { name: 'Normal', width: 50, slant: 0, thickness: 20 },
            { name: 'Wide', width: 80, slant: 0, thickness: 20 },
            { name: 'Happy', width: 50, slant: 25, thickness: 18 },
            { name: 'Sad', width: 50, slant: -25, thickness: 18 },
            { name: 'Wink', width: 30, slant: 0, thickness: 25 }
        ];

        const mouthPresets = [
            { name: 'Big Smile', width: 120, curve: 50, slant: 0 },
            { name: 'Small Smile', width: 80, curve: 30, slant: 0 },
            { name: 'Neutral', width: 100, curve: 0, slant: 0 },
            { name: 'Sad', width: 100, curve: -40, slant: 0 },
            { name: 'Smirk', width: 90, curve: 25, slant: 15 }
        ];

        let state = {
            headWidth: 250,
            headHeight: 250,
            headColor: '#74f5d2',
            headShadowBlur: 30,
            headShadowOpacity: 0.25,
            headGradientEnabled: false,
            headGradientType: 'linear', // linear or radial
            headGradientColor1: '#74f5d2',
            headGradientColor2: '#4da6ff',
            headGradientAngle: 45,
            headGradientPosition: 50, // for radial gradient center
            hairEnabled: false,
            hairCount: 5,
            hairColor: '#000000',
            hairThickness: 8,
            hairLength: 60,
            hairSpread: 120,
            hairCurve: 30,
            hairOffsetY: -20,
            mouseMode: 'none', // none, follow, avoid, eyes-follow, nervous
            mouseIntensity: 50,
            headRotation: 0,
            headTiltX: 0,
            headTiltY: 0,
            eyeFollowX: 0,
            eyeFollowY: 0,
            leftEyeColor: '#000000',
            leftEyeThickness: 20,
            leftEyeWidth: 50,
            leftEyeSlant: 0,
            leftEyeX: 0,
            leftEyeY: 0,
            rightEyeColor: '#000000',
            rightEyeThickness: 20,
            rightEyeWidth: 50,
            rightEyeSlant: 0,
            rightEyeX: 0,
            rightEyeY: 0,
            mouthColor: '#ff0000',
            mouthThickness: 20,
            mouthWidth: 100,
            mouthCurve: 50,
            mouthSlant: 0,
            mouthX: 0,
            mouthY: 0,
            canvasWidth: 800,
            canvasHeight: 800,
            pngBgEnabled: false
        };

function generateSVG() {
    const cx = state.canvasWidth / 2;
    const cy = state.canvasHeight / 2;

    // Calculate head color gradients
    const hsl = hexToHSL(state.headColor);
    const darkGrad = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    const darkStop = darkenColor(state.headColor, 20);
    const lightStop = lightenColor(state.headColor, 20);

    // Determine head fill color or gradient
    let headFill = state.headColor;
    let gradientDef = '';

    if (state.headGradientEnabled) {
        if (state.headGradientType === 'linear') {
            const angle = state.headGradientAngle;
            const x1 = 50 + 50 * Math.cos((angle - 90) * Math.PI / 180);
            const y1 = 50 + 50 * Math.sin((angle - 90) * Math.PI / 180);
            const x2 = 50 - 50 * Math.cos((angle - 90) * Math.PI / 180);
            const y2 = 50 - 50 * Math.sin((angle - 90) * Math.PI / 180);
            
            gradientDef = `<linearGradient id="head-gradient" x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%">
                <stop offset="0%" stop-color="${state.headGradientColor1}"></stop>
                <stop offset="100%" stop-color="${state.headGradientColor2}"></stop>
            </linearGradient>`;
            headFill = 'url(#head-gradient)';
        } else if (state.headGradientType === 'radial') {
            gradientDef = `<radialGradient id="head-gradient" cx="${state.headGradientPosition}%" cy="50%">
                <stop offset="0%" stop-color="${state.headGradientColor1}"></stop>
                <stop offset="100%" stop-color="${state.headGradientColor2}"></stop>
            </radialGradient>`;
            headFill = 'url(#head-gradient)';
        }
    }

    const defs = `
        <defs>
            ${gradientDef}
            <radialGradient id="ccclaymoji-grad-dark" r="93%" cx="20%" cy="20%">
                <stop offset="70%" stop-color="${darkGrad}" stop-opacity="0"></stop>
                <stop offset="97%" stop-color="${darkStop}" stop-opacity="1"></stop>
            </radialGradient>
            <radialGradient id="ccclaymoji-grad-light" r="65%" cx="28%" cy="20%">
                <stop offset="0%" stop-color="${lightStop}" stop-opacity="0.75"></stop>
                <stop offset="100%" stop-color="${darkGrad}" stop-opacity="0"></stop>
            </radialGradient>
            <filter id="ccclaymoji-blur" x="-100%" y="-100%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="${state.headShadowBlur}" in="SourceGraphic" result="blur"></feGaussianBlur>
            </filter>
            <filter id="inner-blur" x="-100%" y="-100%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" result="blur"></feGaussianBlur>
            </filter>
            <filter id="eye-shadow" x="-100%" y="-100%" width="400%" height="400%">
                <feDropShadow stdDeviation="10" dx="10" dy="10" flood-color="#000000" flood-opacity="0.2"></feDropShadow>
            </filter>
            <linearGradient id="left-eye-light" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="${lightenColor(state.leftEyeColor, 40)}" stop-opacity="0.8"></stop>
                <stop offset="100%" stop-color="${state.leftEyeColor}" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="right-eye-light" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="${lightenColor(state.rightEyeColor, 40)}" stop-opacity="0.8"></stop>
                <stop offset="100%" stop-color="${state.rightEyeColor}" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient id="mouth-light" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stop-color="${lightenColor(state.mouthColor, 30)}" stop-opacity="1"></stop>
                <stop offset="100%" stop-color="${state.mouthColor}" stop-opacity="0"></stop>
            </linearGradient>
            <filter id="mouth-shadow" x="-100%" y="-100%" width="400%" height="400%">
                <feDropShadow stdDeviation="10" dx="10" dy="10" flood-color="${darkenColor(state.mouthColor, 30)}" flood-opacity="0.2"></feDropShadow>
            </filter>
        </defs>
    `;

    // Head with transform - define headTransform FIRST
    const headTransform = `transform="translate(${state.headTiltX}, ${state.headTiltY})"`;

    // Head shadow with transform - use it AFTER defining
    const shadowPath = `<path ${headTransform} d="M${cx + state.headWidth + 50} ${cy + 50}C${cx + state.headWidth + 50} ${cy + state.headHeight + 100} ${cx + state.headWidth - 50} ${cy + state.headHeight + 127} ${cx} ${cy + state.headHeight + 127}C${cx - state.headWidth + 50} ${cy + state.headHeight + 127} ${cx - state.headWidth - 50} ${cy + state.headHeight + 100} ${cx - state.headWidth - 50} ${cy + 50}C${cx - state.headWidth - 50} ${cy - state.headHeight + 100} ${cx - state.headWidth + 50} ${cy - state.headHeight + 27} ${cx} ${cy - state.headHeight + 27}C${cx + state.headWidth - 50} ${cy - state.headHeight + 27} ${cx + state.headWidth + 50} ${cy - state.headHeight + 100} ${cx + state.headWidth + 50} ${cy + 50}Z" fill="${darkStop}" opacity="${state.headShadowOpacity}" filter="url(#ccclaymoji-blur)"></path>`;

    const headPath = `<path ${headTransform} d="M${cx + state.headWidth} ${cy}C${cx + state.headWidth} ${cy + state.headHeight * 0.8} ${cx + state.headWidth * 0.8} ${cy + state.headHeight} ${cx} ${cy + state.headHeight}C${cx - state.headWidth * 0.8} ${cy + state.headHeight} ${cx - state.headWidth} ${cy + state.headHeight * 0.8} ${cx - state.headWidth} ${cy}C${cx - state.headWidth} ${cy - state.headHeight * 0.8} ${cx - state.headWidth * 0.8} ${cy - state.headHeight} ${cx} ${cy - state.headHeight}C${cx + state.headWidth * 0.8} ${cy - state.headHeight} ${cx + state.headWidth} ${cy - state.headHeight * 0.8} ${cx + state.headWidth} ${cy}Z" fill="${headFill}"></path>`;

// Only show the claymorphic overlays if gradient is NOT enabled
let headGradDark = '';
let headGradLight = '';

if (!state.headGradientEnabled) {
    headGradDark = `<path ${headTransform} d="M${cx + state.headWidth} ${cy}C${cx + state.headWidth} ${cy + state.headHeight * 0.8} ${cx + state.headWidth * 0.8} ${cy + state.headHeight} ${cx} ${cy + state.headHeight}C${cx - state.headWidth * 0.8} ${cy + state.headHeight} ${cx - state.headWidth} ${cy + state.headHeight * 0.8} ${cx - state.headWidth} ${cy}C${cx - state.headWidth} ${cy - state.headHeight * 0.8} ${cx - state.headWidth * 0.8} ${cy - state.headHeight} ${cx} ${cy - state.headHeight}C${cx + state.headWidth * 0.8} ${cy - state.headHeight} ${cx + state.headWidth} ${cy - state.headHeight * 0.8} ${cx + state.headWidth} ${cy}Z" fill="url(#ccclaymoji-grad-dark)"></path>`;

    headGradLight = `<path ${headTransform} d="M${cx + state.headWidth} ${cy}C${cx + state.headWidth} ${cy + state.headHeight * 0.8} ${cx + state.headWidth * 0.8} ${cy + state.headHeight} ${cx} ${cy + state.headHeight}C${cx - state.headWidth * 0.8} ${cy + state.headHeight} ${cx - state.headWidth} ${cy + state.headHeight * 0.8} ${cx - state.headWidth} ${cy}C${cx - state.headWidth} ${cy - state.headHeight * 0.8} ${cx - state.headWidth * 0.8} ${cy - state.headHeight} ${cx} ${cy - state.headHeight}C${cx + state.headWidth * 0.8} ${cy - state.headHeight} ${cx + state.headWidth} ${cy - state.headHeight * 0.8} ${cx + state.headWidth} ${cy}Z" fill="url(#ccclaymoji-grad-light)"></path>`;
}
    // Hair
    let hairSVG = '';
    if (state.hairEnabled) {
        const hairStartX = cx - state.hairSpread / 2;
        const hairStartY = cy - state.headHeight + state.hairOffsetY;
        const hairSpacing = state.hairSpread / (state.hairCount - 1);
        
        for (let i = 0; i < state.hairCount; i++) {
            const hairX = hairStartX + (hairSpacing * i);
            const hairControlY = hairStartY - state.hairLength;
            const hairEndY = hairStartY - state.hairLength * 0.7;
            
            const randomOffset = (i % 2 === 0 ? 1 : -1) * (i * 3);
            const hairEndX = hairX + randomOffset + state.hairCurve * (i / state.hairCount - 0.5);
            
            hairSVG += `<path d="M${hairX} ${hairStartY} Q${hairX + state.hairCurve * (i / state.hairCount - 0.5)} ${hairControlY} ${hairEndX} ${hairEndY}" stroke="${state.hairColor}" stroke-width="${state.hairThickness}" fill="none" stroke-linecap="round" filter="url(#eye-shadow)"></path>`;
            
            hairSVG += `<path d="M${hairX} ${hairStartY} Q${hairX + state.hairCurve * (i / state.hairCount - 0.5)} ${hairControlY} ${hairEndX} ${hairEndY}" stroke="${lightenColor(state.hairColor, 30)}" stroke-width="${state.hairThickness / 3}" fill="none" stroke-linecap="round" filter="url(#inner-blur)" opacity="0.6"></path>`;
        }
    }

    // Left Eye
    const leftEyeX = cx - 75 + state.leftEyeX + state.eyeFollowX + state.headTiltX;
    const leftEyeY = cy - 50 + state.leftEyeY + state.eyeFollowY + state.headTiltY;
    const leftEyePath = `<path d="M${leftEyeX} ${leftEyeY}Q${leftEyeX + state.leftEyeWidth/2} ${leftEyeY + state.leftEyeWidth + state.leftEyeSlant} ${leftEyeX + state.leftEyeWidth} ${leftEyeY}" stroke-width="${state.leftEyeThickness}" stroke="${state.leftEyeColor}" fill="none" filter="url(#eye-shadow)"></path>`;
    const leftEyeLight = `<path d="M${leftEyeX} ${leftEyeY}Q${leftEyeX + state.leftEyeWidth/2} ${leftEyeY + state.leftEyeWidth + state.leftEyeSlant} ${leftEyeX + state.leftEyeWidth} ${leftEyeY}" stroke-width="${state.leftEyeThickness/3}" stroke="url(#left-eye-light)" fill="none" filter="url(#inner-blur)"></path>`;

    // Right Eye
    const rightEyeX = cx + 25 + state.rightEyeX + state.eyeFollowX + state.headTiltX;
    const rightEyeY = cy - 50 + state.rightEyeY + state.eyeFollowY + state.headTiltY;
    const rightEyePath = `<path d="M${rightEyeX} ${rightEyeY}Q${rightEyeX + state.rightEyeWidth/2} ${rightEyeY + state.rightEyeWidth + state.rightEyeSlant} ${rightEyeX + state.rightEyeWidth} ${rightEyeY}" stroke-width="${state.rightEyeThickness}" stroke="${state.rightEyeColor}" fill="none" filter="url(#eye-shadow)"></path>`;
    const rightEyeLight = `<path d="M${rightEyeX} ${rightEyeY}Q${rightEyeX + state.rightEyeWidth/2} ${rightEyeY + state.rightEyeWidth + state.rightEyeSlant} ${rightEyeX + state.rightEyeWidth} ${rightEyeY}" stroke-width="${state.rightEyeThickness/3}" stroke="url(#right-eye-light)" fill="none" filter="url(#inner-blur)"></path>`;

    // Mouth
    const mouthX = cx - state.mouthWidth/2 + state.mouthX + state.headTiltX;
    const mouthY = cy + 112.5 + state.mouthY + state.headTiltY;
    const mouthPath = `<path d="M${mouthX} ${mouthY + state.mouthSlant}Q${mouthX + state.mouthWidth/2} ${mouthY + state.mouthCurve} ${mouthX + state.mouthWidth} ${mouthY - state.mouthSlant}" stroke-width="${state.mouthThickness}" stroke="${state.mouthColor}" fill="none" filter="url(#mouth-shadow)"></path>`;
    const mouthLight = `<path d="M${mouthX} ${mouthY + state.mouthSlant}Q${mouthX + state.mouthWidth/2} ${mouthY + state.mouthCurve} ${mouthX + state.mouthWidth} ${mouthY - state.mouthSlant}" stroke-width="${state.mouthThickness/3}" stroke="url(#mouth-light)" fill="none" filter="url(#inner-blur)"></path>`;

    const svg = `${defs}<g stroke-linecap="round">${shadowPath}${headPath}${headGradDark}${headGradLight}${hairSVG}${leftEyePath}${leftEyeLight}${rightEyePath}${rightEyeLight}${mouthPath}${mouthLight}</g>`;            

    document.getElementById('emojiDisplay').innerHTML = svg;
    document.getElementById('emojiDisplay').setAttribute('viewBox', `0 0 ${state.canvasWidth} ${state.canvasHeight}`);
}

        function hexToHSL(hex) {
            let r = 0, g = 0, b = 0;
            if (hex.length === 7) {
                r = parseInt(hex.slice(1, 3), 16) / 255;
                g = parseInt(hex.slice(3, 5), 16) / 255;
                b = parseInt(hex.slice(5, 7), 16) / 255;
            }
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h = 0, s = 0, l = (max + min) / 2;

            if (max !== min) {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                else if (max === g) h = ((b - r) / d + 2) / 6;
                else h = ((r - g) / d + 4) / 6;
            }

            return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
        }

        function lightenColor(hex, percent) {
            const num = parseInt(hex.replace('#', ''), 16);
            const r = Math.min(255, ((num >> 16) + Math.round(255 * percent / 100)));
            const g = Math.min(255, (((num >> 8) & 0x00FF) + Math.round(255 * percent / 100)));
            const b = Math.min(255, ((num & 0x0000FF) + Math.round(255 * percent / 100)));
            return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
        }

        function darkenColor(hex, percent) {
            const num = parseInt(hex.replace('#', ''), 16);
            const r = Math.max(0, ((num >> 16) - Math.round(255 * percent / 100)));
            const g = Math.max(0, (((num >> 8) & 0x00FF) - Math.round(255 * percent / 100)));
            const b = Math.max(0, ((num & 0x0000FF) - Math.round(255 * percent / 100)));
            return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        }

        function toggleAccordion(header) {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            header.classList.toggle('active');
            content.classList.toggle('active');
        }

        function setMouseMode(mode) {
    state.mouseMode = mode;
    
    // Update button states
    ['modeNone', 'modeFollow', 'modeAvoid', 'modeEyesFollow', 'modeNervous', 'modeJiggle'].forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    
    const modeMap = {
        'none': 'modeNone',
        'follow': 'modeFollow',
        'avoid': 'modeAvoid',
        'eyes-follow': 'modeEyesFollow',
        'nervous': 'modeNervous',
        'jiggle': 'modeJiggle'
    };
    
    document.getElementById(modeMap[mode]).classList.add('active');
    showToast(`Mouse mode: ${mode.charAt(0).toUpperCase() + mode.slice(1).replace('-', ' ')}`);
}


function generateInteractionScript(mode, intensity) {
const baseScript = 'function initInteraction() { var svg = document.getElementById(\'claymoji\'); var g = svg.querySelector(\'g\'); var paths = g.querySelectorAll(\'path\'); var headPaths = []; for (var i = 0; i < paths.length; i++) { headPaths.push(paths[i]); }';
    
    let modeScript = '';
    
    if (mode === 'follow') {
        modeScript = 'svg.addEventListener(\'mousemove\', function(e) { var rect = svg.getBoundingClientRect(); var mouseX = e.clientX - rect.left; var mouseY = e.clientY - rect.top; var centerX = rect.width / 2; var centerY = rect.height / 2; var dx = (mouseX - centerX) / centerX; var dy = (mouseY - centerY) / centerY; var tiltX = dx * ' + intensity + '; var tiltY = dy * ' + intensity + '; for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(\' + tiltX + \',\' + tiltY + \')\'); } }); svg.addEventListener(\'mouseleave\', function() { for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(0,0)\'); } });';
    } else if (mode === 'avoid') {
        modeScript = 'svg.addEventListener(\'mousemove\', function(e) { var rect = svg.getBoundingClientRect(); var mouseX = e.clientX - rect.left; var mouseY = e.clientY - rect.top; var centerX = rect.width / 2; var centerY = rect.height / 2; var dx = (centerX - mouseX) / centerX; var dy = (centerY - mouseY) / centerY; var tiltX = dx * ' + intensity + ' * 0.5; var tiltY = dy * ' + intensity + ' * 0.5; for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(\' + tiltX + \',\' + tiltY + \')\'); } }); svg.addEventListener(\'mouseleave\', function() { for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(0,0)\'); } });';
    } else if (mode === 'eyes-follow') {
        modeScript = 'var eyePathsIndices = []; for (var i = 0; i < headPaths.length; i++) { var d = headPaths[i].getAttribute(\'d\'); if (d && d.indexOf(\'Q\') > -1 && d.length < 150) { eyePathsIndices.push(i); } } svg.addEventListener(\'mousemove\', function(e) { var rect = svg.getBoundingClientRect(); var mouseX = e.clientX - rect.left; var mouseY = e.clientY - rect.top; var centerX = rect.width / 2; var centerY = rect.height / 2; var dx = (mouseX - centerX) / centerX; var dy = (mouseY - centerY) / centerY; var followX = dx * ' + intensity + ' * 0.3; var followY = dy * ' + intensity + ' * 0.3; for (var i = 0; i < eyePathsIndices.length; i++) { headPaths[eyePathsIndices[i]].setAttribute(\'transform\', \'translate(\' + followX + \',\' + followY + \')\'); } }); svg.addEventListener(\'mouseleave\', function() { for (var i = 0; i < eyePathsIndices.length; i++) { headPaths[eyePathsIndices[i]].setAttribute(\'transform\', \'translate(0,0)\'); } });';
    } else if (mode === 'nervous') {
        modeScript = 'var nervousInterval = null; svg.addEventListener(\'mousemove\', function(e) { var rect = svg.getBoundingClientRect(); var mouseX = e.clientX - rect.left; var mouseY = e.clientY - rect.top; var centerX = rect.width / 2; var centerY = rect.height / 2; var dx = mouseX - centerX; var dy = mouseY - centerY; var distance = Math.sqrt(dx * dx + dy * dy); var maxDistance = Math.sqrt(centerX * centerX + centerY * centerY); var proximity = 1 - (distance / maxDistance); if (nervousInterval) clearInterval(nervousInterval); if (proximity > 0.3) { nervousInterval = setInterval(function() { var tiltX = (Math.random() - 0.5) * ' + intensity + ' * proximity; var tiltY = (Math.random() - 0.5) * ' + intensity + ' * proximity; for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(\' + tiltX + \',\' + tiltY + \')\'); } }, 50); } }); svg.addEventListener(\'mouseleave\', function() { if (nervousInterval) clearInterval(nervousInterval); for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(0,0)\'); } });';
    } else if (mode === 'jiggle') {
        modeScript = 'svg.addEventListener(\'mousemove\', function(e) { var rect = svg.getBoundingClientRect(); var mouseX = e.clientX - rect.left; var mouseY = e.clientY - rect.top; var centerX = rect.width / 2; var centerY = rect.height / 2; var dx = mouseX - centerX; var dy = mouseY - centerY; var distance = Math.sqrt(dx * dx + dy * dy); var maxDistance = Math.sqrt(centerX * centerX + centerY * centerY); var proximity = 1 - (distance / maxDistance); if (proximity > 0.5) { var tiltX = (Math.random() - 0.5) * 20 * proximity; var tiltY = (Math.random() - 0.5) * 20 * proximity; for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(\' + tiltX + \',\' + tiltY + \')\'); } } }); svg.addEventListener(\'mouseleave\', function() { for (var i = 0; i < headPaths.length; i++) { headPaths[i].setAttribute(\'transform\', \'translate(0,0)\'); } });';
    }
    
    return baseScript + modeScript + '}';
}


let mouseX = 0;
let mouseY = 0;
let nervousTimer = null;

document.getElementById('previewCanvas').addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    if (state.mouseMode === 'follow') {
        const dx = (mouseX - centerX) / centerX;
        const dy = (mouseY - centerY) / centerY;
        state.headTiltX = dx * state.mouseIntensity;
        state.headTiltY = dy * state.mouseIntensity;
        generateSVG();
    } else if (state.mouseMode === 'avoid') {
        const dx = (centerX - mouseX) / centerX;
        const dy = (centerY - mouseY) / centerY;
        state.headTiltX = dx * state.mouseIntensity * 0.5;
        state.headTiltY = dy * state.mouseIntensity * 0.5;
        generateSVG();
    } else if (state.mouseMode === 'eyes-follow') {
        const dx = (mouseX - centerX) / centerX;
        const dy = (mouseY - centerY) / centerY;
        state.eyeFollowX = dx * state.mouseIntensity * 0.3;
        state.eyeFollowY = dy * state.mouseIntensity * 0.3;
        generateSVG();
    } else if (state.mouseMode === 'nervous') {
        clearTimeout(nervousTimer);
        const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
        const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const proximity = 1 - (distance / maxDistance);
        
        if (proximity > 0.3) {
            nervousTimer = setInterval(() => {
                state.headTiltX = (Math.random() - 0.5) * state.mouseIntensity * proximity;
                state.headTiltY = (Math.random() - 0.5) * state.mouseIntensity * proximity;
                generateSVG();
            }, 50);
        }
    } else if (state.mouseMode === 'jiggle') {
        const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
        const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const proximity = 1 - (distance / maxDistance);
        
        if (proximity > 0.5) {
            state.headTiltX = (Math.random() - 0.5) * 20 * proximity;
            state.headTiltY = (Math.random() - 0.5) * 20 * proximity;
            generateSVG();
        }
    }
});

document.getElementById('previewCanvas').addEventListener('mouseleave', () => {
    clearTimeout(nervousTimer);
    state.headTiltX = 0;
    state.headTiltY = 0;
    state.eyeFollowX = 0;
    state.eyeFollowY = 0;
    generateSVG();
});



function toggleGradient() {
    state.headGradientEnabled = !state.headGradientEnabled;
    const toggle = document.getElementById('gradientToggle');
    const controls = document.getElementById('gradientControls');
    
    toggle.classList.toggle('active');
    controls.style.display = state.headGradientEnabled ? 'block' : 'none';
    generateSVG();
}

function setGradientType(type) {
    state.headGradientType = type;
    
    // Update button states
    document.getElementById('gradientTypeLinear').classList.remove('active');
    document.getElementById('gradientTypeRadial').classList.remove('active');
    document.getElementById('gradientType' + type.charAt(0).toUpperCase() + type.slice(1)).classList.add('active');
    
    // Show/hide appropriate controls
    document.getElementById('linearGradientControls').style.display = type === 'linear' ? 'block' : 'none';
    document.getElementById('radialGradientControls').style.display = type === 'radial' ? 'block' : 'none';
    
    generateSVG();
}
        function initializePresets() {
            // Main Presets
            const mainGrid = document.getElementById('mainPresets');
            mainPresets.forEach(preset => {
                const btn = document.createElement('button');
                btn.className = 'preset-btn';
                btn.innerHTML = `<div class="preset-emoji">${preset.emoji}</div><div class="preset-name">${preset.name.replace(/[^\w\s]/g, '')}</div>`;
                btn.onclick = () => {
                    state.headColor = preset.headColor;
                    state.mouthCurve = preset.mouthCurve;
                    document.getElementById('headColor').value = preset.headColor;
                    document.getElementById('mouthCurve').value = preset.mouthCurve;
                    document.getElementById('mouthCurveVal').textContent = preset.mouthCurve;
                    generateSVG();
                    showToast(`Applied ${preset.name}!`);
                };
                mainGrid.appendChild(btn);
            });

            // Head Presets
            const headGrid = document.getElementById('headPresets');
            headPresets.forEach(preset => {
                const btn = document.createElement('button');
                btn.className = 'preset-btn';
                btn.innerHTML = `<div class="preset-name">${preset.name}</div>`;
                btn.onclick = () => {
                    state.headWidth = preset.width;
                    state.headHeight = preset.height;
                    document.getElementById('headWidth').value = preset.width;
                    document.getElementById('headHeight').value = preset.height;
                    document.getElementById('headWidthVal').textContent = preset.width;
                    document.getElementById('headHeightVal').textContent = preset.height;
                    generateSVG();
                    showToast(`Applied ${preset.name} head!`);
                };
                headGrid.appendChild(btn);
            });

            // Left Eye Presets
            const leftEyeGrid = document.getElementById('leftEyePresets');
            eyePresets.forEach(preset => {
                const btn = document.createElement('button');
                btn.className = 'preset-btn';
                btn.innerHTML = `<div class="preset-name">${preset.name}</div>`;
                btn.onclick = () => {
                    state.leftEyeWidth = preset.width;
                    state.leftEyeSlant = preset.slant;
                    state.leftEyeThickness = preset.thickness;
                    document.getElementById('leftEyeWidth').value = preset.width;
                    document.getElementById('leftEyeSlant').value = preset.slant;
                    document.getElementById('leftEyeThickness').value = preset.thickness;
                    document.getElementById('leftEyeWidthVal').textContent = preset.width;
                    document.getElementById('leftEyeSlantVal').textContent = preset.slant;
                    document.getElementById('leftEyeThicknessVal').textContent = preset.thickness;
                    generateSVG();
                    showToast(`Applied ${preset.name} to left eye!`);
                };
                leftEyeGrid.appendChild(btn);
            });

            // Right Eye Presets
            const rightEyeGrid = document.getElementById('rightEyePresets');
            eyePresets.forEach(preset => {
                const btn = document.createElement('button');
                btn.className = 'preset-btn';
                btn.innerHTML = `<div class="preset-name">${preset.name}</div>`;
                btn.onclick = () => {
                    state.rightEyeWidth = preset.width;
                    state.rightEyeSlant = preset.slant;
                    state.rightEyeThickness = preset.thickness;
                    document.getElementById('rightEyeWidth').value = preset.width;
                    document.getElementById('rightEyeSlant').value = preset.slant;
                    document.getElementById('rightEyeThickness').value = preset.thickness;
                    document.getElementById('rightEyeWidthVal').textContent = preset.width;
                    document.getElementById('rightEyeSlantVal').textContent = preset.slant;
                    document.getElementById('rightEyeThicknessVal').textContent = preset.thickness;
                    generateSVG();
                    showToast(`Applied ${preset.name} to right eye!`);
                };
                rightEyeGrid.appendChild(btn);
            });

            // Mouth Presets
            const mouthGrid = document.getElementById('mouthPresets');
            mouthPresets.forEach(preset => {
                const btn = document.createElement('button');
                btn.className = 'preset-btn';
                btn.innerHTML = `<div class="preset-name">${preset.name}</div>`;
                btn.onclick = () => {
                    state.mouthWidth = preset.width;
                    state.mouthCurve = preset.curve;
                    state.mouthSlant = preset.slant;
                    document.getElementById('mouthWidth').value = preset.width;
                    document.getElementById('mouthCurve').value = preset.curve;
                    document.getElementById('mouthSlant').value = preset.slant;
                    document.getElementById('mouthWidthVal').textContent = preset.width;
                    document.getElementById('mouthCurveVal').textContent = preset.curve;
                    document.getElementById('mouthSlantVal').textContent = preset.slant;
                    generateSVG();
                    showToast(`Applied ${preset.name} mouth!`);
                };
                mouthGrid.appendChild(btn);
            });


// After mouth presets, add:

// Hair Presets
const hairGrid = document.getElementById('hairPresets');
hairPresets.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = 'preset-btn';
    btn.innerHTML = `<div class="preset-name">${preset.name}</div>`;
    btn.onclick = () => {
        state.hairCount = preset.count;
        state.hairLength = preset.length;
        state.hairCurve = preset.curve;
        state.hairSpread = preset.spread;
        document.getElementById('hairCount').value = preset.count;
        document.getElementById('hairLength').value = preset.length;
        document.getElementById('hairCurve').value = preset.curve;
        document.getElementById('hairSpread').value = preset.spread;
        document.getElementById('hairCountVal').textContent = preset.count;
        document.getElementById('hairLengthVal').textContent = preset.length;
        document.getElementById('hairCurveVal').textContent = preset.curve;
        document.getElementById('hairSpreadVal').textContent = preset.spread;
        generateSVG();
        showToast(`Applied ${preset.name} hair!`);
    };
    hairGrid.appendChild(btn);
});


// Linear Gradient Presets
const linearGradGrid = document.getElementById('linearGradientPresets');
linearGradientPresets.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = 'preset-btn';
    btn.style.background = `linear-gradient(${preset.angle}deg, ${preset.color1}, ${preset.color2})`;
    btn.innerHTML = `<div class="preset-name" style="color: white; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">${preset.name}</div>`;
    btn.onclick = () => {
        state.headGradientColor1 = preset.color1;
        state.headGradientColor2 = preset.color2;
        state.headGradientAngle = preset.angle;
        document.getElementById('gradientColor1').value = preset.color1;
        document.getElementById('gradientColor2').value = preset.color2;
        document.getElementById('gradientAngle').value = preset.angle;
        document.getElementById('gradientAngleVal').textContent = preset.angle;
        generateSVG();
        showToast(`Applied ${preset.name} gradient!`);
    };
    linearGradGrid.appendChild(btn);
});

// Radial Gradient Presets
const radialGradGrid = document.getElementById('radialGradientPresets');
radialGradientPresets.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = 'preset-btn';
    btn.style.background = `radial-gradient(circle at ${preset.position}% 50%, ${preset.color1}, ${preset.color2})`;
    btn.innerHTML = `<div class="preset-name" style="color: white; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">${preset.name}</div>`;
    btn.onclick = () => {
        state.headGradientColor1 = preset.color1;
        state.headGradientColor2 = preset.color2;
        state.headGradientPosition = preset.position;
        document.getElementById('radialGradientColor1').value = preset.color1;
        document.getElementById('radialGradientColor2').value = preset.color2;
        document.getElementById('gradientPosition').value = preset.position;
        document.getElementById('gradientPositionVal').textContent = preset.position;
        generateSVG();
        showToast(`Applied ${preset.name} gradient!`);
    };
    radialGradGrid.appendChild(btn);
});


        }

        // Add this function before bindControls()
function toggleHair() {
    state.hairEnabled = !state.hairEnabled;
    const toggle = document.getElementById('hairToggle');
    const controls = document.getElementById('hairControls');
    
    toggle.classList.toggle('active');
    controls.style.display = state.hairEnabled ? 'block' : 'none';
    generateSVG();
}

        function bindControls() {
            // Head controls
            const headControls = ['headWidth', 'headHeight', 'headShadowBlur', 'headShadowOpacity'];
            headControls.forEach(id => {
                const el = document.getElementById(id);
                el.oninput = (e) => {
                    state[id] = parseFloat(e.target.value);
                    document.getElementById(id + 'Val').textContent = parseFloat(e.target.value).toFixed(id.includes('Opacity') ? 2 : 0);
                    generateSVG();
                };
            });

            document.getElementById('headColor').oninput = (e) => {
                state.headColor = e.target.value;
                generateSVG();
            };

            const hairControls = ['hairCount', 'hairThickness', 'hairLength', 'hairSpread', 'hairCurve', 'hairOffsetY'];
hairControls.forEach(id => {
    const el = document.getElementById(id);
    el.oninput = (e) => {
        state[id] = parseInt(e.target.value);
        document.getElementById(id + 'Val').textContent = e.target.value;
        generateSVG();
    };
});

document.getElementById('hairColor').oninput = (e) => {
    state.hairColor = e.target.value;
    generateSVG();
};


// Gradient controls
document.getElementById('gradientColor1').oninput = (e) => {
    state.headGradientColor1 = e.target.value;
    generateSVG();
};

document.getElementById('gradientColor2').oninput = (e) => {
    state.headGradientColor2 = e.target.value;
    generateSVG();
};

document.getElementById('gradientAngle').oninput = (e) => {
    state.headGradientAngle = parseInt(e.target.value);
    document.getElementById('gradientAngleVal').textContent = e.target.value;
    generateSVG();
};

document.getElementById('radialGradientColor1').oninput = (e) => {
    state.headGradientColor1 = e.target.value;
    generateSVG();
};

document.getElementById('radialGradientColor2').oninput = (e) => {
    state.headGradientColor2 = e.target.value;
    generateSVG();
};

document.getElementById('gradientPosition').oninput = (e) => {
    state.headGradientPosition = parseInt(e.target.value);
    document.getElementById('gradientPositionVal').textContent = e.target.value;
    generateSVG();
};


            // Left Eye controls
            const leftEyeControls = ['leftEyeThickness', 'leftEyeWidth', 'leftEyeSlant', 'leftEyeX', 'leftEyeY'];
            leftEyeControls.forEach(id => {
                const el = document.getElementById(id);
                el.oninput = (e) => {
                    state[id] = parseInt(e.target.value);
                    document.getElementById(id + 'Val').textContent = e.target.value;
                    generateSVG();
                };
            });

            document.getElementById('leftEyeColor').oninput = (e) => {
                state.leftEyeColor = e.target.value;
                generateSVG();
            };

            // Right Eye controls
            const rightEyeControls = ['rightEyeThickness', 'rightEyeWidth', 'rightEyeSlant', 'rightEyeX', 'rightEyeY'];
            rightEyeControls.forEach(id => {
                const el = document.getElementById(id);
                el.oninput = (e) => {
                    state[id] = parseInt(e.target.value);
                    document.getElementById(id + 'Val').textContent = e.target.value;
                    generateSVG();
                };
            });

            document.getElementById('rightEyeColor').oninput = (e) => {
                state.rightEyeColor = e.target.value;
                generateSVG();
            };
// Mouse intensity control
document.getElementById('mouseIntensity').oninput = (e) => {
    state.mouseIntensity = parseInt(e.target.value);
    document.getElementById('mouseIntensityVal').textContent = e.target.value;
};
            // Mouth controls
            const mouthControls = ['mouthThickness', 'mouthWidth', 'mouthCurve', 'mouthSlant', 'mouthX', 'mouthY'];
            mouthControls.forEach(id => {
                const el = document.getElementById(id);
                el.oninput = (e) => {
                    state[id] = parseInt(e.target.value);
                    document.getElementById(id + 'Val').textContent = e.target.value;
                    generateSVG();
                };
            });

            document.getElementById('mouthColor').oninput = (e) => {
                state.mouthColor = e.target.value;
                generateSVG();
            };

            // Canvas controls
            document.getElementById('canvasWidth').oninput = (e) => {
                state.canvasWidth = parseInt(e.target.value);
                generateSVG();
            };

            document.getElementById('canvasHeight').oninput = (e) => {
                state.canvasHeight = parseInt(e.target.value);
                generateSVG();
            };

            // Preview background
            document.getElementById('previewBg').oninput = (e) => {
                document.getElementById('previewCanvas').style.background = e.target.value;
            };

document.getElementById('copySvgBtn').onclick = () => {
    const svg = document.getElementById('emojiDisplay');
    let svgContent = svg.innerHTML;
    
    let htmlOutput = '';
    
    if (state.mouseMode !== 'none') {
        // Generate just SVG + script
        const scriptContent = generateInteractionScript(state.mouseMode, state.mouseIntensity);
        
        htmlOutput = '<svg id="claymoji" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + state.canvasWidth + ' ' + state.canvasHeight + '">' + svgContent + '</svg>\n\n<script>\n' + scriptContent + '\ninitInteraction();\n</script>';
        
    } else {
        // Just SVG without interaction
        htmlOutput = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + state.canvasWidth + ' ' + state.canvasHeight + '">' + svgContent + '</svg>';
    }
    
    navigator.clipboard.writeText(htmlOutput).then(() => {
        if (state.mouseMode !== 'none') {
            showToast('✅ Interactive SVG copied! (' + state.mouseMode + ')');
        } else {
            showToast('✅ SVG copied to clipboard!');
        }
    });
};
            document.getElementById('downloadSvgBtn').onclick = () => {
                const svg = document.getElementById('emojiDisplay');
                const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${state.canvasWidth} ${state.canvasHeight}">${svg.innerHTML}</svg>`;
                const blob = new Blob([fullSvg], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'claymoji.svg';
                a.click();
                URL.revokeObjectURL(url);
                showToast('✅ SVG downloaded!');
            };

document.getElementById('downloadPngBtn').onclick = () => {
    const svg = document.getElementById('emojiDisplay');
    const svgString = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    canvas.width = state.canvasWidth;
    canvas.height = state.canvasHeight;
    const ctx = canvas.getContext('2d');
    
    // Only fill background if transparent is NOT enabled
    if (!state.pngBgEnabled) {
        ctx.fillStyle = document.getElementById('previewBg').value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'claymoji.png';
            a.click();
            URL.revokeObjectURL(url);
            showToast('✅ PNG downloaded!');
        });
    };
    
    img.src = url;
};

document.getElementById('pngBgToggle').onclick = (e) => {
    state.pngBgEnabled = !state.pngBgEnabled;
    e.currentTarget.classList.toggle('active');
    showToast(`Transparent background ${state.pngBgEnabled ? 'enabled' : 'disabled'}`);
};
        }

        // Initialize
        initializePresets();
        bindControls();
        generateSVG();
