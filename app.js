/* 여행 보따리 · TRIP BOTTARI */
(function () {
  'use strict';
  var VERSION = '1.0.0';
  var CFG = window.TB_CONFIG || {};
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- 문구 ---------- */
  var TEXT = {
    ko: {
      app: '여행 보따리', reset: '초기화', local: '현지 금액', home: '내 통화', pack: '보따리에 담기',
      tabCalc: '계산기', tabRec: '기록', tabMap: '지도', tabSet: '설정',
      ref: '참고 환율 · 카드 금액과 다를 수 있음', offline: '오프라인 · 마지막 환율', noRate: '환율 없음 · 기록할 때 직접 입력', sample: '',
      pickTravel: '여행지 통화', pickHome: '내 통화', search: '나라 또는 통화 검색', close: '닫기', back: '한 글자 지우기',
      total: '총 지출', quick: '빠른 촬영', manual: '직접 입력', wait: '금액 입력 대기', fillNow: '모아서 입력', showAll: '전체 보기',
      pendN: function (n) { return '금액 입력 대기 ' + n + '건'; }, count: function (n) { return n + '건'; },
      noRec: '아직 담은 지출이 없어요.\n계산기에서 금액을 넣고 "보따리에 담기"를 누르거나\n"빠른 촬영"으로 사진부터 남겨 보세요.',
      quickSaved: '사진 저장됨 · 바로 다음 촬영', saved: '보따리에 담았어요', deleted: '지웠어요', enterAmt: '금액 입력',
      newEnt: '지출 담기', editEnt: '지출 고치기', amount: '금액', category: '분류', memo: '메모 (가게 이름 등)', photo: '사진',
      takePhoto: '촬영', fromAlbum: '앨범에서', saveAlbum: '앨범에 저장', removePhoto: '사진 빼기', save: '저장', delete: '이 기록 지우기', confirmDel: '이 기록을 지울까요? 되돌릴 수 없어요.',
      manualRate: '환율 직접 입력', manualRateHint: function (c, h) { return '1 ' + c + ' = ? ' + h; },
      locFinding: '위치 찾는 중…', locOk: '현재 위치가 함께 저장돼요', locNo: '위치 없이 저장돼요', locKeep: '저장된 위치가 있어요',
      cats: { food: '식비', cafe: '카페·간식', move: '교통', stay: '숙박', shop: '쇼핑', sight: '관광', etc: '기타' },
      all: '전체', places: function (n) { return n + '곳'; }, noMap: '위치가 있는 기록이 아직 없어요.\n지출을 담을 때 위치를 허용하면 여기에 핀이 꽂혀요.',
      directions: '구글맵으로 길찾기', details: '기록 보기',
      lang: '언어', auto: '자동', autoSub: '휴대폰 언어를 따라요', homeCur: '내 통화', homeHelp: '모든 금액이 이 통화로 환산돼요.',
      backup: '백업', lastBackup: '마지막 백업', never: '아직 안 했어요', today: '오늘', daysAgo: function (n) { return n + '일 전'; },
      export: '내보내기', import: '불러오기', backupHelp: '백업 파일은 휴대폰 밖(iCloud Drive, 구글 드라이브, 카카오톡 나와의 채팅)에 보관하세요. 휴대폰을 잃어버려도 복원할 수 있어요.',
      exported: '백업 파일을 만들었어요', imported: function (n) { return n + '건을 불러왔어요'; }, badFile: '여행 보따리 백업 파일이 아니에요',
      fbTitle: '의견 보내기', fbHead: '불편한 점, 바라는 점을 알려 주세요', fbBody: '1분이면 끝나요. 보내 주신 의견은 직접 읽고 다음 업데이트에 반영해요.', fbForm: '의견 남기기', fbMail: '메일로',
      q1: '어느 나라 여행에서 쓰셨나요?', q2: '가장 불편했던 점은?', q3: '있었으면 하는 기능은?', send: '보내기', thanks: '고맙습니다! 잘 받았어요', fbEmpty: '한 칸 이상 적어 주세요', fbFail: '보내지 못했어요. 메일로 보내 주세요',
      howAdd: '홈 화면에 추가하는 방법', privacy: '기록과 사진, 위치는 이 휴대폰에만 저장되고 어디에도 전송되지 않아요.', maker: '만든 사람',
      tagline: '여행에서 쓴 돈과 사진을\n보따리에 차곡차곡 담아 오세요.', f1: '현지 금액을 바로 내 돈으로 환산', f2: '사진 한 장과 함께 지출 기록', f3: '돈 쓴 곳이 지도에 핀으로',
      warn: '기록을 시작하기 전에 먼저 홈 화면에 추가하세요. 아이폰은 사파리와 홈 화면 앱의 기록이 따로 저장돼요.', add: '홈 화면에 추가하기', later: '나중에 할게요',
      laterWarn: '홈 화면에 추가하기 전 기록은 홈 화면 앱으로 옮겨지지 않아요', installed: '설치됐어요! 홈 화면의 보따리 아이콘으로 열어 주세요',
      iosTitle: '아이폰은 이렇게 추가해요', ios1: '공유 버튼을 누르세요 (사파리는 화면 아래, 크롬은 주소창 오른쪽)', ios2: '"홈 화면에 추가"를 고르세요', ios3: '오른쪽 위 "추가"를 누르면 끝',
      andTitle: '홈 화면에 추가', and1: '브라우저 오른쪽 위 ⋮ 메뉴를 누르세요', and2: '"홈 화면에 추가" 또는 "앱 설치"를 고르세요',
      inTitle: '여기서는 설치가 안 돼요', inBody: '카카오톡·인스타그램 같은 앱 안에서 열린 화면이에요. 사파리나 크롬에서 열어 주세요.', openExt: '다른 브라우저로 열기', copy: '주소 복사', copied: '주소를 복사했어요',
      pcTitle: '휴대폰용 앱이에요', pcBody: '휴대폰에서 이 주소를 열어 홈 화면에 추가해 주세요.', doneTitle: '이미 홈 화면 앱으로 쓰고 있어요', ok: '알겠어요',
      offlineNow: '오프라인이에요 · 마지막 환율로 계산해요'
    },
    en: {
      app: 'Trip Bottari', reset: 'Clear', local: 'Local amount', home: 'Home currency', pack: 'Pack it',
      tabCalc: 'Convert', tabRec: 'Spending', tabMap: 'Map', tabSet: 'Settings',
      ref: 'Reference rate · may differ from your card', offline: 'Offline · last saved rate', noRate: 'No rate yet · enter it when saving', sample: '',
      pickTravel: 'Travel currency', pickHome: 'Home currency', search: 'Search country or currency', close: 'Close', back: 'Delete',
      total: 'Total spent', quick: 'Quick photo', manual: 'Type it', wait: 'waiting for amount', fillNow: 'Fill in now', showAll: 'Show all',
      pendN: function (n) { return n + (n === 1 ? ' photo needs' : ' photos need') + ' an amount'; }, count: function (n) { return n + (n === 1 ? ' entry' : ' entries'); },
      noRec: 'Nothing packed yet.\nEnter an amount and tap "Pack it",\nor start with a "Quick photo".',
      quickSaved: 'Photo saved · take the next one', saved: 'Packed', deleted: 'Deleted', enterAmt: 'Add amount',
      newEnt: 'Add spending', editEnt: 'Edit spending', amount: 'Amount', category: 'Category', memo: 'Note (shop name etc.)', photo: 'Photo',
      takePhoto: 'Camera', fromAlbum: 'Album', saveAlbum: 'Save to Photos', removePhoto: 'Remove photo', save: 'Save', delete: 'Delete this entry', confirmDel: 'Delete this entry? This can’t be undone.',
      manualRate: 'Enter the rate', manualRateHint: function (c, h) { return '1 ' + c + ' = ? ' + h; },
      locFinding: 'Finding your location…', locOk: 'Your location will be saved', locNo: 'Saving without a location', locKeep: 'Location saved',
      cats: { food: 'Food', cafe: 'Café & snacks', move: 'Transport', stay: 'Stay', shop: 'Shopping', sight: 'Sights', etc: 'Other' },
      all: 'All', places: function (n) { return n + (n === 1 ? ' place' : ' places'); }, noMap: 'No entries with a location yet.\nAllow location when packing and pins appear here.',
      directions: 'Directions', details: 'Details',
      lang: 'Language', auto: 'Automatic', autoSub: 'Follows your phone language', homeCur: 'Home currency', homeHelp: 'Every amount is converted into this currency.',
      backup: 'Backup', lastBackup: 'Last backup', never: 'Not yet', today: 'Today', daysAgo: function (n) { return n + (n === 1 ? ' day ago' : ' days ago'); },
      export: 'Export', import: 'Restore', backupHelp: 'Keep the backup file off your phone (iCloud Drive, Google Drive, email to yourself) so you can restore it even if the phone is lost.',
      exported: 'Backup file created', imported: function (n) { return n + ' entries restored'; }, badFile: 'This is not a Trip Bottari backup',
      fbTitle: 'Feedback', fbHead: 'Tell us what bugs you, or what you wish for', fbBody: 'It takes a minute. Every message is read and shapes the next update.', fbForm: 'Leave feedback', fbMail: 'Email',
      q1: 'Which country did you use it in?', q2: 'What was most inconvenient?', q3: 'What feature would you like?', send: 'Send', thanks: 'Thank you! Received', fbEmpty: 'Please fill in at least one answer', fbFail: 'Couldn’t send. Please use email',
      howAdd: 'How to add to home screen', privacy: 'Your entries, photos and locations stay on this phone and are never sent anywhere.', maker: 'Made by',
      tagline: 'Pack every spend and photo\nfrom your trip into one bundle.', f1: 'Local prices in your own money, instantly', f2: 'Log spending with a single photo', f3: 'See where you spent on a map',
      warn: 'Add it to your home screen before you start. On iPhone, Safari and the home screen app keep separate records.', add: 'Add to home screen', later: 'Maybe later',
      laterWarn: 'Entries made before adding to the home screen won’t move to the home screen app', installed: 'Installed! Open it from the bottari icon',
      iosTitle: 'Adding on iPhone', ios1: 'Tap Share (Safari: bottom bar, Chrome: next to the address)', ios2: 'Choose "Add to Home Screen"', ios3: 'Tap "Add" in the top right',
      andTitle: 'Add to home screen', and1: 'Open the browser menu ⋮ at the top right', and2: 'Choose "Add to Home screen" or "Install app"',
      inTitle: 'Can’t install from here', inBody: 'This page is open inside another app. Please open it in Safari or Chrome.', openExt: 'Open in browser', copy: 'Copy link', copied: 'Link copied',
      pcTitle: 'Made for phones', pcBody: 'Open this address on your phone and add it to the home screen.', doneTitle: 'You’re already using the app', ok: 'Got it',
      offlineNow: 'You’re offline · using the last saved rate'
    }
  };

  var POPULAR = ['JPY', 'USD', 'EUR', 'CNY', 'THB', 'VND', 'TWD', 'HKD', 'SGD', 'PHP', 'GBP', 'AUD', 'KRW', 'CAD', 'CHF', 'NZD', 'MYR', 'IDR', 'INR', 'MXN', 'TRY', 'CZK', 'HUF'];
  var CC = { JPY: 'JP', USD: 'US', EUR: 'EU', CNY: 'CN', THB: 'TH', VND: 'VN', TWD: 'TW', HKD: 'HK', SGD: 'SG', PHP: 'PH', GBP: 'GB', AUD: 'AU', KRW: 'KR', CAD: 'CA', CHF: 'CH', NZD: 'NZ', MYR: 'MY', IDR: 'ID', INR: 'IN', MXN: 'MX', TRY: 'TR', CZK: 'CZ', HUF: 'HU', PLN: 'PL', SEK: 'SE', NOK: 'NO', DKK: 'DK', BRL: 'BR', ZAR: 'ZA', ILS: 'IL', ISK: 'IS', RON: 'RO', BGN: 'BG', AED: 'AE', SAR: 'SA', MOP: 'MO', KHR: 'KH', LAK: 'LA', MNT: 'MN', EGP: 'EG', ARS: 'AR', CLP: 'CL', COP: 'CO', PEN: 'PE', NPR: 'NP', LKR: 'LK', PKR: 'PK', BDT: 'BD', KZT: 'KZ', UZS: 'UZ', QAR: 'QA', KWD: 'KW', MAD: 'MA', TND: 'TN', KES: 'KE', NGN: 'NG' };
  var REGION_CUR = { KR: 'KRW', US: 'USD', GB: 'GBP', JP: 'JPY', CN: 'CNY', TW: 'TWD', HK: 'HKD', SG: 'SGD', AU: 'AUD', CA: 'CAD', NZ: 'NZD', TH: 'THB', VN: 'VND', PH: 'PHP', IN: 'INR', MY: 'MYR', ID: 'IDR', CH: 'CHF', DE: 'EUR', FR: 'EUR', ES: 'EUR', IT: 'EUR', NL: 'EUR', IE: 'EUR', AT: 'EUR', BE: 'EUR', PT: 'EUR', FI: 'EUR', GR: 'EUR', MX: 'MXN', BR: 'BRL', SE: 'SEK', NO: 'NOK', DK: 'DKK', PL: 'PLN' };


  /* ---------- 상태 ---------- */
  var S = loadSettings();
  var T = TEXT.ko;
  var lang = 'ko', locale = 'ko-KR';
  var RATES = loadRates();          // { perUsd:{USD:1,...}, date, fetchedAt }
  var entries = [];
  var amt = '0';
  var view = 'calc';
  var onlyPending = false;
  var mapDay = 'all';
  var deferredPrompt = null;
  var urlCache = {};

  /* ---------- 저장소 ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function loadSettings() {
    var s = {};
    try { s = JSON.parse(lsGet('tb_settings') || '{}') || {}; } catch (e) { s = {}; }
    if (!s.lang) s.lang = 'auto';
    if (!s.home) s.home = guessHome();
    if (!s.cur) s.cur = s.home === 'JPY' ? 'USD' : 'JPY';
    return s;
  }
  function saveSettings() { lsSet('tb_settings', JSON.stringify(S)); }
  function loadRates() { try { return JSON.parse(lsGet('tb_rates') || 'null'); } catch (e) { return null; } }
  function guessHome() {
    var langs = navigator.languages || [navigator.language || 'ko-KR'];
    for (var i = 0; i < langs.length; i++) {
      var l = String(langs[i] || '');
      if (/^ko/i.test(l)) return 'KRW';
      var m = l.match(/[-_]([A-Za-z]{2})$/);
      if (m && REGION_CUR[m[1].toUpperCase()]) return REGION_CUR[m[1].toUpperCase()];
    }
    return /^ja/i.test(langs[0]) ? 'JPY' : 'USD';
  }

  var dbp = null;
  function db() {
    if (dbp) return dbp;
    dbp = new Promise(function (res, rej) {
      var r = indexedDB.open('trip-bottari', 1);
      r.onupgradeneeded = function () { var d = r.result; if (!d.objectStoreNames.contains('entries')) d.createObjectStore('entries', { keyPath: 'id' }); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
    return dbp;
  }
  function tx(mode, fn) {
    return db().then(function (d) {
      return new Promise(function (res, rej) {
        var t = d.transaction('entries', mode); var st = t.objectStore('entries'); var out = fn(st);
        t.oncomplete = function () { res(out && out.result !== undefined ? out.result : out); };
        t.onerror = function () { rej(t.error); }; t.onabort = function () { rej(t.error); };
      });
    });
  }
  function getAll() { return tx('readonly', function (st) { return st.getAll(); }); }
  function put(e) { return tx('readwrite', function (st) { st.put(e); }); }
  function del(id) { return tx('readwrite', function (st) { st.delete(id); }); }
  function reload() { return getAll().then(function (list) { entries = (list || []).sort(function (a, b) { return b.ts - a.ts; }); }); }

  /* ---------- 환율 ---------- */
  function perUsd(code) { return RATES && RATES.perUsd && RATES.perUsd[code] ? RATES.perUsd[code] : null; }
  function convert(v, from, to) { var a = perUsd(from), b = perUsd(to); if (a == null || b == null) return null; return v / a * b; }
  function fetchJSON(url, ms) {
    var c = 'AbortController' in window ? new AbortController() : null;
    var timer = setTimeout(function () { if (c) c.abort(); }, ms || 8000);
    return fetch(url, { signal: c ? c.signal : undefined, cache: 'no-store' }).then(function (r) { clearTimeout(timer); if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  function refreshRates(force) {
    var fresh = RATES && RATES.fetchedAt && (Date.now() - RATES.fetchedAt < 6 * 3600 * 1000);
    if (fresh && !force) return Promise.resolve();
    if (!navigator.onLine) return Promise.resolve();
    return fetchJSON('https://api.frankfurter.dev/v2/rates?base=USD').then(function (rows) {
      var m = { USD: 1 }, date = '';
      (rows || []).forEach(function (r) { if (r && r.quote && r.rate > 0) { m[String(r.quote).toUpperCase()] = r.rate; date = r.date || date; } });
      if (Object.keys(m).length < 10) throw new Error('few');
      return { perUsd: m, date: date };
    }).catch(function () {
      return fetchJSON('https://api.frankfurter.dev/v1/latest?base=USD').then(function (j) {
        var m = Object.assign({ USD: 1 }, j.rates || {}); return { perUsd: m, date: j.date || '' };
      });
    }).then(function (r) {
      if (RATES && RATES.perUsd) { Object.keys(RATES.perUsd).forEach(function (k) { if (!r.perUsd[k]) r.perUsd[k] = RATES.perUsd[k]; }); }
      r.fetchedAt = Date.now(); RATES = r; lsSet('tb_rates', JSON.stringify(r)); renderAll();
    }).catch(function () { /* 오프라인 등: 마지막 환율 유지 */ });
  }

  /* ---------- 형식 ---------- */
  function decimals(code) { try { return new Intl.NumberFormat('en', { style: 'currency', currency: code }).resolvedOptions().maximumFractionDigits; } catch (e) { return 2; } }
  function fmt(v, code) {
    if (v == null || isNaN(v)) return '—';
    if (lang === 'ko' && code === 'KRW') return Math.round(v).toLocaleString('ko-KR') + '원';
    try { return new Intl.NumberFormat(locale, { style: 'currency', currency: code, currencyDisplay: 'narrowSymbol' }).format(v); }
    catch (e) { return code + ' ' + v.toLocaleString(locale); }
  }
  var dnCur = {}, dnReg = {};
  function curName(code, lg) {
    lg = lg || lang;
    try { if (!dnCur[lg]) dnCur[lg] = new Intl.DisplayNames([lg === 'ko' ? 'ko' : 'en'], { type: 'currency' }); return dnCur[lg].of(code) || code; } catch (e) { return code; }
  }
  function regName(cc, lg) {
    try { if (!dnReg[lg]) dnReg[lg] = new Intl.DisplayNames([lg], { type: 'region' }); return dnReg[lg].of(cc) || ''; } catch (e) { return ''; }
  }
  function ccOf(code) { return CC[code] || code.slice(0, 2); }
  function dayKey(ts) { var d = new Date(ts); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function dayLabel(ts, short) {
    var o = short ? { month: 'short', day: 'numeric' } : { month: 'long', day: 'numeric', weekday: 'short' };
    return new Intl.DateTimeFormat(locale, o).format(new Date(ts));
  }
  function timeLabel(ts) { return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', hour12: lang !== 'ko' }).format(new Date(ts)); }

  function homeVal(e) {
    if (e.amt == null) return null;
    if (e.usd != null && perUsd(S.home)) return e.usd * perUsd(S.home);
    if (e.homeFix && e.homeFix.code === S.home) return e.homeFix.val;
    var c = convert(e.amt, e.cur, S.home); return c;
  }

  /* ---------- 공통 UI ---------- */
  function toast(msg, ms) {
    var t = $('toast'); t.textContent = msg; t.classList.add('on');
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('on'); }, ms || 1800);
  }
  var lastFocus = null;
  function openSheet(id) { lastFocus = document.activeElement; var s = $(id); s.classList.add('on'); var f = s.querySelector('input:not(.sr),button.ghost'); if (f && id !== 'entSheet') setTimeout(function () { try { f.focus({ preventScroll: true }); } catch (e) {} }, 50); }
  function closeSheet(id) {
    $(id).classList.remove('on');
    if (id === 'curSheet' && curMode === 'entry' && entryState) { $('entSheet').classList.add('on'); try { $('eCurBtn').focus({ preventScroll: true }); } catch (e) {} return; }
    if (lastFocus && lastFocus.focus) try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
  }
  document.querySelectorAll('.sheet').forEach(function (s) {
    s.addEventListener('click', function (ev) { if (ev.target.closest('[data-close]')) closeSheet(s.id); });
  });
  document.addEventListener('keydown', function (ev) {
    var open = document.querySelector('.sheet.on');
    if (ev.key === 'Escape' && open) { closeSheet(open.id); return; }
    if (open || view !== 'calc' || $('welcome').classList.contains('on')) return;
    if (/^[0-9]$/.test(ev.key)) press(ev.key);
    else if (ev.key === '.' || ev.key === ',') press('.');
    else if (ev.key === 'Backspace') press('back');
  });
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'on') Object.keys(attrs.on).forEach(function (ev) { n.addEventListener(ev, attrs.on[ev]); });
      else if (k === 'style') n.style.cssText = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function svgCam(stroke) {
    var d = document.createElement('div');
    d.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z" stroke="' + stroke + '" stroke-width="1.6" fill="none" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.2" stroke="' + stroke + '" stroke-width="1.6" fill="none"/></svg>';
    return d.firstChild;
  }
  function photoUrl(e) {
    if (!e.photo) return null;
    var k = e.id + ':' + (e.updated || 0);
    if (!urlCache[k]) { try { urlCache[k] = URL.createObjectURL(e.photo); } catch (er) { return null; } }
    return urlCache[k];
  }

  /* ---------- 언어 ---------- */
  function applyLang() {
    lang = S.lang === 'auto' ? (/^ko/i.test(navigator.language || '') ? 'ko' : 'en') : S.lang;
    T = TEXT[lang]; locale = lang === 'ko' ? 'ko-KR' : (navigator.language && !/^ko/i.test(navigator.language) ? navigator.language : 'en-US');
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach(function (n) { var v = T[n.getAttribute('data-t')]; if (typeof v === 'string') n.textContent = v; });
    $('clearBtn').setAttribute('aria-label', T.reset);
    $('curSearch').placeholder = T.search;
  }

  /* ---------- 계산기 ---------- */
  function press(k) {
    var dec = decimals(S.cur);
    if (k === 'back') amt = amt.length > 1 ? amt.slice(0, -1) : '0';
    else if (k === '.') { if (dec > 0 && amt.indexOf('.') < 0) amt += '.'; }
    else if (amt.indexOf('.') >= 0 && amt.split('.')[1].length >= dec) { /* 소수 자리 초과 */ }
    else if (amt.replace('.', '').length >= 12) { /* 자릿수 제한 */ }
    else amt = amt === '0' ? (k === '00' ? '0' : k) : amt + k;
    renderCalc();
  }
  function renderKeys() {
    var dec = decimals(S.cur);
    var list = ['7', '8', '9', '4', '5', '6', '1', '2', '3', dec > 0 ? '.' : '00', '0', 'back'];
    var box = $('keys'); box.textContent = '';
    list.forEach(function (k) {
      var b = el('button', { type: 'button', 'data-k': k });
      if (k === 'back') { b.className = 'bk'; b.setAttribute('aria-label', T.back); b.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6h11v12H9l-6-6z M12 9.5l5 5 M17 9.5l-5 5" stroke="#2B2420" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg>'; }
      else b.textContent = k;
      b.addEventListener('click', function () { press(k); });
      box.appendChild(b);
    });
  }
  function localDisplay() {
    var v = parseFloat(amt) || 0;
    if (amt.indexOf('.') >= 0) {
      var whole = fmt(Math.floor(v), S.cur).replace(/[.,]0+(?=\D*$)/, '');
      var frac = amt.slice(amt.indexOf('.') + 1);
      var sep = (1.1).toLocaleString(locale).charAt(1);
      return whole.replace(/(\d)(?!.*\d)/, '$1' + sep + frac);
    }
    return fmt(v, S.cur);
  }
  function renderCalc() {
    $('curCc').textContent = ccOf(S.cur); $('curCode').textContent = S.cur; $('curName').textContent = curName(S.cur);
    $('curBtn').setAttribute('aria-label', T.pickTravel + ': ' + curName(S.cur));
    $('localLbl').textContent = T.local + ' · ' + S.cur;
    $('homeLbl').textContent = T.home + ' · ' + S.home;
    $('localTxt').textContent = localDisplay();
    var v = parseFloat(amt) || 0;
    var h = convert(v, S.cur, S.home);
    $('homeTxt').textContent = h == null ? '—' : fmt(h, S.home);
    var r = convert(1, S.cur, S.home), row = $('rateRow');
    if (r == null) { $('rateNote').textContent = T.noRate; $('rateTxt').textContent = ''; row.classList.add('off'); }
    else {
      var need = decimals(S.home) > 0 ? 1 : 100;
      var per = [1, 100, 1000, 10000].filter(function (p) { return p * r >= need; })[0] || 10000;
      var offline = !navigator.onLine || (RATES && Date.now() - RATES.fetchedAt > 24 * 3600 * 1000);
      $('rateNote').textContent = offline ? T.offline + (RATES && RATES.date ? ' (' + RATES.date + ')' : '') : T.ref;
      row.classList.toggle('off', !!offline);
      $('rateTxt').textContent = per.toLocaleString(locale) + ' ' + S.cur + ' = ' + fmt(per * r, S.home);
    }
  }
  $('clearBtn').addEventListener('click', function () { amt = '0'; renderCalc(); });
  $('packBtn').addEventListener('click', function () { openEntry(null, { amt: parseFloat(amt) > 0 ? amt : '', cur: S.cur }); });

  /* ---------- 통화 시트 ---------- */
  var curMode = 'travel', curPick = null;
  function allCodes() {
    var set = {};
    var base = RATES && RATES.perUsd ? Object.keys(RATES.perUsd) : POPULAR.slice();
    base.forEach(function (c) { if (/^[A-Z]{3}$/.test(c)) set[c] = 1; });
    var pop = POPULAR.filter(function (c) { return set[c]; });
    var rest = Object.keys(set).filter(function (c) { return POPULAR.indexOf(c) < 0; }).sort();
    return pop.concat(rest);
  }
  function openCur(mode, onPick) {
    curMode = mode; curPick = onPick || null;
    $('curTitle').textContent = mode === 'home' ? T.pickHome : T.pickTravel;
    $('curSearch').value = ''; renderCurList(); openSheet('curSheet');
  }
  function renderCurList() {
    var q = $('curSearch').value.trim().toLowerCase();
    var sel = curMode === 'home' ? S.home : (curMode === 'entry' ? entryState.cur : S.cur);
    var box = $('curList'); box.textContent = '';
    allCodes().forEach(function (code) {
      if (curMode === 'travel' && code === S.home) return;
      var cc = ccOf(code);
      var hay = [code, curName(code, 'ko'), curName(code, 'en'), regName(cc, 'ko'), regName(cc, 'en')].join(' ').toLowerCase();
      if (q && hay.indexOf(q) < 0) return;
      var on = code === sel;
      var b = el('button', { type: 'button', class: 'curItem', 'aria-pressed': on ? 'true' : 'false' }, [
        el('span', { class: 'cc', text: cc }), el('span', { class: 'c1', text: code }), el('span', { class: 'c2', text: curName(code) })
      ]);
      b.addEventListener('click', function () { pickCur(code); });
      box.appendChild(b);
    });
    if (!box.firstChild) box.appendChild(el('div', { class: 'empty', text: '—' }));
  }
  function pickCur(code) {
    if (curMode === 'home') { S.home = code; if (S.cur === code) S.cur = code === 'USD' ? 'EUR' : 'USD'; saveSettings(); }
    else if (curMode === 'travel') { if (code !== S.cur) amt = '0'; S.cur = code; saveSettings(); }
    if (curPick) curPick(code);
    closeSheet('curSheet'); renderAll();
  }
  $('curSearch').addEventListener('input', renderCurList);
  $('curBtn').addEventListener('click', function () { openCur('travel'); });

  /* ---------- 사진 ---------- */
  function compress(file) {
    var MAX = 1280;
    function draw(src, w, h) {
      var s = Math.min(1, MAX / Math.max(w, h)); var cw = Math.round(w * s), ch = Math.round(h * s);
      var c = document.createElement('canvas'); c.width = cw; c.height = ch;
      c.getContext('2d').drawImage(src, 0, 0, cw, ch);
      return new Promise(function (res) { c.toBlob(function (b) { res(b || file); }, 'image/jpeg', 0.8); });
    }
    if ('createImageBitmap' in window) {
      return createImageBitmap(file, { imageOrientation: 'from-image' }).then(function (bm) { return draw(bm, bm.width, bm.height).then(function (b) { if (bm.close) bm.close(); return b; }); })
        .catch(function () { return viaImg(); });
    }
    return viaImg();
    function viaImg() {
      return new Promise(function (res) {
        var u = URL.createObjectURL(file); var im = new Image();
        im.onload = function () { draw(im, im.naturalWidth, im.naturalHeight).then(function (b) { URL.revokeObjectURL(u); res(b); }); };
        im.onerror = function () { URL.revokeObjectURL(u); res(null); };
        im.src = u;
      });
    }
  }
  function saveToAlbum(blob, name) {
    var file = new File([blob], name, { type: 'image/jpeg' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { return navigator.share({ files: [file] }).catch(function () {}); }
    var a = el('a', { href: URL.createObjectURL(blob), download: name }); document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500);
  }

  /* ---------- 위치 ---------- */
  function getLoc(ms) {
    return new Promise(function (res) {
      if (!navigator.geolocation) return res(null);
      var done = false; var t = setTimeout(function () { if (!done) { done = true; res(null); } }, ms || 15000);
      navigator.geolocation.getCurrentPosition(function (p) { if (done) return; done = true; clearTimeout(t); res({ lat: p.coords.latitude, lng: p.coords.longitude, acc: p.coords.accuracy }); },
        function () { if (done) return; done = true; clearTimeout(t); res(null); }, { enableHighAccuracy: true, timeout: ms || 15000, maximumAge: 60000 });
    });
  }

  /* ---------- 빠른 촬영 ---------- */
  $('quickBtn').addEventListener('click', function () { $('quickFile').value = ''; $('quickFile').click(); });
  $('quickFile').addEventListener('change', function () {
    var f = this.files && this.files[0]; if (!f) return;
    var ts = Date.now(); var id = 'e' + ts + Math.random().toString(36).slice(2, 6);
    var locP = getLoc(15000);
    compress(f).then(function (blob) {
      var e = { id: id, ts: ts, cur: S.cur, amt: null, usd: null, cat: 'etc', memo: '', lat: null, lng: null, photo: blob, updated: ts };
      return put(e).then(function () { toast(T.quickSaved); return reload(); }).then(function () { renderAll(); return locP; })
        .then(function (loc) { if (!loc) return; e.lat = loc.lat; e.lng = loc.lng; e.acc = loc.acc; return put(e).then(reload).then(renderAll); });
    });
  });

  /* ---------- 지출 입력 시트 ---------- */
  var entryState = null;
  function openEntry(e, pre) {
    var isNew = !e;
    entryState = {
      id: e ? e.id : null, ts: e ? e.ts : Date.now(), cur: e ? e.cur : (pre && pre.cur) || S.cur,
      cat: e ? e.cat : 'food', photo: e ? e.photo : null, lat: e ? e.lat : null, lng: e ? e.lng : null, acc: e ? e.acc : null,
      locP: null, locDone: !isNew, original: e
    };
    $('entTitle').textContent = isNew ? T.newEnt : T.editEnt;
    $('eAmt').value = e ? (e.amt == null ? '' : String(e.amt)) : (pre && pre.amt) || '';
    $('eMemo').value = e ? e.memo || '' : '';
    $('eRate').value = '';
    $('eSave').textContent = isNew ? T.pack : T.save;
    $('eDel').hidden = isNew;
    renderEntryCats(); renderEntryPhoto(); renderEntryConv();
    if (isNew) {
      $('eLoc').textContent = T.locFinding;
      entryState.locP = getLoc(15000).then(function (loc) {
        if (!entryState) return null; entryState.locDone = true;
        if (loc) { entryState.lat = loc.lat; entryState.lng = loc.lng; entryState.acc = loc.acc; }
        $('eLoc').textContent = loc ? T.locOk : T.locNo; return loc;
      });
    } else $('eLoc').textContent = e.lat != null ? T.locKeep : T.locNo;
    openSheet('entSheet');
    if (isNew && !$('eAmt').value) setTimeout(function () { try { $('eAmt').focus(); } catch (er) {} }, 60);
  }
  function renderEntryCats() {
    var box = $('eCats'); box.textContent = '';
    Object.keys(T.cats).forEach(function (k) {
      var b = el('button', { type: 'button', 'aria-pressed': entryState.cat === k ? 'true' : 'false', text: T.cats[k] });
      b.addEventListener('click', function () { entryState.cat = k; renderEntryCats(); });
      box.appendChild(b);
    });
  }
  function renderEntryPhoto() {
    var img = $('ePhoto'), has = !!entryState.photo;
    img.hidden = !has; if (has) { img.src = URL.createObjectURL(entryState.photo); img.alt = T.photo; }
    $('eSaveAlbum').hidden = !has; $('eRmPhoto').hidden = !has;
  }
  function parseAmt(s) { s = String(s || '').replace(/\s/g, ''); if (/,\d{1,2}$/.test(s) && s.indexOf('.') < 0) s = s.replace(',', '.'); s = s.replace(/,/g, ''); var v = parseFloat(s); return isNaN(v) || v < 0 ? null : v; }
  function renderEntryConv() {
    $('eCur').textContent = entryState.cur;
    var v = parseAmt($('eAmt').value);
    var noRate = convert(1, entryState.cur, S.home) == null && entryState.cur !== S.home;
    $('eRateField').hidden = !noRate;
    if (noRate) $('eRate').placeholder = T.manualRateHint(entryState.cur, S.home);
    var h = null;
    if (v != null) {
      if (entryState.cur === S.home) h = v;
      else if (!noRate) h = convert(v, entryState.cur, S.home);
      else { var mr = parseAmt($('eRate').value); if (mr) h = v * mr; }
    }
    $('eConv').textContent = h == null || entryState.cur === S.home ? '' : '≈ ' + fmt(h, S.home);
  }
  $('eAmt').addEventListener('input', renderEntryConv);
  $('eRate').addEventListener('input', renderEntryConv);
  $('eCurBtn').addEventListener('click', function () { $('entSheet').classList.remove('on'); openCur('entry', function (c) { entryState.cur = c; renderEntryConv(); }); });
  $('eCam').addEventListener('click', function () { $('eCamFile').value = ''; $('eCamFile').click(); });
  $('eAlbum').addEventListener('click', function () { $('eAlbumFile').value = ''; $('eAlbumFile').click(); });
  function onPhoto() { var f = this.files && this.files[0]; if (!f) return; compress(f).then(function (b) { if (b && entryState) { entryState.photo = b; renderEntryPhoto(); } }); }
  $('eCamFile').addEventListener('change', onPhoto); $('eAlbumFile').addEventListener('change', onPhoto);
  $('eRmPhoto').addEventListener('click', function () { entryState.photo = null; renderEntryPhoto(); });
  $('eSaveAlbum').addEventListener('click', function () { if (entryState.photo) saveToAlbum(entryState.photo, 'trip-bottari-' + new Date(entryState.ts).toISOString().slice(0, 10) + '.jpg'); });
  $('entForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var st = entryState; if (!st) return;
    var v = parseAmt($('eAmt').value);
    var e = st.original ? Object.assign({}, st.original) : { id: 'e' + st.ts + Math.random().toString(36).slice(2, 6), ts: st.ts };
    e.cur = st.cur; e.amt = v; e.cat = st.cat; e.memo = $('eMemo').value.trim().slice(0, 80); e.photo = st.photo; e.updated = Date.now();
    e.lat = st.lat; e.lng = st.lng; e.acc = st.acc;
    e.homeFix = null; e.usd = null;
    if (v != null) {
      var pu = perUsd(st.cur);
      if (pu) e.usd = v / pu;
      else if (st.cur === S.home) e.homeFix = { code: S.home, val: v };
      else { var mr = parseAmt($('eRate').value); if (mr) e.homeFix = { code: S.home, val: v * mr }; }
    }
    put(e).then(function () {
      closeSheet('entSheet'); entryState = null;
      if (!st.original) { amt = '0'; toast(T.saved); }
      return reload();
    }).then(function () {
      renderAll();
      if (!st.locDone && st.locP) st.locP.then(function (loc) { if (!loc) return; e.lat = loc.lat; e.lng = loc.lng; e.acc = loc.acc; return put(e).then(reload).then(renderAll); });
    });
  });
  $('eDel').addEventListener('click', function () {
    if (!entryState || !entryState.id) return;
    if (!window.confirm(T.confirmDel)) return;
    del(entryState.id).then(function () { closeSheet('entSheet'); entryState = null; toast(T.deleted); return reload(); }).then(renderAll);
  });
  $('manualBtn').addEventListener('click', function () { openEntry(null, { amt: '', cur: S.cur }); });

  /* ---------- 기록 화면 ---------- */
  function renderRec() {
    var done = entries.filter(function (e) { return e.amt != null; });
    var pending = entries.filter(function (e) { return e.amt == null; });
    var tot = 0, byCur = {};
    done.forEach(function (e) { var h = homeVal(e); if (h != null) tot += h; byCur[e.cur] = (byCur[e.cur] || 0) + e.amt; });
    $('totHome').textContent = fmt(tot, S.home);
    var lines = Object.keys(byCur).filter(function (c) { return c !== S.home; }).sort(function (a, b) { return byCur[b] - byCur[a]; }).slice(0, 2).map(function (c) { return fmt(byCur[c], c); });
    lines.push(T.count(done.length));
    var ts = $('totSub'); ts.textContent = ''; lines.forEach(function (l, i) { if (i) ts.appendChild(el('br')); ts.appendChild(document.createTextNode(l)); });
    if (entries.length) { var a = entries[entries.length - 1].ts, b = entries[0].ts; $('recSub').textContent = dayKey(a) === dayKey(b) ? dayLabel(a, true) : dayLabel(a, true) + ' – ' + dayLabel(b, true); }
    else $('recSub').textContent = '';
    var pb = $('pendBtn');
    if (!pending.length) onlyPending = false;
    pb.hidden = !pending.length;
    $('pendTxt').textContent = T.pendN(pending.length); $('pendAct').textContent = onlyPending ? T.showAll : T.fillNow;
    pb.setAttribute('aria-pressed', onlyPending ? 'true' : 'false');
    var list = $('recList'); list.textContent = '';
    var shown = onlyPending ? pending : entries;
    if (!shown.length) { list.appendChild(el('div', { class: 'empty', style: 'white-space:pre-line', text: T.noRec })); return; }
    var groups = [], idx = {};
    shown.forEach(function (e) { var k = dayKey(e.ts); if (!(k in idx)) { idx[k] = groups.length; groups.push({ ts: e.ts, items: [] }); } groups[idx[k]].items.push(e); });
    groups.forEach(function (g) {
      var sum = 0; g.items.forEach(function (e) { var h = homeVal(e); if (h != null) sum += h; });
      list.appendChild(el('div', { class: 'day' }, [el('span', { text: dayLabel(g.ts) }), el('span', { text: fmt(sum, S.home) })]));
      g.items.forEach(function (e) {
        var u = photoUrl(e);
        var th = u ? el('img', { class: 'thumb', src: u, alt: '', loading: 'lazy' }) : el('div', { class: 'thumb' }, [svgCam('#6E6258')]);
        var title = e.memo || T.cats[e.cat] || T.cats.etc;
        var meta = timeLabel(e.ts) + ' · ' + (e.amt == null ? T.wait : (T.cats[e.cat] || T.cats.etc));
        var right;
        if (e.amt == null) right = el('span', { class: 'need', text: T.enterAmt });
        else { var h = homeVal(e); right = el('span', { class: 'amt' }, [el('b', { text: e.cur === S.home ? fmt(e.amt, e.cur) : (h == null ? '—' : fmt(h, S.home)) }), e.cur === S.home ? null : el('small', { text: fmt(e.amt, e.cur) })]); }
        var b = el('button', { type: 'button', class: 'ent' }, [th, el('span', { class: 'mid' }, [el('span', { class: 'pl', text: title }), el('span', { class: 'mt', text: meta })]), right]);
        b.addEventListener('click', function () { openEntry(e); });
        list.appendChild(b);
      });
    });
  }
  $('pendBtn').addEventListener('click', function () { onlyPending = !onlyPending; renderRec(); });

  /* ---------- 지도 ---------- */
  var map = null, layer = null, selId = null;
  function initMap() {
    if (map || !window.L) return;
    map = L.map('map', { zoomControl: false, attributionControl: true }).setView([37.5665, 126.978], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
    layer = L.layerGroup().addTo(map);
    map.on('click', function () { selId = null; $('mapCard').classList.remove('on'); drawPins(false); });
  }
  function mapEntries() {
    return entries.filter(function (e) { return e.lat != null && e.lng != null && (mapDay === 'all' || dayKey(e.ts) === mapDay); });
  }
  function renderMap() {
    var located = entries.filter(function (e) { return e.lat != null; });
    var days = []; located.forEach(function (e) { var k = dayKey(e.ts); if (!days.some(function (d) { return d.k === k; })) days.push({ k: k, ts: e.ts }); });
    days.sort(function (a, b) { return a.ts - b.ts; });
    if (mapDay !== 'all' && !days.some(function (d) { return d.k === mapDay; })) mapDay = 'all';
    var chips = $('dayChips'); chips.textContent = ''; chips.setAttribute('aria-label', T.tabMap);
    [{ k: 'all', label: T.all }].concat(days.map(function (d) { return { k: d.k, label: dayLabel(d.ts, true) }; })).forEach(function (c) {
      var b = el('button', { type: 'button', class: 'chip', 'aria-pressed': c.k === mapDay ? 'true' : 'false', text: c.label });
      b.addEventListener('click', function () { mapDay = c.k; selId = null; renderMap(); });
      chips.appendChild(b);
    });
    var list = mapEntries(), sum = 0;
    list.forEach(function (e) { var h = homeVal(e); if (h != null) sum += h; });
    $('mapTot').textContent = fmt(sum, S.home);
    $('mapSub').textContent = (mapDay === 'all' ? T.all : dayLabel(list[0] ? list[0].ts : Date.now(), true)) + ' · ' + T.places(list.length);
    var em = $('mapEmpty'); em.hidden = !!located.length; em.style.whiteSpace = 'pre-line'; em.textContent = T.noMap;
    if (view !== 'map') return;
    initMap(); if (!map) return;
    setTimeout(function () { map.invalidateSize(); drawPins(true); }, 0);
  }
  function groupsOf(list) {
    var g = [], idx = {};
    list.forEach(function (e) {
      var k = Math.round(e.lat / 0.0004) + ':' + Math.round(e.lng / 0.0004);
      if (!(k in idx)) { idx[k] = g.length; g.push({ key: k, lat: e.lat, lng: e.lng, items: [] }); }
      g[idx[k]].items.push(e);
    });
    return g;
  }
  function groupLabel(gr) {
    var sum = 0, any = false;
    gr.items.forEach(function (e) { var h = homeVal(e); if (h != null) { sum += h; any = true; } });
    var lab = any ? fmt(sum, S.home) : T.wait;
    return gr.items.length > 1 ? lab + ' · ' + gr.items.length : lab;
  }
  function drawPins(fit) {
    if (!map) return;
    layer.clearLayers();
    var groups = groupsOf(mapEntries()), pts = [];
    groups.forEach(function (gr) {
      var label = groupLabel(gr), sel = gr.key === selId;
      var node = document.createElement('div'); node.className = 'pin' + (sel ? ' sel' : '');
      var sp = document.createElement('span'); sp.textContent = label; node.appendChild(sp); node.appendChild(document.createElement('i'));
      var icon = L.divIcon({ html: node, className: '', iconSize: [0, 0] });
      var first = gr.items[0];
      var m = L.marker([gr.lat, gr.lng], { icon: icon, title: (first.memo || T.cats[first.cat] || '') + ' ' + label, keyboard: true, zIndexOffset: sel ? 1000 : 0 }).addTo(layer);
      m.on('click', function (ev) { L.DomEvent.stopPropagation(ev); selId = gr.key; showCard(gr); drawPins(false); });
      pts.push([gr.lat, gr.lng]);
    });
    if (fit && pts.length) {
      if (pts.length === 1) map.setView(pts[0], 16);
      else map.fitBounds(pts, { paddingTopLeft: [40, 160], paddingBottomRight: [40, 60], maxZoom: 16 });
    }
    if (selId && !groups.some(function (g) { return g.key === selId; })) { selId = null; $('mapCard').classList.remove('on'); }
  }
  function showCard(gr) {
    var e = gr.items[0], multi = gr.items.length > 1;
    var u = photoUrl(e), ph = $('mcPh');
    if (u) { ph.src = u; ph.alt = T.photo; ph.style.display = ''; } else { ph.removeAttribute('src'); ph.style.display = 'none'; }
    $('mcPl').textContent = multi ? (e.memo || T.cats[e.cat] || T.cats.etc) + (lang === 'ko' ? ' 외 ' + (gr.items.length - 1) + '건' : ' +' + (gr.items.length - 1)) : (e.memo || T.cats[e.cat] || T.cats.etc);
    $('mcMt').textContent = dayLabel(e.ts, true) + ' ' + timeLabel(e.ts) + ' · ' + (T.cats[e.cat] || T.cats.etc);
    var h = homeVal(e);
    $('mcHm').textContent = multi ? groupLabel(gr).replace(/ · \d+$/, '') : (e.amt == null ? T.wait : (h == null ? fmt(e.amt, e.cur) : fmt(h, S.home)));
    $('mcLc').textContent = multi || e.amt == null || e.cur === S.home ? '' : fmt(e.amt, e.cur);
    $('mcDir').href = 'https://www.google.com/maps/dir/?api=1&destination=' + gr.lat.toFixed(6) + ',' + gr.lng.toFixed(6);
    var list = $('mcList'); list.textContent = ''; list.style.display = multi ? 'flex' : 'none';
    $('mcOpen').style.display = multi ? 'none' : '';
    if (multi) gr.items.forEach(function (it) {
      var hv = homeVal(it);
      var b = el('button', { type: 'button', class: 'opt', style: 'background:var(--ground);min-height:44px' }, [
        el('span', { class: 'o1', style: 'font-size:14px', text: timeLabel(it.ts) + ' · ' + (it.memo || T.cats[it.cat] || T.cats.etc) }),
        el('b', { style: 'font-size:14px;white-space:nowrap', text: it.amt == null ? T.enterAmt : (hv == null ? fmt(it.amt, it.cur) : fmt(hv, S.home)) })
      ]);
      b.addEventListener('click', function () { openEntry(it); });
      list.appendChild(b);
    });
    $('mcOpen').onclick = function () { openEntry(e); };
    $('mapCard').classList.add('on');
  }

  /* ---------- 설정 ---------- */
  function renderSet() {
    var box = $('langBox'); box.textContent = '';
    [{ id: 'auto', a: T.auto, b: T.autoSub }, { id: 'ko', a: '한국어', b: 'Korean' }, { id: 'en', a: 'English', b: '영어' }].forEach(function (o) {
      var on = S.lang === o.id;
      var b = el('button', { type: 'button', class: 'opt', 'aria-pressed': on ? 'true' : 'false' }, [el('span', null, [el('span', { class: 'o1', text: o.a }), el('span', { class: 'o2', text: o.b })])]);
      if (on) { var ck = document.createElement('span'); ck.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#9E2F20" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'; b.appendChild(ck); }
      b.addEventListener('click', function () { S.lang = o.id; saveSettings(); applyLang(); renderAll(); });
      box.appendChild(b);
    });
    $('homeCc').textContent = ccOf(S.home); $('homeCode').textContent = S.home; $('homeName').textContent = curName(S.home);
    var lb = S.lastBackup;
    if (!lb) $('lastBk').textContent = T.never;
    else { var d = Math.floor((startOfDay(Date.now()) - startOfDay(lb)) / 86400000); $('lastBk').textContent = d <= 0 ? T.today : T.daysAgo(d); }
    $('fbMail').href = 'mailto:' + (CFG.feedbackEmail || '') + '?subject=' + encodeURIComponent('[' + (lang === 'ko' ? '여행 보따리' : 'Trip Bottari') + '] ' + (lang === 'ko' ? '의견' : 'Feedback'));
    $('ver').textContent = VERSION;
  }
  function startOfDay(t) { var d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); }
  $('homeBtn').addEventListener('click', function () { openCur('home'); });

  /* 백업 */
  function blobToData(b) { return new Promise(function (res) { if (!b) return res(null); var r = new FileReader(); r.onload = function () { res(r.result); }; r.onerror = function () { res(null); }; r.readAsDataURL(b); }); }
  function dataToBlob(d) { try { var p = d.split(','), mime = (p[0].match(/:(.*?);/) || [])[1] || 'image/jpeg', bin = atob(p[1]), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new Blob([u], { type: mime }); } catch (e) { return null; } }
  $('exportBtn').addEventListener('click', function () {
    Promise.all(entries.map(function (e) { return blobToData(e.photo).then(function (d) { var c = Object.assign({}, e); c.photo = d; return c; }); })).then(function (list) {
      var data = JSON.stringify({ app: 'trip-bottari', v: 1, exportedAt: new Date().toISOString(), settings: { home: S.home, cur: S.cur, lang: S.lang }, entries: list });
      var name = 'trip-bottari-backup-' + new Date().toISOString().slice(0, 10) + '.json';
      var blob = new Blob([data], { type: 'application/json' });
      var done = function () { S.lastBackup = Date.now(); saveSettings(); renderSet(); toast(T.exported); };
      var file = null; try { file = new File([blob], name, { type: 'application/json' }); } catch (e) {}
      var touch = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (touch && file && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: name }).then(done).catch(function (err) { if (err && err.name !== 'AbortError') download(); });
      } else download();
      function download() { var a = el('a', { href: URL.createObjectURL(blob), download: name }); document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000); done(); }
    });
  });
  $('importBtn').addEventListener('click', function () { $('importFile').value = ''; $('importFile').click(); });
  $('importFile').addEventListener('change', function () {
    var f = this.files && this.files[0]; if (!f) return;
    f.text().then(function (txt) {
      var j; try { j = JSON.parse(txt); } catch (e) { j = null; }
      if (!j || j.app !== 'trip-bottari' || !Array.isArray(j.entries)) { toast(T.badFile); return; }
      var ok = 0;
      return j.entries.reduce(function (p, raw) {
        return p.then(function () {
          if (!raw || typeof raw.id !== 'string' || typeof raw.ts !== 'number') return;
          var e = {
            id: raw.id.slice(0, 60), ts: raw.ts, cur: /^[A-Z]{3}$/.test(raw.cur) ? raw.cur : S.cur,
            amt: typeof raw.amt === 'number' ? raw.amt : null, usd: typeof raw.usd === 'number' ? raw.usd : null,
            homeFix: raw.homeFix && typeof raw.homeFix.val === 'number' && /^[A-Z]{3}$/.test(raw.homeFix.code) ? { code: raw.homeFix.code, val: raw.homeFix.val } : null,
            cat: TEXT.ko.cats[raw.cat] ? raw.cat : 'etc', memo: String(raw.memo || '').slice(0, 80),
            lat: typeof raw.lat === 'number' ? raw.lat : null, lng: typeof raw.lng === 'number' ? raw.lng : null, acc: typeof raw.acc === 'number' ? raw.acc : null,
            photo: typeof raw.photo === 'string' && raw.photo.indexOf('data:image/') === 0 ? dataToBlob(raw.photo) : null, updated: Date.now()
          };
          return put(e).then(function () { ok++; });
        });
      }, Promise.resolve()).then(function () { toast(T.imported(ok)); return reload(); }).then(renderAll);
    });
  });

  /* 의견 */
  $('fbBtn').addEventListener('click', function () { openSheet('fbSheet'); });
  $('fbForm').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var f = this, data = { country: f.country.value.trim(), pain: f.pain.value.trim(), wish: f.wish.value.trim() };
    if (!data.country && !data.pain && !data.wish) { toast(T.fbEmpty); return; }
    var mail = function () {
      var body = T.q1 + '\n' + data.country + '\n\n' + T.q2 + '\n' + data.pain + '\n\n' + T.q3 + '\n' + data.wish + '\n\n(v' + VERSION + ')';
      location.href = 'mailto:' + (CFG.feedbackEmail || '') + '?subject=' + encodeURIComponent('[Trip Bottari] feedback') + '&body=' + encodeURIComponent(body);
    };
    if (!CFG.supabaseUrl || !CFG.supabaseKey) { mail(); closeSheet('fbSheet'); return; }
    $('fbSend').disabled = true;
    fetch(CFG.supabaseUrl.replace(/\/$/, '') + '/rest/v1/feedback', {
      method: 'POST', headers: { apikey: CFG.supabaseKey, Authorization: 'Bearer ' + CFG.supabaseKey, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ country: data.country, pain: data.pain, wish: data.wish, lang: lang, home: S.home, app_version: VERSION, ua: navigator.userAgent.slice(0, 300) })
    }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      f.reset(); closeSheet('fbSheet'); toast(T.thanks, 2400);
    }).catch(function () { toast(T.fbFail, 2600); setTimeout(mail, 800); }).then(function () { $('fbSend').disabled = false; });
  });

  /* ---------- 홈 화면에 추가 ---------- */
  var UA = navigator.userAgent || '';
  var isStandalone = function () { return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; };
  var isIOS = /iPhone|iPad|iPod/i.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/i.test(UA);
  var inApp = /KAKAOTALK|Instagram|FBAN|FBAV|FB_IAB|NAVER\(inapp|Line\/|DaumApps|everytimeApp|Snapchat|Twitter|BAND\//i.test(UA);
  var isKakao = /KAKAOTALK/i.test(UA);
  var isMobile = isIOS || isAndroid;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; });
  window.addEventListener('appinstalled', function () { deferredPrompt = null; closeWelcome(); closeSheet('instSheet'); toast(T.installed, 3000); });

  function siteUrl() { return location.origin + '/'; }
  function stepRow(n, text, iconHtml) {
    var r = el('div', { class: 'step' }, [el('span', { class: 'num', text: String(n) }), el('span', { text: text, style: 'flex:1' })]);
    if (iconHtml) { var b = el('span', { class: 'iconBox' }); b.innerHTML = iconHtml; r.appendChild(b); }
    return r;
  }
  function copyRow() {
    var btn = el('button', { type: 'button', class: 'btnSm', text: T.copy, style: 'background:var(--ink);color:var(--card);border-color:var(--ink)' });
    btn.addEventListener('click', function () {
      var u = siteUrl();
      (navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(u) : Promise.reject()).catch(function () {
        var ta = el('textarea'); ta.value = u; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove();
      }).then(function () { toast(T.copied); });
    });
    return el('div', { class: 'copyRow' }, [el('span', { text: siteUrl().replace(/^https?:\/\//, '').replace(/\/$/, '') }), btn]);
  }
  function showInstall() {
    var body = $('instBody'); body.textContent = '';
    var okBtn = el('button', { type: 'button', class: 'btnLine', text: T.ok, style: 'width:100%' });
    okBtn.addEventListener('click', function () { closeSheet('instSheet'); });
    if (isStandalone()) { $('instTitle').textContent = T.doneTitle; body.appendChild(okBtn); }
    else if (inApp) {
      $('instTitle').textContent = T.inTitle;
      body.appendChild(el('p', { style: 'margin:0;font-size:14px;line-height:1.6', text: T.inBody }));
      if (isKakao) {
        var ext = el('button', { type: 'button', class: 'cta', text: T.openExt });
        ext.addEventListener('click', function () { location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(siteUrl()); });
        body.appendChild(ext);
      }
      body.appendChild(copyRow()); body.appendChild(okBtn);
    } else if (isIOS) {
      $('instTitle').textContent = T.iosTitle;
      body.appendChild(el('div', { class: 'steps' }, [
        stepRow(1, T.ios1, '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M8 7l4-4 4 4M6 11v9h12v-9" stroke="#33507A" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
        stepRow(2, T.ios2, '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#2B2420" stroke-width="1.9" fill="none"/><path d="M12 8.5v7M8.5 12h7" stroke="#2B2420" stroke-width="1.9" stroke-linecap="round"/></svg>'),
        stepRow(3, T.ios3)
      ]));
      body.appendChild(okBtn);
    } else if (isAndroid) {
      $('instTitle').textContent = T.andTitle;
      body.appendChild(el('div', { class: 'steps' }, [stepRow(1, T.and1), stepRow(2, T.and2)]));
      body.appendChild(okBtn);
    } else {
      $('instTitle').textContent = T.pcTitle;
      body.appendChild(el('p', { style: 'margin:0;font-size:14px;line-height:1.6', text: T.pcBody }));
      body.appendChild(copyRow()); body.appendChild(okBtn);
    }
    openSheet('instSheet');
  }
  function tryInstall() {
    if (deferredPrompt && !inApp) {
      var p = deferredPrompt; deferredPrompt = null;
      p.prompt();
      (p.userChoice || Promise.resolve({})).then(function (c) { if (c && c.outcome === 'accepted') { closeWelcome(); } });
      return;
    }
    showInstall();
  }
  function closeWelcome() { $('welcome').classList.remove('on'); S.welcomed = true; saveSettings(); }
  $('wAdd').addEventListener('click', tryInstall);
  $('wLater').addEventListener('click', function () { closeWelcome(); if (isIOS && !isStandalone()) toast(T.laterWarn, 3200); });
  $('howBtn').addEventListener('click', tryInstall);

  /* ---------- 탭 ---------- */
  function go(v) {
    view = v;
    ['calc', 'rec', 'map', 'set'].forEach(function (k) {
      $('v-' + k).classList.toggle('on', k === v);
      var t = $('tab-' + k); if (k === v) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
    });
    renderAll();
  }
  document.querySelectorAll('nav.tabs button').forEach(function (b) { b.addEventListener('click', function () { go(b.getAttribute('data-view')); }); });

  function renderAll() {
    renderKeys(); renderCalc(); renderRec(); renderSet();
    if (view === 'map') renderMap(); else if (map) { renderMap(); }
  }

  window.addEventListener('online', function () { refreshRates(true); renderCalc(); });
  window.addEventListener('offline', function () { renderCalc(); toast(T.offlineNow, 2400); });
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') refreshRates(false); });

  /* ---------- 시작 ---------- */
  applyLang();
  if (!isStandalone() && !S.welcomed && (isMobile || inApp)) $('welcome').classList.add('on');
  else if (!isStandalone() && !S.welcomed) $('welcome').classList.add('on');
  reload().then(renderAll).catch(function () { renderAll(); });
  renderAll();
  refreshRates(false);
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
  if ('serviceWorker' in navigator && location.protocol === 'https:' || location.hostname === 'localhost') {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(function () {});
  }
  window.__tb = { version: VERSION, settings: function () { return S; } };
})();
