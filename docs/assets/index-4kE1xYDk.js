(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Nt=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],je=Nt,E=je.find(e=>e.starter)??je[0],Ht=E?.hardpoints.length??0,Ot={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Xe(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let i;const Ze="cosmo_weapon_loadout";function Wt(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Ze);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function fe(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:i.ship.weapons,inventory:i.inventory?.weapons??[]};window.localStorage.setItem(Ze,JSON.stringify(e))}function et(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:E?.id??"none",name:E?.name??"Undefined Hull",hp:E?.hull??0,maxHp:E?.hull??0,shields:E?.shields??0,maxShields:E?.shields??0,fuel:E?.fuel??0,maxFuel:E?.fuel??0,cargoCapacity:E?.cargo??0,cargo:{},modules:[],weapons:E?.hardpoints.map(e=>Ot[`${e.size}:${e.type}`]??null)??Array(Ht).fill(null),weaponPower:12,evasion:5,maneuverRating:E?.maneuverRating??0,components:[],hardpoints:E?.hardpoints.map(e=>({...e}))??[],passive:E?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},intel:{systems:[]},runStats:Xe(),gameOver:{active:!1,reason:null}}}function tt(e){i=e}const nt="space-dev-tune",L={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:1,enemyDamageMultiplier:1,enemyAccuracyMultiplier:1,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:1,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:100,nonPirateEventWeight:1,showEncounterDebug:0}};let M={...L};function qt(e){return{...L.combat,...e}}function at(){if(typeof window>"u"||!window.localStorage){M={...L};return}const e=window.localStorage.getItem(nt);if(!e){M={...L};return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=qt({...t.combat,...n});M={...L,...t,combat:a}}catch{M={...L}}}function Vt(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(nt,JSON.stringify(M))}function ge(e){const t=M.progressionSpeedMultiplier??1;return e*t}function C(){return M.combat??L.combat}function zt(){return i.ship.passive?.effects??{}}const st="cosmo_run_high_scores",it=5;function Ut(){return i?{...i.runStats,commodityVolumes:{...i.runStats.commodityVolumes}}:Xe()}function Gt(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function ot(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(st);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,it):[]}catch{return[]}}function Yt(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(st,JSON.stringify(e.slice(0,it)))}function Jt(){return ot()}function Kt(e){const t=ot();t.push(e),t.sort((n,a)=>a.score-n.score),Yt(t)}function U(e){if(!i||e<=0)return;i.runStats.creditsEarnedTotal+=e;const t=i.player.credits;t>i.runStats.highestNetWorth&&(i.runStats.highestNetWorth=t)}function Qt(e,t,n){if(!i)return;i.runStats.tradeProfitTotal+=Math.max(0,n);const a=i.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=i.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(i.runStats.mostTradedCommodityId=e)}function Xt(e){!i||e<=0||(i.runStats.contractPayoutTotal+=e)}function Zt(){i&&(i.runStats.contractsCompleted+=1)}function en(e){!i||e<=0||(i.runStats.damageDealtTotal+=e)}function tn(e){!i||e<=0||(i.runStats.damageTakenTotal+=e)}function nn(){i&&(i.runStats.fightsSurvived+=1)}function an(){i&&(i.runStats.shipsDestroyed+=1)}function sn(e,t){!i||e<=0||(i.runStats.miningRuns+=1,i.runStats.oreMinedTotal+=e,t&&(i.runStats.rareFinds+=1))}function on(){i&&(i.runStats.jumpsMade+=1,i.runStats.systemsVisited+=1)}function rn(e){i&&(i.runStats.daysSurvived=Math.max(i.runStats.daysSurvived,e))}const y={current:"main",params:{},go(e,t={}){this.current=e,this.params=t}};function R(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}function ln(e){return f?f.systems.find(t=>t.id===e)??null:null}function ee(e,t){const n=ln(e);return n?n.tags.includes(t):!1}window.nav=(e,t={})=>{y.go(e,t)};function cn(){const e=i,t=H(e.location.systemId),n=Object.values(e.ship.cargo||{}).reduce((s,o)=>s+o,0),a=e.notifications[e.notifications.length-1];return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${t?.name??e.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${e.time.day}</span>
            <span>Turn ${R(e.time.turn)}</span>
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
            ${ee(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}function T(){return zt()}function rt(){const e=T(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,C().globalIncomeMultiplier??1);return t*n}const dn=-100,un=100;function pn(e,t){const n=i.reputation[e]||0,a=mn(n+t);return i.reputation[e]=a,a}function lt(e){for(const[t,n]of Object.entries(e))pn(t,n)}function mn(e){return Math.max(dn,Math.min(un,e))}const re={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function hn(){return f?f.weapons:[]}function ct(){return i.inventory||(i.inventory={weapons:[]}),i.inventory}function ve(){return[...ct().weapons]}function be(){if(!f)return;const e=ve();if(!e.length)return;const t=i.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(r=>ye(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function ye(e,t){const n=i.ship,a=f?.weapons.find(o=>o.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function fn(e,t){return ye(e,t)?(i.ship.weapons[e]=t,fe(),!0):!1}function I(e){return!e||!f?null:f.weapons.find(t=>t.id===e)??null}function gn(e){const t=I(e);return!t||i.player.credits<t.price?!1:(ct().weapons.push(e),i.player.credits-=t.price,fe(),!0)}function dt(e,t,n={}){const a=e.tags||[];let s=e.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let o=e.damage;const r=t.shields>0?"shields":"hull",l=re[e.damageType]?.[r]??1,c=r==="shields"?e.shieldMod:e.armorMod;return o*=c*l,r==="shields"&&a.includes("shield_breaker")&&(o*=1.2),r==="hull"&&a.includes("armor_piercing")&&(o*=1.2),Math.random()<e.critChance&&(o*=e.critMultiplier),o*=n.damageMultiplier??1,Math.max(0,Math.round(o))}const vn={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},bn={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Le(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const Ne={shields:"Shield-breaker",hull:"Hull buster"};function Me(e){const t=e.damageType,n=re[t]??re.kinetic,a=Le(n.shields),s=Le(n.hull);let o="Balanced";a==="Strong"&&s==="Weak"?o=Ne.shields:s==="Strong"&&a==="Weak"?o=Ne.hull:a==="Strong"&&s==="Strong"&&(o="Devastating");const r=(e.tags||[]).map(l=>bn[l]).filter(Boolean);return{role:o,vsShields:a,vsHull:s,typeLabel:vn[t]??t,tagNotes:r}}let $e=[];function yn(e){$e=e}function Mn(e){return $e.find(t=>t.id===e)}function $n(){const e=new Set(i.contracts.filter(t=>t.status==="active").map(t=>t.id));return $e.filter(t=>!e.has(t.id))}function F(){return i.contracts.filter(e=>e.status==="active")}function wn(e){const t=e.requirements,n=[];if(t?.travel?.systemId&&n.push(`Travel to ${t.travel.systemId}`),t?.deliver?.commodityId){const a=t.deliver.quantity||0;n.push(`Deliver ${a} ${t.deliver.commodityId}${t.deliver.systemId?` at ${t.deliver.systemId}`:""}`)}return t?.combat?.enemyId&&n.push(`Defeat ${t.combat.enemyId}`),n.join(" • ")||"No special requirements."}function Sn(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function we(e){const t=Mn(e);if(!t)return{success:!1,reason:"Unknown mission"};if(i.contracts.some(a=>a.id===e&&a.status==="active"))return{success:!1,reason:"Mission already active"};const n={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,reward:t.reward,requirements:t.requirements,acceptedTurn:i.time.turn,progress:{}};return i.contracts.push(n),{success:!0}}function kn(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,M.contractPayoutMultiplier??1)),s=rt(),o=Math.max(0,T().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*o));i.player.credits+=r,U(r),Xt(r),i.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){lt(n.rep);const a=Object.entries(n.rep).map(([s,o])=>`${s} ${o>=0?"+":""}${o}`).join(", ");a&&i.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=i.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),i.inventory=a;const s=I(n.weapon)?.name??n.weapon;i.notifications.push(`Rewarded weapon: ${s}.`)}}function xn(){F().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,M.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));i.time.turn-e.acceptedTurn>=a&&Cn(e.id)}})}function Cn(e){const t=i.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",Se(`Mission failed: ${t.name}`))}function Tn(e){F().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,V(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),V(t)}})}function En(e,t,n){F().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const o=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=o+t,V(a)})}function _n(e){F().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,V(t))})}function Dn(e,t){Tn(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const o of F()){const r=o.status,l=o.requirements?.deliver;if(!l||!l.commodityId||(l.systemId??t)!==t||(a+=1,!In(n,l)))continue;l.retain||Rn(n,l),o.progress=o.progress||{};const p=o.progress.deliveredQuantity||0;o.progress.deliveredQuantity=p+(l.quantity||1),V(o),r!=="completed"&&o.status==="completed"&&s.push(o.name)}if(s.length){const o=`Contracts completed: ${s.join(", ")}`;e.notifications.push(o)}return{checked:a,completed:s}}function In(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function Rn(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function V(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},o=e.requirements?.multiTravel,r=t?!!s.travelCompleted:!0,l=n?s.deliveredQuantity>=(n.quantity||0):!0,c=a?!!s.combatCompleted:!0,p=s.multiTravelVisited??[],d=o?o.every(u=>p.includes(u)):!0;r&&l&&c&&d&&(e.status="completed",kn(e),Zt(),Se(`Mission completed: ${e.name}`))}function Se(e){i.notifications.push(e)}function An(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",Se(`Mission failed (expired): ${n.name}`))}const ut="__global__",Bn={buyMultiplier:1,sellMultiplier:.85},Pn={basic:.9,standard:1,strategic:1.2,luxury:1.35};function te(){return i.ship.cargo||(i.ship.cargo={}),i.ship.cargo}function Fn(){const e=te();return Object.values(e).reduce((t,n)=>t+n,0)}function pt(){return f?.commodities??[]}function B(e){return pt().find(n=>n.id===e)??null}function A(){return i.marketState?(i.marketState.temporaryModifiers=i.marketState.temporaryModifiers||{},i.marketState.activeEvents=i.marketState.activeEvents||[],i.marketState.localAdjustments=i.marketState.localAdjustments||{},i.marketState.priceIntel=i.marketState.priceIntel||{},i.marketState.initialDriftSeeded=i.marketState.initialDriftSeeded??!1):i.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},i.marketState}function jn(e){i.intel||(i.intel={systems:[]});const t=i.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return i.intel.systems.push(n),n})();t.lastPriceSeenDay=i.time.day}function Ln(e){const t=A();let n=1;const a=t.temporaryModifiers[ut];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function Nn(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function Hn(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),o=n.exports?.includes(t.id);return s&&(a*=1.2),o&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function ke(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(M.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function On(e,t){const n=Math.max(1,t.basePrice),a=Pn[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,o=Hn(e,t),l=1+ke(t)*.08,c=Ln(t.id),p=zn(e.id,t.id),d=ft(e.id,t.id),u=n*a*s*o*l*c*p*d;return Math.max(1,Math.round(u))}function He(e,t){return D(e,t).base}function D(e,t){const n=H(e),a=B(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=On(n,a),o=a.baseSpread??Bn,r=ke(a),l=T(),c=Math.max(.1,Math.min(3,M.tradeProfitMultiplier??1)),p=rt(),d=Math.max(.5,l.buyBonus??1),u=Math.max(0,l.sellBonus??1),m=Math.max(.5,l.marketTax??1),h=Math.max(1,Math.round(s*(o.buyMultiplier??1)*(1+r*.05)/c*d)),g=Math.max(1,Math.round(s*(o.sellMultiplier??.85)*Math.max(.6,1-r*.05)*c*p*u*m)),v=Math.max(h,g,Math.round(s*(1+r*.1))),S=Math.max(1,Math.min(h,g,Math.round(s*Math.max(.65,1-r*.2)))),b=Nn(s,a.basePrice);return jn(e),{base:s,buy:h,sell:g,high:v,low:S,trend:b}}function le(e,t,n=2){const a=A(),s=e&&e.length?e:ut;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function mt(e=1){if(typeof e=="number"){Wn(e);return}qn(e??i)}function Wn(e){if(e<=0)return;const t=A(),n=Object.keys(t.temporaryModifiers);for(const s of n){const o=t.temporaryModifiers[s];o.remainingTurns-=e,o.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=i.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),vt(t,.2*e)}function qn(e){const t=A(),n=f?.systems??[],a=f?.commodities??[],s=e.time.day;Vn(t,n,a);for(const o of n)for(const r of a){const l=ft(o.id,r.id),c=ke(r),p=M.marketDailyTrendStrength??1,d=(1-l)*.1*p,u=(Math.random()-.5)*.1*(.5+c)*p,m=gt(l+d+u);t.localAdjustments[o.id]||(t.localAdjustments[o.id]={}),t.localAdjustments[o.id][r.id]=m}t.activeEvents=t.activeEvents.filter(o=>!(o.expiresAtDay!==void 0&&s>=o.expiresAtDay||o.expiresAtTurn&&o.expiresAtTurn<=e.time.turn)),vt(t,.1)}function Vn(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const o=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=o}}e.initialDriftSeeded=!0}}function K(e){return te()[e]??0}function zn(e,t){return A().activeEvents.filter(a=>(a.expiresAtDay===void 0||i.time.day<a.expiresAtDay)&&a.expiresAtTurn>i.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function Un(e){A().activeEvents.push(e)}function Gn(e){return A().activeEvents.filter(n=>n.expiresAtTurn>i.time.turn&&(n.expiresAtDay===void 0||i.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function Yn(e){if(Math.random()>.08||!f?.commodities?.length)return;const n=f.commodities[Math.floor(Math.random()*f.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,o={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:i.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};Un(o),i.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function ht(e,t,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,l=Math.min(.15,.03*r),c=A();c.localAdjustments[e]||(c.localAdjustments[e]={});const p=c.localAdjustments[e][t]??1,d=s==="buy"?1+l:1-l,u=gt(p*d);c.localAdjustments[e][t]=u}function ft(e,t){return A().localAdjustments[e]?.[t]??1}function gt(e){return Math.min(2,Math.max(.5,e))}function vt(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,o]of Object.entries(a)){const r=o-1,l=o-r*t;Math.abs(l-1)<.01?delete a[s]:a[s]=l}Object.keys(a).length||delete e.localAdjustments[n]}}function Jn(){const t=H(i.location.systemId)?.neighbors.map(s=>H(s)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=100;if(i.player.credits<n)return{success:!1,message:"Not enough credits for intel."};i.player.credits-=n;const a=A();return t.forEach(s=>{const o={};(f?.commodities||[]).forEach(l=>{const c=D(s.id,l.id);o[l.id]={buy:c.buy,sell:c.sell}});const r={turn:i.time.turn,prices:o};a.priceIntel[s.id]=r}),{success:!0,message:"Purchased neighbor intel."}}function bt(){return A().priceIntel}function yt(e,t,n){if(n<=0)return!1;const a=D(e,t).buy;if(a<=0)return!1;const s=a*n;if(i.player.credits<s)return!1;const o=i.ship.cargoCapacity;return o<=0?!1:Fn()+n<=o}function Mt(e,t,n){return n<=0?!1:K(t)>=n}function $t(e,t,n){if(!yt(e,t,n))return!1;const a=D(e,t).buy,s=a*n;i.player.credits-=s;const o=te();return o[t]=(o[t]||0)+n,ht(e,t,n,a,"buy"),!0}function xe(e,t,n){if(!Mt(e,t,n))return!1;const a=D(e,t).sell,s=a*n,o=te();return o[t]=Math.max(0,(o[t]||0)-n),i.player.credits+=s,U(s),Qt(t,n,s),ht(e,t,n,a,"sell"),En(t,n,e),!0}function wt(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,o])=>{if(!o)return a;const r=D(t,s).sell;return a+r*o},0)}const Oe={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function St(e,t){if(!i||i.gameOver.active)return;const n=Ut(),a=Gt(n),s={score:a,reason:e,message:t??Oe[e]??Oe.other,location:i.location.systemId,stats:n};i.combat=null,i.miningSession=null,i.gameOver={active:!0,reason:e,message:s.message,summary:s};const o={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};Kt(o),y.go("gameover")}function kt(e=!1){const t=et();tt(t),at(),y.go(e?"main":"ship_select")}const Ce="space-events-cache";let z=[];function Kn(e){const t=sa();z=aa(e,t),xt(z)}function Te(e){return z.find(t=>t.id===e)}function Qn(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=C(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,T().anomalyChance??1),s=Math.min(1,Math.max(0,(M.eventFrequency??50)/100*a));if(Math.random()>s)return;const o=z.map(c=>({ev:c,weight:ra(c,e)})).filter(c=>c.weight>0);if(!o.length)return;const r=o.reduce((c,p)=>c+p.weight,0);let l=Math.random()*r;for(const c of o)if(l-=c.weight,l<=0)return c.ev;return o[0].ev}function Xn(e){const t=e.outcomes;if(!t)return{};const n={},a=T(),s=Math.max(.1,Math.min(5,M.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),o=r=>{i.player.credits+=r,U(r),i.player.credits<0&&(i.player.credits=0)};if(t.giveCredits){const r=t.giveCredits.min??0,l=t.giveCredits.max??r,c=q(r,l),p=Math.round(c*s);o(p),i.notifications.push(`Received ${p} credits.`)}if(typeof t.creditsDelta=="number"){const r=Math.round(t.creditsDelta*s);o(r)}if(typeof t.fuelDelta=="number"){const r=i.ship.maxFuel,l=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;i.ship.fuel=Math.max(0,Math.min(r,i.ship.fuel+l))}if(typeof t.turnDelta=="number"){const r=ge(t.turnDelta);i.time.turn+=r,xn(),mt(r)}if(t.cargoGain&&We(ia(t.cargoGain,s,1),1),t.cargoLoss&&We(t.cargoLoss,-1),t.giveCommodity){const r=q(t.giveCommodity.min,t.giveCommodity.max),l=Math.max(0,Math.round(r*s));ce(t.giveCommodity.id,l),l>0&&i.notifications.push(`Collected ${l} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(i.inventory.weapons.push(t.giveWeapon),i.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const r=t.damageShip.min??0,l=t.damageShip.max??r,c=q(r,l);if(i.ship.hp=Math.max(0,i.ship.hp-c),i.notifications.push(`Ship took ${c} damage.`),i.ship.hp<=0)return St("ship_destroyed","Ship destroyed by event."),n}return t.applyStatus&&i.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&we(t.spawnMissionId).success&&i.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&i.notifications.push(`Event flag: ${t.flag}`),t.modifyReputation&&lt({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function Zn(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,M.eventRewardMultiplier??1))*Math.max(.1,T().eventRewardMultiplier??1);if(n.mining){const s=q(n.mining.quantity.min,n.mining.quantity.max),o=Math.max(0,Math.round(s*a));ce(n.mining.commodityId,o),i.notifications.push(`Mining yield: ${o} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=q(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),o=i.ship.maxFuel;i.ship.fuel=Math.max(0,Math.min(o,i.ship.fuel-s)),i.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];ce(s,1),i.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(i.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),le(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function ea(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(M.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(M.marketCrashChance??5)/100));if(e.location?.systemId){const s=f?.commodities?.[Math.floor(Math.random()*(f?.commodities.length||1))];if(s){const o=e.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const l=1.1+Math.random()*.35;le(s.id,l,r),e.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:Math.max(0,l),expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const l=Math.max(.5,.85-Math.random()*.25);le(s.id,l,r),e.marketState.activeEvents.push({systemId:o,commodityId:s.id,multiplier:l,expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${o}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}}}}function ta(){xt(z)}function na(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(Ce)}function aa(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function sa(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Ce);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function xt(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Ce,JSON.stringify(e))}function We(e,t){for(const[n,a]of Object.entries(e)){const s=i.ship.cargo[n]??0,o=Math.max(0,s+a*t);i.ship.cargo[n]=o}}function ia(e,t,n=1){const a={};for(const[s,o]of Object.entries(e)){if(o<=0){a[s]=o;continue}const r=Math.max(n,Math.round(o*t));a[s]=r}return a}function ce(e,t){const n=i.ship.cargo[e]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(t,s));i.ship.cargo[e]=n+o,o<t&&i.notifications.push(`Cargo full: stored ${o}/${t} ${e}.`)}function q(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),o=Math.floor(Math.max(s,a));return o<=s?s:Math.floor(Math.random()*(o-s+1))+s}function oa(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function qe(e,t){return e.has(t)}function ra(e,t){let n=e.weight??0;const a=oa(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const o=Math.max(.1,M.eventDangerMultiplier??1);n*=o}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),qe(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),qe(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=F().filter(o=>o.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let de=[];function la(e){de=e}function ca(e,t=[]){const n=de.find(o=>o.id===`${e}_loot`);if(n)return n;const a=new Set(t);return de.find(o=>(o.enemyTags||[]).some(r=>a.has(r)))??null}function ue(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function da(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function ua(e,t){const n=C(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,o=e.max??s,r=ue(s,o),l=Math.max(0,Math.round(r*a));i.player.credits+=l,t.creditsEarned+=l,U(l);break}case"commodity":{const s=ue(e.min??1,e.max??e.min??1),o=Math.max(0,Math.round(s*a)),r=pa(e.id||"unknown",o);r>0&&t.commodities.push({id:e.id||"unknown",qty:r});break}case"weapon":{e.id&&(i.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(i.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&we(e.id).success&&t.missionsGranted.push(e.id);break}}}function pa(e,t){const n=i.ship.cargo[e]??0,a=Object.values(i.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,i.ship.cargoCapacity-a),o=Math.max(0,Math.min(t,s));return i.ship.cargo[e]=n+o,o}function ma(e,t,n={},a=[]){const s=C(),o=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const l=ca(e,a);if(!l)return null;const c=n.quickKill?1.5:1,p=n.lowDamageTaken?1.25:1,d={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},u=(h,g)=>{if(!h?.length||Math.random()>g)return;const v=da(h);v&&ua(v,d)};u(l.common,r),u(Ve(l.uncommon,p),.35*r);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(u(Ve(l.rare,c),m*r),l.guaranteed?.credits){const{min:h,max:g}=l.guaranteed.credits,v=ue(h,g),S=Math.max(0,Math.round(v*o));i.player.credits+=S,d.creditsEarned+=S,U(S)}return d}function Ve(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}const ze={damageMultiplier:1.25,accuracyMultiplier:.8},ha=.6,fa="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",ga="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",Y={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},va=Object.keys(Y).map(e=>({type:e,shieldMultiplier:Y[e].shield,hullMultiplier:Y[e].hull,description:Y[e].description}));function ba(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,o=ya(t.weapons),r=Ma(t.modules),l=e.player?.credits??0,c=Math.log10(l+1)*5,p=n+a+o+r+s/2+c;return Math.max(1,Math.round(p))}function Ct(e){const t=e/40;return t<0?0:t>1?1:t}function ya(e){return e.reduce((t,n)=>{if(!n)return t;const a=I(n);if(!a)return t;const s=a.damage??0,o=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+o*.2+r},0)}function Ma(e){return!e||!e.length?0:e.length*5}const $a=0,wa=100;function Tt(e){const t=Math.max($a,Math.min(wa,(i.player.wanted??0)+e));return i.player.wanted=t,t}function Sa(e){if(!f)throw new Error("Content has not been loaded.");const t=f.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function ka(e,t){return Math.floor(Math.random()*(t-e+1))+e}function $(e){const t=i.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}function xa(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function O(e){const t=Sa(e),a=i.ship.weapons.map(()=>0),s=t.weaponIds.slice(),o=s.map(()=>0),r=C(),l=r.enemyHpMultiplier??1,c=Math.max(1,Math.round(r.enemyCountMin??1)),p=Math.max(c,Math.round(r.enemyCountMax??c)),d=Math.floor(Math.random()*(p-c+1))+c,u=Math.max(1,d);i.combat={enemyId:t.id,enemyName:t.name,enemyHp:Math.max(1,Math.round(t.hull*l*u)),enemyMaxHp:Math.max(1,Math.round(t.hull*l*u)),enemyShields:Math.max(0,Math.round(t.shields*l*u)),enemyMaxShields:Math.max(0,Math.round(t.shields*l*u)),enemyWeapons:s,enemyCooldowns:o,enemyTags:t.tags||[],enemyCount:u,playerCooldowns:a,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:t.canEscape,totalRounds:1,startingHp:i.ship.hp,round:1,log:[`${t.name} engages you in combat!`],adviceToken:Math.random()},u>1&&i.combat.log.push(`Multiple bogies detected (${u} ships).`),y.go("combat")}function Ca(e){const t=Ta(e);O(t)}function Ta(e){if(!f?.enemies?.length)return"pirate_cutter";const t=ba(i),n=Ct(i.time.day),a=C(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,i.time.day-1),o=Math.max(0,a.difficultyScalePerShipPower??1),r=t*o*s;let l=r*(.6+.2*n),c=r*(.9+.4*n);e&&ee(e,"core")&&(l=t*.4,c=t*.8);const p=f.enemies.map(h=>({id:h.id,power:xa(h)})),d=p.filter(h=>h.power>=l&&h.power<=c);if(d.length)return d[Math.floor(Math.random()*d.length)].id;let u=p[0],m=Math.abs(p[0].power-t);for(const h of p){const g=Math.abs(h.power-t);g<m&&(u=h,m=g)}return u.id}function ne(e,t,n="normal"){const a=i.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){$("You must choose a weapon to fire.");return}Et(t,n);break;case"fire_all":Ea(n);break;case"brace":_a();break;case"flee":if(Da())return;break}if(i.combat){if(a.enemyHp<=0){Ba();return}if(Ia(),!!i.combat){if(i.ship.hp<=0){Pa();return}Aa(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Et(e,t){const n=i.combat;if(!n)return;const a=i.ship;if(e<0||e>=a.weapons.length){$("Invalid weapon slot.");return}const s=a.weapons[e];if(!s){$("That hardpoint is empty.");return}const o=I(s);if(!o){$("Missing weapon data.");return}const r=T(),l=n.round<=1,c={...o,critChance:Math.min(.95,(o.critChance??0)+(r.critBonus??0)+(l?r.critBonus??0:0))},p=n.playerCooldowns[e]??0;if(p>0){$(`${o.name} is still recharging (${p} turn${p===1?"":"s"}).`);return}const d={shields:n.enemyShields,hp:n.enemyHp},u=t==="called_shot"?ze.damageMultiplier:1,m=t==="called_shot"?ze.accuracyMultiplier:1,h=ja(n.playerStance),g=dt(c,d,{accuracyMultiplier:m,damageMultiplier:u*h*(r.playerDamageBonus??1)});if(g<=0){const w=t==="called_shot"?"called shot goes wide":"misses";$(`You fire ${o.name}, but it ${w}.`),n.playerCooldowns[e]=o.cooldown;return}en(g);let v=g;if(n.enemyShields>0){const w=Math.min(n.enemyShields,v);n.enemyShields-=w,v-=w}v>0&&(n.enemyHp=Math.max(0,n.enemyHp-v));const S=d.shields>0?"shields":"hull",b=t==="called_shot"?"called shot":"normal shot";$(`You strike the ${n.enemyName}'s ${S} with ${o.name} (${b}) for ${g} damage.`),g>0&&o.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),$(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[e]=o.cooldown}function Ea(e){const t=i.combat;if(!t)return;const a=i.ship.weapons.map((s,o)=>({id:s,idx:o})).filter(({id:s,idx:o})=>!!s&&(t.playerCooldowns[o]??0)<=0).map(s=>s.idx);if(!a.length){$("No weapons are ready to fire.");return}for(const s of a){if(!i.combat||i.combat.enemyHp<=0)break;Et(s,e)}}function _a(){const e=i.combat;e&&(e.playerBracing=!0,$("You brace for impact, diverting power to shields and hull integrity."))}function Da(){const e=i.combat;if(!e)return!1;if(!e.canEscape)return $("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4,n=e.playerStance==="assault"?-.1:e.playerStance==="evasive"?.15:0,a=(i.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),o=Q((a-40)*.01,-.15,.15),r=C(),l=T(),c=(r.fleeSuccessBonus??0)/100+(l.fleeBonus??0),p=Q(t+n+o+c,.05,.95);return Math.random()<=p?($(`You punch the thrusters and break free! (Flee chance ${(p*100).toFixed(0)}%)`),i.combat=null,y.go("main"),!0):($(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(p*100).toFixed(0)}%)`),!1)}function Ia(){const e=i.combat;if(!e)return;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,$("Enemy weapons are jammed this round!");return}const t=[];if(e.enemyWeapons.forEach((m,h)=>{const g=e.enemyCooldowns[h]??0;m&&g<=0&&t.push(h)}),t.length===0){$(`The ${e.enemyName} reloads while you advance.`);return}const n=t[ka(0,t.length-1)],a=e.enemyWeapons[n],s=I(a);if(!s){$(`The ${e.enemyName} fumbles its weapon.`);return}const o={shields:i.ship.shields,hp:i.ship.hp},r=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),l=C(),c=T(),p=e.round<=1;let d=dt(s,o,{accuracyMultiplier:Math.max(0,(1-r)*(l.enemyAccuracyMultiplier??1)*Math.max(0,1-(c.dodgeBonus??0))*(p?Math.max(0,1-(c.dodgeBonus??0)):1))});if(d=Math.max(0,Math.round(d*(l.enemyDamageMultiplier??1))),e.enemyCount&&e.enemyCount>1&&(d=Math.max(0,Math.round(d*e.enemyCount))),d<=0){$(`The ${e.enemyName} fires ${s.name}, but misses.`),e.enemyCooldowns[n]=s.cooldown;return}e.playerBracing&&(d=Math.round(d*ha)),d=Math.max(0,Math.round(d*La(e.playerStance))),d=Math.max(0,Math.round(d*(l.playerDamageTakenMultiplier??1)*Math.max(.1,c.damageTakenMultiplier??1)*(p?Math.max(.1,c.damageTakenMultiplier??1):1)));let u=d;if(e.playerStatus.shieldBoost>0){const m=Math.min(e.playerStatus.shieldBoost,u);e.playerStatus.shieldBoost-=m,u-=m}if(i.ship.shields>0){const m=Math.min(i.ship.shields,u);i.ship.shields-=m,u-=m}u>0&&(i.ship.hp=Math.max(0,i.ship.hp-u)),$(`The ${e.enemyName} hits you with ${s.name} for ${d} damage.`),tn(d),e.enemyCooldowns[n]=s.cooldown}function Ra(){const e=i.combat;if(!e)return null;const t=e.enemyCooldowns.length>0?e.enemyCooldowns.map(l=>l??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...t),a=[];if(n<=1){const l=Q(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:l})}if(e.enemyShields<=0){const c=e.playerCooldowns.filter(d=>d<=0).length/Math.max(1,i.ship.weapons.length),p=Q(.6+c*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:p})}i.ship.hp/i.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((e.adviceToken??Math.random())+e.round*.13)%1,o=Math.floor(s*a.length),r=a[o];return{...r,confidence:r.confidence}}function Aa(){const e=i.combat;e&&(e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0),e.enemyCooldowns=e.enemyCooldowns.map(t=>t>0?t-1:0),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)))}function Ba(){const e=i.combat;if(!e)return;$(`The ${e.enemyName} explodes under your punishing fire. Victory is yours.`);const t=Math.max(0,e.startingHp-i.ship.hp),n=e.totalRounds<=3,a=t<=5,s=ma(e.enemyId,e.enemyName,{quickKill:n,lowDamageTaken:a},e.enemyTags||[]);if(s){i.lastBattleResult=s;const o=[];s.creditsEarned&&o.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&o.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&o.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&o.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&o.push(`Missions: ${s.missionsGranted.join(", ")}`),$(`Loot recovered — ${o.join(" | ")||"nothing notable."}`),n&&$("Because you won quickly, salvage yields are richer."),a&&$("Minimal hull damage preserved more intact cargo.")}else $("No notable loot recovered.");if(nn(),an(),_n(e.enemyId),e.enemyTags?.some(o=>/pirate|raider/i.test(o))||e.enemyId.includes("pirate")||e.enemyId.includes("raider")){const o=C().repGainMultiplier??1;Tt(Math.round(3*o))}i.combat=null,y.go("main")}function Pa(){$("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),i.ship.hp=0,i.ship.shields=0,i.combat=null,i.notifications.push("Critical failure — hull integrity dropped to zero."),St("ship_destroyed","Ship destroyed in combat.")}function Fa(e){const t=i.combat;t&&(t.playerStance=e,$(`Stance changed to ${e.charAt(0).toUpperCase()+e.slice(1)}.`))}function ja(e){switch(e){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function La(e){switch(e){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function Q(e,t,n){return Math.max(t,Math.min(n,e))}function Na(e,t,n){return Math.max(t,Math.min(n,e))}function Ee(e){const{systemId:t,state:n,sessionFactor:a}=e,s=f?.systems.find(w=>w.id===t),o=s?.security??"medium",r=C(),l=T();let c;switch(o){case"high":c=.02;break;case"low":c=.12;break;default:c=.06;break}s?.tags.includes("mining_belt")&&(c+=.02),s?.marketProfile?.blackMarket&&(c+=.03);const p=wt(n,t),d=Math.min(.15,p/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),u=Ha(n,t),m=a*.03,h=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),g=Math.max(0,Math.min(1,(M.pirateEncounterRate??0)/100)),v=Math.max(0,(r.encounterChancePerJump??100)/100),S=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,l.pirateDetectionMultiplier??1);let b=(c+d+m+u+h+g)*S*v;return Oa(b,n,t)}function Ha(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,o=0;for(const[c,p]of a){if(!p)continue;const d=D(t,c),u=B(c)?.basePrice??d.sell;if(u<=0)continue;const m=(d.sell-u)/u;s+=m*p,o+=p}if(o<=0)return 0;const r=s/o;return Na(r*.2,0,.15)}function Oa(e,t,n){const a=Ct(t.time.day),s=.4,r=s+(.75-s)*a;let l=e;return ee(n,"core")?(l>.25&&(l=.25),l<.01&&(l=.01),l):(l>r&&(l=r),l<.01&&(l=.01),l)}function Wa(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function qa(e,t){Va(e,t).lastRiskSeenDay=e.time.day}function Va(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}const za=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],Ua=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]}],Ga={belts:za,tables:Ua},Ya="pirate_cutter",pe=Ga,_t={careful:{yieldMultiplier:.8,rareMod:.5,lossKey:"carefulLoss"},standard:{yieldMultiplier:1,rareMod:1,lossKey:"standardLoss"},overcharge:{yieldMultiplier:1.3,rareMod:1.5,lossKey:"overchargeLoss"}};function Ue(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((l,c)=>l+c,0),o=Math.max(0,e.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,o));return r>0&&(a[t]=(a[t]??0)+r,e.ship.cargo=a),e.notifications||(e.notifications=[]),r<n&&e.notifications.push(`Cargo constrained: stored ${r}/${n} ${t}.`),r}function X(e,t){const n=Math.ceil(e),a=Math.floor(t);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Dt(e,t){const n=t?pe.belts.find(s=>s.id===t):null;if(n)return n;const a=pe.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function Ge(e){return e?pe.tables.find(t=>t.id===e)??null:null}function Ye(e){if(!e||!e.entries.length)return null;const t=e.entries.reduce((r,l)=>r+(l.weight||0),0);if(t<=0)return null;let n=Math.random()*t,a=null;for(const r of e.entries)if(n-=r.weight||0,n<=0){a=r;break}const s=a??e.entries[e.entries.length-1],o=X(s.min,s.max);return{id:s.id,amount:o}}function Ja(e,t,n){const a=t.stability[_t[n].lossKey],s=X(a.min,a.max);e.stability=Math.max(0,e.stability-s),e.lastMessage=`Stability dropped by ${s}%.`}function It(e,t,n,a){const s=Dt(t,n),o=Rt(e,s.id);if(o.depletedUntilDay!==void 0&&e.time.day<o.depletedUntilDay){e.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`);return}const r=Ee({systemId:t,state:e,sessionFactor:0});e.miningSession={active:!0,systemId:t,beltId:s.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:r,stability:s.stability.start,maxStability:s.stability.start,beltName:s.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0}}function Ka(e,t="standard"){const n=e.miningSession;if(!n||!n.active)return null;const a=Dt(n.systemId,n.beltId),s=Ge(a.commonTableId),o=Ge(a.rareTableId),r=_t[t],l=Ye(s),c=l?.id??n.resourceId??"aurite_ore",p=l?.amount??X(1,3),d=T(),u=(M.miningYieldMultiplier??1)*(d.miningYield??1),m=Math.max(1,Math.round(p*r.yieldMultiplier*u)),h=Ue(e,c,m),v=Math.max(1,He(n.systemId,c))*h;n.minesTaken+=1,n.totalValueMined+=v,Ja(n,a,t);const b=(1-n.stability/Math.max(1,n.maxStability))*.5,w=a.baseRareChance,k=Math.min(1,Math.max(0,(M.rareMineralChance??0)/100))+Math.max(0,(d.rareFindChance??0)-1),j=Math.min(1,w*r.rareMod+b+k);let _=null,ie=0;if(o&&Math.random()<=j){const P=Ye(o);if(P){const G=Ue(e,P.id,P.amount);_={id:P.id,amount:G},ie=Math.max(1,He(n.systemId,P.id))*G,n.totalValueMined+=ie}}const oe=Ee({systemId:n.systemId,state:e,sessionFactor:n.minesTaken});n.currentPirateChance=oe;const Pe=Math.random()<=oe;Pe&&(n.active=!1,n.lastMessage="Pirates detected! Breaking off the dig.",O(Ya));const Fe=n.stability<=0;if(Fe){const P=X(2,6);e.ship.hp=Math.max(0,e.ship.hp-P),n.active=!1,n.lastMessage=`Vein collapse! Hull took ${P} damage.`;const G=Rt(e,a.id);G.depletedUntilDay=e.time.day+2}else n.lastMessage=`Mined ${h} ${c}${_?`; rare find: ${_.amount} ${_.id}`:""}.`;e.notifications||(e.notifications=[]),e.notifications.push(`Mining haul: ${h} ${c} (~${Math.round(v)} cr).`),_&&e.notifications.push(`Rare find: ${_.amount} ${_.id}.`),n.lastYield={commodityId:c,amount:h,approxValue:Math.round(v+ie),rareFind:_};const Lt=Math.max(1,Math.round((M.miningDuration??5)*Math.max(.1,d.miningSpeed??1)));return e.time.turn+=ge(Lt),sn(h+(_?.amount||0),!!_),{minedCommodityId:c,minedAmount:h,pirateEncountered:Pe,pirateChance:oe,rareFound:_,stability:n.stability,collapsed:Fe}}function Qa(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Rt(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function Xa(e){e.miningSession=null}function Za(e){e.time.day+=1,rn(e.time.day),mt(e),ea(e),An(e),Wa(e),Qa(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{is(e)};function ae(e){return f?f.systems.find(t=>t.id===e)??null:null}let _e=0,Je=1;function es(e){e!==Je&&(Je=e,_e=0)}function De(e){return e<=0?!1:_e<e}function Ie(){_e+=1}function N(e){C().showEncounterDebug&&i.notifications.push(`Encounter debug: ${e}`)}function se(){return ae(i.location.systemId)}function ts(){const e=se();return e?e.neighbors.map(t=>ae(t)).filter(t=>t!==null):[]}function At(e,t){const n=T(),a=t.tags.includes("trade_lane")||t.tags.includes("checkpoint")||e.tags.includes("trade_lane")||e.tags.includes("checkpoint"),s=t.tags.includes("frontier")||t.tags.includes("mining_belt")||t.tags.includes("anomaly")||e.tags.includes("frontier")||e.tags.includes("mining_belt");let o=a?1:2;(t.tags.includes("mining_belt")||t.tags.includes("frontier"))&&(o+=1),t.tags.includes("anomaly")&&(o+=1),o=Math.min(3,Math.max(1,o));let r;switch(t.security){case"high":r=.25;break;case"medium":r=.4;break;default:r=.6;break}a&&(r*=.7),s&&(r=Math.min(1,r+.15)),t.tags.includes("restricted")&&(r-=.05),r=Math.min(.95,Math.max(.1,r));const l=r;return r=Math.max(0,r-Math.max(0,n.hazardDetectionBonus??0)),{travelTime:o,fuelCost:Math.max(1,Math.round(o*Math.max(.1,n.fuelCostMultiplier??1))),hazardChance:r,hazardMitigation:Math.max(0,l-r),routeType:a?"trade_lane":s?"wild_jump":"standard"}}function me(e,t,n){return Math.max(t,Math.min(n,e))}function Bt(e){const t=i.ship.cargo||{};let n=0,a=0,s=0;for(const[r,l]of Object.entries(t)){if(!l)continue;const c=B(r);if(!c||c.legalStatus!=="illegal"&&c.legalStatus!=="restricted")continue;const p=D(e.id,r);s+=p.sell*l,c.legalStatus==="illegal"?n+=l:a+=l}const o=n+a;return o<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:o,estimatedValue:s}}function ns(e,t,n,a=T()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.12),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const o=1+Math.min(1.5,e.illegalUnits*.1+e.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),l=Math.max(.5,a.illegalTolerance??1);return me(s*o*r/l,0,.95)}function as(e,t){const n=Bt(e);if(!n)return!1;const a=T(),s=ns(n,e,t.routeType,a);if(Math.random()>s)return!1;const o=i.ship.cargo||{};let r=0;for(const[u,m]of Object.entries(o)){if(!m)continue;const h=B(u);h&&(h.legalStatus!=="illegal"&&h.legalStatus!=="restricted"||(r+=m,o[u]=0))}i.ship.cargo=o;const l=Math.max(25,Math.round(n.estimatedValue*.35)),c=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,p=l+c;i.player.credits=Math.max(0,i.player.credits-p);const d=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25));return Tt(d),i.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${p} credits, wanted +${d}.`),!0}function ss(e,t,n,a){const s=me((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),o=me(t,0,.95),r=Math.max(0,Math.round((s-o)*100));r>0&&i.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(o*100).toFixed(0)}%).`)}function Ke(e){const t=se();if(!t)return null;const n=ae(e);return n?At(t,n):null}function is(e){const t=se();if(!f||!t)return;if(!t.neighbors.includes(e)){console.warn(`System ${e} is not a neighbor of ${t.id}`);return}const n=ae(e);if(!n)return;const a=At(t,n),s=Math.max(0,M.fuelCostMultiplier??1),o=Math.max(0,Math.round(a.fuelCost*s)),r=Math.max(0,Math.min(3,(M.travelRiskScaling??100)/100)),l=C(),c=Math.max(0,l.globalDangerMultiplier??1),p=Math.min(.95,Math.max(0,a.hazardChance*r*c)),d={...a,fuelCost:o,hazardChance:p};if(i.ship.fuel<d.fuelCost){console.warn("Not enough fuel to travel.");return}i.ship.fuel-=d.fuelCost,i.location.systemId=n.id,i.location.docked=!0;const u=ge(a.travelTime);i.time.turn+=u,Yn(n.id),Za(i),es(i.time.day),qa(i,n.id),on();const m=Dn(i,n.id);m.completed.length&&console.log(`Arrived at ${n.id}: checked ${m.checked} contracts, completed ${m.completed.join(", ")}.`);const h=Number.isInteger(u)?u.toFixed(0):u.toFixed(2),g=Math.abs(u-1)<.01?"":"s",v=`Arrived at ${n.name} after a ${d.routeType.replace("_"," ")} (${h} turn${g}).`;ss(a,d.hazardChance,r,c),as(n,d)&&N("Contraband inspection triggered on arrival."),!rs(n)&&(ls(n)||os(t,n,d,v)||y.go("main",{message:v}))}function os(e,t,n,a){const s=C(),o=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*o),routeType:n.routeType},l=us(t)??Qn(r);return l?(N(`Travel event triggered: ${l.name||l.id||"unknown"}`),l.type==="mining"?(N(`Mining event surfaced: ${l.id}`),y.go("event",{eventId:l.id}),!0):!l.choices||l.choices.length===0?(N(`Auto-resolving event: ${l.name||l.id||"unknown"}`),cs(l,a)):(y.go("event",{eventId:l.id}),!0)):(y.go("main",{message:`${a} — Uneventful transit.`}),!0)}function rs(e){const t=C(),n=Math.max(0,t.maxEncountersPerDay??0);if(!De(n))return!1;const a=Ee({systemId:e.id,state:i,sessionFactor:1});if(Math.random()<=a){Ie();const s=`Pirates intercept you near ${e.name}!`;return i.notifications.push(s),N(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),Ca(e.id),!0}return!1}function ls(e){const t=C(),n=Math.max(0,t.maxEncountersPerDay??0);if(!De(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),o=e.security==="high"?1.15:e.security==="low"?.65:1,r=T(),l=Bt(e),c=l?1+Math.min(1.2,l.totalUnits*.02):1,p=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),d=Math.min(1,a*s*o*c*p);if(Math.random()<=d){Ie();const u=`Patrol intercepts you near ${e.name}!`;return i.notifications.push(u),N(`Patrol encounter triggered near ${e.name} (chance ${d.toFixed(3)})`),O("navy_interceptor"),!0}return!1}function cs(e,t){const n=Zn(e);if(n.triggerCombat?.enemyId){const a=C(),s=Math.max(0,a.maxEncountersPerDay??0);if(!De(s))return y.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;Ie();const o=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return N(o),O(n.triggerCombat.enemyId),!0}return y.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const ds={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function us(e){const t=ps(e);return t?Te(t)??null:null}function ps(e){const t=[],n=new Set(e.tags||[]),a=s=>{t.includes(s)||t.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(ds[e.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),t.length?t[Math.floor(Math.random()*t.length)]:null}function ms(){const e=se(),t=ts(),n=Object.values(i.ship.cargo||{}).reduce((r,l)=>r+l,0),a=t.map(r=>Ke(r.id)?.hazardChance??0).reduce((r,l)=>Math.max(r,l),0),s=Math.round((a||0)*100);if(!e)return`
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
    `;const o=t.length===0?'<div class="panel-card"><p class="label">Connections</p><p class="value-inline">No nearby systems detected.</p></div>':t.map(r=>{const l=Ke(r.id),c=hs(r.security),p=fs(r),d=l?gs(l.hazardChance):"Unknown",u=l?`${l.fuelCost} fuel`:"Fuel: ?",m=l?`${l.travelTime} turn${l.travelTime===1?"":"s"}`:"Time: ?";return`
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
          <span class="app-location">${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${R(i.time.turn)}</span>
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
          <p class="muted">${e.description}</p>
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
  `}function hs(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function fs(e){const t=[];return e.tags.includes("frontier")&&t.push("▲ Frontier"),e.tags.includes("mining_belt")&&t.push("⛏ Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("◆ Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("✝ Unity"),t}function gs(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}const vs={high:"^",low:"v",stable:"-"};function bs(){const e=H(i.location.systemId);if(!e)return`
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
    `;const t=pt();if(!t.length)return`
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
    `;const n=Object.values(i.ship.cargo||{}).reduce((d,u)=>d+u,0),a=Object.entries(i.ship.cargo||{}).filter(([,d])=>d>0).sort((d,u)=>u[1]-d[1]).slice(0,5),s=new Map;F().filter(d=>d.status==="active").forEach(d=>{const u=d.requirements?.deliver;if(!u?.commodityId)return;const m=s.get(u.commodityId)??{needed:0,deliverable:!1},h=K(u.commodityId)>=(u.quantity||0),g=!u.systemId||u.systemId===i.location.systemId;s.set(u.commodityId,{needed:m.needed+(u.quantity||0),deliverable:m.deliverable||g&&h})});const o=t.map(d=>{const u=D(e.id,d.id),m=Ss(d.tradeTags?.length?d.tradeTags:d.tags),h=K(d.id),g=ks(d,h),v=Pt(u.buy,n,d.id);return{commodity:d,quote:u,tags:m,cargoQty:h,metaLine:g,maxBuyable:v,profit:u.sell-u.buy}}),r=o.reduce((d,u)=>u.profit>d.value?{id:u.commodity.id,value:u.profit}:d,{id:o[0]?.commodity.id??"",value:Number.NEGATIVE_INFINITY}).id,l=o.map(({commodity:d,quote:u,tags:m,cargoQty:h,metaLine:g,maxBuyable:v})=>{const S=yt(e.id,d.id,1)?"":" disabled",b=Mt(e.id,d.id,1)?"":" disabled",w=s.get(d.id),k=[];d.id===r&&k.push("market-card--highlight"),w&&k.push(w.deliverable?"market-card--contract-ready":"market-card--contract-target");const j=k.length?` ${k.join(" ")}`:"",_=w?`<span class="contract-pill${w.deliverable?" ready":""}">${w.deliverable?"Deliver now":"Needed"}</span>`:"";return`
        <article class="market-card${j}">
          <div class="market-card__header">
            <strong>${d.name}</strong>
            <div>
              <span class="muted">${m||"Local goods"}</span>
              ${_}
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
            <button class="btn btn-primary"${S} onclick="buyCommodityAction('${d.id}')">Buy 1</button>
            <button class="btn btn-primary"${S||v<=1?" disabled":""} onclick="buyAllCommodityAction('${d.id}', ${u.buy})">Buy Max (${v})</button>
            <button class="btn btn-ghost"${b} onclick="sellCommodityAction('${d.id}')">Sell 1</button>
            <button class="btn btn-ghost"${b||h<=1?" disabled":""} onclick="sellAllCommodityAction('${d.id}')">Sell All (${h})</button>
          </div>
          ${d.id===r?'<span class="market-card__badge">Top Profit</span>':""}
        </article>
      `}).join(""),c=n>0,p=`
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
          <strong>${R(i.time.turn)}</strong>
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
          <span class="app-location">Market · ${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${R(i.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${p}
            ${Ms(e.id)}
            ${$s(e)}
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
  `}function ys(){const e=i.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${i.ship.cargoCapacity}`}function Ms(e){const t=Gn(e);return t.length?`
    <div class="panel-card market-events-card">
      <p class="label">Market Events</p>
      <div class="market-event__list">
        ${t.map(a=>`
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
    `}function $s(e){const t=bt();return`
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (100 cr). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel</button>
      </div>
      ${(e?.neighbors.map(s=>H(s)).filter(s=>!!s&&t[s.id])||[]).map(s=>{const o=ws(e?.id,s.id),r=i.time.turn-(t[s.id]?.turn??i.time.turn),l=o.over?`${o.over.id} overpriced (+${Math.round(o.over.delta*100)}%)`:"no strong overpay",c=o.under?`${o.under.id} underpriced (${Math.round(o.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${s.name} (age ${r}t): Sell -> ${l} | Buy -> ${c}</p>`}).join("")||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function ws(e,t){if(!e)return{over:null,under:null};const a=bt()[t];if(!a)return{over:null,under:null};let s=null,o=null;const r=Math.max(0,i.time.turn-a.turn),l=Math.max(.5,1-r*.05);for(const[c,p]of Object.entries(a.prices)){const d=D(e,c);if(d.sell>0&&p.buy>d.sell){const u=(p.buy-d.sell)/d.sell*l;(!s||u>s.delta)&&(s={id:c,delta:u})}if(d.buy>0&&p.sell<d.buy){const u=(d.buy-p.sell)/d.buy*l;(!o||u>o.delta)&&(o={id:c,delta:u})}}return{over:s,under:o}}function Pt(e,t,n){if(e<=0)return 0;const a=Math.floor(i.player.credits/e),s=Math.max(0,i.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function Ss(e){return e?.length?Array.from(new Set(e)).map(n=>Re(n.replace(/_/g," "))).join(" | "):""}function ks(e,t){const n=Re(e.tier||"standard"),a=xs(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,o=[`Held ${t}`,`Tier ${n}`,a];return s&&o.push(`Mass ${s}`),o.join(" | ")}function Re(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function xs(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??Re(e)}window.buyCommodityAction=e=>{const t=i.location.systemId,n=B(e),a=$t(t,e,1),s=D(t,e).buy,o=document.getElementById("market-message");o&&(o.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market")};window.sellCommodityAction=e=>{const t=i.location.systemId,n=B(e),a=xe(t,e,1),s=D(t,e).sell,o=document.getElementById("market-message");o&&(o.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market")};window.buyAllCommodityAction=(e,t)=>{const n=i.location.systemId,a=i.ship.cargo||{},s=Object.values(a).reduce((c,p)=>c+p,0),o=Pt(t,s);if(o<=0){nav("market");return}$t(n,e,o);const r=B(e),l=document.getElementById("market-message");l&&(l.textContent=`Bought ${o} ${r?.name||e} for ${t*o} cr.`),nav("market")};window.sellAllCommodityAction=e=>{const t=i.location.systemId,n=K(e);if(n<=0){nav("market");return}const a=D(t,e).sell;xe(t,e,n);const s=B(e),o=document.getElementById("market-message");o&&(o.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market")};window.sellAllCargoAction=()=>{const e=i.location.systemId,t=Object.entries(i.ship.cargo||{});let n=0;const a=[];for(const[o,r]of t){if(!r||!xe(e,o,r))continue;n+=r;const c=B(o);a.push(`${r} ${c?.name||o}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const o=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${o}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=Jn(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};function Cs(e={}){const t=typeof e.message=="string"?e.message:"",n=F(),a=$n(),s=Object.values(i.ship.cargo||{}).reduce((l,c)=>l+c,0),o=n.length>0?n.map(l=>`
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
          <span>Turn ${R(i.time.turn)}</span>
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
          ${t?`<p class="muted">${t}</p>`:""}
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
  `}function Ts(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=I(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}window.acceptContract=e=>{const t=we(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};const Es={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Ae(e){return f?f.ships.find(t=>t.id===e)??null:null}function _s(){return Ae(i.ship.templateId)}function Ds(){return f?f.ships.filter(e=>e.starter):[]}function Is(){return f?f.ships.filter(e=>!e.starter):[]}function Ft(e,t){const n=Ae(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],o={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,l)=>Es[`${r.size}:${r.type}`]??a[l]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};i.ship=o,fe(),be()}function Rs(e){Ft(e),i.player.hasChosenStarter=!0}function As(e){const t=Ae(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):i.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(i.player.credits-=t.cost,Ft(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function Bs(){const e=i.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=t+n;if(i.player.credits<a){console.warn("Not enough credits to fully repair.");return}i.player.credits-=a,e.hp=e.maxHp,e.shields=e.maxShields}function Ps(){const e=i.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(i.player.credits<a){console.warn("Not enough credits to fully refuel.");return}i.player.credits-=a,e.fuel=e.maxFuel}function Fs(){return f?f.components:[]}function js(){if(!f)return[];const e=i.ship.components;return f.components.filter(t=>e.includes(t.id))}function Ls(e){if(!f)return!1;const t=f.components.find(n=>n.id===e);return t?i.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):i.ship.components.includes(e)?(console.warn("Component already installed."),!1):(i.player.credits-=t.cost,i.ship.components.push(e),Ns(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function Ns(e){const t=i.ship;switch(e.effectType){case"hull":t.maxHp+=e.value,t.hp+=e.value;break;case"shields":t.maxShields+=e.value,t.shields+=e.value;break;case"fuel":t.maxFuel+=e.value,t.fuel+=e.value;break;case"cargo":t.cargoCapacity+=e.value;break}}window.repairShipAction=()=>{Bs(),nav("ship")};window.refuelShipAction=()=>{Ps(),nav("ship")};function Hs(){const e=i.ship,t=_s(),n=js(),a=i.combat?.playerCooldowns??[],s=Object.values(e.cargo||{}).reduce((l,c)=>l+c,0),o=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(l=>`<li>${l.name} (+${l.value} ${l.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${R(i.time.turn)}</span>
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
          ${o}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${r}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${e.hardpoints.map((l,c)=>{const p=I(e.weapons[c]),d=p?.name||"Empty",u=a[c]??0,m=p?Me(p):null,h=m?`
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
  `}function Os(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=Te(t);if(!n)return`
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
  `}function Ws(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",o=n.risk?`<span class="choice-risk">Risk: ${Vs(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${o}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function qs(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Vs(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=y.params,n=typeof t.eventId=="string"?t.eventId:"",a=Te(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const o=Xn(s);if(o.triggerCombat?.enemyId){O(o.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{It(i,i.location.systemId,e||void 0,t||void 0),y.go("mining")};window.fireWeapon=(e,t="normal")=>{ne("fire",e,t),i.combat&&nav("combat")};window.brace=()=>{ne("brace"),i.combat&&nav("combat")};window.flee=()=>{ne("flee"),i.combat&&nav("combat")};window.setStance=e=>{Fa(e),i.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{ne("fire_all",void 0,e),i.combat&&nav("combat")};function zs(){const e=i.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=i.ship,n=e.log.map(p=>`<div class="log-line">${p}</div>`).join(""),a=t.hardpoints.map((p,d)=>{const u=t.weapons[d],m=I(u),h=e.playerCooldowns[d]??0,g=!!m&&h===0;return`
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
      `).join(""),o=Ra(),r=o?`<p class="combat-advice ${o.suggestion}">
        ${o.text}
        <span class="advice-confidence">Intel confidence: ${(o.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',c=e.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${e.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${R(i.time.turn)} · Round ${e.round}</span>
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
  `}window.buyShipAction=e=>{As(e)};window.buyComponentAction=e=>{Ls(e)};window.buyWeaponAction=e=>{gn(e)};function Us(){if(!ee(i.location.systemId,"shipyard"))return`
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
    `;const e=Is(),t=Fs(),n=hn(),a=ve().map(c=>I(c)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
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
      `,o=t.length===0?'<p class="muted">No components in stock.</p>':`
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
            ${n.map(c=>{const p=Me(c),d=p.tagNotes.length?`Traits: ${p.tagNotes.join(", ")}`:"";return`
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
  `}const Gs={incomeMultiplier:e=>x(e,"income"),eventRewardMultiplier:e=>x(e,"event rewards"),hpBonus:e=>x(e,"hull"),cargoBonus:e=>Js(e,"cargo capacity"),sellBonus:e=>x(e,"sell price"),buyBonus:e=>x(e,"buy price"),marketTax:e=>x(e,"market tax"),miningYield:e=>x(e,"mining yield"),rareFindChance:e=>x(e,"rare find chance"),miningSpeed:e=>x(e,"mining duration"),dodgeBonus:e=>J(e,"dodge chance"),critBonus:e=>J(e,"crit chance"),damageTakenMultiplier:e=>x(e,"damage taken"),fleeBonus:e=>J(e,"flee chance"),pirateDetectionMultiplier:e=>x(e,"pirate detection"),scanDetectionMultiplier:e=>x(e,"scan detection"),illegalTolerance:e=>x(e,"illegal tolerance"),fuelCostMultiplier:e=>x(e,"fuel cost"),hazardDetectionBonus:e=>J(e,"hazard detection"),anomalyChance:e=>x(e,"anomaly chance"),shieldRegenBonus:e=>x(e,"shield regen")};function Ys(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>Gs[n]?.(a)??null).filter(n=>!!n):[]}function x(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function J(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Js(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}window.chooseStarter=e=>{Rs(e),be(),y.go("main")};function Ks(){const e=Ds();if(e.length===0)return`
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
    `;const t=e.map(n=>{const a=Ys(n),s=n.passive?.name?`
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
          <span>Turn ${R(i.time.turn)}</span>
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
  `}function Qs(){const e=i.ship;if(!e.hardpoints.length)return`
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
    `;const t=e.hardpoints.map((n,a)=>{const o=I(e.weapons[a])?.name||"Empty";return`
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
          <span>Turn ${R(i.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{fn(e,t)&&nav("weapon_slots")};function Xs(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=i.ship.hardpoints[t];if(!n)return`
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
    `;const r=ve().map(l=>I(l)).filter(l=>!!l).map(l=>{const c=ye(t,l.id),d=I(i.ship.weapons[t])?.id===l.id?"Equipped":"Equip",u=Me(l),m=u.tagNotes.length?`<br/>Traits: ${u.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${c?"":"muted"}">
          <p class="label">${l.size} / ${l.type}</p>
          <p class="value-inline"><strong>${l.name}</strong></p>
          <p class="muted">Damage ${l.damage} (${l.damageType}) · Acc ${Math.round(l.accuracy*100)}% · Crit ${Math.round(l.critChance*100)}% (×${l.critMultiplier}) · CD ${l.cooldown}</p>
          <p class="muted">Role: ${u.role} (${u.typeLabel}) · Vs Shields: ${u.vsShields} · Vs Hull: ${u.vsHull}${m}</p>
          <button class="btn btn-primary" ${c?"":"disabled"} onclick="equipWeaponAction(${t}, '${l.id}')">
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
          <span>Turn ${R(i.time.turn)}</span>
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
  `}window.leaveMining=()=>{Xa(i),y.go("main")};function Be(e){Ka(i,e)?.pirateEncountered||y.go("mining")}window.mineCareful=()=>Be("careful");window.mineStandard=()=>Be("standard");window.mineOvercharge=()=>Be("overcharge");function Zs(){const e=i.miningSession;if(!e)return`
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
    `;if(!e.active){const o=e.lastYield?`Last haul: ${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)${e.lastYield.rareFind?` + rare ${e.lastYield.rareFind.amount} ${e.lastYield.rareFind.id}`:""}`:"Session ended.";return`
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
            <p>${e.lastMessage||"The belt is no longer stable."}</p>
            <p>${o}</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Return</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `}const t=wt(i,e.systemId),n=Math.max(0,Math.round(e.stability/Math.max(1,e.maxStability)*100)),a=e.lastYield?`<p>Last haul: ${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)${e.lastYield.rareFind?` + rare ${e.lastYield.rareFind.amount} ${e.lastYield.rareFind.id}`:""}</p>`:"",s=e.lastMessage?`<p class="muted">${e.lastMessage}</p>`:"";return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Mining — ${e.beltName||e.beltId||e.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${i.time.day}</span>
          <span>Turn ${R(i.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Stability</span>
          <span class="stat-value">${n}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Pirate Risk</span>
          <span class="stat-value stat-risk">${(e.currentPirateChance*100).toFixed(0)}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Hold Value</span>
          <span class="stat-value">${Math.round(t)} cr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Mines</span>
          <span class="stat-value">${e.minesTaken}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Mining Ops</h1>
          <p class="muted">Total mined: ${Math.round(e.totalValueMined)} cr</p>
          ${a}
          ${s}
          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Stability</p>
              <p class="value-emphasis">${n}%</p>
            </div>
            <div class="panel-card">
              <p class="label">Pirate Risk</p>
              <p class="value-emphasis warning">${(e.currentPirateChance*100).toFixed(0)}%</p>
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
  `}window.startNewRun=()=>kt(!1);window.returnToMainMenu=()=>kt(!0);function ei(){const e=i.gameOver?.summary,t=Jt(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],o=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],l=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],c=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],p=u=>u.map(([m,h])=>`
      <tr>
        <td>${m}</td>
        <td>${h}</td>
      </tr>
    `).join(""),d=t.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${t.map((u,m)=>`
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
        <p>Final score • ${e?.reason.replace(/_/g," ")??"Unknown fate"}</p>
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
  `}const jt=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],ti=jt.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{});function he(e){const t=e.split(".");let n=M;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function ni(e,t){const n=e.split(".");let a=M;for(let s=0;s<n.length-1;s++){const o=n[s];a[o]=a[o]??{},a=a[o]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{O(e)};window.devMining=()=>{It(i,i.location.systemId),y.go("mining")};function ai(){return jt.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(he(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${he(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function Z(){const e=document.getElementById("app");if(!e)return;let t="";switch(y.current){case"main":t=cn();break;case"travel":t=ms();break;case"market":t=bs();break;case"contracts":t=Cs();break;case"ship":t=Hs();break;case"event":t=Os(y.params);break;case"combat":t=zs(y.params);break;case"weapon_slots":t=Qs();break;case"weapon_select":t=Xs(y.params);break;case"shipyard":t=Us();break;case"ship_select":t=Ks();break;case"mining":t=Zs();break;case"gameover":t=ei();break}const n=y.current!=="main"?`
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
            <button class="btn btn-ghost" id="devHardReset">Hard Reset Game</button>
          </div>
      </section>
    </div>
  `;e.innerHTML=`${n}${t}${a}`,si()}let W=!1,Qe=!1;function si(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),o=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),l=document.getElementById("devGodMode"),c=document.getElementById("navTravel"),p=document.getElementById("navMarket"),d=document.getElementById("navShip"),u=document.getElementById("devPersistEvents"),m=document.getElementById("devClearEvents"),h=document.getElementById("devHardReset"),g=t?.querySelectorAll("input[data-dev-path]"),v=()=>{t&&t.classList.toggle("hidden")},S=b=>{const w=ti[b],k=document.getElementById(`devValue-${b.replace(/\./g,"__")}`);w&&k&&(k.textContent=w.formatter(he(b)))};g?.forEach(b=>{const w=()=>{const k=b.dataset.devPath;if(!k)return;const j=Number(b.value);ni(k,j),Vt(),S(k)};b.addEventListener("input",w)}),e?.addEventListener("click",v),n?.addEventListener("click",()=>t?.classList.add("hidden")),c?.addEventListener("click",()=>window.nav?.("travel")),p?.addEventListener("click",()=>window.nav?.("market")),d?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),o?.addEventListener("click",()=>{i.player.credits+=1e3,t?.classList.add("hidden"),Z()}),r?.addEventListener("click",()=>{const b=i.ship.cargo||{};b.aurite_ore=(b.aurite_ore||0)+20,i.ship.cargo=b,t?.classList.add("hidden"),Z()}),l?.addEventListener("click",()=>{W=!W,i.godMode=W,W&&(i.ship.hp=i.ship.maxHp,i.ship.shields=i.ship.maxShields),alert(`God Mode: ${W?"On":"Off"}`)}),u?.addEventListener("click",()=>{ta(),alert("Events cached locally. Future loads will honor this list.")}),m?.addEventListener("click",()=>{na(),alert("Event cache cleared. Future loads use the bundled data.")}),h?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),Qe||(document.addEventListener("keydown",b=>{b.key==="`"&&v(),b.key==="Escape"&&y.current!=="main"&&window.nav?.("main")}),Qe=!0)}let f=null;async function ii(){const e="/space/".replace(/\/+$/,"/"),t=j=>`${e}content/${j}`,[n,a,s,o,r,l,c,p,d]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!o.ok)throw new Error(`Failed to load commodities.json: ${o.status}`);if(!l.ok)throw new Error(`Failed to load enemies.json: ${l.status}`);if(!c.ok)throw new Error(`Failed to load events.json: ${c.status}`);if(!p.ok)throw new Error(`Failed to load loot_tables.json: ${p.status}`);if(!d.ok)throw new Error(`Failed to load missions.json: ${d.status}`);const u=await n.json(),m=await a.json(),h=await s.json(),g=await o.json(),v=await r.json(),S=await l.json(),b=await c.json();Kn(b);const w=await p.json();la(w);const k=await d.json();return yn(k),{systems:u,ships:m,components:h,commodities:g,weapons:v,enemies:S,events:b,lootTables:w,missions:k}}async function oi(){f=await ii();const e=et();tt(e),at();const t=Wt();if(t){const a=i.ship.hardpoints.length,s=[];for(let o=0;o<a;o++)s.push(t.weapons[o]??null);i.ship.weapons=s,i.inventory.weapons=t.inventory}be();const n=y.go.bind(y);y.go=(a,s)=>{n(a,s),Z()},window.nav=(a,s={})=>{y.go(a,s)},y.current=i.player.hasChosenStarter?"main":"ship_select",Z()}function H(e){return f?f.systems.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{oi()});
