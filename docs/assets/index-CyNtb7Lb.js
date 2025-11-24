(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const vn=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],rt=vn,F=rt.find(e=>e.starter)??rt[0],yn=F?.hardpoints.length??0,bn={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function $t(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let o;const wt="cosmo_weapon_loadout";function Mn(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(wt);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function Ne(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:o.ship.weapons,inventory:o.inventory?.weapons??[]};window.localStorage.setItem(wt,JSON.stringify(e))}function St(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:F?.id??"none",name:F?.name??"Undefined Hull",hp:F?.hull??0,maxHp:F?.hull??0,shields:F?.shields??0,maxShields:F?.shields??0,fuel:F?.fuel??0,maxFuel:F?.fuel??0,cargoCapacity:F?.cargo??0,cargo:{},modules:[],weapons:F?.hardpoints.map(e=>bn[`${e.size}:${e.type}`]??null)??Array(yn).fill(null),weaponPower:12,evasion:5,maneuverRating:F?.maneuverRating??0,components:[],hardpoints:F?.hardpoints.map(e=>({...e}))??[],passive:F?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},intel:{systems:[]},runStats:$t(),gameOver:{active:!1,reason:null},map:null}}function kt(e){o=e}const xt="space-dev-tune",ne={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:1,miningPayoutMultiplier:1,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.4,enemyDamageMultiplier:.2,enemyAccuracyMultiplier:.6,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:100,nonPirateEventWeight:1,showEncounterDebug:0}};let E={...ne};function $n(e){return{...ne.combat,...e}}function Ct(){if(typeof window>"u"||!window.localStorage){E={...ne};return}const e=window.localStorage.getItem(xt);if(!e){E={...ne};return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=$n({...t.combat,...n});E={...ne,...t,combat:a}}catch{E={...ne}}}function wn(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(xt,JSON.stringify(E))}function Tt(e){const t=E.progressionSpeedMultiplier??1;return e*t}function A(){return E.combat??ne.combat}function Sn(){return o.ship.passive?.effects??{}}const Et="cosmo_run_high_scores",_t=5;function kn(){return o?{...o.runStats,commodityVolumes:{...o.runStats.commodityVolumes}}:$t()}function xn(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function Dt(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(Et);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,_t):[]}catch{return[]}}function Cn(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Et,JSON.stringify(e.slice(0,_t)))}function Tn(){return Dt()}function En(e){const t=Dt();t.push(e),t.sort((n,a)=>a.score-n.score),Cn(t)}function de(e){if(!o||e<=0)return;o.runStats.creditsEarnedTotal+=e;const t=o.player.credits;t>o.runStats.highestNetWorth&&(o.runStats.highestNetWorth=t)}function _n(e,t,n){if(!o)return;o.runStats.tradeProfitTotal+=Math.max(0,n);const a=o.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=o.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(o.runStats.mostTradedCommodityId=e)}function Dn(e){!o||e<=0||(o.runStats.contractPayoutTotal+=e)}function In(){o&&(o.runStats.contractsCompleted+=1)}function Rn(e){!o||e<=0||(o.runStats.damageDealtTotal+=e)}function Bn(e){!o||e<=0||(o.runStats.damageTakenTotal+=e)}function An(){o&&(o.runStats.fightsSurvived+=1)}function Pn(){o&&(o.runStats.shipsDestroyed+=1)}function Fn(e,t){!o||e<=0||(o.runStats.miningRuns+=1,o.runStats.oreMinedTotal+=e,t&&(o.runStats.rareFinds+=1))}function Ln(){o&&(o.runStats.jumpsMade+=1,o.runStats.systemsVisited+=1)}function Nn(e){o&&(o.runStats.daysSurvived=Math.max(o.runStats.daysSurvived,e))}const y={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}};function W(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}function jn(e){return $?$.systemsById[e]??null:null}function ye(e,t){const n=jn(e);return n?n.tags.includes(t):!1}window.nav=(e,t={})=>{y.go(e,t)};function Hn(){const e=o,t=J(e.location.systemId),n=Object.values(e.ship.cargo||{}).reduce((i,r)=>i+r,0),a=e.notifications[e.notifications.length-1],s=(e.notifications||[]).slice(-5).reverse();return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${t?.name??e.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${e.time.day}</span>
            <span>Turn ${W(e.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${e.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${e.ship.fuel}/${e.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${n}/${e.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${e.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Bridge</h1>
          <p class="muted">
            Roles: ${e.player.roles.join(", ")} • Ship: ${e.ship.name} • Status: Hull ${e.ship.hp}/${e.ship.maxHp} · Shields ${e.ship.shields}/${e.ship.maxShields}
          </p>
          ${a?`<p class="muted">Log: ${a}</p>`:""}
          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Fuel/Cargo</p>
              <p class="value-inline">Fuel ${e.ship.fuel}/${e.ship.maxFuel} · Cargo ${n}/${e.ship.cargoCapacity}</p>
            </div>
            <div class="panel-card">
              <p class="label">Location</p>
              <p class="value-inline">${t?.description??"Unknown space"}</p>
            </div>
          </div>
        </section>
          <section class="app-log">
            <h2 class="panel-title small">Recent Log</h2>
            ${s.length?s.map(i=>`
                <div class="app-log-line">
                  <span>${i}</span>
                </div>
              `).join(""):'<div class="app-log-line muted">No log entries yet.</div>'}
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
            ${ye(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}function L(){return Sn()}function It(){const e=L(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,A().globalIncomeMultiplier??1);return t*n}const On=-100,Wn=100;function qn(e,t){const n=o.reputation[e]||0,a=zn(n+t);return o.reputation[e]=a,a}function Rt(e){for(const[t,n]of Object.entries(e))qn(t,n)}function zn(e){return Math.max(On,Math.min(Wn,e))}const Ee={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function Gn(){return $?$.weapons:[]}function Bt(){return o.inventory||(o.inventory={weapons:[]}),o.inventory}function je(){return[...Bt().weapons]}function He(){if(!$)return;const e=je();if(!e.length)return;const t=o.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(r=>Oe(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function Oe(e,t){const n=o.ship,a=$?.weapons.find(i=>i.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function Un(e,t){return Oe(e,t)?(o.ship.weapons[e]=t,Ne(),!0):!1}function O(e){return!e||!$?null:$.weapons.find(t=>t.id===e)??null}function Vn(e){const t=O(e);return!t||o.player.credits<t.price?!1:(Bt().weapons.push(e),o.player.credits-=t.price,Ne(),!0)}function At(e,t,n={}){const a=e.tags||[];let s=e.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let i=e.damage;const r=t.shields>0?"shields":"hull",l=Ee[e.damageType]?.[r]??1,c=r==="shields"?e.shieldMod:e.armorMod;return i*=c*l,r==="shields"&&a.includes("shield_breaker")&&(i*=1.2),r==="hull"&&a.includes("armor_piercing")&&(i*=1.2),Math.random()<e.critChance&&(i*=e.critMultiplier),i*=n.damageMultiplier??1,Math.max(0,Math.round(i))}const Yn={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},Jn={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function lt(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const ct={shields:"Shield-breaker",hull:"Hull buster"};function We(e){const t=e.damageType,n=Ee[t]??Ee.kinetic,a=lt(n.shields),s=lt(n.hull);let i="Balanced";a==="Strong"&&s==="Weak"?i=ct.shields:s==="Strong"&&a==="Weak"?i=ct.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const r=(e.tags||[]).map(l=>Jn[l]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:Yn[t]??t,tagNotes:r}}let Pt=null;function Ft(e){Pt=e}function qe(){return Pt}function Xn(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function he(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function Kn(e){const t=e.map(i=>({id:i.id,name:i.name,x:i.coords?.x??0,y:i.coords?.y??0,tags:i.tags??[]})),n=[],a=new Set;for(const i of e)for(const r of i.neighbors??[]){const l=he(i.id,r.id);a.has(l)||(a.add(l),n.push({from:i.id,to:r.id,type:Xn(r.laneType),distance:Math.max(1,Math.round(r.distance??1))}))}const s={nodes:t,lanes:n};return Ft(s),s}function ze(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function Zn(e,t,n){const a=n==="local"?1:3,s=new Map([[t,0]]);let i=[t];for(let r=1;r<=a;r++){const l=[];for(const c of i)for(const d of ze(e,c))s.has(d)||(s.set(d,r),l.push(d));if(!l.length)break;i=l}return s}function Ge(e,t,n){if(t===n)return[t];const a=[t],s=new Set([t]),i=new Map;for(;a.length;){const c=a.shift();for(const d of ze(e,c))if(!s.has(d)&&(s.add(d),i.set(d,c),a.push(d),d===n))break}if(!s.has(n))return[];const r=[];let l=n;for(;l;)r.push(l),l=i.get(l);return r.reverse()}function Qn(e,t,n){const a=Ge(e,t,n);return a.length?Math.max(0,a.length-1):null}let Ue=[];function ea(e){Ue=e}function ta(e){return Ue.find(t=>t.id===e)}function na(){const e=new Set(o.contracts.filter(t=>t.status==="active").map(t=>t.id));return Ue.filter(t=>!e.has(t.id))}function K(){return o.contracts.filter(e=>e.status==="active")}function aa(e){const t=e.requirements,n=s=>s?`<strong>${J(s)?.name||s}</strong>`:"",a=[];if(t?.travel?.systemId){const s=n(t.travel.systemId);a.push(`Travel to ${s}`)}if(t?.deliver?.commodityId){const s=t.deliver.quantity||0,i=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${s} ${t.deliver.commodityId}${i}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function sa(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function Ve(e){const t=ta(e);if(!t)return{success:!1,reason:"Unknown mission"};if(o.contracts.some(s=>s.id===e&&s.status==="active"))return{success:!1,reason:"Mission already active"};const n=fa(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:o.time.turn,progress:{}};return o.contracts.push(a),n&&ga(a.id,n),{success:!0}}function ia(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,E.contractPayoutMultiplier??1)),s=It(),i=Math.max(0,L().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*i));o.player.credits+=r,de(r),Dn(r),o.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){Rt(n.rep);const a=Object.entries(n.rep).map(([s,i])=>`${s} ${i>=0?"+":""}${i}`).join(", ");a&&o.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=o.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),o.inventory=a;const s=O(n.weapon)?.name??n.weapon;o.notifications.push(`Rewarded weapon: ${s}.`)}}function oa(){K().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,E.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));o.time.turn-e.acceptedTurn>=a&&ra(e.id)}})}function ra(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",be(`Mission failed: ${t.name}`),Ye(t.id))}function la(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",be(`Mission abandoned: ${t.name}`),Ye(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function ca(e){K().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,le(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),le(t)}})}function da(e,t,n){K().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const i=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=i+t,le(a)})}function ua(e){K().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,le(t))})}function pa(e,t){ca(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const i of K()){const r=i.status,l=i.requirements?.deliver;if(!l||!l.commodityId||(l.systemId??t)!==t||(a+=1,!ma(n,l)))continue;l.retain||ha(n,l),i.progress=i.progress||{};const d=i.progress.deliveredQuantity||0;i.progress.deliveredQuantity=d+(l.quantity||1),le(i),r!=="completed"&&i.status==="completed"&&s.push(i.name)}if(s.length){const i=`Contracts completed: ${s.join(", ")}`;e.notifications.push(i)}return{checked:a,completed:s}}function ma(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function ha(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function le(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},i=e.requirements?.multiTravel,r=t?!!s.travelCompleted:!0,l=n?s.deliveredQuantity>=(n.quantity||0):!0,c=a?!!s.combatCompleted:!0,d=s.multiTravelVisited??[],u=i?i.every(p=>d.includes(p)):!0;r&&l&&c&&u&&(e.status="completed",ia(e),In(),be(`Mission completed: ${e.name}`),Ye(e.id))}function be(e){o.notifications.push(e)}function fa(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function ga(e,t){const n=qe();if(!n)return;const a=o.location.systemId,s=Ge(n,a,t);!s.length||s.length<=1||y.setActiveRoute({nodes:s,currentIndex:0,source:"mission",missionId:e})}function Ye(e){y.activeRoute?.missionId===e&&y.clearActiveRoute()}function va(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",be(`Mission failed (expired): ${n.name}`))}const Lt="__global__",ya={buyMultiplier:1,sellMultiplier:.85},ba={basic:.9,standard:1,strategic:1.2,luxury:1.35};function Me(){return o.ship.cargo||(o.ship.cargo={}),o.ship.cargo}function Ma(){const e=Me();return Object.values(e).reduce((t,n)=>t+n,0)}function Nt(){return $?.commodities??[]}function U(e){return Nt().find(n=>n.id===e)??null}function q(){return o.marketState?(o.marketState.temporaryModifiers=o.marketState.temporaryModifiers||{},o.marketState.activeEvents=o.marketState.activeEvents||[],o.marketState.localAdjustments=o.marketState.localAdjustments||{},o.marketState.priceIntel=o.marketState.priceIntel||{},o.marketState.initialDriftSeeded=o.marketState.initialDriftSeeded??!1):o.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},o.marketState}function $a(e){o.intel||(o.intel={systems:[]});const t=o.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return o.intel.systems.push(n),n})();t.lastPriceSeenDay=o.time.day}function wa(e){const t=q();let n=1;const a=t.temporaryModifiers[Lt];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function Sa(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function ka(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),i=n.exports?.includes(t.id);return s&&(a*=1.2),i&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function Je(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(E.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function xa(e,t){const n=Math.max(1,t.basePrice),a=ba[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,i=ka(e,t),l=1+Je(t)*.08,c=wa(t.id),d=_a(e.id,t.id),u=Wt(e.id,t.id),p=n*a*s*i*l*c*d*u;return Math.max(1,Math.round(p))}function jt(e,t){return H(e,t).base}function H(e,t){const n=J(e),a=U(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=xa(n,a),i=a.baseSpread??ya,r=Je(a),l=L(),c=Math.max(.1,Math.min(3,E.tradeProfitMultiplier??1)),d=It(),u=Math.max(.5,l.buyBonus??1),p=Math.max(0,l.sellBonus??1),m=Math.max(.5,l.marketTax??1),h=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+r*.05)/c*u)),w=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-r*.05)*c*d*p*m)),M=Math.max(1,Math.min(w,h-1)),S=Math.max(h,M,Math.round(s*(1+r*.1))),C=Math.max(1,Math.min(h,M,Math.round(s*Math.max(.65,1-r*.2)))),k=Sa(s,a.basePrice);return $a(e),{base:s,buy:h,sell:M,high:S,low:C,trend:k}}function _e(e,t,n=2){const a=q(),s=e&&e.length?e:Lt;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function Ht(e=1){if(typeof e=="number"){Ca(e);return}Ta(e??o)}function Ca(e){if(e<=0)return;const t=q(),n=Object.keys(t.temporaryModifiers);for(const s of n){const i=t.temporaryModifiers[s];i.remainingTurns-=e,i.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=o.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),zt(t,.2*e)}function Ta(e){const t=q(),n=$?.systems??[],a=$?.commodities??[],s=e.time.day;Ea(t,n,a);for(const i of n)for(const r of a){const l=Wt(i.id,r.id),c=Je(r),d=E.marketDailyTrendStrength??1,u=(1-l)*.1*d,p=(Math.random()-.5)*.1*(.5+c)*d,m=qt(l+u+p);t.localAdjustments[i.id]||(t.localAdjustments[i.id]={}),t.localAdjustments[i.id][r.id]=m}t.activeEvents=t.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=e.time.turn)),zt(t,.1)}function Ea(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const i=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=i}}e.initialDriftSeeded=!0}}function fe(e){return Me()[e]??0}function _a(e,t){return q().activeEvents.filter(a=>(a.expiresAtDay===void 0||o.time.day<a.expiresAtDay)&&a.expiresAtTurn>o.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function Da(e){q().activeEvents.push(e)}function Ia(e){return q().activeEvents.filter(n=>n.expiresAtTurn>o.time.turn&&(n.expiresAtDay===void 0||o.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function Ra(e){if(Math.random()>.08||!$?.commodities?.length)return;const n=$.commodities[Math.floor(Math.random()*$.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:o.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};Da(i),o.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function Ot(e,t,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,l=Math.min(.15,.03*r),c=q();c.localAdjustments[e]||(c.localAdjustments[e]={});const d=c.localAdjustments[e][t]??1,u=s==="buy"?1+l:1-l,p=qt(d*u);c.localAdjustments[e][t]=p}function Wt(e,t){return q().localAdjustments[e]?.[t]??1}function qt(e){return Math.min(2,Math.max(.5,e))}function zt(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,i]of Object.entries(a)){const r=i-1,l=i-r*t;Math.abs(l-1)<.01?delete a[s]:a[s]=l}Object.keys(a).length||delete e.localAdjustments[n]}}function Ba(){const t=J(o.location.systemId)?.neighbors.map(s=>J(s.id)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=100;if(o.player.credits<n)return{success:!1,message:"Not enough credits for intel."};o.player.credits-=n;const a=q();return t.forEach(s=>{const i={};($?.commodities||[]).forEach(l=>{const c=H(s.id,l.id);i[l.id]={buy:c.buy,sell:c.sell}});const r={turn:o.time.turn,prices:i};a.priceIntel[s.id]=r}),{success:!0,message:"Purchased neighbor intel."}}function Gt(){return q().priceIntel}function De(e,t,n){if(n<=0)return!1;const a=H(e,t).buy;if(a<=0)return!1;const s=a*n;if(o.player.credits<s)return!1;const i=o.ship.cargoCapacity;return i<=0?!1:Ma()+n<=i}function Ie(e,t,n){return n<=0?!1:fe(t)>=n}function Ut(e,t,n){if(!De(e,t,n))return!1;const a=H(e,t).buy,s=a*n;o.player.credits-=s;const i=Me();return i[t]=(i[t]||0)+n,Ot(e,t,n,a,"buy"),!0}function Xe(e,t,n){if(!Ie(e,t,n))return!1;const a=H(e,t).sell,s=a*n,i=Me();return i[t]=Math.max(0,(i[t]||0)-n),o.player.credits+=s,de(s),_n(t,n,s),Ot(e,t,n,a,"sell"),da(t,n,e),!0}function Vt(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const r=H(t,s).sell;return a+r*i},0)}const dt={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function Yt(e,t){if(!o||o.gameOver.active)return;const n=kn(),a=xn(n),s={score:a,reason:e,message:t??dt[e]??dt.other,location:o.location.systemId,stats:n};o.combat=null,o.miningSession=null,o.gameOver={active:!0,reason:e,message:s.message,summary:s};const i={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};En(i),y.go("gameover")}function Jt(e=!1){const t=St();kt(t),Ct(),y.go(e?"main":"ship_select")}const Ke="space-events-cache";let ce=[];function Aa(e){const t=Wa();ce=Oa(e,t),Xt(ce)}function Ze(e){return ce.find(t=>t.id===e)}function Pa(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=A(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,L().anomalyChance??1),s=Math.min(1,Math.max(0,(E.eventFrequency??50)/100*a));if(Math.random()>s)return;const i=ce.map(c=>({ev:c,weight:Ga(c,e)})).filter(c=>c.weight>0);if(!i.length)return;const r=i.reduce((c,d)=>c+d.weight,0);let l=Math.random()*r;for(const c of i)if(l-=c.weight,l<=0)return c.ev;return i[0].ev}function Fa(e){const t=e.outcomes;if(!t)return{};const n={},a=L(),s=Math.max(.1,Math.min(5,E.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),i=r=>{o.player.credits+=r,de(r),o.player.credits<0&&(o.player.credits=0)};if(t.giveCredits){const r=t.giveCredits.min??0,l=t.giveCredits.max??r,c=re(r,l),d=Math.round(c*s);i(d),o.notifications.push(`Received ${d} credits.`)}if(typeof t.creditsDelta=="number"){const r=Math.round(t.creditsDelta*s);i(r)}if(typeof t.fuelDelta=="number"){const r=o.ship.maxFuel,l=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;o.ship.fuel=Math.max(0,Math.min(r,o.ship.fuel+l))}if(typeof t.turnDelta=="number"){const r=Tt(t.turnDelta);o.time.turn+=r,oa(),Ht(r)}if(t.cargoGain&&ut(qa(t.cargoGain,s,1),1),t.cargoLoss&&ut(t.cargoLoss,-1),t.giveCommodity){const r=re(t.giveCommodity.min,t.giveCommodity.max),l=Math.max(0,Math.round(r*s));Re(t.giveCommodity.id,l),l>0&&o.notifications.push(`Collected ${l} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(o.inventory.weapons.push(t.giveWeapon),o.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const r=t.damageShip.min??0,l=t.damageShip.max??r,c=re(r,l);if(o.ship.hp=Math.max(0,o.ship.hp-c),o.notifications.push(`Ship took ${c} damage.`),o.ship.hp<=0)return Yt("ship_destroyed","Ship destroyed by event."),n}return t.applyStatus&&o.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&Ve(t.spawnMissionId).success&&o.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&o.notifications.push(`Event flag: ${t.flag}`),t.modifyReputation&&Rt({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function La(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,E.eventRewardMultiplier??1))*Math.max(.1,L().eventRewardMultiplier??1);if(n.mining){const s=re(n.mining.quantity.min,n.mining.quantity.max),i=Math.max(0,Math.round(s*a));Re(n.mining.commodityId,i),o.notifications.push(`Mining yield: ${i} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=re(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),i=o.ship.maxFuel;o.ship.fuel=Math.max(0,Math.min(i,o.ship.fuel-s)),o.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];Re(s,1),o.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(o.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),_e(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function Na(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(E.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(E.marketCrashChance??5)/100));if(e.location?.systemId){const s=$?.commodities?.[Math.floor(Math.random()*($?.commodities.length||1))];if(s){const i=e.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const l=1.1+Math.random()*.35;_e(s.id,l,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:Math.max(0,l),expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${i}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const l=Math.max(.5,.85-Math.random()*.25);_e(s.id,l,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:l,expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${i}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}}}}function ja(){Xt(ce)}function Ha(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(Ke)}function Oa(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function Wa(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Ke);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function Xt(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Ke,JSON.stringify(e))}function ut(e,t){for(const[n,a]of Object.entries(e)){const s=o.ship.cargo[n]??0,i=Math.max(0,s+a*t);o.ship.cargo[n]=i}}function qa(e,t,n=1){const a={};for(const[s,i]of Object.entries(e)){if(i<=0){a[s]=i;continue}const r=Math.max(n,Math.round(i*t));a[s]=r}return a}function Re(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));o.ship.cargo[e]=n+i,i<t&&o.notifications.push(`Cargo full: stored ${i}/${t} ${e}.`)}function re(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function za(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function pt(e,t){return e.has(t)}function Ga(e,t){let n=e.weight??0;const a=za(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const i=Math.max(.1,E.eventDangerMultiplier??1);n*=i}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),pt(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),pt(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=K().filter(i=>i.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let Be=[];function Ua(e){Be=e}function Va(e,t=[]){const n=Be.find(i=>i.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Be.find(i=>(i.enemyTags||[]).some(r=>a.has(r)))??null}function Ae(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Ya(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function Ja(e,t){const n=A(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,i=e.max??s,r=Ae(s,i),l=Math.max(0,Math.round(r*a));o.player.credits+=l,t.creditsEarned+=l,de(l);break}case"commodity":{const s=Ae(e.min??1,e.max??e.min??1),i=Math.max(0,Math.round(s*a)),r=Xa(e.id||"unknown",i);r>0&&t.commodities.push({id:e.id||"unknown",qty:r});break}case"weapon":{e.id&&(o.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(o.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&Ve(e.id).success&&t.missionsGranted.push(e.id);break}}}function Xa(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));return o.ship.cargo[e]=n+i,i}function Ka(e,t,n={},a=[]){const s=A(),i=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const l=Va(e,a);if(!l)return null;const c=n.quickKill?1.5:1,d=n.lowDamageTaken?1.25:1,u={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(h,w)=>{if(!h?.length||Math.random()>w)return;const M=Ya(h);M&&Ja(M,u)};p(l.common,r),p(mt(l.uncommon,d),.35*r);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(mt(l.rare,c),m*r),l.guaranteed?.credits){const{min:h,max:w}=l.guaranteed.credits,M=Ae(h,w),S=Math.max(0,Math.round(M*i));o.player.credits+=S,u.creditsEarned+=S,de(S)}return u}function mt(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}const ht={damageMultiplier:1.25,accuracyMultiplier:.8},Za=.4,Qa="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",es="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",pe={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},ts=Object.keys(pe).map(e=>({type:e,shieldMultiplier:pe[e].shield,hullMultiplier:pe[e].hull,description:pe[e].description}));function ns(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,i=as(t.weapons),r=ss(t.modules),l=e.player?.credits??0,c=Math.log10(l+1)*5,d=n+a+i+r+s/2+c;return Math.max(1,Math.round(d))}function Kt(e){const t=e/40;return t<0?0:t>1?1:t}function as(e){return e.reduce((t,n)=>{if(!n)return t;const a=O(n);if(!a)return t;const s=a.damage??0,i=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+i*.2+r},0)}function ss(e){return!e||!e.length?0:e.length*5}const is=0,os=100;function Zt(e){const t=Math.max(is,Math.min(os,(o.player.wanted??0)+e));return o.player.wanted=t,t}function rs(e,t,n){return Math.max(t,Math.min(n,e))}function ls(e){const{systemId:t,state:n,sessionFactor:a}=e,s=$?.systems.find(b=>b.id===t),i=s?.security??"medium",r=A(),l=L();let c;switch(i){case"high":c=.02;break;case"low":c=.12;break;default:c=.06;break}s?.tags.includes("mining_belt")&&(c+=.02),s?.marketProfile?.blackMarket&&(c+=.03);const d=Vt(n,t),u=uo(n.ship.templateId)?.cost??0,p=d+u,m=Math.min(.15,p/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),h=cs(n,t),w=a*.03,M=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),S=Math.max(0,Math.min(1,(E.pirateEncounterRate??0)/100)),C=Math.max(0,(r.encounterChancePerJump??100)/100),k=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,l.pirateDetectionMultiplier??1);let f=(c+m+w+h+M+S)*k*C;return ds(f,n,t)}function cs(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[c,d]of a){if(!d)continue;const u=H(t,c),p=U(c)?.basePrice??u.sell;if(p<=0)continue;const m=(u.sell-p)/p;s+=m*d,i+=d}if(i<=0)return 0;const r=s/i;return rs(r*.2,0,.15)}function ds(e,t,n){const a=Kt(t.time.day),s=.4,r=s+(.75-s)*a;let l=e;return ye(n,"core")?(l>.25&&(l=.25),l<.01&&(l=.01),l):(l>r&&(l=r),l<.01&&(l=.01),l)}const us=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],ps={belts:us},Qt="pirate_cutter",ms=.5,hs=100,ft=ps,$e=9,we=9,Se=5;function Pe(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function fs(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,s]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-s);e.ship.cargo=n,t.accumulatedOre={}}function Fe(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((l,c)=>l+c,0),i=Math.max(0,e.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,i));return r>0&&(a[t]=(a[t]??0)+r,e.ship.cargo=a),e.notifications||(e.notifications=[]),r<n&&e.notifications.push(`Cargo constrained: stored ${r}/${n} ${t}.`),r}function Y(e,t,n){return Math.max(t,Math.min(n,e))}function en(e,t){const n=Math.max(1,jt(e,t)),a=Math.min(hs,n*ms);return Math.max(1,a)}function gs(e){const t=Math.max(.1,E.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function tn(){const e=[];for(let t=0;t<$e;t++){const n=[];for(let a=0;a<we;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function vs(){const e=Math.floor(Math.random()*($e-4))+2,t=Math.floor(Math.random()*(we-4))+2,n=2+Math.floor(Math.random()*(Se-2));return{row:e,col:t,depth:n}}function ys(e,t,n,a){const s=t-a,i=e-n;if(Math.sqrt(s*s+i*i)<.5)return null;const l=Math.atan2(i,s)*(180/Math.PI),c=l<0?l+360:l;return c>=337.5||c<22.5?"dir-e":c<67.5?"dir-se":c<112.5?"dir-s":c<157.5?"dir-sw":c<202.5?"dir-w":c<247.5?"dir-nw":c<292.5?"dir-n":"dir-ne"}function bs(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function nn(e,t){const n=t?ft.belts.find(s=>s.id===t):null;if(n)return n;const a=ft.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function ke(e,t,n,a,s){const i=nn(t,n),r=an(e,i.id);if(s?.force&&(r.depletedUntilDay=void 0),r.depletedUntilDay!==void 0&&e.time.day<r.depletedUntilDay){e.notifications.push(`This belt is depleted. It will recover by day ${r.depletedUntilDay}.`);return}const l=0,c=tn(),{row:d,col:u,depth:p}=vs();e.miningSession={active:!0,systemId:t,beltId:i.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:l,stability:i.stability.start,maxStability:i.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:c,gridRows:$e,gridCols:we,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:d,veinCol:u,veinDepth:p,accumulatedOre:{},beltName:i.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[]}}function Ms(e,t){e.miningSession&&(e.miningSession.depth=Y(Math.round(t),1,Se))}function $s(e,t,n){for(let a=0;a<e.length;a++)for(let s=0;s<e[a].length;s++)e[a][s].selected=a===t&&s===n}function ws(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const s=nn(a.systemId,a.beltId),i=Y(Math.round(t),0,$e-1),r=Y(Math.round(n),0,we-1),l=Y(Math.round(a.depth??3),1,Se);a.depth=l,a.grid=a.grid??tn(),a.drillsUsed=(a.drillsUsed??0)+1;const c=r-(a.veinCol??0),d=i-(a.veinRow??0),u=l-(a.veinDepth??3),m=Math.sqrt(c*c+d*d)*2.6+Math.abs(u)*1.5,h=Math.max(.2,1-a.drillsUsed*.04),w=(Math.random()*2-1)*h,M=10-m,S=Y(Math.round(M+w),0,10),C=ys(a.veinRow??0,a.veinCol??0,i,r),k=bs(l,a.veinDepth??3),f=a.grid[i][r],b=!f.drilled;f.drilled=!0,f.signal=S,f.directionClass=C,f.depthHint=k.hint,f.depthClass=k.className,$s(a.grid,i,r),a.selectedRow=i,a.selectedCol=r,b?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+S/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+S/50);const _=Math.max(0,E.miningThreatMultiplier??.7),v=3+l,T=Math.max(0,Math.round(v*_));a.threat=Y((a.threat??0)+T,0,100),a.currentPirateChance=(a.threat??0)/100;let P=Math.max(0,Math.round(S*.0025));S>0&&P===0&&(P=1);const N=a.resourceId??"aurite_ore",j=Fe(e,N,P);Pe(a,N,j);const z=en(a.systemId,N),Z=Math.round(z*j);a.totalValueMined+=Z,a.lastYield={commodityId:N,amount:j,approxValue:Z,rareFind:null},a.lastMessage=`Pulse at X${r+1}, Y${i+1}, Z${l}: signal ${S}. Depth ${k.hint}. Threat +${T}%. Ore +${j}.`;const Q=Math.random()*100;let ee=!1;const G=a.threat*.9;if(Q<=G){ee=!0,a.runComplete=!0,a.active=!1;const te=an(e,s.id);te.depletedUntilDay=e.time.day+1,ie(Qt,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:S,directionClass:C,depthHint:k.hint,fightTriggered:ee,threat:a.threat}}function Ss(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const s=Y(Math.round(t.depth??3),1,Se),i=a-(t.veinCol??0),r=n-(t.veinRow??0),l=s-(t.veinDepth??3),c=Math.sqrt(i*i+r*r+l*l),d=Math.random()*1.5-.75,u=Y(Math.round(10-c*2+d),0,10),p=1+Math.max(0,s-2)*.12,h=Math.max(0,Math.round((u+p)*.2)),w=Math.min(.4,(t.explorationScore??0)/25),M=gs(t),S=Math.min(1,M+w);let k=Math.max(1,Math.round(h*S*(1+.1)));k=Math.max(1,Math.round(k*.5));const f=t.resourceId??"aurite_ore",b=Fe(e,f,k);Pe(t,f,b);const _=en(t.systemId,f),v=Math.max(.05,E.miningPayoutMultiplier??.35);let T=Math.round(_*b*v),x=null;if(u>=6&&Math.random()<.1+w*.5){const ee=Math.max(1,Math.round(u/3)),G=Fe(e,"stellite_fragment",ee);if(G>0){x={id:"stellite_fragment",amount:G};const te=Math.max(1,jt(t.systemId,x.id));T+=Math.round(te*G*v),Pe(t,x.id,G)}}t.totalValueMined+=T,t.lastYield={commodityId:f,amount:k,approxValue:T,rareFind:x},t.runComplete=!0,t.active=!1;const P=6+s*2,N=Math.max(0,E.miningThreatMultiplier??.7),j=Math.max(0,Math.round(P*N));t.threat=Y((t.threat??0)+j,0,100),t.currentPirateChance=(t.threat??0)/100,t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${s}: signal ${u}, efficiency ${(S*100).toFixed(0)}%, ore ${k} (${b} stored). Threat +${j}%.`;const z=Math.random()*100;let Z=!1;const Q=t.threat*.9;return z<=Q&&(Z=!0,ie(Qt,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset."),Fn(b+(x?.amount||0),!!x),{signal:u,yieldAmount:b,commodityId:f,rareFind:x,fightTriggered:Z,threat:t.threat}}function ks(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function an(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function xs(e,t){const n=e.miningSession;n&&(fs(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function Cs(e){if(!$)throw new Error("Content has not been loaded.");const t=$.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function Ts(e,t){return Math.floor(Math.random()*(t-e+1))+e}function D(e){const t=o.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}function Es(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function _s(e){return e??"main"}function Ds(e,t){y.go(_s(e),t)}function ie(e,t={}){const n=Cs(e),s=o.ship.weapons.map(()=>0),i=n.weaponIds.slice(),r=i.map(()=>0),l=A(),c=l.enemyHpMultiplier??1,d=Math.max(1,Math.round(l.enemyCountMin??1)),u=Math.max(d,Math.round(l.enemyCountMax??d)),p=Math.floor(Math.random()*(u-d+1))+d,m=Math.max(1,p);o.combat={enemyId:n.id,enemyName:n.name,enemyHp:Math.max(1,Math.round(n.hull*c*m)),enemyMaxHp:Math.max(1,Math.round(n.hull*c*m)),enemyShields:Math.max(0,Math.round(n.shields*c*m)),enemyMaxShields:Math.max(0,Math.round(n.shields*c*m)),enemyWeapons:i,enemyCooldowns:r,enemyTags:n.tags||[],enemyCount:m,playerCooldowns:s,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:o.ship.hp,round:1,log:[`${n.name} engages you in combat!`],adviceToken:Math.random(),returnTo:t.returnScreen,returnParams:t.returnParams},m>1&&o.combat.log.push(`Multiple bogies detected (${m} ships).`),y.go("combat")}function Is(e){const t=Rs(e);ie(t)}function Rs(e){if(!$?.enemies?.length)return"pirate_cutter";const t=ns(o),n=Kt(o.time.day),a=A(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,o.time.day-1),i=Math.max(0,a.difficultyScalePerShipPower??1),r=t*i*s;let l=r*(.6+.2*n),c=r*(.9+.4*n);e&&ye(e,"core")&&(l=t*.4,c=t*.8);const d=$.enemies.map(h=>({id:h.id,power:Es(h)})),u=d.filter(h=>h.power>=l&&h.power<=c);if(u.length)return u[Math.floor(Math.random()*u.length)].id;let p=d[0],m=Math.abs(d[0].power-t);for(const h of d){const w=Math.abs(h.power-t);w<m&&(p=h,m=w)}return p.id}function xe(e,t,n="normal"){const a=o.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){D("You must choose a weapon to fire.");return}sn(t,n);break;case"fire_all":Bs(n);break;case"brace":As();break;case"flee":if(Ps())return;break}if(o.combat){if(a.enemyHp<=0){js();return}if(Fs(),!!o.combat){if(o.ship.hp<=0){Hs();return}Ns(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function sn(e,t){const n=o.combat;if(!n)return;const a=o.ship;if(e<0||e>=a.weapons.length){D("Invalid weapon slot.");return}const s=a.weapons[e];if(!s){D("That hardpoint is empty.");return}const i=O(s);if(!i){D("Missing weapon data.");return}const r=L(),l=n.round<=1,c={...i,critChance:Math.min(.95,(i.critChance??0)+(r.critBonus??0)+(l?r.critBonus??0:0))},d=n.playerCooldowns[e]??0;if(d>0){D(`${i.name} is still recharging (${d} turn${d===1?"":"s"}).`);return}const u={shields:n.enemyShields,hp:n.enemyHp},p=t==="called_shot"?ht.damageMultiplier:1,m=t==="called_shot"?ht.accuracyMultiplier:1,h=Ws(n.playerStance),w=At(c,u,{accuracyMultiplier:m,damageMultiplier:p*h*(r.playerDamageBonus??1)});if(w<=0){const k=t==="called_shot"?"called shot goes wide":"misses";D(`You fire ${i.name}, but it ${k}.`),n.playerCooldowns[e]=i.cooldown;return}Rn(w);let M=w;if(n.enemyShields>0){const k=Math.min(n.enemyShields,M);n.enemyShields-=k,M-=k}M>0&&(n.enemyHp=Math.max(0,n.enemyHp-M));const S=u.shields>0?"shields":"hull",C=t==="called_shot"?"called shot":"normal shot";D(`You strike the ${n.enemyName}'s ${S} with ${i.name} (${C}) for ${w} damage.`),w>0&&i.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),D(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[e]=i.cooldown}function Bs(e){const t=o.combat;if(!t)return;const a=o.ship.weapons.map((s,i)=>({id:s,idx:i})).filter(({id:s,idx:i})=>!!s&&(t.playerCooldowns[i]??0)<=0).map(s=>s.idx);if(!a.length){D("No weapons are ready to fire.");return}for(const s of a){if(!o.combat||o.combat.enemyHp<=0)break;sn(s,e)}}function As(){const e=o.combat;e&&(e.playerBracing=!0,D("You brace for impact, diverting power to shields and hull integrity."))}function Ps(){const e=o.combat;if(!e)return!1;if(!e.canEscape)return D("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4,n=e.playerStance==="assault"?-.1:e.playerStance==="evasive"?.15:0,a=(o.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),i=ge((a-40)*.01,-.15,.15),r=A(),l=L(),c=(r.fleeSuccessBonus??0)/100+(l.fleeBonus??0),d=ge(t+n+i+c,.05,.95);return Math.random()<=d?(D(`You punch the thrusters and break free! (Flee chance ${(d*100).toFixed(0)}%)`),o.combat=null,xs(o,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),y.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(D(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(d*100).toFixed(0)}%)`),!1)}function Fs(){const e=o.combat;if(!e)return;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,D("Enemy weapons are jammed this round!");return}const t=[];if(e.enemyWeapons.forEach((m,h)=>{const w=e.enemyCooldowns[h]??0;m&&w<=0&&t.push(h)}),t.length===0){D(`The ${e.enemyName} reloads while you advance.`);return}const n=t[Ts(0,t.length-1)],a=e.enemyWeapons[n],s=O(a);if(!s){D(`The ${e.enemyName} fumbles its weapon.`);return}const i={shields:o.ship.shields,hp:o.ship.hp},r=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),l=A(),c=L(),d=e.round<=1;let u=At(s,i,{accuracyMultiplier:Math.max(0,(1-r)*(l.enemyAccuracyMultiplier??1)*Math.max(0,1-(c.dodgeBonus??0))*(d?Math.max(0,1-(c.dodgeBonus??0)):1))});if(u=Math.max(0,Math.round(u*(l.enemyDamageMultiplier??1))),e.enemyCount&&e.enemyCount>1&&(u=Math.max(0,Math.round(u*e.enemyCount))),u<=0){D(`The ${e.enemyName} fires ${s.name}, but misses.`),e.enemyCooldowns[n]=s.cooldown;return}e.playerBracing&&(u=Math.round(u*Za)),u=Math.max(0,Math.round(u*qs(e.playerStance))),u=Math.max(0,Math.round(u*(l.playerDamageTakenMultiplier??1)*Math.max(.1,c.damageTakenMultiplier??1)*(d?Math.max(.1,c.damageTakenMultiplier??1):1)));let p=u;if(e.playerStatus.shieldBoost>0){const m=Math.min(e.playerStatus.shieldBoost,p);e.playerStatus.shieldBoost-=m,p-=m}if(o.ship.shields>0){const m=Math.min(o.ship.shields,p);o.ship.shields-=m,p-=m}p>0&&(o.ship.hp=Math.max(0,o.ship.hp-p)),D(`The ${e.enemyName} hits you with ${s.name} for ${u} damage.`),Bn(u),e.enemyCooldowns[n]=s.cooldown}function Ls(){const e=o.combat;if(!e)return null;const t=e.enemyCooldowns.length>0?e.enemyCooldowns.map(l=>l??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...t),a=[];if(n<=1){const l=ge(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:l})}if(e.enemyShields<=0){const c=e.playerCooldowns.filter(u=>u<=0).length/Math.max(1,o.ship.weapons.length),d=ge(.6+c*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:d})}o.ship.hp/o.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((e.adviceToken??Math.random())+e.round*.13)%1,i=Math.floor(s*a.length),r=a[i];return{...r,confidence:r.confidence}}function Ns(){const e=o.combat;e&&(e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0),e.enemyCooldowns=e.enemyCooldowns.map(t=>t>0?t-1:0),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)))}function js(){const e=o.combat;if(!e)return;D(`The ${e.enemyName} explodes under your punishing fire. Victory is yours.`);const t=Math.max(0,e.startingHp-o.ship.hp),n=e.totalRounds<=3,a=t<=5,s=Ka(e.enemyId,e.enemyName,{quickKill:n,lowDamageTaken:a},e.enemyTags||[]);if(s){o.lastBattleResult=s;const i=[];s.creditsEarned&&i.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&i.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&i.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&i.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&i.push(`Missions: ${s.missionsGranted.join(", ")}`),D(`Loot recovered — ${i.join(" | ")||"nothing notable."}`),n&&D("Because you won quickly, salvage yields are richer."),a&&D("Minimal hull damage preserved more intact cargo.")}else D("No notable loot recovered.");if(An(),Pn(),ua(e.enemyId),e.enemyTags?.some(i=>/pirate|raider/i.test(i))||e.enemyId.includes("pirate")||e.enemyId.includes("raider")){const i=A().repGainMultiplier??1;Zt(Math.round(3*i))}o.combat=null,Ds(e.returnTo,e.returnParams)}function Hs(){D("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),o.ship.hp=0,o.ship.shields=0,o.combat=null,o.notifications.push("Critical failure — hull integrity dropped to zero."),Yt("ship_destroyed","Ship destroyed in combat.")}function Os(e){const t=o.combat;t&&(t.playerStance=e,D(`Stance changed to ${e.charAt(0).toUpperCase()+e.slice(1)}.`))}function Ws(e){switch(e){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function qs(e){switch(e){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function ge(e,t,n){return Math.max(t,Math.min(n,e))}function zs(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function Gs(e,t){Us(e,t).lastRiskSeenDay=e.time.day}function Us(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function Vs(e){e.time.day+=1,Nn(e.time.day),Ht(e),Na(e),va(e),zs(e),ks(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{ei(e)};function on(){return $?$.systemsById:null}function rn(e){const t=on();return t?t[e]??null:null}function Ys(e,t){return e.neighbors.find(n=>n.id===t)??null}let Qe=0,gt=1;function Js(e){e!==gt&&(gt=e,Qe=0)}function et(e){return e<=0?!1:Qe<e}function tt(){Qe+=1}function se(e){A().showEncounterDebug&&o.notifications.push(`Encounter debug: ${e}`)}function nt(){return rn(o.location.systemId)}function Xs(){const e=nt();if(!e)return[];const t=on();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:ln(e,a,n)}:null}).filter(n=>n!==null):[]}function ln(e,t,n){const a=L(),s=(e.baseDanger+t.baseDanger)/2,i={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},r=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,l=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,c=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,d=(i[e.region]??0)+(i[t.region]??0),u=Math.max(1,Math.round(n.distance*l+Math.max(0,d)*2)),p=ve(.1*n.distance+s*.12+c+d+(n.laneType==="wildspace"?.05:0),.1,.95),m=Math.min(.95,Math.max(.1,p)),h=Math.max(0,m-Math.max(0,a.hazardDetectionBonus??0)),w=Math.max(1,Math.round(n.distance*r*(1+s*.06))),M=Math.max(1,Math.round(w*Math.max(.1,a.fuelCostMultiplier??1))),S=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:u,fuelCost:M,hazardChance:h,hazardMitigation:Math.max(0,m-h),routeType:S,laneType:n.laneType,distance:n.distance}}function ve(e,t,n){return Math.max(t,Math.min(n,e))}function cn(e){const t=o.ship.cargo||{};let n=0,a=0,s=0;for(const[r,l]of Object.entries(t)){if(!l)continue;const c=U(r);if(!c||c.legalStatus!=="illegal"&&c.legalStatus!=="restricted")continue;const d=H(e.id,r);s+=d.sell*l,c.legalStatus==="illegal"?n+=l:a+=l}const i=n+a;return i<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:i,estimatedValue:s}}function Ks(e,t,n,a=L()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.12),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const i=1+Math.min(1.5,e.illegalUnits*.1+e.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),l=Math.max(.5,a.illegalTolerance??1);return ve(s*i*r/l,0,.95)}function Zs(e,t){const n=cn(e);if(!n)return!1;const a=L(),s=Ks(n,e,t.routeType,a);if(Math.random()>s)return!1;const i=o.ship.cargo||{};let r=0;for(const[p,m]of Object.entries(i)){if(!m)continue;const h=U(p);h&&(h.legalStatus!=="illegal"&&h.legalStatus!=="restricted"||(r+=m,i[p]=0))}o.ship.cargo=i;const l=Math.max(25,Math.round(n.estimatedValue*.35)),c=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,d=l+c;o.player.credits=Math.max(0,o.player.credits-d);const u=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25));return Zt(u),o.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${d} credits, wanted +${u}.`),!0}function Qs(e,t,n,a){const s=ve((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),i=ve(t,0,.95),r=Math.max(0,Math.round((s-i)*100));r>0&&o.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(i*100).toFixed(0)}%).`)}function ei(e){const t=nt();if(!$||!t)return;const n=Ys(t,e);if(!n){console.warn(`System ${e} is not a neighbor of ${t.id}`);return}const a=rn(e);if(!a)return;const s=ln(t,a,n),i=Math.max(0,E.fuelCostMultiplier??1),r=Math.max(0,Math.round(s.fuelCost*i)),l=Math.max(0,Math.min(3,(E.travelRiskScaling??100)/100)),c=A(),d=Math.max(0,c.globalDangerMultiplier??1),u=Math.min(.95,Math.max(0,s.hazardChance*l*d)),p={...s,fuelCost:r,hazardChance:u};if(o.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}o.ship.fuel-=p.fuelCost,o.location.systemId=a.id,o.location.docked=!0,y.advanceActiveRoute(a.id);const m=Tt(s.travelTime);o.time.turn+=m,Ra(a.id),Vs(o),Js(o.time.day),Gs(o,a.id),Ln();const h=pa(o,a.id);h.completed.length&&console.log(`Arrived at ${a.id}: checked ${h.checked} contracts, completed ${h.completed.join(", ")}.`);const w=Number.isInteger(m)?m.toFixed(0):m.toFixed(2),M=Math.abs(m-1)<.01?"":"s",S=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${w} turn${M}).`;Qs(s,p.hazardChance,l,d),Zs(a,p)&&se("Contraband inspection triggered on arrival."),!ni(a)&&(ai(a)||ti(t,a,p,S)||y.go("main",{message:S}))}function ti(e,t,n,a){const s=A(),i=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*i),routeType:n.routeType},l=oi(t)??Pa(r);return l?(se(`Travel event triggered: ${l.name||l.id||"unknown"}`),l.type==="mining"?(se(`Mining event surfaced: ${l.id}`),y.go("event",{eventId:l.id}),!0):!l.choices||l.choices.length===0?(se(`Auto-resolving event: ${l.name||l.id||"unknown"}`),si(l,a)):(y.go("event",{eventId:l.id}),!0)):(y.go("main",{message:`${a} — Uneventful transit.`}),!0)}function ni(e){const t=A(),n=Math.max(0,t.maxEncountersPerDay??0);if(!et(n))return!1;const a=ls({systemId:e.id,state:o,sessionFactor:1});if(Math.random()<=a){tt();const s=`Pirates intercept you near ${e.name}!`;return o.notifications.push(s),se(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),Is(e.id),!0}return!1}function ai(e){const t=A(),n=Math.max(0,t.maxEncountersPerDay??0);if(!et(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),i=e.security==="high"?1.15:e.security==="low"?.65:1,r=L(),l=cn(e),c=l?1+Math.min(1.2,l.totalUnits*.02):1,d=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),u=Math.min(1,a*s*i*c*d);if(Math.random()<=u){tt();const p=`Patrol intercepts you near ${e.name}!`;return o.notifications.push(p),se(`Patrol encounter triggered near ${e.name} (chance ${u.toFixed(3)})`),ie("navy_interceptor"),!0}return!1}function si(e,t){const n=La(e);if(n.triggerCombat?.enemyId){const a=A(),s=Math.max(0,a.maxEncountersPerDay??0);if(!et(s))return y.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;tt();const i=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return se(i),ie(n.triggerCombat.enemyId),!0}return y.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const ii={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function oi(e){const t=ri(e);return t?Ze(t)??null:null}function ri(e){const t=[],n=new Set(e.tags||[]),a=s=>{t.includes(s)||t.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(ii[e.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),t.length?t[Math.floor(Math.random()*t.length)]:null}window.attackPirateBase=e=>{const t=li(e);if(!t){console.warn(`Unknown base ${e}`);return}y.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function li(e){return $?$.basesById[e]??null:null}function ci(e){return $?Object.values($.basesById).find(n=>n.systemId===e)??null:null}function di(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}window.setMapZoom=e=>{y.setZoom(e)};window.focusRoute=e=>{y.go("travel",{...y.params,focusTargetId:e})};function ui(){const e=nt(),t=Xs(),n=y.zoom||"local",a=typeof y.params.focusTargetId=="string"?y.params.focusTargetId:"",s=y.activeRoute,i=s?.nodes[s.currentIndex+1],r=s&&s.nodes.length>1?s.nodes.map(M=>J(M)?.name??M).join(" → "):"",l=Object.values(o.ship.cargo||{}).reduce((M,S)=>M+S,0),c=t.map(({profile:M})=>M.hazardChance).reduce((M,S)=>Math.max(M,S),0),d=Math.round((c||0)*100);if(!e)return`
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
    `;const u=e?ci(e.id):null,p=di(u),m=u?`
      <div class="panel-card">
        <p class="label">${p}</p>
        <p class="muted">${u.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${u.id}')">
          Attack Pirate Base (Tier ${u.tier})
        </button>
      </div>
    `:"",h=e?gi(e,t,n,a,s):"",w=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:M,route:S,profile:C})=>{const k=M.id===a,f=M.id===i,b=pi(M.security),_=mi(M),v=hi(C.hazardChance),T=`${C.fuelCost} fuel`,x=`${C.travelTime} turn${C.travelTime===1?"":"s"}`,P=fi(S.laneType),N=`Distance: ${S.distance}`,j=_.length?_.join(" | "):"No special tags",z=["travel-row"];return(k||f)&&z.push("travel-row--focused"),`
              <article class="${z.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${M.name}</span>
                  <span class="travel-row__label">${b}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${P}</span>
                    <span>${N}</span>
                  </div>
                  <span class="travel-row__label">${T} | ${x} | Risk: ${v}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${M.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${M.id}')">Jump to ${M.name}</button>
                </div>
                <span class="travel-row__label">${j}</span>
              </article>
            `}).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${W(o.time.turn)}</span>
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
          <span class="stat-value">${l}/${o.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Risk</span>
          <span class="stat-value stat-risk">${d}%</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Travel</h1>
          <p class="muted">${e.description}</p>
          <div class="travel-list">
            ${w}
          </div>
          <div class="panel-card">
            <div class="travel-zoom-toggle">
              <span class="label">Map View</span>
              <div class="zoom-toggle__pills">
                <button class="btn btn-pill ${n==="local"?"btn-pill--active":""}" onclick="window.setMapZoom('local')">Local</button>
                <button class="btn btn-pill ${n==="sector"?"btn-pill--active":""}" onclick="window.setMapZoom('sector')">Sector</button>
              </div>
            </div>
            ${h}
            ${r?`<p class="muted">Active route: ${r}</p>`:""}
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${m}
          <div class="panel-card">
            <p class="label">Legend</p>
            <p class="muted">
              Frontier (pirate prone) | Mining belts | Trade hub checks | Unity inspections
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
  `}function pi(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function mi(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t}function hi(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function fi(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function gi(e,t,n,a,s){if(!e)return'<p class="muted">Map data unavailable.</p>';const i=320,r=200,l=16,c=36,d=8,u=8,p=qe(),m=p&&a?Ge(p,e.id,a):[],h=s?.nodes??[],w=new Set([e.id]);a&&w.add(a),(p?ze(p,e.id):t.map(({system:g})=>g.id)).forEach(g=>w.add(g)),h.forEach(g=>w.add(g)),m.forEach(g=>w.add(g));const S=g=>g.laneType==="core_lane"?"core":g.laneType==="frontier_lane"?"frontier":"wild",C=p?Zn(p,e.id,n):null,k=[],f=[];if(p&&C){const g=new Map(p.nodes.map(R=>[R.id,R])),I=new Set(C.keys());C.forEach((R,X)=>{const V=g.get(X);V&&k.push({...V,depth:R})}),p.lanes.filter(R=>I.has(R.from)&&I.has(R.to)).forEach(R=>{const X=Math.max(C.get(R.from)??0,C.get(R.to)??0);f.push({...R,depth:X})})}else{const g=new Set;k.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),g.add(e.id),t.forEach(({system:I,route:R})=>{g.has(I.id)||(k.push({id:I.id,name:I.name,x:I.coords?.x??0,y:I.coords?.y??0,tags:I.tags??[],depth:1}),g.add(I.id),f.push({from:e.id,to:I.id,type:S(R),distance:R.distance,depth:1}))})}if(!k.length)return'<p class="muted">No coordinate data to render.</p>';const b=k.map(g=>g.x),_=k.map(g=>g.y),v=Math.min(...b),T=Math.max(...b),x=Math.min(..._),P=Math.max(..._),N=T-v||1,j=P-x||1,z=g=>l+(g-v)/N*(i-l*2),Z=g=>r-(l+(g-x)/j*(r-l*2)),Q=new Map(k.map(g=>[g.id,{...g,sx:z(g.x),sy:Z(g.y)}])),ee=new Set(k.map(g=>g.id)),G=new Set(h);m.forEach(g=>G.add(g)),!p&&a&&G.add(a);const te=new Set,it=g=>{for(let I=0;I<g.length-1;I++)te.add(he(g[I],g[I+1]))};it(h),m.length?it(m):a&&te.add(he(e.id,a));const mn=f.filter(g=>ee.has(g.from)&&ee.has(g.to)).map(g=>{const I=Q.get(g.from),R=Q.get(g.to);if(!I||!R)return"";const X=he(g.from,g.to),V=g.depth??Math.max(I.depth??0,R.depth??0),ue=te.has(X),Ce=ue?3.2:V<=1?2.2:1.2,Te=ue?1:V<=1?.9:.35;return`<line x1="${I.sx.toFixed(1)}" y1="${I.sy.toFixed(1)}" x2="${R.sx.toFixed(1)}" y2="${R.sy.toFixed(1)}" stroke="${vi(g.type)}" stroke-width="${Ce}" stroke-linecap="round" opacity="${Te}"></line>`}).join(""),hn=Array.from(Q.values()).map(g=>{const I=g.id===e.id,X=(g.depth??0)<=1,V=G.has(g.id),ue=I?7:V?6:X?5:3.5,Ce=I?"#4CE6C3":V?"#7dd3fc":"#ffffff",Te=V||X?1:.45,ot=w.has(g.id),fn=g.name.length>16?`${g.name.slice(0,14)}...`:g.name,gn=ot?fn:"";return`
        <g>
          <circle
            cx="${g.sx.toFixed(1)}"
            cy="${g.sy.toFixed(1)}"
            r="${ue}"
            fill="${Ce}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${Te}"
          ></circle>
          ${ot?`<text x="${(g.sx+d).toFixed(1)}" y="${(g.sy-u).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${gn}</text>`:""}
        </g>
      `}).join("");return`
    <div class="travel-map" style="max-width:${i}px;margin:0 auto;">
      <svg
        width="${i}"
        height="${r}"
        viewBox="-${c} -${c} ${i+c*2} ${r+c*2}"
        role="img"
        aria-label="${n==="local"?"Local":"Sector"} system map"
      >
        ${mn}
        ${hn}
      </svg>
    </div>
  `}function vi(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const vt={high:"^",low:"v",stable:"-"};function yi(e={}){const t=J(o.location.systemId);if(!t)return`
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
    `;const n=Nt();if(!n.length)return`
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
    `;const a=Object.values(o.ship.cargo||{}).reduce((f,b)=>f+b,0),s=Object.entries(o.ship.cargo||{}).filter(([,f])=>f>0).sort((f,b)=>b[1]-f[1]).slice(0,5),i=new Map;K().filter(f=>f.status==="active").forEach(f=>{const b=f.requirements?.deliver;if(!b?.commodityId)return;const _=i.get(b.commodityId)??{needed:0,deliverable:!1},v=fe(b.commodityId)>=(b.quantity||0),T=!b.systemId||b.systemId===o.location.systemId;i.set(b.commodityId,{needed:_.needed+(b.quantity||0),deliverable:_.deliverable||T&&v})});const r=n.map(f=>{const b=H(t.id,f.id),_=Si(f.tradeTags?.length?f.tradeTags:f.tags),v=fe(f.id),T=ki(f,v),x=dn(b.buy,a,f.id);return{commodity:f,quote:b,tags:_,cargoQty:v,metaLine:T,maxBuyable:x,profit:b.sell-b.buy}}),l=r.reduce((f,b)=>b.profit>f.value?{id:b.commodity.id,value:b.profit}:f,{id:r[0]?.commodity.id??"",value:Number.NEGATIVE_INFINITY}).id,c=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,d=r.find(f=>f.commodity.id===c)||r.find(f=>f.commodity.id===l)||r[0],u=r.map(({commodity:f,quote:b,tags:_,cargoQty:v})=>{const T=d?.commodity.id===f.id,x=f.id===l;De(t.id,f.id,1),Ie(t.id,f.id,1);const P=i.get(f.id),N=["market-row"];T&&N.push("market-row--highlight");const j=P?`<span class="contract-pill${P.deliverable?" ready":""}">${P.deliverable?"Deliver now":"Needed"}</span>`:"",z=x?'<span class="contract-pill">Top margin</span>':"";return`
        <article class="${N.join(" ")}" onclick="selectMarketCommodity('${f.id}')">
          <div class="market-row__main">
            <span class="market-row__name">${f.name}</span>
            <span class="market-row__info">
              BUY ${b.buy} · SELL ${b.sell} · Held ${v}
            </span>
          </div>
          <div class="market-row__meta">
            <span class="market-row__trend">${vt[b.trend]} ${b.trend}</span>
            <span>${_||"Local goods"}</span>
            ${z}
            ${j}
          </div>
        </article>
      `}).join(""),p=a>0,m=`
    <div class="panel-card market-summary-card">
      <p class="label">Market Overview</p>
      <div class="market-summary__rows">
        <div>
          <span>System</span>
          <strong>${t.name}</strong>
        </div>
        <div>
          <span>Day</span>
          <strong>${o.time.day}</strong>
        </div>
        <div>
          <span>Turn</span>
          <strong>${W(o.time.turn)}</strong>
        </div>
        <div>
          <span>Credits</span>
          <strong>${o.player.credits}</strong>
        </div>
        <div>
          <span>Fuel</span>
          <strong>${o.ship.fuel}/${o.ship.maxFuel}</strong>
        </div>
        <div>
          <span>Cargo</span>
          <strong>${a}/${o.ship.cargoCapacity}</strong>
        </div>
        <div>
          <span>Wanted</span>
          <strong>${o.player.wanted}</strong>
        </div>
      </div>
      <p id="market-message" class="muted market-summary__message">
        Credits: ${o.player.credits} | Cargo: ${bi()}
      </p>
      <div class="market-summary__cargo">
        ${s.length?s.map(([f,b])=>{const _=U(f),v=_?.mass??0,T=v?` (Mass ${Math.round(v*b)})`:"";return`<span>${b} × ${_?.name||f}${T}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${p?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,h=d?De(t.id,d.commodity.id,1):!1,w=d?Ie(t.id,d.commodity.id,1):!1,M=d&&h?"":" disabled",S=d&&d.maxBuyable>1&&h?"":" disabled",C=d&&w&&d.cargoQty>0?"":" disabled",k=d?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${d.commodity.name}</strong>
        <span class="market-row__trend">${vt[d.quote.trend]} ${d.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${d.quote.buy} · SELL ${d.quote.sell}</span>
        <span>${d.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${M}
          onclick="buyCommodityAction('${d.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${S}
          onclick="buyAllCommodityAction('${d.commodity.id}', ${d.quote.buy})"
        >
          Buy Max (${d.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${C}
          onclick="sellCommodityAction('${d.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${C}
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
          <span>Day ${o.time.day}</span>
          <span>Turn ${W(o.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${m}
            ${Mi(t.id)}
            ${$i(t)}
          </aside>
          <div class="market-list">
            ${u}
            ${k}
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
  `}function bi(){const e=o.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${o.ship.cargoCapacity}`}function Mi(e){const t=Ia(e);return t.length?`
    <div class="panel-card market-events-card">
      <p class="label">Market Events</p>
      <div class="market-event__list">
        ${t.map(a=>`
      <div class="market-event">
        <p class="value-inline">${a.label||`${a.commodityId||"local goods"} x${a.multiplier}`}</p>
        <p class="muted">Expires in ${Math.max(0,(a.expiresAtTurn??0)-o.time.turn)} turns</p>
      </div>
    `).join("")}
      </div>
    </div>
  `:`
      <div class="panel-card market-events-card">
        <p class="label">Market Events</p>
        <p class="muted">No active market events.</p>
      </div>
    `}function $i(e){const t=Gt();return`
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (100 cr). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel</button>
      </div>
      ${(e?.neighbors.map(s=>J(s.id)).filter(s=>!!s&&t[s.id])||[]).map(s=>{const i=wi(e?.id,s.id),r=o.time.turn-(t[s.id]?.turn??o.time.turn),l=i.over?`${i.over.id} overpriced (+${Math.round(i.over.delta*100)}%)`:"no strong overpay",c=i.under?`${i.under.id} underpriced (${Math.round(i.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${s.name} (age ${r}t): Sell -> ${l} | Buy -> ${c}</p>`}).join("")||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function wi(e,t){if(!e)return{over:null,under:null};const a=Gt()[t];if(!a)return{over:null,under:null};let s=null,i=null;const r=Math.max(0,o.time.turn-a.turn),l=Math.max(.5,1-r*.05);for(const[c,d]of Object.entries(a.prices)){const u=H(e,c);if(u.sell>0&&d.buy>u.sell){const p=(d.buy-u.sell)/u.sell*l;(!s||p>s.delta)&&(s={id:c,delta:p})}if(u.buy>0&&d.sell<u.buy){const p=(u.buy-d.sell)/u.buy*l;(!i||p>i.delta)&&(i={id:c,delta:p})}}return{over:s,under:i}}function dn(e,t,n){if(e<=0)return 0;const a=Math.floor(o.player.credits/e),s=Math.max(0,o.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function Si(e){return e?.length?Array.from(new Set(e)).map(n=>at(n.replace(/_/g," "))).join(" | "):""}function ki(e,t){const n=at(e.tier||"standard"),a=xi(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,i=[`Held ${t}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" | ")}function at(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function xi(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??at(e)}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=o.location.systemId,n=U(e),a=Ut(t,e,1),s=H(t,e).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=o.location.systemId,n=U(e),a=Xe(t,e,1),s=H(t,e).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=o.location.systemId,a=o.ship.cargo||{},s=Object.values(a).reduce((c,d)=>c+d,0),i=dn(t,s);if(i<=0){nav("market");return}Ut(n,e,i);const r=U(e),l=document.getElementById("market-message");l&&(l.textContent=`Bought ${i} ${r?.name||e} for ${t*i} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=o.location.systemId,n=fe(e);if(n<=0){nav("market");return}const a=H(t,e).sell;Xe(t,e,n);const s=U(e),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=o.location.systemId,t=Object.entries(o.ship.cargo||{});let n=0;const a=[];for(const[i,r]of t){if(!r||!Xe(e,i,r))continue;n+=r;const c=U(i);a.push(`${r} ${c?.name||i}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const i=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${i}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=Ba(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};function Ci(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function Ti(e={}){const t=typeof e.message=="string"?e.message:"",n=K(),a=na(),s=Object.values(o.ship.cargo||{}).reduce((u,p)=>u+p,0),r=Ci(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),l=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(u=>{const p=u.requirements||{},m=yt(p.travel?.systemId),h=bt(p.travel?.systemId);return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  ${u.description?`<p class="muted">${u.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${aa(u)}</span>
                    <span>${sa(u)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${m}${h?` - ${h}`:""}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',c=r?[r]:a[0]?[a[0].id]:[],d=a.length>0?`
        <div class="contract-list">
          ${a.map(u=>{const p=yt(u.requirements?.travel?.systemId),m=bt(u.requirements?.travel?.systemId),h=["contract-row"];return c.includes(u.id)&&h.push("contract-row--active"),`
                <article class="${h.join(" ")}" onclick="acceptContract('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  <p class="muted">${u.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${p}${m?` - ${m}`:""}</span>
                    <span>Reward: ${Ei(u.reward)}</span>
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
          <span>Day ${o.time.day}</span>
          <span>Turn ${W(o.time.turn)}</span>
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
        <section class="data-panel contract-section">
          <h1 class="panel-title">Contracts</h1>
          ${t?`<p class="muted">${t}</p>`:""}
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
  `}function yt(e){if(!e)return"Unknown";const t=J(e);return t?.name?`<strong>${t.name}</strong>`:e}function bt(e){if(!e)return"";const t=qe();if(!t)return"";const n=Qn(t,o.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function Ei(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=O(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}window.acceptContract=e=>{const t=Ve(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=la(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};const _i={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function st(e){return $?$.ships.find(t=>t.id===e)??null:null}function Di(){return st(o.ship.templateId)}function Ii(){return $?$.ships.filter(e=>e.starter):[]}function Ri(){return $?$.ships.filter(e=>!e.starter):[]}function un(e,t){const n=st(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,l)=>_i[`${r.size}:${r.type}`]??a[l]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};o.ship=i,Ne(),He()}function Bi(e){un(e),o.player.hasChosenStarter=!0}function Ai(e){const t=st(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):o.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(o.player.credits-=t.cost,un(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function Pi(){const e=o.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=t+n;if(o.player.credits<a){console.warn("Not enough credits to fully repair.");return}o.player.credits-=a,e.hp=e.maxHp,e.shields=e.maxShields}function Fi(){const e=o.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(o.player.credits<a){console.warn("Not enough credits to fully refuel.");return}o.player.credits-=a,e.fuel=e.maxFuel}function Li(){return $?$.components:[]}function Ni(){if(!$)return[];const e=o.ship.components;return $.components.filter(t=>e.includes(t.id))}function ji(e){if(!$)return!1;const t=$.components.find(n=>n.id===e);return t?o.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):o.ship.components.includes(e)?(console.warn("Component already installed."),!1):(o.player.credits-=t.cost,o.ship.components.push(e),Hi(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function Hi(e){const t=o.ship;switch(e.effectType){case"hull":t.maxHp+=e.value,t.hp+=e.value;break;case"shields":t.maxShields+=e.value,t.shields+=e.value;break;case"fuel":t.maxFuel+=e.value,t.fuel+=e.value;break;case"cargo":t.cargoCapacity+=e.value;break}}window.repairShipAction=()=>{Pi(),nav("ship")};window.refuelShipAction=()=>{Fi(),nav("ship")};function Oi(){const e=o.ship,t=Di(),n=Ni(),a=o.combat?.playerCooldowns??[],s=Object.values(e.cargo||{}).reduce((l,c)=>l+c,0),i=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(l=>`<li>${l.name} (+${l.value} ${l.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${W(o.time.turn)}</span>
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
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${e.fuel}/${e.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${s}/${e.cargoCapacity}</span>
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
            ${e.hardpoints.map((l,c)=>{const d=O(e.weapons[c]),u=d?.name||"Empty",p=a[c]??0,m=d?We(d):null,h=m?`
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
  `}function Wi(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=Ze(t);if(!n)return`
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
        </div>
      </div>
    `;const a=qi(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${zi(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function qi(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${Gi(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function zi(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Gi(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=y.params,n=typeof t.eventId=="string"?t.eventId:"",a=Ze(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const i=Fa(s);if(i.triggerCombat?.enemyId){ie(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{ke(o,o.location.systemId,e||void 0,t||void 0),y.go("mining")};window.fireWeapon=(e,t="normal")=>{xe("fire",e,t),o.combat&&nav("combat")};window.brace=()=>{xe("brace"),o.combat&&nav("combat")};window.flee=()=>{xe("flee"),o.combat&&nav("combat")};window.setStance=e=>{Os(e),o.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{xe("fire_all",void 0,e),o.combat&&nav("combat")};function Ui(){const e=o.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=o.ship,n=e.log.map(d=>`<div class="log-line">${d}</div>`).join(""),a=t.hardpoints.map((d,u)=>{const p=t.weapons[u],m=O(p),h=e.playerCooldowns[u]??0,w=!!m&&h===0;return`
        <div class="panel-card">
          <p class="label">Slot ${u+1} · ${d.size.toUpperCase()} ${d.type}</p>
          <p class="value-inline">${m?.name||"Empty"}</p>
          <p class="muted">${h>0?`Cooling (${h})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${w?"":"disabled"} onclick="fireWeapon(${u}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${w?"":"disabled"} onclick="fireWeapon(${u}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),s=ts.map(d=>`
        <tr>
          <td>${d.type}</td>
          <td>${d.shieldMultiplier.toFixed(2)}x</td>
          <td>${d.hullMultiplier.toFixed(2)}x</td>
          <td>${d.description}</td>
        </tr>
      `).join(""),i=Ls(),r=i?`<p class="combat-advice ${i.suggestion}">
        ${i.text}
        <span class="advice-confidence">Intel confidence: ${(i.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',c=e.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${e.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${W(o.time.turn)} · Round ${e.round}</span>
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
          <span class="stat-label">Enemy Hull</span>
          <span class="stat-value">${e.enemyHp}/${e.enemyMaxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Enemy Shields</span>
          <span class="stat-value">${e.enemyShields}/${e.enemyMaxShields}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Combat: ${e.enemyName}</h1>
          <p class="muted">Current stance: <strong>${e.playerStance}</strong>. ${c}</p>

          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Your Ship</p>
              <p class="value-inline">Fuel ${t.fuel}/${t.maxFuel}</p>
            </div>
            <div class="panel-card">
              <p class="label">Enemy</p>
              <p class="value-inline">${e.enemyName}</p>
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
            <p><strong>Called Shot</strong>: ${Qa}</p>
            <p><strong>Brace vs Attack</strong>: ${es}</p>
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

    </div>
  `}window.buyShipAction=e=>{Ai(e)};window.buyComponentAction=e=>{ji(e)};window.buyWeaponAction=e=>{Vn(e)};function Vi(){if(!ye(o.location.systemId,"shipyard"))return`
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
    `;const e=Ri(),t=Li(),n=Gn(),a=je().map(c=>O(c)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
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
            ${e.map(c=>`
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
      `,i=t.length===0?'<p class="muted">No components in stock.</p>':`
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
            ${t.map(c=>`
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
            ${n.map(c=>{const d=We(c),u=d.tagNotes.length?`Traits: ${d.tagNotes.join(", ")}`:"";return`
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
          <span>Day ${o.time.day}</span>
          <span>Credits ${o.player.credits}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ships for Sale</h1>
          ${s}

          <h2 class="panel-title">Components & Upgrades</h2>
          ${i}

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
  `}const Yi={incomeMultiplier:e=>B(e,"income"),eventRewardMultiplier:e=>B(e,"event rewards"),hpBonus:e=>B(e,"hull"),cargoBonus:e=>Xi(e,"cargo capacity"),sellBonus:e=>B(e,"sell price"),buyBonus:e=>B(e,"buy price"),marketTax:e=>B(e,"market tax"),miningYield:e=>B(e,"mining yield"),rareFindChance:e=>B(e,"rare find chance"),miningSpeed:e=>B(e,"mining duration"),dodgeBonus:e=>me(e,"dodge chance"),critBonus:e=>me(e,"crit chance"),damageTakenMultiplier:e=>B(e,"damage taken"),fleeBonus:e=>me(e,"flee chance"),pirateDetectionMultiplier:e=>B(e,"pirate detection"),scanDetectionMultiplier:e=>B(e,"scan detection"),illegalTolerance:e=>B(e,"illegal tolerance"),fuelCostMultiplier:e=>B(e,"fuel cost"),hazardDetectionBonus:e=>me(e,"hazard detection"),anomalyChance:e=>B(e,"anomaly chance"),shieldRegenBonus:e=>B(e,"shield regen")};function Ji(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>Yi[n]?.(a)??null).filter(n=>!!n):[]}function B(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function me(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Xi(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}window.chooseStarter=e=>{Bi(e),He(),y.go("main")};function Ki(){const e=Ii();if(e.length===0)return`
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
    `;const t=e.map(n=>{const a=Ji(n),s=n.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${n.passive.name}</p>
          ${a.length?`<ul class="passive-summary__list">${a.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
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
          <span>Day ${o.time.day}</span>
          <span>Turn ${W(o.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Select Your Starter Ship</h1>
          <p class="muted">Pick a hull to define your opening playstyle.</p>
        <div class="panel-row">
          ${t}
        </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('main')">Skip</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function Zi(){const e=o.ship;if(!e.hardpoints.length)return`
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
    `;const t=e.hardpoints.map((n,a)=>{const i=O(e.weapons[a])?.name||"Empty";return`
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
          <span>Turn ${W(o.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Weapon Hardpoints</h1>
          <div class="panel-row">
            ${t}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('ship')">Back</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}window.equipWeaponAction=(e,t)=>{Un(e,t)&&nav("weapon_slots")};function Qi(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=o.ship.hardpoints[t];if(!n)return`
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
    `;const r=je().map(l=>O(l)).filter(l=>!!l).map(l=>{const c=Oe(t,l.id),u=O(o.ship.weapons[t])?.id===l.id?"Equipped":"Equip",p=We(l),m=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${c?"":"muted"}">
          <p class="label">${l.size} / ${l.type}</p>
          <p class="value-inline"><strong>${l.name}</strong></p>
          <p class="muted">Damage ${l.damage} (${l.damageType}) · Acc ${Math.round(l.accuracy*100)}% · Crit ${Math.round(l.critChance*100)}% (×${l.critMultiplier}) · CD ${l.cooldown}</p>
          <p class="muted">Role: ${p.role} (${p.typeLabel}) · Vs Shields: ${p.vsShields} · Vs Hull: ${p.vsHull}${m}</p>
          <button class="btn btn-primary" ${c?"":"disabled"} onclick="equipWeaponAction(${t}, '${l.id}')">
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
          <span>Turn ${W(o.time.turn)}</span>
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
  `}window.leaveMining=()=>{o.miningSession=null,y.go("main")};window.drillCell=(e,t)=>{ws(o,e,t)?.fightTriggered||y.go("mining")};window.setMiningDepth=e=>{Ms(o,e),y.go("mining")};window.finalizeDrill=()=>{if(Ss(o)?.fightTriggered)return;const t=o.miningSession?.lastMessage||"Extraction complete.";y.go("main",{message:t})};window.newSurvey=()=>{ke(o,o.location.systemId,o.miningSession?.beltId,o.miningSession?.resourceId,{force:!0}),y.go("mining")};function eo(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function to(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const s=e[n][a],i=["mine-cell"];s.drilled&&i.push("drilled"),s.selected&&i.push("selected");const r=["mine-cell-inner"];s.directionClass&&r.push(s.directionClass),s.depthClass&&r.push(s.depthClass),s.signal!=null&&r.push(eo(s.signal));const l=s.signal!=null?`<span class="cell-signal">${s.signal}</span>`:'<span class="cell-signal muted">·</span>';t.push(`
        <div class="${i.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${r.join(" ")}">
            <div class="cell-center">
              ${l}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function no(){const e=o.miningSession;if(!e)return`
      <div class="app-root mining-shell">
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
      <footer class="app-footer"></footer>
      </div>
    `;const t=Math.round(e.threat??0),n=Vt(o,e.systemId),a=Array.from({length:5},(r,l)=>{const c=l+1;return`<button class="chip-btn ${c===e.depth?"active":""}" onclick="setMiningDepth(${c})">Z${c}</button>`}).join(""),s=to(e.grid),i=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
      <div class="app-root mining-shell">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Mining · Session Complete</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Extraction Complete</h1>
            <p>${e.lastMessage??"Claim finished."}</p>
            <p>Haul: ${i}</p>
            <p class="muted">Victory returns you here; flee returns you to the system menu.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-primary btn-small" onclick="newSurvey()">New Survey</button>
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
        </footer>
      </div>
    `:`
    <div class="app-root mining-shell">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Mining · ${e.beltName||e.beltId||e.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${W(o.time.turn)}</span>
        </div>
      </header>

      <section class="mining-stats">
        <div class="stat-pill">
          <span class="stat-label">Drills</span>
          <span class="stat-value">${e.drillsUsed??0}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Depth</span>
          <span class="stat-value">Z${e.depth}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Threat</span>
          <span class="stat-value stat-risk">${t}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Ore Value</span>
          <span class="stat-value">${Math.round(n)} cr</span>
        </div>
      </section>

      <div class="mining-layout">
        <section class="mining-grid-card">
          <div class="card-head">
            <div>
              <p class="panel-eyebrow">Survey Grid</p>
              <h2 class="panel-title">Tap a tile to pulse and triangulate the vein</h2>
              <p class="muted">${e.lastMessage||"Drill to raise signal. Threat rises each pulse."}</p>
            </div>
            <div class="chip">Threat ${t}%</div>
          </div>
          ${s}
          <div class="grid-legend">
            <span class="legend-pill legend-strong">9-10 strong</span>
            <span class="legend-pill legend-medium">4-8 medium</span>
            <span class="legend-pill legend-weak">1-3 weak</span>
            <span class="legend-pill legend-zero">0 dry</span>
            <span class="legend-pill legend-pirate">Threat triggers pirates</span>
          </div>
        </section>

        <aside class="mining-side">
          <div class="panel-card">
            <p class="label">Depth</p>
            <div class="mode-row">
              ${a}
            </div>
            <p class="muted">Each tile shows signal strength with a gradient pointing toward the vein; glow hints depth (shallow/deep/optimal).</p>
          </div>

          <div class="panel-card">
            <p class="label">Controls</p>
            <div class="mode-row">
              <button class="chip-btn" onclick="finalizeDrill()">Final Drill</button>
              <button class="chip-btn" onclick="newSurvey()">New Survey</button>
              <button class="chip-btn" onclick="leaveMining()">Leave</button>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Threat</p>
            <div class="bar-group">
              <div class="bar-row">
                <span>Pirate Threat</span>
                <span>${t}%</span>
              </div>
              <div class="bar-bg">
                <div class="bar-fill" style="width:${t}%;"></div>
              </div>
            </div>
            <p class="muted">If the roll succeeds, a real pirate combat is started and threat resets to 0%.</p>
          </div>

          <div class="panel-card">
            <p class="label">Last haul</p>
            <p class="value-emphasis">${i}</p>
          </div>
        </aside>
      </div>

      <footer class="app-footer"></footer>
    </div>
  `}window.startNewRun=()=>Jt(!1);window.returnToMainMenu=()=>Jt(!0);function ao(){const e=o.gameOver?.summary,t=Tn(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],i=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],l=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],c=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],d=p=>p.map(([m,h])=>`
      <tr>
        <td>${m}</td>
        <td>${h}</td>
      </tr>
    `).join(""),u=t.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${t.map((p,m)=>`
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
        <p>Final score • ${e?.reason.replace(/_/g," ")??"Unknown fate"}</p>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h2>Career Overview</h2>
          <table>${d(s)}</table>
        </section>
        <section class="data-panel">
          <h2>Economy</h2>
          <table>${d(i)}</table>
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
  `}const pn=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],so=pn.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{});function Le(e){const t=e.split(".");let n=E;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function io(e,t){const n=e.split(".");let a=E;for(let s=0;s<n.length-1;s++){const i=n[s];a[i]=a[i]??{},a=a[i]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{ie(e)};window.devMining=()=>{ke(o,o.location.systemId),y.go("mining")};function oo(){return pn.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(Le(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${Le(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function ae(){const e=document.getElementById("app");if(!e)return;let t="";switch(y.current){case"main":t=Hn();break;case"travel":t=ui();break;case"market":t=yi(y.params);break;case"contracts":t=Ti();break;case"ship":t=Oi();break;case"event":t=Wi(y.params);break;case"combat":t=Ui(y.params);break;case"weapon_slots":t=Zi();break;case"weapon_select":t=Qi(y.params);break;case"shipyard":t=Vi();break;case"ship_select":t=Ki();break;case"mining":t=no();break;case"gameover":t=ao();break}const n=y.current!=="main"&&y.current!=="event"&&y.current!=="combat"&&y.current!=="mining"?`
        <div class="menu-back">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
        </div>
      `:"",a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${oo()}
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
      <section class="dev-section">
        <h3>Mining Tools</h3>
        <div class="dev-actions">
          <button class="btn btn-primary" id="devResetMiningSession">Reset Mining Session</button>
          <button class="btn btn-primary" id="devSpikeThreat">Max Threat</button>
          <button class="btn btn-primary" id="devLogMiningGrid">Log Mining Grid</button>
        </div>
        <div class="dev-mining-status" id="devMiningStatus"></div>
      </section>
    </div>
  `;e.innerHTML=`${n}${t}${a}`,ro()}let oe=!1,Mt=!1;function ro(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),l=document.getElementById("devGodMode"),c=document.getElementById("devResetMiningSession"),d=document.getElementById("devSpikeThreat"),u=document.getElementById("devLogMiningGrid"),p=document.getElementById("navTravel"),m=document.getElementById("navMarket"),h=document.getElementById("navShip"),w=document.getElementById("devPersistEvents"),M=document.getElementById("devClearEvents"),S=document.getElementById("devHardReset"),C=t?.querySelectorAll("input[data-dev-path]"),k=document.getElementById("devMiningStatus"),f=()=>{t&&t.classList.toggle("hidden")},b=v=>{const T=so[v],x=document.getElementById(`devValue-${v.replace(/\./g,"__")}`);T&&x&&(x.textContent=T.formatter(Le(v)))};C?.forEach(v=>{const T=()=>{const x=v.dataset.devPath;if(!x)return;const P=Number(v.value);io(x,P),wn(),b(x)};v.addEventListener("input",T)});const _=()=>{if(!k)return;const v=o.miningSession;if(!v){k.textContent="No active mining session.";return}const T=(v.threat??0).toFixed(1),x=v.depth??0;k.innerHTML=`
      <div>System: ${v.systemId}</div>
      <div>Belt: ${v.beltName??v.beltId??"—"}</div>
      <div>Depth: Z${x}</div>
      <div>Threat: ${T}%</div>
      <div>Exploration: ${(v.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${v.drillsUsed??0}</div>
      <div>Selected: ${v.selectedRow!=null?`X${v.selectedCol+1} Y${v.selectedRow+1}`:"none"}</div>
    `};_(),e?.addEventListener("click",f),n?.addEventListener("click",()=>t?.classList.add("hidden")),p?.addEventListener("click",()=>window.nav?.("travel")),m?.addEventListener("click",()=>window.nav?.("market")),h?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{o.player.credits+=1e3,t?.classList.add("hidden"),ae()}),r?.addEventListener("click",()=>{const v=o.ship.cargo||{};v.aurite_ore=(v.aurite_ore||0)+20,o.ship.cargo=v,t?.classList.add("hidden"),ae()}),l?.addEventListener("click",()=>{oe=!oe,o.godMode=oe,oe&&(o.ship.hp=o.ship.maxHp,o.ship.shields=o.ship.maxShields),alert(`God Mode: ${oe?"On":"Off"}`)}),c?.addEventListener("click",()=>{ke(o,o.location.systemId,o.miningSession?.beltId),t?.classList.add("hidden"),ae(),_()}),d?.addEventListener("click",()=>{const v=o.miningSession;v&&(v.threat=95,v.currentPirateChance=.95,t?.classList.add("hidden"),ae(),_())}),u?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",o.miningSession),console.groupEnd()}),w?.addEventListener("click",()=>{ja(),alert("Events cached locally. Future loads will honor this list.")}),M?.addEventListener("click",()=>{Ha(),alert("Event cache cleared. Future loads use the bundled data.")}),S?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),Mt||(document.addEventListener("keydown",v=>{v.key==="`"&&f(),v.key==="Escape"&&y.current!=="main"&&window.nav?.("main")}),Mt=!0)}let $=null;async function lo(){const e="/space/".replace(/\/+$/,"/"),t=x=>`${e}content/${x}`,[n,a,s,i,r,l,c,d,u]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!i.ok)throw new Error(`Failed to load commodities.json: ${i.status}`);if(!l.ok)throw new Error(`Failed to load enemies.json: ${l.status}`);if(!c.ok)throw new Error(`Failed to load events.json: ${c.status}`);if(!d.ok)throw new Error(`Failed to load loot_tables.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load missions.json: ${u.status}`);const p=await n.json(),m=await a.json(),h=await s.json(),w=await i.json(),M=await r.json(),S=await l.json(),C=await fetch(t("bases.json"));if(!C.ok)throw new Error(`Failed to load bases.json: ${C.status}`);const k=await C.json(),f={};for(const x of p)f[x.id]=x;const b=await c.json();Aa(b);const _=await d.json();Ua(_);const v=await u.json();ea(v);const T={};for(const x of k)T[x.id]=x;return{systems:p,systemsById:f,bases:k,basesById:T,ships:m,components:h,commodities:w,weapons:M,enemies:S,events:b,lootTables:_,missions:v}}async function co(){$=await lo();const e=Kn($.systems),t=St();t.map=e,kt(t),Ft(e),Ct();const n=Mn();if(n){const i=o.ship.hardpoints.length,r=[];for(let l=0;l<i;l++)r.push(n.weapons[l]??null);o.ship.weapons=r,o.inventory.weapons=n.inventory}He();const a=y.go.bind(y);y.go=(i,r)=>{a(i,r),ae()};const s=y.setZoom.bind(y);y.setZoom=i=>{y.zoom!==i&&(s(i),ae())},window.nav=(i,r={})=>{y.go(i,r)},y.current=o.player.hasChosenStarter?"main":"ship_select",ae()}function J(e){return $?$.systemsById[e]??null:null}function uo(e){return $?$.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{co()});
