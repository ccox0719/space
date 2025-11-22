(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Oe=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],Nt=Oe,F=Nt.find(t=>t.starter)??Nt[0],We=F?.hardpoints.length??0,qe={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function ee(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let i;const ne="cosmo_weapon_loadout";function ze(){if(typeof window>"u"||!window.localStorage)return null;const t=window.localStorage.getItem(ne);if(!t)return null;try{const e=JSON.parse(t);return{weapons:Array.isArray(e.weapons)?e.weapons:[],inventory:Array.isArray(e.inventory)?e.inventory:[]}}catch{return null}}function bt(){if(typeof window>"u"||!window.localStorage)return;const t={weapons:i.ship.weapons,inventory:i.inventory?.weapons??[]};window.localStorage.setItem(ne,JSON.stringify(t))}function ae(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:F?.id??"none",name:F?.name??"Undefined Hull",hp:F?.hull??0,maxHp:F?.hull??0,shields:F?.shields??0,maxShields:F?.shields??0,fuel:F?.fuel??0,maxFuel:F?.fuel??0,cargoCapacity:F?.cargo??0,cargo:{},modules:[],weapons:F?.hardpoints.map(t=>qe[`${t.size}:${t.type}`]??null)??Array(We).fill(null),weaponPower:12,evasion:5,maneuverRating:F?.maneuverRating??0,components:[],hardpoints:F?.hardpoints.map(t=>({...t}))??[],passive:F?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},intel:{systems:[]},runStats:ee(),gameOver:{active:!1,reason:null}}}function se(t){i=t}const ie="space-dev-tune",z={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:1,enemyDamageMultiplier:1,enemyAccuracyMultiplier:1,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:1,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:100,nonPirateEventWeight:1,showEncounterDebug:0}};let k={...z};function Ve(t){return{...z.combat,...t}}function oe(){if(typeof window>"u"||!window.localStorage){k={...z};return}const t=window.localStorage.getItem(ie);if(!t){k={...z};return}try{const e=JSON.parse(t),n={};typeof e.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=e.enemyHpMultiplier),typeof e.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=e.enemyDamageMultiplier),typeof e.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=e.combatRewardMultiplier),typeof e.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=e.pirateEncounterRate);const a=Ve({...e.combat,...n});k={...z,...e,combat:a}}catch{k={...z}}}function Ye(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(ie,JSON.stringify(k))}function Mt(t){const e=k.progressionSpeedMultiplier??1;return t*e}function A(){return k.combat??z.combat}function Ue(){return i.ship.passive?.effects??{}}const re="cosmo_run_high_scores",le=5;function Ge(){return i?{...i.runStats,commodityVolumes:{...i.runStats.commodityVolumes}}:ee()}function Je(t){return Math.round(t.creditsEarnedTotal/10+t.contractsCompleted*50+t.shipsDestroyed*30+t.rareFinds*40+t.systemsVisited*5+t.daysSurvived*3)}function ce(){if(typeof window>"u"||!window.localStorage)return[];const t=window.localStorage.getItem(re);if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.slice(0,le):[]}catch{return[]}}function Ke(t){typeof window>"u"||!window.localStorage||window.localStorage.setItem(re,JSON.stringify(t.slice(0,le)))}function Xe(){return ce()}function Qe(t){const e=ce();e.push(t),e.sort((n,a)=>a.score-n.score),Ke(e)}function Q(t){if(!i||t<=0)return;i.runStats.creditsEarnedTotal+=t;const e=i.player.credits;e>i.runStats.highestNetWorth&&(i.runStats.highestNetWorth=e)}function Ze(t,e,n){if(!i)return;i.runStats.tradeProfitTotal+=Math.max(0,n);const a=i.runStats.commodityVolumes;a[t]=(a[t]||0)+e;const s=i.runStats.mostTradedCommodityId;(!s||a[t]>a[s])&&(i.runStats.mostTradedCommodityId=t)}function tn(t){!i||t<=0||(i.runStats.contractPayoutTotal+=t)}function en(){i&&(i.runStats.contractsCompleted+=1)}function nn(t){!i||t<=0||(i.runStats.damageDealtTotal+=t)}function an(t){!i||t<=0||(i.runStats.damageTakenTotal+=t)}function sn(){i&&(i.runStats.fightsSurvived+=1)}function on(){i&&(i.runStats.shipsDestroyed+=1)}function rn(t,e){!i||t<=0||(i.runStats.miningRuns+=1,i.runStats.oreMinedTotal+=t,e&&(i.runStats.rareFinds+=1))}function ln(){i&&(i.runStats.jumpsMade+=1,i.runStats.systemsVisited+=1)}function cn(t){i&&(i.runStats.daysSurvived=Math.max(i.runStats.daysSurvived,t))}const w={current:"main",params:{},go(t,e={}){this.current=t,this.params=e}};function j(t){if(!Number.isFinite(t))return String(t);const e=Number(t.toFixed(2));return Number.isInteger(e)?String(e):String(e).replace(/\.?0+$/,"")}function dn(t){return g?g.systemsById[t]??null:null}function ot(t,e){const n=dn(t);return n?n.tags.includes(e):!1}window.nav=(t,e={})=>{w.go(t,e)};function un(){const t=i,e=W(t.location.systemId),n=Object.values(t.ship.cargo||{}).reduce((s,o)=>s+o,0),a=t.notifications[t.notifications.length-1];return`
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
  `}function R(){return Ue()}function de(){const t=R(),e=Math.max(0,t.incomeMultiplier??1),n=Math.max(0,A().globalIncomeMultiplier??1);return e*n}const pn=-100,mn=100;function hn(t,e){const n=i.reputation[t]||0,a=fn(n+e);return i.reputation[t]=a,a}function ue(t){for(const[e,n]of Object.entries(t))hn(e,n)}function fn(t){return Math.max(pn,Math.min(mn,t))}const dt={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function gn(){return g?g.weapons:[]}function pe(){return i.inventory||(i.inventory={weapons:[]}),i.inventory}function $t(){return[...pe().weapons]}function wt(){if(!g)return;const t=$t();if(!t.length)return;const e=i.ship;e.weapons=e.weapons.map((n,a)=>{if(n)return n;const s=t.filter(r=>St(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function St(t,e){const n=i.ship,a=g?.weapons.find(o=>o.id===e);if(!a)return!1;const s=n.hardpoints[t];return s?a.size===s.size&&a.type===s.type:!1}function vn(t,e){return St(t,e)?(i.ship.weapons[t]=e,bt(),!0):!1}function L(t){return!t||!g?null:g.weapons.find(e=>e.id===t)??null}function yn(t){const e=L(t);return!e||i.player.credits<e.price?!1:(pe().weapons.push(t),i.player.credits-=e.price,bt(),!0)}function me(t,e,n={}){const a=t.tags||[];let s=t.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let o=t.damage;const r=e.shields>0?"shields":"hull",l=dt[t.damageType]?.[r]??1,c=r==="shields"?t.shieldMod:t.armorMod;return o*=c*l,r==="shields"&&a.includes("shield_breaker")&&(o*=1.2),r==="hull"&&a.includes("armor_piercing")&&(o*=1.2),Math.random()<t.critChance&&(o*=t.critMultiplier),o*=n.damageMultiplier??1,Math.max(0,Math.round(o))}const bn={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},Mn={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Ht(t){return t>1.1?"Strong":t<.95?"Weak":"Normal"}const Ot={shields:"Shield-breaker",hull:"Hull buster"};function kt(t){const e=t.damageType,n=dt[e]??dt.kinetic,a=Ht(n.shields),s=Ht(n.hull);let o="Balanced";a==="Strong"&&s==="Weak"?o=Ot.shields:s==="Strong"&&a==="Weak"?o=Ot.hull:a==="Strong"&&s==="Strong"&&(o="Devastating");const r=(t.tags||[]).map(l=>Mn[l]).filter(Boolean);return{role:o,vsShields:a,vsHull:s,typeLabel:bn[e]??e,tagNotes:r}}let xt=[];function $n(t){xt=t}function wn(t){return xt.find(e=>e.id===t)}function Sn(){const t=new Set(i.contracts.filter(e=>e.status==="active").map(e=>e.id));return xt.filter(e=>!t.has(e.id))}function q(){return i.contracts.filter(t=>t.status==="active")}function kn(t){const e=t.requirements,n=s=>s?`<strong>${W(s)?.name||s}</strong>`:"",a=[];if(e?.travel?.systemId){const s=n(e.travel.systemId);a.push(`Travel to ${s}`)}if(e?.deliver?.commodityId){const s=e.deliver.quantity||0,o=e.deliver.systemId?` at ${n(e.deliver.systemId)}`:"";a.push(`Deliver ${s} ${e.deliver.commodityId}${o}`)}return e?.combat?.enemyId&&a.push(`Defeat ${e.combat.enemyId}`),a.join(" • ")||"No special requirements."}function xn(t){const e=t.requirements,n=t.progress||{},a=[];if(e?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),e?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${e.deliver.quantity||0}`)}return e?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||t.status}function Ct(t){const e=wn(t);if(!e)return{success:!1,reason:"Unknown mission"};if(i.contracts.some(a=>a.id===t&&a.status==="active"))return{success:!1,reason:"Mission already active"};const n={id:e.id,name:e.name,description:e.description,type:e.type,status:"active",sourceFaction:e.factionId,reward:e.reward,requirements:e.requirements,acceptedTurn:i.time.turn,progress:{}};return i.contracts.push(n),{success:!0}}function Cn(t,e){if(!t.reward)return;const n=t.reward;if(n.credits){const a=Math.max(.1,Math.min(5,k.contractPayoutMultiplier??1)),s=de(),o=Math.max(0,R().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*o));i.player.credits+=r,Q(r),tn(r),i.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){ue(n.rep);const a=Object.entries(n.rep).map(([s,o])=>`${s} ${o>=0?"+":""}${o}`).join(", ");a&&i.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=i.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),i.inventory=a;const s=L(n.weapon)?.name??n.weapon;i.notifications.push(`Rewarded weapon: ${s}.`)}}function Tn(){q().forEach(t=>{const e=t.requirements?.failureAfterTurns;if(e&&t.acceptedTurn!=null){const n=Math.max(.1,k.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(e/n));i.time.turn-t.acceptedTurn>=a&&_n(t.id)}})}function _n(t){const e=i.contracts.find(n=>n.id===t&&n.status==="active");e&&(e.status="failed",rt(`Mission failed: ${e.name}`))}function En(t){const e=i.contracts.find(n=>n.id===t&&n.status==="active");return e?(e.status="failed",rt(`Mission abandoned: ${e.name}`),{success:!0}):{success:!1,reason:"Mission not active"}}function Dn(t){q().forEach(e=>{const n=e.requirements?.travel;if(e.progress=e.progress||{},n?.systemId===t&&(e.progress.travelCompleted=!0,K(e)),e.requirements?.multiTravel?.length){const s=new Set(e.progress?.multiTravelVisited??[]);s.add(t),e.progress.multiTravelVisited=Array.from(s),K(e)}})}function In(t,e,n){q().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==t||s.systemId&&s.systemId!==n)return;const o=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=o+e,K(a)})}function Bn(t){q().forEach(e=>{e.requirements?.combat?.enemyId===t&&(e.progress=e.progress||{},e.progress.combatCompleted=!0,K(e))})}function An(t,e){Dn(e);const n=t.ship.cargo||={};let a=0;const s=[];for(const o of q()){const r=o.status,l=o.requirements?.deliver;if(!l||!l.commodityId||(l.systemId??e)!==e||(a+=1,!Rn(n,l)))continue;l.retain||Fn(n,l),o.progress=o.progress||{};const d=o.progress.deliveredQuantity||0;o.progress.deliveredQuantity=d+(l.quantity||1),K(o),r!=="completed"&&o.status==="completed"&&s.push(o.name)}if(s.length){const o=`Contracts completed: ${s.join(", ")}`;t.notifications.push(o)}return{checked:a,completed:s}}function Rn(t,e){const n=Math.max(1,e.quantity??1);return(t[e.commodityId]??0)>=n}function Fn(t,e){const n=Math.max(1,e.quantity??1),a=t[e.commodityId]??0;t[e.commodityId]=Math.max(0,a-n)}function K(t){if(!t.requirements||t.status!=="active")return;const{travel:e,deliver:n,combat:a}=t.requirements,s=t.progress||{},o=t.requirements?.multiTravel,r=e?!!s.travelCompleted:!0,l=n?s.deliveredQuantity>=(n.quantity||0):!0,c=a?!!s.combatCompleted:!0,d=s.multiTravelVisited??[],u=o?o.every(p=>d.includes(p)):!0;r&&l&&c&&u&&(t.status="completed",Cn(t),en(),rt(`Mission completed: ${t.name}`))}function rt(t){i.notifications.push(t)}function Pn(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",rt(`Mission failed (expired): ${n.name}`))}const he="__global__",Ln={buyMultiplier:1,sellMultiplier:.85},jn={basic:.9,standard:1,strategic:1.2,luxury:1.35};function lt(){return i.ship.cargo||(i.ship.cargo={}),i.ship.cargo}function Nn(){const t=lt();return Object.values(t).reduce((e,n)=>e+n,0)}function fe(){return g?.commodities??[]}function H(t){return fe().find(n=>n.id===t)??null}function N(){return i.marketState?(i.marketState.temporaryModifiers=i.marketState.temporaryModifiers||{},i.marketState.activeEvents=i.marketState.activeEvents||[],i.marketState.localAdjustments=i.marketState.localAdjustments||{},i.marketState.priceIntel=i.marketState.priceIntel||{},i.marketState.initialDriftSeeded=i.marketState.initialDriftSeeded??!1):i.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},i.marketState}function Hn(t){i.intel||(i.intel={systems:[]});const e=i.intel.systems.find(n=>n.systemId===t)??(()=>{const n={systemId:t};return i.intel.systems.push(n),n})();e.lastPriceSeenDay=i.time.day}function On(t){const e=N();let n=1;const a=e.temporaryModifiers[he];a&&(n*=Math.max(0,a.multiplier));const s=e.temporaryModifiers[t];return s&&(n*=Math.max(0,s.multiplier)),n}function Wn(t,e){const n=e>0?e:1,a=t/n;return a>=1.15?"high":a<=.85?"low":"stable"}function qn(t,e){const n=t.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(e.id),o=n.exports?.includes(e.id);return s&&(a*=1.2),o&&(a*=.85),e.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function Tt(t){const e=Math.min(Math.max(t.volatility??.25,0),1),n=Math.min(2,Math.max(0,(k.marketPriceVolatility??100)/100));return Math.min(1,e*n)}function zn(t,e){const n=Math.max(1,e.basePrice),a=jn[e.tier??"standard"]??1,s=t.marketModifiers?.[e.id]??1,o=qn(t,e),l=1+Tt(e)*.08,c=On(e.id),d=Gn(t.id,e.id),u=ye(t.id,e.id),p=n*a*s*o*l*c*d*u;return Math.max(1,Math.round(p))}function Wt(t,e){return P(t,e).base}function P(t,e){const n=W(t),a=H(e);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=zn(n,a),o=a.baseSpread??Ln,r=Tt(a),l=R(),c=Math.max(.1,Math.min(3,k.tradeProfitMultiplier??1)),d=de(),u=Math.max(.5,l.buyBonus??1),p=Math.max(0,l.sellBonus??1),m=Math.max(.5,l.marketTax??1),h=Math.max(1,Math.round(s*(o.buyMultiplier??1)*(1+r*.05)/c*u)),b=Math.max(1,Math.round(s*(o.sellMultiplier??.85)*Math.max(.6,1-r*.05)*c*d*p*m)),$=Math.max(h,b,Math.round(s*(1+r*.1))),x=Math.max(1,Math.min(h,b,Math.round(s*Math.max(.65,1-r*.2)))),M=Wn(s,a.basePrice);return Hn(t),{base:s,buy:h,sell:b,high:$,low:x,trend:M}}function ut(t,e,n=2){const a=N(),s=t&&t.length?t:he;a.temporaryModifiers[s]={multiplier:Math.max(0,e),remainingTurns:Math.max(1,Math.floor(n))}}function ge(t=1){if(typeof t=="number"){Vn(t);return}Yn(t??i)}function Vn(t){if(t<=0)return;const e=N(),n=Object.keys(e.temporaryModifiers);for(const s of n){const o=e.temporaryModifiers[s];o.remainingTurns-=t,o.remainingTurns<=0&&delete e.temporaryModifiers[s]}const a=i.time.turn;e.activeEvents=e.activeEvents.filter(s=>s.expiresAtTurn>a),Me(e,.2*t)}function Yn(t){const e=N(),n=g?.systems??[],a=g?.commodities??[],s=t.time.day;Un(e,n,a);for(const o of n)for(const r of a){const l=ye(o.id,r.id),c=Tt(r),d=k.marketDailyTrendStrength??1,u=(1-l)*.1*d,p=(Math.random()-.5)*.1*(.5+c)*d,m=be(l+u+p);e.localAdjustments[o.id]||(e.localAdjustments[o.id]={}),e.localAdjustments[o.id][r.id]=m}e.activeEvents=e.activeEvents.filter(o=>!(o.expiresAtDay!==void 0&&s>=o.expiresAtDay||o.expiresAtTurn&&o.expiresAtTurn<=t.time.turn)),Me(e,.1)}function Un(t,e,n){if(!t.initialDriftSeeded){for(const a of e){t.localAdjustments[a.id]||(t.localAdjustments[a.id]={});for(const s of n){const o=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));t.localAdjustments[a.id][s.id]=o}}t.initialDriftSeeded=!0}}function et(t){return lt()[t]??0}function Gn(t,e){return N().activeEvents.filter(a=>(a.expiresAtDay===void 0||i.time.day<a.expiresAtDay)&&a.expiresAtTurn>i.time.turn&&(!a.systemId||a.systemId===t)&&(!a.commodityId||a.commodityId===e)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function Jn(t){N().activeEvents.push(t)}function Kn(t){return N().activeEvents.filter(n=>n.expiresAtTurn>i.time.turn&&(n.expiresAtDay===void 0||i.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===t))}function Xn(t){if(Math.random()>.08||!g?.commodities?.length)return;const n=g.commodities[Math.floor(Math.random()*g.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,o={systemId:t,commodityId:n.id,multiplier:s,expiresAtTurn:i.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};Jn(o),i.notifications.push(`Market shift in ${t}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function ve(t,e,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,l=Math.min(.15,.03*r),c=N();c.localAdjustments[t]||(c.localAdjustments[t]={});const d=c.localAdjustments[t][e]??1,u=s==="buy"?1+l:1-l,p=be(d*u);c.localAdjustments[t][e]=p}function ye(t,e){return N().localAdjustments[t]?.[e]??1}function be(t){return Math.min(2,Math.max(.5,t))}function Me(t,e){for(const[n,a]of Object.entries(t.localAdjustments)){for(const[s,o]of Object.entries(a)){const r=o-1,l=o-r*e;Math.abs(l-1)<.01?delete a[s]:a[s]=l}Object.keys(a).length||delete t.localAdjustments[n]}}function Qn(){const e=W(i.location.systemId)?.neighbors.map(s=>W(s.id)).filter(s=>!!s)||[];if(!e.length)return{success:!1,message:"No neighboring systems to scan."};const n=100;if(i.player.credits<n)return{success:!1,message:"Not enough credits for intel."};i.player.credits-=n;const a=N();return e.forEach(s=>{const o={};(g?.commodities||[]).forEach(l=>{const c=P(s.id,l.id);o[l.id]={buy:c.buy,sell:c.sell}});const r={turn:i.time.turn,prices:o};a.priceIntel[s.id]=r}),{success:!0,message:"Purchased neighbor intel."}}function $e(){return N().priceIntel}function pt(t,e,n){if(n<=0)return!1;const a=P(t,e).buy;if(a<=0)return!1;const s=a*n;if(i.player.credits<s)return!1;const o=i.ship.cargoCapacity;return o<=0?!1:Nn()+n<=o}function mt(t,e,n){return n<=0?!1:et(e)>=n}function we(t,e,n){if(!pt(t,e,n))return!1;const a=P(t,e).buy,s=a*n;i.player.credits-=s;const o=lt();return o[e]=(o[e]||0)+n,ve(t,e,n,a,"buy"),!0}function _t(t,e,n){if(!mt(t,e,n))return!1;const a=P(t,e).sell,s=a*n,o=lt();return o[e]=Math.max(0,(o[e]||0)-n),i.player.credits+=s,Q(s),Ze(e,n,s),ve(t,e,n,a,"sell"),In(e,n,t),!0}function Se(t,e){const n=t.ship.cargo||{};return Object.entries(n).reduce((a,[s,o])=>{if(!o)return a;const r=P(e,s).sell;return a+r*o},0)}const qt={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function ke(t,e){if(!i||i.gameOver.active)return;const n=Ge(),a=Je(n),s={score:a,reason:t,message:e??qt[t]??qt.other,location:i.location.systemId,stats:n};i.combat=null,i.miningSession=null,i.gameOver={active:!0,reason:t,message:s.message,summary:s};const o={score:a,reason:t,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};Qe(o),w.go("gameover")}function xe(t=!1){const e=ae();se(e),oe(),w.go(t?"main":"ship_select")}const Et="space-events-cache";let X=[];function Zn(t){const e=ra();X=oa(t,e),Ce(X)}function Dt(t){return X.find(e=>e.id===t)}function ta(t){if(!t.to)return;const e=Math.max(0,Math.min(1,t.hazardChance??.4));if(Math.random()>e)return;const n=A(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,R().anomalyChance??1),s=Math.min(1,Math.max(0,(k.eventFrequency??50)/100*a));if(Math.random()>s)return;const o=X.map(c=>({ev:c,weight:da(c,t)})).filter(c=>c.weight>0);if(!o.length)return;const r=o.reduce((c,d)=>c+d.weight,0);let l=Math.random()*r;for(const c of o)if(l-=c.weight,l<=0)return c.ev;return o[0].ev}function ea(t){const e=t.outcomes;if(!e)return{};const n={},a=R(),s=Math.max(.1,Math.min(5,k.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),o=r=>{i.player.credits+=r,Q(r),i.player.credits<0&&(i.player.credits=0)};if(e.giveCredits){const r=e.giveCredits.min??0,l=e.giveCredits.max??r,c=J(r,l),d=Math.round(c*s);o(d),i.notifications.push(`Received ${d} credits.`)}if(typeof e.creditsDelta=="number"){const r=Math.round(e.creditsDelta*s);o(r)}if(typeof e.fuelDelta=="number"){const r=i.ship.maxFuel,l=e.fuelDelta>0?Math.max(0,Math.round(e.fuelDelta*s)):e.fuelDelta;i.ship.fuel=Math.max(0,Math.min(r,i.ship.fuel+l))}if(typeof e.turnDelta=="number"){const r=Mt(e.turnDelta);i.time.turn+=r,Tn(),ge(r)}if(e.cargoGain&&zt(la(e.cargoGain,s,1),1),e.cargoLoss&&zt(e.cargoLoss,-1),e.giveCommodity){const r=J(e.giveCommodity.min,e.giveCommodity.max),l=Math.max(0,Math.round(r*s));ht(e.giveCommodity.id,l),l>0&&i.notifications.push(`Collected ${l} ${e.giveCommodity.id}.`)}if(e.giveWeapon&&(i.inventory.weapons.push(e.giveWeapon),i.notifications.push(`Acquired weapon: ${e.giveWeapon}.`)),e.damageShip){const r=e.damageShip.min??0,l=e.damageShip.max??r,c=J(r,l);if(i.ship.hp=Math.max(0,i.ship.hp-c),i.notifications.push(`Ship took ${c} damage.`),i.ship.hp<=0)return ke("ship_destroyed","Ship destroyed by event."),n}return e.applyStatus&&i.notifications.push(`Status effect applied: ${JSON.stringify(e.applyStatus)}.`),typeof e.spawnMissionId=="string"&&Ct(e.spawnMissionId).success&&i.notifications.push(`New mission received: ${e.spawnMissionId}`),typeof e.flag=="string"&&i.notifications.push(`Event flag: ${e.flag}`),e.modifyReputation&&ue({[e.modifyReputation.faction]:e.modifyReputation.amount}),e.triggerCombat?.enemyId&&(n.triggerCombat=e.triggerCombat),n}function na(t){const e={},n=t.autoResolve;if(!n)return e;const a=Math.max(.1,Math.min(5,k.eventRewardMultiplier??1))*Math.max(.1,R().eventRewardMultiplier??1);if(n.mining){const s=J(n.mining.quantity.min,n.mining.quantity.max),o=Math.max(0,Math.round(s*a));ht(n.mining.commodityId,o),i.notifications.push(`Mining yield: ${o} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=J(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),o=i.ship.maxFuel;i.ship.fuel=Math.max(0,Math.min(o,i.ship.fuel-s)),i.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];ht(s,1),i.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(i.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),ut(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(e.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),e}function aa(t){const e=t.time.day;t.marketState?.activeEvents&&(t.marketState.activeEvents=t.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||e<s.expiresAtDay));const n=Math.min(1,Math.max(0,(k.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(k.marketCrashChance??5)/100));if(t.location?.systemId){const s=g?.commodities?.[Math.floor(Math.random()*(g?.commodities.length||1))];if(s){const o=t.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const l=1.1+Math.random()*.35;ut(s.id,l,r),t.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:Math.max(0,l),expiresAtDay:e+r,expiresAtTurn:t.time.turn+r*2,label:`${s.name} surge`}),t.notifications.push(`Market surge in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const l=Math.max(.5,.85-Math.random()*.25);ut(s.id,l,r),t.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:l,expiresAtDay:e+r,expiresAtTurn:t.time.turn+r*2,label:`${s.name} slip`}),t.notifications.push(`Market slip in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}}}}function sa(){Ce(X)}function ia(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(Et)}function oa(t,e){if(!e?.length)return t;const n=new Map;for(const a of t)n.set(a.id,a);for(const a of e)n.set(a.id,a);return Array.from(n.values())}function ra(){if(typeof window>"u"||!window.localStorage)return null;const t=window.localStorage.getItem(Et);if(!t)return null;try{const e=JSON.parse(t);if(Array.isArray(e))return e}catch{}return null}function Ce(t){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Et,JSON.stringify(t))}function zt(t,e){for(const[n,a]of Object.entries(t)){const s=i.ship.cargo[n]??0,o=Math.max(0,s+a*e);i.ship.cargo[n]=o}}function la(t,e,n=1){const a={};for(const[s,o]of Object.entries(t)){if(o<=0){a[s]=o;continue}const r=Math.max(n,Math.round(o*e));a[s]=r}return a}function ht(t,e){const n=i.ship.cargo[t]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(e,s));i.ship.cargo[t]=n+o,o<e&&i.notifications.push(`Cargo full: stored ${o}/${e} ${t}.`)}function J(t,e){const n=Number.isFinite(t)?t:0,a=Number.isFinite(e)?e:n,s=Math.ceil(n),o=Math.floor(Math.max(s,a));return o<=s?s:Math.floor(Math.random()*(o-s+1))+s}function ca(t){const e=new Set;return(t.to?.tags||[]).forEach(n=>e.add(n)),(t.from?.tags||[]).forEach(n=>e.add(n)),e}function Vt(t,e){return t.has(e)}function da(t,e){let n=t.weight??0;const a=ca(e);if(e.to?.eventWeights?.[t.id]&&(n+=e.to.eventWeights[t.id]),t.systemModifiers?.onlyInSystemsWithTags&&!t.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(t.systemModifiers?.weightMultiplier&&(n*=t.systemModifiers.weightMultiplier),t.tags.includes("danger")||t.type==="combat"){const o=Math.max(.1,k.eventDangerMultiplier??1);n*=o}e.routeType==="wild_jump"&&t.tags.includes("combat")&&(n+=.15),e.routeType==="trade_lane"&&t.tags.includes("inspection")&&(n+=.25),e.to?.tags.includes("mining_belt")&&(t.type==="mining"||t.tags.includes("mining"))&&(n+=.35),(e.to?.tags.includes("restricted")||e.to?.faction==="unity_church")&&t.tags.includes("inspection")&&(n+=.2),Vt(a,"frontier")&&t.tags.includes("combat")&&(n+=.2),Vt(a,"black_market")&&t.tags.includes("smuggling")&&(n+=.25);const s=q().filter(o=>o.requirements?.travel?.systemId===e.to?.id);return s.length&&t.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let ft=[];function ua(t){ft=t}function pa(t,e=[]){const n=ft.find(o=>o.id===`${t}_loot`);if(n)return n;const a=new Set(e);return ft.find(o=>(o.enemyTags||[]).some(r=>a.has(r)))??null}function gt(t,e){const n=Math.ceil(t),a=Math.floor(Math.max(n,e));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function ma(t){if(!t.length)return null;const e=t.reduce((a,s)=>a+(s.weight||0),0);if(e<=0)return null;let n=Math.random()*e;for(const a of t)if(n-=a.weight||0,n<=0)return a;return t[t.length-1]}function ha(t,e){const n=A(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(t.type){case"credits":{const s=t.min??0,o=t.max??s,r=gt(s,o),l=Math.max(0,Math.round(r*a));i.player.credits+=l,e.creditsEarned+=l,Q(l);break}case"commodity":{const s=gt(t.min??1,t.max??t.min??1),o=Math.max(0,Math.round(s*a)),r=fa(t.id||"unknown",o);r>0&&e.commodities.push({id:t.id||"unknown",qty:r});break}case"weapon":{t.id&&(i.inventory.weapons.push(t.id),e.weapons.push(t.id));break}case"component":{t.id&&(i.ship.components.push(t.id),e.components.push(t.id));break}case"mission":{t.id&&Ct(t.id).success&&e.missionsGranted.push(t.id);break}}}function fa(t,e){const n=i.ship.cargo[t]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(e,s));return i.ship.cargo[t]=n+o,o}function ga(t,e,n={},a=[]){const s=A(),o=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const l=pa(t,a);if(!l)return null;const c=n.quickKill?1.5:1,d=n.lowDamageTaken?1.25:1,u={enemyId:t,enemyName:e,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(h,b)=>{if(!h?.length||Math.random()>b)return;const $=ma(h);$&&ha($,u)};p(l.common,r),p(Yt(l.uncommon,d),.35*r);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(Yt(l.rare,c),m*r),l.guaranteed?.credits){const{min:h,max:b}=l.guaranteed.credits,$=gt(h,b),x=Math.max(0,Math.round($*o));i.player.credits+=x,u.creditsEarned+=x,Q(x)}return u}function Yt(t,e){return!t||e===1?t:t.map(n=>({...n,weight:(n.weight||0)*e}))}const Ut={damageMultiplier:1.25,accuracyMultiplier:.8},va=.6,ya="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",ba="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",Z={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},Ma=Object.keys(Z).map(t=>({type:t,shieldMultiplier:Z[t].shield,hullMultiplier:Z[t].hull,description:Z[t].description}));function $a(t){const e=t.ship,n=e.maxHp||e.hp||0,a=e.maxShields||e.shields||0,s=e.cargoCapacity||0,o=wa(e.weapons),r=Sa(e.modules),l=t.player?.credits??0,c=Math.log10(l+1)*5,d=n+a+o+r+s/2+c;return Math.max(1,Math.round(d))}function Te(t){const e=t/40;return e<0?0:e>1?1:e}function wa(t){return t.reduce((e,n)=>{if(!n)return e;const a=L(n);if(!a)return e;const s=a.damage??0,o=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return e+s*1.5+o*.2+r},0)}function Sa(t){return!t||!t.length?0:t.length*5}const ka=0,xa=100;function _e(t){const e=Math.max(ka,Math.min(xa,(i.player.wanted??0)+t));return i.player.wanted=e,e}function Ca(t){if(!g)throw new Error("Content has not been loaded.");const e=g.enemies.find(n=>n.id===t);if(!e)throw new Error(`Unknown enemy template: ${t}`);return e}function Ta(t,e){return Math.floor(Math.random()*(e-t+1))+t}function C(t){const e=i.combat;if(!e)return;e.log.push(t);const n=10;e.log.length>n&&(e.log=e.log.slice(e.log.length-n))}function _a(t){const e=t.hull+t.shields,n=t.weaponIds.length*15;return e+n}function U(t){const e=Ca(t),a=i.ship.weapons.map(()=>0),s=e.weaponIds.slice(),o=s.map(()=>0),r=A(),l=r.enemyHpMultiplier??1,c=Math.max(1,Math.round(r.enemyCountMin??1)),d=Math.max(c,Math.round(r.enemyCountMax??c)),u=Math.floor(Math.random()*(d-c+1))+c,p=Math.max(1,u);i.combat={enemyId:e.id,enemyName:e.name,enemyHp:Math.max(1,Math.round(e.hull*l*p)),enemyMaxHp:Math.max(1,Math.round(e.hull*l*p)),enemyShields:Math.max(0,Math.round(e.shields*l*p)),enemyMaxShields:Math.max(0,Math.round(e.shields*l*p)),enemyWeapons:s,enemyCooldowns:o,enemyTags:e.tags||[],enemyCount:p,playerCooldowns:a,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:e.canEscape,totalRounds:1,startingHp:i.ship.hp,round:1,log:[`${e.name} engages you in combat!`],adviceToken:Math.random()},p>1&&i.combat.log.push(`Multiple bogies detected (${p} ships).`),w.go("combat")}function Ea(t){const e=Da(t);U(e)}function Da(t){if(!g?.enemies?.length)return"pirate_cutter";const e=$a(i),n=Te(i.time.day),a=A(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,i.time.day-1),o=Math.max(0,a.difficultyScalePerShipPower??1),r=e*o*s;let l=r*(.6+.2*n),c=r*(.9+.4*n);t&&ot(t,"core")&&(l=e*.4,c=e*.8);const d=g.enemies.map(h=>({id:h.id,power:_a(h)})),u=d.filter(h=>h.power>=l&&h.power<=c);if(u.length)return u[Math.floor(Math.random()*u.length)].id;let p=d[0],m=Math.abs(d[0].power-e);for(const h of d){const b=Math.abs(h.power-e);b<m&&(p=h,m=b)}return p.id}function ct(t,e,n="normal"){const a=i.combat;if(a){switch(a.playerBracing=!1,t){case"fire":if(e===void 0){C("You must choose a weapon to fire.");return}Ee(e,n);break;case"fire_all":Ia(n);break;case"brace":Ba();break;case"flee":if(Aa())return;break}if(i.combat){if(a.enemyHp<=0){La();return}if(Ra(),!!i.combat){if(i.ship.hp<=0){ja();return}Pa(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Ee(t,e){const n=i.combat;if(!n)return;const a=i.ship;if(t<0||t>=a.weapons.length){C("Invalid weapon slot.");return}const s=a.weapons[t];if(!s){C("That hardpoint is empty.");return}const o=L(s);if(!o){C("Missing weapon data.");return}const r=R(),l=n.round<=1,c={...o,critChance:Math.min(.95,(o.critChance??0)+(r.critBonus??0)+(l?r.critBonus??0:0))},d=n.playerCooldowns[t]??0;if(d>0){C(`${o.name} is still recharging (${d} turn${d===1?"":"s"}).`);return}const u={shields:n.enemyShields,hp:n.enemyHp},p=e==="called_shot"?Ut.damageMultiplier:1,m=e==="called_shot"?Ut.accuracyMultiplier:1,h=Ha(n.playerStance),b=me(c,u,{accuracyMultiplier:m,damageMultiplier:p*h*(r.playerDamageBonus??1)});if(b<=0){const T=e==="called_shot"?"called shot goes wide":"misses";C(`You fire ${o.name}, but it ${T}.`),n.playerCooldowns[t]=o.cooldown;return}nn(b);let $=b;if(n.enemyShields>0){const T=Math.min(n.enemyShields,$);n.enemyShields-=T,$-=T}$>0&&(n.enemyHp=Math.max(0,n.enemyHp-$));const x=u.shields>0?"shields":"hull",M=e==="called_shot"?"called shot":"normal shot";C(`You strike the ${n.enemyName}'s ${x} with ${o.name} (${M}) for ${b} damage.`),b>0&&o.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),C(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[t]=o.cooldown}function Ia(t){const e=i.combat;if(!e)return;const a=i.ship.weapons.map((s,o)=>({id:s,idx:o})).filter(({id:s,idx:o})=>!!s&&(e.playerCooldowns[o]??0)<=0).map(s=>s.idx);if(!a.length){C("No weapons are ready to fire.");return}for(const s of a){if(!i.combat||i.combat.enemyHp<=0)break;Ee(s,t)}}function Ba(){const t=i.combat;t&&(t.playerBracing=!0,C("You brace for impact, diverting power to shields and hull integrity."))}function Aa(){const t=i.combat;if(!t)return!1;if(!t.canEscape)return C("The enemy objectives lock you in place. Flee attempt denied."),!1;const e=.4,n=t.playerStance==="assault"?-.1:t.playerStance==="evasive"?.15:0,a=(i.ship.maneuverRating||0)+(t.playerStatus.maneuverBonus||0),o=nt((a-40)*.01,-.15,.15),r=A(),l=R(),c=(r.fleeSuccessBonus??0)/100+(l.fleeBonus??0),d=nt(e+n+o+c,.05,.95);return Math.random()<=d?(C(`You punch the thrusters and break free! (Flee chance ${(d*100).toFixed(0)}%)`),i.combat=null,w.go("main"),!0):(C(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(d*100).toFixed(0)}%)`),!1)}function Ra(){const t=i.combat;if(!t)return;if(t.enemyStatus.weaponJammedTurns>0){t.enemyStatus.weaponJammedTurns-=1,C("Enemy weapons are jammed this round!");return}const e=[];if(t.enemyWeapons.forEach((m,h)=>{const b=t.enemyCooldowns[h]??0;m&&b<=0&&e.push(h)}),e.length===0){C(`The ${t.enemyName} reloads while you advance.`);return}const n=e[Ta(0,e.length-1)],a=t.enemyWeapons[n],s=L(a);if(!s){C(`The ${t.enemyName} fumbles its weapon.`);return}const o={shields:i.ship.shields,hp:i.ship.hp},r=Math.min(.3,Math.max(0,t.playerStatus.maneuverBonus||0)*.01),l=A(),c=R(),d=t.round<=1;let u=me(s,o,{accuracyMultiplier:Math.max(0,(1-r)*(l.enemyAccuracyMultiplier??1)*Math.max(0,1-(c.dodgeBonus??0))*(d?Math.max(0,1-(c.dodgeBonus??0)):1))});if(u=Math.max(0,Math.round(u*(l.enemyDamageMultiplier??1))),t.enemyCount&&t.enemyCount>1&&(u=Math.max(0,Math.round(u*t.enemyCount))),u<=0){C(`The ${t.enemyName} fires ${s.name}, but misses.`),t.enemyCooldowns[n]=s.cooldown;return}t.playerBracing&&(u=Math.round(u*va)),u=Math.max(0,Math.round(u*Oa(t.playerStance))),u=Math.max(0,Math.round(u*(l.playerDamageTakenMultiplier??1)*Math.max(.1,c.damageTakenMultiplier??1)*(d?Math.max(.1,c.damageTakenMultiplier??1):1)));let p=u;if(t.playerStatus.shieldBoost>0){const m=Math.min(t.playerStatus.shieldBoost,p);t.playerStatus.shieldBoost-=m,p-=m}if(i.ship.shields>0){const m=Math.min(i.ship.shields,p);i.ship.shields-=m,p-=m}p>0&&(i.ship.hp=Math.max(0,i.ship.hp-p)),C(`The ${t.enemyName} hits you with ${s.name} for ${u} damage.`),an(u),t.enemyCooldowns[n]=s.cooldown}function Fa(){const t=i.combat;if(!t)return null;const e=t.enemyCooldowns.length>0?t.enemyCooldowns.map(l=>l??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...e),a=[];if(n<=1){const l=nt(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:l})}if(t.enemyShields<=0){const c=t.playerCooldowns.filter(u=>u<=0).length/Math.max(1,i.ship.weapons.length),d=nt(.6+c*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:d})}i.ship.hp/i.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((t.adviceToken??Math.random())+t.round*.13)%1,o=Math.floor(s*a.length),r=a[o];return{...r,confidence:r.confidence}}function Pa(){const t=i.combat;t&&(t.playerCooldowns=t.playerCooldowns.map(e=>e>0?e-1:0),t.enemyCooldowns=t.enemyCooldowns.map(e=>e>0?e-1:0),t.playerStatus.maneuverTurns>0&&(t.playerStatus.maneuverTurns-=1,t.playerStatus.maneuverTurns<=0&&(t.playerStatus.maneuverBonus=0)),t.playerStatus.shieldTurns>0&&(t.playerStatus.shieldTurns-=1,t.playerStatus.shieldTurns<=0&&(t.playerStatus.shieldBoost=0)))}function La(){const t=i.combat;if(!t)return;C(`The ${t.enemyName} explodes under your punishing fire. Victory is yours.`);const e=Math.max(0,t.startingHp-i.ship.hp),n=t.totalRounds<=3,a=e<=5,s=ga(t.enemyId,t.enemyName,{quickKill:n,lowDamageTaken:a},t.enemyTags||[]);if(s){i.lastBattleResult=s;const o=[];s.creditsEarned&&o.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&o.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&o.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&o.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&o.push(`Missions: ${s.missionsGranted.join(", ")}`),C(`Loot recovered — ${o.join(" | ")||"nothing notable."}`),n&&C("Because you won quickly, salvage yields are richer."),a&&C("Minimal hull damage preserved more intact cargo.")}else C("No notable loot recovered.");if(sn(),on(),Bn(t.enemyId),t.enemyTags?.some(o=>/pirate|raider/i.test(o))||t.enemyId.includes("pirate")||t.enemyId.includes("raider")){const o=A().repGainMultiplier??1;_e(Math.round(3*o))}i.combat=null,w.go("main")}function ja(){C("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),i.ship.hp=0,i.ship.shields=0,i.combat=null,i.notifications.push("Critical failure — hull integrity dropped to zero."),ke("ship_destroyed","Ship destroyed in combat.")}function Na(t){const e=i.combat;e&&(e.playerStance=t,C(`Stance changed to ${t.charAt(0).toUpperCase()+t.slice(1)}.`))}function Ha(t){switch(t){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function Oa(t){switch(t){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function Wa(t,e,n){return Math.max(e,Math.min(n,t))}function It(t){const{systemId:e,state:n,sessionFactor:a}=t,s=g?.systems.find(T=>T.id===e),o=s?.security??"medium",r=A(),l=R();let c;switch(o){case"high":c=.02;break;case"low":c=.12;break;default:c=.06;break}s?.tags.includes("mining_belt")&&(c+=.02),s?.marketProfile?.blackMarket&&(c+=.03);const d=Se(n,e),u=Math.min(.15,d/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),p=qa(n,e),m=a*.03,h=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),b=Math.max(0,Math.min(1,(k.pirateEncounterRate??0)/100)),$=Math.max(0,(r.encounterChancePerJump??100)/100),x=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,l.pirateDetectionMultiplier??1);let M=(c+u+m+p+h+b)*x*$;return za(M,n,e)}function qa(t,e){const n=t.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,o=0;for(const[c,d]of a){if(!d)continue;const u=P(e,c),p=H(c)?.basePrice??u.sell;if(p<=0)continue;const m=(u.sell-p)/p;s+=m*d,o+=d}if(o<=0)return 0;const r=s/o;return Wa(r*.2,0,.15)}function za(t,e,n){const a=Te(e.time.day),s=.4,r=s+(.75-s)*a;let l=t;return ot(n,"core")?(l>.25&&(l=.25),l<.01&&(l=.01),l):(l>r&&(l=r),l<.01&&(l=.01),l)}function Va(t){const e=t.time.day;for(const n of t.contracts)n.status==="active"&&n.dueDay!==void 0&&e>n.dueDay&&(n.status="failed",t.notifications.push(`Contract failed (expired): ${n.name}`))}function Ya(t,e){Ua(t,e).lastRiskSeenDay=t.time.day}function Ua(t,e){t.intel||(t.intel={systems:[]});const n=t.intel.systems.find(s=>s.systemId===e);if(n)return n;const a={systemId:e};return t.intel.systems.push(a),a}const Ga=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],Ja=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]}],Ka={belts:Ga,tables:Ja},Xa="pirate_cutter",vt=Ka,De={careful:{yieldMultiplier:.8,rareMod:.5,lossKey:"carefulLoss"},standard:{yieldMultiplier:1,rareMod:1,lossKey:"standardLoss"},overcharge:{yieldMultiplier:1.3,rareMod:1.5,lossKey:"overchargeLoss"}};function Gt(t,e,n){const a=t.ship.cargo||{},s=Object.values(a).reduce((l,c)=>l+c,0),o=Math.max(0,t.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,o));return r>0&&(a[e]=(a[e]??0)+r,t.ship.cargo=a),t.notifications||(t.notifications=[]),r<n&&t.notifications.push(`Cargo constrained: stored ${r}/${n} ${e}.`),r}function at(t,e){const n=Math.ceil(t),a=Math.floor(e);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Ie(t,e){const n=e?vt.belts.find(s=>s.id===e):null;if(n)return n;const a=vt.belts.find(s=>s.systemId===t);return a||{id:"default_belt",name:"Unmapped Belt",systemId:t,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function Jt(t){return t?vt.tables.find(e=>e.id===t)??null:null}function Kt(t){if(!t||!t.entries.length)return null;const e=t.entries.reduce((r,l)=>r+(l.weight||0),0);if(e<=0)return null;let n=Math.random()*e,a=null;for(const r of t.entries)if(n-=r.weight||0,n<=0){a=r;break}const s=a??t.entries[t.entries.length-1],o=at(s.min,s.max);return{id:s.id,amount:o}}function Qa(t,e,n){const a=e.stability[De[n].lossKey],s=at(a.min,a.max);t.stability=Math.max(0,t.stability-s),t.lastMessage=`Stability dropped by ${s}%.`}function Be(t,e,n,a){const s=Ie(e,n),o=Ae(t,s.id);if(o.depletedUntilDay!==void 0&&t.time.day<o.depletedUntilDay){t.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`);return}const r=It({systemId:e,state:t,sessionFactor:0});t.miningSession={active:!0,systemId:e,beltId:s.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:r,stability:s.stability.start,maxStability:s.stability.start,beltName:s.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0}}function Za(t,e="standard"){const n=t.miningSession;if(!n||!n.active)return null;const a=Ie(n.systemId,n.beltId),s=Jt(a.commonTableId),o=Jt(a.rareTableId),r=De[e],l=Kt(s),c=l?.id??n.resourceId??"aurite_ore",d=l?.amount??at(1,3),u=R(),p=(k.miningYieldMultiplier??1)*(u.miningYield??1),m=Math.max(1,Math.round(d*r.yieldMultiplier*p)),h=Gt(t,c,m),$=Math.max(1,Wt(n.systemId,c))*h;n.minesTaken+=1,n.totalValueMined+=$,Qa(n,a,e);const M=(1-n.stability/Math.max(1,n.maxStability))*.5,T=a.baseRareChance,f=Math.min(1,Math.max(0,(k.rareMineralChance??0)/100))+Math.max(0,(u.rareFindChance??0)-1),y=Math.min(1,T*r.rareMod+M+f);let S=null,_=0;if(o&&Math.random()<=y){const I=Kt(o);if(I){const Y=Gt(t,I.id,I.amount);S={id:I.id,amount:Y},_=Math.max(1,Wt(n.systemId,I.id))*Y,n.totalValueMined+=_}}const E=It({systemId:n.systemId,state:t,sessionFactor:n.minesTaken});n.currentPirateChance=E;const D=Math.random()<=E;D&&(n.active=!1,n.lastMessage="Pirates detected! Breaking off the dig.",U(Xa));const v=n.stability<=0;if(v){const I=at(2,6);t.ship.hp=Math.max(0,t.ship.hp-I),n.active=!1,n.lastMessage=`Vein collapse! Hull took ${I} damage.`;const Y=Ae(t,a.id);Y.depletedUntilDay=t.time.day+2}else n.lastMessage=`Mined ${h} ${c}${S?`; rare find: ${S.amount} ${S.id}`:""}.`;t.notifications||(t.notifications=[]),t.notifications.push(`Mining haul: ${h} ${c} (~${Math.round($)} cr).`),S&&t.notifications.push(`Rare find: ${S.amount} ${S.id}.`),n.lastYield={commodityId:c,amount:h,approxValue:Math.round($+_),rareFind:S};const O=Math.max(1,Math.round((k.miningDuration??5)*Math.max(.1,u.miningSpeed??1)));return t.time.turn+=Mt(O),rn(h+(S?.amount||0),!!S),{minedCommodityId:c,minedAmount:h,pirateEncountered:D,pirateChance:E,rareFound:S,stability:n.stability,collapsed:v}}function ts(t){const e=t.time.day;for(const n of t.miningBelts)n.depletedUntilDay!==void 0&&e>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,t.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Ae(t,e){t.miningBelts||(t.miningBelts=[]);const n=t.miningBelts.find(s=>s.beltId===e);if(n)return n;const a={beltId:e};return t.miningBelts.push(a),a}function es(t){t.miningSession=null}function ns(t){t.time.day+=1,cn(t.time.day),ge(t),aa(t),Pn(t),Va(t),ts(t),t.notifications.push(`Day ${t.time.day}: Market conditions shift across the sector.`),t.notifications.push(`Day ${t.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=t=>{cs(t)};function Re(){return g?g.systemsById:null}function Fe(t){const e=Re();return e?e[t]??null:null}function as(t,e){return t.neighbors.find(n=>n.id===e)??null}let Bt=0,Xt=1;function ss(t){t!==Xt&&(Xt=t,Bt=0)}function At(t){return t<=0?!1:Bt<t}function Rt(){Bt+=1}function V(t){A().showEncounterDebug&&i.notifications.push(`Encounter debug: ${t}`)}function Ft(){return Fe(i.location.systemId)}function is(){const t=Ft();if(!t)return[];const e=Re();return e?t.neighbors.map(n=>{const a=e[n.id];return a?{system:a,route:n,profile:Pe(t,a,n)}:null}).filter(n=>n!==null):[]}function Pe(t,e,n){const a=R(),s=(t.baseDanger+e.baseDanger)/2,o={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},r=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,l=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,c=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,d=(o[t.region]??0)+(o[e.region]??0),u=Math.max(1,Math.round(n.distance*l+Math.max(0,d)*2)),p=st(.1*n.distance+s*.12+c+d+(n.laneType==="wildspace"?.05:0),.1,.95),m=Math.min(.95,Math.max(.1,p)),h=Math.max(0,m-Math.max(0,a.hazardDetectionBonus??0)),b=Math.max(1,Math.round(n.distance*r*(1+s*.06))),$=Math.max(1,Math.round(b*Math.max(.1,a.fuelCostMultiplier??1))),x=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:u,fuelCost:$,hazardChance:h,hazardMitigation:Math.max(0,m-h),routeType:x,laneType:n.laneType,distance:n.distance}}function st(t,e,n){return Math.max(e,Math.min(n,t))}function Le(t){const e=i.ship.cargo||{};let n=0,a=0,s=0;for(const[r,l]of Object.entries(e)){if(!l)continue;const c=H(r);if(!c||c.legalStatus!=="illegal"&&c.legalStatus!=="restricted")continue;const d=P(t.id,r);s+=d.sell*l,c.legalStatus==="illegal"?n+=l:a+=l}const o=n+a;return o<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:o,estimatedValue:s}}function os(t,e,n,a=R()){let s=e.security==="high"?.35:e.security==="low"?.15:.25;e.marketProfile?.blackMarket&&(s*=.65),e.tags.includes("restricted")&&(s+=.12),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const o=1+Math.min(1.5,t.illegalUnits*.1+t.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),l=Math.max(.5,a.illegalTolerance??1);return st(s*o*r/l,0,.95)}function rs(t,e){const n=Le(t);if(!n)return!1;const a=R(),s=os(n,t,e.routeType,a);if(Math.random()>s)return!1;const o=i.ship.cargo||{};let r=0;for(const[p,m]of Object.entries(o)){if(!m)continue;const h=H(p);h&&(h.legalStatus!=="illegal"&&h.legalStatus!=="restricted"||(r+=m,o[p]=0))}i.ship.cargo=o;const l=Math.max(25,Math.round(n.estimatedValue*.35)),c=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,d=l+c;i.player.credits=Math.max(0,i.player.credits-d);const u=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25));return _e(u),i.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${d} credits, wanted +${u}.`),!0}function ls(t,e,n,a){const s=st((t.hazardChance+(t.hazardMitigation??0))*n*a,0,.95),o=st(e,0,.95),r=Math.max(0,Math.round((s-o)*100));r>0&&i.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(o*100).toFixed(0)}%).`)}function cs(t){const e=Ft();if(!g||!e)return;const n=as(e,t);if(!n){console.warn(`System ${t} is not a neighbor of ${e.id}`);return}const a=Fe(t);if(!a)return;const s=Pe(e,a,n),o=Math.max(0,k.fuelCostMultiplier??1),r=Math.max(0,Math.round(s.fuelCost*o)),l=Math.max(0,Math.min(3,(k.travelRiskScaling??100)/100)),c=A(),d=Math.max(0,c.globalDangerMultiplier??1),u=Math.min(.95,Math.max(0,s.hazardChance*l*d)),p={...s,fuelCost:r,hazardChance:u};if(i.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}i.ship.fuel-=p.fuelCost,i.location.systemId=a.id,i.location.docked=!0;const m=Mt(s.travelTime);i.time.turn+=m,Xn(a.id),ns(i),ss(i.time.day),Ya(i,a.id),ln();const h=An(i,a.id);h.completed.length&&console.log(`Arrived at ${a.id}: checked ${h.checked} contracts, completed ${h.completed.join(", ")}.`);const b=Number.isInteger(m)?m.toFixed(0):m.toFixed(2),$=Math.abs(m-1)<.01?"":"s",x=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${b} turn${$}).`;ls(s,p.hazardChance,l,d),rs(a,p)&&V("Contraband inspection triggered on arrival."),!us(a)&&(ps(a)||ds(e,a,p,x)||w.go("main",{message:x}))}function ds(t,e,n,a){const s=A(),o=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:t,to:e,hazardChance:Math.min(1,n.hazardChance*o),routeType:n.routeType},l=fs(e)??ta(r);return l?(V(`Travel event triggered: ${l.name||l.id||"unknown"}`),l.type==="mining"?(V(`Mining event surfaced: ${l.id}`),w.go("event",{eventId:l.id}),!0):!l.choices||l.choices.length===0?(V(`Auto-resolving event: ${l.name||l.id||"unknown"}`),ms(l,a)):(w.go("event",{eventId:l.id}),!0)):(w.go("main",{message:`${a} — Uneventful transit.`}),!0)}function us(t){const e=A(),n=Math.max(0,e.maxEncountersPerDay??0);if(!At(n))return!1;const a=It({systemId:t.id,state:i,sessionFactor:1});if(Math.random()<=a){Rt();const s=`Pirates intercept you near ${t.name}!`;return i.notifications.push(s),V(`Pirate encounter triggered near ${t.name} (chance ${a.toFixed(3)})`),Ea(t.id),!0}return!1}function ps(t){const e=A(),n=Math.max(0,e.maxEncountersPerDay??0);if(!At(n))return!1;const a=Math.max(0,Math.min(1,(e.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(e.encounterChancePerJump??100)/100),o=t.security==="high"?1.15:t.security==="low"?.65:1,r=R(),l=Le(t),c=l?1+Math.min(1.2,l.totalUnits*.02):1,d=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),u=Math.min(1,a*s*o*c*d);if(Math.random()<=u){Rt();const p=`Patrol intercepts you near ${t.name}!`;return i.notifications.push(p),V(`Patrol encounter triggered near ${t.name} (chance ${u.toFixed(3)})`),U("navy_interceptor"),!0}return!1}function ms(t,e){const n=na(t);if(n.triggerCombat?.enemyId){const a=A(),s=Math.max(0,a.maxEncountersPerDay??0);if(!At(s))return w.go("main",{message:`${e} — Encounter skipped (cap reached).`}),!0;Rt();const o=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return V(o),U(n.triggerCombat.enemyId),!0}return w.go("main",{message:`${e} — ${t.name||"Event"} resolved automatically.`}),!0}const hs={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function fs(t){const e=gs(t);return e?Dt(e)??null:null}function gs(t){const e=[],n=new Set(t.tags||[]),a=s=>{e.includes(s)||e.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(hs[t.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||t.faction==="unity_church")&&a("unity_checkpoint"),e.length?e[Math.floor(Math.random()*e.length)]:null}window.attackPirateBase=t=>{const e=vs(t);if(!e){console.warn(`Unknown base ${t}`);return}w.go("event",{eventId:"pirate_base_attack",message:`You are entering ${e.name}. Waves: ${e.maxWaves}. Good luck.`})};function vs(t){return g?g.basesById[t]??null:null}function ys(t){return g?Object.values(g.basesById).find(n=>n.systemId===t)??null:null}function bs(t){return t?`Pirate Base Detected (Tier ${t.tier})`:""}function Ms(){const t=Ft(),e=is(),n=Object.values(i.ship.cargo||{}).reduce((u,p)=>u+p,0),a=e.map(({profile:u})=>u.hazardChance).reduce((u,p)=>Math.max(u,p),0),s=Math.round((a||0)*100);if(!t)return`
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
    `;const o=t?ys(t.id):null,r=bs(o),l=o?`
      <div class="panel-card">
        <p class="label">${r}</p>
        <p class="muted">${o.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${o.id}')">
          Attack Pirate Base (Tier ${o.tier})
        </button>
      </div>
    `:"",c=t?xs(t,e):"",d=e.length===0?'<p class="muted">No nearby systems detected.</p>':e.map(({system:u,route:p,profile:m})=>{const h=$s(u.security),b=ws(u),$=Ss(m.hazardChance),x=`${m.fuelCost} fuel`,M=`${m.travelTime} turn${m.travelTime===1?"":"s"}`,T=ks(p.laneType),f=`Distance: ${p.distance}`,y=b.length?b.join(" · "):"No special tags";return`
              <article class="travel-row">
                <div class="travel-row__main">
                  <span class="travel-row__name">${u.name}</span>
                  <span class="travel-row__label">${h}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${T}</span>
                    <span>${f}</span>
                  </div>
                  <span class="travel-row__label">${x} · ${M} · Risk: ${$}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-primary" onclick="travelToSystem('${u.id}')">Jump to ${u.name}</button>
                  <span class="travel-row__label">${y}</span>
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
            ${d}
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
  `}function $s(t){switch(t){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${t||"Unknown"} sec`}}function ws(t){const e=[];return t.tags.includes("frontier")&&e.push("▲ Frontier"),t.tags.includes("mining_belt")&&e.push("⛏ Mining"),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&e.push("◆ Trade hub"),(t.tags.includes("restricted")||t.faction==="unity_church")&&e.push("✝ Unity"),e}function Ss(t){return t<.35?"Safe":t<.65?"Moderate":"Hazardous"}function ks(t){switch(t){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function xs(t,e){if(!t)return'<p class="muted">Map data unavailable.</p>';const n=320,a=200,s=16,o=32,r=8,l=8,c=new Map,d=v=>{v&&v.coords&&c.set(v.id,v)};if(d(t),e.forEach(({system:v})=>d(v)),!c.size)return'<p class="muted">No coordinate data to render.</p>';const u=Array.from(c.values()).map(v=>({id:v.id,name:v.name,x:v.coords?.x??0,y:v.coords?.y??0})),p=u.map(v=>v.x),m=u.map(v=>v.y),h=Math.min(...p),b=Math.max(...p),$=Math.min(...m),x=Math.max(...m),M=b-h||1,T=x-$||1,f=v=>s+(v-h)/M*(n-s*2),y=v=>a-(s+(v-$)/T*(a-s*2)),S=new Map(u.map(v=>[v.id,{...v,sx:f(v.x),sy:y(v.y)}])),_=S.get(t.id);if(!_)return'<p class="muted">Current system coordinates missing.</p>';const E=e.map(({system:v,route:O})=>{const I=S.get(v.id);return I?`<line x1="${_.sx.toFixed(1)}" y1="${_.sy.toFixed(1)}" x2="${I.sx.toFixed(1)}" y2="${I.sy.toFixed(1)}" stroke="${Cs(O.laneType)}" stroke-width="2" stroke-linecap="round" opacity="0.9"></line>`:""}).join(""),D=Array.from(S.values()).map(v=>{const O=v.id===t.id,I=v.name.length>16?`${v.name.slice(0,14)}...`:v.name;return`
        <g>
          <circle
            cx="${v.sx.toFixed(1)}"
            cy="${v.sy.toFixed(1)}"
            r="${O?6:5}"
            fill="${O?"#4CE6C3":"#ffffff"}"
            stroke="#0b1116"
            stroke-width="1.5"
          ></circle>
          <text
            x="${(v.sx+r).toFixed(1)}"
            y="${(v.sy-l).toFixed(1)}"
            text-anchor="start"
            font-size="11"
            fill="#ffffff"
          >${I}</text>
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
        ${E}
        ${D}
      </svg>
    </div>
  `}function Cs(t){switch(t){case"core_lane":return"#4ce6c3";case"frontier_lane":return"#ffb347";default:return"#ff7a7a"}}const Qt={high:"^",low:"v",stable:"-"};function Ts(t={}){const e=W(i.location.systemId);if(!e)return`
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
    `;const n=fe();if(!n.length)return`
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">${e.name}</span>
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
    `;const a=Object.values(i.ship.cargo||{}).reduce((f,y)=>f+y,0),s=Object.entries(i.ship.cargo||{}).filter(([,f])=>f>0).sort((f,y)=>y[1]-f[1]).slice(0,5),o=new Map;q().filter(f=>f.status==="active").forEach(f=>{const y=f.requirements?.deliver;if(!y?.commodityId)return;const S=o.get(y.commodityId)??{needed:0,deliverable:!1},_=et(y.commodityId)>=(y.quantity||0),E=!y.systemId||y.systemId===i.location.systemId;o.set(y.commodityId,{needed:S.needed+(y.quantity||0),deliverable:S.deliverable||E&&_})});const r=n.map(f=>{const y=P(e.id,f.id),S=Bs(f.tradeTags?.length?f.tradeTags:f.tags),_=et(f.id),E=As(f,_),D=je(y.buy,a,f.id);return{commodity:f,quote:y,tags:S,cargoQty:_,metaLine:E,maxBuyable:D,profit:y.sell-y.buy}}),l=r.reduce((f,y)=>y.profit>f.value?{id:y.commodity.id,value:y.profit}:f,{id:r[0]?.commodity.id??"",value:Number.NEGATIVE_INFINITY}).id,c=typeof t.selectedCommodityId=="string"?t.selectedCommodityId:null,d=r.find(f=>f.commodity.id===c)||r.find(f=>f.commodity.id===l)||r[0],u=r.map(({commodity:f,quote:y,tags:S,cargoQty:_})=>{const E=d?.commodity.id===f.id,D=f.id===l;pt(e.id,f.id,1),mt(e.id,f.id,1);const v=o.get(f.id),O=["market-row"];E&&O.push("market-row--highlight");const I=v?`<span class="contract-pill${v.deliverable?" ready":""}">${v.deliverable?"Deliver now":"Needed"}</span>`:"",Y=D?'<span class="contract-pill">Top margin</span>':"";return`
        <article class="${O.join(" ")}" onclick="selectMarketCommodity('${f.id}')">
          <div class="market-row__main">
            <span class="market-row__name">${f.name}</span>
            <span class="market-row__info">
              BUY ${y.buy} · SELL ${y.sell} · Held ${_}
            </span>
          </div>
          <div class="market-row__meta">
            <span class="market-row__trend">${Qt[y.trend]} ${y.trend}</span>
            <span>${S||"Local goods"}</span>
            ${Y}
            ${I}
          </div>
        </article>
      `}).join(""),p=a>0,m=`
    <div class="panel-card market-summary-card">
      <p class="label">Market Overview</p>
      <div class="market-summary__rows">
        <div>
          <span>System</span>
          <strong>${e.name}</strong>
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
          <strong>${a}/${i.ship.cargoCapacity}</strong>
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
        ${s.length?s.map(([f,y])=>{const S=H(f),_=S?.mass??0,E=_?` (Mass ${Math.round(_*y)})`:"";return`<span>${y} × ${S?.name||f}${E}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${p?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,h=d?pt(e.id,d.commodity.id,1):!1,b=d?mt(e.id,d.commodity.id,1):!1,$=d&&h?"":" disabled",x=d&&d.maxBuyable>1&&h?"":" disabled",M=d&&b&&d.cargoQty>0?"":" disabled",T=d?`
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
          ${$}
          onclick="buyCommodityAction('${d.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${x}
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
          <span class="app-location">Market · ${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${j(i.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${m}
            ${Es(e.id)}
            ${Ds(e)}
          </aside>
          <div class="market-list">
            ${u}
            ${T}
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
      ${(t?.neighbors.map(s=>W(s.id)).filter(s=>!!s&&e[s.id])||[]).map(s=>{const o=Is(t?.id,s.id),r=i.time.turn-(e[s.id]?.turn??i.time.turn),l=o.over?`${o.over.id} overpriced (+${Math.round(o.over.delta*100)}%)`:"no strong overpay",c=o.under?`${o.under.id} underpriced (${Math.round(o.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${s.name} (age ${r}t): Sell -> ${l} | Buy -> ${c}</p>`}).join("")||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function Is(t,e){if(!t)return{over:null,under:null};const a=$e()[e];if(!a)return{over:null,under:null};let s=null,o=null;const r=Math.max(0,i.time.turn-a.turn),l=Math.max(.5,1-r*.05);for(const[c,d]of Object.entries(a.prices)){const u=P(t,c);if(u.sell>0&&d.buy>u.sell){const p=(d.buy-u.sell)/u.sell*l;(!s||p>s.delta)&&(s={id:c,delta:p})}if(u.buy>0&&d.sell<u.buy){const p=(u.buy-d.sell)/u.buy*l;(!o||p>o.delta)&&(o={id:c,delta:p})}}return{over:s,under:o}}function je(t,e,n){if(t<=0)return 0;const a=Math.floor(i.player.credits/t),s=Math.max(0,i.ship.cargoCapacity-e);return Math.max(0,Math.min(a,s))}function Bs(t){return t?.length?Array.from(new Set(t)).map(n=>Pt(n.replace(/_/g," "))).join(" | "):""}function As(t,e){const n=Pt(t.tier||"standard"),a=Rs(t.legalStatus||"legal"),s=typeof t.mass=="number"?`${t.mass}t`:null,o=[`Held ${e}`,`Tier ${n}`,a];return s&&o.push(`Mass ${s}`),o.join(" | ")}function Pt(t){return t.split(" ").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function Rs(t){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[t]??Pt(t)}window.selectMarketCommodity=t=>{nav("market",{selectedCommodityId:t})};window.buyCommodityAction=t=>{const e=i.location.systemId,n=H(t),a=we(e,t,1),s=P(e,t).buy,o=document.getElementById("market-message");o&&(o.textContent=a?`Bought 1 ${n?.name||t} for ${s} cr.`:`Cannot buy ${n?.name||t}.`),nav("market",{selectedCommodityId:t})};window.sellCommodityAction=t=>{const e=i.location.systemId,n=H(t),a=_t(e,t,1),s=P(e,t).sell,o=document.getElementById("market-message");o&&(o.textContent=a?`Sold 1 ${n?.name||t} for ${s} cr.`:`Cannot sell ${n?.name||t}.`),nav("market",{selectedCommodityId:t})};window.buyAllCommodityAction=(t,e)=>{const n=i.location.systemId,a=i.ship.cargo||{},s=Object.values(a).reduce((c,d)=>c+d,0),o=je(e,s);if(o<=0){nav("market");return}we(n,t,o);const r=H(t),l=document.getElementById("market-message");l&&(l.textContent=`Bought ${o} ${r?.name||t} for ${e*o} cr.`),nav("market",{selectedCommodityId:t})};window.sellAllCommodityAction=t=>{const e=i.location.systemId,n=et(t);if(n<=0){nav("market");return}const a=P(e,t).sell;_t(e,t,n);const s=H(t),o=document.getElementById("market-message");o&&(o.textContent=`Sold ${n} ${s?.name||t} for ${a*n} cr.`),nav("market",{selectedCommodityId:t})};window.sellAllCargoAction=()=>{const t=i.location.systemId,e=Object.entries(i.ship.cargo||{});let n=0;const a=[];for(const[o,r]of e){if(!r||!_t(t,o,r))continue;n+=r;const c=H(o);a.push(`${r} ${c?.name||o}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const o=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${o}).`}nav("market")};window.purchaseNeighborIntel=()=>{const t=Qn(),e=document.getElementById("market-message");e&&(e.textContent=t.message),nav("market")};function Fs(t){if(!t)return[];if(Array.isArray(t))return t.filter(e=>typeof e=="string");if(typeof t=="string")try{const e=JSON.parse(t);if(Array.isArray(e))return e.filter(n=>typeof n=="string")}catch{return t.split(",").map(e=>e.trim()).filter(Boolean)}return[]}function Ps(t={}){const e=typeof t.message=="string"?t.message:"",n=q(),a=Sn(),s=Object.values(i.ship.cargo||{}).reduce((u,p)=>u+p,0),r=Fs(t.selectedMissionIds)[0]??(typeof t.selectedMissionId=="string"?t.selectedMissionId:""),l=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(u=>{const p=u.requirements||{},m=Zt(p.travel?.systemId);return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  ${u.description?`<p class="muted">${u.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${kn(u)}</span>
                    <span>${xn(u)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${m}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',c=r?[r]:a[0]?[a[0].id]:[],d=a.length>0?`
        <div class="contract-list">
          ${a.map(u=>{const p=Zt(u.requirements?.travel?.systemId),m=["contract-row"];return c.includes(u.id)&&m.push("contract-row--active"),`
                <article class="${m.join(" ")}" onclick="acceptContract('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  <p class="muted">${u.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${p}</span>
                    <span>Reward: ${Ls(u.reward)}</span>
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
            ${d}
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
  `}function Zt(t){if(!t)return"Unknown";const e=W(t);return e?.name?`<strong>${e.name}</strong>`:t}function Ls(t){if(!t)return"None";const e=[];if(t.credits&&e.push(`${t.credits} credits`),t.rep){const n=Object.entries(t.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");e.push(`Rep: ${n}`)}if(t.weapon){const n=L(t.weapon)?.name||t.weapon;e.push(`Weapon: ${n}`)}return e.join(" | ")||"None"}window.acceptContract=t=>{const e=Ct(t),n=e.success?"Mission accepted.":e.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=t=>{const e=En(t),n=e.success?"Mission abandoned.":e.reason||"Unable to abandon.";nav("contracts",{message:n})};const js={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Lt(t){return g?g.ships.find(e=>e.id===t)??null:null}function Ns(){return Lt(i.ship.templateId)}function Hs(){return g?g.ships.filter(t=>t.starter):[]}function Os(){return g?g.ships.filter(t=>!t.starter):[]}function Ne(t,e){const n=Lt(t);if(!n){console.warn(`Unknown ship template: ${t}`);return}const a=n.hardpoints.map(()=>null),s=[],o={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,l)=>js[`${r.size}:${r.type}`]??a[l]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};i.ship=o,bt(),wt()}function Ws(t){Ne(t),i.player.hasChosenStarter=!0}function qs(t){const e=Lt(t);return e?e.starter?(console.warn("Starter ships are not sold at shipyards."),!1):i.player.credits<e.cost?(console.warn("Not enough credits to buy this ship."),!1):(i.player.credits-=e.cost,Ne(t),!0):(console.warn(`Unknown ship template: ${t}`),!1)}function zs(){const t=i.ship,e=t.maxHp-t.hp,n=t.maxShields-t.shields;if(e<=0&&n<=0)return;const a=e+n;if(i.player.credits<a){console.warn("Not enough credits to fully repair.");return}i.player.credits-=a,t.hp=t.maxHp,t.shields=t.maxShields}function Vs(){const t=i.ship,e=t.maxFuel-t.fuel;if(e<=0)return;const a=e*2;if(i.player.credits<a){console.warn("Not enough credits to fully refuel.");return}i.player.credits-=a,t.fuel=t.maxFuel}function Ys(){return g?g.components:[]}function Us(){if(!g)return[];const t=i.ship.components;return g.components.filter(e=>t.includes(e.id))}function Gs(t){if(!g)return!1;const e=g.components.find(n=>n.id===t);return e?i.player.credits<e.cost?(console.warn("Not enough credits to buy this component."),!1):i.ship.components.includes(t)?(console.warn("Component already installed."),!1):(i.player.credits-=e.cost,i.ship.components.push(t),Js(e),!0):(console.warn(`Unknown component: ${t}`),!1)}function Js(t){const e=i.ship;switch(t.effectType){case"hull":e.maxHp+=t.value,e.hp+=t.value;break;case"shields":e.maxShields+=t.value,e.shields+=t.value;break;case"fuel":e.maxFuel+=t.value,e.fuel+=t.value;break;case"cargo":e.cargoCapacity+=t.value;break}}window.repairShipAction=()=>{zs(),nav("ship")};window.refuelShipAction=()=>{Vs(),nav("ship")};function Ks(){const t=i.ship,e=Ns(),n=Us(),a=i.combat?.playerCooldowns??[],s=Object.values(t.cargo||{}).reduce((l,c)=>l+c,0),o=e?`<p class="muted">${e.description}</p>`:`<p class="muted">Unknown template (${t.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(l=>`<li>${l.name} (+${l.value} ${l.effectType})</li>`).join("")}</ul>`;return`
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
            ${t.hardpoints.map((l,c)=>{const d=L(t.weapons[c]),u=d?.name||"Empty",p=a[c]??0,m=d?kt(d):null,h=m?`
                    <p class="muted">Role: ${m.role} (${m.typeLabel})</p>
                    <p class="muted">Vs Shields: ${m.vsShields} · Vs Hull: ${m.vsHull}</p>
                    ${m.tagNotes.length?`<p class="muted">Traits: ${m.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${c+1} · ${l.size} ${l.type}</p>
                    <p class="value-inline">${u}</p>
                    <p class="muted">${p>0?`${p} turn${p===1?"":"s"} left`:"Ready"}</p>
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
      `}).join("")}</div>`}function Zs(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function ti(t){return typeof t!="number"?"0%":`${Math.round(t*100)}%`}window.pickChoice=t=>{const e=w.params,n=typeof e.eventId=="string"?e.eventId:"",a=Dt(n);if(!a){nav("main");return}const s=a.choices?.[t];if(s){const o=ea(s);if(o.triggerCombat?.enemyId){U(o.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(t,e)=>{Be(i,i.location.systemId,t||void 0,e||void 0),w.go("mining")};window.fireWeapon=(t,e="normal")=>{ct("fire",t,e),i.combat&&nav("combat")};window.brace=()=>{ct("brace"),i.combat&&nav("combat")};window.flee=()=>{ct("flee"),i.combat&&nav("combat")};window.setStance=t=>{Na(t),i.combat&&nav("combat")};window.fireAllWeapons=(t="normal")=>{ct("fire_all",void 0,t),i.combat&&nav("combat")};function ei(){const t=i.combat;if(!t)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const e=i.ship,n=t.log.map(d=>`<div class="log-line">${d}</div>`).join(""),a=e.hardpoints.map((d,u)=>{const p=e.weapons[u],m=L(p),h=t.playerCooldowns[u]??0,b=!!m&&h===0;return`
        <div class="panel-card">
          <p class="label">Slot ${u+1} · ${d.size.toUpperCase()} ${d.type}</p>
          <p class="value-inline">${m?.name||"Empty"}</p>
          <p class="muted">${h>0?`Cooling (${h})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${b?"":"disabled"} onclick="fireWeapon(${u}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${b?"":"disabled"} onclick="fireWeapon(${u}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),s=Ma.map(d=>`
        <tr>
          <td>${d.type}</td>
          <td>${d.shieldMultiplier.toFixed(2)}x</td>
          <td>${d.hullMultiplier.toFixed(2)}x</td>
          <td>${d.description}</td>
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
            <p><strong>Called Shot</strong>: ${ya}</p>
            <p><strong>Brace vs Attack</strong>: ${ba}</p>
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
  `}window.buyShipAction=t=>{qs(t)};window.buyComponentAction=t=>{Gs(t)};window.buyWeaponAction=t=>{yn(t)};function ni(){if(!ot(i.location.systemId,"shipyard"))return`
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
            ${n.map(c=>{const d=kt(c),u=d.tagNotes.length?`Traits: ${d.tagNotes.join(", ")}`:"";return`
                  <tr>
                    <td>${c.type} / ${c.size}</td>
                    <td>
                      <strong>${c.name}</strong>
                      <p class="muted">${u}</p>
                    </td>
                    <td class="muted">
                      Damage: ${c.damage} (${c.damageType}) · Acc: ${Math.round(c.accuracy*100)}% · Crit: ${Math.round(c.critChance*100)}% ×${c.critMultiplier}<br/>
                      Cooldown: ${c.cooldown} · Energy: ${c.energyCost}
                    </td>
                    <td class="muted">${d.role} (${d.typeLabel}) — Vs Shields: ${d.vsShields}, Vs Hull: ${d.vsHull}</td>
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
  `}const ai={incomeMultiplier:t=>B(t,"income"),eventRewardMultiplier:t=>B(t,"event rewards"),hpBonus:t=>B(t,"hull"),cargoBonus:t=>ii(t,"cargo capacity"),sellBonus:t=>B(t,"sell price"),buyBonus:t=>B(t,"buy price"),marketTax:t=>B(t,"market tax"),miningYield:t=>B(t,"mining yield"),rareFindChance:t=>B(t,"rare find chance"),miningSpeed:t=>B(t,"mining duration"),dodgeBonus:t=>tt(t,"dodge chance"),critBonus:t=>tt(t,"crit chance"),damageTakenMultiplier:t=>B(t,"damage taken"),fleeBonus:t=>tt(t,"flee chance"),pirateDetectionMultiplier:t=>B(t,"pirate detection"),scanDetectionMultiplier:t=>B(t,"scan detection"),illegalTolerance:t=>B(t,"illegal tolerance"),fuelCostMultiplier:t=>B(t,"fuel cost"),hazardDetectionBonus:t=>tt(t,"hazard detection"),anomalyChance:t=>B(t,"anomaly chance"),shieldRegenBonus:t=>B(t,"shield regen")};function si(t){const e=t.passive?.effects;return e?Object.entries(e).map(([n,a])=>ai[n]?.(a)??null).filter(n=>!!n):[]}function B(t,e){if(!Number.isFinite(t))return null;const n=Math.round((t-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${e}`}function tt(t,e){if(!Number.isFinite(t))return null;const n=Math.round(t*100);return n===0?null:`${n>0?"+":""}${n}% ${e}`}function ii(t,e){if(!Number.isFinite(t))return null;const n=Math.round(t);return n===0?null:`${n>0?"+":""}${n} ${e}`}window.chooseStarter=t=>{Ws(t),wt(),w.go("main")};function oi(){const t=Hs();if(t.length===0)return`
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
    `;const r=$t().map(l=>L(l)).filter(l=>!!l).map(l=>{const c=St(e,l.id),u=L(i.ship.weapons[e])?.id===l.id?"Equipped":"Equip",p=kt(l),m=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${c?"":"muted"}">
          <p class="label">${l.size} / ${l.type}</p>
          <p class="value-inline"><strong>${l.name}</strong></p>
          <p class="muted">Damage ${l.damage} (${l.damageType}) · Acc ${Math.round(l.accuracy*100)}% · Crit ${Math.round(l.critChance*100)}% (×${l.critMultiplier}) · CD ${l.cooldown}</p>
          <p class="muted">Role: ${p.role} (${p.typeLabel}) · Vs Shields: ${p.vsShields} · Vs Hull: ${p.vsHull}${m}</p>
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
  `}window.leaveMining=()=>{es(i),w.go("main")};function jt(t){Za(i,t)?.pirateEncountered||w.go("mining")}window.mineCareful=()=>jt("careful");window.mineStandard=()=>jt("standard");window.mineOvercharge=()=>jt("overcharge");function ci(){const t=i.miningSession;if(!t)return`
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
  `}window.startNewRun=()=>xe(!1);window.returnToMainMenu=()=>xe(!0);function di(){const t=i.gameOver?.summary,e=Xe(),n=t?.message||"Your run has ended.",a=t?.score??0,s=[["Days survived",t?.stats.daysSurvived??0],["Systems visited",t?.stats.systemsVisited??0],["Jumps completed",t?.stats.jumpsMade??0]],o=[["Credits earned",t?.stats.creditsEarnedTotal??0],["Highest net worth",t?.stats.highestNetWorth??0],["Trade profit",t?.stats.tradeProfitTotal??0],["Most traded",t?.stats.mostTradedCommodityId&&t.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",t?.stats.contractsCompleted??0],["Contract payouts",t?.stats.contractPayoutTotal??0]],l=[["Fights survived",t?.stats.fightsSurvived??0],["Ships destroyed",t?.stats.shipsDestroyed??0],["Damage dealt",t?.stats.damageDealtTotal??0],["Damage taken",t?.stats.damageTakenTotal??0]],c=[["Mining runs",t?.stats.miningRuns??0],["Ore mined",t?.stats.oreMinedTotal??0],["Rare finds",t?.stats.rareFinds??0]],d=p=>p.map(([m,h])=>`
      <tr>
        <td>${m}</td>
        <td>${h}</td>
      </tr>
    `).join(""),u=e.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
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
          <table>${d(s)}</table>
        </section>
        <section class="data-panel">
          <h2>Economy</h2>
          <table>${d(o)}</table>
        </section>
        <section class="data-panel">
          <h2>Contracts</h2>
          <table>${d(r)}</table>
        </section>
        <section class="data-panel">
          <h2>Combat</h2>
          <table>${d(l)}</table>
        </section>
        <section class="data-panel">
          <h2>Mining</h2>
          <table>${d(c)}</table>
        </section>
        <section class="data-panel">
          <h2>Best Runs</h2>
          ${u}
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-primary" onclick="startNewRun()">Start New Run</button>
        <button class="btn btn-ghost" onclick="returnToMainMenu()">Return to Main Menu</button>
      </footer>
    </div>
  `}const He=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:t=>`${t.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:t=>`${t.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:t=>`${t.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:t=>`${t.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:t=>`${t.toFixed(2)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:t=>t?"On":"Off"}]}],ui=He.flatMap(t=>t.controls).reduce((t,e)=>(t[e.path]=e,t),{});function yt(t){const e=t.split(".");let n=k;for(const a of e){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function pi(t,e){const n=t.split(".");let a=k;for(let s=0;s<n.length-1;s++){const o=n[s];a[o]=a[o]??{},a=a[o]}a[n[n.length-1]]=e}window.devCombat=(t="pirate_cutter")=>{U(t)};window.devMining=()=>{Be(i,i.location.systemId),w.go("mining")};function mi(){return He.map(t=>{const e=t.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(yt(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${yt(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${t.title}</h3>
        ${e}
      </section>
    `}).join("")}function it(){const t=document.getElementById("app");if(!t)return;let e="";switch(w.current){case"main":e=un();break;case"travel":e=Ms();break;case"market":e=Ts(w.params);break;case"contracts":e=Ps();break;case"ship":e=Ks();break;case"event":e=Xs(w.params);break;case"combat":e=ei(w.params);break;case"weapon_slots":e=ri();break;case"weapon_select":e=li(w.params);break;case"shipyard":e=ni();break;case"ship_select":e=oi();break;case"mining":e=ci();break;case"gameover":e=di();break}const n=w.current!=="main"?`
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
  `;t.innerHTML=`${n}${e}${a}`,hi()}let G=!1,te=!1;function hi(){const t=document.getElementById("navDev"),e=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),o=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),l=document.getElementById("devGodMode"),c=document.getElementById("navTravel"),d=document.getElementById("navMarket"),u=document.getElementById("navShip"),p=document.getElementById("devPersistEvents"),m=document.getElementById("devClearEvents"),h=document.getElementById("devHardReset"),b=e?.querySelectorAll("input[data-dev-path]"),$=()=>{e&&e.classList.toggle("hidden")},x=M=>{const T=ui[M],f=document.getElementById(`devValue-${M.replace(/\./g,"__")}`);T&&f&&(f.textContent=T.formatter(yt(M)))};b?.forEach(M=>{const T=()=>{const f=M.dataset.devPath;if(!f)return;const y=Number(M.value);pi(f,y),Ye(),x(f)};M.addEventListener("input",T)}),t?.addEventListener("click",$),n?.addEventListener("click",()=>e?.classList.add("hidden")),c?.addEventListener("click",()=>window.nav?.("travel")),d?.addEventListener("click",()=>window.nav?.("market")),u?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{e?.classList.add("hidden"),window.devMining?.()}),o?.addEventListener("click",()=>{i.player.credits+=1e3,e?.classList.add("hidden"),it()}),r?.addEventListener("click",()=>{const M=i.ship.cargo||{};M.aurite_ore=(M.aurite_ore||0)+20,i.ship.cargo=M,e?.classList.add("hidden"),it()}),l?.addEventListener("click",()=>{G=!G,i.godMode=G,G&&(i.ship.hp=i.ship.maxHp,i.ship.shields=i.ship.maxShields),alert(`God Mode: ${G?"On":"Off"}`)}),p?.addEventListener("click",()=>{sa(),alert("Events cached locally. Future loads will honor this list.")}),m?.addEventListener("click",()=>{ia(),alert("Event cache cleared. Future loads use the bundled data.")}),h?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),te||(document.addEventListener("keydown",M=>{M.key==="`"&&$(),M.key==="Escape"&&w.current!=="main"&&window.nav?.("main")}),te=!0)}let g=null;async function fi(){const t="/space/".replace(/\/+$/,"/"),e=D=>`${t}content/${D}`,[n,a,s,o,r,l,c,d,u]=await Promise.all([fetch(e("systems.json")),fetch(e("ships.json")),fetch(e("components.json")),fetch(e("commodities.json")),fetch(e("weapons.json")),fetch(e("enemies.json")),fetch(e("events.json")),fetch(e("loot_tables.json")),fetch(e("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!o.ok)throw new Error(`Failed to load commodities.json: ${o.status}`);if(!l.ok)throw new Error(`Failed to load enemies.json: ${l.status}`);if(!c.ok)throw new Error(`Failed to load events.json: ${c.status}`);if(!d.ok)throw new Error(`Failed to load loot_tables.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load missions.json: ${u.status}`);const p=await n.json(),m=await a.json(),h=await s.json(),b=await o.json(),$=await r.json(),x=await l.json(),M=await fetch(e("bases.json"));if(!M.ok)throw new Error(`Failed to load bases.json: ${M.status}`);const T=await M.json(),f={};for(const D of p)f[D.id]=D;const y=await c.json();Zn(y);const S=await d.json();ua(S);const _=await u.json();$n(_);const E={};for(const D of T)E[D.id]=D;return{systems:p,systemsById:f,bases:T,basesById:E,ships:m,components:h,commodities:b,weapons:$,enemies:x,events:y,lootTables:S,missions:_}}async function gi(){g=await fi();const t=ae();se(t),oe();const e=ze();if(e){const a=i.ship.hardpoints.length,s=[];for(let o=0;o<a;o++)s.push(e.weapons[o]??null);i.ship.weapons=s,i.inventory.weapons=e.inventory}wt();const n=w.go.bind(w);w.go=(a,s)=>{n(a,s),it()},window.nav=(a,s={})=>{w.go(a,s)},w.current=i.player.hasChosenStarter?"main":"ship_select",it()}function W(t){return g?g.systemsById[t]??null:null}document.addEventListener("DOMContentLoaded",()=>{gi()});
