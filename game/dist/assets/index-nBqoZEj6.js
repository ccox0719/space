(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Oe=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],Nt=Oe,A=Nt.find(t=>t.starter)??Nt[0],We=A?.hardpoints.length??0,qe={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function ee(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let i;const ne="cosmo_weapon_loadout";function ze(){if(typeof window>"u"||!window.localStorage)return null;const t=window.localStorage.getItem(ne);if(!t)return null;try{const e=JSON.parse(t);return{weapons:Array.isArray(e.weapons)?e.weapons:[],inventory:Array.isArray(e.inventory)?e.inventory:[]}}catch{return null}}function yt(){if(typeof window>"u"||!window.localStorage)return;const t={weapons:i.ship.weapons,inventory:i.inventory?.weapons??[]};window.localStorage.setItem(ne,JSON.stringify(t))}function ae(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:A?.id??"none",name:A?.name??"Undefined Hull",hp:A?.hull??0,maxHp:A?.hull??0,shields:A?.shields??0,maxShields:A?.shields??0,fuel:A?.fuel??0,maxFuel:A?.fuel??0,cargoCapacity:A?.cargo??0,cargo:{},modules:[],weapons:A?.hardpoints.map(t=>qe[`${t.size}:${t.type}`]??null)??Array(We).fill(null),weaponPower:12,evasion:5,maneuverRating:A?.maneuverRating??0,components:[],hardpoints:A?.hardpoints.map(t=>({...t}))??[],passive:A?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},intel:{systems:[]},runStats:ee(),gameOver:{active:!1,reason:null}}}function se(t){i=t}const ie="space-dev-tune",q={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:1,enemyDamageMultiplier:1,enemyAccuracyMultiplier:1,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:1,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:100,nonPirateEventWeight:1,showEncounterDebug:0}};let w={...q};function Ve(t){return{...q.combat,...t}}function oe(){if(typeof window>"u"||!window.localStorage){w={...q};return}const t=window.localStorage.getItem(ie);if(!t){w={...q};return}try{const e=JSON.parse(t),n={};typeof e.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=e.enemyHpMultiplier),typeof e.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=e.enemyDamageMultiplier),typeof e.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=e.combatRewardMultiplier),typeof e.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=e.pirateEncounterRate);const a=Ve({...e.combat,...n});w={...q,...e,combat:a}}catch{w={...q}}}function Ye(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(ie,JSON.stringify(w))}function Mt(t){const e=w.progressionSpeedMultiplier??1;return t*e}function E(){return w.combat??q.combat}function Ue(){return i.ship.passive?.effects??{}}const re="cosmo_run_high_scores",le=5;function Ge(){return i?{...i.runStats,commodityVolumes:{...i.runStats.commodityVolumes}}:ee()}function Je(t){return Math.round(t.creditsEarnedTotal/10+t.contractsCompleted*50+t.shipsDestroyed*30+t.rareFinds*40+t.systemsVisited*5+t.daysSurvived*3)}function ce(){if(typeof window>"u"||!window.localStorage)return[];const t=window.localStorage.getItem(re);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.slice(0,le):[]}catch{return[]}}function Ke(t){typeof window>"u"||!window.localStorage||window.localStorage.setItem(re,JSON.stringify(t.slice(0,le)))}function Xe(){return ce()}function Qe(t){const e=ce();e.push(t),e.sort((n,a)=>a.score-n.score),Ke(e)}function X(t){if(!i||t<=0)return;i.runStats.creditsEarnedTotal+=t;const e=i.player.credits;e>i.runStats.highestNetWorth&&(i.runStats.highestNetWorth=e)}function Ze(t,e,n){if(!i)return;i.runStats.tradeProfitTotal+=Math.max(0,n);const a=i.runStats.commodityVolumes;a[t]=(a[t]||0)+e;const s=i.runStats.mostTradedCommodityId;(!s||a[t]>a[s])&&(i.runStats.mostTradedCommodityId=t)}function tn(t){!i||t<=0||(i.runStats.contractPayoutTotal+=t)}function en(){i&&(i.runStats.contractsCompleted+=1)}function nn(t){!i||t<=0||(i.runStats.damageDealtTotal+=t)}function an(t){!i||t<=0||(i.runStats.damageTakenTotal+=t)}function sn(){i&&(i.runStats.fightsSurvived+=1)}function on(){i&&(i.runStats.shipsDestroyed+=1)}function rn(t,e){!i||t<=0||(i.runStats.miningRuns+=1,i.runStats.oreMinedTotal+=t,e&&(i.runStats.rareFinds+=1))}function ln(){i&&(i.runStats.jumpsMade+=1,i.runStats.systemsVisited+=1)}function cn(t){i&&(i.runStats.daysSurvived=Math.max(i.runStats.daysSurvived,t))}const $={current:"main",params:{},go(t,e={}){this.current=t,this.params=e}};function j(t){if(!Number.isFinite(t))return String(t);const e=Number(t.toFixed(2));return Number.isInteger(e)?String(e):String(e).replace(/\.?0+$/,"")}function dn(t){return v?v.systemsById[t]??null:null}function ot(t,e){const n=dn(t);return n?n.tags.includes(e):!1}window.nav=(t,e={})=>{$.go(t,e)};function un(){const t=i,e=O(t.location.systemId),n=Object.values(t.ship.cargo||{}).reduce((s,o)=>s+o,0),a=t.notifications[t.notifications.length-1];return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${e?.name??t.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${t.time.day}</span>
            <span>Turn ${j(t.time.turn)}</span>
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
            ${ot(t.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}function I(){return Ue()}function de(){const t=I(),e=Math.max(0,t.incomeMultiplier??1),n=Math.max(0,E().globalIncomeMultiplier??1);return e*n}const pn=-100,mn=100;function hn(t,e){const n=i.reputation[t]||0,a=fn(n+e);return i.reputation[t]=a,a}function ue(t){for(const[e,n]of Object.entries(t))hn(e,n)}function fn(t){return Math.max(pn,Math.min(mn,t))}const dt={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function gn(){return v?v.weapons:[]}function pe(){return i.inventory||(i.inventory={weapons:[]}),i.inventory}function $t(){return[...pe().weapons]}function wt(){if(!v)return;const t=$t();if(!t.length)return;const e=i.ship;e.weapons=e.weapons.map((n,a)=>{if(n)return n;const s=t.filter(r=>St(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function St(t,e){const n=i.ship,a=v?.weapons.find(o=>o.id===e);if(!a)return!1;const s=n.hardpoints[t];return s?a.size===s.size&&a.type===s.type:!1}function vn(t,e){return St(t,e)?(i.ship.weapons[t]=e,yt(),!0):!1}function L(t){return!t||!v?null:v.weapons.find(e=>e.id===t)??null}function bn(t){const e=L(t);return!e||i.player.credits<e.price?!1:(pe().weapons.push(t),i.player.credits-=e.price,yt(),!0)}function me(t,e,n={}){const a=t.tags||[];let s=t.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let o=t.damage;const r=e.shields>0?"shields":"hull",l=dt[t.damageType]?.[r]??1,c=r==="shields"?t.shieldMod:t.armorMod;return o*=c*l,r==="shields"&&a.includes("shield_breaker")&&(o*=1.2),r==="hull"&&a.includes("armor_piercing")&&(o*=1.2),Math.random()<t.critChance&&(o*=t.critMultiplier),o*=n.damageMultiplier??1,Math.max(0,Math.round(o))}const yn={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},Mn={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Ht(t){return t>1.1?"Strong":t<.95?"Weak":"Normal"}const Ot={shields:"Shield-breaker",hull:"Hull buster"};function kt(t){const e=t.damageType,n=dt[e]??dt.kinetic,a=Ht(n.shields),s=Ht(n.hull);let o="Balanced";a==="Strong"&&s==="Weak"?o=Ot.shields:s==="Strong"&&a==="Weak"?o=Ot.hull:a==="Strong"&&s==="Strong"&&(o="Devastating");const r=(t.tags||[]).map(l=>Mn[l]).filter(Boolean);return{role:o,vsShields:a,vsHull:s,typeLabel:yn[e]??e,tagNotes:r}}let xt=[];function $n(t){xt=t}function wn(t){return xt.find(e=>e.id===t)}function Sn(){const t=new Set(i.contracts.filter(e=>e.status==="active").map(e=>e.id));return xt.filter(e=>!t.has(e.id))}function W(){return i.contracts.filter(t=>t.status==="active")}function kn(t){const e=t.requirements,n=s=>s?`<strong>${O(s)?.name||s}</strong>`:"",a=[];if(e?.travel?.systemId){const s=n(e.travel.systemId);a.push(`Travel to ${s}`)}if(e?.deliver?.commodityId){const s=e.deliver.quantity||0,o=e.deliver.systemId?` at ${n(e.deliver.systemId)}`:"";a.push(`Deliver ${s} ${e.deliver.commodityId}${o}`)}return e?.combat?.enemyId&&a.push(`Defeat ${e.combat.enemyId}`),a.join(" • ")||"No special requirements."}function xn(t){const e=t.requirements,n=t.progress||{},a=[];if(e?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),e?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${e.deliver.quantity||0}`)}return e?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||t.status}function Ct(t){const e=wn(t);if(!e)return{success:!1,reason:"Unknown mission"};if(i.contracts.some(a=>a.id===t&&a.status==="active"))return{success:!1,reason:"Mission already active"};const n={id:e.id,name:e.name,description:e.description,type:e.type,status:"active",sourceFaction:e.factionId,reward:e.reward,requirements:e.requirements,acceptedTurn:i.time.turn,progress:{}};return i.contracts.push(n),{success:!0}}function Cn(t,e){if(!t.reward)return;const n=t.reward;if(n.credits){const a=Math.max(.1,Math.min(5,w.contractPayoutMultiplier??1)),s=de(),o=Math.max(0,I().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*o));i.player.credits+=r,X(r),tn(r),i.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){ue(n.rep);const a=Object.entries(n.rep).map(([s,o])=>`${s} ${o>=0?"+":""}${o}`).join(", ");a&&i.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=i.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),i.inventory=a;const s=L(n.weapon)?.name??n.weapon;i.notifications.push(`Rewarded weapon: ${s}.`)}}function Tn(){W().forEach(t=>{const e=t.requirements?.failureAfterTurns;if(e&&t.acceptedTurn!=null){const n=Math.max(.1,w.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(e/n));i.time.turn-t.acceptedTurn>=a&&_n(t.id)}})}function _n(t){const e=i.contracts.find(n=>n.id===t&&n.status==="active");e&&(e.status="failed",rt(`Mission failed: ${e.name}`))}function En(t){const e=i.contracts.find(n=>n.id===t&&n.status==="active");return e?(e.status="failed",rt(`Mission abandoned: ${e.name}`),{success:!0}):{success:!1,reason:"Mission not active"}}function Dn(t){W().forEach(e=>{const n=e.requirements?.travel;if(e.progress=e.progress||{},n?.systemId===t&&(e.progress.travelCompleted=!0,J(e)),e.requirements?.multiTravel?.length){const s=new Set(e.progress?.multiTravelVisited??[]);s.add(t),e.progress.multiTravelVisited=Array.from(s),J(e)}})}function In(t,e,n){W().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==t||s.systemId&&s.systemId!==n)return;const o=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=o+e,J(a)})}function Bn(t){W().forEach(e=>{e.requirements?.combat?.enemyId===t&&(e.progress=e.progress||{},e.progress.combatCompleted=!0,J(e))})}function An(t,e){Dn(e);const n=t.ship.cargo||={};let a=0;const s=[];for(const o of W()){const r=o.status,l=o.requirements?.deliver;if(!l||!l.commodityId||(l.systemId??e)!==e||(a+=1,!Rn(n,l)))continue;l.retain||Fn(n,l),o.progress=o.progress||{};const u=o.progress.deliveredQuantity||0;o.progress.deliveredQuantity=u+(l.quantity||1),J(o),r!=="completed"&&o.status==="completed"&&s.push(o.name)}if(s.length){const o=`Contracts completed: ${s.join(", ")}`;t.notifications.push(o)}return{checked:a,completed:s}}function Rn(t,e){const n=Math.max(1,e.quantity??1);return(t[e.commodityId]??0)>=n}function Fn(t,e){const n=Math.max(1,e.quantity??1),a=t[e.commodityId]??0;t[e.commodityId]=Math.max(0,a-n)}function J(t){if(!t.requirements||t.status!=="active")return;const{travel:e,deliver:n,combat:a}=t.requirements,s=t.progress||{},o=t.requirements?.multiTravel,r=e?!!s.travelCompleted:!0,l=n?s.deliveredQuantity>=(n.quantity||0):!0,c=a?!!s.combatCompleted:!0,u=s.multiTravelVisited??[],d=o?o.every(p=>u.includes(p)):!0;r&&l&&c&&d&&(t.status="completed",Cn(t),en(),rt(`Mission completed: ${t.name}`))}function rt(t){i.notifications.push(t)}function Pn(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",rt(`Mission failed (expired): ${n.name}`))}const he="__global__",Ln={buyMultiplier:1,sellMultiplier:.85},jn={basic:.9,standard:1,strategic:1.2,luxury:1.35};function lt(){return i.ship.cargo||(i.ship.cargo={}),i.ship.cargo}function Nn(){const t=lt();return Object.values(t).reduce((e,n)=>e+n,0)}function fe(){return v?.commodities??[]}function H(t){return fe().find(n=>n.id===t)??null}function N(){return i.marketState?(i.marketState.temporaryModifiers=i.marketState.temporaryModifiers||{},i.marketState.activeEvents=i.marketState.activeEvents||[],i.marketState.localAdjustments=i.marketState.localAdjustments||{},i.marketState.priceIntel=i.marketState.priceIntel||{},i.marketState.initialDriftSeeded=i.marketState.initialDriftSeeded??!1):i.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},i.marketState}function Hn(t){i.intel||(i.intel={systems:[]});const e=i.intel.systems.find(n=>n.systemId===t)??(()=>{const n={systemId:t};return i.intel.systems.push(n),n})();e.lastPriceSeenDay=i.time.day}function On(t){const e=N();let n=1;const a=e.temporaryModifiers[he];a&&(n*=Math.max(0,a.multiplier));const s=e.temporaryModifiers[t];return s&&(n*=Math.max(0,s.multiplier)),n}function Wn(t,e){const n=e>0?e:1,a=t/n;return a>=1.15?"high":a<=.85?"low":"stable"}function qn(t,e){const n=t.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(e.id),o=n.exports?.includes(e.id);return s&&(a*=1.2),o&&(a*=.85),e.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function Tt(t){const e=Math.min(Math.max(t.volatility??.25,0),1),n=Math.min(2,Math.max(0,(w.marketPriceVolatility??100)/100));return Math.min(1,e*n)}function zn(t,e){const n=Math.max(1,e.basePrice),a=jn[e.tier??"standard"]??1,s=t.marketModifiers?.[e.id]??1,o=qn(t,e),l=1+Tt(e)*.08,c=On(e.id),u=Gn(t.id,e.id),d=be(t.id,e.id),p=n*a*s*o*l*c*u*d;return Math.max(1,Math.round(p))}function Wt(t,e){return F(t,e).base}function F(t,e){const n=O(t),a=H(e);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=zn(n,a),o=a.baseSpread??Ln,r=Tt(a),l=I(),c=Math.max(.1,Math.min(3,w.tradeProfitMultiplier??1)),u=de(),d=Math.max(.5,l.buyBonus??1),p=Math.max(0,l.sellBonus??1),m=Math.max(.5,l.marketTax??1),f=Math.max(1,Math.round(s*(o.buyMultiplier??1)*(1+r*.05)/c*d)),y=Math.max(1,Math.round(s*(o.sellMultiplier??.85)*Math.max(.6,1-r*.05)*c*u*p*m)),M=Math.max(f,y,Math.round(s*(1+r*.1))),S=Math.max(1,Math.min(f,y,Math.round(s*Math.max(.65,1-r*.2)))),h=Wn(s,a.basePrice);return Hn(t),{base:s,buy:f,sell:y,high:M,low:S,trend:h}}function ut(t,e,n=2){const a=N(),s=t&&t.length?t:he;a.temporaryModifiers[s]={multiplier:Math.max(0,e),remainingTurns:Math.max(1,Math.floor(n))}}function ge(t=1){if(typeof t=="number"){Vn(t);return}Yn(t??i)}function Vn(t){if(t<=0)return;const e=N(),n=Object.keys(e.temporaryModifiers);for(const s of n){const o=e.temporaryModifiers[s];o.remainingTurns-=t,o.remainingTurns<=0&&delete e.temporaryModifiers[s]}const a=i.time.turn;e.activeEvents=e.activeEvents.filter(s=>s.expiresAtTurn>a),Me(e,.2*t)}function Yn(t){const e=N(),n=v?.systems??[],a=v?.commodities??[],s=t.time.day;Un(e,n,a);for(const o of n)for(const r of a){const l=be(o.id,r.id),c=Tt(r),u=w.marketDailyTrendStrength??1,d=(1-l)*.1*u,p=(Math.random()-.5)*.1*(.5+c)*u,m=ye(l+d+p);e.localAdjustments[o.id]||(e.localAdjustments[o.id]={}),e.localAdjustments[o.id][r.id]=m}e.activeEvents=e.activeEvents.filter(o=>!(o.expiresAtDay!==void 0&&s>=o.expiresAtDay||o.expiresAtTurn&&o.expiresAtTurn<=t.time.turn)),Me(e,.1)}function Un(t,e,n){if(!t.initialDriftSeeded){for(const a of e){t.localAdjustments[a.id]||(t.localAdjustments[a.id]={});for(const s of n){const o=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));t.localAdjustments[a.id][s.id]=o}}t.initialDriftSeeded=!0}}function et(t){return lt()[t]??0}function Gn(t,e){return N().activeEvents.filter(a=>(a.expiresAtDay===void 0||i.time.day<a.expiresAtDay)&&a.expiresAtTurn>i.time.turn&&(!a.systemId||a.systemId===t)&&(!a.commodityId||a.commodityId===e)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function Jn(t){N().activeEvents.push(t)}function Kn(t){return N().activeEvents.filter(n=>n.expiresAtTurn>i.time.turn&&(n.expiresAtDay===void 0||i.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===t))}function Xn(t){if(Math.random()>.08||!v?.commodities?.length)return;const n=v.commodities[Math.floor(Math.random()*v.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,o={systemId:t,commodityId:n.id,multiplier:s,expiresAtTurn:i.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};Jn(o),i.notifications.push(`Market shift in ${t}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function ve(t,e,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,l=Math.min(.15,.03*r),c=N();c.localAdjustments[t]||(c.localAdjustments[t]={});const u=c.localAdjustments[t][e]??1,d=s==="buy"?1+l:1-l,p=ye(u*d);c.localAdjustments[t][e]=p}function be(t,e){return N().localAdjustments[t]?.[e]??1}function ye(t){return Math.min(2,Math.max(.5,t))}function Me(t,e){for(const[n,a]of Object.entries(t.localAdjustments)){for(const[s,o]of Object.entries(a)){const r=o-1,l=o-r*e;Math.abs(l-1)<.01?delete a[s]:a[s]=l}Object.keys(a).length||delete t.localAdjustments[n]}}function Qn(){const e=O(i.location.systemId)?.neighbors.map(s=>O(s.id)).filter(s=>!!s)||[];if(!e.length)return{success:!1,message:"No neighboring systems to scan."};const n=100;if(i.player.credits<n)return{success:!1,message:"Not enough credits for intel."};i.player.credits-=n;const a=N();return e.forEach(s=>{const o={};(v?.commodities||[]).forEach(l=>{const c=F(s.id,l.id);o[l.id]={buy:c.buy,sell:c.sell}});const r={turn:i.time.turn,prices:o};a.priceIntel[s.id]=r}),{success:!0,message:"Purchased neighbor intel."}}function $e(){return N().priceIntel}function pt(t,e,n){if(n<=0)return!1;const a=F(t,e).buy;if(a<=0)return!1;const s=a*n;if(i.player.credits<s)return!1;const o=i.ship.cargoCapacity;return o<=0?!1:Nn()+n<=o}function mt(t,e,n){return n<=0?!1:et(e)>=n}function we(t,e,n){if(!pt(t,e,n))return!1;const a=F(t,e).buy,s=a*n;i.player.credits-=s;const o=lt();return o[e]=(o[e]||0)+n,ve(t,e,n,a,"buy"),!0}function _t(t,e,n){if(!mt(t,e,n))return!1;const a=F(t,e).sell,s=a*n,o=lt();return o[e]=Math.max(0,(o[e]||0)-n),i.player.credits+=s,X(s),Ze(e,n,s),ve(t,e,n,a,"sell"),In(e,n,t),!0}function Se(t,e){const n=t.ship.cargo||{};return Object.entries(n).reduce((a,[s,o])=>{if(!o)return a;const r=F(e,s).sell;return a+r*o},0)}const qt={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function ke(t,e){if(!i||i.gameOver.active)return;const n=Ge(),a=Je(n),s={score:a,reason:t,message:e??qt[t]??qt.other,location:i.location.systemId,stats:n};i.combat=null,i.miningSession=null,i.gameOver={active:!0,reason:t,message:s.message,summary:s};const o={score:a,reason:t,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};Qe(o),$.go("gameover")}function xe(t=!1){const e=ae();se(e),oe(),$.go(t?"main":"ship_select")}const Et="space-events-cache";let K=[];function Zn(t){const e=ra();K=oa(t,e),Ce(K)}function Dt(t){return K.find(e=>e.id===t)}function ta(t){if(!t.to)return;const e=Math.max(0,Math.min(1,t.hazardChance??.4));if(Math.random()>e)return;const n=E(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,I().anomalyChance??1),s=Math.min(1,Math.max(0,(w.eventFrequency??50)/100*a));if(Math.random()>s)return;const o=K.map(c=>({ev:c,weight:da(c,t)})).filter(c=>c.weight>0);if(!o.length)return;const r=o.reduce((c,u)=>c+u.weight,0);let l=Math.random()*r;for(const c of o)if(l-=c.weight,l<=0)return c.ev;return o[0].ev}function ea(t){const e=t.outcomes;if(!e)return{};const n={},a=I(),s=Math.max(.1,Math.min(5,w.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),o=r=>{i.player.credits+=r,X(r),i.player.credits<0&&(i.player.credits=0)};if(e.giveCredits){const r=e.giveCredits.min??0,l=e.giveCredits.max??r,c=G(r,l),u=Math.round(c*s);o(u),i.notifications.push(`Received ${u} credits.`)}if(typeof e.creditsDelta=="number"){const r=Math.round(e.creditsDelta*s);o(r)}if(typeof e.fuelDelta=="number"){const r=i.ship.maxFuel,l=e.fuelDelta>0?Math.max(0,Math.round(e.fuelDelta*s)):e.fuelDelta;i.ship.fuel=Math.max(0,Math.min(r,i.ship.fuel+l))}if(typeof e.turnDelta=="number"){const r=Mt(e.turnDelta);i.time.turn+=r,Tn(),ge(r)}if(e.cargoGain&&zt(la(e.cargoGain,s,1),1),e.cargoLoss&&zt(e.cargoLoss,-1),e.giveCommodity){const r=G(e.giveCommodity.min,e.giveCommodity.max),l=Math.max(0,Math.round(r*s));ht(e.giveCommodity.id,l),l>0&&i.notifications.push(`Collected ${l} ${e.giveCommodity.id}.`)}if(e.giveWeapon&&(i.inventory.weapons.push(e.giveWeapon),i.notifications.push(`Acquired weapon: ${e.giveWeapon}.`)),e.damageShip){const r=e.damageShip.min??0,l=e.damageShip.max??r,c=G(r,l);if(i.ship.hp=Math.max(0,i.ship.hp-c),i.notifications.push(`Ship took ${c} damage.`),i.ship.hp<=0)return ke("ship_destroyed","Ship destroyed by event."),n}return e.applyStatus&&i.notifications.push(`Status effect applied: ${JSON.stringify(e.applyStatus)}.`),typeof e.spawnMissionId=="string"&&Ct(e.spawnMissionId).success&&i.notifications.push(`New mission received: ${e.spawnMissionId}`),typeof e.flag=="string"&&i.notifications.push(`Event flag: ${e.flag}`),e.modifyReputation&&ue({[e.modifyReputation.faction]:e.modifyReputation.amount}),e.triggerCombat?.enemyId&&(n.triggerCombat=e.triggerCombat),n}function na(t){const e={},n=t.autoResolve;if(!n)return e;const a=Math.max(.1,Math.min(5,w.eventRewardMultiplier??1))*Math.max(.1,I().eventRewardMultiplier??1);if(n.mining){const s=G(n.mining.quantity.min,n.mining.quantity.max),o=Math.max(0,Math.round(s*a));ht(n.mining.commodityId,o),i.notifications.push(`Mining yield: ${o} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=G(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),o=i.ship.maxFuel;i.ship.fuel=Math.max(0,Math.min(o,i.ship.fuel-s)),i.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];ht(s,1),i.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(i.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),ut(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(e.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),e}function aa(t){const e=t.time.day;t.marketState?.activeEvents&&(t.marketState.activeEvents=t.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||e<s.expiresAtDay));const n=Math.min(1,Math.max(0,(w.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(w.marketCrashChance??5)/100));if(t.location?.systemId){const s=v?.commodities?.[Math.floor(Math.random()*(v?.commodities.length||1))];if(s){const o=t.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const l=1.1+Math.random()*.35;ut(s.id,l,r),t.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:Math.max(0,l),expiresAtDay:e+r,expiresAtTurn:t.time.turn+r*2,label:`${s.name} surge`}),t.notifications.push(`Market surge in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const l=Math.max(.5,.85-Math.random()*.25);ut(s.id,l,r),t.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:l,expiresAtDay:e+r,expiresAtTurn:t.time.turn+r*2,label:`${s.name} slip`}),t.notifications.push(`Market slip in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}}}}function sa(){Ce(K)}function ia(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(Et)}function oa(t,e){if(!e?.length)return t;const n=new Map;for(const a of t)n.set(a.id,a);for(const a of e)n.set(a.id,a);return Array.from(n.values())}function ra(){if(typeof window>"u"||!window.localStorage)return null;const t=window.localStorage.getItem(Et);if(!t)return null;try{const e=JSON.parse(t);if(Array.isArray(e))return e}catch{}return null}function Ce(t){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Et,JSON.stringify(t))}function zt(t,e){for(const[n,a]of Object.entries(t)){const s=i.ship.cargo[n]??0,o=Math.max(0,s+a*e);i.ship.cargo[n]=o}}function la(t,e,n=1){const a={};for(const[s,o]of Object.entries(t)){if(o<=0){a[s]=o;continue}const r=Math.max(n,Math.round(o*e));a[s]=r}return a}function ht(t,e){const n=i.ship.cargo[t]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(e,s));i.ship.cargo[t]=n+o,o<e&&i.notifications.push(`Cargo full: stored ${o}/${e} ${t}.`)}function G(t,e){const n=Number.isFinite(t)?t:0,a=Number.isFinite(e)?e:n,s=Math.ceil(n),o=Math.floor(Math.max(s,a));return o<=s?s:Math.floor(Math.random()*(o-s+1))+s}function ca(t){const e=new Set;return(t.to?.tags||[]).forEach(n=>e.add(n)),(t.from?.tags||[]).forEach(n=>e.add(n)),e}function Vt(t,e){return t.has(e)}function da(t,e){let n=t.weight??0;const a=ca(e);if(e.to?.eventWeights?.[t.id]&&(n+=e.to.eventWeights[t.id]),t.systemModifiers?.onlyInSystemsWithTags&&!t.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(t.systemModifiers?.weightMultiplier&&(n*=t.systemModifiers.weightMultiplier),t.tags.includes("danger")||t.type==="combat"){const o=Math.max(.1,w.eventDangerMultiplier??1);n*=o}e.routeType==="wild_jump"&&t.tags.includes("combat")&&(n+=.15),e.routeType==="trade_lane"&&t.tags.includes("inspection")&&(n+=.25),e.to?.tags.includes("mining_belt")&&(t.type==="mining"||t.tags.includes("mining"))&&(n+=.35),(e.to?.tags.includes("restricted")||e.to?.faction==="unity_church")&&t.tags.includes("inspection")&&(n+=.2),Vt(a,"frontier")&&t.tags.includes("combat")&&(n+=.2),Vt(a,"black_market")&&t.tags.includes("smuggling")&&(n+=.25);const s=W().filter(o=>o.requirements?.travel?.systemId===e.to?.id);return s.length&&t.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let ft=[];function ua(t){ft=t}function pa(t,e=[]){const n=ft.find(o=>o.id===`${t}_loot`);if(n)return n;const a=new Set(e);return ft.find(o=>(o.enemyTags||[]).some(r=>a.has(r)))??null}function gt(t,e){const n=Math.ceil(t),a=Math.floor(Math.max(n,e));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function ma(t){if(!t.length)return null;const e=t.reduce((a,s)=>a+(s.weight||0),0);if(e<=0)return null;let n=Math.random()*e;for(const a of t)if(n-=a.weight||0,n<=0)return a;return t[t.length-1]}function ha(t,e){const n=E(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(t.type){case"credits":{const s=t.min??0,o=t.max??s,r=gt(s,o),l=Math.max(0,Math.round(r*a));i.player.credits+=l,e.creditsEarned+=l,X(l);break}case"commodity":{const s=gt(t.min??1,t.max??t.min??1),o=Math.max(0,Math.round(s*a)),r=fa(t.id||"unknown",o);r>0&&e.commodities.push({id:t.id||"unknown",qty:r});break}case"weapon":{t.id&&(i.inventory.weapons.push(t.id),e.weapons.push(t.id));break}case"component":{t.id&&(i.ship.components.push(t.id),e.components.push(t.id));break}case"mission":{t.id&&Ct(t.id).success&&e.missionsGranted.push(t.id);break}}}function fa(t,e){const n=i.ship.cargo[t]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(e,s));return i.ship.cargo[t]=n+o,o}function ga(t,e,n={},a=[]){const s=E(),o=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const l=pa(t,a);if(!l)return null;const c=n.quickKill?1.5:1,u=n.lowDamageTaken?1.25:1,d={enemyId:t,enemyName:e,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(f,y)=>{if(!f?.length||Math.random()>y)return;const M=ma(f);M&&ha(M,d)};p(l.common,r),p(Yt(l.uncommon,u),.35*r);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(Yt(l.rare,c),m*r),l.guaranteed?.credits){const{min:f,max:y}=l.guaranteed.credits,M=gt(f,y),S=Math.max(0,Math.round(M*o));i.player.credits+=S,d.creditsEarned+=S,X(S)}return d}function Yt(t,e){return!t||e===1?t:t.map(n=>({...n,weight:(n.weight||0)*e}))}const Ut={damageMultiplier:1.25,accuracyMultiplier:.8},va=.6,ba="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",ya="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",Z={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},Ma=Object.keys(Z).map(t=>({type:t,shieldMultiplier:Z[t].shield,hullMultiplier:Z[t].hull,description:Z[t].description}));function $a(t){const e=t.ship,n=e.maxHp||e.hp||0,a=e.maxShields||e.shields||0,s=e.cargoCapacity||0,o=wa(e.weapons),r=Sa(e.modules),l=t.player?.credits??0,c=Math.log10(l+1)*5,u=n+a+o+r+s/2+c;return Math.max(1,Math.round(u))}function Te(t){const e=t/40;return e<0?0:e>1?1:e}function wa(t){return t.reduce((e,n)=>{if(!n)return e;const a=L(n);if(!a)return e;const s=a.damage??0,o=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return e+s*1.5+o*.2+r},0)}function Sa(t){return!t||!t.length?0:t.length*5}const ka=0,xa=100;function _e(t){const e=Math.max(ka,Math.min(xa,(i.player.wanted??0)+t));return i.player.wanted=e,e}function Ca(t){if(!v)throw new Error("Content has not been loaded.");const e=v.enemies.find(n=>n.id===t);if(!e)throw new Error(`Unknown enemy template: ${t}`);return e}function Ta(t,e){return Math.floor(Math.random()*(e-t+1))+t}function C(t){const e=i.combat;if(!e)return;e.log.push(t);const n=10;e.log.length>n&&(e.log=e.log.slice(e.log.length-n))}function _a(t){const e=t.hull+t.shields,n=t.weaponIds.length*15;return e+n}function Y(t){const e=Ca(t),a=i.ship.weapons.map(()=>0),s=e.weaponIds.slice(),o=s.map(()=>0),r=E(),l=r.enemyHpMultiplier??1,c=Math.max(1,Math.round(r.enemyCountMin??1)),u=Math.max(c,Math.round(r.enemyCountMax??c)),d=Math.floor(Math.random()*(u-c+1))+c,p=Math.max(1,d);i.combat={enemyId:e.id,enemyName:e.name,enemyHp:Math.max(1,Math.round(e.hull*l*p)),enemyMaxHp:Math.max(1,Math.round(e.hull*l*p)),enemyShields:Math.max(0,Math.round(e.shields*l*p)),enemyMaxShields:Math.max(0,Math.round(e.shields*l*p)),enemyWeapons:s,enemyCooldowns:o,enemyTags:e.tags||[],enemyCount:p,playerCooldowns:a,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:e.canEscape,totalRounds:1,startingHp:i.ship.hp,round:1,log:[`${e.name} engages you in combat!`],adviceToken:Math.random()},p>1&&i.combat.log.push(`Multiple bogies detected (${p} ships).`),$.go("combat")}function Ea(t){const e=Da(t);Y(e)}function Da(t){if(!v?.enemies?.length)return"pirate_cutter";const e=$a(i),n=Te(i.time.day),a=E(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,i.time.day-1),o=Math.max(0,a.difficultyScalePerShipPower??1),r=e*o*s;let l=r*(.6+.2*n),c=r*(.9+.4*n);t&&ot(t,"core")&&(l=e*.4,c=e*.8);const u=v.enemies.map(f=>({id:f.id,power:_a(f)})),d=u.filter(f=>f.power>=l&&f.power<=c);if(d.length)return d[Math.floor(Math.random()*d.length)].id;let p=u[0],m=Math.abs(u[0].power-e);for(const f of u){const y=Math.abs(f.power-e);y<m&&(p=f,m=y)}return p.id}function ct(t,e,n="normal"){const a=i.combat;if(a){switch(a.playerBracing=!1,t){case"fire":if(e===void 0){C("You must choose a weapon to fire.");return}Ee(e,n);break;case"fire_all":Ia(n);break;case"brace":Ba();break;case"flee":if(Aa())return;break}if(i.combat){if(a.enemyHp<=0){La();return}if(Ra(),!!i.combat){if(i.ship.hp<=0){ja();return}Pa(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Ee(t,e){const n=i.combat;if(!n)return;const a=i.ship;if(t<0||t>=a.weapons.length){C("Invalid weapon slot.");return}const s=a.weapons[t];if(!s){C("That hardpoint is empty.");return}const o=L(s);if(!o){C("Missing weapon data.");return}const r=I(),l=n.round<=1,c={...o,critChance:Math.min(.95,(o.critChance??0)+(r.critBonus??0)+(l?r.critBonus??0:0))},u=n.playerCooldowns[t]??0;if(u>0){C(`${o.name} is still recharging (${u} turn${u===1?"":"s"}).`);return}const d={shields:n.enemyShields,hp:n.enemyHp},p=e==="called_shot"?Ut.damageMultiplier:1,m=e==="called_shot"?Ut.accuracyMultiplier:1,f=Ha(n.playerStance),y=me(c,d,{accuracyMultiplier:m,damageMultiplier:p*f*(r.playerDamageBonus??1)});if(y<=0){const g=e==="called_shot"?"called shot goes wide":"misses";C(`You fire ${o.name}, but it ${g}.`),n.playerCooldowns[t]=o.cooldown;return}nn(y);let M=y;if(n.enemyShields>0){const g=Math.min(n.enemyShields,M);n.enemyShields-=g,M-=g}M>0&&(n.enemyHp=Math.max(0,n.enemyHp-M));const S=d.shields>0?"shields":"hull",h=e==="called_shot"?"called shot":"normal shot";C(`You strike the ${n.enemyName}'s ${S} with ${o.name} (${h}) for ${y} damage.`),y>0&&o.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),C(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[t]=o.cooldown}function Ia(t){const e=i.combat;if(!e)return;const a=i.ship.weapons.map((s,o)=>({id:s,idx:o})).filter(({id:s,idx:o})=>!!s&&(e.playerCooldowns[o]??0)<=0).map(s=>s.idx);if(!a.length){C("No weapons are ready to fire.");return}for(const s of a){if(!i.combat||i.combat.enemyHp<=0)break;Ee(s,t)}}function Ba(){const t=i.combat;t&&(t.playerBracing=!0,C("You brace for impact, diverting power to shields and hull integrity."))}function Aa(){const t=i.combat;if(!t)return!1;if(!t.canEscape)return C("The enemy objectives lock you in place. Flee attempt denied."),!1;const e=.4,n=t.playerStance==="assault"?-.1:t.playerStance==="evasive"?.15:0,a=(i.ship.maneuverRating||0)+(t.playerStatus.maneuverBonus||0),o=nt((a-40)*.01,-.15,.15),r=E(),l=I(),c=(r.fleeSuccessBonus??0)/100+(l.fleeBonus??0),u=nt(e+n+o+c,.05,.95);return Math.random()<=u?(C(`You punch the thrusters and break free! (Flee chance ${(u*100).toFixed(0)}%)`),i.combat=null,$.go("main"),!0):(C(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(u*100).toFixed(0)}%)`),!1)}function Ra(){const t=i.combat;if(!t)return;if(t.enemyStatus.weaponJammedTurns>0){t.enemyStatus.weaponJammedTurns-=1,C("Enemy weapons are jammed this round!");return}const e=[];if(t.enemyWeapons.forEach((m,f)=>{const y=t.enemyCooldowns[f]??0;m&&y<=0&&e.push(f)}),e.length===0){C(`The ${t.enemyName} reloads while you advance.`);return}const n=e[Ta(0,e.length-1)],a=t.enemyWeapons[n],s=L(a);if(!s){C(`The ${t.enemyName} fumbles its weapon.`);return}const o={shields:i.ship.shields,hp:i.ship.hp},r=Math.min(.3,Math.max(0,t.playerStatus.maneuverBonus||0)*.01),l=E(),c=I(),u=t.round<=1;let d=me(s,o,{accuracyMultiplier:Math.max(0,(1-r)*(l.enemyAccuracyMultiplier??1)*Math.max(0,1-(c.dodgeBonus??0))*(u?Math.max(0,1-(c.dodgeBonus??0)):1))});if(d=Math.max(0,Math.round(d*(l.enemyDamageMultiplier??1))),t.enemyCount&&t.enemyCount>1&&(d=Math.max(0,Math.round(d*t.enemyCount))),d<=0){C(`The ${t.enemyName} fires ${s.name}, but misses.`),t.enemyCooldowns[n]=s.cooldown;return}t.playerBracing&&(d=Math.round(d*va)),d=Math.max(0,Math.round(d*Oa(t.playerStance))),d=Math.max(0,Math.round(d*(l.playerDamageTakenMultiplier??1)*Math.max(.1,c.damageTakenMultiplier??1)*(u?Math.max(.1,c.damageTakenMultiplier??1):1)));let p=d;if(t.playerStatus.shieldBoost>0){const m=Math.min(t.playerStatus.shieldBoost,p);t.playerStatus.shieldBoost-=m,p-=m}if(i.ship.shields>0){const m=Math.min(i.ship.shields,p);i.ship.shields-=m,p-=m}p>0&&(i.ship.hp=Math.max(0,i.ship.hp-p)),C(`The ${t.enemyName} hits you with ${s.name} for ${d} damage.`),an(d),t.enemyCooldowns[n]=s.cooldown}function Fa(){const t=i.combat;if(!t)return null;const e=t.enemyCooldowns.length>0?t.enemyCooldowns.map(l=>l??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...e),a=[];if(n<=1){const l=nt(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:l})}if(t.enemyShields<=0){const c=t.playerCooldowns.filter(d=>d<=0).length/Math.max(1,i.ship.weapons.length),u=nt(.6+c*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:u})}i.ship.hp/i.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((t.adviceToken??Math.random())+t.round*.13)%1,o=Math.floor(s*a.length),r=a[o];return{...r,confidence:r.confidence}}function Pa(){const t=i.combat;t&&(t.playerCooldowns=t.playerCooldowns.map(e=>e>0?e-1:0),t.enemyCooldowns=t.enemyCooldowns.map(e=>e>0?e-1:0),t.playerStatus.maneuverTurns>0&&(t.playerStatus.maneuverTurns-=1,t.playerStatus.maneuverTurns<=0&&(t.playerStatus.maneuverBonus=0)),t.playerStatus.shieldTurns>0&&(t.playerStatus.shieldTurns-=1,t.playerStatus.shieldTurns<=0&&(t.playerStatus.shieldBoost=0)))}function La(){const t=i.combat;if(!t)return;C(`The ${t.enemyName} explodes under your punishing fire. Victory is yours.`);const e=Math.max(0,t.startingHp-i.ship.hp),n=t.totalRounds<=3,a=e<=5,s=ga(t.enemyId,t.enemyName,{quickKill:n,lowDamageTaken:a},t.enemyTags||[]);if(s){i.lastBattleResult=s;const o=[];s.creditsEarned&&o.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&o.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&o.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&o.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&o.push(`Missions: ${s.missionsGranted.join(", ")}`),C(`Loot recovered — ${o.join(" | ")||"nothing notable."}`),n&&C("Because you won quickly, salvage yields are richer."),a&&C("Minimal hull damage preserved more intact cargo.")}else C("No notable loot recovered.");if(sn(),on(),Bn(t.enemyId),t.enemyTags?.some(o=>/pirate|raider/i.test(o))||t.enemyId.includes("pirate")||t.enemyId.includes("raider")){const o=E().repGainMultiplier??1;_e(Math.round(3*o))}i.combat=null,$.go("main")}function ja(){C("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),i.ship.hp=0,i.ship.shields=0,i.combat=null,i.notifications.push("Critical failure — hull integrity dropped to zero."),ke("ship_destroyed","Ship destroyed in combat.")}function Na(t){const e=i.combat;e&&(e.playerStance=t,C(`Stance changed to ${t.charAt(0).toUpperCase()+t.slice(1)}.`))}function Ha(t){switch(t){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function Oa(t){switch(t){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function Wa(t,e,n){return Math.max(e,Math.min(n,t))}function It(t){const{systemId:e,state:n,sessionFactor:a}=t,s=v?.systems.find(g=>g.id===e),o=s?.security??"medium",r=E(),l=I();let c;switch(o){case"high":c=.02;break;case"low":c=.12;break;default:c=.06;break}s?.tags.includes("mining_belt")&&(c+=.02),s?.marketProfile?.blackMarket&&(c+=.03);const u=Se(n,e),d=Math.min(.15,u/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),p=qa(n,e),m=a*.03,f=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),y=Math.max(0,Math.min(1,(w.pirateEncounterRate??0)/100)),M=Math.max(0,(r.encounterChancePerJump??100)/100),S=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,l.pirateDetectionMultiplier??1);let h=(c+d+m+p+f+y)*S*M;return za(h,n,e)}function qa(t,e){const n=t.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,o=0;for(const[c,u]of a){if(!u)continue;const d=F(e,c),p=H(c)?.basePrice??d.sell;if(p<=0)continue;const m=(d.sell-p)/p;s+=m*u,o+=u}if(o<=0)return 0;const r=s/o;return Wa(r*.2,0,.15)}function za(t,e,n){const a=Te(e.time.day),s=.4,r=s+(.75-s)*a;let l=t;return ot(n,"core")?(l>.25&&(l=.25),l<.01&&(l=.01),l):(l>r&&(l=r),l<.01&&(l=.01),l)}function Va(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",t.notifications.push(`Contract failed (expired): ${n.name}`))}function Ya(t,e){Ua(t,e).lastRiskSeenDay=t.time.day}function Ua(t,e){t.intel||(t.intel={systems:[]});const n=t.intel.systems.find(s=>s.systemId===e);if(n)return n;const a={systemId:e};return t.intel.systems.push(a),a}const Ga=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],Ja=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]}],Ka={belts:Ga,tables:Ja},Xa="pirate_cutter",vt=Ka,De={careful:{yieldMultiplier:.8,rareMod:.5,lossKey:"carefulLoss"},standard:{yieldMultiplier:1,rareMod:1,lossKey:"standardLoss"},overcharge:{yieldMultiplier:1.3,rareMod:1.5,lossKey:"overchargeLoss"}};function Gt(t,e,n){const a=t.ship.cargo||{},s=Object.values(a).reduce((l,c)=>l+c,0),o=Math.max(0,t.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,o));return r>0&&(a[e]=(a[e]??0)+r,t.ship.cargo=a),t.notifications||(t.notifications=[]),r<n&&t.notifications.push(`Cargo constrained: stored ${r}/${n} ${e}.`),r}function at(t,e){const n=Math.ceil(t),a=Math.floor(e);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Ie(t,e){const n=e?vt.belts.find(s=>s.id===e):null;if(n)return n;const a=vt.belts.find(s=>s.systemId===t);return a||{id:"default_belt",name:"Unmapped Belt",systemId:t,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function Jt(t){return t?vt.tables.find(e=>e.id===t)??null:null}function Kt(t){if(!t||!t.entries.length)return null;const e=t.entries.reduce((r,l)=>r+(l.weight||0),0);if(e<=0)return null;let n=Math.random()*e,a=null;for(const r of t.entries)if(n-=r.weight||0,n<=0){a=r;break}const s=a??t.entries[t.entries.length-1],o=at(s.min,s.max);return{id:s.id,amount:o}}function Qa(t,e,n){const a=e.stability[De[n].lossKey],s=at(a.min,a.max);t.stability=Math.max(0,t.stability-s),t.lastMessage=`Stability dropped by ${s}%.`}function Be(t,e,n,a){const s=Ie(e,n),o=Ae(t,s.id);if(o.depletedUntilDay!==void 0&&t.time.day<o.depletedUntilDay){t.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`);return}const r=It({systemId:e,state:t,sessionFactor:0});t.miningSession={active:!0,systemId:e,beltId:s.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:r,stability:s.stability.start,maxStability:s.stability.start,beltName:s.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0}}function Za(t,e="standard"){const n=t.miningSession;if(!n||!n.active)return null;const a=Ie(n.systemId,n.beltId),s=Jt(a.commonTableId),o=Jt(a.rareTableId),r=De[e],l=Kt(s),c=l?.id??n.resourceId??"aurite_ore",u=l?.amount??at(1,3),d=I(),p=(w.miningYieldMultiplier??1)*(d.miningYield??1),m=Math.max(1,Math.round(u*r.yieldMultiplier*p)),f=Gt(t,c,m),M=Math.max(1,Wt(n.systemId,c))*f;n.minesTaken+=1,n.totalValueMined+=M,Qa(n,a,e);const h=(1-n.stability/Math.max(1,n.maxStability))*.5,g=a.baseRareChance,k=Math.min(1,Math.max(0,(w.rareMineralChance??0)/100))+Math.max(0,(d.rareFindChance??0)-1),T=Math.min(1,g*r.rareMod+h+k);let x=null,R=0;if(o&&Math.random()<=T){const B=Kt(o);if(B){const Q=Gt(t,B.id,B.amount);x={id:B.id,amount:Q},R=Math.max(1,Wt(n.systemId,B.id))*Q,n.totalValueMined+=R}}const P=It({systemId:n.systemId,state:t,sessionFactor:n.minesTaken});n.currentPirateChance=P;const D=Math.random()<=P;D&&(n.active=!1,n.lastMessage="Pirates detected! Breaking off the dig.",Y(Xa));const b=n.stability<=0;if(b){const B=at(2,6);t.ship.hp=Math.max(0,t.ship.hp-B),n.active=!1,n.lastMessage=`Vein collapse! Hull took ${B} damage.`;const Q=Ae(t,a.id);Q.depletedUntilDay=t.time.day+2}else n.lastMessage=`Mined ${f} ${c}${x?`; rare find: ${x.amount} ${x.id}`:""}.`;t.notifications||(t.notifications=[]),t.notifications.push(`Mining haul: ${f} ${c} (~${Math.round(M)} cr).`),x&&t.notifications.push(`Rare find: ${x.amount} ${x.id}.`),n.lastYield={commodityId:c,amount:f,approxValue:Math.round(M+R),rareFind:x};const V=Math.max(1,Math.round((w.miningDuration??5)*Math.max(.1,d.miningSpeed??1)));return t.time.turn+=Mt(V),rn(f+(x?.amount||0),!!x),{minedCommodityId:c,minedAmount:f,pirateEncountered:D,pirateChance:P,rareFound:x,stability:n.stability,collapsed:b}}function ts(t){const e=t.time.day;for(const n of t.miningBelts)n.depletedUntilDay!==void 0&&e>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,t.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Ae(t,e){t.miningBelts||(t.miningBelts=[]);const n=t.miningBelts.find(s=>s.beltId===e);if(n)return n;const a={beltId:e};return t.miningBelts.push(a),a}function es(t){t.miningSession=null}function ns(t){t.time.day+=1,cn(t.time.day),ge(t),aa(t),Pn(t),Va(t),ts(t),t.notifications.push(`Day ${t.time.day}: Market conditions shift across the sector.`),t.notifications.push(`Day ${t.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=t=>{cs(t)};function Re(){return v?v.systemsById:null}function Fe(t){const e=Re();return e?e[t]??null:null}function as(t,e){return t.neighbors.find(n=>n.id===e)??null}let Bt=0,Xt=1;function ss(t){t!==Xt&&(Xt=t,Bt=0)}function At(t){return t<=0?!1:Bt<t}function Rt(){Bt+=1}function z(t){E().showEncounterDebug&&i.notifications.push(`Encounter debug: ${t}`)}function Ft(){return Fe(i.location.systemId)}function is(){const t=Ft();if(!t)return[];const e=Re();return e?t.neighbors.map(n=>{const a=e[n.id];return a?{system:a,route:n,profile:Pe(t,a,n)}:null}).filter(n=>n!==null):[]}function Pe(t,e,n){const a=I(),s=(t.baseDanger+e.baseDanger)/2,o={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},r=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,l=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,c=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,u=(o[t.region]??0)+(o[e.region]??0),d=Math.max(1,Math.round(n.distance*l+Math.max(0,u)*2)),p=st(.1*n.distance+s*.12+c+u+(n.laneType==="wildspace"?.05:0),.1,.95),m=Math.min(.95,Math.max(.1,p)),f=Math.max(0,m-Math.max(0,a.hazardDetectionBonus??0)),y=Math.max(1,Math.round(n.distance*r*(1+s*.06))),M=Math.max(1,Math.round(y*Math.max(.1,a.fuelCostMultiplier??1))),S=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:d,fuelCost:M,hazardChance:f,hazardMitigation:Math.max(0,m-f),routeType:S,laneType:n.laneType,distance:n.distance}}function st(t,e,n){return Math.max(e,Math.min(n,t))}function Le(t){const e=i.ship.cargo||{};let n=0,a=0,s=0;for(const[r,l]of Object.entries(e)){if(!l)continue;const c=H(r);if(!c||c.legalStatus!=="illegal"&&c.legalStatus!=="restricted")continue;const u=F(t.id,r);s+=u.sell*l,c.legalStatus==="illegal"?n+=l:a+=l}const o=n+a;return o<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:o,estimatedValue:s}}function os(t,e,n,a=I()){let s=e.security==="high"?.35:e.security==="low"?.15:.25;e.marketProfile?.blackMarket&&(s*=.65),e.tags.includes("restricted")&&(s+=.12),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const o=1+Math.min(1.5,t.illegalUnits*.1+t.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),l=Math.max(.5,a.illegalTolerance??1);return st(s*o*r/l,0,.95)}function rs(t,e){const n=Le(t);if(!n)return!1;const a=I(),s=os(n,t,e.routeType,a);if(Math.random()>s)return!1;const o=i.ship.cargo||{};let r=0;for(const[p,m]of Object.entries(o)){if(!m)continue;const f=H(p);f&&(f.legalStatus!=="illegal"&&f.legalStatus!=="restricted"||(r+=m,o[p]=0))}i.ship.cargo=o;const l=Math.max(25,Math.round(n.estimatedValue*.35)),c=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,u=l+c;i.player.credits=Math.max(0,i.player.credits-u);const d=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25));return _e(d),i.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${u} credits, wanted +${d}.`),!0}function ls(t,e,n,a){const s=st((t.hazardChance+(t.hazardMitigation??0))*n*a,0,.95),o=st(e,0,.95),r=Math.max(0,Math.round((s-o)*100));r>0&&i.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(o*100).toFixed(0)}%).`)}function cs(t){const e=Ft();if(!v||!e)return;const n=as(e,t);if(!n){console.warn(`System ${t} is not a neighbor of ${e.id}`);return}const a=Fe(t);if(!a)return;const s=Pe(e,a,n),o=Math.max(0,w.fuelCostMultiplier??1),r=Math.max(0,Math.round(s.fuelCost*o)),l=Math.max(0,Math.min(3,(w.travelRiskScaling??100)/100)),c=E(),u=Math.max(0,c.globalDangerMultiplier??1),d=Math.min(.95,Math.max(0,s.hazardChance*l*u)),p={...s,fuelCost:r,hazardChance:d};if(i.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}i.ship.fuel-=p.fuelCost,i.location.systemId=a.id,i.location.docked=!0;const m=Mt(s.travelTime);i.time.turn+=m,Xn(a.id),ns(i),ss(i.time.day),Ya(i,a.id),ln();const f=An(i,a.id);f.completed.length&&console.log(`Arrived at ${a.id}: checked ${f.checked} contracts, completed ${f.completed.join(", ")}.`);const y=Number.isInteger(m)?m.toFixed(0):m.toFixed(2),M=Math.abs(m-1)<.01?"":"s",S=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${y} turn${M}).`;ls(s,p.hazardChance,l,u),rs(a,p)&&z("Contraband inspection triggered on arrival."),!us(a)&&(ps(a)||ds(e,a,p,S)||$.go("main",{message:S}))}function ds(t,e,n,a){const s=E(),o=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:t,to:e,hazardChance:Math.min(1,n.hazardChance*o),routeType:n.routeType},l=fs(e)??ta(r);return l?(z(`Travel event triggered: ${l.name||l.id||"unknown"}`),l.type==="mining"?(z(`Mining event surfaced: ${l.id}`),$.go("event",{eventId:l.id}),!0):!l.choices||l.choices.length===0?(z(`Auto-resolving event: ${l.name||l.id||"unknown"}`),ms(l,a)):($.go("event",{eventId:l.id}),!0)):($.go("main",{message:`${a} — Uneventful transit.`}),!0)}function us(t){const e=E(),n=Math.max(0,e.maxEncountersPerDay??0);if(!At(n))return!1;const a=It({systemId:t.id,state:i,sessionFactor:1});if(Math.random()<=a){Rt();const s=`Pirates intercept you near ${t.name}!`;return i.notifications.push(s),z(`Pirate encounter triggered near ${t.name} (chance ${a.toFixed(3)})`),Ea(t.id),!0}return!1}function ps(t){const e=E(),n=Math.max(0,e.maxEncountersPerDay??0);if(!At(n))return!1;const a=Math.max(0,Math.min(1,(e.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(e.encounterChancePerJump??100)/100),o=t.security==="high"?1.15:t.security==="low"?.65:1,r=I(),l=Le(t),c=l?1+Math.min(1.2,l.totalUnits*.02):1,u=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),d=Math.min(1,a*s*o*c*u);if(Math.random()<=d){Rt();const p=`Patrol intercepts you near ${t.name}!`;return i.notifications.push(p),z(`Patrol encounter triggered near ${t.name} (chance ${d.toFixed(3)})`),Y("navy_interceptor"),!0}return!1}function ms(t,e){const n=na(t);if(n.triggerCombat?.enemyId){const a=E(),s=Math.max(0,a.maxEncountersPerDay??0);if(!At(s))return $.go("main",{message:`${e} — Encounter skipped (cap reached).`}),!0;Rt();const o=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return z(o),Y(n.triggerCombat.enemyId),!0}return $.go("main",{message:`${e} — ${t.name||"Event"} resolved automatically.`}),!0}const hs={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function fs(t){const e=gs(t);return e?Dt(e)??null:null}function gs(t){const e=[],n=new Set(t.tags||[]),a=s=>{e.includes(s)||e.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(hs[t.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||t.faction==="unity_church")&&a("unity_checkpoint"),e.length?e[Math.floor(Math.random()*e.length)]:null}window.attackPirateBase=t=>{const e=vs(t);if(!e){console.warn(`Unknown base ${t}`);return}$.go("event",{eventId:"pirate_base_attack",message:`You are entering ${e.name}. Waves: ${e.maxWaves}. Good luck.`})};function vs(t){return v?v.basesById[t]??null:null}function bs(t){return v?Object.values(v.basesById).find(n=>n.systemId===t)??null:null}function ys(t){return t?`Pirate Base Detected (Tier ${t.tier})`:""}function Ms(){const t=Ft(),e=is(),n=Object.values(i.ship.cargo||{}).reduce((d,p)=>d+p,0),a=e.map(({profile:d})=>d.hazardChance).reduce((d,p)=>Math.max(d,p),0),s=Math.round((a||0)*100);if(!t)return`
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
    `;const o=t?bs(t.id):null,r=ys(o),l=o?`
      <div class="panel-card">
        <p class="label">${r}</p>
        <p class="muted">${o.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${o.id}')">
          Attack Pirate Base (Tier ${o.tier})
        </button>
      </div>
    `:"",c=t?xs(t,e):"",u=e.length===0?'<p class="muted">No nearby systems detected.</p>':e.map(({system:d,route:p,profile:m})=>{const f=$s(d.security),y=ws(d),M=Ss(m.hazardChance),S=`${m.fuelCost} fuel`,h=`${m.travelTime} turn${m.travelTime===1?"":"s"}`,g=ks(p.laneType),k=`Distance: ${p.distance}`,T=y.length?y.join(" · "):"No special tags";return`
              <article class="travel-row">
                <div class="travel-row__main">
                  <span class="travel-row__name">${d.name}</span>
                  <span class="travel-row__label">${f}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${g}</span>
                    <span>${k}</span>
                  </div>
                  <span class="travel-row__label">${S} · ${h} · Risk: ${M}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-primary" onclick="travelToSystem('${d.id}')">Jump to ${d.name}</button>
                  <span class="travel-row__label">${T}</span>
                </div>
              </article>
            `}).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${j(i.time.turn)}</span>
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
          <div class="travel-list">
            ${u}
          </div>
          <div class="panel-card">
            <p class="label">Local View</p>
            ${c}
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${l}
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
  `}function $s(t){switch(t){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${t||"Unknown"} sec`}}function ws(t){const e=[];return t.tags.includes("frontier")&&e.push("▲ Frontier"),t.tags.includes("mining_belt")&&e.push("⛏ Mining"),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&e.push("◆ Trade hub"),(t.tags.includes("restricted")||t.faction==="unity_church")&&e.push("✝ Unity"),e}function Ss(t){return t<.35?"Safe":t<.65?"Moderate":"Hazardous"}function ks(t){switch(t){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function xs(t,e){if(!t)return'<p class="muted">Map data unavailable.</p>';const n=320,a=200,s=16,o=32,r=8,l=8,c=new Map,u=b=>{b&&b.coords&&c.set(b.id,b)};if(u(t),e.forEach(({system:b})=>u(b)),!c.size)return'<p class="muted">No coordinate data to render.</p>';const d=Array.from(c.values()).map(b=>({id:b.id,name:b.name,x:b.coords?.x??0,y:b.coords?.y??0})),p=d.map(b=>b.x),m=d.map(b=>b.y),f=Math.min(...p),y=Math.max(...p),M=Math.min(...m),S=Math.max(...m),h=y-f||1,g=S-M||1,k=b=>s+(b-f)/h*(n-s*2),T=b=>a-(s+(b-M)/g*(a-s*2)),x=new Map(d.map(b=>[b.id,{...b,sx:k(b.x),sy:T(b.y)}])),R=x.get(t.id);if(!R)return'<p class="muted">Current system coordinates missing.</p>';const P=e.map(({system:b,route:V})=>{const B=x.get(b.id);return B?`<line x1="${R.sx.toFixed(1)}" y1="${R.sy.toFixed(1)}" x2="${B.sx.toFixed(1)}" y2="${B.sy.toFixed(1)}" stroke="${Cs(V.laneType)}" stroke-width="2" stroke-linecap="round" opacity="0.9"></line>`:""}).join(""),D=Array.from(x.values()).map(b=>{const V=b.id===t.id,B=b.name.length>16?`${b.name.slice(0,14)}...`:b.name;return`
        <g>
          <circle
            cx="${b.sx.toFixed(1)}"
            cy="${b.sy.toFixed(1)}"
            r="${V?6:5}"
            fill="${V?"#4CE6C3":"#ffffff"}"
            stroke="#0b1116"
            stroke-width="1.5"
          ></circle>
          <text
            x="${(b.sx+r).toFixed(1)}"
            y="${(b.sy-l).toFixed(1)}"
            text-anchor="start"
            font-size="11"
            fill="#ffffff"
          >${B}</text>
        </g>
      `}).join("");return`
    <div class="travel-map" style="max-width:${n}px;margin:0 auto;">
      <svg
        width="${n}"
        height="${a}"
        viewBox="-${o} -${o} ${n+o*2} ${a+o*2}"
        role="img"
        aria-label="Local system map"
      >
        ${P}
        ${D}
      </svg>
    </div>
  `}function Cs(t){switch(t){case"core_lane":return"#4ce6c3";case"frontier_lane":return"#ffb347";default:return"#ff7a7a"}}const Qt={high:"^",low:"v",stable:"-"};function Ts(){const t=O(i.location.systemId);if(!t)return`
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
    `;const e=fe();if(!e.length)return`
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
    `;const n=Object.values(i.ship.cargo||{}).reduce((h,g)=>h+g,0),a=Object.entries(i.ship.cargo||{}).filter(([,h])=>h>0).sort((h,g)=>g[1]-h[1]).slice(0,5),s=new Map;W().filter(h=>h.status==="active").forEach(h=>{const g=h.requirements?.deliver;if(!g?.commodityId)return;const k=s.get(g.commodityId)??{needed:0,deliverable:!1},T=et(g.commodityId)>=(g.quantity||0),x=!g.systemId||g.systemId===i.location.systemId;s.set(g.commodityId,{needed:k.needed+(g.quantity||0),deliverable:k.deliverable||x&&T})});const o=e.map(h=>{const g=F(t.id,h.id),k=Bs(h.tradeTags?.length?h.tradeTags:h.tags),T=et(h.id),x=As(h,T),R=je(g.buy,n,h.id);return{commodity:h,quote:g,tags:k,cargoQty:T,metaLine:x,maxBuyable:R,profit:g.sell-g.buy}}),r=o.reduce((h,g)=>g.profit>h.value?{id:g.commodity.id,value:g.profit}:h,{id:o[0]?.commodity.id??"",value:Number.NEGATIVE_INFINITY}).id,l=o.map(({commodity:h,quote:g,tags:k,cargoQty:T,metaLine:x,maxBuyable:R})=>{pt(t.id,h.id,1),mt(t.id,h.id,1);const P=s.get(h.id),D=["market-row"];h.id===r&&D.push("market-row--highlight");const b=P?`<span class="contract-pill${P.deliverable?" ready":""}">${P.deliverable?"Deliver now":"Needed"}</span>`:"";return`
        <article class="${D.join(" ")}">
          <div class="market-row__main">
            <span class="market-row__name">${h.name}</span>
            <span class="market-row__info">
              BUY ${g.buy} · SELL ${g.sell} · Held ${T}
            </span>
          </div>
          <div class="market-row__meta">
            <span class="market-row__trend">${Qt[g.trend]} ${g.trend}</span>
            <span>${k||"Local goods"}</span>
            ${b}
          </div>
        </article>
      `}).join(""),c=n>0,u=`
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
          <strong>${j(i.time.turn)}</strong>
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
        Credits: ${i.player.credits} | Cargo: ${_s()}
      </p>
      <div class="market-summary__cargo">
        ${a.length?a.map(([h,g])=>{const k=H(h),T=k?.mass??0,x=T?` (Mass ${Math.round(T*g)})`:"";return`<span>${g} × ${k?.name||h}${x}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${c?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,d=o.find(h=>h.commodity.id===r)??o[0],p=d?pt(t.id,d.commodity.id,1):!1,m=d?mt(t.id,d.commodity.id,1):!1,f=d&&p?"":" disabled",y=d&&d.maxBuyable>1&&p?"":" disabled",M=d&&m&&d.cargoQty>0?"":" disabled",S=d?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${d.commodity.name}</strong>
        <span class="market-row__trend">${Qt[d.quote.trend]} ${d.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${d.quote.buy} · SELL ${d.quote.sell}</span>
        <span>${d.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${f}
          onclick="buyCommodityAction('${d.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${y}
          onclick="buyAllCommodityAction('${d.commodity.id}', ${d.quote.buy})"
        >
          Buy Max (${d.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${M}
          onclick="sellCommodityAction('${d.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${M}
          onclick="sellAllCommodityAction('${d.commodity.id}')"
        >
          Sell All (${d.cargoQty})
        </button>
      </div>
    </div>
  `:"";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Market · ${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${j(i.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${u}
            ${Es(t.id)}
            ${Ds(t)}
          </aside>
          <div class="market-list">
            ${l}
            ${S}
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
  `}function _s(){const t=i.ship.cargo||{};return`${Object.values(t).reduce((n,a)=>n+a,0)}/${i.ship.cargoCapacity}`}function Es(t){const e=Kn(t);return e.length?`
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
    `}function Ds(t){const e=$e();return`
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (100 cr). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel</button>
      </div>
      ${(t?.neighbors.map(s=>O(s.id)).filter(s=>!!s&&e[s.id])||[]).map(s=>{const o=Is(t?.id,s.id),r=i.time.turn-(e[s.id]?.turn??i.time.turn),l=o.over?`${o.over.id} overpriced (+${Math.round(o.over.delta*100)}%)`:"no strong overpay",c=o.under?`${o.under.id} underpriced (${Math.round(o.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${s.name} (age ${r}t): Sell -> ${l} | Buy -> ${c}</p>`}).join("")||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function Is(t,e){if(!t)return{over:null,under:null};const a=$e()[e];if(!a)return{over:null,under:null};let s=null,o=null;const r=Math.max(0,i.time.turn-a.turn),l=Math.max(.5,1-r*.05);for(const[c,u]of Object.entries(a.prices)){const d=F(t,c);if(d.sell>0&&u.buy>d.sell){const p=(u.buy-d.sell)/d.sell*l;(!s||p>s.delta)&&(s={id:c,delta:p})}if(d.buy>0&&u.sell<d.buy){const p=(d.buy-u.sell)/d.buy*l;(!o||p>o.delta)&&(o={id:c,delta:p})}}return{over:s,under:o}}function je(t,e,n){if(t<=0)return 0;const a=Math.floor(i.player.credits/t),s=Math.max(0,i.ship.cargoCapacity-e);return Math.max(0,Math.min(a,s))}function Bs(t){return t?.length?Array.from(new Set(t)).map(n=>Pt(n.replace(/_/g," "))).join(" | "):""}function As(t,e){const n=Pt(t.tier||"standard"),a=Rs(t.legalStatus||"legal"),s=typeof t.mass=="number"?`${t.mass}t`:null,o=[`Held ${e}`,`Tier ${n}`,a];return s&&o.push(`Mass ${s}`),o.join(" | ")}function Pt(t){return t.split(" ").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function Rs(t){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[t]??Pt(t)}window.buyCommodityAction=t=>{const e=i.location.systemId,n=H(t),a=we(e,t,1),s=F(e,t).buy,o=document.getElementById("market-message");o&&(o.textContent=a?`Bought 1 ${n?.name||t} for ${s} cr.`:`Cannot buy ${n?.name||t}.`),nav("market")};window.sellCommodityAction=t=>{const e=i.location.systemId,n=H(t),a=_t(e,t,1),s=F(e,t).sell,o=document.getElementById("market-message");o&&(o.textContent=a?`Sold 1 ${n?.name||t} for ${s} cr.`:`Cannot sell ${n?.name||t}.`),nav("market")};window.buyAllCommodityAction=(t,e)=>{const n=i.location.systemId,a=i.ship.cargo||{},s=Object.values(a).reduce((c,u)=>c+u,0),o=je(e,s);if(o<=0){nav("market");return}we(n,t,o);const r=H(t),l=document.getElementById("market-message");l&&(l.textContent=`Bought ${o} ${r?.name||t} for ${e*o} cr.`),nav("market")};window.sellAllCommodityAction=t=>{const e=i.location.systemId,n=et(t);if(n<=0){nav("market");return}const a=F(e,t).sell;_t(e,t,n);const s=H(t),o=document.getElementById("market-message");o&&(o.textContent=`Sold ${n} ${s?.name||t} for ${a*n} cr.`),nav("market")};window.sellAllCargoAction=()=>{const t=i.location.systemId,e=Object.entries(i.ship.cargo||{});let n=0;const a=[];for(const[o,r]of e){if(!r||!_t(t,o,r))continue;n+=r;const c=H(o);a.push(`${r} ${c?.name||o}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const o=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${o}).`}nav("market")};window.purchaseNeighborIntel=()=>{const t=Qn(),e=document.getElementById("market-message");e&&(e.textContent=t.message),nav("market")};function Fs(t){if(!t)return[];if(Array.isArray(t))return t.filter(e=>typeof e=="string");if(typeof t=="string")try{const e=JSON.parse(t);if(Array.isArray(e))return e.filter(n=>typeof n=="string")}catch{return t.split(",").map(e=>e.trim()).filter(Boolean)}return[]}function Ps(t={}){const e=typeof t.message=="string"?t.message:"",n=W(),a=Sn(),s=Object.values(i.ship.cargo||{}).reduce((d,p)=>d+p,0),r=Fs(t.selectedMissionIds)[0]??(typeof t.selectedMissionId=="string"?t.selectedMissionId:""),l=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(d=>{const p=d.requirements||{},m=Zt(p.travel?.systemId);return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${d.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${d.name}</span>
                    <span class="contract-type">${d.type}</span>
                  </div>
                  ${d.description?`<p class="muted">${d.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${kn(d)}</span>
                    <span>${xn(d)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${m}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',c=r?[r]:a[0]?[a[0].id]:[],u=a.length>0?`
        <div class="contract-list">
          ${a.map(d=>{const p=Zt(d.requirements?.travel?.systemId),m=["contract-row"];return c.includes(d.id)&&m.push("contract-row--active"),`
                <article class="${m.join(" ")}" onclick="acceptContract('${d.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${d.name}</span>
                    <span class="contract-type">${d.type}</span>
                  </div>
                  <p class="muted">${d.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${p}</span>
                    <span>Reward: ${Ls(d.reward)}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No available missions.</p>';return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Contracts</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${j(i.time.turn)}</span>
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
        <section class="data-panel contract-section">
          <h1 class="panel-title">Contracts</h1>
          ${e?`<p class="muted">${e}</p>`:""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${l}</div>
          <h2 class="panel-title">Available</h2>
          <div class="panel-row">
            ${u}
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
  `}function Zt(t){if(!t)return"Unknown";const e=O(t);return e?.name?`<strong>${e.name}</strong>`:t}function Ls(t){if(!t)return"None";const e=[];if(t.credits&&e.push(`${t.credits} credits`),t.rep){const n=Object.entries(t.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");e.push(`Rep: ${n}`)}if(t.weapon){const n=L(t.weapon)?.name||t.weapon;e.push(`Weapon: ${n}`)}return e.join(" | ")||"None"}window.acceptContract=t=>{const e=Ct(t),n=e.success?"Mission accepted.":e.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=t=>{const e=En(t),n=e.success?"Mission abandoned.":e.reason||"Unable to abandon.";nav("contracts",{message:n})};const js={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Lt(t){return v?v.ships.find(e=>e.id===t)??null:null}function Ns(){return Lt(i.ship.templateId)}function Hs(){return v?v.ships.filter(t=>t.starter):[]}function Os(){return v?v.ships.filter(t=>!t.starter):[]}function Ne(t,e){const n=Lt(t);if(!n){console.warn(`Unknown ship template: ${t}`);return}const a=n.hardpoints.map(()=>null),s=[],o={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,l)=>js[`${r.size}:${r.type}`]??a[l]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};i.ship=o,yt(),wt()}function Ws(t){Ne(t),i.player.hasChosenStarter=!0}function qs(t){const e=Lt(t);return e?e.starter?(console.warn("Starter ships are not sold at shipyards."),!1):i.player.credits<e.cost?(console.warn("Not enough credits to buy this ship."),!1):(i.player.credits-=e.cost,Ne(t),!0):(console.warn(`Unknown ship template: ${t}`),!1)}function zs(){const t=i.ship,e=t.maxHp-t.hp,n=t.maxShields-t.shields;if(e<=0&&n<=0)return;const a=e+n;if(i.player.credits<a){console.warn("Not enough credits to fully repair.");return}i.player.credits-=a,t.hp=t.maxHp,t.shields=t.maxShields}function Vs(){const t=i.ship,e=t.maxFuel-t.fuel;if(e<=0)return;const a=e*2;if(i.player.credits<a){console.warn("Not enough credits to fully refuel.");return}i.player.credits-=a,t.fuel=t.maxFuel}function Ys(){return v?v.components:[]}function Us(){if(!v)return[];const t=i.ship.components;return v.components.filter(e=>t.includes(e.id))}function Gs(t){if(!v)return!1;const e=v.components.find(n=>n.id===t);return e?i.player.credits<e.cost?(console.warn("Not enough credits to buy this component."),!1):i.ship.components.includes(t)?(console.warn("Component already installed."),!1):(i.player.credits-=e.cost,i.ship.components.push(t),Js(e),!0):(console.warn(`Unknown component: ${t}`),!1)}function Js(t){const e=i.ship;switch(t.effectType){case"hull":e.maxHp+=t.value,e.hp+=t.value;break;case"shields":e.maxShields+=t.value,e.shields+=t.value;break;case"fuel":e.maxFuel+=t.value,e.fuel+=t.value;break;case"cargo":e.cargoCapacity+=t.value;break}}window.repairShipAction=()=>{zs(),nav("ship")};window.refuelShipAction=()=>{Vs(),nav("ship")};function Ks(){const t=i.ship,e=Ns(),n=Us(),a=i.combat?.playerCooldowns??[],s=Object.values(t.cargo||{}).reduce((l,c)=>l+c,0),o=e?`<p class="muted">${e.description}</p>`:`<p class="muted">Unknown template (${t.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(l=>`<li>${l.name} (+${l.value} ${l.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${t.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${j(i.time.turn)}</span>
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
            ${t.hardpoints.map((l,c)=>{const u=L(t.weapons[c]),d=u?.name||"Empty",p=a[c]??0,m=u?kt(u):null,f=m?`
                    <p class="muted">Role: ${m.role} (${m.typeLabel})</p>
                    <p class="muted">Vs Shields: ${m.vsShields} · Vs Hull: ${m.vsHull}</p>
                    ${m.tagNotes.length?`<p class="muted">Traits: ${m.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${c+1} · ${l.size} ${l.type}</p>
                    <p class="value-inline">${d}</p>
                    <p class="muted">${p>0?`${p} turn${p===1?"":"s"} left`:"Ready"}</p>
                    ${f}
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
  `}function Xs(t={}){const e=typeof t.eventId=="string"?t.eventId:"",n=Dt(e);if(!n)return`
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
    `;const a=Qs(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${Zs(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
      <div class="screen-actions"></div>
    </div>
  `}function Qs(t){return!t||!t.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${t.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",o=n.risk?`<span class="choice-risk">Risk: ${ti(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${o}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function Zs(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function ti(t){return typeof t!="number"?"0%":`${Math.round(t*100)}%`}window.pickChoice=t=>{const e=$.params,n=typeof e.eventId=="string"?e.eventId:"",a=Dt(n);if(!a){nav("main");return}const s=a.choices?.[t];if(s){const o=ea(s);if(o.triggerCombat?.enemyId){Y(o.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(t,e)=>{Be(i,i.location.systemId,t||void 0,e||void 0),$.go("mining")};window.fireWeapon=(t,e="normal")=>{ct("fire",t,e),i.combat&&nav("combat")};window.brace=()=>{ct("brace"),i.combat&&nav("combat")};window.flee=()=>{ct("flee"),i.combat&&nav("combat")};window.setStance=t=>{Na(t),i.combat&&nav("combat")};window.fireAllWeapons=(t="normal")=>{ct("fire_all",void 0,t),i.combat&&nav("combat")};function ei(){const t=i.combat;if(!t)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const e=i.ship,n=t.log.map(u=>`<div class="log-line">${u}</div>`).join(""),a=e.hardpoints.map((u,d)=>{const p=e.weapons[d],m=L(p),f=t.playerCooldowns[d]??0,y=!!m&&f===0;return`
        <div class="panel-card">
          <p class="label">Slot ${d+1} · ${u.size.toUpperCase()} ${u.type}</p>
          <p class="value-inline">${m?.name||"Empty"}</p>
          <p class="muted">${f>0?`Cooling (${f})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${y?"":"disabled"} onclick="fireWeapon(${d}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${y?"":"disabled"} onclick="fireWeapon(${d}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),s=Ma.map(u=>`
        <tr>
          <td>${u.type}</td>
          <td>${u.shieldMultiplier.toFixed(2)}x</td>
          <td>${u.hullMultiplier.toFixed(2)}x</td>
          <td>${u.description}</td>
        </tr>
      `).join(""),o=Fa(),r=o?`<p class="combat-advice ${o.suggestion}">
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
          <span>Turn ${j(i.time.turn)} · Round ${t.round}</span>
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
            <p><strong>Called Shot</strong>: ${ba}</p>
            <p><strong>Brace vs Attack</strong>: ${ya}</p>
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
  `}window.buyShipAction=t=>{qs(t)};window.buyComponentAction=t=>{Gs(t)};window.buyWeaponAction=t=>{bn(t)};function ni(){if(!ot(i.location.systemId,"shipyard"))return`
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
    `;const t=Os(),e=Ys(),n=gn(),a=$t().map(c=>L(c)?.name).filter(Boolean),s=t.length===0?'<p class="muted">No ships are currently for sale.</p>':`
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
            ${n.map(c=>{const u=kt(c),d=u.tagNotes.length?`Traits: ${u.tagNotes.join(", ")}`:"";return`
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
                    <td class="muted">${u.role} (${u.typeLabel}) — Vs Shields: ${u.vsShields}, Vs Hull: ${u.vsHull}</td>
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
  `}const ai={incomeMultiplier:t=>_(t,"income"),eventRewardMultiplier:t=>_(t,"event rewards"),hpBonus:t=>_(t,"hull"),cargoBonus:t=>ii(t,"cargo capacity"),sellBonus:t=>_(t,"sell price"),buyBonus:t=>_(t,"buy price"),marketTax:t=>_(t,"market tax"),miningYield:t=>_(t,"mining yield"),rareFindChance:t=>_(t,"rare find chance"),miningSpeed:t=>_(t,"mining duration"),dodgeBonus:t=>tt(t,"dodge chance"),critBonus:t=>tt(t,"crit chance"),damageTakenMultiplier:t=>_(t,"damage taken"),fleeBonus:t=>tt(t,"flee chance"),pirateDetectionMultiplier:t=>_(t,"pirate detection"),scanDetectionMultiplier:t=>_(t,"scan detection"),illegalTolerance:t=>_(t,"illegal tolerance"),fuelCostMultiplier:t=>_(t,"fuel cost"),hazardDetectionBonus:t=>tt(t,"hazard detection"),anomalyChance:t=>_(t,"anomaly chance"),shieldRegenBonus:t=>_(t,"shield regen")};function si(t){const e=t.passive?.effects;return e?Object.entries(e).map(([n,a])=>ai[n]?.(a)??null).filter(n=>!!n):[]}function _(t,e){if(!Number.isFinite(t))return null;const n=Math.round((t-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${e}`}function tt(t,e){if(!Number.isFinite(t))return null;const n=Math.round(t*100);return n===0?null:`${n>0?"+":""}${n}% ${e}`}function ii(t,e){if(!Number.isFinite(t))return null;const n=Math.round(t);return n===0?null:`${n>0?"+":""}${n} ${e}`}window.chooseStarter=t=>{Ws(t),wt(),$.go("main")};function oi(){const t=Hs();if(t.length===0)return`
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
    `;const e=t.map(n=>{const a=si(n),s=n.passive?.name?`
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
          <span>Turn ${j(i.time.turn)}</span>
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
  `}function ri(){const t=i.ship;if(!t.hardpoints.length)return`
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
    `;const e=t.hardpoints.map((n,a)=>{const o=L(t.weapons[a])?.name||"Empty";return`
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
          <span>Turn ${j(i.time.turn)}</span>
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
  `}window.equipWeaponAction=(t,e)=>{vn(t,e)&&nav("weapon_slots")};function li(t={}){const e=typeof t.slotIndex=="number"&&t.slotIndex>=0?t.slotIndex:0,n=i.ship.hardpoints[e];if(!n)return`
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
    `;const r=$t().map(l=>L(l)).filter(l=>!!l).map(l=>{const c=St(e,l.id),d=L(i.ship.weapons[e])?.id===l.id?"Equipped":"Equip",p=kt(l),m=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${c?"":"muted"}">
          <p class="label">${l.size} / ${l.type}</p>
          <p class="value-inline"><strong>${l.name}</strong></p>
          <p class="muted">Damage ${l.damage} (${l.damageType}) · Acc ${Math.round(l.accuracy*100)}% · Crit ${Math.round(l.critChance*100)}% (×${l.critMultiplier}) · CD ${l.cooldown}</p>
          <p class="muted">Role: ${p.role} (${p.typeLabel}) · Vs Shields: ${p.vsShields} · Vs Hull: ${p.vsHull}${m}</p>
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
          <span>Turn ${j(i.time.turn)}</span>
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
  `}window.leaveMining=()=>{es(i),$.go("main")};function jt(t){Za(i,t)?.pirateEncountered||$.go("mining")}window.mineCareful=()=>jt("careful");window.mineStandard=()=>jt("standard");window.mineOvercharge=()=>jt("overcharge");function ci(){const t=i.miningSession;if(!t)return`
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
    `}const e=Se(i,t.systemId),n=Math.max(0,Math.round(t.stability/Math.max(1,t.maxStability)*100)),a=t.lastYield?`<p>Last haul: ${t.lastYield.amount} ${t.lastYield.commodityId} (~${t.lastYield.approxValue} cr)${t.lastYield.rareFind?` + rare ${t.lastYield.rareFind.amount} ${t.lastYield.rareFind.id}`:""}</p>`:"",s=t.lastMessage?`<p class="muted">${t.lastMessage}</p>`:"";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Mining — ${t.beltName||t.beltId||t.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${j(i.time.turn)}</span>
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
  `}window.startNewRun=()=>xe(!1);window.returnToMainMenu=()=>xe(!0);function di(){const t=i.gameOver?.summary,e=Xe(),n=t?.message||"Your run has ended.",a=t?.score??0,s=[["Days survived",t?.stats.daysSurvived??0],["Systems visited",t?.stats.systemsVisited??0],["Jumps completed",t?.stats.jumpsMade??0]],o=[["Credits earned",t?.stats.creditsEarnedTotal??0],["Highest net worth",t?.stats.highestNetWorth??0],["Trade profit",t?.stats.tradeProfitTotal??0],["Most traded",t?.stats.mostTradedCommodityId&&t.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",t?.stats.contractsCompleted??0],["Contract payouts",t?.stats.contractPayoutTotal??0]],l=[["Fights survived",t?.stats.fightsSurvived??0],["Ships destroyed",t?.stats.shipsDestroyed??0],["Damage dealt",t?.stats.damageDealtTotal??0],["Damage taken",t?.stats.damageTakenTotal??0]],c=[["Mining runs",t?.stats.miningRuns??0],["Ore mined",t?.stats.oreMinedTotal??0],["Rare finds",t?.stats.rareFinds??0]],u=p=>p.map(([m,f])=>`
      <tr>
        <td>${m}</td>
        <td>${f}</td>
      </tr>
    `).join(""),d=e.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${e.map((p,m)=>`
                  <tr>
                    <td>${m+1}</td>
                    <td>${p.score}</td>
                    <td>${p.daysSurvived}</td>
                    <td>${p.contractsCompleted}</td>
                    <td>${p.shipsDestroyed}</td>
                    <td>${p.reason.replace(/_/g," ")}</td>
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
          <table>${u(s)}</table>
        </section>
        <section class="data-panel">
          <h2>Economy</h2>
          <table>${u(o)}</table>
        </section>
        <section class="data-panel">
          <h2>Contracts</h2>
          <table>${u(r)}</table>
        </section>
        <section class="data-panel">
          <h2>Combat</h2>
          <table>${u(l)}</table>
        </section>
        <section class="data-panel">
          <h2>Mining</h2>
          <table>${u(c)}</table>
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
  `}const He=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:t=>`${t.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:t=>`${t.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:t=>t?"On":"Off"}]}],ui=He.flatMap(t=>t.controls).reduce((t,e)=>(t[e.path]=e,t),{});function bt(t){const e=t.split(".");let n=w;for(const a of e){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function pi(t,e){const n=t.split(".");let a=w;for(let s=0;s<n.length-1;s++){const o=n[s];a[o]=a[o]??{},a=a[o]}a[n[n.length-1]]=e}window.devCombat=(t="pirate_cutter")=>{Y(t)};window.devMining=()=>{Be(i,i.location.systemId),$.go("mining")};function mi(){return He.map(t=>{const e=t.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(bt(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${bt(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${t.title}</h3>
        ${e}
      </section>
    `}).join("")}function it(){const t=document.getElementById("app");if(!t)return;let e="";switch($.current){case"main":e=un();break;case"travel":e=Ms();break;case"market":e=Ts();break;case"contracts":e=Ps();break;case"ship":e=Ks();break;case"event":e=Xs($.params);break;case"combat":e=ei($.params);break;case"weapon_slots":e=ri();break;case"weapon_select":e=li($.params);break;case"shipyard":e=ni();break;case"ship_select":e=oi();break;case"mining":e=ci();break;case"gameover":e=di();break}const n=$.current!=="main"?`
        <div class="menu-back">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
        </div>
      `:"",a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${mi()}
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
            <button class="btn btn-ghost" id="devHardReset">Hard Reset Game</button>
          </div>
      </section>
    </div>
  `;t.innerHTML=`${n}${e}${a}`,hi()}let U=!1,te=!1;function hi(){const t=document.getElementById("navDev"),e=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),o=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),l=document.getElementById("devGodMode"),c=document.getElementById("navTravel"),u=document.getElementById("navMarket"),d=document.getElementById("navShip"),p=document.getElementById("devPersistEvents"),m=document.getElementById("devClearEvents"),f=document.getElementById("devHardReset"),y=e?.querySelectorAll("input[data-dev-path]"),M=()=>{e&&e.classList.toggle("hidden")},S=h=>{const g=ui[h],k=document.getElementById(`devValue-${h.replace(/\./g,"__")}`);g&&k&&(k.textContent=g.formatter(bt(h)))};y?.forEach(h=>{const g=()=>{const k=h.dataset.devPath;if(!k)return;const T=Number(h.value);pi(k,T),Ye(),S(k)};h.addEventListener("input",g)}),t?.addEventListener("click",M),n?.addEventListener("click",()=>e?.classList.add("hidden")),c?.addEventListener("click",()=>window.nav?.("travel")),u?.addEventListener("click",()=>window.nav?.("market")),d?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devMining?.()}),o?.addEventListener("click",()=>{i.player.credits+=1e3,e?.classList.add("hidden"),it()}),r?.addEventListener("click",()=>{const h=i.ship.cargo||{};h.aurite_ore=(h.aurite_ore||0)+20,i.ship.cargo=h,e?.classList.add("hidden"),it()}),l?.addEventListener("click",()=>{U=!U,i.godMode=U,U&&(i.ship.hp=i.ship.maxHp,i.ship.shields=i.ship.maxShields),alert(`God Mode: ${U?"On":"Off"}`)}),p?.addEventListener("click",()=>{sa(),alert("Events cached locally. Future loads will honor this list.")}),m?.addEventListener("click",()=>{ia(),alert("Event cache cleared. Future loads use the bundled data.")}),f?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),te||(document.addEventListener("keydown",h=>{h.key==="`"&&M(),h.key==="Escape"&&$.current!=="main"&&window.nav?.("main")}),te=!0)}let v=null;async function fi(){const t="/space/".replace(/\/+$/,"/"),e=D=>`${t}content/${D}`,[n,a,s,o,r,l,c,u,d]=await Promise.all([fetch(e("systems.json")),fetch(e("ships.json")),fetch(e("components.json")),fetch(e("commodities.json")),fetch(e("weapons.json")),fetch(e("enemies.json")),fetch(e("events.json")),fetch(e("loot_tables.json")),fetch(e("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!o.ok)throw new Error(`Failed to load commodities.json: ${o.status}`);if(!l.ok)throw new Error(`Failed to load enemies.json: ${l.status}`);if(!c.ok)throw new Error(`Failed to load events.json: ${c.status}`);if(!u.ok)throw new Error(`Failed to load loot_tables.json: ${u.status}`);if(!d.ok)throw new Error(`Failed to load missions.json: ${d.status}`);const p=await n.json(),m=await a.json(),f=await s.json(),y=await o.json(),M=await r.json(),S=await l.json(),h=await fetch(e("bases.json"));if(!h.ok)throw new Error(`Failed to load bases.json: ${h.status}`);const g=await h.json(),k={};for(const D of p)k[D.id]=D;const T=await c.json();Zn(T);const x=await u.json();ua(x);const R=await d.json();$n(R);const P={};for(const D of g)P[D.id]=D;return{systems:p,systemsById:k,bases:g,basesById:P,ships:m,components:f,commodities:y,weapons:M,enemies:S,events:T,lootTables:x,missions:R}}async function gi(){v=await fi();const t=ae();se(t),oe();const e=ze();if(e){const a=i.ship.hardpoints.length,s=[];for(let o=0;o<a;o++)s.push(e.weapons[o]??null);i.ship.weapons=s,i.inventory.weapons=e.inventory}wt();const n=$.go.bind($);$.go=(a,s)=>{n(a,s),it()},window.nav=(a,s={})=>{$.go(a,s)},$.current=i.player.hasChosenStarter?"main":"ship_select",it()}function O(t){return v?v.systemsById[t]??null:null}document.addEventListener("DOMContentLoaded",()=>{gi()});
