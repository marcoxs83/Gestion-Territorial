const neighborhoods = [
  {
    name: "Distrito Costanera Km 1-2",
    priority: "Media",
    location: "Frente oeste sobre el rio Parana",
    limits: "Costanera, eje San Martin, acceso portuario y borde ribereno",
    population: 7863,
    families: 2722,
    socioeconomic: "Medio",
    streets: "Bueno",
    services: { agua: 94, luz: 98, gas: 68, cloacas: 82, internet: 88 },
    equipment: ["Costanera", "Area portuaria", "Plazas riberenas"],
  },
  {
    name: "Distrito Centro Km 3-4",
    priority: "Alta",
    location: "Eje comercial e institucional intermedio",
    limits: "Av. San Martin, corredores barriales este-oeste y area consolidada central",
    population: 11842,
    families: 3924,
    socioeconomic: "Medio",
    streets: "Regular",
    services: { agua: 91, luz: 97, gas: 61, cloacas: 76, internet: 84 },
    equipment: ["Comercios", "Escuelas", "Delegaciones municipales"],
  },
  {
    name: "Distrito Oeste Km 5-6",
    priority: "Alta",
    location: "Zona oeste residencial y de expansion",
    limits: "Conectores hacia el Parana, barrios del km 5 y km 6, corredores secundarios",
    population: 14327,
    families: 5014,
    socioeconomic: "Bajo",
    streets: "Regular",
    services: { agua: 81, luz: 93, gas: 44, cloacas: 49, internet: 62 },
    equipment: ["Barrio Sarmiento", "Sala sanitaria", "Escuelas barriales"],
  },
  {
    name: "Distrito Belgrano Km 7-8",
    priority: "Media",
    location: "Area urbana densa sobre eje San Martin",
    limits: "Sectores Belgrano, conectores a RN 12 y trama barrial este",
    population: 20639,
    families: 7382,
    socioeconomic: "Medio bajo",
    streets: "Regular",
    services: { agua: 89, luz: 96, gas: 67, cloacas: 74, internet: 71 },
    equipment: ["Instituciones educativas", "Unidad sanitaria", "Plazas barriales"],
  },
  {
    name: "Distrito Centro Civico Km 9",
    priority: "Baja",
    location: "Centro civico, administrativo y de servicios",
    limits: "Km 9, eje San Martin, area municipal y corredores comerciales",
    population: 16522,
    families: 5555,
    socioeconomic: "Medio",
    streets: "Bueno",
    services: { agua: 95, luz: 98, gas: 79, cloacas: 83, internet: 88 },
    equipment: ["Municipalidad", "Bancos", "Escuelas", "Plazas"],
  },
  {
    name: "Distrito Pinares y Roulet",
    priority: "Media",
    location: "Nucleos urbanos complementarios al sureste",
    limits: "Puerto Pinares, Villa Roulet, borde sur y conectores a RN 12",
    population: 9348,
    families: 3234,
    socioeconomic: "Medio bajo",
    streets: "Regular",
    services: { agua: 84, luz: 94, gas: 37, cloacas: 52, internet: 64 },
    equipment: ["Clubes", "Escuelas", "Areas productivas"],
  },
  {
    name: "Zona Este RN12",
    priority: "Alta",
    location: "Franja este hacia Ruta Nacional 12",
    limits: "RN 12, limite con 9 de Julio y conectores hacia Bernardo de Irigoyen",
    population: 11187,
    families: 3749,
    socioeconomic: "Medio bajo",
    streets: "Critico",
    services: { agua: 76, luz: 91, gas: 28, cloacas: 38, internet: 57 },
    equipment: ["Accesos viales", "Areas logisticas", "Servicios de ruta"],
  },
];

const defaultDemands = [
  {
    title: "Anegamiento recurrente en calle Costera",
    code: "DEM-2026-0195",
    neighborhood: "Zona Este RN12",
    owner: "Defensa Civil",
    status: "pendiente",
    statusLabel: "Pendiente",
    mapX: 566,
    mapY: 282,
    locationLabel: "Zona Este RN12 · x566 y282",
    history: "Relevamiento inicial cargado hoy",
  },
  {
    title: "Extension de red cloacal en barrios del km 5",
    code: "DEM-2026-1048",
    neighborhood: "Distrito Oeste Km 5-6",
    owner: "Obras Sanitarias",
    status: "gestion",
    statusLabel: "En gestion",
    mapX: 154,
    mapY: 252,
    locationLabel: "Distrito Oeste Km 5-6 · x154 y252",
    history: "Presupuesto tecnico solicitado",
  },
  {
    title: "Mejora de iluminacion en costanera",
    code: "DEM-2026-2201",
    neighborhood: "Distrito Costanera Km 1-2",
    owner: "Servicios Publicos",
    status: "resuelto",
    statusLabel: "Resuelto",
    mapX: 132,
    mapY: 104,
    locationLabel: "Distrito Costanera Km 1-2 · x132 y104",
    history: "Luminarias instaladas el 18 Jun",
  },
  {
    title: "Reparacion de acceso escolar",
    code: "DEM-2026-0832",
    neighborhood: "Distrito Belgrano Km 7-8",
    owner: "Infraestructura",
    status: "gestion",
    statusLabel: "En gestion",
    mapX: 386,
    mapY: 202,
    locationLabel: "Distrito Belgrano Km 7-8 · x386 y202",
    history: "Cuadrilla asignada para esta semana",
  },
  {
    title: "Pedido de conectividad comunitaria",
    code: "DEM-2026-7740",
    neighborhood: "Distrito Pinares y Roulet",
    owner: "Modernizacion",
    status: "pendiente",
    statusLabel: "Pendiente",
    mapX: 526,
    mapY: 388,
    locationLabel: "Distrito Pinares y Roulet · x526 y388",
    history: "Mesa con proveedor pendiente",
  },
];

const agenda = [
  { time: "09:30", title: "Mesa con referentes", meta: "Zona Este RN12 · accesos y drenaje" },
  { time: "11:00", title: "Inspeccion de calles", meta: "Km 7-8 · accesos escolares" },
  { time: "14:15", title: "Relevamiento socioeconomico", meta: "Km 5-6 · 120 familias" },
  { time: "16:00", title: "Cierre de pedidos vecinales", meta: "Costanera Km 1-2 · luminarias" },
];

const defaultReferents = [
  { name: "Ana Molina", neighborhood: "Distrito Costanera Km 1-2", phone: "+54 9 3751 420-184", influence: "Sector ribereno", meetings: "Ultima reunion: 20 Jun" },
  { name: "Carlos Vera", neighborhood: "Distrito Oeste Km 5-6", phone: "+54 9 3751 389-277", influence: "Barrio Sarmiento y alrededores", meetings: "Ultima reunion: 17 Jun" },
  { name: "Lucia Pereyra", neighborhood: "Distrito Belgrano Km 7-8", phone: "+54 9 3751 542-166", influence: "Corredor escolar", meetings: "Ultima reunion: 12 Jun" },
  { name: "Mario Benitez", neighborhood: "Distrito Pinares y Roulet", phone: "+54 9 3751 612-044", influence: "Pinares, Roulet y borde sur", meetings: "Ultima reunion: 08 Jun" },
];

const roles = [
  { role: "Administrador", scope: "Gestion completa del sistema, usuarios, catalogos y configuracion.", access: "Lectura, escritura, exportacion y permisos" },
  { role: "Analista territorial", scope: "Carga y seguimiento de barrios, demandas, indicadores y reuniones.", access: "Lectura, escritura y reportes" },
  { role: "Consulta", scope: "Visualizacion de informacion consolidada para equipos internos.", access: "Solo lectura" },
];

const zoneTotals = {
  "Distrito Costanera Km 1-2": 18,
  "Distrito Centro Km 3-4": 22,
  "Distrito Oeste Km 5-6": 21,
  "Distrito Belgrano Km 7-8": 16,
  "Distrito Centro Civico Km 9": 9,
  "Distrito Pinares y Roulet": 13,
  "Zona Este RN12": 25,
};

const storageKeys = {
  demands: "territorio.demands",
  referents: "territorio.referents",
  googleApiKey: "territorio.googleMapsApiKey",
  supabaseUrl: "territorio.supabaseUrl",
  supabaseAnonKey: "territorio.supabaseAnonKey",
};

let demands = loadCollection(storageKeys.demands, defaultDemands);
let referents = loadCollection(storageKeys.referents, defaultReferents);

const pageTitle = document.querySelector("#pageTitle");
const searchInput = document.querySelector("#searchInput");
const openDemandForm = document.querySelector("#openDemandForm");
const navButtons = document.querySelectorAll(".nav-item");
const modules = document.querySelectorAll(".module");
const mapViewButtons = document.querySelectorAll("[data-map-view]");
const mapViews = document.querySelectorAll(".map-view");
const syncButton = document.querySelector("#syncButton");
const tooltip = document.querySelector("#mapTooltip");
const territoryMap = document.querySelector("#territoryMap");
const territorySvg = territoryMap.querySelector("svg");
const demandMarkerLayer = document.querySelector("#demandMarkerLayer");
const mapLocationBanner = document.querySelector("#mapLocationBanner");
const leafletMapElement = document.querySelector("#leafletMap");
const leafletLocationBanner = document.querySelector("#leafletLocationBanner");
const googleMapElement = document.querySelector("#googleMap");
const googleKeyPanel = document.querySelector("#googleKeyPanel");
const googleApiKeyInput = document.querySelector("#googleApiKey");
const saveGoogleKey = document.querySelector("#saveGoogleKey");
const googleLocationBanner = document.querySelector("#googleLocationBanner");
const zones = document.querySelectorAll(".zone");
const markers = document.querySelectorAll(".marker");
const demandRows = document.querySelector("#demandRows");
const demandForm = document.querySelector("#demandForm");
const pickDemandLocation = document.querySelector("#pickDemandLocation");
const referentForm = document.querySelector("#referentForm");
const demandNeighborhood = document.querySelector("#demandNeighborhood");
const referentNeighborhood = document.querySelector("#referentNeighborhood");
const timelineList = document.querySelector("#timelineList");
const neighborhoodGrid = document.querySelector("#neighborhoodGrid");
const populationGrid = document.querySelector("#populationGrid");
const infrastructureGrid = document.querySelector("#infrastructureGrid");
const peopleGrid = document.querySelector("#peopleGrid");
const reportGrid = document.querySelector("#reportGrid");
const roleGrid = document.querySelector("#roleGrid");
const databaseForm = document.querySelector("#databaseForm");
const databaseStatus = document.querySelector("#databaseStatus");
const syncDatabase = document.querySelector("#syncDatabase");
const clearDatabaseConfig = document.querySelector("#clearDatabaseConfig");

let activeDemandFilter = "all";
let activeNeighborhoodFilter = "all";
let googleMap = null;
let googleScriptLoading = false;
let googleDemandMarkers = [];
let leafletMap = null;
let leafletDemandLayer = null;
let leafletDraftMarker = null;
let pickMode = "operativo";
let databaseMode = "local";

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function currentQuery() {
  return normalize(searchInput.value.trim());
}

function matchesQuery(values) {
  const query = currentQuery();
  if (!query) return true;
  return normalize(values.join(" ")).includes(query);
}

function loadCollection(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [...fallback];
  } catch (error) {
    return [...fallback];
  }
}

function saveCollection(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getDatabaseConfig() {
  return {
    url: normalizeSupabaseUrl(localStorage.getItem(storageKeys.supabaseUrl) || ""),
    anonKey: localStorage.getItem(storageKeys.supabaseAnonKey) || "",
  };
}

function normalizeSupabaseUrl(url) {
  return url.trim().replace(/\/rest\/v1\/?$/i, "").replace(/\/$/, "");
}

function isDatabaseConfigured() {
  const config = getDatabaseConfig();
  return Boolean(config.url && config.anonKey);
}

function updateDatabaseStatus(message, mode = databaseMode) {
  databaseMode = mode;
  databaseStatus.textContent = message;
  databaseStatus.dataset.mode = mode;
}

function demandToDb(item) {
  return {
    code: item.code,
    title: item.title,
    neighborhood: item.neighborhood,
    owner: item.owner,
    status: item.status,
    status_label: item.statusLabel,
    history: item.history,
    location_label: item.locationLabel || null,
    map_x: item.mapX,
    map_y: item.mapY,
    lat: item.lat,
    lng: item.lng,
  };
}

function demandFromDb(item) {
  return {
    code: item.code,
    title: item.title,
    neighborhood: item.neighborhood,
    owner: item.owner,
    status: item.status,
    statusLabel: item.status_label,
    history: item.history,
    locationLabel: item.location_label || "",
    mapX: item.map_x,
    mapY: item.map_y,
    lat: item.lat,
    lng: item.lng,
  };
}

function referentToDb(item) {
  return {
    name: item.name,
    neighborhood: item.neighborhood,
    phone: item.phone,
    influence: item.influence,
    meetings: item.meetings,
  };
}

function referentFromDb(item) {
  return {
    name: item.name,
    neighborhood: item.neighborhood,
    phone: item.phone,
    influence: item.influence,
    meetings: item.meetings,
  };
}

async function supabaseRequest(table, options = {}) {
  const config = getDatabaseConfig();
  const url = `${normalizeSupabaseUrl(config.url)}/rest/v1/${table}${options.query || ""}`;

  const response = await fetch(url, {
    method: options.method || "GET",
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      "Content-Type": "application/json",
      Prefer: options.prefer || "return=representation",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Error ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function loadDatabaseData() {
  if (!isDatabaseConfigured()) {
    updateDatabaseStatus("Modo local", "local");
    return;
  }

  try {
    updateDatabaseStatus("Conectando...", "pending");
    const [remoteDemands, remoteReferents] = await Promise.all([
      supabaseRequest("demands", { query: "?select=*&order=created_at.desc" }),
      supabaseRequest("referents", { query: "?select=*&order=created_at.desc" }),
    ]);

    demands = remoteDemands.map(demandFromDb);
    referents = remoteReferents.map(referentFromDb);
    saveCollection(storageKeys.demands, demands);
    saveCollection(storageKeys.referents, referents);
    updateDatabaseStatus("Conectado a Supabase", "remote");
    renderAll();
  } catch (error) {
    updateDatabaseStatus("Sin conexion: usando modo local", "error");
  }
}

async function saveDemandToDatabase(demand) {
  if (!isDatabaseConfigured()) return null;
  const rows = await supabaseRequest("demands", { method: "POST", body: demandToDb(demand) });
  return rows && rows[0] ? demandFromDb(rows[0]) : demand;
}

async function saveReferentToDatabase(referent) {
  if (!isDatabaseConfigured()) return null;
  const rows = await supabaseRequest("referents", { method: "POST", body: referentToDb(referent) });
  return rows && rows[0] ? referentFromDb(rows[0]) : referent;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function statusLabel(status) {
  return {
    pendiente: "Pendiente",
    gestion: "En gestion",
    resuelto: "Resuelto",
  }[status];
}

function nextCode(prefix, collection) {
  const year = new Date().getFullYear();
  const number = String(collection.length + 1).padStart(4, "0");
  return `${prefix}-${year}-${number}`;
}

function demandLocationText(item) {
  return item.locationLabel || "Sin georreferenciar";
}

function demandHasLocation(item) {
  return Number.isFinite(Number(item.mapX)) && Number.isFinite(Number(item.mapY));
}

function demandHasLatLng(item) {
  return Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lng));
}

function svgPointFromEvent(event) {
  const point = territorySvg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(territorySvg.getScreenCTM().inverse());
}

function nearestDistrictFromClick(event) {
  const zone = event.target.closest && event.target.closest(".zone");
  return zone ? zone.dataset.zone : formValue(demandForm, "neighborhood");
}

function setDemandLocation(point, district) {
  const x = Math.round(point.x);
  const y = Math.round(point.y);
  const label = `${district} · x${x} y${y}`;

  demandForm.elements.neighborhood.value = district;
  demandForm.elements.mapX.value = x;
  demandForm.elements.mapY.value = y;
  demandForm.elements.lat.value = "";
  demandForm.elements.lng.value = "";
  demandForm.elements.locationLabel.value = label;
  mapLocationBanner.textContent = `Ubicacion seleccionada: ${label}`;
  tooltip.textContent = `Ubicacion seleccionada: ${label}`;
}

function setDemandLatLng(lat, lng) {
  const label = `${pickMode === "leaflet" ? "Leaflet" : "Google Maps"} · ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
  demandForm.elements.mapX.value = "";
  demandForm.elements.mapY.value = "";
  demandForm.elements.lat.value = lat.toFixed(6);
  demandForm.elements.lng.value = lng.toFixed(6);
  demandForm.elements.locationLabel.value = label;
  googleLocationBanner.textContent = `Ubicacion seleccionada: ${label}`;
  leafletLocationBanner.textContent = `Ubicacion seleccionada: ${label}`;
}

function leafletPinIcon(className = "") {
  return L.divIcon({
    className: `territory-leaflet-pin ${className}`.trim(),
    html: '<span aria-hidden="true"></span>',
    iconSize: [32, 42],
    iconAnchor: [16, 38],
    popupAnchor: [0, -34],
  });
}

function setLeafletDraftMarker(lat, lng) {
  if (!leafletMap || !window.L) return;

  if (!leafletDraftMarker) {
    leafletDraftMarker = L.marker([lat, lng], {
      icon: leafletPinIcon("draft"),
      zIndexOffset: 1000,
    }).addTo(leafletMap);
  } else {
    leafletDraftMarker.setLatLng([lat, lng]);
  }

  leafletDraftMarker.bindPopup("Ubicacion seleccionada").openPopup();
}

function clearLeafletDraftMarker() {
  if (!leafletDraftMarker) return;
  leafletDraftMarker.remove();
  leafletDraftMarker = null;
}

function renderDemandMarkers() {
  demandMarkerLayer.innerHTML = demands
    .filter(demandHasLocation)
    .map(
      (item) => `
        <g class="demand-marker" data-label="${escapeHtml(item.title)}">
          <circle cx="${Number(item.mapX)}" cy="${Number(item.mapY)}" r="8"></circle>
          <text x="${Number(item.mapX) + 12}" y="${Number(item.mapY) - 10}">${escapeHtml(item.code)}</text>
        </g>
      `,
    )
    .join("");

  demandMarkerLayer.querySelectorAll(".demand-marker").forEach((marker) => {
    marker.addEventListener("mouseenter", () => {
      tooltip.textContent = marker.dataset.label;
    });
  });
}

function clearGoogleMarkers() {
  googleDemandMarkers.forEach((marker) => marker.setMap(null));
  googleDemandMarkers = [];
}

function renderGoogleDemandMarkers() {
  if (!googleMap || !window.google) return;

  clearGoogleMarkers();
  demands.filter(demandHasLatLng).forEach((item) => {
    const marker = new google.maps.Marker({
      map: googleMap,
      position: { lat: Number(item.lat), lng: Number(item.lng) },
      title: item.title,
    });

    googleDemandMarkers.push(marker);
  });
}

function initLeafletMap() {
  if (!window.L || leafletMap) {
    if (leafletMap) {
      setTimeout(() => leafletMap.invalidateSize(), 80);
    }
    return;
  }

  leafletMap = L.map(leafletMapElement).setView([-26.4084, -54.6359], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(leafletMap);

  leafletDemandLayer = L.layerGroup().addTo(leafletMap);

  leafletMap.on("click", (event) => {
    pickMode = "leaflet";
    setDemandLatLng(event.latlng.lat, event.latlng.lng);
    setLeafletDraftMarker(event.latlng.lat, event.latlng.lng);
    activateSection("demandas");
    demandForm.elements.title.focus();
    renderLeafletDemandMarkers();
  });

  renderLeafletDemandMarkers();
}

function renderLeafletDemandMarkers() {
  if (!leafletMap || !leafletDemandLayer || !window.L) return;

  leafletDemandLayer.clearLayers();
  demands.filter(demandHasLatLng).forEach((item) => {
    L.marker([Number(item.lat), Number(item.lng)])
      .setIcon(leafletPinIcon(item.status))
      .bindPopup(`<strong>${escapeHtml(item.code)}</strong><br>${escapeHtml(item.title)}`)
      .addTo(leafletDemandLayer);
  });
}

function googleMapsReady() {
  googleKeyPanel.classList.add("ready");
  googleMap = new google.maps.Map(googleMapElement, {
    center: { lat: -26.4084, lng: -54.6359 },
    zoom: 13,
    mapTypeId: "roadmap",
    streetViewControl: false,
    fullscreenControl: true,
  });

  googleMap.addListener("click", (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setDemandLatLng(lat, lng);
    activateSection("demandas");
    demandForm.elements.title.focus();
    renderGoogleDemandMarkers();
  });

  renderGoogleDemandMarkers();
}

function loadGoogleMaps(apiKey) {
  if (!apiKey || googleScriptLoading) return;
  if (window.google && window.google.maps) {
    googleMapsReady();
    return;
  }

  googleScriptLoading = true;
  window.initTerritoryGoogleMap = googleMapsReady;

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&callback=initTerritoryGoogleMap`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    googleScriptLoading = false;
    googleLocationBanner.classList.add("active");
    googleLocationBanner.textContent = "No se pudo cargar Google Maps. Revise la clave API y la conexion.";
  };
  document.head.appendChild(script);
}

function populateNeighborhoodSelects() {
  const options = neighborhoods
    .map((item) => `<option value="${escapeHtml(item.name)}">${escapeHtml(item.name)}</option>`)
    .join("");

  demandNeighborhood.innerHTML = options;
  referentNeighborhood.innerHTML = options;
}

function renderAgenda() {
  timelineList.innerHTML = agenda
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="timeline-time">${item.time}</span>
          <div>
            <p class="timeline-title">${item.title}</p>
            <p class="timeline-meta">${item.meta}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderNeighborhoods() {
  const visible = neighborhoods.filter((item) => {
    const priority = activeNeighborhoodFilter === "all" || item.priority === activeNeighborhoodFilter;
    return priority && matchesQuery([item.name, item.location, item.limits, item.priority]);
  });

  neighborhoodGrid.innerHTML = visible.length
    ? visible
        .map(
          (item) => `
            <article class="neighborhood-card">
              <div class="card-topline">
                <strong>${item.name}</strong>
                <span class="priority priority-${item.priority.toLowerCase()}">${item.priority}</span>
              </div>
              <p>${item.location}</p>
              <dl class="data-list">
                <div><dt>Limites</dt><dd>${item.limits}</dd></div>
                <div><dt>Habitantes</dt><dd>${item.population.toLocaleString("es-AR")}</dd></div>
                <div><dt>Familias</dt><dd>${item.families.toLocaleString("es-AR")}</dd></div>
                <div><dt>Nivel</dt><dd>${item.socioeconomic}</dd></div>
              </dl>
            </article>
          `,
        )
        .join("")
    : '<div class="empty-state">No hay barrios para los filtros seleccionados.</div>';
}

function renderPopulation() {
  populationGrid.innerHTML = neighborhoods
    .filter((item) => matchesQuery([item.name, item.socioeconomic]))
    .map((item) => {
      const children = Math.round(item.population * 0.27);
      const adults = Math.round(item.population * 0.59);
      const elders = item.population - children - adults;
      return `
        <article class="insight-card">
          <div class="card-topline">
            <strong>${item.name}</strong>
            <span>${item.socioeconomic}</span>
          </div>
          <div class="metric-line"><span>Habitantes</span><strong>${item.population.toLocaleString("es-AR")}</strong></div>
          <div class="bar-group">
            <label>0-17 anos <i style="width:${Math.round((children / item.population) * 100)}%"></i></label>
            <label>18-64 anos <i style="width:${Math.round((adults / item.population) * 100)}%"></i></label>
            <label>65+ anos <i style="width:${Math.round((elders / item.population) * 100)}%"></i></label>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderInfrastructure() {
  infrastructureGrid.innerHTML = neighborhoods
    .filter((item) => matchesQuery([item.name, item.streets, item.equipment.join(" ")]))
    .map(
      (item) => `
        <article class="infrastructure-card">
          <div class="card-topline">
            <strong>${item.name}</strong>
            <span class="street-state">${item.streets}</span>
          </div>
          <div class="service-grid">
            ${Object.entries(item.services)
              .map(([service, value]) => `<span><b>${service}</b><i>${value}%</i></span>`)
              .join("")}
          </div>
          <p class="equipment">${item.equipment.join(" · ")}</p>
        </article>
      `,
    )
    .join("");
}

function renderDemands() {
  const visible = demands.filter((item) => {
    const state = activeDemandFilter === "all" || item.status === activeDemandFilter;
    return state && matchesQuery([item.title, item.code, item.neighborhood, item.owner, item.history]);
  });

  demandRows.innerHTML = visible.length
    ? visible
        .map(
          (item) => `
            <div class="table-row" role="row">
              <span class="case-title" role="cell">
                <strong>${escapeHtml(item.title)}</strong>
                <small>${escapeHtml(item.code)}</small>
              </span>
              <span role="cell">${escapeHtml(item.neighborhood)}</span>
              <span role="cell">${escapeHtml(item.owner)}</span>
              <span role="cell"><i class="status-pill status-${escapeHtml(item.status)}">${escapeHtml(item.statusLabel)}</i></span>
              <span role="cell">${escapeHtml(demandLocationText(item))}</span>
              <span role="cell">${escapeHtml(item.history)}</span>
            </div>
          `,
        )
        .join("")
    : '<div class="empty-state">No hay demandas para los filtros seleccionados.</div>';
}

function renderReferents() {
  peopleGrid.innerHTML = referents
    .filter((item) => matchesQuery([item.name, item.neighborhood, item.influence]))
    .map(
      (item) => `
        <article class="person-card">
          <div class="avatar" aria-hidden="true">${escapeHtml(item.name.slice(0, 1))}</div>
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.neighborhood)}</span>
            <p>${escapeHtml(item.phone)}</p>
            <small>${escapeHtml(item.influence)} · ${escapeHtml(item.meetings)}</small>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderReports() {
  const highPriority = neighborhoods.filter((item) => item.priority === "Alta").length;
  const openDemands = demands.filter((item) => item.status !== "resuelto").length;
  const averageWater = Math.round(neighborhoods.reduce((sum, item) => sum + item.services.agua, 0) / neighborhoods.length);
  const totalFamilies = neighborhoods.reduce((sum, item) => sum + item.families, 0);

  reportGrid.innerHTML = [
    ["Barrios prioridad alta", highPriority, "Comparativa entre barrios"],
    ["Demandas abiertas", openDemands, "Pendientes y en gestion"],
    ["Cobertura de agua", `${averageWater}%`, "Promedio municipal"],
    ["Familias relevadas", totalFamilies.toLocaleString("es-AR"), "Base territorial"],
  ]
    .map(
      ([title, value, detail]) => `
        <article class="report-card">
          <span>${title}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `,
    )
    .join("");
}

function renderRoles() {
  roleGrid.innerHTML = roles
    .map(
      (item) => `
        <article class="role-card">
          <strong>${item.role}</strong>
          <p>${item.scope}</p>
          <span>${item.access}</span>
        </article>
      `,
    )
    .join("");
}

function renderAll() {
  renderNeighborhoods();
  renderPopulation();
  renderInfrastructure();
  renderDemands();
  renderDemandMarkers();
  renderLeafletDemandMarkers();
  renderGoogleDemandMarkers();
  renderReferents();
  renderReports();
  renderRoles();
}

function activateSection(section) {
  navButtons.forEach((item) => item.classList.toggle("active", item.dataset.section === section));
  modules.forEach((item) => item.classList.remove("active"));

  const module = document.querySelector(`#module-${section}`);
  module.classList.add("active");
  pageTitle.textContent = module.dataset.title;
}

function formValue(form, name) {
  return form.elements[name].value.trim();
}

async function addDemand(event) {
  event.preventDefault();

  const status = formValue(demandForm, "status");
  const demand = {
    title: formValue(demandForm, "title"),
    code: nextCode("DEM", demands),
    neighborhood: formValue(demandForm, "neighborhood"),
    owner: formValue(demandForm, "owner"),
    status,
    statusLabel: statusLabel(status),
    mapX: formValue(demandForm, "mapX") ? Number(formValue(demandForm, "mapX")) : null,
    mapY: formValue(demandForm, "mapY") ? Number(formValue(demandForm, "mapY")) : null,
    lat: formValue(demandForm, "lat") ? Number(formValue(demandForm, "lat")) : null,
    lng: formValue(demandForm, "lng") ? Number(formValue(demandForm, "lng")) : null,
    locationLabel: formValue(demandForm, "locationLabel"),
    history: formValue(demandForm, "history"),
  };

  try {
    const savedDemand = await saveDemandToDatabase(demand);
    demands = [savedDemand || demand, ...demands];
    updateDatabaseStatus(isDatabaseConfigured() ? "Conectado a Supabase" : "Modo local", isDatabaseConfigured() ? "remote" : "local");
  } catch (error) {
    demands = [demand, ...demands];
    updateDatabaseStatus("No se pudo guardar en Supabase: copia local", "error");
  }

  saveCollection(storageKeys.demands, demands);
  demandForm.reset();
  clearLeafletDraftMarker();
  mapLocationBanner.textContent = "Haga clic sobre el mapa para ubicar la demanda.";
  leafletLocationBanner.textContent = "Haga clic sobre el mapa para ubicar la demanda.";
  googleLocationBanner.textContent = "Haga clic sobre Google Maps para ubicar la demanda.";
  renderAll();
}

async function addReferent(event) {
  event.preventDefault();

  const referent = {
    name: formValue(referentForm, "name"),
    neighborhood: formValue(referentForm, "neighborhood"),
    phone: formValue(referentForm, "phone"),
    influence: formValue(referentForm, "influence"),
    meetings: formValue(referentForm, "meetings"),
  };

  try {
    const savedReferent = await saveReferentToDatabase(referent);
    referents = [savedReferent || referent, ...referents];
    updateDatabaseStatus(isDatabaseConfigured() ? "Conectado a Supabase" : "Modo local", isDatabaseConfigured() ? "remote" : "local");
  } catch (error) {
    referents = [referent, ...referents];
    updateDatabaseStatus("No se pudo guardar en Supabase: copia local", "error");
  }

  saveCollection(storageKeys.referents, referents);
  referentForm.reset();
  renderAll();
}

document.querySelectorAll("[data-demand-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-demand-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeDemandFilter = button.dataset.demandFilter;
    renderDemands();
  });
});

document.querySelectorAll("[data-neighborhood-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-neighborhood-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeNeighborhoodFilter = button.dataset.neighborhoodFilter;
    renderNeighborhoods();
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateSection(button.dataset.section);
  });
});

openDemandForm.addEventListener("click", () => {
  activateSection("demandas");
  demandForm.elements.title.focus();
});

demandForm.addEventListener("submit", addDemand);
referentForm.addEventListener("submit", addReferent);

databaseForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = normalizeSupabaseUrl(formValue(databaseForm, "url"));
  const anonKey = formValue(databaseForm, "anonKey");

  localStorage.setItem(storageKeys.supabaseUrl, url);
  localStorage.setItem(storageKeys.supabaseAnonKey, anonKey);
  await loadDatabaseData();
});

syncDatabase.addEventListener("click", loadDatabaseData);

clearDatabaseConfig.addEventListener("click", () => {
  localStorage.removeItem(storageKeys.supabaseUrl);
  localStorage.removeItem(storageKeys.supabaseAnonKey);
  databaseForm.reset();
  updateDatabaseStatus("Modo local", "local");
});

mapViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mapViewButtons.forEach((item) => item.classList.remove("active"));
    mapViews.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-view="${button.dataset.mapView}"]`).classList.add("active");
    if (button.dataset.mapView === "leaflet") {
      initLeafletMap();
    }
    if (button.dataset.mapView === "google") {
      const savedKey = localStorage.getItem(storageKeys.googleApiKey);
      if (savedKey) loadGoogleMaps(savedKey);
    }
  });
});

zones.forEach((zone) => {
  zone.addEventListener("mouseenter", () => {
    const total = demands.filter((item) => item.neighborhood === zone.dataset.zone && item.status !== "resuelto").length;
    tooltip.textContent = `${zone.dataset.zone}: ${total || zoneTotals[zone.dataset.zone]} demandas activas`;
  });
});

markers.forEach((marker) => {
  marker.addEventListener("mouseenter", () => {
    tooltip.textContent = marker.dataset.label;
  });
});

pickDemandLocation.addEventListener("click", () => {
  activateSection("mapa");
  const googleReady = Boolean(window.google && window.google.maps && googleMap);
  const leafletReady = Boolean(window.L);
  pickMode = leafletReady ? "leaflet" : googleReady ? "google" : "operativo";
  mapViewButtons.forEach((item) => item.classList.toggle("active", item.dataset.mapView === pickMode));
  mapViews.forEach((item) => item.classList.toggle("active", item.dataset.view === pickMode));

  if (pickMode === "leaflet") {
    initLeafletMap();
    leafletLocationBanner.classList.add("active");
    leafletLocationBanner.textContent = "Haga clic sobre Leaflet/OpenStreetMap para ubicar la demanda.";
  } else if (pickMode === "google") {
    googleLocationBanner.classList.add("active");
    googleLocationBanner.textContent = "Haga clic sobre Google Maps para ubicar la demanda.";
  } else {
    mapLocationBanner.classList.add("active");
    mapLocationBanner.textContent = "Haga clic sobre el distrito donde se ubica la demanda.";
  }
});

territorySvg.addEventListener("click", (event) => {
  const point = svgPointFromEvent(event);
  const district = nearestDistrictFromClick(event);
  setDemandLocation(point, district);
  activateSection("demandas");
  demandForm.elements.title.focus();
});

saveGoogleKey.addEventListener("click", () => {
  const key = googleApiKeyInput.value.trim();
  if (!key) {
    googleLocationBanner.classList.add("active");
    googleLocationBanner.textContent = "Ingrese una clave API para activar Google Maps.";
    return;
  }

  localStorage.setItem(storageKeys.googleApiKey, key);
  loadGoogleMaps(key);
});

const savedGoogleKey = localStorage.getItem(storageKeys.googleApiKey);
if (savedGoogleKey) {
  googleApiKeyInput.value = savedGoogleKey;
}

const savedDatabaseConfig = getDatabaseConfig();
databaseForm.elements.url.value = savedDatabaseConfig.url;
databaseForm.elements.anonKey.value = savedDatabaseConfig.anonKey;

syncButton.addEventListener("click", () => {
  syncButton.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
    duration: 520,
    easing: "ease-out",
  });
});

searchInput.addEventListener("input", renderAll);

populateNeighborhoodSelects();
renderAgenda();
renderAll();
loadDatabaseData();
