(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Us=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,passiveSlots:1,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,passiveSlots:1,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:4,passiveSlots:1,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,passiveSlots:1,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,passiveSlots:1,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,passiveSlots:1,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,passiveSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,passiveSlots:2,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,passiveSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,passiveSlots:2,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,passiveSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],$n=Us,te=$n.find(e=>e.starter)??$n[0],Ws=te?.hardpoints.length??0,Gs={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"},Vs={balanced:{id:"balanced",label:"Balanced",description:"Steady posture that treats every attack equally while keeping systems synced.",damageTakenMultipliers:{},evasionBonus:0},brace:{id:"brace",label:"Brace",description:"Tighten defenses—absorbs kinetic/explosive hits but lets in energy fire.",damageTakenMultipliers:{kinetic:.7,explosive:.7,energy:1.1,disruptive:1.1},evasionBonus:.05},evasive:{id:"evasive",label:"Evasive",description:"Skinny, agile frame—decreases all damage via maneuvering.",damageTakenMultipliers:{kinetic:.85,explosive:.85,energy:.85,disruptive:.85},evasionBonus:.15},overcharge:{id:"overcharge",label:"Overcharge",description:"Pour power to shields and weapons but disruptives tear through you.",damageTakenMultipliers:{disruptive:1.25,kinetic:.95,explosive:.95,energy:.9},evasionBonus:-.05,shieldBonus:15}};function We(e){return Vs[e]}function sa(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0,xpEarned:0}}let l;function me(){if(!l)throw new Error("Game state not initialized");return l.inventory||(l.inventory={weapons:[],passives:[]}),l.inventory.weapons||(l.inventory.weapons=[]),l.inventory.passives||(l.inventory.passives=[]),l.inventory}const ia="cosmo_weapon_loadout";function Ys(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(ia);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],passives:Array.isArray(t.passives)?t.passives:[],inventoryWeapons:Array.isArray(t.inventoryWeapons)?t.inventoryWeapons:[],inventoryPassives:Array.isArray(t.inventoryPassives)?t.inventoryPassives:[]}}catch{return null}}function $e(){if(typeof window>"u"||!window.localStorage||!l)return;const e=me(),t={weapons:l.ship.weapons,passives:l.ship.passives,inventoryWeapons:e.weapons,inventoryPassives:e.passives};window.localStorage.setItem(ia,JSON.stringify(t))}const oa="cosmo_xp_state";function Xs(){if(typeof window>"u"||!window.localStorage||!l)return;const e={xp:l.player.xp,xpTracks:l.player.xpTracks??{},perksUnlocked:l.player.perksUnlocked??[]};window.localStorage.setItem(oa,JSON.stringify(e))}function Js(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(oa);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function ra(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1,xp:0,xpTracks:{mining:0},perksUnlocked:[]},ship:{templateId:te?.id??"none",name:te?.name??"Undefined Hull",hp:te?.hull??0,maxHp:te?.hull??0,shields:te?.shields??0,maxShields:te?.shields??0,fuel:te?.fuel??0,maxFuel:te?.fuel??0,cargoCapacity:te?.cargo??0,cargo:{},modules:[],weapons:te?.hardpoints.map(e=>Gs[`${e.size}:${e.type}`]??null)??Array(Ws).fill(null),passives:[],weaponPower:12,evasion:5,maneuverRating:te?.maneuverRating??0,components:[],hardpoints:te?.hardpoints.map(e=>({...e}))??[],passive:te?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,lastMiningSystemId:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"],passives:[]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},tradeStrategy:{taxEvasion:0,smuggling:0,bribery:0},intel:{systems:[]},runStats:sa(),gameOver:{active:!1,reason:null},map:null,difficulty:{day:1,playerPowerScore:1,tension:0}}}function ca(e){l=e}const la="space-dev-tune",Q={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1.7,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:.85,miningPayoutMultiplier:.75,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.6,enemyDamageMultiplier:.65,enemyAccuracyMultiplier:.9,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1.4,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:70,nonPirateEventWeight:1,showEncounterDebug:0}};let O={...Q};function Ks(e){return{...Q.combat,...e}}function kt(e){return{...e,enemyHpMultiplier:Math.min(Q.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??Q.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(Q.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??Q.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(Q.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??Q.combat.enemyAccuracyMultiplier))}}function da(){if(typeof window>"u"||!window.localStorage){O={...Q};return}const e=window.localStorage.getItem(la);if(!e){O={...Q,combat:kt(Q.combat)},at();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=Ks({...t.combat,...n});O={...Q,...t,combat:kt(a)},at()}catch{O={...Q,combat:kt(Q.combat)},at()}}function at(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(la,JSON.stringify(O))}function ua(e){const t=O.progressionSpeedMultiplier??1;return e*t}function Z(){return O.combat??Q.combat}function Zs(){return l.ship.passive?.effects??{}}const pa="cosmo_run_high_scores",ma=5;function Qs(){return l?{...l.runStats,commodityVolumes:{...l.runStats.commodityVolumes}}:sa()}function ei(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function ha(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(pa);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,ma):[]}catch{return[]}}function ti(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(pa,JSON.stringify(e.slice(0,ma)))}function ni(){return ha()}function ai(e){const t=ha();t.push(e),t.sort((n,a)=>a.score-n.score),ti(t)}function Te(e){if(!l||e<=0)return;l.runStats.creditsEarnedTotal+=e;const t=l.player.credits;t>l.runStats.highestNetWorth&&(l.runStats.highestNetWorth=t)}function si(e,t,n){if(!l)return;l.runStats.tradeProfitTotal+=Math.max(0,n);const a=l.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=l.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(l.runStats.mostTradedCommodityId=e)}function ii(e){!l||e<=0||(l.runStats.contractPayoutTotal+=e)}function oi(){l&&(l.runStats.contractsCompleted+=1)}function _e(e){!l||e<=0||(l.runStats.damageDealtTotal+=e)}function ri(e){!l||e<=0||(l.runStats.damageTakenTotal+=e)}function ci(){l&&(l.runStats.fightsSurvived+=1)}function li(){l&&(l.runStats.shipsDestroyed+=1)}function di(e,t){!l||e<=0||(l.runStats.miningRuns+=1,l.runStats.oreMinedTotal+=e,t&&(l.runStats.rareFinds+=1))}function ui(e,t="mining"){if(!l||e<=0)return;l.player.xp+=e,l.runStats.xpEarned+=e;const n=l.player.xpTracks||{};n[t]=(n[t]??0)+e,l.player.xpTracks=n}function pi(){l&&(l.runStats.jumpsMade+=1,l.runStats.systemsVisited+=1)}function mi(e){l&&(l.runStats.daysSurvived=Math.max(l.runStats.daysSurvived,e))}const C={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}},Rt=.4;function hi(){return S?S.components:[]}function Ee(e){return S?S.components.find(t=>t.id===e)??null:null}function fa(){if(!S)return[];const e=l.ship.components;return S.components.filter(t=>e.includes(t.id))}function fi(){if(!S)return{};const e={},t=[...fa(),...ga()];for(const n of t)if(n.effects)for(const[a,s]of Object.entries(n.effects))typeof s=="number"&&(e[a]=(e[a]??1)*s);return e}function gi(){return S?S.components.filter(e=>e.slot==="passive"):[]}function ga(){return S?S.components.filter(e=>l.ship.passives.includes(e.id)):[]}function yi(){return[...me().passives]}function vi(e){if(!S)return!1;const t=Ee(e);if(!t||t.slot!=="passive")return console.warn(`Passive component ${e} not found.`),!1;if(l.player.credits<t.cost)return console.warn("Not enough credits to buy this passive system."),!1;if(l.ship.passives.includes(e))return console.warn("Passive already installed."),!1;const n=me();return n.passives.includes(e)?(console.warn("Passive already purchased."),!1):(l.player.credits-=t.cost,n.passives.push(e),$e(),!0)}function bi(e){if(!S)return!1;const t=Ee(e);if(!t||t.slot!=="passive")return console.warn(`Passive component ${e} not found.`),!1;if(l.ship.passives.includes(e))return console.warn("Passive already installed."),!1;const n=me(),a=n.passives.indexOf(e);if(a===-1)return console.warn("Passive not owned."),!1;const i=S.ships.find(o=>o.id===l.ship.templateId)?.passiveSlots??0;return l.ship.passives.length>=i?(console.warn("No free passive slots."),!1):(n.passives.splice(a,1),l.ship.passives.push(e),$e(),!0)}function Mi(e){if(!S)return!1;const t=Ee(e);if(!t)return!1;const n=me(),a=l.ship.passives.indexOf(e),s=n.passives.indexOf(e);if(a===-1&&s===-1)return!1;a!==-1?l.ship.passives.splice(a,1):n.passives.splice(s,1);const i=Math.floor((t.cost??0)*Rt);return l.player.credits+=i,$e(),!0}function xi(e){if(!S)return!1;const t=S.components.find(n=>n.id===e);return t?l.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):l.ship.components.includes(e)?(console.warn("Component already installed."),!1):(l.player.credits-=t.cost,l.ship.components.push(e),$i(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function $i(e){const t=l.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function ne(){const e=Zs(),t=fi(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const s of n){const i=typeof e[s]=="number"?e[s]:1,o=typeof t[s]=="number"?t[s]:1;a[s]=i*o}return a}function ya(){const e=ne(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,Z().globalIncomeMultiplier??1);return t*n}const wi=-100,ki=100;function Si(e,t){const n=l.reputation[e]||0,a=Ci(n+t);return l.reputation[e]=a,a}function va(e){for(const[t,n]of Object.entries(e))Si(t,n)}function _i(e){return l.reputation[e]||0}function Ci(e){return Math.max(wi,Math.min(ki,e))}const wn={damageMultiplier:1.25,accuracyMultiplier:.8},Ti=.4,Ne={kinetic:{vsShields:.8,vsHull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},energy:{vsShields:1.2,vsHull:.8,description:"Energy beams focus on shields and finesse hulls."},explosive:{vsShields:1,vsHull:1.3,description:"Explosives blast both layers but leave hull plating the most damaged."},disruptive:{vsShields:1.3,vsHull:1,description:"Disruptive rounds disable shields aggressively while nicking hull."}},Ei=Object.keys(Ne).map(e=>({type:e,shieldMultiplier:Ne[e].vsShields,hullMultiplier:Ne[e].vsHull,description:Ne[e].description})),Pt=Ne;function Ri(){return S?S.weapons:[]}function Ht(){return me()}function ut(){return[...Ht().weapons]}function Ot(){if(!S)return;const e=ut();if(!e.length)return;const t=l.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(o=>qt(a,o));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function qt(e,t){const n=l.ship,a=S?.weapons.find(i=>i.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function Pi(e,t){return qt(e,t)?(l.ship.weapons[e]=t,$e(),!0):!1}function K(e){return!e||!S?null:S.weapons.find(t=>t.id===e)??null}function Ii(e){const t=K(e);return!t||l.player.credits<t.price?!1:(Ht().weapons.push(e),l.player.credits-=t.price,$e(),!0)}const ba=.4;function Bi(e){const t=K(e);if(!t)return!1;const n=Ht(),a=l.ship.weapons.findIndex(o=>o===e),s=n.weapons.indexOf(e);if(a===-1&&s===-1)return!1;a!==-1&&(l.ship.weapons[a]=null),s!==-1&&n.weapons.splice(s,1);const i=Math.floor((t.price??0)*ba);return l.player.credits+=i,$e(),!0}function Ma(e,t={}){const n=e.tags||[];let a=e.accuracy*(t.accuracyMultiplier??1)||0;if(n.includes("accurate")&&(a+=.05),a=Math.min(.95,Math.max(0,a)),Math.random()>a)return 0;let s=e.damage;return Math.random()<e.critChance&&(s*=e.critMultiplier),s*=t.damageMultiplier??1,Math.max(0,Math.round(s))}const Di={kinetic:"Kinetic",energy:"Energy",explosive:"Explosive",disruptive:"Disruptive"},Ai={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function kn(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const Sn={shields:"Shield-breaker",hull:"Hull buster"};function zt(e){const t=e.damageType,n=Pt[t]??Pt.kinetic,a=kn(n.vsShields),s=kn(n.vsHull);let i="Balanced";a==="Strong"&&s==="Weak"?i=Sn.shields:s==="Strong"&&a==="Weak"?i=Sn.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const o=(e.tags||[]).map(d=>Ai[d]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:Di[t]??t,tagNotes:o}}let xa=null;function $a(e){xa=e}function pt(){return xa}function Ni(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function st(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function Li(e){const t=e.map(i=>({id:i.id,name:i.name,x:i.coords?.x??0,y:i.coords?.y??0,tags:i.tags??[]})),n=[],a=new Set;for(const i of e)for(const o of i.neighbors??[]){const d=st(i.id,o.id);a.has(d)||(a.add(d),n.push({from:i.id,to:o.id,type:Ni(o.laneType),distance:Math.max(1,Math.round(o.distance??1))}))}const s={nodes:t,lanes:n};return $a(s),s}function Ut(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function Fi(e,t,n){const a=n==="local"?1:3,s=new Map([[t,0]]);let i=[t];for(let o=1;o<=a;o++){const d=[];for(const u of i)for(const p of Ut(e,u))s.has(p)||(s.set(p,o),d.push(p));if(!d.length)break;i=d}return s}function Wt(e,t,n){if(t===n)return[t];const a=[t],s=new Set([t]),i=new Map;for(;a.length;){const u=a.shift();for(const p of Ut(e,u))if(!s.has(p)&&(s.add(p),i.set(p,u),a.push(p),p===n))break}if(!s.has(n))return[];const o=[];let d=n;for(;d;)o.push(d),d=i.get(d);return o.reverse()}function ji(e,t,n){const a=Wt(e,t,n);return a.length?Math.max(0,a.length-1):null}const Hi={mining:{id:"mining",displayName:"Mining XP",description:"Progression earned from mining tiles, going deeper, and surviving hazards.",type:"activity",levelThresholds:[0,100,300,600,1e3,1600,2300],maxLevel:20,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"extraction_t1_efficient_strikes"}],4:[{type:"perkUnlock",perkId:"extraction_t2_vein_whisperer"}],6:[{type:"perkUnlock",perkId:"extraction_t3_deep_delver"}],10:[{type:"perkUnlock",perkId:"risk_t5_chain_momentum"}],14:[{type:"perkUnlock",perkId:"economy_t4_hazard_insight"}]}},combat:{id:"combat",displayName:"Combat XP",description:"Progression earned from destroying enemies, dodging, and using combos.",type:"activity",levelThresholds:[0,120,280,520,900,1400],maxLevel:20,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"precision_t1_targeting_assist"}],3:[{type:"perkUnlock",perkId:"survival_t1_hull_plating"}],5:[{type:"perkUnlock",perkId:"precision_t2_headshot_focus"}],7:[{type:"perkUnlock",perkId:"survival_t2_defensive_burst"}],12:[{type:"perkUnlock",perkId:"precision_t3_backline_breach"}],16:[{type:"perkUnlock",perkId:"survival_t3_last_stand_matrix"}]}},travel:{id:"travel",displayName:"Travel XP",description:"Progression from discovering systems, long jumps, and risky routes.",type:"activity",levelThresholds:[0,80,200,420,750,1100],maxLevel:15,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"control_t1_quick_cycle"}],4:[{type:"perkUnlock",perkId:"control_t2_route_insight"}],7:[{type:"perkUnlock",perkId:"control_t3_hazard_mapping"}]}},faction_civilian:{id:"faction_civilian",displayName:"Civilian Reputation",description:"Reputation with civilian factions.",type:"faction",levelThresholds:[0,50,150,300,600,1e3],maxLevel:10,rewardsByLevel:{2:[{type:"discount",scope:"markets_civilian",value:.05}],4:[{type:"perkUnlock",perkId:"diplomacy_t2_courier_favor"}],6:[{type:"specialMission",missionId:"civilian_aid_convoy"}]}},faction_pirate:{id:"faction_pirate",displayName:"Pirate Reputation",description:"Reputation with pirate and syndicate networks.",type:"faction",levelThresholds:[0,60,180,360,720],maxLevel:10,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"diplomacy_t1_rift_graffiti"}],4:[{type:"discount",scope:"black_market",value:.08}],6:[{type:"perkUnlock",perkId:"diplomacy_t3_shadow_outreach"}]}},ship_interceptor:{id:"ship_interceptor",displayName:"Interceptor Mastery",description:"Ship-specific XP earned while piloting the interceptor.",type:"ship",levelThresholds:[0,50,150,300,600],maxLevel:10,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"ship",stat:"evadeBase",operation:"addPercent",value:.05}]}],4:[{type:"modifierUnlock",id:"interceptor_mobility_combo_boost",description:"+10% combo gain from mobility actions."}],6:[{type:"specialAbilityUnlock",abilityId:"phantom_strike",description:"Once per encounter, perform a guaranteed backline strike after a dodge."}]}},ship_hauler:{id:"ship_hauler",displayName:"Hauler Mastery",description:"Progression while piloting large cargo haulers.",type:"ship",levelThresholds:[0,40,120,260,500],maxLevel:8,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"ship",stat:"cargoCapacity",operation:"addFlat",value:15}]}],4:[{type:"perkUnlock",perkId:"ship_hauler_hazard_steadiness"}],6:[{type:"specialAbilityUnlock",abilityId:"emergency_shield_pulse",description:"Deploy a pulse that restores shields equal to 15% of max."}]}},ship_miner:{id:"ship_miner",displayName:"Colonial Miner Mastery",description:"XP gained while using dedicated mining platforms.",type:"ship",levelThresholds:[0,60,180,360,720],maxLevel:10,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"mining",stat:"signalRadius",operation:"addPercent",value:.1}]}],5:[{type:"modifierUnlock",id:"deep_miner_cluster_focus",description:"Mining shifts reveal two adjacent cells when drilling."}],8:[{type:"specialAbilityUnlock",abilityId:"resonance_burst",description:"Emit a resonance burst that rewards guaranteed uncommon loot next drill."}]}}},Oi={survival_t1_hull_plating:{id:"survival_t1_hull_plating",branch:"survival",tier:1,displayName:"Hull Plating I",description:"+5% hull integrity and -10% mining hazard damage.",requires:[],effects:[{target:"ship",stat:"hullMaxMultiplier",operation:"mul",value:1.05},{target:"mining",stat:"hazardDamageMultiplier",operation:"mul",value:.9}]},precision_t1_targeting_assist:{id:"precision_t1_targeting_assist",branch:"precision",tier:1,displayName:"Targeting Assist",description:"+5% weapon accuracy and +10% accuracy vs backline.",requires:[],effects:[{target:"combat",stat:"accuracyBase",operation:"addPercent",value:.05},{target:"combat",stat:"accuracyBacklineBonus",operation:"addPercent",value:.1}]},extraction_t1_efficient_strikes:{id:"extraction_t1_efficient_strikes",branch:"extraction",tier:1,displayName:"Efficient Strikes",description:"+10% ore yield, -5% drill wear.",requires:[],effects:[{target:"mining",stat:"oreYieldMultiplier",operation:"mul",value:1.1},{target:"mining",stat:"drillWearMultiplier",operation:"mul",value:.95}]},extraction_t2_vein_whisperer:{id:"extraction_t2_vein_whisperer",branch:"extraction",tier:2,displayName:"Vein Whisperer",description:"+10% signal readings and +5% combo gain on surveyed tiles.",requires:["extraction_t1_efficient_strikes"],effects:[{target:"mining",stat:"signalBonus",operation:"addPercent",value:.1},{target:"mining",stat:"comboGainMultiplier",operation:"mul",value:1.05}]},extraction_t3_deep_delver:{id:"extraction_t3_deep_delver",branch:"extraction",tier:3,displayName:"Deep Delver",description:"+8% rare yield and +8% hazard control from Risk Chain perks.",requires:["extraction_t2_vein_whisperer"],effects:[{target:"mining",stat:"rareYieldMultiplier",operation:"mul",value:1.08},{target:"mining",stat:"hazardControlBonus",operation:"addPercent",value:.08}]},precision_t2_headshot_focus:{id:"precision_t2_headshot_focus",branch:"precision",tier:2,displayName:"Headshot Focus",description:"+5% crit chance and +8% backline accuracy.",requires:["precision_t1_targeting_assist"],effects:[{target:"combat",stat:"critChance",operation:"addPercent",value:.05},{target:"combat",stat:"accuracyBacklineBonus",operation:"addPercent",value:.08}]},survival_t2_defensive_burst:{id:"survival_t2_defensive_burst",branch:"survival",tier:2,displayName:"Defensive Burst",description:"Shield hits trigger 12% faster regen for 2 seconds.",requires:["survival_t1_hull_plating"],effects:[{target:"combat",stat:"shieldRegenTriggerBonus",operation:"addPercent",value:.12}]},precision_t3_backline_breach:{id:"precision_t3_backline_breach",branch:"precision",tier:3,displayName:"Backline Breach",description:"Backline strikes ignore 10% of enemy evasion.",requires:["precision_t2_headshot_focus"],effects:[{target:"combat",stat:"backlineAccuracyMultiplier",operation:"mul",value:1.1}]},survival_t3_last_stand_matrix:{id:"survival_t3_last_stand_matrix",branch:"survival",tier:3,displayName:"Last Stand Matrix",description:"When hull drops below 30%, damage taken is reduced by 15%.",requires:["survival_t2_defensive_burst"],effects:[{target:"combat",stat:"lowHullDamageMultiplier",operation:"mul",value:.85}]},control_t1_quick_cycle:{id:"control_t1_quick_cycle",branch:"control",tier:1,displayName:"Quick Cycle",description:"Using different action categories in sequence builds 20% more combo.",requires:[],effects:[{target:"combo",stat:"variationGainMultiplier",operation:"mul",value:1.2}]},control_t2_route_insight:{id:"control_t2_route_insight",branch:"control",tier:2,displayName:"Route Insight",description:"Long-distance jumps refresh 25% faster and reduce hazard chatter.",requires:["control_t1_quick_cycle"],effects:[{target:"travel",stat:"jumpCooldownMultiplier",operation:"mul",value:.75},{target:"travel",stat:"hazardDetectionBonus",operation:"addPercent",value:.08}]},control_t3_hazard_mapping:{id:"control_t3_hazard_mapping",branch:"control",tier:3,displayName:"Hazard Mapping",description:"Gain a partial hazard map for the next jump and +5% fuel efficiency in wildspace.",requires:["control_t2_route_insight"],effects:[{target:"travel",stat:"nextJumpScan",operation:"add",value:1},{target:"travel",stat:"fuelCostMultiplier",operation:"mul",value:.95}]},diplomacy_t1_rift_graffiti:{id:"diplomacy_t1_rift_graffiti",branch:"diplomacy",tier:1,displayName:"Rift Graffiti",description:"+3% intel on pirate routes and first contact goodwill.",requires:[],effects:[{target:"intel",stat:"pirateRouteDetection",operation:"addPercent",value:.03},{target:"faction_pirate",stat:"reachBonus",operation:"addPercent",value:.05}]},diplomacy_t2_courier_favor:{id:"diplomacy_t2_courier_favor",branch:"diplomacy",tier:2,displayName:"Courier Favor",description:"Civilian markets grant +4% trade intel and reduce smuggling detection by 5%.",requires:[],effects:[{target:"economy",stat:"intelGainMultiplier",operation:"addPercent",value:.04},{target:"smuggling",stat:"detectionBaseline",operation:"mul",value:.95}]},diplomacy_t3_shadow_outreach:{id:"diplomacy_t3_shadow_outreach",branch:"diplomacy",tier:3,displayName:"Shadow Outreach",description:"Pirate contacts share unique trade routes and trigger a weekly black market mission.",requires:["diplomacy_t1_rift_graffiti"],effects:[{target:"events",stat:"pirateMissionWeight",operation:"addPercent",value:.05}]},risk_t5_chain_momentum:{id:"risk_t5_chain_momentum",branch:"risk",tier:5,displayName:"Risk Chain Momentum",description:"Maintain a higher Risk Chain level for two extra turns, unlocking bigger rewards.",requires:["extraction_t3_deep_delver"],effects:[{target:"mining",stat:"riskChainDecayDelay",operation:"add",value:2}]},economy_t4_hazard_insight:{id:"economy_t4_hazard_insight",branch:"economy",tier:4,displayName:"Hazard Insight",description:"Hazard readings grant +10% payout on rare minerals during extraction.",requires:["extraction_t2_vein_whisperer"],effects:[{target:"mining",stat:"rareYieldMultiplier",operation:"mul",value:1.1}]},ship_hauler_hazard_steadiness:{id:"ship_hauler_hazard_steadiness",branch:"ship",tier:1,displayName:"Hazard Steadiness",description:"Hauler frame resists hazard damage by 15%.",requires:[],effects:[{target:"ship",stat:"hazardDamageMultiplier",operation:"mul",value:.85}]}},Gt={xpTracks:Hi,perks:Oi},wa=Gt,ka=Gt.xpTracks;function qi(e){return ka[e]}function zi(e,t=0){const n=qi(e);if(!n)return null;const a=n.levelThresholds??[];let s=0;for(let m=0;m<a.length&&t>=a[m];m+=1)s=m;const i=a.length?Math.min(s,a.length-1):0,o=a[i]??0,d=i+1<a.length?a[i+1]:null,u=Math.max(0,t-o),p=d!==null?Math.max(0,d-o):null;return{track:n,level:Math.min(i,n.maxLevel),xpIntoLevel:u,xpNeededForNextLevel:p,nextThreshold:d,currentThreshold:o,xp:t}}function Sa(e={}){return Object.values(ka).map(t=>zi(t.id,Math.max(0,e[t.id]??0))).filter(t=>t!==null)}const _a=wa.perks??{},Ca=wa.xpTracks??{};function Ta(){return l.player.perksUnlocked||(l.player.perksUnlocked=[]),new Set(l.player.perksUnlocked)}function Ui(e){return Array.from(e)}function Wi(e){return _a[e]??null}function Gi(e){const t=(e??"").toLowerCase();return/pirate|raider|rift|syndicate/.test(t)?"faction_pirate":"faction_civilian"}function Vi(){const e=l.ship?.templateId;if(!e)return null;const t=`ship_${e}`;return Ca[t]?t:null}function Yi(){return!l||!l.player?[]:l.player.perksUnlocked??[]}function de(e){return Yi().includes(e)}function Xi(){const e={};for(const[t,n]of Object.entries(Ca)){const a=n.rewardsByLevel??{};for(const[s,i]of Object.entries(a)){const o=Number(s);if(!Number.isNaN(o))for(const d of i)d?.type==="perkUnlock"&&d.perkId&&(d.perkId in e||(e[d.perkId]={trackId:t,level:o}))}}return e}const Ji=Xi();function Ki(){const e=Ta(),t={};for(const[n,a]of Object.entries(_a)){const s={id:n,displayName:a.displayName,description:a.description,branch:a.branch??"general",tier:a.tier??1,unlocked:e.has(n),requires:a.requires??[],source:Ji[n],effectTargets:Array.from(new Set((a.effects??[]).map(i=>i.target)))};t[s.branch]||(t[s.branch]=[]),t[s.branch].push(s)}for(const n of Object.keys(t))t[n].sort((a,s)=>a.tier-s.tier||a.displayName.localeCompare(s.displayName));return t}function Zi(){if(!l||!l.player)return[];const e=Sa(l.player.xpTracks??{}),t=Ta(),n=[];for(const s of e){const i=s.track.rewardsByLevel??{};for(const o of Object.keys(i)){const d=Number(o);if(Number.isNaN(d)||d>s.level)continue;const u=i[o]??[];for(const p of u){if(p?.type!=="perkUnlock"||!p.perkId)continue;const m=p.perkId;if(t.has(m))continue;const h=Wi(m);!h||(h.requires??[]).some(v=>!t.has(v))||(t.add(m),n.push(m))}}}const a=Ui(t);return l.player.perksUnlocked=a,n.length>0&&l.notifications.push(`Perks unlocked: ${n.join(", ")}.`),Xs(),n}function pe(e,t="mining"){return l?(ui(e,t),Zi()):[]}function Qi(e,t){if(!l)return[];if(e<=0)return[];const n=Gi(t);return pe(e,n)}function eo(e){if(!l)return[];const t=Vi();return t?pe(e,t):[]}let Vt=[];function to(e){Vt=e}function no(e){return Vt.find(t=>t.id===e)}function ao(){const e=new Set(l.contracts.filter(t=>t.status==="active").map(t=>t.id));return Vt.filter(t=>!e.has(t.id))}function ge(){return l.contracts.filter(e=>e.status==="active")}function so(e){const t=e.requirements,n=s=>s?`<strong>${ee(s)?.name||s}</strong>`:"",a=[];if(t?.travel?.systemId){const s=n(t.travel.systemId);a.push(`Travel to ${s}`)}if(t?.deliver?.commodityId){const s=t.deliver.quantity||0,i=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${s} ${t.deliver.commodityId}${i}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function io(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function Yt(e){const t=no(e);if(!t)return{success:!1,reason:"Unknown mission"};if(l.contracts.some(s=>s.id===e&&s.status==="active"))return{success:!1,reason:"Mission already active"};const n=yo(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:l.time.turn,progress:{}};return l.contracts.push(a),n&&vo(a.id,n),{success:!0}}function oo(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,O.contractPayoutMultiplier??1)),s=ya(),i=Math.max(0,ne().incomeMultiplier??1),o=Math.max(0,Math.round(n.credits*a*s*i));l.player.credits+=o,Te(o),ii(o),l.notifications.push(`Mission reward: +${o} credits.`)}if(n.rep){va(n.rep);const a=Object.entries(n.rep).map(([s,i])=>`${s} ${i>=0?"+":""}${i}`).join(", ");a&&l.notifications.push(`Mission reward: Reputation updated (${a}).`);for(const[s,i]of Object.entries(n.rep))i>0&&Qi(Math.max(2,Math.round(i*8)),s)}if(n.weapon){me().weapons.push(n.weapon);const s=K(n.weapon)?.name??n.weapon;l.notifications.push(`Rewarded weapon: ${s}.`)}}function ro(){ge().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,O.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));l.time.turn-e.acceptedTurn>=a&&co(e.id)}})}function co(e){const t=l.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",mt(`Mission failed: ${t.name}`),Xt(t.id))}function lo(e){const t=l.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",mt(`Mission abandoned: ${t.name}`),Xt(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function uo(e){ge().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,Oe(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),Oe(t)}})}function po(e,t,n){ge().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const i=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=i+t,Oe(a)})}function mo(e){ge().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,Oe(t))})}function ho(e,t){uo(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const i of ge()){const o=i.status,d=i.requirements?.deliver;if(!d||!d.commodityId||(d.systemId??t)!==t||(a+=1,!fo(n,d)))continue;d.retain||go(n,d),i.progress=i.progress||{};const p=i.progress.deliveredQuantity||0;i.progress.deliveredQuantity=p+(d.quantity||1),Oe(i),o!=="completed"&&i.status==="completed"&&s.push(i.name)}if(s.length){const i=`Contracts completed: ${s.join(", ")}`;e.notifications.push(i)}return{checked:a,completed:s}}function fo(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function go(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function Oe(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},i=e.requirements?.multiTravel,o=t?!!s.travelCompleted:!0,d=n?s.deliveredQuantity>=(n.quantity||0):!0,u=a?!!s.combatCompleted:!0,p=s.multiTravelVisited??[],m=i?i.every(h=>p.includes(h)):!0;o&&d&&u&&m&&(e.status="completed",oo(e),oi(),mt(`Mission completed: ${e.name}`),Xt(e.id))}function mt(e){l.notifications.push(e)}function yo(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function vo(e,t){const n=pt();if(!n)return;const a=l.location.systemId,s=Wt(n,a,t);!s.length||s.length<=1||C.setActiveRoute({nodes:s,currentIndex:0,source:"mission",missionId:e})}function Xt(e){C.activeRoute?.missionId===e&&C.clearActiveRoute()}function bo(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",mt(`Mission failed (expired): ${n.name}`))}const St=25,Ea=100,Jt={taxEvasion:{cost:180,gain:10,name:"Tax Evasion Grid",benefit:"whispered import routes and shell accounts"},smuggling:{cost:150,gain:8,name:"Smuggling Ring",benefit:"hidden routes and tolerant contacts"},bribery:{cost:200,gain:12,name:"Bribery Ledger",benefit:"greased palms and friendly inspectors"}};function Kt(){return l.tradeStrategy||(l.tradeStrategy={taxEvasion:0,smuggling:0,bribery:0}),l.tradeStrategy}function Ra(e){return Math.max(0,Math.min(Ea,e))}function Mo(){return Kt()}function xo(e){return Ra(Mo()[e])}function $o(e,t,n){const a=Math.floor(t/St),s=Math.floor(n/St);s>a&&l.notifications.push(`Trade Path: ${e} progress ${Math.min(s*St,Ea)}% (${Jt[e].name})`)}function It(e,t){if(t<=0)return;const n=Kt(),a=n[e];n[e]=Ra(a+t),$o(e,a,n[e])}function wo(e){const t=Jt[e];return l.player.credits<t.cost?(l.notifications.push("Not enough credits to invest in "+t.name+"."),!1):(l.player.credits-=t.cost,It(e,t.gain),l.notifications.push(`Invested ${t.cost} cr into ${t.name} (${t.benefit}).`),!0)}function Pa(e){return Jt[e]}function Zt(){const e=Kt();return{detectionReduction:Math.min(.25,e.bribery/400),fineDiscount:Math.min(.35,e.smuggling/280)}}const ko=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave – Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05},{id:"global_easy_signal_belt",name:"Low-Signal Relay Field",systemId:"global_easy_signal",tags:["mining_belt","easy_signal","global"],stability:{start:70,carefulLoss:{min:1,max:3},standardLoss:{min:3,max:6},overchargeLoss:{min:6,max:10}},commonTableId:"global_easy_common",rareTableId:"global_easy_rare",baseRareChance:.02}],So=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]},{id:"global_easy_common",entries:[{type:"commodity",id:"aurite_ore",min:0,max:2,weight:1},{type:"commodity",id:"titanium_wire",min:0,max:2,weight:.75},{type:"commodity",id:"purified_water",min:0,max:3,weight:.6},{type:"commodity",id:"textile_fiber",min:0,max:1,weight:.45}]},{id:"global_easy_rare",entries:[{type:"commodity",id:"luxury_spice",min:0,max:1,weight:.3},{type:"commodity",id:"medical_supplies",min:0,max:1,weight:.35},{type:"commodity",id:"contraband_data",min:0,max:1,weight:.2},{type:"commodity",id:"forbidden_ai_logic",min:0,max:1,weight:.1}]},{id:"depth_surface_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.5},{type:"commodity",id:"purified_water",min:1,max:2,weight:.35}]},{id:"depth_surface_rare",entries:[{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.45},{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.35},{type:"commodity",id:"textile_fiber",min:1,max:2,weight:.2}]},{id:"depth_mid_common",entries:[{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.8},{type:"commodity",id:"synthetic_fuel",min:1,max:3,weight:.65},{type:"commodity",id:"textile_fiber",min:1,max:2,weight:.45}]},{id:"depth_mid_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.2},{type:"commodity",id:"emberite_pearl",min:1,max:1,weight:.2},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.05}]},{id:"depth_deep_common",entries:[{type:"commodity",id:"contraband_data",min:1,max:3,weight:.4},{type:"commodity",id:"boreal_crystal",min:1,max:3,weight:.5},{type:"commodity",id:"synthetic_fuel",min:2,max:4,weight:.55},{type:"commodity",id:"steel_ingots",min:2,max:5,weight:.4}]},{id:"depth_deep_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:3,weight:.15},{type:"commodity",id:"umbrite_shard",min:1,max:2,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:2,weight:.2},{type:"commodity",id:"medical_supplies",min:2,max:3,weight:.1}]},{id:"depth_deep_ultra",entries:[{type:"commodity",id:"forbidden_ai_logic",min:0,max:1,weight:.6},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.4}]},{id:"depth_core_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:3,weight:.8},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.5},{type:"commodity",id:"boreal_crystal",min:1,max:2,weight:.4},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.35}]},{id:"depth_core_rare",entries:[{type:"commodity",id:"forbidden_ai_logic",min:1,max:1,weight:.2},{type:"commodity",id:"umbrite_shard",min:1,max:2,weight:.25},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.25},{type:"commodity",id:"unity_relics",min:2,max:3,weight:.15}]},{id:"depth_core_ultra",entries:[{type:"commodity",id:"quantum_tessera",min:1,max:1,weight:.6},{type:"commodity",id:"forbidden_ai_logic",min:1,max:1,weight:.4},{type:"commodity",id:"unity_relics",min:1,max:2,weight:.35}]}],Ia={belts:ko,tables:So},Ba="__global__",_o={buyMultiplier:1,sellMultiplier:.85},Co={basic:.9,standard:1,strategic:1.2,luxury:1.35},To=new Set((Ia.tables??[]).flatMap(e=>(e.entries??[]).map(t=>t.id)));function ht(){return l.ship.cargo||(l.ship.cargo={}),l.ship.cargo}function Eo(){const e=ht();return Object.values(e).reduce((t,n)=>t+n,0)}function Da(){return S?.commodities??[]}function re(e){return Da().find(n=>n.id===e)??null}function le(){return l.marketState?(l.marketState.temporaryModifiers=l.marketState.temporaryModifiers||{},l.marketState.activeEvents=l.marketState.activeEvents||[],l.marketState.localAdjustments=l.marketState.localAdjustments||{},l.marketState.priceIntel=l.marketState.priceIntel||{},l.marketState.initialDriftSeeded=l.marketState.initialDriftSeeded??!1):l.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},l.marketState}function Ro(e){l.intel||(l.intel={systems:[]});const t=l.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return l.intel.systems.push(n),n})();t.lastPriceSeenDay=l.time.day}function Po(e){const t=le();let n=1;const a=t.temporaryModifiers[Ba];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function Io(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function Bo(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),i=n.exports?.includes(t.id);return s&&(a*=1.2),i&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function Qt(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(O.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function Do(e,t){const n=Math.max(1,t.basePrice),a=Co[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,i=Bo(e,t),d=1+Qt(t)*.08,u=Po(t.id),p=Fo(e.id,t.id),m=La(e.id,t.id),h=n*a*s*i*d*u*p*m,g=To.has(t.id)?.5:1;return Math.max(1,Math.round(h*g))}function _n(e,t){return se(e,t).base}function se(e,t){const n=ee(e),a=re(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=Do(n,a),i=a.baseSpread??_o,o=Qt(a),d=ne(),u=Math.max(.1,Math.min(3,O.tradeProfitMultiplier??1)),p=ya(),m=Math.max(.5,d.buyBonus??1),h=Math.max(0,d.sellBonus??1),g=Math.max(.5,d.marketTax??1),f=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+o*.05)/u*m)),v=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-o*.05)*u*p*h*g)),w=Math.max(1,Math.min(v,f-1)),x=Math.max(f,w,Math.round(s*(1+o*.1))),P=Math.max(1,Math.min(f,w,Math.round(s*Math.max(.65,1-o*.2)))),T=Io(s,a.basePrice);return Ro(e),{base:s,buy:f,sell:w,high:x,low:P,trend:T}}function ot(e,t,n=2){const a=le(),s=e&&e.length?e:Ba;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function Aa(e=1){if(typeof e=="number"){Ao(e);return}No(e??l)}function Ao(e){if(e<=0)return;const t=le(),n=Object.keys(t.temporaryModifiers);for(const s of n){const i=t.temporaryModifiers[s];i.remainingTurns-=e,i.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=l.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),ja(t,.2*e)}function No(e){const t=le(),n=S?.systems??[],a=S?.commodities??[],s=e.time.day;Lo(t,n,a);for(const i of n)for(const o of a){const d=La(i.id,o.id),u=Qt(o),p=O.marketDailyTrendStrength??1,m=(1-d)*.1*p,h=(Math.random()-.5)*.1*(.5+u)*p,g=Fa(d+m+h);t.localAdjustments[i.id]||(t.localAdjustments[i.id]={}),t.localAdjustments[i.id][o.id]=g}t.activeEvents=t.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=e.time.turn)),ja(t,.1)}function Lo(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const i=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=i}}e.initialDriftSeeded=!0}}function rt(e){return ht()[e]??0}function Fo(e,t){return le().activeEvents.filter(a=>(a.expiresAtDay===void 0||l.time.day<a.expiresAtDay)&&a.expiresAtTurn>l.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function jo(e){le().activeEvents.push(e)}function Ho(e){return le().activeEvents.filter(n=>n.expiresAtTurn>l.time.turn&&(n.expiresAtDay===void 0||l.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function Oo(e){if(Math.random()>.08||!S?.commodities?.length)return;const n=S.commodities[Math.floor(Math.random()*S.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:l.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};jo(i),l.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function Na(e,t,n,a,s){if(n<=0||a<=0)return;const o=n*a/5e3,d=Math.min(.15,.03*o),u=le();u.localAdjustments[e]||(u.localAdjustments[e]={});const p=u.localAdjustments[e][t]??1,m=s==="buy"?1+d:1-d,h=Fa(p*m);u.localAdjustments[e][t]=h}function La(e,t){return le().localAdjustments[e]?.[t]??1}function Fa(e){return Math.min(2,Math.max(.5,e))}function ja(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,i]of Object.entries(a)){const o=i-1,d=i-o*t;Math.abs(d-1)<.01?delete a[s]:a[s]=d}Object.keys(a).length||delete e.localAdjustments[n]}}function qo(){const t=ee(l.location.systemId)?.neighbors.map(s=>ee(s.id)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=Oa();if(l.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};l.player.credits-=n;const a=le();return t.forEach(s=>{const i={};(S?.commodities||[]).forEach(d=>{const u=se(s.id,d.id);i[d.id]={buy:u.buy,sell:u.sell}});const o={turn:l.time.turn,prices:i};a.priceIntel[s.id]=o}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function Ha(){return le().priceIntel}function Oa(){const t=ee(l.location.systemId)?.neighbors.map(d=>ee(d.id)).filter(d=>!!d)||[],n=80,a=t.map(d=>d.faction?_i(d.faction):null).filter(d=>typeof d=="number"),s=a.length?a.reduce((d,u)=>d+u,0)/a.length:0,i=Cn(1-s/200,.5,1.4),o=Math.round(n*i);return Cn(o,40,140)}function Cn(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function qa(e,t,n){if(n<=0)return!1;const a=se(e,t).buy;if(a<=0)return!1;const s=a*n;if(l.player.credits<s)return!1;const i=l.ship.cargoCapacity;return i<=0?!1:Eo()+n<=i}function za(e,t,n){return n<=0?!1:rt(t)>=n}function Ua(e,t,n){if(!qa(e,t,n))return!1;const a=se(e,t).buy,s=a*n;l.player.credits-=s;const i=ht();i[t]=(i[t]||0)+n,Na(e,t,n,a,"buy");const o=re(t);return l.notifications.push(`Bought ${n} ${o?.name||t} @ ${a} each for ${s} cr.`),!0}function en(e,t,n){if(!za(e,t,n))return!1;const a=se(e,t).sell,s=a*n,i=ht();i[t]=Math.max(0,(i[t]||0)-n),l.player.credits+=s,Te(s),si(t,n,s),Na(e,t,n,a,"sell"),po(t,n,e);const o=re(t);if(o){const d=ee(e),u=Math.max(0,d?.marketProfile?.taxRate??0);u>0&&s>0&&It("taxEvasion",Math.max(1,Math.round(s*u*.01))),o.legalStatus&&o.legalStatus!=="legal"&&It("smuggling",Math.max(1,Math.round(s*.003)))}return l.notifications.push(`Sold ${n} ${o?.name||t} @ ${a} each for ${s} cr.`),!0}function Wa(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const o=se(t,s).sell;return a+o*i},0)}const Tn={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function Ga(e,t){if(!l||l.gameOver.active)return;const n=Qs(),a=ei(n),s={score:a,reason:e,message:t??Tn[e]??Tn.other,location:l.location.systemId,stats:n};l.combat=null,l.miningSession=null,l.gameOver={active:!0,reason:e,message:s.message,summary:s};const i={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};ai(i),C.go("gameover")}function Va(e=!1){const t=ra();ca(t),da(),C.go(e?"main":"ship_select")}const tn="space-events-cache";let qe=[];function zo(e){const t=Ko();qe=Jo(e,t),Ya(qe)}function nn(e){return qe.find(t=>t.id===e)}function Uo(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=Z(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,ne().anomalyChance??1),s=Math.min(1,Math.max(0,(O.eventFrequency??50)/100*a));if(Math.random()>s)return;const i=qe.map(u=>({ev:u,weight:er(u,e)})).filter(u=>u.weight>0);if(!i.length)return;const o=i.reduce((u,p)=>u+p.weight,0);let d=Math.random()*o;for(const u of i)if(d-=u.weight,d<=0)return u.ev;return i[0].ev}function Wo(e){const t=e.outcomes;if(!t)return{};const n={},a=ne(),s=Math.max(.1,Math.min(5,O.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),i=o=>{l.player.credits+=o,Te(o),l.player.credits<0&&(l.player.credits=0)};if(t.giveCredits){const o=t.giveCredits.min??0,d=t.giveCredits.max??o,u=Le(o,d),p=Math.round(u*s);i(p),l.notifications.push(`Received ${p} credits.`)}if(typeof t.creditsDelta=="number"){const o=Math.round(t.creditsDelta*s);i(o)}if(typeof t.fuelDelta=="number"){const o=l.ship.maxFuel,d=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;l.ship.fuel=Math.max(0,Math.min(o,l.ship.fuel+d))}if(typeof t.turnDelta=="number"){const o=ua(t.turnDelta);l.time.turn+=o,ro(),Aa(o)}if(t.cargoGain&&En(Zo(t.cargoGain,s,1),1),t.cargoLoss&&En(t.cargoLoss,-1),t.giveCommodity){const o=Le(t.giveCommodity.min,t.giveCommodity.max),d=Math.max(0,Math.round(o*s));Bt(t.giveCommodity.id,d),d>0&&l.notifications.push(`Collected ${d} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(me().weapons.push(t.giveWeapon),l.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const o=t.damageShip.min??0,d=t.damageShip.max??o,u=Le(o,d);if(l.ship.hp=Math.max(0,l.ship.hp-u),l.notifications.push(`Ship took ${u} damage.`),l.ship.hp<=0)return Ga("ship_destroyed","Ship destroyed by event."),n}if(t.applyStatus&&l.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&Yt(t.spawnMissionId).success&&l.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&l.notifications.push(`Event flag: ${t.flag}`),t.market){const o=t.market,d=Math.max(0,o.multiplier),u=Math.max(1,Math.floor(o.duration??2));ot(o.commodityId,d,u);const p=l.location?.systemId,m=o.commodityId&&S?.commodities?S.commodities.find(g=>g.id===o.commodityId):void 0,h=`${m?.name||"Local goods"} ${d>=1?"surge":"slip"}`;p&&l.marketState&&l.marketState.activeEvents.push({systemId:p,commodityId:o.commodityId??null,multiplier:d,expiresAtDay:l.time.day+u,expiresAtTurn:l.time.turn+u*2,label:h}),l.notifications.push(`Market shift in ${p??"this system"}: ${m?.name||"local goods"} x${d.toFixed(2)} for ${u} turns.`)}return t.modifyReputation&&va({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function Go(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,O.eventRewardMultiplier??1))*Math.max(.1,ne().eventRewardMultiplier??1);if(n.mining){const s=Le(n.mining.quantity.min,n.mining.quantity.max),i=Math.max(0,Math.round(s*a));Bt(n.mining.commodityId,i),l.notifications.push(`Mining yield: ${i} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=Le(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),i=l.ship.maxFuel;l.ship.fuel=Math.max(0,Math.min(i,l.ship.fuel-s)),l.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];Bt(s,1),l.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(l.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),ot(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function Vo(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(O.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(O.marketCrashChance??5)/100));if(e.location?.systemId){const s=S?.commodities?.[Math.floor(Math.random()*(S?.commodities.length||1))];if(s){const i=e.location.systemId,o=2+Math.ceil(Math.random()*2);if(Math.random()<n){const d=1.1+Math.random()*.35;ot(s.id,d,o),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:Math.max(0,d),expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${i}: ${s.name} prices x${d.toFixed(2)} for ${o} turns.`)}else if(Math.random()<a){const d=Math.max(.5,.85-Math.random()*.25);ot(s.id,d,o),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:d,expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${i}: ${s.name} prices x${d.toFixed(2)} for ${o} turns.`)}}}}function Yo(){Ya(qe)}function Xo(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(tn)}function Jo(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function Ko(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(tn);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function Ya(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(tn,JSON.stringify(e))}function En(e,t){for(const[n,a]of Object.entries(e)){const s=l.ship.cargo[n]??0,i=Math.max(0,s+a*t);l.ship.cargo[n]=i}}function Zo(e,t,n=1){const a={};for(const[s,i]of Object.entries(e)){if(i<=0){a[s]=i;continue}const o=Math.max(n,Math.round(i*t));a[s]=o}return a}function Bt(e,t){const n=l.ship.cargo[e]??0,a=Object.values(l.ship.cargo).reduce((o,d)=>o+d,0),s=Math.max(0,l.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));l.ship.cargo[e]=n+i,i<t&&l.notifications.push(`Cargo full: stored ${i}/${t} ${e}.`)}function Le(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function Qo(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function Rn(e,t){return e.has(t)}function er(e,t){let n=e.weight??0;const a=Qo(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(o=>a.has(o)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const i=Math.max(.1,O.eventDangerMultiplier??1);n*=i}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),Rn(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),Rn(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=ge().filter(i=>i.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let Dt=[];function tr(e){Dt=e}function nr(e,t=[]){const n=Dt.find(i=>i.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Dt.find(i=>(i.enemyTags||[]).some(o=>a.has(o)))??null}function At(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function ar(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function sr(e,t){const n=Z(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,i=e.max??s,o=At(s,i),d=Math.max(0,Math.round(o*a));l.player.credits+=d,t.creditsEarned+=d,Te(d);break}case"commodity":{const s=At(e.min??1,e.max??e.min??1),i=Math.max(0,Math.round(s*a)),o=ir(e.id||"unknown",i);o>0&&t.commodities.push({id:e.id||"unknown",qty:o});break}case"weapon":{e.id&&(me().weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(l.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&Yt(e.id).success&&t.missionsGranted.push(e.id);break}}}function ir(e,t){const n=l.ship.cargo[e]??0,a=Object.values(l.ship.cargo).reduce((o,d)=>o+d,0),s=Math.max(0,l.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));return l.ship.cargo[e]=n+i,i}function or(e,t,n={},a=[]){const s=Z(),i=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),o=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>o)return null;const d=nr(e,a);if(!d)return null;const u=n.quickKill?1.5:1,p=n.lowDamageTaken?1.25:1,m={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},h=(f,v)=>{if(!f?.length||Math.random()>v)return;const w=ar(f);w&&sr(w,m)};h(d.common,o),h(Pn(d.uncommon,p),.35*o);const g=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(h(Pn(d.rare,u),g*o),d.guaranteed?.credits){const{min:f,max:v}=d.guaranteed.credits,w=At(f,v),x=Math.max(0,Math.round(w*i));l.player.credits+=x,m.creditsEarned+=x,Te(x)}return m}function Pn(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}function an(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,i=lr(t.weapons),o=dr(t.modules),d=e.player?.credits??0,u=Math.log10(d+1)*5,p=n+a+i+o+s/2+u;return Math.max(1,Math.round(p))}function sn(e){const t=e/40;return t<0?0:t>1?1:t}const Xa=30;function rr(e){e.difficulty&&(e.difficulty.day=e.time.day,e.difficulty.playerPowerScore=Math.max(1,Math.round(an(e)/Xa)))}function Se(e,t){if(!e.difficulty)return;const n=e.difficulty.tension+t;e.difficulty.tension=Math.max(0,Math.min(100,n))}function Ja(e){if(!e.difficulty)return 1;const t=Math.max(1,Math.round(an(e)/Xa));e.difficulty.playerPowerScore=t;const n=e.difficulty.day*.03,a=t*.02,s=e.difficulty.tension*.01,i=1+n+a+s;return Math.max(1,i)}function cr(e){if(!e.difficulty)return;const t=Math.max(.5,sn(e.time.day))*.05;Se(e,-Math.min(e.difficulty.tension,t))}function lr(e){return e.reduce((t,n)=>{if(!n)return t;const a=K(n);if(!a)return t;const s=a.damage??0,i=a.accuracy??0,o=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+i*.2+o},0)}function dr(e){return!e||!e.length?0:e.length*5}function ur(e){return S?S.systemsById[e]??null:null}function ft(e,t){const n=ur(e);return n?n.tags.includes(t):!1}const pr=0,mr=100;function Ka(e){const t=Math.max(pr,Math.min(mr,(l.player.wanted??0)+e));return l.player.wanted=t,t}function hr(e,t,n){return Math.max(t,Math.min(n,e))}function fr(e){const{systemId:t,state:n,sessionFactor:a}=e,s=S?.systems.find(y=>y.id===t),i=s?.security??"medium",o=Z(),d=ne();let u;switch(i){case"high":u=.02;break;case"low":u=.12;break;default:u=.06;break}s?.tags.includes("mining_belt")&&(u+=.02),s?.marketProfile?.blackMarket&&(u+=.03);const p=Wa(n,t),m=vu(n.ship.templateId)?.cost??0,h=p+m,g=Math.min(.15,h/5e3)*Math.max(0,o.pirateCargoValueSensitivity??1),f=gr(n,t),v=a*.03,w=Math.max(0,Math.min(1,(o.pirateEncounterRateBase??0)/100)),x=Math.max(0,Math.min(1,(O.pirateEncounterRate??0)/100)),P=Math.max(0,(o.encounterChancePerJump??100)/100),T=Math.max(0,o.globalDangerMultiplier??1)*Math.max(0,d.pirateDetectionMultiplier??1);let I=(u+g+v+f+w+x)*T*P;return yr(I,n,t)}function gr(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[u,p]of a){if(!p)continue;const m=se(t,u),h=re(u)?.basePrice??m.sell;if(h<=0)continue;const g=(m.sell-h)/h;s+=g*p,i+=p}if(i<=0)return 0;const o=s/i;return hr(o*.2,0,.15)}function yr(e,t,n){const a=sn(t.time.day),s=.4,o=s+(.75-s)*a;let d=e;return ft(n,"core")?(d>.25&&(d=.25),d<.01&&(d=.01),d):(d>o&&(d=o),d<.01&&(d=.01),d)}function vr(e){return Math.min(10,Math.floor(e/200))}function on(e){const t=e?.player?.xp??0,n=vr(t);return{level:n,fuel:1+n*.015,repair:1+n*.02,shield:1+n*.025}}const br=[{id:"surface",label:"Surface",level:0,depthRange:[1,2],valueMultiplier:1,dropWeights:{common:.96,rare:.04},lootTables:{common:"depth_surface_common",rare:"depth_surface_rare"},cluster:{chance:0,minSize:0,maxSize:0,maxClusters:0},comboGain:5},{id:"mid",label:"Mid",level:1,depthRange:[3,3],valueMultiplier:1.5,dropWeights:{common:.9,rare:.08,ultra:.02},lootTables:{common:"depth_mid_common",rare:"depth_mid_rare"},cluster:{chance:.25,minSize:2,maxSize:2,maxClusters:2},comboGain:7},{id:"deep",label:"Deep",level:2,depthRange:[4,4],valueMultiplier:2,dropWeights:{common:.75,rare:.2,ultra:.05},lootTables:{common:"depth_deep_common",rare:"depth_deep_rare",ultra:"depth_deep_ultra"},cluster:{chance:.55,minSize:2,maxSize:3,maxClusters:3},comboGain:9},{id:"core",label:"Core",level:3,depthRange:[5,5],valueMultiplier:3,dropWeights:{common:.7,rare:.25,ultra:.05},lootTables:{common:"depth_core_common",rare:"depth_core_rare",ultra:"depth_core_ultra"},cluster:{chance:.7,minSize:3,maxSize:5,maxClusters:3},comboGain:11}],Mr={threshold:100,duration:3,revealTiles:3,guaranteedRarityCount:2,threatReduction:.15,bandBonus:6,skipBandBonus:8},xr={maxAttemptsPerBand:3},$r={hazardBaseChance:.05,hazardPerChain:.02,hazardDamageRange:[1,3],hazardDamageMultiplierPerLevel:.1,rewardMultipliers:[{maxLevel:2,multiplier:1},{maxLevel:4,multiplier:1.2},{maxLevel:7,multiplier:1.5},{maxLevel:10,multiplier:2},{maxLevel:1e3,multiplier:2.5}],milestones:[3,5,8,10],cashOutBase:25,cashOutPerLevel:15},Za={bands:br,combo:Mr,clusterSettings:xr,riskChain:$r},Qa="pirate_cutter",wr=.5,Nt=Ia,Ge=9,Ve=9,Ye=5,In={1:{yieldMultiplier:.75,noise:.42,stabilityLossScale:.8,drillDamageChance:.01,drillDamageRange:[1,2]},2:{yieldMultiplier:.9,noise:.3,stabilityLossScale:.9,drillDamageChance:.02,drillDamageRange:[1,3]},3:{yieldMultiplier:1,noise:.2,stabilityLossScale:1,drillDamageChance:.04,drillDamageRange:[1,4]},4:{yieldMultiplier:1.18,noise:.14,stabilityLossScale:1.15,drillDamageChance:.08,drillDamageRange:[2,5]},5:{yieldMultiplier:1.32,noise:.22,stabilityLossScale:1.35,drillDamageChance:.12,drillDamageRange:[3,6]}},gt=Za,ze=gt.bands;new Map(ze.map(e=>[e.id,e]));const es=new Map(ze.map(e=>[e.id,e.level])),he=gt.combo,kr=gt.clusterSettings,ue=gt.riskChain,Sr=4e-5,_r=.12,Cr=18e-5,Tr=.35,Er=45e-5,Rr=.28;function Pr(e){const t=Math.max(0,e);return Math.min(_r,t*Sr)}function Ir(e){return 1+Math.min(Tr,Math.max(0,e)*Cr)}function ts(e){return 1+Math.min(Rr,Math.max(0,e)*Er)}function yt(e){return ze.find(n=>e>=n.depthRange[0]&&e<=n.depthRange[1])??ze[0]}function ns(e,t){if(t&&e.lootTables[t])return t;const n=["common","rare","ultra"].map(i=>[i,e.dropWeights[i]??0]),a=n.reduce((i,[,o])=>i+o,0);if(a<=0)return"common";let s=Math.random()*a;for(const[i,o]of n)if(s-=o,s<=0)return i;return"common"}function as(e,t){const n=e.lootTables[t]??e.lootTables.common,a=Gr(n);return Vr(a)}function ss(e,t,n){if(n<=0)return;const a=e.pendingOre||{};a[t]=(a[t]??0)+n,e.pendingOre=a}function is(e,t){const n=e.pendingOre||{},a={};e.pendingOre={};for(const[s,i]of Object.entries(n)){const o=Math.ceil(Math.max(0,i));if(o<=0)continue;const d=ps(t,s,o);d>0&&us(e,s,d),a[s]=d}return a}function os(e,t,n,a){const s=n-(e.veinCol??0),i=t-(e.veinRow??0),o=a-(e.veinDepth??3),u=Math.sqrt(s*s+i*i)*2.6+Math.abs(o)*1.5,p=Math.max(.2,1-(e.drillsUsed??0)*.04),m=(Math.random()*2-1)*p,h=10-u;let g=oe(Math.round(h+m),0,10);e.lowSignalMode&&(g=oe(g,0,5));const f=Ur(e.veinRow??0,e.veinCol??0,t,n),v=Wr(a,e.veinDepth??3),w=a<=3?.6:1;return{signal:oe(Math.round(g*w),0,10),directionClass:f,depthHint:v}}function Br(e){const t=e.gridRows??Ge,n=e.gridCols??Ve,a=[];for(const s of ze){const i=s.cluster.maxClusters;let o=0;for(let d=0;d<kr.maxAttemptsPerBand&&o<i;d++){if(Math.random()>s.cluster.chance)continue;const u=Dr(t,n,s.cluster.minSize,s.cluster.maxSize,a);u.length>=s.cluster.minSize&&(a.push({bandId:s.id,cells:u}),o+=1)}}return a}function Dr(e,t,n,a,s){const i=new Set(s.flatMap(g=>g.cells.map(f=>`${f.row}:${f.col}`))),o=Math.max(n,Math.min(a,ln(n,a))),d=[],u=Math.floor(Math.random()*e),p=Math.floor(Math.random()*t);d.push({row:u,col:p}),i.add(`${u}:${p}`);const m=[{dr:-1,dc:0},{dr:1,dc:0},{dr:0,dc:-1},{dr:0,dc:1}];let h=0;for(;d.length<o&&h<30;){const g=d[Math.floor(Math.random()*d.length)],f=m[Math.floor(Math.random()*m.length)],v={row:g.row+f.dr,col:g.col+f.dc};if(v.row<0||v.row>=e||v.col<0||v.col>=t||i.has(`${v.row}:${v.col}`)){h+=1;continue}i.add(`${v.row}:${v.col}`),d.push(v)}return d}function Ar(e,t,n){return e.clusters?.find(a=>a.cells.some(s=>s.row===t&&s.col===n))}function ve(e,t){e.comboFlash=t,e.comboFlashTimer=40}function Nr(e){e.comboFlashTimer&&e.comboFlashTimer>0&&(e.comboFlashTimer-=1,e.comboFlashTimer<=0&&(e.comboFlash=void 0))}function rn(e,t){const n=e.lastComboBandId?es.get(e.lastComboBandId)??t.level:t.level;let a=t.comboGain;if(t.level>n){const d=t.level-n;a+=he.bandBonus*d,d>1&&(a+=he.skipBandBonus*(d-1))}const s=e.comboGauge??0,i=Math.min(he.threshold,s+a);e.comboGauge=i,e.lastComboBandId=t.id;let o=!1;if(i>=he.threshold){o=!0,e.comboGauge=0,e.comboBonusTurns=he.duration,e.comboGuarantyRemaining=he.guaranteedRarityCount,e.comboThreatReduction=he.threatReduction;const d=Lr(e,he.revealTiles);e.comboRevealedCells=d,rs(e,d)}return{gain:i-s,triggered:o}}function Lr(e,t){const n=e.grid??[],a=[];for(let i=0;i<n.length;i++)for(let o=0;o<(n[i]??[]).length;o++){const d=n[i][o];d&&!d.drilled&&d.hintSignal==null&&a.push({row:i,col:o})}const s=[];for(let i=0;i<t&&a.length;i++){const o=Math.floor(Math.random()*a.length);s.push(a[o]),a.splice(o,1)}return s}function rs(e,t){const n=oe(Math.round(e.depth??3),1,Ye),a=yt(n);jr(e,a.level,{row:r,col:c}),rn(e,a);for(const s of t){const i=e.grid?.[s.row];if(!i)continue;const o=i[s.col];if(!o)continue;const d=os(e,s.row,s.col,n);o.hintSignal=d.signal}}function cn(e){for(const t of ue.rewardMultipliers)if(e<=t.maxLevel)return t.multiplier;return 1}function cs(e,t=0){const n=Pr(t);return Math.min(1,ue.hazardBaseChance+e*ue.hazardPerChain+n)}function Re(e){e.riskChainLevel=0,e.lastRiskBandLevel=null,e.nextRiskGuaranteedRarity=null,e.riskChainMilestoneLevel=0}function Bn(e,t,n){if(!t||!e.grid)return;const a=[{dr:-1,dc:0},{dr:1,dc:0},{dr:0,dc:-1},{dr:0,dc:1}],s=[];for(const i of a){const o=t.row+i.dr,d=t.col+i.dc;if(!(o<0||o>=(e.grid?.length??0))&&!(d<0||d>=(e.grid?.[o]?.length??0))&&(s.push({row:o,col:d}),s.length>=n))break}s.length&&rs(e,s)}function Fr(e,t,n){const a=ue.milestones??[];let s=e.riskChainMilestoneLevel??0;for(const i of a)t>=i&&s<i&&(s=i,e.riskChainMilestoneLevel=i,i===3?(ve(e,"Steady Dig! Rewards climbing."),Bn(e,n,1)):i===5?(ve(e,"Deep Run! Hidden tiles revealed."),Bn(e,n,2),e.nextRiskGuaranteedRarity="rare"):i===8?(ve(e,"Loaded Veins! Next dig at least uncommon."),e.nextRiskGuaranteedRarity="rare"):i>=10&&(ve(e,"Jackpot Depth! Artifacts imminent."),e.nextRiskGuaranteedRarity="rare"))}function ls(e){if(e.comboGuarantyRemaining&&e.comboGuarantyRemaining>0)return e.comboGuarantyRemaining-=1,"rare";const t=e.nextRiskGuaranteedRarity;if(t)return e.nextRiskGuaranteedRarity=null,t}function jr(e,t,n){const a=e.lastRiskBandLevel??-1;t<a&&Re(e),e.lastRiskBandLevel=t;const s=Math.max(1,(e.riskChainLevel??0)+1);return e.riskChainLevel=s,Fr(e,s,n),s}function Hr(e,t,n,a,s=1){const o=(1+n*ue.hazardDamageMultiplierPerLevel)*Ir(a)*Math.max(0,s),d=hs(t,1,[ue.hazardDamageRange[0],ue.hazardDamageRange[1]],o);return ve(e,`Risk hazard! -${d} hull.`),Re(e),d}function ds(e){e.comboBonusTurns&&e.comboBonusTurns>0&&(e.comboBonusTurns-=1,e.comboBonusTurns<=0&&(e.comboThreatReduction=0))}function us(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function Or(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,s]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-s);e.ship.cargo=n,t.accumulatedOre={}}function ps(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((d,u)=>d+u,0),i=Math.max(0,e.ship.cargoCapacity-s),o=Math.max(0,Math.min(n,i));return o>0&&(a[t]=(a[t]??0)+o,e.ship.cargo=a),e.notifications||(e.notifications=[]),o<n&&e.notifications.push(`Cargo constrained: stored ${o}/${n} ${t}.`),o}function ln(e,t){const n=Math.ceil(e),a=Math.floor(t);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function qr(e){const t=Math.max(.1,O.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function ms(){const e=[];for(let t=0;t<Ge;t++){const n=[];for(let a=0;a<Ve;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function zr(){const e=Math.floor(Math.random()*(Ge-4))+2,t=Math.floor(Math.random()*(Ve-4))+2,n=2+Math.floor(Math.random()*(Ye-2));return{row:e,col:t,depth:n}}function Ur(e,t,n,a){const s=t-a,i=e-n;if(Math.sqrt(s*s+i*i)<.5)return null;const d=Math.atan2(i,s)*(180/Math.PI),u=d<0?d+360:d;return u>=337.5||u<22.5?"dir-e":u<67.5?"dir-se":u<112.5?"dir-s":u<157.5?"dir-sw":u<202.5?"dir-w":u<247.5?"dir-nw":u<292.5?"dir-n":"dir-ne"}function Wr(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function hs(e,t,n,a=1){if(t<=0||Math.random()>t)return 0;const s=ln(n[0],n[1]),i=Math.max(1,Math.round(s*a));e.ship.hp=Math.max(0,e.ship.hp-i),e.notifications||(e.notifications=[]),e.notifications.push(`Drill backlash damaged hull for ${i}.`);const o=on(e),d=Math.round(i*(o.shield-1));if(d>0){const u=Math.min(d,e.ship.shields);e.ship.shields=Math.max(0,e.ship.shields-u),u>0&&e.notifications.push(`Shield wear due to upkeep drains ${u} shield.`)}return i}function fs(e,t){const n=t?Nt.belts.find(s=>s.id===t):null;if(n)return n;const a=Nt.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function Gr(e){return e?Nt.tables.find(t=>t.id===e)??null:null}function Vr(e){if(!e||!e.entries.length)return null;const t=e.entries.reduce((o,d)=>o+(d.weight||0),0);if(t<=0)return null;let n=Math.random()*t,a=null;for(const o of e.entries)if(n-=o.weight||0,n<=0){a=o;break}const s=a??e.entries[e.entries.length-1],i=ln(s.min,s.max);return{id:s.id,amount:i}}function Pe(e,t,n,a,s){if(e.lastMiningSystemId===t)return e.notifications.push("You need to travel to another system before mining again."),!1;const i=fs(t,n),o=gs(e,i.id);if(s?.force&&(o.depletedUntilDay=void 0),o.depletedUntilDay!==void 0&&e.time.day<o.depletedUntilDay)return e.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`),!1;const d=0,u=ms(),{row:p,col:m,depth:h}=zr();return e.miningSession={active:!0,systemId:t,beltId:i.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:d,stability:i.stability.start,maxStability:i.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:u,gridRows:Ge,gridCols:Ve,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:p,veinCol:m,veinDepth:h,lowSignalMode:!!s?.easySignals,accumulatedOre:{},beltName:i.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[],comboGauge:0,comboBonusTurns:0,comboGuarantyRemaining:0,comboThreatReduction:0,lastComboBandId:null,comboRevealedCells:[],riskChainLevel:0,lastRiskBandLevel:null,nextRiskGuaranteedRarity:null,riskChainMilestoneLevel:0,clusters:[]},e.miningSession.clusters=Br(e.miningSession),Re(e.miningSession),e.lastMiningSystemId=t,!0}function Yr(e,t){e.miningSession&&(e.miningSession.depth=oe(Math.round(t),1,Ye))}function Xr(e,t,n){for(let a=0;a<e.length;a++)for(let s=0;s<e[a].length;s++)e[a][s].selected=a===t&&s===n}function Jr(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const s=fs(a.systemId,a.beltId),i=oe(Math.round(t),0,Ge-1),o=oe(Math.round(n),0,Ve-1),d=oe(Math.round(a.depth??3),1,Ye);a.depth=d;const u=a.riskChainLevel??0;Nr(a),a.grid=a.grid??ms(),a.drillsUsed=(a.drillsUsed??0)+1;const p=os(a,i,o,d),m=a.grid[i][o],h=!m.drilled;m.drilled=!0,m.signal=p.signal,m.directionClass=p.directionClass,m.depthHint=p.depthHint.hint,m.depthClass=p.depthHint.className,m.hintSignal=null,Xr(a.grid,i,o),a.selectedRow=i,a.selectedCol=o,h?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+p.signal/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+p.signal/50);const g=yt(d);rn(a,g);const f=Ar(a,i,o),v=!!(f&&g.level>=(es.get(f.bandId)??-1));m.clusterHint=v;let x=Math.max(0,p.signal*.001);p.signal>0&&x<1&&(x=1),v&&(x+=p.signal*.25);const P=ls(a),T=ns(g,P),I=as(g,T),y=I?.id??a.resourceId??"aurite_ore",B=I?.amount??0,E=x+B;ss(a,y,E);const M=Math.max(0,e.player.xp??0),$=Math.max(0,O.miningThreatMultiplier??.7),k=3+d,N=a.comboThreatReduction??0,U=ts(M),R=Math.max(0,Math.round(k*$*U*Math.max(0,1-N)));a.threat=oe((a.threat??0)+R,0,100),a.currentPirateChance=(a.threat??0)/100;const F=v?" vein":"";a.lastMessage=`Pulse at X${o+1}, Y${i+1}, Z${d} (${g.label}${F}): signal ${p.signal}. Threat +${R}%. Ore +${Math.round(E)} (queued) Risk x${u}.`,ds(a);const G=Math.random()*100;let V=!1;const H=a.threat*.9;if(G<=H){V=!0,a.runComplete=!0,a.active=!1;const Y=gs(e,s.id);Y.depletedUntilDay=e.time.day+1,ye(Qa,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,e.lastMiningSystemId=null,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:p.signal,directionClass:p.directionClass,depthHint:p.depthHint.hint,fightTriggered:V,threat:a.threat}}function Kr(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const s=oe(Math.round(t.depth??3),1,Ye),i=yt(s),o=t.riskChainLevel??0,d=rn(t,i);d.triggered?ve(t,"Combo bonus ready!"):d.gain>0&&ve(t,`Combo +${d.gain}`);const u=Math.max(0,e.player.xp??0),p=a-(t.veinCol??0),m=n-(t.veinRow??0),h=s-(t.veinDepth??3),g=Math.sqrt(p*p+m*m+h*h),f=Math.random()*1.5-.75,v=oe(Math.round(10-g*2+f),0,10),w=1+Math.max(0,s-2)*.12,P=Math.max(0,Math.round((v+w)*.2)),T=Math.min(.4,(t.explorationScore??0)/25),I=qr(t),y=Math.min(1,I+T);let E=Math.max(1,Math.round(P*y*(1+.1)));E=Math.max(1,Math.round(E*.5));const M=In[s]??In[3],$=hs(e,M.drillDamageChance,M.drillDamageRange,1+i.level*.1);$>0&&(e.notifications=e.notifications||[],e.notifications.push(`Final drill backlash: -${$} hull.`));const k=ls(t),N=ns(i,k),U=as(i,N),R=U?.id??t.resourceId??"aurite_ore",F=U?.amount??0;E+=F,ss(t,R,E);const V=is(t,e)[R]??0,H=Math.max(1,_n(t.systemId,R)),Y=Math.max(.05,(O.miningPayoutMultiplier??.35)*wr);let D=Math.round(H*V*Y*i.valueMultiplier);const z=cn(o);D=Math.round(D*z);const W=Math.max(0,Math.round(V*i.valueMultiplier*z*.35));W>0&&(pe(W,"mining"),t.xpEarned=(t.xpEarned??0)+W);let b=null;if(v>=6&&Math.random()<.1+T*.5){const wt=Math.max(1,Math.round(v/3)),Ze=ps(e,"stellite_fragment",wt);if(Ze>0){b={id:"stellite_fragment",amount:Ze};const zs=Math.max(1,_n(t.systemId,b.id));D+=Math.round(zs*Ze*Y),us(t,b.id,Ze)}}const q=b??(N!=="common"?{id:R,amount:V}:null);t.totalValueMined+=D,t.lastYield={commodityId:R,amount:V,approxValue:D,rareFind:q};const ie=6+s*2,ce=Math.max(0,O.miningThreatMultiplier??.7),we=t.comboThreatReduction??0,Be=ts(u),ke=Math.max(0,Math.round(ie*ce*Be*Math.max(0,1-we)));t.threat=oe((t.threat??0)+ke,0,100),t.currentPirateChance=(t.threat??0)/100;const Ke=$>0?` Drill backlash: -${$} hull.`:"";t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${s} (${i.label}): signal ${v}, efficiency ${(y*100).toFixed(0)}%, ore ${V} stored. Threat +${ke}%.${Ke} Risk x${o}`,Re(t),ds(t);const xt=de("extraction_t3_deep_delver")?.05:0,$t=Math.max(0,cs(o,u)-xt);if(Math.random()<$t){const wt=de("ship_hauler_hazard_steadiness")?.85:1;Hr(t,e,o,u,wt)}const Os=Math.random()*100;let xn=!1;const qs=t.threat*.9;return Os<=qs?(xn=!0,ye(Qa,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset.",e.lastMiningSystemId=null):(t.runComplete=!0,t.active=!1),di(V+(b?.amount||0),!!b),{signal:v,yieldAmount:V,commodityId:R,rareFind:b,fightTriggered:xn,threat:t.threat}}function Zr(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function gs(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function Qr(e,t){const n=e.miningSession;n&&(Or(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,Re(n),e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function ec(e){const t=e.miningSession;if(!t||!t.active)return null;const n=t.riskChainLevel??0;if(n<3)return null;const a=is(t,e),s=Object.values(a).reduce((m,h)=>m+h,0),i=Math.max(0,Math.round(ue.cashOutBase+n*ue.cashOutPerLevel)),o=yt(t.depth??3),d=cn(n),u=Math.max(0,Math.round(s*o.valueMultiplier*d*.35));u>0&&(pe(u,"mining"),t.xpEarned=(t.xpEarned??0)+u),Te(i),e.player.credits=Math.max(0,e.player.credits+i),Re(t),t.runComplete=!0,t.active=!1;const p=`Cash out (Risk ${n}): rounded ${s} ore + ${i} cr bonus.`;return t.lastMessage=p,p}function tc(e){if(!S)throw new Error("Content has not been loaded.");const t=S.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function Dn(e,t){return Math.floor(Math.random()*(t-e+1))+e}function nc(e){const t=[],n={};for(let a=0;a<e;a+=1){const s=a%3,i=n[s]??0,o=i===0?"front":"back";n[s]=i+1,t.push({lane:s,row:o})}return t}const ac=1.25;function sc(e,t,n){const a=Math.max(1,Math.round(e.hull*t)),s=Math.max(0,Math.round(e.shields*t));return n.map((i,o)=>({id:`${e.id}-${i.lane}-${i.row}-${o}-${Math.round(Math.random()*1e4)}`,templateId:e.id,name:e.name,hp:a,maxHp:a,shields:s,maxShields:s,weaponIds:e.weaponIds.slice(),weaponCooldowns:e.weaponIds.map(()=>0),position:i,alive:!0,side:"enemy",factionId:e.faction,factionLabel:S?.factions.find(d=>d.id===e.faction)?.name??void 0,statusEffects:[],tags:e.tags?[...e.tags]:[],canEscape:e.canEscape}))}function ic(e,t){return t<=1?e.name:`${e.name} Squadron`}function oc(e){const n=1-We(e).evasionBonus;return Math.max(0,n)}function rc(e,t,n){const s=We(n).damageTakenMultipliers?.[t]??1;return Math.max(0,Math.round(e*s))}const cc=1.2,ys=100,lc=5,dc=.4,uc=2,pc=2,mc=3,An=2,Nn=3,hc=.7;function it(e,t,n){const a=e.statusEffects.find(s=>s.type===t);return a?(a.duration=Math.max(a.duration,n),!1):(e.statusEffects.push({type:t,duration:n}),!0)}function Ln(e,t){return e.statusEffects.some(n=>n.type===t)}function ae(e,t,n,a){return e.encounter.enemies.find(s=>s.position.lane===t&&s.position.row===n&&(!a||s.side===a))}function fc(e,t,n){return e.encounter.enemies.filter(a=>a.position.lane===t&&a.side===n)}function Lt(e,t,n){if(!n.alive)return!1;const a=ae(e,n.position.lane,"front",n.side);if(n.position.row==="back"&&a&&a.alive&&!t.canBypassCover)return!1;switch(t.targetingMode){case"frontOnly":return n.position.row==="front";case"linePierce":return n.position.row==="front";case"splashLane":return n.position.row==="front";default:return!0}}function gc(e){if(!(!e||!S))return S.factions.find(t=>t.id===e)}const yc=2;function vc(e,t,n){let a=0;const s=n.maxShields?n.shields/n.maxShields:0,i=n.maxHp?n.hp/n.maxHp:0;a+=(1-s)*3,a+=(1-i)*5,n.isFragile&&(a+=3),(n.role==="support"||n.role==="artillery")&&(a+=2),!t.canBypassCover&&n.position.row==="front"&&(a+=1),t.linePierce&&n.position.row==="front"&&(a+=1),t.damageType===n.damageProfile&&(a+=1);const o=gc(e.factionId);return o&&o.preferredDamage.includes(t.damageType)&&(a+=yc),a}function bc(){const e=l.ship;return{id:"player",side:"player",templateId:"player",name:e.name,hp:e.hp,maxHp:e.maxHp,shields:e.shields,maxShields:e.maxShields,weaponIds:[],weaponCooldowns:[],position:{lane:1,row:"front"},statusEffects:[],tags:[],canEscape:!1,alive:e.hp>0}}function Mc(e,t,n,a=[]){const s=[...n.encounter.enemies.filter(p=>p.side!==e.side&&Lt(n,t,p)),...a.filter(p=>p.side!==e.side&&Lt(n,t,p))];if(!s.length)return null;const i=!t.canBypassCover,o=s.filter(p=>p.position.row==="front");return(i&&o.length?o:s).map(p=>({slot:p,score:vc(e,t,p)})).sort((p,m)=>m.score-p.score)[0].slot}function xc(e,t,n,a){if(!(!n||n.side!=="enemy")){if(t.linePierce&&n.position.row==="front"){const s=ae(e,n.position.lane,"back");if(s&&s.alive&&s.side!==n.side){const i=Math.max(0,Math.round(a*.5));xe(i,t.damageType,t,s),_(`${t.name} pierces through ${n.name} and grazes ${s.name} for ${i}.`)}}if(t.splashRadius&&n.position.row==="front"){const s=e.encounter.enemies.filter(o=>o.position.lane===n.position.lane&&o.id!==n.id&&o.alive),i=Math.max(0,Math.round(a*.35));for(const o of s)xe(i,t.damageType,t,o),_(`${t.name} splashes ${o.name} for ${i} damage.`)}}}function $c(e,t,n){e==="explosive"&&n.shields<=0&&t>=8&&Math.random()<=.3&&it(n,"breach",uc)&&_(`${n.name} suffers a hull breach!`),e==="disruptive"&&t>=5&&Math.random()<=.3&&it(n,"jammed",pc)&&_(`${n.name} is jammed and struggles to stay online!`),e==="energy"&&n.shields<=0&&t>=6&&Math.random()<=.25&&it(n,"burn",mc)&&_(`${n.name} is singed by the energy barrage!`)}function wc(e){for(const t of[...e.encounter.enemies]){if(t.statusEffects.length===0)continue;const n=[];for(const a of t.statusEffects){if(a.type==="breach"&&t.hp>0){const s=Math.min(t.hp,An);t.hp=Math.max(0,t.hp-An),s>0&&_(`${t.name} leaks atmosphere from the breach (-${s} hull).`)}if(a.type==="burn"&&t.hp>0){const s=Math.min(t.hp,Nn);t.hp=Math.max(0,t.hp-Nn),s>0&&_(`${t.name} suffers burning damage (-${s} hull).`)}a.duration-=1,a.duration>0?n.push(a):_(`${t.name} recovers from ${a.type}.`)}t.statusEffects=n,t.hp<=0&&Ce(e,t.id)}}function kc(e){return e.encounter.enemies.find(t=>t.id===e.selectedEnemyId)}function Ie(e){const t=kc(e);if(t)return t;const n=e.encounter.enemies.find(a=>a.position.row==="front")??e.encounter.enemies[0];return n?e.selectedEnemyId=n.id:e.selectedEnemyId=null,n}function Sc(e,t){const n=e.encounter.enemies.find(a=>a.position.lane===t&&a.position.row==="back");n&&(n.position.row="front",_(`${n.name} steps forward to lane ${t}.`))}function Ce(e,t){const n=e.encounter.enemies.findIndex(s=>s.id===t);if(n===-1)return;const[a]=e.encounter.enemies.splice(n,1);if(a.position.row==="front"&&Sc(e,a.position.lane),e.selectedEnemyId===t){const s=e.encounter.enemies.find(i=>i.position.row==="front")??e.encounter.enemies[0];e.selectedEnemyId=s?.id??null}}function Fn(e,t){const n=e;for(let a=0;a<3;a+=1){const s=ae(n,a,"front",t),i=ae(n,a,"back",t);if(!s||!i||!s.alive||!i.alive)continue;const o=s.maxHp>0?s.hp/s.maxHp:0,d=i.maxHp>0?i.hp/i.maxHp:0,p=(s.shields<s.maxShields||s.hp<s.maxHp)&&(s.shields===0||o<dc),h=!(i.isFragile??!1)&&d>=o;p&&h&&(s.position.row="back",i.position.row="front",_(`${i.name} surges forward in lane ${a+1} as ${s.name} pulls back to recover.`))}}function jn(e,t){const n=e;for(let a=0;a<3;a+=1){const s=ae(n,a,"front",t);if(s&&s.alive)continue;const i=ae(n,a,"back",t);if(!i||!i.alive)continue;const o=i.isFragile??!1;(i.wantsFrontline||!o)&&(i.position.row="front",_(`${i.name} fills the empty front line in lane ${a+1}.`))}}function _c(e){Fn(e,"player"),Fn(e,"enemy"),jn(e,"player"),jn(e,"enemy"),Tc(e),Cc(e),Ie(e)}function Cc(e){const t=e;for(let n=0;n<3;n+=1){const a=ae(t,n,"front","enemy"),s=ae(t,n,"back","enemy");if(!a||!a.alive||s&&s.alive)continue;const i=t.encounter.enemies.find(o=>o.side==="enemy"&&o.alive&&o.position.row==="front"&&o.id!==a.id&&o.position.lane!==n&&!(o.wantsFrontline??!1));i&&(i.position={lane:n,row:"back"},_(`${i.name} drops into lane ${n+1} to shelter behind ${a.name}.`))}}function Tc(e){const t=e;for(let n=0;n<3;n+=1){const a=ae(t,n,"front","enemy"),s=ae(t,n,"back","enemy");if(!a||!a.alive||s&&s.alive)continue;const i=t.encounter.enemies.find(d=>d.side!=="enemy"||!d.alive||d.position.row!=="front"||d.position.lane===n||(d.wantsFrontline??!1)?!1:fc(t,d.position.lane,"enemy").filter(p=>p.alive&&p.id!==d.id).length>0);if(!i)continue;i.position={lane:n,row:"back"};const o=a.name??`Lane ${n+1}`;_(`${i.name} maneuvers into lane ${n+1} to take cover behind ${o}.`)}}function xe(e,t,n,a){const s=Pt[t];if(!s||e<=0)return 0;const i=n.tags||[];if(a.shields>0){let u=s.vsShields*(n.shieldMod??1);i.includes("shield_breaker")&&(u*=1.2);const p=Math.max(0,Math.round(e*u));return a.shields=Math.max(0,a.shields-p),p}let o=s.vsHull*(n.armorMod??1);i.includes("armor_piercing")&&(o*=1.2);const d=Math.max(0,Math.round(e*o));return a.hp=Math.max(0,a.hp-d),a.alive=a.hp>0,d}function _(e){const t=l.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}const Ec={near_miss:{amount:5,source:"dodge",label:"near miss"},perfect_dodge:{amount:10,source:"dodge",label:"perfect dodge"},light_damage:{amount:15,source:"risk",label:"light damage"},heavy_damage:{amount:25,source:"risk",label:"heavy damage"},heroic_spike:{amount:40,source:"risk",label:"heroic spike"}},Rc={risk:"Retribution Burst",variation:"Adaptive Strike",dodge:"Phantom Strike"};function Pc(){return{charge:0,variationPoints:0,riskPoints:0,dodgePoints:0,recentCategories:[]}}function vt(){const e=l.combat;return e?(e.comboMeter||(e.comboMeter=Pc()),e.comboMeter):null}function vs(e,t,n){if(e<=0)return;const a=vt();a&&(a.charge=Math.min(ys,a.charge+e),t==="variation"?a.variationPoints+=e:t==="risk"?a.riskPoints+=e:a.dodgePoints+=e,_(`Combo +${e}${n?` (${n})`:""}.`),Bc(a))}function bt(e){const t=vt();if(!t)return;t.recentCategories.unshift(e),t.recentCategories.length>lc&&t.recentCategories.pop();const n=t.recentCategories.slice(0,3),a=new Set(n).size;let s=a*5;a>=3&&(s+=10),vs(s,"variation","variation")}function Ic(e){const t=[["variation",e.variationPoints],["risk",e.riskPoints],["dodge",e.dodgePoints]];return t.sort((n,a)=>a[1]-n[1]),t[0][1]===0?"variation":t[0][0]}function Bc(e){if(e.ready||e.charge<ys)return;const t=Ic(e);e.ready={type:t,label:Rc[t]},e.charge=0,e.variationPoints=0,e.riskPoints=0,e.dodgePoints=0,e.recentCategories=[],_(`Combo meter ready: ${e.ready.label}!`)}function Dc(){const e=vt();if(!e||!e.ready)return null;const t=e.ready.type;return e.ready=void 0,t}function De(e){const t=Ec[e];t&&vs(t.amount,t.source,t.label)}function Ac(){const e=l.ship,t=e.weapons.map(s=>s?K(s)?.damage??0:0).filter(s=>s>0),n=t.length?t.reduce((s,i)=>s+i,0)/t.length:0,a=Math.max(e.weaponPower??10,Math.round(n));return Math.max(10,Math.round(a*1.25))}function dn(e={}){return{id:e.id??"combo_finish",name:e.name??(e.tags?.includes("armor_piercing")?"Combo Penetrator":"Combo Burst"),description:e.description,type:e.type??"energy",size:e.size??"small",damage:e.damage??0,damageType:e.damageType??"energy",shieldMod:e.shieldMod??1,armorMod:e.armorMod??1,accuracy:e.accuracy??1,critChance:e.critChance??0,critMultiplier:e.critMultiplier??1,energyCost:e.energyCost??0,cooldown:e.cooldown??0,price:e.price??0,tags:e.tags??[],targetingMode:e.targetingMode,canBypassCover:e.canBypassCover,splashRadius:e.splashRadius,linePierce:e.linePierce}}function bs(e){return e.encounter.enemies.filter(t=>t.alive)}function un(e,t){return e.encounter.enemies.find(n=>n.alive&&n.position.row==="back"&&n.id!==t)}function Nc(e,t){const n=dn({tags:["shield_breaker"],armorMod:1.1,shieldMod:1.05}),a=Ie(e);if(!a||!a.alive)return!1;const s=un(e,a.id)??e.encounter.enemies.find(u=>u.alive&&u.id!==a.id),i=Math.max(10,Math.round(t*1.1)),o=xe(i,"energy",n,a);o>0&&(_e(o),_(`Adaptive Strike slams ${a.name} for ${o} damage.`),a.hp<=0&&Ce(e,a.id));let d=0;if(s){const u=Math.max(8,Math.round(t*.85));d=xe(u,"energy",n,s),d>0&&(_e(d),_(`Adaptive Strike pivots to ${s.name} for ${d} damage.`),s.hp<=0&&Ce(e,s.id))}return o>0||d>0}function Lc(e,t){const n=un(e)??Ie(e)??bs(e)[0];if(!n)return!1;const a=dn({tags:["shield_breaker","armor_piercing"],armorMod:1.35,shieldMod:1.1}),s=Math.max(3,Math.round(t*.5)),i=Math.max(5,t-s);let o=0;if(i>0){const p=xe(i,"energy",a,n);p>0&&(_e(p),o+=p)}if(s>0&&n.alive){const p=n.hp;n.hp=Math.max(0,n.hp-s);const m=p-n.hp;m>0&&(_e(m),o+=m),n.alive=n.hp>0}if(n.hp<=0&&Ce(e,n.id),o<=0)return!1;const d=l.ship,u=Math.max(1,Math.round(o*(.02+Math.random()*.03)));return d.hp=Math.min(d.maxHp,d.hp+u),_(`Retribution Burst shreds ${n.name} for ${o} and restores ${u} hull.`),!0}function Fc(e,t){const n=un(e)??Ie(e)??bs(e)[0];if(!n)return!1;const a=dn({tags:["shield_breaker"],armorMod:1.2}),s=Math.max(8,Math.round(t*.9)),i=xe(s,"energy",a,n);return i>0&&(_e(i),_(`Phantom Strike ghosts ${n.name} for ${i} damage.`),n.hp<=0&&Ce(e,n.id)),e.playerStatus.maneuverBonus=Math.max(e.playerStatus.maneuverBonus||0,20),e.playerStatus.maneuverTurns=Math.max(e.playerStatus.maneuverTurns,1),i>0}function jc(){const e=vt();if(!e||!e.ready)return!1;const t=l.combat;if(!t)return!1;const n=Ac(),a=e.ready.type;let s=!1;if(a==="variation"?s=Nc(t,n):a==="risk"?s=Lc(t,n):a==="dodge"&&(s=Fc(t,n)),!s)return!1;Dc();const i=10+(a==="risk"?5:a==="dodge"?3:0);return pe(i,"combat"),!0}function Hc(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function Oc(e){return e??"main"}function qc(e,t){C.go(Oc(e),t)}function ye(e,t={}){const n=tc(e),s=l.ship.weapons.map(()=>0),i=Z(),o=Ja(l),d=Math.max(1,(i.enemyHpMultiplier??1)*o),u=Math.max(1,Math.round(i.enemyCountMin??1)),p=Math.max(u,Math.round(i.enemyCountMax??u)),m=Math.floor(Math.random()*(p-u+1))+u,h=Math.max(1,m),g=nc(h),f=sc(n,d,g),v=ic(n,f.length);l.combat={encounter:{id:n.id,name:v,enemies:f,tags:n.tags?[...new Set(n.tags)]:[]},selectedEnemyId:f[0]?.id??null,playerCooldowns:s,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:l.ship.hp,round:1,log:[`${v} engages you in combat!`],adviceToken:Math.random(),moduleAbilityCooldowns:{},returnTo:t.returnScreen,returnParams:t.returnParams},eo(8),h>1&&l.combat.log.push(`Multiple bogies detected (${h} ships).`),C.go("combat")}function zc(e){const t=Uc(e);ye(t)}function Uc(e){if(!S?.enemies?.length)return"pirate_cutter";const t=an(l),n=sn(l.time.day),a=Z(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,l.time.day-1),i=Math.max(0,a.difficultyScalePerShipPower??1),o=t*i*s;let d=o*(.6+.2*n),u=o*(.9+.4*n);e&&ft(e,"core")&&(d=t*.4,u=t*.8);const p=S.enemies.map(f=>({id:f.id,power:Hc(f)})),m=p.filter(f=>f.power>=d&&f.power<=u);if(m.length)return m[Math.floor(Math.random()*m.length)].id;let h=p[0],g=Math.abs(p[0].power-t);for(const f of p){const v=Math.abs(f.power-t);v<g&&(h=f,g=v)}return h.id}function Xe(e,t,n="normal"){const a=l.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){_("You must choose a weapon to fire.");return}xs(t,n);break;case"fire_all":Xc(n);break;case"combo_finish":if(!jc()){_("Combo finisher is not ready.");return}break;case"brace":Jc();break;case"flee":if(Kc())return;break}Ms()}}function Ms(){const e=l.combat;if(e){if(e.encounter.enemies.length===0){nl();return}if(Qc(),!!l.combat){if(l.ship.hp<=0){al();return}_c(e),tl(),e.adviceToken=Math.random(),e.round+=1,e.totalRounds+=1}}}function Wc(){const e=l.combat;return e?S?l.ship.components.map(t=>{const n=Ee(t);if(!n?.ability)return null;const a=e.moduleAbilityCooldowns?.[t]??0;return{componentId:t,componentName:n.name,ability:n.ability,cooldown:a,ready:a<=0}}).filter(t=>!!t):[]:[]}function Gc(e){bt("utility");const t=l.combat;if(!t)return;const n=Ee(e);if(!n||!n.ability){_("Module ability offline.");return}const a=n.ability;t.moduleAbilityCooldowns=t.moduleAbilityCooldowns??{};const s=Math.max(0,t.moduleAbilityCooldowns[e]??0);if(s>0){_(`${n.name} is recalibrating (${s} turn${s===1?"":"s"}).`);return}const i=Ie(t);if(!i){_("No enemy target available.");return}Vc(t,n,a,i)&&(t.moduleAbilityCooldowns[e]=Math.max(a.cooldown??3,1),Ms())}function Vc(e,t,n,a){const s=e,i=a.position.lane;switch(n.type){case"pull":{if(a.position.row!=="back")return _("Pull modules need a back-line target."),!1;const o=ae(s,i,"front","enemy");o&&o.id!==a.id&&(o.position.row="back",_(`${o.name} is forced back to make room.`)),a.position.row="front",_(`${t.name} hauls ${a.name} into lane ${i+1}'s front line.`);break}case"push":{if(a.position.row!=="front")return _("Push modules need a front-line target."),!1;const o=ae(s,i,"back","enemy");o&&o.id!==a.id&&(o.position.row="front"),a.position.row="back",_(`${t.name} shoves ${a.name} back into cover.`);break}default:return!1}if(n.statusEffect){const o=n.effectDuration??1;it(a,n.statusEffect,o)&&(n.statusEffect==="jammed"?_(`${a.name}'s systems are jammed for ${o} turn${o===1?"":"s"}.`):_(`${a.name} cannot react for ${o} turn${o===1?"":"s"}.`))}return!0}function xs(e,t,n={}){bt("weapon_attack");const a=l.combat;if(!a)return;const s=l.ship;if(e<0||e>=s.weapons.length){_("Invalid weapon slot.");return}const i=s.weapons[e];if(!i){_("That hardpoint is empty.");return}const o=K(i);if(!o){_("Missing weapon data.");return}const u=s.weapons.filter((M,$)=>$!==e&&!!M&&(a.playerCooldowns[$]??0)<=0).length===0,p=ne(),m=a.round<=1,h={...o,critChance:Math.min(.95,(o.critChance??0)+(p.critBonus??0)+(m?p.critBonus??0:0))},g=a.playerCooldowns[e]??0;if(g>0){_(`${o.name} is still recharging (${g} turn${g===1?"":"s"}).`);return}const f=t==="called_shot"?wn.damageMultiplier:1,v=t==="called_shot"?wn.accuracyMultiplier:1,w=Ma(h,{accuracyMultiplier:v,damageMultiplier:f*(p.playerDamageBonus??1)});if(w<=0){const M=t==="called_shot"?"called shot goes wide":"misses";_(`You fire ${o.name}, but it ${M}.`),a.playerCooldowns[e]=o.cooldown;return}const x=Ie(a);if(!x){_("No enemy target available."),a.playerCooldowns[e]=o.cooldown;return}const P=a;if(!Lt(P,o,x)){const M=ae(P,x.position.lane,"front","enemy");_(M&&M.alive?`${o.name} cannot hit ${x.name} because ${M.name} is covering the lane.`:`${o.name} cannot reach ${x.name}.`),a.playerCooldowns[e]=o.cooldown;return}const T=x.shields>0?"shields":"hull";let I=w;u&&(I=Math.max(1,Math.round(w*ac)),_(`Solo fire bonus: ${o.name} punches harder this turn.`));const y=!n.isVolley&&x.shields>0?cc:1;I=Math.round(I*y);const B=xe(I,o.damageType,o,x);B>0&&(_e(B),$c(o.damageType,B,x));const E=t==="called_shot"?"called shot":"normal shot";_(`You strike ${x.name}'s ${T} with ${o.name} (${E}) for ${B} damage.`),B>0&&o.tags?.includes("disruptor")&&(a.enemyStatus.weaponJammedTurns=Math.min(2,a.enemyStatus.weaponJammedTurns+1),_(`${x.name}'s weapons are disrupted!`)),a.playerCooldowns[e]=o.cooldown,x.hp<=0&&(_(`${x.name} is destroyed!`),Ce(a,x.id))}function Yc(e){if(!S)return[];const t=l.ship,n={disruptive:0,energy:1,kinetic:2,explosive:3},a=[];for(let s=0;s<t.weapons.length;s+=1){const i=t.weapons[s];if(!i)continue;const o=K(i);!o||(e.playerCooldowns[s]??0)>0||a.push({idx:s,weapon:o})}return a.sort((s,i)=>{const o=n[s.weapon.damageType]??4,d=n[i.weapon.damageType]??4;return o!==d?o-d:s.idx-i.idx})}function Xc(e){const t=l.combat;if(!t)return;const n=Yc(t);if(!n.length){_("No weapons are ready to fire.");return}for(const{idx:a}of n){if(!l.combat||l.combat.encounter.enemies.length===0)break;xs(a,e,{isVolley:!0,volleyCount:n.length})}}function Jc(){bt("defense");const e=l.combat;e&&(e.playerBracing=!0,_("You brace for impact, diverting power to shields and hull integrity."))}function Kc(){bt("movement");const e=l.combat;if(!e)return!1;if(!e.canEscape)return _("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4;let n=0;e.playerStance==="evasive"&&(n=.15),e.playerStance==="brace"&&(n=-.05),e.playerStance==="overcharge"&&(n=-.1);const a=(l.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),i=ct((a-40)*.01,-.15,.15),o=Z(),d=ne(),u=(o.fleeSuccessBonus??0)/100+(d.fleeBonus??0),p=ct(t+n+i+u,.05,.95);return Math.random()<=p?(_(`You punch the thrusters and break free! (Flee chance ${(p*100).toFixed(0)}%)`),Se(l,-5),l.combat=null,Qr(l,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),C.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(_(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(p*100).toFixed(0)}%)`),!1)}function Zc(e){const t=l.ship.maxHp||100;return e>=Math.max(1,Math.round(t*.25))}function Qc(){const e=l.combat;if(!e)return;const t=l.ship.hp,n=l.ship.shields,a=l.ship.maxHp||100;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,_("Enemy weapons are jammed this round!");return}const s=e,i=e.encounter.enemies.filter(H=>H.alive&&!Ln(H,"immobilized")&&H.weaponIds.some((Y,D)=>Y&&(H.weaponCooldowns[D]??0)<=0));if(!i.length){_(`The ${e.encounter.name} reloads while you advance.`);return}const o=i[Dn(0,i.length-1)],d=o.weaponIds.map((H,Y)=>({id:H,idx:Y})).filter(({id:H,idx:Y})=>!!H&&(o.weaponCooldowns[Y]??0)<=0);if(!d.length){_(`The ${o.name} catches its breath while reloading.`);return}const u=d[Dn(0,d.length-1)],p=K(u.id);if(!p){_(`The ${o.name} fumbles its weapon.`);return}const m=bc(),h=Mc(o,p,s,[m]);if(!h){_(`${o.name} finds no valid targets.`);return}const g=Ln(o,"jammed");g&&_(`${o.name} is still recovering from jammed systems.`);const f=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),v=Z(),w=ne(),x=e.round<=1,P=Math.max(0,(1-f)*(v.enemyAccuracyMultiplier??1)*Math.max(0,1-(w.dodgeBonus??0))*(x?Math.max(0,1-(w.dodgeBonus??0)):1)),T=oc(e.playerStance),I=(de("precision_t1_targeting_assist")?.05:0)+((de("precision_t2_headshot_focus")||de("precision_t3_backline_breach"))&&h.position.row==="back"?.05:0),y=de("precision_t3_backline_breach")&&h.position.row==="back"?1.08:1,B=Math.max(0,P*T*(g?hc:1)*(1+I)*y);let E=Ma(p,{accuracyMultiplier:B});const M=Ja(l),$=Math.max(0,Math.round(E*(v.enemyDamageMultiplier??1)*M)),k=l.ship.hp/(l.ship.maxHp||1)<=.3,N=de("survival_t3_last_stand_matrix")&&k?Math.round($*.85):$;Zc(N)&&_("Sensors pick up a heavy attack; brace now to soften the blow!"),E=N,e.playerBracing&&(E=Math.round(E*Ti)),E=rc(E,p.damageType,e.playerStance),E=Math.max(0,Math.round(E*(v.playerDamageTakenMultiplier??1)*Math.max(.1,w.damageTakenMultiplier??1)*(x?Math.max(.1,w.damageTakenMultiplier??1):1)));let R=E;if(e.playerStatus.shieldBoost>0){const H=Math.min(e.playerStatus.shieldBoost,R);e.playerStatus.shieldBoost-=H,R-=H}if(l.ship.shields>0&&R>0){const H=Math.min(l.ship.shields,R);l.ship.shields-=H,R-=H}R>0&&(l.ship.hp=Math.max(0,l.ship.hp-R));const F=Math.max(0,R),G=l.ship.hp,V=Math.max(0,n-l.ship.shields);F>0?t<=F&&G===1?De("heroic_spike"):F>=a*.25?De("heavy_damage"):De("light_damage"):V<=0?(De("perfect_dodge"),pe(5,"combat")):(De("near_miss"),pe(3,"combat")),_(`The ${o.name} hits you with ${p.name} for ${E} damage.`),ri(E),Se(l,-Math.min(6,Math.floor(E/10))),o.weaponCooldowns[u.idx]=p.cooldown+(g?1:0),xc(s,p,h,E)}function el(){const e=l.combat;if(!e)return null;const t=e.encounter.enemies;if(!t.length)return null;const n=t.flatMap(p=>p.weaponCooldowns.map(m=>m??Number.MAX_SAFE_INTEGER)),a=Math.min(...n.length?n:[Number.MAX_SAFE_INTEGER]),s=[];if(a<=1){const p=ct(.6+(1-a)*.2,.65,.95);s.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${a} turn${a===1?"":"s"} - brace to soften the incoming blow.`,suggestion:"brace",confidence:p})}const i=t.find(p=>p.position.row==="front")??t[0];if(i&&i.shields<=0){const m=e.playerCooldowns.filter(g=>g<=0).length/Math.max(1,l.ship.weapons.length),h=ct(.6+m*.3,.6,.9);s.push({text:"Shields down - called shots are primed to shatter the hull before the enemy recovers.",suggestion:"overcharge",confidence:h})}l.ship.hp/l.ship.maxHp<.4&&s.push({text:"Hull integrity is low - brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),s.push({text:"Balanced posture - cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const o=((e.adviceToken??Math.random())+e.round*.13)%1,d=Math.floor(o*s.length),u=s[d];return{...u,confidence:u.confidence}}function tl(){const e=l.combat;if(e){e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0);for(const t of e.encounter.enemies)t.weaponCooldowns=t.weaponCooldowns.map(n=>n>0?n-1:0);if(wc(e),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)),e.moduleAbilityCooldowns)for(const t of Object.keys(e.moduleAbilityCooldowns)){const n=e.moduleAbilityCooldowns[t];n>0&&(e.moduleAbilityCooldowns[t]=Math.max(0,n-1))}}}function nl(){const e=l.combat;if(!e)return;const t=e.encounter;_(`The ${t.name} explodes under your punishing fire. Victory is yours.`);const n=Math.max(0,e.startingHp-l.ship.hp),a=e.totalRounds<=3,s=n<=5,i=or(t.id,t.name,{quickKill:a,lowDamageTaken:s},t.tags);if(i){l.lastBattleResult=i;const u=[];i.creditsEarned&&u.push(`Credits: +${i.creditsEarned}`),i.commodities.length&&u.push(`Cargo: ${i.commodities.map(p=>`${p.qty} ${p.id}`).join(", ")}`),i.weapons.length&&u.push(`Weapons: ${i.weapons.join(", ")}`),i.components.length&&u.push(`Components: ${i.components.join(", ")}`),i.missionsGranted.length&&u.push(`Missions: ${i.missionsGranted.join(", ")}`),_(`Loot recovered — ${u.join(" | ")||"nothing notable."}`),a&&_("Because you won quickly, salvage yields are richer."),s&&_("Minimal hull damage preserved more intact cargo.")}else _("No notable loot recovered.");const o=3+(a?2:0)+(s?1:0);Se(l,o),i?.creditsEarned&&i.creditsEarned>300&&Se(l,2),t.tags.some(u=>/navy|elite/.test(u))&&Se(l,2);const d=Math.max(15,Math.round(20+t.enemies.length*10+(a?10:0)+(s?5:0)));if(pe(d,"combat"),ci(),li(),mo(t.id),t.tags.some(u=>/pirate|raider/i.test(u))||t.id.includes("pirate")||t.id.includes("raider")){const u=Z().repGainMultiplier??1;Ka(Math.round(3*u))}l.combat=null,qc(e.returnTo,e.returnParams)}function al(){_("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),l.ship.hp=0,l.ship.shields=0,l.combat=null,l.notifications.push("Critical failure — hull integrity dropped to zero."),Ga("ship_destroyed","Ship destroyed in combat.")}function $s(e){const t=l.combat;if(!t)return;t.playerStance=e;const n=We(e);_(`Stance changed to ${n.label}.`)}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function sl(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function il(e,t){ol(e,t).lastRiskSeenDay=e.time.day}function ol(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function rl(e){e.time.day+=1,rr(e),cr(e),mi(e.time.day),Aa(e),Vo(e),bo(e),sl(e),Zr(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{hl(e)};function ws(){return S?S.systemsById:null}function ks(e){const t=ws();return t?t[e]??null:null}function cl(e,t){return e.neighbors.find(n=>n.id===t)??null}let pn=0,Hn=1;function ll(e){e!==Hn&&(Hn=e,pn=0)}function mn(e){return e<=0?!1:pn<e}function hn(){pn+=1}function Me(e){Z().showEncounterDebug&&l.notifications.push(`Encounter debug: ${e}`)}function Mt(){return ks(l.location.systemId)}function dl(){const e=Mt();if(!e)return[];const t=ws();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:Ss(e,a,n)}:null}).filter(n=>n!==null):[]}function Ss(e,t,n){const a=ne(),s=(e.baseDanger+t.baseDanger)/2,i={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},o=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,d=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,u=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,p=(i[e.region]??0)+(i[t.region]??0),m=Math.max(1,Math.round(n.distance*d+Math.max(0,p)*2)),h=lt(.1*n.distance+s*.12+u+p+(n.laneType==="wildspace"?.05:0),.1,.95),g=Math.min(.95,Math.max(.1,h)),f=Math.max(0,g-Math.max(0,a.hazardDetectionBonus??0)),v=Math.max(1,Math.round(n.distance*o*(1+s*.06))),w=Math.max(1,Math.round(v*Math.max(.1,a.fuelCostMultiplier??1))),x=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:m,fuelCost:w,hazardChance:f,hazardMitigation:Math.max(0,g-f),routeType:x,laneType:n.laneType,distance:n.distance}}function lt(e,t,n){return Math.max(t,Math.min(n,e))}function _s(e){const t=l.ship.cargo||{};let n=0,a=0,s=0;for(const[o,d]of Object.entries(t)){if(!d)continue;const u=re(o);if(!u||u.legalStatus!=="illegal"&&u.legalStatus!=="restricted")continue;const p=se(e.id,o);s+=p.sell*d,u.legalStatus==="illegal"?n+=d:a+=d}const i=n+a;return i<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:i,estimatedValue:s}}function ul(e,t,n,a=ne()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.08),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.05),n==="trade_lane"&&(s+=.06);const i=1+Math.min(1,e.illegalUnits*.06+e.restrictedUnits*.025),o=Math.max(0,a.scanDetectionMultiplier??1),d=Math.max(.5,a.illegalTolerance??1),u=lt(s*i*o/d,0,.95),{detectionReduction:p}=Zt();return Math.max(0,u-p)}function pl(e,t){const n=_s(e);if(!n)return!1;const a=ne(),s=ul(n,e,t.routeType,a);if(l.notifications.push(`Warning: checkpoint scan imminent (${Math.round(s*100)}% detection chance).`),Math.random()>s)return!1;const i=l.ship.cargo||{};let o=0;for(const[T,I]of Object.entries(i)){if(!I)continue;const y=re(T);y&&y.legalStatus==="illegal"&&(o+=I,i[T]=0)}if(l.ship.cargo=i,typeof window<"u"&&window.confirm("Contraband detected. Fight the authorities to keep your haul?"))return ye("navy_interceptor",{returnScreen:"travel",returnParams:{message:"You chose to fight the checkpoint."}}),!0;const u=Math.max(25,Math.round(n.estimatedValue*.35)),p=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,m=u+p,{fineDiscount:h}=Zt(),g=Math.round(m*h),f=Math.max(0,m-g);l.player.credits=Math.max(0,l.player.credits-f);const v=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25)),w=Math.round(v*h*.6),x=Math.max(0,v-w);Ka(x);const P=n.restrictedUnits>0?" (restricted goods fined, not seized)":"";return l.notifications.push(`Checkpoint scans flag contraband. Seized ${o} illegal units, fined ${f} credits${P}, wanted +${x}.`),!0}function ml(e,t,n,a){const s=lt((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),i=lt(t,0,.95),o=Math.max(0,Math.round((s-i)*100));o>0&&l.notifications.push(`Hazard scanners trimmed travel risk by ${o}% (current hazard ${(i*100).toFixed(0)}%).`)}function hl(e){const t=Mt();if(!S||!t)return;const n=cl(t,e);if(!n){const M=`No direct route from ${t.name} to ${e}.`;console.warn(M),l.notifications.push(M),C.go("main",{message:M});return}const a=ks(e);if(!a){const M=`Destination ${e} is unknown.`;console.warn(M),l.notifications.push(M),C.go("main",{message:M});return}const s=Ss(t,a,n),i=Math.max(0,O.fuelCostMultiplier??1),o=de("control_t3_hazard_mapping")?.03:0,d=de("control_t3_hazard_mapping")?.95:1,u=Math.max(0,Math.round(s.fuelCost*i*d)),p=Math.max(0,Math.min(3,(O.travelRiskScaling??100)/100)),m=Z(),h=Math.max(0,m.globalDangerMultiplier??1),g=Math.min(.95,Math.max(0,s.hazardChance*p*h-o)),f={...s,fuelCost:u,hazardChance:g},v=on(l),w=Math.ceil(f.fuelCost*v.fuel);if(l.ship.fuel<w){console.warn("Not enough fuel to travel.");return}l.ship.fuel-=w,l.location.systemId=a.id,l.lastMiningSystemId=null,l.location.docked=!0,C.advanceActiveRoute(a.id);const x=ua(s.travelTime);l.time.turn+=x,Oo(a.id),rl(l),ll(l.time.day),il(l,a.id),pi();const P=ho(l,a.id);P.completed.length&&console.log(`Arrived at ${a.id}: checked ${P.checked} contracts, completed ${P.completed.join(", ")}.`);const T=Number.isInteger(x)?x.toFixed(0):x.toFixed(2),I=Math.abs(x-1)<.01?"":"s",y=`Arrived at ${a.name} after a ${f.routeType.replace("_"," ")} (${T} turn${I}).`;ml(s,f.hazardChance,p,h),pl(a,f)&&Me("Contraband inspection triggered on arrival.");const E=Math.max(5,Math.round(s.distance*2+f.hazardChance*75+(f.routeType==="wild_jump"?10:0)));pe(E,"travel"),!gl(a)&&(yl(a)||fl(t,a,f,y)||C.go("main",{message:y}))}function fl(e,t,n,a){const s=Z(),i=Math.max(0,(s.encounterChancePerJump??100)/100),o={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*i),routeType:n.routeType},d=Ml(t)??Uo(o);return d?(Me(`Travel event triggered: ${d.name||d.id||"unknown"}`),d.type==="mining"?(Me(`Mining event surfaced: ${d.id}`),C.go("event",{eventId:d.id}),!0):!d.choices||d.choices.length===0?(Me(`Auto-resolving event: ${d.name||d.id||"unknown"}`),vl(d,a)):(C.go("event",{eventId:d.id}),!0)):(C.go("main",{message:`${a} — Uneventful transit.`}),!0)}function gl(e){const t=Z(),n=Math.max(0,t.maxEncountersPerDay??0);if(!mn(n))return!1;const a=fr({systemId:e.id,state:l,sessionFactor:1});if(Math.random()<=a){hn();const s=`Pirates intercept you near ${e.name}!`;return l.notifications.push(s),Me(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),zc(e.id),!0}return!1}function yl(e){const t=Z(),n=Math.max(0,t.maxEncountersPerDay??0);if(!mn(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),i=e.security==="high"?1.15:e.security==="low"?.65:1,o=ne(),d=_s(e),{detectionReduction:u,fineDiscount:p}=Zt(),m=d?1+Math.min(1.2,d.totalUnits*.02):1,h=Math.max(.6,m*Math.max(0,1-p*.8)),g=Math.max(0,o.scanDetectionMultiplier??1)/Math.max(.5,o.illegalTolerance??1),f=a*s*i*h*g,v=Math.min(1,Math.max(0,f*Math.max(0,1-u*.6)));if(Math.random()<=v){hn();const w=`Patrol intercepts you near ${e.name}!`;return l.notifications.push(w),Me(`Patrol encounter triggered near ${e.name} (chance ${v.toFixed(3)})`),ye("navy_interceptor"),!0}return!1}function vl(e,t){const n=Go(e);if(n.triggerCombat?.enemyId){const a=Z(),s=Math.max(0,a.maxEncountersPerDay??0);if(!mn(s))return C.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;hn();const i=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return Me(i),ye(n.triggerCombat.enemyId),!0}return C.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const bl={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function Ml(e){const t=xl(e);return t?nn(t)??null:null}function xl(e){const t=[],n=new Set(e.tags||[]),a=o=>{t.includes(o)||t.push(o)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(bl[e.id]??"mining_fragment_field"),["wildspace","anomaly","mining"].some(o=>n.has(o))&&a("mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),Math.random()<.18&&!t.includes("mining_fragment_field")&&a("mining_fragment_field"),t.length?t[Math.floor(Math.random()*t.length)]:null}function Je(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}const Cs=Gt;function Ts(e,t){e.player&&(e.player.notifications=e.player.notifications??[],e.player.notifications.push(t),console.debug("Notification added:",t))}const $l=Cs.perks??{};function wl(){const e={},t=Cs.xpTracks??{};for(const[n,a]of Object.entries(t)){const s=a.rewardsByLevel??{};for(const[i,o]of Object.entries(s)){const d=Number(i);if(!Number.isNaN(d))for(const u of o)u?.type==="perkUnlock"&&u.perkId&&(u.perkId in e||(e[u.perkId]={trackId:n,level:d}))}}return e}wl();function Es(e){return $l[e]??null}function Rs(e){return e.player?.perks??[]}function kl(e,t){if(!t.length)return!0;const n=new Set(Rs(e));return t.every(a=>n.has(a))}function Sl(e,t){if(!e.player||!t||e.player.perks.includes(t))return!1;const n=Es(t);return!n||!kl(e,n.requires??[])?!1:(e.player.perks.push(t),console.debug("Perk unlocked",t),Ts(e,`Perk unlocked: ${n.displayName}`),Cl(e),!0)}function _l(e,t){return!e.player||!Tl(e,1,`Unlock ${t}`)?!1:Sl(e,t)?!0:(e.player.perkPoints+=1,!1)}function Cl(e){if(!e.player)return{};const t={};for(const n of Rs(e)){const a=Es(n);if(a?.effects?.length)for(const s of a.effects){const i=`${s.target}.${s.stat}`,o=t[i]??{multiplier:1,flat:0};switch(s.operation){case"mul":o.multiplier*=s.value;break;case"addPercent":o.multiplier*=1+s.value;break;case"add":case"addFlat":o.flat+=s.value;break}t[i]=o}}return e.player.perkEffects=t,console.debug("Perk effects recalculated",Object.keys(t).length),t}function Tl(e,t=1,n){return!e.player||t<=0||e.player.perkPoints<t?!1:(e.player.perkPoints-=t,console.debug("Perk points spent",t,n),Ts(e,n?`Perk points spent: ${n}`:`Perk points spent: ${t}`),!0)}function Ps(e){return Sa(e.player.xpTracks??{}).map(n=>{const a=n.xpNeededForNextLevel,s=a&&a>0?Math.min(100,Math.round(n.xpIntoLevel/a*100)):100;return{id:n.track.id,displayName:n.track.displayName,level:n.level,xpIntoLevel:n.xpIntoLevel,xpNeeded:a,percent:s,type:n.track.type}})}function Is(e){const t=Ki();return Object.entries(t).map(([n,a])=>({branch:n,entries:a.map(s=>({id:s.id,displayName:s.displayName,description:s.description,tier:s.tier,branch:s.branch,unlocked:s.unlocked,source:s.source,hasRequirements:s.requires.length>0,requires:s.requires,effectTargets:s.effectTargets}))}))}function El(e){const t=new Set(e.player.perks??[]),n=Is(),a=[];for(const s of n){const i=s.entries.filter(o=>!o.unlocked).filter(o=>o.requires.every(d=>t.has(d))).sort((o,d)=>o.tier-d.tier);i.length&&a.push({id:i[0].id,displayName:i[0].displayName,branch:s.branch,tier:i[0].tier,description:i[0].description,requires:i[0].requires})}return a}function Bs(e,t=5){return(e.player.notifications||[]).slice(-t).reverse()}window.nav=(e,t={})=>{C.go(e,t)};window.toggleTools=()=>{const e=document.getElementById("toolsActions"),t=document.getElementById("toolsToggleBtn");if(!e||!t)return;const n=e.classList.toggle("collapsed");t.textContent=n?"Show":"Hide"};window.startMiningSessionFromMain=()=>{const e=l.location.systemId,t=ee(e);if(!t)return;const n="global_easy_signal_belt",a=Array.isArray(t.tags)&&t.tags.includes("mining_belt");Pe(l,e,a?void 0:n,void 0,{easySignals:!0})?C.go("mining"):C.go("main",{message:"Travel to a new system before mining again."})};window.unlockPerkAction=e=>{_l(l,e)?C.go("main",{message:"Perk unlocked!"}):(console.warn(`Failed to unlock perk ${e}`),C.go("main",{message:"Unable to unlock perk (requirements or points missing)."}))};function Rl(){const e=l,t=ee(e.location.systemId),n=(()=>{const p=(t?.description??"Unknown space").trim(),m=p.split(".")[0];return m===p?p:`${m}.`})(),a=Object.values(e.ship.cargo||{}).reduce((p,m)=>p+m,0),s=Ps(e),i=s.length>0?s.map(({displayName:p,level:m,percent:h,xpIntoLevel:g,xpNeeded:f})=>`
              <div class="xp-track-row">
                <div class="xp-track-row-header">
                  <span class="xp-track-title">${p}</span>
                  <span class="xp-track-level">Level ${m}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(h,100)}%"></div>
                </div>
                <div class="xp-track-sub">
                  ${f!==null?`${g}/${f} XP`:`${g} XP (max)`}
                </div>
              </div>
            `).join(""):'<div class="xp-track-row muted">No XP tracked yet.</div>',o=Bs(e),d=o[0],u=o;return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">${t?.name??e.location.systemId}</span>
        </div>
      </header>

      <section class="header-stats">
        <div class="header-stat">
          <i class="bi bi-cash-stack"></i>
          <div>
            <span>Credits</span>
            <strong>${e.player.credits}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-cargo"></span>
          <div>
            <span>Cargo</span>
            <strong>${a}/${e.ship.cargoCapacity}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-danger"></span>
          <div>
            <span>Wanted</span>
            <strong>${e.player.wanted}</strong>
          </div>
        </div>
        <div class="header-stat">
          <i class="bi bi-stars"></i>
          <div>
            <span>Perk Points</span>
            <strong>${e.player.perkPoints??0}</strong>
          </div>
        </div>
      </section>

      <section class="panel-card xp-track-panel">
        <p class="label">XP Tracks</p>
        <div class="xp-track-list">
          ${i}
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Bridge</h1>
          <div class="bridge-grid">
            <div class="bridge-stat">
              <i class="bi bi-person-lines-fill"></i>
              <div>
                <span>Roles</span>
                <strong>${e.player.roles.join(", ")}</strong>
              </div>
            </div>
            <div class="bridge-stat">
              <i class="bi bi-ship"></i>
              <div>
                <span>Ship</span>
                <strong>${e.ship.name}</strong>
              </div>
            </div>
            <div class="bridge-stat">
              <i class="bi bi-shield-fill"></i>
              <div>
                <span>Hull</span>
                <strong>${e.ship.hp}/${e.ship.maxHp}</strong>
              </div>
            </div>
            <div class="bridge-stat">
              <i class="bi bi-shield-shaded"></i>
              <div>
                <span>Shields</span>
                <strong>${e.ship.shields}/${e.ship.maxShields}</strong>
              </div>
            </div>
          </div>
          ${d?`<p class="muted">Log: ${d}</p>`:""}
          <div class="panel-row">
          <div class="panel-card">
            <p class="label">Fuel / Cargo</p>
            <div class="fuel-cargo-grid">
              <div class="mini-stat">
                <i class="bi bi-fuel-pump"></i>
                <div>
                  <span>Fuel</span>
                  <strong>${e.ship.fuel}/${e.ship.maxFuel}</strong>
                </div>
              </div>
              <div class="mini-stat">
                <i class="bi bi-boxes"></i>
                <div>
                  <span>Cargo</span>
                  <strong>${a}/${e.ship.cargoCapacity}</strong>
                </div>
              </div>
              <div class="mini-stat">
                <span class="pill-icon icon-credits"></span>
                <div>
                  <span>Cycle</span>
                  <strong>Day ${e.time.day} · Turn ${Je(e.time.turn)}</strong>
                </div>
              </div>
            </div>
          </div>
            <div class="panel-card">
          <p class="label">Location</p>
          <p class="value-inline" id="location-description">${n}</p>
            </div>
          </div>
        </section>
          <section class="app-log">
            <h2 class="panel-title small">Recent Log</h2>
            ${u.length?u.map(p=>`
                <div class="app-log-line">
                  <span>${p}</span>
                </div>
              `).join(""):'<div class="app-log-line muted">No log entries yet.</div>'}
          </section>
      </main>

      <nav class="app-menu" aria-label="Primary menu">
        <div class="menu-group menu-group--system">
          <span class="menu-group__label">Primary</span>
        <div class="menu-group__actions">
          <button class="btn btn-primary" onclick="nav('travel')">Travel</button>
          <button class="btn btn-primary" onclick="nav('contracts', { source: 'main_menu' })">
            Contracts
          </button>
          <button class="btn btn-primary" onclick="nav('ship')">Ship</button>
          <button class="btn btn-primary" onclick="startMiningSessionFromMain()">
            Mining
          </button>
        </div>
        </div>
        <div class="menu-row">
          <div class="menu-group menu-group--system-tools">
            <span class="menu-group__label">System</span>
        <div class="menu-group__actions">
          <button class="btn btn-primary" onclick="nav('market')" id="navMarket">Market</button>
          ${ft(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
          <button class="btn btn-primary" onclick="nav('perks')">Perks</button>
        </div>
            <div class="menu-group__header">
              <span class="menu-group__label">Tools</span>
              <button
                id="toolsToggleBtn"
                class="btn btn-ghost btn-small tools-toggle"
                onclick="toggleTools()"
                type="button"
              >
                Hide
              </button>
            </div>
            <div class="menu-group__actions" id="toolsActions">
              <button class="btn btn-ghost btn-small btn-inconspicuous" id="navDev">Dev</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `}window.attackPirateBase=e=>{const t=Pl(e);if(!t){console.warn(`Unknown base ${e}`);return}C.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function Pl(e){return S?S.basesById[e]??null:null}function Il(e){return S?Object.values(S.basesById).find(n=>n.systemId===e)??null:null}function Bl(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}const On={pirate:"Sensors pick up razor-thin kinematic volleys—expect raiders and brawlers that favor heavy hull breaks.",raider:"Raiders pressure forward with kinetic + explosive clusters. Keep shields topped and aim for front rows.",ghost:"Ghost Fleet whispers with disruptives—jam vs. shields, then focus on energy weapons.",corsair:"Corsairs hang back with energy/lance beams. Strike their hulls quickly or they will melt your shields."};function Dl(e){for(const t of e)if(On[t])return On[t];return""}window.setMapZoom=e=>{C.setZoom(e)};window.focusRoute=e=>{C.go("travel",{...C.params,focusTargetId:e})};function Al(){const e=Mt(),t=dl(),n=C.zoom||"local",a=typeof C.params.focusTargetId=="string"?C.params.focusTargetId:"",s=C.activeRoute,i=s?.nodes[s.currentIndex+1],o=s&&s.nodes.length>1?s.nodes.map(y=>ee(y)?.name??y).join(" → "):"",d=Object.values(l.ship.cargo||{}).reduce((y,B)=>y+B,0),u=t.map(({profile:y})=>y.hazardChance).reduce((y,B)=>Math.max(y,B),0),p=Math.round((u||0)*100),m=l.player.credits,h=l.player.wanted,g=`
    <section class="header-stats">
      <div class="header-stat">
        <i class="bi bi-cash-stack"></i>
        <div>
          <span>Credits</span>
          <strong>${m}</strong>
        </div>
      </div>
      <div class="header-stat">
        <span class="pill-icon icon-cargo"></span>
        <div>
          <span>Cargo</span>
          <strong>${d}/${l.ship.cargoCapacity}</strong>
        </div>
      </div>
      <div class="header-stat">
        <i class="bi bi-exclamation-triangle"></i>
        <div>
          <span>Risk</span>
          <strong>${p}%</strong>
        </div>
      </div>
      <div class="header-stat">
        <span class="pill-icon icon-danger"></span>
        <div>
          <span>Wanted</span>
          <strong>${h}</strong>
        </div>
      </div>
    </section>
  `;if(!e)return`
      <div class="app-root">
        <header class="app-header app-header--market">
          <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Loading system...</span>
          </div>
        </header>
        ${g}
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
    `;const f=e?Il(e.id):null,v=Bl(f),w=Dl(e.tags||[]),x=w?`<div class="panel-card intel-hint">${w}</div>`:"",P=f?`
      <div class="panel-card">
        <p class="label">${v}</p>
        <p class="muted">${f.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${f.id}')">
          Attack Pirate Base (Tier ${f.tier})
        </button>
      </div>
    `:"",T=e?Ol(e,t,n,a,s):"",I=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:y,route:B,profile:E})=>{const M=y.id===a,$=y.id===i,k=Nl(y.security),N=Ll(y),U=jl(E.hazardChance),R=`${E.fuelCost} fuel`,F=`${E.travelTime} turn${E.travelTime===1?"":"s"}`,G=Hl(B.laneType),V=`Distance: ${B.distance}`,H=N.join(" | "),Y=["travel-row"];return(M||$)&&Y.push("travel-row--focused"),`
              <article class="${Y.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${y.name}</span>
                  <span class="travel-row__label">${k}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${G}</span>
                    <span>${V}</span>
                  </div>
                  <span class="travel-row__label">${R} | ${F} | Risk: ${U}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${y.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${y.id}')">Jump to ${y.name}</button>
                </div>
                <span class="travel-row__label">${H}</span>
              </article>
            `}).join("");return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Travel — ${e.name}</span>
        </div>
      </header>

      ${g}

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Travel</h1>
          <p class="muted">${e.description}</p>
          ${x}
          <div class="travel-list">
            ${I}
          </div>
          <div class="panel-card">
            <div class="travel-zoom-toggle">
              <span class="label">Map View</span>
              <div class="zoom-toggle__pills">
                <button class="btn btn-pill ${n==="local"?"btn-pill--active":""}" onclick="window.setMapZoom('local')">Local</button>
                <button class="btn btn-pill ${n==="sector"?"btn-pill--active":""}" onclick="window.setMapZoom('sector')">Sector</button>
              </div>
            </div>
            ${T}
            ${o?`<p class="muted">Active route: ${o}</p>`:""}
            <div class="panel-card">
              <p class="label">Map Labels</p>
              <p class="muted">
                Each icon shows the system name; tap “Focus route” to zoom to that destination.
              </p>
              <ul class="label-list">
                ${t.map(({system:y,profile:B})=>`<li>${y.name} — ${B.travelTime} turn${B.travelTime===1?"":"s"} / ${B.fuelCost} fuel</li>`).join("")}
              </ul>
            </div>
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${P}
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
  `}function Nl(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function Ll(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(Fl)}function Fl(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function jl(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function Hl(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function Ol(e,t,n,a,s){if(!e)return'<p class="muted">Map data unavailable.</p>';const i=320,o=200,d=16,u=36,p=8,m=8,h=pt(),g=h&&a?Wt(h,e.id,a):[],f=s?.nodes??[],v=new Set([e.id]);a&&v.add(a),(h?Ut(h,e.id):t.map(({system:b})=>b.id)).forEach(b=>v.add(b)),f.forEach(b=>v.add(b)),g.forEach(b=>v.add(b));const x=b=>b.laneType==="core_lane"?"core":b.laneType==="frontier_lane"?"frontier":"wild",P=h?Fi(h,e.id,n):null,T=[],I=[];if(h&&P){const b=new Map(h.nodes.map(q=>[q.id,q])),A=new Set(P.keys());P.forEach((q,ie)=>{const ce=b.get(ie);ce&&T.push({...ce,depth:q})}),h.lanes.filter(q=>A.has(q.from)&&A.has(q.to)).forEach(q=>{const ie=Math.max(P.get(q.from)??0,P.get(q.to)??0);I.push({...q,depth:ie})})}else{const b=new Set;T.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),b.add(e.id),t.forEach(({system:A,route:q})=>{b.has(A.id)||(T.push({id:A.id,name:A.name,x:A.coords?.x??0,y:A.coords?.y??0,tags:A.tags??[],depth:1}),b.add(A.id),I.push({from:e.id,to:A.id,type:x(q),distance:q.distance,depth:1}))})}if(!T.length)return'<p class="muted">No coordinate data to render.</p>';const y=T.map(b=>b.x),B=T.map(b=>b.y),E=Math.min(...y),M=Math.max(...y),$=Math.min(...B),k=Math.max(...B),N=M-E||1,U=k-$||1,R=b=>d+(b-E)/N*(i-d*2),F=b=>o-(d+(b-$)/U*(o-d*2)),G=new Map(T.map(b=>[b.id,{...b,sx:R(b.x),sy:F(b.y)}])),V=new Set(T.map(b=>b.id)),H=new Set(f);g.forEach(b=>H.add(b)),!h&&a&&H.add(a);const Y=new Set,D=b=>{for(let A=0;A<b.length-1;A++)Y.add(st(b[A],b[A+1]))};D(f),g.length?D(g):a&&Y.add(st(e.id,a));const z=I.filter(b=>V.has(b.from)&&V.has(b.to)).map(b=>{const A=G.get(b.from),q=G.get(b.to);if(!A||!q)return"";const ie=st(b.from,b.to),ce=b.depth??Math.max(A.depth??0,q.depth??0),we=Y.has(ie),Be=we?3.2:ce<=1?2.2:1.2,ke=we?1:ce<=1?.9:.35;return`<line x1="${A.sx.toFixed(1)}" y1="${A.sy.toFixed(1)}" x2="${q.sx.toFixed(1)}" y2="${q.sy.toFixed(1)}" stroke="${ql(b.type)}" stroke-width="${Be}" stroke-linecap="round" opacity="${ke}"></line>`}).join(""),W=Array.from(G.values()).map(b=>{const A=b.id===e.id,ie=(b.depth??0)<=1,ce=H.has(b.id),we=A?7:ce?6:ie?5:3.5,Be=A?"#4CE6C3":ce?"#7dd3fc":"#ffffff",ke=ce||ie?1:.45,Ke=v.has(b.id),xt=b.name.length>16?`${b.name.slice(0,14)}...`:b.name,$t=Ke?xt:"";return`
        <g>
          <circle
            cx="${b.sx.toFixed(1)}"
            cy="${b.sy.toFixed(1)}"
            r="${we}"
            fill="${Be}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${ke}"
          ></circle>
          ${Ke?`<text x="${(b.sx+p).toFixed(1)}" y="${(b.sy-m).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${$t}</text>`:""}
        </g>
      `}).join("");return`
    <div class="travel-map" style="max-width:${i}px;margin:0 auto;">
      <svg
        width="${i}"
        height="${o}"
        viewBox="-${u} -${u} ${i+u*2} ${o+u*2}"
        role="img"
        aria-label="${n==="local"?"Local":"Sector"} system map"
      >
        ${z}
        ${W}
      </svg>
    </div>
  `}function ql(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const qn={high:"^",low:"v",stable:"-"};function zl(e={}){const t=ee(l.location.systemId);if(!t)return`
      <div class="app-root">
        <header class="app-header">
            <div class="app-title">
            <span class="app-game-title">The Veil</span>
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
    `;const n=Da();if(!n.length)return`
      <div class="app-root">
        <header class="app-header">
            <div class="app-title">
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Market — ${t.name}</span>
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
    `;const a=Object.values(l.ship.cargo||{}).reduce(($,k)=>$+k,0),s=Object.entries(l.ship.cargo||{}).filter(([,$])=>$>0).sort(($,k)=>k[1]-$[1]).slice(0,5),i=new Map;ge().filter($=>$.status==="active").forEach($=>{const k=$.requirements?.deliver;if(!k?.commodityId)return;const N=i.get(k.commodityId)??{needed:0,deliverable:!1},U=rt(k.commodityId)>=(k.quantity||0),R=!k.systemId||k.systemId===l.location.systemId;i.set(k.commodityId,{needed:N.needed+(k.quantity||0),deliverable:N.deliverable||R&&U})});const o=n.map($=>{const k=se(t.id,$.id),N=Zl($.tradeTags?.length?$.tradeTags:$.tags),U=rt($.id),R=Ql($,U),F=Ds(k.buy,a,$.id);return{commodity:$,quote:k,tags:N,cargoQty:U,metaLine:R,maxBuyable:F,profit:k.sell-k.buy}}),d=o.reduce(($,k)=>k.profit>$.profit?{profit:k.profit,entry:k}:$,{profit:Number.NEGATIVE_INFINITY,entry:o[0]}),u=d.entry?.commodity.id??"",p=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,m=o.find($=>$.commodity.id===p)||o.find($=>$.commodity.id===u)||o[0],h=o.reduce(($,k)=>{const N=k.quote.high-k.quote.buy;return N>$.delta?{delta:N,entry:k}:$},{delta:-1/0,entry:o[0]}).entry,g=o.reduce(($,k)=>{const N=k.quote.buy-k.quote.low;return N>$.delta?{delta:N,entry:k}:$},{delta:-1/0,entry:o[0]}).entry,f=["legal","restricted","illegal"];let v=0;const w=f.map($=>{const k=o.filter(F=>zn(F.commodity.legalStatus)===$);if(!k.length)return"";const N=Ft($),U=`
        <div class="market-group__header">
          <div>
            <p class="market-group__label">${N} goods</p>
            <p class="muted market-group__count">${k.length} items</p>
          </div>
          <span class="market-status market-status--${$}">${N}</span>
        </div>
      `,R=k.map(({commodity:F,quote:G,tags:V,cargoQty:H})=>{const Y=m?.commodity.id===F.id,D=i.get(F.id),z=["market-row"];Y&&z.push("market-row--highlight");const W=zn(F.legalStatus);z.push(`market-row--${W}`);const b=D?`<span class="contract-pill contract-pill--target${D.deliverable?" ready":""}">${D.deliverable?"Deliver now":"Contract target"}</span>`:"",A=`<span class="market-row__status market-row__status--${W}">${Ft(W)}</span>`,q=`${qn[G.trend]} ${G.trend}`,ie=v++;return`
            <article class="${z.join(" ")}" style="--row-index:${ie};" onclick="selectMarketCommodity('${F.id}')">
              <div class="market-row__main">
                <span class="market-row__name">${F.name}</span>
                <span class="market-row__info">
                  BUY ${G.buy} A | SELL ${G.sell} A | Held ${H}
                </span>
              </div>
              <div class="market-row__meta">
                <span class="market-row__trend">${q}</span>
                <div class="market-row__meta-line">
                  <span>${V||"Local goods"}</span>
                  ${A}
                  ${b}
                </div>
              </div>
            </article>
          `}).join("");return`
        <section class="market-group">
          ${U}
          ${R}
        </section>
      `}).join(""),x=a>0,P=`
    <div class="panel-card market-summary-card">
      <p class="label">Market Overview</p>
      <div class="market-summary__rows">
        <div>
          <span>System</span>
          <strong>${t.name}</strong>
        </div>
        <div>
          <span>Day</span>
          <strong>${l.time.day}</strong>
        </div>
        <div>
          <span>Turn</span>
          <strong>${Je(l.time.turn)}</strong>
        </div>
        <div>
          <span>Credits</span>
          <strong>${l.player.credits}</strong>
        </div>
        <div>
          <span>Fuel</span>
          <strong>${l.ship.fuel}/${l.ship.maxFuel}</strong>
        </div>
        <div>
          <span>Cargo</span>
          <strong>${a}/${l.ship.cargoCapacity}</strong>
        </div>
        <div>
          <span>Wanted</span>
          <strong>${l.player.wanted}</strong>
        </div>
      </div>
      <p id="market-message" class="muted market-summary__message">
        Credits: ${l.player.credits} | Cargo: ${Ul()}
      </p>
      <div class="market-summary__cargo">
        ${s.length?s.map(([$,k])=>{const N=re($),U=N?.mass??0,R=U?` (Mass ${Math.round(U*k)})`:"";return`<span>${k} × ${N?.name||$}${R}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${x?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,T=m?qa(t.id,m.commodity.id,1):!1,I=m?za(t.id,m.commodity.id,1):!1,y=m&&T?"":" disabled",B=m&&m.maxBuyable>1&&T?"":" disabled",E=m&&I&&m.cargoQty>0?"":" disabled",M=m?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${m.commodity.name}</strong>
        <span class="market-row__trend">${qn[m.quote.trend]} ${m.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${m.quote.buy} · SELL ${m.quote.sell}</span>
        <span>${m.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${y}
          onclick="buyCommodityAction('${m.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${B}
          onclick="buyAllCommodityAction('${m.commodity.id}', ${m.quote.buy})"
        >
          Buy Max (${m.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${E}
          onclick="sellCommodityAction('${m.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${E}
          onclick="sellAllCommodityAction('${m.commodity.id}')"
        >
          Sell All (${m.cargoQty})
        </button>
      </div>
    </div>
  `:"";return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Market — ${t.name}</span>
        </div>
      </header>

      <main class="app-main">
    <section class="data-panel market-container">
      <aside class="market-sidebar">
            ${P}
    ${Wl(t.id)}
          </aside>
          <div class="market-list">
            <h2 class="panel-title small">Goods</h2>
            ${w}
            ${M}
          </div>
        </section>
        <section class="market-priority">
          <h2 class="panel-title small">Priority Paths</h2>
          ${Yl()}
        </section>
        <section class="market-footer">
          ${Gl(t,h,g,d.entry)}
        </section>
        ${Jl(o)}
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function Ul(){const e=l.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${l.ship.cargoCapacity}`}function Wl(e){const t=Ho(e);return t.length?`
    <div class="panel-card market-events-card">
      <p class="label">Market Events</p>
      <div class="market-event__list">
        ${t.map(a=>`
      <div class="market-event">
        <p class="value-inline">${a.label||`${a.commodityId||"local goods"} x${a.multiplier}`}</p>
        <p class="muted">Expires in ${Math.max(0,(a.expiresAtTurn??0)-l.time.turn)} turns</p>
      </div>
    `).join("")}
      </div>
    </div>
  `:`
      <div class="panel-card market-events-card">
        <p class="label">Market Events</p>
        <p class="muted">No active market events.</p>
      </div>
    `}function Gl(e,t,n,a){const s=Ha(),i=Oa(),o=e?.neighbors.map(v=>ee(v.id)).filter(v=>!!v&&s[v.id])||[],d=o.length>0?o.map(v=>{const w=Kl(e?.id,v.id),x=l.time.turn-(s[v.id]?.turn??l.time.turn),P=w.over?`${w.over.id} overpriced (+${Math.round(w.over.delta*100)}%)`:"no overpay signal",T=w.under?`${w.under.id} underpriced (${Math.round(w.under.delta*100)}% cheaper)`:"no bargain yet";return`<p class="insight-mini">${v.name}: ↑ ${P} · ↓ ${T} (age ${x}t)</p>`}).join(""):'<p class="insight-mini muted">No neighbor intel yet.</p>',u=[];t&&u.push(`<span>📈</span> ${t.commodity.name} high runs ${Math.round(t.quote.high-t.quote.buy)} above buy (${t.quote.high})`),n&&u.push(`<span>📉</span> ${n.commodity.name} low sits ${Math.round(n.quote.buy-n.quote.low)} below buy (${n.quote.low})`);const p=u.length?u.map(v=>`<p class="insight-mini">${v}</p>`).join(""):'<p class="insight-mini muted">No strong pulses yet.</p>',m=a?`<p class="insight-mini"><span>💡</span> Consider ${a.commodity.name}. Buy @ ${a.quote.buy} A·, sell @ ${a.quote.high} A· (high).</p><p class="insight-mini muted">Profit spread: +${a.profit}</p>`:'<p class="insight-mini muted">No hot tip available.</p>',h=l.notifications.filter(v=>{const w=v.toLowerCase();return w.includes("market")||w.startsWith("bought")||w.startsWith("sold")}).slice(-6).reverse(),g=h.length?h.map(v=>`<p class="insight-mini">${v}</p>`).join(""):'<p class="insight-mini muted">No market-relevant log entries yet.</p>',f=(v,w)=>`<p class="insight-title"><span class="insight-icon" aria-hidden="true">${v}</span>${w}</p>`;return`
    <div class="panel-card market-insights-card">
      <p class="label">Market Insights</p>
      <div class="insight-section">
        ${f("🛰️","Intel Tools")}
        <p class="insight-mini muted">System: ${e?.name||"Unknown"}</p>
        <p class="insight-mini">Neighbor Intel ${i} cr — highlights over/under priced goods (actuals drift on arrival).</p>
        <div class="insight-list">
          ${d}
        </div>
        <div class="app-actions">
          <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${i})</button>
        </div>
      </div>
      <div class="insight-section">
        ${f("📈","Trending")}
        ${p}
      </div>
      <div class="insight-section">
        ${f("💡","Hot Tip")}
        ${m}
      </div>
      <div class="insight-section">
        ${f("📝","Market Log")}
        ${g}
      </div>
    </div>
  `}const Vl=["taxEvasion","smuggling","bribery"];function Yl(){return`
    <div class="panel-card strategy-panel">
      <p class="label">Profit Paths</p>
      <div class="strategy-panel__cards">
        ${Vl.map(t=>Xl(t)).join("")}
      </div>
    </div>
  `}function Xl(e){const t=Pa(e),n=Math.round(xo(e)),a=`${n}%`;return`
    <div class="strategy-card strategy-card--${e}">
      <div class="strategy-card__header">
        <strong>${t.name}</strong>
        <span>${a}</span>
      </div>
      <div class="strategy-progress">
        <div class="strategy-progress__fill" style="width:${n}%"></div>
      </div>
      <p class="muted strategy-card__benefit">Invest ${t.cost} cr — ${t.benefit}.</p>
      <div class="strategy-card__actions">
        <button class="btn btn-chip" onclick="pursueTradeStrategy('${e}')">
          Invest ${t.cost} cr
        </button>
      </div>
    </div>
  `}function Jl(e){if(!e.length)return"";const t=e.map(h=>({label:h.commodity.name,value:h.quote.high})),n=e.map(h=>({label:h.commodity.name,value:h.quote.low})),a=Math.max(...t.map(h=>h.value)),s=Math.min(...n.map(h=>h.value)),i=Math.max(1,a-s),o=280,d=120,u=t.map((h,g)=>{const f=g/Math.max(1,t.length-1)*o,v=d-h.value/a*d;return`${f},${v}`}).join(" "),p=n.map((h,g)=>{const f=g/Math.max(1,n.length-1)*o,v=d-(h.value-s)/i*d;return`${f},${v}`}).join(" "),m=t.slice(0,6).map(h=>`<div class="trend-line">
           <span class="trend-label">${h.label}</span>
           <span class="trend-value">High ${h.value}</span>
         </div>`).join("");return`
    <div class="panel-card trend-graph-card">
      <details>
        <summary class="label">Price Graph (Highs &amp; Lows)</summary>
        <svg width="${o}" height="${d}" viewBox="0 0 ${o} ${d}">
          <polyline
            fill="none"
            stroke="rgba(66, 224, 198, 0.6)"
            stroke-width="2"
            points="${u}"
          />
          <polyline
            fill="none"
            stroke="rgba(248, 113, 113, 0.6)"
            stroke-width="2"
            points="${p}"
          />
        </svg>
      <div class="market-trend-rows">${m}</div>
    </details>
  </div>
`}function Kl(e,t){if(!e)return{over:null,under:null};const a=Ha()[t];if(!a)return{over:null,under:null};let s=null,i=null;const o=Math.max(0,l.time.turn-a.turn),d=Math.max(.5,1-o*.05);for(const[u,p]of Object.entries(a.prices)){const m=se(e,u);if(m.sell>0&&p.buy>m.sell){const h=(p.buy-m.sell)/m.sell*d;(!s||h>s.delta)&&(s={id:u,delta:h})}if(m.buy>0&&p.sell<m.buy){const h=(m.buy-p.sell)/m.buy*d;(!i||h>i.delta)&&(i={id:u,delta:h})}}return{over:s,under:i}}function Ds(e,t,n){if(e<=0)return 0;const a=Math.floor(l.player.credits/e),s=Math.max(0,l.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function Zl(e){return e?.length?Array.from(new Set(e)).map(n=>fn(n.replace(/_/g," "))).join(" | "):""}function Ql(e,t){const n=fn(e.tier||"standard"),a=Ft(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,i=[`Held ${t}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" | ")}function fn(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Ft(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??fn(e)}function zn(e){return e==="restricted"||e==="illegal"?e:"legal"}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=l.location.systemId,n=re(e),a=Ua(t,e,1),s=se(t,e).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=l.location.systemId,n=re(e),a=en(t,e,1),s=se(t,e).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=l.location.systemId,a=l.ship.cargo||{},s=Object.values(a).reduce((u,p)=>u+p,0),i=Ds(t,s);if(i<=0){nav("market");return}Ua(n,e,i);const o=re(e),d=document.getElementById("market-message");d&&(d.textContent=`Bought ${i} ${o?.name||e} for ${t*i} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=l.location.systemId,n=rt(e);if(n<=0){nav("market");return}const a=se(t,e).sell;en(t,e,n);const s=re(e),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=l.location.systemId,t=Object.entries(l.ship.cargo||{});let n=0;const a=[];for(const[i,o]of t){if(!o||!en(e,i,o))continue;n+=o;const u=re(i);a.push(`${o} ${u?.name||i}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const i=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${i}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=qo(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};window.pursueTradeStrategy=e=>{const t=Pa(e),n=wo(e),a=document.getElementById("market-message");a&&(a.textContent=n?`Invested in ${t.name}.`:`Need ${t.cost} credits to unlock ${t.name}.`),nav("market")};function ed(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function td(e={}){const t=typeof e.message=="string"?e.message:"",n=ge(),a=ao(),s=Object.values(l.ship.cargo||{}).reduce((g,f)=>g+f,0),o=ed(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),d=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(g=>{g.requirements;const f=Wn(g),v=nd(f),w=Un(f),x=ee(f??""),P=x?.region?`Region: ${Qe(x.region)}`:"",T=x?.tags?.length>0?`Keywords: ${x.tags.map(I=>Qe(I)).join(", ")}`:"";return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${g.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${g.name}</span>
                    <span class="contract-type">${g.type}</span>
                  </div>
                  ${g.description?`<p class="muted">${g.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${so(g)}</span>
                    <span>${io(g)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${v}${w?` - ${w}`:""}</span>
                    ${P?`<span>${P}</span>`:""}
                    ${T?`<span>${T}</span>`:""}
                    ${f?`<button class="btn btn-ghost btn-small" onclick="event.stopPropagation(); focusContractTravel('${f}')">Travel here</button>`:""}
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',u=o?[o]:a[0]?[a[0].id]:[],p=a.reduce((g,f)=>{const w=Wn(f)??"unknown",x=g.get(w)??[];return x.push(f),g.set(w,x),g},new Map),m=(g,f)=>{if(!f.length)return"";const v=ee(g),w=v?.region?`Region: ${Qe(v.region)}`:"",x=v?.tags?.length?`Keywords: ${v.tags.map(T=>Qe(T)).join(", ")}`:"",P=v?v.name:"Unknown Region";return`
      <div class="contract-list contract-section">
        <h3 class="panel-title tiny">${P}</h3>
              ${f.map(T=>{const I=["contract-row"];u.includes(T.id)&&I.push("contract-row--active");const y=Un(g);return`
                    <article class="${I.join(" ")}" onclick="acceptContract('${T.id}')">
                      <div class="contract-row__main">
                        <span class="contract-row__name">${T.name}</span>
                        <span class="contract-type">${T.type}</span>
                      </div>
                      <p class="muted">${T.description}</p>
                      <div class="contract-row__info">
                        <span>System: ${P}${y?` - ${y}`:""}</span>
                        ${w?`<span>${w}</span>`:""}
                        ${x?`<span>${x}</span>`:""}
                        <span>Reward: ${ad(T.reward)}</span>
                      </div>
                    </article>
                  `}).join("")}
      </div>
    `},h=p.size?Array.from(p.entries()).map(([g,f])=>m(g,f)).join(""):'<p class="muted">No available missions.</p>';return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Contracts</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${l.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${l.ship.fuel}/${l.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${s}/${l.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${l.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel contract-section">
          <h1 class="panel-title">Contracts</h1>
          ${t?`<p class="muted">${t}</p>`:""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${d}</div>
          <h2 class="panel-title">Available</h2>
          <div class="panel-row">
            ${h}
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
  `}function nd(e){if(!e)return"Unknown";const t=ee(e);return t?.name?`<strong>${t.name}</strong>`:e}function Un(e){if(!e)return"";const t=pt();if(!t)return"";const n=ji(t,l.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function ad(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=K(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}function Qe(e){return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Wn(e){const t=e.requirements||{};if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.combat?.systemId)return t.combat.systemId;if(Array.isArray(t.multiTravel)&&t.multiTravel.length){const n=t.multiTravel[0];return typeof n=="string"?n:n?.systemId}if(e.description)return sd(e.description)}function sd(e){const t=pt();if(!t)return;const n=e.toLowerCase();for(const a of t.nodes)if(a.name&&n.includes(a.name.toLowerCase()))return a.id}window.acceptContract=e=>{const t=Yt(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=lo(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};window.focusContractTravel=e=>{e&&nav("travel",{focusTargetId:e})};const id={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function gn(e){return S?S.ships.find(t=>t.id===e)??null:null}function As(){return gn(l.ship.templateId)}function Ns(){return S?S.ships.filter(e=>e.starter):[]}function od(){return S?S.ships.filter(e=>!e.starter):[]}function yn(e,t){const n=gn(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((o,d)=>id[`${o.size}:${o.type}`]??a[d]),passives:[],weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(o=>({...o})),passive:n.passive??null};l.ship=i,$e(),Ot()}function rd(e){yn(e),l.player.hasChosenStarter=!0}function cd(e){const t=gn(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):l.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(l.player.credits-=t.cost,yn(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}const Ls=.5;function ld(){const e=As();if(!e)return console.warn("Cannot sell an unknown ship."),!1;const t=Ns()[0];if(!t)return console.warn("No starter ship available to replace with after sale."),!1;const n=Math.floor((e.cost??0)*Ls);return l.player.credits+=n,yn(t.id),!0}function dd(){const e=l.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=on(l),s=Math.max(0,Math.round((t+n)*a.repair));if(l.player.credits<s){console.warn("Not enough credits to fully repair.");return}l.player.credits-=s,e.hp=e.maxHp,e.shields=e.maxShields}function ud(){const e=l.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(l.player.credits<a){console.warn("Not enough credits to fully refuel.");return}l.player.credits-=a,e.fuel=e.maxFuel}window.repairShipAction=()=>{dd(),nav("ship")};window.refuelShipAction=()=>{ud(),nav("ship")};window.sellWeaponAction=e=>{if(!Bi(e)){console.warn(`Unable to sell weapon ${e}.`);return}nav("ship")};window.sellShipAction=()=>{if(!ld()){console.warn("Unable to sell the current ship.");return}nav("ship")};window.buyPassiveAction=e=>{if(!vi(e)){console.warn(`Failed to purchase passive ${e}.`);return}nav("ship")};window.installPassiveAction=e=>{if(!bi(e)){console.warn(`Unable to install passive ${e}.`);return}nav("ship")};window.sellPassiveAction=e=>{if(!Mi(e)){console.warn(`Unable to sell passive ${e}.`);return}nav("ship")};function pd(){const e=l.ship,t=As(),n=fa(),a=ga(),s=yi(),i=s.map(y=>Ee(y)).filter(y=>!!y),o=gi(),d=t?.passiveSlots??0,u=a.length,p=new Set([...a.map(y=>y.id),...s]),m=l.combat?.playerCooldowns??[],h=Object.values(e.cargo||{}).reduce((y,B)=>y+B,0),g=l.player,f=g.credits,v=g.wanted,x=ut().map(y=>K(y)).filter(y=>!!y),P=Math.floor((t?.cost??0)*Ls),T=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,I=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(y=>`<li>${y.name} (+${y.value} ${y.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Ship — ${e.name}</span>
        </div>
      </header>

      <section class="header-stats">
        <div class="header-stat">
          <i class="bi bi-cash-stack"></i>
          <div>
            <span>Credits</span>
            <strong>${f}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-cargo"></span>
          <div>
            <span>Cargo</span>
            <strong>${h}/${e.cargoCapacity}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-danger"></span>
          <div>
            <span>Wanted</span>
            <strong>${v}</strong>
          </div>
        </div>
      </section>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-fill"></i>Hull</span>
          <span class="stat-value">${e.hp}/${e.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-shaded"></i>Shields</span>
          <span class="stat-value">${e.shields}/${e.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-fuel-pump"></i>Fuel</span>
          <span class="stat-value">${e.fuel}/${e.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-boxes"></i>Cargo</span>
          <span class="stat-value">${h}/${e.cargoCapacity}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ship Status</h1>
          ${T}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${I}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${e.hardpoints.map((y,B)=>{const E=K(e.weapons[B]),M=E?.name||"Empty",$=m[B]??0,k=E?zt(E):null,N=k?`
                    <p class="muted">Role: ${k.role} (${k.typeLabel})</p>
                    <p class="muted">Vs Shields: ${k.vsShields} · Vs Hull: ${k.vsHull}</p>
                    ${k.tagNotes.length?`<p class="muted">Traits: ${k.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${B+1} · ${y.size} ${y.type}</p>
                    <p class="value-inline">${M}</p>
                    <p class="muted">${$>0?`${$} turn${$===1?"":"s"} left`:"Ready"}</p>
                    ${N}
                  </div>
                `}).join("")||'<div class="panel-card"><p class="muted">No hardpoints installed.</p></div>'}
          </div>
          <button class="btn btn-primary" onclick="nav('weapon_slots')">Manage Weapons</button>

          <h2 class="panel-title">Weapon Inventory</h2>
          <div class="panel-row">
            ${x.length?x.map(y=>`
                      <div class="panel-card">
                        <p class="label">${y.type} / ${y.size}</p>
                        <p class="value-inline"><strong>${y.name}</strong></p>
                        <p class="muted">Cost ${y.price} cr | Sell ${Math.floor((y.price??0)*ba)} cr</p>
                        <div class="app-actions">
                          <button class="btn btn-ghost" onclick="nav('weapon_slots')">
                            Equip / Swap
                          </button>
                          <button class="btn btn-ghost" onclick="sellWeaponAction('${y.id}')">
                            Sell Weapon
                          </button>
                        </div>
                      </div>
                    `).join(""):'<div class="panel-card"><p class="muted">No additional weapons owned yet.</p></div>'}
          </div>

          <div class="panel-card">
            <p class="label">Ship Resale</p>
            <p class="muted">
              Sell your current hull for ${P} credits and revert to your starter ship.
            </p>
            <div class="app-actions">
              <button class="btn btn-ghost" onclick="sellShipAction()">Sell Ship</button>
            </div>
          </div>

          <h2 class="panel-title">Passive Systems (${u}/${d})</h2>
          <div class="panel-row">
            ${a.length?a.map(y=>`
                        <div class="panel-card">
                          <p class="label">${y.name}</p>
                          <p class="muted">${_t(y)||"Passive bonus"}</p>
                          <div class="app-actions">
                            <button class="btn btn-ghost" onclick="sellPassiveAction('${y.id}')">
                              Sell ${Math.floor((y.cost??0)*Rt)}
                            </button>
                          </div>
                        </div>
                      `).join(""):`<div class="panel-card"><p class="muted">${d?"No passive systems installed yet.":"This hull has no passive slots."}</p></div>`}
          </div>

          <h2 class="panel-title">Passive Inventory (${i.length})</h2>
          <div class="panel-row">
            ${i.length?i.map(y=>`
                        <div class="panel-card">
                          <p class="label">${y.name}</p>
                          <p class="muted">${_t(y)}</p>
                          <div class="app-actions">
                            <button
                              class="btn btn-primary${u>=d?" disabled":""}"
                              onclick="installPassiveAction('${y.id}')"
                            >
                              Install
                            </button>
                            <button class="btn btn-ghost" onclick="sellPassiveAction('${y.id}')">
                              Sell ${Math.floor((y.cost??0)*Rt)}
                            </button>
                          </div>
                        </div>
                      `).join(""):'<div class="panel-card"><p class="muted">No passives in inventory.</p></div>'}
          </div>

          <h2 class="panel-title">Available Passive Systems</h2>
          <div class="panel-row">
            ${o.length?o.map(y=>{const B=y.cost??0,E=p.has(y.id),M=E||f<B,$=!s.includes(y.id)||u>=d;return`
                        <div class="panel-card">
                          <p class="label">${y.name}</p>
                          <p class="muted">${_t(y)}</p>
                          <div class="app-actions">
                            <button class="btn btn-primary"${M?" disabled":""} onclick="buyPassiveAction('${y.id}')">
                              ${E?"Owned":`Buy (${B} cr)`}
                            </button>
                            <button class="btn btn-ghost"${$?" disabled":""} onclick="installPassiveAction('${y.id}')">
                              Install
                            </button>
                          </div>
                        </div>
                      `}).join(""):'<div class="panel-card"><p class="muted">No passive systems available.</p></div>'}
          </div>

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
  `}function _t(e){return e.effects&&Object.keys(e.effects).length?Object.entries(e.effects).map(([t,n])=>`${t} ${n}`).join(" | "):e.description||""}const Gn={pirate:"Sensors report kinetic and explosive signatures—brace for hull rakes ahead.",disruptive:"Disruptive arcs detected; expect jammed systems if shields fall.",energy:"Energy harmonics in the signal mean shields will sponge the incoming fire.",ghost:"Ghost fleet scouts favor shield-cracking pulses; bring hull-focused damage."};function Vn(e){if(!e)return"";for(const t of e)if(Gn[t])return Gn[t];return""}function md(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=nn(t);if(!n)return`
      <div class="screen event">
        <h1>No Event</h1>
        <p>No events available here.</p>
      </div>
    `;if(n.type==="mining"){const i=Vn(n.tags);return`
      <div class="screen event">
        <header class="event-header">
          <h1>${n.name}</h1>
          ${n.description?`<p class="event-description">${n.description}</p>`:""}
          ${i?`<p class="event-hint">${i}</p>`:""}
        </header>
        <p>Secure your mining rig and hope the pirates stay away.</p>
        <div class="screen-actions">
          <button onclick='beginMiningSession(${JSON.stringify(n.beltId??"")}, ${JSON.stringify(n.miningCommodityId??"")})'>Enter Mining Belt</button>
        </div>
      </div>
    `}const a=hd(n.choices),s=Vn(n.tags);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${fd(n.type)}</p>
          ${n.description?`<p class="event-description">${n.description}</p>`:""}
          ${s?`<p class="event-hint">${s}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function hd(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${gd(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function fd(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function gd(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=C.params,n=typeof t.eventId=="string"?t.eventId:"",a=nn(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const i=Wo(s);if(i.triggerCombat?.enemyId){ye(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{Pe(l,l.location.systemId,e||void 0,t||void 0)?C.go("mining"):C.go("main",{message:"Travel to a new system before mining again."})};const yd={balanced:"bi bi-record-circle",brace:"bi bi-shield-lock",evasive:"bi bi-speedometer2",overcharge:"bi bi-lightning"},et=["balanced","brace","evasive","overcharge"],vd={frontline:"Frontline",backline:"Backline",support:"Support"};function bd(e){if(!e)return"";const t=vd[e];return t?`<span class="enemy-role-chip">${t}</span>`:""}function Md(e){return e?`<span class="enemy-faction-chip">${e.toUpperCase()}</span>`:""}window.fireWeapon=(e,t="normal")=>{Xe("fire",e,t),l.combat&&nav("combat")};window.brace=()=>{Xe("brace"),l.combat&&nav("combat")};window.flee=()=>{Xe("flee"),l.combat&&nav("combat")};window.setStance=e=>{$s(e),l.combat&&nav("combat")};window.cycleStance=e=>{const n=l.combat?.playerStance??"balanced",s=(et.indexOf(n)+e+et.length)%et.length,i=et[s];$s(i),l.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{Xe("fire_all",void 0,e),l.combat&&nav("combat")};window.activateModuleAbility=e=>{Gc(e),l.combat&&nav("combat")};window.useComboFinish=()=>{Xe("combo_finish"),l.combat&&nav("combat")};window.selectEnemySlot=e=>{const t=l.combat;t&&(t.selectedEnemyId=e,nav("combat"))};function xd(e,t,n){return!(!t||t.position.row!=="back"||!n||!n.alive)}function Yn(e,t,n,a=!1,s=!1){const i=t==="front"?"Front":"Back",o=e+1;if(!n)return`
      <div class="enemy-slot enemy-slot--empty row-${t}">
        <span class="enemy-slot-meta">Lane ${o} · ${i}</span>
        <span class="muted">Empty</span>
      </div>
    `;const d=n.statusEffects.map(h=>`<span class="status-pill">${h.type}</span>`).join(""),u=`Lane ${o} · ${i}`,p=bd(n.role),m=Md(n.factionLabel??n.factionId);return`
    <button
      type="button"
      class="enemy-slot ${a?"is-selected":""} row-${n.position.row}"
      onclick="selectEnemySlot('${n.id}')"
    >
      <span class="enemy-slot-name">${n.name}</span>
      <div class="enemy-slot-meta-row">
        <span class="enemy-slot-meta">${u}</span>
        <span class="enemy-chip-group">
          ${p}
          ${m}
        </span>
      </div>
      <span class="enemy-slot-hp">Hull ${n.hp}/${n.maxHp}</span>
      <span class="enemy-slot-shield">Shield ${n.shields}/${n.maxShields}</span>
      <div class="enemy-slot-statuses">${d||'<span class="muted">No status</span>'}</div>
      ${s?'<span class="cover-badge">Covered</span>':""}
    </button>
  `}function $d(){const e=l.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=l.ship,n=e.log.map(D=>`<div class="log-line">${D}</div>`).join(""),a=t.hp/Math.max(1,t.maxHp)<=.35,s=(e.log[e.log.length-1]||"").toLowerCase(),i=s.includes("hits you")||s.includes("damage"),o=e.log[e.log.length-1]||"Awaiting orders.";tt(o);const d=["app-root","combat-root"];a&&d.push("low-hull"),i&&d.push("hit-flash");const u=e.encounter.enemies.find(D=>D.id===e.selectedEnemyId)??e.encounter.enemies.find(D=>D.position.row==="front")??e.encounter.enemies[0],p=e.encounter.enemies.length,m=[0,1,2],h=p>0?`
        <div class="enemy-formation-grid">
          ${m.map(D=>{const z=e.encounter.enemies.find(A=>A.position.lane===D&&A.position.row==="front"),W=e.encounter.enemies.find(A=>A.position.lane===D&&A.position.row==="back"),b=u?.position.lane===D;return`
                <div class="enemy-lane lane-${D} ${b?"is-active-lane":""}">
                  <div class="lane-header">
                    <span class="lane-label">Lane ${D+1}</span>
                    <span class="lane-subtitle">${z||W?"Engaged":"Empty"}</span>
                  </div>
                  <div class="lane-slot-row lane-front">
                    ${Yn(D,"front",z,u?.id===z?.id)}
                  </div>
                  <div class="lane-slot-row lane-back">
                    ${Yn(D,"back",W,u?.id===W?.id,xd(D,W,z))}
                  </div>
                </div>
              `}).join("")}
        </div>
      `:'<div class="enemy-slot muted-chip">No enemies in formation.</div>',g={energy:"bi-lightning-fill",projectile:"bi-cpu-fill",missile:"bi-rocket-takeoff-fill",hybrid:"bi-shuffle"},f=t.hardpoints.map((D,z)=>{const W=t.weapons[z],b=K(W),A=b?.name??`Slot ${z+1}`,q=b?g[b.type]??"bi-crosshair":"bi-crosshair";return`
        <button class="weapon-chip" onclick="fireWeapon(${z}, 'normal')" title="${A}">
          <i class="bi ${q}"></i>
        </button>
      `}).join("");Ei.map(D=>`
        <tr>
          <td>${D.type}</td>
          <td>${D.shieldMultiplier.toFixed(2)}x</td>
          <td>${D.hullMultiplier.toFixed(2)}x</td>
          <td>${D.description}</td>
        </tr>
      `).join("");const v=We(e.playerStance),w=yd[e.playerStance]??"bi bi-flag",x=e.comboMeter,P=x?.charge??0,T=100,I=Math.min(100,Math.round(P/T*100)),y=x?.ready;y&&`${y.label}`,`${t.hp}${t.maxHp}${t.shields}${t.maxShields}${t.fuel}${t.maxFuel}`,`${tt(v.description)}${w}${v.label}`;const B=Object.entries(v.damageTakenMultipliers||{}).map(([D,z])=>{const W=z??1;return`<span class="stance-modifier ${W>=1?"debuff":"buff"}">${D}: ${W.toFixed(2)}x</span>`}),E=B.length>0?B.join(""):'<span class="muted">No stance-specific multipliers.</span>',M=el();M&&`${M.suggestion}${M.text}${(M.confidence*100).toFixed(0)}`;const $=u?.shields<=0;u&&$&&`${u.name}`;const N=Wc().map(({componentId:D,componentName:z,ability:W,ready:b})=>{const A=W.type==="pull"?"bi-box-arrow-in-left":"bi-box-arrow-up-right";return`
        <button
          class="action-chip module-chip ${b?"":"is-disabled"}"
          ${b?"":"disabled"}
          title="${tt(z)}"
          onclick="activateModuleAbility('${D}')"
        >
          <i class="bi ${A}"></i>
          <span>${tt(z)}</span>
        </button>
      `}).join(""),R=[{icon:"bi-bolt-fill",label:"Fire",action:"fireAllWeapons('normal')",title:"Fire all ready weapons"},{icon:"bi-asterisk",label:"Called",action:"fireAllWeapons('called_shot')",title:"Called shots"},{icon:"bi-shield-fill",label:"Brace",action:"brace()",title:"Brace for impact"},{icon:"bi-flag-fill",label:"Flee",action:"flee()",title:"Attempt to flee"}].map(({icon:D,label:z,action:W,title:b})=>`
        <button class="action-chip" title="${b}" onclick="${W}">
          <i class="bi ${D}"></i>
          <span>${z}</span>
        </button>
      `).join(""),F=`
    <button
      class="action-chip combo-chip ${y?"":"is-disabled"}"
      ${y?"":"disabled"}
      title="Combo finisher"
      onclick="${y?"useComboFinish()":"void(0)"}"
    >
      <i class="bi bi-lightning-fill"></i>
      <span>${y?y.label:"Combo"}</span>
    </button>
  `;wd(e);const G=kd(e,u),V=`
    <section class="cc-section control-shell">
      <div class="control-header">
        <span class="control-label">Target</span>
        <strong class="control-target">${u?.name??"No target"}</strong>
        <span class="control-sub">${u?.position.row==="back"?"Backline":"Frontline"}</span>
      </div>
      <div class="status-row">
        <div class="stat-chip">
          <i class="bi bi-heart-fill"></i>
          <span>${t.hp}/${t.maxHp}</span>
        </div>
        <div class="stat-chip">
          <i class="bi bi-shield-fill"></i>
          <span>${t.shields}/${t.maxShields}</span>
        </div>
        <div class="stat-chip">
          <i class="bi bi-fuel-pump"></i>
          <span>${t.fuel}/${t.maxFuel}</span>
        </div>
      </div>
      <div class="stance-row">
        <button class="stance-nav" onclick="cycleStance(-1)">
          <i class="bi bi-chevron-left"></i>
        </button>
        <span class="stance-label">${v.label}</span>
        <button class="stance-nav" onclick="cycleStance(1)">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      <div class="combo-control-meter">
        <div class="combo-meter combo-inner-meter">
          <div class="combo-meter-bar">
            <div class="combo-meter-bar-fill" style="width: ${I}%"></div>
          </div>
          <div class="combo-meter-meta">
            <span>Combo ${P}/${T}</span>
            <span class="combo-meter-ready">
              ${y?`${y.label} ready`:"fill meter"}
            </span>
          </div>
        </div>
      </div>
      <div class="action-grid">
        ${R}
        ${F}
        ${N}
      </div>
      <div class="weapon-chip-row">
        ${f}
      </div>
    </section>
  `,H=`
    <div class="combat-hud combo-hud">
      <div class="combo-meta">
        <span>${e.encounter.name}</span>
        <span>Enemies ${p}</span>
        <span>Round ${e.round}</span>
      </div>
    </div>
  `,Y=`
    <div class="command-console">
      ${V}
      <section class="cc-section stance-section">
        <div class="stance-section-header">
          <p class="label small">Active Stance Modifiers</p>
        </div>
        <div class="stance-mod-row">
          ${E}
        </div>
      </section>
    </div>
  `;return`
    <div class="${d.join(" ")}">
      <div class="combat-container">
        ${H}
        <div class="combat-main">
          <section class="enemy-formation-panel">
            <div class="enemy-formation-header">
              <p class="label">Enemy Formation</p>
              <span>${p} targets remaining</span>
            </div>
            <div class="enemy-formation">${h}</div>
            <div class="status-chips">${G||'<span class="muted">No debuffs</span>'}</div>
          </section>
          <section class="command-panel">
            ${Y}
          </section>
        </div>
        <section class="combat-log">
          <h2 class="panel-title small">Combat Log</h2>
          <div class="app-log">
            ${n}
          </div>
        </section>
      </div>
    </div>
  `}function wd(e){const t=[],n=We(e.playerStance).label;return t.push(`<span class="buff-chip buff">Stance: ${n}</span>`),e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function kd(e,t){const n=[];return e.enemyStatus.weaponJammedTurns>0&&n.push(`<span class="buff-chip debuff">Weapons jammed (${e.enemyStatus.weaponJammedTurns}t)</span>`),t?.shields<=0&&n.push('<span class="buff-chip debuff">Shields down</span>'),t?.statusEffects.length&&t.statusEffects.forEach(a=>{n.push(`<span class="buff-chip debuff">${a.type} (${a.duration}t)</span>`)}),n.push(`<span class="buff-chip muted-chip">${e.encounter.enemies.length} adversaries remain</span>`),n.join("")}function tt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}window.buyShipAction=e=>{cd(e)};window.buyComponentAction=e=>{xi(e)};window.buyWeaponAction=e=>{Ii(e)};function Sd(){if(!ft(l.location.systemId,"shipyard"))return`
      <div class="app-root">
        <header class="app-header app-header--market">
          <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
    `;const e=od(),t=hi().filter(u=>u.slot!=="passive"),n=Ri(),a=ut().map(u=>K(u)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(u=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Tt("ship",u.id)}
                      <div>
                      <p class="label">${u.roleHint||"Multi-role"}</p>
                      <strong>${u.name}</strong>
                      <p class="muted">${u.description}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${u.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Hull ${u.hull} | Shields ${u.shields} | Fuel ${u.fuel} | Cargo ${u.cargo}</p>
                  <button class="btn btn-primary" onclick="buyShipAction('${u.id}')">Buy & Replace</button>
                </article>
              `).join("")}
        </div>
      `,i=t.length===0?'<p class="muted">No components in stock.</p>':`
        <div class="card-list">
          ${t.map(u=>{const p=[];if(typeof u.value=="number"&&u.effectType&&p.push(`+${u.value} ${u.effectType}`),u.effects)for(const[h,g]of Object.entries(u.effects)){if(typeof g!="number")continue;const f=Math.round((g-1)*100);switch(h){case"miningYield":p.push(`Mining yield ${f>=0?"+":""}${f}%`);break;case"miningSpeed":p.push(`Mining duration ${f>=0?"+":""}${f}%`);break;case"rareFindChance":p.push(`Rare finds ${f>=0?"+":""}${f}%`);break;case"miningPayoutMultiplier":p.push(`Mining payout ${f>=0?"+":""}${f}%`);break;case"sellBonus":p.push(`Sell bonus ${f>=0?"+":""}${f}%`);break;case"incomeMultiplier":p.push(`Income ${f>=0?"+":""}${f}%`);break;default:p.push(`${h} ${f>=0?"+":""}${f}%`)}}const m=p.length?p.join(" | "):"Utility module";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Tt("module",u.id)}
                      <div>
                      <p class="label">${u.effectType||"Passive"}</p>
                      <strong>${u.name}</strong>
                      <p class="muted">${u.description}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${u.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Boost: ${m}${u.slot?` | Slot: ${u.slot}`:""}</p>
                  <button class="btn btn-primary" onclick="buyComponentAction('${u.id}')">Buy & Install</button>
                </article>
              `}).join("")}
        </div>
      `,o=n.length===0?'<p class="muted">No weapons available.</p>':`
        <div class="card-list">
          ${n.map(u=>{const p=zt(u),m=p.tagNotes.length?`Traits: ${p.tagNotes.join(", ")}`:"";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Tt("weapon",u.id)}
                      <div>
                      <p class="label">${u.type} • ${u.size}</p>
                      <strong>${u.name}</strong>
              <p class="muted">${m}</p>
            </div>
            </div>
            <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${u.price} cr</p>
                    </div>
                  </div>
                  <p class="muted">
                    Damage ${u.damage} (${u.damageType}) | Acc ${Math.round(u.accuracy*100)}% | Crit ${Math.round(u.critChance*100)}% x${u.critMultiplier}<br/>
                    Cooldown ${u.cooldown} | Energy ${u.energyCost}
                  </p>
                  <p class="muted">${p.role} (${p.typeLabel}) | Vs Shields: ${p.vsShields}, Vs Hull: ${p.vsHull}</p>
                  <button class="btn btn-primary" onclick="buyWeaponAction('${u.id}')">Buy Weapon</button>
                </article>
              `}).join("")}
        </div>
      `,d=a.length>0?`<p>${a.join(", ")}</p>`:'<p class="muted">You currently own no weapons.</p>';return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Shipyard</span>
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
            ${o}
          </details>

          <details class="panel-card">
            <summary class="panel-title">Your Weapon Inventory</summary>
            <div class="panel-card">${d}</div>
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
  `}const Xn=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],Jn=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],Kn=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],Zn=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function Fe(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function _d(e){const t=Fe(e)%Xn.length;return Xn[t]}function vn(e){let t=Fe(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function Ct(e,t=12){const n=Math.min(...e.map(m=>m.x)),a=Math.max(...e.map(m=>m.x)),s=Math.min(...e.map(m=>m.y)),i=Math.max(...e.map(m=>m.y)),o=a-n+1,d=i-s+1,u=Math.floor((t-o)/2)-n,p=Math.floor((t-d)/2)-s;return e.map(m=>({...m,x:m.x+u,y:m.y+p}))}function Tt(e,t){const n=_d(`${e}-${t}`),a=Jn[Fe(t)%Jn.length],s=Kn[Fe(t+"-mod")%Kn.length],i=Zn[Fe(t+"-wpn")%Zn.length],d=Ct(e==="ship"?Cd(a,t):e==="module"?Td(s,t):Ed(i,t)).map(u=>`<rect x="${u.x}" y="${u.y}" width="1" height="1" fill="${n[u.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${d}
    </svg>
  `}function Cd(e,t){const n=vn(t),a=[...e],s=Math.min(...e.map(p=>p.y)),i=Math.max(...e.map(p=>p.y)),o=e.filter(p=>p.y===s),d=e.filter(p=>p.y===i);o.slice(0,2).forEach(p=>{a.push({x:p.x,y:p.y-1,c:"a"})}),d.forEach(p=>{n()>.5&&a.push({x:p.x,y:p.y+1,c:n()>.5?"a":"b"})});const u=n()>.5?-1:1;return a.push({x:d[0]?.x+u,y:i-1,c:"b"}),a.push({x:d[d.length-1]?.x-u,y:i-1,c:"b"}),a}function Td(e,t){const n=vn(t+"-decor"),a=[...e],s=Math.min(...e.map(u=>u.x)),i=Math.max(...e.map(u=>u.x)),o=Math.min(...e.map(u=>u.y)),d=Math.max(...e.map(u=>u.y));return a.push({x:s-1,y:Math.round((o+d)/2),c:"b"}),a.push({x:i+1,y:Math.round((o+d)/2),c:"b"}),n()>.3&&a.push({x:s,y:o-1,c:"a"}),n()>.6&&a.push({x:i,y:o-1,c:"c"}),n()>.4&&a.push({x:s,y:d+1,c:"a"}),a}function Ed(e,t){const n=vn(t+"-weapon"),a=[...e],s=Math.max(...e.map(d=>d.y)),i=Math.min(...e.map(d=>d.x)),o=Math.max(...e.map(d=>d.x));return a.push({x:i,y:s+1,c:n()>.5?"a":"b"}),a.push({x:o,y:s+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:i+1,y:s-2,c:"c"}),a.push({x:o+1,y:s-1,c:"b"}),a}const Rd={incomeMultiplier:e=>J(e,"income"),eventRewardMultiplier:e=>J(e,"event rewards"),hpBonus:e=>J(e,"hull"),cargoBonus:e=>Id(e,"cargo capacity"),sellBonus:e=>J(e,"sell price"),buyBonus:e=>J(e,"buy price"),marketTax:e=>J(e,"market tax"),miningYield:e=>J(e,"mining yield"),rareFindChance:e=>J(e,"rare find chance"),miningSpeed:e=>J(e,"mining duration"),dodgeBonus:e=>nt(e,"dodge chance"),critBonus:e=>nt(e,"crit chance"),damageTakenMultiplier:e=>J(e,"damage taken"),fleeBonus:e=>nt(e,"flee chance"),pirateDetectionMultiplier:e=>J(e,"pirate detection"),scanDetectionMultiplier:e=>J(e,"scan detection"),illegalTolerance:e=>J(e,"illegal tolerance"),fuelCostMultiplier:e=>J(e,"fuel cost"),hazardDetectionBonus:e=>nt(e,"hazard detection"),anomalyChance:e=>J(e,"anomaly chance"),shieldRegenBonus:e=>J(e,"shield regen")};function Pd(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>Rd[n]?.(a)??null).filter(n=>!!n):[]}function J(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function nt(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Id(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}function Bd(e,t){return`
    <div class="ability-bars">
      ${[{label:"Hull",value:e.hull,max:t.maxHull},{label:"Shields",value:e.shields,max:t.maxShields},{label:"Fuel",value:e.fuel,max:t.maxFuel},{label:"Cargo",value:e.cargo,max:t.maxCargo}].map(a=>{const s=Math.min(100,Math.round(a.value/Math.max(1,a.max)*100));return`
            <div class="ability-row">
              <span>${a.label}</span>
              <div class="ability-bar">
                <div class="ability-bar__fill" style="width:${s}%"></div>
              </div>
              <strong>${a.value}</strong>
            </div>
          `}).join("")}
    </div>
  `}window.chooseStarter=e=>{rd(e),Ot(),C.go("main")};function Dd(){const e=Ns(),t={maxHull:Math.max(...e.map(a=>a.hull),100),maxShields:Math.max(...e.map(a=>a.shields),100),maxFuel:Math.max(...e.map(a=>a.fuel),100),maxCargo:Math.max(...e.map(a=>a.cargo),50)};return e.length===0?`
      <div class="app-root">
        <header class="app-header app-header--market">
          <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
    `:`
    <div class="app-root">
      <div class="mobile-bg-slice"></div>
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Starter Hangar</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Select Your Starter Ship</h1>
          <p class="muted">Pick a hull to define your opening playstyle.</p>
          <div class="panel-row starter-grid">
            ${e.map(a=>{const s=Pd(a),i=a.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${a.passive.name}</p>
          ${s.length?`<div class="passive-summary__list">${s.map(o=>`<span>${o}</span>`).join("")}</div>`:""}
        </div>
      `:"";return`
      <button class="panel-card starter-card btn-starter" type="button" onclick="chooseStarter('${a.id}')">
        <div class="starter-card-head starter-card-head--split">
          <div class="starter-head__ship starter-head__ship--stacked">
            ${jd(a.id,a.roleHint??a.name)}
            <div>
              <p class="label">${a.roleHint}</p>
              <p class="value-inline"><strong>${a.name}</strong></p>
            </div>
          </div>
          <div class="starter-head__passive">
            ${i||'<p class="muted">No passive</p>'}
          </div>
        </div>
        <div class="starter-card-body">
          ${Bd(a,t)}
        </div>
      </button>
    `}).join("")}
          </div>
        </section>
      </main>

  <footer class="app-footer">
    <button class="btn btn-ghost btn-small" onclick="nav('main')">Skip</button>
    <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
  </footer>
</div>
`}const Qn=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],ea={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function bn(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Ad(e){return Qn[bn(e)%Qn.length]}function Nd(e,t){const n=(()=>{let o=bn(t);return()=>(o=o*1664525+1013904223|0,(o>>>0)/4294967295)})(),a=[...e],s=Math.max(...e.map(o=>o.y)),i=Math.min(...e.map(o=>o.y));return n()>.5&&a.push({x:e[0]?.x??4,y:i-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:s+1,c:n()>.5?"b":"c"}),a}function Ld(e,t=12){const n=Math.min(...e.map(m=>m.x)),a=Math.max(...e.map(m=>m.x)),s=Math.min(...e.map(m=>m.y)),i=Math.max(...e.map(m=>m.y)),o=a-n+1,d=i-s+1,u=Math.floor((t-o)/2)-n,p=Math.floor((t-d)/2)-s;return e.map(m=>({...m,x:m.x+u,y:m.y+p}))}function Fd(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(ea).find(o=>n.includes(o))??"fighter",s=ea[a],i=bn(`${e}-${t}`)%s.length;return s[i]}function jd(e,t){const n=Ad(`${e}-${t}`),a=Fd(e,t),s=Nd(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${Ld(s).map(d=>`<rect x="${d.x}" y="${d.y}" width="1" height="1" fill="${n[d.c]}" opacity="1" />`).join("")}
    </svg>
  `}function Hd(){const e=l.ship;if(!e.hardpoints.length)return`
      <div class="app-root">
        <header class="app-header app-header--market">
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
    `;const t=e.hardpoints.map((n,a)=>{const i=K(e.weapons[a])?.name||"Empty";return`
        <div class="panel-card">
          <p class="label">Slot ${a+1} · ${n.size} ${n.type}</p>
          <p class="value-inline">${i}</p>
          <button class="btn btn-primary" onclick="nav('weapon_select', { slotIndex: ${a} })">
            Equip
          </button>
        </div>
      `}).join("");return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Weapon Hardpoints</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${l.time.day}</span>
          <span>Turn ${Je(l.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{Pi(e,t)&&nav("weapon_slots")};function Od(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=l.ship.hardpoints[t];if(!n)return`
      <div class="app-root">
        <header class="app-header app-header--market">
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
    `;const o=ut().map(d=>K(d)).filter(d=>!!d).map(d=>{const u=qt(t,d.id),m=K(l.ship.weapons[t])?.id===d.id?"Equipped":"Equip",h=zt(d),g=h.tagNotes.length?`<br/>Traits: ${h.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${u?"":"muted"}">
          <p class="label">${d.size} / ${d.type}</p>
          <p class="value-inline"><strong>${d.name}</strong></p>
          <p class="muted">Damage ${d.damage} (${d.damageType}) · Acc ${Math.round(d.accuracy*100)}% · Crit ${Math.round(d.critChance*100)}% (×${d.critMultiplier}) · CD ${d.cooldown}</p>
          <p class="muted">Role: ${h.role} (${h.typeLabel}) · Vs Shields: ${h.vsShields} · Vs Hull: ${h.vsHull}${g}</p>
          <button class="btn btn-primary" ${u?"":"disabled"} onclick="equipWeaponAction(${t}, '${d.id}')">
            ${m}
          </button>
        </div>
      `}).join("")||'<div class="panel-card"><p class="muted">No owned weapons available. Buy or loot weapons to equip.</p></div>';return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Select Weapon</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${l.time.day}</span>
          <span>Turn ${Je(l.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Weapon Selection</h1>
          <p class="muted">Hardpoint: ${n.size} ${n.type}</p>
          <div class="panel-row">
            ${o}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('weapon_slots')">Back</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}const ta=Math.max(1,Za.combo.threshold);function qd(e){return e>=10?"#ff5c7a":e>=6?"#fb923c":e>=3?"#facc15":"#34d399"}window.leaveMining=()=>{l.miningSession=null,C.go("main")};window.drillCell=(e,t)=>{Jr(l,e,t)?.fightTriggered||C.go("mining")};window.setMiningDepth=e=>{Yr(l,e),C.go("mining")};window.finalizeDrill=()=>{if(Kr(l)?.fightTriggered)return;const t=l.miningSession?.lastMessage||"Extraction complete.";C.go("main",{message:t})};window.cashOutMining=()=>{const e=ec(l);C.go("main",{message:e??"Risk Chain cash out requires level 3+."})};window.newSurvey=()=>{Pe(l,l.location.systemId,l.miningSession?.beltId,l.miningSession?.resourceId,{force:!0}),C.go("mining")};function zd(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function Ud(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const s=e[n][a],i=["mine-cell"];s.drilled&&i.push("drilled"),s.selected&&i.push("selected"),s.clusterHint&&i.push("cluster-hint");const o=["mine-cell-inner"];s.directionClass&&o.push(s.directionClass),s.depthClass&&o.push(s.depthClass),s.hintSignal!=null&&!s.drilled&&o.push("hinted"),s.signal!=null&&o.push(zd(s.signal));const d=s.signal!=null?s.signal:s.hintSignal!=null?s.hintSignal:"A",p=`<span class="${s.signal!=null?"cell-signal":s.hintSignal!=null?"cell-signal hint":"cell-signal muted"}">${d}</span>`;t.push(`
        <div class="${i.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${o.join(" ")}">
            <div class="cell-center">
              ${p}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function Wd(){const e=l.miningSession;if(!e)return`
      <div class="app-root mining-shell">
        <header class="app-header app-header--market">
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
    `;const t=Math.min(ta,e.comboGauge??0),n=Math.min(100,Math.round(t/ta*100)),s=(e.comboBonusTurns??0)>0?`Combo bonus active (${e.comboBonusTurns} turns)`:`Combo ${n}% toward bonus`,i=e.comboThreatReduction??0,o=Math.max(0,l.player.xp??0),d=e.riskChainLevel??0,u=cn(d),p=Math.round(cs(d,o)*100),m=Math.min(100,Math.round(d/12*100)),h=`Risk Chain: ${d}`,g=`Reward x${u.toFixed(2)} • Hazard ${p}%`,f=qd(d),v=d>=3&&e.active,w=e.xpEarned??0,x=Math.round(e.threat??0),P=Wa(l,e.systemId),T=Array.from({length:5},(B,E)=>{const M=E+1;return`<button class="chip-btn ${M===e.depth?"active":""}" onclick="setMiningDepth(${M})">Z${M}</button>`}).join(""),I=Ud(e.grid),y=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
      <div class="app-root mining-shell">
        <header class="app-header app-header--market">
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Mining · Session Complete</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Extraction Complete</h1>
            <p>${e.lastMessage??"Claim finished."}</p>
            <p>Haul: ${y}</p>
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
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Mining · ${e.beltName||e.beltId||e.systemId}</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${l.time.day}</span>
          <span>Turn ${Je(l.time.turn)}</span>
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
          <span class="stat-value stat-risk">${x}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Risk Chain</span>
          <span class="stat-value" style="color:${f}">${h}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Combo</span>
          <span class="stat-value">${n}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Ore Value</span>
          <span class="stat-value">${Math.round(P)} cr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Mining XP</span>
          <span class="stat-value">${w}</span>
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
            <div class="chip">Threat ${x}%</div>
          </div>
          ${I}
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
              ${T}
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
          <p class="label">Combo Meter</p>
          <div class="bar-bg">
            <div class="bar-fill" style="width:${n}%;"></div>
          </div>
          <p class="muted">${s}</p>
          ${i>0?`<p class="muted">Threat -${Math.round(i*100)}% while combo is active.</p>`:""}
        </div>

          <div class="panel-card">
            <p class="label">Threat</p>
            <div class="bar-group">
              <div class="bar-row">
                <span>Pirate Threat</span>
                <span>${x}%</span>
              </div>
              <div class="bar-bg">
                <div class="bar-fill" style="width:${x}%;"></div>
              </div>
            </div>
            <p class="muted">If the roll succeeds, a real pirate combat is started and threat resets to 0%.</p>
          </div>

          <div class="panel-card">
            <p class="label">Risk Chain</p>
            <div class="bar-bg">
              <div class="bar-fill" style="width:${m}%;background:${f};"></div>
            </div>
            <p class="muted">${g}</p>
            ${v?'<button class="chip-btn" onclick="cashOutMining()">Cash Out</button>':'<span class="muted">Reach level 3 to cash out.</span>'}
          </div>

          <div class="panel-card">
            <p class="label">Last haul</p>
            <p class="value-emphasis">${y}</p>
          </div>
        </aside>
      </div>

      <footer class="app-footer"></footer>
    </div>
  `}window.startNewRun=()=>Va(!1);window.returnToMainMenu=()=>Va(!0);function Gd(){const e=l.gameOver?.summary,t=ni(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],i=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],o=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],d=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],u=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],p=h=>h.map(([g,f])=>`
      <tr>
        <td>${g}</td>
        <td>${f}</td>
      </tr>
    `).join(""),m=t.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${t.map((h,g)=>`
                  <tr>
                    <td>${g+1}</td>
                    <td>${h.score}</td>
                    <td>${h.daysSurvived}</td>
                    <td>${h.contractsCompleted}</td>
                    <td>${h.shipsDestroyed}</td>
                    <td>${h.reason.replace(/_/g," ")}</td>
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
          <table>${p(i)}</table>
        </section>
        <section class="data-panel">
          <h2>Contracts</h2>
          <table>${p(o)}</table>
        </section>
        <section class="data-panel">
          <h2>Combat</h2>
          <table>${p(d)}</table>
        </section>
        <section class="data-panel">
          <h2>Mining</h2>
          <table>${p(u)}</table>
        </section>
        <section class="data-panel">
          <h2>Best Runs</h2>
          ${m}
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-primary" onclick="startNewRun()">Start New Run</button>
        <button class="btn btn-ghost" onclick="returnToMainMenu()">Return to Main Menu</button>
      </footer>
    </div>
  `}function Vd(){const e=l,t=Ps(e),n=Is(),a=El(e),s=Bs(e,5),i=(e.player.perkPoints??0)>0,o=t.length>0?t.map(({displayName:d,level:u,percent:p,xpIntoLevel:m,xpNeeded:h})=>`
              <div class="xp-track-card">
                <div class="xp-track-header">
                  <span class="xp-track-title">${d}</span>
                  <span class="xp-track-level">Level ${u}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(p,100)}%"></div>
                </div>
                <div class="xp-track-sub">
                  ${h!==null?`${m}/${h} XP`:`${m} XP (max)`}
                </div>
              </div>
            `).join(""):'<div class="xp-track-card muted">No XP data available.</div>';return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">Perk Planner</span>
          <span class="app-location">${e.location.systemId}</span>
        </div>
        <button class="btn btn-ghost" onclick="nav('main')">Back</button>
      </header>

      <section class="panel-card xp-dashboard-panel">
        <summary>XP Journal</summary>
        <div class="details-content">
          <div class="xp-track-grid">
            ${o}
          </div>
        </div>
      </section>

      <section class="panel-card upcoming-perks-panel">
        <p class="label">Plan your next perks</p>
        <div class="upcoming-perk-list">
          ${a.length?a.map(d=>`
                      <div class="upcoming-perk">
                        <strong>${d.displayName}</strong>
                        <span class="perk-branch">${d.branch} • Tier ${d.tier}</span>
                        <p class="perk-desc">${d.description}</p>
                        ${d.requires.length?`<p class="perk-meta">Requires: ${d.requires.join(", ")}</p>`:""}
                      </div>
                    `).join(""):'<div class="upcoming-perk muted">No upcoming perks available — unlock more tiers.</div>'}
        </div>
      </section>

      <section class="panel-card perk-tree-panel">
        <p class="label">Perk Tree</p>
        ${n.map(d=>`
              <div class="perk-branch">
                <h4>${d.branch.charAt(0).toUpperCase()+d.branch.slice(1)}</h4>
                ${d.entries.map(u=>{const p=u.requires.length?` • requires: ${u.requires.join(", ")}`:"";return`
                      <div class="perk-row${u.unlocked?" unlocked":""}">
                        <div class="perk-header">
                          <strong>${u.displayName}</strong>
                          <span class="perk-tier">Tier ${u.tier}</span>
                        </div>
                        <p class="perk-desc">${u.description}</p>
                        <p class="perk-meta">
                          ${u.source?`${u.source.trackId} L${u.source.level}`:"Unlocked via special means"}
                          ${p}
                        </p>
                        <div class="perk-badges">
                          ${u.effectTargets.map(m=>`<span class="perk-badge" title="Affects ${m}">${m}</span>`).join("")}
                        </div>
                        <button
                          class="btn btn-primary btn-small${i&&!u.unlocked?"":" disabled"}"
                          ${i&&!u.unlocked?"":"disabled"}
                          onclick="unlockPerkAction('${u.id}')"
                        >
                          ${u.unlocked?"Unlocked":i?"Unlock":"Need Points"}
                        </button>
                      </div>
                    `}).join("")}
              </div>
            `).join("")}
      </section>

      <section class="panel-card perk-log-panel">
        <p class="label">Recent Notifications</p>
        <div class="perk-log">
          ${s.length?s.map(d=>`<div class="perk-log-line">${d}</div>`).join(""):'<div class="perk-log-line muted">No notifications yet.</div>'}
        </div>
      </section>
    </div>
  `}const j=320,L=180;let je=null,He="space",Ue=null,fe=1;const Yd=450,Mn=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],dt=[];function Xd(){for(const e of Mn){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*j,y:Math.random()*L,size:Math.random()<.6?1:2})}}function Jd(){dt.length=0;for(let e=0;e<4;e++)dt.push({x:Math.random()*j,y:L/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function Kd(e){je=e.getContext("2d"),je&&(e.width=j,e.height=L,je.imageSmoothingEnabled=!1,Xd(),Jd())}function Zd(e){e===He&&(!Ue||fe<1)||(Ue=He,He=e,fe=0)}function Qd(e){if(!je)return;const t=e/16.6667;fe<1&&(fe=Math.min(1,fe+e/Yd),fe>=1&&(Ue=null));for(const n of dt)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=j+20,n.y=L/4+Math.random()*(L/2));for(const n of Mn)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=j,a.y=Math.random()*L)}function Fs(e=je,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=Ue!==null&&fe<1,a=ru(fe);n?(Et(e,Ue,t,{alpha:1-a,scale:1+.05*a}),Et(e,He,t,{alpha:a,scale:1.04-.04*a})):Et(e,He,t),e.restore()}function Et(e,t,n,a={}){const s=a.alpha??1,i=a.scale??1;switch(e.save(),e.globalAlpha=s,i!==1&&(e.translate(j/2,L/2),e.scale(i,i),e.translate(-j/2,-L/2)),t){case"mining":au(e);break;case"hangar":iu(e,n);break;case"ops":ou(e,n);break;default:eu(e,n);break}nu(e,t),t==="combat"&&su(e),e.restore()}function eu(e,t){e.fillStyle="#02030b",e.fillRect(0,0,j,L),tu(e,t)}function tu(e,t){for(const n of dt){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),s=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${s})`),a.addColorStop(.5,`rgba(60, 130, 200, ${s*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${s})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of Mn){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function nu(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let s=0;s<n;s++){const i=Math.random()*j,o=Math.random()*L;e.fillRect(Math.round(i),Math.round(o),1,1)}}function au(e){e.fillStyle="#0a0604",e.fillRect(0,0,j,L);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const s=a*(L/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(s),j,Math.ceil(L/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,j-80,L-40);const n=e.createLinearGradient(0,L/2,j,L/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,j,L)}function su(e){const t=e.createLinearGradient(0,0,j,L);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,j,L)}function iu(e,t){e.fillStyle="#04060a",e.fillRect(0,0,j,L);const n=e.createLinearGradient(0,0,0,L);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,j,L);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(j/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,L-46,j,18),e.fillStyle="#0f1a28";for(let s=0;s<7;s++){const i=L-26+s*3;e.fillRect(0,i,j,1)}e.fillStyle="#1a2838";for(let s=0;s<j;s+=22)e.fillRect(s,L-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,j-80,10),e.fillRect(40,70,j-80,6)}function ou(e,t){e.fillStyle="#021014",e.fillRect(0,0,j,L);const n=e.createRadialGradient(j/2,L*.45,10,j/2,L/2,L);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,j,L),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let p=20;p<j;p+=20)e.beginPath(),e.moveTo(p,0),e.lineTo(p,L),e.stroke();for(let p=20;p<L;p+=20)e.beginPath(),e.moveTo(0,p),e.lineTo(j,p),e.stroke();const a=t*.002%(Math.PI*2),s=j/2,i=L/2,o=80,d=e.createRadialGradient(s,i,0,s,i,o);d.addColorStop(0,"rgba(80, 220, 200, 0.18)"),d.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=d,e.beginPath(),e.moveTo(s,i),e.arc(s,i,o,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(s,i,o,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const u=[{x:s+26,y:i-18},{x:s-30,y:i+14},{x:s+6,y:i+32}];for(const p of u)e.fillRect(Math.round(p.x),Math.round(p.y),2,2)}function ru(e){return e*e*(3-2*e)}const js=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyAccuracyMultiplier",label:"Enemy Accuracy Multiplier",min:.1,max:2,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyCountMin",label:"Min Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`},{path:"combat.enemyCountMax",label:"Max Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],cu=js.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),lu={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function jt(e){const t=e.split(".");let n=O;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function du(e,t){const n=e.split(".");let a=O;for(let s=0;s<n.length-1;s++){const i=n[s];a[i]=a[i]??{},a=a[i]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{ye(e)};window.devMining=()=>{Pe(l,l.location.systemId)?C.go("mining"):C.go("main",{message:"Travel to a new system before mining again."})};function uu(){return js.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(jt(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${jt(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function pu(e){const t=()=>{window.prompt("Dev settings snapshot (copy manually):",e)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(()=>{alert("Dev settings copied to clipboard.")}).catch(()=>{t()}):t(),console.log("Dev settings report:",e)}function be(){const e=document.getElementById("app");if(!e)return;const t=lu[C.current]??"space";Zd(t);let n="";if(Fs(null,performance.now()),C.current==="mining"&&!l.miningSession&&l.location?.systemId){const s=Mt(),i=new Set(s?.tags??[]);(i.has("mining_belt")||i.has("mining"))&&l.lastMiningSystemId!==l.location.systemId&&Pe(l,l.location.systemId)}switch(C.current){case"main":n=Rl();break;case"travel":n=Al();break;case"market":n=zl(C.params);break;case"contracts":n=td();break;case"ship":n=pd();break;case"event":n=md(C.params);break;case"combat":n=$d(C.params);break;case"weapon_slots":n=Hd();break;case"weapon_select":n=Od(C.params);break;case"shipyard":n=Sd();break;case"ship_select":n=Dd();break;case"mining":n=Wd();break;case"perks":n=Vd();break;case"gameover":n=Gd();break}const a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${uu()}
      <section class="dev-section">
        <h3>Quick Actions</h3>
          <div class="dev-actions">
            <button class="btn btn-primary" id="devSpawnPirates">Spawn Pirate Encounter</button>
            <button class="btn btn-primary" id="devTriggerMining">Trigger Mining Event</button>
            <button class="btn btn-primary" id="devAddCredits">+1000 Credits</button>
            <button class="btn btn-primary" id="devFillCargo">Fill Cargo</button>
            <button class="btn btn-primary" id="devGodMode">Toggle God Mode</button>
            <button class="btn btn-primary" id="devReportSettings">Report Dev Settings</button>
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
  `;e.innerHTML=`${n}${a}`,mu()}let Ae=!1,na=!1;function mu(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),o=document.getElementById("devFillCargo"),d=document.getElementById("devGodMode"),u=document.getElementById("devReportSettings"),p=document.getElementById("devResetMiningSession"),m=document.getElementById("devSpikeThreat"),h=document.getElementById("devLogMiningGrid"),g=document.getElementById("navTravel"),f=document.getElementById("navMarket"),v=document.getElementById("navShip"),w=document.getElementById("devPersistEvents"),x=document.getElementById("devClearEvents"),P=document.getElementById("devHardReset"),T=t?.querySelectorAll("input[data-dev-path]"),I=document.getElementById("devMiningStatus"),y=()=>{t&&t.classList.toggle("hidden")},B=M=>{const $=cu[M],k=document.getElementById(`devValue-${M.replace(/\./g,"__")}`);$&&k&&(k.textContent=$.formatter(jt(M)))};T?.forEach(M=>{const $=()=>{const k=M.dataset.devPath;if(!k)return;const N=Number(M.value);du(k,N),at(),B(k)};M.addEventListener("input",$)});const E=()=>{if(!I)return;const M=l.miningSession;if(!M){I.textContent="No active mining session.";return}const $=(M.threat??0).toFixed(1),k=M.depth??0;I.innerHTML=`
      <div>System: ${M.systemId}</div>
      <div>Belt: ${M.beltName??M.beltId??"—"}</div>
      <div>Depth: Z${k}</div>
      <div>Threat: ${$}%</div>
      <div>Exploration: ${(M.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${M.drillsUsed??0}</div>
      <div>Selected: ${M.selectedRow!=null?`X${M.selectedCol+1} Y${M.selectedRow+1}`:"none"}</div>
    `};E(),e?.addEventListener("click",y),n?.addEventListener("click",()=>t?.classList.add("hidden")),g?.addEventListener("click",()=>window.nav?.("travel")),f?.addEventListener("click",()=>window.nav?.("market")),v?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{l.player.credits+=1e3,t?.classList.add("hidden"),be()}),o?.addEventListener("click",()=>{const M=l.ship.cargo||{};M.aurite_ore=(M.aurite_ore||0)+20,l.ship.cargo=M,t?.classList.add("hidden"),be()}),d?.addEventListener("click",()=>{Ae=!Ae,l.godMode=Ae,Ae&&(l.ship.hp=l.ship.maxHp,l.ship.shields=l.ship.maxShields),alert(`God Mode: ${Ae?"On":"Off"}`)}),u?.addEventListener("click",()=>{const M=JSON.stringify({timestamp:new Date().toISOString(),devTune:O},null,2);pu(M),t?.classList.add("hidden")}),p?.addEventListener("click",()=>{Pe(l,l.location.systemId,l.miningSession?.beltId),t?.classList.add("hidden"),be(),E()}),m?.addEventListener("click",()=>{const M=l.miningSession;M&&(M.threat=95,M.currentPirateChance=.95,t?.classList.add("hidden"),be(),E())}),h?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",l.miningSession),console.groupEnd()}),w?.addEventListener("click",()=>{Yo(),alert("Events cached locally. Future loads will honor this list.")}),x?.addEventListener("click",()=>{Xo(),alert("Event cache cleared. Future loads use the bundled data.")}),P?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),na||(document.addEventListener("keydown",M=>{M.key==="`"&&y(),M.key==="Escape"&&C.current!=="main"&&C.current!=="event"&&window.nav?.("main")}),na=!0)}let S=null,X=null,Hs=null,aa=performance.now();async function hu(){const e="/space/".replace(/\/+$/,"/"),t=R=>`${e}content/${R}`,[n,a,s,i,o,d,u,p,m,h,g]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json")),fetch(t("encounters.json")),fetch(t("factions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!o.ok)throw new Error(`Failed to load weapons.json: ${o.status}`);if(!i.ok)throw new Error(`Failed to load commodities.json: ${i.status}`);if(!d.ok)throw new Error(`Failed to load enemies.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load events.json: ${u.status}`);if(!p.ok)throw new Error(`Failed to load loot_tables.json: ${p.status}`);if(!m.ok)throw new Error(`Failed to load missions.json: ${m.status}`);if(!h.ok)throw new Error(`Failed to load encounters.json: ${h.status}`);if(!g.ok)throw new Error(`Failed to load factions.json: ${g.status}`);const f=await n.json();for(const R of f){const F=new Set(R.tags??[]);R.region&&F.add(R.region),R.security==="high"&&F.add("secure"),R.security==="low"&&F.add("lawless"),R.marketProfile?.blackMarket&&F.add("black_market");const G=R.economyTags??[];G.includes("mining")&&F.add("mining"),G.includes("salvage")&&F.add("salvage"),G.includes("checkpoint")&&F.add("checkpoint"),R.tags=Array.from(F)}const v=await a.json(),w=await s.json(),x=await i.json(),P=await o.json(),T=await d.json(),I=await fetch(t("bases.json"));if(!I.ok)throw new Error(`Failed to load bases.json: ${I.status}`);const y=await I.json(),B={};for(const R of f)B[R.id]=R;const E=await u.json();zo(E);const M=await p.json();tr(M);const $=await m.json(),k=await h.json(),N=await g.json();to($);const U={};for(const R of y)U[R.id]=R;return{systems:f,systemsById:B,bases:y,basesById:U,ships:v,components:w,commodities:x,weapons:P,enemies:T,events:E,lootTables:M,missions:$,encounters:k,factions:N}}function fu(){X||(X=document.createElement("canvas"),X.id="pixel-background",X.style.position="fixed",X.style.top="0",X.style.left="0",X.style.width="100vw",X.style.height="calc(100vw * 9 / 16)",X.style.maxHeight="100vh",X.style.maxWidth="calc(100vh * 16 / 9)",X.style.objectFit="contain",X.style.zIndex="0",X.style.pointerEvents="none",X.style.background="#02030b",X.style.imageRendering="pixelated",X.style.display="block",document.body.insertBefore(X,document.body.firstChild||null),Hs=X.getContext("2d"),Kd(X))}function gu(){const e=t=>{const n=t-aa;aa=t,Qd(n),Fs(Hs,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function yu(){S=await hu(),fu();const e=Li(S.systems),t=ra();t.map=e,ca(t),$a(e),da();const n=Js();n&&(l.player.xp=n.xp,l.player.xpTracks=n.xpTracks??{},l.player.perksUnlocked=n.perksUnlocked??[]);const a=Ys();if(a){const o=l.ship.hardpoints.length,d=[];for(let u=0;u<o;u++)d.push(a.weapons[u]??null);l.ship.weapons=d,l.ship.passives=a.passives??[],l.inventory.weapons=a.inventoryWeapons??[],l.inventory.passives=a.inventoryPassives??[]}Ot();const s=C.go.bind(C);C.go=(o,d)=>{s(o,d),be()};const i=C.setZoom.bind(C);C.setZoom=o=>{C.zoom!==o&&(i(o),be())},window.nav=(o,d={})=>{C.go(o,d)},C.current=l.player.hasChosenStarter?"main":"ship_select",be(),gu()}function ee(e){return S?S.systemsById[e]??null:null}function vu(e){return S?S.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{yu()});
