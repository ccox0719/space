(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ra=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],Ot=Ra,Y=Ot.find(e=>e.starter)??Ot[0],Da=Y?.hardpoints.length??0,Ba={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"},Aa={balanced:{id:"balanced",label:"Balanced",description:"Steady posture that treats every attack equally while keeping systems synced.",damageTakenMultipliers:{},evasionBonus:0},brace:{id:"brace",label:"Brace",description:"Tighten defenses—absorbs kinetic/explosive hits but lets in energy fire.",damageTakenMultipliers:{kinetic:.7,explosive:.7,energy:1.1,disruptive:1.1},evasionBonus:.05},evasive:{id:"evasive",label:"Evasive",description:"Skinny, agile frame—decreases all damage via maneuvering.",damageTakenMultipliers:{kinetic:.85,explosive:.85,energy:.85,disruptive:.85},evasionBonus:.15},overcharge:{id:"overcharge",label:"Overcharge",description:"Pour power to shields and weapons but disruptives tear through you.",damageTakenMultipliers:{disruptive:1.25,kinetic:.95,explosive:.95,energy:.9},evasionBonus:-.05,shieldBonus:15}};function Se(e){return Aa[e]}function $n(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let r;const xn="cosmo_weapon_loadout";function Pa(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(xn);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function mt(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:r.ship.weapons,inventory:r.inventory?.weapons??[]};window.localStorage.setItem(xn,JSON.stringify(e))}function wn(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:Y?.id??"none",name:Y?.name??"Undefined Hull",hp:Y?.hull??0,maxHp:Y?.hull??0,shields:Y?.shields??0,maxShields:Y?.shields??0,fuel:Y?.fuel??0,maxFuel:Y?.fuel??0,cargoCapacity:Y?.cargo??0,cargo:{},modules:[],weapons:Y?.hardpoints.map(e=>Ba[`${e.size}:${e.type}`]??null)??Array(Da).fill(null),weaponPower:12,evasion:5,maneuverRating:Y?.maneuverRating??0,components:[],hardpoints:Y?.hardpoints.map(e=>({...e}))??[],passive:Y?.passive??null,heat:0,maxHeat:100,overheated:!1,overheatTurns:0},reputation:{},contracts:[],missions:[],combat:null,overheatPenaltyTurns:0,overheatModalVisible:!1,lastHeatDelta:"",overheatPenaltyTurns:0,overheatModalVisible:!1,miningSession:null,lastMiningSystemId:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},tradeStrategy:{taxEvasion:0,smuggling:0,bribery:0},intel:{systems:[]},runStats:$n(),gameOver:{active:!1,reason:null},map:null,difficulty:{day:1,playerPowerScore:1,tension:0}}}function Sn(e){r=e}const kn="space-dev-tune",G={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1.4,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:1,miningPayoutMultiplier:1,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.6,enemyDamageMultiplier:.4,enemyAccuracyMultiplier:.6,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1.2,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:70,nonPirateEventWeight:1,showEncounterDebug:0}};let L={...G};function La(e){return{...G.combat,...e}}function Je(e){return{...e,enemyHpMultiplier:Math.min(G.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??G.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(G.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??G.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(G.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??G.combat.enemyAccuracyMultiplier))}}function Cn(){if(typeof window>"u"||!window.localStorage){L={...G};return}const e=window.localStorage.getItem(kn);if(!e){L={...G,combat:Je(G.combat)},Re();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=La({...t.combat,...n});L={...G,...t,combat:Je(a)},Re()}catch{L={...G,combat:Je(G.combat)},Re()}}function Re(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(kn,JSON.stringify(L))}function Tn(e){const t=L.progressionSpeedMultiplier??1;return e*t}function V(){return L.combat??G.combat}function Fa(){return r.ship.passive?.effects??{}}const En="cosmo_run_high_scores",_n=5;function Na(){return r?{...r.runStats,commodityVolumes:{...r.runStats.commodityVolumes}}:$n()}function Ha(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function In(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(En);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,_n):[]}catch{return[]}}function ja(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(En,JSON.stringify(e.slice(0,_n)))}function Oa(){return In()}function Wa(e){const t=In();t.push(e),t.sort((n,a)=>a.score-n.score),ja(t)}function ke(e){if(!r||e<=0)return;r.runStats.creditsEarnedTotal+=e;const t=r.player.credits;t>r.runStats.highestNetWorth&&(r.runStats.highestNetWorth=t)}function qa(e,t,n){if(!r)return;r.runStats.tradeProfitTotal+=Math.max(0,n);const a=r.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=r.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(r.runStats.mostTradedCommodityId=e)}function Va(e){!r||e<=0||(r.runStats.contractPayoutTotal+=e)}function za(){r&&(r.runStats.contractsCompleted+=1)}function Ga(e){!r||e<=0||(r.runStats.damageDealtTotal+=e)}function Ua(e){!r||e<=0||(r.runStats.damageTakenTotal+=e)}function Ya(){r&&(r.runStats.fightsSurvived+=1)}function Ja(){r&&(r.runStats.shipsDestroyed+=1)}function Xa(e,t){!r||e<=0||(r.runStats.miningRuns+=1,r.runStats.oreMinedTotal+=e,t&&(r.runStats.rareFinds+=1))}function Ka(){r&&(r.runStats.jumpsMade+=1,r.runStats.systemsVisited+=1)}function Za(e){r&&(r.runStats.daysSurvived=Math.max(r.runStats.daysSurvived,e))}const S={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}};function Qa(){return C?C.components:[]}function Rn(){if(!C)return[];const e=r.ship.components;return C.components.filter(t=>e.includes(t.id))}function es(){if(!C)return{};const e={};for(const t of Rn())if(t.effects)for(const[n,a]of Object.entries(t.effects))typeof a=="number"&&(e[n]=(e[n]??1)*a);return e}function ts(e){if(!C)return!1;const t=C.components.find(n=>n.id===e);return t?r.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):r.ship.components.includes(e)?(console.warn("Component already installed."),!1):(r.player.credits-=t.cost,r.ship.components.push(e),ns(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function ns(e){const t=r.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function J(){const e=Fa(),t=es(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const s of n){const i=typeof e[s]=="number"?e[s]:1,o=typeof t[s]=="number"?t[s]:1;a[s]=i*o}return a}function Dn(){const e=J(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,V().globalIncomeMultiplier??1);return t*n}const as=-100,ss=100;function is(e,t){const n=r.reputation[e]||0,a=rs(n+t);return r.reputation[e]=a,a}function Bn(e){for(const[t,n]of Object.entries(e))is(t,n)}function os(e){return r.reputation[e]||0}function rs(e){return Math.max(as,Math.min(ss,e))}const Wt={damageMultiplier:1.25,accuracyMultiplier:.8},cs=.4,ge={kinetic:{vsShields:.8,vsHull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},energy:{vsShields:1.2,vsHull:.8,description:"Energy beams focus on shields and finesse hulls."},explosive:{vsShields:1,vsHull:1.3,description:"Explosives blast both layers but leave hull plating the most damaged."},disruptive:{vsShields:1.3,vsHull:1,description:"Disruptive rounds disable shields aggressively while nicking hull."}},ls=Object.keys(ge).map(e=>({type:e,shieldMultiplier:ge[e].vsShields,hullMultiplier:ge[e].vsHull,description:ge[e].description})),tt=ge;function ds(){return C?C.weapons:[]}function An(){return r.inventory||(r.inventory={weapons:[]}),r.inventory}function ht(){return[...An().weapons]}function ft(){if(!C)return;const e=ht();if(!e.length)return;const t=r.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(o=>gt(a,o));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function gt(e,t){const n=r.ship,a=C?.weapons.find(i=>i.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function us(e,t){return gt(e,t)?(r.ship.weapons[e]=t,mt(),!0):!1}function X(e){return!e||!C?null:C.weapons.find(t=>t.id===e)??null}function ps(e){const t=X(e);return!t||r.player.credits<t.price?!1:(An().weapons.push(e),r.player.credits-=t.price,mt(),!0)}function Pn(e,t={}){const n=e.tags||[];let a=e.accuracy*(t.accuracyMultiplier??1)||0;if(n.includes("accurate")&&(a+=.05),a=Math.min(.95,Math.max(0,a)),Math.random()>a)return 0;let s=e.damage;return Math.random()<e.critChance&&(s*=e.critMultiplier),s*=t.damageMultiplier??1,Math.max(0,Math.round(s))}const ms={kinetic:"Kinetic",energy:"Energy",explosive:"Explosive",disruptive:"Disruptive"},hs={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function qt(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const Vt={shields:"Shield-breaker",hull:"Hull buster"};function yt(e){const t=e.damageType,n=tt[t]??tt.kinetic,a=qt(n.vsShields),s=qt(n.vsHull);let i="Balanced";a==="Strong"&&s==="Weak"?i=Vt.shields:s==="Strong"&&a==="Weak"?i=Vt.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const o=(e.tags||[]).map(c=>hs[c]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:ms[t]??t,tagNotes:o}}let Ln=null;function Fn(e){Ln=e}function Ne(){return Ln}function fs(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function De(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function gs(e){const t=e.map(i=>({id:i.id,name:i.name,x:i.coords?.x??0,y:i.coords?.y??0,tags:i.tags??[]})),n=[],a=new Set;for(const i of e)for(const o of i.neighbors??[]){const c=De(i.id,o.id);a.has(c)||(a.add(c),n.push({from:i.id,to:o.id,type:fs(o.laneType),distance:Math.max(1,Math.round(o.distance??1))}))}const s={nodes:t,lanes:n};return Fn(s),s}function vt(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function ys(e,t,n){const a=n==="local"?1:3,s=new Map([[t,0]]);let i=[t];for(let o=1;o<=a;o++){const c=[];for(const l of i)for(const d of vt(e,l))s.has(d)||(s.set(d,o),c.push(d));if(!c.length)break;i=c}return s}function bt(e,t,n){if(t===n)return[t];const a=[t],s=new Set([t]),i=new Map;for(;a.length;){const l=a.shift();for(const d of vt(e,l))if(!s.has(d)&&(s.add(d),i.set(d,l),a.push(d),d===n))break}if(!s.has(n))return[];const o=[];let c=n;for(;c;)o.push(c),c=i.get(c);return o.reverse()}function vs(e,t,n){const a=bt(e,t,n);return a.length?Math.max(0,a.length-1):null}let Mt=[];function bs(e){Mt=e}function Ms(e){return Mt.find(t=>t.id===e)}function $s(){const e=new Set(r.contracts.filter(t=>t.status==="active").map(t=>t.id));return Mt.filter(t=>!e.has(t.id))}function oe(){return r.contracts.filter(e=>e.status==="active")}function xs(e){const t=e.requirements,n=s=>s?`<strong>${U(s)?.name||s}</strong>`:"",a=[];if(t?.travel?.systemId){const s=n(t.travel.systemId);a.push(`Travel to ${s}`)}if(t?.deliver?.commodityId){const s=t.deliver.quantity||0,i=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${s} ${t.deliver.commodityId}${i}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function ws(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function $t(e){const t=Ms(e);if(!t)return{success:!1,reason:"Unknown mission"};if(r.contracts.some(s=>s.id===e&&s.status==="active"))return{success:!1,reason:"Mission already active"};const n=As(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:r.time.turn,progress:{}};return r.contracts.push(a),n&&Ps(a.id,n),{success:!0}}function Ss(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,L.contractPayoutMultiplier??1)),s=Dn(),i=Math.max(0,J().incomeMultiplier??1),o=Math.max(0,Math.round(n.credits*a*s*i));r.player.credits+=o,ke(o),Va(o),r.notifications.push(`Mission reward: +${o} credits.`)}if(n.rep){Bn(n.rep);const a=Object.entries(n.rep).map(([s,i])=>`${s} ${i>=0?"+":""}${i}`).join(", ");a&&r.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=r.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),r.inventory=a;const s=X(n.weapon)?.name??n.weapon;r.notifications.push(`Rewarded weapon: ${s}.`)}}function ks(){oe().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,L.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));r.time.turn-e.acceptedTurn>=a&&Cs(e.id)}})}function Cs(e){const t=r.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",He(`Mission failed: ${t.name}`),xt(t.id))}function Ts(e){const t=r.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",He(`Mission abandoned: ${t.name}`),xt(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function Es(e){oe().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,$e(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),$e(t)}})}function _s(e,t,n){oe().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const i=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=i+t,$e(a)})}function Is(e){oe().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,$e(t))})}function Rs(e,t){Es(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const i of oe()){const o=i.status,c=i.requirements?.deliver;if(!c||!c.commodityId||(c.systemId??t)!==t||(a+=1,!Ds(n,c)))continue;c.retain||Bs(n,c),i.progress=i.progress||{};const d=i.progress.deliveredQuantity||0;i.progress.deliveredQuantity=d+(c.quantity||1),$e(i),o!=="completed"&&i.status==="completed"&&s.push(i.name)}if(s.length){const i=`Contracts completed: ${s.join(", ")}`;e.notifications.push(i)}return{checked:a,completed:s}}function Ds(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function Bs(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function $e(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},i=e.requirements?.multiTravel,o=t?!!s.travelCompleted:!0,c=n?s.deliveredQuantity>=(n.quantity||0):!0,l=a?!!s.combatCompleted:!0,d=s.multiTravelVisited??[],u=i?i.every(p=>d.includes(p)):!0;o&&c&&l&&u&&(e.status="completed",Ss(e),za(),He(`Mission completed: ${e.name}`),xt(e.id))}function He(e){r.notifications.push(e)}function As(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function Ps(e,t){const n=Ne();if(!n)return;const a=r.location.systemId,s=bt(n,a,t);!s.length||s.length<=1||S.setActiveRoute({nodes:s,currentIndex:0,source:"mission",missionId:e})}function xt(e){S.activeRoute?.missionId===e&&S.clearActiveRoute()}function Ls(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",He(`Mission failed (expired): ${n.name}`))}const Xe=25,Nn=100,wt={taxEvasion:{cost:180,gain:10,name:"Tax Evasion Grid",benefit:"whispered import routes and shell accounts"},smuggling:{cost:150,gain:8,name:"Smuggling Ring",benefit:"hidden routes and tolerant contacts"},bribery:{cost:200,gain:12,name:"Bribery Ledger",benefit:"greased palms and friendly inspectors"}};function St(){return r.tradeStrategy||(r.tradeStrategy={taxEvasion:0,smuggling:0,bribery:0}),r.tradeStrategy}function Hn(e){return Math.max(0,Math.min(Nn,e))}function Fs(){return St()}function Ns(e){return Hn(Fs()[e])}function Hs(e,t,n){const a=Math.floor(t/Xe),s=Math.floor(n/Xe);s>a&&r.notifications.push(`Trade Path: ${e} progress ${Math.min(s*Xe,Nn)}% (${wt[e].name})`)}function nt(e,t){if(t<=0)return;const n=St(),a=n[e];n[e]=Hn(a+t),Hs(e,a,n[e])}function js(e){const t=wt[e];return r.player.credits<t.cost?(r.notifications.push("Not enough credits to invest in "+t.name+"."),!1):(r.player.credits-=t.cost,nt(e,t.gain),r.notifications.push(`Invested ${t.cost} cr into ${t.name} (${t.benefit}).`),!0)}function jn(e){return wt[e]}function kt(){const e=St();return{detectionReduction:Math.min(.25,e.bribery/400),fineDiscount:Math.min(.35,e.smuggling/280)}}const On="__global__",Os={buyMultiplier:1,sellMultiplier:.85},Ws={basic:.9,standard:1,strategic:1.2,luxury:1.35};function je(){return r.ship.cargo||(r.ship.cargo={}),r.ship.cargo}function qs(){const e=je();return Object.values(e).reduce((t,n)=>t+n,0)}function Wn(){return C?.commodities??[]}function Z(e){return Wn().find(n=>n.id===e)??null}function ee(){return r.marketState?(r.marketState.temporaryModifiers=r.marketState.temporaryModifiers||{},r.marketState.activeEvents=r.marketState.activeEvents||[],r.marketState.localAdjustments=r.marketState.localAdjustments||{},r.marketState.priceIntel=r.marketState.priceIntel||{},r.marketState.initialDriftSeeded=r.marketState.initialDriftSeeded??!1):r.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},r.marketState}function Vs(e){r.intel||(r.intel={systems:[]});const t=r.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return r.intel.systems.push(n),n})();t.lastPriceSeenDay=r.time.day}function zs(e){const t=ee();let n=1;const a=t.temporaryModifiers[On];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function Gs(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function Us(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),i=n.exports?.includes(t.id);return s&&(a*=1.2),i&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function Ct(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(L.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function Ys(e,t){const n=Math.max(1,t.basePrice),a=Ws[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,i=Us(e,t),c=1+Ct(t)*.08,l=zs(t.id),d=Zs(e.id,t.id),u=Gn(e.id,t.id),p=n*a*s*i*c*l*d*u;return Math.max(1,Math.round(p))}function qn(e,t){return K(e,t).base}function K(e,t){const n=U(e),a=Z(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=Ys(n,a),i=a.baseSpread??Os,o=Ct(a),c=J(),l=Math.max(.1,Math.min(3,L.tradeProfitMultiplier??1)),d=Dn(),u=Math.max(.5,c.buyBonus??1),p=Math.max(0,c.sellBonus??1),m=Math.max(.5,c.marketTax??1),h=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+o*.05)/l*u)),f=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-o*.05)*l*d*p*m)),M=Math.max(1,Math.min(f,h-1)),v=Math.max(h,M,Math.round(s*(1+o*.1))),y=Math.max(1,Math.min(h,M,Math.round(s*Math.max(.65,1-o*.2)))),g=Gs(s,a.basePrice);return Vs(e),{base:s,buy:h,sell:M,high:v,low:y,trend:g}}function Be(e,t,n=2){const a=ee(),s=e&&e.length?e:On;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function Vn(e=1){if(typeof e=="number"){Js(e);return}Xs(e??r)}function Js(e){if(e<=0)return;const t=ee(),n=Object.keys(t.temporaryModifiers);for(const s of n){const i=t.temporaryModifiers[s];i.remainingTurns-=e,i.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=r.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),Yn(t,.2*e)}function Xs(e){const t=ee(),n=C?.systems??[],a=C?.commodities??[],s=e.time.day;Ks(t,n,a);for(const i of n)for(const o of a){const c=Gn(i.id,o.id),l=Ct(o),d=L.marketDailyTrendStrength??1,u=(1-c)*.1*d,p=(Math.random()-.5)*.1*(.5+l)*d,m=Un(c+u+p);t.localAdjustments[i.id]||(t.localAdjustments[i.id]={}),t.localAdjustments[i.id][o.id]=m}t.activeEvents=t.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=e.time.turn)),Yn(t,.1)}function Ks(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const i=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=i}}e.initialDriftSeeded=!0}}function Ae(e){return je()[e]??0}function Zs(e,t){return ee().activeEvents.filter(a=>(a.expiresAtDay===void 0||r.time.day<a.expiresAtDay)&&a.expiresAtTurn>r.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function Qs(e){ee().activeEvents.push(e)}function ei(e){return ee().activeEvents.filter(n=>n.expiresAtTurn>r.time.turn&&(n.expiresAtDay===void 0||r.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function ti(e){if(Math.random()>.08||!C?.commodities?.length)return;const n=C.commodities[Math.floor(Math.random()*C.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:r.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};Qs(i),r.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function zn(e,t,n,a,s){if(n<=0||a<=0)return;const o=n*a/5e3,c=Math.min(.15,.03*o),l=ee();l.localAdjustments[e]||(l.localAdjustments[e]={});const d=l.localAdjustments[e][t]??1,u=s==="buy"?1+c:1-c,p=Un(d*u);l.localAdjustments[e][t]=p}function Gn(e,t){return ee().localAdjustments[e]?.[t]??1}function Un(e){return Math.min(2,Math.max(.5,e))}function Yn(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,i]of Object.entries(a)){const o=i-1,c=i-o*t;Math.abs(c-1)<.01?delete a[s]:a[s]=c}Object.keys(a).length||delete e.localAdjustments[n]}}function ni(){const t=U(r.location.systemId)?.neighbors.map(s=>U(s.id)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=Xn();if(r.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};r.player.credits-=n;const a=ee();return t.forEach(s=>{const i={};(C?.commodities||[]).forEach(c=>{const l=K(s.id,c.id);i[c.id]={buy:l.buy,sell:l.sell}});const o={turn:r.time.turn,prices:i};a.priceIntel[s.id]=o}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function Jn(){return ee().priceIntel}function Xn(){const t=U(r.location.systemId)?.neighbors.map(c=>U(c.id)).filter(c=>!!c)||[],n=80,a=t.map(c=>c.faction?os(c.faction):null).filter(c=>typeof c=="number"),s=a.length?a.reduce((c,l)=>c+l,0)/a.length:0,i=zt(1-s/200,.5,1.4),o=Math.round(n*i);return zt(o,40,140)}function zt(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function Kn(e,t,n){if(n<=0)return!1;const a=K(e,t).buy;if(a<=0)return!1;const s=a*n;if(r.player.credits<s)return!1;const i=r.ship.cargoCapacity;return i<=0?!1:qs()+n<=i}function Zn(e,t,n){return n<=0?!1:Ae(t)>=n}function Qn(e,t,n){if(!Kn(e,t,n))return!1;const a=K(e,t).buy,s=a*n;r.player.credits-=s;const i=je();i[t]=(i[t]||0)+n,zn(e,t,n,a,"buy");const o=Z(t);return r.notifications.push(`Bought ${n} ${o?.name||t} @ ${a} each for ${s} cr.`),!0}function Tt(e,t,n){if(!Zn(e,t,n))return!1;const a=K(e,t).sell,s=a*n,i=je();i[t]=Math.max(0,(i[t]||0)-n),r.player.credits+=s,ke(s),qa(t,n,s),zn(e,t,n,a,"sell"),_s(t,n,e);const o=Z(t);if(o){const c=U(e),l=Math.max(0,c?.marketProfile?.taxRate??0);l>0&&s>0&&nt("taxEvasion",Math.max(1,Math.round(s*l*.01))),o.legalStatus&&o.legalStatus!=="legal"&&nt("smuggling",Math.max(1,Math.round(s*.003)))}return r.notifications.push(`Sold ${n} ${o?.name||t} @ ${a} each for ${s} cr.`),!0}function ea(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const o=K(t,s).sell;return a+o*i},0)}const Gt={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function ta(e,t){if(!r||r.gameOver.active)return;const n=Na(),a=Ha(n),s={score:a,reason:e,message:t??Gt[e]??Gt.other,location:r.location.systemId,stats:n};r.combat=null,r.miningSession=null,r.gameOver={active:!0,reason:e,message:s.message,summary:s};const i={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};Wa(i),S.go("gameover")}function na(e=!1){const t=wn();Sn(t),Cn(),S.go(e?"main":"ship_select")}const Et="space-events-cache";let xe=[];function ai(e){const t=ui();xe=di(e,t),aa(xe)}function _t(e){return xe.find(t=>t.id===e)}function si(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=V(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,J().anomalyChance??1),s=Math.min(1,Math.max(0,(L.eventFrequency??50)/100*a));if(Math.random()>s)return;const i=xe.map(l=>({ev:l,weight:hi(l,e)})).filter(l=>l.weight>0);if(!i.length)return;const o=i.reduce((l,d)=>l+d.weight,0);let c=Math.random()*o;for(const l of i)if(c-=l.weight,c<=0)return l.ev;return i[0].ev}function ii(e){const t=e.outcomes;if(!t)return{};const n={},a=J(),s=Math.max(.1,Math.min(5,L.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),i=o=>{r.player.credits+=o,ke(o),r.player.credits<0&&(r.player.credits=0)};if(t.giveCredits){const o=t.giveCredits.min??0,c=t.giveCredits.max??o,l=ye(o,c),d=Math.round(l*s);i(d),r.notifications.push(`Received ${d} credits.`)}if(typeof t.creditsDelta=="number"){const o=Math.round(t.creditsDelta*s);i(o)}if(typeof t.fuelDelta=="number"){const o=r.ship.maxFuel,c=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;r.ship.fuel=Math.max(0,Math.min(o,r.ship.fuel+c))}if(typeof t.turnDelta=="number"){const o=Tn(t.turnDelta);r.time.turn+=o,ks(),Vn(o)}if(t.cargoGain&&Ut(pi(t.cargoGain,s,1),1),t.cargoLoss&&Ut(t.cargoLoss,-1),t.giveCommodity){const o=ye(t.giveCommodity.min,t.giveCommodity.max),c=Math.max(0,Math.round(o*s));at(t.giveCommodity.id,c),c>0&&r.notifications.push(`Collected ${c} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(r.inventory.weapons.push(t.giveWeapon),r.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const o=t.damageShip.min??0,c=t.damageShip.max??o,l=ye(o,c);if(r.ship.hp=Math.max(0,r.ship.hp-l),r.notifications.push(`Ship took ${l} damage.`),r.ship.hp<=0)return ta("ship_destroyed","Ship destroyed by event."),n}if(t.applyStatus&&r.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&$t(t.spawnMissionId).success&&r.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&r.notifications.push(`Event flag: ${t.flag}`),t.market){const o=t.market,c=Math.max(0,o.multiplier),l=Math.max(1,Math.floor(o.duration??2));Be(o.commodityId,c,l);const d=r.location?.systemId,u=o.commodityId&&C?.commodities?C.commodities.find(m=>m.id===o.commodityId):void 0,p=`${u?.name||"Local goods"} ${c>=1?"surge":"slip"}`;d&&r.marketState&&r.marketState.activeEvents.push({systemId:d,commodityId:o.commodityId??null,multiplier:c,expiresAtDay:r.time.day+l,expiresAtTurn:r.time.turn+l*2,label:p}),r.notifications.push(`Market shift in ${d??"this system"}: ${u?.name||"local goods"} x${c.toFixed(2)} for ${l} turns.`)}return t.modifyReputation&&Bn({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function oi(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,L.eventRewardMultiplier??1))*Math.max(.1,J().eventRewardMultiplier??1);if(n.mining){const s=ye(n.mining.quantity.min,n.mining.quantity.max),i=Math.max(0,Math.round(s*a));at(n.mining.commodityId,i),r.notifications.push(`Mining yield: ${i} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=ye(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),i=r.ship.maxFuel;r.ship.fuel=Math.max(0,Math.min(i,r.ship.fuel-s)),r.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];at(s,1),r.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(r.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),Be(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function ri(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(L.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(L.marketCrashChance??5)/100));if(e.location?.systemId){const s=C?.commodities?.[Math.floor(Math.random()*(C?.commodities.length||1))];if(s){const i=e.location.systemId,o=2+Math.ceil(Math.random()*2);if(Math.random()<n){const c=1.1+Math.random()*.35;Be(s.id,c,o),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:Math.max(0,c),expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${i}: ${s.name} prices x${c.toFixed(2)} for ${o} turns.`)}else if(Math.random()<a){const c=Math.max(.5,.85-Math.random()*.25);Be(s.id,c,o),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:c,expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${i}: ${s.name} prices x${c.toFixed(2)} for ${o} turns.`)}}}}function ci(){aa(xe)}function li(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(Et)}function di(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function ui(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Et);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function aa(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Et,JSON.stringify(e))}function Ut(e,t){for(const[n,a]of Object.entries(e)){const s=r.ship.cargo[n]??0,i=Math.max(0,s+a*t);r.ship.cargo[n]=i}}function pi(e,t,n=1){const a={};for(const[s,i]of Object.entries(e)){if(i<=0){a[s]=i;continue}const o=Math.max(n,Math.round(i*t));a[s]=o}return a}function at(e,t){const n=r.ship.cargo[e]??0,a=Object.values(r.ship.cargo).reduce((o,c)=>o+c,0),s=Math.max(0,r.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));r.ship.cargo[e]=n+i,i<t&&r.notifications.push(`Cargo full: stored ${i}/${t} ${e}.`)}function ye(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function mi(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function Yt(e,t){return e.has(t)}function hi(e,t){let n=e.weight??0;const a=mi(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(o=>a.has(o)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const i=Math.max(.1,L.eventDangerMultiplier??1);n*=i}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),Yt(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),Yt(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=oe().filter(i=>i.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let st=[];function fi(e){st=e}function gi(e,t=[]){const n=st.find(i=>i.id===`${e}_loot`);if(n)return n;const a=new Set(t);return st.find(i=>(i.enemyTags||[]).some(o=>a.has(o)))??null}function it(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function yi(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function vi(e,t){const n=V(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,i=e.max??s,o=it(s,i),c=Math.max(0,Math.round(o*a));r.player.credits+=c,t.creditsEarned+=c,ke(c);break}case"commodity":{const s=it(e.min??1,e.max??e.min??1),i=Math.max(0,Math.round(s*a)),o=bi(e.id||"unknown",i);o>0&&t.commodities.push({id:e.id||"unknown",qty:o});break}case"weapon":{e.id&&(r.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(r.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&$t(e.id).success&&t.missionsGranted.push(e.id);break}}}function bi(e,t){const n=r.ship.cargo[e]??0,a=Object.values(r.ship.cargo).reduce((o,c)=>o+c,0),s=Math.max(0,r.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));return r.ship.cargo[e]=n+i,i}function Mi(e,t,n={},a=[]){const s=V(),i=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),o=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>o)return null;const c=gi(e,a);if(!c)return null;const l=n.quickKill?1.5:1,d=n.lowDamageTaken?1.25:1,u={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(h,f)=>{if(!h?.length||Math.random()>f)return;const M=yi(h);M&&vi(M,u)};p(c.common,o),p(Jt(c.uncommon,d),.35*o);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(Jt(c.rare,l),m*o),c.guaranteed?.credits){const{min:h,max:f}=c.guaranteed.credits,M=it(h,f),v=Math.max(0,Math.round(M*i));r.player.credits+=v,u.creditsEarned+=v,ke(v)}return u}function Jt(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}function It(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,i=wi(t.weapons),o=Si(t.modules),c=e.player?.credits??0,l=Math.log10(c+1)*5,d=n+a+i+o+s/2+l;return Math.max(1,Math.round(d))}function Rt(e){const t=e/40;return t<0?0:t>1?1:t}const sa=30;function $i(e){e.difficulty&&(e.difficulty.day=e.time.day,e.difficulty.playerPowerScore=Math.max(1,Math.round(It(e)/sa)))}function ue(e,t){if(!e.difficulty)return;const n=e.difficulty.tension+t;e.difficulty.tension=Math.max(0,Math.min(100,n))}function ia(e){if(!e.difficulty)return 1;const t=Math.max(1,Math.round(It(e)/sa));e.difficulty.playerPowerScore=t;const n=e.difficulty.day*.03,a=t*.02,s=e.difficulty.tension*.01,i=1+n+a+s;return Math.max(1,i)}function xi(e){if(!e.difficulty)return;const t=Math.max(.5,Rt(e.time.day))*.05;ue(e,-Math.min(e.difficulty.tension,t))}function wi(e){return e.reduce((t,n)=>{if(!n)return t;const a=X(n);if(!a)return t;const s=a.damage??0,i=a.accuracy??0,o=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+i*.2+o},0)}function Si(e){return!e||!e.length?0:e.length*5}function ki(e){return C?C.systemsById[e]??null:null}function Oe(e,t){const n=ki(e);return n?n.tags.includes(t):!1}const Ci=0,Ti=100;function oa(e){const t=Math.max(Ci,Math.min(Ti,(r.player.wanted??0)+e));return r.player.wanted=t,t}function Ei(e,t,n){return Math.max(t,Math.min(n,e))}function _i(e){const{systemId:t,state:n,sessionFactor:a}=e,s=C?.systems.find(_=>_.id===t),i=s?.security??"medium",o=V(),c=J();let l;switch(i){case"high":l=.02;break;case"low":l=.12;break;default:l=.06;break}s?.tags.includes("mining_belt")&&(l+=.02),s?.marketProfile?.blackMarket&&(l+=.03);const d=ea(n,t),u=Yc(n.ship.templateId)?.cost??0,p=d+u,m=Math.min(.15,p/5e3)*Math.max(0,o.pirateCargoValueSensitivity??1),h=Ii(n,t),f=a*.03,M=Math.max(0,Math.min(1,(o.pirateEncounterRateBase??0)/100)),v=Math.max(0,Math.min(1,(L.pirateEncounterRate??0)/100)),y=Math.max(0,(o.encounterChancePerJump??100)/100),g=Math.max(0,o.globalDangerMultiplier??1)*Math.max(0,c.pirateDetectionMultiplier??1);let k=(l+m+f+h+M+v)*g*y;return Ri(k,n,t)}function Ii(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[l,d]of a){if(!d)continue;const u=K(t,l),p=Z(l)?.basePrice??u.sell;if(p<=0)continue;const m=(u.sell-p)/p;s+=m*d,i+=d}if(i<=0)return 0;const o=s/i;return Ei(o*.2,0,.15)}function Ri(e,t,n){const a=Rt(t.time.day),s=.4,o=s+(.75-s)*a;let c=e;return Oe(n,"core")?(c>.25&&(c=.25),c<.01&&(c=.01),c):(c>o&&(c=o),c<.01&&(c=.01),c)}const Di=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave – Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05},{id:"global_easy_signal_belt",name:"Low-Signal Relay Field",systemId:"global_easy_signal",tags:["mining_belt","easy_signal","global"],stability:{start:70,carefulLoss:{min:1,max:3},standardLoss:{min:3,max:6},overchargeLoss:{min:6,max:10}},commonTableId:"global_easy_common",rareTableId:"global_easy_rare",baseRareChance:.02}],Bi={belts:Di},ra="pirate_cutter",Ai=.5,Pi=100,Xt=Bi,We=9,qe=9,Ve=5;function ot(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function Li(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,s]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-s);e.ship.cargo=n,t.accumulatedOre={}}function rt(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((c,l)=>c+l,0),i=Math.max(0,e.ship.cargoCapacity-s),o=Math.max(0,Math.min(n,i));return o>0&&(a[t]=(a[t]??0)+o,e.ship.cargo=a),e.notifications||(e.notifications=[]),o<n&&e.notifications.push(`Cargo constrained: stored ${o}/${n} ${t}.`),o}function ne(e,t,n){return Math.max(t,Math.min(n,e))}function ca(e,t){const n=Math.max(1,qn(e,t)),a=Math.min(Pi,n*Ai);return Math.max(1,a)}function Fi(e){const t=Math.max(.1,L.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function la(){const e=[];for(let t=0;t<We;t++){const n=[];for(let a=0;a<qe;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function Ni(){const e=Math.floor(Math.random()*(We-4))+2,t=Math.floor(Math.random()*(qe-4))+2,n=2+Math.floor(Math.random()*(Ve-2));return{row:e,col:t,depth:n}}function Hi(e,t,n,a){const s=t-a,i=e-n;if(Math.sqrt(s*s+i*i)<.5)return null;const c=Math.atan2(i,s)*(180/Math.PI),l=c<0?c+360:c;return l>=337.5||l<22.5?"dir-e":l<67.5?"dir-se":l<112.5?"dir-s":l<157.5?"dir-sw":l<202.5?"dir-w":l<247.5?"dir-nw":l<292.5?"dir-n":"dir-ne"}function ji(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function da(e,t){const n=t?Xt.belts.find(s=>s.id===t):null;if(n)return n;const a=Xt.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function pe(e,t,n,a,s){if(e.lastMiningSystemId===t)return e.notifications.push("You need to travel to another system before mining again."),!1;const i=da(t,n),o=ua(e,i.id);if(s?.force&&(o.depletedUntilDay=void 0),o.depletedUntilDay!==void 0&&e.time.day<o.depletedUntilDay)return e.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`),!1;const c=0,l=la(),{row:d,col:u,depth:p}=Ni();return e.miningSession={active:!0,systemId:t,beltId:i.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:c,stability:i.stability.start,maxStability:i.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:l,gridRows:We,gridCols:qe,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:d,veinCol:u,veinDepth:p,lowSignalMode:!!s?.easySignals,accumulatedOre:{},beltName:i.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[]},e.lastMiningSystemId=t,!0}function Oi(e,t){e.miningSession&&(e.miningSession.depth=ne(Math.round(t),1,Ve))}function Wi(e,t,n){for(let a=0;a<e.length;a++)for(let s=0;s<e[a].length;s++)e[a][s].selected=a===t&&s===n}function qi(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const s=da(a.systemId,a.beltId),i=ne(Math.round(t),0,We-1),o=ne(Math.round(n),0,qe-1),c=ne(Math.round(a.depth??3),1,Ve);a.depth=c,a.grid=a.grid??la(),a.drillsUsed=(a.drillsUsed??0)+1;const l=o-(a.veinCol??0),d=i-(a.veinRow??0),u=c-(a.veinDepth??3),m=Math.sqrt(l*l+d*d)*2.6+Math.abs(u)*1.5,h=Math.max(.2,1-a.drillsUsed*.04),f=(Math.random()*2-1)*h,M=10-m;let v=ne(Math.round(M+f),0,10);a.lowSignalMode&&(v=ne(v,0,5));const y=Hi(a.veinRow??0,a.veinCol??0,i,o),g=ji(c,a.veinDepth??3),k=a.grid[i][o],_=!k.drilled;k.drilled=!0,k.signal=v,k.directionClass=y,k.depthHint=g.hint,k.depthClass=g.className,Wi(a.grid,i,o),a.selectedRow=i,a.selectedCol=o,_?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+v/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+v/50);const P=Math.max(0,L.miningThreatMultiplier??.7),N=3+c,x=Math.max(0,Math.round(N*P));a.threat=ne((a.threat??0)+x,0,100),a.currentPirateChance=(a.threat??0)/100;let w=Math.max(0,Math.round(v*.0025));v>0&&w===0&&(w=1);const D=a.resourceId??"aurite_ore",E=rt(e,D,w);ot(a,D,E);const I=ca(a.systemId,D),R=Math.round(I*E);a.totalValueMined+=R,a.lastYield={commodityId:D,amount:E,approxValue:R,rareFind:null},a.lastMessage=`Pulse at X${o+1}, Y${i+1}, Z${c}: signal ${v}. Depth ${g.hint}. Threat +${x}%. Ore +${E}.`;const H=Math.random()*100;let O=!1;const z=a.threat*.9;if(H<=z){O=!0,a.runComplete=!0,a.active=!1;const ae=ua(e,s.id);ae.depletedUntilDay=e.time.day+1,le(ra,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:v,directionClass:y,depthHint:g.hint,fightTriggered:O,threat:a.threat}}function Vi(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const s=ne(Math.round(t.depth??3),1,Ve),i=a-(t.veinCol??0),o=n-(t.veinRow??0),c=s-(t.veinDepth??3),l=Math.sqrt(i*i+o*o+c*c),d=Math.random()*1.5-.75,u=ne(Math.round(10-l*2+d),0,10),p=1+Math.max(0,s-2)*.12,h=Math.max(0,Math.round((u+p)*.2)),f=Math.min(.4,(t.explorationScore??0)/25),M=Fi(t),v=Math.min(1,M+f);let g=Math.max(1,Math.round(h*v*(1+.1)));g=Math.max(1,Math.round(g*.5));const k=t.resourceId??"aurite_ore",_=rt(e,k,g);ot(t,k,_);const P=ca(t.systemId,k),N=Math.max(.05,L.miningPayoutMultiplier??.35);let x=Math.round(P*_*N),b=null;if(u>=6&&Math.random()<.1+f*.5){const O=Math.max(1,Math.round(u/3)),z=rt(e,"stellite_fragment",O);if(z>0){b={id:"stellite_fragment",amount:z};const ae=Math.max(1,qn(t.systemId,b.id));x+=Math.round(ae*z*N),ot(t,b.id,z)}}t.totalValueMined+=x,t.lastYield={commodityId:k,amount:g,approxValue:x,rareFind:b},t.runComplete=!0,t.active=!1;const w=6+s*2,D=Math.max(0,L.miningThreatMultiplier??.7),E=Math.max(0,Math.round(w*D));t.threat=ne((t.threat??0)+E,0,100),t.currentPirateChance=(t.threat??0)/100,t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${s}: signal ${u}, efficiency ${(v*100).toFixed(0)}%, ore ${g} (${_} stored). Threat +${E}%.`;const I=Math.random()*100;let R=!1;const H=t.threat*.9;return I<=H&&(R=!0,le(ra,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset."),Xa(_+(b?.amount||0),!!b),{signal:u,yieldAmount:_,commodityId:k,rareFind:b,fightTriggered:R,threat:t.threat}}function zi(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function ua(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function Gi(e,t){const n=e.miningSession;n&&(Li(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function Ui(e){if(!C)throw new Error("Content has not been loaded.");const t=C.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function Kt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Yi(e){const t=[],n={};for(let a=0;a<e;a+=1){const s=a%3,i=n[s]??0,o=i===0?"front":"back";n[s]=i+1,t.push({lane:s,row:o})}return t}const Ji=1.25;function Xi(e,t,n){const a=Math.max(1,Math.round(e.hull*t)),s=Math.max(0,Math.round(e.shields*t));return n.map((i,o)=>({id:`${e.id}-${i.lane}-${i.row}-${o}-${Math.round(Math.random()*1e4)}`,templateId:e.id,name:e.name,hp:a,maxHp:a,shields:s,maxShields:s,weaponIds:e.weaponIds.slice(),weaponCooldowns:e.weaponIds.map(()=>0),position:i,alive:!0,side:"enemy",factionId:e.faction,factionLabel:C?.factions.find(c=>c.id===e.faction)?.name??void 0,statusEffects:[],tags:e.tags?[...e.tags]:[],canEscape:e.canEscape}))}function Ki(e,t){return t<=1?e.name:`${e.name} Squadron`}function Zi(e){const n=1-Se(e).evasionBonus;return Math.max(0,n)}function Qi(e,t,n){const s=Se(n).damageTakenMultipliers?.[t]??1;return Math.max(0,Math.round(e*s))}const ct=.55,pa=.9,eo=50,to=25,no=2,ao=1.2;function so(e){return e.heatCost??10}function io(e,t){const n=r.ship,a=Number.isFinite(n.heat)?n.heat:0,s=n.maxHeat||100,i=Math.min(s,a+Math.round(e));n.heat=i,a<s*ct&&n.heat>=s*ct&&T("Heat stabilizers warning: systems running hot.");const o=s*pa;if(a<o&&n.heat>=o){n.overheated=!0,n.overheatTurns=no,T("Warning: heat levels have maxed out; systems overheated!"),T("Overheat knocks shields offline until your systems cool down.");const c=r.combat;c&&(c.overheatPenaltyTurns=Math.max(c.overheatPenaltyTurns??0,2),c.overheatModalVisible=!0)}if(e>0){const c=t?`(${t}) `:"";T(`Heat ${c}+${Math.round(e)} → ${n.heat}/${s}`);const l=r.combat;l&&(l.lastHeatDelta=`Heat ${c}+${Math.round(e)} → ${n.heat}/${s}`)}}function ma(e,t,n){if(!e.length)return;const a=e.reduce((i,o)=>i+so(o),0);let s=1;t==="single"?s=n?1.2:.8:s=n?2.3:1.7,io(a*s,`${t}${n?" called":""}`)}function oo(){const e=r.ship,t=e.maxHeat||100,n=t>0?e.heat/t:0;return e.overheated||n>=pa?.75:n>=ct?.9:1}function ro(){const e=r.ship,t=e.overheated?to:eo;e.heat=Math.max(0,e.heat-t),e.heat===0&&(e.overheated=!1),e.overheated&&e.overheatTurns>0&&(e.overheatTurns=Math.max(0,e.overheatTurns-1),e.overheatTurns===0&&e.heat===0&&(e.overheated=!1))}const co=.4,lo=2,uo=2,po=3,Zt=2,Qt=3,mo=.7;function Ke(e,t,n){const a=e.statusEffects.find(s=>s.type===t);return a?(a.duration=Math.max(a.duration,n),!1):(e.statusEffects.push({type:t,duration:n}),!0)}function ho(e,t){return e.statusEffects.some(n=>n.type===t)}function Q(e,t,n,a){return e.encounter.enemies.find(s=>s.position.lane===t&&s.position.row===n&&(!a||s.side===a))}function fo(e,t,n){return e.encounter.enemies.filter(a=>a.position.lane===t&&a.side===n)}function lt(e,t,n){if(!n.alive)return!1;const a=Q(e,n.position.lane,"front",n.side);if(n.position.row==="back"&&a&&a.alive&&!t.canBypassCover)return!1;switch(t.targetingMode){case"frontOnly":return n.position.row==="front";case"linePierce":return n.position.row==="front";case"splashLane":return n.position.row==="front";default:return!0}}function go(e){if(!(!e||!C))return C.factions.find(t=>t.id===e)}const yo=2;function vo(e,t,n){let a=0;const s=n.maxShields?n.shields/n.maxShields:0,i=n.maxHp?n.hp/n.maxHp:0;a+=(1-s)*3,a+=(1-i)*5,n.isFragile&&(a+=3),(n.role==="support"||n.role==="artillery")&&(a+=2),!t.canBypassCover&&n.position.row==="front"&&(a+=1),t.linePierce&&n.position.row==="front"&&(a+=1),t.damageType===n.damageProfile&&(a+=1);const o=go(e.factionId);return o&&o.preferredDamage.includes(t.damageType)&&(a+=yo),a}function bo(){const e=r.ship;return{id:"player",side:"player",templateId:"player",name:e.name,hp:e.hp,maxHp:e.maxHp,shields:e.shields,maxShields:e.maxShields,weaponIds:[],weaponCooldowns:[],position:{lane:1,row:"front"},statusEffects:[],tags:[],canEscape:!1,alive:e.hp>0}}function Mo(e,t,n,a=[]){const s=[...n.encounter.enemies.filter(o=>o.side!==e.side&&lt(n,t,o)),...a.filter(o=>o.side!==e.side&&lt(n,t,o))];return s.length?s.map(o=>({slot:o,score:vo(e,t,o)})).sort((o,c)=>c.score-o.score)[0].slot:null}function $o(e,t,n,a){if(!(!n||n.side!=="enemy")){if(t.linePierce&&n.position.row==="front"){const s=Q(e,n.position.lane,"back");if(s&&s.alive&&s.side!==n.side){const i=Math.max(0,Math.round(a*.5));dt(i,t.damageType,t,s),T(`${t.name} pierces through ${n.name} and grazes ${s.name} for ${i}.`)}}if(t.splashRadius&&n.position.row==="front"){const s=e.encounter.enemies.filter(o=>o.position.lane===n.position.lane&&o.id!==n.id&&o.alive),i=Math.max(0,Math.round(a*.35));for(const o of s)dt(i,t.damageType,t,o),T(`${t.name} splashes ${o.name} for ${i} damage.`)}}}function xo(e,t,n){e==="explosive"&&n.shields<=0&&t>=8&&Math.random()<=.3&&Ke(n,"breach",lo)&&T(`${n.name} suffers a hull breach!`),e==="disruptive"&&t>=5&&Math.random()<=.3&&Ke(n,"jammed",uo)&&T(`${n.name} is jammed and struggles to stay online!`),e==="energy"&&n.shields<=0&&t>=6&&Math.random()<=.25&&Ke(n,"burn",po)&&T(`${n.name} is singed by the energy barrage!`)}function wo(e){for(const t of[...e.encounter.enemies]){if(t.statusEffects.length===0)continue;const n=[];for(const a of t.statusEffects){if(a.type==="breach"&&t.hp>0){const s=Math.min(t.hp,Zt);t.hp=Math.max(0,t.hp-Zt),s>0&&T(`${t.name} leaks atmosphere from the breach (-${s} hull).`)}if(a.type==="burn"&&t.hp>0){const s=Math.min(t.hp,Qt);t.hp=Math.max(0,t.hp-Qt),s>0&&T(`${t.name} suffers burning damage (-${s} hull).`)}a.duration-=1,a.duration>0?n.push(a):T(`${t.name} recovers from ${a.type}.`)}t.statusEffects=n,t.hp<=0&&fa(e,t.id)}}function So(e){return e.encounter.enemies.find(t=>t.id===e.selectedEnemyId)}function ha(e){const t=So(e);if(t)return t;const n=e.encounter.enemies.find(a=>a.position.row==="front")??e.encounter.enemies[0];return n?e.selectedEnemyId=n.id:e.selectedEnemyId=null,n}function ko(e,t){const n=e.encounter.enemies.find(a=>a.position.lane===t&&a.position.row==="back");n&&(n.position.row="front",T(`${n.name} steps forward to lane ${t}.`))}function fa(e,t){const n=e.encounter.enemies.findIndex(s=>s.id===t);if(n===-1)return;const[a]=e.encounter.enemies.splice(n,1);if(a.position.row==="front"&&ko(e,a.position.lane),e.selectedEnemyId===t){const s=e.encounter.enemies.find(i=>i.position.row==="front")??e.encounter.enemies[0];e.selectedEnemyId=s?.id??null}}function en(e,t){const n=e;for(let a=0;a<3;a+=1){const s=Q(n,a,"front",t),i=Q(n,a,"back",t);if(!s||!i||!s.alive||!i.alive)continue;const o=s.maxHp>0?s.hp/s.maxHp:0,c=i.maxHp>0?i.hp/i.maxHp:0,d=(s.shields<s.maxShields||s.hp<s.maxHp)&&(s.shields===0||o<co),p=!(i.isFragile??!1)&&c>=o;d&&p&&(s.position.row="back",i.position.row="front",T(`${i.name} surges forward in lane ${a+1} as ${s.name} pulls back to recover.`))}}function tn(e,t){const n=e;for(let a=0;a<3;a+=1){const s=Q(n,a,"front",t);if(s&&s.alive)continue;const i=Q(n,a,"back",t);if(!i||!i.alive)continue;const o=i.isFragile??!1;(i.wantsFrontline||!o)&&(i.position.row="front",T(`${i.name} fills the empty front line in lane ${a+1}.`))}}function Co(e){en(e,"player"),en(e,"enemy"),tn(e,"player"),tn(e,"enemy"),Eo(e),To(e),ha(e)}function To(e){const t=e;for(let n=0;n<3;n+=1){const a=Q(t,n,"front","enemy"),s=Q(t,n,"back","enemy");if(!a||!a.alive||s&&s.alive)continue;const i=t.encounter.enemies.find(o=>o.side==="enemy"&&o.alive&&o.position.row==="front"&&o.id!==a.id&&o.position.lane!==n&&!(o.wantsFrontline??!1));i&&(i.position={lane:n,row:"back"},T(`${i.name} drops into lane ${n+1} to shelter behind ${a.name}.`))}}function Eo(e){const t=e;for(let n=0;n<3;n+=1){const a=Q(t,n,"front","enemy"),s=Q(t,n,"back","enemy");if(!a||!a.alive||s&&s.alive)continue;const i=t.encounter.enemies.find(c=>c.side!=="enemy"||!c.alive||c.position.row!=="front"||c.position.lane===n||(c.wantsFrontline??!1)?!1:fo(t,c.position.lane,"enemy").filter(d=>d.alive&&d.id!==c.id).length>0);if(!i)continue;i.position={lane:n,row:"back"};const o=a.name??`Lane ${n+1}`;T(`${i.name} maneuvers into lane ${n+1} to take cover behind ${o}.`)}}function dt(e,t,n,a){const s=tt[t];if(!s||e<=0)return 0;const i=n.tags||[];if(a.shields>0){let l=s.vsShields*(n.shieldMod??1);i.includes("shield_breaker")&&(l*=1.2);const d=Math.max(0,Math.round(e*l));return a.shields=Math.max(0,a.shields-d),d}let o=s.vsHull*(n.armorMod??1);i.includes("armor_piercing")&&(o*=1.2);const c=Math.max(0,Math.round(e*o));return a.hp=Math.max(0,a.hp-c),a.alive=a.hp>0,c}function T(e){const t=r.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}function _o(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function Io(e){return e??"main"}function Ro(e,t){S.go(Io(e),t)}function le(e,t={}){const n=Ui(e),s=r.ship.weapons.map(()=>0),i=V(),o=ia(r),c=Math.max(1,(i.enemyHpMultiplier??1)*o),l=Math.max(1,Math.round(i.enemyCountMin??1)),d=Math.max(l,Math.round(i.enemyCountMax??l)),u=Math.floor(Math.random()*(d-l+1))+l,p=Math.max(1,u),m=Yi(p),h=Xi(n,c,m),f=Ki(n,h.length);r.combat={encounter:{id:n.id,name:f,enemies:h,tags:n.tags?[...new Set(n.tags)]:[]},selectedEnemyId:h[0]?.id??null,playerCooldowns:s,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:r.ship.hp,round:1,log:[`${f} engages you in combat!`],adviceToken:Math.random(),returnTo:t.returnScreen,returnParams:t.returnParams,overheatPenaltyTurns:0,overheatModalVisible:!1,lastHeatDelta:""},p>1&&r.combat.log.push(`Multiple bogies detected (${p} ships).`),S.go("combat")}function Do(e){const t=Bo(e);le(t)}function Bo(e){if(!C?.enemies?.length)return"pirate_cutter";const t=It(r),n=Rt(r.time.day),a=V(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,r.time.day-1),i=Math.max(0,a.difficultyScalePerShipPower??1),o=t*i*s;let c=o*(.6+.2*n),l=o*(.9+.4*n);e&&Oe(e,"core")&&(c=t*.4,l=t*.8);const d=C.enemies.map(h=>({id:h.id,power:_o(h)})),u=d.filter(h=>h.power>=c&&h.power<=l);if(u.length)return u[Math.floor(Math.random()*u.length)].id;let p=d[0],m=Math.abs(d[0].power-t);for(const h of d){const f=Math.abs(h.power-t);f<m&&(p=h,m=f)}return p.id}function ze(e,t,n="normal"){const a=r.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){T("You must choose a weapon to fire.");return}ga(t,n);break;case"fire_all":Lo(n);break;case"brace":Fo();break;case"flee":if(No())return;break}if(r.combat){if(a.encounter.enemies.length===0){Oo();return}if(!Ao()&&(ya(),!!r.combat)){if(r.ship.hp<=0){va();return}Co(a),jo(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Ao(){const e=r.combat;if(!e||!(e.overheatPenaltyTurns??0))return!1;let t=!1;for(;e.overheatPenaltyTurns&&e.overheatPenaltyTurns>0&&(t=!0,e.overheatPenaltyTurns-=1,T("Overheat penalty: the enemy seizes a free strike while you cool down!"),ya(),!!r.combat);)if(r.ship.hp<=0){va();break}return r.combat&&(e.overheatModalVisible=!1),t}function ga(e,t,n={}){const a=r.combat;if(!a)return;const s=r.ship;if(e<0||e>=s.weapons.length){T("Invalid weapon slot.");return}const i=s.weapons[e];if(!i){T("That hardpoint is empty.");return}const o=X(i);if(!o){T("Missing weapon data.");return}const l=s.weapons.filter((x,b)=>b!==e&&!!x&&(a.playerCooldowns[b]??0)<=0).length===0;ma([o],"single",t==="called_shot");const d=J(),u=a.round<=1,p={...o,critChance:Math.min(.95,(o.critChance??0)+(d.critBonus??0)+(u?d.critBonus??0:0))},m=a.playerCooldowns[e]??0;if(m>0){T(`${o.name} is still recharging (${m} turn${m===1?"":"s"}).`);return}const h=t==="called_shot"?Wt.damageMultiplier:1,f=t==="called_shot"?Wt.accuracyMultiplier:1,M=Pn(p,{accuracyMultiplier:f*oo(),damageMultiplier:h*(d.playerDamageBonus??1)});if(M<=0){const x=t==="called_shot"?"called shot goes wide":"misses";T(`You fire ${o.name}, but it ${x}.`),a.playerCooldowns[e]=o.cooldown;return}const v=ha(a);if(!v){T("No enemy target available."),a.playerCooldowns[e]=o.cooldown;return}const y=a;if(!lt(y,o,v)){const x=Q(y,v.position.lane,"front","enemy");T(x&&x.alive?`${o.name} cannot hit ${v.name} because ${x.name} is covering the lane.`:`${o.name} cannot reach ${v.name}.`),a.playerCooldowns[e]=o.cooldown;return}const g=v.shields>0?"shields":"hull";let k=M;l&&(k=Math.max(1,Math.round(M*Ji)),T(`Solo fire bonus: ${o.name} punches harder this turn.`));const _=!n.isVolley&&v.shields>0?ao:1;k=Math.round(k*_);const P=dt(k,o.damageType,o,v);P>0&&(Ga(P),xo(o.damageType,P,v));const N=t==="called_shot"?"called shot":"normal shot";T(`You strike ${v.name}'s ${g} with ${o.name} (${N}) for ${P} damage.`),P>0&&o.tags?.includes("disruptor")&&(a.enemyStatus.weaponJammedTurns=Math.min(2,a.enemyStatus.weaponJammedTurns+1),T(`${v.name}'s weapons are disrupted!`)),a.playerCooldowns[e]=o.cooldown,v.hp<=0&&(T(`${v.name} is destroyed!`),fa(a,v.id))}function Po(e){if(!C)return[];const t=r.ship,n={disruptive:0,energy:1,kinetic:2,explosive:3},a=[];for(let s=0;s<t.weapons.length;s+=1){const i=t.weapons[s];if(!i)continue;const o=X(i);!o||(e.playerCooldowns[s]??0)>0||a.push({idx:s,weapon:o})}return a.sort((s,i)=>{const o=n[s.weapon.damageType]??4,c=n[i.weapon.damageType]??4;return o!==c?o-c:s.idx-i.idx})}function Lo(e){const t=r.combat;if(!t)return;if(r.ship.overheated){T("Systems are overheated; volley fire is disabled until heat subsides.");return}const a=Po(t);if(!a.length){T("No weapons are ready to fire.");return}ma(a.map(({weapon:s})=>s),"volley",e==="called_shot");for(const{idx:s}of a){if(!r.combat||r.combat.encounter.enemies.length===0)break;ga(s,e,{isVolley:!0,volleyCount:a.length})}}function Fo(){const e=r.combat;e&&(e.playerBracing=!0,T("You brace for impact, diverting power to shields and hull integrity."))}function No(){const e=r.combat;if(!e)return!1;if(!e.canEscape)return T("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4;let n=0;e.playerStance==="evasive"&&(n=.15),e.playerStance==="brace"&&(n=-.05),e.playerStance==="overcharge"&&(n=-.1);const a=(r.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),i=Pe((a-40)*.01,-.15,.15),o=V(),c=J(),l=(o.fleeSuccessBonus??0)/100+(c.fleeBonus??0),d=Pe(t+n+i+l,.05,.95);return Math.random()<=d?(T(`You punch the thrusters and break free! (Flee chance ${(d*100).toFixed(0)}%)`),ue(r,-5),r.combat=null,Gi(r,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),S.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(T(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(d*100).toFixed(0)}%)`),!1)}function ya(){const e=r.combat;if(!e)return;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,T("Enemy weapons are jammed this round!");return}const t=e,n=e.encounter.enemies.filter(_=>_.weaponIds.some((P,N)=>P&&(_.weaponCooldowns[N]??0)<=0&&_.alive));if(!n.length){T(`The ${e.encounter.name} reloads while you advance.`);return}const a=n[Kt(0,n.length-1)],s=a.weaponIds.map((_,P)=>({id:_,idx:P})).filter(({id:_,idx:P})=>!!_&&(a.weaponCooldowns[P]??0)<=0);if(!s.length){T(`The ${a.name} catches its breath while reloading.`);return}const i=s[Kt(0,s.length-1)],o=X(i.id);if(!o){T(`The ${a.name} fumbles its weapon.`);return}const c=bo(),l=Mo(a,o,t,[c]);if(!l){T(`${a.name} finds no valid targets.`);return}const d=ho(a,"jammed");d&&T(`${a.name} is still recovering from jammed systems.`);const u=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),p=V(),m=J(),h=e.round<=1,f=Math.max(0,(1-u)*(p.enemyAccuracyMultiplier??1)*Math.max(0,1-(m.dodgeBonus??0))*(h?Math.max(0,1-(m.dodgeBonus??0)):1)),M=Zi(e.playerStance),v=Math.max(0,f*M*(d?mo:1));let y=Pn(o,{accuracyMultiplier:v});const g=ia(r);y=Math.max(0,Math.round(y*(p.enemyDamageMultiplier??1)*g)),e.playerBracing&&(y=Math.round(y*cs)),y=Qi(y,o.damageType,e.playerStance),y=Math.max(0,Math.round(y*(p.playerDamageTakenMultiplier??1)*Math.max(.1,m.damageTakenMultiplier??1)*(h?Math.max(.1,m.damageTakenMultiplier??1):1)));let k=y;if(e.playerStatus.shieldBoost>0){const _=Math.min(e.playerStatus.shieldBoost,k);e.playerStatus.shieldBoost-=_,k-=_}if(!r.ship.overheated&&r.ship.shields>0&&k>0){const _=Math.min(r.ship.shields,k);r.ship.shields-=_,k-=_}else r.ship.overheated&&T("Overheat damages bypass shields; hull is exposed.");k>0&&(r.ship.hp=Math.max(0,r.ship.hp-k)),T(`The ${a.name} hits you with ${o.name} for ${y} damage.`),Ua(y),ue(r,-Math.min(6,Math.floor(y/10))),a.weaponCooldowns[i.idx]=o.cooldown+(d?1:0),$o(t,o,l,y)}function Ho(){const e=r.combat;if(!e)return null;const t=e.encounter.enemies;if(!t.length)return null;const n=t.flatMap(d=>d.weaponCooldowns.map(u=>u??Number.MAX_SAFE_INTEGER)),a=Math.min(...n.length?n:[Number.MAX_SAFE_INTEGER]),s=[];if(a<=1){const d=Pe(.6+(1-a)*.2,.65,.95);s.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${a} turn${a===1?"":"s"} - brace to soften the incoming blow.`,suggestion:"brace",confidence:d})}const i=t.find(d=>d.position.row==="front")??t[0];if(i&&i.shields<=0){const u=e.playerCooldowns.filter(m=>m<=0).length/Math.max(1,r.ship.weapons.length),p=Pe(.6+u*.3,.6,.9);s.push({text:"Shields down - called shots are primed to shatter the hull before the enemy recovers.",suggestion:"overcharge",confidence:p})}r.ship.hp/r.ship.maxHp<.4&&s.push({text:"Hull integrity is low - brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),s.push({text:"Balanced posture - cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const o=((e.adviceToken??Math.random())+e.round*.13)%1,c=Math.floor(o*s.length),l=s[c];return{...l,confidence:l.confidence}}function jo(){const e=r.combat;if(e){e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0);for(const t of e.encounter.enemies)t.weaponCooldowns=t.weaponCooldowns.map(n=>n>0?n-1:0);wo(e),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)),ro()}}function Oo(){const e=r.combat;if(!e)return;const t=e.encounter;T(`The ${t.name} explodes under your punishing fire. Victory is yours.`);const n=Math.max(0,e.startingHp-r.ship.hp),a=e.totalRounds<=3,s=n<=5,i=Mi(t.id,t.name,{quickKill:a,lowDamageTaken:s},t.tags);if(i){r.lastBattleResult=i;const c=[];i.creditsEarned&&c.push(`Credits: +${i.creditsEarned}`),i.commodities.length&&c.push(`Cargo: ${i.commodities.map(l=>`${l.qty} ${l.id}`).join(", ")}`),i.weapons.length&&c.push(`Weapons: ${i.weapons.join(", ")}`),i.components.length&&c.push(`Components: ${i.components.join(", ")}`),i.missionsGranted.length&&c.push(`Missions: ${i.missionsGranted.join(", ")}`),T(`Loot recovered — ${c.join(" | ")||"nothing notable."}`),a&&T("Because you won quickly, salvage yields are richer."),s&&T("Minimal hull damage preserved more intact cargo.")}else T("No notable loot recovered.");const o=3+(a?2:0)+(s?1:0);if(ue(r,o),i?.creditsEarned&&i.creditsEarned>300&&ue(r,2),t.tags.some(c=>/navy|elite/.test(c))&&ue(r,2),Ya(),Ja(),Is(t.id),t.tags.some(c=>/pirate|raider/i.test(c))||t.id.includes("pirate")||t.id.includes("raider")){const c=V().repGainMultiplier??1;oa(Math.round(3*c))}r.combat=null,Ro(e.returnTo,e.returnParams)}function va(){T("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),r.ship.hp=0,r.ship.shields=0,r.combat=null,r.notifications.push("Critical failure — hull integrity dropped to zero."),ta("ship_destroyed","Ship destroyed in combat.")}function ba(e){const t=r.combat;if(!t)return;t.playerStance=e;const n=Se(e);T(`Stance changed to ${n.label}.`)}function Pe(e,t,n){return Math.max(t,Math.min(n,e))}function Wo(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function qo(e,t){Vo(e,t).lastRiskSeenDay=e.time.day}function Vo(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function zo(e){e.time.day+=1,$i(e),xi(e),Za(e.time.day),Vn(e),ri(e),Ls(e),Wo(e),zi(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{Zo(e)};function Ma(){return C?C.systemsById:null}function $a(e){const t=Ma();return t?t[e]??null:null}function Go(e,t){return e.neighbors.find(n=>n.id===t)??null}let Dt=0,nn=1;function Uo(e){e!==nn&&(nn=e,Dt=0)}function Bt(e){return e<=0?!1:Dt<e}function At(){Dt+=1}function ce(e){V().showEncounterDebug&&r.notifications.push(`Encounter debug: ${e}`)}function Ge(){return $a(r.location.systemId)}function Yo(){const e=Ge();if(!e)return[];const t=Ma();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:xa(e,a,n)}:null}).filter(n=>n!==null):[]}function xa(e,t,n){const a=J(),s=(e.baseDanger+t.baseDanger)/2,i={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},o=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,c=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,l=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,d=(i[e.region]??0)+(i[t.region]??0),u=Math.max(1,Math.round(n.distance*c+Math.max(0,d)*2)),p=Le(.1*n.distance+s*.12+l+d+(n.laneType==="wildspace"?.05:0),.1,.95),m=Math.min(.95,Math.max(.1,p)),h=Math.max(0,m-Math.max(0,a.hazardDetectionBonus??0)),f=Math.max(1,Math.round(n.distance*o*(1+s*.06))),M=Math.max(1,Math.round(f*Math.max(.1,a.fuelCostMultiplier??1))),v=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:u,fuelCost:M,hazardChance:h,hazardMitigation:Math.max(0,m-h),routeType:v,laneType:n.laneType,distance:n.distance}}function Le(e,t,n){return Math.max(t,Math.min(n,e))}function wa(e){const t=r.ship.cargo||{};let n=0,a=0,s=0;for(const[o,c]of Object.entries(t)){if(!c)continue;const l=Z(o);if(!l||l.legalStatus!=="illegal"&&l.legalStatus!=="restricted")continue;const d=K(e.id,o);s+=d.sell*c,l.legalStatus==="illegal"?n+=c:a+=c}const i=n+a;return i<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:i,estimatedValue:s}}function Jo(e,t,n,a=J()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.08),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.05),n==="trade_lane"&&(s+=.06);const i=1+Math.min(1,e.illegalUnits*.06+e.restrictedUnits*.025),o=Math.max(0,a.scanDetectionMultiplier??1),c=Math.max(.5,a.illegalTolerance??1),l=Le(s*i*o/c,0,.95),{detectionReduction:d}=kt();return Math.max(0,l-d)}function Xo(e,t){const n=wa(e);if(!n)return!1;const a=J(),s=Jo(n,e,t.routeType,a);if(r.notifications.push(`Warning: checkpoint scan imminent (${Math.round(s*100)}% detection chance).`),Math.random()>s)return!1;const i=r.ship.cargo||{};let o=0;for(const[y,g]of Object.entries(i)){if(!g)continue;const k=Z(y);k&&k.legalStatus==="illegal"&&(o+=g,i[y]=0)}r.ship.cargo=i;const c=Math.max(25,Math.round(n.estimatedValue*.35)),l=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,d=c+l,{fineDiscount:u}=kt(),p=Math.round(d*u),m=Math.max(0,d-p);r.player.credits=Math.max(0,r.player.credits-m);const h=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25)),f=Math.round(h*u*.6),M=Math.max(0,h-f);oa(M);const v=n.restrictedUnits>0?" (restricted goods fined, not seized)":"";return r.notifications.push(`Checkpoint scans flag contraband. Seized ${o} illegal units, fined ${m} credits${v}, wanted +${M}.`),!0}function Ko(e,t,n,a){const s=Le((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),i=Le(t,0,.95),o=Math.max(0,Math.round((s-i)*100));o>0&&r.notifications.push(`Hazard scanners trimmed travel risk by ${o}% (current hazard ${(i*100).toFixed(0)}%).`)}function Zo(e){const t=Ge();if(!C||!t)return;const n=Go(t,e);if(!n){const g=`No direct route from ${t.name} to ${e}.`;console.warn(g),r.notifications.push(g),S.go("main",{message:g});return}const a=$a(e);if(!a){const g=`Destination ${e} is unknown.`;console.warn(g),r.notifications.push(g),S.go("main",{message:g});return}const s=xa(t,a,n),i=Math.max(0,L.fuelCostMultiplier??1),o=Math.max(0,Math.round(s.fuelCost*i)),c=Math.max(0,Math.min(3,(L.travelRiskScaling??100)/100)),l=V(),d=Math.max(0,l.globalDangerMultiplier??1),u=Math.min(.95,Math.max(0,s.hazardChance*c*d)),p={...s,fuelCost:o,hazardChance:u};if(r.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}r.ship.fuel-=p.fuelCost,r.location.systemId=a.id,r.lastMiningSystemId=null,r.location.docked=!0,S.advanceActiveRoute(a.id);const m=Tn(s.travelTime);r.time.turn+=m,ti(a.id),zo(r),Uo(r.time.day),qo(r,a.id),Ka();const h=Rs(r,a.id);h.completed.length&&console.log(`Arrived at ${a.id}: checked ${h.checked} contracts, completed ${h.completed.join(", ")}.`);const f=Number.isInteger(m)?m.toFixed(0):m.toFixed(2),M=Math.abs(m-1)<.01?"":"s",v=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${f} turn${M}).`;Ko(s,p.hazardChance,c,d),Xo(a,p)&&ce("Contraband inspection triggered on arrival."),!er(a)&&(tr(a)||Qo(t,a,p,v)||S.go("main",{message:v}))}function Qo(e,t,n,a){const s=V(),i=Math.max(0,(s.encounterChancePerJump??100)/100),o={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*i),routeType:n.routeType},c=sr(t)??si(o);return c?(ce(`Travel event triggered: ${c.name||c.id||"unknown"}`),c.type==="mining"?(ce(`Mining event surfaced: ${c.id}`),S.go("event",{eventId:c.id}),!0):!c.choices||c.choices.length===0?(ce(`Auto-resolving event: ${c.name||c.id||"unknown"}`),nr(c,a)):(S.go("event",{eventId:c.id}),!0)):(S.go("main",{message:`${a} — Uneventful transit.`}),!0)}function er(e){const t=V(),n=Math.max(0,t.maxEncountersPerDay??0);if(!Bt(n))return!1;const a=_i({systemId:e.id,state:r,sessionFactor:1});if(Math.random()<=a){At();const s=`Pirates intercept you near ${e.name}!`;return r.notifications.push(s),ce(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),Do(e.id),!0}return!1}function tr(e){const t=V(),n=Math.max(0,t.maxEncountersPerDay??0);if(!Bt(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),i=e.security==="high"?1.15:e.security==="low"?.65:1,o=J(),c=wa(e),{detectionReduction:l,fineDiscount:d}=kt(),u=c?1+Math.min(1.2,c.totalUnits*.02):1,p=Math.max(.6,u*Math.max(0,1-d*.8)),m=Math.max(0,o.scanDetectionMultiplier??1)/Math.max(.5,o.illegalTolerance??1),h=a*s*i*p*m,f=Math.min(1,Math.max(0,h*Math.max(0,1-l*.6)));if(Math.random()<=f){At();const M=`Patrol intercepts you near ${e.name}!`;return r.notifications.push(M),ce(`Patrol encounter triggered near ${e.name} (chance ${f.toFixed(3)})`),le("navy_interceptor"),!0}return!1}function nr(e,t){const n=oi(e);if(n.triggerCombat?.enemyId){const a=V(),s=Math.max(0,a.maxEncountersPerDay??0);if(!Bt(s))return S.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;At();const i=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return ce(i),le(n.triggerCombat.enemyId),!0}return S.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const ar={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function sr(e){const t=ir(e);return t?_t(t)??null:null}function ir(e){const t=[],n=new Set(e.tags||[]),a=o=>{t.includes(o)||t.push(o)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(ar[e.id]??"mining_fragment_field"),["wildspace","anomaly","mining"].some(o=>n.has(o))&&a("mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),Math.random()<.18&&!t.includes("mining_fragment_field")&&a("mining_fragment_field"),t.length?t[Math.floor(Math.random()*t.length)]:null}function Ce(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}window.nav=(e,t={})=>{S.go(e,t)};window.toggleTools=()=>{const e=document.getElementById("toolsActions"),t=document.getElementById("toolsToggleBtn");if(!e||!t)return;const n=e.classList.toggle("collapsed");t.textContent=n?"Show":"Hide"};window.startMiningSessionFromMain=()=>{const e=r.location.systemId,t=U(e);if(!t)return;const n="global_easy_signal_belt",a=Array.isArray(t.tags)&&t.tags.includes("mining_belt");pe(r,e,a?void 0:n,void 0,{easySignals:!0})?S.go("mining"):S.go("main",{message:"Travel to a new system before mining again."})};function or(){const e=r,t=U(e.location.systemId),n=(()=>{const o=(t?.description??"Unknown space").trim(),c=o.split(".")[0];return c===o?o:`${c}.`})(),a=Object.values(e.ship.cargo||{}).reduce((o,c)=>o+c,0),s=e.notifications[e.notifications.length-1],i=(e.notifications||[]).slice(-5).reverse();return`
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
          ${s?`<p class="muted">Log: ${s}</p>`:""}
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
                  <strong>Day ${e.time.day} · Turn ${Ce(e.time.turn)}</strong>
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
            ${i.length?i.map(o=>`
                <div class="app-log-line">
                  <span>${o}</span>
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
              ${Oe(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}window.attackPirateBase=e=>{const t=rr(e);if(!t){console.warn(`Unknown base ${e}`);return}S.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function rr(e){return C?C.basesById[e]??null:null}function cr(e){return C?Object.values(C.basesById).find(n=>n.systemId===e)??null:null}function lr(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}const an={pirate:"Sensors pick up razor-thin kinematic volleys—expect raiders and brawlers that favor heavy hull breaks.",raider:"Raiders pressure forward with kinetic + explosive clusters. Keep shields topped and aim for front rows.",ghost:"Ghost Fleet whispers with disruptives—jam vs. shields, then focus on energy weapons.",corsair:"Corsairs hang back with energy/lance beams. Strike their hulls quickly or they will melt your shields."};function dr(e){for(const t of e)if(an[t])return an[t];return""}window.setMapZoom=e=>{S.setZoom(e)};window.focusRoute=e=>{S.go("travel",{...S.params,focusTargetId:e})};function ur(){const e=Ge(),t=Yo(),n=S.zoom||"local",a=typeof S.params.focusTargetId=="string"?S.params.focusTargetId:"",s=S.activeRoute,i=s?.nodes[s.currentIndex+1],o=s&&s.nodes.length>1?s.nodes.map(y=>U(y)?.name??y).join(" → "):"",c=Object.values(r.ship.cargo||{}).reduce((y,g)=>y+g,0),l=t.map(({profile:y})=>y.hazardChance).reduce((y,g)=>Math.max(y,g),0),d=Math.round((l||0)*100);if(!e)return`
      <div class="app-root">
        <header class="app-header app-header--market">
          <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
    `;const u=e?cr(e.id):null,p=lr(u),m=dr(e.tags||[]),h=m?`<div class="panel-card intel-hint">${m}</div>`:"",f=u?`
      <div class="panel-card">
        <p class="label">${p}</p>
        <p class="muted">${u.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${u.id}')">
          Attack Pirate Base (Tier ${u.tier})
        </button>
      </div>
    `:"",M=e?yr(e,t,n,a,s):"",v=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:y,route:g,profile:k})=>{const _=y.id===a,P=y.id===i,N=pr(y.security),x=mr(y),b=fr(k.hazardChance),w=`${k.fuelCost} fuel`,D=`${k.travelTime} turn${k.travelTime===1?"":"s"}`,E=gr(g.laneType),I=`Distance: ${g.distance}`,R=x.join(" | "),H=["travel-row"];return(_||P)&&H.push("travel-row--focused"),`
              <article class="${H.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${y.name}</span>
                  <span class="travel-row__label">${N}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${E}</span>
                    <span>${I}</span>
                  </div>
                  <span class="travel-row__label">${w} | ${D} | Risk: ${b}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${y.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${y.id}')">Jump to ${y.name}</button>
                </div>
                <span class="travel-row__label">${R}</span>
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

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${r.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${r.ship.fuel}/${r.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${c}/${r.ship.cargoCapacity}</span>
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
          ${h}
          <div class="travel-list">
            ${v}
          </div>
          <div class="panel-card">
            <div class="travel-zoom-toggle">
              <span class="label">Map View</span>
              <div class="zoom-toggle__pills">
                <button class="btn btn-pill ${n==="local"?"btn-pill--active":""}" onclick="window.setMapZoom('local')">Local</button>
                <button class="btn btn-pill ${n==="sector"?"btn-pill--active":""}" onclick="window.setMapZoom('sector')">Sector</button>
              </div>
            </div>
            ${M}
            ${o?`<p class="muted">Active route: ${o}</p>`:""}
            <div class="panel-card">
              <p class="label">Map Labels</p>
              <p class="muted">
                Each icon shows the system name; tap “Focus route” to zoom to that destination.
              </p>
              <ul class="label-list">
                ${t.map(({system:y,profile:g})=>`<li>${y.name} — ${g.travelTime} turn${g.travelTime===1?"":"s"} / ${g.fuelCost} fuel</li>`).join("")}
              </ul>
            </div>
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${f}
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
  `}function pr(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function mr(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(hr)}function hr(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function fr(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function gr(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function yr(e,t,n,a,s){if(!e)return'<p class="muted">Map data unavailable.</p>';const i=320,o=200,c=16,l=36,d=8,u=8,p=Ne(),m=p&&a?bt(p,e.id,a):[],h=s?.nodes??[],f=new Set([e.id]);a&&f.add(a),(p?vt(p,e.id):t.map(({system:$})=>$.id)).forEach($=>f.add($)),h.forEach($=>f.add($)),m.forEach($=>f.add($));const v=$=>$.laneType==="core_lane"?"core":$.laneType==="frontier_lane"?"frontier":"wild",y=p?ys(p,e.id,n):null,g=[],k=[];if(p&&y){const $=new Map(p.nodes.map(j=>[j.id,j])),F=new Set(y.keys());y.forEach((j,te)=>{const se=$.get(te);se&&g.push({...se,depth:j})}),p.lanes.filter(j=>F.has(j.from)&&F.has(j.to)).forEach(j=>{const te=Math.max(y.get(j.from)??0,y.get(j.to)??0);k.push({...j,depth:te})})}else{const $=new Set;g.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),$.add(e.id),t.forEach(({system:F,route:j})=>{$.has(F.id)||(g.push({id:F.id,name:F.name,x:F.coords?.x??0,y:F.coords?.y??0,tags:F.tags??[],depth:1}),$.add(F.id),k.push({from:e.id,to:F.id,type:v(j),distance:j.distance,depth:1}))})}if(!g.length)return'<p class="muted">No coordinate data to render.</p>';const _=g.map($=>$.x),P=g.map($=>$.y),N=Math.min(..._),x=Math.max(..._),b=Math.min(...P),w=Math.max(...P),D=x-N||1,E=w-b||1,I=$=>c+($-N)/D*(i-c*2),R=$=>o-(c+($-b)/E*(o-c*2)),H=new Map(g.map($=>[$.id,{...$,sx:I($.x),sy:R($.y)}])),O=new Set(g.map($=>$.id)),z=new Set(h);m.forEach($=>z.add($)),!p&&a&&z.add(a);const ae=new Set,de=$=>{for(let F=0;F<$.length-1;F++)ae.add(De($[F],$[F+1]))};de(h),m.length?de(m):a&&ae.add(De(e.id,a));const me=k.filter($=>O.has($.from)&&O.has($.to)).map($=>{const F=H.get($.from),j=H.get($.to);if(!F||!j)return"";const te=De($.from,$.to),se=$.depth??Math.max(F.depth??0,j.depth??0),Te=ae.has(te),Ue=Te?3.2:se<=1?2.2:1.2,Ye=Te?1:se<=1?.9:.35;return`<line x1="${F.sx.toFixed(1)}" y1="${F.sy.toFixed(1)}" x2="${j.sx.toFixed(1)}" y2="${j.sy.toFixed(1)}" stroke="${vr($.type)}" stroke-width="${Ue}" stroke-linecap="round" opacity="${Ye}"></line>`}).join(""),he=Array.from(H.values()).map($=>{const F=$.id===e.id,te=($.depth??0)<=1,se=z.has($.id),Te=F?7:se?6:te?5:3.5,Ue=F?"#4CE6C3":se?"#7dd3fc":"#ffffff",Ye=se||te?1:.45,jt=f.has($.id),_a=$.name.length>16?`${$.name.slice(0,14)}...`:$.name,Ia=jt?_a:"";return`
        <g>
          <circle
            cx="${$.sx.toFixed(1)}"
            cy="${$.sy.toFixed(1)}"
            r="${Te}"
            fill="${Ue}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${Ye}"
          ></circle>
          ${jt?`<text x="${($.sx+d).toFixed(1)}" y="${($.sy-u).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${Ia}</text>`:""}
        </g>
      `}).join("");return`
    <div class="travel-map" style="max-width:${i}px;margin:0 auto;">
      <svg
        width="${i}"
        height="${o}"
        viewBox="-${l} -${l} ${i+l*2} ${o+l*2}"
        role="img"
        aria-label="${n==="local"?"Local":"Sector"} system map"
      >
        ${me}
        ${he}
      </svg>
    </div>
  `}function vr(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const sn={high:"^",low:"v",stable:"-"};function br(e={}){const t=U(r.location.systemId);if(!t)return`
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
    `;const n=Wn();if(!n.length)return`
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
    `;const a=Object.values(r.ship.cargo||{}).reduce((b,w)=>b+w,0),s=Object.entries(r.ship.cargo||{}).filter(([,b])=>b>0).sort((b,w)=>w[1]-b[1]).slice(0,5),i=new Map;oe().filter(b=>b.status==="active").forEach(b=>{const w=b.requirements?.deliver;if(!w?.commodityId)return;const D=i.get(w.commodityId)??{needed:0,deliverable:!1},E=Ae(w.commodityId)>=(w.quantity||0),I=!w.systemId||w.systemId===r.location.systemId;i.set(w.commodityId,{needed:D.needed+(w.quantity||0),deliverable:D.deliverable||I&&E})});const o=n.map(b=>{const w=K(t.id,b.id),D=Er(b.tradeTags?.length?b.tradeTags:b.tags),E=Ae(b.id),I=_r(b,E),R=Sa(w.buy,a,b.id);return{commodity:b,quote:w,tags:D,cargoQty:E,metaLine:I,maxBuyable:R,profit:w.sell-w.buy}}),c=o.reduce((b,w)=>w.profit>b.profit?{profit:w.profit,entry:w}:b,{profit:Number.NEGATIVE_INFINITY,entry:o[0]}),l=c.entry?.commodity.id??"",d=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,u=o.find(b=>b.commodity.id===d)||o.find(b=>b.commodity.id===l)||o[0],p=o.reduce((b,w)=>{const D=w.quote.high-w.quote.buy;return D>b.delta?{delta:D,entry:w}:b},{delta:-1/0,entry:o[0]}).entry,m=o.reduce((b,w)=>{const D=w.quote.buy-w.quote.low;return D>b.delta?{delta:D,entry:w}:b},{delta:-1/0,entry:o[0]}).entry,h=["legal","restricted","illegal"];let f=0;const M=h.map(b=>{const w=o.filter(R=>on(R.commodity.legalStatus)===b);if(!w.length)return"";const D=ut(b),E=`
        <div class="market-group__header">
          <div>
            <p class="market-group__label">${D} goods</p>
            <p class="muted market-group__count">${w.length} items</p>
          </div>
          <span class="market-status market-status--${b}">${D}</span>
        </div>
      `,I=w.map(({commodity:R,quote:H,tags:O,cargoQty:z})=>{const ae=u?.commodity.id===R.id,de=i.get(R.id),me=["market-row"];ae&&me.push("market-row--highlight");const he=on(R.legalStatus);me.push(`market-row--${he}`);const $=de?`<span class="contract-pill contract-pill--target${de.deliverable?" ready":""}">${de.deliverable?"Deliver now":"Contract target"}</span>`:"",F=`<span class="market-row__status market-row__status--${he}">${ut(he)}</span>`,j=`${sn[H.trend]} ${H.trend}`,te=f++;return`
            <article class="${me.join(" ")}" style="--row-index:${te};" onclick="selectMarketCommodity('${R.id}')">
              <div class="market-row__main">
                <span class="market-row__name">${R.name}</span>
                <span class="market-row__info">
                  BUY ${H.buy} A | SELL ${H.sell} A | Held ${z}
                </span>
              </div>
              <div class="market-row__meta">
                <span class="market-row__trend">${j}</span>
                <div class="market-row__meta-line">
                  <span>${O||"Local goods"}</span>
                  ${F}
                  ${$}
                </div>
              </div>
            </article>
          `}).join("");return`
        <section class="market-group">
          ${E}
          ${I}
        </section>
      `}).join(""),v=a>0,y=`
    <div class="panel-card market-summary-card">
      <p class="label">Market Overview</p>
      <div class="market-summary__rows">
        <div>
          <span>System</span>
          <strong>${t.name}</strong>
        </div>
        <div>
          <span>Day</span>
          <strong>${r.time.day}</strong>
        </div>
        <div>
          <span>Turn</span>
          <strong>${Ce(r.time.turn)}</strong>
        </div>
        <div>
          <span>Credits</span>
          <strong>${r.player.credits}</strong>
        </div>
        <div>
          <span>Fuel</span>
          <strong>${r.ship.fuel}/${r.ship.maxFuel}</strong>
        </div>
        <div>
          <span>Cargo</span>
          <strong>${a}/${r.ship.cargoCapacity}</strong>
        </div>
        <div>
          <span>Wanted</span>
          <strong>${r.player.wanted}</strong>
        </div>
      </div>
      <p id="market-message" class="muted market-summary__message">
        Credits: ${r.player.credits} | Cargo: ${Mr()}
      </p>
      <div class="market-summary__cargo">
        ${s.length?s.map(([b,w])=>{const D=Z(b),E=D?.mass??0,I=E?` (Mass ${Math.round(E*w)})`:"";return`<span>${w} × ${D?.name||b}${I}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${v?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,g=u?Kn(t.id,u.commodity.id,1):!1,k=u?Zn(t.id,u.commodity.id,1):!1,_=u&&g?"":" disabled",P=u&&u.maxBuyable>1&&g?"":" disabled",N=u&&k&&u.cargoQty>0?"":" disabled",x=u?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${u.commodity.name}</strong>
        <span class="market-row__trend">${sn[u.quote.trend]} ${u.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${u.quote.buy} · SELL ${u.quote.sell}</span>
        <span>${u.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${_}
          onclick="buyCommodityAction('${u.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${P}
          onclick="buyAllCommodityAction('${u.commodity.id}', ${u.quote.buy})"
        >
          Buy Max (${u.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${N}
          onclick="sellCommodityAction('${u.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${N}
          onclick="sellAllCommodityAction('${u.commodity.id}')"
        >
          Sell All (${u.cargoQty})
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
            ${y}
    ${$r(t.id)}
          </aside>
          <div class="market-list">
            <h2 class="panel-title small">Goods</h2>
            ${M}
            ${x}
          </div>
        </section>
        <section class="market-priority">
          <h2 class="panel-title small">Priority Paths</h2>
          ${Sr()}
        </section>
        <section class="market-footer">
          ${xr(t,p,m,c.entry)}
        </section>
        ${Cr(o)}
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function Mr(){const e=r.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${r.ship.cargoCapacity}`}function $r(e){const t=ei(e);return t.length?`
    <div class="panel-card market-events-card">
      <p class="label">Market Events</p>
      <div class="market-event__list">
        ${t.map(a=>`
      <div class="market-event">
        <p class="value-inline">${a.label||`${a.commodityId||"local goods"} x${a.multiplier}`}</p>
        <p class="muted">Expires in ${Math.max(0,(a.expiresAtTurn??0)-r.time.turn)} turns</p>
      </div>
    `).join("")}
      </div>
    </div>
  `:`
      <div class="panel-card market-events-card">
        <p class="label">Market Events</p>
        <p class="muted">No active market events.</p>
      </div>
    `}function xr(e,t,n,a){const s=Jn(),i=Xn(),o=e?.neighbors.map(f=>U(f.id)).filter(f=>!!f&&s[f.id])||[],c=o.length>0?o.map(f=>{const M=Tr(e?.id,f.id),v=r.time.turn-(s[f.id]?.turn??r.time.turn),y=M.over?`${M.over.id} overpriced (+${Math.round(M.over.delta*100)}%)`:"no overpay signal",g=M.under?`${M.under.id} underpriced (${Math.round(M.under.delta*100)}% cheaper)`:"no bargain yet";return`<p class="insight-mini">${f.name}: ↑ ${y} · ↓ ${g} (age ${v}t)</p>`}).join(""):'<p class="insight-mini muted">No neighbor intel yet.</p>',l=[];t&&l.push(`<span>📈</span> ${t.commodity.name} high runs ${Math.round(t.quote.high-t.quote.buy)} above buy (${t.quote.high})`),n&&l.push(`<span>📉</span> ${n.commodity.name} low sits ${Math.round(n.quote.buy-n.quote.low)} below buy (${n.quote.low})`);const d=l.length?l.map(f=>`<p class="insight-mini">${f}</p>`).join(""):'<p class="insight-mini muted">No strong pulses yet.</p>',u=a?`<p class="insight-mini"><span>💡</span> Consider ${a.commodity.name}. Buy @ ${a.quote.buy} A·, sell @ ${a.quote.high} A· (high).</p><p class="insight-mini muted">Profit spread: +${a.profit}</p>`:'<p class="insight-mini muted">No hot tip available.</p>',p=r.notifications.filter(f=>{const M=f.toLowerCase();return M.includes("market")||M.startsWith("bought")||M.startsWith("sold")}).slice(-6).reverse(),m=p.length?p.map(f=>`<p class="insight-mini">${f}</p>`).join(""):'<p class="insight-mini muted">No market-relevant log entries yet.</p>',h=(f,M)=>`<p class="insight-title"><span class="insight-icon" aria-hidden="true">${f}</span>${M}</p>`;return`
    <div class="panel-card market-insights-card">
      <p class="label">Market Insights</p>
      <div class="insight-section">
        ${h("🛰️","Intel Tools")}
        <p class="insight-mini muted">System: ${e?.name||"Unknown"}</p>
        <p class="insight-mini">Neighbor Intel ${i} cr — highlights over/under priced goods (actuals drift on arrival).</p>
        <div class="insight-list">
          ${c}
        </div>
        <div class="app-actions">
          <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${i})</button>
        </div>
      </div>
      <div class="insight-section">
        ${h("📈","Trending")}
        ${d}
      </div>
      <div class="insight-section">
        ${h("💡","Hot Tip")}
        ${u}
      </div>
      <div class="insight-section">
        ${h("📝","Market Log")}
        ${m}
      </div>
    </div>
  `}const wr=["taxEvasion","smuggling","bribery"];function Sr(){return`
    <div class="panel-card strategy-panel">
      <p class="label">Profit Paths</p>
      <div class="strategy-panel__cards">
        ${wr.map(t=>kr(t)).join("")}
      </div>
    </div>
  `}function kr(e){const t=jn(e),n=Math.round(Ns(e)),a=`${n}%`;return`
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
  `}function Cr(e){if(!e.length)return"";const t=e.map(p=>({label:p.commodity.name,value:p.quote.high})),n=e.map(p=>({label:p.commodity.name,value:p.quote.low})),a=Math.max(...t.map(p=>p.value)),s=Math.min(...n.map(p=>p.value)),i=Math.max(1,a-s),o=280,c=120,l=t.map((p,m)=>{const h=m/Math.max(1,t.length-1)*o,f=c-p.value/a*c;return`${h},${f}`}).join(" "),d=n.map((p,m)=>{const h=m/Math.max(1,n.length-1)*o,f=c-(p.value-s)/i*c;return`${h},${f}`}).join(" "),u=t.slice(0,6).map(p=>`<div class="trend-line">
           <span class="trend-label">${p.label}</span>
           <span class="trend-value">High ${p.value}</span>
         </div>`).join("");return`
    <div class="panel-card trend-graph-card">
      <details>
        <summary class="label">Price Graph (Highs &amp; Lows)</summary>
        <svg width="${o}" height="${c}" viewBox="0 0 ${o} ${c}">
          <polyline
            fill="none"
            stroke="rgba(66, 224, 198, 0.6)"
            stroke-width="2"
            points="${l}"
          />
          <polyline
            fill="none"
            stroke="rgba(248, 113, 113, 0.6)"
            stroke-width="2"
            points="${d}"
          />
        </svg>
      <div class="market-trend-rows">${u}</div>
    </details>
  </div>
`}function Tr(e,t){if(!e)return{over:null,under:null};const a=Jn()[t];if(!a)return{over:null,under:null};let s=null,i=null;const o=Math.max(0,r.time.turn-a.turn),c=Math.max(.5,1-o*.05);for(const[l,d]of Object.entries(a.prices)){const u=K(e,l);if(u.sell>0&&d.buy>u.sell){const p=(d.buy-u.sell)/u.sell*c;(!s||p>s.delta)&&(s={id:l,delta:p})}if(u.buy>0&&d.sell<u.buy){const p=(u.buy-d.sell)/u.buy*c;(!i||p>i.delta)&&(i={id:l,delta:p})}}return{over:s,under:i}}function Sa(e,t,n){if(e<=0)return 0;const a=Math.floor(r.player.credits/e),s=Math.max(0,r.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function Er(e){return e?.length?Array.from(new Set(e)).map(n=>Pt(n.replace(/_/g," "))).join(" | "):""}function _r(e,t){const n=Pt(e.tier||"standard"),a=ut(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,i=[`Held ${t}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" | ")}function Pt(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function ut(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??Pt(e)}function on(e){return e==="restricted"||e==="illegal"?e:"legal"}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=r.location.systemId,n=Z(e),a=Qn(t,e,1),s=K(t,e).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=r.location.systemId,n=Z(e),a=Tt(t,e,1),s=K(t,e).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=r.location.systemId,a=r.ship.cargo||{},s=Object.values(a).reduce((l,d)=>l+d,0),i=Sa(t,s);if(i<=0){nav("market");return}Qn(n,e,i);const o=Z(e),c=document.getElementById("market-message");c&&(c.textContent=`Bought ${i} ${o?.name||e} for ${t*i} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=r.location.systemId,n=Ae(e);if(n<=0){nav("market");return}const a=K(t,e).sell;Tt(t,e,n);const s=Z(e),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=r.location.systemId,t=Object.entries(r.ship.cargo||{});let n=0;const a=[];for(const[i,o]of t){if(!o||!Tt(e,i,o))continue;n+=o;const l=Z(i);a.push(`${o} ${l?.name||i}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const i=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${i}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=ni(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};window.pursueTradeStrategy=e=>{const t=jn(e),n=js(e),a=document.getElementById("market-message");a&&(a.textContent=n?`Invested in ${t.name}.`:`Need ${t.cost} credits to unlock ${t.name}.`),nav("market")};function Ir(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function Rr(e={}){const t=typeof e.message=="string"?e.message:"",n=oe(),a=$s(),s=Object.values(r.ship.cargo||{}).reduce((m,h)=>m+h,0),o=Ir(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),c=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(m=>{m.requirements;const h=cn(m),f=Dr(h),M=rn(h),v=U(h??""),y=v?.region?`Region: ${Ee(v.region)}`:"",g=v?.tags?.length>0?`Keywords: ${v.tags.map(k=>Ee(k)).join(", ")}`:"";return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${m.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${m.name}</span>
                    <span class="contract-type">${m.type}</span>
                  </div>
                  ${m.description?`<p class="muted">${m.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${xs(m)}</span>
                    <span>${ws(m)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${f}${M?` - ${M}`:""}</span>
                    ${y?`<span>${y}</span>`:""}
                    ${g?`<span>${g}</span>`:""}
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',l=o?[o]:a[0]?[a[0].id]:[],d=a.reduce((m,h)=>{const M=cn(h)??"unknown",v=m.get(M)??[];return v.push(h),m.set(M,v),m},new Map),u=(m,h)=>{if(!h.length)return"";const f=U(m),M=f?.region?`Region: ${Ee(f.region)}`:"",v=f?.tags?.length?`Keywords: ${f.tags.map(g=>Ee(g)).join(", ")}`:"",y=f?f.name:"Unknown Region";return`
      <div class="contract-list contract-section">
        <h3 class="panel-title tiny">${y}</h3>
        ${h.map(g=>{const k=["contract-row"];l.includes(g.id)&&k.push("contract-row--active");const _=rn(m);return`
              <article class="${k.join(" ")}" onclick="acceptContract('${g.id}')">
                <div class="contract-row__main">
                  <span class="contract-row__name">${g.name}</span>
                  <span class="contract-type">${g.type}</span>
                </div>
                <p class="muted">${g.description}</p>
                <div class="contract-row__info">
                  <span>System: ${y}${_?` - ${_}`:""}</span>
                  ${M?`<span>${M}</span>`:""}
                  ${v?`<span>${v}</span>`:""}
                  <span>Reward: ${Br(g.reward)}</span>
                </div>
              </article>
            `}).join("")}
      </div>
    `},p=d.size?Array.from(d.entries()).map(([m,h])=>u(m,h)).join(""):'<p class="muted">No available missions.</p>';return`
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
          <span class="stat-value">${r.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${r.ship.fuel}/${r.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${s}/${r.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${r.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel contract-section">
          <h1 class="panel-title">Contracts</h1>
          ${t?`<p class="muted">${t}</p>`:""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${c}</div>
          <h2 class="panel-title">Available</h2>
          <div class="panel-row">
            ${p}
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
  `}function Dr(e){if(!e)return"Unknown";const t=U(e);return t?.name?`<strong>${t.name}</strong>`:e}function rn(e){if(!e)return"";const t=Ne();if(!t)return"";const n=vs(t,r.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function Br(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=X(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}function Ee(e){return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function cn(e){const t=e.requirements||{};if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.combat?.systemId)return t.combat.systemId;if(Array.isArray(t.multiTravel)&&t.multiTravel.length){const n=t.multiTravel[0];return typeof n=="string"?n:n?.systemId}if(e.description)return Ar(e.description)}function Ar(e){const t=Ne();if(!t)return;const n=e.toLowerCase();for(const a of t.nodes)if(a.name&&n.includes(a.name.toLowerCase()))return a.id}window.acceptContract=e=>{const t=$t(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=Ts(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};const Pr={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Lt(e){return C?C.ships.find(t=>t.id===e)??null:null}function Lr(){return Lt(r.ship.templateId)}function Fr(){return C?C.ships.filter(e=>e.starter):[]}function Nr(){return C?C.ships.filter(e=>!e.starter):[]}function ka(e,t){const n=Lt(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((o,c)=>Pr[`${o.size}:${o.type}`]??a[c]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(o=>({...o})),passive:n.passive??null};r.ship=i,mt(),ft()}function Hr(e){ka(e),r.player.hasChosenStarter=!0}function jr(e){const t=Lt(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):r.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(r.player.credits-=t.cost,ka(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function Or(){const e=r.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=t+n;if(r.player.credits<a){console.warn("Not enough credits to fully repair.");return}r.player.credits-=a,e.hp=e.maxHp,e.shields=e.maxShields}function Wr(){const e=r.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(r.player.credits<a){console.warn("Not enough credits to fully refuel.");return}r.player.credits-=a,e.fuel=e.maxFuel}window.repairShipAction=()=>{Or(),nav("ship")};window.refuelShipAction=()=>{Wr(),nav("ship")};function qr(){const e=r.ship,t=Lr(),n=Rn(),a=r.combat?.playerCooldowns??[],s=Object.values(e.cargo||{}).reduce((c,l)=>c+l,0),i=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,o=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(c=>`<li>${c.name} (+${c.value} ${c.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Ship — ${e.name}</span>
        </div>
      </header>

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
          <span class="stat-value">${s}/${e.cargoCapacity}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ship Status</h1>
          ${i}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${o}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${e.hardpoints.map((c,l)=>{const d=X(e.weapons[l]),u=d?.name||"Empty",p=a[l]??0,m=d?yt(d):null,h=m?`
                    <p class="muted">Role: ${m.role} (${m.typeLabel})</p>
                    <p class="muted">Vs Shields: ${m.vsShields} · Vs Hull: ${m.vsHull}</p>
                    ${m.tagNotes.length?`<p class="muted">Traits: ${m.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${l+1} · ${c.size} ${c.type}</p>
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
  `}const ln={pirate:"Sensors report kinetic and explosive signatures—brace for hull rakes ahead.",disruptive:"Disruptive arcs detected; expect jammed systems if shields fall.",energy:"Energy harmonics in the signal mean shields will sponge the incoming fire.",ghost:"Ghost fleet scouts favor shield-cracking pulses; bring hull-focused damage."};function dn(e){if(!e)return"";for(const t of e)if(ln[t])return ln[t];return""}function Vr(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=_t(t);if(!n)return`
      <div class="screen event">
        <h1>No Event</h1>
        <p>No events available here.</p>
      </div>
    `;if(n.type==="mining"){const i=dn(n.tags);return`
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
    `}const a=zr(n.choices),s=dn(n.tags);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${Gr(n.type)}</p>
          ${n.description?`<p class="event-description">${n.description}</p>`:""}
          ${s?`<p class="event-hint">${s}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function zr(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${Ur(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function Gr(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Ur(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=S.params,n=typeof t.eventId=="string"?t.eventId:"",a=_t(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const i=ii(s);if(i.triggerCombat?.enemyId){le(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{pe(r,r.location.systemId,e||void 0,t||void 0)?S.go("mining"):S.go("main",{message:"Travel to a new system before mining again."})};const Yr={balanced:"bi bi-record-circle",brace:"bi bi-shield-lock",evasive:"bi bi-speedometer2",overcharge:"bi bi-lightning"},_e=["balanced","brace","evasive","overcharge"],Jr={frontline:"Frontline",backline:"Backline",support:"Support"};function Xr(e){if(!e)return"";const t=Jr[e];return t?`<span class="enemy-role-chip">${t}</span>`:""}function Kr(e){return e?`<span class="enemy-faction-chip">${e.toUpperCase()}</span>`:""}window.fireWeapon=(e,t="normal")=>{ze("fire",e,t),r.combat&&nav("combat")};window.brace=()=>{ze("brace"),r.combat&&nav("combat")};window.flee=()=>{ze("flee"),r.combat&&nav("combat")};window.setStance=e=>{ba(e),r.combat&&nav("combat")};window.cycleStance=e=>{const n=r.combat?.playerStance??"balanced",s=(_e.indexOf(n)+e+_e.length)%_e.length,i=_e[s];ba(i),r.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{ze("fire_all",void 0,e),r.combat&&nav("combat")};window.selectEnemySlot=e=>{const t=r.combat;t&&(t.selectedEnemyId=e,nav("combat"))};function Zr(e,t,n){return!(!t||t.position.row!=="back"||!n||!n.alive)}function un(e,t,n,a=!1,s=!1){const i=t==="front"?"Front":"Back",o=e+1;if(!n)return`
      <div class="enemy-slot enemy-slot--empty row-${t}">
        <span class="enemy-slot-meta">Lane ${o} · ${i}</span>
        <span class="muted">Empty</span>
      </div>
    `;const c=n.statusEffects.map(p=>`<span class="status-pill">${p.type}</span>`).join(""),l=`Lane ${o} · ${i}`,d=Xr(n.role),u=Kr(n.factionLabel??n.factionId);return`
    <button
      type="button"
      class="enemy-slot ${a?"is-selected":""} row-${n.position.row}"
      onclick="selectEnemySlot('${n.id}')"
    >
      <span class="enemy-slot-name">${n.name}</span>
      <div class="enemy-slot-meta-row">
        <span class="enemy-slot-meta">${l}</span>
        <span class="enemy-chip-group">
          ${d}
          ${u}
        </span>
      </div>
      <span class="enemy-slot-hp">Hull ${n.hp}/${n.maxHp}</span>
      <span class="enemy-slot-shield">Shield ${n.shields}/${n.maxShields}</span>
      <div class="enemy-slot-statuses">${c||'<span class="muted">No status</span>'}</div>
      ${s?'<span class="cover-badge">Covered</span>':""}
    </button>
  `}function Qr(e){if(e.overheated)return`Overheated (${e.overheatTurns} turn${e.overheatTurns===1?"":"s"} to cool)`;const t=e.maxHeat||100;return(t>0?e.heat/t:0)>=.7?"Running Hot":"Stable"}function ec(){const e=r.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=r.ship,n=e.log.map(E=>`<div class="log-line">${E}</div>`).join(""),a=t.hp/Math.max(1,t.maxHp)<=.35,s=(e.log[e.log.length-1]||"").toLowerCase(),i=s.includes("hits you")||s.includes("damage"),o=e.log[e.log.length-1]||"Awaiting orders.";pn(o);const c=["app-root","combat-root"];a&&c.push("low-hull"),i&&c.push("hit-flash");const l=e.encounter.enemies.find(E=>E.id===e.selectedEnemyId)??e.encounter.enemies.find(E=>E.position.row==="front")??e.encounter.enemies[0],d=e.encounter.enemies.length,u=[0,1,2],p=d>0?`
        <div class="enemy-formation-grid">
          ${u.map(E=>{const I=e.encounter.enemies.find(O=>O.position.lane===E&&O.position.row==="front"),R=e.encounter.enemies.find(O=>O.position.lane===E&&O.position.row==="back"),H=l?.position.lane===E;return`
                <div class="enemy-lane lane-${E} ${H?"is-active-lane":""}">
                  <div class="lane-header">
                    <span class="lane-label">Lane ${E+1}</span>
                    <span class="lane-subtitle">${I||R?"Engaged":"Empty"}</span>
                  </div>
                  <div class="lane-slot-row lane-front">
                    ${un(E,"front",I,l?.id===I?.id)}
                  </div>
                  <div class="lane-slot-row lane-back">
                    ${un(E,"back",R,l?.id===R?.id,Zr(E,R,I))}
                  </div>
                </div>
              `}).join("")}
        </div>
      `:'<div class="enemy-slot muted-chip">No enemies in formation.</div>',m=t.overheated,h=t.hardpoints.map((E,I)=>{const R=t.weapons[I],H=X(R),O=e.playerCooldowns[I]??0,z=!!H&&O===0;return`
        <div class="panel-card">
          <p class="label">Slot ${I+1} · ${E.size.toUpperCase()} ${E.type}</p>
          <p class="value-inline">${H?.name||"Empty"}</p>
          <p class="muted">${O>0?`Cooling (${O})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary ${m?"overheat-disabled":""}" ${z&&!m?"":"disabled"} onclick="fireWeapon(${I}, 'normal')">Fire</button>
            <button class="btn btn-ghost ${m?"overheat-disabled":""}" ${z&&!m?"":"disabled"} onclick="fireWeapon(${I}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join("");ls.map(E=>`
        <tr>
          <td>${E.type}</td>
          <td>${E.shieldMultiplier.toFixed(2)}x</td>
          <td>${E.hullMultiplier.toFixed(2)}x</td>
          <td>${E.description}</td>
        </tr>
      `).join("");const f=Se(e.playerStance),M=Yr[e.playerStance]??"bi bi-flag",v=t.maxHeat||100,y=Qr(t);`${t.hp}${t.maxHp}${t.shields}${t.maxShields}${t.fuel}${t.maxFuel}${t.heat}${t.maxHeat}${y}`,`${pn(f.description)}${M}${f.label}`;const g=Object.entries(f.damageTakenMultipliers||{}).map(([E,I])=>{const R=I??1;return`<span class="stance-modifier ${R>=1?"debuff":"buff"}">${E}: ${R.toFixed(2)}x</span>`}),k=g.length>0?g.join(""):'<span class="muted">No stance-specific multipliers.</span>',_=Ho();_&&`${_.suggestion}${_.text}${(_.confidence*100).toFixed(0)}`;const P=l?.shields<=0,N=l?P?`${l.name}'s shields are down—called shots will score more consistently. Aim for the hull!`:"Called shots trade accuracy; wait until shields drop for the best payout.":"No active targets to shoot at.";tc(e);const x=nc(e,l),b=`
    <div class="combat-hud">
      <div class="stance-dial-row">
        <div class="stance-dial">
          <button class="dial-btn" onclick="cycleStance(-1)">
            <i class="bi bi-chevron-left"></i>
          </button>
          <div class="stance-dial__current">
            <i class="${M}"></i>
            <span>${f.label}</span>
          </div>
          <button class="dial-btn" onclick="cycleStance(1)">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="hud-stats-column">
        <div class="hud-ship-name">${t.name}</div>
        <div class="hud-stats">
          <span class="hud-stat">
            <i class="bi bi-heart-fill"></i>
            Hull ${t.hp}/${t.maxHp}
          </span>
          <span class="hud-stat">
            <i class="bi bi-shield-fill"></i>
            Shields ${t.shields}/${t.maxShields}
            ${m?'<span class="hud-shield-status">offline</span>':""}
          </span>
          <span class="hud-stat">
            <i class="bi bi-fuel-pump"></i>
            Fuel ${t.fuel}/${t.maxFuel}
          </span>
          <span class="hud-stat">
            <i class="bi bi-thermometer-half"></i>
            Heat ${t.heat}/${v} (${y})
          </span>
          <span class="hud-heat-delta muted">${e.lastHeatDelta||""}</span>
        </div>
      </div>
      <div class="hud-meta-column">
        <div class="hud-center">
          <span>${e.encounter.name}</span>
          <span>Enemies ${d}</span>
          <span>Round ${e.round}</span>
        </div>
      </div>
    </div>
  `,w=e.overheatModalVisible&&r.ship.overheated?`
        <div class="overheat-modal">
          <div class="overheat-modal__card">
            <h3>Overheated!</h3>
            <p>Systems have maxed out. Enemies get two free turns while you cool down.</p>
          </div>
        </div>
      `:"",D=`
    <div class="command-console">
      <section class="cc-section">
        <div class="target-row">
          <span class="label">Target</span>
          <span class="target-name">${l?.name??"No target"}</span>
        </div>
        <p class="muted small">${N}</p>
      </section>

      <hr />

      <section class="cc-section">
        <p class="label small">Actions</p>
        <div class="app-actions combat-actions combat-majors">
          <button class="btn btn-primary ${m?"overheat-disabled":""}"
            onclick="fireAllWeapons('normal')" ${m?"disabled":""}>
            Fire All
          </button>
          <button class="btn btn-ghost ${m?"overheat-disabled":""}"
            onclick="fireAllWeapons('called_shot')" ${m?"disabled":""}>
            Called Shots
          </button>
          <button class="btn btn-ghost ${m?"overheat-disabled":""}"
            onclick="brace()" ${m?"disabled":""}>
            Brace
          </button>
          <button class="btn btn-danger ${m?"overheat-disabled":""}"
            onclick="flee()" ${m?"disabled":""}>
            Attempt Flee
          </button>
        </div>
        ${m?'<p class="overheat-note">Weapons & shields offline while overheated.</p>':""}
        <div class="weapons-grid">
          ${h}
        </div>
      </section>

      <hr />

      <section class="cc-section">
        <p class="label small">Active Stance Modifiers</p>
        <div class="stance-mod-row">
          ${k}
        </div>
      </section>
    </div>
  `;return`
    <div class="${c.join(" ")}">
      <div class="combat-container">
        ${b}
        <div class="combat-main">
          <section class="enemy-formation-panel">
            <div class="enemy-formation-header">
              <p class="label">Enemy Formation</p>
              <span>${d} targets remaining</span>
            </div>
            <div class="enemy-formation">${p}</div>
            <div class="status-chips">${x||'<span class="muted">No debuffs</span>'}</div>
          </section>
          <section class="command-panel">
            ${D}
          </section>
        </div>
        <section class="combat-log">
          <h2 class="panel-title small">Combat Log</h2>
          <div class="app-log">
            ${n}
          </div>
        </section>
        ${w}
      </div>
    </div>
  `}function tc(e){const t=[],n=Se(e.playerStance).label;return t.push(`<span class="buff-chip buff">Stance: ${n}</span>`),e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function nc(e,t){const n=[];return e.enemyStatus.weaponJammedTurns>0&&n.push(`<span class="buff-chip debuff">Weapons jammed (${e.enemyStatus.weaponJammedTurns}t)</span>`),t?.shields<=0&&n.push('<span class="buff-chip debuff">Shields down</span>'),t?.statusEffects.length&&t.statusEffects.forEach(a=>{n.push(`<span class="buff-chip debuff">${a.type} (${a.duration}t)</span>`)}),n.push(`<span class="buff-chip muted-chip">${e.encounter.enemies.length} adversaries remain</span>`),n.join("")}function pn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}window.buyShipAction=e=>{jr(e)};window.buyComponentAction=e=>{ts(e)};window.buyWeaponAction=e=>{ps(e)};function ac(){if(!Oe(r.location.systemId,"shipyard"))return`
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
    `;const e=Nr(),t=Qa(),n=ds(),a=ht().map(l=>X(l)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(l=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Qe("ship",l.id)}
                      <div>
                      <p class="label">${l.roleHint||"Multi-role"}</p>
                      <strong>${l.name}</strong>
                      <p class="muted">${l.description}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${l.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Hull ${l.hull} | Shields ${l.shields} | Fuel ${l.fuel} | Cargo ${l.cargo}</p>
                  <button class="btn btn-primary" onclick="buyShipAction('${l.id}')">Buy & Replace</button>
                </article>
              `).join("")}
        </div>
      `,i=t.length===0?'<p class="muted">No components in stock.</p>':`
        <div class="card-list">
          ${t.map(l=>{const d=[];if(typeof l.value=="number"&&l.effectType&&d.push(`+${l.value} ${l.effectType}`),l.effects)for(const[p,m]of Object.entries(l.effects)){if(typeof m!="number")continue;const h=Math.round((m-1)*100);switch(p){case"miningYield":d.push(`Mining yield ${h>=0?"+":""}${h}%`);break;case"miningSpeed":d.push(`Mining duration ${h>=0?"+":""}${h}%`);break;case"rareFindChance":d.push(`Rare finds ${h>=0?"+":""}${h}%`);break;case"miningPayoutMultiplier":d.push(`Mining payout ${h>=0?"+":""}${h}%`);break;case"sellBonus":d.push(`Sell bonus ${h>=0?"+":""}${h}%`);break;case"incomeMultiplier":d.push(`Income ${h>=0?"+":""}${h}%`);break;default:d.push(`${p} ${h>=0?"+":""}${h}%`)}}const u=d.length?d.join(" | "):"Utility module";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Qe("module",l.id)}
                      <div>
                      <p class="label">${l.effectType||"Passive"}</p>
                      <strong>${l.name}</strong>
                      <p class="muted">${l.description}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${l.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Boost: ${u}${l.slot?` | Slot: ${l.slot}`:""}</p>
                  <button class="btn btn-primary" onclick="buyComponentAction('${l.id}')">Buy & Install</button>
                </article>
              `}).join("")}
        </div>
      `,o=n.length===0?'<p class="muted">No weapons available.</p>':`
        <div class="card-list">
          ${n.map(l=>{const d=yt(l),u=d.tagNotes.length?`Traits: ${d.tagNotes.join(", ")}`:"";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Qe("weapon",l.id)}
                      <div>
                      <p class="label">${l.type} • ${l.size}</p>
                      <strong>${l.name}</strong>
              <p class="muted">${u}</p>
            </div>
            </div>
            <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${l.price} cr</p>
                    </div>
                  </div>
                  <p class="muted">
                    Damage ${l.damage} (${l.damageType}) | Acc ${Math.round(l.accuracy*100)}% | Crit ${Math.round(l.critChance*100)}% x${l.critMultiplier}<br/>
                    Cooldown ${l.cooldown} | Energy ${l.energyCost}
                  </p>
                  <p class="muted">${d.role} (${d.typeLabel}) | Vs Shields: ${d.vsShields}, Vs Hull: ${d.vsHull}</p>
                  <button class="btn btn-primary" onclick="buyWeaponAction('${l.id}')">Buy Weapon</button>
                </article>
              `}).join("")}
        </div>
      `,c=a.length>0?`<p>${a.join(", ")}</p>`:'<p class="muted">You currently own no weapons.</p>';return`
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
            <div class="panel-card">${c}</div>
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
  `}const mn=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],hn=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],fn=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],gn=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function ve(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function sc(e){const t=ve(e)%mn.length;return mn[t]}function Ft(e){let t=ve(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function Ze(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),o=a-n+1,c=i-s+1,l=Math.floor((t-o)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function Qe(e,t){const n=sc(`${e}-${t}`),a=hn[ve(t)%hn.length],s=fn[ve(t+"-mod")%fn.length],i=gn[ve(t+"-wpn")%gn.length],c=Ze(e==="ship"?ic(a,t):e==="module"?oc(s,t):rc(i,t)).map(l=>`<rect x="${l.x}" y="${l.y}" width="1" height="1" fill="${n[l.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${c}
    </svg>
  `}function ic(e,t){const n=Ft(t),a=[...e],s=Math.min(...e.map(d=>d.y)),i=Math.max(...e.map(d=>d.y)),o=e.filter(d=>d.y===s),c=e.filter(d=>d.y===i);o.slice(0,2).forEach(d=>{a.push({x:d.x,y:d.y-1,c:"a"})}),c.forEach(d=>{n()>.5&&a.push({x:d.x,y:d.y+1,c:n()>.5?"a":"b"})});const l=n()>.5?-1:1;return a.push({x:c[0]?.x+l,y:i-1,c:"b"}),a.push({x:c[c.length-1]?.x-l,y:i-1,c:"b"}),a}function oc(e,t){const n=Ft(t+"-decor"),a=[...e],s=Math.min(...e.map(l=>l.x)),i=Math.max(...e.map(l=>l.x)),o=Math.min(...e.map(l=>l.y)),c=Math.max(...e.map(l=>l.y));return a.push({x:s-1,y:Math.round((o+c)/2),c:"b"}),a.push({x:i+1,y:Math.round((o+c)/2),c:"b"}),n()>.3&&a.push({x:s,y:o-1,c:"a"}),n()>.6&&a.push({x:i,y:o-1,c:"c"}),n()>.4&&a.push({x:s,y:c+1,c:"a"}),a}function rc(e,t){const n=Ft(t+"-weapon"),a=[...e],s=Math.max(...e.map(c=>c.y)),i=Math.min(...e.map(c=>c.x)),o=Math.max(...e.map(c=>c.x));return a.push({x:i,y:s+1,c:n()>.5?"a":"b"}),a.push({x:o,y:s+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:i+1,y:s-2,c:"c"}),a.push({x:o+1,y:s-1,c:"b"}),a}const cc={incomeMultiplier:e=>q(e,"income"),eventRewardMultiplier:e=>q(e,"event rewards"),hpBonus:e=>q(e,"hull"),cargoBonus:e=>dc(e,"cargo capacity"),sellBonus:e=>q(e,"sell price"),buyBonus:e=>q(e,"buy price"),marketTax:e=>q(e,"market tax"),miningYield:e=>q(e,"mining yield"),rareFindChance:e=>q(e,"rare find chance"),miningSpeed:e=>q(e,"mining duration"),dodgeBonus:e=>Ie(e,"dodge chance"),critBonus:e=>Ie(e,"crit chance"),damageTakenMultiplier:e=>q(e,"damage taken"),fleeBonus:e=>Ie(e,"flee chance"),pirateDetectionMultiplier:e=>q(e,"pirate detection"),scanDetectionMultiplier:e=>q(e,"scan detection"),illegalTolerance:e=>q(e,"illegal tolerance"),fuelCostMultiplier:e=>q(e,"fuel cost"),hazardDetectionBonus:e=>Ie(e,"hazard detection"),anomalyChance:e=>q(e,"anomaly chance"),shieldRegenBonus:e=>q(e,"shield regen")};function lc(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>cc[n]?.(a)??null).filter(n=>!!n):[]}function q(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Ie(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function dc(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}function uc(e,t){return`
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
  `}window.chooseStarter=e=>{Hr(e),ft(),S.go("main")};function pc(){const e=Fr(),t={maxHull:Math.max(...e.map(a=>a.hull),100),maxShields:Math.max(...e.map(a=>a.shields),100),maxFuel:Math.max(...e.map(a=>a.fuel),100),maxCargo:Math.max(...e.map(a=>a.cargo),50)};return e.length===0?`
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
            ${e.map(a=>{const s=lc(a),i=a.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${a.passive.name}</p>
          ${s.length?`<div class="passive-summary__list">${s.map(o=>`<span>${o}</span>`).join("")}</div>`:""}
        </div>
      `:"";return`
      <button class="panel-card starter-card btn-starter" type="button" onclick="chooseStarter('${a.id}')">
        <div class="starter-card-head starter-card-head--split">
          <div class="starter-head__ship starter-head__ship--stacked">
            ${yc(a.id,a.roleHint??a.name)}
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
          ${uc(a,t)}
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
`}const yn=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],vn={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function Nt(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function mc(e){return yn[Nt(e)%yn.length]}function hc(e,t){const n=(()=>{let o=Nt(t);return()=>(o=o*1664525+1013904223|0,(o>>>0)/4294967295)})(),a=[...e],s=Math.max(...e.map(o=>o.y)),i=Math.min(...e.map(o=>o.y));return n()>.5&&a.push({x:e[0]?.x??4,y:i-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:s+1,c:n()>.5?"b":"c"}),a}function fc(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),o=a-n+1,c=i-s+1,l=Math.floor((t-o)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function gc(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(vn).find(o=>n.includes(o))??"fighter",s=vn[a],i=Nt(`${e}-${t}`)%s.length;return s[i]}function yc(e,t){const n=mc(`${e}-${t}`),a=gc(e,t),s=hc(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${fc(s).map(c=>`<rect x="${c.x}" y="${c.y}" width="1" height="1" fill="${n[c.c]}" opacity="1" />`).join("")}
    </svg>
  `}function vc(){const e=r.ship;if(!e.hardpoints.length)return`
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
    `;const t=e.hardpoints.map((n,a)=>{const i=X(e.weapons[a])?.name||"Empty";return`
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
          <span>Day ${r.time.day}</span>
          <span>Turn ${Ce(r.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{us(e,t)&&nav("weapon_slots")};function bc(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=r.ship.hardpoints[t];if(!n)return`
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
    `;const o=ht().map(c=>X(c)).filter(c=>!!c).map(c=>{const l=gt(t,c.id),u=X(r.ship.weapons[t])?.id===c.id?"Equipped":"Equip",p=yt(c),m=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${l?"":"muted"}">
          <p class="label">${c.size} / ${c.type}</p>
          <p class="value-inline"><strong>${c.name}</strong></p>
          <p class="muted">Damage ${c.damage} (${c.damageType}) · Acc ${Math.round(c.accuracy*100)}% · Crit ${Math.round(c.critChance*100)}% (×${c.critMultiplier}) · CD ${c.cooldown}</p>
          <p class="muted">Role: ${p.role} (${p.typeLabel}) · Vs Shields: ${p.vsShields} · Vs Hull: ${p.vsHull}${m}</p>
          <button class="btn btn-primary" ${l?"":"disabled"} onclick="equipWeaponAction(${t}, '${c.id}')">
            ${u}
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
          <span>Day ${r.time.day}</span>
          <span>Turn ${Ce(r.time.turn)}</span>
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
  `}window.leaveMining=()=>{r.miningSession=null,S.go("main")};window.drillCell=(e,t)=>{qi(r,e,t)?.fightTriggered||S.go("mining")};window.setMiningDepth=e=>{Oi(r,e),S.go("mining")};window.finalizeDrill=()=>{if(Vi(r)?.fightTriggered)return;const t=r.miningSession?.lastMessage||"Extraction complete.";S.go("main",{message:t})};window.newSurvey=()=>{pe(r,r.location.systemId,r.miningSession?.beltId,r.miningSession?.resourceId,{force:!0}),S.go("mining")};function Mc(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function $c(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const s=e[n][a],i=["mine-cell"];s.drilled&&i.push("drilled"),s.selected&&i.push("selected");const o=["mine-cell-inner"];s.directionClass&&o.push(s.directionClass),s.depthClass&&o.push(s.depthClass),s.signal!=null&&o.push(Mc(s.signal));const c=s.signal!=null?`<span class="cell-signal">${s.signal}</span>`:'<span class="cell-signal muted">·</span>';t.push(`
        <div class="${i.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${o.join(" ")}">
            <div class="cell-center">
              ${c}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function xc(){const e=r.miningSession;if(!e)return`
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
    `;const t=Math.round(e.threat??0),n=ea(r,e.systemId),a=Array.from({length:5},(o,c)=>{const l=c+1;return`<button class="chip-btn ${l===e.depth?"active":""}" onclick="setMiningDepth(${l})">Z${l}</button>`}).join(""),s=$c(e.grid),i=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
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
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Mining · ${e.beltName||e.beltId||e.systemId}</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${r.time.day}</span>
          <span>Turn ${Ce(r.time.turn)}</span>
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
  `}window.startNewRun=()=>na(!1);window.returnToMainMenu=()=>na(!0);function wc(){const e=r.gameOver?.summary,t=Oa(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],i=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],o=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],c=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],l=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],d=p=>p.map(([m,h])=>`
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
          <table>${d(o)}</table>
        </section>
        <section class="data-panel">
          <h2>Combat</h2>
          <table>${d(c)}</table>
        </section>
        <section class="data-panel">
          <h2>Mining</h2>
          <table>${d(l)}</table>
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
  `}const A=320,B=180;let be=null,Me="space",we=null,ie=1;const Sc=450,Ht=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],Fe=[];function kc(){for(const e of Ht){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*A,y:Math.random()*B,size:Math.random()<.6?1:2})}}function Cc(){Fe.length=0;for(let e=0;e<4;e++)Fe.push({x:Math.random()*A,y:B/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function Tc(e){be=e.getContext("2d"),be&&(e.width=A,e.height=B,be.imageSmoothingEnabled=!1,kc(),Cc())}function Ec(e){e===Me&&(!we||ie<1)||(we=Me,Me=e,ie=0)}function _c(e){if(!be)return;const t=e/16.6667;ie<1&&(ie=Math.min(1,ie+e/Sc),ie>=1&&(we=null));for(const n of Fe)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=A+20,n.y=B/4+Math.random()*(B/2));for(const n of Ht)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=A,a.y=Math.random()*B)}function Ca(e=be,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=we!==null&&ie<1,a=Fc(ie);n?(et(e,we,t,{alpha:1-a,scale:1+.05*a}),et(e,Me,t,{alpha:a,scale:1.04-.04*a})):et(e,Me,t),e.restore()}function et(e,t,n,a={}){const s=a.alpha??1,i=a.scale??1;switch(e.save(),e.globalAlpha=s,i!==1&&(e.translate(A/2,B/2),e.scale(i,i),e.translate(-A/2,-B/2)),t){case"mining":Bc(e);break;case"hangar":Pc(e,n);break;case"ops":Lc(e,n);break;default:Ic(e,n);break}Dc(e,t),t==="combat"&&Ac(e),e.restore()}function Ic(e,t){e.fillStyle="#02030b",e.fillRect(0,0,A,B),Rc(e,t)}function Rc(e,t){for(const n of Fe){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),s=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${s})`),a.addColorStop(.5,`rgba(60, 130, 200, ${s*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${s})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of Ht){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function Dc(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let s=0;s<n;s++){const i=Math.random()*A,o=Math.random()*B;e.fillRect(Math.round(i),Math.round(o),1,1)}}function Bc(e){e.fillStyle="#0a0604",e.fillRect(0,0,A,B);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const s=a*(B/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(s),A,Math.ceil(B/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,A-80,B-40);const n=e.createLinearGradient(0,B/2,A,B/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,A,B)}function Ac(e){const t=e.createLinearGradient(0,0,A,B);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,A,B)}function Pc(e,t){e.fillStyle="#04060a",e.fillRect(0,0,A,B);const n=e.createLinearGradient(0,0,0,B);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,A,B);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(A/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,B-46,A,18),e.fillStyle="#0f1a28";for(let s=0;s<7;s++){const i=B-26+s*3;e.fillRect(0,i,A,1)}e.fillStyle="#1a2838";for(let s=0;s<A;s+=22)e.fillRect(s,B-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,A-80,10),e.fillRect(40,70,A-80,6)}function Lc(e,t){e.fillStyle="#021014",e.fillRect(0,0,A,B);const n=e.createRadialGradient(A/2,B*.45,10,A/2,B/2,B);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,A,B),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let d=20;d<A;d+=20)e.beginPath(),e.moveTo(d,0),e.lineTo(d,B),e.stroke();for(let d=20;d<B;d+=20)e.beginPath(),e.moveTo(0,d),e.lineTo(A,d),e.stroke();const a=t*.002%(Math.PI*2),s=A/2,i=B/2,o=80,c=e.createRadialGradient(s,i,0,s,i,o);c.addColorStop(0,"rgba(80, 220, 200, 0.18)"),c.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=c,e.beginPath(),e.moveTo(s,i),e.arc(s,i,o,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(s,i,o,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const l=[{x:s+26,y:i-18},{x:s-30,y:i+14},{x:s+6,y:i+32}];for(const d of l)e.fillRect(Math.round(d.x),Math.round(d.y),2,2)}function Fc(e){return e*e*(3-2*e)}const Ta=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyCountMin",label:"Min Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`},{path:"combat.enemyCountMax",label:"Max Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],Nc=Ta.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),Hc={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function pt(e){const t=e.split(".");let n=L;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function jc(e,t){const n=e.split(".");let a=L;for(let s=0;s<n.length-1;s++){const i=n[s];a[i]=a[i]??{},a=a[i]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{le(e)};window.devMining=()=>{pe(r,r.location.systemId)?S.go("mining"):S.go("main",{message:"Travel to a new system before mining again."})};function Oc(){return Ta.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(pt(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${pt(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function Wc(e){const t=()=>{window.prompt("Dev settings snapshot (copy manually):",e)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(()=>{alert("Dev settings copied to clipboard.")}).catch(()=>{t()}):t(),console.log("Dev settings report:",e)}function re(){const e=document.getElementById("app");if(!e)return;const t=Hc[S.current]??"space";Ec(t);let n="";if(Ca(null,performance.now()),S.current==="mining"&&!r.miningSession&&r.location?.systemId){const s=Ge(),i=new Set(s?.tags??[]);(i.has("mining_belt")||i.has("mining"))&&r.lastMiningSystemId!==r.location.systemId&&pe(r,r.location.systemId)}switch(S.current){case"main":n=or();break;case"travel":n=ur();break;case"market":n=br(S.params);break;case"contracts":n=Rr();break;case"ship":n=qr();break;case"event":n=Vr(S.params);break;case"combat":n=ec(S.params);break;case"weapon_slots":n=vc();break;case"weapon_select":n=bc(S.params);break;case"shipyard":n=ac();break;case"ship_select":n=pc();break;case"mining":n=xc();break;case"gameover":n=wc();break}const a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${Oc()}
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
  `;e.innerHTML=`${n}${a}`,qc()}let fe=!1,bn=!1;function qc(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),o=document.getElementById("devFillCargo"),c=document.getElementById("devGodMode"),l=document.getElementById("devReportSettings"),d=document.getElementById("devResetMiningSession"),u=document.getElementById("devSpikeThreat"),p=document.getElementById("devLogMiningGrid"),m=document.getElementById("navTravel"),h=document.getElementById("navMarket"),f=document.getElementById("navShip"),M=document.getElementById("devPersistEvents"),v=document.getElementById("devClearEvents"),y=document.getElementById("devHardReset"),g=t?.querySelectorAll("input[data-dev-path]"),k=document.getElementById("devMiningStatus"),_=()=>{t&&t.classList.toggle("hidden")},P=x=>{const b=Nc[x],w=document.getElementById(`devValue-${x.replace(/\./g,"__")}`);b&&w&&(w.textContent=b.formatter(pt(x)))};g?.forEach(x=>{const b=()=>{const w=x.dataset.devPath;if(!w)return;const D=Number(x.value);jc(w,D),Re(),P(w)};x.addEventListener("input",b)});const N=()=>{if(!k)return;const x=r.miningSession;if(!x){k.textContent="No active mining session.";return}const b=(x.threat??0).toFixed(1),w=x.depth??0;k.innerHTML=`
      <div>System: ${x.systemId}</div>
      <div>Belt: ${x.beltName??x.beltId??"—"}</div>
      <div>Depth: Z${w}</div>
      <div>Threat: ${b}%</div>
      <div>Exploration: ${(x.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${x.drillsUsed??0}</div>
      <div>Selected: ${x.selectedRow!=null?`X${x.selectedCol+1} Y${x.selectedRow+1}`:"none"}</div>
    `};N(),e?.addEventListener("click",_),n?.addEventListener("click",()=>t?.classList.add("hidden")),m?.addEventListener("click",()=>window.nav?.("travel")),h?.addEventListener("click",()=>window.nav?.("market")),f?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{r.player.credits+=1e3,t?.classList.add("hidden"),re()}),o?.addEventListener("click",()=>{const x=r.ship.cargo||{};x.aurite_ore=(x.aurite_ore||0)+20,r.ship.cargo=x,t?.classList.add("hidden"),re()}),c?.addEventListener("click",()=>{fe=!fe,r.godMode=fe,fe&&(r.ship.hp=r.ship.maxHp,r.ship.shields=r.ship.maxShields),alert(`God Mode: ${fe?"On":"Off"}`)}),l?.addEventListener("click",()=>{const x=JSON.stringify({timestamp:new Date().toISOString(),devTune:L},null,2);Wc(x),t?.classList.add("hidden")}),d?.addEventListener("click",()=>{pe(r,r.location.systemId,r.miningSession?.beltId),t?.classList.add("hidden"),re(),N()}),u?.addEventListener("click",()=>{const x=r.miningSession;x&&(x.threat=95,x.currentPirateChance=.95,t?.classList.add("hidden"),re(),N())}),p?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",r.miningSession),console.groupEnd()}),M?.addEventListener("click",()=>{ci(),alert("Events cached locally. Future loads will honor this list.")}),v?.addEventListener("click",()=>{li(),alert("Event cache cleared. Future loads use the bundled data.")}),y?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),bn||(document.addEventListener("keydown",x=>{x.key==="`"&&_(),x.key==="Escape"&&S.current!=="main"&&S.current!=="event"&&window.nav?.("main")}),bn=!0)}let C=null,W=null,Ea=null,Mn=performance.now();async function Vc(){const e="/space/".replace(/\/+$/,"/"),t=I=>`${e}content/${I}`,[n,a,s,i,o,c,l,d,u,p,m]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json")),fetch(t("encounters.json")),fetch(t("factions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!o.ok)throw new Error(`Failed to load weapons.json: ${o.status}`);if(!i.ok)throw new Error(`Failed to load commodities.json: ${i.status}`);if(!c.ok)throw new Error(`Failed to load enemies.json: ${c.status}`);if(!l.ok)throw new Error(`Failed to load events.json: ${l.status}`);if(!d.ok)throw new Error(`Failed to load loot_tables.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load missions.json: ${u.status}`);if(!p.ok)throw new Error(`Failed to load encounters.json: ${p.status}`);if(!m.ok)throw new Error(`Failed to load factions.json: ${m.status}`);const h=await n.json();for(const I of h){const R=new Set(I.tags??[]);I.region&&R.add(I.region),I.security==="high"&&R.add("secure"),I.security==="low"&&R.add("lawless"),I.marketProfile?.blackMarket&&R.add("black_market");const H=I.economyTags??[];H.includes("mining")&&R.add("mining"),H.includes("salvage")&&R.add("salvage"),H.includes("checkpoint")&&R.add("checkpoint"),I.tags=Array.from(R)}const f=await a.json(),M=await s.json(),v=await i.json(),y=await o.json(),g=await c.json(),k=await fetch(t("bases.json"));if(!k.ok)throw new Error(`Failed to load bases.json: ${k.status}`);const _=await k.json(),P={};for(const I of h)P[I.id]=I;const N=await l.json();ai(N);const x=await d.json();fi(x);const b=await u.json(),w=await p.json(),D=await m.json();bs(b);const E={};for(const I of _)E[I.id]=I;return{systems:h,systemsById:P,bases:_,basesById:E,ships:f,components:M,commodities:v,weapons:y,enemies:g,events:N,lootTables:x,missions:b,encounters:w,factions:D}}function zc(){W||(W=document.createElement("canvas"),W.id="pixel-background",W.style.position="fixed",W.style.top="0",W.style.left="0",W.style.width="100vw",W.style.height="calc(100vw * 9 / 16)",W.style.maxHeight="100vh",W.style.maxWidth="calc(100vh * 16 / 9)",W.style.objectFit="contain",W.style.zIndex="0",W.style.pointerEvents="none",W.style.background="#02030b",W.style.imageRendering="pixelated",W.style.display="block",document.body.insertBefore(W,document.body.firstChild||null),Ea=W.getContext("2d"),Tc(W))}function Gc(){const e=t=>{const n=t-Mn;Mn=t,_c(n),Ca(Ea,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function Uc(){C=await Vc(),zc();const e=gs(C.systems),t=wn();t.map=e,Sn(t),Fn(e),Cn();const n=Pa();if(n){const i=r.ship.hardpoints.length,o=[];for(let c=0;c<i;c++)o.push(n.weapons[c]??null);r.ship.weapons=o,r.inventory.weapons=n.inventory}ft();const a=S.go.bind(S);S.go=(i,o)=>{a(i,o),re()};const s=S.setZoom.bind(S);S.setZoom=i=>{S.zoom!==i&&(s(i),re())},window.nav=(i,o={})=>{S.go(i,o)},S.current=r.player.hasChosenStarter?"main":"ship_select",re(),Gc()}function U(e){return C?C.systemsById[e]??null:null}function Yc(e){return C?C.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{Uc()});
