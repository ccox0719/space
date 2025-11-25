(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const na=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],It=na,V=It.find(e=>e.starter)??It[0],aa=V?.hardpoints.length??0,sa={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Qt(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let o;const en="cosmo_weapon_loadout";function ia(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(en);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function at(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:o.ship.weapons,inventory:o.inventory?.weapons??[]};window.localStorage.setItem(en,JSON.stringify(e))}function tn(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:V?.id??"none",name:V?.name??"Undefined Hull",hp:V?.hull??0,maxHp:V?.hull??0,shields:V?.shields??0,maxShields:V?.shields??0,fuel:V?.fuel??0,maxFuel:V?.fuel??0,cargoCapacity:V?.cargo??0,cargo:{},modules:[],weapons:V?.hardpoints.map(e=>sa[`${e.size}:${e.type}`]??null)??Array(aa).fill(null),weaponPower:12,evasion:5,maneuverRating:V?.maneuverRating??0,components:[],hardpoints:V?.hardpoints.map(e=>({...e}))??[],passive:V?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},tradeStrategy:{taxEvasion:0,smuggling:0,bribery:0},intel:{systems:[]},runStats:Qt(),gameOver:{active:!1,reason:null},map:null}}function nn(e){o=e}const an="space-dev-tune",W={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:1,miningPayoutMultiplier:1,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.4,enemyDamageMultiplier:.2,enemyAccuracyMultiplier:.6,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:70,nonPirateEventWeight:1,showEncounterDebug:0}};let I={...W};function oa(e){return{...W.combat,...e}}function We(e){return{...e,enemyHpMultiplier:Math.min(W.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??W.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(W.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??W.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(W.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??W.combat.enemyAccuracyMultiplier))}}function sn(){if(typeof window>"u"||!window.localStorage){I={...W};return}const e=window.localStorage.getItem(an);if(!e){I={...W,combat:We(W.combat)},Ce();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=oa({...t.combat,...n});I={...W,...t,combat:We(a)},Ce()}catch{I={...W,combat:We(W.combat)},Ce()}}function Ce(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(an,JSON.stringify(I))}function on(e){const t=I.progressionSpeedMultiplier??1;return e*t}function O(){return I.combat??W.combat}function ra(){return o.ship.passive?.effects??{}}const rn="cosmo_run_high_scores",cn=5;function ca(){return o?{...o.runStats,commodityVolumes:{...o.runStats.commodityVolumes}}:Qt()}function la(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function ln(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(rn);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,cn):[]}catch{return[]}}function da(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(rn,JSON.stringify(e.slice(0,cn)))}function ua(){return ln()}function pa(e){const t=ln();t.push(e),t.sort((n,a)=>a.score-n.score),da(t)}function $e(e){if(!o||e<=0)return;o.runStats.creditsEarnedTotal+=e;const t=o.player.credits;t>o.runStats.highestNetWorth&&(o.runStats.highestNetWorth=t)}function ma(e,t,n){if(!o)return;o.runStats.tradeProfitTotal+=Math.max(0,n);const a=o.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=o.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(o.runStats.mostTradedCommodityId=e)}function ha(e){!o||e<=0||(o.runStats.contractPayoutTotal+=e)}function fa(){o&&(o.runStats.contractsCompleted+=1)}function ga(e){!o||e<=0||(o.runStats.damageDealtTotal+=e)}function ya(e){!o||e<=0||(o.runStats.damageTakenTotal+=e)}function ba(){o&&(o.runStats.fightsSurvived+=1)}function va(){o&&(o.runStats.shipsDestroyed+=1)}function Ma(e,t){!o||e<=0||(o.runStats.miningRuns+=1,o.runStats.oreMinedTotal+=e,t&&(o.runStats.rareFinds+=1))}function $a(){o&&(o.runStats.jumpsMade+=1,o.runStats.systemsVisited+=1)}function xa(e){o&&(o.runStats.daysSurvived=Math.max(o.runStats.daysSurvived,e))}const x={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}};function wa(){return w?w.components:[]}function dn(){if(!w)return[];const e=o.ship.components;return w.components.filter(t=>e.includes(t.id))}function Sa(){if(!w)return{};const e={};for(const t of dn())if(t.effects)for(const[n,a]of Object.entries(t.effects))typeof a=="number"&&(e[n]=(e[n]??1)*a);return e}function ka(e){if(!w)return!1;const t=w.components.find(n=>n.id===e);return t?o.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):o.ship.components.includes(e)?(console.warn("Component already installed."),!1):(o.player.credits-=t.cost,o.ship.components.push(e),Ca(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function Ca(e){const t=o.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function G(){const e=ra(),t=Sa(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const s of n){const i=typeof e[s]=="number"?e[s]:1,r=typeof t[s]=="number"?t[s]:1;a[s]=i*r}return a}function un(){const e=G(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,O().globalIncomeMultiplier??1);return t*n}const Ta=-100,Ea=100;function _a(e,t){const n=o.reputation[e]||0,a=Ra(n+t);return o.reputation[e]=a,a}function pn(e){for(const[t,n]of Object.entries(e))_a(t,n)}function Ia(e){return o.reputation[e]||0}function Ra(e){return Math.max(Ta,Math.min(Ea,e))}const Ye={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function Da(){return w?w.weapons:[]}function mn(){return o.inventory||(o.inventory={weapons:[]}),o.inventory}function st(){return[...mn().weapons]}function it(){if(!w)return;const e=st();if(!e.length)return;const t=o.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(r=>ot(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function ot(e,t){const n=o.ship,a=w?.weapons.find(i=>i.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function Ba(e,t){return ot(e,t)?(o.ship.weapons[e]=t,at(),!0):!1}function X(e){return!e||!w?null:w.weapons.find(t=>t.id===e)??null}function Aa(e){const t=X(e);return!t||o.player.credits<t.price?!1:(mn().weapons.push(e),o.player.credits-=t.price,at(),!0)}function hn(e,t,n={}){const a=e.tags||[];let s=e.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let i=e.damage;const r=t.shields>0?"shields":"hull",c=Ye[e.damageType]?.[r]??1,l=r==="shields"?e.shieldMod:e.armorMod;return i*=l*c,r==="shields"&&a.includes("shield_breaker")&&(i*=1.2),r==="hull"&&a.includes("armor_piercing")&&(i*=1.2),Math.random()<e.critChance&&(i*=e.critMultiplier),i*=n.damageMultiplier??1,Math.max(0,Math.round(i))}const Pa={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},La={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Rt(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const Dt={shields:"Shield-breaker",hull:"Hull buster"};function rt(e){const t=e.damageType,n=Ye[t]??Ye.kinetic,a=Rt(n.shields),s=Rt(n.hull);let i="Balanced";a==="Strong"&&s==="Weak"?i=Dt.shields:s==="Strong"&&a==="Weak"?i=Dt.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const r=(e.tags||[]).map(c=>La[c]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:Pa[t]??t,tagNotes:r}}let fn=null;function gn(e){fn=e}function ct(){return fn}function ja(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function Te(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function Na(e){const t=e.map(i=>({id:i.id,name:i.name,x:i.coords?.x??0,y:i.coords?.y??0,tags:i.tags??[]})),n=[],a=new Set;for(const i of e)for(const r of i.neighbors??[]){const c=Te(i.id,r.id);a.has(c)||(a.add(c),n.push({from:i.id,to:r.id,type:ja(r.laneType),distance:Math.max(1,Math.round(r.distance??1))}))}const s={nodes:t,lanes:n};return gn(s),s}function lt(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function Fa(e,t,n){const a=n==="local"?1:3,s=new Map([[t,0]]);let i=[t];for(let r=1;r<=a;r++){const c=[];for(const l of i)for(const d of lt(e,l))s.has(d)||(s.set(d,r),c.push(d));if(!c.length)break;i=c}return s}function dt(e,t,n){if(t===n)return[t];const a=[t],s=new Set([t]),i=new Map;for(;a.length;){const l=a.shift();for(const d of lt(e,l))if(!s.has(d)&&(s.add(d),i.set(d,l),a.push(d),d===n))break}if(!s.has(n))return[];const r=[];let c=n;for(;c;)r.push(c),c=i.get(c);return r.reverse()}function Ha(e,t,n){const a=dt(e,t,n);return a.length?Math.max(0,a.length-1):null}let ut=[];function Oa(e){ut=e}function qa(e){return ut.find(t=>t.id===e)}function Wa(){const e=new Set(o.contracts.filter(t=>t.status==="active").map(t=>t.id));return ut.filter(t=>!e.has(t.id))}function ie(){return o.contracts.filter(e=>e.status==="active")}function Va(e){const t=e.requirements,n=s=>s?`<strong>${J(s)?.name||s}</strong>`:"",a=[];if(t?.travel?.systemId){const s=n(t.travel.systemId);a.push(`Travel to ${s}`)}if(t?.deliver?.commodityId){const s=t.deliver.quantity||0,i=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${s} ${t.deliver.commodityId}${i}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function Ga(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function pt(e){const t=qa(e);if(!t)return{success:!1,reason:"Unknown mission"};if(o.contracts.some(s=>s.id===e&&s.status==="active"))return{success:!1,reason:"Mission already active"};const n=ns(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:o.time.turn,progress:{}};return o.contracts.push(a),n&&as(a.id,n),{success:!0}}function za(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,I.contractPayoutMultiplier??1)),s=un(),i=Math.max(0,G().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*i));o.player.credits+=r,$e(r),ha(r),o.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){pn(n.rep);const a=Object.entries(n.rep).map(([s,i])=>`${s} ${i>=0?"+":""}${i}`).join(", ");a&&o.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=o.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),o.inventory=a;const s=X(n.weapon)?.name??n.weapon;o.notifications.push(`Rewarded weapon: ${s}.`)}}function Ua(){ie().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,I.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));o.time.turn-e.acceptedTurn>=a&&Ya(e.id)}})}function Ya(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",Be(`Mission failed: ${t.name}`),mt(t.id))}function Xa(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",Be(`Mission abandoned: ${t.name}`),mt(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function Ja(e){ie().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,be(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),be(t)}})}function Ka(e,t,n){ie().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const i=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=i+t,be(a)})}function Za(e){ie().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,be(t))})}function Qa(e,t){Ja(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const i of ie()){const r=i.status,c=i.requirements?.deliver;if(!c||!c.commodityId||(c.systemId??t)!==t||(a+=1,!es(n,c)))continue;c.retain||ts(n,c),i.progress=i.progress||{};const d=i.progress.deliveredQuantity||0;i.progress.deliveredQuantity=d+(c.quantity||1),be(i),r!=="completed"&&i.status==="completed"&&s.push(i.name)}if(s.length){const i=`Contracts completed: ${s.join(", ")}`;e.notifications.push(i)}return{checked:a,completed:s}}function es(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function ts(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function be(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},i=e.requirements?.multiTravel,r=t?!!s.travelCompleted:!0,c=n?s.deliveredQuantity>=(n.quantity||0):!0,l=a?!!s.combatCompleted:!0,d=s.multiTravelVisited??[],u=i?i.every(p=>d.includes(p)):!0;r&&c&&l&&u&&(e.status="completed",za(e),fa(),Be(`Mission completed: ${e.name}`),mt(e.id))}function Be(e){o.notifications.push(e)}function ns(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function as(e,t){const n=ct();if(!n)return;const a=o.location.systemId,s=dt(n,a,t);!s.length||s.length<=1||x.setActiveRoute({nodes:s,currentIndex:0,source:"mission",missionId:e})}function mt(e){x.activeRoute?.missionId===e&&x.clearActiveRoute()}function ss(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",Be(`Mission failed (expired): ${n.name}`))}const Ve=25,yn=100,ht={taxEvasion:{cost:180,gain:10,name:"Tax Evasion Grid",benefit:"whispered import routes and shell accounts"},smuggling:{cost:150,gain:8,name:"Smuggling Ring",benefit:"hidden routes and tolerant contacts"},bribery:{cost:200,gain:12,name:"Bribery Ledger",benefit:"greased palms and friendly inspectors"}};function ft(){return o.tradeStrategy||(o.tradeStrategy={taxEvasion:0,smuggling:0,bribery:0}),o.tradeStrategy}function bn(e){return Math.max(0,Math.min(yn,e))}function is(){return ft()}function os(e){return bn(is()[e])}function rs(e,t,n){const a=Math.floor(t/Ve),s=Math.floor(n/Ve);s>a&&o.notifications.push(`Trade Path: ${e} progress ${Math.min(s*Ve,yn)}% (${ht[e].name})`)}function Xe(e,t){if(t<=0)return;const n=ft(),a=n[e];n[e]=bn(a+t),rs(e,a,n[e])}function cs(e){const t=ht[e];return o.player.credits<t.cost?(o.notifications.push("Not enough credits to invest in "+t.name+"."),!1):(o.player.credits-=t.cost,Xe(e,t.gain),o.notifications.push(`Invested ${t.cost} cr into ${t.name} (${t.benefit}).`),!0)}function vn(e){return ht[e]}function gt(){const e=ft();return{detectionReduction:Math.min(.25,e.bribery/400),fineDiscount:Math.min(.35,e.smuggling/280)}}const Mn="__global__",ls={buyMultiplier:1,sellMultiplier:.85},ds={basic:.9,standard:1,strategic:1.2,luxury:1.35};function Ae(){return o.ship.cargo||(o.ship.cargo={}),o.ship.cargo}function us(){const e=Ae();return Object.values(e).reduce((t,n)=>t+n,0)}function $n(){return w?.commodities??[]}function K(e){return $n().find(n=>n.id===e)??null}function Z(){return o.marketState?(o.marketState.temporaryModifiers=o.marketState.temporaryModifiers||{},o.marketState.activeEvents=o.marketState.activeEvents||[],o.marketState.localAdjustments=o.marketState.localAdjustments||{},o.marketState.priceIntel=o.marketState.priceIntel||{},o.marketState.initialDriftSeeded=o.marketState.initialDriftSeeded??!1):o.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},o.marketState}function ps(e){o.intel||(o.intel={systems:[]});const t=o.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return o.intel.systems.push(n),n})();t.lastPriceSeenDay=o.time.day}function ms(e){const t=Z();let n=1;const a=t.temporaryModifiers[Mn];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function hs(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function fs(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),i=n.exports?.includes(t.id);return s&&(a*=1.2),i&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function yt(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(I.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function gs(e,t){const n=Math.max(1,t.basePrice),a=ds[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,i=fs(e,t),c=1+yt(t)*.08,l=ms(t.id),d=Ms(e.id,t.id),u=kn(e.id,t.id),p=n*a*s*i*c*l*d*u;return Math.max(1,Math.round(p))}function xn(e,t){return z(e,t).base}function z(e,t){const n=J(e),a=K(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=gs(n,a),i=a.baseSpread??ls,r=yt(a),c=G(),l=Math.max(.1,Math.min(3,I.tradeProfitMultiplier??1)),d=un(),u=Math.max(.5,c.buyBonus??1),p=Math.max(0,c.sellBonus??1),m=Math.max(.5,c.marketTax??1),h=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+r*.05)/l*u)),y=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-r*.05)*l*d*p*m)),f=Math.max(1,Math.min(y,h-1)),M=Math.max(h,f,Math.round(s*(1+r*.1))),k=Math.max(1,Math.min(h,f,Math.round(s*Math.max(.65,1-r*.2)))),$=hs(s,a.basePrice);return ps(e),{base:s,buy:h,sell:f,high:M,low:k,trend:$}}function Ee(e,t,n=2){const a=Z(),s=e&&e.length?e:Mn;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function wn(e=1){if(typeof e=="number"){ys(e);return}bs(e??o)}function ys(e){if(e<=0)return;const t=Z(),n=Object.keys(t.temporaryModifiers);for(const s of n){const i=t.temporaryModifiers[s];i.remainingTurns-=e,i.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=o.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),Tn(t,.2*e)}function bs(e){const t=Z(),n=w?.systems??[],a=w?.commodities??[],s=e.time.day;vs(t,n,a);for(const i of n)for(const r of a){const c=kn(i.id,r.id),l=yt(r),d=I.marketDailyTrendStrength??1,u=(1-c)*.1*d,p=(Math.random()-.5)*.1*(.5+l)*d,m=Cn(c+u+p);t.localAdjustments[i.id]||(t.localAdjustments[i.id]={}),t.localAdjustments[i.id][r.id]=m}t.activeEvents=t.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=e.time.turn)),Tn(t,.1)}function vs(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const i=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=i}}e.initialDriftSeeded=!0}}function _e(e){return Ae()[e]??0}function Ms(e,t){return Z().activeEvents.filter(a=>(a.expiresAtDay===void 0||o.time.day<a.expiresAtDay)&&a.expiresAtTurn>o.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function $s(e){Z().activeEvents.push(e)}function xs(e){return Z().activeEvents.filter(n=>n.expiresAtTurn>o.time.turn&&(n.expiresAtDay===void 0||o.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function ws(e){if(Math.random()>.08||!w?.commodities?.length)return;const n=w.commodities[Math.floor(Math.random()*w.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:o.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};$s(i),o.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function Sn(e,t,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,c=Math.min(.15,.03*r),l=Z();l.localAdjustments[e]||(l.localAdjustments[e]={});const d=l.localAdjustments[e][t]??1,u=s==="buy"?1+c:1-c,p=Cn(d*u);l.localAdjustments[e][t]=p}function kn(e,t){return Z().localAdjustments[e]?.[t]??1}function Cn(e){return Math.min(2,Math.max(.5,e))}function Tn(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,i]of Object.entries(a)){const r=i-1,c=i-r*t;Math.abs(c-1)<.01?delete a[s]:a[s]=c}Object.keys(a).length||delete e.localAdjustments[n]}}function Ss(){const t=J(o.location.systemId)?.neighbors.map(s=>J(s.id)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=_n();if(o.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};o.player.credits-=n;const a=Z();return t.forEach(s=>{const i={};(w?.commodities||[]).forEach(c=>{const l=z(s.id,c.id);i[c.id]={buy:l.buy,sell:l.sell}});const r={turn:o.time.turn,prices:i};a.priceIntel[s.id]=r}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function En(){return Z().priceIntel}function _n(){const t=J(o.location.systemId)?.neighbors.map(c=>J(c.id)).filter(c=>!!c)||[],n=80,a=t.map(c=>c.faction?Ia(c.faction):null).filter(c=>typeof c=="number"),s=a.length?a.reduce((c,l)=>c+l,0)/a.length:0,i=Bt(1-s/200,.5,1.4),r=Math.round(n*i);return Bt(r,40,140)}function Bt(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function In(e,t,n){if(n<=0)return!1;const a=z(e,t).buy;if(a<=0)return!1;const s=a*n;if(o.player.credits<s)return!1;const i=o.ship.cargoCapacity;return i<=0?!1:us()+n<=i}function Rn(e,t,n){return n<=0?!1:_e(t)>=n}function Dn(e,t,n){if(!In(e,t,n))return!1;const a=z(e,t).buy,s=a*n;o.player.credits-=s;const i=Ae();i[t]=(i[t]||0)+n,Sn(e,t,n,a,"buy");const r=K(t);return o.notifications.push(`Bought ${n} ${r?.name||t} @ ${a} each for ${s} cr.`),!0}function bt(e,t,n){if(!Rn(e,t,n))return!1;const a=z(e,t).sell,s=a*n,i=Ae();i[t]=Math.max(0,(i[t]||0)-n),o.player.credits+=s,$e(s),ma(t,n,s),Sn(e,t,n,a,"sell"),Ka(t,n,e);const r=K(t);if(r){const c=J(e),l=Math.max(0,c?.marketProfile?.taxRate??0);l>0&&s>0&&Xe("taxEvasion",Math.max(1,Math.round(s*l*.01))),r.legalStatus&&r.legalStatus!=="legal"&&Xe("smuggling",Math.max(1,Math.round(s*.003)))}return o.notifications.push(`Sold ${n} ${r?.name||t} @ ${a} each for ${s} cr.`),!0}function Bn(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const r=z(t,s).sell;return a+r*i},0)}const At={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function An(e,t){if(!o||o.gameOver.active)return;const n=ca(),a=la(n),s={score:a,reason:e,message:t??At[e]??At.other,location:o.location.systemId,stats:n};o.combat=null,o.miningSession=null,o.gameOver={active:!0,reason:e,message:s.message,summary:s};const i={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};pa(i),x.go("gameover")}function Pn(e=!1){const t=tn();nn(t),sn(),x.go(e?"main":"ship_select")}const vt="space-events-cache";let ve=[];function ks(e){const t=Bs();ve=Ds(e,t),Ln(ve)}function Mt(e){return ve.find(t=>t.id===e)}function Cs(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=O(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,G().anomalyChance??1),s=Math.min(1,Math.max(0,(I.eventFrequency??50)/100*a));if(Math.random()>s)return;const i=ve.map(l=>({ev:l,weight:Ls(l,e)})).filter(l=>l.weight>0);if(!i.length)return;const r=i.reduce((l,d)=>l+d.weight,0);let c=Math.random()*r;for(const l of i)if(c-=l.weight,c<=0)return l.ev;return i[0].ev}function Ts(e){const t=e.outcomes;if(!t)return{};const n={},a=G(),s=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),i=r=>{o.player.credits+=r,$e(r),o.player.credits<0&&(o.player.credits=0)};if(t.giveCredits){const r=t.giveCredits.min??0,c=t.giveCredits.max??r,l=he(r,c),d=Math.round(l*s);i(d),o.notifications.push(`Received ${d} credits.`)}if(typeof t.creditsDelta=="number"){const r=Math.round(t.creditsDelta*s);i(r)}if(typeof t.fuelDelta=="number"){const r=o.ship.maxFuel,c=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;o.ship.fuel=Math.max(0,Math.min(r,o.ship.fuel+c))}if(typeof t.turnDelta=="number"){const r=on(t.turnDelta);o.time.turn+=r,Ua(),wn(r)}if(t.cargoGain&&Pt(As(t.cargoGain,s,1),1),t.cargoLoss&&Pt(t.cargoLoss,-1),t.giveCommodity){const r=he(t.giveCommodity.min,t.giveCommodity.max),c=Math.max(0,Math.round(r*s));Je(t.giveCommodity.id,c),c>0&&o.notifications.push(`Collected ${c} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(o.inventory.weapons.push(t.giveWeapon),o.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const r=t.damageShip.min??0,c=t.damageShip.max??r,l=he(r,c);if(o.ship.hp=Math.max(0,o.ship.hp-l),o.notifications.push(`Ship took ${l} damage.`),o.ship.hp<=0)return An("ship_destroyed","Ship destroyed by event."),n}if(t.applyStatus&&o.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&pt(t.spawnMissionId).success&&o.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&o.notifications.push(`Event flag: ${t.flag}`),t.market){const r=t.market,c=Math.max(0,r.multiplier),l=Math.max(1,Math.floor(r.duration??2));Ee(r.commodityId,c,l);const d=o.location?.systemId,u=r.commodityId&&w?.commodities?w.commodities.find(m=>m.id===r.commodityId):void 0,p=`${u?.name||"Local goods"} ${c>=1?"surge":"slip"}`;d&&o.marketState&&o.marketState.activeEvents.push({systemId:d,commodityId:r.commodityId??null,multiplier:c,expiresAtDay:o.time.day+l,expiresAtTurn:o.time.turn+l*2,label:p}),o.notifications.push(`Market shift in ${d??"this system"}: ${u?.name||"local goods"} x${c.toFixed(2)} for ${l} turns.`)}return t.modifyReputation&&pn({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function Es(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,G().eventRewardMultiplier??1);if(n.mining){const s=he(n.mining.quantity.min,n.mining.quantity.max),i=Math.max(0,Math.round(s*a));Je(n.mining.commodityId,i),o.notifications.push(`Mining yield: ${i} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=he(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),i=o.ship.maxFuel;o.ship.fuel=Math.max(0,Math.min(i,o.ship.fuel-s)),o.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];Je(s,1),o.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(o.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),Ee(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function _s(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(I.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(I.marketCrashChance??5)/100));if(e.location?.systemId){const s=w?.commodities?.[Math.floor(Math.random()*(w?.commodities.length||1))];if(s){const i=e.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const c=1.1+Math.random()*.35;Ee(s.id,c,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:Math.max(0,c),expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${i}: ${s.name} prices x${c.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const c=Math.max(.5,.85-Math.random()*.25);Ee(s.id,c,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:c,expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${i}: ${s.name} prices x${c.toFixed(2)} for ${r} turns.`)}}}}function Is(){Ln(ve)}function Rs(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(vt)}function Ds(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function Bs(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(vt);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function Ln(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(vt,JSON.stringify(e))}function Pt(e,t){for(const[n,a]of Object.entries(e)){const s=o.ship.cargo[n]??0,i=Math.max(0,s+a*t);o.ship.cargo[n]=i}}function As(e,t,n=1){const a={};for(const[s,i]of Object.entries(e)){if(i<=0){a[s]=i;continue}const r=Math.max(n,Math.round(i*t));a[s]=r}return a}function Je(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,c)=>r+c,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));o.ship.cargo[e]=n+i,i<t&&o.notifications.push(`Cargo full: stored ${i}/${t} ${e}.`)}function he(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function Ps(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function Lt(e,t){return e.has(t)}function Ls(e,t){let n=e.weight??0;const a=Ps(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const i=Math.max(.1,I.eventDangerMultiplier??1);n*=i}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),Lt(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),Lt(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=ie().filter(i=>i.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let Ke=[];function js(e){Ke=e}function Ns(e,t=[]){const n=Ke.find(i=>i.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Ke.find(i=>(i.enemyTags||[]).some(r=>a.has(r)))??null}function Ze(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Fs(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function Hs(e,t){const n=O(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,i=e.max??s,r=Ze(s,i),c=Math.max(0,Math.round(r*a));o.player.credits+=c,t.creditsEarned+=c,$e(c);break}case"commodity":{const s=Ze(e.min??1,e.max??e.min??1),i=Math.max(0,Math.round(s*a)),r=Os(e.id||"unknown",i);r>0&&t.commodities.push({id:e.id||"unknown",qty:r});break}case"weapon":{e.id&&(o.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(o.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&pt(e.id).success&&t.missionsGranted.push(e.id);break}}}function Os(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,c)=>r+c,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));return o.ship.cargo[e]=n+i,i}function qs(e,t,n={},a=[]){const s=O(),i=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const c=Ns(e,a);if(!c)return null;const l=n.quickKill?1.5:1,d=n.lowDamageTaken?1.25:1,u={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(h,y)=>{if(!h?.length||Math.random()>y)return;const f=Fs(h);f&&Hs(f,u)};p(c.common,r),p(jt(c.uncommon,d),.35*r);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(jt(c.rare,l),m*r),c.guaranteed?.credits){const{min:h,max:y}=c.guaranteed.credits,f=Ze(h,y),M=Math.max(0,Math.round(f*i));o.player.credits+=M,u.creditsEarned+=M,$e(M)}return u}function jt(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}const Nt={damageMultiplier:1.25,accuracyMultiplier:.8},Ws=.4,Se={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},Vs=Object.keys(Se).map(e=>({type:e,shieldMultiplier:Se[e].shield,hullMultiplier:Se[e].hull,description:Se[e].description}));function Gs(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,i=zs(t.weapons),r=Us(t.modules),c=e.player?.credits??0,l=Math.log10(c+1)*5,d=n+a+i+r+s/2+l;return Math.max(1,Math.round(d))}function jn(e){const t=e/40;return t<0?0:t>1?1:t}function zs(e){return e.reduce((t,n)=>{if(!n)return t;const a=X(n);if(!a)return t;const s=a.damage??0,i=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+i*.2+r},0)}function Us(e){return!e||!e.length?0:e.length*5}function Ys(e){return w?w.systemsById[e]??null:null}function Pe(e,t){const n=Ys(e);return n?n.tags.includes(t):!1}const Xs=0,Js=100;function Nn(e){const t=Math.max(Xs,Math.min(Js,(o.player.wanted??0)+e));return o.player.wanted=t,t}function Ks(e,t,n){return Math.max(t,Math.min(n,e))}function Zs(e){const{systemId:t,state:n,sessionFactor:a}=e,s=w?.systems.find(D=>D.id===t),i=s?.security??"medium",r=O(),c=G();let l;switch(i){case"high":l=.02;break;case"low":l=.12;break;default:l=.06;break}s?.tags.includes("mining_belt")&&(l+=.02),s?.marketProfile?.blackMarket&&(l+=.03);const d=Bn(n,t),u=Br(n.ship.templateId)?.cost??0,p=d+u,m=Math.min(.15,p/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),h=Qs(n,t),y=a*.03,f=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),M=Math.max(0,Math.min(1,(I.pirateEncounterRate??0)/100)),k=Math.max(0,(r.encounterChancePerJump??100)/100),$=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,c.pirateDetectionMultiplier??1);let C=(l+m+y+h+f+M)*$*k;return ei(C,n,t)}function Qs(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[l,d]of a){if(!d)continue;const u=z(t,l),p=K(l)?.basePrice??u.sell;if(p<=0)continue;const m=(u.sell-p)/p;s+=m*d,i+=d}if(i<=0)return 0;const r=s/i;return Ks(r*.2,0,.15)}function ei(e,t,n){const a=jn(t.time.day),s=.4,r=s+(.75-s)*a;let c=e;return Pe(n,"core")?(c>.25&&(c=.25),c<.01&&(c=.01),c):(c>r&&(c=r),c<.01&&(c=.01),c)}const ti=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],ni={belts:ti},Fn="pirate_cutter",ai=.5,si=100,Ft=ni,Le=9,je=9,Ne=5;function Qe(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function ii(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,s]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-s);e.ship.cargo=n,t.accumulatedOre={}}function et(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((c,l)=>c+l,0),i=Math.max(0,e.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,i));return r>0&&(a[t]=(a[t]??0)+r,e.ship.cargo=a),e.notifications||(e.notifications=[]),r<n&&e.notifications.push(`Cargo constrained: stored ${r}/${n} ${t}.`),r}function ae(e,t,n){return Math.max(t,Math.min(n,e))}function Hn(e,t){const n=Math.max(1,xn(e,t)),a=Math.min(si,n*ai);return Math.max(1,a)}function oi(e){const t=Math.max(.1,I.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function On(){const e=[];for(let t=0;t<Le;t++){const n=[];for(let a=0;a<je;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function ri(){const e=Math.floor(Math.random()*(Le-4))+2,t=Math.floor(Math.random()*(je-4))+2,n=2+Math.floor(Math.random()*(Ne-2));return{row:e,col:t,depth:n}}function ci(e,t,n,a){const s=t-a,i=e-n;if(Math.sqrt(s*s+i*i)<.5)return null;const c=Math.atan2(i,s)*(180/Math.PI),l=c<0?c+360:c;return l>=337.5||l<22.5?"dir-e":l<67.5?"dir-se":l<112.5?"dir-s":l<157.5?"dir-sw":l<202.5?"dir-w":l<247.5?"dir-nw":l<292.5?"dir-n":"dir-ne"}function li(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function qn(e,t){const n=t?Ft.belts.find(s=>s.id===t):null;if(n)return n;const a=Ft.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function xe(e,t,n,a,s){const i=qn(t,n),r=Wn(e,i.id);if(s?.force&&(r.depletedUntilDay=void 0),r.depletedUntilDay!==void 0&&e.time.day<r.depletedUntilDay){e.notifications.push(`This belt is depleted. It will recover by day ${r.depletedUntilDay}.`);return}const c=0,l=On(),{row:d,col:u,depth:p}=ri();e.miningSession={active:!0,systemId:t,beltId:i.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:c,stability:i.stability.start,maxStability:i.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:l,gridRows:Le,gridCols:je,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:d,veinCol:u,veinDepth:p,accumulatedOre:{},beltName:i.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[]}}function di(e,t){e.miningSession&&(e.miningSession.depth=ae(Math.round(t),1,Ne))}function ui(e,t,n){for(let a=0;a<e.length;a++)for(let s=0;s<e[a].length;s++)e[a][s].selected=a===t&&s===n}function pi(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const s=qn(a.systemId,a.beltId),i=ae(Math.round(t),0,Le-1),r=ae(Math.round(n),0,je-1),c=ae(Math.round(a.depth??3),1,Ne);a.depth=c,a.grid=a.grid??On(),a.drillsUsed=(a.drillsUsed??0)+1;const l=r-(a.veinCol??0),d=i-(a.veinRow??0),u=c-(a.veinDepth??3),m=Math.sqrt(l*l+d*d)*2.6+Math.abs(u)*1.5,h=Math.max(.2,1-a.drillsUsed*.04),y=(Math.random()*2-1)*h,f=10-m,M=ae(Math.round(f+y),0,10),k=ci(a.veinRow??0,a.veinCol??0,i,r),$=li(c,a.veinDepth??3),C=a.grid[i][r],D=!C.drilled;C.drilled=!0,C.signal=M,C.directionClass=k,C.depthHint=$.hint,C.depthClass=$.className,ui(a.grid,i,r),a.selectedRow=i,a.selectedCol=r,D?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+M/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+M/50);const q=Math.max(0,I.miningThreatMultiplier??.7),L=3+c,S=Math.max(0,Math.round(L*q));a.threat=ae((a.threat??0)+S,0,100),a.currentPirateChance=(a.threat??0)/100;let b=Math.max(0,Math.round(M*.0025));M>0&&b===0&&(b=1);const T=a.resourceId??"aurite_ore",P=et(e,T,b);Qe(a,T,P);const F=Hn(a.systemId,T),N=Math.round(F*P);a.totalValueMined+=N,a.lastYield={commodityId:T,amount:P,approxValue:N,rareFind:null},a.lastMessage=`Pulse at X${r+1}, Y${i+1}, Z${c}: signal ${M}. Depth ${$.hint}. Threat +${S}%. Ore +${P}.`;const U=Math.random()*100;let ee=!1;const Y=a.threat*.9;if(U<=Y){ee=!0,a.runComplete=!0,a.active=!1;const te=Wn(e,s.id);te.depletedUntilDay=e.time.day+1,ce(Fn,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:M,directionClass:k,depthHint:$.hint,fightTriggered:ee,threat:a.threat}}function mi(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const s=ae(Math.round(t.depth??3),1,Ne),i=a-(t.veinCol??0),r=n-(t.veinRow??0),c=s-(t.veinDepth??3),l=Math.sqrt(i*i+r*r+c*c),d=Math.random()*1.5-.75,u=ae(Math.round(10-l*2+d),0,10),p=1+Math.max(0,s-2)*.12,h=Math.max(0,Math.round((u+p)*.2)),y=Math.min(.4,(t.explorationScore??0)/25),f=oi(t),M=Math.min(1,f+y);let $=Math.max(1,Math.round(h*M*(1+.1)));$=Math.max(1,Math.round($*.5));const C=t.resourceId??"aurite_ore",D=et(e,C,$);Qe(t,C,D);const q=Hn(t.systemId,C),L=Math.max(.05,I.miningPayoutMultiplier??.35);let S=Math.round(q*D*L),g=null;if(u>=6&&Math.random()<.1+y*.5){const ee=Math.max(1,Math.round(u/3)),Y=et(e,"stellite_fragment",ee);if(Y>0){g={id:"stellite_fragment",amount:Y};const te=Math.max(1,xn(t.systemId,g.id));S+=Math.round(te*Y*L),Qe(t,g.id,Y)}}t.totalValueMined+=S,t.lastYield={commodityId:C,amount:$,approxValue:S,rareFind:g},t.runComplete=!0,t.active=!1;const b=6+s*2,T=Math.max(0,I.miningThreatMultiplier??.7),P=Math.max(0,Math.round(b*T));t.threat=ae((t.threat??0)+P,0,100),t.currentPirateChance=(t.threat??0)/100,t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${s}: signal ${u}, efficiency ${(M*100).toFixed(0)}%, ore ${$} (${D} stored). Threat +${P}%.`;const F=Math.random()*100;let N=!1;const U=t.threat*.9;return F<=U&&(N=!0,ce(Fn,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset."),Ma(D+(g?.amount||0),!!g),{signal:u,yieldAmount:D,commodityId:C,rareFind:g,fightTriggered:N,threat:t.threat}}function hi(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Wn(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function fi(e,t){const n=e.miningSession;n&&(ii(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function gi(e){if(!w)throw new Error("Content has not been loaded.");const t=w.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function yi(e,t){return Math.floor(Math.random()*(t-e+1))+e}function B(e){const t=o.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}function bi(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function vi(e){return e??"main"}function Mi(e,t){x.go(vi(e),t)}function ce(e,t={}){const n=gi(e),s=o.ship.weapons.map(()=>0),i=n.weaponIds.slice(),r=i.map(()=>0),c=O(),l=c.enemyHpMultiplier??1,d=Math.max(1,Math.round(c.enemyCountMin??1)),u=Math.max(d,Math.round(c.enemyCountMax??d)),p=Math.floor(Math.random()*(u-d+1))+d,m=Math.max(1,p);o.combat={enemyId:n.id,enemyName:n.name,enemyHp:Math.max(1,Math.round(n.hull*l*m)),enemyMaxHp:Math.max(1,Math.round(n.hull*l*m)),enemyShields:Math.max(0,Math.round(n.shields*l*m)),enemyMaxShields:Math.max(0,Math.round(n.shields*l*m)),enemyWeapons:i,enemyCooldowns:r,enemyTags:n.tags||[],enemyCount:m,playerCooldowns:s,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:o.ship.hp,round:1,log:[`${n.name} engages you in combat!`],adviceToken:Math.random(),returnTo:t.returnScreen,returnParams:t.returnParams},m>1&&o.combat.log.push(`Multiple bogies detected (${m} ships).`),x.go("combat")}function $i(e){const t=xi(e);ce(t)}function xi(e){if(!w?.enemies?.length)return"pirate_cutter";const t=Gs(o),n=jn(o.time.day),a=O(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,o.time.day-1),i=Math.max(0,a.difficultyScalePerShipPower??1),r=t*i*s;let c=r*(.6+.2*n),l=r*(.9+.4*n);e&&Pe(e,"core")&&(c=t*.4,l=t*.8);const d=w.enemies.map(h=>({id:h.id,power:bi(h)})),u=d.filter(h=>h.power>=c&&h.power<=l);if(u.length)return u[Math.floor(Math.random()*u.length)].id;let p=d[0],m=Math.abs(d[0].power-t);for(const h of d){const y=Math.abs(h.power-t);y<m&&(p=h,m=y)}return p.id}function Fe(e,t,n="normal"){const a=o.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){B("You must choose a weapon to fire.");return}Vn(t,n);break;case"fire_all":wi(n);break;case"brace":Si();break;case"flee":if(ki())return;break}if(o.combat){if(a.enemyHp<=0){_i();return}if(Ci(),!!o.combat){if(o.ship.hp<=0){Ii();return}Ei(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Vn(e,t){const n=o.combat;if(!n)return;const a=o.ship;if(e<0||e>=a.weapons.length){B("Invalid weapon slot.");return}const s=a.weapons[e];if(!s){B("That hardpoint is empty.");return}const i=X(s);if(!i){B("Missing weapon data.");return}const r=G(),c=n.round<=1,l={...i,critChance:Math.min(.95,(i.critChance??0)+(r.critBonus??0)+(c?r.critBonus??0:0))},d=n.playerCooldowns[e]??0;if(d>0){B(`${i.name} is still recharging (${d} turn${d===1?"":"s"}).`);return}const u={shields:n.enemyShields,hp:n.enemyHp},p=t==="called_shot"?Nt.damageMultiplier:1,m=t==="called_shot"?Nt.accuracyMultiplier:1,h=Di(n.playerStance),y=hn(l,u,{accuracyMultiplier:m,damageMultiplier:p*h*(r.playerDamageBonus??1)});if(y<=0){const $=t==="called_shot"?"called shot goes wide":"misses";B(`You fire ${i.name}, but it ${$}.`),n.playerCooldowns[e]=i.cooldown;return}ga(y);let f=y;if(n.enemyShields>0){const $=Math.min(n.enemyShields,f);n.enemyShields-=$,f-=$}f>0&&(n.enemyHp=Math.max(0,n.enemyHp-f));const M=u.shields>0?"shields":"hull",k=t==="called_shot"?"called shot":"normal shot";B(`You strike the ${n.enemyName}'s ${M} with ${i.name} (${k}) for ${y} damage.`),y>0&&i.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),B(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[e]=i.cooldown}function wi(e){const t=o.combat;if(!t)return;const a=o.ship.weapons.map((s,i)=>({id:s,idx:i})).filter(({id:s,idx:i})=>!!s&&(t.playerCooldowns[i]??0)<=0).map(s=>s.idx);if(!a.length){B("No weapons are ready to fire.");return}for(const s of a){if(!o.combat||o.combat.enemyHp<=0)break;Vn(s,e)}}function Si(){const e=o.combat;e&&(e.playerBracing=!0,B("You brace for impact, diverting power to shields and hull integrity."))}function ki(){const e=o.combat;if(!e)return!1;if(!e.canEscape)return B("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4,n=e.playerStance==="assault"?-.1:e.playerStance==="evasive"?.15:0,a=(o.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),i=Ie((a-40)*.01,-.15,.15),r=O(),c=G(),l=(r.fleeSuccessBonus??0)/100+(c.fleeBonus??0),d=Ie(t+n+i+l,.05,.95);return Math.random()<=d?(B(`You punch the thrusters and break free! (Flee chance ${(d*100).toFixed(0)}%)`),o.combat=null,fi(o,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),x.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(B(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(d*100).toFixed(0)}%)`),!1)}function Ci(){const e=o.combat;if(!e)return;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,B("Enemy weapons are jammed this round!");return}const t=[];if(e.enemyWeapons.forEach((m,h)=>{const y=e.enemyCooldowns[h]??0;m&&y<=0&&t.push(h)}),t.length===0){B(`The ${e.enemyName} reloads while you advance.`);return}const n=t[yi(0,t.length-1)],a=e.enemyWeapons[n],s=X(a);if(!s){B(`The ${e.enemyName} fumbles its weapon.`);return}const i={shields:o.ship.shields,hp:o.ship.hp},r=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),c=O(),l=G(),d=e.round<=1;let u=hn(s,i,{accuracyMultiplier:Math.max(0,(1-r)*(c.enemyAccuracyMultiplier??1)*Math.max(0,1-(l.dodgeBonus??0))*(d?Math.max(0,1-(l.dodgeBonus??0)):1))});if(u=Math.max(0,Math.round(u*(c.enemyDamageMultiplier??1))),e.enemyCount&&e.enemyCount>1&&(u=Math.max(0,Math.round(u*e.enemyCount))),u<=0){B(`The ${e.enemyName} fires ${s.name}, but misses.`),e.enemyCooldowns[n]=s.cooldown;return}e.playerBracing&&(u=Math.round(u*Ws)),u=Math.max(0,Math.round(u*Bi(e.playerStance))),u=Math.max(0,Math.round(u*(c.playerDamageTakenMultiplier??1)*Math.max(.1,l.damageTakenMultiplier??1)*(d?Math.max(.1,l.damageTakenMultiplier??1):1)));let p=u;if(e.playerStatus.shieldBoost>0){const m=Math.min(e.playerStatus.shieldBoost,p);e.playerStatus.shieldBoost-=m,p-=m}if(o.ship.shields>0){const m=Math.min(o.ship.shields,p);o.ship.shields-=m,p-=m}p>0&&(o.ship.hp=Math.max(0,o.ship.hp-p)),B(`The ${e.enemyName} hits you with ${s.name} for ${u} damage.`),ya(u),e.enemyCooldowns[n]=s.cooldown}function Ti(){const e=o.combat;if(!e)return null;const t=e.enemyCooldowns.length>0?e.enemyCooldowns.map(c=>c??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...t),a=[];if(n<=1){const c=Ie(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:c})}if(e.enemyShields<=0){const l=e.playerCooldowns.filter(u=>u<=0).length/Math.max(1,o.ship.weapons.length),d=Ie(.6+l*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:d})}o.ship.hp/o.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((e.adviceToken??Math.random())+e.round*.13)%1,i=Math.floor(s*a.length),r=a[i];return{...r,confidence:r.confidence}}function Ei(){const e=o.combat;e&&(e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0),e.enemyCooldowns=e.enemyCooldowns.map(t=>t>0?t-1:0),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)))}function _i(){const e=o.combat;if(!e)return;B(`The ${e.enemyName} explodes under your punishing fire. Victory is yours.`);const t=Math.max(0,e.startingHp-o.ship.hp),n=e.totalRounds<=3,a=t<=5,s=qs(e.enemyId,e.enemyName,{quickKill:n,lowDamageTaken:a},e.enemyTags||[]);if(s){o.lastBattleResult=s;const i=[];s.creditsEarned&&i.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&i.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&i.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&i.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&i.push(`Missions: ${s.missionsGranted.join(", ")}`),B(`Loot recovered — ${i.join(" | ")||"nothing notable."}`),n&&B("Because you won quickly, salvage yields are richer."),a&&B("Minimal hull damage preserved more intact cargo.")}else B("No notable loot recovered.");if(ba(),va(),Za(e.enemyId),e.enemyTags?.some(i=>/pirate|raider/i.test(i))||e.enemyId.includes("pirate")||e.enemyId.includes("raider")){const i=O().repGainMultiplier??1;Nn(Math.round(3*i))}o.combat=null,Mi(e.returnTo,e.returnParams)}function Ii(){B("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),o.ship.hp=0,o.ship.shields=0,o.combat=null,o.notifications.push("Critical failure — hull integrity dropped to zero."),An("ship_destroyed","Ship destroyed in combat.")}function Ri(e){const t=o.combat;t&&(t.playerStance=e,B(`Stance changed to ${e.charAt(0).toUpperCase()+e.slice(1)}.`))}function Di(e){switch(e){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function Bi(e){switch(e){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function Ie(e,t,n){return Math.max(t,Math.min(n,e))}function Ai(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function Pi(e,t){Li(e,t).lastRiskSeenDay=e.time.day}function Li(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function ji(e){e.time.day+=1,xa(e.time.day),wn(e),_s(e),ss(e),Ai(e),hi(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{Vi(e)};function Gn(){return w?w.systemsById:null}function zn(e){const t=Gn();return t?t[e]??null:null}function Ni(e,t){return e.neighbors.find(n=>n.id===t)??null}let $t=0,Ht=1;function Fi(e){e!==Ht&&(Ht=e,$t=0)}function xt(e){return e<=0?!1:$t<e}function wt(){$t+=1}function re(e){O().showEncounterDebug&&o.notifications.push(`Encounter debug: ${e}`)}function He(){return zn(o.location.systemId)}function Hi(){const e=He();if(!e)return[];const t=Gn();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:Un(e,a,n)}:null}).filter(n=>n!==null):[]}function Un(e,t,n){const a=G(),s=(e.baseDanger+t.baseDanger)/2,i={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},r=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,c=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,l=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,d=(i[e.region]??0)+(i[t.region]??0),u=Math.max(1,Math.round(n.distance*c+Math.max(0,d)*2)),p=Re(.1*n.distance+s*.12+l+d+(n.laneType==="wildspace"?.05:0),.1,.95),m=Math.min(.95,Math.max(.1,p)),h=Math.max(0,m-Math.max(0,a.hazardDetectionBonus??0)),y=Math.max(1,Math.round(n.distance*r*(1+s*.06))),f=Math.max(1,Math.round(y*Math.max(.1,a.fuelCostMultiplier??1))),M=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:u,fuelCost:f,hazardChance:h,hazardMitigation:Math.max(0,m-h),routeType:M,laneType:n.laneType,distance:n.distance}}function Re(e,t,n){return Math.max(t,Math.min(n,e))}function Yn(e){const t=o.ship.cargo||{};let n=0,a=0,s=0;for(const[r,c]of Object.entries(t)){if(!c)continue;const l=K(r);if(!l||l.legalStatus!=="illegal"&&l.legalStatus!=="restricted")continue;const d=z(e.id,r);s+=d.sell*c,l.legalStatus==="illegal"?n+=c:a+=c}const i=n+a;return i<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:i,estimatedValue:s}}function Oi(e,t,n,a=G()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.12),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const i=1+Math.min(1.5,e.illegalUnits*.1+e.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),c=Math.max(.5,a.illegalTolerance??1),l=Re(s*i*r/c,0,.95),{detectionReduction:d}=gt();return Math.max(0,l-d)}function qi(e,t){const n=Yn(e);if(!n)return!1;const a=G(),s=Oi(n,e,t.routeType,a);if(o.notifications.push(`Warning: checkpoint scan imminent (${Math.round(s*100)}% detection chance).`),Math.random()>s)return!1;const i=o.ship.cargo||{};let r=0;for(const[k,$]of Object.entries(i)){if(!$)continue;const C=K(k);C&&C.legalStatus==="illegal"&&(r+=$,i[k]=0)}o.ship.cargo=i;const c=Math.max(25,Math.round(n.estimatedValue*.35)),l=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,d=c+l,{fineDiscount:u}=gt(),p=Math.round(d*u),m=Math.max(0,d-p);o.player.credits=Math.max(0,o.player.credits-m);const h=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25)),y=Math.round(h*u*.6),f=Math.max(0,h-y);Nn(f);const M=n.restrictedUnits>0?" (restricted goods fined, not seized)":"";return o.notifications.push(`Checkpoint scans flag contraband. Seized ${r} illegal units, fined ${m} credits${M}, wanted +${f}.`),!0}function Wi(e,t,n,a){const s=Re((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),i=Re(t,0,.95),r=Math.max(0,Math.round((s-i)*100));r>0&&o.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(i*100).toFixed(0)}%).`)}function Vi(e){const t=He();if(!w||!t)return;const n=Ni(t,e);if(!n){const $=`No direct route from ${t.name} to ${e}.`;console.warn($),o.notifications.push($),x.go("main",{message:$});return}const a=zn(e);if(!a){const $=`Destination ${e} is unknown.`;console.warn($),o.notifications.push($),x.go("main",{message:$});return}const s=Un(t,a,n),i=Math.max(0,I.fuelCostMultiplier??1),r=Math.max(0,Math.round(s.fuelCost*i)),c=Math.max(0,Math.min(3,(I.travelRiskScaling??100)/100)),l=O(),d=Math.max(0,l.globalDangerMultiplier??1),u=Math.min(.95,Math.max(0,s.hazardChance*c*d)),p={...s,fuelCost:r,hazardChance:u};if(o.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}o.ship.fuel-=p.fuelCost,o.location.systemId=a.id,o.location.docked=!0,x.advanceActiveRoute(a.id);const m=on(s.travelTime);o.time.turn+=m,ws(a.id),ji(o),Fi(o.time.day),Pi(o,a.id),$a();const h=Qa(o,a.id);h.completed.length&&console.log(`Arrived at ${a.id}: checked ${h.checked} contracts, completed ${h.completed.join(", ")}.`);const y=Number.isInteger(m)?m.toFixed(0):m.toFixed(2),f=Math.abs(m-1)<.01?"":"s",M=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${y} turn${f}).`;Wi(s,p.hazardChance,c,d),qi(a,p)&&re("Contraband inspection triggered on arrival."),!zi(a)&&(Ui(a)||Gi(t,a,p,M)||x.go("main",{message:M}))}function Gi(e,t,n,a){const s=O(),i=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*i),routeType:n.routeType},c=Ji(t)??Cs(r);return c?(re(`Travel event triggered: ${c.name||c.id||"unknown"}`),c.type==="mining"?(re(`Mining event surfaced: ${c.id}`),x.go("event",{eventId:c.id}),!0):!c.choices||c.choices.length===0?(re(`Auto-resolving event: ${c.name||c.id||"unknown"}`),Yi(c,a)):(x.go("event",{eventId:c.id}),!0)):(x.go("main",{message:`${a} — Uneventful transit.`}),!0)}function zi(e){const t=O(),n=Math.max(0,t.maxEncountersPerDay??0);if(!xt(n))return!1;const a=Zs({systemId:e.id,state:o,sessionFactor:1});if(Math.random()<=a){wt();const s=`Pirates intercept you near ${e.name}!`;return o.notifications.push(s),re(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),$i(e.id),!0}return!1}function Ui(e){const t=O(),n=Math.max(0,t.maxEncountersPerDay??0);if(!xt(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),i=e.security==="high"?1.15:e.security==="low"?.65:1,r=G(),c=Yn(e),{detectionReduction:l,fineDiscount:d}=gt(),u=c?1+Math.min(1.2,c.totalUnits*.02):1,p=Math.max(.6,u*Math.max(0,1-d*.8)),m=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),h=a*s*i*p*m,y=Math.min(1,Math.max(0,h*Math.max(0,1-l*.6)));if(Math.random()<=y){wt();const f=`Patrol intercepts you near ${e.name}!`;return o.notifications.push(f),re(`Patrol encounter triggered near ${e.name} (chance ${y.toFixed(3)})`),ce("navy_interceptor"),!0}return!1}function Yi(e,t){const n=Es(e);if(n.triggerCombat?.enemyId){const a=O(),s=Math.max(0,a.maxEncountersPerDay??0);if(!xt(s))return x.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;wt();const i=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return re(i),ce(n.triggerCombat.enemyId),!0}return x.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const Xi={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function Ji(e){const t=Ki(e);return t?Mt(t)??null:null}function Ki(e){const t=[],n=new Set(e.tags||[]),a=s=>{t.includes(s)||t.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(Xi[e.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),t.length?t[Math.floor(Math.random()*t.length)]:null}function de(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}window.nav=(e,t={})=>{x.go(e,t)};window.toggleTools=()=>{const e=document.getElementById("toolsActions"),t=document.getElementById("toolsToggleBtn");if(!e||!t)return;const n=e.classList.toggle("collapsed");t.textContent=n?"Show":"Hide"};function Zi(){const e=o,t=J(e.location.systemId),n=(()=>{const r=(t?.description??"Unknown space").trim(),c=r.split(".")[0];return c===r?r:`${c}.`})(),a=Object.values(e.ship.cargo||{}).reduce((r,c)=>r+c,0),s=e.notifications[e.notifications.length-1],i=(e.notifications||[]).slice(-5).reverse();return`
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
                  <strong>Day ${e.time.day} · Turn ${de(e.time.turn)}</strong>
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
            ${i.length?i.map(r=>`
                <div class="app-log-line">
                  <span>${r}</span>
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
          </div>
        </div>
        <div class="menu-row">
          <div class="menu-group menu-group--system-tools">
            <span class="menu-group__label">System</span>
            <div class="menu-group__actions">
              <button class="btn btn-primary" onclick="nav('market')" id="navMarket">Market</button>
              ${Pe(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}window.attackPirateBase=e=>{const t=Qi(e);if(!t){console.warn(`Unknown base ${e}`);return}x.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function Qi(e){return w?w.basesById[e]??null:null}function eo(e){return w?Object.values(w.basesById).find(n=>n.systemId===e)??null:null}function to(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}window.setMapZoom=e=>{x.setZoom(e)};window.focusRoute=e=>{x.go("travel",{...x.params,focusTargetId:e})};function no(){const e=He(),t=Hi(),n=x.zoom||"local",a=typeof x.params.focusTargetId=="string"?x.params.focusTargetId:"",s=x.activeRoute,i=s?.nodes[s.currentIndex+1],r=s&&s.nodes.length>1?s.nodes.map(f=>J(f)?.name??f).join(" → "):"",c=Object.values(o.ship.cargo||{}).reduce((f,M)=>f+M,0),l=t.map(({profile:f})=>f.hazardChance).reduce((f,M)=>Math.max(f,M),0),d=Math.round((l||0)*100);if(!e)return`
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
    `;const u=e?eo(e.id):null,p=to(u),m=u?`
      <div class="panel-card">
        <p class="label">${p}</p>
        <p class="muted">${u.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${u.id}')">
          Attack Pirate Base (Tier ${u.tier})
        </button>
      </div>
    `:"",h=e?co(e,t,n,a,s):"",y=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:f,route:M,profile:k})=>{const $=f.id===a,C=f.id===i,D=ao(f.security),q=so(f),L=oo(k.hazardChance),S=`${k.fuelCost} fuel`,g=`${k.travelTime} turn${k.travelTime===1?"":"s"}`,b=ro(M.laneType),T=`Distance: ${M.distance}`,P=q.join(" | "),F=["travel-row"];return($||C)&&F.push("travel-row--focused"),`
              <article class="${F.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${f.name}</span>
                  <span class="travel-row__label">${D}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${b}</span>
                    <span>${T}</span>
                  </div>
                  <span class="travel-row__label">${S} | ${g} | Risk: ${L}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${f.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${f.id}')">Jump to ${f.name}</button>
                </div>
                <span class="travel-row__label">${P}</span>
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
          <span class="stat-value">${o.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${o.ship.fuel}/${o.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${c}/${o.ship.cargoCapacity}</span>
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
            ${y}
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
            <div class="panel-card">
              <p class="label">Map Labels</p>
              <p class="muted">
                Each icon shows the system name; tap “Focus route” to zoom to that destination.
              </p>
              <ul class="label-list">
                ${t.map(({system:f,profile:M})=>`<li>${f.name} — ${M.travelTime} turn${M.travelTime===1?"":"s"} / ${M.fuelCost} fuel</li>`).join("")}
              </ul>
            </div>
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
  `}function ao(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function so(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(io)}function io(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function oo(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function ro(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function co(e,t,n,a,s){if(!e)return'<p class="muted">Map data unavailable.</p>';const i=320,r=200,c=16,l=36,d=8,u=8,p=ct(),m=p&&a?dt(p,e.id,a):[],h=s?.nodes??[],y=new Set([e.id]);a&&y.add(a),(p?lt(p,e.id):t.map(({system:v})=>v.id)).forEach(v=>y.add(v)),h.forEach(v=>y.add(v)),m.forEach(v=>y.add(v));const M=v=>v.laneType==="core_lane"?"core":v.laneType==="frontier_lane"?"frontier":"wild",k=p?Fa(p,e.id,n):null,$=[],C=[];if(p&&k){const v=new Map(p.nodes.map(A=>[A.id,A])),R=new Set(k.keys());k.forEach((A,Q)=>{const ne=v.get(Q);ne&&$.push({...ne,depth:A})}),p.lanes.filter(A=>R.has(A.from)&&R.has(A.to)).forEach(A=>{const Q=Math.max(k.get(A.from)??0,k.get(A.to)??0);C.push({...A,depth:Q})})}else{const v=new Set;$.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),v.add(e.id),t.forEach(({system:R,route:A})=>{v.has(R.id)||($.push({id:R.id,name:R.name,x:R.coords?.x??0,y:R.coords?.y??0,tags:R.tags??[],depth:1}),v.add(R.id),C.push({from:e.id,to:R.id,type:M(A),distance:A.distance,depth:1}))})}if(!$.length)return'<p class="muted">No coordinate data to render.</p>';const D=$.map(v=>v.x),q=$.map(v=>v.y),L=Math.min(...D),S=Math.max(...D),g=Math.min(...q),b=Math.max(...q),T=S-L||1,P=b-g||1,F=v=>c+(v-L)/T*(i-c*2),N=v=>r-(c+(v-g)/P*(r-c*2)),U=new Map($.map(v=>[v.id,{...v,sx:F(v.x),sy:N(v.y)}])),ee=new Set($.map(v=>v.id)),Y=new Set(h);m.forEach(v=>Y.add(v)),!p&&a&&Y.add(a);const te=new Set,le=v=>{for(let R=0;R<v.length-1;R++)te.add(Te(v[R],v[R+1]))};le(h),m.length?le(m):a&&te.add(Te(e.id,a));const ue=C.filter(v=>ee.has(v.from)&&ee.has(v.to)).map(v=>{const R=U.get(v.from),A=U.get(v.to);if(!R||!A)return"";const Q=Te(v.from,v.to),ne=v.depth??Math.max(R.depth??0,A.depth??0),we=te.has(Q),Oe=we?3.2:ne<=1?2.2:1.2,qe=we?1:ne<=1?.9:.35;return`<line x1="${R.sx.toFixed(1)}" y1="${R.sy.toFixed(1)}" x2="${A.sx.toFixed(1)}" y2="${A.sy.toFixed(1)}" stroke="${lo(v.type)}" stroke-width="${Oe}" stroke-linecap="round" opacity="${qe}"></line>`}).join(""),pe=Array.from(U.values()).map(v=>{const R=v.id===e.id,Q=(v.depth??0)<=1,ne=Y.has(v.id),we=R?7:ne?6:Q?5:3.5,Oe=R?"#4CE6C3":ne?"#7dd3fc":"#ffffff",qe=ne||Q?1:.45,_t=y.has(v.id),ea=v.name.length>16?`${v.name.slice(0,14)}...`:v.name,ta=_t?ea:"";return`
        <g>
          <circle
            cx="${v.sx.toFixed(1)}"
            cy="${v.sy.toFixed(1)}"
            r="${we}"
            fill="${Oe}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${qe}"
          ></circle>
          ${_t?`<text x="${(v.sx+d).toFixed(1)}" y="${(v.sy-u).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${ta}</text>`:""}
        </g>
      `}).join("");return`
    <div class="travel-map" style="max-width:${i}px;margin:0 auto;">
      <svg
        width="${i}"
        height="${r}"
        viewBox="-${l} -${l} ${i+l*2} ${r+l*2}"
        role="img"
        aria-label="${n==="local"?"Local":"Sector"} system map"
      >
        ${ue}
        ${pe}
      </svg>
    </div>
  `}function lo(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const Ot={high:"^",low:"v",stable:"-"};function uo(e={}){const t=J(o.location.systemId);if(!t)return`
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
    `;const n=$n();if(!n.length)return`
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
    `;const a=Object.values(o.ship.cargo||{}).reduce((g,b)=>g+b,0),s=Object.entries(o.ship.cargo||{}).filter(([,g])=>g>0).sort((g,b)=>b[1]-g[1]).slice(0,5),i=new Map;ie().filter(g=>g.status==="active").forEach(g=>{const b=g.requirements?.deliver;if(!b?.commodityId)return;const T=i.get(b.commodityId)??{needed:0,deliverable:!1},P=_e(b.commodityId)>=(b.quantity||0),F=!b.systemId||b.systemId===o.location.systemId;i.set(b.commodityId,{needed:T.needed+(b.quantity||0),deliverable:T.deliverable||F&&P})});const r=n.map(g=>{const b=z(t.id,g.id),T=Mo(g.tradeTags?.length?g.tradeTags:g.tags),P=_e(g.id),F=$o(g,P),N=Xn(b.buy,a,g.id);return{commodity:g,quote:b,tags:T,cargoQty:P,metaLine:F,maxBuyable:N,profit:b.sell-b.buy}}),c=r.reduce((g,b)=>b.profit>g.profit?{profit:b.profit,entry:b}:g,{profit:Number.NEGATIVE_INFINITY,entry:r[0]}),l=c.entry?.commodity.id??"",d=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,u=r.find(g=>g.commodity.id===d)||r.find(g=>g.commodity.id===l)||r[0],p=r.reduce((g,b)=>{const T=b.quote.high-b.quote.buy;return T>g.delta?{delta:T,entry:b}:g},{delta:-1/0,entry:r[0]}).entry,m=r.reduce((g,b)=>{const T=b.quote.buy-b.quote.low;return T>g.delta?{delta:T,entry:b}:g},{delta:-1/0,entry:r[0]}).entry,h=["legal","restricted","illegal"];let y=0;const f=h.map(g=>{const b=r.filter(N=>qt(N.commodity.legalStatus)===g);if(!b.length)return"";const T=tt(g),P=`
        <div class="market-group__header">
          <div>
            <p class="market-group__label">${T} goods</p>
            <p class="muted market-group__count">${b.length} items</p>
          </div>
          <span class="market-status market-status--${g}">${T}</span>
        </div>
      `,F=b.map(({commodity:N,quote:U,tags:ee,cargoQty:Y})=>{const te=u?.commodity.id===N.id,le=i.get(N.id),ue=["market-row"];te&&ue.push("market-row--highlight");const pe=qt(N.legalStatus);ue.push(`market-row--${pe}`);const v=le?`<span class="contract-pill contract-pill--target${le.deliverable?" ready":""}">${le.deliverable?"Deliver now":"Contract target"}</span>`:"",R=`<span class="market-row__status market-row__status--${pe}">${tt(pe)}</span>`,A=`${Ot[U.trend]} ${U.trend}`,Q=y++;return`
            <article class="${ue.join(" ")}" style="--row-index:${Q};" onclick="selectMarketCommodity('${N.id}')">
              <div class="market-row__main">
                <span class="market-row__name">${N.name}</span>
                <span class="market-row__info">
                  BUY ${U.buy} A | SELL ${U.sell} A | Held ${Y}
                </span>
              </div>
              <div class="market-row__meta">
                <span class="market-row__trend">${A}</span>
                <div class="market-row__meta-line">
                  <span>${ee||"Local goods"}</span>
                  ${R}
                  ${v}
                </div>
              </div>
            </article>
          `}).join("");return`
        <section class="market-group">
          ${P}
          ${F}
        </section>
      `}).join(""),M=a>0,k=`
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
          <strong>${de(o.time.turn)}</strong>
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
        Credits: ${o.player.credits} | Cargo: ${po()}
      </p>
      <div class="market-summary__cargo">
        ${s.length?s.map(([g,b])=>{const T=K(g),P=T?.mass??0,F=P?` (Mass ${Math.round(P*b)})`:"";return`<span>${b} × ${T?.name||g}${F}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${M?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,$=u?In(t.id,u.commodity.id,1):!1,C=u?Rn(t.id,u.commodity.id,1):!1,D=u&&$?"":" disabled",q=u&&u.maxBuyable>1&&$?"":" disabled",L=u&&C&&u.cargoQty>0?"":" disabled",S=u?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${u.commodity.name}</strong>
        <span class="market-row__trend">${Ot[u.quote.trend]} ${u.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${u.quote.buy} · SELL ${u.quote.sell}</span>
        <span>${u.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${D}
          onclick="buyCommodityAction('${u.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${q}
          onclick="buyAllCommodityAction('${u.commodity.id}', ${u.quote.buy})"
        >
          Buy Max (${u.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${L}
          onclick="sellCommodityAction('${u.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${L}
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
            ${k}
            ${go()}
    ${mo(t.id)}
          </aside>
          <div class="market-list">
            <h2 class="panel-title small">Goods</h2>
            ${f}
            ${S}
          </div>
        </section>
        <section class="market-footer">
          ${ho(t,p,m,c.entry)}
        </section>
        ${bo(r)}
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function po(){const e=o.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${o.ship.cargoCapacity}`}function mo(e){const t=xs(e);return t.length?`
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
    `}function ho(e,t,n,a){const s=En(),i=_n(),r=e?.neighbors.map(y=>J(y.id)).filter(y=>!!y&&s[y.id])||[],c=r.length>0?r.map(y=>{const f=vo(e?.id,y.id),M=o.time.turn-(s[y.id]?.turn??o.time.turn),k=f.over?`${f.over.id} overpriced (+${Math.round(f.over.delta*100)}%)`:"no overpay signal",$=f.under?`${f.under.id} underpriced (${Math.round(f.under.delta*100)}% cheaper)`:"no bargain yet";return`<p class="insight-mini">${y.name}: ↑ ${k} · ↓ ${$} (age ${M}t)</p>`}).join(""):'<p class="insight-mini muted">No neighbor intel yet.</p>',l=[];t&&l.push(`<span>📈</span> ${t.commodity.name} high runs ${Math.round(t.quote.high-t.quote.buy)} above buy (${t.quote.high})`),n&&l.push(`<span>📉</span> ${n.commodity.name} low sits ${Math.round(n.quote.buy-n.quote.low)} below buy (${n.quote.low})`);const d=l.length?l.map(y=>`<p class="insight-mini">${y}</p>`).join(""):'<p class="insight-mini muted">No strong pulses yet.</p>',u=a?`<p class="insight-mini"><span>💡</span> Consider ${a.commodity.name}. Buy @ ${a.quote.buy} A·, sell @ ${a.quote.high} A· (high).</p><p class="insight-mini muted">Profit spread: +${a.profit}</p>`:'<p class="insight-mini muted">No hot tip available.</p>',p=o.notifications.filter(y=>{const f=y.toLowerCase();return f.includes("market")||f.startsWith("bought")||f.startsWith("sold")}).slice(-6).reverse(),m=p.length?p.map(y=>`<p class="insight-mini">${y}</p>`).join(""):'<p class="insight-mini muted">No market-relevant log entries yet.</p>',h=(y,f)=>`<p class="insight-title"><span class="insight-icon" aria-hidden="true">${y}</span>${f}</p>`;return`
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
  `}const fo=["taxEvasion","smuggling","bribery"];function go(){return`
    <div class="panel-card strategy-panel">
      <p class="label">Profit Paths</p>
      <div class="strategy-panel__cards">
        ${fo.map(t=>yo(t)).join("")}
      </div>
    </div>
  `}function yo(e){const t=vn(e),n=Math.round(os(e)),a=`${n}%`;return`
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
  `}function bo(e){if(!e.length)return"";const t=e.map(p=>({label:p.commodity.name,value:p.quote.high})),n=e.map(p=>({label:p.commodity.name,value:p.quote.low})),a=Math.max(...t.map(p=>p.value)),s=Math.min(...n.map(p=>p.value)),i=Math.max(1,a-s),r=280,c=120,l=t.map((p,m)=>{const h=m/Math.max(1,t.length-1)*r,y=c-p.value/a*c;return`${h},${y}`}).join(" "),d=n.map((p,m)=>{const h=m/Math.max(1,n.length-1)*r,y=c-(p.value-s)/i*c;return`${h},${y}`}).join(" "),u=t.slice(0,6).map(p=>`<div class="trend-line">
           <span class="trend-label">${p.label}</span>
           <span class="trend-value">High ${p.value}</span>
         </div>`).join("");return`
    <div class="panel-card trend-graph-card">
      <details>
        <summary class="label">Price Graph (Highs &amp; Lows)</summary>
        <svg width="${r}" height="${c}" viewBox="0 0 ${r} ${c}">
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
`}function vo(e,t){if(!e)return{over:null,under:null};const a=En()[t];if(!a)return{over:null,under:null};let s=null,i=null;const r=Math.max(0,o.time.turn-a.turn),c=Math.max(.5,1-r*.05);for(const[l,d]of Object.entries(a.prices)){const u=z(e,l);if(u.sell>0&&d.buy>u.sell){const p=(d.buy-u.sell)/u.sell*c;(!s||p>s.delta)&&(s={id:l,delta:p})}if(u.buy>0&&d.sell<u.buy){const p=(u.buy-d.sell)/u.buy*c;(!i||p>i.delta)&&(i={id:l,delta:p})}}return{over:s,under:i}}function Xn(e,t,n){if(e<=0)return 0;const a=Math.floor(o.player.credits/e),s=Math.max(0,o.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function Mo(e){return e?.length?Array.from(new Set(e)).map(n=>St(n.replace(/_/g," "))).join(" | "):""}function $o(e,t){const n=St(e.tier||"standard"),a=tt(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,i=[`Held ${t}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" | ")}function St(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function tt(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??St(e)}function qt(e){return e==="restricted"||e==="illegal"?e:"legal"}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=o.location.systemId,n=K(e),a=Dn(t,e,1),s=z(t,e).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=o.location.systemId,n=K(e),a=bt(t,e,1),s=z(t,e).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=o.location.systemId,a=o.ship.cargo||{},s=Object.values(a).reduce((l,d)=>l+d,0),i=Xn(t,s);if(i<=0){nav("market");return}Dn(n,e,i);const r=K(e),c=document.getElementById("market-message");c&&(c.textContent=`Bought ${i} ${r?.name||e} for ${t*i} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=o.location.systemId,n=_e(e);if(n<=0){nav("market");return}const a=z(t,e).sell;bt(t,e,n);const s=K(e),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=o.location.systemId,t=Object.entries(o.ship.cargo||{});let n=0;const a=[];for(const[i,r]of t){if(!r||!bt(e,i,r))continue;n+=r;const l=K(i);a.push(`${r} ${l?.name||i}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const i=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${i}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=Ss(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};window.pursueTradeStrategy=e=>{const t=vn(e),n=cs(e),a=document.getElementById("market-message");a&&(a.textContent=n?`Invested in ${t.name}.`:`Need ${t.cost} credits to unlock ${t.name}.`),nav("market")};function xo(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function wo(e={}){const t=typeof e.message=="string"?e.message:"",n=ie(),a=Wa(),s=Object.values(o.ship.cargo||{}).reduce((u,p)=>u+p,0),r=xo(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),c=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(u=>{const p=u.requirements||{},m=Wt(p.travel?.systemId),h=Vt(p.travel?.systemId);return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  ${u.description?`<p class="muted">${u.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${Va(u)}</span>
                    <span>${Ga(u)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${m}${h?` - ${h}`:""}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',l=r?[r]:a[0]?[a[0].id]:[],d=a.length>0?`
        <div class="contract-list">
          ${a.map(u=>{const p=Wt(u.requirements?.travel?.systemId),m=Vt(u.requirements?.travel?.systemId),h=["contract-row"];return l.includes(u.id)&&h.push("contract-row--active"),`
                <article class="${h.join(" ")}" onclick="acceptContract('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  <p class="muted">${u.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${p}${m?` - ${m}`:""}</span>
                    <span>Reward: ${So(u.reward)}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No available missions.</p>';return`
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
          <div class="panel-row">${c}</div>
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
  `}function Wt(e){if(!e)return"Unknown";const t=J(e);return t?.name?`<strong>${t.name}</strong>`:e}function Vt(e){if(!e)return"";const t=ct();if(!t)return"";const n=Ha(t,o.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function So(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=X(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}window.acceptContract=e=>{const t=pt(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=Xa(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};const ko={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function kt(e){return w?w.ships.find(t=>t.id===e)??null:null}function Co(){return kt(o.ship.templateId)}function To(){return w?w.ships.filter(e=>e.starter):[]}function Eo(){return w?w.ships.filter(e=>!e.starter):[]}function Jn(e,t){const n=kt(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,c)=>ko[`${r.size}:${r.type}`]??a[c]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};o.ship=i,at(),it()}function _o(e){Jn(e),o.player.hasChosenStarter=!0}function Io(e){const t=kt(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):o.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(o.player.credits-=t.cost,Jn(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function Ro(){const e=o.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=t+n;if(o.player.credits<a){console.warn("Not enough credits to fully repair.");return}o.player.credits-=a,e.hp=e.maxHp,e.shields=e.maxShields}function Do(){const e=o.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(o.player.credits<a){console.warn("Not enough credits to fully refuel.");return}o.player.credits-=a,e.fuel=e.maxFuel}window.repairShipAction=()=>{Ro(),nav("ship")};window.refuelShipAction=()=>{Do(),nav("ship")};function Bo(){const e=o.ship,t=Co(),n=dn(),a=o.combat?.playerCooldowns??[],s=Object.values(e.cargo||{}).reduce((c,l)=>c+l,0),i=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(c=>`<li>${c.name} (+${c.value} ${c.effectType})</li>`).join("")}</ul>`;return`
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
            ${r}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${e.hardpoints.map((c,l)=>{const d=X(e.weapons[l]),u=d?.name||"Empty",p=a[l]??0,m=d?rt(d):null,h=m?`
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
  `}function Ao(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=Mt(t);if(!n)return`
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
    `;const a=Po(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${Lo(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function Po(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${jo(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function Lo(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function jo(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=x.params,n=typeof t.eventId=="string"?t.eventId:"",a=Mt(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const i=Ts(s);if(i.triggerCombat?.enemyId){ce(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{xe(o,o.location.systemId,e||void 0,t||void 0),x.go("mining")};window.fireWeapon=(e,t="normal")=>{Fe("fire",e,t),o.combat&&nav("combat")};window.brace=()=>{Fe("brace"),o.combat&&nav("combat")};window.flee=()=>{Fe("flee"),o.combat&&nav("combat")};window.setStance=e=>{Ri(e),o.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{Fe("fire_all",void 0,e),o.combat&&nav("combat")};function No(){const e=o.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=o.ship;e.log.map(f=>`<div class="log-line">${f}</div>`).join("");const n=t.hp/Math.max(1,t.maxHp)<=.35,a=(e.log[e.log.length-1]||"").toLowerCase(),s=a.includes("hits you")||a.includes("damage"),i=e.log[e.log.length-1]||"Awaiting orders.",r=Oo(i),c=["app-root","combat-root"];n&&c.push("low-hull"),s&&c.push("hit-flash");const l=t.hardpoints.map((f,M)=>{const k=t.weapons[M],$=X(k),C=e.playerCooldowns[M]??0,D=!!$&&C===0;return`
        <div class="panel-card">
          <p class="label">Slot ${M+1} · ${f.size.toUpperCase()} ${f.type}</p>
          <p class="value-inline">${$?.name||"Empty"}</p>
          <p class="muted">${C>0?`Cooling (${C})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${D?"":"disabled"} onclick="fireWeapon(${M}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${D?"":"disabled"} onclick="fireWeapon(${M}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join("");Vs.map(f=>`
        <tr>
          <td>${f.type}</td>
          <td>${f.shieldMultiplier.toFixed(2)}x</td>
          <td>${f.hullMultiplier.toFixed(2)}x</td>
          <td>${f.description}</td>
        </tr>
      `).join("");const d=Ti(),u=d?`<p class="combat-advice ${d.suggestion}">
        ${d.text}
        <span class="advice-confidence">Intel confidence: ${(d.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',m=e.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.",h=Fo(e),y=Ho(e);return`
    <div class="${c.join(" ")}">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Engaged: ${e.enemyName}</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${o.time.day}</span>
          <span>Turn ${de(o.time.turn)} · Round ${e.round}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-fill"></i>Hull</span>
          <span class="stat-value">${t.hp}/${t.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-shaded"></i>Shields</span>
          <span class="stat-value">${t.shields}/${t.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-fill"></i>Enemy Hull</span>
          <span class="stat-value">${e.enemyHp}/${e.enemyMaxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-shaded"></i>Enemy Shields</span>
          <span class="stat-value">${e.enemyShields}/${e.enemyMaxShields}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Combat: ${e.enemyName}</h1>

          <div class="panel-row">
          <div class="panel-card">
            <p class="label">Your Ship</p>
            <p class="value-inline">${t.name}</p>
            <p class="muted">Stance: <strong>${e.playerStance}</strong></p>
            <p class="muted">Last action: <strong>${r}</strong></p>
            <p class="muted small">${m}</p>
            <p class="value-inline">Fuel ${t.fuel}/${t.maxFuel}</p>
            <div class="status-chips">${h||'<span class="muted">No active buffs</span>'}</div>
          </div>
            <div class="panel-card enemy-reticle">
              <div class="reticle-grid"></div>
              <p class="label">Enemy</p>
              <p class="value-inline">${e.enemyName}</p>
              <p class="muted">
                Max adversaries: <strong>${e.enemyCount??1}</strong>
              </p>
              <div class="status-chips">${y||'<span class="muted">No active debuffs</span>'}</div>
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

        </section>
      </main>

    </div>
  `}function Fo(e){const t=[];return t.push(`<span class="buff-chip buff">Stance: ${e.playerStance}</span>`),e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function Ho(e){const t=[];return e.enemyStatus.weaponJammedTurns>0&&t.push(`<span class="buff-chip debuff">Weapons jammed (${e.enemyStatus.weaponJammedTurns}t)</span>`),e.enemyShields<=0&&t.push('<span class="buff-chip debuff">Shields down</span>'),t.length===0&&e.enemyShields>0&&t.push('<span class="buff-chip muted-chip">Systems nominal</span>'),t.join("")}function Oo(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}window.buyShipAction=e=>{Io(e)};window.buyComponentAction=e=>{ka(e)};window.buyWeaponAction=e=>{Aa(e)};function qo(){if(!Pe(o.location.systemId,"shipyard"))return`
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
    `;const e=Eo(),t=wa(),n=Da(),a=st().map(l=>X(l)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(l=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${ze("ship",l.id)}
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
                      ${ze("module",l.id)}
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
      `,r=n.length===0?'<p class="muted">No weapons available.</p>':`
        <div class="card-list">
          ${n.map(l=>{const d=rt(l),u=d.tagNotes.length?`Traits: ${d.tagNotes.join(", ")}`:"";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${ze("weapon",l.id)}
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
            ${r}
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
  `}const Gt=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],zt=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],Ut=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],Yt=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function fe(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Wo(e){const t=fe(e)%Gt.length;return Gt[t]}function Ct(e){let t=fe(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function Ge(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,c=i-s+1,l=Math.floor((t-r)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function ze(e,t){const n=Wo(`${e}-${t}`),a=zt[fe(t)%zt.length],s=Ut[fe(t+"-mod")%Ut.length],i=Yt[fe(t+"-wpn")%Yt.length],c=Ge(e==="ship"?Vo(a,t):e==="module"?Go(s,t):zo(i,t)).map(l=>`<rect x="${l.x}" y="${l.y}" width="1" height="1" fill="${n[l.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${c}
    </svg>
  `}function Vo(e,t){const n=Ct(t),a=[...e],s=Math.min(...e.map(d=>d.y)),i=Math.max(...e.map(d=>d.y)),r=e.filter(d=>d.y===s),c=e.filter(d=>d.y===i);r.slice(0,2).forEach(d=>{a.push({x:d.x,y:d.y-1,c:"a"})}),c.forEach(d=>{n()>.5&&a.push({x:d.x,y:d.y+1,c:n()>.5?"a":"b"})});const l=n()>.5?-1:1;return a.push({x:c[0]?.x+l,y:i-1,c:"b"}),a.push({x:c[c.length-1]?.x-l,y:i-1,c:"b"}),a}function Go(e,t){const n=Ct(t+"-decor"),a=[...e],s=Math.min(...e.map(l=>l.x)),i=Math.max(...e.map(l=>l.x)),r=Math.min(...e.map(l=>l.y)),c=Math.max(...e.map(l=>l.y));return a.push({x:s-1,y:Math.round((r+c)/2),c:"b"}),a.push({x:i+1,y:Math.round((r+c)/2),c:"b"}),n()>.3&&a.push({x:s,y:r-1,c:"a"}),n()>.6&&a.push({x:i,y:r-1,c:"c"}),n()>.4&&a.push({x:s,y:c+1,c:"a"}),a}function zo(e,t){const n=Ct(t+"-weapon"),a=[...e],s=Math.max(...e.map(c=>c.y)),i=Math.min(...e.map(c=>c.x)),r=Math.max(...e.map(c=>c.x));return a.push({x:i,y:s+1,c:n()>.5?"a":"b"}),a.push({x:r,y:s+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:i+1,y:s-2,c:"c"}),a.push({x:r+1,y:s-1,c:"b"}),a}const Uo={incomeMultiplier:e=>H(e,"income"),eventRewardMultiplier:e=>H(e,"event rewards"),hpBonus:e=>H(e,"hull"),cargoBonus:e=>Xo(e,"cargo capacity"),sellBonus:e=>H(e,"sell price"),buyBonus:e=>H(e,"buy price"),marketTax:e=>H(e,"market tax"),miningYield:e=>H(e,"mining yield"),rareFindChance:e=>H(e,"rare find chance"),miningSpeed:e=>H(e,"mining duration"),dodgeBonus:e=>ke(e,"dodge chance"),critBonus:e=>ke(e,"crit chance"),damageTakenMultiplier:e=>H(e,"damage taken"),fleeBonus:e=>ke(e,"flee chance"),pirateDetectionMultiplier:e=>H(e,"pirate detection"),scanDetectionMultiplier:e=>H(e,"scan detection"),illegalTolerance:e=>H(e,"illegal tolerance"),fuelCostMultiplier:e=>H(e,"fuel cost"),hazardDetectionBonus:e=>ke(e,"hazard detection"),anomalyChance:e=>H(e,"anomaly chance"),shieldRegenBonus:e=>H(e,"shield regen")};function Yo(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>Uo[n]?.(a)??null).filter(n=>!!n):[]}function H(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function ke(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Xo(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}function Jo(e,t){return`
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
  `}window.chooseStarter=e=>{_o(e),it(),x.go("main")};function Ko(){const e=To(),t={maxHull:Math.max(...e.map(a=>a.hull),100),maxShields:Math.max(...e.map(a=>a.shields),100),maxFuel:Math.max(...e.map(a=>a.fuel),100),maxCargo:Math.max(...e.map(a=>a.cargo),50)};return e.length===0?`
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
            ${e.map(a=>{const s=Yo(a),i=a.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${a.passive.name}</p>
          ${s.length?`<div class="passive-summary__list">${s.map(r=>`<span>${r}</span>`).join("")}</div>`:""}
        </div>
      `:"";return`
      <button class="panel-card starter-card btn-starter" type="button" onclick="chooseStarter('${a.id}')">
        <div class="starter-card-head starter-card-head--split">
          <div class="starter-head__ship starter-head__ship--stacked">
            ${nr(a.id,a.roleHint??a.name)}
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
          ${Jo(a,t)}
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
`}const Xt=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],Jt={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function Tt(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Zo(e){return Xt[Tt(e)%Xt.length]}function Qo(e,t){const n=(()=>{let r=Tt(t);return()=>(r=r*1664525+1013904223|0,(r>>>0)/4294967295)})(),a=[...e],s=Math.max(...e.map(r=>r.y)),i=Math.min(...e.map(r=>r.y));return n()>.5&&a.push({x:e[0]?.x??4,y:i-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:s+1,c:n()>.5?"b":"c"}),a}function er(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,c=i-s+1,l=Math.floor((t-r)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function tr(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(Jt).find(r=>n.includes(r))??"fighter",s=Jt[a],i=Tt(`${e}-${t}`)%s.length;return s[i]}function nr(e,t){const n=Zo(`${e}-${t}`),a=tr(e,t),s=Qo(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${er(s).map(c=>`<rect x="${c.x}" y="${c.y}" width="1" height="1" fill="${n[c.c]}" opacity="1" />`).join("")}
    </svg>
  `}function ar(){const e=o.ship;if(!e.hardpoints.length)return`
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
          <span>Day ${o.time.day}</span>
          <span>Turn ${de(o.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{Ba(e,t)&&nav("weapon_slots")};function sr(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=o.ship.hardpoints[t];if(!n)return`
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
    `;const r=st().map(c=>X(c)).filter(c=>!!c).map(c=>{const l=ot(t,c.id),u=X(o.ship.weapons[t])?.id===c.id?"Equipped":"Equip",p=rt(c),m=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
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
          <span>Day ${o.time.day}</span>
          <span>Turn ${de(o.time.turn)}</span>
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
  `}window.leaveMining=()=>{o.miningSession=null,x.go("main")};window.drillCell=(e,t)=>{pi(o,e,t)?.fightTriggered||x.go("mining")};window.setMiningDepth=e=>{di(o,e),x.go("mining")};window.finalizeDrill=()=>{if(mi(o)?.fightTriggered)return;const t=o.miningSession?.lastMessage||"Extraction complete.";x.go("main",{message:t})};window.newSurvey=()=>{xe(o,o.location.systemId,o.miningSession?.beltId,o.miningSession?.resourceId,{force:!0}),x.go("mining")};function ir(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function or(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const s=e[n][a],i=["mine-cell"];s.drilled&&i.push("drilled"),s.selected&&i.push("selected");const r=["mine-cell-inner"];s.directionClass&&r.push(s.directionClass),s.depthClass&&r.push(s.depthClass),s.signal!=null&&r.push(ir(s.signal));const c=s.signal!=null?`<span class="cell-signal">${s.signal}</span>`:'<span class="cell-signal muted">·</span>';t.push(`
        <div class="${i.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${r.join(" ")}">
            <div class="cell-center">
              ${c}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function rr(){const e=o.miningSession;if(!e)return`
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
    `;const t=Math.round(e.threat??0),n=Bn(o,e.systemId),a=Array.from({length:5},(r,c)=>{const l=c+1;return`<button class="chip-btn ${l===e.depth?"active":""}" onclick="setMiningDepth(${l})">Z${l}</button>`}).join(""),s=or(e.grid),i=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
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
          <span>Day ${o.time.day}</span>
          <span>Turn ${de(o.time.turn)}</span>
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
  `}window.startNewRun=()=>Pn(!1);window.returnToMainMenu=()=>Pn(!0);function cr(){const e=o.gameOver?.summary,t=ua(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],i=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],c=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],l=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],d=p=>p.map(([m,h])=>`
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
  `}const _=320,E=180;let ge=null,ye="space",Me=null,se=1;const lr=450,Et=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],De=[];function dr(){for(const e of Et){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*_,y:Math.random()*E,size:Math.random()<.6?1:2})}}function ur(){De.length=0;for(let e=0;e<4;e++)De.push({x:Math.random()*_,y:E/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function pr(e){ge=e.getContext("2d"),ge&&(e.width=_,e.height=E,ge.imageSmoothingEnabled=!1,dr(),ur())}function mr(e){e===ye&&(!Me||se<1)||(Me=ye,ye=e,se=0)}function hr(e){if(!ge)return;const t=e/16.6667;se<1&&(se=Math.min(1,se+e/lr),se>=1&&(Me=null));for(const n of De)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=_+20,n.y=E/4+Math.random()*(E/2));for(const n of Et)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=_,a.y=Math.random()*E)}function Kn(e=ge,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=Me!==null&&se<1,a=xr(se);n?(Ue(e,Me,t,{alpha:1-a,scale:1+.05*a}),Ue(e,ye,t,{alpha:a,scale:1.04-.04*a})):Ue(e,ye,t),e.restore()}function Ue(e,t,n,a={}){const s=a.alpha??1,i=a.scale??1;switch(e.save(),e.globalAlpha=s,i!==1&&(e.translate(_/2,E/2),e.scale(i,i),e.translate(-_/2,-E/2)),t){case"mining":br(e);break;case"hangar":Mr(e,n);break;case"ops":$r(e,n);break;default:fr(e,n);break}yr(e,t),t==="combat"&&vr(e),e.restore()}function fr(e,t){e.fillStyle="#02030b",e.fillRect(0,0,_,E),gr(e,t)}function gr(e,t){for(const n of De){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),s=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${s})`),a.addColorStop(.5,`rgba(60, 130, 200, ${s*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${s})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of Et){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function yr(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let s=0;s<n;s++){const i=Math.random()*_,r=Math.random()*E;e.fillRect(Math.round(i),Math.round(r),1,1)}}function br(e){e.fillStyle="#0a0604",e.fillRect(0,0,_,E);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const s=a*(E/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(s),_,Math.ceil(E/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,_-80,E-40);const n=e.createLinearGradient(0,E/2,_,E/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,_,E)}function vr(e){const t=e.createLinearGradient(0,0,_,E);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,_,E)}function Mr(e,t){e.fillStyle="#04060a",e.fillRect(0,0,_,E);const n=e.createLinearGradient(0,0,0,E);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,_,E);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(_/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,E-46,_,18),e.fillStyle="#0f1a28";for(let s=0;s<7;s++){const i=E-26+s*3;e.fillRect(0,i,_,1)}e.fillStyle="#1a2838";for(let s=0;s<_;s+=22)e.fillRect(s,E-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,_-80,10),e.fillRect(40,70,_-80,6)}function $r(e,t){e.fillStyle="#021014",e.fillRect(0,0,_,E);const n=e.createRadialGradient(_/2,E*.45,10,_/2,E/2,E);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,_,E),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let d=20;d<_;d+=20)e.beginPath(),e.moveTo(d,0),e.lineTo(d,E),e.stroke();for(let d=20;d<E;d+=20)e.beginPath(),e.moveTo(0,d),e.lineTo(_,d),e.stroke();const a=t*.002%(Math.PI*2),s=_/2,i=E/2,r=80,c=e.createRadialGradient(s,i,0,s,i,r);c.addColorStop(0,"rgba(80, 220, 200, 0.18)"),c.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=c,e.beginPath(),e.moveTo(s,i),e.arc(s,i,r,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(s,i,r,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const l=[{x:s+26,y:i-18},{x:s-30,y:i+14},{x:s+6,y:i+32}];for(const d of l)e.fillRect(Math.round(d.x),Math.round(d.y),2,2)}function xr(e){return e*e*(3-2*e)}const Zn=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyCountMin",label:"Min Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`},{path:"combat.enemyCountMax",label:"Max Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],wr=Zn.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),Sr={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function nt(e){const t=e.split(".");let n=I;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function kr(e,t){const n=e.split(".");let a=I;for(let s=0;s<n.length-1;s++){const i=n[s];a[i]=a[i]??{},a=a[i]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{ce(e)};window.devMining=()=>{xe(o,o.location.systemId),x.go("mining")};function Cr(){return Zn.map(e=>{const t=e.controls.map(n=>`
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
    `}).join("")}function Tr(e){const t=()=>{window.prompt("Dev settings snapshot (copy manually):",e)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(()=>{alert("Dev settings copied to clipboard.")}).catch(()=>{t()}):t(),console.log("Dev settings report:",e)}function oe(){const e=document.getElementById("app");if(!e)return;const t=Sr[x.current]??"space";mr(t);let n="";if(Kn(null,performance.now()),x.current==="mining"&&!o.miningSession&&o.location?.systemId){const s=He(),i=new Set(s?.tags??[]);(i.has("mining_belt")||i.has("mining"))&&xe(o,o.location.systemId)}switch(x.current){case"main":n=Zi();break;case"travel":n=no();break;case"market":n=uo(x.params);break;case"contracts":n=wo();break;case"ship":n=Bo();break;case"event":n=Ao(x.params);break;case"combat":n=No(x.params);break;case"weapon_slots":n=ar();break;case"weapon_select":n=sr(x.params);break;case"shipyard":n=qo();break;case"ship_select":n=Ko();break;case"mining":n=rr();break;case"gameover":n=cr();break}const a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${Cr()}
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
  `;e.innerHTML=`${n}${a}`,Er()}let me=!1,Kt=!1;function Er(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),c=document.getElementById("devGodMode"),l=document.getElementById("devReportSettings"),d=document.getElementById("devResetMiningSession"),u=document.getElementById("devSpikeThreat"),p=document.getElementById("devLogMiningGrid"),m=document.getElementById("navTravel"),h=document.getElementById("navMarket"),y=document.getElementById("navShip"),f=document.getElementById("devPersistEvents"),M=document.getElementById("devClearEvents"),k=document.getElementById("devHardReset"),$=t?.querySelectorAll("input[data-dev-path]"),C=document.getElementById("devMiningStatus"),D=()=>{t&&t.classList.toggle("hidden")},q=S=>{const g=wr[S],b=document.getElementById(`devValue-${S.replace(/\./g,"__")}`);g&&b&&(b.textContent=g.formatter(nt(S)))};$?.forEach(S=>{const g=()=>{const b=S.dataset.devPath;if(!b)return;const T=Number(S.value);kr(b,T),Ce(),q(b)};S.addEventListener("input",g)});const L=()=>{if(!C)return;const S=o.miningSession;if(!S){C.textContent="No active mining session.";return}const g=(S.threat??0).toFixed(1),b=S.depth??0;C.innerHTML=`
      <div>System: ${S.systemId}</div>
      <div>Belt: ${S.beltName??S.beltId??"—"}</div>
      <div>Depth: Z${b}</div>
      <div>Threat: ${g}%</div>
      <div>Exploration: ${(S.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${S.drillsUsed??0}</div>
      <div>Selected: ${S.selectedRow!=null?`X${S.selectedCol+1} Y${S.selectedRow+1}`:"none"}</div>
    `};L(),e?.addEventListener("click",D),n?.addEventListener("click",()=>t?.classList.add("hidden")),m?.addEventListener("click",()=>window.nav?.("travel")),h?.addEventListener("click",()=>window.nav?.("market")),y?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{o.player.credits+=1e3,t?.classList.add("hidden"),oe()}),r?.addEventListener("click",()=>{const S=o.ship.cargo||{};S.aurite_ore=(S.aurite_ore||0)+20,o.ship.cargo=S,t?.classList.add("hidden"),oe()}),c?.addEventListener("click",()=>{me=!me,o.godMode=me,me&&(o.ship.hp=o.ship.maxHp,o.ship.shields=o.ship.maxShields),alert(`God Mode: ${me?"On":"Off"}`)}),l?.addEventListener("click",()=>{const S=JSON.stringify({timestamp:new Date().toISOString(),devTune:I},null,2);Tr(S),t?.classList.add("hidden")}),d?.addEventListener("click",()=>{xe(o,o.location.systemId,o.miningSession?.beltId),t?.classList.add("hidden"),oe(),L()}),u?.addEventListener("click",()=>{const S=o.miningSession;S&&(S.threat=95,S.currentPirateChance=.95,t?.classList.add("hidden"),oe(),L())}),p?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",o.miningSession),console.groupEnd()}),f?.addEventListener("click",()=>{Is(),alert("Events cached locally. Future loads will honor this list.")}),M?.addEventListener("click",()=>{Rs(),alert("Event cache cleared. Future loads use the bundled data.")}),k?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),Kt||(document.addEventListener("keydown",S=>{S.key==="`"&&D(),S.key==="Escape"&&x.current!=="main"&&x.current!=="event"&&window.nav?.("main")}),Kt=!0)}let w=null,j=null,Qn=null,Zt=performance.now();async function _r(){const e="/space/".replace(/\/+$/,"/"),t=g=>`${e}content/${g}`,[n,a,s,i,r,c,l,d,u]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!i.ok)throw new Error(`Failed to load commodities.json: ${i.status}`);if(!c.ok)throw new Error(`Failed to load enemies.json: ${c.status}`);if(!l.ok)throw new Error(`Failed to load events.json: ${l.status}`);if(!d.ok)throw new Error(`Failed to load loot_tables.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load missions.json: ${u.status}`);const p=await n.json();for(const g of p){const b=new Set(g.tags??[]);g.region&&b.add(g.region),g.security==="high"&&b.add("secure"),g.security==="low"&&b.add("lawless"),g.marketProfile?.blackMarket&&b.add("black_market");const T=g.economyTags??[];T.includes("mining")&&b.add("mining"),T.includes("salvage")&&b.add("salvage"),T.includes("checkpoint")&&b.add("checkpoint"),g.tags=Array.from(b)}const m=await a.json(),h=await s.json(),y=await i.json(),f=await r.json(),M=await c.json(),k=await fetch(t("bases.json"));if(!k.ok)throw new Error(`Failed to load bases.json: ${k.status}`);const $=await k.json(),C={};for(const g of p)C[g.id]=g;const D=await l.json();ks(D);const q=await d.json();js(q);const L=await u.json();Oa(L);const S={};for(const g of $)S[g.id]=g;return{systems:p,systemsById:C,bases:$,basesById:S,ships:m,components:h,commodities:y,weapons:f,enemies:M,events:D,lootTables:q,missions:L}}function Ir(){j||(j=document.createElement("canvas"),j.id="pixel-background",j.style.position="fixed",j.style.top="0",j.style.left="0",j.style.width="100vw",j.style.height="calc(100vw * 9 / 16)",j.style.maxHeight="100vh",j.style.maxWidth="calc(100vh * 16 / 9)",j.style.objectFit="contain",j.style.zIndex="0",j.style.pointerEvents="none",j.style.background="#02030b",j.style.imageRendering="pixelated",j.style.display="block",document.body.insertBefore(j,document.body.firstChild||null),Qn=j.getContext("2d"),pr(j))}function Rr(){const e=t=>{const n=t-Zt;Zt=t,hr(n),Kn(Qn,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function Dr(){w=await _r(),Ir();const e=Na(w.systems),t=tn();t.map=e,nn(t),gn(e),sn();const n=ia();if(n){const i=o.ship.hardpoints.length,r=[];for(let c=0;c<i;c++)r.push(n.weapons[c]??null);o.ship.weapons=r,o.inventory.weapons=n.inventory}it();const a=x.go.bind(x);x.go=(i,r)=>{a(i,r),oe()};const s=x.setZoom.bind(x);x.setZoom=i=>{x.zoom!==i&&(s(i),oe())},window.nav=(i,r={})=>{x.go(i,r)},x.current=o.player.hasChosenStarter?"main":"ship_select",oe(),Rr()}function J(e){return w?w.systemsById[e]??null:null}function Br(e){return w?w.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{Dr()});
