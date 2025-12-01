(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ks=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,passiveSlots:1,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,passiveSlots:1,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:4,passiveSlots:1,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,passiveSlots:1,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,passiveSlots:1,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,passiveSlots:1,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,passiveSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,passiveSlots:2,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,passiveSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,passiveSlots:2,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,passiveSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}];let $a=null;function Jt(e){$a=e}function pt(){return $a}function $s(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function at(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function Ss(e){const t=e.map(s=>({id:s.id,name:s.name,x:s.coords?.x??0,y:s.coords?.y??0,tags:s.tags??[]})),n=[],a=new Set;for(const s of e)for(const o of s.neighbors??[]){const d=at(s.id,o.id);a.has(d)||(a.add(d),n.push({from:s.id,to:o.id,type:$s(o.laneType),distance:Math.max(1,Math.round(o.distance??1))}))}const i={nodes:t,lanes:n};return Jt(i),i}function Kt(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function _s(e,t,n){const a=n==="local"?1:3,i=new Map([[t,0]]);let s=[t];for(let o=1;o<=a;o++){const d=[];for(const u of s)for(const p of Kt(e,u))i.has(p)||(i.set(p,o),d.push(p));if(!d.length)break;s=d}return i}function Zt(e,t,n){if(t===n)return[t];const a=[t],i=new Set([t]),s=new Map;for(;a.length;){const u=a.shift();for(const p of Kt(e,u))if(!i.has(p)&&(i.add(p),s.set(p,u),a.push(p),p===n))break}if(!i.has(n))return[];const o=[];let d=n;for(;d;)o.push(d),d=s.get(d);return o.reverse()}function Cs(e,t,n){const a=Zt(e,t,n);return a.length?Math.max(0,a.length-1):null}const Fn=ks,te=Fn.find(e=>e.starter)??Fn[0],Ts=te?.hardpoints.length??0,Es={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"},Is={balanced:{id:"balanced",label:"Balanced",description:"Steady posture that treats every attack equally while keeping systems synced.",damageTakenMultipliers:{},evasionBonus:0},brace:{id:"brace",label:"Brace",description:"Tighten defenses—absorbs kinetic/explosive hits but lets in energy fire.",damageTakenMultipliers:{kinetic:.7,explosive:.7,energy:1.1,disruptive:1.1},evasionBonus:.05},evasive:{id:"evasive",label:"Evasive",description:"Skinny, agile frame—decreases all damage via maneuvering.",damageTakenMultipliers:{kinetic:.85,explosive:.85,energy:.85,disruptive:.85},evasionBonus:.15},overcharge:{id:"overcharge",label:"Overcharge",description:"Pour power to shields and weapons but disruptives tear through you.",damageTakenMultipliers:{disruptive:1.25,kinetic:.95,explosive:.95,energy:.9},evasionBonus:-.05,shieldBonus:15}};function Sa(e){return Is[e]}function _a(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0,xpEarned:0}}let l;function ge(){if(!l)throw new Error("Game state not initialized");return l.inventory||(l.inventory={weapons:[],passives:[]}),l.inventory.weapons||(l.inventory.weapons=[]),l.inventory.passives||(l.inventory.passives=[]),l.inventory}const Ca="cosmo_weapon_loadout";function Rs(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Ca);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],passives:Array.isArray(t.passives)?t.passives:[],inventoryWeapons:Array.isArray(t.inventoryWeapons)?t.inventoryWeapons:[],inventoryPassives:Array.isArray(t.inventoryPassives)?t.inventoryPassives:[]}}catch{return null}}function Ee(){if(typeof window>"u"||!window.localStorage||!l)return;const e=ge(),t={weapons:l.ship.weapons,passives:l.ship.passives,inventoryWeapons:e.weapons,inventoryPassives:e.passives};window.localStorage.setItem(Ca,JSON.stringify(t))}const Ta="cosmo_xp_state",ot="cosmo_save_game",Ea=`${ot}_timestamp`;function Ps(){if(typeof window>"u"||!window.localStorage||!l)return;const e={xp:l.player.xp,xpTracks:l.player.xpTracks??{},perksUnlocked:l.player.perksUnlocked??[]};window.localStorage.setItem(Ta,JSON.stringify(e))}function As(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Ta);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function Ds(){if(!(typeof window>"u"||!window.localStorage||!l))try{window.localStorage.setItem(ot,JSON.stringify(l)),window.localStorage.setItem(Ea,Date.now().toString())}catch(e){console.warn("Unable to persist game state:",e)}}function Bs(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(ot);if(!e)return null;try{return JSON.parse(e)}catch{return window.localStorage.removeItem(ot),window.localStorage.removeItem(Ea),null}}function Ns(){const e=Bs();return e?(e.map&&Jt(e.map),Qt(e),!0):!1}function Ia(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1,xp:0,xpTracks:{mining:0},perksUnlocked:[]},ship:{templateId:te?.id??"none",name:te?.name??"Undefined Hull",hp:te?.hull??0,maxHp:te?.hull??0,shields:te?.shields??0,maxShields:te?.shields??0,fuel:te?.fuel??0,maxFuel:te?.fuel??0,cargoCapacity:te?.cargo??0,cargo:{},modules:[],weapons:te?.hardpoints.map(e=>Es[`${e.size}:${e.type}`]??null)??Array(Ts).fill(null),passives:[],weaponPower:12,evasion:5,maneuverRating:te?.maneuverRating??0,components:[],hardpoints:te?.hardpoints.map(e=>({...e}))??[],passive:te?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,lastMiningSystemId:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"],passives:[]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},tradeStrategy:{taxEvasion:0,smuggling:0,bribery:0},intel:{systems:[]},runStats:_a(),gameOver:{active:!1,reason:null},map:null,difficulty:{day:1,playerPowerScore:1,tension:0}}}function Qt(e){l=e}const Ra="space-dev-tune",ee={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:2.2,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:.35,miningPayoutMultiplier:.75,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.6,enemyDamageMultiplier:.65,enemyAccuracyMultiplier:.9,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:-.1,difficultyScalePerShipPower:0,creditsRewardMultiplier:1.4,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1.2,globalDangerMultiplier:1,encounterChancePerJump:56,nonPirateEventWeight:1,showEncounterDebug:0}};let H={...ee};function Ls(e){return{...ee.combat,...e}}function _t(e){return{...e,enemyHpMultiplier:Math.min(ee.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??ee.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(ee.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??ee.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(ee.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??ee.combat.enemyAccuracyMultiplier))}}function Pa(){if(typeof window>"u"||!window.localStorage){H={...ee};return}const e=window.localStorage.getItem(Ra);if(!e){H={...ee,combat:_t(ee.combat)},it();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=Ls({...t.combat,...n});H={...ee,...t,combat:_t(a)},it()}catch{H={...ee,combat:_t(ee.combat)},it()}}function it(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Ra,JSON.stringify(H))}function Aa(e){const t=H.progressionSpeedMultiplier??1;return e*t}function Y(){return H.combat??ee.combat}function Fs(){return l.ship.passive?.effects??{}}const Da="cosmo_run_high_scores",Ba=5;function js(){return l?{...l.runStats,commodityVolumes:{...l.runStats.commodityVolumes}}:_a()}function Hs(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function Na(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(Da);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,Ba):[]}catch{return[]}}function Os(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Da,JSON.stringify(e.slice(0,Ba)))}function qs(){return Na()}function Us(e){const t=Na();t.push(e),t.sort((n,a)=>a.score-n.score),Os(t)}function Pe(e){if(!l||e<=0)return;l.runStats.creditsEarnedTotal+=e;const t=l.player.credits;t>l.runStats.highestNetWorth&&(l.runStats.highestNetWorth=t)}function zs(e,t,n){if(!l)return;l.runStats.tradeProfitTotal+=Math.max(0,n);const a=l.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const i=l.runStats.mostTradedCommodityId;(!i||a[e]>a[i])&&(l.runStats.mostTradedCommodityId=e)}function Gs(e){!l||e<=0||(l.runStats.contractPayoutTotal+=e)}function Ws(){l&&(l.runStats.contractsCompleted+=1)}function Ce(e){!l||e<=0||(l.runStats.damageDealtTotal+=e)}function Vs(e){!l||e<=0||(l.runStats.damageTakenTotal+=e)}function Ys(){l&&(l.runStats.fightsSurvived+=1)}function Xs(){l&&(l.runStats.shipsDestroyed+=1)}function Js(e,t){!l||e<=0||(l.runStats.miningRuns+=1,l.runStats.oreMinedTotal+=e,t&&(l.runStats.rareFinds+=1))}function Ks(e,t="mining"){if(!l||e<=0)return;l.player.xp+=e,l.runStats.xpEarned+=e;const n=l.player.xpTracks||{};n[t]=(n[t]??0)+e,l.player.xpTracks=n}function Zs(){l&&(l.runStats.jumpsMade+=1,l.runStats.systemsVisited+=1)}function Qs(e){l&&(l.runStats.daysSurvived=Math.max(l.runStats.daysSurvived,e))}const C={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}},jt=.4;function eo(){return _?_.components:[]}function Ae(e){return _?_.components.find(t=>t.id===e)??null:null}function La(){if(!_)return[];const e=l.ship.components;return _.components.filter(t=>e.includes(t.id))}function to(){if(!_)return{};const e={},t=[...La(),...Fa()];for(const n of t)if(n.effects)for(const[a,i]of Object.entries(n.effects))typeof i=="number"&&(e[a]=(e[a]??1)*i);return e}function no(){return _?_.components.filter(e=>e.slot==="passive"):[]}function Fa(){return _?_.components.filter(e=>l.ship.passives.includes(e.id)):[]}function ao(){return[...ge().passives]}function io(e){if(!_)return!1;const t=Ae(e);if(!t||t.slot!=="passive")return console.warn(`Passive component ${e} not found.`),!1;if(l.player.credits<t.cost)return console.warn("Not enough credits to buy this passive system."),!1;if(l.ship.passives.includes(e))return console.warn("Passive already installed."),!1;const n=ge();return n.passives.includes(e)?(console.warn("Passive already purchased."),!1):(l.player.credits-=t.cost,n.passives.push(e),Ee(),!0)}function so(e){if(!_)return!1;const t=Ae(e);if(!t||t.slot!=="passive")return console.warn(`Passive component ${e} not found.`),!1;if(l.ship.passives.includes(e))return console.warn("Passive already installed."),!1;const n=ge(),a=n.passives.indexOf(e);if(a===-1)return console.warn("Passive not owned."),!1;const s=_.ships.find(o=>o.id===l.ship.templateId)?.passiveSlots??0;return l.ship.passives.length>=s?(console.warn("No free passive slots."),!1):(n.passives.splice(a,1),l.ship.passives.push(e),Ee(),!0)}function oo(e){if(!_)return!1;const t=Ae(e);if(!t)return!1;const n=ge(),a=l.ship.passives.indexOf(e),i=n.passives.indexOf(e);if(a===-1&&i===-1)return!1;a!==-1?l.ship.passives.splice(a,1):n.passives.splice(i,1);const s=Math.floor((t.cost??0)*jt);return l.player.credits+=s,Ee(),!0}function ro(e){if(!_)return!1;const t=_.components.find(n=>n.id===e);return t?l.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):l.ship.components.includes(e)?(console.warn("Component already installed."),!1):(l.player.credits-=t.cost,l.ship.components.push(e),co(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function co(e){const t=l.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function ne(){const e=Fs(),t=to(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const i of n){const s=typeof e[i]=="number"?e[i]:1,o=typeof t[i]=="number"?t[i]:1;a[i]=s*o}return a}function ja(){const e=ne(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,Y().globalIncomeMultiplier??1);return t*n}const lo=-100,uo=100;function po(e,t){const n=l.reputation[e]||0,a=ho(n+t);return l.reputation[e]=a,a}function Ha(e){for(const[t,n]of Object.entries(e))po(t,n)}function mo(e){return l.reputation[e]||0}function ho(e){return Math.max(lo,Math.min(uo,e))}const jn={damageMultiplier:1.25,accuracyMultiplier:.8},fo=.4,je={kinetic:{vsShields:.8,vsHull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},energy:{vsShields:1.2,vsHull:.8,description:"Energy beams focus on shields and finesse hulls."},explosive:{vsShields:1,vsHull:1.3,description:"Explosives blast both layers but leave hull plating the most damaged."},disruptive:{vsShields:1.3,vsHull:1,description:"Disruptive rounds disable shields aggressively while nicking hull."}};Object.keys(je).map(e=>({type:e,shieldMultiplier:je[e].vsShields,hullMultiplier:je[e].vsHull,description:je[e].description}));const Ht=je;function go(){return _?_.weapons:[]}function en(){return ge()}function mt(){return[...en().weapons]}function tn(){if(!_)return;const e=mt();if(!e.length)return;const t=l.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const i=e.filter(o=>nn(a,o));return i.length?i[Math.floor(Math.random()*i.length)]:n})}function nn(e,t){const n=l.ship,a=_?.weapons.find(s=>s.id===t);if(!a)return!1;const i=n.hardpoints[e];return i?a.size===i.size&&a.type===i.type:!1}function yo(e,t){return nn(e,t)?(l.ship.weapons[e]=t,Ee(),!0):!1}function K(e){return!e||!_?null:_.weapons.find(t=>t.id===e)??null}function vo(e){const t=K(e);return!t||l.player.credits<t.price?!1:(en().weapons.push(e),l.player.credits-=t.price,Ee(),!0)}const Oa=.4;function bo(e){const t=K(e);if(!t)return!1;const n=en(),a=l.ship.weapons.findIndex(o=>o===e),i=n.weapons.indexOf(e);if(a===-1&&i===-1)return!1;a!==-1&&(l.ship.weapons[a]=null),i!==-1&&n.weapons.splice(i,1);const s=Math.floor((t.price??0)*Oa);return l.player.credits+=s,Ee(),!0}const Mo=.15;function qa(e,t={}){const n=e.tags||[];let a=e.accuracy*(t.accuracyMultiplier??1)+Mo||0;if(n.includes("accurate")&&(a+=.05),a=Math.min(.95,Math.max(0,a)),Math.random()>a)return 0;let i=e.damage;Math.random()<e.critChance&&(i*=e.critMultiplier);const s=.2,o=1+(Math.random()*s*2-s);return i=Math.max(1,Math.round(i*o)),i*=t.damageMultiplier??1,Math.max(0,Math.round(i))}const wo={kinetic:"Kinetic",energy:"Energy",explosive:"Explosive",disruptive:"Disruptive"},xo={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Hn(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const On={shields:"Shield-breaker",hull:"Hull buster"};function an(e){const t=e.damageType,n=Ht[t]??Ht.kinetic,a=Hn(n.vsShields),i=Hn(n.vsHull);let s="Balanced";a==="Strong"&&i==="Weak"?s=On.shields:i==="Strong"&&a==="Weak"?s=On.hull:a==="Strong"&&i==="Strong"&&(s="Devastating");const o=(e.tags||[]).map(d=>xo[d]).filter(Boolean);return{role:s,vsShields:a,vsHull:i,typeLabel:wo[t]??t,tagNotes:o}}const ko={mining:{id:"mining",displayName:"Mining XP",description:"Progression earned from mining tiles, going deeper, and surviving hazards.",type:"activity",levelThresholds:[0,100,300,600,1e3,1600,2300],maxLevel:20,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"extraction_t1_efficient_strikes"}],4:[{type:"perkUnlock",perkId:"extraction_t2_vein_whisperer"}],6:[{type:"perkUnlock",perkId:"extraction_t3_deep_delver"}],10:[{type:"perkUnlock",perkId:"risk_t5_chain_momentum"}],14:[{type:"perkUnlock",perkId:"economy_t4_hazard_insight"}]}},combat:{id:"combat",displayName:"Combat XP",description:"Progression earned from destroying enemies, dodging, and using combos.",type:"activity",levelThresholds:[0,120,280,520,900,1400],maxLevel:20,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"precision_t1_targeting_assist"}],3:[{type:"perkUnlock",perkId:"survival_t1_hull_plating"}],5:[{type:"perkUnlock",perkId:"precision_t2_headshot_focus"}],7:[{type:"perkUnlock",perkId:"survival_t2_defensive_burst"}],12:[{type:"perkUnlock",perkId:"precision_t3_backline_breach"}],16:[{type:"perkUnlock",perkId:"survival_t3_last_stand_matrix"}]}},travel:{id:"travel",displayName:"Travel XP",description:"Progression from discovering systems, long jumps, and risky routes.",type:"activity",levelThresholds:[0,80,200,420,750,1100],maxLevel:15,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"control_t1_quick_cycle"}],4:[{type:"perkUnlock",perkId:"control_t2_route_insight"}],7:[{type:"perkUnlock",perkId:"control_t3_hazard_mapping"}]}},faction_civilian:{id:"faction_civilian",displayName:"Civilian Reputation",description:"Reputation with civilian factions.",type:"faction",levelThresholds:[0,50,150,300,600,1e3],maxLevel:10,rewardsByLevel:{2:[{type:"discount",scope:"markets_civilian",value:.05}],4:[{type:"perkUnlock",perkId:"diplomacy_t2_courier_favor"}],6:[{type:"specialMission",missionId:"civilian_aid_convoy"}]}},faction_pirate:{id:"faction_pirate",displayName:"Pirate Reputation",description:"Reputation with pirate and syndicate networks.",type:"faction",levelThresholds:[0,60,180,360,720],maxLevel:10,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"diplomacy_t1_rift_graffiti"}],4:[{type:"discount",scope:"black_market",value:.08}],6:[{type:"perkUnlock",perkId:"diplomacy_t3_shadow_outreach"}]}},ship_interceptor:{id:"ship_interceptor",displayName:"Interceptor Mastery",description:"Ship-specific XP earned while piloting the interceptor.",type:"ship",levelThresholds:[0,50,150,300,600],maxLevel:10,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"ship",stat:"evadeBase",operation:"addPercent",value:.05}]}],4:[{type:"modifierUnlock",id:"interceptor_mobility_combo_boost",description:"+10% combo gain from mobility actions."}],6:[{type:"specialAbilityUnlock",abilityId:"phantom_strike",description:"Once per encounter, perform a guaranteed backline strike after a dodge."}]}},ship_hauler:{id:"ship_hauler",displayName:"Hauler Mastery",description:"Progression while piloting large cargo haulers.",type:"ship",levelThresholds:[0,40,120,260,500],maxLevel:8,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"ship",stat:"cargoCapacity",operation:"addFlat",value:15}]}],4:[{type:"perkUnlock",perkId:"ship_hauler_hazard_steadiness"}],6:[{type:"specialAbilityUnlock",abilityId:"emergency_shield_pulse",description:"Deploy a pulse that restores shields equal to 15% of max."}]}},ship_miner:{id:"ship_miner",displayName:"Colonial Miner Mastery",description:"XP gained while using dedicated mining platforms.",type:"ship",levelThresholds:[0,60,180,360,720],maxLevel:10,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"mining",stat:"signalRadius",operation:"addPercent",value:.1}]}],5:[{type:"modifierUnlock",id:"deep_miner_cluster_focus",description:"Mining shifts reveal two adjacent cells when drilling."}],8:[{type:"specialAbilityUnlock",abilityId:"resonance_burst",description:"Emit a resonance burst that rewards guaranteed uncommon loot next drill."}]}}},$o={survival_t1_hull_plating:{id:"survival_t1_hull_plating",branch:"survival",tier:1,displayName:"Hull Plating I",description:"+5% hull integrity and -10% mining hazard damage.",requires:[],effects:[{target:"ship",stat:"hullMaxMultiplier",operation:"mul",value:1.05},{target:"mining",stat:"hazardDamageMultiplier",operation:"mul",value:.9}]},precision_t1_targeting_assist:{id:"precision_t1_targeting_assist",branch:"precision",tier:1,displayName:"Targeting Assist",description:"+5% weapon accuracy and +10% accuracy vs backline.",requires:[],effects:[{target:"combat",stat:"accuracyBase",operation:"addPercent",value:.05},{target:"combat",stat:"accuracyBacklineBonus",operation:"addPercent",value:.1}]},extraction_t1_efficient_strikes:{id:"extraction_t1_efficient_strikes",branch:"extraction",tier:1,displayName:"Efficient Strikes",description:"+10% ore yield, -5% drill wear.",requires:[],effects:[{target:"mining",stat:"oreYieldMultiplier",operation:"mul",value:1.1},{target:"mining",stat:"drillWearMultiplier",operation:"mul",value:.95}]},extraction_t2_vein_whisperer:{id:"extraction_t2_vein_whisperer",branch:"extraction",tier:2,displayName:"Vein Whisperer",description:"+10% signal readings and +5% combo gain on surveyed tiles.",requires:["extraction_t1_efficient_strikes"],effects:[{target:"mining",stat:"signalBonus",operation:"addPercent",value:.1},{target:"mining",stat:"comboGainMultiplier",operation:"mul",value:1.05}]},extraction_t3_deep_delver:{id:"extraction_t3_deep_delver",branch:"extraction",tier:3,displayName:"Deep Delver",description:"+8% rare yield and +8% hazard control from Risk Chain perks.",requires:["extraction_t2_vein_whisperer"],effects:[{target:"mining",stat:"rareYieldMultiplier",operation:"mul",value:1.08},{target:"mining",stat:"hazardControlBonus",operation:"addPercent",value:.08}]},precision_t2_headshot_focus:{id:"precision_t2_headshot_focus",branch:"precision",tier:2,displayName:"Headshot Focus",description:"+5% crit chance and +8% backline accuracy.",requires:["precision_t1_targeting_assist"],effects:[{target:"combat",stat:"critChance",operation:"addPercent",value:.05},{target:"combat",stat:"accuracyBacklineBonus",operation:"addPercent",value:.08}]},survival_t2_defensive_burst:{id:"survival_t2_defensive_burst",branch:"survival",tier:2,displayName:"Defensive Burst",description:"Shield hits trigger 12% faster regen for 2 seconds.",requires:["survival_t1_hull_plating"],effects:[{target:"combat",stat:"shieldRegenTriggerBonus",operation:"addPercent",value:.12}]},precision_t3_backline_breach:{id:"precision_t3_backline_breach",branch:"precision",tier:3,displayName:"Backline Breach",description:"Backline strikes ignore 10% of enemy evasion.",requires:["precision_t2_headshot_focus"],effects:[{target:"combat",stat:"backlineAccuracyMultiplier",operation:"mul",value:1.1}]},survival_t3_last_stand_matrix:{id:"survival_t3_last_stand_matrix",branch:"survival",tier:3,displayName:"Last Stand Matrix",description:"When hull drops below 30%, damage taken is reduced by 15%.",requires:["survival_t2_defensive_burst"],effects:[{target:"combat",stat:"lowHullDamageMultiplier",operation:"mul",value:.85}]},control_t1_quick_cycle:{id:"control_t1_quick_cycle",branch:"control",tier:1,displayName:"Quick Cycle",description:"Using different action categories in sequence builds 20% more combo.",requires:[],effects:[{target:"combo",stat:"variationGainMultiplier",operation:"mul",value:1.2}]},control_t2_route_insight:{id:"control_t2_route_insight",branch:"control",tier:2,displayName:"Route Insight",description:"Long-distance jumps refresh 25% faster and reduce hazard chatter.",requires:["control_t1_quick_cycle"],effects:[{target:"travel",stat:"jumpCooldownMultiplier",operation:"mul",value:.75},{target:"travel",stat:"hazardDetectionBonus",operation:"addPercent",value:.08}]},control_t3_hazard_mapping:{id:"control_t3_hazard_mapping",branch:"control",tier:3,displayName:"Hazard Mapping",description:"Gain a partial hazard map for the next jump and +5% fuel efficiency in wildspace.",requires:["control_t2_route_insight"],effects:[{target:"travel",stat:"nextJumpScan",operation:"add",value:1},{target:"travel",stat:"fuelCostMultiplier",operation:"mul",value:.95}]},diplomacy_t1_rift_graffiti:{id:"diplomacy_t1_rift_graffiti",branch:"diplomacy",tier:1,displayName:"Rift Graffiti",description:"+3% intel on pirate routes and first contact goodwill.",requires:[],effects:[{target:"intel",stat:"pirateRouteDetection",operation:"addPercent",value:.03},{target:"faction_pirate",stat:"reachBonus",operation:"addPercent",value:.05}]},diplomacy_t2_courier_favor:{id:"diplomacy_t2_courier_favor",branch:"diplomacy",tier:2,displayName:"Courier Favor",description:"Civilian markets grant +4% trade intel and reduce smuggling detection by 5%.",requires:[],effects:[{target:"economy",stat:"intelGainMultiplier",operation:"addPercent",value:.04},{target:"smuggling",stat:"detectionBaseline",operation:"mul",value:.95}]},diplomacy_t3_shadow_outreach:{id:"diplomacy_t3_shadow_outreach",branch:"diplomacy",tier:3,displayName:"Shadow Outreach",description:"Pirate contacts share unique trade routes and trigger a weekly black market mission.",requires:["diplomacy_t1_rift_graffiti"],effects:[{target:"events",stat:"pirateMissionWeight",operation:"addPercent",value:.05}]},risk_t5_chain_momentum:{id:"risk_t5_chain_momentum",branch:"risk",tier:5,displayName:"Risk Chain Momentum",description:"Maintain a higher Risk Chain level for two extra turns, unlocking bigger rewards.",requires:["extraction_t3_deep_delver"],effects:[{target:"mining",stat:"riskChainDecayDelay",operation:"add",value:2}]},economy_t4_hazard_insight:{id:"economy_t4_hazard_insight",branch:"economy",tier:4,displayName:"Hazard Insight",description:"Hazard readings grant +10% payout on rare minerals during extraction.",requires:["extraction_t2_vein_whisperer"],effects:[{target:"mining",stat:"rareYieldMultiplier",operation:"mul",value:1.1}]},ship_hauler_hazard_steadiness:{id:"ship_hauler_hazard_steadiness",branch:"ship",tier:1,displayName:"Hazard Steadiness",description:"Hauler frame resists hazard damage by 15%.",requires:[],effects:[{target:"ship",stat:"hazardDamageMultiplier",operation:"mul",value:.85}]}},sn={xpTracks:ko,perks:$o},Ua=sn,za=sn.xpTracks;function So(e){return za[e]}function _o(e,t=0){const n=So(e);if(!n)return null;const a=n.levelThresholds??[];let i=0;for(let m=0;m<a.length&&t>=a[m];m+=1)i=m;const s=a.length?Math.min(i,a.length-1):0,o=a[s]??0,d=s+1<a.length?a[s+1]:null,u=Math.max(0,t-o),p=d!==null?Math.max(0,d-o):null;return{track:n,level:Math.min(s,n.maxLevel),xpIntoLevel:u,xpNeededForNextLevel:p,nextThreshold:d,currentThreshold:o,xp:t}}function Ga(e={}){return Object.values(za).map(t=>_o(t.id,Math.max(0,e[t.id]??0))).filter(t=>t!==null)}const Wa=Ua.perks??{},Va=Ua.xpTracks??{};function Ya(){return l.player.perksUnlocked||(l.player.perksUnlocked=[]),new Set(l.player.perksUnlocked)}function Co(e){return Array.from(e)}function To(e){return Wa[e]??null}function Eo(e){const t=(e??"").toLowerCase();return/pirate|raider|rift|syndicate/.test(t)?"faction_pirate":"faction_civilian"}function Io(){const e=l.ship?.templateId;if(!e)return null;const t=`ship_${e}`;return Va[t]?t:null}function Ro(){return!l||!l.player?[]:l.player.perksUnlocked??[]}function me(e){return Ro().includes(e)}function Po(){const e={};for(const[t,n]of Object.entries(Va)){const a=n.rewardsByLevel??{};for(const[i,s]of Object.entries(a)){const o=Number(i);if(!Number.isNaN(o))for(const d of s)d?.type==="perkUnlock"&&d.perkId&&(d.perkId in e||(e[d.perkId]={trackId:t,level:o}))}}return e}const Ao=Po();function Do(){const e=Ya(),t={};for(const[n,a]of Object.entries(Wa)){const i={id:n,displayName:a.displayName,description:a.description,branch:a.branch??"general",tier:a.tier??1,unlocked:e.has(n),requires:a.requires??[],source:Ao[n],effectTargets:Array.from(new Set((a.effects??[]).map(s=>s.target)))};t[i.branch]||(t[i.branch]=[]),t[i.branch].push(i)}for(const n of Object.keys(t))t[n].sort((a,i)=>a.tier-i.tier||a.displayName.localeCompare(i.displayName));return t}function Bo(){if(!l||!l.player)return[];const e=Ga(l.player.xpTracks??{}),t=Ya(),n=[];for(const i of e){const s=i.track.rewardsByLevel??{};for(const o of Object.keys(s)){const d=Number(o);if(Number.isNaN(d)||d>i.level)continue;const u=s[o]??[];for(const p of u){if(p?.type!=="perkUnlock"||!p.perkId)continue;const m=p.perkId;if(t.has(m))continue;const h=To(m);!h||(h.requires??[]).some($=>!t.has($))||(t.add(m),n.push(m))}}}const a=Co(t);return l.player.perksUnlocked=a,n.length>0&&l.notifications.push(`Perks unlocked: ${n.join(", ")}.`),Ps(),n}function fe(e,t="mining"){return l?(Ks(e,t),Bo()):[]}function No(e,t){if(!l)return[];if(e<=0)return[];const n=Eo(t);return fe(e,n)}function Xa(e){if(!l)return[];const t=Io();return t?fe(e,t):[]}let on=[];function Lo(e){on=e}function Fo(e){return on.find(t=>t.id===e)}function jo(){const e=new Set(l.contracts.filter(t=>t.status==="active").map(t=>t.id));return on.filter(t=>!e.has(t.id))}function ke(){return l.contracts.filter(e=>e.status==="active")}function Ho(e){const t=e.requirements,n=i=>i?`<strong>${Z(i)?.name||i}</strong>`:"",a=[];if(t?.travel?.systemId){const i=n(t.travel.systemId);a.push(`Travel to ${i}`)}if(t?.deliver?.commodityId){const i=t.deliver.quantity||0,s=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${i} ${t.deliver.commodityId}${s}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function Oo(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const i=n.deliveredQuantity||0;a.push(`Delivery: ${i}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function rn(e){const t=Fo(e);if(!t)return{success:!1,reason:"Unknown mission"};if(l.contracts.some(i=>i.id===e&&i.status==="active"))return{success:!1,reason:"Mission already active"};const n=Zo(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:l.time.turn,progress:{}};return l.contracts.push(a),n&&Qo(a.id,n),{success:!0}}function qo(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,H.contractPayoutMultiplier??1)),i=ja(),s=Math.max(0,ne().incomeMultiplier??1),o=Math.max(0,Math.round(n.credits*2*a*i*s));l.player.credits+=o,Pe(o),Gs(o),l.notifications.push(`Mission reward: +${o} credits.`)}if(n.rep){Ha(n.rep);const a=Object.entries(n.rep).map(([i,s])=>`${i} ${s>=0?"+":""}${s}`).join(", ");a&&l.notifications.push(`Mission reward: Reputation updated (${a}).`);for(const[i,s]of Object.entries(n.rep))s>0&&No(Math.max(2,Math.round(s*8)),i)}if(n.weapon){ge().weapons.push(n.weapon);const i=K(n.weapon)?.name??n.weapon;l.notifications.push(`Rewarded weapon: ${i}.`)}}function Uo(){ke().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,H.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));l.time.turn-e.acceptedTurn>=a&&zo(e.id)}})}function zo(e){const t=l.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",ht(`Mission failed: ${t.name}`),cn(t.id))}function Go(e){const t=l.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",ht(`Mission abandoned: ${t.name}`),cn(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function Wo(e){ke().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,Ge(t)),t.requirements?.multiTravel?.length){const i=new Set(t.progress?.multiTravelVisited??[]);i.add(e),t.progress.multiTravelVisited=Array.from(i),Ge(t)}})}function Vo(e,t,n){ke().forEach(a=>{const i=a.requirements?.deliver;if(!i||i.commodityId!==e||i.systemId&&i.systemId!==n)return;const s=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=s+t,Ge(a)})}function Yo(e){ke().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,Ge(t))})}function Xo(e,t){Wo(t);const n=e.ship.cargo||={};let a=0;const i=[];for(const s of ke()){const o=s.status,d=s.requirements?.deliver;if(!d||!d.commodityId||(d.systemId??t)!==t||(a+=1,!Jo(n,d)))continue;d.retain||Ko(n,d),s.progress=s.progress||{};const p=s.progress.deliveredQuantity||0;s.progress.deliveredQuantity=p+(d.quantity||1),Ge(s),o!=="completed"&&s.status==="completed"&&i.push(s.name)}if(i.length){const s=`Contracts completed: ${i.join(", ")}`;e.notifications.push(s)}return{checked:a,completed:i}}function Jo(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function Ko(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function Ge(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,i=e.progress||{},s=e.requirements?.multiTravel,o=t?!!i.travelCompleted:!0,d=n?i.deliveredQuantity>=(n.quantity||0):!0,u=a?!!i.combatCompleted:!0,p=i.multiTravelVisited??[],m=s?s.every(h=>p.includes(h)):!0;o&&d&&u&&m&&(e.status="completed",qo(e),Ws(),ht(`Mission completed: ${e.name}`),cn(e.id))}function ht(e){l.notifications.push(e)}function Zo(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function Qo(e,t){const n=pt();if(!n)return;const a=l.location.systemId,i=Zt(n,a,t);!i.length||i.length<=1||C.setActiveRoute({nodes:i,currentIndex:0,source:"mission",missionId:e})}function cn(e){C.activeRoute?.missionId===e&&C.clearActiveRoute()}function er(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",ht(`Mission failed (expired): ${n.name}`))}const Ct=25,Ja=100,ln={taxEvasion:{cost:180,gain:10,name:"Tax Evasion Grid",benefit:"whispered import routes and shell accounts"},smuggling:{cost:150,gain:8,name:"Smuggling Ring",benefit:"hidden routes and tolerant contacts"},bribery:{cost:200,gain:12,name:"Bribery Ledger",benefit:"greased palms and friendly inspectors"}};function dn(){return l.tradeStrategy||(l.tradeStrategy={taxEvasion:0,smuggling:0,bribery:0}),l.tradeStrategy}function Ka(e){return Math.max(0,Math.min(Ja,e))}function tr(){return dn()}function nr(e){return Ka(tr()[e])}function ar(e,t,n){const a=Math.floor(t/Ct),i=Math.floor(n/Ct);i>a&&l.notifications.push(`Trade Path: ${e} progress ${Math.min(i*Ct,Ja)}% (${ln[e].name})`)}function Ot(e,t){if(t<=0)return;const n=dn(),a=n[e];n[e]=Ka(a+t),ar(e,a,n[e])}function ir(e){const t=ln[e];return l.player.credits<t.cost?(l.notifications.push("Not enough credits to invest in "+t.name+"."),!1):(l.player.credits-=t.cost,Ot(e,t.gain),l.notifications.push(`Invested ${t.cost} cr into ${t.name} (${t.benefit}).`),!0)}function Za(e){return ln[e]}function un(){const e=dn();return{detectionReduction:Math.min(.25,e.bribery/400),fineDiscount:Math.min(.35,e.smuggling/280)}}const sr=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave – Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05},{id:"global_easy_signal_belt",name:"Low-Signal Relay Field",systemId:"global_easy_signal",tags:["mining_belt","easy_signal","global"],stability:{start:70,carefulLoss:{min:1,max:3},standardLoss:{min:3,max:6},overchargeLoss:{min:6,max:10}},commonTableId:"global_easy_common",rareTableId:"global_easy_rare",baseRareChance:.02}],or=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]},{id:"global_easy_common",entries:[{type:"commodity",id:"aurite_ore",min:0,max:2,weight:1},{type:"commodity",id:"titanium_wire",min:0,max:2,weight:.75},{type:"commodity",id:"purified_water",min:0,max:3,weight:.6},{type:"commodity",id:"textile_fiber",min:0,max:1,weight:.45}]},{id:"global_easy_rare",entries:[{type:"commodity",id:"luxury_spice",min:0,max:1,weight:.3},{type:"commodity",id:"medical_supplies",min:0,max:1,weight:.35},{type:"commodity",id:"contraband_data",min:0,max:1,weight:.2},{type:"commodity",id:"forbidden_ai_logic",min:0,max:1,weight:.1}]},{id:"depth_surface_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.5},{type:"commodity",id:"purified_water",min:1,max:2,weight:.35}]},{id:"depth_surface_rare",entries:[{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.45},{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.35},{type:"commodity",id:"textile_fiber",min:1,max:2,weight:.2}]},{id:"depth_mid_common",entries:[{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.8},{type:"commodity",id:"synthetic_fuel",min:1,max:3,weight:.65},{type:"commodity",id:"textile_fiber",min:1,max:2,weight:.45}]},{id:"depth_mid_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.2},{type:"commodity",id:"emberite_pearl",min:1,max:1,weight:.2},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.05}]},{id:"depth_deep_common",entries:[{type:"commodity",id:"contraband_data",min:1,max:3,weight:.4},{type:"commodity",id:"boreal_crystal",min:1,max:3,weight:.5},{type:"commodity",id:"synthetic_fuel",min:2,max:4,weight:.55},{type:"commodity",id:"steel_ingots",min:2,max:5,weight:.4}]},{id:"depth_deep_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:3,weight:.15},{type:"commodity",id:"umbrite_shard",min:1,max:2,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:2,weight:.2},{type:"commodity",id:"medical_supplies",min:2,max:3,weight:.1}]},{id:"depth_deep_ultra",entries:[{type:"commodity",id:"forbidden_ai_logic",min:0,max:1,weight:.6},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.4}]},{id:"depth_core_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:3,weight:.8},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.5},{type:"commodity",id:"boreal_crystal",min:1,max:2,weight:.4},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.35}]},{id:"depth_core_rare",entries:[{type:"commodity",id:"forbidden_ai_logic",min:1,max:1,weight:.2},{type:"commodity",id:"umbrite_shard",min:1,max:2,weight:.25},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.25},{type:"commodity",id:"unity_relics",min:2,max:3,weight:.15}]},{id:"depth_core_ultra",entries:[{type:"commodity",id:"quantum_tessera",min:1,max:1,weight:.6},{type:"commodity",id:"forbidden_ai_logic",min:1,max:1,weight:.4},{type:"commodity",id:"unity_relics",min:1,max:2,weight:.35}]}],Qa={belts:sr,tables:or},ei="__global__",rr={buyMultiplier:1,sellMultiplier:.85},cr={basic:.9,standard:1,strategic:1.2,luxury:1.35},lr=new Set((Qa.tables??[]).flatMap(e=>(e.entries??[]).map(t=>t.id))),dr=.5;function ft(){return l.ship.cargo||(l.ship.cargo={}),l.ship.cargo}function ur(){const e=ft();return Object.values(e).reduce((t,n)=>t+n,0)}function ti(){return _?.commodities??[]}function oe(e){return ti().find(n=>n.id===e)??null}function ue(){return l.marketState?(l.marketState.temporaryModifiers=l.marketState.temporaryModifiers||{},l.marketState.activeEvents=l.marketState.activeEvents||[],l.marketState.localAdjustments=l.marketState.localAdjustments||{},l.marketState.priceIntel=l.marketState.priceIntel||{},l.marketState.initialDriftSeeded=l.marketState.initialDriftSeeded??!1):l.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},l.marketState}function pr(e){l.intel||(l.intel={systems:[]});const t=l.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return l.intel.systems.push(n),n})();t.lastPriceSeenDay=l.time.day}function mr(e){const t=ue();let n=1;const a=t.temporaryModifiers[ei];a&&(n*=Math.max(0,a.multiplier));const i=t.temporaryModifiers[e];return i&&(n*=Math.max(0,i.multiplier)),n}function hr(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function fr(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const i=n.imports?.includes(t.id),s=n.exports?.includes(t.id);return i&&(a*=1.2),s&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function pn(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(H.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function gr(e,t){const n=Math.max(1,t.basePrice),a=cr[t.tier??"standard"]??1,i=e.marketModifiers?.[t.id]??1,s=fr(e,t),d=1+pn(t)*.08,u=mr(t.id),p=Mr(e.id,t.id),m=ii(e.id,t.id),h=n*a*i*s*d*u*p*m,b=lr.has(t.id)?.5:1,g=t.tags.includes("ore")?dr:1;return Math.max(1,Math.round(h*b*g))}function qn(e,t){return ae(e,t).base}function ae(e,t){const n=Z(e),a=oe(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const i=gr(n,a),s=a.baseSpread??rr,o=pn(a),d=ne(),u=Math.max(.1,Math.min(3,H.tradeProfitMultiplier??1)),p=ja(),m=Math.max(.5,d.buyBonus??1),h=Math.max(0,d.sellBonus??1),b=Math.max(.5,d.marketTax??1),g=Math.max(1,Math.round(i*(s.buyMultiplier??1)*(1+o*.05)/u*m)),$=Math.max(1,Math.round(i*(s.sellMultiplier??.85)*Math.max(.6,1-o*.05)*u*p*h*b)),T=Math.max(1,Math.min($,g-1)),I=Math.max(g,T,Math.round(i*(1+o*.1))),v=Math.max(1,Math.min(g,T,Math.round(i*Math.max(.65,1-o*.2)))),f=hr(i,a.basePrice);return pr(e),{base:i,buy:g,sell:T,high:I,low:v,trend:f}}function rt(e,t,n=2){const a=ue(),i=e&&e.length?e:ei;a.temporaryModifiers[i]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function ni(e=1){if(typeof e=="number"){yr(e);return}vr(e??l)}function yr(e){if(e<=0)return;const t=ue(),n=Object.keys(t.temporaryModifiers);for(const i of n){const s=t.temporaryModifiers[i];s.remainingTurns-=e,s.remainingTurns<=0&&delete t.temporaryModifiers[i]}const a=l.time.turn;t.activeEvents=t.activeEvents.filter(i=>i.expiresAtTurn>a),oi(t,.2*e)}function vr(e){const t=ue(),n=_?.systems??[],a=_?.commodities??[],i=e.time.day;br(t,n,a);for(const s of n)for(const o of a){const d=ii(s.id,o.id),u=pn(o),p=H.marketDailyTrendStrength??1,m=(1-d)*.1*p,h=(Math.random()-.5)*.1*(.5+u)*p,b=si(d+m+h);t.localAdjustments[s.id]||(t.localAdjustments[s.id]={}),t.localAdjustments[s.id][o.id]=b}t.activeEvents=t.activeEvents.filter(s=>!(s.expiresAtDay!==void 0&&i>=s.expiresAtDay||s.expiresAtTurn&&s.expiresAtTurn<=e.time.turn)),oi(t,.1)}function br(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const i of n){const s=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][i.id]=s}}e.initialDriftSeeded=!0}}function ct(e){return ft()[e]??0}function Mr(e,t){return ue().activeEvents.filter(a=>(a.expiresAtDay===void 0||l.time.day<a.expiresAtDay)&&a.expiresAtTurn>l.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,i)=>a*Math.max(0,i.multiplier),1)}function wr(e){ue().activeEvents.push(e)}function xr(e){return ue().activeEvents.filter(n=>n.expiresAtTurn>l.time.turn&&(n.expiresAtDay===void 0||l.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function kr(e){if(Math.random()>.08||!_?.commodities?.length)return;const n=_.commodities[Math.floor(Math.random()*_.commodities.length)],a=Math.ceil(3+Math.random()*3),i=1.15+Math.random()*.35,s={systemId:e,commodityId:n.id,multiplier:i,expiresAtTurn:l.time.turn+a,label:`${n.name} market shift x${i.toFixed(2)} (${a}t)`};wr(s),l.notifications.push(`Market shift in ${e}: ${n.name} prices x${i.toFixed(2)} for ${a} turns.`)}function ai(e,t,n,a,i){if(n<=0||a<=0)return;const o=n*a/5e3,d=Math.min(.15,.03*o),u=ue();u.localAdjustments[e]||(u.localAdjustments[e]={});const p=u.localAdjustments[e][t]??1,m=i==="buy"?1+d:1-d,h=si(p*m);u.localAdjustments[e][t]=h}function ii(e,t){return ue().localAdjustments[e]?.[t]??1}function si(e){return Math.min(2,Math.max(.5,e))}function oi(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[i,s]of Object.entries(a)){const o=s-1,d=s-o*t;Math.abs(d-1)<.01?delete a[i]:a[i]=d}Object.keys(a).length||delete e.localAdjustments[n]}}function $r(){const t=Z(l.location.systemId)?.neighbors.map(i=>Z(i.id)).filter(i=>!!i)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=ci();if(l.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};l.player.credits-=n;const a=ue();return t.forEach(i=>{const s={};(_?.commodities||[]).forEach(d=>{const u=ae(i.id,d.id);s[d.id]={buy:u.buy,sell:u.sell}});const o={turn:l.time.turn,prices:s};a.priceIntel[i.id]=o}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function ri(){return ue().priceIntel}function ci(){const t=Z(l.location.systemId)?.neighbors.map(d=>Z(d.id)).filter(d=>!!d)||[],n=80,a=t.map(d=>d.faction?mo(d.faction):null).filter(d=>typeof d=="number"),i=a.length?a.reduce((d,u)=>d+u,0)/a.length:0,s=Un(1-i/200,.5,1.4),o=Math.round(n*s);return Un(o,40,140)}function Un(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function li(e,t,n){if(n<=0)return!1;const a=ae(e,t).buy;if(a<=0)return!1;const i=a*n;if(l.player.credits<i)return!1;const s=l.ship.cargoCapacity;return s<=0?!1:ur()+n<=s}function di(e,t,n){return n<=0?!1:ct(t)>=n}function ui(e,t,n){if(!li(e,t,n))return!1;const a=ae(e,t).buy,i=a*n;l.player.credits-=i;const s=ft();s[t]=(s[t]||0)+n,ai(e,t,n,a,"buy");const o=oe(t);return l.notifications.push(`Bought ${n} ${o?.name||t} @ ${a} each for ${i} cr.`),!0}function mn(e,t,n){if(!di(e,t,n))return!1;const a=ae(e,t).sell,i=a*n,s=ft();s[t]=Math.max(0,(s[t]||0)-n),l.player.credits+=i,Pe(i),zs(t,n,i),ai(e,t,n,a,"sell"),Vo(t,n,e);const o=oe(t);if(o){const d=Z(e),u=Math.max(0,d?.marketProfile?.taxRate??0);u>0&&i>0&&Ot("taxEvasion",Math.max(1,Math.round(i*u*.01))),o.legalStatus&&o.legalStatus!=="legal"&&Ot("smuggling",Math.max(1,Math.round(i*.003)))}return l.notifications.push(`Sold ${n} ${o?.name||t} @ ${a} each for ${i} cr.`),!0}function pi(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[i,s])=>{if(!s)return a;const o=ae(t,i).sell;return a+o*s},0)}const zn={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function mi(e,t){if(!l||l.gameOver.active)return;const n=js(),a=Hs(n),i={score:a,reason:e,message:t??zn[e]??zn.other,location:l.location.systemId,stats:n};l.combat=null,l.miningSession=null,l.gameOver={active:!0,reason:e,message:i.message,summary:i};const s={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:i.message};Us(s),C.go("gameover")}function hi(e=!1){const t=Ia();Qt(t),Pa(),C.go(e?"main":"ship_select")}const hn="space-events-cache";let We=[];function Sr(e){const t=Ar();We=Pr(e,t),fi(We)}function fn(e){return We.find(t=>t.id===e)}function _r(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=Y(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,ne().anomalyChance??1),i=Math.min(1,Math.max(0,(H.eventFrequency??50)/100*a));if(Math.random()>i)return;const s=We.map(u=>({ev:u,weight:Nr(u,e)})).filter(u=>u.weight>0);if(!s.length)return;const o=s.reduce((u,p)=>u+p.weight,0);let d=Math.random()*o;for(const u of s)if(d-=u.weight,d<=0)return u.ev;return s[0].ev}function Cr(e){const t=e.outcomes;if(!t)return{};const n={},a=ne(),i=Math.max(.1,Math.min(5,H.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),s=o=>{l.player.credits+=o,Pe(o),l.player.credits<0&&(l.player.credits=0)};if(t.giveCredits){const o=t.giveCredits.min??0,d=t.giveCredits.max??o,u=Oe(o,d),p=Math.round(u*i);s(p),l.notifications.push(`Received ${p} credits.`)}if(typeof t.creditsDelta=="number"){const o=Math.round(t.creditsDelta*i);s(o)}if(typeof t.fuelDelta=="number"){const o=l.ship.maxFuel,d=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*i)):t.fuelDelta;l.ship.fuel=Math.max(0,Math.min(o,l.ship.fuel+d))}if(typeof t.turnDelta=="number"){const o=Aa(t.turnDelta);l.time.turn+=o,Uo(),ni(o)}if(t.cargoGain&&Gn(Dr(t.cargoGain,i,1),1),t.cargoLoss&&Gn(t.cargoLoss,-1),t.giveCommodity){const o=Oe(t.giveCommodity.min,t.giveCommodity.max),d=Math.max(0,Math.round(o*i));qt(t.giveCommodity.id,d),d>0&&l.notifications.push(`Collected ${d} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(ge().weapons.push(t.giveWeapon),l.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const o=t.damageShip.min??0,d=t.damageShip.max??o,u=Oe(o,d);if(l.ship.hp=Math.max(0,l.ship.hp-u),l.notifications.push(`Ship took ${u} damage.`),l.ship.hp<=0)return mi("ship_destroyed","Ship destroyed by event."),n}if(t.applyStatus&&l.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&rn(t.spawnMissionId).success&&l.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&l.notifications.push(`Event flag: ${t.flag}`),t.market){const o=t.market,d=Math.max(0,o.multiplier),u=Math.max(1,Math.floor(o.duration??2));rt(o.commodityId,d,u);const p=l.location?.systemId,m=o.commodityId&&_?.commodities?_.commodities.find(b=>b.id===o.commodityId):void 0,h=`${m?.name||"Local goods"} ${d>=1?"surge":"slip"}`;p&&l.marketState&&l.marketState.activeEvents.push({systemId:p,commodityId:o.commodityId??null,multiplier:d,expiresAtDay:l.time.day+u,expiresAtTurn:l.time.turn+u*2,label:h}),l.notifications.push(`Market shift in ${p??"this system"}: ${m?.name||"local goods"} x${d.toFixed(2)} for ${u} turns.`)}return t.modifyReputation&&Ha({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function Tr(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,H.eventRewardMultiplier??1))*Math.max(.1,ne().eventRewardMultiplier??1);if(n.mining){const i=Oe(n.mining.quantity.min,n.mining.quantity.max),s=Math.max(0,Math.round(i*a));qt(n.mining.commodityId,s),l.notifications.push(`Mining yield: ${s} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const i=Oe(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),s=l.ship.maxFuel;l.ship.fuel=Math.max(0,Math.min(s,l.ship.fuel-i)),l.notifications.push(`Anomaly drained ${i} fuel.`)}if(n.exploration?.lootTable?.length){const i=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];qt(i,1),l.notifications.push(`Recovered loot: ${i}.`)}return n.market?.temporaryPriceBoost&&(l.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),rt(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function Er(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(i=>i.expiresAtDay===void 0||t<i.expiresAtDay));const n=Math.min(1,Math.max(0,(H.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(H.marketCrashChance??5)/100));if(e.location?.systemId){const i=_?.commodities?.[Math.floor(Math.random()*(_?.commodities.length||1))];if(i){const s=e.location.systemId,o=2+Math.ceil(Math.random()*2);if(Math.random()<n){const d=1.1+Math.random()*.35;rt(i.id,d,o),e.marketState.activeEvents.push({systemId:s,commodityId:i.id,multiplier:Math.max(0,d),expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${i.name} surge`}),e.notifications.push(`Market surge in ${s}: ${i.name} prices x${d.toFixed(2)} for ${o} turns.`)}else if(Math.random()<a){const d=Math.max(.5,.85-Math.random()*.25);rt(i.id,d,o),e.marketState.activeEvents.push({systemId:s,commodityId:i.id,multiplier:d,expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${i.name} slip`}),e.notifications.push(`Market slip in ${s}: ${i.name} prices x${d.toFixed(2)} for ${o} turns.`)}}}}function Ir(){fi(We)}function Rr(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(hn)}function Pr(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function Ar(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(hn);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function fi(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(hn,JSON.stringify(e))}function Gn(e,t){for(const[n,a]of Object.entries(e)){const i=l.ship.cargo[n]??0,s=Math.max(0,i+a*t);l.ship.cargo[n]=s}}function Dr(e,t,n=1){const a={};for(const[i,s]of Object.entries(e)){if(s<=0){a[i]=s;continue}const o=Math.max(n,Math.round(s*t));a[i]=o}return a}function qt(e,t){const n=l.ship.cargo[e]??0,a=Object.values(l.ship.cargo).reduce((o,d)=>o+d,0),i=Math.max(0,l.ship.cargoCapacity-a),s=Math.max(0,Math.min(t,i));l.ship.cargo[e]=n+s,s<t&&l.notifications.push(`Cargo full: stored ${s}/${t} ${e}.`)}function Oe(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,i=Math.ceil(n),s=Math.floor(Math.max(i,a));return s<=i?i:Math.floor(Math.random()*(s-i+1))+i}function Br(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function Wn(e,t){return e.has(t)}function Nr(e,t){let n=e.weight??0;const a=Br(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(o=>a.has(o)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const s=Math.max(.1,H.eventDangerMultiplier??1);n*=s}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),Wn(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),Wn(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const i=ke().filter(s=>s.requirements?.travel?.systemId===t.to?.id);return i.length&&e.id==="smuggler_contact"&&(n+=.2*i.length),Math.max(0,n)}let Ut=[];function Lr(e){Ut=e}function Fr(e,t=[]){const n=Ut.find(s=>s.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Ut.find(s=>(s.enemyTags||[]).some(o=>a.has(o)))??null}function zt(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function jr(e){if(!e.length)return null;const t=e.reduce((a,i)=>a+(i.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function Hr(e,t){const n=Y(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const i=e.min??0,s=e.max??i,o=zt(i,s),d=Math.max(0,Math.round(o*a));l.player.credits+=d,t.creditsEarned+=d,Pe(d);break}case"commodity":{const i=zt(e.min??1,e.max??e.min??1),s=Math.max(0,Math.round(i*a)),o=Or(e.id||"unknown",s);o>0&&t.commodities.push({id:e.id||"unknown",qty:o});break}case"weapon":{e.id&&(ge().weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(l.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&rn(e.id).success&&t.missionsGranted.push(e.id);break}}}function Or(e,t){const n=l.ship.cargo[e]??0,a=Object.values(l.ship.cargo).reduce((o,d)=>o+d,0),i=Math.max(0,l.ship.cargoCapacity-a),s=Math.max(0,Math.min(t,i));return l.ship.cargo[e]=n+s,s}function qr(e,t,n={},a=[]){const i=Y(),s=Math.max(0,i.creditsRewardMultiplier??1)*Math.max(0,i.globalIncomeMultiplier??1),o=Math.max(0,Math.min(1,(i.lootDropChance??100)/100)),u=a.includes("pirate")?3:1,p=s*u,m=Math.max(0,Math.min(1,o*u));if(Math.random()>m)return null;const h=Fr(e,a);if(!h)return null;const b=n.quickKill?1.5:1,g=n.lowDamageTaken?1.25:1,$={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},T=(v,f)=>{if(!v?.length||Math.random()>f)return;const M=jr(v);M&&Hr(M,$)};T(h.common,m),T(Vn(h.uncommon,g),.35*m);const I=Math.max(0,Math.min(1,(i.rareLootChance??12)/100));if(T(Vn(h.rare,b),I*m),h.guaranteed?.credits){const{min:v,max:f}=h.guaranteed.credits,M=zt(v,f),k=Math.max(0,Math.round(M*p));l.player.credits+=k,$.creditsEarned+=k,Pe(k)}return $}function Vn(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}function gn(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,i=t.cargoCapacity||0,s=Gr(t.weapons),o=Wr(t.modules),d=e.player?.credits??0,u=Math.log10(d+1)*5,p=n+a+s+o+i/2+u;return Math.max(1,Math.round(p))}function yn(e){const t=e/40;return t<0?0:t>1?1:t}const gi=30;function Ur(e){e.difficulty&&(e.difficulty.day=e.time.day,e.difficulty.playerPowerScore=Math.max(1,Math.round(gn(e)/gi)))}function Re(e,t){if(!e.difficulty)return;const n=e.difficulty.tension+t;e.difficulty.tension=Math.max(0,Math.min(100,n))}function vn(e){if(!e.difficulty)return 1;const t=Math.max(1,Math.round(gn(e)/gi));e.difficulty.playerPowerScore=t;const n=e.difficulty.day*.03,a=t*.02,i=e.difficulty.tension*.01,s=1+n+a+i;return Math.max(1,s)}function zr(e){if(!e.difficulty)return;const t=Math.max(.5,yn(e.time.day))*.05;Re(e,-Math.min(e.difficulty.tension,t))}function Gr(e){return e.reduce((t,n)=>{if(!n)return t;const a=K(n);if(!a)return t;const i=a.damage??0,s=a.accuracy??0,o=(a.critChance??0)*(a.critMultiplier??0);return t+i*1.5+s*.2+o},0)}function Wr(e){return!e||!e.length?0:e.length*5}function Vr(e){return _?_.systemsById[e]??null:null}function gt(e,t){const n=Vr(e);return n?n.tags.includes(t):!1}const Yr=0,Xr=100;function yi(e){const t=Math.max(Yr,Math.min(Xr,(l.player.wanted??0)+e));return l.player.wanted=t,t}function Jr(e,t,n){return Math.max(t,Math.min(n,e))}function Kr(e){const{systemId:t,state:n,sessionFactor:a}=e,i=_?.systems.find(k=>k.id===t),s=i?.security??"medium",o=Y(),d=ne();let u;switch(s){case"high":u=.02;break;case"low":u=.12;break;default:u=.06;break}i?.tags.includes("mining_belt")&&(u+=.02),i?.marketProfile?.blackMarket&&(u+=.03);const p=pi(n,t),m=Rp(n.ship.templateId)?.cost??0,h=p+m,b=Math.min(.15,h/5e3)*Math.max(0,o.pirateCargoValueSensitivity??1),g=Zr(n,t),$=a*.03,T=Math.max(0,Math.min(1,(o.pirateEncounterRateBase??0)/100)),I=Math.max(0,Math.min(1,(H.pirateEncounterRate??0)/100)),v=Math.max(0,(o.encounterChancePerJump??100)/100),f=Math.max(0,o.globalDangerMultiplier??1)*Math.max(0,d.pirateDetectionMultiplier??1);let M=(u+b+$+g+T+I)*f*v;return Qr(M,n,t)}function Zr(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let i=0,s=0;for(const[u,p]of a){if(!p)continue;const m=ae(t,u),h=oe(u)?.basePrice??m.sell;if(h<=0)continue;const b=(m.sell-h)/h;i+=b*p,s+=p}if(s<=0)return 0;const o=i/s;return Jr(o*.2,0,.15)}function Qr(e,t,n){const a=yn(t.time.day),i=.4,o=i+(.75-i)*a;let d=e;return gt(n,"core")?(d>.25&&(d=.25),d<.01&&(d=.01),d):(d>o&&(d=o),d<.01&&(d=.01),d)}function ec(e){return Math.min(10,Math.floor(e/200))}function bn(e){const t=e?.player?.xp??0,n=ec(t);return{level:n,fuel:1+n*.015,repair:1+n*.02,shield:1+n*.025}}const tc=[{id:"surface",label:"Surface",level:0,depthRange:[1,2],valueMultiplier:1,dropWeights:{common:.96,rare:.04},lootTables:{common:"depth_surface_common",rare:"depth_surface_rare"},cluster:{chance:0,minSize:0,maxSize:0,maxClusters:0},comboGain:5},{id:"mid",label:"Mid",level:1,depthRange:[3,3],valueMultiplier:1.5,dropWeights:{common:.9,rare:.08,ultra:.02},lootTables:{common:"depth_mid_common",rare:"depth_mid_rare"},cluster:{chance:.25,minSize:2,maxSize:2,maxClusters:2},comboGain:7},{id:"deep",label:"Deep",level:2,depthRange:[4,4],valueMultiplier:2,dropWeights:{common:.75,rare:.2,ultra:.05},lootTables:{common:"depth_deep_common",rare:"depth_deep_rare",ultra:"depth_deep_ultra"},cluster:{chance:.55,minSize:2,maxSize:3,maxClusters:3},comboGain:9},{id:"core",label:"Core",level:3,depthRange:[5,5],valueMultiplier:3,dropWeights:{common:.7,rare:.25,ultra:.05},lootTables:{common:"depth_core_common",rare:"depth_core_rare",ultra:"depth_core_ultra"},cluster:{chance:.7,minSize:3,maxSize:5,maxClusters:3},comboGain:11}],nc={threshold:100,duration:3,revealTiles:3,guaranteedRarityCount:2,threatReduction:.15,bandBonus:6,skipBandBonus:8},ac={maxAttemptsPerBand:3},ic={hazardBaseChance:.05,hazardPerChain:.02,hazardDamageRange:[1,3],hazardDamageMultiplierPerLevel:.1,rewardMultipliers:[{maxLevel:2,multiplier:1},{maxLevel:4,multiplier:1.2},{maxLevel:7,multiplier:1.5},{maxLevel:10,multiplier:2},{maxLevel:1e3,multiplier:2.5}],milestones:[3,5,8,10],cashOutBase:25,cashOutPerLevel:15},vi={bands:tc,combo:nc,clusterSettings:ac,riskChain:ic},sc=[{depthRange:[1,3],multiplier:.25},{depthRange:[4,6],multiplier:.5},{depthRange:[7,10],multiplier:1},{depthRange:[11,20],multiplier:1.4}],oc={min:.3,max:.5},rc=[{depthRange:[1,3],chance:.25},{depthRange:[4,6],chance:.15},{depthRange:[7,10],chance:.08},{depthRange:[11,20],chance:.03}],cc=7,lc={basic:5,mid:8,advanced:12},Mn={depthValueMultipliers:sc,yieldReduction:oc,emptyChance:rc,clusterGateDepth:cc,drillDepthCaps:lc},dc="pirate_cutter",uc=.5,Gt=Qa,Xe=9,Je=9,Ke=5,Yn={1:{yieldMultiplier:.75,noise:.42,stabilityLossScale:.8,drillDamageChance:.01,drillDamageRange:[1,2]},2:{yieldMultiplier:.9,noise:.3,stabilityLossScale:.9,drillDamageChance:.02,drillDamageRange:[1,3]},3:{yieldMultiplier:1,noise:.2,stabilityLossScale:1,drillDamageChance:.04,drillDamageRange:[1,4]},4:{yieldMultiplier:1.18,noise:.14,stabilityLossScale:1.15,drillDamageChance:.08,drillDamageRange:[2,5]},5:{yieldMultiplier:1.32,noise:.22,stabilityLossScale:1.35,drillDamageChance:.12,drillDamageRange:[3,6]}},yt=vi,Ve=yt.bands;new Map(Ve.map(e=>[e.id,e]));const bi=new Map(Ve.map(e=>[e.id,e.level])),ve=yt.combo,pc=yt.clusterSettings,he=yt.riskChain,Xn={common:1,rare:.75,ultra:.6},Mi="basic";function vt(e){return e?we.drillDepthCaps[e]??we.drillDepthCaps.basic:we.drillDepthCaps.basic}function wi(e,t){if(!t)return e;const n=vt(t.drillTier??Mi);return Math.min(e,n)}const we=Mn,mc=4e-5,hc=.12,fc=18e-5,gc=.35,yc=45e-5,vc=.28;function bc(e){const t=Math.max(0,e);return Math.min(hc,t*mc)}function Mc(e){return 1+Math.min(gc,Math.max(0,e)*fc)}function xi(e){return 1+Math.min(vc,Math.max(0,e)*yc)}function bt(e){return Ve.find(n=>e>=n.depthRange[0]&&e<=n.depthRange[1])??Ve[0]}function wc(e){for(const t of we.depthValueMultipliers)if(e>=t.depthRange[0]&&e<=t.depthRange[1])return t.multiplier;return 1}function xc(){const e=we.yieldReduction.min,t=we.yieldReduction.max,n=Math.random()*(t-e)+e;return Math.max(e,Math.min(t,n))}function kc(e){for(const t of we.emptyChance)if(e>=t.depthRange[0]&&e<=t.depthRange[1])return t.chance;return 0}function ki(e,t){if(t&&e.lootTables[t])return t;const n=["common","rare","ultra"].map(s=>[s,e.dropWeights[s]??0]),a=n.reduce((s,[,o])=>s+o,0);if(a<=0)return"common";let i=Math.random()*a;for(const[s,o]of n)if(i-=o,i<=0)return s;return"common"}function $i(e,t){const n=e.lootTables[t]??e.lootTables.common,a=Lc(n);return Fc(a)}function Si(e,t,n){if(n<=0)return;const a=e.pendingOre||{};a[t]=(a[t]??0)+n,e.pendingOre=a}function _i(e,t){const n=e.pendingOre||{},a={};e.pendingOre={};for(const[i,s]of Object.entries(n)){const o=Math.ceil(Math.max(0,s));if(o<=0)continue;const d=Ai(t,i,o);d>0&&Pi(e,i,d),a[i]=d}return a}function Ci(e,t,n,a){const i=n-(e.veinCol??0),s=t-(e.veinRow??0),o=a-(e.veinDepth??3),u=Math.sqrt(i*i+s*s)*2.6+Math.abs(o)*1.5,p=Math.max(.2,1-(e.drillsUsed??0)*.04),m=(Math.random()*2-1)*p,h=10-u;let b=re(Math.round(h+m),0,10);e.lowSignalMode&&(b=re(b,0,5));const g=Bc(e.veinRow??0,e.veinCol??0,t,n),$=Nc(a,e.veinDepth??3),T=a<=3?.6:1;return{signal:re(Math.round(b*T),0,10),directionClass:g,depthHint:$}}function $c(e){const t=e.gridRows??Xe,n=e.gridCols??Je,a=[];for(const i of Ve){const s=i.cluster.maxClusters;let o=0;for(let d=0;d<pc.maxAttemptsPerBand&&o<s;d++){if(i.depthRange[0]<we.clusterGateDepth||Math.random()>i.cluster.chance)continue;const u=Sc(t,n,i.cluster.minSize,i.cluster.maxSize,a);u.length>=i.cluster.minSize&&(a.push({bandId:i.id,cells:u}),o+=1)}}return a}function Sc(e,t,n,a,i){const s=new Set(i.flatMap(b=>b.cells.map(g=>`${g.row}:${g.col}`))),o=Math.max(n,Math.min(a,kn(n,a))),d=[],u=Math.floor(Math.random()*e),p=Math.floor(Math.random()*t);d.push({row:u,col:p}),s.add(`${u}:${p}`);const m=[{dr:-1,dc:0},{dr:1,dc:0},{dr:0,dc:-1},{dr:0,dc:1}];let h=0;for(;d.length<o&&h<30;){const b=d[Math.floor(Math.random()*d.length)],g=m[Math.floor(Math.random()*m.length)],$={row:b.row+g.dr,col:b.col+g.dc};if($.row<0||$.row>=e||$.col<0||$.col>=t||s.has(`${$.row}:${$.col}`)){h+=1;continue}s.add(`${$.row}:${$.col}`),d.push($)}return d}function _c(e,t,n){return e.clusters?.find(a=>a.cells.some(i=>i.row===t&&i.col===n))}function $e(e,t){e.comboFlash=t,e.comboFlashTimer=40}function Cc(e){e.comboFlashTimer&&e.comboFlashTimer>0&&(e.comboFlashTimer-=1,e.comboFlashTimer<=0&&(e.comboFlash=void 0))}function wn(e,t){const n=e.lastComboBandId?bi.get(e.lastComboBandId)??t.level:t.level;let a=t.comboGain;if(t.level>n){const d=t.level-n;a+=ve.bandBonus*d,d>1&&(a+=ve.skipBandBonus*(d-1))}const i=e.comboGauge??0,s=Math.min(ve.threshold,i+a);e.comboGauge=s,e.lastComboBandId=t.id;let o=!1;if(s>=ve.threshold){o=!0,e.comboGauge=0,e.comboBonusTurns=ve.duration,e.comboGuarantyRemaining=ve.guaranteedRarityCount,e.comboThreatReduction=ve.threatReduction;const d=Tc(e,ve.revealTiles);e.comboRevealedCells=d,Ti(e,d)}return{gain:s-i,triggered:o}}function Tc(e,t){const n=e.grid??[],a=[];for(let s=0;s<n.length;s++)for(let o=0;o<(n[s]??[]).length;o++){const d=n[s][o];d&&!d.drilled&&d.hintSignal==null&&a.push({row:s,col:o})}const i=[];for(let s=0;s<t&&a.length;s++){const o=Math.floor(Math.random()*a.length);i.push(a[o]),a.splice(o,1)}return i}function Ti(e,t){const n=Math.min(Ke,vt(e.drillTier)),a=re(Math.round(e.depth??3),1,n);e.depth=a;const i=bt(a);Ic(e,i.level,{row:r,col:c}),wn(e,i);for(const s of t){const o=e.grid?.[s.row];if(!o)continue;const d=o[s.col];if(!d)continue;const u=Ci(e,s.row,s.col,a);d.hintSignal=u.signal}}function xn(e){for(const t of he.rewardMultipliers)if(e<=t.maxLevel)return t.multiplier;return 1}function Ei(e,t=0){const n=bc(t);return Math.min(1,he.hazardBaseChance+e*he.hazardPerChain+n)}function De(e){e.riskChainLevel=0,e.lastRiskBandLevel=null,e.nextRiskGuaranteedRarity=null,e.riskChainMilestoneLevel=0}function Jn(e,t,n){if(!t||!e.grid)return;const a=[{dr:-1,dc:0},{dr:1,dc:0},{dr:0,dc:-1},{dr:0,dc:1}],i=[];for(const s of a){const o=t.row+s.dr,d=t.col+s.dc;if(!(o<0||o>=(e.grid?.length??0))&&!(d<0||d>=(e.grid?.[o]?.length??0))&&(i.push({row:o,col:d}),i.length>=n))break}i.length&&Ti(e,i)}function Ec(e,t,n){const a=he.milestones??[];let i=e.riskChainMilestoneLevel??0;for(const s of a)t>=s&&i<s&&(i=s,e.riskChainMilestoneLevel=s,s===3?($e(e,"Steady Dig! Rewards climbing."),Jn(e,n,1)):s===5?($e(e,"Deep Run! Hidden tiles revealed."),Jn(e,n,2),e.nextRiskGuaranteedRarity="rare"):s===8?($e(e,"Loaded Veins! Next dig at least uncommon."),e.nextRiskGuaranteedRarity="rare"):s>=10&&($e(e,"Jackpot Depth! Artifacts imminent."),e.nextRiskGuaranteedRarity="rare"))}function Ii(e){if(e.comboGuarantyRemaining&&e.comboGuarantyRemaining>0)return e.comboGuarantyRemaining-=1,"rare";const t=e.nextRiskGuaranteedRarity;if(t)return e.nextRiskGuaranteedRarity=null,t}function Ic(e,t,n){const a=e.lastRiskBandLevel??-1;t<a&&De(e),e.lastRiskBandLevel=t;const i=Math.max(1,(e.riskChainLevel??0)+1);return e.riskChainLevel=i,Ec(e,i,n),i}function Rc(e,t,n,a,i=1){const o=(1+n*he.hazardDamageMultiplierPerLevel)*Mc(a)*Math.max(0,i),d=Bi(t,1,[he.hazardDamageRange[0],he.hazardDamageRange[1]],o);return $e(e,`Risk hazard! -${d} hull.`),De(e),d}function Ri(e){e.comboBonusTurns&&e.comboBonusTurns>0&&(e.comboBonusTurns-=1,e.comboBonusTurns<=0&&(e.comboThreatReduction=0))}function Pi(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function Pc(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,i]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-i);e.ship.cargo=n,t.accumulatedOre={}}function Ai(e,t,n){const a=e.ship.cargo||{},i=Object.values(a).reduce((d,u)=>d+u,0),s=Math.max(0,e.ship.cargoCapacity-i),o=Math.max(0,Math.min(n,s));return o>0&&(a[t]=(a[t]??0)+o,e.ship.cargo=a),e.notifications||(e.notifications=[]),o<n&&e.notifications.push(`Cargo constrained: stored ${o}/${n} ${t}.`),o}function kn(e,t){const n=Math.ceil(e),a=Math.floor(t);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function re(e,t,n){return Math.max(t,Math.min(n,e))}function Ac(e){const t=Math.max(.05,H.miningEfficiency??.35),n=Math.min(.2,(e.explorationScore??0)/40),a=t+n;return Math.min(.6,a)}function Di(){const e=[];for(let t=0;t<Xe;t++){const n=[];for(let a=0;a<Je;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function Dc(){const e=Math.floor(Math.random()*(Xe-4))+2,t=Math.floor(Math.random()*(Je-4))+2,n=2+Math.floor(Math.random()*(Ke-2));return{row:e,col:t,depth:n}}function Bc(e,t,n,a){const i=t-a,s=e-n;if(Math.sqrt(i*i+s*s)<.5)return null;const d=Math.atan2(s,i)*(180/Math.PI),u=d<0?d+360:d;return u>=337.5||u<22.5?"dir-e":u<67.5?"dir-se":u<112.5?"dir-s":u<157.5?"dir-sw":u<202.5?"dir-w":u<247.5?"dir-nw":u<292.5?"dir-n":"dir-ne"}function Nc(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function Bi(e,t,n,a=1){if(t<=0||Math.random()>t)return 0;const i=kn(n[0],n[1]),s=Math.max(1,Math.round(i*a));e.ship.hp=Math.max(0,e.ship.hp-s),e.notifications||(e.notifications=[]),e.notifications.push(`Drill backlash damaged hull for ${s}.`);const o=bn(e),d=Math.round(s*(o.shield-1));if(d>0){const u=Math.min(d,e.ship.shields);e.ship.shields=Math.max(0,e.ship.shields-u),u>0&&e.notifications.push(`Shield wear due to upkeep drains ${u} shield.`)}return s}function Ni(e,t){const n=t?Gt.belts.find(i=>i.id===t):null;if(n)return n;const a=Gt.belts.find(i=>i.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function Lc(e){return e?Gt.tables.find(t=>t.id===e)??null:null}function Fc(e){if(!e||!e.entries.length)return null;const t=e.entries.reduce((o,d)=>o+(d.weight||0),0);if(t<=0)return null;let n=Math.random()*t,a=null;for(const o of e.entries)if(n-=o.weight||0,n<=0){a=o;break}const i=a??e.entries[e.entries.length-1],s=kn(i.min,i.max);return{id:i.id,amount:s}}function Be(e,t,n,a,i){if(e.lastMiningSystemId===t)return e.notifications.push("You need to travel to another system before mining again."),!1;const s=Ni(t,n),o=Li(e,s.id);if(i?.force&&(o.depletedUntilDay=void 0),o.depletedUntilDay!==void 0&&e.time.day<o.depletedUntilDay)return e.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`),!1;const d=0,u=Di(),{row:p,col:m,depth:h}=Dc();return e.miningSession={active:!0,systemId:t,beltId:s.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:d,stability:s.stability.start,maxStability:s.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:u,gridRows:Xe,gridCols:Je,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:p,veinCol:m,veinDepth:h,lowSignalMode:!!i?.easySignals,accumulatedOre:{},beltName:s.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[],comboGauge:0,comboBonusTurns:0,comboGuarantyRemaining:0,comboThreatReduction:0,lastComboBandId:null,comboRevealedCells:[],riskChainLevel:0,lastRiskBandLevel:null,nextRiskGuaranteedRarity:null,riskChainMilestoneLevel:0,clusters:[],drillTier:Mi},e.miningSession.clusters=$c(e.miningSession),De(e.miningSession),e.lastMiningSystemId=t,!0}function jc(e,t){const n=e.miningSession;if(!n)return;let a=re(Math.round(t),1,Math.min(Ke,vt(n.drillTier)));a=wi(a,n),n.depth=a}function Hc(e,t){const n=e.miningSession;n&&(n.drillTier=t,n.depth=wi(n.depth??1,n))}function Oc(e,t,n){for(let a=0;a<e.length;a++)for(let i=0;i<e[a].length;i++)e[a][i].selected=a===t&&i===n}function qc(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const i=Ni(a.systemId,a.beltId),s=re(Math.round(t),0,Xe-1),o=re(Math.round(n),0,Je-1),d=Math.min(Ke,vt(a.drillTier)),u=re(Math.round(a.depth??3),1,d);a.depth=u;const p=a.riskChainLevel??0;Cc(a),a.grid=a.grid??Di(),a.drillsUsed=(a.drillsUsed??0)+1;const m=Ci(a,s,o,u),h=a.grid[s][o],b=!h.drilled;h.drilled=!0,h.signal=m.signal,h.directionClass=m.directionClass,h.depthHint=m.depthHint.hint,h.depthClass=m.depthHint.className,h.hintSignal=null,Oc(a.grid,s,o),a.selectedRow=s,a.selectedCol=o,b?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+m.signal/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+m.signal/50);const g=bt(u);wn(a,g);const $=_c(a,s,o),T=!!($&&g.level>=(bi.get($.bandId)??-1));h.clusterHint=T;let v=Math.max(0,m.signal*.001);m.signal>0&&v<1&&(v=1),T&&(v+=m.signal*.25);const f=Ii(a),M=ki(g,f),k=$i(g,M),y=k?.id??a.resourceId??"aurite_ore",E=k?.amount??0,w=v+E;Si(a,y,w);const D=Math.max(0,e.player.xp??0),P=Math.max(0,H.miningThreatMultiplier??.7),A=3+u,q=a.comboThreatReduction??0,L=xi(D),j=Math.max(0,Math.round(A*P*L*Math.max(0,1-q)));a.threat=re((a.threat??0)+j,0,100),a.currentPirateChance=(a.threat??0)/100;const z=T?" vein":"";a.lastMessage=`Pulse at X${o+1}, Y${s+1}, Z${u} (${g.label}${z}): signal ${m.signal}. Threat +${j}%. Ore +${Math.round(w)} (queued) Risk x${p}.`,Ri(a);const U=Math.random()*100;let Q=!1;const X=a.threat*.9;if(U<=X){Q=!0,a.runComplete=!0,a.active=!1;const pe=Li(e,i.id);pe.depletedUntilDay=e.time.day+1,Ie(dc,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,e.lastMiningSystemId=null,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:m.signal,directionClass:m.directionClass,depthHint:m.depthHint.hint,fightTriggered:Q,threat:a.threat}}function Uc(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const i=re(Math.round(t.depth??3),1,Ke),s=bt(i),o=t.riskChainLevel??0,d=wn(t,s);d.triggered?$e(t,"Combo bonus ready!"):d.gain>0&&$e(t,`Combo +${d.gain}`);const u=Math.max(0,e.player.xp??0),p=a-(t.veinCol??0),m=n-(t.veinRow??0),h=i-(t.veinDepth??3),b=Math.sqrt(p*p+m*m+h*h),g=Math.random()*1.5-.75,$=re(Math.round(10-b*2+g),0,10),T=1+Math.max(0,i-2)*.12,v=Math.max(0,Math.round(($+T)*.2)),f=Math.min(.4,(t.explorationScore??0)/25),M=Ac(t),k=Math.min(1,M+f);let E=Math.max(1,Math.round(v*k*(1+.1)));const w=xc();E=Math.max(0,Math.ceil(E*w));const D=kc(i),P=Math.random()<D;P&&(E=0,t.lastMessage=`Drill at depth ${i} hit barren rock.`);const A=Yn[i]??Yn[3],q=Bi(e,A.drillDamageChance,A.drillDamageRange,1+s.level*.1);q>0&&(e.notifications=e.notifications||[],e.notifications.push(`Final drill backlash: -${q} hull.`));const L=Ii(t),j=ki(s,L),U=$i(s,j)?.id??t.resourceId??"aurite_ore";E=E>0?Math.max(1,Math.round(E*.7)):0,Si(t,U,E);const O=_i(t,e)[U]??0,V=Math.max(1,qn(t.systemId,U)),S=Math.max(.05,(H.miningPayoutMultiplier??.35)*uc);let B=Math.round(V*O*S*s.valueMultiplier);const R=wc(i);B=Math.round(B*R);const G=xn(o);B=Math.round(B*G);const ie=Xn[j]??1;B=Math.round(B*ie);const ye=Math.max(0,Math.round(O*s.valueMultiplier*G*.35));ye>0&&(fe(ye,"mining"),t.xpEarned=(t.xpEarned??0)+ye);let ce=null;if($>=6&&Math.random()<.1+f*.5){const St=Math.max(1,Math.round($/3)),tt=Ai(e,"stellite_fragment",St);if(tt>0){ce={id:"stellite_fragment",amount:tt};const xs=Math.max(1,qn(t.systemId,ce.id));B+=Math.round(xs*tt*S*Xn.rare),Pi(t,ce.id,tt)}}const et=ce??(j!=="common"?{id:U,amount:O}:null);t.totalValueMined+=B,t.lastYield={commodityId:U,amount:O,approxValue:B,rareFind:et};const kt=6+i*2,$t=Math.max(0,H.miningThreatMultiplier??.7),fs=t.comboThreatReduction??0,gs=xi(u),Ln=Math.max(0,Math.round(kt*$t*gs*Math.max(0,1-fs)));t.threat=re((t.threat??0)+Ln,0,100),t.currentPirateChance=(t.threat??0)/100;const ys=q>0?` Drill backlash: -${q} hull.`:"",vs=P?" Barren strike, no ore collected.":"";t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${i} (${s.label}): signal ${$}, efficiency ${(k*100).toFixed(0)}%, ore ${O} stored. Threat +${Ln}%.${ys}${vs} Risk x${o}`,De(t),Ri(t);const bs=me("extraction_t3_deep_delver")?.05:0,Ms=Math.max(0,Ei(o,u)-bs);if(Math.random()<Ms){const St=me("ship_hauler_hazard_steadiness")?.85:1;Rc(t,e,o,u,St)}const ws=!1;return t.runComplete=!0,t.active=!1,Js(O+(ce?.amount||0),!!ce),{signal:$,yieldAmount:O,commodityId:U,rareFind:ce,fightTriggered:ws,threat:t.threat}}function zc(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Li(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(i=>i.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function Gc(e,t){const n=e.miningSession;n&&(Pc(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,De(n),e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function Wc(e){const t=e.miningSession;if(!t||!t.active)return null;const n=t.riskChainLevel??0;if(n<3)return null;const a=_i(t,e),i=Object.values(a).reduce((m,h)=>m+h,0),s=Math.max(0,Math.round(he.cashOutBase+n*he.cashOutPerLevel)),o=bt(t.depth??3),d=xn(n),u=Math.max(0,Math.round(i*o.valueMultiplier*d*.35));u>0&&(fe(u,"mining"),t.xpEarned=(t.xpEarned??0)+u),Pe(s),e.player.credits=Math.max(0,e.player.credits+s),De(t),t.runComplete=!0,t.active=!1;const p=`Cash out (Risk ${n}): rounded ${i} ore + ${s} cr bonus.`;return t.lastMessage=p,p}const Kn={positioning:2,escalation:{max:5}},le={thresholds:{minor:.25,major:.15,critical:.1},misfireChanceAtMajor:.15,engineFlickerChanceAtCritical:.2,criticalDamagePenalty:.7},Vc={anchor:{heavy_attack:5,shield_boost:4,flank_shot:2,debuff:1,retreat:0,charge_weapon:2},support:{heavy_attack:1,shield_boost:5,flank_shot:1,debuff:4,retreat:1,charge_weapon:3},flanker:{heavy_attack:3,shield_boost:1,flank_shot:5,debuff:1,retreat:2,charge_weapon:1}},Yc={positioning:{heavy_attack:.5,shield_boost:1.2,flank_shot:.8,charge_weapon:1.1,debuff:1},escalation:{heavy_attack:1.1,flank_shot:1.2,retreat:.5,shield_boost:.9},finisher:{heavy_attack:1,flank_shot:1,retreat:1.5,charge_weapon:1.2,debuff:1.1}},Xc=[{intentType:"heavy_attack",counterActionId:"focus_fire",effect:"weaken"},{intentType:"charge_weapon",counterActionId:"emp_blast",effect:"cancel"},{intentType:"shield_boost",counterActionId:"jam_enemy",effect:"delay"},{intentType:"flank_shot",counterActionId:"boost_engines",effect:"delay"}],Jc={positioning:"Captured in slow openings and feints.",escalation:"Weapons flare as the fight turns savage.",finisher:"This may be the last salvo before the hull tears open."};function Zn(e){if(e.wasDodged)return`${e.attackerName} lashes out but ${e.defenderName} slips away (${e.phase} phase).`;const t=e.weaponType?` with ${e.weaponType}`:"",n=e.wasCritical?" critical":"",a=e.damage>0?` for ${e.damage} damage`:" but fails to pierce the defenses",i=Jc[e.phase],s=e.defenderLowHp?` ${e.defenderName} is hanging on by threads.`:"";return`${e.attackerName}${t}${n} hits ${e.defenderName}${a}. ${i}${s}`}function Kc(e){switch(e){case"positioning":return"The skirmish is tentative—ships probe each other's defenses.";case"escalation":return"Weapons systems roar to life; the battle surges toward its heart.";case"finisher":return"Hull sieves and alarms scream—this fight is grinding toward its end."}}function Zc(e,t){const n=e.targetId?`targeting ${e.targetId}`:"";return`${t} telegraphs a ${e.type.replace("_"," ")} ${n}. ${e.description}`}function Tt(e,t,n){if(!t)return`You attempt ${e}, but no obvious grab is available.`;switch(e){case"focus_fire":return`You unleash focus fire as ${n} winds up a ${t.type}. The attack staggers before landing.`;case"emp_blast":return`You slam an EMP into ${n}—its ${t.type} fizzles as systems short.`;case"jam_enemy":return`${n}'s ${t.type} stalls under your jamming field.`;default:return`You contest ${n}'s intent; ${t.type} was disrupted.`}}function lt(e,t,n){return`${e} shudders (${t} instability): ${n}`}function Qc(e){if(_?.encounters)return _.encounters.find(t=>t.id===e)}function el(){const t=Z(l.location.systemId)?.baseDanger??1,n=Math.min(4,Math.floor((l.time.day??0)/10));return Math.min(10,Math.max(1,t*2+n))}function tl(e){const t=Math.max(0,Math.min(1,(e-1)/9)),n=1+Math.floor(t*4),a=Math.random()<.3?Math.random()<.5?-1:1:0;return Vt(n+a,1,5)}function Fi(e){if(!_)throw new Error("Content has not been loaded.");const t=_.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function Qn(e,t){return Math.floor(Math.random()*(t-e+1))+e}function nl(e){const t=[],n={};for(let a=0;a<e;a+=1){const i=a%3,s=n[i]??0,o=s===0?"front":"back";n[i]=s+1,t.push({lane:i,row:o})}return t}const al=1.25,il=.7,ea={shieldMod:1,armorMod:1,tags:[]},sl=[{id:"adaptive_strike",label:"Adaptive Strike",description:"Sweep your batteries evenly across the selected target.",cooldown:1,effect:e=>It(e,"normal")},{id:"shield_focus",label:"Shield Focus",description:"Target shields first before letting hulls take the brunt.",cooldown:2,effect:e=>{const t=od(e);return It(e,"normal",t)}},{id:"hull_focus",label:"Hull Focus",description:"Aim for weakened hulls with precision targeting.",cooldown:2,effect:e=>{const t=rd(e)??de(e);return It(e,"called_shot",t)}},{id:"overcharge_shields",label:"Overcharge Shields",description:"Divert power to shields for 2 turns, reducing incoming damage while lowering maneuver.",cooldown:2,effect:e=>(e.playerStatus.shieldBoost=Math.max(e.playerStatus.shieldBoost,15),e.playerStatus.shieldTurns=2,e.playerStatus.maneuverBonus=Math.max(-10,e.playerStatus.maneuverBonus-4),x("You gratefully inhale energy into the shields, locking down the hull."),!0)},{id:"alpha_strike",label:"Alpha Strike",description:"Unload a massive kinetic salvo for high damage at the cost of reduced maneuver.",cooldown:3,effect:(e,t)=>{if(!t)return x("Alpha Strike needs a live target."),!1;const n=Math.max(8,Math.round((l.ship.weaponPower??10)*1.7)),a=xe(n,"kinetic",ea,t);return a>0&&Ce(a),x(Zn({attackerName:"You",defenderName:t.name,damage:a,weaponType:"Alpha Strike",phase:e.phase,defenderLowHp:t.hp/Math.max(1,t.maxHp)<=.35})),e.playerStatus.maneuverBonus=Math.max(-10,e.playerStatus.maneuverBonus-3),t.hp<=0&&(x(`${t.name} collapses under the Alpha Strike!`),Te(e,t.id)),!0}},{id:"boost_engines",label:"Boost Engines",description:"Boost maneuver rating for 2 turns, trading a turn of offensive pressure for agility.",cooldown:2,effect:e=>(e.playerStatus.maneuverBonus=(e.playerStatus.maneuverBonus||0)+12,e.playerStatus.maneuverTurns=2,x("Thrusters spool hotter, drifting across firing arcs."),!0)},{id:"emp_blast",label:"EMP Blast",description:"Jam enemy weapon systems for several turns; great against focused batteries.",cooldown:4,effect:(e,t)=>t?(e.enemyStatus.weaponJammedTurns=Math.min(3,e.enemyStatus.weaponJammedTurns+2),x(`EMP energy floods ${t.name}, rattling its systems.`),!0):(x("EMP Blast sputters without a target."),!1)},{id:"focus_fire",label:"Focus Fire",description:"Focus every weapon on one hull to burst through armor and force the foe to retaliate.",cooldown:3,effect:(e,t)=>{if(!t)return x("Focus Fire needs an engaged enemy."),!1;const n=Math.max(5,Math.round((l.ship.weaponPower??10)*.6)),a=xe(n,"energy",ea,t);return a>0&&Ce(a),t.intentDamageMultiplier=Math.min(1,(t.intentDamageMultiplier??1)*.6),x(Zn({attackerName:"You",defenderName:t.name,damage:a,weaponType:"Focus Fire",phase:e.phase,defenderLowHp:t.hp/Math.max(1,t.maxHp)<=.35})),t.hp<=0&&(x(`${t.name} shudders as focus fire ruptures its hull.`),Te(e,t.id)),!0}},{id:"jam_enemy",label:"Signal Jam",description:"Flood sensors to delay boosts and buff casts.",cooldown:3,effect:(e,t)=>t?(x(`Signal noise blankets ${t.name}, muddying its preparations.`),!0):(x("Signal Jam needs a foe to latch onto."),!1)}];function ol(e){return sl.find(t=>t.id===e)}function rl(e,t,n){const a=e.playerActionCooldowns.find(i=>i.actionId===t);if(a){a.remainingRounds=Math.max(a.remainingRounds,n);return}e.playerActionCooldowns.push({actionId:t,remainingRounds:n})}function cl(e,t,n){if(!t||!t.nextIntent)return;const a=Xc.find(s=>s.counterActionId===n);if(!a||a.intentType!==t.nextIntent.type)return;const i=t.nextIntent;switch(a.effect){case"cancel":t.nextIntent=void 0,x(Tt(n,i,t.name));break;case"weaken":t.intentDamageMultiplier=Math.min(1,(t.intentDamageMultiplier??1)*.5),x(Tt(n,i,t.name));break;case"delay":t.intentCharged=!0,x(Tt(n,i,t.name));break}}function ji(e,t,n,a=[]){const i=Math.max(1,Math.round(e.hull*t)),s=Math.max(0,Math.round(e.shields*t));return n.map((o,d)=>{const u=a[d],p=u?.battleRole??e.battleRole??"anchor",m=u?.focusHint;return{id:`${e.id}-${o.lane}-${o.row}-${d}-${Math.round(Math.random()*1e4)}`,templateId:e.id,name:e.name,hp:i,maxHp:i,shields:s,maxShields:s,weaponIds:e.weaponIds.slice(),weaponCooldowns:e.weaponIds.map(()=>0),position:o,alive:!0,side:"enemy",factionId:e.faction,factionLabel:_?.factions.find(h=>h.id===e.faction)?.name??void 0,statusEffects:[],tags:e.tags?[...e.tags]:[],canEscape:e.canEscape,battleRole:p,focusHint:m,intentDamageMultiplier:1,cooldowns:[]}})}function ll(e,t){return t<=1?e.name:`${e.name} Squadron`}function dl(e){const n=1-Sa(e).evasionBonus;return Math.max(0,n)}function ul(e,t,n){const i=Sa(n).damageTakenMultipliers?.[t]??1;return Math.max(0,Math.round(e*i))}const pl=1.2,Hi=100,ml=5,hl=.4,fl=2,gl=2,yl=3,ta=2,na=3,vl=.7;function st(e,t,n){const a=e.statusEffects.find(i=>i.type===t);return a?(a.duration=Math.max(a.duration,n),!1):(e.statusEffects.push({type:t,duration:n}),!0)}function aa(e,t){return e.statusEffects.some(n=>n.type===t)}function se(e,t,n,a){return e.encounter.enemies.find(i=>i.position.lane===t&&i.position.row===n&&(!a||i.side===a))}function bl(e,t,n){return e.encounter.enemies.filter(a=>a.position.lane===t&&a.side===n)}function Wt(e,t,n){if(!n.alive)return!1;const a=se(e,n.position.lane,"front",n.side);if(n.position.row==="back"&&a&&a.alive&&!t.canBypassCover)return!1;switch(t.targetingMode){case"frontOnly":return n.position.row==="front";case"linePierce":return n.position.row==="front";case"splashLane":return n.position.row==="front";default:return!0}}function Ml(e){if(!(!e||!_))return _.factions.find(t=>t.id===e)}const wl=2;function xl(e,t,n){let a=0;const i=n.maxShields?n.shields/n.maxShields:0,s=n.maxHp?n.hp/n.maxHp:0;a+=(1-i)*3,a+=(1-s)*5,n.isFragile&&(a+=3),(n.role==="support"||n.role==="artillery")&&(a+=2),!t.canBypassCover&&n.position.row==="front"&&(a+=1),t.linePierce&&n.position.row==="front"&&(a+=1),t.damageType===n.damageProfile&&(a+=1);const o=Ml(e.factionId);return o&&o.preferredDamage.includes(t.damageType)&&(a+=wl),a}function kl(){const e=l.ship;return{id:"player",side:"player",templateId:"player",name:e.name,hp:e.hp,maxHp:e.maxHp,shields:e.shields,maxShields:e.maxShields,weaponIds:[],weaponCooldowns:[],position:{lane:1,row:"front"},statusEffects:[],tags:[],canEscape:!1,alive:e.hp>0}}function $l(e,t,n,a=[]){const i=[...n.encounter.enemies.filter(p=>p.side!==e.side&&Wt(n,t,p)),...a.filter(p=>p.side!==e.side&&Wt(n,t,p))];if(!i.length)return null;const s=!t.canBypassCover,o=i.filter(p=>p.position.row==="front");return(s&&o.length?o:i).map(p=>({slot:p,score:xl(e,t,p)})).sort((p,m)=>m.score-p.score)[0].slot}function Sl(e,t,n,a){if(!(!n||n.side!=="enemy")){if(t.linePierce&&n.position.row==="front"){const i=se(e,n.position.lane,"back");if(i&&i.alive&&i.side!==n.side){const s=Math.max(0,Math.round(a*.5));xe(s,t.damageType,t,i),x(`${t.name} pierces through ${n.name} and grazes ${i.name} for ${s}.`)}}if(t.splashRadius&&n.position.row==="front"){const i=e.encounter.enemies.filter(o=>o.position.lane===n.position.lane&&o.id!==n.id&&o.alive),s=Math.max(0,Math.round(a*.35));for(const o of i)xe(s,t.damageType,t,o),x(`${t.name} splashes ${o.name} for ${s} damage.`)}}}function _l(e,t,n){e==="explosive"&&n.shields<=0&&t>=8&&Math.random()<=.3&&st(n,"breach",fl)&&x(`${n.name} suffers a hull breach!`),e==="disruptive"&&t>=5&&Math.random()<=.3&&st(n,"jammed",gl)&&x(`${n.name} is jammed and struggles to stay online!`),e==="energy"&&n.shields<=0&&t>=6&&Math.random()<=.25&&st(n,"burn",yl)&&x(`${n.name} is singed by the energy barrage!`)}function Cl(e){for(const t of[...e.encounter.enemies]){if(t.statusEffects.length===0)continue;const n=[];for(const a of t.statusEffects){if(a.type==="breach"&&t.hp>0){const i=Math.min(t.hp,ta);t.hp=Math.max(0,t.hp-ta),i>0&&x(`${t.name} leaks atmosphere from the breach (-${i} hull).`)}if(a.type==="burn"&&t.hp>0){const i=Math.min(t.hp,na);t.hp=Math.max(0,t.hp-na),i>0&&x(`${t.name} suffers burning damage (-${i} hull).`)}a.duration-=1,a.duration>0?n.push(a):x(`${t.name} recovers from ${a.type}.`)}t.statusEffects=n,t.hp<=0&&Te(e,t.id)}}function Tl(e){return e.encounter.enemies.find(t=>t.id===e.selectedEnemyId)}function de(e){const t=Tl(e);if(t)return t;const n=e.encounter.enemies.find(a=>a.position.row==="front")??e.encounter.enemies[0];return n?e.selectedEnemyId=n.id:e.selectedEnemyId=null,n}function El(e,t){const n=e.encounter.enemies.find(a=>a.position.lane===t&&a.position.row==="back");n&&(n.position.row="front",x(`${n.name} steps forward to lane ${t}.`))}function Te(e,t){const n=e.encounter.enemies.findIndex(i=>i.id===t);if(n===-1)return;const[a]=e.encounter.enemies.splice(n,1);if(a.position.row==="front"&&El(e,a.position.lane),e.selectedEnemyId===t){const i=e.encounter.enemies.find(s=>s.position.row==="front")??e.encounter.enemies[0];e.selectedEnemyId=i?.id??null}Ui(e,"enemy_destroyed",a.templateId)}function ia(e,t){const n=e;for(let a=0;a<3;a+=1){const i=se(n,a,"front",t),s=se(n,a,"back",t);if(!i||!s||!i.alive||!s.alive)continue;const o=i.maxHp>0?i.hp/i.maxHp:0,d=s.maxHp>0?s.hp/s.maxHp:0,p=(i.shields<i.maxShields||i.hp<i.maxHp)&&(i.shields===0||o<hl),h=!(s.isFragile??!1)&&d>=o;p&&h&&(i.position.row="back",s.position.row="front",x(`${s.name} surges forward in lane ${a+1} as ${i.name} pulls back to recover.`))}}function sa(e,t){const n=e;for(let a=0;a<3;a+=1){const i=se(n,a,"front",t);if(i&&i.alive)continue;const s=se(n,a,"back",t);if(!s||!s.alive)continue;const o=s.isFragile??!1;(s.wantsFrontline||!o)&&(s.position.row="front",x(`${s.name} fills the empty front line in lane ${a+1}.`))}}function Il(e){ia(e,"player"),ia(e,"enemy"),sa(e,"player"),sa(e,"enemy"),Pl(e),Rl(e),de(e)}function Rl(e){const t=e;for(let n=0;n<3;n+=1){const a=se(t,n,"front","enemy"),i=se(t,n,"back","enemy");if(!a||!a.alive||i&&i.alive)continue;const s=t.encounter.enemies.find(o=>o.side==="enemy"&&o.alive&&o.position.row==="front"&&o.id!==a.id&&o.position.lane!==n&&!(o.wantsFrontline??!1));s&&(s.position={lane:n,row:"back"},x(`${s.name} drops into lane ${n+1} to shelter behind ${a.name}.`))}}function Pl(e){const t=e;for(let n=0;n<3;n+=1){const a=se(t,n,"front","enemy"),i=se(t,n,"back","enemy");if(!a||!a.alive||i&&i.alive)continue;const s=t.encounter.enemies.find(d=>d.side!=="enemy"||!d.alive||d.position.row!=="front"||d.position.lane===n||(d.wantsFrontline??!1)?!1:bl(t,d.position.lane,"enemy").filter(p=>p.alive&&p.id!==d.id).length>0);if(!s)continue;s.position={lane:n,row:"back"};const o=a.name??`Lane ${n+1}`;x(`${s.name} maneuvers into lane ${n+1} to take cover behind ${o}.`)}}function xe(e,t,n,a){const i=Ht[t];if(!i||e<=0)return 0;const s=n.tags||[];if(a.shields>0){let u=i.vsShields*(n.shieldMod??1);s.includes("shield_breaker")&&(u*=1.2);const p=Math.max(0,Math.round(e*u));return a.shields=Math.max(0,a.shields-p),p}let o=i.vsHull*(n.armorMod??1);s.includes("armor_piercing")&&(o*=1.2);const d=Math.max(0,Math.round(e*o));return a.hp=Math.max(0,a.hp-d),a.alive=a.hp>0,d}function Oi(){const e=Y(),t=vn(l);return Math.max(1,(e.enemyHpMultiplier??1)*t)}function Al(e,t){const n=t==="right_flank"?[2,1,0]:t==="left_flank"?[0,1,2]:[1,0,2];for(const a of n){const i=e.enemies.filter(u=>u.position.lane===a),s=i.some(u=>u.position.row==="front"),o=i.some(u=>u.position.row==="back"),d=t==="back";if(!s&&!d)return{lane:a,row:"front"};if(!o&&d)return{lane:a,row:"back"};if(!s)return{lane:a,row:"front"};if(!o)return{lane:a,row:"back"}}return{lane:n[0],row:"front"}}function qi(e,t,n){for(const a of t.enemies){const i=Fi(a.enemyDefinitionId),s=Al(e.encounter,a.initialPosition),d=ji(i,n,[s],[{battleRole:a.roleOverride,focusHint:a.focusHint}])[0];a.nameOverride&&(d.name=a.nameOverride),e.enemyModifiers?.allowRetreat===!1&&(d.canEscape=!1),e.encounter.enemies.push(d)}x(`Wave ${t.id} drops into battle!`)}function Ui(e,t,n){const i=(e.encounter.pendingWaves??[]).filter(s=>t==="round_reached"?s.spawnCondition.type==="on_round_reached"&&s.spawnCondition.roundThreshold===e.round:t==="enemy_destroyed"?s.spawnCondition.type==="on_enemy_destroyed"&&s.spawnCondition.enemyIdTrigger===n:!1);if(i.length)for(const s of i)qi(e,s,Oi()),e.encounter.pendingWaves=(e.encounter.pendingWaves??[]).filter(o=>o.id!==s.id)}function Dl(e){return e<=Kn.positioning?"positioning":e<=Kn.escalation.max?"escalation":"finisher"}function Bl(e){const t=Dl(e.round);e.phase!==t&&(e.phase=t,x(Kc(t)))}function zi(e){return e<=le.thresholds.critical?"critical":e<=le.thresholds.major?"major":e<=le.thresholds.minor?"minor":"normal"}function Nl(e){for(const t of e.encounter.enemies.filter(n=>n.alive)){const n=Gi(t,e);t.nextIntent=n,x(Zc(n,t.name))}}const Ll=["heavy_attack","shield_boost","flank_shot","debuff","retreat","charge_weapon"],Et={heavy_attack:"Loads primary batteries for a brutal volley.",shield_boost:"Reinforces shields, searching for openings.",flank_shot:"Angles for a sidelong strike on weaker arcs.",debuff:"Launches a sensor scrambler to scramble your systems.",retreat:"Shifts toward cover to buy time.",charge_weapon:"Helps build a heavy cannon discharge."};function Gi(e,t){if(e.intentCharged)return e.intentCharged=!1,{type:"heavy_attack",description:"Previously charged weapons unleash stored brutality.",interruptible:!0,targetId:"player"};const n=Vc[e.battleRole??"anchor"],a=Yc[t.phase]??{},i=Ll.map(u=>{const p=n?.[u]??1,m=a[u]??1;let h=p*m;e.focusHint==="weapons"&&u==="heavy_attack"&&(h*=1.1),e.focusHint==="engines"&&u==="flank_shot"&&(h*=1.2);const b=e.maxHp?e.hp/e.maxHp:1;return b<=le.thresholds.major&&u==="retreat"&&(h*=2),b<=le.thresholds.minor&&u==="flank_shot"&&(h*=1.2),{type:u,weight:h}}),s=i.reduce((u,p)=>u+p.weight,0);if(s<=0)return{type:"heavy_attack",description:Et.heavy_attack,interruptible:!0,targetId:"player"};let o=Math.random()*s;for(const u of i)if(o-=u.weight,o<=0)return{type:u.type,description:Et[u.type],interruptible:["heavy_attack","flank_shot","charge_weapon","debuff"].includes(u.type),targetId:"player"};const d=i[i.length-1];return{type:d.type,description:Et[d.type],interruptible:["heavy_attack","flank_shot","charge_weapon","debuff"].includes(d.type),targetId:"player"}}function x(e){const t=l.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}const Fl={near_miss:{amount:5,source:"dodge",label:"near miss"},perfect_dodge:{amount:10,source:"dodge",label:"perfect dodge"},light_damage:{amount:15,source:"risk",label:"light damage"},heavy_damage:{amount:25,source:"risk",label:"heavy damage"},heroic_spike:{amount:40,source:"risk",label:"heroic spike"}},jl={risk:"Retribution Burst",variation:"Adaptive Strike",dodge:"Phantom Strike"};function Hl(){return{charge:0,variationPoints:0,riskPoints:0,dodgePoints:0,recentCategories:[]}}function Mt(){const e=l.combat;return e?(e.comboMeter||(e.comboMeter=Hl()),e.comboMeter):null}function Wi(e,t,n){if(e<=0)return;const a=Mt();a&&(a.charge=Math.min(Hi,a.charge+e),t==="variation"?a.variationPoints+=e:t==="risk"?a.riskPoints+=e:a.dodgePoints+=e,x(`Combo +${e}${n?` (${n})`:""}.`),ql(a))}function wt(e){const t=Mt();if(!t)return;t.recentCategories.unshift(e),t.recentCategories.length>ml&&t.recentCategories.pop();const n=t.recentCategories.slice(0,3),a=new Set(n).size;let i=a*5;a>=3&&(i+=10),Wi(i,"variation","variation")}function Ol(e){const t=[["variation",e.variationPoints],["risk",e.riskPoints],["dodge",e.dodgePoints]];return t.sort((n,a)=>a[1]-n[1]),t[0][1]===0?"variation":t[0][0]}function ql(e){if(e.ready||e.charge<Hi)return;const t=Ol(e);e.ready={type:t,label:jl[t]},e.charge=0,e.variationPoints=0,e.riskPoints=0,e.dodgePoints=0,e.recentCategories=[],x(`Combo meter ready: ${e.ready.label}!`)}function Ul(){const e=Mt();if(!e||!e.ready)return null;const t=e.ready.type;return e.ready=void 0,t}function Le(e){const t=Fl[e];t&&Wi(t.amount,t.source,t.label)}function zl(){const e=l.ship,t=e.weapons.map(i=>i?K(i)?.damage??0:0).filter(i=>i>0),n=t.length?t.reduce((i,s)=>i+s,0)/t.length:0,a=Math.max(e.weaponPower??10,Math.round(n));return Math.max(10,Math.round(a*1.25))}function $n(e={}){return{id:e.id??"combo_finish",name:e.name??(e.tags?.includes("armor_piercing")?"Combo Penetrator":"Combo Burst"),description:e.description,type:e.type??"energy",size:e.size??"small",damage:e.damage??0,damageType:e.damageType??"energy",shieldMod:e.shieldMod??1,armorMod:e.armorMod??1,accuracy:e.accuracy??1,critChance:e.critChance??0,critMultiplier:e.critMultiplier??1,energyCost:e.energyCost??0,cooldown:e.cooldown??0,price:e.price??0,tags:e.tags??[],targetingMode:e.targetingMode,canBypassCover:e.canBypassCover,splashRadius:e.splashRadius,linePierce:e.linePierce}}function Sn(e){return e.encounter.enemies.filter(t=>t.alive)}function Vi(e,t){return e.encounter.enemies.find(n=>n.alive&&n.position.row==="back"&&n.id!==t)}function Gl(e,t){const n=$n({tags:["shield_breaker"],armorMod:1.1,shieldMod:1.05}),a=Sn(e);if(!a.length)return!1;let i=0;for(const s of a){const o=s.position.row==="front"?1.4:1.05,d=Math.max(12,Math.round(t*o+6)),u=xe(d,"energy",n,s);u>0&&(Ce(u),x(`Adaptive Strike smashes ${s.name} for ${u} damage.`),i+=u,s.hp<=0&&Te(e,s.id))}return i>0}function Wl(e,t){const n=Vi(e)??de(e)??Sn(e)[0];if(!n)return!1;const a=$n({tags:["shield_breaker","armor_piercing"],armorMod:1.35,shieldMod:1.1}),i=Math.max(3,Math.round(t*.5)),s=Math.max(5,t-i);let o=0;if(s>0){const p=xe(s,"energy",a,n);p>0&&(Ce(p),o+=p)}if(i>0&&n.alive){const p=n.hp;n.hp=Math.max(0,n.hp-i);const m=p-n.hp;m>0&&(Ce(m),o+=m),n.alive=n.hp>0}if(n.hp<=0&&Te(e,n.id),o<=0)return!1;const d=l.ship,u=Math.max(1,Math.round(o*(.02+Math.random()*.03)));return d.hp=Math.min(d.maxHp,d.hp+u),x(`Retribution Burst shreds ${n.name} for ${o} and restores ${u} hull.`),!0}function Vl(e,t){const n=Vi(e)??de(e)??Sn(e)[0];if(!n)return!1;const a=$n({tags:["shield_breaker"],armorMod:1.2}),i=Math.max(8,Math.round(t*.9)),s=xe(i,"energy",a,n);return s>0&&(Ce(s),x(`Phantom Strike ghosts ${n.name} for ${s} damage.`),n.hp<=0&&Te(e,n.id)),e.playerStatus.maneuverBonus=Math.max(e.playerStatus.maneuverBonus||0,20),e.playerStatus.maneuverTurns=Math.max(e.playerStatus.maneuverTurns,1),s>0}function Yl(){const e=Mt();if(!e||!e.ready)return!1;const t=l.combat;if(!t)return!1;const n=zl(),a=e.ready.type;let i=!1;if(a==="variation"?i=Gl(t,n):a==="risk"?i=Wl(t,n):a==="dodge"&&(i=Vl(t,n)),!i)return!1;Ul();const s=10+(a==="risk"?5:a==="dodge"?3:0);return fe(s,"combat"),!0}function Xl(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function Jl(e){return e??"main"}function Kl(e,t){C.go(Jl(e),t)}function Ie(e,t={}){const n=Qc(e);n?Ql(n,t):Zl(e,t)}function Zl(e,t={}){const n=Fi(e),i=l.ship.weapons.map(()=>0),s=Y(),o=vn(l),d=Math.max(1,(s.enemyHpMultiplier??1)*o),u=el(),p=tl(u),m=Math.max(1,p),h=nl(m),b=ji(n,d,h),g=ll(n,b.length);l.combat={encounter:{id:n.id,name:g,enemies:b,tags:n.tags?[...new Set(n.tags)]:[]},selectedEnemyId:b[0]?.id??null,playerCooldowns:i,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:l.ship.hp,round:1,log:[`${g} engages you in combat!`],adviceToken:Math.random(),moduleAbilityCooldowns:{},returnTo:t.returnScreen,returnParams:t.returnParams,phase:"positioning",playerActionCooldowns:[]},Xa(8),m>1&&l.combat.log.push(`Multiple bogies detected (${m} ships).`),C.go("combat")}function Ql(e,t={}){const n=l.ship.weapons.map(()=>0),a=Oi(),i={id:e.id,templateId:e.id,name:e.name,enemies:[],tags:e.tags??[],objectives:e.objectives,waves:e.waves,pendingWaves:e.waves.filter(p=>p.spawnCondition.type!=="on_start")},s=e.playerModifiers?.startingShieldMultiplier??1,o=e.playerModifiers?.startingHullMultiplier??1,d={encounter:i,selectedEnemyId:null,playerCooldowns:n,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:Math.max(0,Math.round(l.ship.maxShields*(s-1))),shieldTurns:s>1?Math.max(1,Math.round(s)):0,hullBuffer:Math.max(0,Math.round(l.ship.maxHp*(o-1)))},enemyStatus:{weaponJammedTurns:0},canEscape:!e.playerModifiers?.disableRetreat,totalRounds:1,startingHp:l.ship.hp,round:1,log:[e.description??`${e.name} engages you.`],adviceToken:Math.random(),moduleAbilityCooldowns:{},returnTo:t.returnScreen,returnParams:t.returnParams,phase:e.startingPhase??"positioning",playerActionCooldowns:[],enemyModifiers:e.enemyModifiers};l.combat=d;const u=e.waves.filter(p=>p.spawnCondition.type==="on_start");for(const p of u)qi(d,p,a);de(d),Xa(8),C.go("combat")}function ed(e){const t=td(e);Ie(t)}function td(e){if(!_?.enemies?.length)return"pirate_cutter";const t=gn(l),n=yn(l.time.day),a=Y(),i=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,l.time.day-1),s=Math.max(0,a.difficultyScalePerShipPower??1),o=t*s*i;let d=o*(.6+.2*n),u=o*(.9+.4*n);e&&gt(e,"core")&&(d=t*.4,u=t*.8);const p=_.enemies.map(g=>({id:g.id,power:Xl(g)})),m=p.filter(g=>g.power>=d&&g.power<=u);if(m.length)return m[Math.floor(Math.random()*m.length)].id;let h=p[0],b=Math.abs(p[0].power-t);for(const g of p){const $=Math.abs(g.power-t);$<b&&(h=g,b=$)}return h.id}function Ne(e,t,n="normal"){const a=l.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){x("You must choose a weapon to fire.");return}_n(t,n);break;case"fire_all":sd(n);break;case"combo_finish":if(!Yl()){x("Combo finisher is not ready.");return}break;case"brace":cd();break;case"flee":if(ld())return;break;default:{const i=ol(e);if(!i){x("Unknown combat action.");return}const s=de(a);if(!i.effect(a,s))return;rl(a,i.id,i.cooldown),cl(a,s,i.id);break}}Yi()}}function Yi(){const e=l.combat;if(e){if(e.encounter.enemies.length===0){md();return}if(Nl(e),ud(),!!l.combat){if(l.ship.hp<=0){hd();return}Il(e),pd(),e.adviceToken=Math.random(),e.round+=1,e.totalRounds+=1,Ui(e,"round_reached"),Bl(e)}}}function nd(){const e=l.combat;return e?_?l.ship.components.map(t=>{const n=Ae(t);if(!n?.ability)return null;const a=e.moduleAbilityCooldowns?.[t]??0;return{componentId:t,componentName:n.name,ability:n.ability,cooldown:a,ready:a<=0}}).filter(t=>!!t):[]:[]}function ad(e){wt("utility");const t=l.combat;if(!t)return;const n=Ae(e);if(!n||!n.ability){x("Module ability offline.");return}const a=n.ability;t.moduleAbilityCooldowns=t.moduleAbilityCooldowns??{};const i=Math.max(0,t.moduleAbilityCooldowns[e]??0);if(i>0){x(`${n.name} is recalibrating (${i} turn${i===1?"":"s"}).`);return}const s=de(t);if(!s){x("No enemy target available.");return}id(t,n,a,s)&&(t.moduleAbilityCooldowns[e]=Math.max(a.cooldown??3,1),Yi())}function id(e,t,n,a){const i=e,s=a.position.lane;switch(n.type){case"pull":{if(a.position.row!=="back")return x("Pull modules need a back-line target."),!1;const o=se(i,s,"front","enemy");o&&o.id!==a.id&&(o.position.row="back",x(`${o.name} is forced back to make room.`)),a.position.row="front",x(`${t.name} hauls ${a.name} into lane ${s+1}'s front line.`);break}case"push":{if(a.position.row!=="front")return x("Push modules need a front-line target."),!1;const o=se(i,s,"back","enemy");o&&o.id!==a.id&&(o.position.row="front"),a.position.row="back",x(`${t.name} shoves ${a.name} back into cover.`);break}default:return!1}if(n.statusEffect){const o=n.effectDuration??1;st(a,n.statusEffect,o)&&(n.statusEffect==="jammed"?x(`${a.name}'s systems are jammed for ${o} turn${o===1?"":"s"}.`):x(`${a.name} cannot react for ${o} turn${o===1?"":"s"}.`))}return!0}function _n(e,t,n={}){wt("weapon_attack");const a=l.combat;if(!a)return;const i=l.ship;if(e<0||e>=i.weapons.length){x("Invalid weapon slot.");return}const s=i.weapons[e];if(!s){x("That hardpoint is empty.");return}const o=K(s);if(!o){x("Missing weapon data.");return}const u=i.weapons.filter((P,A)=>A!==e&&!!P&&(a.playerCooldowns[A]??0)<=0).length===0,p=ne(),m=a.round<=1,h={...o,critChance:Math.min(.95,(o.critChance??0)+(p.critBonus??0)+(m?p.critBonus??0:0))},b=a.playerCooldowns[e]??0;if(b>0){x(`${o.name} is still recharging (${b} turn${b===1?"":"s"}).`);return}const g=t==="called_shot"?jn.damageMultiplier:1,$=t==="called_shot"?jn.accuracyMultiplier:1;let T=qa(h,{accuracyMultiplier:$,damageMultiplier:g*(p.playerDamageBonus??1)});const I=Math.max(0,Math.min(1,(l.ship.hp||0)/Math.max(1,l.ship.maxHp))),v=zi(I);if(v==="major"&&Math.random()<le.misfireChanceAtMajor){x(lt(l.ship.name,"major","Systems misfire as hull stress spikes.")),a.playerCooldowns[e]=o.cooldown;return}if(v==="critical"&&Math.random()<le.engineFlickerChanceAtCritical&&(x(lt(l.ship.name,"critical","Engines stutter and heat swells.")),T=Math.max(1,Math.round(T*le.criticalDamagePenalty))),T<=0){const P=t==="called_shot"?"called shot goes wide":"misses";x(`You fire ${o.name}, but it ${P}.`),a.playerCooldowns[e]=o.cooldown;return}const f=de(a);if(!f){x("No enemy target available."),a.playerCooldowns[e]=o.cooldown;return}const M=a;if(!Wt(M,o,f)){const P=se(M,f.position.lane,"front","enemy");x(P&&P.alive?`${o.name} cannot hit ${f.name} because ${P.name} is covering the lane.`:`${o.name} cannot reach ${f.name}.`),a.playerCooldowns[e]=o.cooldown;return}const k=f.shields>0?"shields":"hull";let y=T;u&&(y=Math.max(1,Math.round(T*al)),x(`Solo fire bonus: ${o.name} punches harder this turn.`));const E=!n.isVolley&&f.shields>0?pl:1;y=Math.round(y*E);const w=xe(y,o.damageType,o,f);w>0&&(Ce(w),_l(o.damageType,w,f));const D=t==="called_shot"?"called shot":"normal shot";x(`You strike ${f.name}'s ${k} with ${o.name} (${D}) for ${w} damage.`),w>0&&o.tags?.includes("disruptor")&&(a.enemyStatus.weaponJammedTurns=Math.min(2,a.enemyStatus.weaponJammedTurns+1),x(`${f.name}'s weapons are disrupted!`)),a.playerCooldowns[e]=o.cooldown,f.hp<=0&&(x(`${f.name} is destroyed!`),Te(a,f.id))}function Xi(e){if(!_)return[];const t=l.ship,n={disruptive:0,energy:1,kinetic:2,explosive:3},a=[];for(let i=0;i<t.weapons.length;i+=1){const s=t.weapons[i];if(!s)continue;const o=K(s);!o||(e.playerCooldowns[i]??0)>0||a.push({idx:i,weapon:o})}return a.sort((i,s)=>{const o=n[i.weapon.damageType]??4,d=n[s.weapon.damageType]??4;return o!==d?o-d:i.idx-s.idx})}function sd(e){const t=l.combat;if(!t)return;const n=Xi(t);if(!n.length){x("No weapons are ready to fire.");return}for(const{idx:a}of n){if(!l.combat||l.combat.encounter.enemies.length===0)break;_n(a,e,{isVolley:!0,volleyCount:n.length})}}function It(e,t,n){const a=Xi(e);if(!a.length)return x("No weapons are ready to fire."),!1;let i=n??de(e);if(!i)return x("No enemy target available."),!1;const s=e.selectedEnemyId;e.selectedEnemyId=i.id;for(const{idx:o}of a){if(!l.combat||l.combat.encounter.enemies.length===0||!de(e))break;_n(o,t,{isVolley:!0,volleyCount:a.length})}return e.selectedEnemyId=s,!0}function od(e){const t=e.encounter.enemies.filter(n=>n.alive&&n.shields>0).sort((n,a)=>a.shields-n.shields);return t.length?t[0]:de(e)}function rd(e){const t=e.encounter.enemies.filter(i=>i.alive);if(!t.length)return;let n=t[0],a=n.hp/Math.max(1,n.maxHp);for(const i of t.slice(1)){const s=i.hp/Math.max(1,i.maxHp);s<a&&(n=i,a=s)}return n}function cd(){wt("defense");const e=l.combat;e&&(e.playerBracing=!0,x("You brace for impact, diverting power to shields and hull integrity."))}function ld(){wt("movement");const e=l.combat;if(!e)return!1;if(!e.canEscape)return x("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4;let n=0;e.playerStance==="evasive"&&(n=.15),e.playerStance==="brace"&&(n=-.05),e.playerStance==="overcharge"&&(n=-.1);const a=(l.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),s=Vt((a-40)*.01,-.15,.15),o=Y(),d=ne(),u=(o.fleeSuccessBonus??0)/100+(d.fleeBonus??0),p=Vt(t+n+s+u,.05,.95);return Math.random()<=p?(x(`You punch the thrusters and break free! (Flee chance ${(p*100).toFixed(0)}%)`),Re(l,-5),l.combat=null,Gc(l,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),C.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(x(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(p*100).toFixed(0)}%)`),!1)}function dd(e){const t=l.ship.maxHp||100;return e>=Math.max(1,Math.round(t*.25))}function ud(){const e=l.combat;if(!e)return;const t=l.ship.hp,n=l.ship.shields,a=l.ship.maxHp||100;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,x("Enemy weapons are jammed this round!");return}const i=e,s=e.encounter.enemies.filter(R=>R.alive&&!aa(R,"immobilized")&&R.weaponIds.some((G,ie)=>G&&(R.weaponCooldowns[ie]??0)<=0));if(!s.length){x(`The ${e.encounter.name} reloads while you advance.`);return}const o=s[Qn(0,s.length-1)],d=o.nextIntent??Gi(o,e);if(o.nextIntent=d,o.intentDamageMultiplier=1,d.type==="shield_boost"){o.shields=Math.min(o.maxShields,o.shields+12),x(`${o.name} shunts power into shields instead of firing.`),o.nextIntent=void 0;return}if(d.type==="debuff"){e.enemyStatus.weaponJammedTurns=Math.min(3,e.enemyStatus.weaponJammedTurns+1),x(`${o.name} unleashes a scrambler to disrupt your weapons.`),o.nextIntent=void 0;return}if(d.type==="retreat"){x(`${o.name} slips toward cover instead of committing.`),o.nextIntent=void 0;return}if(d.type==="charge_weapon"){o.intentCharged=!0,x(`${o.name} is channeling a heavier salvo.`),o.nextIntent=void 0;return}d.type==="heavy_attack"&&(o.intentDamageMultiplier*=1.3),d.type==="flank_shot"&&(o.intentDamageMultiplier*=1.15);const u=o.weaponIds.map((R,G)=>({id:R,idx:G})).filter(({id:R,idx:G})=>!!R&&(o.weaponCooldowns[G]??0)<=0);if(!u.length){x(`The ${o.name} catches its breath while reloading.`);return}const p=u[Qn(0,u.length-1)],m=K(p.id);if(!m){x(`The ${o.name} fumbles its weapon.`);return}const h=kl(),b=$l(o,m,i,[h]);if(!b){x(`${o.name} finds no valid targets.`);return}const g=aa(o,"jammed");g&&x(`${o.name} is still recovering from jammed systems.`);const $=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),T=Y(),I=ne(),v=e.round<=1,f=Math.max(0,(1-$)*(T.enemyAccuracyMultiplier??1)*Math.max(0,1-(I.dodgeBonus??0))*(v?Math.max(0,1-(I.dodgeBonus??0)):1)),M=dl(e.playerStance),k=(me("precision_t1_targeting_assist")?.05:0)+((me("precision_t2_headshot_focus")||me("precision_t3_backline_breach"))&&b.position.row==="back"?.05:0),y=me("precision_t3_backline_breach")&&b.position.row==="back"?1.08:1,E=e.enemyModifiers?.globalAccuracyMultiplier??1;let w=Math.max(0,f*M*(g?vl:1)*(1+k)*y)*E;const D=Math.max(0,Math.min(1,o.hp/Math.max(1,o.maxHp))),P=zi(D);if(P==="major"&&Math.random()<le.misfireChanceAtMajor){x(lt(o.name,"major","Weapon banks sputter beneath the stress.")),o.nextIntent=void 0;return}P==="critical"&&Math.random()<le.engineFlickerChanceAtCritical&&(x(lt(o.name,"critical","Engines choke, slowing their lock.")),w*=le.criticalDamagePenalty);let A=qa(m,{accuracyMultiplier:w});const q=vn(l),L=e.enemyModifiers?.globalDamageMultiplier??1,j=Math.max(0,Math.round(A*(T.enemyDamageMultiplier??1)*q*L)),z=l.ship.hp/(l.ship.maxHp||1)<=.3,U=me("survival_t3_last_stand_matrix")&&z?Math.round(j*.85):j,Q=o.intentDamageMultiplier??1,X=Math.max(0,Math.round(U*Q));dd(X)&&x("Sensors pick up a heavy attack; brace now to soften the blow!"),A=X,e.playerBracing&&(A=Math.round(A*fo)),A=ul(A,m.damageType,e.playerStance),A=Math.max(0,Math.round(A*(T.playerDamageTakenMultiplier??1)*Math.max(.1,I.damageTakenMultiplier??1)*(v?Math.max(.1,I.damageTakenMultiplier??1):1))),A=Math.round(A*il);let O=A;if(e.playerStatus.hullBuffer&&e.playerStatus.hullBuffer>0&&O>0){const R=Math.min(e.playerStatus.hullBuffer,O);e.playerStatus.hullBuffer-=R,O-=R,R>0&&x(`Hull buffer absorbs ${R} damage before the hull takes a hit.`)}if(e.playerStatus.shieldBoost>0){const R=Math.min(e.playerStatus.shieldBoost,O);e.playerStatus.shieldBoost-=R,O-=R}if(l.ship.shields>0&&O>0){const R=Math.min(l.ship.shields,O);l.ship.shields-=R,O-=R}O>0&&(l.ship.hp=Math.max(0,l.ship.hp-O));const V=Math.max(0,O),S=l.ship.hp,B=Math.max(0,n-l.ship.shields);V>0?t<=V&&S===1?Le("heroic_spike"):V>=a*.25?Le("heavy_damage"):Le("light_damage"):B<=0?(Le("perfect_dodge"),fe(5,"combat")):(Le("near_miss"),fe(3,"combat")),x(`The ${o.name} hits you with ${m.name} for ${A} damage.`),Vs(A),Re(l,-Math.min(6,Math.floor(A/10))),o.weaponCooldowns[p.idx]=m.cooldown+(g?1:0),Sl(i,m,b,A),o.nextIntent=void 0,o.intentDamageMultiplier=1}function pd(){const e=l.combat;if(e){e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0);for(const t of e.encounter.enemies)t.weaponCooldowns=t.weaponCooldowns.map(n=>n>0?n-1:0);if(Cl(e),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)),e.moduleAbilityCooldowns)for(const t of Object.keys(e.moduleAbilityCooldowns)){const n=e.moduleAbilityCooldowns[t];n>0&&(e.moduleAbilityCooldowns[t]=Math.max(0,n-1))}e.playerActionCooldowns&&(e.playerActionCooldowns=e.playerActionCooldowns.map(t=>({actionId:t.actionId,remainingRounds:Math.max(0,t.remainingRounds-1)})).filter(t=>t.remainingRounds>0))}}function md(){const e=l.combat;if(!e)return;const t=e.encounter;x(`The ${t.name} explodes under your punishing fire. Victory is yours.`);const n=Math.max(0,e.startingHp-l.ship.hp),a=e.totalRounds<=3,i=n<=5,s=qr(t.id,t.name,{quickKill:a,lowDamageTaken:i},t.tags);if(s){l.lastBattleResult=s;const u=[];s.creditsEarned&&u.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&u.push(`Cargo: ${s.commodities.map(p=>`${p.qty} ${p.id}`).join(", ")}`),s.weapons.length&&u.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&u.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&u.push(`Missions: ${s.missionsGranted.join(", ")}`),x(`Loot recovered — ${u.join(" | ")||"nothing notable."}`),a&&x("Because you won quickly, salvage yields are richer."),i&&x("Minimal hull damage preserved more intact cargo.")}else x("No notable loot recovered.");const o=3+(a?2:0)+(i?1:0);Re(l,o),s?.creditsEarned&&s.creditsEarned>300&&Re(l,2),t.tags.some(u=>/navy|elite/.test(u))&&Re(l,2);const d=Math.max(15,Math.round(20+t.enemies.length*10+(a?10:0)+(i?5:0)));if(fe(d,"combat"),Ys(),Xs(),Yo(t.id),t.tags.some(u=>/pirate|raider/i.test(u))||t.id.includes("pirate")||t.id.includes("raider")){const u=Y().repGainMultiplier??1;yi(Math.round(3*u))}l.combat=null,Kl(e.returnTo,e.returnParams)}function hd(){x("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),l.ship.hp=0,l.ship.shields=0,l.combat=null,l.notifications.push("Critical failure — hull integrity dropped to zero."),mi("ship_destroyed","Ship destroyed in combat.")}function Vt(e,t,n){return Math.max(t,Math.min(n,e))}function fd(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function gd(e,t){yd(e,t).lastRiskSeenDay=e.time.day}function yd(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(i=>i.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function vd(e){e.time.day+=1,Ur(e),zr(e),Qs(e.time.day),ni(e),Er(e),er(e),fd(e),zc(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{Sd(e)};function Ji(){return _?_.systemsById:null}function Ki(e){const t=Ji();return t?t[e]??null:null}function bd(e,t){return e.neighbors.find(n=>n.id===t)??null}let Cn=0,oa=1;function Md(e){e!==oa&&(oa=e,Cn=0)}function Tn(e){return e<=0?!1:Cn<e}function En(){Cn+=1}function _e(e){Y().showEncounterDebug&&l.notifications.push(`Encounter debug: ${e}`)}function xt(){return Ki(l.location.systemId)}function wd(){const e=xt();if(!e)return[];const t=Ji();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:Zi(e,a,n)}:null}).filter(n=>n!==null):[]}function Zi(e,t,n){const a=ne(),i=(e.baseDanger+t.baseDanger)/2,s={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},o=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,d=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,u=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,p=(s[e.region]??0)+(s[t.region]??0),m=Math.max(1,Math.round(n.distance*d+Math.max(0,p)*2)),h=dt(.1*n.distance+i*.12+u+p+(n.laneType==="wildspace"?.05:0),.1,.95),b=Math.min(.95,Math.max(.1,h)),g=Math.max(0,b-Math.max(0,a.hazardDetectionBonus??0)),$=Math.max(1,Math.round(n.distance*o*(1+i*.06))),T=Math.max(1,Math.round($*Math.max(.1,a.fuelCostMultiplier??1))),I=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:m,fuelCost:T,hazardChance:g,hazardMitigation:Math.max(0,b-g),routeType:I,laneType:n.laneType,distance:n.distance}}function dt(e,t,n){return Math.max(t,Math.min(n,e))}function Qi(e){const t=l.ship.cargo||{};let n=0,a=0,i=0;for(const[o,d]of Object.entries(t)){if(!d)continue;const u=oe(o);if(!u||u.legalStatus!=="illegal"&&u.legalStatus!=="restricted")continue;const p=ae(e.id,o);i+=p.sell*d,u.legalStatus==="illegal"?n+=d:a+=d}const s=n+a;return s<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:s,estimatedValue:i}}function xd(e,t,n,a=ne()){let i=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(i*=.65),t.tags.includes("restricted")&&(i+=.08),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(i+=.05),n==="trade_lane"&&(i+=.06);const s=1+Math.min(1,e.illegalUnits*.06+e.restrictedUnits*.025),o=Math.max(0,a.scanDetectionMultiplier??1),d=Math.max(.5,a.illegalTolerance??1),u=dt(i*s*o/d,0,.95),{detectionReduction:p}=un();return Math.max(0,u-p)}function kd(e,t){const n=Qi(e);if(!n)return!1;const a=ne(),i=xd(n,e,t.routeType,a);if(l.notifications.push(`Warning: checkpoint scan imminent (${Math.round(i*100)}% detection chance).`),Math.random()>i)return!1;const s=l.ship.cargo||{};let o=0;for(const[f,M]of Object.entries(s)){if(!M)continue;const k=oe(f);k&&k.legalStatus==="illegal"&&(o+=M,s[f]=0)}if(l.ship.cargo=s,typeof window<"u"&&window.confirm("Contraband detected. Fight the authorities to keep your haul?"))return Ie("navy_interceptor",{returnScreen:"travel",returnParams:{message:"You chose to fight the checkpoint."}}),!0;const u=Math.max(25,Math.round(n.estimatedValue*.35)),p=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,m=u+p,{fineDiscount:h}=un(),b=Math.round(m*h),g=Math.max(0,m-b);l.player.credits=Math.max(0,l.player.credits-g);const $=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25)),T=Math.round($*h*.6),I=Math.max(0,$-T);yi(I);const v=n.restrictedUnits>0?" (restricted goods fined, not seized)":"";return l.notifications.push(`Checkpoint scans flag contraband. Seized ${o} illegal units, fined ${g} credits${v}, wanted +${I}.`),!0}function $d(e,t,n,a){const i=dt((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),s=dt(t,0,.95),o=Math.max(0,Math.round((i-s)*100));o>0&&l.notifications.push(`Hazard scanners trimmed travel risk by ${o}% (current hazard ${(s*100).toFixed(0)}%).`)}function Sd(e){const t=xt();if(!_||!t)return;const n=bd(t,e);if(!n){const w=`No direct route from ${t.name} to ${e}.`;console.warn(w),l.notifications.push(w),C.go("main",{message:w});return}const a=Ki(e);if(!a){const w=`Destination ${e} is unknown.`;console.warn(w),l.notifications.push(w),C.go("main",{message:w});return}const i=Zi(t,a,n),s=Math.max(0,H.fuelCostMultiplier??1),o=me("control_t3_hazard_mapping")?.03:0,d=me("control_t3_hazard_mapping")?.95:1,u=Math.max(0,Math.round(i.fuelCost*s*d)),p=Math.max(0,Math.min(3,(H.travelRiskScaling??100)/100)),m=Y(),h=Math.max(0,m.globalDangerMultiplier??1),b=Math.min(.95,Math.max(0,i.hazardChance*p*h-o)),g={...i,fuelCost:u,hazardChance:b},$=bn(l),T=Math.ceil(g.fuelCost*$.fuel);if(l.ship.fuel<T){console.warn("Not enough fuel to travel.");return}l.ship.fuel-=T,l.location.systemId=a.id,l.lastMiningSystemId=null,l.location.docked=!0,C.advanceActiveRoute(a.id);const I=Aa(i.travelTime);l.time.turn+=I,kr(a.id),vd(l),Md(l.time.day),gd(l,a.id),Zs();const v=Xo(l,a.id);v.completed.length&&console.log(`Arrived at ${a.id}: checked ${v.checked} contracts, completed ${v.completed.join(", ")}.`);const f=Number.isInteger(I)?I.toFixed(0):I.toFixed(2),M=Math.abs(I-1)<.01?"":"s",k=`Arrived at ${a.name} after a ${g.routeType.replace("_"," ")} (${f} turn${M}).`;$d(i,g.hazardChance,p,h),kd(a,g)&&_e("Contraband inspection triggered on arrival.");const E=Math.max(5,Math.round(i.distance*2+g.hazardChance*75+(g.routeType==="wild_jump"?10:0)));fe(E,"travel"),!Cd(a)&&(Td(a)||_d(t,a,g,k)||C.go("main",{message:k}))}function _d(e,t,n,a){const i=Y(),s=Math.max(0,(i.encounterChancePerJump??100)/100),o={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*s),routeType:n.routeType},d=Rd(t)??_r(o);return d?(_e(`Travel event triggered: ${d.name||d.id||"unknown"}`),d.type==="mining"?(_e(`Mining event surfaced: ${d.id}`),C.go("event",{eventId:d.id}),!0):!d.choices||d.choices.length===0?(_e(`Auto-resolving event: ${d.name||d.id||"unknown"}`),Ed(d,a)):(C.go("event",{eventId:d.id}),!0)):(C.go("main",{message:`${a} — Uneventful transit.`}),!0)}function Cd(e){const t=Y(),n=Math.max(0,t.maxEncountersPerDay??0);if(!Tn(n))return!1;const a=Kr({systemId:e.id,state:l,sessionFactor:1});if(Math.random()<=a){En();const i=`Pirates intercept you near ${e.name}!`;return l.notifications.push(i),_e(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),ed(e.id),!0}return!1}function Td(e){const t=Y(),n=Math.max(0,t.maxEncountersPerDay??0);if(!Tn(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const i=Math.max(0,(t.encounterChancePerJump??100)/100),s=e.security==="high"?1.15:e.security==="low"?.65:1,o=ne(),d=Qi(e),{detectionReduction:u,fineDiscount:p}=un(),m=d?1+Math.min(1.2,d.totalUnits*.02):1,h=Math.max(.6,m*Math.max(0,1-p*.8)),b=Math.max(0,o.scanDetectionMultiplier??1)/Math.max(.5,o.illegalTolerance??1),g=a*i*s*h*b,$=Math.min(1,Math.max(0,g*Math.max(0,1-u*.6)));if(Math.random()<=$){En();const T=`Patrol intercepts you near ${e.name}!`;return l.notifications.push(T),_e(`Patrol encounter triggered near ${e.name} (chance ${$.toFixed(3)})`),Ie("navy_interceptor"),!0}return!1}function Ed(e,t){const n=Tr(e);if(n.triggerCombat?.enemyId){const a=Y(),i=Math.max(0,a.maxEncountersPerDay??0);if(!Tn(i))return C.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;En();const s=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return _e(s),Ie(n.triggerCombat.enemyId),!0}return C.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const Id={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function Rd(e){const t=Pd(e);return t?fn(t)??null:null}function Pd(e){const t=[],n=new Set(e.tags||[]),a=o=>{t.includes(o)||t.push(o)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(Id[e.id]??"mining_fragment_field"),["wildspace","anomaly","mining"].some(o=>n.has(o))&&a("mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),Math.random()<.18&&!t.includes("mining_fragment_field")&&a("mining_fragment_field"),t.length?t[Math.floor(Math.random()*t.length)]:null}function Ze(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}const es=sn;function ts(e,t){e.player&&(e.player.notifications=e.player.notifications??[],e.player.notifications.push(t),console.debug("Notification added:",t))}const Ad=es.perks??{};function Dd(){const e={},t=es.xpTracks??{};for(const[n,a]of Object.entries(t)){const i=a.rewardsByLevel??{};for(const[s,o]of Object.entries(i)){const d=Number(s);if(!Number.isNaN(d))for(const u of o)u?.type==="perkUnlock"&&u.perkId&&(u.perkId in e||(e[u.perkId]={trackId:n,level:d}))}}return e}Dd();function ns(e){return Ad[e]??null}function as(e){return e.player?.perks??[]}function Bd(e,t){if(!t.length)return!0;const n=new Set(as(e));return t.every(a=>n.has(a))}function Nd(e,t){if(!e.player||!t||e.player.perks.includes(t))return!1;const n=ns(t);return!n||!Bd(e,n.requires??[])?!1:(e.player.perks.push(t),console.debug("Perk unlocked",t),ts(e,`Perk unlocked: ${n.displayName}`),Fd(e),!0)}function Ld(e,t){return!e.player||!jd(e,1,`Unlock ${t}`)?!1:Nd(e,t)?!0:(e.player.perkPoints+=1,!1)}function Fd(e){if(!e.player)return{};const t={};for(const n of as(e)){const a=ns(n);if(a?.effects?.length)for(const i of a.effects){const s=`${i.target}.${i.stat}`,o=t[s]??{multiplier:1,flat:0};switch(i.operation){case"mul":o.multiplier*=i.value;break;case"addPercent":o.multiplier*=1+i.value;break;case"add":case"addFlat":o.flat+=i.value;break}t[s]=o}}return e.player.perkEffects=t,console.debug("Perk effects recalculated",Object.keys(t).length),t}function jd(e,t=1,n){return!e.player||t<=0||e.player.perkPoints<t?!1:(e.player.perkPoints-=t,console.debug("Perk points spent",t,n),ts(e,n?`Perk points spent: ${n}`:`Perk points spent: ${t}`),!0)}function is(e){return Ga(e.player.xpTracks??{}).map(n=>{const a=n.xpNeededForNextLevel,i=a&&a>0?Math.min(100,Math.round(n.xpIntoLevel/a*100)):100;return{id:n.track.id,displayName:n.track.displayName,level:n.level,xpIntoLevel:n.xpIntoLevel,xpNeeded:a,percent:i,type:n.track.type}})}function ss(e){const t=Do();return Object.entries(t).map(([n,a])=>({branch:n,entries:a.map(i=>({id:i.id,displayName:i.displayName,description:i.description,tier:i.tier,branch:i.branch,unlocked:i.unlocked,source:i.source,hasRequirements:i.requires.length>0,requires:i.requires,effectTargets:i.effectTargets}))}))}function Hd(e){const t=new Set(e.player.perks??[]),n=ss(),a=[];for(const i of n){const s=i.entries.filter(o=>!o.unlocked).filter(o=>o.requires.every(d=>t.has(d))).sort((o,d)=>o.tier-d.tier);s.length&&a.push({id:s[0].id,displayName:s[0].displayName,branch:i.branch,tier:s[0].tier,description:s[0].description,requires:s[0].requires})}return a}function os(e,t=5){return(e.player.notifications||[]).slice(-t).reverse()}window.nav=(e,t={})=>{C.go(e,t)};window.toggleTools=()=>{const e=document.getElementById("toolsActions"),t=document.getElementById("toolsToggleBtn");if(!e||!t)return;const n=e.classList.toggle("collapsed");t.textContent=n?"Show":"Hide"};window.startMiningSessionFromMain=()=>{const e=l.location.systemId,t=Z(e);if(!t)return;const n="global_easy_signal_belt",a=Array.isArray(t.tags)&&t.tags.includes("mining_belt");Be(l,e,a?void 0:n,void 0,{easySignals:!0})?C.go("mining"):C.go("main",{message:"Travel to a new system before mining again."})};window.unlockPerkAction=e=>{Ld(l,e)?C.go("main",{message:"Perk unlocked!"}):(console.warn(`Failed to unlock perk ${e}`),C.go("main",{message:"Unable to unlock perk (requirements or points missing)."}))};window.saveGameState=()=>{Ds(),C.go("main",{message:"Game saved."})};window.loadGameState=()=>{Ns()?C.go("main",{message:"Game loaded."}):C.go("main",{message:"No saved game found."})};function Od(){const e=l,t=Z(e.location.systemId),n=(()=>{const p=(t?.description??"Unknown space").trim(),m=p.split(".")[0];return m===p?p:`${m}.`})(),a=Object.values(e.ship.cargo||{}).reduce((p,m)=>p+m,0),i=is(e),s=i.length>0?i.map(({displayName:p,level:m,percent:h,xpIntoLevel:b,xpNeeded:g})=>`
              <div class="xp-track-row">
                <div class="xp-track-row-header">
                  <span class="xp-track-title">${p}</span>
                  <span class="xp-track-level">Level ${m}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(h,100)}%"></div>
                </div>
                <div class="xp-track-sub">
                  ${g!==null?`${b}/${g} XP`:`${b} XP (max)`}
                </div>
              </div>
            `).join(""):'<div class="xp-track-row muted">No XP tracked yet.</div>',o=os(e),d=o[0],u=o;return`
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
          ${s}
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
                  <strong>Day ${e.time.day} · Turn ${Ze(e.time.turn)}</strong>
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
          ${gt(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
                Show
              </button>
            </div>
            <div class="menu-group__actions collapsed" id="toolsActions">
              <button class="btn btn-ghost btn-small btn-inconspicuous" id="navDev">Dev</button>
              <button class="btn btn-ghost btn-small btn-inconspicuous" onclick="saveGameState()">Save Game</button>
              <button class="btn btn-ghost btn-small btn-inconspicuous" onclick="loadGameState()">Load Game</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `}window.attackPirateBase=e=>{const t=qd(e);if(!t){console.warn(`Unknown base ${e}`);return}C.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function qd(e){return _?_.basesById[e]??null:null}function Ud(e){return _?Object.values(_.basesById).find(n=>n.systemId===e)??null:null}function zd(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}const ra={pirate:"Sensors pick up razor-thin kinematic volleys—expect raiders and brawlers that favor heavy hull breaks.",raider:"Raiders pressure forward with kinetic + explosive clusters. Keep shields topped and aim for front rows.",ghost:"Ghost Fleet whispers with disruptives—jam vs. shields, then focus on energy weapons.",corsair:"Corsairs hang back with energy/lance beams. Strike their hulls quickly or they will melt your shields."};function Gd(e){for(const t of e)if(ra[t])return ra[t];return""}window.setMapZoom=e=>{C.setZoom(e)};window.focusRoute=e=>{C.go("travel",{...C.params,focusTargetId:e})};function Wd(){const e=xt(),t=wd(),n=C.zoom||"local",a=typeof C.params.focusTargetId=="string"?C.params.focusTargetId:"",i=C.activeRoute,s=i?.nodes[i.currentIndex+1],o=i&&i.nodes.length>1?i.nodes.map(k=>Z(k)?.name??k).join(" → "):"",d=Object.values(l.ship.cargo||{}).reduce((k,y)=>k+y,0),u=t.map(({profile:k})=>k.hazardChance).reduce((k,y)=>Math.max(k,y),0),p=Math.round((u||0)*100),m=l.player.credits,h=l.player.wanted,b=`
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
        ${b}
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
    `;const g=e?Ud(e.id):null,$=zd(g),T=Gd(e.tags||[]),I=T?`<div class="panel-card intel-hint">${T}</div>`:"",v=g?`
      <div class="panel-card">
        <p class="label">${$}</p>
        <p class="muted">${g.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${g.id}')">
          Attack Pirate Base (Tier ${g.tier})
        </button>
      </div>
    `:"",f=e?Zd(e,t,n,a,i):"",M=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:k,route:y,profile:E})=>{const w=k.id===a,D=k.id===s,P=Vd(k.security),A=Yd(k),q=Jd(E.hazardChance),L=`${E.fuelCost} fuel`,j=`${E.travelTime} turn${E.travelTime===1?"":"s"}`,z=Kd(y.laneType),U=`Distance: ${y.distance}`,Q=A.join(" | "),X=["travel-row"];return(w||D)&&X.push("travel-row--focused"),`
              <article class="${X.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${k.name}</span>
                  <span class="travel-row__label">${P}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${z}</span>
                    <span>${U}</span>
                  </div>
                  <span class="travel-row__label">${L} | ${j} | Risk: ${q}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${k.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${k.id}')">Jump to ${k.name}</button>
                </div>
                <span class="travel-row__label">${Q}</span>
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

      ${b}

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Travel</h1>
          <p class="muted">${e.description}</p>
          ${I}
          <div class="travel-list">
            ${M}
          </div>
          <div class="panel-card">
            <div class="travel-zoom-toggle">
              <span class="label">Map View</span>
              <div class="zoom-toggle__pills">
                <button class="btn btn-pill ${n==="local"?"btn-pill--active":""}" onclick="window.setMapZoom('local')">Local</button>
                <button class="btn btn-pill ${n==="sector"?"btn-pill--active":""}" onclick="window.setMapZoom('sector')">Sector</button>
              </div>
            </div>
            ${f}
            ${o?`<p class="muted">Active route: ${o}</p>`:""}
            <div class="panel-card">
              <p class="label">Map Labels</p>
              <p class="muted">
                Each icon shows the system name; tap “Focus route” to zoom to that destination.
              </p>
              <ul class="label-list">
                ${t.map(({system:k,profile:y})=>`<li>${k.name} — ${y.travelTime} turn${y.travelTime===1?"":"s"} / ${y.fuelCost} fuel</li>`).join("")}
              </ul>
            </div>
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${v}
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
  `}function Vd(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function Yd(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(Xd)}function Xd(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function Jd(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function Kd(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function Zd(e,t,n,a,i){if(!e)return'<p class="muted">Map data unavailable.</p>';const s=320,o=200,d=16,u=36,p=8,m=8,h=pt(),b=h&&a?Zt(h,e.id,a):[],g=i?.nodes??[],$=new Set([e.id]);a&&$.add(a),(h?Kt(h,e.id):t.map(({system:S})=>S.id)).forEach(S=>$.add(S)),g.forEach(S=>$.add(S)),b.forEach(S=>$.add(S));const I=S=>S.laneType==="core_lane"?"core":S.laneType==="frontier_lane"?"frontier":"wild",v=h?_s(h,e.id,n):null,f=[],M=[];if(h&&v){const S=new Map(h.nodes.map(R=>[R.id,R])),B=new Set(v.keys());v.forEach((R,G)=>{const ie=S.get(G);ie&&f.push({...ie,depth:R})}),h.lanes.filter(R=>B.has(R.from)&&B.has(R.to)).forEach(R=>{const G=Math.max(v.get(R.from)??0,v.get(R.to)??0);M.push({...R,depth:G})})}else{const S=new Set;f.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),S.add(e.id),t.forEach(({system:B,route:R})=>{S.has(B.id)||(f.push({id:B.id,name:B.name,x:B.coords?.x??0,y:B.coords?.y??0,tags:B.tags??[],depth:1}),S.add(B.id),M.push({from:e.id,to:B.id,type:I(R),distance:R.distance,depth:1}))})}if(!f.length)return'<p class="muted">No coordinate data to render.</p>';const k=f.map(S=>S.x),y=f.map(S=>S.y),E=Math.min(...k),w=Math.max(...k),D=Math.min(...y),P=Math.max(...y),A=w-E||1,q=P-D||1,L=S=>d+(S-E)/A*(s-d*2),j=S=>o-(d+(S-D)/q*(o-d*2)),z=new Map(f.map(S=>[S.id,{...S,sx:L(S.x),sy:j(S.y)}])),U=new Set(f.map(S=>S.id)),Q=new Set(g);b.forEach(S=>Q.add(S)),!h&&a&&Q.add(a);const X=new Set,pe=S=>{for(let B=0;B<S.length-1;B++)X.add(at(S[B],S[B+1]))};pe(g),b.length?pe(b):a&&X.add(at(e.id,a));const O=M.filter(S=>U.has(S.from)&&U.has(S.to)).map(S=>{const B=z.get(S.from),R=z.get(S.to);if(!B||!R)return"";const G=at(S.from,S.to),ie=S.depth??Math.max(B.depth??0,R.depth??0),ye=X.has(G),ce=ye?3.2:ie<=1?2.2:1.2,Qe=ye?1:ie<=1?.9:.35;return`<line x1="${B.sx.toFixed(1)}" y1="${B.sy.toFixed(1)}" x2="${R.sx.toFixed(1)}" y2="${R.sy.toFixed(1)}" stroke="${Qd(S.type)}" stroke-width="${ce}" stroke-linecap="round" opacity="${Qe}"></line>`}).join(""),V=Array.from(z.values()).map(S=>{const B=S.id===e.id,G=(S.depth??0)<=1,ie=Q.has(S.id),ye=B?7:ie?6:G?5:3.5,ce=B?"#4CE6C3":ie?"#7dd3fc":"#ffffff",Qe=ie||G?1:.45,et=$.has(S.id),kt=S.name.length>16?`${S.name.slice(0,14)}...`:S.name,$t=et?kt:"";return`
        <g>
          <circle
            cx="${S.sx.toFixed(1)}"
            cy="${S.sy.toFixed(1)}"
            r="${ye}"
            fill="${ce}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${Qe}"
          ></circle>
          ${et?`<text x="${(S.sx+p).toFixed(1)}" y="${(S.sy-m).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${$t}</text>`:""}
        </g>
      `}).join("");return`
    <div class="travel-map" style="max-width:${s}px;margin:0 auto;">
      <svg
        width="${s}"
        height="${o}"
        viewBox="-${u} -${u} ${s+u*2} ${o+u*2}"
        role="img"
        aria-label="${n==="local"?"Local":"Sector"} system map"
      >
        ${O}
        ${V}
      </svg>
    </div>
  `}function Qd(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const rs={high:"^",low:"v",stable:"-"};function eu(e={}){const t=Z(l.location.systemId);if(!t)return`
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
    `;const n=ti();if(!n.length)return`
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
    `;const a=Object.values(l.ship.cargo||{}).reduce((f,M)=>f+M,0),i=Object.entries(l.ship.cargo||{}).filter(([,f])=>f>0).sort((f,M)=>M[1]-f[1]).slice(0,5),s=new Map;ke().filter(f=>f.status==="active").forEach(f=>{const M=f.requirements?.deliver;if(!M?.commodityId)return;const k=s.get(M.commodityId)??{needed:0,deliverable:!1},y=ct(M.commodityId)>=(M.quantity||0),E=!M.systemId||M.systemId===l.location.systemId;s.set(M.commodityId,{needed:k.needed+(M.quantity||0),deliverable:k.deliverable||E&&y})});const o=n.map(f=>{const M=ae(t.id,f.id),k=du(f.tradeTags?.length?f.tradeTags:f.tags),y=ct(f.id),E=uu(f,y),w=cs(M.buy,a,f.id);return{commodity:f,quote:M,tags:k,cargoQty:y,metaLine:E,maxBuyable:w,profit:M.sell-M.buy}}),d=o.reduce((f,M)=>M.profit>f.profit?{profit:M.profit,entry:M}:f,{profit:Number.NEGATIVE_INFINITY,entry:o[0]}),u=d.entry?.commodity.id??"",p=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,m=o.find(f=>f.commodity.id===p)||o.find(f=>f.commodity.id===u)||o[0],h=o.reduce((f,M)=>{const k=M.quote.high-M.quote.buy;return k>f.delta?{delta:k,entry:M}:f},{delta:-1/0,entry:o[0]}).entry,b=o.reduce((f,M)=>{const k=M.quote.buy-M.quote.low;return k>f.delta?{delta:k,entry:M}:f},{delta:-1/0,entry:o[0]}).entry,g=["legal","restricted","illegal"];let $=0;const T=g.map(f=>{const M=o.filter(w=>ca(w.commodity.legalStatus)===f);if(!M.length)return"";const k=Yt(f),y=`
        <div class="market-group__header">
          <div>
            <p class="market-group__label">${k} goods</p>
            <p class="muted market-group__count">${M.length} items</p>
          </div>
          <span class="market-status market-status--${f}">${k}</span>
        </div>
      `,E=M.map(w=>{const{commodity:D,quote:P,tags:A,cargoQty:q}=w,L=m?.commodity.id===D.id,j=s.get(D.id),z=["market-row"];L&&z.push("market-row--highlight");const U=ca(D.legalStatus);z.push(`market-row--${U}`);const Q=j?`<span class="contract-pill contract-pill--target${j.deliverable?" ready":""}">${j.deliverable?"Deliver now":"Contract target"}</span>`:"",X=`<span class="market-row__status market-row__status--${U}">${Yt(U)}</span>`,pe=`${rs[P.trend]} ${P.trend}`,O=$++;return`
            <article class="${z.join(" ")}" style="--row-index:${O};" onclick="selectMarketCommodity('${D.id}')">
              <div class="market-row__main">
                <span class="market-row__name">${D.name}</span>
                <span class="market-row__info">
                  BUY ${P.buy} A | SELL ${P.sell} A | Held ${q}
                </span>
              </div>
              <div class="market-row__meta">
                <span class="market-row__trend">${pe}</span>
                <div class="market-row__meta-line">
                  <span>${A||"Local goods"}</span>
                  ${X}
                  ${Q}
                </div>
              </div>
            </article>
            ${L?tu(w,t.id):""}
          `}).join("");return`
        <section class="market-group">
          ${y}
          ${E}
        </section>
      `}).join(""),I=a>0,v=`
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
          <strong>${Ze(l.time.turn)}</strong>
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
        Credits: ${l.player.credits} | Cargo: ${nu()}
      </p>
      <div class="market-summary__cargo">
        ${i.length?i.map(([f,M])=>{const k=oe(f),y=k?.mass??0,E=y?` (Mass ${Math.round(y*M)})`:"";return`<span>${M} × ${k?.name||f}${E}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${I?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `;return`
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
            ${v}
    ${au(t.id)}
          </aside>
          <div class="market-list">
            <h2 class="panel-title small">Goods</h2>
          ${T}
          </div>
        </section>
        <section class="market-priority">
          <h2 class="panel-title small">Priority Paths</h2>
          ${ou()}
        </section>
        <section class="market-footer">
          ${iu(t,h,b,d.entry)}
        </section>
        ${cu(o)}
      </main>

        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
          <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
          <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `}function tu(e,t){const n=li(t,e.commodity.id,1),a=di(t,e.commodity.id,1),i=n?"":" disabled",s=n&&e.maxBuyable>1?"":" disabled",o=a&&e.cargoQty>0?"":" disabled";return`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${e.commodity.name}</strong>
        <span class="market-row__trend">${rs[e.quote.trend]} ${e.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${e.quote.buy} · SELL ${e.quote.sell}</span>
        <span>${e.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${i}
          onclick="buyCommodityAction('${e.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${s}
          onclick="buyAllCommodityAction('${e.commodity.id}', ${e.quote.buy})"
        >
          Buy Max (${e.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${o}
          onclick="sellCommodityAction('${e.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${o}
          onclick="sellAllCommodityAction('${e.commodity.id}')"
        >
          Sell All (${e.cargoQty})
        </button>
      </div>
    </div>
  `}function nu(){const e=l.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${l.ship.cargoCapacity}`}function au(e){const t=xr(e);return t.length?`
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
    `}function iu(e,t,n,a){const i=ri(),s=ci(),o=new Set((e?.neighbors??[]).map(v=>v.id)),d=e?.neighbors.map(v=>Z(v.id)).filter(v=>!!v&&i[v.id]&&o.has(v.id))||[],u=e?.id&&d.length?d.flatMap(v=>{const f=i[v.id];return f?Object.entries(f.prices).map(([M,k])=>{const y=ae(e.id,M);if(y.sell<=0||k.sell<=y.sell)return null;const E=(k.sell-y.sell)/y.sell*100;return{neighborName:v.name,name:oe(M)?.name??M,neighborSell:k.sell,localSell:y.sell,percent:E}}).filter(M=>!!M):[]}).sort((v,f)=>f.percent-v.percent).slice(0,4):[],p=u.length>0?u.map(v=>`<p class="insight-mini">
                <strong>${v.name}</strong> (${v.neighborName}) sells ${v.neighborSell} vs local ${v.localSell} (+${v.percent.toFixed(1)}%)
              </p>`).join(""):'<p class="insight-mini muted">No neighbor sells exceed your local sell price right now.</p>',m=d.length>0?d.map(v=>{const f=lu(e?.id,v.id),M=l.time.turn-(i[v.id]?.turn??l.time.turn),k=f.over?`${f.over.id} overpriced (+${Math.round(f.over.delta*100)}%)`:"no overpay signal",y=f.under?`${f.under.id} underpriced (${Math.round(f.under.delta*100)}% cheaper)`:"no bargain yet";return`<p class="insight-mini">${v.name}: ↑ ${k} · ↓ ${y} (age ${M}t)</p>`}).join(""):'<p class="insight-mini muted">No neighbor intel yet.</p>',h=[];t&&h.push(`<span>📈</span> ${t.commodity.name} high runs ${Math.round(t.quote.high-t.quote.buy)} above buy (${t.quote.high})`),n&&h.push(`<span>📉</span> ${n.commodity.name} low sits ${Math.round(n.quote.buy-n.quote.low)} below buy (${n.quote.low})`);const b=h.length?h.map(v=>`<p class="insight-mini">${v}</p>`).join(""):'<p class="insight-mini muted">No strong pulses yet.</p>',g=a?`<p class="insight-mini"><span>💡</span> Consider ${a.commodity.name}. Buy @ ${a.quote.buy} A·, sell @ ${a.quote.high} A· (high).</p><p class="insight-mini muted">Profit spread: +${a.profit}</p>`:'<p class="insight-mini muted">No hot tip available.</p>',$=l.notifications.filter(v=>{const f=v.toLowerCase();return f.includes("market")||f.startsWith("bought")||f.startsWith("sold")}).slice(-6).reverse(),T=$.length?$.map(v=>`<p class="insight-mini">${v}</p>`).join(""):'<p class="insight-mini muted">No market-relevant log entries yet.</p>',I=(v,f)=>`<p class="insight-title"><span class="insight-icon" aria-hidden="true">${v}</span>${f}</p>`;return`
    <div class="panel-card market-insights-card">
      <p class="label">Market Insights</p>
      <div class="insight-section">
        ${I("🛰️","Intel Tools")}
        <p class="insight-mini muted">System: ${e?.name||"Unknown"}</p>
        <p class="insight-mini">Neighbor Intel ${s} cr — highlights over/under priced goods (actuals drift on arrival).</p>
        <div class="insight-list">
          ${m}
        </div>
        <div class="app-actions">
          <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${s})</button>
        </div>
        <div class="insight-mini goods-list">
          <p class="insight-mini muted">Neighbors selling above your current sell price:</p>
          ${p}
        </div>
      </div>
      <div class="insight-section">
        ${I("📈","Trending")}
        ${b}
      </div>
      <div class="insight-section">
        ${I("💡","Hot Tip")}
        ${g}
      </div>
      <div class="insight-section">
        ${I("📝","Market Log")}
        ${T}
      </div>
    </div>
  `}const su=["taxEvasion","smuggling","bribery"];function ou(){return`
    <div class="panel-card strategy-panel">
      <p class="label">Profit Paths</p>
      <div class="strategy-panel__cards">
        ${su.map(t=>ru(t)).join("")}
      </div>
    </div>
  `}function ru(e){const t=Za(e),n=Math.round(nr(e)),a=`${n}%`;return`
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
  `}function cu(e){if(!e.length)return"";const t=e.map(h=>({label:h.commodity.name,value:h.quote.high})),n=e.map(h=>({label:h.commodity.name,value:h.quote.low})),a=Math.max(...t.map(h=>h.value)),i=Math.min(...n.map(h=>h.value)),s=Math.max(1,a-i),o=280,d=120,u=t.map((h,b)=>{const g=b/Math.max(1,t.length-1)*o,$=d-h.value/a*d;return`${g},${$}`}).join(" "),p=n.map((h,b)=>{const g=b/Math.max(1,n.length-1)*o,$=d-(h.value-i)/s*d;return`${g},${$}`}).join(" "),m=t.slice(0,6).map(h=>`<div class="trend-line">
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
`}function lu(e,t){if(!e)return{over:null,under:null};const a=ri()[t];if(!a)return{over:null,under:null};let i=null,s=null;const o=Math.max(0,l.time.turn-a.turn),d=Math.max(.5,1-o*.05);for(const[u,p]of Object.entries(a.prices)){const m=ae(e,u);if(m.sell>0&&p.buy>m.sell){const h=(p.buy-m.sell)/m.sell*d;(!i||h>i.delta)&&(i={id:u,delta:h})}if(m.buy>0&&p.sell<m.buy){const h=(m.buy-p.sell)/m.buy*d;(!s||h>s.delta)&&(s={id:u,delta:h})}}return{over:i,under:s}}function cs(e,t,n){if(e<=0)return 0;const a=Math.floor(l.player.credits/e),i=Math.max(0,l.ship.cargoCapacity-t);return Math.max(0,Math.min(a,i))}function du(e){return e?.length?Array.from(new Set(e)).map(n=>In(n.replace(/_/g," "))).join(" | "):""}function uu(e,t){const n=In(e.tier||"standard"),a=Yt(e.legalStatus||"legal"),i=typeof e.mass=="number"?`${e.mass}t`:null,s=[`Held ${t}`,`Tier ${n}`,a];return i&&s.push(`Mass ${i}`),s.join(" | ")}function In(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Yt(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??In(e)}function ca(e){return e==="restricted"||e==="illegal"?e:"legal"}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=l.location.systemId,n=oe(e),a=ui(t,e,1),i=ae(t,e).buy,s=document.getElementById("market-message");s&&(s.textContent=a?`Bought 1 ${n?.name||e} for ${i} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=l.location.systemId,n=oe(e),a=mn(t,e,1),i=ae(t,e).sell,s=document.getElementById("market-message");s&&(s.textContent=a?`Sold 1 ${n?.name||e} for ${i} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=l.location.systemId,a=l.ship.cargo||{},i=Object.values(a).reduce((u,p)=>u+p,0),s=cs(t,i);if(s<=0){nav("market");return}ui(n,e,s);const o=oe(e),d=document.getElementById("market-message");d&&(d.textContent=`Bought ${s} ${o?.name||e} for ${t*s} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=l.location.systemId,n=ct(e);if(n<=0){nav("market");return}const a=ae(t,e).sell;mn(t,e,n);const i=oe(e),s=document.getElementById("market-message");s&&(s.textContent=`Sold ${n} ${i?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=l.location.systemId,t=Object.entries(l.ship.cargo||{});let n=0;const a=[];for(const[s,o]of t){if(!o||!mn(e,s,o))continue;n+=o;const u=oe(s);a.push(`${o} ${u?.name||s}`)}const i=document.getElementById("market-message");if(i)if(!n)i.textContent="No cargo available to sell.";else{const s=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");i.textContent=`Sold ${n} cargo units (${s}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=$r(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};window.pursueTradeStrategy=e=>{const t=Za(e),n=ir(e),a=document.getElementById("market-message");a&&(a.textContent=n?`Invested in ${t.name}.`:`Need ${t.cost} credits to unlock ${t.name}.`),nav("market")};function pu(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function mu(e={}){const t=typeof e.message=="string"?e.message:"",n=ke(),a=jo(),i=Object.values(l.ship.cargo||{}).reduce((v,f)=>v+f,0),o=pu(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),d=a.find(v=>v.id===o)??a[0],u=d?Pt(d):void 0,p=Rt(u),m=d?`${d.name}${p?` · ${p}`:""}`:"",h=gu(n.length,a.length,m),b=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(v=>{v.requirements;const f=Pt(v),M=da(v),k=ua(v.reward),y=hu(f),E=Rt(f),w=Z(f??""),D=w?.region?`Region: ${He(w.region)}`:"",P=w?.tags?.length>0?`Keywords: ${w.tags.map(A=>He(A)).join(", ")}`:"";return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${v.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${v.name}</span>
                    <span class="contract-type">${v.type}</span>
                  </div>
                  ${v.description?`<p class="muted">${v.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${Ho(v)}</span>
                    <span>${Oo(v)}</span>
                  </div>
                  ${M?`<div class="contract-row__flavor">${M}</div>`:""}
                  <div class="contract-row__info">
                    <span>System: ${y}${E?` - ${E}`:""}</span>
                    ${D?`<span>${D}</span>`:""}
                    ${P?`<span>${P}</span>`:""}
                    ${f?`<button class="btn btn-ghost btn-small" onclick="event.stopPropagation(); focusContractTravel('${f}')">Travel here</button>`:""}
                  </div>
                  <div class="contract-row__badges">${k}</div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',g=o?[o]:a[0]?[a[0].id]:[],$=a.reduce((v,f)=>{const k=Pt(f)??"unknown",y=v.get(k)??[];return y.push(f),v.set(k,y),v},new Map),T=(v,f)=>{if(!f.length)return"";const M=Z(v),k=M?.region?`Region: ${He(M.region)}`:"",y=M?.tags?.length?`Keywords: ${M.tags.map(w=>He(w)).join(", ")}`:"",E=M?M.name:"Unknown Region";return`
      <div class="contract-list contract-section">
        <h3 class="panel-title tiny">${E}</h3>
              ${f.map(w=>{const D=["contract-row"];g.includes(w.id)&&D.push("contract-row--active");const P=Rt(v),A=da(w),q=ua(w.reward);return`
                    <article class="${D.join(" ")}" onclick="acceptContract('${w.id}')">
                      <div class="contract-row__main">
                        <span class="contract-row__name">${w.name}</span>
                        <span class="contract-type">${w.type}</span>
                      </div>
                      <p class="muted">${w.description}</p>
                      <div class="contract-row__info">
                        <span>System: ${E}${P?` - ${P}`:""}</span>
                        ${k?`<span>${k}</span>`:""}
                        ${y?`<span>${y}</span>`:""}
                        <span>Reward: ${fu(w.reward)}</span>
                      </div>
                      ${A?`<div class="contract-row__flavor">${A}</div>`:""}
                      <div class="contract-row__badges">${q}</div>
                    </article>
                  `}).join("")}
      </div>
    `},I=$.size?Array.from($.entries()).map(([v,f])=>T(v,f)).join(""):'<p class="muted">No available missions.</p>';return`
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
          <span class="stat-value">${i}/${l.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${l.player.wanted}</span>
        </div>
      </section>

      <div class="contract-ticker">${h}</div>

      <main class="app-main">
        <section class="data-panel contract-section">
          <h1 class="panel-title">Contracts</h1>
          ${t?`<p class="muted">${t}</p>`:""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${b}</div>
          <h2 class="panel-title">Available</h2>
          <div class="panel-row">
            ${I}
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
  `}function hu(e){if(!e)return"Unknown";const t=Z(e);return t?.name?`<strong>${t.name}</strong>`:e}function Rt(e){if(!e)return"";const t=pt();if(!t)return"";const n=Cs(t,l.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function fu(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,i])=>`${a} ${i>0?"+":""}${i}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=K(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}function He(e){return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}const la={delivery:"Cargo confidence",travel:"Navigation run",combat:"High-alert strike",patrol:"Perimeter sweep",escort:"Trusted escort",story:"Story beat",collection:"Scavenger hunt",clue:"Signal chase",exploration:"Chart the unknown",mining:"Ore haul",default:"Field work"};function da(e){const t=e.requirements,n=[];if(t?.failureAfterTurns){const i=t.failureAfterTurns;n.push(`${i} turn${i===1?"":"s"} left`)}t?.combat&&n.push("Combat ready"),t?.deliver&&n.push("Cargo run"),t?.multiTravel&&Array.isArray(t.multiTravel)&&t.multiTravel.length>1&&n.push("Multi-hop sweep");const a=la[e.type??""]??la.default;return n.length?`${n.join(" · ")} · ${a}`:a}function ua(e){if(!e)return'<span class="reward-badge reward-badge--none">No extra rewards</span>';const t=[];if(typeof e.credits=="number"){const n=`${e.credits.toLocaleString()} credits`;t.push(`<span class="reward-badge reward-badge--credits">${n}</span>`)}if(e.rep&&Object.entries(e.rep).forEach(([n,a])=>{const i=a>=0?"+":"";t.push(`<span class="reward-badge reward-badge--rep">${He(n)} ${i}${a}</span>`)}),e.weapon){const n=K(e.weapon)?.name||e.weapon;t.push(`<span class="reward-badge reward-badge--weapon">${n}</span>`)}return t.length?t.join(""):'<span class="reward-badge reward-badge--none">No extra rewards</span>'}function gu(e,t,n){const a=[];return e?a.push(`${e} active mission${e===1?"":"s"}`):a.push("Board is calm"),t?a.push(`${t} fresh lead${t===1?"":"s"}`):a.push("No new leads"),n&&a.push(`Highlight: ${n}`),a.join(" · ")}function Pt(e){const t=e.requirements||{};if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.combat?.systemId)return t.combat.systemId;if(Array.isArray(t.multiTravel)&&t.multiTravel.length){const n=t.multiTravel[0];return typeof n=="string"?n:n?.systemId}if(e.description)return yu(e.description)}function yu(e){const t=pt();if(!t)return;const n=e.toLowerCase();for(const a of t.nodes)if(a.name&&n.includes(a.name.toLowerCase()))return a.id}window.acceptContract=e=>{const t=rn(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=Go(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};window.focusContractTravel=e=>{e&&nav("travel",{focusTargetId:e})};const vu={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Rn(e){return _?_.ships.find(t=>t.id===e)??null:null}function ls(){return Rn(l.ship.templateId)}function ds(){return _?_.ships.filter(e=>e.starter):[]}function bu(){return _?_.ships.filter(e=>!e.starter):[]}function Pn(e,t){const n=Rn(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),i=[],s={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((o,d)=>vu[`${o.size}:${o.type}`]??a[d]),passives:[],weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:i,hardpoints:n.hardpoints.map(o=>({...o})),passive:n.passive??null};l.ship=s,Ee(),tn()}function Mu(e){Pn(e),l.player.hasChosenStarter=!0}function wu(e){const t=Rn(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):l.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(l.player.credits-=t.cost,Pn(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}const us=.5;function xu(){const e=ls();if(!e)return console.warn("Cannot sell an unknown ship."),!1;const t=ds()[0];if(!t)return console.warn("No starter ship available to replace with after sale."),!1;const n=Math.floor((e.cost??0)*us);return l.player.credits+=n,Pn(t.id),!0}function ku(){const e=l.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=bn(l),i=Math.max(0,Math.round((t+n)*a.repair));if(l.player.credits<i){console.warn("Not enough credits to fully repair.");return}l.player.credits-=i,e.hp=e.maxHp,e.shields=e.maxShields}function $u(){const e=l.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(l.player.credits<a){console.warn("Not enough credits to fully refuel.");return}l.player.credits-=a,e.fuel=e.maxFuel}function An(e){if(!e||!e.length)return"No weapon slots installed.";const t=new Map;e.forEach(a=>{const i=`${a.size}:${a.type}`;t.set(i,(t.get(i)??0)+1)});const n=[];for(const[a,i]of t.entries()){const[s,o]=a.split(":");n.push(`${i}× ${s} ${o}`)}return n.join(" · ")}window.repairShipAction=()=>{ku(),nav("ship")};window.refuelShipAction=()=>{$u(),nav("ship")};window.sellWeaponAction=e=>{if(!bo(e)){console.warn(`Unable to sell weapon ${e}.`);return}nav("ship")};window.sellShipAction=()=>{if(!xu()){console.warn("Unable to sell the current ship.");return}nav("ship")};window.buyPassiveAction=e=>{if(!io(e)){console.warn(`Failed to purchase passive ${e}.`);return}nav("ship")};window.installPassiveAction=e=>{if(!so(e)){console.warn(`Unable to install passive ${e}.`);return}nav("ship")};window.sellPassiveAction=e=>{if(!oo(e)){console.warn(`Unable to sell passive ${e}.`);return}nav("ship")};function Su(){const e=l.ship,t=ls(),n=La(),a=Fa(),i=ao(),s=i.map(y=>Ae(y)).filter(y=>!!y),o=no(),d=t?.passiveSlots??0,u=a.length,p=new Set([...a.map(y=>y.id),...i]),m=l.combat?.playerCooldowns??[],h=Object.values(e.cargo||{}).reduce((y,E)=>y+E,0),b=l.player,g=b.credits,$=b.wanted,I=mt().map(y=>K(y)).filter(y=>!!y),v=Math.floor((t?.cost??0)*us),f=An(t?.hardpoints),M=t?`<p class="muted">${t.description}</p><p class="muted">Weapon slots: ${f}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,k=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(y=>`<li>${y.name} (+${y.value} ${y.effectType})</li>`).join("")}</ul>`;return`
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
            <strong>${g}</strong>
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
            <strong>${$}</strong>
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
          ${M}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${k}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${e.hardpoints.map((y,E)=>{const w=K(e.weapons[E]),D=w?.name||"Empty",P=m[E]??0,A=w?an(w):null,q=A?`
                    <p class="muted">Role: ${A.role} (${A.typeLabel})</p>
                    <p class="muted">Vs Shields: ${A.vsShields} · Vs Hull: ${A.vsHull}</p>
                    ${A.tagNotes.length?`<p class="muted">Traits: ${A.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${E+1} · ${y.size} ${y.type}</p>
                    <p class="value-inline">${D}</p>
                    <p class="muted">${P>0?`${P} turn${P===1?"":"s"} left`:"Ready"}</p>
                    ${q}
                  </div>
                `}).join("")||'<div class="panel-card"><p class="muted">No hardpoints installed.</p></div>'}
          </div>
          <button class="btn btn-primary" onclick="nav('weapon_slots')">Manage Weapons</button>

          <h2 class="panel-title">Weapon Inventory</h2>
          <div class="panel-row">
            ${I.length?I.map(y=>`
                      <div class="panel-card">
                        <p class="label">${y.type} / ${y.size}</p>
                        <p class="value-inline"><strong>${y.name}</strong></p>
                        <p class="muted">Cost ${y.price} cr | Sell ${Math.floor((y.price??0)*Oa)} cr</p>
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
              Sell your current hull for ${v} credits and revert to your starter ship.
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
                          <p class="muted">${At(y)||"Passive bonus"}</p>
                          <div class="app-actions">
                            <button class="btn btn-ghost" onclick="sellPassiveAction('${y.id}')">
                              Sell ${Math.floor((y.cost??0)*jt)}
                            </button>
                          </div>
                        </div>
                      `).join(""):`<div class="panel-card"><p class="muted">${d?"No passive systems installed yet.":"This hull has no passive slots."}</p></div>`}
          </div>

          <h2 class="panel-title">Passive Inventory (${s.length})</h2>
          <div class="panel-row">
            ${s.length?s.map(y=>`
                        <div class="panel-card">
                          <p class="label">${y.name}</p>
                          <p class="muted">${At(y)}</p>
                          <div class="app-actions">
                            <button
                              class="btn btn-primary${u>=d?" disabled":""}"
                              onclick="installPassiveAction('${y.id}')"
                            >
                              Install
                            </button>
                            <button class="btn btn-ghost" onclick="sellPassiveAction('${y.id}')">
                              Sell ${Math.floor((y.cost??0)*jt)}
                            </button>
                          </div>
                        </div>
                      `).join(""):'<div class="panel-card"><p class="muted">No passives in inventory.</p></div>'}
          </div>

          <h2 class="panel-title">Available Passive Systems</h2>
          <div class="panel-row">
            ${o.length?o.map(y=>{const E=y.cost??0,w=p.has(y.id),D=w||g<E,P=!i.includes(y.id)||u>=d;return`
                        <div class="panel-card">
                          <p class="label">${y.name}</p>
                          <p class="muted">${At(y)}</p>
                          <div class="app-actions">
                            <button class="btn btn-primary"${D?" disabled":""} onclick="buyPassiveAction('${y.id}')">
                              ${w?"Owned":`Buy (${E} cr)`}
                            </button>
                            <button class="btn btn-ghost"${P?" disabled":""} onclick="installPassiveAction('${y.id}')">
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
  `}function At(e){return e.effects&&Object.keys(e.effects).length?Object.entries(e.effects).map(([t,n])=>`${t} ${n}`).join(" | "):e.description||""}const pa={pirate:"Sensors report kinetic and explosive signatures—brace for hull rakes ahead.",disruptive:"Disruptive arcs detected; expect jammed systems if shields fall.",energy:"Energy harmonics in the signal mean shields will sponge the incoming fire.",ghost:"Ghost fleet scouts favor shield-cracking pulses; bring hull-focused damage."};function ma(e){if(!e)return"";for(const t of e)if(pa[t])return pa[t];return""}function _u(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=fn(t);if(!n)return`
      <div class="screen event">
        <h1>No Event</h1>
        <p>No events available here.</p>
      </div>
    `;if(n.type==="mining"){const s=ma(n.tags);return`
      <div class="screen event">
        <header class="event-header">
          <h1>${n.name}</h1>
          ${n.description?`<p class="event-description">${n.description}</p>`:""}
          ${s?`<p class="event-hint">${s}</p>`:""}
        </header>
        <p>Secure your mining rig and hope the pirates stay away.</p>
        <div class="screen-actions">
          <button onclick='beginMiningSession(${JSON.stringify(n.beltId??"")}, ${JSON.stringify(n.miningCommodityId??"")})'>Enter Mining Belt</button>
        </div>
      </div>
    `}const a=Cu(n.choices),i=ma(n.tags);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${Tu(n.type)}</p>
          ${n.description?`<p class="event-description">${n.description}</p>`:""}
          ${i?`<p class="event-hint">${i}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function Cu(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const i=n.description?`<p class="choice-desc">${n.description}</p>`:"",s=n.risk?`<span class="choice-risk">Risk: ${Eu(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${s}
          </div>
          ${i}
        </article>
      `}).join("")}</div>`}function Tu(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Eu(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=C.params,n=typeof t.eventId=="string"?t.eventId:"",a=fn(n);if(!a){nav("main");return}const i=a.choices?.[e];if(i){const s=Cr(i);if(s.triggerCombat?.enemyId){Ie(s.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${i?.label||a.name}`})};window.beginMiningSession=(e,t)=>{Be(l,l.location.systemId,e||void 0,t||void 0)?C.go("mining"):C.go("main",{message:"Travel to a new system before mining again."})};window.fireWeapon=(e,t="normal")=>{Ne("fire",e,t),l.combat&&nav("combat")};window.brace=()=>{Ne("brace"),l.combat&&nav("combat")};window.flee=()=>{Ne("flee"),l.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{Ne("fire_all",void 0,e),l.combat&&nav("combat")};window.activateModuleAbility=e=>{ad(e),l.combat&&nav("combat")};window.useComboFinish=()=>{Ne("combo_finish"),l.combat&&nav("combat")};window.selectEnemySlot=e=>{const t=l.combat;t&&(t.selectedEnemyId=e,nav("combat"))};window.useSpecialAction=e=>{Ne(e),l.combat&&nav("combat")};function Iu(e){return e?.nextIntent?.type?`⚡ ${e.nextIntent.type.replace(/_/g," ").replace(/\b\w/g,n=>n.toUpperCase())}`:"⚠ Unknown"}function Ru(e,t,n,a){const i=t??n,s=`LANE ${e+1}`,o=i?be(i.name):"Empty",d=i?`Hull ${i.hp}/${i.maxHp}`:"—",u=i?`Shield ${i.shields}/${i.maxShields}`:"—",p=i?Iu(i):"⚠ Unknown",m=i?.nextIntent?.description?` · ${be(i.nextIntent.description)}`:"",h=t?"Front":"—",b=n?"Back":"—",g=i?.id===a,$=i?.statusEffects&&i.statusEffects.length?i.statusEffects.map(I=>`<span class="lane-status-pill">${be(I.type)}</span>`).join(""):"",T=i?`onclick="selectEnemySlot('${i.id}')" role="button" tabindex="0"`:"";return`
    <article class="lane-card ${g?"is-selected":""}" ${T}>
      <header class="lane-card-header">
        <span class="lane-card-title">${s}</span>
      </header>
      <div class="lane-card-body">
        <span class="lane-card-name">${o}</span>
        <span class="lane-card-line">${d}</span>
        <span class="lane-card-line">${u}</span>
        <span class="lane-card-line lane-intent">Intent: ${p}${m}</span>
        <span class="lane-card-line lane-positions">${h} • ${b}</span>
        <div class="lane-card-statuses">
          ${$||'<span class="muted">No status</span>'}
        </div>
      </div>
    </article>
  `}function Pu(e,t){return e.playerActionCooldowns?.find(n=>n.actionId===t)?.remainingRounds??0}function Au(e,t){const n=e.specialActionId!==void 0?Pu(t,e.specialActionId):0,a=n===0,i=a?"":`<span class="action-cooldown">CD ${n}</span>`;return`
    <button
      type="button"
      class="combat-action-btn ${a?"":"is-disabled"}"
      title="${be(e.description)}"
      onclick="${e.action}"
      ${a?"":"disabled"}
    >
      <span class="action-bullet">•</span>
      <span>${e.label}</span>
      ${i}
    </button>
  `}function Dt(e,t,n){const a=t.map(i=>Au(i,n)).join("");return`
    <div class="action-column">
      <div class="action-column-title">${e}</div>
      <div class="action-column-body">
        ${a}
      </div>
    </div>
  `}function Du(e){switch(e){case"pull":return"bi bi-box-arrow-in-left";case"push":return"bi bi-box-arrow-up-right";case"shield":return"bi bi-shield-fill";case"channel":return"bi bi-lightning-charge-fill";default:return"bi bi-gear-fill"}}function Bt(e,t,n){const a=Math.min(100,Math.max(0,n));return`
    <div class="stat-row">
      <span class="stat-label">${e}</span>
      <div class="stat-meter">
        <div class="stat-meter-fill" style="width: ${a}%;"></div>
      </div>
      <span class="stat-value">${t}</span>
    </div>
  `}function Bu(e){const t=[];return e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function Nu(){const e=l.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=l.ship,n=e.log.map(V=>`<div class="log-line">${be(V)}</div>`).join(""),a=t.hp/Math.max(1,t.maxHp)<=.35,i=(e.log[e.log.length-1]||"").toLowerCase(),s=i.includes("hits you")||i.includes("damage"),o=["app-root","combat-root"];a&&o.push("low-hull"),s&&o.push("hit-flash");const u=e.encounter.enemies.filter(V=>V.alive).length,p=[0,1,2],m=e.selectedEnemyId,h=p.map(V=>{const S=e.encounter.enemies.find(R=>R.position.lane===V&&R.position.row==="front"&&R.alive),B=e.encounter.enemies.find(R=>R.position.lane===V&&R.position.row==="back"&&R.alive);return Ru(V,S,B,m)}).join(""),b=Math.round(t.hp/Math.max(1,t.maxHp)*100),g=t.maxShields?Math.round(t.shields/t.maxShields*100):0,$=t.evasion??0,T=Math.max(1,t.maneuverRating??$,$),I=Math.round($/T*100),f=Bu(e)||'<span class="muted">No active modifiers.</span>',M=e.comboMeter,k=M?.charge??0,y=100,E=Math.min(100,Math.round(k/y*100)),w=M?.ready?.label,D=w?`${w} ready`:"fill meter",P=nd(),A=P.length?P.map(({componentId:V,componentName:S,ability:B,ready:R})=>{const G=Du(B.type??"");return`
            <button
              class="module-icon ${R?"":"is-disabled"}"
              title="${be(S)}"
              onclick="activateModuleAbility('${V}')"
              ${R?"":"disabled"}
            >
              <i class="${G}"></i>
            </button>
          `}).join(""):'<span class="muted">No active modules.</span>',q=Dt("OFFENSE",[{label:"Adaptive Strike",action:"useSpecialAction('adaptive_strike')",description:"Deliver a steady volley across the battleline.",specialActionId:"adaptive_strike"},{label:"Shield Focus",action:"useSpecialAction('shield_focus')",description:"Hammer the shields before letting hulls bleed.",specialActionId:"shield_focus"},{label:"Hull Focus",action:"useSpecialAction('hull_focus')",description:"Zero in on weakened hulls with precision.",specialActionId:"hull_focus"}],e),L=Dt("DEFENSE",[{label:"Brace for Impact",action:"brace()",description:"Tighten hull armor against incoming fire"},{label:"Overcharge Shields",action:"useSpecialAction('overcharge_shields')",description:"Redirect power into shields at the cost of maneuver",specialActionId:"overcharge_shields"},{label:"Flee / Attempt Disengage",action:"flee()",description:"Try to escape the engagement"}],e),j=Dt("MANEUVER / TACTICS",[{label:"Boost Engines",action:"useSpecialAction('boost_engines')",description:"Gain temporary agility",specialActionId:"boost_engines"},{label:"Focus Fire",action:"useSpecialAction('focus_fire')",description:"Concentrate fire on one enemy",specialActionId:"focus_fire"},{label:"EMP Blast",action:"useSpecialAction('emp_blast')",description:"Jam enemy batteries",specialActionId:"emp_blast"},{label:"Signal Jam",action:"useSpecialAction('jam_enemy')",description:"Disrupt enemy communications",specialActionId:"jam_enemy"}],e),z=`
    <div class="action-column">
      <div class="action-column-title">MODULE SYSTEMS</div>
      <div class="module-icon-row">
        ${A}
      </div>
      <p class="module-hint">(Tap an icon for ability)</p>
    </div>
  `,U=`
    <div class="action-grid">
      ${q}
      ${L}
    </div>
    <div class="action-grid">
      ${j}
      ${z}
    </div>
    <p class="action-note">Tap any action → modal opens with full description.</p>
  `,Q=`${be(t.name??"Starship")}-Class Frigate`,X=Bt("HULL",`${t.hp}/${t.maxHp}`,b),pe=Bt("SHIELD",`${t.shields}/${t.maxShields}`,g),O=Bt("EVASION",`${$}/${T}`,I);return`
    <div class="${o.join(" ")}">
      <div class="combat-container">
        <section class="panel enemy-formation-panel">
          <div class="panel-heading">
            <span>ENEMY FORMATION</span>
            <span>${u} target${u===1?"":"s"}</span>
          </div>
          <div class="lane-grid">
            ${h}
          </div>
        </section>
        <section class="panel player-ship-panel">
          <div class="panel-heading">
            <span>PLAYER SHIP</span>
          </div>
          <div class="player-ship-identity">
            <span class="ship-icon">[${be(t.name)} Icon]</span>
            <span class="ship-label">${Q}</span>
          </div>
          <div class="player-stats">
            ${X}
            ${pe}
            ${O}
          </div>
          <div class="player-status">
            <strong>Status:</strong>
            <span class="status-values">${f}</span>
          </div>
          <div class="combo-meter">
            <span>COMBO METER: ${k}/${y}</span>
            <div class="combo-meter-bar">
              <div class="combo-meter-fill" style="width:${E}%;"></div>
            </div>
            <span class="combo-meter-hint">[${D}]</span>
          </div>
        </section>
        <section class="panel combat-action-panel">
          <div class="panel-heading">
            <span>ACTIONS (Unified System — No Stances)</span>
          </div>
          ${U}
        </section>
        <section class="combat-log">
          <h2 class="panel-title small">Combat Log</h2>
          <div class="app-log">
            ${n}
          </div>
        </section>
      </div>
    </div>
  `}function be(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}window.buyShipAction=e=>{wu(e)};window.buyComponentAction=e=>{ro(e)};window.buyWeaponAction=e=>{vo(e)};function Lu(){if(!gt(l.location.systemId,"shipyard"))return`
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
    `;const e=bu(),t=eo().filter(u=>u.slot!=="passive"),n=go(),a=mt().map(u=>K(u)?.name).filter(Boolean),i=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(u=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Lt("ship",u.id)}
                      <div>
                      <p class="label">${u.roleHint||"Multi-role"}</p>
                      <strong>${u.name}</strong>
                      <p class="muted">${u.description}</p>
                      <p class="muted">Weapon slots: ${An(u.hardpoints)}</p>
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
      `,s=t.length===0?'<p class="muted">No components in stock.</p>':`
        <div class="card-list">
          ${t.map(u=>{const p=[];if(typeof u.value=="number"&&u.effectType&&p.push(`+${u.value} ${u.effectType}`),u.effects)for(const[h,b]of Object.entries(u.effects)){if(typeof b!="number")continue;const g=Math.round((b-1)*100);switch(h){case"miningYield":p.push(`Mining yield ${g>=0?"+":""}${g}%`);break;case"miningSpeed":p.push(`Mining duration ${g>=0?"+":""}${g}%`);break;case"rareFindChance":p.push(`Rare finds ${g>=0?"+":""}${g}%`);break;case"miningPayoutMultiplier":p.push(`Mining payout ${g>=0?"+":""}${g}%`);break;case"sellBonus":p.push(`Sell bonus ${g>=0?"+":""}${g}%`);break;case"incomeMultiplier":p.push(`Income ${g>=0?"+":""}${g}%`);break;default:p.push(`${h} ${g>=0?"+":""}${g}%`)}}const m=p.length?p.join(" | "):"Utility module";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Lt("module",u.id)}
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
          ${n.map(u=>{const p=an(u),m=p.tagNotes.length?`Traits: ${p.tagNotes.join(", ")}`:"";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Lt("weapon",u.id)}
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
            ${i}
          </details>

          <details class="panel-card" open>
            <summary class="panel-title">Components & Upgrades (${t.length||0})</summary>
            ${s}
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
  `}const ha=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],fa=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],ga=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],ya=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function qe(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Fu(e){const t=qe(e)%ha.length;return ha[t]}function Dn(e){let t=qe(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function Nt(e,t=12){const n=Math.min(...e.map(m=>m.x)),a=Math.max(...e.map(m=>m.x)),i=Math.min(...e.map(m=>m.y)),s=Math.max(...e.map(m=>m.y)),o=a-n+1,d=s-i+1,u=Math.floor((t-o)/2)-n,p=Math.floor((t-d)/2)-i;return e.map(m=>({...m,x:m.x+u,y:m.y+p}))}function Lt(e,t){const n=Fu(`${e}-${t}`),a=fa[qe(t)%fa.length],i=ga[qe(t+"-mod")%ga.length],s=ya[qe(t+"-wpn")%ya.length],d=Nt(e==="ship"?ju(a,t):e==="module"?Hu(i,t):Ou(s,t)).map(u=>`<rect x="${u.x}" y="${u.y}" width="1" height="1" fill="${n[u.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${d}
    </svg>
  `}function ju(e,t){const n=Dn(t),a=[...e],i=Math.min(...e.map(p=>p.y)),s=Math.max(...e.map(p=>p.y)),o=e.filter(p=>p.y===i),d=e.filter(p=>p.y===s);o.slice(0,2).forEach(p=>{a.push({x:p.x,y:p.y-1,c:"a"})}),d.forEach(p=>{n()>.5&&a.push({x:p.x,y:p.y+1,c:n()>.5?"a":"b"})});const u=n()>.5?-1:1;return a.push({x:d[0]?.x+u,y:s-1,c:"b"}),a.push({x:d[d.length-1]?.x-u,y:s-1,c:"b"}),a}function Hu(e,t){const n=Dn(t+"-decor"),a=[...e],i=Math.min(...e.map(u=>u.x)),s=Math.max(...e.map(u=>u.x)),o=Math.min(...e.map(u=>u.y)),d=Math.max(...e.map(u=>u.y));return a.push({x:i-1,y:Math.round((o+d)/2),c:"b"}),a.push({x:s+1,y:Math.round((o+d)/2),c:"b"}),n()>.3&&a.push({x:i,y:o-1,c:"a"}),n()>.6&&a.push({x:s,y:o-1,c:"c"}),n()>.4&&a.push({x:i,y:d+1,c:"a"}),a}function Ou(e,t){const n=Dn(t+"-weapon"),a=[...e],i=Math.max(...e.map(d=>d.y)),s=Math.min(...e.map(d=>d.x)),o=Math.max(...e.map(d=>d.x));return a.push({x:s,y:i+1,c:n()>.5?"a":"b"}),a.push({x:o,y:i+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:s+1,y:i-2,c:"c"}),a.push({x:o+1,y:i-1,c:"b"}),a}const qu={incomeMultiplier:e=>J(e,"income"),eventRewardMultiplier:e=>J(e,"event rewards"),hpBonus:e=>J(e,"hull"),cargoBonus:e=>zu(e,"cargo capacity"),sellBonus:e=>J(e,"sell price"),buyBonus:e=>J(e,"buy price"),marketTax:e=>J(e,"market tax"),miningYield:e=>J(e,"mining yield"),rareFindChance:e=>J(e,"rare find chance"),miningSpeed:e=>J(e,"mining duration"),dodgeBonus:e=>nt(e,"dodge chance"),critBonus:e=>nt(e,"crit chance"),damageTakenMultiplier:e=>J(e,"damage taken"),fleeBonus:e=>nt(e,"flee chance"),pirateDetectionMultiplier:e=>J(e,"pirate detection"),scanDetectionMultiplier:e=>J(e,"scan detection"),illegalTolerance:e=>J(e,"illegal tolerance"),fuelCostMultiplier:e=>J(e,"fuel cost"),hazardDetectionBonus:e=>nt(e,"hazard detection"),anomalyChance:e=>J(e,"anomaly chance"),shieldRegenBonus:e=>J(e,"shield regen")};function Uu(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>qu[n]?.(a)??null).filter(n=>!!n):[]}function J(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function nt(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function zu(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}function Gu(e,t){return`
    <div class="ability-bars">
      ${[{label:"Hull",value:e.hull,max:t.maxHull},{label:"Shields",value:e.shields,max:t.maxShields},{label:"Fuel",value:e.fuel,max:t.maxFuel},{label:"Cargo",value:e.cargo,max:t.maxCargo}].map(a=>{const i=Math.min(100,Math.round(a.value/Math.max(1,a.max)*100));return`
            <div class="ability-row">
              <span>${a.label}</span>
              <div class="ability-bar">
                <div class="ability-bar__fill" style="width:${i}%"></div>
              </div>
              <strong>${a.value}</strong>
            </div>
          `}).join("")}
    </div>
  `}window.chooseStarter=e=>{Mu(e),tn(),C.go("main")};function Wu(){const e=ds(),t={maxHull:Math.max(...e.map(a=>a.hull),100),maxShields:Math.max(...e.map(a=>a.shields),100),maxFuel:Math.max(...e.map(a=>a.fuel),100),maxCargo:Math.max(...e.map(a=>a.cargo),50)};return e.length===0?`
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
            ${e.map(a=>{const i=Uu(a),s=a.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${a.passive.name}</p>
          ${i.length?`<div class="passive-summary__list">${i.map(d=>`<span>${d}</span>`).join("")}</div>`:""}
        </div>
      `:"",o=An(a.hardpoints);return`
      <button class="panel-card starter-card btn-starter" type="button" onclick="chooseStarter('${a.id}')">
        <div class="starter-card-head starter-card-head--stacked">
          <div class="starter-head__ship starter-head__ship--stacked">
            ${Ku(a.id,a.roleHint??a.name)}
            <div>
              <p class="label">${a.roleHint}</p>
              <p class="value-inline"><strong>${a.name}</strong></p>
            </div>
          </div>
          <div class="starter-head__passive">
            ${s||'<p class="muted">No passive</p>'}
          </div>
        </div>
        <div class="starter-card-body">
          ${Gu(a,t)}
          <p class="muted">Weapon slots: ${o}</p>
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
`}const va=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],ba={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function Bn(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Vu(e){return va[Bn(e)%va.length]}function Yu(e,t){const n=(()=>{let o=Bn(t);return()=>(o=o*1664525+1013904223|0,(o>>>0)/4294967295)})(),a=[...e],i=Math.max(...e.map(o=>o.y)),s=Math.min(...e.map(o=>o.y));return n()>.5&&a.push({x:e[0]?.x??4,y:s-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:i+1,c:n()>.5?"b":"c"}),a}function Xu(e,t=12){const n=Math.min(...e.map(m=>m.x)),a=Math.max(...e.map(m=>m.x)),i=Math.min(...e.map(m=>m.y)),s=Math.max(...e.map(m=>m.y)),o=a-n+1,d=s-i+1,u=Math.floor((t-o)/2)-n,p=Math.floor((t-d)/2)-i;return e.map(m=>({...m,x:m.x+u,y:m.y+p}))}function Ju(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(ba).find(o=>n.includes(o))??"fighter",i=ba[a],s=Bn(`${e}-${t}`)%i.length;return i[s]}function Ku(e,t){const n=Vu(`${e}-${t}`),a=Ju(e,t),i=Yu(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${Xu(i).map(d=>`<rect x="${d.x}" y="${d.y}" width="1" height="1" fill="${n[d.c]}" opacity="1" />`).join("")}
    </svg>
  `}function Zu(){const e=l.ship;if(!e.hardpoints.length)return`
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
    `;const t=e.hardpoints.map((n,a)=>{const s=K(e.weapons[a])?.name||"Empty";return`
        <div class="panel-card">
          <p class="label">Slot ${a+1} · ${n.size} ${n.type}</p>
          <p class="value-inline">${s}</p>
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
          <span>Turn ${Ze(l.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{yo(e,t)&&nav("weapon_slots")};function Qu(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=l.ship.hardpoints[t];if(!n)return`
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
    `;const o=mt().map(d=>K(d)).filter(d=>!!d).map(d=>{const u=nn(t,d.id),m=K(l.ship.weapons[t])?.id===d.id?"Equipped":"Equip",h=an(d),b=h.tagNotes.length?`<br/>Traits: ${h.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${u?"":"muted"}">
          <p class="label">${d.size} / ${d.type}</p>
          <p class="value-inline"><strong>${d.name}</strong></p>
          <p class="muted">Damage ${d.damage} (${d.damageType}) · Acc ${Math.round(d.accuracy*100)}% · Crit ${Math.round(d.critChance*100)}% (×${d.critMultiplier}) · CD ${d.cooldown}</p>
          <p class="muted">Role: ${h.role} (${h.typeLabel}) · Vs Shields: ${h.vsShields} · Vs Hull: ${h.vsHull}${b}</p>
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
          <span>Turn ${Ze(l.time.turn)}</span>
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
  `}const Ma=Math.max(1,vi.combo.threshold);function ep(e){return e>=10?"#ff5c7a":e>=6?"#fb923c":e>=3?"#facc15":"#34d399"}window.leaveMining=()=>{l.miningSession=null,C.go("main")};window.drillCell=(e,t)=>{qc(l,e,t)?.fightTriggered||C.go("mining")};window.setMiningDepth=e=>{jc(l,e),C.go("mining")};window.setDrillTier=e=>{Hc(l,e),C.go("mining")};window.finalizeDrill=()=>{if(Uc(l)?.fightTriggered)return;const t=l.miningSession?.lastMessage||"Extraction complete.";C.go("main",{message:t})};window.cashOutMining=()=>{const e=Wc(l);C.go("main",{message:e??"Risk Chain cash out requires level 3+."})};window.newSurvey=()=>{Be(l,l.location.systemId,l.miningSession?.beltId,l.miningSession?.resourceId,{force:!0}),C.go("mining")};function tp(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function np(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const i=e[n][a],s=["mine-cell"];i.drilled&&s.push("drilled"),i.selected&&s.push("selected"),i.clusterHint&&s.push("cluster-hint");const o=["mine-cell-inner"];i.directionClass&&o.push(i.directionClass),i.depthClass&&o.push(i.depthClass),i.hintSignal!=null&&!i.drilled&&o.push("hinted"),i.signal!=null&&o.push(tp(i.signal));const d=i.signal!=null?i.signal:i.hintSignal!=null?i.hintSignal:"A",p=`<span class="${i.signal!=null?"cell-signal":i.hintSignal!=null?"cell-signal hint":"cell-signal muted"}">${d}</span>`;t.push(`
        <div class="${s.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${o.join(" ")}">
            <div class="cell-center">
              ${p}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}const wa=Object.keys(Mn.drillDepthCaps);function ap(e){if(!e)return"";const t=e.drillTier??wa[0]??"basic";return`
    <div class="panel-card panel-card--compact">
      <p class="label">Drill Tiers</p>
      <div class="drill-tier-grid">
        ${wa.map(a=>{const i=Mn.drillDepthCaps[a];return`
      <button class="${a===t?"chip-btn active":"chip-btn"}" onclick="setDrillTier('${a}')">
        ${a.charAt(0).toUpperCase()+a.slice(1)} Drill (max Z${i})
      </button>
    `}).join("")}
      </div>
      <p class="muted small">
        Higher tiers unlock deeper layers and higher payouts once unlocked.
      </p>
    </div>
  `}function ip(){const e=l.miningSession;if(!e)return`
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
    `;const t=Math.min(Ma,e.comboGauge??0),n=Math.min(100,Math.round(t/Ma*100)),i=(e.comboBonusTurns??0)>0?`Combo bonus active (${e.comboBonusTurns} turns)`:`Combo ${n}% toward bonus`,s=e.comboThreatReduction??0,o=Math.max(0,l.player.xp??0),d=e.riskChainLevel??0,u=xn(d),p=Math.round(Ei(d,o)*100),m=Math.min(100,Math.round(d/12*100)),h=`Risk Chain: ${d}`,b=`Reward x${u.toFixed(2)} • Hazard ${p}%`,g=ep(d),$=d>=3&&e.active,T=e.xpEarned??0,I=Math.round(e.threat??0),v=pi(l,e.systemId),f=Array.from({length:5},(E,w)=>{const D=w+1;return`<button class="chip-btn ${D===e.depth?"active":""}" onclick="setMiningDepth(${D})">Z${D}</button>`}).join(""),M=np(e.grid),k=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.",y=ap(e);return e.runComplete?`
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
            <p>Haul: ${k}</p>
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
          <span>Turn ${Ze(l.time.turn)}</span>
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
          <span class="stat-value stat-risk">${I}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Risk Chain</span>
          <span class="stat-value" style="color:${g}">${h}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Combo</span>
          <span class="stat-value">${n}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Ore Value</span>
          <span class="stat-value">${Math.round(v)} cr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Mining XP</span>
          <span class="stat-value">${T}</span>
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
            <div class="chip">Threat ${I}%</div>
          </div>
          ${M}
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
              ${f}
            </div>
            <p class="muted">Each tile shows signal strength with a gradient pointing toward the vein; glow hints depth (shallow/deep/optimal).</p>
          </div>
          ${y}

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
          <p class="muted">${i}</p>
          ${s>0?`<p class="muted">Threat -${Math.round(s*100)}% while combo is active.</p>`:""}
        </div>

          <div class="panel-card">
            <p class="label">Threat</p>
            <div class="bar-group">
              <div class="bar-row">
                <span>Pirate Threat</span>
                <span>${I}%</span>
              </div>
              <div class="bar-bg">
                <div class="bar-fill" style="width:${I}%;"></div>
              </div>
            </div>
            <p class="muted">If the roll succeeds, a real pirate combat is started and threat resets to 0%.</p>
          </div>

          <div class="panel-card">
            <p class="label">Risk Chain</p>
            <div class="bar-bg">
              <div class="bar-fill" style="width:${m}%;background:${g};"></div>
            </div>
            <p class="muted">${b}</p>
            ${$?'<button class="chip-btn" onclick="cashOutMining()">Cash Out</button>':'<span class="muted">Reach level 3 to cash out.</span>'}
          </div>

          <div class="panel-card">
            <p class="label">Last haul</p>
            <p class="value-emphasis">${k}</p>
          </div>
        </aside>
      </div>

      <footer class="app-footer"></footer>
    </div>
  `}window.startNewRun=()=>hi(!1);window.returnToMainMenu=()=>hi(!0);function sp(){const e=l.gameOver?.summary,t=qs(),n=e?.message||"Your run has ended.",a=e?.score??0,i=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],s=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],o=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],d=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],u=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],p=h=>h.map(([b,g])=>`
      <tr>
        <td>${b}</td>
        <td>${g}</td>
      </tr>
    `).join(""),m=t.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${t.map((h,b)=>`
                  <tr>
                    <td>${b+1}</td>
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
          <table>${p(i)}</table>
        </section>
        <section class="data-panel">
          <h2>Economy</h2>
          <table>${p(s)}</table>
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
  `}function op(){const e=l,t=is(e),n=ss(),a=Hd(e),i=os(e,5),s=(e.player.perkPoints??0)>0,o=t.length>0?t.map(({displayName:d,level:u,percent:p,xpIntoLevel:m,xpNeeded:h})=>`
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
                          class="btn btn-primary btn-small${s&&!u.unlocked?"":" disabled"}"
                          ${s&&!u.unlocked?"":"disabled"}
                          onclick="unlockPerkAction('${u.id}')"
                        >
                          ${u.unlocked?"Unlocked":s?"Unlock":"Need Points"}
                        </button>
                      </div>
                    `}).join("")}
              </div>
            `).join("")}
      </section>

      <section class="panel-card perk-log-panel">
        <p class="label">Recent Notifications</p>
        <div class="perk-log">
          ${i.length?i.map(d=>`<div class="perk-log-line">${d}</div>`).join(""):'<div class="perk-log-line muted">No notifications yet.</div>'}
        </div>
      </section>
    </div>
  `}const F=320,N=180;let Ue=null,ze="space",Ye=null,Me=1;const rp=450,Nn=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],ut=[];function cp(){for(const e of Nn){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*F,y:Math.random()*N,size:Math.random()<.6?1:2})}}function lp(){ut.length=0;for(let e=0;e<4;e++)ut.push({x:Math.random()*F,y:N/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function dp(e){Ue=e.getContext("2d"),Ue&&(e.width=F,e.height=N,Ue.imageSmoothingEnabled=!1,cp(),lp())}function up(e){e===ze&&(!Ye||Me<1)||(Ye=ze,ze=e,Me=0)}function pp(e){if(!Ue)return;const t=e/16.6667;Me<1&&(Me=Math.min(1,Me+e/rp),Me>=1&&(Ye=null));for(const n of ut)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=F+20,n.y=N/4+Math.random()*(N/2));for(const n of Nn)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=F,a.y=Math.random()*N)}function ps(e=Ue,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=Ye!==null&&Me<1,a=Mp(Me);n?(Ft(e,Ye,t,{alpha:1-a,scale:1+.05*a}),Ft(e,ze,t,{alpha:a,scale:1.04-.04*a})):Ft(e,ze,t),e.restore()}function Ft(e,t,n,a={}){const i=a.alpha??1,s=a.scale??1;switch(e.save(),e.globalAlpha=i,s!==1&&(e.translate(F/2,N/2),e.scale(s,s),e.translate(-F/2,-N/2)),t){case"mining":gp(e);break;case"hangar":vp(e,n);break;case"ops":bp(e,n);break;default:mp(e,n);break}fp(e,t),t==="combat"&&yp(e),e.restore()}function mp(e,t){e.fillStyle="#02030b",e.fillRect(0,0,F,N),hp(e,t)}function hp(e,t){for(const n of ut){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),i=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${i})`),a.addColorStop(.5,`rgba(60, 130, 200, ${i*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${i})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of Nn){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function fp(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let i=0;i<n;i++){const s=Math.random()*F,o=Math.random()*N;e.fillRect(Math.round(s),Math.round(o),1,1)}}function gp(e){e.fillStyle="#0a0604",e.fillRect(0,0,F,N);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const i=a*(N/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(i),F,Math.ceil(N/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,F-80,N-40);const n=e.createLinearGradient(0,N/2,F,N/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,F,N)}function yp(e){const t=e.createLinearGradient(0,0,F,N);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,F,N)}function vp(e,t){e.fillStyle="#04060a",e.fillRect(0,0,F,N);const n=e.createLinearGradient(0,0,0,N);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,F,N);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(F/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,N-46,F,18),e.fillStyle="#0f1a28";for(let i=0;i<7;i++){const s=N-26+i*3;e.fillRect(0,s,F,1)}e.fillStyle="#1a2838";for(let i=0;i<F;i+=22)e.fillRect(i,N-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,F-80,10),e.fillRect(40,70,F-80,6)}function bp(e,t){e.fillStyle="#021014",e.fillRect(0,0,F,N);const n=e.createRadialGradient(F/2,N*.45,10,F/2,N/2,N);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,F,N),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let p=20;p<F;p+=20)e.beginPath(),e.moveTo(p,0),e.lineTo(p,N),e.stroke();for(let p=20;p<N;p+=20)e.beginPath(),e.moveTo(0,p),e.lineTo(F,p),e.stroke();const a=t*.002%(Math.PI*2),i=F/2,s=N/2,o=80,d=e.createRadialGradient(i,s,0,i,s,o);d.addColorStop(0,"rgba(80, 220, 200, 0.18)"),d.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=d,e.beginPath(),e.moveTo(i,s),e.arc(i,s,o,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(i,s,o,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const u=[{x:i+26,y:s-18},{x:i-30,y:s+14},{x:i+6,y:s+32}];for(const p of u)e.fillRect(Math.round(p.x),Math.round(p.y),2,2)}function Mp(e){return e*e*(3-2*e)}const ms=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyAccuracyMultiplier",label:"Enemy Accuracy Multiplier",min:.1,max:2,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyCountMin",label:"Min Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`},{path:"combat.enemyCountMax",label:"Max Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],wp=ms.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),xp={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function Xt(e){const t=e.split(".");let n=H;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function kp(e,t){const n=e.split(".");let a=H;for(let i=0;i<n.length-1;i++){const s=n[i];a[s]=a[s]??{},a=a[s]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{Ie(e)};window.devMining=()=>{Be(l,l.location.systemId)?C.go("mining"):C.go("main",{message:"Travel to a new system before mining again."})};function $p(){return ms.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(Xt(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${Xt(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function Sp(e){const t=()=>{window.prompt("Dev settings snapshot (copy manually):",e)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(()=>{alert("Dev settings copied to clipboard.")}).catch(()=>{t()}):t(),console.log("Dev settings report:",e)}function Se(){const e=document.getElementById("app");if(!e)return;const t=xp[C.current]??"space";up(t);let n="";if(ps(null,performance.now()),C.current==="mining"&&!l.miningSession&&l.location?.systemId){const i=xt(),s=new Set(i?.tags??[]);(s.has("mining_belt")||s.has("mining"))&&l.lastMiningSystemId!==l.location.systemId&&Be(l,l.location.systemId)}switch(C.current){case"main":n=Od();break;case"travel":n=Wd();break;case"market":n=eu(C.params);break;case"contracts":n=mu();break;case"ship":n=Su();break;case"event":n=_u(C.params);break;case"combat":n=Nu(C.params);break;case"weapon_slots":n=Zu();break;case"weapon_select":n=Qu(C.params);break;case"shipyard":n=Lu();break;case"ship_select":n=Wu();break;case"mining":n=ip();break;case"perks":n=op();break;case"gameover":n=sp();break}const a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${$p()}
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
  `;e.innerHTML=`${n}${a}`,_p()}let Fe=!1,xa=!1;function _p(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),i=document.getElementById("devTriggerMining"),s=document.getElementById("devAddCredits"),o=document.getElementById("devFillCargo"),d=document.getElementById("devGodMode"),u=document.getElementById("devReportSettings"),p=document.getElementById("devResetMiningSession"),m=document.getElementById("devSpikeThreat"),h=document.getElementById("devLogMiningGrid"),b=document.getElementById("navTravel"),g=document.getElementById("navMarket"),$=document.getElementById("navShip"),T=document.getElementById("devPersistEvents"),I=document.getElementById("devClearEvents"),v=document.getElementById("devHardReset"),f=t?.querySelectorAll("input[data-dev-path]"),M=document.getElementById("devMiningStatus"),k=()=>{t&&t.classList.toggle("hidden")},y=w=>{const D=wp[w],P=document.getElementById(`devValue-${w.replace(/\./g,"__")}`);D&&P&&(P.textContent=D.formatter(Xt(w)))};f?.forEach(w=>{const D=()=>{const P=w.dataset.devPath;if(!P)return;const A=Number(w.value);kp(P,A),it(),y(P)};w.addEventListener("input",D)});const E=()=>{if(!M)return;const w=l.miningSession;if(!w){M.textContent="No active mining session.";return}const D=(w.threat??0).toFixed(1),P=w.depth??0;M.innerHTML=`
      <div>System: ${w.systemId}</div>
      <div>Belt: ${w.beltName??w.beltId??"—"}</div>
      <div>Depth: Z${P}</div>
      <div>Threat: ${D}%</div>
      <div>Exploration: ${(w.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${w.drillsUsed??0}</div>
      <div>Selected: ${w.selectedRow!=null?`X${w.selectedCol+1} Y${w.selectedRow+1}`:"none"}</div>
    `};E(),e?.addEventListener("click",k),n?.addEventListener("click",()=>t?.classList.add("hidden")),b?.addEventListener("click",()=>window.nav?.("travel")),g?.addEventListener("click",()=>window.nav?.("market")),$?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),i?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),s?.addEventListener("click",()=>{l.player.credits+=1e3,t?.classList.add("hidden"),Se()}),o?.addEventListener("click",()=>{const w=l.ship.cargo||{};w.aurite_ore=(w.aurite_ore||0)+20,l.ship.cargo=w,t?.classList.add("hidden"),Se()}),d?.addEventListener("click",()=>{Fe=!Fe,l.godMode=Fe,Fe&&(l.ship.hp=l.ship.maxHp,l.ship.shields=l.ship.maxShields),alert(`God Mode: ${Fe?"On":"Off"}`)}),u?.addEventListener("click",()=>{const w=JSON.stringify({timestamp:new Date().toISOString(),devTune:H},null,2);Sp(w),t?.classList.add("hidden")}),p?.addEventListener("click",()=>{Be(l,l.location.systemId,l.miningSession?.beltId),t?.classList.add("hidden"),Se(),E()}),m?.addEventListener("click",()=>{const w=l.miningSession;w&&(w.threat=95,w.currentPirateChance=.95,t?.classList.add("hidden"),Se(),E())}),h?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",l.miningSession),console.groupEnd()}),T?.addEventListener("click",()=>{Ir(),alert("Events cached locally. Future loads will honor this list.")}),I?.addEventListener("click",()=>{Rr(),alert("Event cache cleared. Future loads use the bundled data.")}),v?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),xa||(document.addEventListener("keydown",w=>{w.key==="`"&&k(),w.key==="Escape"&&C.current!=="main"&&C.current!=="event"&&window.nav?.("main")}),xa=!0)}let _=null,W=null,hs=null,ka=performance.now();async function Cp(){const e="/space/".replace(/\/+$/,"/"),t=L=>`${e}content/${L}`,[n,a,i,s,o,d,u,p,m,h,b]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json")),fetch(t("encounters.json")),fetch(t("factions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!i.ok)throw new Error(`Failed to load components.json: ${i.status}`);if(!o.ok)throw new Error(`Failed to load weapons.json: ${o.status}`);if(!s.ok)throw new Error(`Failed to load commodities.json: ${s.status}`);if(!d.ok)throw new Error(`Failed to load enemies.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load events.json: ${u.status}`);if(!p.ok)throw new Error(`Failed to load loot_tables.json: ${p.status}`);if(!m.ok)throw new Error(`Failed to load missions.json: ${m.status}`);if(!h.ok)throw new Error(`Failed to load encounters.json: ${h.status}`);if(!b.ok)throw new Error(`Failed to load factions.json: ${b.status}`);const g=await n.json();for(const L of g){const j=new Set(L.tags??[]);L.region&&j.add(L.region),L.security==="high"&&j.add("secure"),L.security==="low"&&j.add("lawless"),L.marketProfile?.blackMarket&&j.add("black_market");const z=L.economyTags??[];z.includes("mining")&&j.add("mining"),z.includes("salvage")&&j.add("salvage"),z.includes("checkpoint")&&j.add("checkpoint"),L.tags=Array.from(j)}const $=await a.json(),T=await i.json(),I=await s.json(),v=await o.json(),f=await d.json(),M=await fetch(t("bases.json"));if(!M.ok)throw new Error(`Failed to load bases.json: ${M.status}`);const k=await M.json(),y={};for(const L of g)y[L.id]=L;const E=await u.json();Sr(E);const w=await p.json();Lr(w);const D=await m.json(),P=await h.json(),A=await b.json();Lo(D);const q={};for(const L of k)q[L.id]=L;return{systems:g,systemsById:y,bases:k,basesById:q,ships:$,components:T,commodities:I,weapons:v,enemies:f,events:E,lootTables:w,missions:D,encounters:P,factions:A}}function Tp(){W||(W=document.createElement("canvas"),W.id="pixel-background",W.style.position="fixed",W.style.top="0",W.style.left="0",W.style.width="100vw",W.style.height="calc(100vw * 9 / 16)",W.style.maxHeight="100vh",W.style.maxWidth="calc(100vh * 16 / 9)",W.style.objectFit="contain",W.style.zIndex="0",W.style.pointerEvents="none",W.style.background="#02030b",W.style.imageRendering="pixelated",W.style.display="block",document.body.insertBefore(W,document.body.firstChild||null),hs=W.getContext("2d"),dp(W))}function Ep(){const e=t=>{const n=t-ka;ka=t,pp(n),ps(hs,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function Ip(){_=await Cp(),Tp();const e=Ss(_.systems),t=Ia();t.map=e,Qt(t),Jt(e),Pa();const n=As();n&&(l.player.xp=n.xp,l.player.xpTracks=n.xpTracks??{},l.player.perksUnlocked=n.perksUnlocked??[]);const a=Rs();if(a){const o=l.ship.hardpoints.length,d=[];for(let u=0;u<o;u++)d.push(a.weapons[u]??null);l.ship.weapons=d,l.ship.passives=a.passives??[],l.inventory.weapons=a.inventoryWeapons??[],l.inventory.passives=a.inventoryPassives??[]}tn();const i=C.go.bind(C);C.go=(o,d)=>{i(o,d),Se()};const s=C.setZoom.bind(C);C.setZoom=o=>{C.zoom!==o&&(s(o),Se())},window.nav=(o,d={})=>{C.go(o,d)},C.current=l.player.hasChosenStarter?"main":"ship_select",Se(),Ep()}function Z(e){return _?_.systemsById[e]??null:null}function Rp(e){return _?_.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{Ip()});
