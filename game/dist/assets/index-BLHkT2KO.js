(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Ne=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],jt=Ne,T=jt.find(t=>t.starter)??jt[0],He=T?.hardpoints.length??0,Oe={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Xt(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let i;const Zt="cosmo_weapon_loadout";function We(){if(typeof window>"u"||!window.localStorage)return null;const t=window.localStorage.getItem(Zt);if(!t)return null;try{const e=JSON.parse(t);return{weapons:Array.isArray(e.weapons)?e.weapons:[],inventory:Array.isArray(e.inventory)?e.inventory:[]}}catch{return null}}function ft(){if(typeof window>"u"||!window.localStorage)return;const t={weapons:i.ship.weapons,inventory:i.inventory?.weapons??[]};window.localStorage.setItem(Zt,JSON.stringify(t))}function te(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:T?.id??"none",name:T?.name??"Undefined Hull",hp:T?.hull??0,maxHp:T?.hull??0,shields:T?.shields??0,maxShields:T?.shields??0,fuel:T?.fuel??0,maxFuel:T?.fuel??0,cargoCapacity:T?.cargo??0,cargo:{},modules:[],weapons:T?.hardpoints.map(t=>Oe[`${t.size}:${t.type}`]??null)??Array(He).fill(null),weaponPower:12,evasion:5,maneuverRating:T?.maneuverRating??0,components:[],hardpoints:T?.hardpoints.map(t=>({...t}))??[],passive:T?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},intel:{systems:[]},runStats:Xt(),gameOver:{active:!1,reason:null}}}function ee(t){i=t}const ne="space-dev-tune",j={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:1,enemyDamageMultiplier:1,enemyAccuracyMultiplier:1,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:1,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:100,nonPirateEventWeight:1,showEncounterDebug:0}};let M={...j};function qe(t){return{...j.combat,...t}}function ae(){if(typeof window>"u"||!window.localStorage){M={...j};return}const t=window.localStorage.getItem(ne);if(!t){M={...j};return}try{const e=JSON.parse(t),n={};typeof e.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=e.enemyHpMultiplier),typeof e.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=e.enemyDamageMultiplier),typeof e.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=e.combatRewardMultiplier),typeof e.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=e.pirateEncounterRate);const a=qe({...e.combat,...n});M={...j,...e,combat:a}}catch{M={...j}}}function Ve(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(ne,JSON.stringify(M))}function gt(t){const e=M.progressionSpeedMultiplier??1;return t*e}function x(){return M.combat??j.combat}function ze(){return i.ship.passive?.effects??{}}const se="cosmo_run_high_scores",ie=5;function Ue(){return i?{...i.runStats,commodityVolumes:{...i.runStats.commodityVolumes}}:Xt()}function Ye(t){return Math.round(t.creditsEarnedTotal/10+t.contractsCompleted*50+t.shipsDestroyed*30+t.rareFinds*40+t.systemsVisited*5+t.daysSurvived*3)}function oe(){if(typeof window>"u"||!window.localStorage)return[];const t=window.localStorage.getItem(se);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.slice(0,ie):[]}catch{return[]}}function Ge(t){typeof window>"u"||!window.localStorage||window.localStorage.setItem(se,JSON.stringify(t.slice(0,ie)))}function Je(){return oe()}function Ke(t){const e=oe();e.push(t),e.sort((n,a)=>a.score-n.score),Ge(e)}function U(t){if(!i||t<=0)return;i.runStats.creditsEarnedTotal+=t;const e=i.player.credits;e>i.runStats.highestNetWorth&&(i.runStats.highestNetWorth=e)}function Qe(t,e,n){if(!i)return;i.runStats.tradeProfitTotal+=Math.max(0,n);const a=i.runStats.commodityVolumes;a[t]=(a[t]||0)+e;const s=i.runStats.mostTradedCommodityId;(!s||a[t]>a[s])&&(i.runStats.mostTradedCommodityId=t)}function Xe(t){!i||t<=0||(i.runStats.contractPayoutTotal+=t)}function Ze(){i&&(i.runStats.contractsCompleted+=1)}function tn(t){!i||t<=0||(i.runStats.damageDealtTotal+=t)}function en(t){!i||t<=0||(i.runStats.damageTakenTotal+=t)}function nn(){i&&(i.runStats.fightsSurvived+=1)}function an(){i&&(i.runStats.shipsDestroyed+=1)}function sn(t,e){!i||t<=0||(i.runStats.miningRuns+=1,i.runStats.oreMinedTotal+=t,e&&(i.runStats.rareFinds+=1))}function on(){i&&(i.runStats.jumpsMade+=1,i.runStats.systemsVisited+=1)}function rn(t){i&&(i.runStats.daysSurvived=Math.max(i.runStats.daysSurvived,t))}const y={current:"main",params:{},go(t,e={}){this.current=t,this.params=e}};function A(t){if(!Number.isFinite(t))return String(t);const e=Number(t.toFixed(2));return Number.isInteger(e)?String(e):String(e).replace(/\.?0+$/,"")}function ln(t){return f?f.systems.find(e=>e.id===t)??null:null}function tt(t,e){const n=ln(t);return n?n.tags.includes(e):!1}window.nav=(t,e={})=>{y.go(t,e)};function cn(){const t=i,e=N(t.location.systemId),n=Object.values(t.ship.cargo||{}).reduce((s,o)=>s+o,0),a=t.notifications[t.notifications.length-1];return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${e?.name??t.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${t.time.day}</span>
            <span>Turn ${A(t.time.turn)}</span>
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

      <nav class="app-menu" aria-label="Primary menu">
        <div class="menu-group">
          <span class="menu-group__label">Primary</span>
          <div class="menu-group__actions">
            <button class="btn btn-primary" onclick="nav('travel')">Travel</button>
            <button class="btn btn-primary" onclick="nav('contracts', { source: 'main_menu' })">
              Contracts
            </button>
            <button class="btn btn-primary" onclick="nav('ship')">Ship</button>
          </div>
        </div>
        <div class="menu-group">
          <span class="menu-group__label">System</span>
          <div class="menu-group__actions">
            <button class="btn btn-primary" onclick="nav('market')" id="navMarket">
              Market
            </button>
            ${tt(t.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
          </div>
        </div>
        <div class="menu-group">
          <span class="menu-group__label">Tools</span>
          <div class="menu-group__actions">
            <button class="btn btn-ghost" id="navDev">Dev Tools</button>
          </div>
        </div>
      </nav>
    </div>
  `}function C(){return ze()}function re(){const t=C(),e=Math.max(0,t.incomeMultiplier??1),n=Math.max(0,x().globalIncomeMultiplier??1);return e*n}const dn=-100,un=100;function pn(t,e){const n=i.reputation[t]||0,a=mn(n+e);return i.reputation[t]=a,a}function le(t){for(const[e,n]of Object.entries(t))pn(e,n)}function mn(t){return Math.max(dn,Math.min(un,t))}const rt={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function hn(){return f?f.weapons:[]}function ce(){return i.inventory||(i.inventory={weapons:[]}),i.inventory}function vt(){return[...ce().weapons]}function bt(){if(!f)return;const t=vt();if(!t.length)return;const e=i.ship;e.weapons=e.weapons.map((n,a)=>{if(n)return n;const s=t.filter(r=>yt(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function yt(t,e){const n=i.ship,a=f?.weapons.find(o=>o.id===e);if(!a)return!1;const s=n.hardpoints[t];return s?a.size===s.size&&a.type===s.type:!1}function fn(t,e){return yt(t,e)?(i.ship.weapons[t]=e,ft(),!0):!1}function D(t){return!t||!f?null:f.weapons.find(e=>e.id===t)??null}function gn(t){const e=D(t);return!e||i.player.credits<e.price?!1:(ce().weapons.push(t),i.player.credits-=e.price,ft(),!0)}function de(t,e,n={}){const a=t.tags||[];let s=t.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let o=t.damage;const r=e.shields>0?"shields":"hull",l=rt[t.damageType]?.[r]??1,c=r==="shields"?t.shieldMod:t.armorMod;return o*=c*l,r==="shields"&&a.includes("shield_breaker")&&(o*=1.2),r==="hull"&&a.includes("armor_piercing")&&(o*=1.2),Math.random()<t.critChance&&(o*=t.critMultiplier),o*=n.damageMultiplier??1,Math.max(0,Math.round(o))}const vn={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},bn={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Lt(t){return t>1.1?"Strong":t<.95?"Weak":"Normal"}const Nt={shields:"Shield-breaker",hull:"Hull buster"};function Mt(t){const e=t.damageType,n=rt[e]??rt.kinetic,a=Lt(n.shields),s=Lt(n.hull);let o="Balanced";a==="Strong"&&s==="Weak"?o=Nt.shields:s==="Strong"&&a==="Weak"?o=Nt.hull:a==="Strong"&&s==="Strong"&&(o="Devastating");const r=(t.tags||[]).map(l=>bn[l]).filter(Boolean);return{role:o,vsShields:a,vsHull:s,typeLabel:vn[e]??e,tagNotes:r}}let $t=[];function yn(t){$t=t}function Mn(t){return $t.find(e=>e.id===t)}function $n(){const t=new Set(i.contracts.filter(e=>e.status==="active").map(e=>e.id));return $t.filter(e=>!t.has(e.id))}function F(){return i.contracts.filter(t=>t.status==="active")}function wn(t){const e=t.requirements,n=[];if(e?.travel?.systemId&&n.push(`Travel to ${e.travel.systemId}`),e?.deliver?.commodityId){const a=e.deliver.quantity||0;n.push(`Deliver ${a} ${e.deliver.commodityId}${e.deliver.systemId?` at ${e.deliver.systemId}`:""}`)}return e?.combat?.enemyId&&n.push(`Defeat ${e.combat.enemyId}`),n.join(" • ")||"No special requirements."}function Sn(t){const e=t.requirements,n=t.progress||{},a=[];if(e?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),e?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${e.deliver.quantity||0}`)}return e?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||t.status}function wt(t){const e=Mn(t);if(!e)return{success:!1,reason:"Unknown mission"};if(i.contracts.some(a=>a.id===t&&a.status==="active"))return{success:!1,reason:"Mission already active"};const n={id:e.id,name:e.name,description:e.description,type:e.type,status:"active",sourceFaction:e.factionId,reward:e.reward,requirements:e.requirements,acceptedTurn:i.time.turn,progress:{}};return i.contracts.push(n),{success:!0}}function kn(t,e){if(!t.reward)return;const n=t.reward;if(n.credits){const a=Math.max(.1,Math.min(5,M.contractPayoutMultiplier??1)),s=re(),o=Math.max(0,C().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*o));i.player.credits+=r,U(r),Xe(r),i.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){le(n.rep);const a=Object.entries(n.rep).map(([s,o])=>`${s} ${o>=0?"+":""}${o}`).join(", ");a&&i.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=i.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),i.inventory=a;const s=D(n.weapon)?.name??n.weapon;i.notifications.push(`Rewarded weapon: ${s}.`)}}function xn(){F().forEach(t=>{const e=t.requirements?.failureAfterTurns;if(e&&t.acceptedTurn!=null){const n=Math.max(.1,M.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(e/n));i.time.turn-t.acceptedTurn>=a&&Cn(t.id)}})}function Cn(t){const e=i.contracts.find(n=>n.id===t&&n.status==="active");e&&(e.status="failed",St(`Mission failed: ${e.name}`))}function Tn(t){F().forEach(e=>{const n=e.requirements?.travel;if(e.progress=e.progress||{},n?.systemId===t&&(e.progress.travelCompleted=!0,V(e)),e.requirements?.multiTravel?.length){const s=new Set(e.progress?.multiTravelVisited??[]);s.add(t),e.progress.multiTravelVisited=Array.from(s),V(e)}})}function En(t,e,n){F().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==t||s.systemId&&s.systemId!==n)return;const o=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=o+e,V(a)})}function _n(t){F().forEach(e=>{e.requirements?.combat?.enemyId===t&&(e.progress=e.progress||{},e.progress.combatCompleted=!0,V(e))})}function Dn(t,e){Tn(e);const n=t.ship.cargo||={};let a=0;const s=[];for(const o of F()){const r=o.status,l=o.requirements?.deliver;if(!l||!l.commodityId||(l.systemId??e)!==e||(a+=1,!In(n,l)))continue;l.retain||An(n,l),o.progress=o.progress||{};const p=o.progress.deliveredQuantity||0;o.progress.deliveredQuantity=p+(l.quantity||1),V(o),r!=="completed"&&o.status==="completed"&&s.push(o.name)}if(s.length){const o=`Contracts completed: ${s.join(", ")}`;t.notifications.push(o)}return{checked:a,completed:s}}function In(t,e){const n=Math.max(1,e.quantity??1);return(t[e.commodityId]??0)>=n}function An(t,e){const n=Math.max(1,e.quantity??1),a=t[e.commodityId]??0;t[e.commodityId]=Math.max(0,a-n)}function V(t){if(!t.requirements||t.status!=="active")return;const{travel:e,deliver:n,combat:a}=t.requirements,s=t.progress||{},o=t.requirements?.multiTravel,r=e?!!s.travelCompleted:!0,l=n?s.deliveredQuantity>=(n.quantity||0):!0,c=a?!!s.combatCompleted:!0,p=s.multiTravelVisited??[],d=o?o.every(u=>p.includes(u)):!0;r&&l&&c&&d&&(t.status="completed",kn(t),Ze(),St(`Mission completed: ${t.name}`))}function St(t){i.notifications.push(t)}function Rn(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",St(`Mission failed (expired): ${n.name}`))}const ue="__global__",Bn={buyMultiplier:1,sellMultiplier:.85},Pn={basic:.9,standard:1,strategic:1.2,luxury:1.35};function et(){return i.ship.cargo||(i.ship.cargo={}),i.ship.cargo}function Fn(){const t=et();return Object.values(t).reduce((e,n)=>e+n,0)}function pe(){return f?.commodities??[]}function B(t){return pe().find(n=>n.id===t)??null}function R(){return i.marketState?(i.marketState.temporaryModifiers=i.marketState.temporaryModifiers||{},i.marketState.activeEvents=i.marketState.activeEvents||[],i.marketState.localAdjustments=i.marketState.localAdjustments||{},i.marketState.priceIntel=i.marketState.priceIntel||{},i.marketState.initialDriftSeeded=i.marketState.initialDriftSeeded??!1):i.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},i.marketState}function jn(t){i.intel||(i.intel={systems:[]});const e=i.intel.systems.find(n=>n.systemId===t)??(()=>{const n={systemId:t};return i.intel.systems.push(n),n})();e.lastPriceSeenDay=i.time.day}function Ln(t){const e=R();let n=1;const a=e.temporaryModifiers[ue];a&&(n*=Math.max(0,a.multiplier));const s=e.temporaryModifiers[t];return s&&(n*=Math.max(0,s.multiplier)),n}function Nn(t,e){const n=e>0?e:1,a=t/n;return a>=1.15?"high":a<=.85?"low":"stable"}function Hn(t,e){const n=t.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(e.id),o=n.exports?.includes(e.id);return s&&(a*=1.2),o&&(a*=.85),e.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function kt(t){const e=Math.min(Math.max(t.volatility??.25,0),1),n=Math.min(2,Math.max(0,(M.marketPriceVolatility??100)/100));return Math.min(1,e*n)}function On(t,e){const n=Math.max(1,e.basePrice),a=Pn[e.tier??"standard"]??1,s=t.marketModifiers?.[e.id]??1,o=Hn(t,e),l=1+kt(e)*.08,c=Ln(e.id),p=zn(t.id,e.id),d=fe(t.id,e.id),u=n*a*s*o*l*c*p*d;return Math.max(1,Math.round(u))}function Ht(t,e){return _(t,e).base}function _(t,e){const n=N(t),a=B(e);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=On(n,a),o=a.baseSpread??Bn,r=kt(a),l=C(),c=Math.max(.1,Math.min(3,M.tradeProfitMultiplier??1)),p=re(),d=Math.max(.5,l.buyBonus??1),u=Math.max(0,l.sellBonus??1),m=Math.max(.5,l.marketTax??1),h=Math.max(1,Math.round(s*(o.buyMultiplier??1)*(1+r*.05)/c*d)),g=Math.max(1,Math.round(s*(o.sellMultiplier??.85)*Math.max(.6,1-r*.05)*c*p*u*m)),b=Math.max(h,g,Math.round(s*(1+r*.1))),v=Math.max(1,Math.min(h,g,Math.round(s*Math.max(.65,1-r*.2)))),S=Nn(s,a.basePrice);return jn(t),{base:s,buy:h,sell:g,high:b,low:v,trend:S}}function lt(t,e,n=2){const a=R(),s=t&&t.length?t:ue;a.temporaryModifiers[s]={multiplier:Math.max(0,e),remainingTurns:Math.max(1,Math.floor(n))}}function me(t=1){if(typeof t=="number"){Wn(t);return}qn(t??i)}function Wn(t){if(t<=0)return;const e=R(),n=Object.keys(e.temporaryModifiers);for(const s of n){const o=e.temporaryModifiers[s];o.remainingTurns-=t,o.remainingTurns<=0&&delete e.temporaryModifiers[s]}const a=i.time.turn;e.activeEvents=e.activeEvents.filter(s=>s.expiresAtTurn>a),ve(e,.2*t)}function qn(t){const e=R(),n=f?.systems??[],a=f?.commodities??[],s=t.time.day;Vn(e,n,a);for(const o of n)for(const r of a){const l=fe(o.id,r.id),c=kt(r),p=M.marketDailyTrendStrength??1,d=(1-l)*.1*p,u=(Math.random()-.5)*.1*(.5+c)*p,m=ge(l+d+u);e.localAdjustments[o.id]||(e.localAdjustments[o.id]={}),e.localAdjustments[o.id][r.id]=m}e.activeEvents=e.activeEvents.filter(o=>!(o.expiresAtDay!==void 0&&s>=o.expiresAtDay||o.expiresAtTurn&&o.expiresAtTurn<=t.time.turn)),ve(e,.1)}function Vn(t,e,n){if(!t.initialDriftSeeded){for(const a of e){t.localAdjustments[a.id]||(t.localAdjustments[a.id]={});for(const s of n){const o=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));t.localAdjustments[a.id][s.id]=o}}t.initialDriftSeeded=!0}}function K(t){return et()[t]??0}function zn(t,e){return R().activeEvents.filter(a=>(a.expiresAtDay===void 0||i.time.day<a.expiresAtDay)&&a.expiresAtTurn>i.time.turn&&(!a.systemId||a.systemId===t)&&(!a.commodityId||a.commodityId===e)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function Un(t){R().activeEvents.push(t)}function Yn(t){return R().activeEvents.filter(n=>n.expiresAtTurn>i.time.turn&&(n.expiresAtDay===void 0||i.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===t))}function Gn(t){if(Math.random()>.08||!f?.commodities?.length)return;const n=f.commodities[Math.floor(Math.random()*f.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,o={systemId:t,commodityId:n.id,multiplier:s,expiresAtTurn:i.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};Un(o),i.notifications.push(`Market shift in ${t}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function he(t,e,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,l=Math.min(.15,.03*r),c=R();c.localAdjustments[t]||(c.localAdjustments[t]={});const p=c.localAdjustments[t][e]??1,d=s==="buy"?1+l:1-l,u=ge(p*d);c.localAdjustments[t][e]=u}function fe(t,e){return R().localAdjustments[t]?.[e]??1}function ge(t){return Math.min(2,Math.max(.5,t))}function ve(t,e){for(const[n,a]of Object.entries(t.localAdjustments)){for(const[s,o]of Object.entries(a)){const r=o-1,l=o-r*e;Math.abs(l-1)<.01?delete a[s]:a[s]=l}Object.keys(a).length||delete t.localAdjustments[n]}}function Jn(){const e=N(i.location.systemId)?.neighbors.map(s=>N(s)).filter(s=>!!s)||[];if(!e.length)return{success:!1,message:"No neighboring systems to scan."};const n=100;if(i.player.credits<n)return{success:!1,message:"Not enough credits for intel."};i.player.credits-=n;const a=R();return e.forEach(s=>{const o={};(f?.commodities||[]).forEach(l=>{const c=_(s.id,l.id);o[l.id]={buy:c.buy,sell:c.sell}});const r={turn:i.time.turn,prices:o};a.priceIntel[s.id]=r}),{success:!0,message:"Purchased neighbor intel."}}function be(){return R().priceIntel}function ye(t,e,n){if(n<=0)return!1;const a=_(t,e).buy;if(a<=0)return!1;const s=a*n;if(i.player.credits<s)return!1;const o=i.ship.cargoCapacity;return o<=0?!1:Fn()+n<=o}function Me(t,e,n){return n<=0?!1:K(e)>=n}function $e(t,e,n){if(!ye(t,e,n))return!1;const a=_(t,e).buy,s=a*n;i.player.credits-=s;const o=et();return o[e]=(o[e]||0)+n,he(t,e,n,a,"buy"),!0}function xt(t,e,n){if(!Me(t,e,n))return!1;const a=_(t,e).sell,s=a*n,o=et();return o[e]=Math.max(0,(o[e]||0)-n),i.player.credits+=s,U(s),Qe(e,n,s),he(t,e,n,a,"sell"),En(e,n,t),!0}function we(t,e){const n=t.ship.cargo||{};return Object.entries(n).reduce((a,[s,o])=>{if(!o)return a;const r=_(e,s).sell;return a+r*o},0)}const Ot={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function Se(t,e){if(!i||i.gameOver.active)return;const n=Ue(),a=Ye(n),s={score:a,reason:t,message:e??Ot[t]??Ot.other,location:i.location.systemId,stats:n};i.combat=null,i.miningSession=null,i.gameOver={active:!0,reason:t,message:s.message,summary:s};const o={score:a,reason:t,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};Ke(o),y.go("gameover")}function ke(t=!1){const e=te();ee(e),ae(),y.go(t?"main":"ship_select")}const Ct="space-events-cache";let z=[];function Kn(t){const e=sa();z=aa(t,e),xe(z)}function Tt(t){return z.find(e=>e.id===t)}function Qn(t){if(!t.to)return;const e=Math.max(0,Math.min(1,t.hazardChance??.4));if(Math.random()>e)return;const n=x(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,C().anomalyChance??1),s=Math.min(1,Math.max(0,(M.eventFrequency??50)/100*a));if(Math.random()>s)return;const o=z.map(c=>({ev:c,weight:ra(c,t)})).filter(c=>c.weight>0);if(!o.length)return;const r=o.reduce((c,p)=>c+p.weight,0);let l=Math.random()*r;for(const c of o)if(l-=c.weight,l<=0)return c.ev;return o[0].ev}function Xn(t){const e=t.outcomes;if(!e)return{};const n={},a=C(),s=Math.max(.1,Math.min(5,M.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),o=r=>{i.player.credits+=r,U(r),i.player.credits<0&&(i.player.credits=0)};if(e.giveCredits){const r=e.giveCredits.min??0,l=e.giveCredits.max??r,c=q(r,l),p=Math.round(c*s);o(p),i.notifications.push(`Received ${p} credits.`)}if(typeof e.creditsDelta=="number"){const r=Math.round(e.creditsDelta*s);o(r)}if(typeof e.fuelDelta=="number"){const r=i.ship.maxFuel,l=e.fuelDelta>0?Math.max(0,Math.round(e.fuelDelta*s)):e.fuelDelta;i.ship.fuel=Math.max(0,Math.min(r,i.ship.fuel+l))}if(typeof e.turnDelta=="number"){const r=gt(e.turnDelta);i.time.turn+=r,xn(),me(r)}if(e.cargoGain&&Wt(ia(e.cargoGain,s,1),1),e.cargoLoss&&Wt(e.cargoLoss,-1),e.giveCommodity){const r=q(e.giveCommodity.min,e.giveCommodity.max),l=Math.max(0,Math.round(r*s));ct(e.giveCommodity.id,l),l>0&&i.notifications.push(`Collected ${l} ${e.giveCommodity.id}.`)}if(e.giveWeapon&&(i.inventory.weapons.push(e.giveWeapon),i.notifications.push(`Acquired weapon: ${e.giveWeapon}.`)),e.damageShip){const r=e.damageShip.min??0,l=e.damageShip.max??r,c=q(r,l);if(i.ship.hp=Math.max(0,i.ship.hp-c),i.notifications.push(`Ship took ${c} damage.`),i.ship.hp<=0)return Se("ship_destroyed","Ship destroyed by event."),n}return e.applyStatus&&i.notifications.push(`Status effect applied: ${JSON.stringify(e.applyStatus)}.`),typeof e.spawnMissionId=="string"&&wt(e.spawnMissionId).success&&i.notifications.push(`New mission received: ${e.spawnMissionId}`),typeof e.flag=="string"&&i.notifications.push(`Event flag: ${e.flag}`),e.modifyReputation&&le({[e.modifyReputation.faction]:e.modifyReputation.amount}),e.triggerCombat?.enemyId&&(n.triggerCombat=e.triggerCombat),n}function Zn(t){const e={},n=t.autoResolve;if(!n)return e;const a=Math.max(.1,Math.min(5,M.eventRewardMultiplier??1))*Math.max(.1,C().eventRewardMultiplier??1);if(n.mining){const s=q(n.mining.quantity.min,n.mining.quantity.max),o=Math.max(0,Math.round(s*a));ct(n.mining.commodityId,o),i.notifications.push(`Mining yield: ${o} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=q(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),o=i.ship.maxFuel;i.ship.fuel=Math.max(0,Math.min(o,i.ship.fuel-s)),i.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];ct(s,1),i.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(i.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),lt(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(e.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),e}function ta(t){const e=t.time.day;t.marketState?.activeEvents&&(t.marketState.activeEvents=t.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||e<s.expiresAtDay));const n=Math.min(1,Math.max(0,(M.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(M.marketCrashChance??5)/100));if(t.location?.systemId){const s=f?.commodities?.[Math.floor(Math.random()*(f?.commodities.length||1))];if(s){const o=t.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const l=1.1+Math.random()*.35;lt(s.id,l,r),t.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:Math.max(0,l),expiresAtDay:e+r,expiresAtTurn:t.time.turn+r*2,label:`${s.name} surge`}),t.notifications.push(`Market surge in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const l=Math.max(.5,.85-Math.random()*.25);lt(s.id,l,r),t.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:l,expiresAtDay:e+r,expiresAtTurn:t.time.turn+r*2,label:`${s.name} slip`}),t.notifications.push(`Market slip in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}}}}function ea(){xe(z)}function na(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(Ct)}function aa(t,e){if(!e?.length)return t;const n=new Map;for(const a of t)n.set(a.id,a);for(const a of e)n.set(a.id,a);return Array.from(n.values())}function sa(){if(typeof window>"u"||!window.localStorage)return null;const t=window.localStorage.getItem(Ct);if(!t)return null;try{const e=JSON.parse(t);if(Array.isArray(e))return e}catch{}return null}function xe(t){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Ct,JSON.stringify(t))}function Wt(t,e){for(const[n,a]of Object.entries(t)){const s=i.ship.cargo[n]??0,o=Math.max(0,s+a*e);i.ship.cargo[n]=o}}function ia(t,e,n=1){const a={};for(const[s,o]of Object.entries(t)){if(o<=0){a[s]=o;continue}const r=Math.max(n,Math.round(o*e));a[s]=r}return a}function ct(t,e){const n=i.ship.cargo[t]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(e,s));i.ship.cargo[t]=n+o,o<e&&i.notifications.push(`Cargo full: stored ${o}/${e} ${t}.`)}function q(t,e){const n=Number.isFinite(t)?t:0,a=Number.isFinite(e)?e:n,s=Math.ceil(n),o=Math.floor(Math.max(s,a));return o<=s?s:Math.floor(Math.random()*(o-s+1))+s}function oa(t){const e=new Set;return(t.to?.tags||[]).forEach(n=>e.add(n)),(t.from?.tags||[]).forEach(n=>e.add(n)),e}function qt(t,e){return t.has(e)}function ra(t,e){let n=t.weight??0;const a=oa(e);if(e.to?.eventWeights?.[t.id]&&(n+=e.to.eventWeights[t.id]),t.systemModifiers?.onlyInSystemsWithTags&&!t.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(t.systemModifiers?.weightMultiplier&&(n*=t.systemModifiers.weightMultiplier),t.tags.includes("danger")||t.type==="combat"){const o=Math.max(.1,M.eventDangerMultiplier??1);n*=o}e.routeType==="wild_jump"&&t.tags.includes("combat")&&(n+=.15),e.routeType==="trade_lane"&&t.tags.includes("inspection")&&(n+=.25),e.to?.tags.includes("mining_belt")&&(t.type==="mining"||t.tags.includes("mining"))&&(n+=.35),(e.to?.tags.includes("restricted")||e.to?.faction==="unity_church")&&t.tags.includes("inspection")&&(n+=.2),qt(a,"frontier")&&t.tags.includes("combat")&&(n+=.2),qt(a,"black_market")&&t.tags.includes("smuggling")&&(n+=.25);const s=F().filter(o=>o.requirements?.travel?.systemId===e.to?.id);return s.length&&t.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let dt=[];function la(t){dt=t}function ca(t,e=[]){const n=dt.find(o=>o.id===`${t}_loot`);if(n)return n;const a=new Set(e);return dt.find(o=>(o.enemyTags||[]).some(r=>a.has(r)))??null}function ut(t,e){const n=Math.ceil(t),a=Math.floor(Math.max(n,e));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function da(t){if(!t.length)return null;const e=t.reduce((a,s)=>a+(s.weight||0),0);if(e<=0)return null;let n=Math.random()*e;for(const a of t)if(n-=a.weight||0,n<=0)return a;return t[t.length-1]}function ua(t,e){const n=x(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(t.type){case"credits":{const s=t.min??0,o=t.max??s,r=ut(s,o),l=Math.max(0,Math.round(r*a));i.player.credits+=l,e.creditsEarned+=l,U(l);break}case"commodity":{const s=ut(t.min??1,t.max??t.min??1),o=Math.max(0,Math.round(s*a)),r=pa(t.id||"unknown",o);r>0&&e.commodities.push({id:t.id||"unknown",qty:r});break}case"weapon":{t.id&&(i.inventory.weapons.push(t.id),e.weapons.push(t.id));break}case"component":{t.id&&(i.ship.components.push(t.id),e.components.push(t.id));break}case"mission":{t.id&&wt(t.id).success&&e.missionsGranted.push(t.id);break}}}function pa(t,e){const n=i.ship.cargo[t]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(e,s));return i.ship.cargo[t]=n+o,o}function ma(t,e,n={},a=[]){const s=x(),o=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const l=ca(t,a);if(!l)return null;const c=n.quickKill?1.5:1,p=n.lowDamageTaken?1.25:1,d={enemyId:t,enemyName:e,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},u=(h,g)=>{if(!h?.length||Math.random()>g)return;const b=da(h);b&&ua(b,d)};u(l.common,r),u(Vt(l.uncommon,p),.35*r);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(u(Vt(l.rare,c),m*r),l.guaranteed?.credits){const{min:h,max:g}=l.guaranteed.credits,b=ut(h,g),v=Math.max(0,Math.round(b*o));i.player.credits+=v,d.creditsEarned+=v,U(v)}return d}function Vt(t,e){return!t||e===1?t:t.map(n=>({...n,weight:(n.weight||0)*e}))}const zt={damageMultiplier:1.25,accuracyMultiplier:.8},ha=.6,fa="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",ga="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",G={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},va=Object.keys(G).map(t=>({type:t,shieldMultiplier:G[t].shield,hullMultiplier:G[t].hull,description:G[t].description}));function ba(t){const e=t.ship,n=e.maxHp||e.hp||0,a=e.maxShields||e.shields||0,s=e.cargoCapacity||0,o=ya(e.weapons),r=Ma(e.modules),l=t.player?.credits??0,c=Math.log10(l+1)*5,p=n+a+o+r+s/2+c;return Math.max(1,Math.round(p))}function Ce(t){const e=t/40;return e<0?0:e>1?1:e}function ya(t){return t.reduce((e,n)=>{if(!n)return e;const a=D(n);if(!a)return e;const s=a.damage??0,o=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return e+s*1.5+o*.2+r},0)}function Ma(t){return!t||!t.length?0:t.length*5}const $a=0,wa=100;function Te(t){const e=Math.max($a,Math.min(wa,(i.player.wanted??0)+t));return i.player.wanted=e,e}function Sa(t){if(!f)throw new Error("Content has not been loaded.");const e=f.enemies.find(n=>n.id===t);if(!e)throw new Error(`Unknown enemy template: ${t}`);return e}function ka(t,e){return Math.floor(Math.random()*(e-t+1))+t}function $(t){const e=i.combat;if(!e)return;e.log.push(t);const n=10;e.log.length>n&&(e.log=e.log.slice(e.log.length-n))}function xa(t){const e=t.hull+t.shields,n=t.weaponIds.length*15;return e+n}function H(t){const e=Sa(t),a=i.ship.weapons.map(()=>0),s=e.weaponIds.slice(),o=s.map(()=>0),r=x(),l=r.enemyHpMultiplier??1,c=Math.max(1,Math.round(r.enemyCountMin??1)),p=Math.max(c,Math.round(r.enemyCountMax??c)),d=Math.floor(Math.random()*(p-c+1))+c,u=Math.max(1,d);i.combat={enemyId:e.id,enemyName:e.name,enemyHp:Math.max(1,Math.round(e.hull*l*u)),enemyMaxHp:Math.max(1,Math.round(e.hull*l*u)),enemyShields:Math.max(0,Math.round(e.shields*l*u)),enemyMaxShields:Math.max(0,Math.round(e.shields*l*u)),enemyWeapons:s,enemyCooldowns:o,enemyTags:e.tags||[],enemyCount:u,playerCooldowns:a,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:e.canEscape,totalRounds:1,startingHp:i.ship.hp,round:1,log:[`${e.name} engages you in combat!`],adviceToken:Math.random()},u>1&&i.combat.log.push(`Multiple bogies detected (${u} ships).`),y.go("combat")}function Ca(t){const e=Ta(t);H(e)}function Ta(t){if(!f?.enemies?.length)return"pirate_cutter";const e=ba(i),n=Ce(i.time.day),a=x(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,i.time.day-1),o=Math.max(0,a.difficultyScalePerShipPower??1),r=e*o*s;let l=r*(.6+.2*n),c=r*(.9+.4*n);t&&tt(t,"core")&&(l=e*.4,c=e*.8);const p=f.enemies.map(h=>({id:h.id,power:xa(h)})),d=p.filter(h=>h.power>=l&&h.power<=c);if(d.length)return d[Math.floor(Math.random()*d.length)].id;let u=p[0],m=Math.abs(p[0].power-e);for(const h of p){const g=Math.abs(h.power-e);g<m&&(u=h,m=g)}return u.id}function nt(t,e,n="normal"){const a=i.combat;if(a){switch(a.playerBracing=!1,t){case"fire":if(e===void 0){$("You must choose a weapon to fire.");return}Ee(e,n);break;case"fire_all":Ea(n);break;case"brace":_a();break;case"flee":if(Da())return;break}if(i.combat){if(a.enemyHp<=0){Ba();return}if(Ia(),!!i.combat){if(i.ship.hp<=0){Pa();return}Ra(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Ee(t,e){const n=i.combat;if(!n)return;const a=i.ship;if(t<0||t>=a.weapons.length){$("Invalid weapon slot.");return}const s=a.weapons[t];if(!s){$("That hardpoint is empty.");return}const o=D(s);if(!o){$("Missing weapon data.");return}const r=C(),l=n.round<=1,c={...o,critChance:Math.min(.95,(o.critChance??0)+(r.critBonus??0)+(l?r.critBonus??0:0))},p=n.playerCooldowns[t]??0;if(p>0){$(`${o.name} is still recharging (${p} turn${p===1?"":"s"}).`);return}const d={shields:n.enemyShields,hp:n.enemyHp},u=e==="called_shot"?zt.damageMultiplier:1,m=e==="called_shot"?zt.accuracyMultiplier:1,h=ja(n.playerStance),g=de(c,d,{accuracyMultiplier:m,damageMultiplier:u*h*(r.playerDamageBonus??1)});if(g<=0){const w=e==="called_shot"?"called shot goes wide":"misses";$(`You fire ${o.name}, but it ${w}.`),n.playerCooldowns[t]=o.cooldown;return}tn(g);let b=g;if(n.enemyShields>0){const w=Math.min(n.enemyShields,b);n.enemyShields-=w,b-=w}b>0&&(n.enemyHp=Math.max(0,n.enemyHp-b));const v=d.shields>0?"shields":"hull",S=e==="called_shot"?"called shot":"normal shot";$(`You strike the ${n.enemyName}'s ${v} with ${o.name} (${S}) for ${g} damage.`),g>0&&o.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),$(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[t]=o.cooldown}function Ea(t){const e=i.combat;if(!e)return;const a=i.ship.weapons.map((s,o)=>({id:s,idx:o})).filter(({id:s,idx:o})=>!!s&&(e.playerCooldowns[o]??0)<=0).map(s=>s.idx);if(!a.length){$("No weapons are ready to fire.");return}for(const s of a){if(!i.combat||i.combat.enemyHp<=0)break;Ee(s,t)}}function _a(){const t=i.combat;t&&(t.playerBracing=!0,$("You brace for impact, diverting power to shields and hull integrity."))}function Da(){const t=i.combat;if(!t)return!1;if(!t.canEscape)return $("The enemy objectives lock you in place. Flee attempt denied."),!1;const e=.4,n=t.playerStance==="assault"?-.1:t.playerStance==="evasive"?.15:0,a=(i.ship.maneuverRating||0)+(t.playerStatus.maneuverBonus||0),o=Q((a-40)*.01,-.15,.15),r=x(),l=C(),c=(r.fleeSuccessBonus??0)/100+(l.fleeBonus??0),p=Q(e+n+o+c,.05,.95);return Math.random()<=p?($(`You punch the thrusters and break free! (Flee chance ${(p*100).toFixed(0)}%)`),i.combat=null,y.go("main"),!0):($(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(p*100).toFixed(0)}%)`),!1)}function Ia(){const t=i.combat;if(!t)return;if(t.enemyStatus.weaponJammedTurns>0){t.enemyStatus.weaponJammedTurns-=1,$("Enemy weapons are jammed this round!");return}const e=[];if(t.enemyWeapons.forEach((m,h)=>{const g=t.enemyCooldowns[h]??0;m&&g<=0&&e.push(h)}),e.length===0){$(`The ${t.enemyName} reloads while you advance.`);return}const n=e[ka(0,e.length-1)],a=t.enemyWeapons[n],s=D(a);if(!s){$(`The ${t.enemyName} fumbles its weapon.`);return}const o={shields:i.ship.shields,hp:i.ship.hp},r=Math.min(.3,Math.max(0,t.playerStatus.maneuverBonus||0)*.01),l=x(),c=C(),p=t.round<=1;let d=de(s,o,{accuracyMultiplier:Math.max(0,(1-r)*(l.enemyAccuracyMultiplier??1)*Math.max(0,1-(c.dodgeBonus??0))*(p?Math.max(0,1-(c.dodgeBonus??0)):1))});if(d=Math.max(0,Math.round(d*(l.enemyDamageMultiplier??1))),t.enemyCount&&t.enemyCount>1&&(d=Math.max(0,Math.round(d*t.enemyCount))),d<=0){$(`The ${t.enemyName} fires ${s.name}, but misses.`),t.enemyCooldowns[n]=s.cooldown;return}t.playerBracing&&(d=Math.round(d*ha)),d=Math.max(0,Math.round(d*La(t.playerStance))),d=Math.max(0,Math.round(d*(l.playerDamageTakenMultiplier??1)*Math.max(.1,c.damageTakenMultiplier??1)*(p?Math.max(.1,c.damageTakenMultiplier??1):1)));let u=d;if(t.playerStatus.shieldBoost>0){const m=Math.min(t.playerStatus.shieldBoost,u);t.playerStatus.shieldBoost-=m,u-=m}if(i.ship.shields>0){const m=Math.min(i.ship.shields,u);i.ship.shields-=m,u-=m}u>0&&(i.ship.hp=Math.max(0,i.ship.hp-u)),$(`The ${t.enemyName} hits you with ${s.name} for ${d} damage.`),en(d),t.enemyCooldowns[n]=s.cooldown}function Aa(){const t=i.combat;if(!t)return null;const e=t.enemyCooldowns.length>0?t.enemyCooldowns.map(l=>l??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...e),a=[];if(n<=1){const l=Q(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:l})}if(t.enemyShields<=0){const c=t.playerCooldowns.filter(d=>d<=0).length/Math.max(1,i.ship.weapons.length),p=Q(.6+c*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:p})}i.ship.hp/i.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((t.adviceToken??Math.random())+t.round*.13)%1,o=Math.floor(s*a.length),r=a[o];return{...r,confidence:r.confidence}}function Ra(){const t=i.combat;t&&(t.playerCooldowns=t.playerCooldowns.map(e=>e>0?e-1:0),t.enemyCooldowns=t.enemyCooldowns.map(e=>e>0?e-1:0),t.playerStatus.maneuverTurns>0&&(t.playerStatus.maneuverTurns-=1,t.playerStatus.maneuverTurns<=0&&(t.playerStatus.maneuverBonus=0)),t.playerStatus.shieldTurns>0&&(t.playerStatus.shieldTurns-=1,t.playerStatus.shieldTurns<=0&&(t.playerStatus.shieldBoost=0)))}function Ba(){const t=i.combat;if(!t)return;$(`The ${t.enemyName} explodes under your punishing fire. Victory is yours.`);const e=Math.max(0,t.startingHp-i.ship.hp),n=t.totalRounds<=3,a=e<=5,s=ma(t.enemyId,t.enemyName,{quickKill:n,lowDamageTaken:a},t.enemyTags||[]);if(s){i.lastBattleResult=s;const o=[];s.creditsEarned&&o.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&o.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&o.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&o.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&o.push(`Missions: ${s.missionsGranted.join(", ")}`),$(`Loot recovered — ${o.join(" | ")||"nothing notable."}`),n&&$("Because you won quickly, salvage yields are richer."),a&&$("Minimal hull damage preserved more intact cargo.")}else $("No notable loot recovered.");if(nn(),an(),_n(t.enemyId),t.enemyTags?.some(o=>/pirate|raider/i.test(o))||t.enemyId.includes("pirate")||t.enemyId.includes("raider")){const o=x().repGainMultiplier??1;Te(Math.round(3*o))}i.combat=null,y.go("main")}function Pa(){$("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),i.ship.hp=0,i.ship.shields=0,i.combat=null,i.notifications.push("Critical failure — hull integrity dropped to zero."),Se("ship_destroyed","Ship destroyed in combat.")}function Fa(t){const e=i.combat;e&&(e.playerStance=t,$(`Stance changed to ${t.charAt(0).toUpperCase()+t.slice(1)}.`))}function ja(t){switch(t){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function La(t){switch(t){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function Q(t,e,n){return Math.max(e,Math.min(n,t))}function Na(t,e,n){return Math.max(e,Math.min(n,t))}function Et(t){const{systemId:e,state:n,sessionFactor:a}=t,s=f?.systems.find(w=>w.id===e),o=s?.security??"medium",r=x(),l=C();let c;switch(o){case"high":c=.02;break;case"low":c=.12;break;default:c=.06;break}s?.tags.includes("mining_belt")&&(c+=.02),s?.marketProfile?.blackMarket&&(c+=.03);const p=we(n,e),d=Math.min(.15,p/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),u=Ha(n,e),m=a*.03,h=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),g=Math.max(0,Math.min(1,(M.pirateEncounterRate??0)/100)),b=Math.max(0,(r.encounterChancePerJump??100)/100),v=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,l.pirateDetectionMultiplier??1);let S=(c+d+m+u+h+g)*v*b;return Oa(S,n,e)}function Ha(t,e){const n=t.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,o=0;for(const[c,p]of a){if(!p)continue;const d=_(e,c),u=B(c)?.basePrice??d.sell;if(u<=0)continue;const m=(d.sell-u)/u;s+=m*p,o+=p}if(o<=0)return 0;const r=s/o;return Na(r*.2,0,.15)}function Oa(t,e,n){const a=Ce(e.time.day),s=.4,r=s+(.75-s)*a;let l=t;return tt(n,"core")?(l>.25&&(l=.25),l<.01&&(l=.01),l):(l>r&&(l=r),l<.01&&(l=.01),l)}function Wa(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",t.notifications.push(`Contract failed (expired): ${n.name}`))}function qa(t,e){Va(t,e).lastRiskSeenDay=t.time.day}function Va(t,e){t.intel||(t.intel={systems:[]});const n=t.intel.systems.find(s=>s.systemId===e);if(n)return n;const a={systemId:e};return t.intel.systems.push(a),a}const za=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],Ua=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]}],Ya={belts:za,tables:Ua},Ga="pirate_cutter",pt=Ya,_e={careful:{yieldMultiplier:.8,rareMod:.5,lossKey:"carefulLoss"},standard:{yieldMultiplier:1,rareMod:1,lossKey:"standardLoss"},overcharge:{yieldMultiplier:1.3,rareMod:1.5,lossKey:"overchargeLoss"}};function Ut(t,e,n){const a=t.ship.cargo||{},s=Object.values(a).reduce((l,c)=>l+c,0),o=Math.max(0,t.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,o));return r>0&&(a[e]=(a[e]??0)+r,t.ship.cargo=a),t.notifications||(t.notifications=[]),r<n&&t.notifications.push(`Cargo constrained: stored ${r}/${n} ${e}.`),r}function X(t,e){const n=Math.ceil(t),a=Math.floor(e);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function De(t,e){const n=e?pt.belts.find(s=>s.id===e):null;if(n)return n;const a=pt.belts.find(s=>s.systemId===t);return a||{id:"default_belt",name:"Unmapped Belt",systemId:t,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function Yt(t){return t?pt.tables.find(e=>e.id===t)??null:null}function Gt(t){if(!t||!t.entries.length)return null;const e=t.entries.reduce((r,l)=>r+(l.weight||0),0);if(e<=0)return null;let n=Math.random()*e,a=null;for(const r of t.entries)if(n-=r.weight||0,n<=0){a=r;break}const s=a??t.entries[t.entries.length-1],o=X(s.min,s.max);return{id:s.id,amount:o}}function Ja(t,e,n){const a=e.stability[_e[n].lossKey],s=X(a.min,a.max);t.stability=Math.max(0,t.stability-s),t.lastMessage=`Stability dropped by ${s}%.`}function Ie(t,e,n,a){const s=De(e,n),o=Ae(t,s.id);if(o.depletedUntilDay!==void 0&&t.time.day<o.depletedUntilDay){t.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`);return}const r=Et({systemId:e,state:t,sessionFactor:0});t.miningSession={active:!0,systemId:e,beltId:s.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:r,stability:s.stability.start,maxStability:s.stability.start,beltName:s.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0}}function Ka(t,e="standard"){const n=t.miningSession;if(!n||!n.active)return null;const a=De(n.systemId,n.beltId),s=Yt(a.commonTableId),o=Yt(a.rareTableId),r=_e[e],l=Gt(s),c=l?.id??n.resourceId??"aurite_ore",p=l?.amount??X(1,3),d=C(),u=(M.miningYieldMultiplier??1)*(d.miningYield??1),m=Math.max(1,Math.round(p*r.yieldMultiplier*u)),h=Ut(t,c,m),b=Math.max(1,Ht(n.systemId,c))*h;n.minesTaken+=1,n.totalValueMined+=b,Ja(n,a,e);const S=(1-n.stability/Math.max(1,n.maxStability))*.5,w=a.baseRareChance,I=Math.min(1,Math.max(0,(M.rareMineralChance??0)/100))+Math.max(0,(d.rareFindChance??0)-1),O=Math.min(1,w*r.rareMod+S+I);let E=null,it=0;if(o&&Math.random()<=O){const P=Gt(o);if(P){const Y=Ut(t,P.id,P.amount);E={id:P.id,amount:Y},it=Math.max(1,Ht(n.systemId,P.id))*Y,n.totalValueMined+=it}}const ot=Et({systemId:n.systemId,state:t,sessionFactor:n.minesTaken});n.currentPirateChance=ot;const Pt=Math.random()<=ot;Pt&&(n.active=!1,n.lastMessage="Pirates detected! Breaking off the dig.",H(Ga));const Ft=n.stability<=0;if(Ft){const P=X(2,6);t.ship.hp=Math.max(0,t.ship.hp-P),n.active=!1,n.lastMessage=`Vein collapse! Hull took ${P} damage.`;const Y=Ae(t,a.id);Y.depletedUntilDay=t.time.day+2}else n.lastMessage=`Mined ${h} ${c}${E?`; rare find: ${E.amount} ${E.id}`:""}.`;t.notifications||(t.notifications=[]),t.notifications.push(`Mining haul: ${h} ${c} (~${Math.round(b)} cr).`),E&&t.notifications.push(`Rare find: ${E.amount} ${E.id}.`),n.lastYield={commodityId:c,amount:h,approxValue:Math.round(b+it),rareFind:E};const Le=Math.max(1,Math.round((M.miningDuration??5)*Math.max(.1,d.miningSpeed??1)));return t.time.turn+=gt(Le),sn(h+(E?.amount||0),!!E),{minedCommodityId:c,minedAmount:h,pirateEncountered:Pt,pirateChance:ot,rareFound:E,stability:n.stability,collapsed:Ft}}function Qa(t){const e=t.time.day;for(const n of t.miningBelts)n.depletedUntilDay!==void 0&&e>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,t.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Ae(t,e){t.miningBelts||(t.miningBelts=[]);const n=t.miningBelts.find(s=>s.beltId===e);if(n)return n;const a={beltId:e};return t.miningBelts.push(a),a}function Xa(t){t.miningSession=null}function Za(t){t.time.day+=1,rn(t.time.day),me(t),ta(t),Rn(t),Wa(t),Qa(t),t.notifications.push(`Day ${t.time.day}: Market conditions shift across the sector.`),t.notifications.push(`Day ${t.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=t=>{is(t)};function at(t){return f?f.systems.find(e=>e.id===t)??null:null}let _t=0,Jt=1;function ts(t){t!==Jt&&(Jt=t,_t=0)}function Dt(t){return t<=0?!1:_t<t}function It(){_t+=1}function L(t){x().showEncounterDebug&&i.notifications.push(`Encounter debug: ${t}`)}function st(){return at(i.location.systemId)}function es(){const t=st();return t?t.neighbors.map(e=>at(e)).filter(e=>e!==null):[]}function Re(t,e){const n=C(),a=e.tags.includes("trade_lane")||e.tags.includes("checkpoint")||t.tags.includes("trade_lane")||t.tags.includes("checkpoint"),s=e.tags.includes("frontier")||e.tags.includes("mining_belt")||e.tags.includes("anomaly")||t.tags.includes("frontier")||t.tags.includes("mining_belt");let o=a?1:2;(e.tags.includes("mining_belt")||e.tags.includes("frontier"))&&(o+=1),e.tags.includes("anomaly")&&(o+=1),o=Math.min(3,Math.max(1,o));let r;switch(e.security){case"high":r=.25;break;case"medium":r=.4;break;default:r=.6;break}a&&(r*=.7),s&&(r=Math.min(1,r+.15)),e.tags.includes("restricted")&&(r-=.05),r=Math.min(.95,Math.max(.1,r));const l=r;return r=Math.max(0,r-Math.max(0,n.hazardDetectionBonus??0)),{travelTime:o,fuelCost:Math.max(1,Math.round(o*Math.max(.1,n.fuelCostMultiplier??1))),hazardChance:r,hazardMitigation:Math.max(0,l-r),routeType:a?"trade_lane":s?"wild_jump":"standard"}}function mt(t,e,n){return Math.max(e,Math.min(n,t))}function Be(t){const e=i.ship.cargo||{};let n=0,a=0,s=0;for(const[r,l]of Object.entries(e)){if(!l)continue;const c=B(r);if(!c||c.legalStatus!=="illegal"&&c.legalStatus!=="restricted")continue;const p=_(t.id,r);s+=p.sell*l,c.legalStatus==="illegal"?n+=l:a+=l}const o=n+a;return o<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:o,estimatedValue:s}}function ns(t,e,n,a=C()){let s=e.security==="high"?.35:e.security==="low"?.15:.25;e.marketProfile?.blackMarket&&(s*=.65),e.tags.includes("restricted")&&(s+=.12),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const o=1+Math.min(1.5,t.illegalUnits*.1+t.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),l=Math.max(.5,a.illegalTolerance??1);return mt(s*o*r/l,0,.95)}function as(t,e){const n=Be(t);if(!n)return!1;const a=C(),s=ns(n,t,e.routeType,a);if(Math.random()>s)return!1;const o=i.ship.cargo||{};let r=0;for(const[u,m]of Object.entries(o)){if(!m)continue;const h=B(u);h&&(h.legalStatus!=="illegal"&&h.legalStatus!=="restricted"||(r+=m,o[u]=0))}i.ship.cargo=o;const l=Math.max(25,Math.round(n.estimatedValue*.35)),c=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,p=l+c;i.player.credits=Math.max(0,i.player.credits-p);const d=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25));return Te(d),i.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${p} credits, wanted +${d}.`),!0}function ss(t,e,n,a){const s=mt((t.hazardChance+(t.hazardMitigation??0))*n*a,0,.95),o=mt(e,0,.95),r=Math.max(0,Math.round((s-o)*100));r>0&&i.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(o*100).toFixed(0)}%).`)}function Kt(t){const e=st();if(!e)return null;const n=at(t);return n?Re(e,n):null}function is(t){const e=st();if(!f||!e)return;if(!e.neighbors.includes(t)){console.warn(`System ${t} is not a neighbor of ${e.id}`);return}const n=at(t);if(!n)return;const a=Re(e,n),s=Math.max(0,M.fuelCostMultiplier??1),o=Math.max(0,Math.round(a.fuelCost*s)),r=Math.max(0,Math.min(3,(M.travelRiskScaling??100)/100)),l=x(),c=Math.max(0,l.globalDangerMultiplier??1),p=Math.min(.95,Math.max(0,a.hazardChance*r*c)),d={...a,fuelCost:o,hazardChance:p};if(i.ship.fuel<d.fuelCost){console.warn("Not enough fuel to travel.");return}i.ship.fuel-=d.fuelCost,i.location.systemId=n.id,i.location.docked=!0;const u=gt(a.travelTime);i.time.turn+=u,Gn(n.id),Za(i),ts(i.time.day),qa(i,n.id),on();const m=Dn(i,n.id);m.completed.length&&console.log(`Arrived at ${n.id}: checked ${m.checked} contracts, completed ${m.completed.join(", ")}.`);const h=Number.isInteger(u)?u.toFixed(0):u.toFixed(2),g=Math.abs(u-1)<.01?"":"s",b=`Arrived at ${n.name} after a ${d.routeType.replace("_"," ")} (${h} turn${g}).`;ss(a,d.hazardChance,r,c),as(n,d)&&L("Contraband inspection triggered on arrival."),!rs(n)&&(ls(n)||os(e,n,d,b)||y.go("main",{message:b}))}function os(t,e,n,a){const s=x(),o=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:t,to:e,hazardChance:Math.min(1,n.hazardChance*o),routeType:n.routeType},l=us(e)??Qn(r);return l?(L(`Travel event triggered: ${l.name||l.id||"unknown"}`),l.type==="mining"?(L(`Mining event surfaced: ${l.id}`),y.go("event",{eventId:l.id}),!0):!l.choices||l.choices.length===0?(L(`Auto-resolving event: ${l.name||l.id||"unknown"}`),cs(l,a)):(y.go("event",{eventId:l.id}),!0)):(y.go("main",{message:`${a} — Uneventful transit.`}),!0)}function rs(t){const e=x(),n=Math.max(0,e.maxEncountersPerDay??0);if(!Dt(n))return!1;const a=Et({systemId:t.id,state:i,sessionFactor:1});if(Math.random()<=a){It();const s=`Pirates intercept you near ${t.name}!`;return i.notifications.push(s),L(`Pirate encounter triggered near ${t.name} (chance ${a.toFixed(3)})`),Ca(t.id),!0}return!1}function ls(t){const e=x(),n=Math.max(0,e.maxEncountersPerDay??0);if(!Dt(n))return!1;const a=Math.max(0,Math.min(1,(e.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(e.encounterChancePerJump??100)/100),o=t.security==="high"?1.15:t.security==="low"?.65:1,r=C(),l=Be(t),c=l?1+Math.min(1.2,l.totalUnits*.02):1,p=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),d=Math.min(1,a*s*o*c*p);if(Math.random()<=d){It();const u=`Patrol intercepts you near ${t.name}!`;return i.notifications.push(u),L(`Patrol encounter triggered near ${t.name} (chance ${d.toFixed(3)})`),H("navy_interceptor"),!0}return!1}function cs(t,e){const n=Zn(t);if(n.triggerCombat?.enemyId){const a=x(),s=Math.max(0,a.maxEncountersPerDay??0);if(!Dt(s))return y.go("main",{message:`${e} — Encounter skipped (cap reached).`}),!0;It();const o=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return L(o),H(n.triggerCombat.enemyId),!0}return y.go("main",{message:`${e} — ${t.name||"Event"} resolved automatically.`}),!0}const ds={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function us(t){const e=ps(t);return e?Tt(e)??null:null}function ps(t){const e=[],n=new Set(t.tags||[]),a=s=>{e.includes(s)||e.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(ds[t.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||t.faction==="unity_church")&&a("unity_checkpoint"),e.length?e[Math.floor(Math.random()*e.length)]:null}function ms(){const t=st(),e=es(),n=Object.values(i.ship.cargo||{}).reduce((r,l)=>r+l,0),a=e.map(r=>Kt(r.id)?.hazardChance??0).reduce((r,l)=>Math.max(r,l),0),s=Math.round((a||0)*100);if(!t)return`
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
    `;const o=e.length===0?'<div class="panel-card"><p class="label">Connections</p><p class="value-inline">No nearby systems detected.</p></div>':e.map(r=>{const l=Kt(r.id),c=hs(r.security),p=fs(r),d=l?gs(l.hazardChance):"Unknown",u=l?`${l.fuelCost} fuel`:"Fuel: ?",m=l?`${l.travelTime} turn${l.travelTime===1?"":"s"}`:"Time: ?";return`
              <div class="panel-card">
                <p class="label">${c}${p.length?` · ${p.join(", ")}`:""}</p>
                <p class="value-inline"><strong>${r.name}</strong></p>
                <p class="muted">${u} • ${m} • Risk: ${d}</p>
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
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${i.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${i.ship.fuel}/${i.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${n}/${i.ship.cargoCapacity}</span>
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
            ${o}
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
  `}function hs(t){switch(t){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${t||"Unknown"} sec`}}function fs(t){const e=[];return t.tags.includes("frontier")&&e.push("▲ Frontier"),t.tags.includes("mining_belt")&&e.push("⛏ Mining"),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&e.push("◆ Trade hub"),(t.tags.includes("restricted")||t.faction==="unity_church")&&e.push("✝ Unity"),e}function gs(t){return t<.35?"Safe":t<.65?"Moderate":"Hazardous"}const vs={high:"^",low:"v",stable:"-"};function bs(){const t=N(i.location.systemId);if(!t)return`
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
    `;const e=pe();if(!e.length)return`
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
    `;const n=Object.values(i.ship.cargo||{}).reduce((d,u)=>d+u,0),a=Object.entries(i.ship.cargo||{}).filter(([,d])=>d>0).sort((d,u)=>u[1]-d[1]).slice(0,5),s=new Map;F().filter(d=>d.status==="active").forEach(d=>{const u=d.requirements?.deliver;if(!u?.commodityId)return;const m=s.get(u.commodityId)??{needed:0,deliverable:!1},h=K(u.commodityId)>=(u.quantity||0),g=!u.systemId||u.systemId===i.location.systemId;s.set(u.commodityId,{needed:m.needed+(u.quantity||0),deliverable:m.deliverable||g&&h})});const o=e.map(d=>{const u=_(t.id,d.id),m=Ss(d.tradeTags?.length?d.tradeTags:d.tags),h=K(d.id),g=ks(d,h),b=Pe(u.buy,n,d.id);return{commodity:d,quote:u,tags:m,cargoQty:h,metaLine:g,maxBuyable:b,profit:u.sell-u.buy}}),r=o.reduce((d,u)=>u.profit>d.value?{id:u.commodity.id,value:u.profit}:d,{id:o[0]?.commodity.id??"",value:Number.NEGATIVE_INFINITY}).id,l=o.map(({commodity:d,quote:u,tags:m,cargoQty:h,metaLine:g,maxBuyable:b})=>{const v=ye(t.id,d.id,1)?"":" disabled",S=Me(t.id,d.id,1)?"":" disabled",w=s.get(d.id),I=[];d.id===r&&I.push("market-card--highlight"),w&&I.push(w.deliverable?"market-card--contract-ready":"market-card--contract-target");const O=I.length?` ${I.join(" ")}`:"",E=w?`<span class="contract-pill${w.deliverable?" ready":""}">${w.deliverable?"Deliver now":"Needed"}</span>`:"";return`
        <article class="market-card${O}">
          <div class="market-card__header">
            <strong>${d.name}</strong>
            <div>
              <span class="muted">${m||"Local goods"}</span>
              ${E}
            </div>
          </div>
          <div class="market-card__prices">
            <span>BUY: ${u.buy} cr</span>
            <span>SELL: ${u.sell} cr</span>
            <span class="market-card__trend">${vs[u.trend]} ${u.trend}</span>
          </div>
          <div class="market-card__meta">
            <span>Held ${h}</span>
            <span>${g}</span>
          </div>
          <div class="market-card__actions app-actions">
            <button class="btn btn-primary"${v} onclick="buyCommodityAction('${d.id}')">Buy 1</button>
            <button class="btn btn-primary"${v||b<=1?" disabled":""} onclick="buyAllCommodityAction('${d.id}', ${u.buy})">Buy Max (${b})</button>
            <button class="btn btn-ghost"${S} onclick="sellCommodityAction('${d.id}')">Sell 1</button>
            <button class="btn btn-ghost"${S||h<=1?" disabled":""} onclick="sellAllCommodityAction('${d.id}')">Sell All (${h})</button>
          </div>
          ${d.id===r?'<span class="market-card__badge">Top Profit</span>':""}
        </article>
      `}).join(""),c=n>0,p=`
    <div class="panel-card market-summary-card">
      <p class="label">Market Overview</p>
      <div class="market-summary__rows">
        <div>
          <span>System</span>
          <strong>${t.name}</strong>
        </div>
        <div>
          <span>Day</span>
          <strong>${i.time.day}</strong>
        </div>
        <div>
          <span>Turn</span>
          <strong>${A(i.time.turn)}</strong>
        </div>
        <div>
          <span>Credits</span>
          <strong>${i.player.credits}</strong>
        </div>
        <div>
          <span>Fuel</span>
          <strong>${i.ship.fuel}/${i.ship.maxFuel}</strong>
        </div>
        <div>
          <span>Cargo</span>
          <strong>${n}/${i.ship.cargoCapacity}</strong>
        </div>
        <div>
          <span>Wanted</span>
          <strong>${i.player.wanted}</strong>
        </div>
      </div>
      <p id="market-message" class="muted market-summary__message">
        Credits: ${i.player.credits} | Cargo: ${ys()}
      </p>
      <div class="market-summary__cargo">
        ${a.length?a.map(([d,u])=>{const m=B(d),h=m?.mass??0,g=h?` (Mass ${Math.round(h*u)})`:"";return`<span>${u} × ${m?.name||d}${g}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${c?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Market · ${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${p}
            ${Ms(t.id)}
            ${$s(t)}
          </aside>
          <div class="market-grid">
            ${l}
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
  `}function ys(){const t=i.ship.cargo||{};return`${Object.values(t).reduce((n,a)=>n+a,0)}/${i.ship.cargoCapacity}`}function Ms(t){const e=Yn(t);return e.length?`
    <div class="panel-card market-events-card">
      <p class="label">Market Events</p>
      <div class="market-event__list">
        ${e.map(a=>`
      <div class="market-event">
        <p class="value-inline">${a.label||`${a.commodityId||"local goods"} x${a.multiplier}`}</p>
        <p class="muted">Expires in ${Math.max(0,(a.expiresAtTurn??0)-i.time.turn)} turns</p>
      </div>
    `).join("")}
      </div>
    </div>
  `:`
      <div class="panel-card market-events-card">
        <p class="label">Market Events</p>
        <p class="muted">No active market events.</p>
      </div>
    `}function $s(t){const e=be();return`
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (100 cr). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel</button>
      </div>
      ${(t?.neighbors.map(s=>N(s)).filter(s=>!!s&&e[s.id])||[]).map(s=>{const o=ws(t?.id,s.id),r=i.time.turn-(e[s.id]?.turn??i.time.turn),l=o.over?`${o.over.id} overpriced (+${Math.round(o.over.delta*100)}%)`:"no strong overpay",c=o.under?`${o.under.id} underpriced (${Math.round(o.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${s.name} (age ${r}t): Sell -> ${l} | Buy -> ${c}</p>`}).join("")||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function ws(t,e){if(!t)return{over:null,under:null};const a=be()[e];if(!a)return{over:null,under:null};let s=null,o=null;const r=Math.max(0,i.time.turn-a.turn),l=Math.max(.5,1-r*.05);for(const[c,p]of Object.entries(a.prices)){const d=_(t,c);if(d.sell>0&&p.buy>d.sell){const u=(p.buy-d.sell)/d.sell*l;(!s||u>s.delta)&&(s={id:c,delta:u})}if(d.buy>0&&p.sell<d.buy){const u=(d.buy-p.sell)/d.buy*l;(!o||u>o.delta)&&(o={id:c,delta:u})}}return{over:s,under:o}}function Pe(t,e,n){if(t<=0)return 0;const a=Math.floor(i.player.credits/t),s=Math.max(0,i.ship.cargoCapacity-e);return Math.max(0,Math.min(a,s))}function Ss(t){return t?.length?Array.from(new Set(t)).map(n=>At(n.replace(/_/g," "))).join(" | "):""}function ks(t,e){const n=At(t.tier||"standard"),a=xs(t.legalStatus||"legal"),s=typeof t.mass=="number"?`${t.mass}t`:null,o=[`Held ${e}`,`Tier ${n}`,a];return s&&o.push(`Mass ${s}`),o.join(" | ")}function At(t){return t.split(" ").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function xs(t){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[t]??At(t)}window.buyCommodityAction=t=>{const e=i.location.systemId,n=B(t),a=$e(e,t,1),s=_(e,t).buy,o=document.getElementById("market-message");o&&(o.textContent=a?`Bought 1 ${n?.name||t} for ${s} cr.`:`Cannot buy ${n?.name||t}.`),nav("market")};window.sellCommodityAction=t=>{const e=i.location.systemId,n=B(t),a=xt(e,t,1),s=_(e,t).sell,o=document.getElementById("market-message");o&&(o.textContent=a?`Sold 1 ${n?.name||t} for ${s} cr.`:`Cannot sell ${n?.name||t}.`),nav("market")};window.buyAllCommodityAction=(t,e)=>{const n=i.location.systemId,a=i.ship.cargo||{},s=Object.values(a).reduce((c,p)=>c+p,0),o=Pe(e,s);if(o<=0){nav("market");return}$e(n,t,o);const r=B(t),l=document.getElementById("market-message");l&&(l.textContent=`Bought ${o} ${r?.name||t} for ${e*o} cr.`),nav("market")};window.sellAllCommodityAction=t=>{const e=i.location.systemId,n=K(t);if(n<=0){nav("market");return}const a=_(e,t).sell;xt(e,t,n);const s=B(t),o=document.getElementById("market-message");o&&(o.textContent=`Sold ${n} ${s?.name||t} for ${a*n} cr.`),nav("market")};window.sellAllCargoAction=()=>{const t=i.location.systemId,e=Object.entries(i.ship.cargo||{});let n=0;const a=[];for(const[o,r]of e){if(!r||!xt(t,o,r))continue;n+=r;const c=B(o);a.push(`${r} ${c?.name||o}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const o=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${o}).`}nav("market")};window.purchaseNeighborIntel=()=>{const t=Jn(),e=document.getElementById("market-message");e&&(e.textContent=t.message),nav("market")};function Cs(t={}){const e=typeof t.message=="string"?t.message:"",n=F(),a=$n(),s=Object.values(i.ship.cargo||{}).reduce((l,c)=>l+c,0),o=n.length>0?n.map(l=>`
              <div class="panel-card">
                <p class="label">${l.status}</p>
                <p class="value-inline"><strong>${l.name}</strong></p>
                <p class="muted">${l.description||""}</p>
                <p class="muted">${wn(l)}</p>
                <p class="muted">${Sn(l)}</p>
              </div>
            `).join(""):'<p class="muted">No active missions.</p>',r=a.length>0?a.map(l=>`
              <div class="panel-card">
                <p class="label">${l.type}</p>
                <p class="value-inline"><strong>${l.name}</strong></p>
                <p class="muted">${l.description}</p>
                <p class="muted">Reward: ${Ts(l.reward)}</p>
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
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${i.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${i.ship.fuel}/${i.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${s}/${i.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${i.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Contracts</h1>
          ${e?`<p class="muted">${e}</p>`:""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${o}</div>
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
  `}function Ts(t){if(!t)return"None";const e=[];if(t.credits&&e.push(`${t.credits} credits`),t.rep){const n=Object.entries(t.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");e.push(`Rep: ${n}`)}if(t.weapon){const n=D(t.weapon)?.name||t.weapon;e.push(`Weapon: ${n}`)}return e.join(" | ")||"None"}window.acceptContract=t=>{const e=wt(t),n=e.success?"Mission accepted.":e.reason||"Unable to accept.";nav("contracts",{message:n})};const Es={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Rt(t){return f?f.ships.find(e=>e.id===t)??null:null}function _s(){return Rt(i.ship.templateId)}function Ds(){return f?f.ships.filter(t=>t.starter):[]}function Is(){return f?f.ships.filter(t=>!t.starter):[]}function Fe(t,e){const n=Rt(t);if(!n){console.warn(`Unknown ship template: ${t}`);return}const a=n.hardpoints.map(()=>null),s=[],o={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,l)=>Es[`${r.size}:${r.type}`]??a[l]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};i.ship=o,ft(),bt()}function As(t){Fe(t),i.player.hasChosenStarter=!0}function Rs(t){const e=Rt(t);return e?e.starter?(console.warn("Starter ships are not sold at shipyards."),!1):i.player.credits<e.cost?(console.warn("Not enough credits to buy this ship."),!1):(i.player.credits-=e.cost,Fe(t),!0):(console.warn(`Unknown ship template: ${t}`),!1)}function Bs(){const t=i.ship,e=t.maxHp-t.hp,n=t.maxShields-t.shields;if(e<=0&&n<=0)return;const a=e+n;if(i.player.credits<a){console.warn("Not enough credits to fully repair.");return}i.player.credits-=a,t.hp=t.maxHp,t.shields=t.maxShields}function Ps(){const t=i.ship,e=t.maxFuel-t.fuel;if(e<=0)return;const a=e*2;if(i.player.credits<a){console.warn("Not enough credits to fully refuel.");return}i.player.credits-=a,t.fuel=t.maxFuel}function Fs(){return f?f.components:[]}function js(){if(!f)return[];const t=i.ship.components;return f.components.filter(e=>t.includes(e.id))}function Ls(t){if(!f)return!1;const e=f.components.find(n=>n.id===t);return e?i.player.credits<e.cost?(console.warn("Not enough credits to buy this component."),!1):i.ship.components.includes(t)?(console.warn("Component already installed."),!1):(i.player.credits-=e.cost,i.ship.components.push(t),Ns(e),!0):(console.warn(`Unknown component: ${t}`),!1)}function Ns(t){const e=i.ship;switch(t.effectType){case"hull":e.maxHp+=t.value,e.hp+=t.value;break;case"shields":e.maxShields+=t.value,e.shields+=t.value;break;case"fuel":e.maxFuel+=t.value,e.fuel+=t.value;break;case"cargo":e.cargoCapacity+=t.value;break}}window.repairShipAction=()=>{Bs(),nav("ship")};window.refuelShipAction=()=>{Ps(),nav("ship")};function Hs(){const t=i.ship,e=_s(),n=js(),a=i.combat?.playerCooldowns??[],s=Object.values(t.cargo||{}).reduce((l,c)=>l+c,0),o=e?`<p class="muted">${e.description}</p>`:`<p class="muted">Unknown template (${t.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(l=>`<li>${l.name} (+${l.value} ${l.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
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
          ${o}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${r}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${t.hardpoints.map((l,c)=>{const p=D(t.weapons[c]),d=p?.name||"Empty",u=a[c]??0,m=p?Mt(p):null,h=m?`
                    <p class="muted">Role: ${m.role} (${m.typeLabel})</p>
                    <p class="muted">Vs Shields: ${m.vsShields} · Vs Hull: ${m.vsHull}</p>
                    ${m.tagNotes.length?`<p class="muted">Traits: ${m.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${c+1} · ${l.size} ${l.type}</p>
                    <p class="value-inline">${d}</p>
                    <p class="muted">${u>0?`${u} turn${u===1?"":"s"} left`:"Ready"}</p>
                    ${h}
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
  `}function Os(t={}){const e=typeof t.eventId=="string"?t.eventId:"",n=Tt(e);if(!n)return`
      <div class="screen event">
        <h1>No Event</h1>
        <p>No events available here.</p>
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
    `;const a=Ws(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${qs(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
      <div class="screen-actions"></div>
    </div>
  `}function Ws(t){return!t||!t.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${t.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",o=n.risk?`<span class="choice-risk">Risk: ${Vs(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${o}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function qs(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function Vs(t){return typeof t!="number"?"0%":`${Math.round(t*100)}%`}window.pickChoice=t=>{const e=y.params,n=typeof e.eventId=="string"?e.eventId:"",a=Tt(n);if(!a){nav("main");return}const s=a.choices?.[t];if(s){const o=Xn(s);if(o.triggerCombat?.enemyId){H(o.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(t,e)=>{Ie(i,i.location.systemId,t||void 0,e||void 0),y.go("mining")};window.fireWeapon=(t,e="normal")=>{nt("fire",t,e),i.combat&&nav("combat")};window.brace=()=>{nt("brace"),i.combat&&nav("combat")};window.flee=()=>{nt("flee"),i.combat&&nav("combat")};window.setStance=t=>{Fa(t),i.combat&&nav("combat")};window.fireAllWeapons=(t="normal")=>{nt("fire_all",void 0,t),i.combat&&nav("combat")};function zs(){const t=i.combat;if(!t)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const e=i.ship,n=t.log.map(p=>`<div class="log-line">${p}</div>`).join(""),a=e.hardpoints.map((p,d)=>{const u=e.weapons[d],m=D(u),h=t.playerCooldowns[d]??0,g=!!m&&h===0;return`
        <div class="panel-card">
          <p class="label">Slot ${d+1} · ${p.size.toUpperCase()} ${p.type}</p>
          <p class="value-inline">${m?.name||"Empty"}</p>
          <p class="muted">${h>0?`Cooling (${h})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${g?"":"disabled"} onclick="fireWeapon(${d}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${g?"":"disabled"} onclick="fireWeapon(${d}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),s=va.map(p=>`
        <tr>
          <td>${p.type}</td>
          <td>${p.shieldMultiplier.toFixed(2)}x</td>
          <td>${p.hullMultiplier.toFixed(2)}x</td>
          <td>${p.description}</td>
        </tr>
      `).join(""),o=Aa(),r=o?`<p class="combat-advice ${o.suggestion}">
        ${o.text}
        <span class="advice-confidence">Intel confidence: ${(o.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',c=t.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${t.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)} · Round ${t.round}</span>
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
            <p class="label">Volley</p>
            <div class="app-actions">
              <button class="btn btn-primary" onclick="fireAllWeapons('normal')">Fire All</button>
              <button class="btn btn-ghost" onclick="fireAllWeapons('called_shot')">All Called Shots</button>
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
            <p><strong>Called Shot</strong>: ${fa}</p>
            <p><strong>Brace vs Attack</strong>: ${ga}</p>
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
  `}window.buyShipAction=t=>{Rs(t)};window.buyComponentAction=t=>{Ls(t)};window.buyWeaponAction=t=>{gn(t)};function Us(){if(!tt(i.location.systemId,"shipyard"))return`
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
    `;const t=Is(),e=Fs(),n=hn(),a=vt().map(c=>D(c)?.name).filter(Boolean),s=t.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <table class="shipyard-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Stats</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(c=>`
                  <tr>
                    <td>${c.roleHint}</td>
                    <td>
                      <strong>${c.name}</strong>
                      <p class="muted">${c.description}</p>
                    </td>
                    <td class="muted">Hull ${c.hull} · Shields ${c.shields} · Fuel ${c.fuel} · Cargo ${c.cargo}</td>
                    <td class="numeric">${c.cost} cr</td>
                    <td class="actions-cell">
                      <button class="btn btn-primary" onclick="buyShipAction('${c.id}')">Buy & Replace</button>
                    </td>
                  </tr>
                `).join("")}
          </tbody>
        </table>
      `,o=e.length===0?'<p class="muted">No components in stock.</p>':`
        <table class="shipyard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Effect</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(c=>`
                  <tr>
                    <td><strong>${c.name}</strong></td>
                    <td class="muted">+${c.value} ${c.effectType}</td>
                    <td class="muted">${c.description}</td>
                    <td class="numeric">${c.cost} cr</td>
                    <td class="actions-cell">
                      <button class="btn btn-primary" onclick="buyComponentAction('${c.id}')">Buy & Install</button>
                    </td>
                  </tr>
                `).join("")}
          </tbody>
        </table>
      `,r=n.length===0?'<p class="muted">No weapons available.</p>':`
        <table class="shipyard-table">
          <thead>
            <tr>
              <th>Type / Size</th>
              <th>Name</th>
              <th>Stats</th>
              <th>Role</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${n.map(c=>{const p=Mt(c),d=p.tagNotes.length?`Traits: ${p.tagNotes.join(", ")}`:"";return`
                  <tr>
                    <td>${c.type} / ${c.size}</td>
                    <td>
                      <strong>${c.name}</strong>
                      <p class="muted">${d}</p>
                    </td>
                    <td class="muted">
                      Damage: ${c.damage} (${c.damageType}) · Acc: ${Math.round(c.accuracy*100)}% · Crit: ${Math.round(c.critChance*100)}% ×${c.critMultiplier}<br/>
                      Cooldown: ${c.cooldown} · Energy: ${c.energyCost}
                    </td>
                    <td class="muted">${p.role} (${p.typeLabel}) — Vs Shields: ${p.vsShields}, Vs Hull: ${p.vsHull}</td>
                    <td class="numeric">${c.price} cr</td>
                    <td class="actions-cell">
                      <button class="btn btn-primary" onclick="buyWeaponAction('${c.id}')">Buy Weapon</button>
                    </td>
                  </tr>
                `}).join("")}
          </tbody>
        </table>
      `,l=a.length>0?`<p>${a.join(", ")}</p>`:'<p class="muted">You currently own no weapons.</p>';return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Shipyard</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Credits ${i.player.credits}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ships for Sale</h1>
          ${s}

          <h2 class="panel-title">Components & Upgrades</h2>
          ${o}

          <h2 class="panel-title">Weapons for Sale</h2>
          ${r}

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
  `}const Ys={incomeMultiplier:t=>k(t,"income"),eventRewardMultiplier:t=>k(t,"event rewards"),hpBonus:t=>k(t,"hull"),cargoBonus:t=>Js(t,"cargo capacity"),sellBonus:t=>k(t,"sell price"),buyBonus:t=>k(t,"buy price"),marketTax:t=>k(t,"market tax"),miningYield:t=>k(t,"mining yield"),rareFindChance:t=>k(t,"rare find chance"),miningSpeed:t=>k(t,"mining duration"),dodgeBonus:t=>J(t,"dodge chance"),critBonus:t=>J(t,"crit chance"),damageTakenMultiplier:t=>k(t,"damage taken"),fleeBonus:t=>J(t,"flee chance"),pirateDetectionMultiplier:t=>k(t,"pirate detection"),scanDetectionMultiplier:t=>k(t,"scan detection"),illegalTolerance:t=>k(t,"illegal tolerance"),fuelCostMultiplier:t=>k(t,"fuel cost"),hazardDetectionBonus:t=>J(t,"hazard detection"),anomalyChance:t=>k(t,"anomaly chance"),shieldRegenBonus:t=>k(t,"shield regen")};function Gs(t){const e=t.passive?.effects;return e?Object.entries(e).map(([n,a])=>Ys[n]?.(a)??null).filter(n=>!!n):[]}function k(t,e){if(!Number.isFinite(t))return null;const n=Math.round((t-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${e}`}function J(t,e){if(!Number.isFinite(t))return null;const n=Math.round(t*100);return n===0?null:`${n>0?"+":""}${n}% ${e}`}function Js(t,e){if(!Number.isFinite(t))return null;const n=Math.round(t);return n===0?null:`${n>0?"+":""}${n} ${e}`}window.chooseStarter=t=>{As(t),bt(),y.go("main")};function Ks(){const t=Ds();if(t.length===0)return`
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
    `;const e=t.map(n=>{const a=Gs(n),s=n.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${n.passive.name}</p>
          ${a.length?`<ul class="passive-summary__list">${a.map(o=>`<li>${o}</li>`).join("")}</ul>`:""}
        </div>
      `:"";return`
      <div class="panel-card">
        <p class="label">${n.roleHint}</p>
        <p class="value-inline"><strong>${n.name}</strong></p>
        <p class="muted">${n.description}</p>
        ${s}
        <p class="muted">Hull ${n.hull} | Shields ${n.shields} | Fuel ${n.fuel} | Cargo ${n.cargo}</p>
        <button class="btn btn-primary" onclick="chooseStarter('${n.id}')">Choose ${n.name}</button>
      </div>
    `}).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Starter Hangar</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
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
  `}function Qs(){const t=i.ship;if(!t.hardpoints.length)return`
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
    `;const e=t.hardpoints.map((n,a)=>{const o=D(t.weapons[a])?.name||"Empty";return`
        <div class="panel-card">
          <p class="label">Slot ${a+1} · ${n.size} ${n.type}</p>
          <p class="value-inline">${o}</p>
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
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
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
  `}window.equipWeaponAction=(t,e)=>{fn(t,e)&&nav("weapon_slots")};function Xs(t={}){const e=typeof t.slotIndex=="number"&&t.slotIndex>=0?t.slotIndex:0,n=i.ship.hardpoints[e];if(!n)return`
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
    `;const r=vt().map(l=>D(l)).filter(l=>!!l).map(l=>{const c=yt(e,l.id),d=D(i.ship.weapons[e])?.id===l.id?"Equipped":"Equip",u=Mt(l),m=u.tagNotes.length?`<br/>Traits: ${u.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${c?"":"muted"}">
          <p class="label">${l.size} / ${l.type}</p>
          <p class="value-inline"><strong>${l.name}</strong></p>
          <p class="muted">Damage ${l.damage} (${l.damageType}) · Acc ${Math.round(l.accuracy*100)}% · Crit ${Math.round(l.critChance*100)}% (×${l.critMultiplier}) · CD ${l.cooldown}</p>
          <p class="muted">Role: ${u.role} (${u.typeLabel}) · Vs Shields: ${u.vsShields} · Vs Hull: ${u.vsHull}${m}</p>
          <button class="btn btn-primary" ${c?"":"disabled"} onclick="equipWeaponAction(${e}, '${l.id}')">
            ${d}
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
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
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
  `}window.leaveMining=()=>{Xa(i),y.go("main")};function Bt(t){Ka(i,t)?.pirateEncountered||y.go("mining")}window.mineCareful=()=>Bt("careful");window.mineStandard=()=>Bt("standard");window.mineOvercharge=()=>Bt("overcharge");function Zs(){const t=i.miningSession;if(!t)return`
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
    `;if(!t.active){const o=t.lastYield?`Last haul: ${t.lastYield.amount} ${t.lastYield.commodityId} (~${t.lastYield.approxValue} cr)${t.lastYield.rareFind?` + rare ${t.lastYield.rareFind.amount} ${t.lastYield.rareFind.id}`:""}`:"Session ended.";return`
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
            <p>${o}</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Return</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `}const e=we(i,t.systemId),n=Math.max(0,Math.round(t.stability/Math.max(1,t.maxStability)*100)),a=t.lastYield?`<p>Last haul: ${t.lastYield.amount} ${t.lastYield.commodityId} (~${t.lastYield.approxValue} cr)${t.lastYield.rareFind?` + rare ${t.lastYield.rareFind.amount} ${t.lastYield.rareFind.id}`:""}</p>`:"",s=t.lastMessage?`<p class="muted">${t.lastMessage}</p>`:"";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Mining — ${t.beltName||t.beltId||t.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${A(i.time.turn)}</span>
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
  `}window.startNewRun=()=>ke(!1);window.returnToMainMenu=()=>ke(!0);function ti(){const t=i.gameOver?.summary,e=Je(),n=t?.message||"Your run has ended.",a=t?.score??0,s=[["Days survived",t?.stats.daysSurvived??0],["Systems visited",t?.stats.systemsVisited??0],["Jumps completed",t?.stats.jumpsMade??0]],o=[["Credits earned",t?.stats.creditsEarnedTotal??0],["Highest net worth",t?.stats.highestNetWorth??0],["Trade profit",t?.stats.tradeProfitTotal??0],["Most traded",t?.stats.mostTradedCommodityId&&t.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",t?.stats.contractsCompleted??0],["Contract payouts",t?.stats.contractPayoutTotal??0]],l=[["Fights survived",t?.stats.fightsSurvived??0],["Ships destroyed",t?.stats.shipsDestroyed??0],["Damage dealt",t?.stats.damageDealtTotal??0],["Damage taken",t?.stats.damageTakenTotal??0]],c=[["Mining runs",t?.stats.miningRuns??0],["Ore mined",t?.stats.oreMinedTotal??0],["Rare finds",t?.stats.rareFinds??0]],p=u=>u.map(([m,h])=>`
      <tr>
        <td>${m}</td>
        <td>${h}</td>
      </tr>
    `).join(""),d=e.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${e.map((u,m)=>`
                  <tr>
                    <td>${m+1}</td>
                    <td>${u.score}</td>
                    <td>${u.daysSurvived}</td>
                    <td>${u.contractsCompleted}</td>
                    <td>${u.shipsDestroyed}</td>
                    <td>${u.reason.replace(/_/g," ")}</td>
                  </tr>
                `).join("")}
          </tbody>
        </table>`;return`
    <div class="app-root gameover">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Run Summary</span>
          <span class="app-location">Game Over</span>
        </div>
        <div class="app-meta">
          <span>${n}</span>
        </div>
      </header>

      <section class="gameover-score">
        <h1>${a.toLocaleString()}</h1>
        <p>Final score • ${t?.reason.replace(/_/g," ")??"Unknown fate"}</p>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h2>Career Overview</h2>
          <table>${p(s)}</table>
        </section>
        <section class="data-panel">
          <h2>Economy</h2>
          <table>${p(o)}</table>
        </section>
        <section class="data-panel">
          <h2>Contracts</h2>
          <table>${p(r)}</table>
        </section>
        <section class="data-panel">
          <h2>Combat</h2>
          <table>${p(l)}</table>
        </section>
        <section class="data-panel">
          <h2>Mining</h2>
          <table>${p(c)}</table>
        </section>
        <section class="data-panel">
          <h2>Best Runs</h2>
          ${d}
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-primary" onclick="startNewRun()">Start New Run</button>
        <button class="btn btn-ghost" onclick="returnToMainMenu()">Return to Main Menu</button>
      </footer>
    </div>
  `}const je=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:t=>`${t.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:t=>`${t.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:t=>t?"On":"Off"}]}],ei=je.flatMap(t=>t.controls).reduce((t,e)=>(t[e.path]=e,t),{});function ht(t){const e=t.split(".");let n=M;for(const a of e){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function ni(t,e){const n=t.split(".");let a=M;for(let s=0;s<n.length-1;s++){const o=n[s];a[o]=a[o]??{},a=a[o]}a[n[n.length-1]]=e}window.devCombat=(t="pirate_cutter")=>{H(t)};window.devMining=()=>{Ie(i,i.location.systemId),y.go("mining")};function ai(){return je.map(t=>{const e=t.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(ht(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${ht(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${t.title}</h3>
        ${e}
      </section>
    `}).join("")}function Z(){const t=document.getElementById("app");if(!t)return;let e="";switch(y.current){case"main":e=cn();break;case"travel":e=ms();break;case"market":e=bs();break;case"contracts":e=Cs();break;case"ship":e=Hs();break;case"event":e=Os(y.params);break;case"combat":e=zs(y.params);break;case"weapon_slots":e=Qs();break;case"weapon_select":e=Xs(y.params);break;case"shipyard":e=Us();break;case"ship_select":e=Ks();break;case"mining":e=Zs();break;case"gameover":e=ti();break}const n=y.current!=="main"?`
        <div class="menu-back">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
        </div>
      `:"",a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${ai()}
      <section class="dev-section">
        <h3>Quick Actions</h3>
          <div class="dev-actions">
            <button class="btn btn-primary" id="devSpawnPirates">Spawn Pirate Encounter</button>
            <button class="btn btn-primary" id="devTriggerMining">Trigger Mining Event</button>
            <button class="btn btn-primary" id="devAddCredits">+1000 Credits</button>
            <button class="btn btn-primary" id="devFillCargo">Fill Cargo</button>
            <button class="btn btn-primary" id="devGodMode">Toggle God Mode</button>
            <button class="btn btn-ghost" id="devPersistEvents">Save Event Cache</button>
            <button class="btn btn-ghost" id="devClearEvents">Clear Event Cache</button>
          </div>
      </section>
    </div>
  `;t.innerHTML=`${n}${e}${a}`,si()}let W=!1,Qt=!1;function si(){const t=document.getElementById("navDev"),e=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),o=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),l=document.getElementById("devGodMode"),c=document.getElementById("navTravel"),p=document.getElementById("navMarket"),d=document.getElementById("navShip"),u=document.getElementById("devPersistEvents"),m=document.getElementById("devClearEvents"),h=e?.querySelectorAll("input[data-dev-path]"),g=()=>{e&&e.classList.toggle("hidden")},b=v=>{const S=ei[v],w=document.getElementById(`devValue-${v.replace(/\./g,"__")}`);S&&w&&(w.textContent=S.formatter(ht(v)))};h?.forEach(v=>{const S=()=>{const w=v.dataset.devPath;if(!w)return;const I=Number(v.value);ni(w,I),Ve(),b(w)};v.addEventListener("input",S)}),t?.addEventListener("click",g),n?.addEventListener("click",()=>e?.classList.add("hidden")),c?.addEventListener("click",()=>window.nav?.("travel")),p?.addEventListener("click",()=>window.nav?.("market")),d?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devMining?.()}),o?.addEventListener("click",()=>{i.player.credits+=1e3,e?.classList.add("hidden"),Z()}),r?.addEventListener("click",()=>{const v=i.ship.cargo||{};v.aurite_ore=(v.aurite_ore||0)+20,i.ship.cargo=v,e?.classList.add("hidden"),Z()}),l?.addEventListener("click",()=>{W=!W,i.godMode=W,W&&(i.ship.hp=i.ship.maxHp,i.ship.shields=i.ship.maxShields),alert(`God Mode: ${W?"On":"Off"}`)}),u?.addEventListener("click",()=>{ea(),alert("Events cached locally. Future loads will honor this list.")}),m?.addEventListener("click",()=>{na(),alert("Event cache cleared. Future loads use the bundled data.")}),Qt||(document.addEventListener("keydown",v=>{v.key==="`"&&g(),v.key==="Escape"&&y.current!=="main"&&window.nav?.("main")}),Qt=!0)}let f=null;async function ii(){const t="/space/".replace(/\/+$/,"/"),e=O=>`${t}content/${O}`,[n,a,s,o,r,l,c,p,d]=await Promise.all([fetch(e("systems.json")),fetch(e("ships.json")),fetch(e("components.json")),fetch(e("commodities.json")),fetch(e("weapons.json")),fetch(e("enemies.json")),fetch(e("events.json")),fetch(e("loot_tables.json")),fetch(e("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!o.ok)throw new Error(`Failed to load commodities.json: ${o.status}`);if(!l.ok)throw new Error(`Failed to load enemies.json: ${l.status}`);if(!c.ok)throw new Error(`Failed to load events.json: ${c.status}`);if(!p.ok)throw new Error(`Failed to load loot_tables.json: ${p.status}`);if(!d.ok)throw new Error(`Failed to load missions.json: ${d.status}`);const u=await n.json(),m=await a.json(),h=await s.json(),g=await o.json(),b=await r.json(),v=await l.json(),S=await c.json();Kn(S);const w=await p.json();la(w);const I=await d.json();return yn(I),{systems:u,ships:m,components:h,commodities:g,weapons:b,enemies:v,events:S,lootTables:w,missions:I}}async function oi(){f=await ii();const t=te();ee(t),ae();const e=We();if(e){const a=i.ship.hardpoints.length,s=[];for(let o=0;o<a;o++)s.push(e.weapons[o]??null);i.ship.weapons=s,i.inventory.weapons=e.inventory}bt();const n=y.go.bind(y);y.go=(a,s)=>{n(a,s),Z()},window.nav=(a,s={})=>{y.go(a,s)},y.current=i.player.hasChosenStarter?"main":"ship_select",Z()}function N(t){return f?f.systems.find(e=>e.id===t)??null:null}document.addEventListener("DOMContentLoaded",()=>{oi()});
