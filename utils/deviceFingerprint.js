export const generateDeviceFingerprint = async () => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    colorDepth: screen.colorDepth,
    screenResolution: `${screen.width}x${screen.height}`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hasSessionStorage: !!window.sessionStorage,
    hasLocalStorage: !!window.localStorage,
    hasIndexedDB: !!window.indexedDB,
    cpuClass: navigator.cpuClass,
    platform: navigator.platform,
    doNotTrack: navigator.doNotTrack,
    plugins: Array.from(navigator.plugins)
      .map((p) => p.name)
      .join(';'),
    canvas: getCanvasFingerprint(),
    webgl: getWebGLFingerprint(),
    audio: getAudioFingerprint(),
  };

  // combine all fingerprint data into a single string
  const fingerprintString = Object.values(fingerprint).join('|');

  // create a hash of the fingerprint string
  return await sha256(fingerprintString);
};

const getCanvasFingerprint = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText('Hello, world!', 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText('Hello, world!', 4, 17);
  return canvas.toDataURL();
};

const getWebGLFingerprint = () => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  if (!gl) return null;
  return gl.getParameter(gl.VENDOR) + '~' + gl.getParameter(gl.RENDERER);
};

// get device audio fingerprint
const getAudioFingerprint = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const analyser = audioContext.createAnalyser();
  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0; // Mute the sound
  oscillator.connect(analyser);
  analyser.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.start();
  const fingerprint = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fingerprint);
  oscillator.stop();
  return fingerprint.join('');
};

// simple SHA-256 function (use a robust crypto library in prod!!!)
const sha256 = async (str) => {
  const buffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};
