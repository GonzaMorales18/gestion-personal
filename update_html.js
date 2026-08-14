const fs = require('fs');
const file = fs.readFileSync('index.html', 'utf8');

let newFile = file.replace(
  '<span class="font-bold text-sm uppercase tracking-wider">Tenis</span>\n    </a>',
  '<span class="font-bold text-sm uppercase tracking-wider">Tenis</span>\n    </a>\n    <a href="#" onclick="showSection(\'partidos\')" id="nav-partidos"\n       class="flex items-center px-6 py-3.5 text-slate-400 hover:bg-slate-800 border-l-4 border-transparent transition-colors">\n      <i class="fas fa-futbol w-6 text-sm"></i>\n      <span class="font-bold text-sm uppercase tracking-wider">Partidos</span>\n    </a>'
);

const sectionPartidos = `
  <!-- SECCIÓN PARTIDOS -->
  <main id="section-partidos" class="hidden p-4 md:p-8 max-w-[1400px] mx-auto w-full space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      
      <!-- Columna Izquierda: Formulario -->
      <div class="lg:col-span-4">
        <section class="bg-black rounded-2xl shadow-lg border border-slate-700/60 overflow-hidden sticky top-24">
          <div class="bg-slate-800 px-6 py-4 border-b border-slate-700/60">
            <h3 class="text-[10px] font-black text-white uppercase tracking-[0.2em]">Registrar Partido</h3>
          </div>
          <form id="partidosForm" class="p-6 space-y-4">
            <!-- Fecha y Equipo -->
            <div class="grid grid-cols-2 gap-3">
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-white uppercase ml-1">Fecha</label>
                <input type="date" id="pa-fecha" required
                       class="w-full h-11 px-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm font-bold text-white mono">
              </div>
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-white uppercase ml-1">Equpo</label>
                <input type="text" id="pa-equpo" value="Boca Juniors" required list="pa-eq-list"
                       class="w-full h-11 px-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/30 text-sm text-white">
                <datalist id="pa-eq-list">
                  <option value="Boca Juniors"></option>
                  <option value="Selección Argentina"></option>
                </datalist>
              </div>
            </div>
            
            <!-- Torneo y Rival -->
            <div class="grid grid-cols-2 gap-3">
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-white uppercase ml-1">Torneo</label>
                <input type="text" id="pa-torneo" placeholder="Ej)`Liga / Copa Lib." required
                       class="w-full h-11 px-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:ring-2 focus3ring-indigo-500/30 text-sm text-white">
              </div>
              <div class="space-y-1.5">
                <label class="text-[10px] font-bold text-white uppercase ml-1">Rival</label>
                <input type="text" id="pa-rival" placeholder="Ej: River Plate" required
                       class="w-full h-11 px-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:ring-2 focus3ring-indigo-500/30 text-sm text-white">
              </div>
            </div>

            <!-- Estadio -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-white uppercase ml-1">Dónde se jugó</label>
              <input type="text" id="pa-estadio" placeholder="Ej)`La Bombonera" required
                     class="w-full h-11 px-4 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:ring-2 focus3ring-indigo-500/30 text-sm text-white">
            </div>

            <!-- Resultado -->
            <div class="pt-2">
              <p class="text-[10px] font-black text-white uppercase tracking-widest mb-2 border-b border-slate-700/50 pb-2 text-center">Resultado</p>
              <div class="flex items-center justify-center gap-3">
                <div class="flex flex-col items-center">
                  <span class="text-[10px] font-bold text-slate-500 uppercase mb-1">Mi Eq.</span>
                  <input type="number" id="pa-goles-favor" placeholder="0" min="0" required
                         class="w-16 h-12 text-center bg-slate-800 border border-slate-700 rounded-lg outline-none focus3ring-2 focus:ring-indigo-500/30 text-lg font-black text-white mono">
                </div>
                <span class="text-slate-500 font-bold text-xl">-</span>
                <div class="flex flex-col items-center">
                  <span class="text-[10px] font-bold text-slate-500 uppercase mb-1">Rival</span>
                  <input type="number" id="pa-goles-contra" placeholder="0" min="0" required
                         class="w-16 h-12 text-center bg-slate-800 border border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500/30 text-lg font-black text-white mono">
                </div>
              </div>
            </div>

            <button type="submit" id="btn-guardar-partidos"
                    class="w-full bg-indigo-700 hover:opacity-90 text-white font-black py-4 rounded-xl border border-white/20 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest mt-4">
              <i class="fas fa-save"></i><span>Registrar</span>
            </button>
          </form>
        </section>
      </div>

      <!-- Columna Derecha: Dashboard -->
      <div class="lg:col-span-8 space-y-5">

        <!-- Resumen Tarjetas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-black p-4 rounded-2xl border border-slate-700/60 flex flex-col justify-center text-center">
            <p class="text-[9px] font-bold text-white uppercase tracking-widest mb-1">Partidos Vistos</p>
            <h4 id="pa-res-partidos" class="text-2xl font-black text-white mono tracking-tighter">0</h4>
          </div>
          <div class="bg-green-900/20 p-4 rounded-2xl border border-green-800/50 flex flex-col justify-center text-center">
            <p class="text-[9px] font-bold text-green-400 uppercase tracking-widest mb-1">Victorias</p>
            <h4 id="pa-res-vic" class="text-2xl font-black text-green-300 mono tracking-tighter">0</h4>
          </div>
          <div class="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center text-center">
            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Empates</p>
            <h4 id="pa-res-emp" class="text-2xl font-black text-slate-300 mono tracking-tighter">0</h4>
          </div>
          <div class="bg-red-900/20 p-4 rounded-2xl border border-red-800/50 flex flex-col justify-center text-center">
            <p class="text-[9px] font-bold text-red-400 uppercase tracking-widest mb-1">Derrotas</p>
            <h4 id="pa-res-der" class="text-2xl font-black text-red-300 mono tracking-tighter">0</h4>
          </div>
          
          <div class="col-span-2 bg-indigo-900/20 p-4 rounded-2xl border border-indigo-800/50 flex items-center justify-between">
            <div>
              <p class="text-[9px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Efectividad (Pts)</p>
              <h4 id="pa-res-efec" class="text-2xl font-black text-indigo-300 mono tracking-tighter">0%</h4>
            </div>
            <i class="fas fa-percent text-indigo-600/50 text-3xl"></i>
          </div>
          <div class="col-span-2 bg-black p-4 rounded-3l border border-slate-700/60 flex items-center justify-between">
            <div>
              <p class="text-[9px] font-bold text-white uppercase tracking-widest mb-1">Goles a Favor / Contra</p>
              <h4 class="text-2xl font-black text-white mono tracking-tighter"><span id="pa-res-gf" class="text-green-400">0</span> - <span id="pa-res-gc" class="text-red-400">0</span></h4>
            </div>
            <i class="fas fa-futbol text-slate-600 text-3xl"></i>
          </div>
        </div>

        <!-- Filtro Período -->
        <div class="bg-black p-4 rounded-2xl border border-slate-700/60 flex flex-col xl:flex-row gap-3 xl:items-center justify-between">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-black text-white uppercase tracking-widest mr-1">Filtros:</span>
            <select id="pa-filtro-equipo" onchange="renderPartidos()" class="bg-slate-800 border border-slate-700 text-white text-[11px] rounded-lg px-2 py-1 outline-none">
              <option value="Todos">Todos los equipos</option>
            </select>
            <div id="pa-filtro-anios" class="flex gap-2 flex-wrap ml-2"></div>
          </div>
        </div>
        
        <!-- Gráficos Partidos -->
        <div class="space-y-5">
          <div class="bg-black p-6 rounded-2xl border border-slate-700/60">
            <p class="text-[9px] font-black text-white uppercase tracking-widest mb-4">Evolución de Goles (Favor vs Contra)</p>
            <canvas id="chartPartidosGoles" class="max-h-[260px]"></canvas>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="bg-black p-6 rounded-2xl border border-slate-700/60">
              <p class="text-[9px] font-black text-white uppercase tracking-widest mb-4">Partidos por Torneo</p>
              <canvas id="chartPartidosTorneos" class="max-h-[240px]"></canvas>
            </div>
            <div class="bg-black p-6 rounded-2xl border border-slate-700/60">
              <p class="text-[9px] font-black text-white uppercase tracking-widest mb-4">Efectividad por Estadio (%Pts)</p>
              <canvas id="chartPartidosEstadios" class="max-h-[240px]"></canvas>
            </div>
          </div>
        </div>

        <!-- Tabla de Partidos -->
        <div class="bg-black rounded-2xl border border-slate-700/60 overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-700/60 flex flex-wrap gap-4 items-center justify-between">
            <h3 class="text-[10px] font-black text-white uppercase tracking-[0.2em]">Historial de Partidos</h3>
            <div class="flex items-center gap-3">
              <span id="pa-count" class="text-[10px] font-bold text-slate-500 mono bg-slate-800 px-3 py-1 rounded-full border border-slate-700">0 partidos</span>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-slate-700/60 bg-slate-800/80">
                  <th class="text-left px-5 py-3 text-[9px] font-black text-white uppercase tracking-widest">Fecha</th>
                  <th class="text-left px-5 py-3 text-[9px] font-black text-white uppercase tracking-widest">Equpo</th>
                  <th class="text-left px-5 py-3 text-[9px] font-blaci/white uppercase tracking-widest">Torneo</th>
                  <th class="text-left px-5 py-3 text-[9px] font-blaci/white uppercase tracking-widest">Rival</th>
                  <th class="text-left px-5 py-3 text-[9px] font-black text-white uppercase tracking-widest">Estadio</th>
                  <th class="text-center px-5 py-3 text-[9px] font-black text-white uppercase tracking-widest">Res</th>
                  <th class="text-center px-5 py-3 text-[9px] font-black text-white uppercase tracking-widest">W/D/L</th>
                </tr>
              </thead>
              <tbody id="pa-tbody" class="divide-y divide-slate-800/50"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
`';

newFile = newFile.replace( 
  '<!-- SECCIÓN CALENDARIO -->',
  sectionPartidos + '\n\n  <!-- SECCIÓN CALENDARIO -->'
);

newFile = newFile.replace(
  "tenis:    { titulo: 'Tenis',    icono: 'fa-table-tenis'  },",
  "tenis:    { titulo: 'Tenis',    icono: 'fa-table-tenis'  },\n    partidos: { titulo: 'Partidos', icono: 'fa-futbol' },"
);

newFile = newFile.replace(
  "tenis:     { nav: 'border-emerald-500 text-emerald-400 bg-emerald-600/10', icon: 'text-emerald-400' },",
  "tenis:     { nav: 'border-emerald-500 text-emerald-400 bg-emerald-600/10', icon: 'text-emerald-400' },\n    partidos:  { nav: 'border-indigo-500 text-indigo-400 bg-indigo-600/10', icon: 'text-indigo-400' },"
);

newFile = newFile.replace(
  "['inicio', 'actividad', 'finanzas', 'ahorros', 'sueldos', 'tenis', 'calendario'].forEach(s => {",
  "['inicio', 'actividad', 'finanzas', 'ahorros', 'sueldos', 'tenis', 'partidos', 'calendario'].forEach(s => {"
);

newFile = newFile.replace(
  "const validas = ['inicio','actividad','finanzas','ahorros','sueldos','tenis','calendario'];",
  "const validas = ['inicio','actividad','finanzas','ahorros','sueldos','tenis','partidos','calendario'];"
);

newFile = newFile.replace(
  "if (nombre === 'tenis')   iniciarTenis();",
  "if (nombre === 'tenis')   iniciarTenis();\n  if (nombre === 'partidos') iniciarPartidos();"
);

newFile = newFile.replace(
  "const tenisReq    = iniciarTenis().catch(e => console.warn('Error Tenis:', e));",
  "const tenisReq    = iniciarTenis().catch(e => console.warn('Error Tenis:', e));\n    const partidosReq = iniciarPartidos().catch(e => console.warn('Error Partidos:', e));"
);

newFile = newFile.replace(
  "await Promise.all([finanvasReq, ahorrosReq, sueldosReq, tenisReq, nutReq]);",
  "await Promise.all([finanzasReq, ahorrosReq, sueldosReq, tenisReq, partidosReq, nutReq]);"
);

fs.writeFileSync('index.html', newFile);
console.log('HTML updated successfully');