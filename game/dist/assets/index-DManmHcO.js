(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const na=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],It=na,G=It.find(e=>e.starter)??It[0],aa=G?.hardpoints.length??0,sa={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Qt(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let o;const en="cosmo_weapon_loadout";function ia(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(en);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function at(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:o.ship.weapons,inventory:o.inventory?.weapons??[]};window.localStorage.setItem(en,JSON.stringify(e))}function tn(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:G?.id??"none",name:G?.name??"Undefined Hull",hp:G?.hull??0,maxHp:G?.hull??0,shields:G?.shields??0,maxShields:G?.shields??0,fuel:G?.fuel??0,maxFuel:G?.fuel??0,cargoCapacity:G?.cargo??0,cargo:{},modules:[],weapons:G?.hardpoints.map(e=>sa[`${e.size}:${e.type}`]??null)??Array(aa).fill(null),weaponPower:12,evasion:5,maneuverRating:G?.maneuverRating??0,components:[],hardpoints:G?.hardpoints.map(e=>({...e}))??[],passive:G?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},tradeStrategy:{taxEvasion:0,smuggling:0,bribery:0},intel:{systems:[]},runStats:Qt(),gameOver:{active:!1,reason:null},map:null}}function nn(e){o=e}const an="space-dev-tune",W={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:1,miningPayoutMultiplier:1,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.4,enemyDamageMultiplier:.2,enemyAccuracyMultiplier:.6,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:70,nonPirateEventWeight:1,showEncounterDebug:0}};let I={...W};function oa(e){return{...W.combat,...e}}function We(e){return{...e,enemyHpMultiplier:Math.min(W.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??W.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(W.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??W.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(W.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??W.combat.enemyAccuracyMultiplier))}}function sn(){if(typeof window>"u"||!window.localStorage){I={...W};return}const e=window.localStorage.getItem(an);if(!e){I={...W,combat:We(W.combat)},Ce();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=oa({...t.combat,...n});I={...W,...t,combat:We(a)},Ce()}catch{I={...W,combat:We(W.combat)},Ce()}}function Ce(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(an,JSON.stringify(I))}function on(e){const t=I.progressionSpeedMultiplier??1;return e*t}function q(){return I.combat??W.combat}function ra(){return o.ship.passive?.effects??{}}const rn="cosmo_run_high_scores",cn=5;function ca(){return o?{...o.runStats,commodityVolumes:{...o.runStats.commodityVolumes}}:Qt()}function la(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function ln(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(rn);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,cn):[]}catch{return[]}}function da(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(rn,JSON.stringify(e.slice(0,cn)))}function ua(){return ln()}function pa(e){const t=ln();t.push(e),t.sort((n,a)=>a.score-n.score),da(t)}function $e(e){if(!o||e<=0)return;o.runStats.creditsEarnedTotal+=e;const t=o.player.credits;t>o.runStats.highestNetWorth&&(o.runStats.highestNetWorth=t)}function ma(e,t,n){if(!o)return;o.runStats.tradeProfitTotal+=Math.max(0,n);const a=o.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=o.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(o.runStats.mostTradedCommodityId=e)}function ha(e){!o||e<=0||(o.runStats.contractPayoutTotal+=e)}function fa(){o&&(o.runStats.contractsCompleted+=1)}function ga(e){!o||e<=0||(o.runStats.damageDealtTotal+=e)}function ya(e){!o||e<=0||(o.runStats.damageTakenTotal+=e)}function ba(){o&&(o.runStats.fightsSurvived+=1)}function va(){o&&(o.runStats.shipsDestroyed+=1)}function Ma(e,t){!o||e<=0||(o.runStats.miningRuns+=1,o.runStats.oreMinedTotal+=e,t&&(o.runStats.rareFinds+=1))}function $a(){o&&(o.runStats.jumpsMade+=1,o.runStats.systemsVisited+=1)}function xa(e){o&&(o.runStats.daysSurvived=Math.max(o.runStats.daysSurvived,e))}const $={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}};function wa(){return x?x.components:[]}function dn(){if(!x)return[];const e=o.ship.components;return x.components.filter(t=>e.includes(t.id))}function Sa(){if(!x)return{};const e={};for(const t of dn())if(t.effects)for(const[n,a]of Object.entries(t.effects))typeof a=="number"&&(e[n]=(e[n]??1)*a);return e}function ka(e){if(!x)return!1;const t=x.components.find(n=>n.id===e);return t?o.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):o.ship.components.includes(e)?(console.warn("Component already installed."),!1):(o.player.credits-=t.cost,o.ship.components.push(e),Ca(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function Ca(e){const t=o.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function z(){const e=ra(),t=Sa(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const s of n){const i=typeof e[s]=="number"?e[s]:1,r=typeof t[s]=="number"?t[s]:1;a[s]=i*r}return a}function un(){const e=z(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,q().globalIncomeMultiplier??1);return t*n}const Ta=-100,Ea=100;function _a(e,t){const n=o.reputation[e]||0,a=Ra(n+t);return o.reputation[e]=a,a}function pn(e){for(const[t,n]of Object.entries(e))_a(t,n)}function Ia(e){return o.reputation[e]||0}function Ra(e){return Math.max(Ta,Math.min(Ea,e))}const Ye={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function Da(){return x?x.weapons:[]}function mn(){return o.inventory||(o.inventory={weapons:[]}),o.inventory}function st(){return[...mn().weapons]}function it(){if(!x)return;const e=st();if(!e.length)return;const t=o.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(r=>ot(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function ot(e,t){const n=o.ship,a=x?.weapons.find(i=>i.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function Ba(e,t){return ot(e,t)?(o.ship.weapons[e]=t,at(),!0):!1}function X(e){return!e||!x?null:x.weapons.find(t=>t.id===e)??null}function Pa(e){const t=X(e);return!t||o.player.credits<t.price?!1:(mn().weapons.push(e),o.player.credits-=t.price,at(),!0)}function hn(e,t,n={}){const a=e.tags||[];let s=e.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let i=e.damage;const r=t.shields>0?"shields":"hull",c=Ye[e.damageType]?.[r]??1,l=r==="shields"?e.shieldMod:e.armorMod;return i*=l*c,r==="shields"&&a.includes("shield_breaker")&&(i*=1.2),r==="hull"&&a.includes("armor_piercing")&&(i*=1.2),Math.random()<e.critChance&&(i*=e.critMultiplier),i*=n.damageMultiplier??1,Math.max(0,Math.round(i))}const Aa={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},La={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function Rt(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const Dt={shields:"Shield-breaker",hull:"Hull buster"};function rt(e){const t=e.damageType,n=Ye[t]??Ye.kinetic,a=Rt(n.shields),s=Rt(n.hull);let i="Balanced";a==="Strong"&&s==="Weak"?i=Dt.shields:s==="Strong"&&a==="Weak"?i=Dt.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const r=(e.tags||[]).map(c=>La[c]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:Aa[t]??t,tagNotes:r}}let fn=null;function gn(e){fn=e}function ct(){return fn}function ja(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function Te(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function Na(e){const t=e.map(i=>({id:i.id,name:i.name,x:i.coords?.x??0,y:i.coords?.y??0,tags:i.tags??[]})),n=[],a=new Set;for(const i of e)for(const r of i.neighbors??[]){const c=Te(i.id,r.id);a.has(c)||(a.add(c),n.push({from:i.id,to:r.id,type:ja(r.laneType),distance:Math.max(1,Math.round(r.distance??1))}))}const s={nodes:t,lanes:n};return gn(s),s}function lt(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function Fa(e,t,n){const a=n==="local"?1:3,s=new Map([[t,0]]);let i=[t];for(let r=1;r<=a;r++){const c=[];for(const l of i)for(const d of lt(e,l))s.has(d)||(s.set(d,r),c.push(d));if(!c.length)break;i=c}return s}function dt(e,t,n){if(t===n)return[t];const a=[t],s=new Set([t]),i=new Map;for(;a.length;){const l=a.shift();for(const d of lt(e,l))if(!s.has(d)&&(s.add(d),i.set(d,l),a.push(d),d===n))break}if(!s.has(n))return[];const r=[];let c=n;for(;c;)r.push(c),c=i.get(c);return r.reverse()}function Ha(e,t,n){const a=dt(e,t,n);return a.length?Math.max(0,a.length-1):null}let ut=[];function Oa(e){ut=e}function qa(e){return ut.find(t=>t.id===e)}function Wa(){const e=new Set(o.contracts.filter(t=>t.status==="active").map(t=>t.id));return ut.filter(t=>!e.has(t.id))}function ie(){return o.contracts.filter(e=>e.status==="active")}function Ga(e){const t=e.requirements,n=s=>s?`<strong>${J(s)?.name||s}</strong>`:"",a=[];if(t?.travel?.systemId){const s=n(t.travel.systemId);a.push(`Travel to ${s}`)}if(t?.deliver?.commodityId){const s=t.deliver.quantity||0,i=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${s} ${t.deliver.commodityId}${i}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function za(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function pt(e){const t=qa(e);if(!t)return{success:!1,reason:"Unknown mission"};if(o.contracts.some(s=>s.id===e&&s.status==="active"))return{success:!1,reason:"Mission already active"};const n=ns(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:o.time.turn,progress:{}};return o.contracts.push(a),n&&as(a.id,n),{success:!0}}function Va(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,I.contractPayoutMultiplier??1)),s=un(),i=Math.max(0,z().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*i));o.player.credits+=r,$e(r),ha(r),o.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){pn(n.rep);const a=Object.entries(n.rep).map(([s,i])=>`${s} ${i>=0?"+":""}${i}`).join(", ");a&&o.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=o.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),o.inventory=a;const s=X(n.weapon)?.name??n.weapon;o.notifications.push(`Rewarded weapon: ${s}.`)}}function Ua(){ie().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,I.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));o.time.turn-e.acceptedTurn>=a&&Ya(e.id)}})}function Ya(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",Be(`Mission failed: ${t.name}`),mt(t.id))}function Xa(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",Be(`Mission abandoned: ${t.name}`),mt(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function Ja(e){ie().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,be(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),be(t)}})}function Ka(e,t,n){ie().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const i=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=i+t,be(a)})}function Za(e){ie().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,be(t))})}function Qa(e,t){Ja(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const i of ie()){const r=i.status,c=i.requirements?.deliver;if(!c||!c.commodityId||(c.systemId??t)!==t||(a+=1,!es(n,c)))continue;c.retain||ts(n,c),i.progress=i.progress||{};const d=i.progress.deliveredQuantity||0;i.progress.deliveredQuantity=d+(c.quantity||1),be(i),r!=="completed"&&i.status==="completed"&&s.push(i.name)}if(s.length){const i=`Contracts completed: ${s.join(", ")}`;e.notifications.push(i)}return{checked:a,completed:s}}function es(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function ts(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function be(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},i=e.requirements?.multiTravel,r=t?!!s.travelCompleted:!0,c=n?s.deliveredQuantity>=(n.quantity||0):!0,l=a?!!s.combatCompleted:!0,d=s.multiTravelVisited??[],u=i?i.every(p=>d.includes(p)):!0;r&&c&&l&&u&&(e.status="completed",Va(e),fa(),Be(`Mission completed: ${e.name}`),mt(e.id))}function Be(e){o.notifications.push(e)}function ns(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function as(e,t){const n=ct();if(!n)return;const a=o.location.systemId,s=dt(n,a,t);!s.length||s.length<=1||$.setActiveRoute({nodes:s,currentIndex:0,source:"mission",missionId:e})}function mt(e){$.activeRoute?.missionId===e&&$.clearActiveRoute()}function ss(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",Be(`Mission failed (expired): ${n.name}`))}const Ge=25,yn=100,ht={taxEvasion:{cost:180,gain:10,name:"Tax Evasion Grid",benefit:"whispered import routes and shell accounts"},smuggling:{cost:150,gain:8,name:"Smuggling Ring",benefit:"hidden routes and tolerant contacts"},bribery:{cost:200,gain:12,name:"Bribery Ledger",benefit:"greased palms and friendly inspectors"}};function ft(){return o.tradeStrategy||(o.tradeStrategy={taxEvasion:0,smuggling:0,bribery:0}),o.tradeStrategy}function bn(e){return Math.max(0,Math.min(yn,e))}function is(){return ft()}function os(e){return bn(is()[e])}function rs(e,t,n){const a=Math.floor(t/Ge),s=Math.floor(n/Ge);s>a&&o.notifications.push(`Trade Path: ${e} progress ${Math.min(s*Ge,yn)}% (${ht[e].name})`)}function Xe(e,t){if(t<=0)return;const n=ft(),a=n[e];n[e]=bn(a+t),rs(e,a,n[e])}function cs(e){const t=ht[e];return o.player.credits<t.cost?(o.notifications.push("Not enough credits to invest in "+t.name+"."),!1):(o.player.credits-=t.cost,Xe(e,t.gain),o.notifications.push(`Invested ${t.cost} cr into ${t.name} (${t.benefit}).`),!0)}function vn(e){return ht[e]}function gt(){const e=ft();return{detectionReduction:Math.min(.25,e.bribery/400),fineDiscount:Math.min(.35,e.smuggling/280)}}const Mn="__global__",ls={buyMultiplier:1,sellMultiplier:.85},ds={basic:.9,standard:1,strategic:1.2,luxury:1.35};function Pe(){return o.ship.cargo||(o.ship.cargo={}),o.ship.cargo}function us(){const e=Pe();return Object.values(e).reduce((t,n)=>t+n,0)}function $n(){return x?.commodities??[]}function K(e){return $n().find(n=>n.id===e)??null}function Z(){return o.marketState?(o.marketState.temporaryModifiers=o.marketState.temporaryModifiers||{},o.marketState.activeEvents=o.marketState.activeEvents||[],o.marketState.localAdjustments=o.marketState.localAdjustments||{},o.marketState.priceIntel=o.marketState.priceIntel||{},o.marketState.initialDriftSeeded=o.marketState.initialDriftSeeded??!1):o.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},o.marketState}function ps(e){o.intel||(o.intel={systems:[]});const t=o.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return o.intel.systems.push(n),n})();t.lastPriceSeenDay=o.time.day}function ms(e){const t=Z();let n=1;const a=t.temporaryModifiers[Mn];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function hs(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function fs(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),i=n.exports?.includes(t.id);return s&&(a*=1.2),i&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function yt(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(I.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function gs(e,t){const n=Math.max(1,t.basePrice),a=ds[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,i=fs(e,t),c=1+yt(t)*.08,l=ms(t.id),d=Ms(e.id,t.id),u=kn(e.id,t.id),p=n*a*s*i*c*l*d*u;return Math.max(1,Math.round(p))}function xn(e,t){return V(e,t).base}function V(e,t){const n=J(e),a=K(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=gs(n,a),i=a.baseSpread??ls,r=yt(a),c=z(),l=Math.max(.1,Math.min(3,I.tradeProfitMultiplier??1)),d=un(),u=Math.max(.5,c.buyBonus??1),p=Math.max(0,c.sellBonus??1),h=Math.max(.5,c.marketTax??1),m=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+r*.05)/l*u)),y=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-r*.05)*l*d*p*h)),v=Math.max(1,Math.min(y,m-1)),S=Math.max(m,v,Math.round(s*(1+r*.1))),k=Math.max(1,Math.min(m,v,Math.round(s*Math.max(.65,1-r*.2)))),M=hs(s,a.basePrice);return ps(e),{base:s,buy:m,sell:v,high:S,low:k,trend:M}}function Ee(e,t,n=2){const a=Z(),s=e&&e.length?e:Mn;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function wn(e=1){if(typeof e=="number"){ys(e);return}bs(e??o)}function ys(e){if(e<=0)return;const t=Z(),n=Object.keys(t.temporaryModifiers);for(const s of n){const i=t.temporaryModifiers[s];i.remainingTurns-=e,i.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=o.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),Tn(t,.2*e)}function bs(e){const t=Z(),n=x?.systems??[],a=x?.commodities??[],s=e.time.day;vs(t,n,a);for(const i of n)for(const r of a){const c=kn(i.id,r.id),l=yt(r),d=I.marketDailyTrendStrength??1,u=(1-c)*.1*d,p=(Math.random()-.5)*.1*(.5+l)*d,h=Cn(c+u+p);t.localAdjustments[i.id]||(t.localAdjustments[i.id]={}),t.localAdjustments[i.id][r.id]=h}t.activeEvents=t.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=e.time.turn)),Tn(t,.1)}function vs(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const i=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=i}}e.initialDriftSeeded=!0}}function _e(e){return Pe()[e]??0}function Ms(e,t){return Z().activeEvents.filter(a=>(a.expiresAtDay===void 0||o.time.day<a.expiresAtDay)&&a.expiresAtTurn>o.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function $s(e){Z().activeEvents.push(e)}function xs(e){return Z().activeEvents.filter(n=>n.expiresAtTurn>o.time.turn&&(n.expiresAtDay===void 0||o.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function ws(e){if(Math.random()>.08||!x?.commodities?.length)return;const n=x.commodities[Math.floor(Math.random()*x.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:o.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};$s(i),o.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function Sn(e,t,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,c=Math.min(.15,.03*r),l=Z();l.localAdjustments[e]||(l.localAdjustments[e]={});const d=l.localAdjustments[e][t]??1,u=s==="buy"?1+c:1-c,p=Cn(d*u);l.localAdjustments[e][t]=p}function kn(e,t){return Z().localAdjustments[e]?.[t]??1}function Cn(e){return Math.min(2,Math.max(.5,e))}function Tn(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,i]of Object.entries(a)){const r=i-1,c=i-r*t;Math.abs(c-1)<.01?delete a[s]:a[s]=c}Object.keys(a).length||delete e.localAdjustments[n]}}function Ss(){const t=J(o.location.systemId)?.neighbors.map(s=>J(s.id)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=_n();if(o.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};o.player.credits-=n;const a=Z();return t.forEach(s=>{const i={};(x?.commodities||[]).forEach(c=>{const l=V(s.id,c.id);i[c.id]={buy:l.buy,sell:l.sell}});const r={turn:o.time.turn,prices:i};a.priceIntel[s.id]=r}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function En(){return Z().priceIntel}function _n(){const t=J(o.location.systemId)?.neighbors.map(c=>J(c.id)).filter(c=>!!c)||[],n=80,a=t.map(c=>c.faction?Ia(c.faction):null).filter(c=>typeof c=="number"),s=a.length?a.reduce((c,l)=>c+l,0)/a.length:0,i=Bt(1-s/200,.5,1.4),r=Math.round(n*i);return Bt(r,40,140)}function Bt(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function In(e,t,n){if(n<=0)return!1;const a=V(e,t).buy;if(a<=0)return!1;const s=a*n;if(o.player.credits<s)return!1;const i=o.ship.cargoCapacity;return i<=0?!1:us()+n<=i}function Rn(e,t,n){return n<=0?!1:_e(t)>=n}function Dn(e,t,n){if(!In(e,t,n))return!1;const a=V(e,t).buy,s=a*n;o.player.credits-=s;const i=Pe();i[t]=(i[t]||0)+n,Sn(e,t,n,a,"buy");const r=K(t);return o.notifications.push(`Bought ${n} ${r?.name||t} @ ${a} each for ${s} cr.`),!0}function bt(e,t,n){if(!Rn(e,t,n))return!1;const a=V(e,t).sell,s=a*n,i=Pe();i[t]=Math.max(0,(i[t]||0)-n),o.player.credits+=s,$e(s),ma(t,n,s),Sn(e,t,n,a,"sell"),Ka(t,n,e);const r=K(t);if(r){const c=J(e),l=Math.max(0,c?.marketProfile?.taxRate??0);l>0&&s>0&&Xe("taxEvasion",Math.max(1,Math.round(s*l*.01))),r.legalStatus&&r.legalStatus!=="legal"&&Xe("smuggling",Math.max(1,Math.round(s*.003)))}return o.notifications.push(`Sold ${n} ${r?.name||t} @ ${a} each for ${s} cr.`),!0}function Bn(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const r=V(t,s).sell;return a+r*i},0)}const Pt={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function Pn(e,t){if(!o||o.gameOver.active)return;const n=ca(),a=la(n),s={score:a,reason:e,message:t??Pt[e]??Pt.other,location:o.location.systemId,stats:n};o.combat=null,o.miningSession=null,o.gameOver={active:!0,reason:e,message:s.message,summary:s};const i={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};pa(i),$.go("gameover")}function An(e=!1){const t=tn();nn(t),sn(),$.go(e?"main":"ship_select")}const vt="space-events-cache";let ve=[];function ks(e){const t=Bs();ve=Ds(e,t),Ln(ve)}function Mt(e){return ve.find(t=>t.id===e)}function Cs(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=q(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,z().anomalyChance??1),s=Math.min(1,Math.max(0,(I.eventFrequency??50)/100*a));if(Math.random()>s)return;const i=ve.map(l=>({ev:l,weight:Ls(l,e)})).filter(l=>l.weight>0);if(!i.length)return;const r=i.reduce((l,d)=>l+d.weight,0);let c=Math.random()*r;for(const l of i)if(c-=l.weight,c<=0)return l.ev;return i[0].ev}function Ts(e){const t=e.outcomes;if(!t)return{};const n={},a=z(),s=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),i=r=>{o.player.credits+=r,$e(r),o.player.credits<0&&(o.player.credits=0)};if(t.giveCredits){const r=t.giveCredits.min??0,c=t.giveCredits.max??r,l=he(r,c),d=Math.round(l*s);i(d),o.notifications.push(`Received ${d} credits.`)}if(typeof t.creditsDelta=="number"){const r=Math.round(t.creditsDelta*s);i(r)}if(typeof t.fuelDelta=="number"){const r=o.ship.maxFuel,c=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;o.ship.fuel=Math.max(0,Math.min(r,o.ship.fuel+c))}if(typeof t.turnDelta=="number"){const r=on(t.turnDelta);o.time.turn+=r,Ua(),wn(r)}if(t.cargoGain&&At(Ps(t.cargoGain,s,1),1),t.cargoLoss&&At(t.cargoLoss,-1),t.giveCommodity){const r=he(t.giveCommodity.min,t.giveCommodity.max),c=Math.max(0,Math.round(r*s));Je(t.giveCommodity.id,c),c>0&&o.notifications.push(`Collected ${c} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(o.inventory.weapons.push(t.giveWeapon),o.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const r=t.damageShip.min??0,c=t.damageShip.max??r,l=he(r,c);if(o.ship.hp=Math.max(0,o.ship.hp-l),o.notifications.push(`Ship took ${l} damage.`),o.ship.hp<=0)return Pn("ship_destroyed","Ship destroyed by event."),n}if(t.applyStatus&&o.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&pt(t.spawnMissionId).success&&o.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&o.notifications.push(`Event flag: ${t.flag}`),t.market){const r=t.market,c=Math.max(0,r.multiplier),l=Math.max(1,Math.floor(r.duration??2));Ee(r.commodityId,c,l);const d=o.location?.systemId,u=r.commodityId&&x?.commodities?x.commodities.find(h=>h.id===r.commodityId):void 0,p=`${u?.name||"Local goods"} ${c>=1?"surge":"slip"}`;d&&o.marketState&&o.marketState.activeEvents.push({systemId:d,commodityId:r.commodityId??null,multiplier:c,expiresAtDay:o.time.day+l,expiresAtTurn:o.time.turn+l*2,label:p}),o.notifications.push(`Market shift in ${d??"this system"}: ${u?.name||"local goods"} x${c.toFixed(2)} for ${l} turns.`)}return t.modifyReputation&&pn({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function Es(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,z().eventRewardMultiplier??1);if(n.mining){const s=he(n.mining.quantity.min,n.mining.quantity.max),i=Math.max(0,Math.round(s*a));Je(n.mining.commodityId,i),o.notifications.push(`Mining yield: ${i} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=he(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),i=o.ship.maxFuel;o.ship.fuel=Math.max(0,Math.min(i,o.ship.fuel-s)),o.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];Je(s,1),o.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(o.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),Ee(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function _s(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(I.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(I.marketCrashChance??5)/100));if(e.location?.systemId){const s=x?.commodities?.[Math.floor(Math.random()*(x?.commodities.length||1))];if(s){const i=e.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const c=1.1+Math.random()*.35;Ee(s.id,c,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:Math.max(0,c),expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${i}: ${s.name} prices x${c.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const c=Math.max(.5,.85-Math.random()*.25);Ee(s.id,c,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:c,expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${i}: ${s.name} prices x${c.toFixed(2)} for ${r} turns.`)}}}}function Is(){Ln(ve)}function Rs(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(vt)}function Ds(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function Bs(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(vt);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function Ln(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(vt,JSON.stringify(e))}function At(e,t){for(const[n,a]of Object.entries(e)){const s=o.ship.cargo[n]??0,i=Math.max(0,s+a*t);o.ship.cargo[n]=i}}function Ps(e,t,n=1){const a={};for(const[s,i]of Object.entries(e)){if(i<=0){a[s]=i;continue}const r=Math.max(n,Math.round(i*t));a[s]=r}return a}function Je(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,c)=>r+c,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));o.ship.cargo[e]=n+i,i<t&&o.notifications.push(`Cargo full: stored ${i}/${t} ${e}.`)}function he(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function As(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function Lt(e,t){return e.has(t)}function Ls(e,t){let n=e.weight??0;const a=As(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const i=Math.max(.1,I.eventDangerMultiplier??1);n*=i}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),Lt(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),Lt(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=ie().filter(i=>i.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let Ke=[];function js(e){Ke=e}function Ns(e,t=[]){const n=Ke.find(i=>i.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Ke.find(i=>(i.enemyTags||[]).some(r=>a.has(r)))??null}function Ze(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Fs(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function Hs(e,t){const n=q(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,i=e.max??s,r=Ze(s,i),c=Math.max(0,Math.round(r*a));o.player.credits+=c,t.creditsEarned+=c,$e(c);break}case"commodity":{const s=Ze(e.min??1,e.max??e.min??1),i=Math.max(0,Math.round(s*a)),r=Os(e.id||"unknown",i);r>0&&t.commodities.push({id:e.id||"unknown",qty:r});break}case"weapon":{e.id&&(o.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(o.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&pt(e.id).success&&t.missionsGranted.push(e.id);break}}}function Os(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,c)=>r+c,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));return o.ship.cargo[e]=n+i,i}function qs(e,t,n={},a=[]){const s=q(),i=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const c=Ns(e,a);if(!c)return null;const l=n.quickKill?1.5:1,d=n.lowDamageTaken?1.25:1,u={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(m,y)=>{if(!m?.length||Math.random()>y)return;const v=Fs(m);v&&Hs(v,u)};p(c.common,r),p(jt(c.uncommon,d),.35*r);const h=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(jt(c.rare,l),h*r),c.guaranteed?.credits){const{min:m,max:y}=c.guaranteed.credits,v=Ze(m,y),S=Math.max(0,Math.round(v*i));o.player.credits+=S,u.creditsEarned+=S,$e(S)}return u}function jt(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}const Nt={damageMultiplier:1.25,accuracyMultiplier:.8},Ws=.4,Gs="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",zs="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",Se={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},Vs=Object.keys(Se).map(e=>({type:e,shieldMultiplier:Se[e].shield,hullMultiplier:Se[e].hull,description:Se[e].description}));function Us(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,i=Ys(t.weapons),r=Xs(t.modules),c=e.player?.credits??0,l=Math.log10(c+1)*5,d=n+a+i+r+s/2+l;return Math.max(1,Math.round(d))}function jn(e){const t=e/40;return t<0?0:t>1?1:t}function Ys(e){return e.reduce((t,n)=>{if(!n)return t;const a=X(n);if(!a)return t;const s=a.damage??0,i=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+i*.2+r},0)}function Xs(e){return!e||!e.length?0:e.length*5}function Js(e){return x?x.systemsById[e]??null:null}function Ae(e,t){const n=Js(e);return n?n.tags.includes(t):!1}const Ks=0,Zs=100;function Nn(e){const t=Math.max(Ks,Math.min(Zs,(o.player.wanted??0)+e));return o.player.wanted=t,t}function Qs(e,t,n){return Math.max(t,Math.min(n,e))}function ei(e){const{systemId:t,state:n,sessionFactor:a}=e,s=x?.systems.find(D=>D.id===t),i=s?.security??"medium",r=q(),c=z();let l;switch(i){case"high":l=.02;break;case"low":l=.12;break;default:l=.06;break}s?.tags.includes("mining_belt")&&(l+=.02),s?.marketProfile?.blackMarket&&(l+=.03);const d=Bn(n,t),u=Pr(n.ship.templateId)?.cost??0,p=d+u,h=Math.min(.15,p/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),m=ti(n,t),y=a*.03,v=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),S=Math.max(0,Math.min(1,(I.pirateEncounterRate??0)/100)),k=Math.max(0,(r.encounterChancePerJump??100)/100),M=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,c.pirateDetectionMultiplier??1);let E=(l+h+y+m+v+S)*M*k;return ni(E,n,t)}function ti(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[l,d]of a){if(!d)continue;const u=V(t,l),p=K(l)?.basePrice??u.sell;if(p<=0)continue;const h=(u.sell-p)/p;s+=h*d,i+=d}if(i<=0)return 0;const r=s/i;return Qs(r*.2,0,.15)}function ni(e,t,n){const a=jn(t.time.day),s=.4,r=s+(.75-s)*a;let c=e;return Ae(n,"core")?(c>.25&&(c=.25),c<.01&&(c=.01),c):(c>r&&(c=r),c<.01&&(c=.01),c)}const ai=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],si={belts:ai},Fn="pirate_cutter",ii=.5,oi=100,Ft=si,Le=9,je=9,Ne=5;function Qe(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function ri(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,s]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-s);e.ship.cargo=n,t.accumulatedOre={}}function et(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((c,l)=>c+l,0),i=Math.max(0,e.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,i));return r>0&&(a[t]=(a[t]??0)+r,e.ship.cargo=a),e.notifications||(e.notifications=[]),r<n&&e.notifications.push(`Cargo constrained: stored ${r}/${n} ${t}.`),r}function ae(e,t,n){return Math.max(t,Math.min(n,e))}function Hn(e,t){const n=Math.max(1,xn(e,t)),a=Math.min(oi,n*ii);return Math.max(1,a)}function ci(e){const t=Math.max(.1,I.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function On(){const e=[];for(let t=0;t<Le;t++){const n=[];for(let a=0;a<je;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function li(){const e=Math.floor(Math.random()*(Le-4))+2,t=Math.floor(Math.random()*(je-4))+2,n=2+Math.floor(Math.random()*(Ne-2));return{row:e,col:t,depth:n}}function di(e,t,n,a){const s=t-a,i=e-n;if(Math.sqrt(s*s+i*i)<.5)return null;const c=Math.atan2(i,s)*(180/Math.PI),l=c<0?c+360:c;return l>=337.5||l<22.5?"dir-e":l<67.5?"dir-se":l<112.5?"dir-s":l<157.5?"dir-sw":l<202.5?"dir-w":l<247.5?"dir-nw":l<292.5?"dir-n":"dir-ne"}function ui(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function qn(e,t){const n=t?Ft.belts.find(s=>s.id===t):null;if(n)return n;const a=Ft.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function xe(e,t,n,a,s){const i=qn(t,n),r=Wn(e,i.id);if(s?.force&&(r.depletedUntilDay=void 0),r.depletedUntilDay!==void 0&&e.time.day<r.depletedUntilDay){e.notifications.push(`This belt is depleted. It will recover by day ${r.depletedUntilDay}.`);return}const c=0,l=On(),{row:d,col:u,depth:p}=li();e.miningSession={active:!0,systemId:t,beltId:i.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:c,stability:i.stability.start,maxStability:i.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:l,gridRows:Le,gridCols:je,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:d,veinCol:u,veinDepth:p,accumulatedOre:{},beltName:i.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[]}}function pi(e,t){e.miningSession&&(e.miningSession.depth=ae(Math.round(t),1,Ne))}function mi(e,t,n){for(let a=0;a<e.length;a++)for(let s=0;s<e[a].length;s++)e[a][s].selected=a===t&&s===n}function hi(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const s=qn(a.systemId,a.beltId),i=ae(Math.round(t),0,Le-1),r=ae(Math.round(n),0,je-1),c=ae(Math.round(a.depth??3),1,Ne);a.depth=c,a.grid=a.grid??On(),a.drillsUsed=(a.drillsUsed??0)+1;const l=r-(a.veinCol??0),d=i-(a.veinRow??0),u=c-(a.veinDepth??3),h=Math.sqrt(l*l+d*d)*2.6+Math.abs(u)*1.5,m=Math.max(.2,1-a.drillsUsed*.04),y=(Math.random()*2-1)*m,v=10-h,S=ae(Math.round(v+y),0,10),k=di(a.veinRow??0,a.veinCol??0,i,r),M=ui(c,a.veinDepth??3),E=a.grid[i][r],D=!E.drilled;E.drilled=!0,E.signal=S,E.directionClass=k,E.depthHint=M.hint,E.depthClass=M.className,mi(a.grid,i,r),a.selectedRow=i,a.selectedCol=r,D?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+S/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+S/50);const j=Math.max(0,I.miningThreatMultiplier??.7),P=3+c,w=Math.max(0,Math.round(P*j));a.threat=ae((a.threat??0)+w,0,100),a.currentPirateChance=(a.threat??0)/100;let g=Math.max(0,Math.round(S*.0025));S>0&&g===0&&(g=1);const C=a.resourceId??"aurite_ore",L=et(e,C,g);Qe(a,C,L);const H=Hn(a.systemId,C),F=Math.round(H*L);a.totalValueMined+=F,a.lastYield={commodityId:C,amount:L,approxValue:F,rareFind:null},a.lastMessage=`Pulse at X${r+1}, Y${i+1}, Z${c}: signal ${S}. Depth ${M.hint}. Threat +${w}%. Ore +${L}.`;const U=Math.random()*100;let ee=!1;const Y=a.threat*.9;if(U<=Y){ee=!0,a.runComplete=!0,a.active=!1;const te=Wn(e,s.id);te.depletedUntilDay=e.time.day+1,ce(Fn,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:S,directionClass:k,depthHint:M.hint,fightTriggered:ee,threat:a.threat}}function fi(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const s=ae(Math.round(t.depth??3),1,Ne),i=a-(t.veinCol??0),r=n-(t.veinRow??0),c=s-(t.veinDepth??3),l=Math.sqrt(i*i+r*r+c*c),d=Math.random()*1.5-.75,u=ae(Math.round(10-l*2+d),0,10),p=1+Math.max(0,s-2)*.12,m=Math.max(0,Math.round((u+p)*.2)),y=Math.min(.4,(t.explorationScore??0)/25),v=ci(t),S=Math.min(1,v+y);let M=Math.max(1,Math.round(m*S*(1+.1)));M=Math.max(1,Math.round(M*.5));const E=t.resourceId??"aurite_ore",D=et(e,E,M);Qe(t,E,D);const j=Hn(t.systemId,E),P=Math.max(.05,I.miningPayoutMultiplier??.35);let w=Math.round(j*D*P),f=null;if(u>=6&&Math.random()<.1+y*.5){const ee=Math.max(1,Math.round(u/3)),Y=et(e,"stellite_fragment",ee);if(Y>0){f={id:"stellite_fragment",amount:Y};const te=Math.max(1,xn(t.systemId,f.id));w+=Math.round(te*Y*P),Qe(t,f.id,Y)}}t.totalValueMined+=w,t.lastYield={commodityId:E,amount:M,approxValue:w,rareFind:f},t.runComplete=!0,t.active=!1;const g=6+s*2,C=Math.max(0,I.miningThreatMultiplier??.7),L=Math.max(0,Math.round(g*C));t.threat=ae((t.threat??0)+L,0,100),t.currentPirateChance=(t.threat??0)/100,t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${s}: signal ${u}, efficiency ${(S*100).toFixed(0)}%, ore ${M} (${D} stored). Threat +${L}%.`;const H=Math.random()*100;let F=!1;const U=t.threat*.9;return H<=U&&(F=!0,ce(Fn,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset."),Ma(D+(f?.amount||0),!!f),{signal:u,yieldAmount:D,commodityId:E,rareFind:f,fightTriggered:F,threat:t.threat}}function gi(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Wn(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function yi(e,t){const n=e.miningSession;n&&(ri(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function bi(e){if(!x)throw new Error("Content has not been loaded.");const t=x.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function vi(e,t){return Math.floor(Math.random()*(t-e+1))+e}function B(e){const t=o.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}function Mi(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function $i(e){return e??"main"}function xi(e,t){$.go($i(e),t)}function ce(e,t={}){const n=bi(e),s=o.ship.weapons.map(()=>0),i=n.weaponIds.slice(),r=i.map(()=>0),c=q(),l=c.enemyHpMultiplier??1,d=Math.max(1,Math.round(c.enemyCountMin??1)),u=Math.max(d,Math.round(c.enemyCountMax??d)),p=Math.floor(Math.random()*(u-d+1))+d,h=Math.max(1,p);o.combat={enemyId:n.id,enemyName:n.name,enemyHp:Math.max(1,Math.round(n.hull*l*h)),enemyMaxHp:Math.max(1,Math.round(n.hull*l*h)),enemyShields:Math.max(0,Math.round(n.shields*l*h)),enemyMaxShields:Math.max(0,Math.round(n.shields*l*h)),enemyWeapons:i,enemyCooldowns:r,enemyTags:n.tags||[],enemyCount:h,playerCooldowns:s,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:o.ship.hp,round:1,log:[`${n.name} engages you in combat!`],adviceToken:Math.random(),returnTo:t.returnScreen,returnParams:t.returnParams},h>1&&o.combat.log.push(`Multiple bogies detected (${h} ships).`),$.go("combat")}function wi(e){const t=Si(e);ce(t)}function Si(e){if(!x?.enemies?.length)return"pirate_cutter";const t=Us(o),n=jn(o.time.day),a=q(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,o.time.day-1),i=Math.max(0,a.difficultyScalePerShipPower??1),r=t*i*s;let c=r*(.6+.2*n),l=r*(.9+.4*n);e&&Ae(e,"core")&&(c=t*.4,l=t*.8);const d=x.enemies.map(m=>({id:m.id,power:Mi(m)})),u=d.filter(m=>m.power>=c&&m.power<=l);if(u.length)return u[Math.floor(Math.random()*u.length)].id;let p=d[0],h=Math.abs(d[0].power-t);for(const m of d){const y=Math.abs(m.power-t);y<h&&(p=m,h=y)}return p.id}function Fe(e,t,n="normal"){const a=o.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){B("You must choose a weapon to fire.");return}Gn(t,n);break;case"fire_all":ki(n);break;case"brace":Ci();break;case"flee":if(Ti())return;break}if(o.combat){if(a.enemyHp<=0){Ri();return}if(Ei(),!!o.combat){if(o.ship.hp<=0){Di();return}Ii(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Gn(e,t){const n=o.combat;if(!n)return;const a=o.ship;if(e<0||e>=a.weapons.length){B("Invalid weapon slot.");return}const s=a.weapons[e];if(!s){B("That hardpoint is empty.");return}const i=X(s);if(!i){B("Missing weapon data.");return}const r=z(),c=n.round<=1,l={...i,critChance:Math.min(.95,(i.critChance??0)+(r.critBonus??0)+(c?r.critBonus??0:0))},d=n.playerCooldowns[e]??0;if(d>0){B(`${i.name} is still recharging (${d} turn${d===1?"":"s"}).`);return}const u={shields:n.enemyShields,hp:n.enemyHp},p=t==="called_shot"?Nt.damageMultiplier:1,h=t==="called_shot"?Nt.accuracyMultiplier:1,m=Pi(n.playerStance),y=hn(l,u,{accuracyMultiplier:h,damageMultiplier:p*m*(r.playerDamageBonus??1)});if(y<=0){const M=t==="called_shot"?"called shot goes wide":"misses";B(`You fire ${i.name}, but it ${M}.`),n.playerCooldowns[e]=i.cooldown;return}ga(y);let v=y;if(n.enemyShields>0){const M=Math.min(n.enemyShields,v);n.enemyShields-=M,v-=M}v>0&&(n.enemyHp=Math.max(0,n.enemyHp-v));const S=u.shields>0?"shields":"hull",k=t==="called_shot"?"called shot":"normal shot";B(`You strike the ${n.enemyName}'s ${S} with ${i.name} (${k}) for ${y} damage.`),y>0&&i.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),B(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[e]=i.cooldown}function ki(e){const t=o.combat;if(!t)return;const a=o.ship.weapons.map((s,i)=>({id:s,idx:i})).filter(({id:s,idx:i})=>!!s&&(t.playerCooldowns[i]??0)<=0).map(s=>s.idx);if(!a.length){B("No weapons are ready to fire.");return}for(const s of a){if(!o.combat||o.combat.enemyHp<=0)break;Gn(s,e)}}function Ci(){const e=o.combat;e&&(e.playerBracing=!0,B("You brace for impact, diverting power to shields and hull integrity."))}function Ti(){const e=o.combat;if(!e)return!1;if(!e.canEscape)return B("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4,n=e.playerStance==="assault"?-.1:e.playerStance==="evasive"?.15:0,a=(o.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),i=Ie((a-40)*.01,-.15,.15),r=q(),c=z(),l=(r.fleeSuccessBonus??0)/100+(c.fleeBonus??0),d=Ie(t+n+i+l,.05,.95);return Math.random()<=d?(B(`You punch the thrusters and break free! (Flee chance ${(d*100).toFixed(0)}%)`),o.combat=null,yi(o,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),$.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(B(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(d*100).toFixed(0)}%)`),!1)}function Ei(){const e=o.combat;if(!e)return;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,B("Enemy weapons are jammed this round!");return}const t=[];if(e.enemyWeapons.forEach((h,m)=>{const y=e.enemyCooldowns[m]??0;h&&y<=0&&t.push(m)}),t.length===0){B(`The ${e.enemyName} reloads while you advance.`);return}const n=t[vi(0,t.length-1)],a=e.enemyWeapons[n],s=X(a);if(!s){B(`The ${e.enemyName} fumbles its weapon.`);return}const i={shields:o.ship.shields,hp:o.ship.hp},r=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),c=q(),l=z(),d=e.round<=1;let u=hn(s,i,{accuracyMultiplier:Math.max(0,(1-r)*(c.enemyAccuracyMultiplier??1)*Math.max(0,1-(l.dodgeBonus??0))*(d?Math.max(0,1-(l.dodgeBonus??0)):1))});if(u=Math.max(0,Math.round(u*(c.enemyDamageMultiplier??1))),e.enemyCount&&e.enemyCount>1&&(u=Math.max(0,Math.round(u*e.enemyCount))),u<=0){B(`The ${e.enemyName} fires ${s.name}, but misses.`),e.enemyCooldowns[n]=s.cooldown;return}e.playerBracing&&(u=Math.round(u*Ws)),u=Math.max(0,Math.round(u*Ai(e.playerStance))),u=Math.max(0,Math.round(u*(c.playerDamageTakenMultiplier??1)*Math.max(.1,l.damageTakenMultiplier??1)*(d?Math.max(.1,l.damageTakenMultiplier??1):1)));let p=u;if(e.playerStatus.shieldBoost>0){const h=Math.min(e.playerStatus.shieldBoost,p);e.playerStatus.shieldBoost-=h,p-=h}if(o.ship.shields>0){const h=Math.min(o.ship.shields,p);o.ship.shields-=h,p-=h}p>0&&(o.ship.hp=Math.max(0,o.ship.hp-p)),B(`The ${e.enemyName} hits you with ${s.name} for ${u} damage.`),ya(u),e.enemyCooldowns[n]=s.cooldown}function _i(){const e=o.combat;if(!e)return null;const t=e.enemyCooldowns.length>0?e.enemyCooldowns.map(c=>c??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...t),a=[];if(n<=1){const c=Ie(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:c})}if(e.enemyShields<=0){const l=e.playerCooldowns.filter(u=>u<=0).length/Math.max(1,o.ship.weapons.length),d=Ie(.6+l*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:d})}o.ship.hp/o.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((e.adviceToken??Math.random())+e.round*.13)%1,i=Math.floor(s*a.length),r=a[i];return{...r,confidence:r.confidence}}function Ii(){const e=o.combat;e&&(e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0),e.enemyCooldowns=e.enemyCooldowns.map(t=>t>0?t-1:0),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)))}function Ri(){const e=o.combat;if(!e)return;B(`The ${e.enemyName} explodes under your punishing fire. Victory is yours.`);const t=Math.max(0,e.startingHp-o.ship.hp),n=e.totalRounds<=3,a=t<=5,s=qs(e.enemyId,e.enemyName,{quickKill:n,lowDamageTaken:a},e.enemyTags||[]);if(s){o.lastBattleResult=s;const i=[];s.creditsEarned&&i.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&i.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&i.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&i.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&i.push(`Missions: ${s.missionsGranted.join(", ")}`),B(`Loot recovered — ${i.join(" | ")||"nothing notable."}`),n&&B("Because you won quickly, salvage yields are richer."),a&&B("Minimal hull damage preserved more intact cargo.")}else B("No notable loot recovered.");if(ba(),va(),Za(e.enemyId),e.enemyTags?.some(i=>/pirate|raider/i.test(i))||e.enemyId.includes("pirate")||e.enemyId.includes("raider")){const i=q().repGainMultiplier??1;Nn(Math.round(3*i))}o.combat=null,xi(e.returnTo,e.returnParams)}function Di(){B("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),o.ship.hp=0,o.ship.shields=0,o.combat=null,o.notifications.push("Critical failure — hull integrity dropped to zero."),Pn("ship_destroyed","Ship destroyed in combat.")}function Bi(e){const t=o.combat;t&&(t.playerStance=e,B(`Stance changed to ${e.charAt(0).toUpperCase()+e.slice(1)}.`))}function Pi(e){switch(e){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function Ai(e){switch(e){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function Ie(e,t,n){return Math.max(t,Math.min(n,e))}function Li(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function ji(e,t){Ni(e,t).lastRiskSeenDay=e.time.day}function Ni(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function Fi(e){e.time.day+=1,xa(e.time.day),wn(e),_s(e),ss(e),Li(e),gi(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{Vi(e)};function zn(){return x?x.systemsById:null}function Vn(e){const t=zn();return t?t[e]??null:null}function Hi(e,t){return e.neighbors.find(n=>n.id===t)??null}let $t=0,Ht=1;function Oi(e){e!==Ht&&(Ht=e,$t=0)}function xt(e){return e<=0?!1:$t<e}function wt(){$t+=1}function re(e){q().showEncounterDebug&&o.notifications.push(`Encounter debug: ${e}`)}function He(){return Vn(o.location.systemId)}function qi(){const e=He();if(!e)return[];const t=zn();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:Un(e,a,n)}:null}).filter(n=>n!==null):[]}function Un(e,t,n){const a=z(),s=(e.baseDanger+t.baseDanger)/2,i={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},r=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,c=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,l=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,d=(i[e.region]??0)+(i[t.region]??0),u=Math.max(1,Math.round(n.distance*c+Math.max(0,d)*2)),p=Re(.1*n.distance+s*.12+l+d+(n.laneType==="wildspace"?.05:0),.1,.95),h=Math.min(.95,Math.max(.1,p)),m=Math.max(0,h-Math.max(0,a.hazardDetectionBonus??0)),y=Math.max(1,Math.round(n.distance*r*(1+s*.06))),v=Math.max(1,Math.round(y*Math.max(.1,a.fuelCostMultiplier??1))),S=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:u,fuelCost:v,hazardChance:m,hazardMitigation:Math.max(0,h-m),routeType:S,laneType:n.laneType,distance:n.distance}}function Re(e,t,n){return Math.max(t,Math.min(n,e))}function Yn(e){const t=o.ship.cargo||{};let n=0,a=0,s=0;for(const[r,c]of Object.entries(t)){if(!c)continue;const l=K(r);if(!l||l.legalStatus!=="illegal"&&l.legalStatus!=="restricted")continue;const d=V(e.id,r);s+=d.sell*c,l.legalStatus==="illegal"?n+=c:a+=c}const i=n+a;return i<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:i,estimatedValue:s}}function Wi(e,t,n,a=z()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.12),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const i=1+Math.min(1.5,e.illegalUnits*.1+e.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),c=Math.max(.5,a.illegalTolerance??1),l=Re(s*i*r/c,0,.95),{detectionReduction:d}=gt();return Math.max(0,l-d)}function Gi(e,t){const n=Yn(e);if(!n)return!1;const a=z(),s=Wi(n,e,t.routeType,a);if(o.notifications.push(`Warning: checkpoint scan imminent (${Math.round(s*100)}% detection chance).`),Math.random()>s)return!1;const i=o.ship.cargo||{};let r=0;for(const[S,k]of Object.entries(i)){if(!k)continue;const M=K(S);M&&(M.legalStatus!=="illegal"&&M.legalStatus!=="restricted"||(r+=k,i[S]=0))}o.ship.cargo=i;const c=Math.max(25,Math.round(n.estimatedValue*.35)),l=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,d=c+l,{fineDiscount:u}=gt(),p=Math.round(d*u),h=Math.max(0,d-p);o.player.credits=Math.max(0,o.player.credits-h);const m=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25)),y=Math.round(m*u*.6),v=Math.max(0,m-y);return Nn(v),o.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${h} credits, wanted +${v}.`),!0}function zi(e,t,n,a){const s=Re((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),i=Re(t,0,.95),r=Math.max(0,Math.round((s-i)*100));r>0&&o.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(i*100).toFixed(0)}%).`)}function Vi(e){const t=He();if(!x||!t)return;const n=Hi(t,e);if(!n){const M=`No direct route from ${t.name} to ${e}.`;console.warn(M),o.notifications.push(M),$.go("main",{message:M});return}const a=Vn(e);if(!a){const M=`Destination ${e} is unknown.`;console.warn(M),o.notifications.push(M),$.go("main",{message:M});return}const s=Un(t,a,n),i=Math.max(0,I.fuelCostMultiplier??1),r=Math.max(0,Math.round(s.fuelCost*i)),c=Math.max(0,Math.min(3,(I.travelRiskScaling??100)/100)),l=q(),d=Math.max(0,l.globalDangerMultiplier??1),u=Math.min(.95,Math.max(0,s.hazardChance*c*d)),p={...s,fuelCost:r,hazardChance:u};if(o.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}o.ship.fuel-=p.fuelCost,o.location.systemId=a.id,o.location.docked=!0,$.advanceActiveRoute(a.id);const h=on(s.travelTime);o.time.turn+=h,ws(a.id),Fi(o),Oi(o.time.day),ji(o,a.id),$a();const m=Qa(o,a.id);m.completed.length&&console.log(`Arrived at ${a.id}: checked ${m.checked} contracts, completed ${m.completed.join(", ")}.`);const y=Number.isInteger(h)?h.toFixed(0):h.toFixed(2),v=Math.abs(h-1)<.01?"":"s",S=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${y} turn${v}).`;zi(s,p.hazardChance,c,d),Gi(a,p)&&re("Contraband inspection triggered on arrival."),!Yi(a)&&(Xi(a)||Ui(t,a,p,S)||$.go("main",{message:S}))}function Ui(e,t,n,a){const s=q(),i=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*i),routeType:n.routeType},c=Zi(t)??Cs(r);return c?(re(`Travel event triggered: ${c.name||c.id||"unknown"}`),c.type==="mining"?(re(`Mining event surfaced: ${c.id}`),$.go("event",{eventId:c.id}),!0):!c.choices||c.choices.length===0?(re(`Auto-resolving event: ${c.name||c.id||"unknown"}`),Ji(c,a)):($.go("event",{eventId:c.id}),!0)):($.go("main",{message:`${a} — Uneventful transit.`}),!0)}function Yi(e){const t=q(),n=Math.max(0,t.maxEncountersPerDay??0);if(!xt(n))return!1;const a=ei({systemId:e.id,state:o,sessionFactor:1});if(Math.random()<=a){wt();const s=`Pirates intercept you near ${e.name}!`;return o.notifications.push(s),re(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),wi(e.id),!0}return!1}function Xi(e){const t=q(),n=Math.max(0,t.maxEncountersPerDay??0);if(!xt(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),i=e.security==="high"?1.15:e.security==="low"?.65:1,r=z(),c=Yn(e),{detectionReduction:l,fineDiscount:d}=gt(),u=c?1+Math.min(1.2,c.totalUnits*.02):1,p=Math.max(.6,u*Math.max(0,1-d*.8)),h=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),m=a*s*i*p*h,y=Math.min(1,Math.max(0,m*Math.max(0,1-l*.6)));if(Math.random()<=y){wt();const v=`Patrol intercepts you near ${e.name}!`;return o.notifications.push(v),re(`Patrol encounter triggered near ${e.name} (chance ${y.toFixed(3)})`),ce("navy_interceptor"),!0}return!1}function Ji(e,t){const n=Es(e);if(n.triggerCombat?.enemyId){const a=q(),s=Math.max(0,a.maxEncountersPerDay??0);if(!xt(s))return $.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;wt();const i=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return re(i),ce(n.triggerCombat.enemyId),!0}return $.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const Ki={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function Zi(e){const t=Qi(e);return t?Mt(t)??null:null}function Qi(e){const t=[],n=new Set(e.tags||[]),a=s=>{t.includes(s)||t.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(Ki[e.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),t.length?t[Math.floor(Math.random()*t.length)]:null}function de(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}window.nav=(e,t={})=>{$.go(e,t)};function eo(){const e=o,t=J(e.location.systemId),n=(()=>{const r=(t?.description??"Unknown space").trim(),c=r.split(".")[0];return c===r?r:`${c}.`})(),a=Object.values(e.ship.cargo||{}).reduce((r,c)=>r+c,0),s=e.notifications[e.notifications.length-1],i=(e.notifications||[]).slice(-5).reverse();return`
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
          <i class="bi bi-fuel-pump"></i>
          <div>
            <span>Fuel</span>
            <strong>${e.ship.fuel}/${e.ship.maxFuel}</strong>
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
          <div class="menu-group menu-group--tools">
            <span class="menu-group__label">System</span>
            <div class="menu-group__actions">
              <button class="btn btn-primary" onclick="nav('market')" id="navMarket">Market</button>
              ${Ae(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
            </div>
          </div>
          <div class="menu-group">
            <span class="menu-group__label">Tools</span>
            <div class="menu-group__actions">
              <button class="btn btn-ghost btn-small btn-inconspicuous" id="navDev">Dev</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `}window.attackPirateBase=e=>{const t=to(e);if(!t){console.warn(`Unknown base ${e}`);return}$.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function to(e){return x?x.basesById[e]??null:null}function no(e){return x?Object.values(x.basesById).find(n=>n.systemId===e)??null:null}function ao(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}window.setMapZoom=e=>{$.setZoom(e)};window.focusRoute=e=>{$.go("travel",{...$.params,focusTargetId:e})};function so(){const e=He(),t=qi(),n=$.zoom||"local",a=typeof $.params.focusTargetId=="string"?$.params.focusTargetId:"",s=$.activeRoute,i=s?.nodes[s.currentIndex+1],r=s&&s.nodes.length>1?s.nodes.map(v=>J(v)?.name??v).join(" → "):"",c=Object.values(o.ship.cargo||{}).reduce((v,S)=>v+S,0),l=t.map(({profile:v})=>v.hazardChance).reduce((v,S)=>Math.max(v,S),0),d=Math.round((l||0)*100);if(!e)return`
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
    `;const u=e?no(e.id):null,p=ao(u),h=u?`
      <div class="panel-card">
        <p class="label">${p}</p>
        <p class="muted">${u.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${u.id}')">
          Attack Pirate Base (Tier ${u.tier})
        </button>
      </div>
    `:"",m=e?uo(e,t,n,a,s):"",y=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:v,route:S,profile:k})=>{const M=v.id===a,E=v.id===i,D=io(v.security),j=oo(v),P=co(k.hazardChance),w=`${k.fuelCost} fuel`,f=`${k.travelTime} turn${k.travelTime===1?"":"s"}`,g=lo(S.laneType),C=`Distance: ${S.distance}`,L=j.join(" | "),H=["travel-row"];return(M||E)&&H.push("travel-row--focused"),`
              <article class="${H.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${v.name}</span>
                  <span class="travel-row__label">${D}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${g}</span>
                    <span>${C}</span>
                  </div>
                  <span class="travel-row__label">${w} | ${f} | Risk: ${P}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${v.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${v.id}')">Jump to ${v.name}</button>
                </div>
                <span class="travel-row__label">${L}</span>
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
  `}function io(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function oo(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(ro)}function ro(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function co(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function lo(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function uo(e,t,n,a,s){if(!e)return'<p class="muted">Map data unavailable.</p>';const i=320,r=200,c=16,l=36,d=8,u=8,p=ct(),h=p&&a?dt(p,e.id,a):[],m=s?.nodes??[],y=new Set([e.id]);a&&y.add(a),(p?lt(p,e.id):t.map(({system:b})=>b.id)).forEach(b=>y.add(b)),m.forEach(b=>y.add(b)),h.forEach(b=>y.add(b));const S=b=>b.laneType==="core_lane"?"core":b.laneType==="frontier_lane"?"frontier":"wild",k=p?Fa(p,e.id,n):null,M=[],E=[];if(p&&k){const b=new Map(p.nodes.map(A=>[A.id,A])),R=new Set(k.keys());k.forEach((A,Q)=>{const ne=b.get(Q);ne&&M.push({...ne,depth:A})}),p.lanes.filter(A=>R.has(A.from)&&R.has(A.to)).forEach(A=>{const Q=Math.max(k.get(A.from)??0,k.get(A.to)??0);E.push({...A,depth:Q})})}else{const b=new Set;M.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),b.add(e.id),t.forEach(({system:R,route:A})=>{b.has(R.id)||(M.push({id:R.id,name:R.name,x:R.coords?.x??0,y:R.coords?.y??0,tags:R.tags??[],depth:1}),b.add(R.id),E.push({from:e.id,to:R.id,type:S(A),distance:A.distance,depth:1}))})}if(!M.length)return'<p class="muted">No coordinate data to render.</p>';const D=M.map(b=>b.x),j=M.map(b=>b.y),P=Math.min(...D),w=Math.max(...D),f=Math.min(...j),g=Math.max(...j),C=w-P||1,L=g-f||1,H=b=>c+(b-P)/C*(i-c*2),F=b=>r-(c+(b-f)/L*(r-c*2)),U=new Map(M.map(b=>[b.id,{...b,sx:H(b.x),sy:F(b.y)}])),ee=new Set(M.map(b=>b.id)),Y=new Set(m);h.forEach(b=>Y.add(b)),!p&&a&&Y.add(a);const te=new Set,le=b=>{for(let R=0;R<b.length-1;R++)te.add(Te(b[R],b[R+1]))};le(m),h.length?le(h):a&&te.add(Te(e.id,a));const ue=E.filter(b=>ee.has(b.from)&&ee.has(b.to)).map(b=>{const R=U.get(b.from),A=U.get(b.to);if(!R||!A)return"";const Q=Te(b.from,b.to),ne=b.depth??Math.max(R.depth??0,A.depth??0),we=te.has(Q),Oe=we?3.2:ne<=1?2.2:1.2,qe=we?1:ne<=1?.9:.35;return`<line x1="${R.sx.toFixed(1)}" y1="${R.sy.toFixed(1)}" x2="${A.sx.toFixed(1)}" y2="${A.sy.toFixed(1)}" stroke="${po(b.type)}" stroke-width="${Oe}" stroke-linecap="round" opacity="${qe}"></line>`}).join(""),pe=Array.from(U.values()).map(b=>{const R=b.id===e.id,Q=(b.depth??0)<=1,ne=Y.has(b.id),we=R?7:ne?6:Q?5:3.5,Oe=R?"#4CE6C3":ne?"#7dd3fc":"#ffffff",qe=ne||Q?1:.45,_t=y.has(b.id),ea=b.name.length>16?`${b.name.slice(0,14)}...`:b.name,ta=_t?ea:"";return`
        <g>
          <circle
            cx="${b.sx.toFixed(1)}"
            cy="${b.sy.toFixed(1)}"
            r="${we}"
            fill="${Oe}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${qe}"
          ></circle>
          ${_t?`<text x="${(b.sx+d).toFixed(1)}" y="${(b.sy-u).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${ta}</text>`:""}
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
  `}function po(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const Ot={high:"^",low:"v",stable:"-"};function mo(e={}){const t=J(o.location.systemId);if(!t)return`
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
    `;const a=Object.values(o.ship.cargo||{}).reduce((f,g)=>f+g,0),s=Object.entries(o.ship.cargo||{}).filter(([,f])=>f>0).sort((f,g)=>g[1]-f[1]).slice(0,5),i=new Map;ie().filter(f=>f.status==="active").forEach(f=>{const g=f.requirements?.deliver;if(!g?.commodityId)return;const C=i.get(g.commodityId)??{needed:0,deliverable:!1},L=_e(g.commodityId)>=(g.quantity||0),H=!g.systemId||g.systemId===o.location.systemId;i.set(g.commodityId,{needed:C.needed+(g.quantity||0),deliverable:C.deliverable||H&&L})});const r=n.map(f=>{const g=V(t.id,f.id),C=xo(f.tradeTags?.length?f.tradeTags:f.tags),L=_e(f.id),H=wo(f,L),F=Xn(g.buy,a,f.id);return{commodity:f,quote:g,tags:C,cargoQty:L,metaLine:H,maxBuyable:F,profit:g.sell-g.buy}}),c=r.reduce((f,g)=>g.profit>f.profit?{profit:g.profit,entry:g}:f,{profit:Number.NEGATIVE_INFINITY,entry:r[0]}),l=c.entry?.commodity.id??"",d=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,u=r.find(f=>f.commodity.id===d)||r.find(f=>f.commodity.id===l)||r[0],p=r.reduce((f,g)=>{const C=g.quote.high-g.quote.buy;return C>f.delta?{delta:C,entry:g}:f},{delta:-1/0,entry:r[0]}).entry,h=r.reduce((f,g)=>{const C=g.quote.buy-g.quote.low;return C>f.delta?{delta:C,entry:g}:f},{delta:-1/0,entry:r[0]}).entry,m=["legal","restricted","illegal"];let y=0;const v=m.map(f=>{const g=r.filter(F=>qt(F.commodity.legalStatus)===f);if(!g.length)return"";const C=tt(f),L=`
        <div class="market-group__header">
          <div>
            <p class="market-group__label">${C} goods</p>
            <p class="muted market-group__count">${g.length} items</p>
          </div>
          <span class="market-status market-status--${f}">${C}</span>
        </div>
      `,H=g.map(({commodity:F,quote:U,tags:ee,cargoQty:Y})=>{const te=u?.commodity.id===F.id,le=i.get(F.id),ue=["market-row"];te&&ue.push("market-row--highlight");const pe=qt(F.legalStatus);ue.push(`market-row--${pe}`);const b=le?`<span class="contract-pill contract-pill--target${le.deliverable?" ready":""}">${le.deliverable?"Deliver now":"Contract target"}</span>`:"",R=`<span class="market-row__status market-row__status--${pe}">${tt(pe)}</span>`,A=`${Ot[U.trend]} ${U.trend}`,Q=y++;return`
            <article class="${ue.join(" ")}" style="--row-index:${Q};" onclick="selectMarketCommodity('${F.id}')">
              <div class="market-row__main">
                <span class="market-row__name">${F.name}</span>
                <span class="market-row__info">
                  BUY ${U.buy} A | SELL ${U.sell} A | Held ${Y}
                </span>
              </div>
              <div class="market-row__meta">
                <span class="market-row__trend">${A}</span>
                <div class="market-row__meta-line">
                  <span>${ee||"Local goods"}</span>
                  ${R}
                  ${b}
                </div>
              </div>
            </article>
          `}).join("");return`
        <section class="market-group">
          ${L}
          ${H}
        </section>
      `}).join(""),S=a>0,k=`
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
        Credits: ${o.player.credits} | Cargo: ${ho()}
      </p>
      <div class="market-summary__cargo">
        ${s.length?s.map(([f,g])=>{const C=K(f),L=C?.mass??0,H=L?` (Mass ${Math.round(L*g)})`:"";return`<span>${g} × ${C?.name||f}${H}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${S?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,M=u?In(t.id,u.commodity.id,1):!1,E=u?Rn(t.id,u.commodity.id,1):!1,D=u&&M?"":" disabled",j=u&&u.maxBuyable>1&&M?"":" disabled",P=u&&E&&u.cargoQty>0?"":" disabled",w=u?`
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
          ${j}
          onclick="buyAllCommodityAction('${u.commodity.id}', ${u.quote.buy})"
        >
          Buy Max (${u.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${P}
          onclick="sellCommodityAction('${u.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${P}
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
            ${bo()}
    ${fo(t.id)}
          </aside>
          <div class="market-list">
            ${v}
            ${w}
          </div>
        </section>
        <section class="market-footer">
          ${go(t,p,h,c.entry)}
        </section>
        ${Mo(r)}
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function ho(){const e=o.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${o.ship.cargoCapacity}`}function fo(e){const t=xs(e);return t.length?`
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
    `}function go(e,t,n,a){const s=En(),i=_n(),c=(e?.neighbors.map(m=>J(m.id)).filter(m=>!!m&&s[m.id])||[]).map(m=>{const y=$o(e?.id,m.id),v=o.time.turn-(s[m.id]?.turn??o.time.turn),S=y.over?`${y.over.id} overpriced (+${Math.round(y.over.delta*100)}%)`:"overpay unknown",k=y.under?`${y.under.id} underpriced (${Math.round(y.under.delta*100)}% cheaper)`:"no bargain yet";return`<p class="muted">${m.name} - age ${v}t - Sell ${S} - Buy ${k}</p>`}).join(""),l=t?`<p class="muted">
        ${t.commodity.name} high runs ${Math.round(t.quote.high-t.quote.buy)} above buy (${t.quote.high})
      </p>`:"",d=n?`<p class="muted">
        ${n.commodity.name} low sits ${Math.round(n.quote.buy-n.quote.low)} below buy (${n.quote.low})
      </p>`:"",p=o.notifications.filter(m=>{const y=m.toLowerCase();return y.includes("market")||y.startsWith("bought")||y.startsWith("sold")}).slice(-6).reverse().map(m=>`<p class="muted">${m}</p>`).join(""),h=a?`<p>Consider ${a.commodity.name}. Buy @ ${a.quote.buy} A�, sell @ ${a.quote.high} A� (high).</p><p class="muted">Profit spread: +${a.profit}</p>`:'<p class="muted">No hot tip available.</p>';return`
    <div class="panel-card market-insights-card">
      <p class="label">Market Insights</p>
      <div class="insight-section">
        <p class="insight-title">Intel Tools</p>
        <p class="muted">System: ${e?.name||"Unknown"}</p>
        <p class="muted">Neighbor Intel ${i} cr - highlights over/under priced goods (actuals drift on arrival).</p>
        <div class="app-actions">
          <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${i})</button>
        </div>
        ${c||'<p class="muted">No neighbor intel yet.</p>'}
      </div>
      <div class="insight-section">
        <p class="insight-title">Trending</p>
        ${l||d?`${l}${d}`:'<p class="muted">No strong pulses yet.</p>'}
      </div>
      <div class="insight-section">
        <p class="insight-title">Hot Tip</p>
        ${h}
      </div>
      <div class="insight-section">
        <p class="insight-title">Market Log</p>
        ${p||'<p class="muted">No market-relevant log entries yet.</p>'}
      </div>
    </div>
  `}const yo=["taxEvasion","smuggling","bribery"];function bo(){return`
    <div class="panel-card strategy-panel">
      <p class="label">Profit Paths</p>
      <div class="strategy-panel__cards">
        ${yo.map(t=>vo(t)).join("")}
      </div>
    </div>
  `}function vo(e){const t=vn(e),n=Math.round(os(e)),a=`${n}%`;return`
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
  `}function Mo(e){if(!e.length)return"";const t=e.map(p=>({label:p.commodity.name,value:p.quote.high})),n=e.map(p=>({label:p.commodity.name,value:p.quote.low})),a=Math.max(...t.map(p=>p.value)),s=Math.min(...n.map(p=>p.value)),i=Math.max(1,a-s),r=280,c=120,l=t.map((p,h)=>{const m=h/Math.max(1,t.length-1)*r,y=c-p.value/a*c;return`${m},${y}`}).join(" "),d=n.map((p,h)=>{const m=h/Math.max(1,n.length-1)*r,y=c-(p.value-s)/i*c;return`${m},${y}`}).join(" "),u=t.slice(0,6).map(p=>`<div class="trend-line">
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
`}function $o(e,t){if(!e)return{over:null,under:null};const a=En()[t];if(!a)return{over:null,under:null};let s=null,i=null;const r=Math.max(0,o.time.turn-a.turn),c=Math.max(.5,1-r*.05);for(const[l,d]of Object.entries(a.prices)){const u=V(e,l);if(u.sell>0&&d.buy>u.sell){const p=(d.buy-u.sell)/u.sell*c;(!s||p>s.delta)&&(s={id:l,delta:p})}if(u.buy>0&&d.sell<u.buy){const p=(u.buy-d.sell)/u.buy*c;(!i||p>i.delta)&&(i={id:l,delta:p})}}return{over:s,under:i}}function Xn(e,t,n){if(e<=0)return 0;const a=Math.floor(o.player.credits/e),s=Math.max(0,o.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function xo(e){return e?.length?Array.from(new Set(e)).map(n=>St(n.replace(/_/g," "))).join(" | "):""}function wo(e,t){const n=St(e.tier||"standard"),a=tt(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,i=[`Held ${t}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" | ")}function St(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function tt(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??St(e)}function qt(e){return e==="restricted"||e==="illegal"?e:"legal"}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=o.location.systemId,n=K(e),a=Dn(t,e,1),s=V(t,e).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=o.location.systemId,n=K(e),a=bt(t,e,1),s=V(t,e).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=o.location.systemId,a=o.ship.cargo||{},s=Object.values(a).reduce((l,d)=>l+d,0),i=Xn(t,s);if(i<=0){nav("market");return}Dn(n,e,i);const r=K(e),c=document.getElementById("market-message");c&&(c.textContent=`Bought ${i} ${r?.name||e} for ${t*i} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=o.location.systemId,n=_e(e);if(n<=0){nav("market");return}const a=V(t,e).sell;bt(t,e,n);const s=K(e),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=o.location.systemId,t=Object.entries(o.ship.cargo||{});let n=0;const a=[];for(const[i,r]of t){if(!r||!bt(e,i,r))continue;n+=r;const l=K(i);a.push(`${r} ${l?.name||i}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const i=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${i}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=Ss(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};window.pursueTradeStrategy=e=>{const t=vn(e),n=cs(e),a=document.getElementById("market-message");a&&(a.textContent=n?`Invested in ${t.name}.`:`Need ${t.cost} credits to unlock ${t.name}.`),nav("market")};function So(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function ko(e={}){const t=typeof e.message=="string"?e.message:"",n=ie(),a=Wa(),s=Object.values(o.ship.cargo||{}).reduce((u,p)=>u+p,0),r=So(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),c=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(u=>{const p=u.requirements||{},h=Wt(p.travel?.systemId),m=Gt(p.travel?.systemId);return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  ${u.description?`<p class="muted">${u.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${Ga(u)}</span>
                    <span>${za(u)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${h}${m?` - ${m}`:""}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',l=r?[r]:a[0]?[a[0].id]:[],d=a.length>0?`
        <div class="contract-list">
          ${a.map(u=>{const p=Wt(u.requirements?.travel?.systemId),h=Gt(u.requirements?.travel?.systemId),m=["contract-row"];return l.includes(u.id)&&m.push("contract-row--active"),`
                <article class="${m.join(" ")}" onclick="acceptContract('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  <p class="muted">${u.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${p}${h?` - ${h}`:""}</span>
                    <span>Reward: ${Co(u.reward)}</span>
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
  `}function Wt(e){if(!e)return"Unknown";const t=J(e);return t?.name?`<strong>${t.name}</strong>`:e}function Gt(e){if(!e)return"";const t=ct();if(!t)return"";const n=Ha(t,o.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function Co(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=X(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}window.acceptContract=e=>{const t=pt(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=Xa(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};const To={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function kt(e){return x?x.ships.find(t=>t.id===e)??null:null}function Eo(){return kt(o.ship.templateId)}function _o(){return x?x.ships.filter(e=>e.starter):[]}function Io(){return x?x.ships.filter(e=>!e.starter):[]}function Jn(e,t){const n=kt(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,c)=>To[`${r.size}:${r.type}`]??a[c]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};o.ship=i,at(),it()}function Ro(e){Jn(e),o.player.hasChosenStarter=!0}function Do(e){const t=kt(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):o.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(o.player.credits-=t.cost,Jn(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function Bo(){const e=o.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=t+n;if(o.player.credits<a){console.warn("Not enough credits to fully repair.");return}o.player.credits-=a,e.hp=e.maxHp,e.shields=e.maxShields}function Po(){const e=o.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(o.player.credits<a){console.warn("Not enough credits to fully refuel.");return}o.player.credits-=a,e.fuel=e.maxFuel}window.repairShipAction=()=>{Bo(),nav("ship")};window.refuelShipAction=()=>{Po(),nav("ship")};function Ao(){const e=o.ship,t=Eo(),n=dn(),a=o.combat?.playerCooldowns??[],s=Object.values(e.cargo||{}).reduce((c,l)=>c+l,0),i=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(c=>`<li>${c.name} (+${c.value} ${c.effectType})</li>`).join("")}</ul>`;return`
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
            ${e.hardpoints.map((c,l)=>{const d=X(e.weapons[l]),u=d?.name||"Empty",p=a[l]??0,h=d?rt(d):null,m=h?`
                    <p class="muted">Role: ${h.role} (${h.typeLabel})</p>
                    <p class="muted">Vs Shields: ${h.vsShields} · Vs Hull: ${h.vsHull}</p>
                    ${h.tagNotes.length?`<p class="muted">Traits: ${h.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${l+1} · ${c.size} ${c.type}</p>
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
  `}function Lo(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=Mt(t);if(!n)return`
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
    `;const a=jo(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${No(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function jo(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${Fo(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function No(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function Fo(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=$.params,n=typeof t.eventId=="string"?t.eventId:"",a=Mt(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const i=Ts(s);if(i.triggerCombat?.enemyId){ce(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{xe(o,o.location.systemId,e||void 0,t||void 0),$.go("mining")};window.fireWeapon=(e,t="normal")=>{Fe("fire",e,t),o.combat&&nav("combat")};window.brace=()=>{Fe("brace"),o.combat&&nav("combat")};window.flee=()=>{Fe("flee"),o.combat&&nav("combat")};window.setStance=e=>{Bi(e),o.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{Fe("fire_all",void 0,e),o.combat&&nav("combat")};function Ho(){const e=o.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=o.ship,n=e.log.map(k=>`<div class="log-line">${k}</div>`).join(""),a=t.hp/Math.max(1,t.maxHp)<=.35,s=(e.log[e.log.length-1]||"").toLowerCase(),i=s.includes("hits you")||s.includes("damage"),r=e.log[e.log.length-1]||"Awaiting orders.",c=Wo(r),l=["app-root","combat-root"];a&&l.push("low-hull"),i&&l.push("hit-flash");const d=t.hardpoints.map((k,M)=>{const E=t.weapons[M],D=X(E),j=e.playerCooldowns[M]??0,P=!!D&&j===0;return`
        <div class="panel-card">
          <p class="label">Slot ${M+1} · ${k.size.toUpperCase()} ${k.type}</p>
          <p class="value-inline">${D?.name||"Empty"}</p>
          <p class="muted">${j>0?`Cooling (${j})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${P?"":"disabled"} onclick="fireWeapon(${M}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${P?"":"disabled"} onclick="fireWeapon(${M}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),u=Vs.map(k=>`
        <tr>
          <td>${k.type}</td>
          <td>${k.shieldMultiplier.toFixed(2)}x</td>
          <td>${k.hullMultiplier.toFixed(2)}x</td>
          <td>${k.description}</td>
        </tr>
      `).join(""),p=_i(),h=p?`<p class="combat-advice ${p.suggestion}">
        ${p.text}
        <span class="advice-confidence">Intel confidence: ${(p.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',y=e.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.",v=Oo(e),S=qo(e);return`
    <div class="${l.join(" ")}">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${e.enemyName}</span>
        </div>
        <div class="app-meta">
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
            <p class="muted">Last action: <strong>${c}</strong></p>
            <p class="muted small">${y}</p>
            <p class="value-inline">Fuel ${t.fuel}/${t.maxFuel}</p>
            <div class="status-chips">${v||'<span class="muted">No active buffs</span>'}</div>
          </div>
            <div class="panel-card enemy-reticle">
              <div class="reticle-grid"></div>
              <p class="label">Enemy</p>
              <p class="value-inline">${e.enemyName}</p>
              <p class="muted">
                Max adversaries: <strong>${e.enemyCount??1}</strong>
              </p>
              <div class="status-chips">${S||'<span class="muted">No active debuffs</span>'}</div>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Stances</p>
            ${h}
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
            ${d}
          </div>

          <h2 class="panel-title">Damage Guide</h2>
          <div class="panel-card">
            <p><strong>Called Shot</strong>: ${Gs}</p>
            <p><strong>Brace vs Attack</strong>: ${zs}</p>
            <table class="damage-guide">
              <thead>
                <tr><th>Damage Type</th><th>Shield Effect</th><th>Hull Effect</th><th>Usage Tip</th></tr>
              </thead>
              <tbody>
                ${u}
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
  `}function Oo(e){const t=[];return t.push(`<span class="buff-chip buff">Stance: ${e.playerStance}</span>`),e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function qo(e){const t=[];return e.enemyStatus.weaponJammedTurns>0&&t.push(`<span class="buff-chip debuff">Weapons jammed (${e.enemyStatus.weaponJammedTurns}t)</span>`),e.enemyShields<=0&&t.push('<span class="buff-chip debuff">Shields down</span>'),t.length===0&&e.enemyShields>0&&t.push('<span class="buff-chip muted-chip">Systems nominal</span>'),t.join("")}function Wo(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}window.buyShipAction=e=>{Do(e)};window.buyComponentAction=e=>{ka(e)};window.buyWeaponAction=e=>{Pa(e)};function Go(){if(!Ae(o.location.systemId,"shipyard"))return`
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
    `;const e=Io(),t=wa(),n=Da(),a=st().map(l=>X(l)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(l=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Ve("ship",l.id)}
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
          ${t.map(l=>{const d=[];if(typeof l.value=="number"&&l.effectType&&d.push(`+${l.value} ${l.effectType}`),l.effects)for(const[p,h]of Object.entries(l.effects)){if(typeof h!="number")continue;const m=Math.round((h-1)*100);switch(p){case"miningYield":d.push(`Mining yield ${m>=0?"+":""}${m}%`);break;case"miningSpeed":d.push(`Mining duration ${m>=0?"+":""}${m}%`);break;case"rareFindChance":d.push(`Rare finds ${m>=0?"+":""}${m}%`);break;case"miningPayoutMultiplier":d.push(`Mining payout ${m>=0?"+":""}${m}%`);break;case"sellBonus":d.push(`Sell bonus ${m>=0?"+":""}${m}%`);break;case"incomeMultiplier":d.push(`Income ${m>=0?"+":""}${m}%`);break;default:d.push(`${p} ${m>=0?"+":""}${m}%`)}}const u=d.length?d.join(" | "):"Utility module";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Ve("module",l.id)}
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
                      ${Ve("weapon",l.id)}
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
  `}const zt=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],Vt=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],Ut=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],Yt=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function fe(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function zo(e){const t=fe(e)%zt.length;return zt[t]}function Ct(e){let t=fe(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function ze(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,c=i-s+1,l=Math.floor((t-r)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function Ve(e,t){const n=zo(`${e}-${t}`),a=Vt[fe(t)%Vt.length],s=Ut[fe(t+"-mod")%Ut.length],i=Yt[fe(t+"-wpn")%Yt.length],c=ze(e==="ship"?Vo(a,t):e==="module"?Uo(s,t):Yo(i,t)).map(l=>`<rect x="${l.x}" y="${l.y}" width="1" height="1" fill="${n[l.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${c}
    </svg>
  `}function Vo(e,t){const n=Ct(t),a=[...e],s=Math.min(...e.map(d=>d.y)),i=Math.max(...e.map(d=>d.y)),r=e.filter(d=>d.y===s),c=e.filter(d=>d.y===i);r.slice(0,2).forEach(d=>{a.push({x:d.x,y:d.y-1,c:"a"})}),c.forEach(d=>{n()>.5&&a.push({x:d.x,y:d.y+1,c:n()>.5?"a":"b"})});const l=n()>.5?-1:1;return a.push({x:c[0]?.x+l,y:i-1,c:"b"}),a.push({x:c[c.length-1]?.x-l,y:i-1,c:"b"}),a}function Uo(e,t){const n=Ct(t+"-decor"),a=[...e],s=Math.min(...e.map(l=>l.x)),i=Math.max(...e.map(l=>l.x)),r=Math.min(...e.map(l=>l.y)),c=Math.max(...e.map(l=>l.y));return a.push({x:s-1,y:Math.round((r+c)/2),c:"b"}),a.push({x:i+1,y:Math.round((r+c)/2),c:"b"}),n()>.3&&a.push({x:s,y:r-1,c:"a"}),n()>.6&&a.push({x:i,y:r-1,c:"c"}),n()>.4&&a.push({x:s,y:c+1,c:"a"}),a}function Yo(e,t){const n=Ct(t+"-weapon"),a=[...e],s=Math.max(...e.map(c=>c.y)),i=Math.min(...e.map(c=>c.x)),r=Math.max(...e.map(c=>c.x));return a.push({x:i,y:s+1,c:n()>.5?"a":"b"}),a.push({x:r,y:s+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:i+1,y:s-2,c:"c"}),a.push({x:r+1,y:s-1,c:"b"}),a}const Xo={incomeMultiplier:e=>O(e,"income"),eventRewardMultiplier:e=>O(e,"event rewards"),hpBonus:e=>O(e,"hull"),cargoBonus:e=>Ko(e,"cargo capacity"),sellBonus:e=>O(e,"sell price"),buyBonus:e=>O(e,"buy price"),marketTax:e=>O(e,"market tax"),miningYield:e=>O(e,"mining yield"),rareFindChance:e=>O(e,"rare find chance"),miningSpeed:e=>O(e,"mining duration"),dodgeBonus:e=>ke(e,"dodge chance"),critBonus:e=>ke(e,"crit chance"),damageTakenMultiplier:e=>O(e,"damage taken"),fleeBonus:e=>ke(e,"flee chance"),pirateDetectionMultiplier:e=>O(e,"pirate detection"),scanDetectionMultiplier:e=>O(e,"scan detection"),illegalTolerance:e=>O(e,"illegal tolerance"),fuelCostMultiplier:e=>O(e,"fuel cost"),hazardDetectionBonus:e=>ke(e,"hazard detection"),anomalyChance:e=>O(e,"anomaly chance"),shieldRegenBonus:e=>O(e,"shield regen")};function Jo(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>Xo[n]?.(a)??null).filter(n=>!!n):[]}function O(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function ke(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Ko(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}window.chooseStarter=e=>{Ro(e),it(),$.go("main")};function Zo(){const e=_o();return e.length===0?`
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
        <div class="panel-row">
          ${e.map(n=>{const a=Jo(n),s=n.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${n.passive.name}</p>
          ${a.length?`<div class="passive-summary__list">${a.map(i=>`<span>${i}</span>`).join("")}</div>`:""}
        </div>
      `:"";return`
      <div class="panel-card starter-card">
        <div class="starter-card-head">
          ${ar(n.id,n.roleHint??n.name)}
          <div>
            <p class="label">${n.roleHint}</p>
            <p class="value-inline"><strong>${n.name}</strong></p>
            <p class="muted">${n.description}</p>
          </div>
        </div>
        ${s}
        <div class="starter-stats">
          <span class="starter-stat">
            <i class="bi bi-shield-fill"></i>
            <strong>${n.hull} Hull</strong>
          </span>
          <span class="starter-stat">
            <i class="bi bi-shield-shaded"></i>
            <strong>${n.shields} Shields</strong>
          </span>
          <span class="starter-stat">
            <i class="bi bi-fuel-pump"></i>
            <strong>${n.fuel} Fuel</strong>
          </span>
          <span class="starter-stat">
            <i class="bi bi-boxes"></i>
            <strong>${n.cargo} Cargo</strong>
          </span>
        </div>
        <button class="btn btn-primary" onclick="chooseStarter('${n.id}')">Choose ${n.name}</button>
      </div>
    `}).join("")}
        </div>
        </section>
      </main>

  <footer class="app-footer">
    <button class="btn btn-ghost btn-small" onclick="nav('main')">Skip</button>
    <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
  </footer>
</div>
`}const Xt=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],Jt={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function Tt(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Qo(e){return Xt[Tt(e)%Xt.length]}function er(e,t){const n=(()=>{let r=Tt(t);return()=>(r=r*1664525+1013904223|0,(r>>>0)/4294967295)})(),a=[...e],s=Math.max(...e.map(r=>r.y)),i=Math.min(...e.map(r=>r.y));return n()>.5&&a.push({x:e[0]?.x??4,y:i-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:s+1,c:n()>.5?"b":"c"}),a}function tr(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,c=i-s+1,l=Math.floor((t-r)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function nr(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(Jt).find(r=>n.includes(r))??"fighter",s=Jt[a],i=Tt(`${e}-${t}`)%s.length;return s[i]}function ar(e,t){const n=Qo(`${e}-${t}`),a=nr(e,t),s=er(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${tr(s).map(c=>`<rect x="${c.x}" y="${c.y}" width="1" height="1" fill="${n[c.c]}" opacity="1" />`).join("")}
    </svg>
  `}function sr(){const e=o.ship;if(!e.hardpoints.length)return`
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
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Weapon Hardpoints</span>
        </div>
        <div class="app-meta">
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
  `}window.equipWeaponAction=(e,t)=>{Ba(e,t)&&nav("weapon_slots")};function ir(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=o.ship.hardpoints[t];if(!n)return`
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
    `;const r=st().map(c=>X(c)).filter(c=>!!c).map(c=>{const l=ot(t,c.id),u=X(o.ship.weapons[t])?.id===c.id?"Equipped":"Equip",p=rt(c),h=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${l?"":"muted"}">
          <p class="label">${c.size} / ${c.type}</p>
          <p class="value-inline"><strong>${c.name}</strong></p>
          <p class="muted">Damage ${c.damage} (${c.damageType}) · Acc ${Math.round(c.accuracy*100)}% · Crit ${Math.round(c.critChance*100)}% (×${c.critMultiplier}) · CD ${c.cooldown}</p>
          <p class="muted">Role: ${p.role} (${p.typeLabel}) · Vs Shields: ${p.vsShields} · Vs Hull: ${p.vsHull}${h}</p>
          <button class="btn btn-primary" ${l?"":"disabled"} onclick="equipWeaponAction(${t}, '${c.id}')">
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
  `}window.leaveMining=()=>{o.miningSession=null,$.go("main")};window.drillCell=(e,t)=>{hi(o,e,t)?.fightTriggered||$.go("mining")};window.setMiningDepth=e=>{pi(o,e),$.go("mining")};window.finalizeDrill=()=>{if(fi(o)?.fightTriggered)return;const t=o.miningSession?.lastMessage||"Extraction complete.";$.go("main",{message:t})};window.newSurvey=()=>{xe(o,o.location.systemId,o.miningSession?.beltId,o.miningSession?.resourceId,{force:!0}),$.go("mining")};function or(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function rr(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const s=e[n][a],i=["mine-cell"];s.drilled&&i.push("drilled"),s.selected&&i.push("selected");const r=["mine-cell-inner"];s.directionClass&&r.push(s.directionClass),s.depthClass&&r.push(s.depthClass),s.signal!=null&&r.push(or(s.signal));const c=s.signal!=null?`<span class="cell-signal">${s.signal}</span>`:'<span class="cell-signal muted">·</span>';t.push(`
        <div class="${i.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${r.join(" ")}">
            <div class="cell-center">
              ${c}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function cr(){const e=o.miningSession;if(!e)return`
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
    `;const t=Math.round(e.threat??0),n=Bn(o,e.systemId),a=Array.from({length:5},(r,c)=>{const l=c+1;return`<button class="chip-btn ${l===e.depth?"active":""}" onclick="setMiningDepth(${l})">Z${l}</button>`}).join(""),s=rr(e.grid),i=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
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
  `}window.startNewRun=()=>An(!1);window.returnToMainMenu=()=>An(!0);function lr(){const e=o.gameOver?.summary,t=ua(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],i=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],c=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],l=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],d=p=>p.map(([h,m])=>`
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
  `}const _=320,T=180;let ge=null,ye="space",Me=null,se=1;const dr=450,Et=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],De=[];function ur(){for(const e of Et){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*_,y:Math.random()*T,size:Math.random()<.6?1:2})}}function pr(){De.length=0;for(let e=0;e<4;e++)De.push({x:Math.random()*_,y:T/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function mr(e){ge=e.getContext("2d"),ge&&(e.width=_,e.height=T,ge.imageSmoothingEnabled=!1,ur(),pr())}function hr(e){e===ye&&(!Me||se<1)||(Me=ye,ye=e,se=0)}function fr(e){if(!ge)return;const t=e/16.6667;se<1&&(se=Math.min(1,se+e/dr),se>=1&&(Me=null));for(const n of De)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=_+20,n.y=T/4+Math.random()*(T/2));for(const n of Et)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=_,a.y=Math.random()*T)}function Kn(e=ge,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=Me!==null&&se<1,a=wr(se);n?(Ue(e,Me,t,{alpha:1-a,scale:1+.05*a}),Ue(e,ye,t,{alpha:a,scale:1.04-.04*a})):Ue(e,ye,t),e.restore()}function Ue(e,t,n,a={}){const s=a.alpha??1,i=a.scale??1;switch(e.save(),e.globalAlpha=s,i!==1&&(e.translate(_/2,T/2),e.scale(i,i),e.translate(-_/2,-T/2)),t){case"mining":vr(e);break;case"hangar":$r(e,n);break;case"ops":xr(e,n);break;default:gr(e,n);break}br(e,t),t==="combat"&&Mr(e),e.restore()}function gr(e,t){e.fillStyle="#02030b",e.fillRect(0,0,_,T),yr(e,t)}function yr(e,t){for(const n of De){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),s=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${s})`),a.addColorStop(.5,`rgba(60, 130, 200, ${s*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${s})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of Et){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function br(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let s=0;s<n;s++){const i=Math.random()*_,r=Math.random()*T;e.fillRect(Math.round(i),Math.round(r),1,1)}}function vr(e){e.fillStyle="#0a0604",e.fillRect(0,0,_,T);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const s=a*(T/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(s),_,Math.ceil(T/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,_-80,T-40);const n=e.createLinearGradient(0,T/2,_,T/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,_,T)}function Mr(e){const t=e.createLinearGradient(0,0,_,T);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,_,T)}function $r(e,t){e.fillStyle="#04060a",e.fillRect(0,0,_,T);const n=e.createLinearGradient(0,0,0,T);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,_,T);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(_/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,T-46,_,18),e.fillStyle="#0f1a28";for(let s=0;s<7;s++){const i=T-26+s*3;e.fillRect(0,i,_,1)}e.fillStyle="#1a2838";for(let s=0;s<_;s+=22)e.fillRect(s,T-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,_-80,10),e.fillRect(40,70,_-80,6)}function xr(e,t){e.fillStyle="#021014",e.fillRect(0,0,_,T);const n=e.createRadialGradient(_/2,T*.45,10,_/2,T/2,T);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,_,T),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let d=20;d<_;d+=20)e.beginPath(),e.moveTo(d,0),e.lineTo(d,T),e.stroke();for(let d=20;d<T;d+=20)e.beginPath(),e.moveTo(0,d),e.lineTo(_,d),e.stroke();const a=t*.002%(Math.PI*2),s=_/2,i=T/2,r=80,c=e.createRadialGradient(s,i,0,s,i,r);c.addColorStop(0,"rgba(80, 220, 200, 0.18)"),c.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=c,e.beginPath(),e.moveTo(s,i),e.arc(s,i,r,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(s,i,r,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const l=[{x:s+26,y:i-18},{x:s-30,y:i+14},{x:s+6,y:i+32}];for(const d of l)e.fillRect(Math.round(d.x),Math.round(d.y),2,2)}function wr(e){return e*e*(3-2*e)}const Zn=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyCountMin",label:"Min Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`},{path:"combat.enemyCountMax",label:"Max Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],Sr=Zn.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),kr={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function nt(e){const t=e.split(".");let n=I;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function Cr(e,t){const n=e.split(".");let a=I;for(let s=0;s<n.length-1;s++){const i=n[s];a[i]=a[i]??{},a=a[i]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{ce(e)};window.devMining=()=>{xe(o,o.location.systemId),$.go("mining")};function Tr(){return Zn.map(e=>{const t=e.controls.map(n=>`
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
    `}).join("")}function Er(e){const t=()=>{window.prompt("Dev settings snapshot (copy manually):",e)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(()=>{alert("Dev settings copied to clipboard.")}).catch(()=>{t()}):t(),console.log("Dev settings report:",e)}function oe(){const e=document.getElementById("app");if(!e)return;const t=kr[$.current]??"space";hr(t);let n="";if(Kn(null,performance.now()),$.current==="mining"&&!o.miningSession&&o.location?.systemId){const s=He(),i=new Set(s?.tags??[]);(i.has("mining_belt")||i.has("mining"))&&xe(o,o.location.systemId)}switch($.current){case"main":n=eo();break;case"travel":n=so();break;case"market":n=mo($.params);break;case"contracts":n=ko();break;case"ship":n=Ao();break;case"event":n=Lo($.params);break;case"combat":n=Ho($.params);break;case"weapon_slots":n=sr();break;case"weapon_select":n=ir($.params);break;case"shipyard":n=Go();break;case"ship_select":n=Zo();break;case"mining":n=cr();break;case"gameover":n=lr();break}const a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${Tr()}
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
  `;e.innerHTML=`${n}${a}`,_r()}let me=!1,Kt=!1;function _r(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),c=document.getElementById("devGodMode"),l=document.getElementById("devReportSettings"),d=document.getElementById("devResetMiningSession"),u=document.getElementById("devSpikeThreat"),p=document.getElementById("devLogMiningGrid"),h=document.getElementById("navTravel"),m=document.getElementById("navMarket"),y=document.getElementById("navShip"),v=document.getElementById("devPersistEvents"),S=document.getElementById("devClearEvents"),k=document.getElementById("devHardReset"),M=t?.querySelectorAll("input[data-dev-path]"),E=document.getElementById("devMiningStatus"),D=()=>{t&&t.classList.toggle("hidden")},j=w=>{const f=Sr[w],g=document.getElementById(`devValue-${w.replace(/\./g,"__")}`);f&&g&&(g.textContent=f.formatter(nt(w)))};M?.forEach(w=>{const f=()=>{const g=w.dataset.devPath;if(!g)return;const C=Number(w.value);Cr(g,C),Ce(),j(g)};w.addEventListener("input",f)});const P=()=>{if(!E)return;const w=o.miningSession;if(!w){E.textContent="No active mining session.";return}const f=(w.threat??0).toFixed(1),g=w.depth??0;E.innerHTML=`
      <div>System: ${w.systemId}</div>
      <div>Belt: ${w.beltName??w.beltId??"—"}</div>
      <div>Depth: Z${g}</div>
      <div>Threat: ${f}%</div>
      <div>Exploration: ${(w.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${w.drillsUsed??0}</div>
      <div>Selected: ${w.selectedRow!=null?`X${w.selectedCol+1} Y${w.selectedRow+1}`:"none"}</div>
    `};P(),e?.addEventListener("click",D),n?.addEventListener("click",()=>t?.classList.add("hidden")),h?.addEventListener("click",()=>window.nav?.("travel")),m?.addEventListener("click",()=>window.nav?.("market")),y?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{o.player.credits+=1e3,t?.classList.add("hidden"),oe()}),r?.addEventListener("click",()=>{const w=o.ship.cargo||{};w.aurite_ore=(w.aurite_ore||0)+20,o.ship.cargo=w,t?.classList.add("hidden"),oe()}),c?.addEventListener("click",()=>{me=!me,o.godMode=me,me&&(o.ship.hp=o.ship.maxHp,o.ship.shields=o.ship.maxShields),alert(`God Mode: ${me?"On":"Off"}`)}),l?.addEventListener("click",()=>{const w=JSON.stringify({timestamp:new Date().toISOString(),devTune:I},null,2);Er(w),t?.classList.add("hidden")}),d?.addEventListener("click",()=>{xe(o,o.location.systemId,o.miningSession?.beltId),t?.classList.add("hidden"),oe(),P()}),u?.addEventListener("click",()=>{const w=o.miningSession;w&&(w.threat=95,w.currentPirateChance=.95,t?.classList.add("hidden"),oe(),P())}),p?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",o.miningSession),console.groupEnd()}),v?.addEventListener("click",()=>{Is(),alert("Events cached locally. Future loads will honor this list.")}),S?.addEventListener("click",()=>{Rs(),alert("Event cache cleared. Future loads use the bundled data.")}),k?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),Kt||(document.addEventListener("keydown",w=>{w.key==="`"&&D(),w.key==="Escape"&&$.current!=="main"&&$.current!=="event"&&window.nav?.("main")}),Kt=!0)}let x=null,N=null,Qn=null,Zt=performance.now();async function Ir(){const e="/space/".replace(/\/+$/,"/"),t=f=>`${e}content/${f}`,[n,a,s,i,r,c,l,d,u]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!i.ok)throw new Error(`Failed to load commodities.json: ${i.status}`);if(!c.ok)throw new Error(`Failed to load enemies.json: ${c.status}`);if(!l.ok)throw new Error(`Failed to load events.json: ${l.status}`);if(!d.ok)throw new Error(`Failed to load loot_tables.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load missions.json: ${u.status}`);const p=await n.json();for(const f of p){const g=new Set(f.tags??[]);f.region&&g.add(f.region),f.security==="high"&&g.add("secure"),f.security==="low"&&g.add("lawless"),f.marketProfile?.blackMarket&&g.add("black_market");const C=f.economyTags??[];C.includes("mining")&&g.add("mining"),C.includes("salvage")&&g.add("salvage"),C.includes("checkpoint")&&g.add("checkpoint"),f.tags=Array.from(g)}const h=await a.json(),m=await s.json(),y=await i.json(),v=await r.json(),S=await c.json(),k=await fetch(t("bases.json"));if(!k.ok)throw new Error(`Failed to load bases.json: ${k.status}`);const M=await k.json(),E={};for(const f of p)E[f.id]=f;const D=await l.json();ks(D);const j=await d.json();js(j);const P=await u.json();Oa(P);const w={};for(const f of M)w[f.id]=f;return{systems:p,systemsById:E,bases:M,basesById:w,ships:h,components:m,commodities:y,weapons:v,enemies:S,events:D,lootTables:j,missions:P}}function Rr(){N||(N=document.createElement("canvas"),N.id="pixel-background",N.style.position="fixed",N.style.top="0",N.style.left="0",N.style.width="100vw",N.style.height="calc(100vw * 9 / 16)",N.style.maxHeight="100vh",N.style.maxWidth="calc(100vh * 16 / 9)",N.style.objectFit="contain",N.style.zIndex="0",N.style.pointerEvents="none",N.style.background="#02030b",N.style.imageRendering="pixelated",N.style.display="block",document.body.insertBefore(N,document.body.firstChild||null),Qn=N.getContext("2d"),mr(N))}function Dr(){const e=t=>{const n=t-Zt;Zt=t,fr(n),Kn(Qn,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function Br(){x=await Ir(),Rr();const e=Na(x.systems),t=tn();t.map=e,nn(t),gn(e),sn();const n=ia();if(n){const i=o.ship.hardpoints.length,r=[];for(let c=0;c<i;c++)r.push(n.weapons[c]??null);o.ship.weapons=r,o.inventory.weapons=n.inventory}it();const a=$.go.bind($);$.go=(i,r)=>{a(i,r),oe()};const s=$.setZoom.bind($);$.setZoom=i=>{$.zoom!==i&&(s(i),oe())},window.nav=(i,r={})=>{$.go(i,r)},$.current=o.player.hasChosenStarter?"main":"ship_select",oe(),Dr()}function J(e){return x?x.systemsById[e]??null:null}function Pr(e){return x?x.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{Br()});
