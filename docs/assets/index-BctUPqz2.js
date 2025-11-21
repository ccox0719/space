(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Xt=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"A compact multi-role corvette used as a basic issue starter frame. Adequate cargo, modest defenses, and enough hardpoints to survive early encounters.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55},{id:"cargo_finch",name:"Cargo Finch",description:"A light hauler with reinforced racks and extended cargo tanks. Fragile in a straight fight but ideal for early trading runs.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50},{id:"drillkite",name:"Drillkite Miner",description:"An entry-level mining frame fitted with reinforced struts and power feeds for industrial tools. Limited combat capability but efficient in belts.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45},{id:"spearling",name:"Spearling Interceptor",description:"A nimble interceptor frame tuned for quick strikes and evasive maneuvers. Minimal hold space in exchange for speed and gun mounts.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72},{id:"shade_runner",name:"Shade Runner",description:"A lean courier favored by smugglers. Tight profile, quick burns, and just enough cargo to make risky runs worthwhile.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68},{id:"surveyor_v",name:"Surveyor V",description:"An explorer’s frame with extended fuel tanks and sensor hardpoints. Built to slip between systems, map anomalies, and survive what it finds.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48}],ut=Xt,v=ut.find(t=>t.starter)??ut[0],Qt=v?.hardpoints.length??0,Zt={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};let o;const Ct="cosmo_weapon_loadout";function te(){if(typeof window>"u"||!window.localStorage)return null;const t=window.localStorage.getItem(Ct);if(!t)return null;try{const e=JSON.parse(t);return{weapons:Array.isArray(e.weapons)?e.weapons:[],inventory:Array.isArray(e.inventory)?e.inventory:[]}}catch{return null}}function J(){if(typeof window>"u"||!window.localStorage)return;const t={weapons:o.ship.weapons,inventory:o.inventory?.weapons??[]};window.localStorage.setItem(Ct,JSON.stringify(t))}function ee(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:v?.id??"none",name:v?.name??"Undefined Hull",hp:v?.hull??0,maxHp:v?.hull??0,shields:v?.shields??0,maxShields:v?.shields??0,fuel:v?.fuel??0,maxFuel:v?.fuel??0,cargoCapacity:v?.cargo??0,cargo:{},modules:[],weapons:v?.hardpoints.map(t=>Zt[`${t.size}:${t.type}`]??null)??Array(Qt).fill(null),weaponPower:12,evasion:5,maneuverRating:v?.maneuverRating??0,components:[],hardpoints:v?.hardpoints.map(t=>({...t}))??[]},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},intel:{systems:[]}}}function ne(t){o=t}const g={current:"main",params:{},go(t,e={}){this.current=t,this.params=e}};function ae(t){return m?m.systems.find(e=>e.id===t)??null:null}function F(t,e){const n=ae(t);return n?n.tags.includes(e):!1}window.nav=(t,e={})=>{g.go(t,e)};function se(){const t=o,e=x(t.location.systemId),n=Object.values(t.ship.cargo||{}).reduce((s,i)=>s+i,0),a=t.notifications[t.notifications.length-1];return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${e?.name??t.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${t.time.day}</span>
          <span>Turn ${t.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${t.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${t.ship.fuel}/${t.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${n}/${t.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${t.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Bridge</h1>
          <p class="muted">
            Roles: ${t.player.roles.join(", ")} • Ship: ${t.ship.name} • Status: Hull ${t.ship.hp}/${t.ship.maxHp} · Shields ${t.ship.shields}/${t.ship.maxShields}
          </p>
          ${a?`<p class="muted">Log: ${a}</p>`:""}
          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Fuel/Cargo</p>
              <p class="value-inline">Fuel ${t.ship.fuel}/${t.ship.maxFuel} · Cargo ${n}/${t.ship.cargoCapacity}</p>
            </div>
            <div class="panel-card">
              <p class="label">Location</p>
              <p class="value-inline">${e?.description??"Unknown space"}</p>
            </div>
          </div>
        </section>
      </main>

      <nav class="app-actions">
        <button class="btn btn-primary" onclick="nav('travel')">Travel</button>
        <button class="btn btn-primary" onclick="nav('market')">Market</button>
        <button class="btn btn-primary" onclick="nav('contracts', { source: 'main_menu' })">Contracts</button>
        <button class="btn btn-primary" onclick="nav('ship')">Ship</button>
        ${F(t.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
      </nav>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}const ie=-100,oe=100;function le(t,e){const n=o.reputation[t]||0,a=ce(n+e);return o.reputation[t]=a,a}function re(t){for(const[e,n]of Object.entries(t))le(e,n)}function ce(t){return Math.max(ie,Math.min(oe,t))}let K=[];function pe(t){K=t}function de(t){return K.find(e=>e.id===t)}function ue(){const t=new Set(o.contracts.filter(e=>e.status==="active").map(e=>e.id));return K.filter(e=>!t.has(e.id))}function X(){return o.contracts.filter(t=>t.status==="active")}function me(t){const e=t.requirements,n=[];if(e?.travel?.systemId&&n.push(`Travel to ${e.travel.systemId}`),e?.deliver?.commodityId){const a=e.deliver.quantity||0;n.push(`Deliver ${a} ${e.deliver.commodityId}${e.deliver.systemId?` at ${e.deliver.systemId}`:""}`)}return e?.combat?.enemyId&&n.push(`Defeat ${e.combat.enemyId}`),n.join(" • ")||"No special requirements."}function he(t){const e=t.requirements,n=t.progress||{},a=[];if(e?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),e?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${e.deliver.quantity||0}`)}return e?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||t.status}function Q(t){const e=de(t);if(!e)return{success:!1,reason:"Unknown mission"};if(o.contracts.some(a=>a.id===t&&a.status==="active"))return{success:!1,reason:"Mission already active"};const n={id:e.id,name:e.name,description:e.description,type:e.type,status:"active",sourceFaction:e.factionId,reward:e.reward,requirements:e.requirements,acceptedTurn:o.time.turn,progress:{}};return o.contracts.push(n),{success:!0}}function fe(){X().forEach(t=>{const e=t.requirements?.failureAfterTurns;e&&t.acceptedTurn!=null&&o.time.turn-t.acceptedTurn>=e&&ge(t.id)})}function ge(t){const e=o.contracts.find(n=>n.id===t&&n.status==="active");e&&(e.status="failed",xt(`Mission failed: ${e.name}`))}function xt(t){o.notifications.push(t)}function be(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",xt(`Mission failed (expired): ${n.name}`))}const Tt="__global__",ve={buyMultiplier:1,sellMultiplier:.85},ye={basic:.9,standard:1,strategic:1.2,luxury:1.35};function N(){return o.ship.cargo||(o.ship.cargo={}),o.ship.cargo}function $e(){const t=N();return Object.values(t).reduce((e,n)=>e+n,0)}function Et(){return m?.commodities??[]}function T(t){return Et().find(n=>n.id===t)??null}function $(){return o.marketState?(o.marketState.temporaryModifiers=o.marketState.temporaryModifiers||{},o.marketState.activeEvents=o.marketState.activeEvents||[],o.marketState.localAdjustments=o.marketState.localAdjustments||{},o.marketState.priceIntel=o.marketState.priceIntel||{}):o.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},o.marketState}function we(t){o.intel||(o.intel={systems:[]});const e=o.intel.systems.find(n=>n.systemId===t)??(()=>{const n={systemId:t};return o.intel.systems.push(n),n})();e.lastPriceSeenDay=o.time.day}function Me(t){const e=$();let n=1;const a=e.temporaryModifiers[Tt];a&&(n*=Math.max(0,a.multiplier));const s=e.temporaryModifiers[t];return s&&(n*=Math.max(0,s.multiplier)),n}function ke(t,e){const n=e>0?e:1,a=t/n;return a>=1.15?"high":a<=.85?"low":"stable"}function Se(t,e){const n=t.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(e.id),i=n.exports?.includes(e.id);return s&&(a*=1.2),i&&(a*=.85),e.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function Ce(t,e){const n=Math.max(1,e.basePrice),a=ye[e.tier??"standard"]??1,s=t.marketModifiers?.[e.id]??1,i=Se(t,e),l=1+Math.min(Math.max(e.volatility??.25,0),1)*.08,c=Me(e.id),p=Ee(t.id,e.id),u=Lt(t.id,e.id),d=n*a*s*i*l*c*p*u;return Math.max(1,Math.round(d))}function mt(t,e){return y(t,e).base}function y(t,e){const n=x(t),a=T(e);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=Ce(n,a),i=a.baseSpread??ve,r=Math.min(Math.max(a.volatility??.25,0),1),l=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+r*.05))),c=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-r*.05))),p=Math.max(l,c,Math.round(s*(1+r*.1))),u=Math.max(1,Math.min(l,c,Math.round(s*Math.max(.65,1-r*.2)))),d=ke(s,a.basePrice);return we(t),{base:s,buy:l,sell:c,high:p,low:u,trend:d}}function _t(t,e,n=2){const a=$(),s=t&&t.length?t:Tt;a.temporaryModifiers[s]={multiplier:Math.max(0,e),remainingTurns:Math.max(1,Math.floor(n))}}function At(t=1){if(typeof t=="number"){xe(t);return}Te(t??o)}function xe(t){if(t<=0)return;const e=$(),n=Object.keys(e.temporaryModifiers);for(const s of n){const i=e.temporaryModifiers[s];i.remainingTurns-=t,i.remainingTurns<=0&&delete e.temporaryModifiers[s]}const a=o.time.turn;e.activeEvents=e.activeEvents.filter(s=>s.expiresAtTurn>a),Dt(e,.2*t)}function Te(t){const e=$(),n=m?.systems??[],a=m?.commodities??[],s=t.time.day;for(const i of n)for(const r of a){const l=Lt(i.id,r.id),c=Math.min(Math.max(r.volatility??.25,0),1),p=(1-l)*.1,u=(Math.random()-.5)*.1*(.5+c),d=Bt(l+p+u);e.localAdjustments[i.id]||(e.localAdjustments[i.id]={}),e.localAdjustments[i.id][r.id]=d}e.activeEvents=e.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=t.time.turn)),Dt(e,.1)}function Z(t){return N()[t]??0}function Ee(t,e){return $().activeEvents.filter(a=>(a.expiresAtDay===void 0||o.time.day<a.expiresAtDay)&&a.expiresAtTurn>o.time.turn&&(!a.systemId||a.systemId===t)&&(!a.commodityId||a.commodityId===e)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function _e(t){$().activeEvents.push(t)}function Ae(t){return $().activeEvents.filter(n=>n.expiresAtTurn>o.time.turn&&(n.expiresAtDay===void 0||o.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===t))}function Ie(t){if(Math.random()>.08||!m?.commodities?.length)return;const n=m.commodities[Math.floor(Math.random()*m.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:t,commodityId:n.id,multiplier:s,expiresAtTurn:o.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};_e(i),o.notifications.push(`Market shift in ${t}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function It(t,e,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,l=Math.min(.15,.03*r),c=$();c.localAdjustments[t]||(c.localAdjustments[t]={});const p=c.localAdjustments[t][e]??1,u=s==="buy"?1+l:1-l,d=Bt(p*u);c.localAdjustments[t][e]=d}function Lt(t,e){return $().localAdjustments[t]?.[e]??1}function Bt(t){return Math.min(2,Math.max(.5,t))}function Dt(t,e){for(const[n,a]of Object.entries(t.localAdjustments)){for(const[s,i]of Object.entries(a)){const r=i-1,l=i-r*e;Math.abs(l-1)<.01?delete a[s]:a[s]=l}Object.keys(a).length||delete t.localAdjustments[n]}}function Le(){const e=x(o.location.systemId)?.neighbors.map(s=>x(s)).filter(s=>!!s)||[];if(!e.length)return{success:!1,message:"No neighboring systems to scan."};const n=100;if(o.player.credits<n)return{success:!1,message:"Not enough credits for intel."};o.player.credits-=n;const a=$();return e.forEach(s=>{const i={};(m?.commodities||[]).forEach(l=>{const c=y(s.id,l.id);i[l.id]={buy:c.buy,sell:c.sell}});const r={turn:o.time.turn,prices:i};a.priceIntel[s.id]=r}),{success:!0,message:"Purchased neighbor intel."}}function Rt(){return $().priceIntel}function jt(t,e,n){if(n<=0)return!1;const a=y(t,e).buy;if(a<=0)return!1;const s=a*n;if(o.player.credits<s)return!1;const i=o.ship.cargoCapacity;return i<=0?!1:$e()+n<=i}function Ft(t,e,n){return n<=0?!1:Z(e)>=n}function Nt(t,e,n){if(!jt(t,e,n))return!1;const a=y(t,e).buy,s=a*n;o.player.credits-=s;const i=N();return i[e]=(i[e]||0)+n,It(t,e,n,a,"buy"),!0}function Pt(t,e,n){if(!Ft(t,e,n))return!1;const a=y(t,e).sell,s=a*n,i=N();return i[e]=Math.max(0,(i[e]||0)-n),o.player.credits+=s,It(t,e,n,a,"sell"),!0}function Ht(t,e){const n=t.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const r=y(e,s).sell;return a+r*i},0)}let tt=[];function Be(t){tt=t}function Wt(t){return tt.find(e=>e.id===t)}function De(t){if(!t.to)return;const e=Math.max(0,Math.min(1,t.hazardChance??.4));if(Math.random()>e)return;const n=tt.map(i=>({ev:i,weight:Pe(i,t)})).filter(i=>i.weight>0);if(!n.length)return;const a=n.reduce((i,r)=>i+r.weight,0);let s=Math.random()*a;for(const i of n)if(s-=i.weight,s<=0)return i.ev;return n[0].ev}function Re(t){const e=t.outcomes;if(!e)return{};const n={},a=s=>{o.player.credits+=s,o.player.credits<0&&(o.player.credits=0)};if(e.giveCredits){const s=e.giveCredits.min??0,i=e.giveCredits.max??s,r=_(s,i);a(r),o.notifications.push(`Received ${r} credits.`)}if(typeof e.creditsDelta=="number"&&a(e.creditsDelta),typeof e.fuelDelta=="number"){const s=o.ship.maxFuel;o.ship.fuel=Math.max(0,Math.min(s,o.ship.fuel+e.fuelDelta))}if(typeof e.turnDelta=="number"&&(o.time.turn+=e.turnDelta,fe(),At(e.turnDelta)),e.cargoGain&&ht(e.cargoGain,1),e.cargoLoss&&ht(e.cargoLoss,-1),e.giveCommodity){const s=_(e.giveCommodity.min,e.giveCommodity.max);G(e.giveCommodity.id,s),o.notifications.push(`Collected ${s} ${e.giveCommodity.id}.`)}if(e.giveWeapon&&(o.inventory.weapons.push(e.giveWeapon),o.notifications.push(`Acquired weapon: ${e.giveWeapon}.`)),e.damageShip){const s=e.damageShip.min??0,i=e.damageShip.max??s,r=_(s,i);o.ship.hp=Math.max(0,o.ship.hp-r),o.notifications.push(`Ship took ${r} damage.`)}return e.applyStatus&&o.notifications.push(`Status effect applied: ${JSON.stringify(e.applyStatus)}.`),typeof e.spawnMissionId=="string"&&Q(e.spawnMissionId).success&&o.notifications.push(`New mission received: ${e.spawnMissionId}`),typeof e.flag=="string"&&o.notifications.push(`Event flag: ${e.flag}`),e.modifyReputation&&re({[e.modifyReputation.faction]:e.modifyReputation.amount}),e.triggerCombat?.enemyId&&(n.triggerCombat=e.triggerCombat),n}function je(t){const e={},n=t.autoResolve;if(!n)return e;if(n.mining){const a=_(n.mining.quantity.min,n.mining.quantity.max);G(n.mining.commodityId,a),o.notifications.push(`Mining yield: ${a} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const a=_(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),s=o.ship.maxFuel;o.ship.fuel=Math.max(0,Math.min(s,o.ship.fuel-a)),o.notifications.push(`Anomaly drained ${a} fuel.`)}if(n.exploration?.lootTable?.length){const a=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];G(a,1),o.notifications.push(`Recovered loot: ${a}.`)}return n.market?.temporaryPriceBoost&&(o.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),_t(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(e.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),e}function Fe(t){const e=t.time.day;if(t.marketState?.activeEvents&&(t.marketState.activeEvents=t.marketState.activeEvents.filter(a=>a.expiresAtDay===void 0||e<a.expiresAtDay)),Math.random()<.05&&t.location?.systemId){const a=m?.commodities?.[Math.floor(Math.random()*(m?.commodities.length||1))];if(a){const s=t.location.systemId,i=2;_t(a.id,1.1,i),t.marketState.activeEvents.push({systemId:s,commodityId:a.id,multiplier:1.15,expiresAtDay:e+i,expiresAtTurn:t.time.turn+i*2,label:`${a.name} surge`})}}}function ht(t,e){for(const[n,a]of Object.entries(t)){const s=o.ship.cargo[n]??0,i=Math.max(0,s+a*e);o.ship.cargo[n]=i}}function G(t,e){const n=o.ship.cargo[t]??0,a=Object.values(o.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(e,s));o.ship.cargo[t]=n+i,i<e&&o.notifications.push(`Cargo full: stored ${i}/${e} ${t}.`)}function _(t,e){const n=Number.isFinite(t)?t:0,a=Number.isFinite(e)?e:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function Ne(t){const e=new Set;return(t.to?.tags||[]).forEach(n=>e.add(n)),(t.from?.tags||[]).forEach(n=>e.add(n)),e}function ft(t,e){return t.has(e)}function Pe(t,e){let n=t.weight??0;const a=Ne(e);if(e.to?.eventWeights?.[t.id]&&(n+=e.to.eventWeights[t.id]),t.systemModifiers?.onlyInSystemsWithTags&&!t.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;t.systemModifiers?.weightMultiplier&&(n*=t.systemModifiers.weightMultiplier),e.routeType==="wild_jump"&&t.tags.includes("combat")&&(n+=.15),e.routeType==="trade_lane"&&t.tags.includes("inspection")&&(n+=.25),e.to?.tags.includes("mining_belt")&&(t.type==="mining"||t.tags.includes("mining"))&&(n+=.35),(e.to?.tags.includes("restricted")||e.to?.faction==="unity_church")&&t.tags.includes("inspection")&&(n+=.2),ft(a,"frontier")&&t.tags.includes("combat")&&(n+=.2),ft(a,"black_market")&&t.tags.includes("smuggling")&&(n+=.25);const s=X().filter(i=>i.requirements?.travel?.systemId===e.to?.id);return s.length&&t.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}const z={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function He(){return m?m.weapons:[]}function Ot(){return o.inventory||(o.inventory={weapons:[]}),o.inventory}function et(){return[...Ot().weapons]}function nt(){if(!m)return;const t=et();if(!t.length)return;const e=o.ship;e.weapons=e.weapons.map((n,a)=>{if(n)return n;const s=t.filter(r=>at(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function at(t,e){const n=o.ship,a=m?.weapons.find(i=>i.id===e);if(!a)return!1;const s=n.hardpoints[t];return s?a.size===s.size&&a.type===s.type:!1}function We(t,e){return at(t,e)?(o.ship.weapons[t]=e,J(),!0):!1}function w(t){return!t||!m?null:m.weapons.find(e=>e.id===t)??null}function Oe(t){const e=w(t);return!e||o.player.credits<e.price?!1:(Ot().weapons.push(t),o.player.credits-=e.price,J(),!0)}function qt(t,e,n={}){const a=t.tags||[];let s=t.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let i=t.damage;const r=e.shields>0?"shields":"hull",l=z[t.damageType]?.[r]??1,c=r==="shields"?t.shieldMod:t.armorMod;return i*=c*l,r==="shields"&&a.includes("shield_breaker")&&(i*=1.2),r==="hull"&&a.includes("armor_piercing")&&(i*=1.2),Math.random()<t.critChance&&(i*=t.critMultiplier),i*=n.damageMultiplier??1,Math.max(0,Math.round(i))}const qe={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},Ge={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function gt(t){return t>1.1?"Strong":t<.95?"Weak":"Normal"}const bt={shields:"Shield-breaker",hull:"Hull buster"};function st(t){const e=t.damageType,n=z[e]??z.kinetic,a=gt(n.shields),s=gt(n.hull);let i="Balanced";a==="Strong"&&s==="Weak"?i=bt.shields:s==="Strong"&&a==="Weak"?i=bt.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const r=(t.tags||[]).map(l=>Ge[l]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:qe[e]??e,tagNotes:r}}let U=[];function ze(t){U=t}function Ue(t,e=[]){const n=U.find(i=>i.id===`${t}_loot`);if(n)return n;const a=new Set(e);return U.find(i=>(i.enemyTags||[]).some(r=>a.has(r)))??null}function Y(t,e){const n=Math.ceil(t),a=Math.floor(Math.max(n,e));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Ye(t){if(!t.length)return null;const e=t.reduce((a,s)=>a+(s.weight||0),0);if(e<=0)return null;let n=Math.random()*e;for(const a of t)if(n-=a.weight||0,n<=0)return a;return t[t.length-1]}function Ve(t,e){switch(t.type){case"credits":{const n=t.min??0,a=t.max??n,s=Y(n,a);o.player.credits+=s,e.creditsEarned+=s;break}case"commodity":{const n=Y(t.min??1,t.max??t.min??1),a=Je(t.id||"unknown",n);a>0&&e.commodities.push({id:t.id||"unknown",qty:a});break}case"weapon":{t.id&&(o.inventory.weapons.push(t.id),e.weapons.push(t.id));break}case"component":{t.id&&(o.ship.components.push(t.id),e.components.push(t.id));break}case"mission":{t.id&&Q(t.id).success&&e.missionsGranted.push(t.id);break}}}function Je(t,e){const n=o.ship.cargo[t]??0,a=Object.values(o.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(e,s));return o.ship.cargo[t]=n+i,i}function Ke(t,e,n={},a=[]){const s=Ue(t,a);if(!s)return null;const i=n.quickKill?1.5:1,r=n.lowDamageTaken?1.25:1,l={enemyId:t,enemyName:e,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},c=(p,u)=>{if(!p?.length||Math.random()>u)return;const d=Ye(p);d&&Ve(d,l)};if(c(s.common,1),c(vt(s.uncommon,r),.35),c(vt(s.rare,i),.12),s.guaranteed?.credits){const{min:p,max:u}=s.guaranteed.credits,d=Y(p,u);o.player.credits+=d,l.creditsEarned+=d}return l}function vt(t,e){return!t||e===1?t:t.map(n=>({...n,weight:(n.weight||0)*e}))}const yt={damageMultiplier:1.25,accuracyMultiplier:.8},Xe=.6,Qe="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",Ze="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",B={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},tn=Object.keys(B).map(t=>({type:t,shieldMultiplier:B[t].shield,hullMultiplier:B[t].hull,description:B[t].description}));function en(t){const e=t.ship,n=e.maxHp||e.hp||0,a=e.maxShields||e.shields||0,s=e.cargoCapacity||0,i=nn(e.weapons),r=an(e.modules),l=t.player?.credits??0,c=Math.log10(l+1)*5,p=n+a+i+r+s/2+c;return Math.max(1,Math.round(p))}function Gt(t){const e=t/40;return e<0?0:e>1?1:e}function nn(t){return t.reduce((e,n)=>{if(!n)return e;const a=w(n);if(!a)return e;const s=a.damage??0,i=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return e+s*1.5+i*.2+r},0)}function an(t){return!t||!t.length?0:t.length*5}function sn(t){if(!m)throw new Error("Content has not been loaded.");const e=m.enemies.find(n=>n.id===t);if(!e)throw new Error(`Unknown enemy template: ${t}`);return e}function on(t,e){return Math.floor(Math.random()*(e-t+1))+t}function f(t){const e=o.combat;if(!e)return;e.log.push(t);const n=10;e.log.length>n&&(e.log=e.log.slice(e.log.length-n))}function ln(t){const e=t.hull+t.shields,n=t.weaponIds.length*15;return e+n}function P(t){const e=sn(t),a=o.ship.weapons.map(()=>0),s=e.weaponIds.slice(),i=s.map(()=>0);o.combat={enemyId:e.id,enemyName:e.name,enemyHp:e.hull,enemyMaxHp:e.hull,enemyShields:e.shields,enemyMaxShields:e.shields,enemyWeapons:s,enemyCooldowns:i,enemyTags:e.tags||[],playerCooldowns:a,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:e.canEscape,totalRounds:1,startingHp:o.ship.hp,round:1,log:[`${e.name} engages you in combat!`],adviceToken:Math.random()},g.go("combat")}function rn(t){const e=cn(t);P(e)}function cn(t){if(!m?.enemies?.length)return"pirate_cutter";const e=en(o),n=Gt(o.time.day);let a=e*(.6+.2*n),s=e*(.9+.4*n);t&&F(t,"core")&&(a=e*.4,s=e*.8);const i=m.enemies.map(p=>({id:p.id,power:ln(p)})),r=i.filter(p=>p.power>=a&&p.power<=s);if(r.length)return r[Math.floor(Math.random()*r.length)].id;let l=i[0],c=Math.abs(i[0].power-e);for(const p of i){const u=Math.abs(p.power-e);u<c&&(l=p,c=u)}return l.id}function it(t,e,n="normal"){const a=o.combat;if(a){switch(a.playerBracing=!1,t){case"fire":if(e===void 0){f("You must choose a weapon to fire.");return}pn(e,n);break;case"brace":dn();break;case"flee":if(un())return;break}if(o.combat){if(a.enemyHp<=0){gn();return}if(mn(),!!o.combat){if(o.ship.hp<=0){bn();return}fn(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function pn(t,e){const n=o.combat;if(!n)return;const a=o.ship;if(t<0||t>=a.weapons.length){f("Invalid weapon slot.");return}const s=a.weapons[t];if(!s){f("That hardpoint is empty.");return}const i=w(s);if(!i){f("Missing weapon data.");return}const r=n.playerCooldowns[t]??0;if(r>0){f(`${i.name} is still recharging (${r} turn${r===1?"":"s"}).`);return}const l={shields:n.enemyShields,hp:n.enemyHp},c=e==="called_shot"?yt.damageMultiplier:1,p=e==="called_shot"?yt.accuracyMultiplier:1,u=yn(n.playerStance),d=qt(i,l,{accuracyMultiplier:p,damageMultiplier:c*u});if(d<=0){const M=e==="called_shot"?"called shot goes wide":"misses";f(`You fire ${i.name}, but it ${M}.`),n.playerCooldowns[t]=i.cooldown;return}let h=d;if(n.enemyShields>0){const M=Math.min(n.enemyShields,h);n.enemyShields-=M,h-=M}h>0&&(n.enemyHp=Math.max(0,n.enemyHp-h));const b=l.shields>0?"shields":"hull",C=e==="called_shot"?"called shot":"normal shot";f(`You strike the ${n.enemyName}'s ${b} with ${i.name} (${C}) for ${d} damage.`),d>0&&i.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),f(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[t]=i.cooldown}function dn(){const t=o.combat;t&&(t.playerBracing=!0,f("You brace for impact, diverting power to shields and hull integrity."))}function un(){const t=o.combat;if(!t)return!1;if(!t.canEscape)return f("The enemy objectives lock you in place. Flee attempt denied."),!1;const e=.4,n=t.playerStance==="assault"?-.1:t.playerStance==="evasive"?.15:0,a=(o.ship.maneuverRating||0)+(t.playerStatus.maneuverBonus||0),i=D((a-40)*.01,-.15,.15),r=D(e+n+i,.1,.9);return Math.random()<=r?(f(`You punch the thrusters and break free! (Flee chance ${(r*100).toFixed(0)}%)`),o.combat=null,g.go("main"),!0):(f(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(r*100).toFixed(0)}%)`),!1)}function mn(){const t=o.combat;if(!t)return;if(t.enemyStatus.weaponJammedTurns>0){t.enemyStatus.weaponJammedTurns-=1,f("Enemy weapons are jammed this round!");return}const e=[];if(t.enemyWeapons.forEach((p,u)=>{const d=t.enemyCooldowns[u]??0;p&&d<=0&&e.push(u)}),e.length===0){f(`The ${t.enemyName} reloads while you advance.`);return}const n=e[on(0,e.length-1)],a=t.enemyWeapons[n],s=w(a);if(!s){f(`The ${t.enemyName} fumbles its weapon.`);return}const i={shields:o.ship.shields,hp:o.ship.hp},r=Math.min(.3,Math.max(0,t.playerStatus.maneuverBonus||0)*.01);let l=qt(s,i,{accuracyMultiplier:1-r});if(l<=0){f(`The ${t.enemyName} fires ${s.name}, but misses.`),t.enemyCooldowns[n]=s.cooldown;return}t.playerBracing&&(l=Math.round(l*Xe)),l=Math.max(0,Math.round(l*$n(t.playerStance)));let c=l;if(t.playerStatus.shieldBoost>0){const p=Math.min(t.playerStatus.shieldBoost,c);t.playerStatus.shieldBoost-=p,c-=p}if(o.ship.shields>0){const p=Math.min(o.ship.shields,c);o.ship.shields-=p,c-=p}c>0&&(o.ship.hp=Math.max(0,o.ship.hp-c)),f(`The ${t.enemyName} hits you with ${s.name} for ${l} damage.`),t.enemyCooldowns[n]=s.cooldown}function hn(){const t=o.combat;if(!t)return null;const e=t.enemyCooldowns.length>0?t.enemyCooldowns.map(l=>l??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...e),a=[];if(n<=1){const l=D(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:l})}if(t.enemyShields<=0){const c=t.playerCooldowns.filter(u=>u<=0).length/Math.max(1,o.ship.weapons.length),p=D(.6+c*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:p})}o.ship.hp/o.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((t.adviceToken??Math.random())+t.round*.13)%1,i=Math.floor(s*a.length),r=a[i];return{...r,confidence:r.confidence}}function fn(){const t=o.combat;t&&(t.playerCooldowns=t.playerCooldowns.map(e=>e>0?e-1:0),t.enemyCooldowns=t.enemyCooldowns.map(e=>e>0?e-1:0),t.playerStatus.maneuverTurns>0&&(t.playerStatus.maneuverTurns-=1,t.playerStatus.maneuverTurns<=0&&(t.playerStatus.maneuverBonus=0)),t.playerStatus.shieldTurns>0&&(t.playerStatus.shieldTurns-=1,t.playerStatus.shieldTurns<=0&&(t.playerStatus.shieldBoost=0)))}function gn(){const t=o.combat;if(!t)return;f(`The ${t.enemyName} explodes under your punishing fire. Victory is yours.`);const e=Math.max(0,t.startingHp-o.ship.hp),n=t.totalRounds<=3,a=e<=5,s=Ke(t.enemyId,t.enemyName,{quickKill:n,lowDamageTaken:a},t.enemyTags||[]);if(s){o.lastBattleResult=s;const i=[];s.creditsEarned&&i.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&i.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&i.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&i.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&i.push(`Missions: ${s.missionsGranted.join(", ")}`),f(`Loot recovered — ${i.join(" | ")||"nothing notable."}`),n&&f("Because you won quickly, salvage yields are richer."),a&&f("Minimal hull damage preserved more intact cargo.")}else f("No notable loot recovered.");o.combat=null,g.go("main")}function bn(){f("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),o.ship.hp=0,o.ship.shields=0,o.combat=null,o.notifications.push("Game over — hull integrity dropped to zero."),g.go("main")}function vn(t){const e=o.combat;e&&(e.playerStance=t,f(`Stance changed to ${t.charAt(0).toUpperCase()+t.slice(1)}.`))}function yn(t){switch(t){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function $n(t){switch(t){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function D(t,e,n){return Math.max(e,Math.min(n,t))}function wn(t,e,n){return Math.max(e,Math.min(n,t))}function ot(t){const{systemId:e,state:n,sessionFactor:a}=t,s=m?.systems.find(h=>h.id===e),i=s?.security??"medium";let r;switch(i){case"high":r=.02;break;case"low":r=.12;break;default:r=.06;break}s?.tags.includes("mining_belt")&&(r+=.02),s?.marketProfile?.blackMarket&&(r+=.03);const l=Ht(n,e),c=Math.min(.15,l/5e3),p=Mn(n,e),u=a*.03;let d=r+c+u+p;return kn(d,n,e)}function Mn(t,e){const n=t.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[c,p]of a){if(!p)continue;const u=y(e,c),d=T(c)?.basePrice??u.sell;if(d<=0)continue;const h=(u.sell-d)/d;s+=h*p,i+=p}if(i<=0)return 0;const r=s/i;return wn(r*.2,0,.15)}function kn(t,e,n){const a=Gt(e.time.day),s=.4,r=s+(.75-s)*a;let l=t;return F(n,"core")?(l>.25&&(l=.25),l<.01&&(l=.01),l):(l>r&&(l=r),l<.01&&(l=.01),l)}function Sn(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",t.notifications.push(`Contract failed (expired): ${n.name}`))}function Cn(t,e){xn(t,e).lastRiskSeenDay=t.time.day}function xn(t,e){t.intel||(t.intel={systems:[]});const n=t.intel.systems.find(s=>s.systemId===e);if(n)return n;const a={systemId:e};return t.intel.systems.push(a),a}const Tn=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],En=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]}],_n={belts:Tn,tables:En},An="pirate_cutter",V=_n,zt={careful:{yieldMultiplier:.8,rareMod:.5,lossKey:"carefulLoss"},standard:{yieldMultiplier:1,rareMod:1,lossKey:"standardLoss"},overcharge:{yieldMultiplier:1.3,rareMod:1.5,lossKey:"overchargeLoss"}};function $t(t,e,n){const a=t.ship.cargo||{},s=Object.values(a).reduce((l,c)=>l+c,0),i=Math.max(0,t.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,i));return r>0&&(a[e]=(a[e]??0)+r,t.ship.cargo=a),t.notifications||(t.notifications=[]),r<n&&t.notifications.push(`Cargo constrained: stored ${r}/${n} ${e}.`),r}function R(t,e){const n=Math.ceil(t),a=Math.floor(e);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Ut(t,e){const n=e?V.belts.find(s=>s.id===e):null;if(n)return n;const a=V.belts.find(s=>s.systemId===t);return a||{id:"default_belt",name:"Unmapped Belt",systemId:t,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function wt(t){return t?V.tables.find(e=>e.id===t)??null:null}function Mt(t){if(!t||!t.entries.length)return null;const e=t.entries.reduce((r,l)=>r+(l.weight||0),0);if(e<=0)return null;let n=Math.random()*e,a=null;for(const r of t.entries)if(n-=r.weight||0,n<=0){a=r;break}const s=a??t.entries[t.entries.length-1],i=R(s.min,s.max);return{id:s.id,amount:i}}function In(t,e,n){const a=e.stability[zt[n].lossKey],s=R(a.min,a.max);t.stability=Math.max(0,t.stability-s),t.lastMessage=`Stability dropped by ${s}%.`}function Ln(t,e,n,a){const s=Ut(e,n),i=Yt(t,s.id);if(i.depletedUntilDay!==void 0&&t.time.day<i.depletedUntilDay){t.notifications.push(`This belt is depleted. It will recover by day ${i.depletedUntilDay}.`);return}const r=ot({systemId:e,state:t,sessionFactor:0});t.miningSession={active:!0,systemId:e,beltId:s.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:r,stability:s.stability.start,maxStability:s.stability.start,beltName:s.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0}}function Bn(t,e="standard"){const n=t.miningSession;if(!n||!n.active)return null;const a=Ut(n.systemId,n.beltId),s=wt(a.commonTableId),i=wt(a.rareTableId),r=zt[e],l=Mt(s),c=l?.id??n.resourceId??"aurite_ore",p=l?.amount??R(1,3),u=Math.max(1,Math.round(p*r.yieldMultiplier)),d=$t(t,c,u),b=Math.max(1,mt(n.systemId,c))*d;n.minesTaken+=1,n.totalValueMined+=b,In(n,a,e);const M=(1-n.stability/Math.max(1,n.maxStability))*.5,I=a.baseRareChance*r.rareMod+M;let k=null,O=0;if(i&&Math.random()<=I){const S=Mt(i);if(S){const L=$t(t,S.id,S.amount);k={id:S.id,amount:L},O=Math.max(1,mt(n.systemId,S.id))*L,n.totalValueMined+=O}}const q=ot({systemId:n.systemId,state:t,sessionFactor:n.minesTaken});n.currentPirateChance=q;const pt=Math.random()<=q;pt&&(n.active=!1,n.lastMessage="Pirates detected! Breaking off the dig.",P(An));const dt=n.stability<=0;if(dt){const S=R(2,6);t.ship.hp=Math.max(0,t.ship.hp-S),n.active=!1,n.lastMessage=`Vein collapse! Hull took ${S} damage.`;const L=Yt(t,a.id);L.depletedUntilDay=t.time.day+2}else n.lastMessage=`Mined ${d} ${c}${k?`; rare find: ${k.amount} ${k.id}`:""}.`;return t.notifications||(t.notifications=[]),t.notifications.push(`Mining haul: ${d} ${c} (~${Math.round(b)} cr).`),k&&t.notifications.push(`Rare find: ${k.amount} ${k.id}.`),n.lastYield={commodityId:c,amount:d,approxValue:Math.round(b+O),rareFind:k},{minedCommodityId:c,minedAmount:d,pirateEncountered:pt,pirateChance:q,rareFound:k,stability:n.stability,collapsed:dt}}function Dn(t){const e=t.time.day;for(const n of t.miningBelts)n.depletedUntilDay!==void 0&&e>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,t.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Yt(t,e){t.miningBelts||(t.miningBelts=[]);const n=t.miningBelts.find(s=>s.beltId===e);if(n)return n;const a={beltId:e};return t.miningBelts.push(a),a}function Rn(t){t.miningSession=null}function jn(t){t.time.day+=1,At(t),Fe(t),be(t),Sn(t),Dn(t),t.notifications.push(`Day ${t.time.day}: Market conditions shift across the sector.`),t.notifications.push(`Day ${t.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=t=>{Nn(t)};function A(t){return m?m.systems.find(e=>e.id===t)??null:null}function H(){return A(o.location.systemId)}function Fn(){const t=H();return t?t.neighbors.map(e=>A(e)).filter(e=>e!==null):[]}function Vt(t,e){const n=e.tags.includes("trade_lane")||e.tags.includes("checkpoint")||t.tags.includes("trade_lane")||t.tags.includes("checkpoint"),a=e.tags.includes("frontier")||e.tags.includes("mining_belt")||e.tags.includes("anomaly")||t.tags.includes("frontier")||t.tags.includes("mining_belt");let s=n?1:2;(e.tags.includes("mining_belt")||e.tags.includes("frontier"))&&(s+=1),e.tags.includes("anomaly")&&(s+=1),s=Math.min(3,Math.max(1,s));let i;switch(e.security){case"high":i=.25;break;case"medium":i=.4;break;default:i=.6;break}return n&&(i*=.7),a&&(i=Math.min(1,i+.15)),e.tags.includes("restricted")&&(i-=.05),i=Math.min(.95,Math.max(.1,i)),{travelTime:s,fuelCost:s,hazardChance:i,routeType:n?"trade_lane":a?"wild_jump":"standard"}}function kt(t){const e=H();if(!e)return null;const n=A(t);return n?Vt(e,n):null}function Nn(t){const e=H();if(!m||!e)return;if(!e.neighbors.includes(t)){console.warn(`System ${t} is not a neighbor of ${e.id}`);return}const n=A(t);if(!n)return;const a=Vt(e,n);if(o.ship.fuel<a.fuelCost){console.warn("Not enough fuel to travel.");return}o.ship.fuel-=a.fuelCost,o.location.systemId=n.id,o.location.docked=!0,o.time.turn+=a.travelTime,Ie(n.id),jn(o),Cn(o,n.id);const s=`Arrived at ${n.name} after a ${a.routeType.replace("_"," ")} (${a.travelTime} turn${a.travelTime===1?"":"s"}).`;Hn(n.id)||Pn(e,n,a,s)||g.go("main",{message:s})}function Pn(t,e,n,a){const s={from:t,to:e,hazardChance:n.hazardChance,routeType:n.routeType,travelTime:n.travelTime},i=De(s);return i?i.type==="mining"?(g.go("event",{eventId:i.id}),!0):!i.choices||i.choices.length===0?Wn(i,a):(g.go("event",{eventId:i.id}),!0):(g.go("main",{message:`${a} — Uneventful transit.`}),!0)}function Hn(t){const e=A(t);if(!e)return!1;const n=ot({systemId:t,state:o,sessionFactor:1});return Math.random()<=n?(o.notifications.push(`Pirates intercept you near ${e.name}!`),rn(t),!0):!1}function Wn(t,e){const n=je(t);return n.triggerCombat?.enemyId?(P(n.triggerCombat.enemyId),!0):(g.go("main",{message:`${e} — ${t.name||"Event"} resolved automatically.`}),!0)}function On(){const t=H(),e=Fn(),n=Object.values(o.ship.cargo||{}).reduce((r,l)=>r+l,0),a=e.map(r=>kt(r.id)?.hazardChance??0).reduce((r,l)=>Math.max(r,l),0),s=Math.round((a||0)*100);if(!t)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Loading system...</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Travel</h1>
            <p>Current system data unavailable.</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Back to Main</button>
        </nav>
      </div>
    `;const i=e.length===0?'<div class="panel-card"><p class="label">Connections</p><p class="value-inline">No nearby systems detected.</p></div>':e.map(r=>{const l=kt(r.id),c=qn(r.security),p=Gn(r),u=l?zn(l.hazardChance):"Unknown",d=l?`${l.fuelCost} fuel`:"Fuel: ?",h=l?`${l.travelTime} turn${l.travelTime===1?"":"s"}`:"Time: ?";return`
              <div class="panel-card">
                <p class="label">${c}${p.length?` · ${p.join(", ")}`:""}</p>
                <p class="value-inline"><strong>${r.name}</strong></p>
                <p class="muted">${d} • ${h} • Risk: ${u}</p>
                <button class="btn btn-primary" onclick="travelToSystem('${r.id}')">Jump to ${r.name}</button>
              </div>
            `}).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${o.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${o.ship.fuel}/${o.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${n}/${o.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Risk</span>
          <span class="stat-value stat-risk">${s}%</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Travel</h1>
          <p class="muted">${t.description}</p>
          <div class="panel-row">
            ${i}
          </div>
          <div class="panel-card">
            <p class="label">Legend</p>
            <p class="muted">
              ▲ Frontier (pirate prone) • ⛏ Mining belts • ◆ Trade hub checks • ✝ Unity inspections
            </p>
          </div>
        </section>
      </main>

      <nav class="app-actions">
        <button class="btn btn-ghost" onclick="nav('main')">Back</button>
        <button class="btn btn-ghost" onclick="nav('market')">Market</button>
        <button class="btn btn-ghost" onclick="nav('ship')">Ship</button>
        <button class="btn btn-ghost" onclick="nav('travel')">Refresh</button>
      </nav>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('main')">Main</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')">Ship</button>
        <button class="btn btn-ghost btn-small" onclick="nav('mining')">Mining</button>
      </footer>
    </div>
  `}function qn(t){switch(t){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${t||"Unknown"} sec`}}function Gn(t){const e=[];return t.tags.includes("frontier")&&e.push("▲ Frontier"),t.tags.includes("mining_belt")&&e.push("⛏ Mining"),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&e.push("◆ Trade hub"),(t.tags.includes("restricted")||t.faction==="unity_church")&&e.push("✝ Unity"),e}function zn(t){return t<.35?"Safe":t<.65?"Moderate":"Hazardous"}const Un={high:"🔺",low:"🔻",stable:"↔️"};function Yn(){const t=x(o.location.systemId);if(!t)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Market</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Market</h1>
            <p>Loading market data…</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Back</button>
        </nav>
      </div>
    `;const e=Et();if(!e.length)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">${t.name}</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Market</h1>
            <p>No commodities available in this sector yet.</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Back</button>
        </nav>
      </div>
    `;const n=Object.values(o.ship.cargo||{}).reduce((s,i)=>s+i,0),a=e.map(s=>{const i=y(t.id,s.id),r=Qn(s.tradeTags?.length?s.tradeTags:s.tags),l=jt(t.id,s.id,1)?"":" disabled",c=Ft(t.id,s.id,1)?"":" disabled",p=Z(s.id),u=Jt(i.buy,n,s.id),d=Zn(s,p);return`
        <div class="panel-card">
          <p class="label">${r||"Local goods"}</p>
          <p class="value-inline"><strong>${s.name}</strong></p>
          <p class="muted">Buy ${i.buy} cr · Sell ${i.sell} cr · ${Un[i.trend]} ${i.trend}</p>
          <div class="muted">${d}</div>
          <div class="app-actions">
            <button class="btn btn-primary"${l} onclick="buyCommodityAction('${s.id}')">Buy 1</button>
            <button class="btn btn-primary"${l||u<=1?" disabled":""} onclick="buyAllCommodityAction('${s.id}', ${i.buy})">Buy Max (${u})</button>
            <button class="btn btn-ghost"${c} onclick="sellCommodityAction('${s.id}')">Sell 1</button>
            <button class="btn btn-ghost"${c||p<=1?" disabled":""} onclick="sellAllCommodityAction('${s.id}')">Sell All (${p})</button>
          </div>
        </div>
      `}).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Market · ${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${o.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${o.ship.fuel}/${o.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${n}/${o.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${o.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Current Quotes</h1>
          <p id="market-message" class="muted">
            Credits: ${o.player.credits} | Cargo: ${Vn()}
          </p>
          ${Jn(t.id)}
          ${Kn(t)}
          <div class="panel-row">
            ${a}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function Vn(){const t=o.ship.cargo||{};return`${Object.values(t).reduce((n,a)=>n+a,0)}/${o.ship.cargoCapacity}`}function Jn(t){const e=Ae(t);return e.length?`<div class="panel-row">${e.map(a=>`
      <div class="panel-card">
        <p class="label">Market Event</p>
        <p class="value-inline">${a.label||`${a.commodityId||"local goods"} x${a.multiplier}`}</p>
        <p class="muted">Expires in ${Math.max(0,a.expiresAtTurn-o.time.turn)} turns</p>
      </div>
    `).join("")}</div>`:""}function Kn(t){const e=Rt();return`
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (100 cr). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel</button>
      </div>
      ${(t?.neighbors.map(s=>x(s)).filter(s=>!!s&&e[s.id])||[]).map(s=>{const i=Xn(t?.id,s.id),r=o.time.turn-(e[s.id]?.turn??o.time.turn),l=i.over?`${i.over.id} overpriced (+${Math.round(i.over.delta*100)}%)`:"no strong overpay",c=i.under?`${i.under.id} underpriced (${Math.round(i.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${s.name} (age ${r}t): Sell -> ${l} | Buy -> ${c}</p>`}).join("")||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function Xn(t,e){if(!t)return{over:null,under:null};const a=Rt()[e];if(!a)return{over:null,under:null};let s=null,i=null;const r=Math.max(0,o.time.turn-a.turn),l=Math.max(.5,1-r*.05);for(const[c,p]of Object.entries(a.prices)){const u=y(t,c);if(u.sell>0&&p.buy>u.sell){const d=(p.buy-u.sell)/u.sell*l;(!s||d>s.delta)&&(s={id:c,delta:d})}if(u.buy>0&&p.sell<u.buy){const d=(u.buy-p.sell)/u.buy*l;(!i||d>i.delta)&&(i={id:c,delta:d})}}return{over:s,under:i}}function Jt(t,e,n){if(t<=0)return 0;const a=Math.floor(o.player.credits/t),s=Math.max(0,o.ship.cargoCapacity-e);return Math.max(0,Math.min(a,s))}function Qn(t){return t?.length?Array.from(new Set(t)).map(n=>lt(n.replace(/_/g," "))).join(" · "):""}function Zn(t,e){const n=lt(t.tier||"standard"),a=ta(t.legalStatus||"legal"),s=typeof t.mass=="number"?`${t.mass}t`:null,i=[`Held ${e}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" · ")}function lt(t){return t.split(" ").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function ta(t){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[t]??lt(t)}window.buyCommodityAction=t=>{const e=o.location.systemId,n=T(t),a=Nt(e,t,1),s=y(e,t).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||t} for ${s} cr.`:`Cannot buy ${n?.name||t}.`),nav("market")};window.sellCommodityAction=t=>{const e=o.location.systemId,n=T(t),a=Pt(e,t,1),s=y(e,t).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||t} for ${s} cr.`:`Cannot sell ${n?.name||t}.`),nav("market")};window.buyAllCommodityAction=(t,e)=>{const n=o.location.systemId,a=o.ship.cargo||{},s=Object.values(a).reduce((c,p)=>c+p,0),i=Jt(e,s);if(i<=0){nav("market");return}Nt(n,t,i);const r=T(t),l=document.getElementById("market-message");l&&(l.textContent=`Bought ${i} ${r?.name||t} for ${e*i} cr.`),nav("market")};window.sellAllCommodityAction=t=>{const e=o.location.systemId,n=Z(t);if(n<=0){nav("market");return}const a=y(e,t).sell;Pt(e,t,n);const s=T(t),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||t} for ${a*n} cr.`),nav("market")};window.purchaseNeighborIntel=()=>{const t=Le(),e=document.getElementById("market-message");e&&(e.textContent=t.message),nav("market")};function ea(t={}){const e=typeof t.message=="string"?t.message:"",n=X(),a=ue(),s=Object.values(o.ship.cargo||{}).reduce((l,c)=>l+c,0),i=n.length>0?n.map(l=>`
              <div class="panel-card">
                <p class="label">${l.status}</p>
                <p class="value-inline"><strong>${l.name}</strong></p>
                <p class="muted">${l.description||""}</p>
                <p class="muted">${me(l)}</p>
                <p class="muted">${he(l)}</p>
              </div>
            `).join(""):'<p class="muted">No active missions.</p>',r=a.length>0?a.map(l=>`
              <div class="panel-card">
                <p class="label">${l.type}</p>
                <p class="value-inline"><strong>${l.name}</strong></p>
                <p class="muted">${l.description}</p>
                <p class="muted">Reward: ${na(l.reward)}</p>
                <button class="btn btn-primary" onclick="acceptContract('${l.id}')">Accept</button>
              </div>
            `).join(""):'<p class="muted">No available missions.</p>';return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Contracts</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${o.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${o.ship.fuel}/${o.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${s}/${o.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${o.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Contracts</h1>
          ${e?`<p class="muted">${e}</p>`:""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${i}</div>
          <h2 class="panel-title">Available</h2>
          <div class="panel-row">${r}</div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function na(t){if(!t)return"None";const e=[];if(t.credits&&e.push(`${t.credits} credits`),t.rep){const n=Object.entries(t.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");e.push(`Rep: ${n}`)}return e.join(" | ")||"None"}window.acceptContract=t=>{const e=Q(t),n=e.success?"Mission accepted.":e.reason||"Unable to accept.";nav("contracts",{message:n})};const aa={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function rt(t){return m?m.ships.find(e=>e.id===t)??null:null}function sa(){return rt(o.ship.templateId)}function ia(){return m?m.ships.filter(t=>t.starter):[]}function oa(){return m?m.ships.filter(t=>!t.starter):[]}function Kt(t,e){const n=rt(t);if(!n){console.warn(`Unknown ship template: ${t}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,l)=>aa[`${r.size}:${r.type}`]??a[l]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r}))};o.ship=i,J(),nt()}function la(t){Kt(t),o.player.hasChosenStarter=!0}function ra(t){const e=rt(t);return e?e.starter?(console.warn("Starter ships are not sold at shipyards."),!1):o.player.credits<e.cost?(console.warn("Not enough credits to buy this ship."),!1):(o.player.credits-=e.cost,Kt(t),!0):(console.warn(`Unknown ship template: ${t}`),!1)}function ca(){const t=o.ship,e=t.maxHp-t.hp,n=t.maxShields-t.shields;if(e<=0&&n<=0)return;const a=e+n;if(o.player.credits<a){console.warn("Not enough credits to fully repair.");return}o.player.credits-=a,t.hp=t.maxHp,t.shields=t.maxShields}function pa(){const t=o.ship,e=t.maxFuel-t.fuel;if(e<=0)return;const a=e*2;if(o.player.credits<a){console.warn("Not enough credits to fully refuel.");return}o.player.credits-=a,t.fuel=t.maxFuel}function da(){return m?m.components:[]}function ua(){if(!m)return[];const t=o.ship.components;return m.components.filter(e=>t.includes(e.id))}function ma(t){if(!m)return!1;const e=m.components.find(n=>n.id===t);return e?o.player.credits<e.cost?(console.warn("Not enough credits to buy this component."),!1):o.ship.components.includes(t)?(console.warn("Component already installed."),!1):(o.player.credits-=e.cost,o.ship.components.push(t),ha(e),!0):(console.warn(`Unknown component: ${t}`),!1)}function ha(t){const e=o.ship;switch(t.effectType){case"hull":e.maxHp+=t.value,e.hp+=t.value;break;case"shields":e.maxShields+=t.value,e.shields+=t.value;break;case"fuel":e.maxFuel+=t.value,e.fuel+=t.value;break;case"cargo":e.cargoCapacity+=t.value;break}}window.repairShipAction=()=>{ca(),nav("ship")};window.refuelShipAction=()=>{pa(),nav("ship")};function fa(){const t=o.ship,e=sa(),n=ua(),a=o.combat?.playerCooldowns??[],s=Object.values(t.cargo||{}).reduce((l,c)=>l+c,0),i=e?`<p class="muted">${e.description}</p>`:`<p class="muted">Unknown template (${t.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(l=>`<li>${l.name} (+${l.value} ${l.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Hull</span>
          <span class="stat-value">${t.hp}/${t.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Shields</span>
          <span class="stat-value">${t.shields}/${t.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${t.fuel}/${t.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${s}/${t.cargoCapacity}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ship Status</h1>
          ${i}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${r}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${t.hardpoints.map((l,c)=>{const p=w(t.weapons[c]),u=p?.name||"Empty",d=a[c]??0,h=p?st(p):null,b=h?`
                    <p class="muted">Role: ${h.role} (${h.typeLabel})</p>
                    <p class="muted">Vs Shields: ${h.vsShields} · Vs Hull: ${h.vsHull}</p>
                    ${h.tagNotes.length?`<p class="muted">Traits: ${h.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${c+1} · ${l.size} ${l.type}</p>
                    <p class="value-inline">${u}</p>
                    <p class="muted">${d>0?`${d} turn${d===1?"":"s"} left`:"Ready"}</p>
                    ${b}
                  </div>
                `}).join("")||'<div class="panel-card"><p class="muted">No hardpoints installed.</p></div>'}
          </div>
          <button class="btn btn-primary" onclick="nav('weapon_slots')">Manage Weapons</button>

          <h2 class="panel-title">Basic Services</h2>
          <div class="app-actions">
            <button class="btn btn-primary" onclick="repairShipAction()">Repair (1 cr/pt)</button>
            <button class="btn btn-primary" onclick="refuelShipAction()">Refuel (2 cr/fuel)</button>
            <button class="btn btn-ghost" onclick="nav('main')">Back</button>
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function ga(t={}){const e=typeof t.eventId=="string"?t.eventId:"",n=Wt(e);if(!n)return`
      <div class="screen event">
        <h1>No Event</h1>
        <p>No events available here.</p>
        <div class="screen-actions">
          <button onclick="nav('main')">Back to Main</button>
        </div>
      </div>
    `;if(n.type==="mining")return`
      <div class="screen event">
        <header class="event-header">
          <h1>${n.name}</h1>
          ${n.description?`<p class="event-description">${n.description}</p>`:""}
        </header>
        <p>Secure your mining rig and hope the pirates stay away.</p>
        <div class="screen-actions">
          <button onclick='beginMiningSession(${JSON.stringify(n.beltId??"")}, ${JSON.stringify(n.miningCommodityId??"")})'>Enter Mining Belt</button>
          <button class="ghost" onclick="nav('main')">Decline</button>
        </div>
      </div>
    `;const a=ba(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${va(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
      <div class="screen-actions">
        <button onclick="nav('main')">Back to Main</button>
      </div>
    </div>
  `}function ba(t){return!t||!t.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${t.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${ya(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function va(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function ya(t){return typeof t!="number"?"0%":`${Math.round(t*100)}%`}window.pickChoice=t=>{const e=g.params,n=typeof e.eventId=="string"?e.eventId:"",a=Wt(n);if(!a){nav("main");return}const s=a.choices?.[t];if(s){const i=Re(s);if(i.triggerCombat?.enemyId){P(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(t,e)=>{Ln(o,o.location.systemId,t||void 0,e||void 0),g.go("mining")};window.fireWeapon=(t,e="normal")=>{it("fire",t,e),o.combat&&nav("combat")};window.brace=()=>{it("brace"),o.combat&&nav("combat")};window.flee=()=>{it("flee"),o.combat&&nav("combat")};window.setStance=t=>{vn(t),o.combat&&nav("combat")};function $a(){const t=o.combat;if(!t)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const e=o.ship,n=t.log.map(p=>`<div class="log-line">${p}</div>`).join(""),a=e.hardpoints.map((p,u)=>{const d=e.weapons[u],h=w(d),b=t.playerCooldowns[u]??0,C=!!h&&b===0;return`
        <div class="panel-card">
          <p class="label">Slot ${u+1} · ${p.size.toUpperCase()} ${p.type}</p>
          <p class="value-inline">${h?.name||"Empty"}</p>
          <p class="muted">${b>0?`Cooling (${b})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${C?"":"disabled"} onclick="fireWeapon(${u}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${C?"":"disabled"} onclick="fireWeapon(${u}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),s=tn.map(p=>`
        <tr>
          <td>${p.type}</td>
          <td>${p.shieldMultiplier.toFixed(2)}x</td>
          <td>${p.hullMultiplier.toFixed(2)}x</td>
          <td>${p.description}</td>
        </tr>
      `).join(""),i=hn(),r=i?`<p class="combat-advice ${i.suggestion}">
        ${i.text}
        <span class="advice-confidence">Intel confidence: ${(i.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',c=t.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${t.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn} · Round ${t.round}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Hull</span>
          <span class="stat-value">${e.hp}/${e.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Shields</span>
          <span class="stat-value">${e.shields}/${e.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Enemy Hull</span>
          <span class="stat-value">${t.enemyHp}/${t.enemyMaxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Enemy Shields</span>
          <span class="stat-value">${t.enemyShields}/${t.enemyMaxShields}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Combat: ${t.enemyName}</h1>
          <p class="muted">Current stance: <strong>${t.playerStance}</strong>. ${c}</p>

          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Your Ship</p>
              <p class="value-inline">Fuel ${e.fuel}/${e.maxFuel}</p>
            </div>
            <div class="panel-card">
              <p class="label">Enemy</p>
              <p class="value-inline">${t.enemyName}</p>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Stances</p>
            ${r}
            <div class="app-actions">
              <button class="btn btn-primary" onclick="setStance('assault')">Assault</button>
              <button class="btn btn-primary" onclick="setStance('balanced')">Balanced</button>
              <button class="btn btn-primary" onclick="setStance('evasive')">Evasive</button>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Actions</p>
            <div class="app-actions">
              <button class="btn btn-ghost" onclick="brace()">Brace</button>
              <button class="btn btn-danger" onclick="flee()">Attempt Flee</button>
            </div>
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${a}
          </div>

          <h2 class="panel-title">Damage Guide</h2>
          <div class="panel-card">
            <p><strong>Called Shot</strong>: ${Qe}</p>
            <p><strong>Brace vs Attack</strong>: ${Ze}</p>
            <table class="damage-guide">
              <thead>
                <tr><th>Damage Type</th><th>Shield Effect</th><th>Hull Effect</th><th>Usage Tip</th></tr>
              </thead>
              <tbody>
                ${s}
              </tbody>
            </table>
          </div>

          <h2 class="panel-title">Battle Log</h2>
          <div class="combat-log">
            ${n}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('main')">Retreat</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')">Ship</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('travel')">Travel</button>
      </footer>
    </div>
  `}window.buyShipAction=t=>{ra(t)};window.buyComponentAction=t=>{ma(t)};window.buyWeaponAction=t=>{Oe(t)};function wa(){if(!F(o.location.systemId,"shipyard"))return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Shipyard</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">No Shipyard Here</h1>
            <p>This system does not have certified shipyard facilities.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;const t=oa(),e=da(),n=He(),a=et().map(c=>w(c)?.name).filter(Boolean),s=t.length===0?'<p class="muted">No ships are currently for sale.</p>':t.map(c=>`
        <div class="panel-card">
          <p class="label">${c.roleHint}</p>
          <p class="value-inline"><strong>${c.name}</strong></p>
          <p class="muted">${c.description}</p>
          <p class="muted">Hull: ${c.hull} | Shields: ${c.shields} | Fuel: ${c.fuel} | Cargo: ${c.cargo}</p>
          <p><strong>Cost:</strong> ${c.cost} cr</p>
          <button class="btn btn-primary" onclick="buyShipAction('${c.id}')">Buy & Replace</button>
        </div>
      `).join(""),i=e.length===0?'<p class="muted">No components in stock.</p>':e.map(c=>`
        <div class="panel-card">
          <p class="label">Component</p>
          <p class="value-inline"><strong>${c.name}</strong></p>
          <p class="muted">${c.description}</p>
          <p class="muted">Effect: +${c.value} ${c.effectType}</p>
          <p><strong>Cost:</strong> ${c.cost} cr</p>
          <button class="btn btn-primary" onclick="buyComponentAction('${c.id}')">Buy & Install</button>
        </div>
      `).join(""),r=n.length===0?'<p class="muted">No weapons available.</p>':n.map(c=>{const p=st(c),u=p.tagNotes.length?`Traits: ${p.tagNotes.join(", ")}`:"";return`
        <div class="panel-card">
          <p class="label">${c.type} / ${c.size}</p>
          <p class="value-inline"><strong>${c.name}</strong></p>
          <p class="muted">Damage: ${c.damage} (${c.damageType}) · Acc: ${Math.round(c.accuracy*100)}% · Crit: ${Math.round(c.critChance*100)}% ×${c.critMultiplier}</p>
          <p class="muted">Cooldown: ${c.cooldown} | Energy: ${c.energyCost}</p>
          <p class="muted">Role: ${p.role} (${p.typeLabel}) — Vs Shields: ${p.vsShields}, Vs Hull: ${p.vsHull}</p>
          ${u?`<p class="muted">${u}</p>`:""}
          <p><strong>Price:</strong> ${c.price} cr</p>
          <button class="btn btn-primary" onclick="buyWeaponAction('${c.id}')">Buy Weapon</button>
        </div>
      `}).join(""),l=a.length>0?`<p>${a.join(", ")}</p>`:'<p class="muted">You currently own no weapons.</p>';return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Shipyard</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Credits ${o.player.credits}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ships for Sale</h1>
          <div class="panel-row">${s}</div>

          <h2 class="panel-title">Components & Upgrades</h2>
          <div class="panel-row">${i}</div>

          <h2 class="panel-title">Weapons for Sale</h2>
          <div class="panel-row">${r}</div>

          <h2 class="panel-title">Your Weapon Inventory</h2>
          <div class="panel-card">${l}</div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}window.chooseStarter=t=>{la(t),nt(),g.go("main")};function Ma(){const t=ia();if(t.length===0)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Choose Ship</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Select Your Starter Ship</h1>
            <p>No starter ships defined. Please add some in ships.json.</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Continue</button>
        </nav>
      </div>
    `;const e=t.map(n=>`
      <div class="panel-card">
        <p class="label">${n.roleHint}</p>
        <p class="value-inline"><strong>${n.name}</strong></p>
        <p class="muted">${n.description}</p>
        <p class="muted">Hull ${n.hull} · Shields ${n.shields} · Fuel ${n.fuel} · Cargo ${n.cargo}</p>
        <button class="btn btn-primary" onclick="chooseStarter('${n.id}')">Choose ${n.name}</button>
      </div>
    `).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Starter Hangar</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Select Your Starter Ship</h1>
          <p class="muted">Pick a hull to define your opening playstyle.</p>
          <div class="panel-row">
            ${e}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('main')">Skip</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function ka(){const t=o.ship;if(!t.hardpoints.length)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Weapons</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Weapon Slots</h1>
            <p>Your current ship has no weapon hardpoints.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('ship')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;const e=t.hardpoints.map((n,a)=>{const i=w(t.weapons[a])?.name||"Empty";return`
        <div class="panel-card">
          <p class="label">Slot ${a+1} · ${n.size} ${n.type}</p>
          <p class="value-inline">${i}</p>
          <button class="btn btn-primary" onclick="nav('weapon_select', { slotIndex: ${a} })">
            Equip
          </button>
        </div>
      `}).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Weapon Hardpoints</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Weapon Hardpoints</h1>
          <div class="panel-row">
            ${e}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('ship')">Back</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}window.equipWeaponAction=(t,e)=>{We(t,e)&&nav("weapon_slots")};function Sa(t={}){const e=typeof t.slotIndex=="number"&&t.slotIndex>=0?t.slotIndex:0,n=o.ship.hardpoints[e];if(!n)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Weapons</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Weapon Selection</h1>
            <p>Invalid hardpoint.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('weapon_slots')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;const r=et().map(l=>w(l)).filter(l=>!!l).map(l=>{const c=at(e,l.id),u=w(o.ship.weapons[e])?.id===l.id?"Equipped":"Equip",d=st(l),h=d.tagNotes.length?`<br/>Traits: ${d.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${c?"":"muted"}">
          <p class="label">${l.size} / ${l.type}</p>
          <p class="value-inline"><strong>${l.name}</strong></p>
          <p class="muted">Damage ${l.damage} (${l.damageType}) · Acc ${Math.round(l.accuracy*100)}% · Crit ${Math.round(l.critChance*100)}% (×${l.critMultiplier}) · CD ${l.cooldown}</p>
          <p class="muted">Role: ${d.role} (${d.typeLabel}) · Vs Shields: ${d.vsShields} · Vs Hull: ${d.vsHull}${h}</p>
          <button class="btn btn-primary" ${c?"":"disabled"} onclick="equipWeaponAction(${e}, '${l.id}')">
            ${u}
          </button>
        </div>
      `}).join("")||'<div class="panel-card"><p class="muted">No owned weapons available. Buy or loot weapons to equip.</p></div>';return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Select Weapon</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Weapon Selection</h1>
          <p class="muted">Hardpoint: ${n.size} ${n.type}</p>
          <div class="panel-row">
            ${r}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('weapon_slots')">Back</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}window.leaveMining=()=>{Rn(o),g.go("main")};function ct(t){Bn(o,t)?.pirateEncountered||g.go("mining")}window.mineCareful=()=>ct("careful");window.mineStandard=()=>ct("standard");window.mineOvercharge=()=>ct("overcharge");function Ca(){const t=o.miningSession;if(!t)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Mining</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">No Active Mining Session</h1>
            <p>There is no ongoing mining belt right now.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;if(!t.active){const i=t.lastYield?`Last haul: ${t.lastYield.amount} ${t.lastYield.commodityId} (~${t.lastYield.approxValue} cr)${t.lastYield.rareFind?` + rare ${t.lastYield.rareFind.amount} ${t.lastYield.rareFind.id}`:""}`:"Session ended.";return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Mining</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Mining Session Ended</h1>
            <p>${t.lastMessage||"The belt is no longer stable."}</p>
            <p>${i}</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Return</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `}const e=Ht(o,t.systemId),n=Math.max(0,Math.round(t.stability/Math.max(1,t.maxStability)*100)),a=t.lastYield?`<p>Last haul: ${t.lastYield.amount} ${t.lastYield.commodityId} (~${t.lastYield.approxValue} cr)${t.lastYield.rareFind?` + rare ${t.lastYield.rareFind.amount} ${t.lastYield.rareFind.id}`:""}</p>`:"",s=t.lastMessage?`<p class="muted">${t.lastMessage}</p>`:"";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Mining — ${t.beltName||t.beltId||t.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${o.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Stability</span>
          <span class="stat-value">${n}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Pirate Risk</span>
          <span class="stat-value stat-risk">${(t.currentPirateChance*100).toFixed(0)}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Hold Value</span>
          <span class="stat-value">${Math.round(e)} cr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Mines</span>
          <span class="stat-value">${t.minesTaken}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Mining Ops</h1>
          <p class="muted">Total mined: ${Math.round(t.totalValueMined)} cr</p>
          ${a}
          ${s}
          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Stability</p>
              <p class="value-emphasis">${n}%</p>
            </div>
            <div class="panel-card">
              <p class="label">Pirate Risk</p>
              <p class="value-emphasis warning">${(t.currentPirateChance*100).toFixed(0)}%</p>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Drill Modes</p>
            <div class="app-actions">
              <button class="btn btn-primary" onclick="mineCareful()">Careful</button>
              <button class="btn btn-primary" onclick="mineStandard()">Standard</button>
              <button class="btn btn-danger" onclick="mineOvercharge()">Overcharge</button>
              <button class="btn btn-ghost" onclick="leaveMining()">Leave Belt</button>
            </div>
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function j(){const t=document.getElementById("app");if(!t)return;let e="";switch(g.current){case"main":e=se();break;case"travel":e=On();break;case"market":e=Yn();break;case"contracts":e=ea();break;case"ship":e=fa();break;case"event":e=ga(g.params);break;case"combat":e=$a(g.params);break;case"weapon_slots":e=ka();break;case"weapon_select":e=Sa(g.params);break;case"shipyard":e=wa();break;case"ship_select":e=Ma();break;case"mining":e=Ca();break}const n=`
    <div id="devPanel" class="dev-panel hidden">
      <h2>Developer Tools</h2>
      <button class="btn btn-primary" id="devSpawnPirates">Spawn Pirate Encounter</button>
      <button class="btn btn-primary" id="devTriggerMining">Trigger Mining Event</button>
      <button class="btn btn-primary" id="devAddCredits">+1000 Credits</button>
      <button class="btn btn-primary" id="devFillCargo">Fill Cargo</button>
      <button class="btn btn-primary" id="devGodMode">Toggle God Mode</button>
      <button class="btn btn-ghost" id="devClose">Close</button>
    </div>
  `;t.innerHTML=`${e}${n}`,xa()}let E=!1,St=!1;function xa(){const t=document.getElementById("navDev"),e=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),l=document.getElementById("devGodMode"),c=document.getElementById("navTravel"),p=document.getElementById("navMarket"),u=document.getElementById("navShip"),d=()=>{e&&e.classList.toggle("hidden")};t?.addEventListener("click",d),n?.addEventListener("click",()=>e?.classList.add("hidden")),c?.addEventListener("click",()=>window.nav?.("travel")),p?.addEventListener("click",()=>window.nav?.("market")),u?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{o.player.credits+=1e3,e?.classList.add("hidden"),j()}),r?.addEventListener("click",()=>{const h=o.ship.cargo||{};h.aurite_ore=(h.aurite_ore||0)+20,o.ship.cargo=h,e?.classList.add("hidden"),j()}),l?.addEventListener("click",()=>{E=!E,o.godMode=E,E&&(o.ship.hp=o.ship.maxHp,o.ship.shields=o.ship.maxShields),alert(`God Mode: ${E?"On":"Off"}`)}),St||(document.addEventListener("keydown",h=>{h.key==="`"&&d()}),St=!0)}let m=null;async function Ta(){const[t,e,n,a,s,i,r,l,c]=await Promise.all([fetch("/content/systems.json"),fetch("/content/ships.json"),fetch("/content/components.json"),fetch("/content/commodities.json"),fetch("/content/weapons.json"),fetch("/content/enemies.json"),fetch("/content/events.json"),fetch("/content/loot_tables.json"),fetch("/content/missions.json")]);if(!t.ok)throw new Error(`Failed to load systems.json: ${t.status}`);if(!e.ok)throw new Error(`Failed to load ships.json: ${e.status}`);if(!n.ok)throw new Error(`Failed to load components.json: ${n.status}`);if(!s.ok)throw new Error(`Failed to load weapons.json: ${s.status}`);if(!a.ok)throw new Error(`Failed to load commodities.json: ${a.status}`);if(!i.ok)throw new Error(`Failed to load enemies.json: ${i.status}`);if(!r.ok)throw new Error(`Failed to load events.json: ${r.status}`);if(!l.ok)throw new Error(`Failed to load loot_tables.json: ${l.status}`);if(!c.ok)throw new Error(`Failed to load missions.json: ${c.status}`);const p=await t.json(),u=await e.json(),d=await n.json(),h=await a.json(),b=await s.json(),C=await i.json(),M=await r.json();Be(M);const W=await l.json();ze(W);const I=await c.json();return pe(I),{systems:p,ships:u,components:d,commodities:h,weapons:b,enemies:C,events:M,lootTables:W,missions:I}}async function Ea(){m=await Ta();const t=ee();ne(t);const e=te();if(e){const a=o.ship.hardpoints.length,s=[];for(let i=0;i<a;i++)s.push(e.weapons[i]??null);o.ship.weapons=s,o.inventory.weapons=e.inventory}nt();const n=g.go.bind(g);g.go=(a,s)=>{n(a,s),j()},window.nav=(a,s={})=>{g.go(a,s)},g.current=o.player.hasChosenStarter?"main":"ship_select",j()}function x(t){return m?m.systems.find(e=>e.id===t)??null:null}document.addEventListener("DOMContentLoaded",()=>{Ea()});
