(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Un=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],Tt=Un,G=Tt.find(e=>e.starter)??Tt[0],Vn=G?.hardpoints.length??0,Xn={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Xt(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let o;const Jt="cosmo_weapon_loadout";function Jn(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Jt);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function at(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:o.ship.weapons,inventory:o.inventory?.weapons??[]};window.localStorage.setItem(Jt,JSON.stringify(e))}function Kt(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:G?.id??"none",name:G?.name??"Undefined Hull",hp:G?.hull??0,maxHp:G?.hull??0,shields:G?.shields??0,maxShields:G?.shields??0,fuel:G?.fuel??0,maxFuel:G?.fuel??0,cargoCapacity:G?.cargo??0,cargo:{},modules:[],weapons:G?.hardpoints.map(e=>Xn[`${e.size}:${e.type}`]??null)??Array(Vn).fill(null),weaponPower:12,evasion:5,maneuverRating:G?.maneuverRating??0,components:[],hardpoints:G?.hardpoints.map(e=>({...e}))??[],passive:G?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},intel:{systems:[]},runStats:Xt(),gameOver:{active:!1,reason:null},map:null}}function Zt(e){o=e}const Qt="space-dev-tune",q={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:1,miningPayoutMultiplier:1,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.4,enemyDamageMultiplier:.2,enemyAccuracyMultiplier:.6,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:70,nonPirateEventWeight:1,showEncounterDebug:0}};let I={...q};function Kn(e){return{...q.combat,...e}}function qe(e){return{...e,enemyHpMultiplier:Math.min(q.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??q.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(q.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??q.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(q.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??q.combat.enemyAccuracyMultiplier))}}function en(){if(typeof window>"u"||!window.localStorage){I={...q};return}const e=window.localStorage.getItem(Qt);if(!e){I={...q,combat:qe(q.combat)},Te();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=Kn({...t.combat,...n});I={...q,...t,combat:qe(a)},Te()}catch{I={...q,combat:qe(q.combat)},Te()}}function Te(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Qt,JSON.stringify(I))}function tn(e){const t=I.progressionSpeedMultiplier??1;return e*t}function W(){return I.combat??q.combat}function Zn(){return o.ship.passive?.effects??{}}const nn="cosmo_run_high_scores",an=5;function Qn(){return o?{...o.runStats,commodityVolumes:{...o.runStats.commodityVolumes}}:Xt()}function ea(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function sn(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(nn);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,an):[]}catch{return[]}}function ta(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(nn,JSON.stringify(e.slice(0,an)))}function na(){return sn()}function aa(e){const t=sn();t.push(e),t.sort((n,a)=>a.score-n.score),ta(t)}function $e(e){if(!o||e<=0)return;o.runStats.creditsEarnedTotal+=e;const t=o.player.credits;t>o.runStats.highestNetWorth&&(o.runStats.highestNetWorth=t)}function sa(e,t,n){if(!o)return;o.runStats.tradeProfitTotal+=Math.max(0,n);const a=o.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=o.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(o.runStats.mostTradedCommodityId=e)}function ia(e){!o||e<=0||(o.runStats.contractPayoutTotal+=e)}function oa(){o&&(o.runStats.contractsCompleted+=1)}function ra(e){!o||e<=0||(o.runStats.damageDealtTotal+=e)}function la(e){!o||e<=0||(o.runStats.damageTakenTotal+=e)}function ca(){o&&(o.runStats.fightsSurvived+=1)}function da(){o&&(o.runStats.shipsDestroyed+=1)}function ua(e,t){!o||e<=0||(o.runStats.miningRuns+=1,o.runStats.oreMinedTotal+=e,t&&(o.runStats.rareFinds+=1))}function pa(){o&&(o.runStats.jumpsMade+=1,o.runStats.systemsVisited+=1)}function ma(e){o&&(o.runStats.daysSurvived=Math.max(o.runStats.daysSurvived,e))}const $={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}};function ha(){return S?S.components:[]}function on(){if(!S)return[];const e=o.ship.components;return S.components.filter(t=>e.includes(t.id))}function fa(){if(!S)return{};const e={};for(const t of on())if(t.effects)for(const[n,a]of Object.entries(t.effects))typeof a=="number"&&(e[n]=(e[n]??1)*a);return e}function ga(e){if(!S)return!1;const t=S.components.find(n=>n.id===e);return t?o.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):o.ship.components.includes(e)?(console.warn("Component already installed."),!1):(o.player.credits-=t.cost,o.ship.components.push(e),ya(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function ya(e){const t=o.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function Y(){const e=Zn(),t=fa(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const s of n){const i=typeof e[s]=="number"?e[s]:1,r=typeof t[s]=="number"?t[s]:1;a[s]=i*r}return a}function rn(){const e=Y(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,W().globalIncomeMultiplier??1);return t*n}const ba=-100,va=100;function Ma(e,t){const n=o.reputation[e]||0,a=wa(n+t);return o.reputation[e]=a,a}function ln(e){for(const[t,n]of Object.entries(e))Ma(t,n)}function $a(e){return o.reputation[e]||0}function wa(e){return Math.max(ba,Math.min(va,e))}const Ue={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function Sa(){return S?S.weapons:[]}function cn(){return o.inventory||(o.inventory={weapons:[]}),o.inventory}function st(){return[...cn().weapons]}function it(){if(!S)return;const e=st();if(!e.length)return;const t=o.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(r=>ot(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function ot(e,t){const n=o.ship,a=S?.weapons.find(i=>i.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function xa(e,t){return ot(e,t)?(o.ship.weapons[e]=t,at(),!0):!1}function V(e){return!e||!S?null:S.weapons.find(t=>t.id===e)??null}function ka(e){const t=V(e);return!t||o.player.credits<t.price?!1:(cn().weapons.push(e),o.player.credits-=t.price,at(),!0)}function dn(e,t,n={}){const a=e.tags||[];let s=e.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let i=e.damage;const r=t.shields>0?"shields":"hull",l=Ue[e.damageType]?.[r]??1,c=r==="shields"?e.shieldMod:e.armorMod;return i*=c*l,r==="shields"&&a.includes("shield_breaker")&&(i*=1.2),r==="hull"&&a.includes("armor_piercing")&&(i*=1.2),Math.random()<e.critChance&&(i*=e.critMultiplier),i*=n.damageMultiplier??1,Math.max(0,Math.round(i))}const Ca={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},Ta={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Et(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const _t={shields:"Shield-breaker",hull:"Hull buster"};function rt(e){const t=e.damageType,n=Ue[t]??Ue.kinetic,a=Et(n.shields),s=Et(n.hull);let i="Balanced";a==="Strong"&&s==="Weak"?i=_t.shields:s==="Strong"&&a==="Weak"?i=_t.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const r=(e.tags||[]).map(l=>Ta[l]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:Ca[t]??t,tagNotes:r}}let un=null;function pn(e){un=e}function lt(){return un}function Ea(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function Ee(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function _a(e){const t=e.map(i=>({id:i.id,name:i.name,x:i.coords?.x??0,y:i.coords?.y??0,tags:i.tags??[]})),n=[],a=new Set;for(const i of e)for(const r of i.neighbors??[]){const l=Ee(i.id,r.id);a.has(l)||(a.add(l),n.push({from:i.id,to:r.id,type:Ea(r.laneType),distance:Math.max(1,Math.round(r.distance??1))}))}const s={nodes:t,lanes:n};return pn(s),s}function ct(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function Ra(e,t,n){const a=n==="local"?1:3,s=new Map([[t,0]]);let i=[t];for(let r=1;r<=a;r++){const l=[];for(const c of i)for(const d of ct(e,c))s.has(d)||(s.set(d,r),l.push(d));if(!l.length)break;i=l}return s}function dt(e,t,n){if(t===n)return[t];const a=[t],s=new Set([t]),i=new Map;for(;a.length;){const c=a.shift();for(const d of ct(e,c))if(!s.has(d)&&(s.add(d),i.set(d,c),a.push(d),d===n))break}if(!s.has(n))return[];const r=[];let l=n;for(;l;)r.push(l),l=i.get(l);return r.reverse()}function Ia(e,t,n){const a=dt(e,t,n);return a.length?Math.max(0,a.length-1):null}let ut=[];function Da(e){ut=e}function Ba(e){return ut.find(t=>t.id===e)}function Aa(){const e=new Set(o.contracts.filter(t=>t.status==="active").map(t=>t.id));return ut.filter(t=>!e.has(t.id))}function re(){return o.contracts.filter(e=>e.status==="active")}function Pa(e){const t=e.requirements,n=s=>s?`<strong>${Q(s)?.name||s}</strong>`:"",a=[];if(t?.travel?.systemId){const s=n(t.travel.systemId);a.push(`Travel to ${s}`)}if(t?.deliver?.commodityId){const s=t.deliver.quantity||0,i=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${s} ${t.deliver.commodityId}${i}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function Fa(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function pt(e){const t=Ba(e);if(!t)return{success:!1,reason:"Unknown mission"};if(o.contracts.some(s=>s.id===e&&s.status==="active"))return{success:!1,reason:"Mission already active"};const n=Ua(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:o.time.turn,progress:{}};return o.contracts.push(a),n&&Va(a.id,n),{success:!0}}function La(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,I.contractPayoutMultiplier??1)),s=rn(),i=Math.max(0,Y().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*i));o.player.credits+=r,$e(r),ia(r),o.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){ln(n.rep);const a=Object.entries(n.rep).map(([s,i])=>`${s} ${i>=0?"+":""}${i}`).join(", ");a&&o.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=o.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),o.inventory=a;const s=V(n.weapon)?.name??n.weapon;o.notifications.push(`Rewarded weapon: ${s}.`)}}function ja(){re().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,I.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));o.time.turn-e.acceptedTurn>=a&&Na(e.id)}})}function Na(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",Be(`Mission failed: ${t.name}`),mt(t.id))}function Ha(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",Be(`Mission abandoned: ${t.name}`),mt(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function Oa(e){re().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,be(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),be(t)}})}function Wa(e,t,n){re().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const i=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=i+t,be(a)})}function qa(e){re().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,be(t))})}function Ga(e,t){Oa(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const i of re()){const r=i.status,l=i.requirements?.deliver;if(!l||!l.commodityId||(l.systemId??t)!==t||(a+=1,!Ya(n,l)))continue;l.retain||za(n,l),i.progress=i.progress||{};const d=i.progress.deliveredQuantity||0;i.progress.deliveredQuantity=d+(l.quantity||1),be(i),r!=="completed"&&i.status==="completed"&&s.push(i.name)}if(s.length){const i=`Contracts completed: ${s.join(", ")}`;e.notifications.push(i)}return{checked:a,completed:s}}function Ya(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function za(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function be(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},i=e.requirements?.multiTravel,r=t?!!s.travelCompleted:!0,l=n?s.deliveredQuantity>=(n.quantity||0):!0,c=a?!!s.combatCompleted:!0,d=s.multiTravelVisited??[],u=i?i.every(p=>d.includes(p)):!0;r&&l&&c&&u&&(e.status="completed",La(e),oa(),Be(`Mission completed: ${e.name}`),mt(e.id))}function Be(e){o.notifications.push(e)}function Ua(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function Va(e,t){const n=lt();if(!n)return;const a=o.location.systemId,s=dt(n,a,t);!s.length||s.length<=1||$.setActiveRoute({nodes:s,currentIndex:0,source:"mission",missionId:e})}function mt(e){$.activeRoute?.missionId===e&&$.clearActiveRoute()}function Xa(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",Be(`Mission failed (expired): ${n.name}`))}const mn="__global__",Ja={buyMultiplier:1,sellMultiplier:.85},Ka={basic:.9,standard:1,strategic:1.2,luxury:1.35};function Ae(){return o.ship.cargo||(o.ship.cargo={}),o.ship.cargo}function Za(){const e=Ae();return Object.values(e).reduce((t,n)=>t+n,0)}function hn(){return S?.commodities??[]}function te(e){return hn().find(n=>n.id===e)??null}function ee(){return o.marketState?(o.marketState.temporaryModifiers=o.marketState.temporaryModifiers||{},o.marketState.activeEvents=o.marketState.activeEvents||[],o.marketState.localAdjustments=o.marketState.localAdjustments||{},o.marketState.priceIntel=o.marketState.priceIntel||{},o.marketState.initialDriftSeeded=o.marketState.initialDriftSeeded??!1):o.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},o.marketState}function Qa(e){o.intel||(o.intel={systems:[]});const t=o.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return o.intel.systems.push(n),n})();t.lastPriceSeenDay=o.time.day}function es(e){const t=ee();let n=1;const a=t.temporaryModifiers[mn];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function ts(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function ns(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),i=n.exports?.includes(t.id);return s&&(a*=1.2),i&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function ht(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(I.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function as(e,t){const n=Math.max(1,t.basePrice),a=Ka[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,i=ns(e,t),l=1+ht(t)*.08,c=es(t.id),d=rs(e.id,t.id),u=bn(e.id,t.id),p=n*a*s*i*l*c*d*u;return Math.max(1,Math.round(p))}function fn(e,t){return U(e,t).base}function U(e,t){const n=Q(e),a=te(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=as(n,a),i=a.baseSpread??Ja,r=ht(a),l=Y(),c=Math.max(.1,Math.min(3,I.tradeProfitMultiplier??1)),d=rn(),u=Math.max(.5,l.buyBonus??1),p=Math.max(0,l.sellBonus??1),h=Math.max(.5,l.marketTax??1),m=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+r*.05)/c*u)),b=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-r*.05)*c*d*p*h)),g=Math.max(1,Math.min(b,m-1)),w=Math.max(m,g,Math.round(s*(1+r*.1))),C=Math.max(1,Math.min(m,g,Math.round(s*Math.max(.65,1-r*.2)))),x=ts(s,a.basePrice);return Qa(e),{base:s,buy:m,sell:g,high:w,low:C,trend:x}}function Ve(e,t,n=2){const a=ee(),s=e&&e.length?e:mn;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function gn(e=1){if(typeof e=="number"){ss(e);return}is(e??o)}function ss(e){if(e<=0)return;const t=ee(),n=Object.keys(t.temporaryModifiers);for(const s of n){const i=t.temporaryModifiers[s];i.remainingTurns-=e,i.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=o.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),Mn(t,.2*e)}function is(e){const t=ee(),n=S?.systems??[],a=S?.commodities??[],s=e.time.day;os(t,n,a);for(const i of n)for(const r of a){const l=bn(i.id,r.id),c=ht(r),d=I.marketDailyTrendStrength??1,u=(1-l)*.1*d,p=(Math.random()-.5)*.1*(.5+c)*d,h=vn(l+u+p);t.localAdjustments[i.id]||(t.localAdjustments[i.id]={}),t.localAdjustments[i.id][r.id]=h}t.activeEvents=t.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=e.time.turn)),Mn(t,.1)}function os(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const i=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=i}}e.initialDriftSeeded=!0}}function _e(e){return Ae()[e]??0}function rs(e,t){return ee().activeEvents.filter(a=>(a.expiresAtDay===void 0||o.time.day<a.expiresAtDay)&&a.expiresAtTurn>o.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function ls(e){ee().activeEvents.push(e)}function cs(e){return ee().activeEvents.filter(n=>n.expiresAtTurn>o.time.turn&&(n.expiresAtDay===void 0||o.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function ds(e){if(Math.random()>.08||!S?.commodities?.length)return;const n=S.commodities[Math.floor(Math.random()*S.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:o.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};ls(i),o.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function yn(e,t,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,l=Math.min(.15,.03*r),c=ee();c.localAdjustments[e]||(c.localAdjustments[e]={});const d=c.localAdjustments[e][t]??1,u=s==="buy"?1+l:1-l,p=vn(d*u);c.localAdjustments[e][t]=p}function bn(e,t){return ee().localAdjustments[e]?.[t]??1}function vn(e){return Math.min(2,Math.max(.5,e))}function Mn(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,i]of Object.entries(a)){const r=i-1,l=i-r*t;Math.abs(l-1)<.01?delete a[s]:a[s]=l}Object.keys(a).length||delete e.localAdjustments[n]}}function us(){const t=Q(o.location.systemId)?.neighbors.map(s=>Q(s.id)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=wn();if(o.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};o.player.credits-=n;const a=ee();return t.forEach(s=>{const i={};(S?.commodities||[]).forEach(l=>{const c=U(s.id,l.id);i[l.id]={buy:c.buy,sell:c.sell}});const r={turn:o.time.turn,prices:i};a.priceIntel[s.id]=r}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function $n(){return ee().priceIntel}function wn(){const t=Q(o.location.systemId)?.neighbors.map(l=>Q(l.id)).filter(l=>!!l)||[],n=80,a=t.map(l=>l.faction?$a(l.faction):null).filter(l=>typeof l=="number"),s=a.length?a.reduce((l,c)=>l+c,0)/a.length:0,i=Rt(1-s/200,.5,1.4),r=Math.round(n*i);return Rt(r,40,140)}function Rt(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function Xe(e,t,n){if(n<=0)return!1;const a=U(e,t).buy;if(a<=0)return!1;const s=a*n;if(o.player.credits<s)return!1;const i=o.ship.cargoCapacity;return i<=0?!1:Za()+n<=i}function Je(e,t,n){return n<=0?!1:_e(t)>=n}function Sn(e,t,n){if(!Xe(e,t,n))return!1;const a=U(e,t).buy,s=a*n;o.player.credits-=s;const i=Ae();return i[t]=(i[t]||0)+n,yn(e,t,n,a,"buy"),!0}function ft(e,t,n){if(!Je(e,t,n))return!1;const a=U(e,t).sell,s=a*n,i=Ae();return i[t]=Math.max(0,(i[t]||0)-n),o.player.credits+=s,$e(s),sa(t,n,s),yn(e,t,n,a,"sell"),Wa(t,n,e),!0}function xn(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const r=U(t,s).sell;return a+r*i},0)}const It={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function kn(e,t){if(!o||o.gameOver.active)return;const n=Qn(),a=ea(n),s={score:a,reason:e,message:t??It[e]??It.other,location:o.location.systemId,stats:n};o.combat=null,o.miningSession=null,o.gameOver={active:!0,reason:e,message:s.message,summary:s};const i={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};aa(i),$.go("gameover")}function Cn(e=!1){const t=Kt();Zt(t),en(),$.go(e?"main":"ship_select")}const gt="space-events-cache";let ve=[];function ps(e){const t=Ms();ve=vs(e,t),Tn(ve)}function yt(e){return ve.find(t=>t.id===e)}function ms(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=W(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,Y().anomalyChance??1),s=Math.min(1,Math.max(0,(I.eventFrequency??50)/100*a));if(Math.random()>s)return;const i=ve.map(c=>({ev:c,weight:Ss(c,e)})).filter(c=>c.weight>0);if(!i.length)return;const r=i.reduce((c,d)=>c+d.weight,0);let l=Math.random()*r;for(const c of i)if(l-=c.weight,l<=0)return c.ev;return i[0].ev}function hs(e){const t=e.outcomes;if(!t)return{};const n={},a=Y(),s=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),i=r=>{o.player.credits+=r,$e(r),o.player.credits<0&&(o.player.credits=0)};if(t.giveCredits){const r=t.giveCredits.min??0,l=t.giveCredits.max??r,c=he(r,l),d=Math.round(c*s);i(d),o.notifications.push(`Received ${d} credits.`)}if(typeof t.creditsDelta=="number"){const r=Math.round(t.creditsDelta*s);i(r)}if(typeof t.fuelDelta=="number"){const r=o.ship.maxFuel,l=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;o.ship.fuel=Math.max(0,Math.min(r,o.ship.fuel+l))}if(typeof t.turnDelta=="number"){const r=tn(t.turnDelta);o.time.turn+=r,ja(),gn(r)}if(t.cargoGain&&Dt($s(t.cargoGain,s,1),1),t.cargoLoss&&Dt(t.cargoLoss,-1),t.giveCommodity){const r=he(t.giveCommodity.min,t.giveCommodity.max),l=Math.max(0,Math.round(r*s));Ke(t.giveCommodity.id,l),l>0&&o.notifications.push(`Collected ${l} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(o.inventory.weapons.push(t.giveWeapon),o.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const r=t.damageShip.min??0,l=t.damageShip.max??r,c=he(r,l);if(o.ship.hp=Math.max(0,o.ship.hp-c),o.notifications.push(`Ship took ${c} damage.`),o.ship.hp<=0)return kn("ship_destroyed","Ship destroyed by event."),n}return t.applyStatus&&o.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&pt(t.spawnMissionId).success&&o.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&o.notifications.push(`Event flag: ${t.flag}`),t.modifyReputation&&ln({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function fs(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,Y().eventRewardMultiplier??1);if(n.mining){const s=he(n.mining.quantity.min,n.mining.quantity.max),i=Math.max(0,Math.round(s*a));Ke(n.mining.commodityId,i),o.notifications.push(`Mining yield: ${i} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=he(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),i=o.ship.maxFuel;o.ship.fuel=Math.max(0,Math.min(i,o.ship.fuel-s)),o.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];Ke(s,1),o.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(o.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),Ve(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function gs(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(I.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(I.marketCrashChance??5)/100));if(e.location?.systemId){const s=S?.commodities?.[Math.floor(Math.random()*(S?.commodities.length||1))];if(s){const i=e.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const l=1.1+Math.random()*.35;Ve(s.id,l,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:Math.max(0,l),expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${i}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const l=Math.max(.5,.85-Math.random()*.25);Ve(s.id,l,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:l,expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${i}: ${s.name} prices x${l.toFixed(2)} for ${r} turns.`)}}}}function ys(){Tn(ve)}function bs(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(gt)}function vs(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function Ms(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(gt);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function Tn(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(gt,JSON.stringify(e))}function Dt(e,t){for(const[n,a]of Object.entries(e)){const s=o.ship.cargo[n]??0,i=Math.max(0,s+a*t);o.ship.cargo[n]=i}}function $s(e,t,n=1){const a={};for(const[s,i]of Object.entries(e)){if(i<=0){a[s]=i;continue}const r=Math.max(n,Math.round(i*t));a[s]=r}return a}function Ke(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));o.ship.cargo[e]=n+i,i<t&&o.notifications.push(`Cargo full: stored ${i}/${t} ${e}.`)}function he(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function ws(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function Bt(e,t){return e.has(t)}function Ss(e,t){let n=e.weight??0;const a=ws(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const i=Math.max(.1,I.eventDangerMultiplier??1);n*=i}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),Bt(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),Bt(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=re().filter(i=>i.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let Ze=[];function xs(e){Ze=e}function ks(e,t=[]){const n=Ze.find(i=>i.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Ze.find(i=>(i.enemyTags||[]).some(r=>a.has(r)))??null}function Qe(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Cs(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function Ts(e,t){const n=W(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,i=e.max??s,r=Qe(s,i),l=Math.max(0,Math.round(r*a));o.player.credits+=l,t.creditsEarned+=l,$e(l);break}case"commodity":{const s=Qe(e.min??1,e.max??e.min??1),i=Math.max(0,Math.round(s*a)),r=Es(e.id||"unknown",i);r>0&&t.commodities.push({id:e.id||"unknown",qty:r});break}case"weapon":{e.id&&(o.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(o.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&pt(e.id).success&&t.missionsGranted.push(e.id);break}}}function Es(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,l)=>r+l,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));return o.ship.cargo[e]=n+i,i}function _s(e,t,n={},a=[]){const s=W(),i=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const l=ks(e,a);if(!l)return null;const c=n.quickKill?1.5:1,d=n.lowDamageTaken?1.25:1,u={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(m,b)=>{if(!m?.length||Math.random()>b)return;const g=Cs(m);g&&Ts(g,u)};p(l.common,r),p(At(l.uncommon,d),.35*r);const h=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(At(l.rare,c),h*r),l.guaranteed?.credits){const{min:m,max:b}=l.guaranteed.credits,g=Qe(m,b),w=Math.max(0,Math.round(g*i));o.player.credits+=w,u.creditsEarned+=w,$e(w)}return u}function At(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}const Pt={damageMultiplier:1.25,accuracyMultiplier:.8},Rs=.4,Is="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",Ds="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",ke={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},Bs=Object.keys(ke).map(e=>({type:e,shieldMultiplier:ke[e].shield,hullMultiplier:ke[e].hull,description:ke[e].description}));function As(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,i=Ps(t.weapons),r=Fs(t.modules),l=e.player?.credits??0,c=Math.log10(l+1)*5,d=n+a+i+r+s/2+c;return Math.max(1,Math.round(d))}function En(e){const t=e/40;return t<0?0:t>1?1:t}function Ps(e){return e.reduce((t,n)=>{if(!n)return t;const a=V(n);if(!a)return t;const s=a.damage??0,i=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+i*.2+r},0)}function Fs(e){return!e||!e.length?0:e.length*5}function Ls(e){return S?S.systemsById[e]??null:null}function Pe(e,t){const n=Ls(e);return n?n.tags.includes(t):!1}const js=0,Ns=100;function _n(e){const t=Math.max(js,Math.min(Ns,(o.player.wanted??0)+e));return o.player.wanted=t,t}function Hs(e,t,n){return Math.max(t,Math.min(n,e))}function Os(e){const{systemId:t,state:n,sessionFactor:a}=e,s=S?.systems.find(M=>M.id===t),i=s?.security??"medium",r=W(),l=Y();let c;switch(i){case"high":c=.02;break;case"low":c=.12;break;default:c=.06;break}s?.tags.includes("mining_belt")&&(c+=.02),s?.marketProfile?.blackMarket&&(c+=.03);const d=xn(n,t),u=yr(n.ship.templateId)?.cost??0,p=d+u,h=Math.min(.15,p/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),m=Ws(n,t),b=a*.03,g=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),w=Math.max(0,Math.min(1,(I.pirateEncounterRate??0)/100)),C=Math.max(0,(r.encounterChancePerJump??100)/100),x=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,l.pirateDetectionMultiplier??1);let f=(c+h+b+m+g+w)*x*C;return qs(f,n,t)}function Ws(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[c,d]of a){if(!d)continue;const u=U(t,c),p=te(c)?.basePrice??u.sell;if(p<=0)continue;const h=(u.sell-p)/p;s+=h*d,i+=d}if(i<=0)return 0;const r=s/i;return Hs(r*.2,0,.15)}function qs(e,t,n){const a=En(t.time.day),s=.4,r=s+(.75-s)*a;let l=e;return Pe(n,"core")?(l>.25&&(l=.25),l<.01&&(l=.01),l):(l>r&&(l=r),l<.01&&(l=.01),l)}const Gs=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],Ys={belts:Gs},Rn="pirate_cutter",zs=.5,Us=100,Ft=Ys,Fe=9,Le=9,je=5;function et(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function Vs(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,s]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-s);e.ship.cargo=n,t.accumulatedOre={}}function tt(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((l,c)=>l+c,0),i=Math.max(0,e.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,i));return r>0&&(a[t]=(a[t]??0)+r,e.ship.cargo=a),e.notifications||(e.notifications=[]),r<n&&e.notifications.push(`Cargo constrained: stored ${r}/${n} ${t}.`),r}function se(e,t,n){return Math.max(t,Math.min(n,e))}function In(e,t){const n=Math.max(1,fn(e,t)),a=Math.min(Us,n*zs);return Math.max(1,a)}function Xs(e){const t=Math.max(.1,I.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function Dn(){const e=[];for(let t=0;t<Fe;t++){const n=[];for(let a=0;a<Le;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function Js(){const e=Math.floor(Math.random()*(Fe-4))+2,t=Math.floor(Math.random()*(Le-4))+2,n=2+Math.floor(Math.random()*(je-2));return{row:e,col:t,depth:n}}function Ks(e,t,n,a){const s=t-a,i=e-n;if(Math.sqrt(s*s+i*i)<.5)return null;const l=Math.atan2(i,s)*(180/Math.PI),c=l<0?l+360:l;return c>=337.5||c<22.5?"dir-e":c<67.5?"dir-se":c<112.5?"dir-s":c<157.5?"dir-sw":c<202.5?"dir-w":c<247.5?"dir-nw":c<292.5?"dir-n":"dir-ne"}function Zs(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function Bn(e,t){const n=t?Ft.belts.find(s=>s.id===t):null;if(n)return n;const a=Ft.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function we(e,t,n,a,s){const i=Bn(t,n),r=An(e,i.id);if(s?.force&&(r.depletedUntilDay=void 0),r.depletedUntilDay!==void 0&&e.time.day<r.depletedUntilDay){e.notifications.push(`This belt is depleted. It will recover by day ${r.depletedUntilDay}.`);return}const l=0,c=Dn(),{row:d,col:u,depth:p}=Js();e.miningSession={active:!0,systemId:t,beltId:i.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:l,stability:i.stability.start,maxStability:i.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:c,gridRows:Fe,gridCols:Le,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:d,veinCol:u,veinDepth:p,accumulatedOre:{},beltName:i.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[]}}function Qs(e,t){e.miningSession&&(e.miningSession.depth=se(Math.round(t),1,je))}function ei(e,t,n){for(let a=0;a<e.length;a++)for(let s=0;s<e[a].length;s++)e[a][s].selected=a===t&&s===n}function ti(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const s=Bn(a.systemId,a.beltId),i=se(Math.round(t),0,Fe-1),r=se(Math.round(n),0,Le-1),l=se(Math.round(a.depth??3),1,je);a.depth=l,a.grid=a.grid??Dn(),a.drillsUsed=(a.drillsUsed??0)+1;const c=r-(a.veinCol??0),d=i-(a.veinRow??0),u=l-(a.veinDepth??3),h=Math.sqrt(c*c+d*d)*2.6+Math.abs(u)*1.5,m=Math.max(.2,1-a.drillsUsed*.04),b=(Math.random()*2-1)*m,g=10-h,w=se(Math.round(g+b),0,10),C=Ks(a.veinRow??0,a.veinCol??0,i,r),x=Zs(l,a.veinDepth??3),f=a.grid[i][r],M=!f.drilled;f.drilled=!0,f.signal=w,f.directionClass=C,f.depthHint=x.hint,f.depthClass=x.className,ei(a.grid,i,r),a.selectedRow=i,a.selectedCol=r,M?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+w/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+w/50);const T=Math.max(0,I.miningThreatMultiplier??.7),y=3+l,R=Math.max(0,Math.round(y*T));a.threat=se((a.threat??0)+R,0,100),a.currentPirateChance=(a.threat??0)/100;let D=Math.max(0,Math.round(w*.0025));w>0&&D===0&&(D=1);const F=a.resourceId??"aurite_ore",L=tt(e,F,D);et(a,F,L);const z=In(a.systemId,F),X=Math.round(z*L);a.totalValueMined+=X,a.lastYield={commodityId:F,amount:L,approxValue:X,rareFind:null},a.lastMessage=`Pulse at X${r+1}, Y${i+1}, Z${l}: signal ${w}. Depth ${x.hint}. Threat +${R}%. Ore +${L}.`;const ne=Math.random()*100;let J=!1;const B=a.threat*.9;if(ne<=B){J=!0,a.runComplete=!0,a.active=!1;const H=An(e,s.id);H.depletedUntilDay=e.time.day+1,de(Rn,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:w,directionClass:C,depthHint:x.hint,fightTriggered:J,threat:a.threat}}function ni(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const s=se(Math.round(t.depth??3),1,je),i=a-(t.veinCol??0),r=n-(t.veinRow??0),l=s-(t.veinDepth??3),c=Math.sqrt(i*i+r*r+l*l),d=Math.random()*1.5-.75,u=se(Math.round(10-c*2+d),0,10),p=1+Math.max(0,s-2)*.12,m=Math.max(0,Math.round((u+p)*.2)),b=Math.min(.4,(t.explorationScore??0)/25),g=Xs(t),w=Math.min(1,g+b);let x=Math.max(1,Math.round(m*w*(1+.1)));x=Math.max(1,Math.round(x*.5));const f=t.resourceId??"aurite_ore",M=tt(e,f,x);et(t,f,M);const T=In(t.systemId,f),y=Math.max(.05,I.miningPayoutMultiplier??.35);let R=Math.round(T*M*y),k=null;if(u>=6&&Math.random()<.1+b*.5){const J=Math.max(1,Math.round(u/3)),B=tt(e,"stellite_fragment",J);if(B>0){k={id:"stellite_fragment",amount:B};const H=Math.max(1,fn(t.systemId,k.id));R+=Math.round(H*B*y),et(t,k.id,B)}}t.totalValueMined+=R,t.lastYield={commodityId:f,amount:x,approxValue:R,rareFind:k},t.runComplete=!0,t.active=!1;const D=6+s*2,F=Math.max(0,I.miningThreatMultiplier??.7),L=Math.max(0,Math.round(D*F));t.threat=se((t.threat??0)+L,0,100),t.currentPirateChance=(t.threat??0)/100,t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${s}: signal ${u}, efficiency ${(w*100).toFixed(0)}%, ore ${x} (${M} stored). Threat +${L}%.`;const z=Math.random()*100;let X=!1;const ne=t.threat*.9;return z<=ne&&(X=!0,de(Rn,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset."),ua(M+(k?.amount||0),!!k),{signal:u,yieldAmount:M,commodityId:f,rareFind:k,fightTriggered:X,threat:t.threat}}function ai(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function An(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function si(e,t){const n=e.miningSession;n&&(Vs(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function ii(e){if(!S)throw new Error("Content has not been loaded.");const t=S.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function oi(e,t){return Math.floor(Math.random()*(t-e+1))+e}function A(e){const t=o.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}function ri(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function li(e){return e??"main"}function ci(e,t){$.go(li(e),t)}function de(e,t={}){const n=ii(e),s=o.ship.weapons.map(()=>0),i=n.weaponIds.slice(),r=i.map(()=>0),l=W(),c=l.enemyHpMultiplier??1,d=Math.max(1,Math.round(l.enemyCountMin??1)),u=Math.max(d,Math.round(l.enemyCountMax??d)),p=Math.floor(Math.random()*(u-d+1))+d,h=Math.max(1,p);o.combat={enemyId:n.id,enemyName:n.name,enemyHp:Math.max(1,Math.round(n.hull*c*h)),enemyMaxHp:Math.max(1,Math.round(n.hull*c*h)),enemyShields:Math.max(0,Math.round(n.shields*c*h)),enemyMaxShields:Math.max(0,Math.round(n.shields*c*h)),enemyWeapons:i,enemyCooldowns:r,enemyTags:n.tags||[],enemyCount:h,playerCooldowns:s,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:o.ship.hp,round:1,log:[`${n.name} engages you in combat!`],adviceToken:Math.random(),returnTo:t.returnScreen,returnParams:t.returnParams},h>1&&o.combat.log.push(`Multiple bogies detected (${h} ships).`),$.go("combat")}function di(e){const t=ui(e);de(t)}function ui(e){if(!S?.enemies?.length)return"pirate_cutter";const t=As(o),n=En(o.time.day),a=W(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,o.time.day-1),i=Math.max(0,a.difficultyScalePerShipPower??1),r=t*i*s;let l=r*(.6+.2*n),c=r*(.9+.4*n);e&&Pe(e,"core")&&(l=t*.4,c=t*.8);const d=S.enemies.map(m=>({id:m.id,power:ri(m)})),u=d.filter(m=>m.power>=l&&m.power<=c);if(u.length)return u[Math.floor(Math.random()*u.length)].id;let p=d[0],h=Math.abs(d[0].power-t);for(const m of d){const b=Math.abs(m.power-t);b<h&&(p=m,h=b)}return p.id}function Ne(e,t,n="normal"){const a=o.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){A("You must choose a weapon to fire.");return}Pn(t,n);break;case"fire_all":pi(n);break;case"brace":mi();break;case"flee":if(hi())return;break}if(o.combat){if(a.enemyHp<=0){bi();return}if(fi(),!!o.combat){if(o.ship.hp<=0){vi();return}yi(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Pn(e,t){const n=o.combat;if(!n)return;const a=o.ship;if(e<0||e>=a.weapons.length){A("Invalid weapon slot.");return}const s=a.weapons[e];if(!s){A("That hardpoint is empty.");return}const i=V(s);if(!i){A("Missing weapon data.");return}const r=Y(),l=n.round<=1,c={...i,critChance:Math.min(.95,(i.critChance??0)+(r.critBonus??0)+(l?r.critBonus??0:0))},d=n.playerCooldowns[e]??0;if(d>0){A(`${i.name} is still recharging (${d} turn${d===1?"":"s"}).`);return}const u={shields:n.enemyShields,hp:n.enemyHp},p=t==="called_shot"?Pt.damageMultiplier:1,h=t==="called_shot"?Pt.accuracyMultiplier:1,m=$i(n.playerStance),b=dn(c,u,{accuracyMultiplier:h,damageMultiplier:p*m*(r.playerDamageBonus??1)});if(b<=0){const x=t==="called_shot"?"called shot goes wide":"misses";A(`You fire ${i.name}, but it ${x}.`),n.playerCooldowns[e]=i.cooldown;return}ra(b);let g=b;if(n.enemyShields>0){const x=Math.min(n.enemyShields,g);n.enemyShields-=x,g-=x}g>0&&(n.enemyHp=Math.max(0,n.enemyHp-g));const w=u.shields>0?"shields":"hull",C=t==="called_shot"?"called shot":"normal shot";A(`You strike the ${n.enemyName}'s ${w} with ${i.name} (${C}) for ${b} damage.`),b>0&&i.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),A(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[e]=i.cooldown}function pi(e){const t=o.combat;if(!t)return;const a=o.ship.weapons.map((s,i)=>({id:s,idx:i})).filter(({id:s,idx:i})=>!!s&&(t.playerCooldowns[i]??0)<=0).map(s=>s.idx);if(!a.length){A("No weapons are ready to fire.");return}for(const s of a){if(!o.combat||o.combat.enemyHp<=0)break;Pn(s,e)}}function mi(){const e=o.combat;e&&(e.playerBracing=!0,A("You brace for impact, diverting power to shields and hull integrity."))}function hi(){const e=o.combat;if(!e)return!1;if(!e.canEscape)return A("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4,n=e.playerStance==="assault"?-.1:e.playerStance==="evasive"?.15:0,a=(o.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),i=Re((a-40)*.01,-.15,.15),r=W(),l=Y(),c=(r.fleeSuccessBonus??0)/100+(l.fleeBonus??0),d=Re(t+n+i+c,.05,.95);return Math.random()<=d?(A(`You punch the thrusters and break free! (Flee chance ${(d*100).toFixed(0)}%)`),o.combat=null,si(o,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),$.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(A(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(d*100).toFixed(0)}%)`),!1)}function fi(){const e=o.combat;if(!e)return;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,A("Enemy weapons are jammed this round!");return}const t=[];if(e.enemyWeapons.forEach((h,m)=>{const b=e.enemyCooldowns[m]??0;h&&b<=0&&t.push(m)}),t.length===0){A(`The ${e.enemyName} reloads while you advance.`);return}const n=t[oi(0,t.length-1)],a=e.enemyWeapons[n],s=V(a);if(!s){A(`The ${e.enemyName} fumbles its weapon.`);return}const i={shields:o.ship.shields,hp:o.ship.hp},r=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),l=W(),c=Y(),d=e.round<=1;let u=dn(s,i,{accuracyMultiplier:Math.max(0,(1-r)*(l.enemyAccuracyMultiplier??1)*Math.max(0,1-(c.dodgeBonus??0))*(d?Math.max(0,1-(c.dodgeBonus??0)):1))});if(u=Math.max(0,Math.round(u*(l.enemyDamageMultiplier??1))),e.enemyCount&&e.enemyCount>1&&(u=Math.max(0,Math.round(u*e.enemyCount))),u<=0){A(`The ${e.enemyName} fires ${s.name}, but misses.`),e.enemyCooldowns[n]=s.cooldown;return}e.playerBracing&&(u=Math.round(u*Rs)),u=Math.max(0,Math.round(u*wi(e.playerStance))),u=Math.max(0,Math.round(u*(l.playerDamageTakenMultiplier??1)*Math.max(.1,c.damageTakenMultiplier??1)*(d?Math.max(.1,c.damageTakenMultiplier??1):1)));let p=u;if(e.playerStatus.shieldBoost>0){const h=Math.min(e.playerStatus.shieldBoost,p);e.playerStatus.shieldBoost-=h,p-=h}if(o.ship.shields>0){const h=Math.min(o.ship.shields,p);o.ship.shields-=h,p-=h}p>0&&(o.ship.hp=Math.max(0,o.ship.hp-p)),A(`The ${e.enemyName} hits you with ${s.name} for ${u} damage.`),la(u),e.enemyCooldowns[n]=s.cooldown}function gi(){const e=o.combat;if(!e)return null;const t=e.enemyCooldowns.length>0?e.enemyCooldowns.map(l=>l??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...t),a=[];if(n<=1){const l=Re(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:l})}if(e.enemyShields<=0){const c=e.playerCooldowns.filter(u=>u<=0).length/Math.max(1,o.ship.weapons.length),d=Re(.6+c*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:d})}o.ship.hp/o.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((e.adviceToken??Math.random())+e.round*.13)%1,i=Math.floor(s*a.length),r=a[i];return{...r,confidence:r.confidence}}function yi(){const e=o.combat;e&&(e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0),e.enemyCooldowns=e.enemyCooldowns.map(t=>t>0?t-1:0),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)))}function bi(){const e=o.combat;if(!e)return;A(`The ${e.enemyName} explodes under your punishing fire. Victory is yours.`);const t=Math.max(0,e.startingHp-o.ship.hp),n=e.totalRounds<=3,a=t<=5,s=_s(e.enemyId,e.enemyName,{quickKill:n,lowDamageTaken:a},e.enemyTags||[]);if(s){o.lastBattleResult=s;const i=[];s.creditsEarned&&i.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&i.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&i.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&i.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&i.push(`Missions: ${s.missionsGranted.join(", ")}`),A(`Loot recovered — ${i.join(" | ")||"nothing notable."}`),n&&A("Because you won quickly, salvage yields are richer."),a&&A("Minimal hull damage preserved more intact cargo.")}else A("No notable loot recovered.");if(ca(),da(),qa(e.enemyId),e.enemyTags?.some(i=>/pirate|raider/i.test(i))||e.enemyId.includes("pirate")||e.enemyId.includes("raider")){const i=W().repGainMultiplier??1;_n(Math.round(3*i))}o.combat=null,ci(e.returnTo,e.returnParams)}function vi(){A("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),o.ship.hp=0,o.ship.shields=0,o.combat=null,o.notifications.push("Critical failure — hull integrity dropped to zero."),kn("ship_destroyed","Ship destroyed in combat.")}function Mi(e){const t=o.combat;t&&(t.playerStance=e,A(`Stance changed to ${e.charAt(0).toUpperCase()+e.slice(1)}.`))}function $i(e){switch(e){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function wi(e){switch(e){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function Re(e,t,n){return Math.max(t,Math.min(n,e))}function Si(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function xi(e,t){ki(e,t).lastRiskSeenDay=e.time.day}function ki(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function Ci(e){e.time.day+=1,ma(e.time.day),gn(e),gs(e),Xa(e),Si(e),ai(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{Bi(e)};function Fn(){return S?S.systemsById:null}function Ln(e){const t=Fn();return t?t[e]??null:null}function Ti(e,t){return e.neighbors.find(n=>n.id===t)??null}let bt=0,Lt=1;function Ei(e){e!==Lt&&(Lt=e,bt=0)}function vt(e){return e<=0?!1:bt<e}function Mt(){bt+=1}function ce(e){W().showEncounterDebug&&o.notifications.push(`Encounter debug: ${e}`)}function He(){return Ln(o.location.systemId)}function _i(){const e=He();if(!e)return[];const t=Fn();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:jn(e,a,n)}:null}).filter(n=>n!==null):[]}function jn(e,t,n){const a=Y(),s=(e.baseDanger+t.baseDanger)/2,i={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},r=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,l=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,c=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,d=(i[e.region]??0)+(i[t.region]??0),u=Math.max(1,Math.round(n.distance*l+Math.max(0,d)*2)),p=Ie(.1*n.distance+s*.12+c+d+(n.laneType==="wildspace"?.05:0),.1,.95),h=Math.min(.95,Math.max(.1,p)),m=Math.max(0,h-Math.max(0,a.hazardDetectionBonus??0)),b=Math.max(1,Math.round(n.distance*r*(1+s*.06))),g=Math.max(1,Math.round(b*Math.max(.1,a.fuelCostMultiplier??1))),w=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:u,fuelCost:g,hazardChance:m,hazardMitigation:Math.max(0,h-m),routeType:w,laneType:n.laneType,distance:n.distance}}function Ie(e,t,n){return Math.max(t,Math.min(n,e))}function Nn(e){const t=o.ship.cargo||{};let n=0,a=0,s=0;for(const[r,l]of Object.entries(t)){if(!l)continue;const c=te(r);if(!c||c.legalStatus!=="illegal"&&c.legalStatus!=="restricted")continue;const d=U(e.id,r);s+=d.sell*l,c.legalStatus==="illegal"?n+=l:a+=l}const i=n+a;return i<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:i,estimatedValue:s}}function Ri(e,t,n,a=Y()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.12),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const i=1+Math.min(1.5,e.illegalUnits*.1+e.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),l=Math.max(.5,a.illegalTolerance??1);return Ie(s*i*r/l,0,.95)}function Ii(e,t){const n=Nn(e);if(!n)return!1;const a=Y(),s=Ri(n,e,t.routeType,a);if(Math.random()>s)return!1;const i=o.ship.cargo||{};let r=0;for(const[p,h]of Object.entries(i)){if(!h)continue;const m=te(p);m&&(m.legalStatus!=="illegal"&&m.legalStatus!=="restricted"||(r+=h,i[p]=0))}o.ship.cargo=i;const l=Math.max(25,Math.round(n.estimatedValue*.35)),c=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,d=l+c;o.player.credits=Math.max(0,o.player.credits-d);const u=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25));return _n(u),o.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${d} credits, wanted +${u}.`),!0}function Di(e,t,n,a){const s=Ie((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),i=Ie(t,0,.95),r=Math.max(0,Math.round((s-i)*100));r>0&&o.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(i*100).toFixed(0)}%).`)}function Bi(e){const t=He();if(!S||!t)return;const n=Ti(t,e);if(!n){console.warn(`System ${e} is not a neighbor of ${t.id}`);return}const a=Ln(e);if(!a)return;const s=jn(t,a,n),i=Math.max(0,I.fuelCostMultiplier??1),r=Math.max(0,Math.round(s.fuelCost*i)),l=Math.max(0,Math.min(3,(I.travelRiskScaling??100)/100)),c=W(),d=Math.max(0,c.globalDangerMultiplier??1),u=Math.min(.95,Math.max(0,s.hazardChance*l*d)),p={...s,fuelCost:r,hazardChance:u};if(o.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}o.ship.fuel-=p.fuelCost,o.location.systemId=a.id,o.location.docked=!0,$.advanceActiveRoute(a.id);const h=tn(s.travelTime);o.time.turn+=h,ds(a.id),Ci(o),Ei(o.time.day),xi(o,a.id),pa();const m=Ga(o,a.id);m.completed.length&&console.log(`Arrived at ${a.id}: checked ${m.checked} contracts, completed ${m.completed.join(", ")}.`);const b=Number.isInteger(h)?h.toFixed(0):h.toFixed(2),g=Math.abs(h-1)<.01?"":"s",w=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${b} turn${g}).`;Di(s,p.hazardChance,l,d),Ii(a,p)&&ce("Contraband inspection triggered on arrival."),!Pi(a)&&(Fi(a)||Ai(t,a,p,w)||$.go("main",{message:w}))}function Ai(e,t,n,a){const s=W(),i=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*i),routeType:n.routeType},l=Ni(t)??ms(r);return l?(ce(`Travel event triggered: ${l.name||l.id||"unknown"}`),l.type==="mining"?(ce(`Mining event surfaced: ${l.id}`),$.go("event",{eventId:l.id}),!0):!l.choices||l.choices.length===0?(ce(`Auto-resolving event: ${l.name||l.id||"unknown"}`),Li(l,a)):($.go("event",{eventId:l.id}),!0)):($.go("main",{message:`${a} — Uneventful transit.`}),!0)}function Pi(e){const t=W(),n=Math.max(0,t.maxEncountersPerDay??0);if(!vt(n))return!1;const a=Os({systemId:e.id,state:o,sessionFactor:1});if(Math.random()<=a){Mt();const s=`Pirates intercept you near ${e.name}!`;return o.notifications.push(s),ce(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),di(e.id),!0}return!1}function Fi(e){const t=W(),n=Math.max(0,t.maxEncountersPerDay??0);if(!vt(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),i=e.security==="high"?1.15:e.security==="low"?.65:1,r=Y(),l=Nn(e),c=l?1+Math.min(1.2,l.totalUnits*.02):1,d=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),u=Math.min(1,a*s*i*c*d);if(Math.random()<=u){Mt();const p=`Patrol intercepts you near ${e.name}!`;return o.notifications.push(p),ce(`Patrol encounter triggered near ${e.name} (chance ${u.toFixed(3)})`),de("navy_interceptor"),!0}return!1}function Li(e,t){const n=fs(e);if(n.triggerCombat?.enemyId){const a=W(),s=Math.max(0,a.maxEncountersPerDay??0);if(!vt(s))return $.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;Mt();const i=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return ce(i),de(n.triggerCombat.enemyId),!0}return $.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const ji={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function Ni(e){const t=Hi(e);return t?yt(t)??null:null}function Hi(e){const t=[],n=new Set(e.tags||[]),a=s=>{t.includes(s)||t.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(ji[e.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),t.length?t[Math.floor(Math.random()*t.length)]:null}function Z(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}window.nav=(e,t={})=>{$.go(e,t)};function Oi(){const e=o,t=Q(e.location.systemId),n=Object.values(e.ship.cargo||{}).reduce((i,r)=>i+r,0),a=e.notifications[e.notifications.length-1],s=(e.notifications||[]).slice(-5).reverse();return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${t?.name??e.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${e.time.day}</span>
            <span>Turn ${Z(e.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-credits"></span>Credits</span>
          <span class="stat-value">${e.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-fuel"></span>Fuel</span>
          <span class="stat-value">${e.ship.fuel}/${e.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-cargo"></span>Cargo</span>
          <span class="stat-value">${n}/${e.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-danger"></span>Wanted</span>
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
            ${Pe(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}window.attackPirateBase=e=>{const t=Wi(e);if(!t){console.warn(`Unknown base ${e}`);return}$.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function Wi(e){return S?S.basesById[e]??null:null}function qi(e){return S?Object.values(S.basesById).find(n=>n.systemId===e)??null:null}function Gi(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}window.setMapZoom=e=>{$.setZoom(e)};window.focusRoute=e=>{$.go("travel",{...$.params,focusTargetId:e})};function Yi(){const e=He(),t=_i(),n=$.zoom||"local",a=typeof $.params.focusTargetId=="string"?$.params.focusTargetId:"",s=$.activeRoute,i=s?.nodes[s.currentIndex+1],r=s&&s.nodes.length>1?s.nodes.map(g=>Q(g)?.name??g).join(" → "):"",l=Object.values(o.ship.cargo||{}).reduce((g,w)=>g+w,0),c=t.map(({profile:g})=>g.hazardChance).reduce((g,w)=>Math.max(g,w),0),d=Math.round((c||0)*100);if(!e)return`
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
    `;const u=e?qi(e.id):null,p=Gi(u),h=u?`
      <div class="panel-card">
        <p class="label">${p}</p>
        <p class="muted">${u.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${u.id}')">
          Attack Pirate Base (Tier ${u.tier})
        </button>
      </div>
    `:"",m=e?Ki(e,t,n,a,s):"",b=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:g,route:w,profile:C})=>{const x=g.id===a,f=g.id===i,M=zi(g.security),T=Ui(g),y=Xi(C.hazardChance),R=`${C.fuelCost} fuel`,k=`${C.travelTime} turn${C.travelTime===1?"":"s"}`,D=Ji(w.laneType),F=`Distance: ${w.distance}`,L=T.join(" | "),z=["travel-row"];return(x||f)&&z.push("travel-row--focused"),`
              <article class="${z.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${g.name}</span>
                  <span class="travel-row__label">${M}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${D}</span>
                    <span>${F}</span>
                  </div>
                  <span class="travel-row__label">${R} | ${k} | Risk: ${y}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${g.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${g.id}')">Jump to ${g.name}</button>
                </div>
                <span class="travel-row__label">${L}</span>
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
          <span>Turn ${Z(o.time.turn)}</span>
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
            ${b}
          </div>
          <div class="panel-card">
            <div class="travel-zoom-toggle">
              <span class="label">Map View</span>
              <div class="zoom-toggle__pills">
                <button class="btn btn-pill ${n==="local"?"btn-pill--active":""}" onclick="window.setMapZoom('local')">Local</button>
                <button class="btn btn-pill ${n==="sector"?"btn-pill--active":""}" onclick="window.setMapZoom('sector')">Sector</button>
              </div>
            </div>
            ${m}
            ${r?`<p class="muted">Active route: ${r}</p>`:""}
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${h}
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
  `}function zi(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function Ui(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(Vi)}function Vi(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function Xi(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function Ji(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function Ki(e,t,n,a,s){if(!e)return'<p class="muted">Map data unavailable.</p>';const i=320,r=200,l=16,c=36,d=8,u=8,p=lt(),h=p&&a?dt(p,e.id,a):[],m=s?.nodes??[],b=new Set([e.id]);a&&b.add(a),(p?ct(p,e.id):t.map(({system:v})=>v.id)).forEach(v=>b.add(v)),m.forEach(v=>b.add(v)),h.forEach(v=>b.add(v));const w=v=>v.laneType==="core_lane"?"core":v.laneType==="frontier_lane"?"frontier":"wild",C=p?Ra(p,e.id,n):null,x=[],f=[];if(p&&C){const v=new Map(p.nodes.map(j=>[j.id,j])),P=new Set(C.keys());C.forEach((j,ie)=>{const ae=v.get(ie);ae&&x.push({...ae,depth:j})}),p.lanes.filter(j=>P.has(j.from)&&P.has(j.to)).forEach(j=>{const ie=Math.max(C.get(j.from)??0,C.get(j.to)??0);f.push({...j,depth:ie})})}else{const v=new Set;x.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),v.add(e.id),t.forEach(({system:P,route:j})=>{v.has(P.id)||(x.push({id:P.id,name:P.name,x:P.coords?.x??0,y:P.coords?.y??0,tags:P.tags??[],depth:1}),v.add(P.id),f.push({from:e.id,to:P.id,type:w(j),distance:j.distance,depth:1}))})}if(!x.length)return'<p class="muted">No coordinate data to render.</p>';const M=x.map(v=>v.x),T=x.map(v=>v.y),y=Math.min(...M),R=Math.max(...M),k=Math.min(...T),D=Math.max(...T),F=R-y||1,L=D-k||1,z=v=>l+(v-y)/F*(i-l*2),X=v=>r-(l+(v-k)/L*(r-l*2)),ne=new Map(x.map(v=>[v.id,{...v,sx:z(v.x),sy:X(v.y)}])),J=new Set(x.map(v=>v.id)),B=new Set(m);h.forEach(v=>B.add(v)),!p&&a&&B.add(a);const H=new Set,K=v=>{for(let P=0;P<v.length-1;P++)H.add(Ee(v[P],v[P+1]))};K(m),h.length?K(h):a&&H.add(Ee(e.id,a));const ue=f.filter(v=>J.has(v.from)&&J.has(v.to)).map(v=>{const P=ne.get(v.from),j=ne.get(v.to);if(!P||!j)return"";const ie=Ee(v.from,v.to),ae=v.depth??Math.max(P.depth??0,j.depth??0),xe=H.has(ie),Oe=xe?3.2:ae<=1?2.2:1.2,We=xe?1:ae<=1?.9:.35;return`<line x1="${P.sx.toFixed(1)}" y1="${P.sy.toFixed(1)}" x2="${j.sx.toFixed(1)}" y2="${j.sy.toFixed(1)}" stroke="${Zi(v.type)}" stroke-width="${Oe}" stroke-linecap="round" opacity="${We}"></line>`}).join(""),Se=Array.from(ne.values()).map(v=>{const P=v.id===e.id,ie=(v.depth??0)<=1,ae=B.has(v.id),xe=P?7:ae?6:ie?5:3.5,Oe=P?"#4CE6C3":ae?"#7dd3fc":"#ffffff",We=ae||ie?1:.45,Ct=b.has(v.id),Yn=v.name.length>16?`${v.name.slice(0,14)}...`:v.name,zn=Ct?Yn:"";return`
        <g>
          <circle
            cx="${v.sx.toFixed(1)}"
            cy="${v.sy.toFixed(1)}"
            r="${xe}"
            fill="${Oe}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${We}"
          ></circle>
          ${Ct?`<text x="${(v.sx+d).toFixed(1)}" y="${(v.sy-u).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${zn}</text>`:""}
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
        ${ue}
        ${Se}
      </svg>
    </div>
  `}function Zi(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const jt={high:"^",low:"v",stable:"-"};function Qi(e={}){const t=Q(o.location.systemId);if(!t)return`
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
    `;const n=hn();if(!n.length)return`
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
    `;const a=Object.values(o.ship.cargo||{}).reduce((f,M)=>f+M,0),s=Object.entries(o.ship.cargo||{}).filter(([,f])=>f>0).sort((f,M)=>M[1]-f[1]).slice(0,5),i=new Map;re().filter(f=>f.status==="active").forEach(f=>{const M=f.requirements?.deliver;if(!M?.commodityId)return;const T=i.get(M.commodityId)??{needed:0,deliverable:!1},y=_e(M.commodityId)>=(M.quantity||0),R=!M.systemId||M.systemId===o.location.systemId;i.set(M.commodityId,{needed:T.needed+(M.quantity||0),deliverable:T.deliverable||R&&y})});const r=n.map(f=>{const M=U(t.id,f.id),T=so(f.tradeTags?.length?f.tradeTags:f.tags),y=_e(f.id),R=io(f,y),k=Hn(M.buy,a,f.id);return{commodity:f,quote:M,tags:T,cargoQty:y,metaLine:R,maxBuyable:k,profit:M.sell-M.buy}}),l=r.reduce((f,M)=>M.profit>f.value?{id:M.commodity.id,value:M.profit}:f,{id:r[0]?.commodity.id??"",value:Number.NEGATIVE_INFINITY}).id,c=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,d=r.find(f=>f.commodity.id===c)||r.find(f=>f.commodity.id===l)||r[0],u=r.map(({commodity:f,quote:M,tags:T,cargoQty:y},R)=>{const k=d?.commodity.id===f.id,D=f.id===l;Xe(t.id,f.id,1),Je(t.id,f.id,1);const F=i.get(f.id),L=["market-row"];k&&L.push("market-row--highlight");const z=F?`<span class="contract-pill contract-pill--target${F.deliverable?" ready":""}">${F.deliverable?"Deliver now":"Contract target"}</span>`:"",X=D?'<span class="contract-pill">Top margin</span>':"";return`
        <article class="${L.join(" ")}" style="--row-index:${R};" onclick="selectMarketCommodity('${f.id}')">
          <div class="market-row__main">
            <span class="market-row__name">${f.name}</span>
            <span class="market-row__info">
              BUY ${M.buy} · SELL ${M.sell} · Held ${y}
            </span>
          </div>
          <div class="market-row__meta">
            <span class="market-row__trend">${jt[M.trend]} ${M.trend}</span>
            <span>${T||"Local goods"}</span>
            ${X}
            ${z}
          </div>
        </article>
      `}).join(""),p=a>0,h=`
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
          <strong>${Z(o.time.turn)}</strong>
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
        Credits: ${o.player.credits} | Cargo: ${eo()}
      </p>
      <div class="market-summary__cargo">
        ${s.length?s.map(([f,M])=>{const T=te(f),y=T?.mass??0,R=y?` (Mass ${Math.round(y*M)})`:"";return`<span>${M} × ${T?.name||f}${R}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${p?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,m=d?Xe(t.id,d.commodity.id,1):!1,b=d?Je(t.id,d.commodity.id,1):!1,g=d&&m?"":" disabled",w=d&&d.maxBuyable>1&&m?"":" disabled",C=d&&b&&d.cargoQty>0?"":" disabled",x=d?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${d.commodity.name}</strong>
        <span class="market-row__trend">${jt[d.quote.trend]} ${d.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${d.quote.buy} · SELL ${d.quote.sell}</span>
        <span>${d.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${g}
          onclick="buyCommodityAction('${d.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${w}
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
          <span>Turn ${Z(o.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${h}
            ${to(t.id)}
            ${no(t)}
          </aside>
          <div class="market-list">
            ${u}
            ${x}
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
  `}function eo(){const e=o.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${o.ship.cargoCapacity}`}function to(e){const t=cs(e);return t.length?`
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
    `}function no(e){const t=$n(),n=wn(),s=(e?.neighbors.map(i=>Q(i.id)).filter(i=>!!i&&t[i.id])||[]).map(i=>{const r=ao(e?.id,i.id),l=o.time.turn-(t[i.id]?.turn??o.time.turn),c=r.over?`${r.over.id} overpriced (+${Math.round(r.over.delta*100)}%)`:"no strong overpay",d=r.under?`${r.under.id} underpriced (${Math.round(r.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${i.name} (age ${l}t): Sell -> ${c} | Buy -> ${d}</p>`}).join("");return`
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (${n} cr, varies with rep). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${n})</button>
      </div>
      ${s||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function ao(e,t){if(!e)return{over:null,under:null};const a=$n()[t];if(!a)return{over:null,under:null};let s=null,i=null;const r=Math.max(0,o.time.turn-a.turn),l=Math.max(.5,1-r*.05);for(const[c,d]of Object.entries(a.prices)){const u=U(e,c);if(u.sell>0&&d.buy>u.sell){const p=(d.buy-u.sell)/u.sell*l;(!s||p>s.delta)&&(s={id:c,delta:p})}if(u.buy>0&&d.sell<u.buy){const p=(u.buy-d.sell)/u.buy*l;(!i||p>i.delta)&&(i={id:c,delta:p})}}return{over:s,under:i}}function Hn(e,t,n){if(e<=0)return 0;const a=Math.floor(o.player.credits/e),s=Math.max(0,o.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function so(e){return e?.length?Array.from(new Set(e)).map(n=>$t(n.replace(/_/g," "))).join(" | "):""}function io(e,t){const n=$t(e.tier||"standard"),a=oo(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,i=[`Held ${t}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" | ")}function $t(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function oo(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??$t(e)}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=o.location.systemId,n=te(e),a=Sn(t,e,1),s=U(t,e).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=o.location.systemId,n=te(e),a=ft(t,e,1),s=U(t,e).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=o.location.systemId,a=o.ship.cargo||{},s=Object.values(a).reduce((c,d)=>c+d,0),i=Hn(t,s);if(i<=0){nav("market");return}Sn(n,e,i);const r=te(e),l=document.getElementById("market-message");l&&(l.textContent=`Bought ${i} ${r?.name||e} for ${t*i} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=o.location.systemId,n=_e(e);if(n<=0){nav("market");return}const a=U(t,e).sell;ft(t,e,n);const s=te(e),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=o.location.systemId,t=Object.entries(o.ship.cargo||{});let n=0;const a=[];for(const[i,r]of t){if(!r||!ft(e,i,r))continue;n+=r;const c=te(i);a.push(`${r} ${c?.name||i}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const i=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${i}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=us(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};function ro(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function lo(e={}){const t=typeof e.message=="string"?e.message:"",n=re(),a=Aa(),s=Object.values(o.ship.cargo||{}).reduce((u,p)=>u+p,0),r=ro(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),l=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(u=>{const p=u.requirements||{},h=Nt(p.travel?.systemId),m=Ht(p.travel?.systemId);return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  ${u.description?`<p class="muted">${u.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${Pa(u)}</span>
                    <span>${Fa(u)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${h}${m?` - ${m}`:""}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',c=r?[r]:a[0]?[a[0].id]:[],d=a.length>0?`
        <div class="contract-list">
          ${a.map(u=>{const p=Nt(u.requirements?.travel?.systemId),h=Ht(u.requirements?.travel?.systemId),m=["contract-row"];return c.includes(u.id)&&m.push("contract-row--active"),`
                <article class="${m.join(" ")}" onclick="acceptContract('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  <p class="muted">${u.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${p}${h?` - ${h}`:""}</span>
                    <span>Reward: ${co(u.reward)}</span>
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
          <span>Turn ${Z(o.time.turn)}</span>
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
  `}function Nt(e){if(!e)return"Unknown";const t=Q(e);return t?.name?`<strong>${t.name}</strong>`:e}function Ht(e){if(!e)return"";const t=lt();if(!t)return"";const n=Ia(t,o.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function co(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=V(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}window.acceptContract=e=>{const t=pt(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=Ha(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};const uo={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function wt(e){return S?S.ships.find(t=>t.id===e)??null:null}function po(){return wt(o.ship.templateId)}function mo(){return S?S.ships.filter(e=>e.starter):[]}function ho(){return S?S.ships.filter(e=>!e.starter):[]}function On(e,t){const n=wt(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,l)=>uo[`${r.size}:${r.type}`]??a[l]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};o.ship=i,at(),it()}function fo(e){On(e),o.player.hasChosenStarter=!0}function go(e){const t=wt(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):o.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(o.player.credits-=t.cost,On(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function yo(){const e=o.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=t+n;if(o.player.credits<a){console.warn("Not enough credits to fully repair.");return}o.player.credits-=a,e.hp=e.maxHp,e.shields=e.maxShields}function bo(){const e=o.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(o.player.credits<a){console.warn("Not enough credits to fully refuel.");return}o.player.credits-=a,e.fuel=e.maxFuel}window.repairShipAction=()=>{yo(),nav("ship")};window.refuelShipAction=()=>{bo(),nav("ship")};function vo(){const e=o.ship,t=po(),n=on(),a=o.combat?.playerCooldowns??[],s=Object.values(e.cargo||{}).reduce((l,c)=>l+c,0),i=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(l=>`<li>${l.name} (+${l.value} ${l.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${Z(o.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-hull"></span>Hull</span>
          <span class="stat-value">${e.hp}/${e.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-shields"></span>Shields</span>
          <span class="stat-value">${e.shields}/${e.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-fuel"></span>Fuel</span>
          <span class="stat-value">${e.fuel}/${e.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-cargo"></span>Cargo</span>
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
            ${e.hardpoints.map((l,c)=>{const d=V(e.weapons[c]),u=d?.name||"Empty",p=a[c]??0,h=d?rt(d):null,m=h?`
                    <p class="muted">Role: ${h.role} (${h.typeLabel})</p>
                    <p class="muted">Vs Shields: ${h.vsShields} · Vs Hull: ${h.vsHull}</p>
                    ${h.tagNotes.length?`<p class="muted">Traits: ${h.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${c+1} · ${l.size} ${l.type}</p>
                    <p class="value-inline">${u}</p>
                    <p class="muted">${p>0?`${p} turn${p===1?"":"s"} left`:"Ready"}</p>
                    ${m}
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
  `}function Mo(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=yt(t);if(!n)return`
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
    `;const a=$o(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${wo(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function $o(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${So(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function wo(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function So(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=$.params,n=typeof t.eventId=="string"?t.eventId:"",a=yt(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const i=hs(s);if(i.triggerCombat?.enemyId){de(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{we(o,o.location.systemId,e||void 0,t||void 0),$.go("mining")};window.fireWeapon=(e,t="normal")=>{Ne("fire",e,t),o.combat&&nav("combat")};window.brace=()=>{Ne("brace"),o.combat&&nav("combat")};window.flee=()=>{Ne("flee"),o.combat&&nav("combat")};window.setStance=e=>{Mi(e),o.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{Ne("fire_all",void 0,e),o.combat&&nav("combat")};function xo(){const e=o.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=o.ship,n=e.log.map(g=>`<div class="log-line">${g}</div>`).join(""),a=t.hp/Math.max(1,t.maxHp)<=.35,s=(e.log[e.log.length-1]||"").toLowerCase(),i=s.includes("hits you")||s.includes("damage"),r=["app-root","combat-root"];a&&r.push("low-hull"),i&&r.push("hit-flash");const l=t.hardpoints.map((g,w)=>{const C=t.weapons[w],x=V(C),f=e.playerCooldowns[w]??0,M=!!x&&f===0;return`
        <div class="panel-card">
          <p class="label">Slot ${w+1} · ${g.size.toUpperCase()} ${g.type}</p>
          <p class="value-inline">${x?.name||"Empty"}</p>
          <p class="muted">${f>0?`Cooling (${f})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${M?"":"disabled"} onclick="fireWeapon(${w}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${M?"":"disabled"} onclick="fireWeapon(${w}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),c=Bs.map(g=>`
        <tr>
          <td>${g.type}</td>
          <td>${g.shieldMultiplier.toFixed(2)}x</td>
          <td>${g.hullMultiplier.toFixed(2)}x</td>
          <td>${g.description}</td>
        </tr>
      `).join(""),d=gi(),u=d?`<p class="combat-advice ${d.suggestion}">
        ${d.text}
        <span class="advice-confidence">Intel confidence: ${(d.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',h=e.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.",m=ko(e),b=Co(e);return`
    <div class="${r.join(" ")}">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${e.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${Z(o.time.turn)} · Round ${e.round}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-hull"></span>Hull</span>
          <span class="stat-value">${t.hp}/${t.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-shields"></span>Shields</span>
          <span class="stat-value">${t.shields}/${t.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-hull"></span>Enemy Hull</span>
          <span class="stat-value">${e.enemyHp}/${e.enemyMaxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-shields"></span>Enemy Shields</span>
          <span class="stat-value">${e.enemyShields}/${e.enemyMaxShields}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Combat: ${e.enemyName}</h1>
          <p class="muted">Current stance: <strong>${e.playerStance}</strong>. ${h}</p>

          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Your Ship</p>
              <p class="value-inline">Fuel ${t.fuel}/${t.maxFuel}</p>
              <div class="status-chips">${m||'<span class="muted">No active buffs</span>'}</div>
            </div>
            <div class="panel-card enemy-reticle">
              <div class="reticle-grid"></div>
              <p class="label">Enemy</p>
              <p class="value-inline">${e.enemyName}</p>
              <div class="status-chips">${b||'<span class="muted">No active debuffs</span>'}</div>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Stances</p>
            ${u}
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
            ${l}
          </div>

          <h2 class="panel-title">Damage Guide</h2>
          <div class="panel-card">
            <p><strong>Called Shot</strong>: ${Is}</p>
            <p><strong>Brace vs Attack</strong>: ${Ds}</p>
            <table class="damage-guide">
              <thead>
                <tr><th>Damage Type</th><th>Shield Effect</th><th>Hull Effect</th><th>Usage Tip</th></tr>
              </thead>
              <tbody>
                ${c}
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
  `}function ko(e){const t=[];return t.push(`<span class="buff-chip buff">Stance: ${e.playerStance}</span>`),e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function Co(e){const t=[];return e.enemyStatus.weaponJammedTurns>0&&t.push(`<span class="buff-chip debuff">Weapons jammed (${e.enemyStatus.weaponJammedTurns}t)</span>`),e.enemyShields<=0&&t.push('<span class="buff-chip debuff">Shields down</span>'),t.length===0&&e.enemyShields>0&&t.push('<span class="buff-chip muted-chip">Systems nominal</span>'),t.join("")}window.buyShipAction=e=>{go(e)};window.buyComponentAction=e=>{ga(e)};window.buyWeaponAction=e=>{ka(e)};function To(){if(!Pe(o.location.systemId,"shipyard"))return`
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
    `;const e=ho(),t=ha(),n=Sa(),a=st().map(c=>V(c)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(c=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Ye("ship",c.id)}
                      <div>
                      <p class="label">${c.roleHint||"Multi-role"}</p>
                      <strong>${c.name}</strong>
                      <p class="muted">${c.description}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${c.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Hull ${c.hull} | Shields ${c.shields} | Fuel ${c.fuel} | Cargo ${c.cargo}</p>
                  <button class="btn btn-primary" onclick="buyShipAction('${c.id}')">Buy & Replace</button>
                </article>
              `).join("")}
        </div>
      `,i=t.length===0?'<p class="muted">No components in stock.</p>':`
        <div class="card-list">
          ${t.map(c=>{const d=[];if(typeof c.value=="number"&&c.effectType&&d.push(`+${c.value} ${c.effectType}`),c.effects)for(const[p,h]of Object.entries(c.effects)){if(typeof h!="number")continue;const m=Math.round((h-1)*100);switch(p){case"miningYield":d.push(`Mining yield ${m>=0?"+":""}${m}%`);break;case"miningSpeed":d.push(`Mining duration ${m>=0?"+":""}${m}%`);break;case"rareFindChance":d.push(`Rare finds ${m>=0?"+":""}${m}%`);break;case"miningPayoutMultiplier":d.push(`Mining payout ${m>=0?"+":""}${m}%`);break;case"sellBonus":d.push(`Sell bonus ${m>=0?"+":""}${m}%`);break;case"incomeMultiplier":d.push(`Income ${m>=0?"+":""}${m}%`);break;default:d.push(`${p} ${m>=0?"+":""}${m}%`)}}const u=d.length?d.join(" | "):"Utility module";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Ye("module",c.id)}
                      <div>
                      <p class="label">${c.effectType||"Passive"}</p>
                      <strong>${c.name}</strong>
                      <p class="muted">${c.description}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${c.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Boost: ${u}${c.slot?` | Slot: ${c.slot}`:""}</p>
                  <button class="btn btn-primary" onclick="buyComponentAction('${c.id}')">Buy & Install</button>
                </article>
              `}).join("")}
        </div>
      `,r=n.length===0?'<p class="muted">No weapons available.</p>':`
        <div class="card-list">
          ${n.map(c=>{const d=rt(c),u=d.tagNotes.length?`Traits: ${d.tagNotes.join(", ")}`:"";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Ye("weapon",c.id)}
                      <div>
                      <p class="label">${c.type} • ${c.size}</p>
                      <strong>${c.name}</strong>
              <p class="muted">${u}</p>
            </div>
            </div>
            <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${c.price} cr</p>
                    </div>
                  </div>
                  <p class="muted">
                    Damage ${c.damage} (${c.damageType}) | Acc ${Math.round(c.accuracy*100)}% | Crit ${Math.round(c.critChance*100)}% x${c.critMultiplier}<br/>
                    Cooldown ${c.cooldown} | Energy ${c.energyCost}
                  </p>
                  <p class="muted">${d.role} (${d.typeLabel}) | Vs Shields: ${d.vsShields}, Vs Hull: ${d.vsHull}</p>
                  <button class="btn btn-primary" onclick="buyWeaponAction('${c.id}')">Buy Weapon</button>
                </article>
              `}).join("")}
        </div>
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
          <h1 class="panel-title">Shipyard</h1>

          <details open class="panel-card">
            <summary class="panel-title">Ships for Sale</summary>
            ${s}
          </details>

          <details class="panel-card" open>
            <summary class="panel-title">Components & Upgrades (${t.length||0})</summary>
            ${i}
          </details>

          <details class="panel-card" open>
            <summary class="panel-title">Weapons for Sale (${n.length||0})</summary>
            ${r}
          </details>

          <details class="panel-card">
            <summary class="panel-title">Your Weapon Inventory</summary>
            <div class="panel-card">${l}</div>
          </details>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}const Ot=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],Wt=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],qt=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],Gt=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function fe(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Eo(e){const t=fe(e)%Ot.length;return Ot[t]}function St(e){let t=fe(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function Ge(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,l=i-s+1,c=Math.floor((t-r)/2)-n,d=Math.floor((t-l)/2)-s;return e.map(u=>({...u,x:u.x+c,y:u.y+d}))}function Ye(e,t){const n=Eo(`${e}-${t}`),a=Wt[fe(t)%Wt.length],s=qt[fe(t+"-mod")%qt.length],i=Gt[fe(t+"-wpn")%Gt.length],l=Ge(e==="ship"?_o(a,t):e==="module"?Ro(s,t):Io(i,t)).map(c=>`<rect x="${c.x}" y="${c.y}" width="1" height="1" fill="${n[c.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${l}
    </svg>
  `}function _o(e,t){const n=St(t),a=[...e],s=Math.min(...e.map(d=>d.y)),i=Math.max(...e.map(d=>d.y)),r=e.filter(d=>d.y===s),l=e.filter(d=>d.y===i);r.slice(0,2).forEach(d=>{a.push({x:d.x,y:d.y-1,c:"a"})}),l.forEach(d=>{n()>.5&&a.push({x:d.x,y:d.y+1,c:n()>.5?"a":"b"})});const c=n()>.5?-1:1;return a.push({x:l[0]?.x+c,y:i-1,c:"b"}),a.push({x:l[l.length-1]?.x-c,y:i-1,c:"b"}),a}function Ro(e,t){const n=St(t+"-decor"),a=[...e],s=Math.min(...e.map(c=>c.x)),i=Math.max(...e.map(c=>c.x)),r=Math.min(...e.map(c=>c.y)),l=Math.max(...e.map(c=>c.y));return a.push({x:s-1,y:Math.round((r+l)/2),c:"b"}),a.push({x:i+1,y:Math.round((r+l)/2),c:"b"}),n()>.3&&a.push({x:s,y:r-1,c:"a"}),n()>.6&&a.push({x:i,y:r-1,c:"c"}),n()>.4&&a.push({x:s,y:l+1,c:"a"}),a}function Io(e,t){const n=St(t+"-weapon"),a=[...e],s=Math.max(...e.map(l=>l.y)),i=Math.min(...e.map(l=>l.x)),r=Math.max(...e.map(l=>l.x));return a.push({x:i,y:s+1,c:n()>.5?"a":"b"}),a.push({x:r,y:s+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:i+1,y:s-2,c:"c"}),a.push({x:r+1,y:s-1,c:"b"}),a}const Do={incomeMultiplier:e=>O(e,"income"),eventRewardMultiplier:e=>O(e,"event rewards"),hpBonus:e=>O(e,"hull"),cargoBonus:e=>Ao(e,"cargo capacity"),sellBonus:e=>O(e,"sell price"),buyBonus:e=>O(e,"buy price"),marketTax:e=>O(e,"market tax"),miningYield:e=>O(e,"mining yield"),rareFindChance:e=>O(e,"rare find chance"),miningSpeed:e=>O(e,"mining duration"),dodgeBonus:e=>Ce(e,"dodge chance"),critBonus:e=>Ce(e,"crit chance"),damageTakenMultiplier:e=>O(e,"damage taken"),fleeBonus:e=>Ce(e,"flee chance"),pirateDetectionMultiplier:e=>O(e,"pirate detection"),scanDetectionMultiplier:e=>O(e,"scan detection"),illegalTolerance:e=>O(e,"illegal tolerance"),fuelCostMultiplier:e=>O(e,"fuel cost"),hazardDetectionBonus:e=>Ce(e,"hazard detection"),anomalyChance:e=>O(e,"anomaly chance"),shieldRegenBonus:e=>O(e,"shield regen")};function Bo(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>Do[n]?.(a)??null).filter(n=>!!n):[]}function O(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Ce(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Ao(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}window.chooseStarter=e=>{fo(e),it(),$.go("main")};function Po(){const e=mo();if(e.length===0)return`
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
    `;const t=e.map(n=>{const a=Bo(n),s=n.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${n.passive.name}</p>
          ${a.length?`<div class="passive-summary__list">${a.map(i=>`<span>${i}</span>`).join("")}</div>`:""}
        </div>
      `:"";return`
      <div class="panel-card starter-card">
        <div class="starter-card-head">
          ${Ho(n.id,n.roleHint??n.name)}
          <div>
            <p class="label">${n.roleHint}</p>
            <p class="value-inline"><strong>${n.name}</strong></p>
            <p class="muted">${n.description}</p>
          </div>
        </div>
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
          <span>Turn ${Z(o.time.turn)}</span>
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
`}const Yt=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],zt={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function xt(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Fo(e){return Yt[xt(e)%Yt.length]}function Lo(e,t){const n=(()=>{let r=xt(t);return()=>(r=r*1664525+1013904223|0,(r>>>0)/4294967295)})(),a=[...e],s=Math.max(...e.map(r=>r.y)),i=Math.min(...e.map(r=>r.y));return n()>.5&&a.push({x:e[0]?.x??4,y:i-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:s+1,c:n()>.5?"b":"c"}),a}function jo(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,l=i-s+1,c=Math.floor((t-r)/2)-n,d=Math.floor((t-l)/2)-s;return e.map(u=>({...u,x:u.x+c,y:u.y+d}))}function No(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(zt).find(r=>n.includes(r))??"fighter",s=zt[a],i=xt(`${e}-${t}`)%s.length;return s[i]}function Ho(e,t){const n=Fo(`${e}-${t}`),a=No(e,t),s=Lo(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${jo(s).map(l=>`<rect x="${l.x}" y="${l.y}" width="1" height="1" fill="${n[l.c]}" opacity="1" />`).join("")}
    </svg>
  `}function Oo(){const e=o.ship;if(!e.hardpoints.length)return`
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
    `;const t=e.hardpoints.map((n,a)=>{const i=V(e.weapons[a])?.name||"Empty";return`
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
          <span>Turn ${Z(o.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{xa(e,t)&&nav("weapon_slots")};function Wo(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=o.ship.hardpoints[t];if(!n)return`
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
    `;const r=st().map(l=>V(l)).filter(l=>!!l).map(l=>{const c=ot(t,l.id),u=V(o.ship.weapons[t])?.id===l.id?"Equipped":"Equip",p=rt(l),h=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${c?"":"muted"}">
          <p class="label">${l.size} / ${l.type}</p>
          <p class="value-inline"><strong>${l.name}</strong></p>
          <p class="muted">Damage ${l.damage} (${l.damageType}) · Acc ${Math.round(l.accuracy*100)}% · Crit ${Math.round(l.critChance*100)}% (×${l.critMultiplier}) · CD ${l.cooldown}</p>
          <p class="muted">Role: ${p.role} (${p.typeLabel}) · Vs Shields: ${p.vsShields} · Vs Hull: ${p.vsHull}${h}</p>
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
          <span>Turn ${Z(o.time.turn)}</span>
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
  `}window.leaveMining=()=>{o.miningSession=null,$.go("main")};window.drillCell=(e,t)=>{ti(o,e,t)?.fightTriggered||$.go("mining")};window.setMiningDepth=e=>{Qs(o,e),$.go("mining")};window.finalizeDrill=()=>{if(ni(o)?.fightTriggered)return;const t=o.miningSession?.lastMessage||"Extraction complete.";$.go("main",{message:t})};window.newSurvey=()=>{we(o,o.location.systemId,o.miningSession?.beltId,o.miningSession?.resourceId,{force:!0}),$.go("mining")};function qo(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function Go(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const s=e[n][a],i=["mine-cell"];s.drilled&&i.push("drilled"),s.selected&&i.push("selected");const r=["mine-cell-inner"];s.directionClass&&r.push(s.directionClass),s.depthClass&&r.push(s.depthClass),s.signal!=null&&r.push(qo(s.signal));const l=s.signal!=null?`<span class="cell-signal">${s.signal}</span>`:'<span class="cell-signal muted">·</span>';t.push(`
        <div class="${i.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${r.join(" ")}">
            <div class="cell-center">
              ${l}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function Yo(){const e=o.miningSession;if(!e)return`
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
    `;const t=Math.round(e.threat??0),n=xn(o,e.systemId),a=Array.from({length:5},(r,l)=>{const c=l+1;return`<button class="chip-btn ${c===e.depth?"active":""}" onclick="setMiningDepth(${c})">Z${c}</button>`}).join(""),s=Go(e.grid),i=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
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
          <span>Turn ${Z(o.time.turn)}</span>
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
  `}window.startNewRun=()=>Cn(!1);window.returnToMainMenu=()=>Cn(!0);function zo(){const e=o.gameOver?.summary,t=na(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],i=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],l=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],c=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],d=p=>p.map(([h,m])=>`
      <tr>
        <td>${h}</td>
        <td>${m}</td>
      </tr>
    `).join(""),u=t.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${t.map((p,h)=>`
                  <tr>
                    <td>${h+1}</td>
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
  `}const _=320,E=180;let ge=null,ye="space",Me=null,oe=1;const Uo=450,kt=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],De=[],pe={x:_*.55,y:E*.48,bobAmplitude:2,bobSpeed:1,enginePulseSpeed:4};function Vo(){for(const e of kt){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*_,y:Math.random()*E,size:Math.random()<.6?1:2})}}function Xo(){De.length=0;for(let e=0;e<4;e++)De.push({x:Math.random()*_,y:E/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function Jo(e){ge=e.getContext("2d"),ge&&(e.width=_,e.height=E,ge.imageSmoothingEnabled=!1,Vo(),Xo())}function Ko(e){e===ye&&(!Me||oe<1)||(Me=ye,ye=e,oe=0)}function Zo(e){if(!ge)return;const t=e/16.6667;oe<1&&(oe=Math.min(1,oe+e/Uo),oe>=1&&(Me=null));for(const n of De)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=_+20,n.y=E/4+Math.random()*(E/2));for(const n of kt)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=_,a.y=Math.random()*E)}function Wn(e=ge,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=Me!==null&&oe<1,a=rr(oe);n?(ze(e,Me,t,{alpha:1-a,scale:1+.05*a}),ze(e,ye,t,{alpha:a,scale:1.04-.04*a})):ze(e,ye,t),e.restore()}function ze(e,t,n,a={}){const s=a.alpha??1,i=a.scale??1;switch(e.save(),e.globalAlpha=s,i!==1&&(e.translate(_/2,E/2),e.scale(i,i),e.translate(-_/2,-E/2)),t){case"mining":ar(e);break;case"hangar":ir(e,n);break;case"ops":or(e,n);break;default:Qo(e,n),tr(e,n);break}nr(e,t),t==="combat"&&sr(e),e.restore()}function Qo(e,t){e.fillStyle="#02030b",e.fillRect(0,0,_,E),er(e,t)}function er(e,t){for(const n of De){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),s=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${s})`),a.addColorStop(.5,`rgba(60, 130, 200, ${s*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${s})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of kt){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function tr(e,t){const n=Math.sin(t*.001*pe.bobSpeed)*pe.bobAmplitude,a=pe.x,s=pe.y+n,i="#10161d",r="#272f3c",l="#3b4758",c="#c88a2b",d="#99c8ff",u="#090c12",p=110,h=26,m=a-p/2,b=s-h/2;e.fillStyle=r,e.fillRect(Math.round(m),Math.round(b),p,h),e.fillStyle=i,e.fillRect(Math.round(m),Math.round(b+h/2),p,Math.round(h/2)),e.fillStyle=l,e.fillRect(Math.round(m+4),Math.round(b-4),p-16,6);const g=m-18,w=b+4,C=22,x=h-8;e.fillStyle=r,e.fillRect(Math.round(g),Math.round(w),C,x),e.fillStyle=i,e.fillRect(Math.round(g-4),Math.round(w+4),4,x-8),e.fillStyle=u,e.fillRect(Math.round(g+8),Math.round(w+x-4),8,2),e.fillRect(Math.round(g+10),Math.round(w+x),6,1),e.fillStyle=i,e.fillRect(Math.round(m+26),Math.round(b-10),32,10),e.fillStyle=l,e.fillRect(Math.round(m+28),Math.round(b-8),28,4),e.fillStyle=i,e.fillRect(Math.round(m+38),Math.round(b+h),40,10),e.fillStyle=r,e.fillRect(Math.round(m+40),Math.round(b+h+1),36,7),e.fillStyle=i,e.fillRect(Math.round(m+70),Math.round(b+3),20,h-6);const f=34,M=18,T=m+p-f-10,y=b-8;e.fillStyle=r,e.fillRect(Math.round(T),Math.round(y),f,M),e.fillStyle=l,e.fillRect(Math.round(T+4),Math.round(y+3),f-8,6),e.fillStyle=d;for(let B=0;B<5;B++)e.fillRect(Math.round(T+6+B*4),Math.round(y+4),2,2);e.fillStyle=i,e.fillRect(Math.round(T+f-5),Math.round(y-10),2,10),e.fillRect(Math.round(T+f-9),Math.round(y-7),2,7),e.fillRect(Math.round(T+f-13),Math.round(y-6),2,6),e.fillRect(Math.round(T+4),Math.round(y-4),3,4);const R=40,k=h,D=m+p,F=b;e.fillStyle=i,e.fillRect(Math.round(D),Math.round(F),R,k);const L=6,z=10,X=F+k/2,ne=.6+.4*Math.sin(t*.0015*pe.enginePulseSpeed),J=B=>{const H=D+R-3,K=X+B;e.fillStyle=r,e.fillRect(Math.round(H-L),Math.round(K-L+1),L,L*2-2);const ue=e.createLinearGradient(H-L,K,H+30,K),Se=.8*ne;ue.addColorStop(0,`rgba(150, 255, 255, ${Se})`),ue.addColorStop(.3,`rgba(60, 220, 230, ${Se*.9})`),ue.addColorStop(1,"rgba(5, 40, 60, 0)"),e.fillStyle=ue,e.fillRect(Math.round(H),Math.round(K-3),32,6)};J(-z),J(0),J(z),e.fillStyle="#e5f3ff";for(let B=0;B<7;B++){const H=m+10+B*12,K=b-2;Math.random()>.07&&e.fillRect(Math.round(H),Math.round(K),1,2)}e.fillStyle=c,e.fillRect(Math.round(m+24),Math.round(b+4),4,2),e.fillRect(Math.round(m+52),Math.round(b+h-6),4,2),e.fillRect(Math.round(T+f-8),Math.round(y+M-4),3,2),e.fillStyle=d;for(let B=0;B<10;B++){const H=m+10+B*9,K=b+h-5+(B%2===0?0:-2);Math.random()>.1&&e.fillRect(Math.round(H),Math.round(K),1,1)}}function nr(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let s=0;s<n;s++){const i=Math.random()*_,r=Math.random()*E;e.fillRect(Math.round(i),Math.round(r),1,1)}}function ar(e){e.fillStyle="#0a0604",e.fillRect(0,0,_,E);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const s=a*(E/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(s),_,Math.ceil(E/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,_-80,E-40);const n=e.createLinearGradient(0,E/2,_,E/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,_,E)}function sr(e){const t=e.createLinearGradient(0,0,_,E);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,_,E)}function ir(e,t){e.fillStyle="#04060a",e.fillRect(0,0,_,E);const n=e.createLinearGradient(0,0,0,E);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,_,E);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(_/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,E-46,_,18),e.fillStyle="#0f1a28";for(let s=0;s<7;s++){const i=E-26+s*3;e.fillRect(0,i,_,1)}e.fillStyle="#1a2838";for(let s=0;s<_;s+=22)e.fillRect(s,E-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,_-80,10),e.fillRect(40,70,_-80,6)}function or(e,t){e.fillStyle="#021014",e.fillRect(0,0,_,E);const n=e.createRadialGradient(_/2,E*.45,10,_/2,E/2,E);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,_,E),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let d=20;d<_;d+=20)e.beginPath(),e.moveTo(d,0),e.lineTo(d,E),e.stroke();for(let d=20;d<E;d+=20)e.beginPath(),e.moveTo(0,d),e.lineTo(_,d),e.stroke();const a=t*.002%(Math.PI*2),s=_/2,i=E/2,r=80,l=e.createRadialGradient(s,i,0,s,i,r);l.addColorStop(0,"rgba(80, 220, 200, 0.18)"),l.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=l,e.beginPath(),e.moveTo(s,i),e.arc(s,i,r,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(s,i,r,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const c=[{x:s+26,y:i-18},{x:s-30,y:i+14},{x:s+6,y:i+32}];for(const d of c)e.fillRect(Math.round(d.x),Math.round(d.y),2,2)}function rr(e){return e*e*(3-2*e)}const qn=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],lr=qn.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),cr={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function nt(e){const t=e.split(".");let n=I;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function dr(e,t){const n=e.split(".");let a=I;for(let s=0;s<n.length-1;s++){const i=n[s];a[i]=a[i]??{},a=a[i]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{de(e)};window.devMining=()=>{we(o,o.location.systemId),$.go("mining")};function ur(){return qn.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(nt(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${nt(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function le(){const e=document.getElementById("app");if(!e)return;const t=cr[$.current]??"space";Ko(t);let n="";if(Wn(null,performance.now()),$.current==="mining"&&!o.miningSession&&o.location?.systemId){const i=He(),r=new Set(i?.tags??[]);(r.has("mining_belt")||r.has("mining"))&&we(o,o.location.systemId)}switch($.current){case"main":n=Oi();break;case"travel":n=Yi();break;case"market":n=Qi($.params);break;case"contracts":n=lo();break;case"ship":n=vo();break;case"event":n=Mo($.params);break;case"combat":n=xo($.params);break;case"weapon_slots":n=Oo();break;case"weapon_select":n=Wo($.params);break;case"shipyard":n=To();break;case"ship_select":n=Po();break;case"mining":n=Yo();break;case"gameover":n=zo();break}const a=$.current!=="main"&&$.current!=="event"&&$.current!=="combat"&&$.current!=="mining"?`
        <div class="menu-back">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
        </div>
      `:"",s=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${ur()}
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
  `;e.innerHTML=`${a}${n}${s}`,pr()}let me=!1,Ut=!1;function pr(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),l=document.getElementById("devGodMode"),c=document.getElementById("devResetMiningSession"),d=document.getElementById("devSpikeThreat"),u=document.getElementById("devLogMiningGrid"),p=document.getElementById("navTravel"),h=document.getElementById("navMarket"),m=document.getElementById("navShip"),b=document.getElementById("devPersistEvents"),g=document.getElementById("devClearEvents"),w=document.getElementById("devHardReset"),C=t?.querySelectorAll("input[data-dev-path]"),x=document.getElementById("devMiningStatus"),f=()=>{t&&t.classList.toggle("hidden")},M=y=>{const R=lr[y],k=document.getElementById(`devValue-${y.replace(/\./g,"__")}`);R&&k&&(k.textContent=R.formatter(nt(y)))};C?.forEach(y=>{const R=()=>{const k=y.dataset.devPath;if(!k)return;const D=Number(y.value);dr(k,D),Te(),M(k)};y.addEventListener("input",R)});const T=()=>{if(!x)return;const y=o.miningSession;if(!y){x.textContent="No active mining session.";return}const R=(y.threat??0).toFixed(1),k=y.depth??0;x.innerHTML=`
      <div>System: ${y.systemId}</div>
      <div>Belt: ${y.beltName??y.beltId??"—"}</div>
      <div>Depth: Z${k}</div>
      <div>Threat: ${R}%</div>
      <div>Exploration: ${(y.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${y.drillsUsed??0}</div>
      <div>Selected: ${y.selectedRow!=null?`X${y.selectedCol+1} Y${y.selectedRow+1}`:"none"}</div>
    `};T(),e?.addEventListener("click",f),n?.addEventListener("click",()=>t?.classList.add("hidden")),p?.addEventListener("click",()=>window.nav?.("travel")),h?.addEventListener("click",()=>window.nav?.("market")),m?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{o.player.credits+=1e3,t?.classList.add("hidden"),le()}),r?.addEventListener("click",()=>{const y=o.ship.cargo||{};y.aurite_ore=(y.aurite_ore||0)+20,o.ship.cargo=y,t?.classList.add("hidden"),le()}),l?.addEventListener("click",()=>{me=!me,o.godMode=me,me&&(o.ship.hp=o.ship.maxHp,o.ship.shields=o.ship.maxShields),alert(`God Mode: ${me?"On":"Off"}`)}),c?.addEventListener("click",()=>{we(o,o.location.systemId,o.miningSession?.beltId),t?.classList.add("hidden"),le(),T()}),d?.addEventListener("click",()=>{const y=o.miningSession;y&&(y.threat=95,y.currentPirateChance=.95,t?.classList.add("hidden"),le(),T())}),u?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",o.miningSession),console.groupEnd()}),b?.addEventListener("click",()=>{ys(),alert("Events cached locally. Future loads will honor this list.")}),g?.addEventListener("click",()=>{bs(),alert("Event cache cleared. Future loads use the bundled data.")}),w?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),Ut||(document.addEventListener("keydown",y=>{y.key==="`"&&f(),y.key==="Escape"&&$.current!=="main"&&window.nav?.("main")}),Ut=!0)}let S=null,N=null,Gn=null,Vt=performance.now();async function mr(){const e="/space/".replace(/\/+$/,"/"),t=k=>`${e}content/${k}`,[n,a,s,i,r,l,c,d,u]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!i.ok)throw new Error(`Failed to load commodities.json: ${i.status}`);if(!l.ok)throw new Error(`Failed to load enemies.json: ${l.status}`);if(!c.ok)throw new Error(`Failed to load events.json: ${c.status}`);if(!d.ok)throw new Error(`Failed to load loot_tables.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load missions.json: ${u.status}`);const p=await n.json();for(const k of p){const D=new Set(k.tags??[]);k.region&&D.add(k.region),k.security==="high"&&D.add("secure"),k.security==="low"&&D.add("lawless"),k.marketProfile?.blackMarket&&D.add("black_market");const F=k.economyTags??[];F.includes("mining")&&D.add("mining"),F.includes("salvage")&&D.add("salvage"),F.includes("checkpoint")&&D.add("checkpoint"),k.tags=Array.from(D)}const h=await a.json(),m=await s.json(),b=await i.json(),g=await r.json(),w=await l.json(),C=await fetch(t("bases.json"));if(!C.ok)throw new Error(`Failed to load bases.json: ${C.status}`);const x=await C.json(),f={};for(const k of p)f[k.id]=k;const M=await c.json();ps(M);const T=await d.json();xs(T);const y=await u.json();Da(y);const R={};for(const k of x)R[k.id]=k;return{systems:p,systemsById:f,bases:x,basesById:R,ships:h,components:m,commodities:b,weapons:g,enemies:w,events:M,lootTables:T,missions:y}}function hr(){N||(N=document.createElement("canvas"),N.id="pixel-background",N.style.position="fixed",N.style.top="0",N.style.left="0",N.style.width="100vw",N.style.height="calc(100vw * 9 / 16)",N.style.maxHeight="100vh",N.style.maxWidth="calc(100vh * 16 / 9)",N.style.objectFit="contain",N.style.zIndex="0",N.style.pointerEvents="none",N.style.background="#02030b",N.style.imageRendering="pixelated",N.style.display="block",document.body.insertBefore(N,document.body.firstChild||null),Gn=N.getContext("2d"),Jo(N))}function fr(){const e=t=>{const n=t-Vt;Vt=t,Zo(n),Wn(Gn,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function gr(){S=await mr(),hr();const e=_a(S.systems),t=Kt();t.map=e,Zt(t),pn(e),en();const n=Jn();if(n){const i=o.ship.hardpoints.length,r=[];for(let l=0;l<i;l++)r.push(n.weapons[l]??null);o.ship.weapons=r,o.inventory.weapons=n.inventory}it();const a=$.go.bind($);$.go=(i,r)=>{a(i,r),le()};const s=$.setZoom.bind($);$.setZoom=i=>{$.zoom!==i&&(s(i),le())},window.nav=(i,r={})=>{$.go(i,r)},$.current=o.player.hasChosenStarter?"main":"ship_select",le(),fr()}function Q(e){return S?S.systemsById[e]??null:null}function yr(e){return S?S.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{gr()});
