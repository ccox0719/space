(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Un=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling Interceptor",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],St=Un,W=St.find(e=>e.starter)??St[0],Yn=W?.hardpoints.length??0,Vn={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function Ut(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0}}let o;const Yt="cosmo_weapon_loadout";function Xn(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Yt);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function Qe(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:o.ship.weapons,inventory:o.inventory?.weapons??[]};window.localStorage.setItem(Yt,JSON.stringify(e))}function Vt(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1},ship:{templateId:W?.id??"none",name:W?.name??"Undefined Hull",hp:W?.hull??0,maxHp:W?.hull??0,shields:W?.shields??0,maxShields:W?.shields??0,fuel:W?.fuel??0,maxFuel:W?.fuel??0,cargoCapacity:W?.cargo??0,cargo:{},modules:[],weapons:W?.hardpoints.map(e=>Vn[`${e.size}:${e.type}`]??null)??Array(Yn).fill(null),weaponPower:12,evasion:5,maneuverRating:W?.maneuverRating??0,components:[],hardpoints:W?.hardpoints.map(e=>({...e}))??[],passive:W?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},intel:{systems:[]},runStats:Ut(),gameOver:{active:!1,reason:null},map:null}}function Xt(e){o=e}const Jt="space-dev-tune",H={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:1,miningPayoutMultiplier:1,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.4,enemyDamageMultiplier:.2,enemyAccuracyMultiplier:.6,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:70,nonPirateEventWeight:1,showEncounterDebug:0}};let I={...H};function Jn(e){return{...H.combat,...e}}function Ne(e){return{...e,enemyHpMultiplier:Math.min(H.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??H.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(H.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??H.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(H.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??H.combat.enemyAccuracyMultiplier))}}function Kt(){if(typeof window>"u"||!window.localStorage){I={...H};return}const e=window.localStorage.getItem(Jt);if(!e){I={...H,combat:Ne(H.combat)},we();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=Jn({...t.combat,...n});I={...H,...t,combat:Ne(a)},we()}catch{I={...H,combat:Ne(H.combat)},we()}}function we(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Jt,JSON.stringify(I))}function Zt(e){const t=I.progressionSpeedMultiplier??1;return e*t}function N(){return I.combat??H.combat}function Kn(){return o.ship.passive?.effects??{}}const Qt="cosmo_run_high_scores",en=5;function Zn(){return o?{...o.runStats,commodityVolumes:{...o.runStats.commodityVolumes}}:Ut()}function Qn(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function tn(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(Qt);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,en):[]}catch{return[]}}function ea(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Qt,JSON.stringify(e.slice(0,en)))}function ta(){return tn()}function na(e){const t=tn();t.push(e),t.sort((n,a)=>a.score-n.score),ea(t)}function be(e){if(!o||e<=0)return;o.runStats.creditsEarnedTotal+=e;const t=o.player.credits;t>o.runStats.highestNetWorth&&(o.runStats.highestNetWorth=t)}function aa(e,t,n){if(!o)return;o.runStats.tradeProfitTotal+=Math.max(0,n);const a=o.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const s=o.runStats.mostTradedCommodityId;(!s||a[e]>a[s])&&(o.runStats.mostTradedCommodityId=e)}function sa(e){!o||e<=0||(o.runStats.contractPayoutTotal+=e)}function ia(){o&&(o.runStats.contractsCompleted+=1)}function oa(e){!o||e<=0||(o.runStats.damageDealtTotal+=e)}function ra(e){!o||e<=0||(o.runStats.damageTakenTotal+=e)}function ca(){o&&(o.runStats.fightsSurvived+=1)}function la(){o&&(o.runStats.shipsDestroyed+=1)}function da(e,t){!o||e<=0||(o.runStats.miningRuns+=1,o.runStats.oreMinedTotal+=e,t&&(o.runStats.rareFinds+=1))}function ua(){o&&(o.runStats.jumpsMade+=1,o.runStats.systemsVisited+=1)}function pa(e){o&&(o.runStats.daysSurvived=Math.max(o.runStats.daysSurvived,e))}const v={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}};function ma(){return $?$.components:[]}function nn(){if(!$)return[];const e=o.ship.components;return $.components.filter(t=>e.includes(t.id))}function ha(){if(!$)return{};const e={};for(const t of nn())if(t.effects)for(const[n,a]of Object.entries(t.effects))typeof a=="number"&&(e[n]=(e[n]??1)*a);return e}function fa(e){if(!$)return!1;const t=$.components.find(n=>n.id===e);return t?o.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):o.ship.components.includes(e)?(console.warn("Component already installed."),!1):(o.player.credits-=t.cost,o.ship.components.push(e),ga(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function ga(e){const t=o.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function q(){const e=Kn(),t=ha(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const s of n){const i=typeof e[s]=="number"?e[s]:1,r=typeof t[s]=="number"?t[s]:1;a[s]=i*r}return a}function an(){const e=q(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,N().globalIncomeMultiplier??1);return t*n}const ya=-100,ba=100;function va(e,t){const n=o.reputation[e]||0,a=$a(n+t);return o.reputation[e]=a,a}function sn(e){for(const[t,n]of Object.entries(e))va(t,n)}function Ma(e){return o.reputation[e]||0}function $a(e){return Math.max(ya,Math.min(ba,e))}const qe={kinetic:{shields:.9,hull:1.1},thermal:{shields:1,hull:1},plasma:{shields:1.15,hull:1.05},EM:{shields:1.25,hull:.8}};function xa(){return $?$.weapons:[]}function on(){return o.inventory||(o.inventory={weapons:[]}),o.inventory}function et(){return[...on().weapons]}function tt(){if(!$)return;const e=et();if(!e.length)return;const t=o.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const s=e.filter(r=>nt(a,r));return s.length?s[Math.floor(Math.random()*s.length)]:n})}function nt(e,t){const n=o.ship,a=$?.weapons.find(i=>i.id===t);if(!a)return!1;const s=n.hardpoints[e];return s?a.size===s.size&&a.type===s.type:!1}function wa(e,t){return nt(e,t)?(o.ship.weapons[e]=t,Qe(),!0):!1}function z(e){return!e||!$?null:$.weapons.find(t=>t.id===e)??null}function Sa(e){const t=z(e);return!t||o.player.credits<t.price?!1:(on().weapons.push(e),o.player.credits-=t.price,Qe(),!0)}function rn(e,t,n={}){const a=e.tags||[];let s=e.accuracy*(n.accuracyMultiplier??1)||0;if(a.includes("accurate")&&(s+=.05),s=Math.min(.95,Math.max(0,s)),Math.random()>s)return 0;let i=e.damage;const r=t.shields>0?"shields":"hull",c=qe[e.damageType]?.[r]??1,l=r==="shields"?e.shieldMod:e.armorMod;return i*=l*c,r==="shields"&&a.includes("shield_breaker")&&(i*=1.2),r==="hull"&&a.includes("armor_piercing")&&(i*=1.2),Math.random()<e.critChance&&(i*=e.critMultiplier),i*=n.damageMultiplier??1,Math.max(0,Math.round(i))}const ka={kinetic:"Kinetic",thermal:"Thermal",plasma:"Plasma",EM:"EM"},Ca={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function kt(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const Ct={shields:"Shield-breaker",hull:"Hull buster"};function at(e){const t=e.damageType,n=qe[t]??qe.kinetic,a=kt(n.shields),s=kt(n.hull);let i="Balanced";a==="Strong"&&s==="Weak"?i=Ct.shields:s==="Strong"&&a==="Weak"?i=Ct.hull:a==="Strong"&&s==="Strong"&&(i="Devastating");const r=(e.tags||[]).map(c=>Ca[c]).filter(Boolean);return{role:i,vsShields:a,vsHull:s,typeLabel:ka[t]??t,tagNotes:r}}let cn=null;function ln(e){cn=e}function st(){return cn}function Ta(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function Se(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function Ea(e){const t=e.map(i=>({id:i.id,name:i.name,x:i.coords?.x??0,y:i.coords?.y??0,tags:i.tags??[]})),n=[],a=new Set;for(const i of e)for(const r of i.neighbors??[]){const c=Se(i.id,r.id);a.has(c)||(a.add(c),n.push({from:i.id,to:r.id,type:Ta(r.laneType),distance:Math.max(1,Math.round(r.distance??1))}))}const s={nodes:t,lanes:n};return ln(s),s}function it(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function _a(e,t,n){const a=n==="local"?1:3,s=new Map([[t,0]]);let i=[t];for(let r=1;r<=a;r++){const c=[];for(const l of i)for(const d of it(e,l))s.has(d)||(s.set(d,r),c.push(d));if(!c.length)break;i=c}return s}function ot(e,t,n){if(t===n)return[t];const a=[t],s=new Set([t]),i=new Map;for(;a.length;){const l=a.shift();for(const d of it(e,l))if(!s.has(d)&&(s.add(d),i.set(d,l),a.push(d),d===n))break}if(!s.has(n))return[];const r=[];let c=n;for(;c;)r.push(c),c=i.get(c);return r.reverse()}function Ia(e,t,n){const a=ot(e,t,n);return a.length?Math.max(0,a.length-1):null}let rt=[];function Da(e){rt=e}function Ra(e){return rt.find(t=>t.id===e)}function Ba(){const e=new Set(o.contracts.filter(t=>t.status==="active").map(t=>t.id));return rt.filter(t=>!e.has(t.id))}function ae(){return o.contracts.filter(e=>e.status==="active")}function Aa(e){const t=e.requirements,n=s=>s?`<strong>${Y(s)?.name||s}</strong>`:"",a=[];if(t?.travel?.systemId){const s=n(t.travel.systemId);a.push(`Travel to ${s}`)}if(t?.deliver?.commodityId){const s=t.deliver.quantity||0,i=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${s} ${t.deliver.commodityId}${i}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function Pa(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const s=n.deliveredQuantity||0;a.push(`Delivery: ${s}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function ct(e){const t=Ra(e);if(!t)return{success:!1,reason:"Unknown mission"};if(o.contracts.some(s=>s.id===e&&s.status==="active"))return{success:!1,reason:"Mission already active"};const n=Ua(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:o.time.turn,progress:{}};return o.contracts.push(a),n&&Ya(a.id,n),{success:!0}}function Fa(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,I.contractPayoutMultiplier??1)),s=an(),i=Math.max(0,q().incomeMultiplier??1),r=Math.max(0,Math.round(n.credits*a*s*i));o.player.credits+=r,be(r),sa(r),o.notifications.push(`Mission reward: +${r} credits.`)}if(n.rep){sn(n.rep);const a=Object.entries(n.rep).map(([s,i])=>`${s} ${i>=0?"+":""}${i}`).join(", ");a&&o.notifications.push(`Mission reward: Reputation updated (${a}).`)}if(n.weapon){const a=o.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),o.inventory=a;const s=z(n.weapon)?.name??n.weapon;o.notifications.push(`Rewarded weapon: ${s}.`)}}function La(){ae().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,I.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));o.time.turn-e.acceptedTurn>=a&&ja(e.id)}})}function ja(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",_e(`Mission failed: ${t.name}`),lt(t.id))}function Na(e){const t=o.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",_e(`Mission abandoned: ${t.name}`),lt(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function Ha(e){ae().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,fe(t)),t.requirements?.multiTravel?.length){const s=new Set(t.progress?.multiTravelVisited??[]);s.add(e),t.progress.multiTravelVisited=Array.from(s),fe(t)}})}function Oa(e,t,n){ae().forEach(a=>{const s=a.requirements?.deliver;if(!s||s.commodityId!==e||s.systemId&&s.systemId!==n)return;const i=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=i+t,fe(a)})}function Wa(e){ae().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,fe(t))})}function qa(e,t){Ha(t);const n=e.ship.cargo||={};let a=0;const s=[];for(const i of ae()){const r=i.status,c=i.requirements?.deliver;if(!c||!c.commodityId||(c.systemId??t)!==t||(a+=1,!Ga(n,c)))continue;c.retain||za(n,c),i.progress=i.progress||{};const d=i.progress.deliveredQuantity||0;i.progress.deliveredQuantity=d+(c.quantity||1),fe(i),r!=="completed"&&i.status==="completed"&&s.push(i.name)}if(s.length){const i=`Contracts completed: ${s.join(", ")}`;e.notifications.push(i)}return{checked:a,completed:s}}function Ga(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function za(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function fe(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,s=e.progress||{},i=e.requirements?.multiTravel,r=t?!!s.travelCompleted:!0,c=n?s.deliveredQuantity>=(n.quantity||0):!0,l=a?!!s.combatCompleted:!0,d=s.multiTravelVisited??[],u=i?i.every(p=>d.includes(p)):!0;r&&c&&l&&u&&(e.status="completed",Fa(e),ia(),_e(`Mission completed: ${e.name}`),lt(e.id))}function _e(e){o.notifications.push(e)}function Ua(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function Ya(e,t){const n=st();if(!n)return;const a=o.location.systemId,s=ot(n,a,t);!s.length||s.length<=1||v.setActiveRoute({nodes:s,currentIndex:0,source:"mission",missionId:e})}function lt(e){v.activeRoute?.missionId===e&&v.clearActiveRoute()}function Va(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",_e(`Mission failed (expired): ${n.name}`))}const dn="__global__",Xa={buyMultiplier:1,sellMultiplier:.85},Ja={basic:.9,standard:1,strategic:1.2,luxury:1.35};function Ie(){return o.ship.cargo||(o.ship.cargo={}),o.ship.cargo}function Ka(){const e=Ie();return Object.values(e).reduce((t,n)=>t+n,0)}function un(){return $?.commodities??[]}function K(e){return un().find(n=>n.id===e)??null}function V(){return o.marketState?(o.marketState.temporaryModifiers=o.marketState.temporaryModifiers||{},o.marketState.activeEvents=o.marketState.activeEvents||[],o.marketState.localAdjustments=o.marketState.localAdjustments||{},o.marketState.priceIntel=o.marketState.priceIntel||{},o.marketState.initialDriftSeeded=o.marketState.initialDriftSeeded??!1):o.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},o.marketState}function Za(e){o.intel||(o.intel={systems:[]});const t=o.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return o.intel.systems.push(n),n})();t.lastPriceSeenDay=o.time.day}function Qa(e){const t=V();let n=1;const a=t.temporaryModifiers[dn];a&&(n*=Math.max(0,a.multiplier));const s=t.temporaryModifiers[e];return s&&(n*=Math.max(0,s.multiplier)),n}function es(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function ts(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const s=n.imports?.includes(t.id),i=n.exports?.includes(t.id);return s&&(a*=1.2),i&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function dt(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(I.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function ns(e,t){const n=Math.max(1,t.basePrice),a=Ja[t.tier??"standard"]??1,s=e.marketModifiers?.[t.id]??1,i=ts(e,t),c=1+dt(t)*.08,l=Qa(t.id),d=os(e.id,t.id),u=fn(e.id,t.id),p=n*a*s*i*c*l*d*u;return Math.max(1,Math.round(p))}function pn(e,t){return G(e,t).base}function G(e,t){const n=Y(e),a=K(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const s=ns(n,a),i=a.baseSpread??Xa,r=dt(a),c=q(),l=Math.max(.1,Math.min(3,I.tradeProfitMultiplier??1)),d=an(),u=Math.max(.5,c.buyBonus??1),p=Math.max(0,c.sellBonus??1),m=Math.max(.5,c.marketTax??1),h=Math.max(1,Math.round(s*(i.buyMultiplier??1)*(1+r*.05)/l*u)),w=Math.max(1,Math.round(s*(i.sellMultiplier??.85)*Math.max(.6,1-r*.05)*l*d*p*m)),y=Math.max(1,Math.min(w,h-1)),x=Math.max(h,y,Math.round(s*(1+r*.1))),T=Math.max(1,Math.min(h,y,Math.round(s*Math.max(.65,1-r*.2)))),k=es(s,a.basePrice);return Za(e),{base:s,buy:h,sell:y,high:x,low:T,trend:k}}function Ge(e,t,n=2){const a=V(),s=e&&e.length?e:dn;a.temporaryModifiers[s]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function mn(e=1){if(typeof e=="number"){as(e);return}ss(e??o)}function as(e){if(e<=0)return;const t=V(),n=Object.keys(t.temporaryModifiers);for(const s of n){const i=t.temporaryModifiers[s];i.remainingTurns-=e,i.remainingTurns<=0&&delete t.temporaryModifiers[s]}const a=o.time.turn;t.activeEvents=t.activeEvents.filter(s=>s.expiresAtTurn>a),yn(t,.2*e)}function ss(e){const t=V(),n=$?.systems??[],a=$?.commodities??[],s=e.time.day;is(t,n,a);for(const i of n)for(const r of a){const c=fn(i.id,r.id),l=dt(r),d=I.marketDailyTrendStrength??1,u=(1-c)*.1*d,p=(Math.random()-.5)*.1*(.5+l)*d,m=gn(c+u+p);t.localAdjustments[i.id]||(t.localAdjustments[i.id]={}),t.localAdjustments[i.id][r.id]=m}t.activeEvents=t.activeEvents.filter(i=>!(i.expiresAtDay!==void 0&&s>=i.expiresAtDay||i.expiresAtTurn&&i.expiresAtTurn<=e.time.turn)),yn(t,.1)}function is(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const s of n){const i=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][s.id]=i}}e.initialDriftSeeded=!0}}function ke(e){return Ie()[e]??0}function os(e,t){return V().activeEvents.filter(a=>(a.expiresAtDay===void 0||o.time.day<a.expiresAtDay)&&a.expiresAtTurn>o.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,s)=>a*Math.max(0,s.multiplier),1)}function rs(e){V().activeEvents.push(e)}function cs(e){return V().activeEvents.filter(n=>n.expiresAtTurn>o.time.turn&&(n.expiresAtDay===void 0||o.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function ls(e){if(Math.random()>.08||!$?.commodities?.length)return;const n=$.commodities[Math.floor(Math.random()*$.commodities.length)],a=Math.ceil(3+Math.random()*3),s=1.15+Math.random()*.35,i={systemId:e,commodityId:n.id,multiplier:s,expiresAtTurn:o.time.turn+a,label:`${n.name} market shift x${s.toFixed(2)} (${a}t)`};rs(i),o.notifications.push(`Market shift in ${e}: ${n.name} prices x${s.toFixed(2)} for ${a} turns.`)}function hn(e,t,n,a,s){if(n<=0||a<=0)return;const r=n*a/5e3,c=Math.min(.15,.03*r),l=V();l.localAdjustments[e]||(l.localAdjustments[e]={});const d=l.localAdjustments[e][t]??1,u=s==="buy"?1+c:1-c,p=gn(d*u);l.localAdjustments[e][t]=p}function fn(e,t){return V().localAdjustments[e]?.[t]??1}function gn(e){return Math.min(2,Math.max(.5,e))}function yn(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[s,i]of Object.entries(a)){const r=i-1,c=i-r*t;Math.abs(c-1)<.01?delete a[s]:a[s]=c}Object.keys(a).length||delete e.localAdjustments[n]}}function ds(){const t=Y(o.location.systemId)?.neighbors.map(s=>Y(s.id)).filter(s=>!!s)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=vn();if(o.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};o.player.credits-=n;const a=V();return t.forEach(s=>{const i={};($?.commodities||[]).forEach(c=>{const l=G(s.id,c.id);i[c.id]={buy:l.buy,sell:l.sell}});const r={turn:o.time.turn,prices:i};a.priceIntel[s.id]=r}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function bn(){return V().priceIntel}function vn(){const t=Y(o.location.systemId)?.neighbors.map(c=>Y(c.id)).filter(c=>!!c)||[],n=80,a=t.map(c=>c.faction?Ma(c.faction):null).filter(c=>typeof c=="number"),s=a.length?a.reduce((c,l)=>c+l,0)/a.length:0,i=Tt(1-s/200,.5,1.4),r=Math.round(n*i);return Tt(r,40,140)}function Tt(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function ze(e,t,n){if(n<=0)return!1;const a=G(e,t).buy;if(a<=0)return!1;const s=a*n;if(o.player.credits<s)return!1;const i=o.ship.cargoCapacity;return i<=0?!1:Ka()+n<=i}function Ue(e,t,n){return n<=0?!1:ke(t)>=n}function Mn(e,t,n){if(!ze(e,t,n))return!1;const a=G(e,t).buy,s=a*n;o.player.credits-=s;const i=Ie();return i[t]=(i[t]||0)+n,hn(e,t,n,a,"buy"),!0}function ut(e,t,n){if(!Ue(e,t,n))return!1;const a=G(e,t).sell,s=a*n,i=Ie();return i[t]=Math.max(0,(i[t]||0)-n),o.player.credits+=s,be(s),aa(t,n,s),hn(e,t,n,a,"sell"),Oa(t,n,e),!0}function $n(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[s,i])=>{if(!i)return a;const r=G(t,s).sell;return a+r*i},0)}const Et={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function xn(e,t){if(!o||o.gameOver.active)return;const n=Zn(),a=Qn(n),s={score:a,reason:e,message:t??Et[e]??Et.other,location:o.location.systemId,stats:n};o.combat=null,o.miningSession=null,o.gameOver={active:!0,reason:e,message:s.message,summary:s};const i={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:s.message};na(i),v.go("gameover")}function wn(e=!1){const t=Vt();Xt(t),Kt(),v.go(e?"main":"ship_select")}const pt="space-events-cache";let ge=[];function us(e){const t=vs();ge=bs(e,t),Sn(ge)}function mt(e){return ge.find(t=>t.id===e)}function ps(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=N(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,q().anomalyChance??1),s=Math.min(1,Math.max(0,(I.eventFrequency??50)/100*a));if(Math.random()>s)return;const i=ge.map(l=>({ev:l,weight:xs(l,e)})).filter(l=>l.weight>0);if(!i.length)return;const r=i.reduce((l,d)=>l+d.weight,0);let c=Math.random()*r;for(const l of i)if(c-=l.weight,c<=0)return l.ev;return i[0].ev}function ms(e){const t=e.outcomes;if(!t)return{};const n={},a=q(),s=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),i=r=>{o.player.credits+=r,be(r),o.player.credits<0&&(o.player.credits=0)};if(t.giveCredits){const r=t.giveCredits.min??0,c=t.giveCredits.max??r,l=ue(r,c),d=Math.round(l*s);i(d),o.notifications.push(`Received ${d} credits.`)}if(typeof t.creditsDelta=="number"){const r=Math.round(t.creditsDelta*s);i(r)}if(typeof t.fuelDelta=="number"){const r=o.ship.maxFuel,c=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*s)):t.fuelDelta;o.ship.fuel=Math.max(0,Math.min(r,o.ship.fuel+c))}if(typeof t.turnDelta=="number"){const r=Zt(t.turnDelta);o.time.turn+=r,La(),mn(r)}if(t.cargoGain&&_t(Ms(t.cargoGain,s,1),1),t.cargoLoss&&_t(t.cargoLoss,-1),t.giveCommodity){const r=ue(t.giveCommodity.min,t.giveCommodity.max),c=Math.max(0,Math.round(r*s));Ye(t.giveCommodity.id,c),c>0&&o.notifications.push(`Collected ${c} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(o.inventory.weapons.push(t.giveWeapon),o.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const r=t.damageShip.min??0,c=t.damageShip.max??r,l=ue(r,c);if(o.ship.hp=Math.max(0,o.ship.hp-l),o.notifications.push(`Ship took ${l} damage.`),o.ship.hp<=0)return xn("ship_destroyed","Ship destroyed by event."),n}return t.applyStatus&&o.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&ct(t.spawnMissionId).success&&o.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&o.notifications.push(`Event flag: ${t.flag}`),t.modifyReputation&&sn({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function hs(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,I.eventRewardMultiplier??1))*Math.max(.1,q().eventRewardMultiplier??1);if(n.mining){const s=ue(n.mining.quantity.min,n.mining.quantity.max),i=Math.max(0,Math.round(s*a));Ye(n.mining.commodityId,i),o.notifications.push(`Mining yield: ${i} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const s=ue(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),i=o.ship.maxFuel;o.ship.fuel=Math.max(0,Math.min(i,o.ship.fuel-s)),o.notifications.push(`Anomaly drained ${s} fuel.`)}if(n.exploration?.lootTable?.length){const s=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];Ye(s,1),o.notifications.push(`Recovered loot: ${s}.`)}return n.market?.temporaryPriceBoost&&(o.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),Ge(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function fs(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(s=>s.expiresAtDay===void 0||t<s.expiresAtDay));const n=Math.min(1,Math.max(0,(I.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(I.marketCrashChance??5)/100));if(e.location?.systemId){const s=$?.commodities?.[Math.floor(Math.random()*($?.commodities.length||1))];if(s){const i=e.location.systemId,r=2+Math.ceil(Math.random()*2);if(Math.random()<n){const c=1.1+Math.random()*.35;Ge(s.id,c,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:Math.max(0,c),expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} surge`}),e.notifications.push(`Market surge in ${i}: ${s.name} prices x${c.toFixed(2)} for ${r} turns.`)}else if(Math.random()<a){const c=Math.max(.5,.85-Math.random()*.25);Ge(s.id,c,r),e.marketState.activeEvents.push({systemId:i,commodityId:s.id,multiplier:c,expiresAtDay:t+r,expiresAtTurn:e.time.turn+r*2,label:`${s.name} slip`}),e.notifications.push(`Market slip in ${i}: ${s.name} prices x${c.toFixed(2)} for ${r} turns.`)}}}}function gs(){Sn(ge)}function ys(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(pt)}function bs(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function vs(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(pt);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function Sn(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(pt,JSON.stringify(e))}function _t(e,t){for(const[n,a]of Object.entries(e)){const s=o.ship.cargo[n]??0,i=Math.max(0,s+a*t);o.ship.cargo[n]=i}}function Ms(e,t,n=1){const a={};for(const[s,i]of Object.entries(e)){if(i<=0){a[s]=i;continue}const r=Math.max(n,Math.round(i*t));a[s]=r}return a}function Ye(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,c)=>r+c,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));o.ship.cargo[e]=n+i,i<t&&o.notifications.push(`Cargo full: stored ${i}/${t} ${e}.`)}function ue(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,s=Math.ceil(n),i=Math.floor(Math.max(s,a));return i<=s?s:Math.floor(Math.random()*(i-s+1))+s}function $s(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function It(e,t){return e.has(t)}function xs(e,t){let n=e.weight??0;const a=$s(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(r=>a.has(r)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const i=Math.max(.1,I.eventDangerMultiplier??1);n*=i}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),It(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),It(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const s=ae().filter(i=>i.requirements?.travel?.systemId===t.to?.id);return s.length&&e.id==="smuggler_contact"&&(n+=.2*s.length),Math.max(0,n)}let Ve=[];function ws(e){Ve=e}function Ss(e,t=[]){const n=Ve.find(i=>i.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Ve.find(i=>(i.enemyTags||[]).some(r=>a.has(r)))??null}function Xe(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function ks(e){if(!e.length)return null;const t=e.reduce((a,s)=>a+(s.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function Cs(e,t){const n=N(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const s=e.min??0,i=e.max??s,r=Xe(s,i),c=Math.max(0,Math.round(r*a));o.player.credits+=c,t.creditsEarned+=c,be(c);break}case"commodity":{const s=Xe(e.min??1,e.max??e.min??1),i=Math.max(0,Math.round(s*a)),r=Ts(e.id||"unknown",i);r>0&&t.commodities.push({id:e.id||"unknown",qty:r});break}case"weapon":{e.id&&(o.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(o.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&ct(e.id).success&&t.missionsGranted.push(e.id);break}}}function Ts(e,t){const n=o.ship.cargo[e]??0,a=Object.values(o.ship.cargo).reduce((r,c)=>r+c,0),s=Math.max(0,o.ship.cargoCapacity-a),i=Math.max(0,Math.min(t,s));return o.ship.cargo[e]=n+i,i}function Es(e,t,n={},a=[]){const s=N(),i=Math.max(0,s.creditsRewardMultiplier??1)*Math.max(0,s.globalIncomeMultiplier??1),r=Math.max(0,Math.min(1,(s.lootDropChance??100)/100));if(Math.random()>r)return null;const c=Ss(e,a);if(!c)return null;const l=n.quickKill?1.5:1,d=n.lowDamageTaken?1.25:1,u={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},p=(h,w)=>{if(!h?.length||Math.random()>w)return;const y=ks(h);y&&Cs(y,u)};p(c.common,r),p(Dt(c.uncommon,d),.35*r);const m=Math.max(0,Math.min(1,(s.rareLootChance??12)/100));if(p(Dt(c.rare,l),m*r),c.guaranteed?.credits){const{min:h,max:w}=c.guaranteed.credits,y=Xe(h,w),x=Math.max(0,Math.round(y*i));o.player.credits+=x,u.creditsEarned+=x,be(x)}return u}function Dt(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}const Rt={damageMultiplier:1.25,accuracyMultiplier:.8},_s=.4,Is="Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.",Ds="Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.",$e={EM:{shield:1.25,hull:.85,description:"EM arcs overload shields quickly but bleed off against plated hulls."},thermal:{shield:1.1,hull:1,description:"Thermal beams melt shielding and stay reliable against exposed hull."},kinetic:{shield:.9,hull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},plasma:{shield:1.05,hull:1.15,description:"Plasma burns through both defenses and leaves hull plating glowing."}},Rs=Object.keys($e).map(e=>({type:e,shieldMultiplier:$e[e].shield,hullMultiplier:$e[e].hull,description:$e[e].description}));function Bs(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,s=t.cargoCapacity||0,i=As(t.weapons),r=Ps(t.modules),c=e.player?.credits??0,l=Math.log10(c+1)*5,d=n+a+i+r+s/2+l;return Math.max(1,Math.round(d))}function kn(e){const t=e/40;return t<0?0:t>1?1:t}function As(e){return e.reduce((t,n)=>{if(!n)return t;const a=z(n);if(!a)return t;const s=a.damage??0,i=a.accuracy??0,r=(a.critChance??0)*(a.critMultiplier??0);return t+s*1.5+i*.2+r},0)}function Ps(e){return!e||!e.length?0:e.length*5}function Fs(e){return $?$.systemsById[e]??null:null}function De(e,t){const n=Fs(e);return n?n.tags.includes(t):!1}const Ls=0,js=100;function Cn(e){const t=Math.max(Ls,Math.min(js,(o.player.wanted??0)+e));return o.player.wanted=t,t}function Ns(e,t,n){return Math.max(t,Math.min(n,e))}function Hs(e){const{systemId:t,state:n,sessionFactor:a}=e,s=$?.systems.find(M=>M.id===t),i=s?.security??"medium",r=N(),c=q();let l;switch(i){case"high":l=.02;break;case"low":l=.12;break;default:l=.06;break}s?.tags.includes("mining_belt")&&(l+=.02),s?.marketProfile?.blackMarket&&(l+=.03);const d=$n(n,t),u=fr(n.ship.templateId)?.cost??0,p=d+u,m=Math.min(.15,p/5e3)*Math.max(0,r.pirateCargoValueSensitivity??1),h=Os(n,t),w=a*.03,y=Math.max(0,Math.min(1,(r.pirateEncounterRateBase??0)/100)),x=Math.max(0,Math.min(1,(I.pirateEncounterRate??0)/100)),T=Math.max(0,(r.encounterChancePerJump??100)/100),k=Math.max(0,r.globalDangerMultiplier??1)*Math.max(0,c.pirateDetectionMultiplier??1);let f=(l+m+w+h+y+x)*k*T;return Ws(f,n,t)}function Os(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let s=0,i=0;for(const[l,d]of a){if(!d)continue;const u=G(t,l),p=K(l)?.basePrice??u.sell;if(p<=0)continue;const m=(u.sell-p)/p;s+=m*d,i+=d}if(i<=0)return 0;const r=s/i;return Ns(r*.2,0,.15)}function Ws(e,t,n){const a=kn(t.time.day),s=.4,r=s+(.75-s)*a;let c=e;return De(n,"core")?(c>.25&&(c=.25),c<.01&&(c=.01),c):(c>r&&(c=r),c<.01&&(c=.01),c)}const qs=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave — Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05}],Gs={belts:qs},Tn="pirate_cutter",zs=.5,Us=100,Bt=Gs,Re=9,Be=9,Ae=5;function Je(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function Ys(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,s]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-s);e.ship.cargo=n,t.accumulatedOre={}}function Ke(e,t,n){const a=e.ship.cargo||{},s=Object.values(a).reduce((c,l)=>c+l,0),i=Math.max(0,e.ship.cargoCapacity-s),r=Math.max(0,Math.min(n,i));return r>0&&(a[t]=(a[t]??0)+r,e.ship.cargo=a),e.notifications||(e.notifications=[]),r<n&&e.notifications.push(`Cargo constrained: stored ${r}/${n} ${t}.`),r}function ee(e,t,n){return Math.max(t,Math.min(n,e))}function En(e,t){const n=Math.max(1,pn(e,t)),a=Math.min(Us,n*zs);return Math.max(1,a)}function Vs(e){const t=Math.max(.1,I.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function _n(){const e=[];for(let t=0;t<Re;t++){const n=[];for(let a=0;a<Be;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function Xs(){const e=Math.floor(Math.random()*(Re-4))+2,t=Math.floor(Math.random()*(Be-4))+2,n=2+Math.floor(Math.random()*(Ae-2));return{row:e,col:t,depth:n}}function Js(e,t,n,a){const s=t-a,i=e-n;if(Math.sqrt(s*s+i*i)<.5)return null;const c=Math.atan2(i,s)*(180/Math.PI),l=c<0?c+360:c;return l>=337.5||l<22.5?"dir-e":l<67.5?"dir-se":l<112.5?"dir-s":l<157.5?"dir-sw":l<202.5?"dir-w":l<247.5?"dir-nw":l<292.5?"dir-n":"dir-ne"}function Ks(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function In(e,t){const n=t?Bt.belts.find(s=>s.id===t):null;if(n)return n;const a=Bt.belts.find(s=>s.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function ve(e,t,n,a,s){const i=In(t,n),r=Dn(e,i.id);if(s?.force&&(r.depletedUntilDay=void 0),r.depletedUntilDay!==void 0&&e.time.day<r.depletedUntilDay){e.notifications.push(`This belt is depleted. It will recover by day ${r.depletedUntilDay}.`);return}const c=0,l=_n(),{row:d,col:u,depth:p}=Xs();e.miningSession={active:!0,systemId:t,beltId:i.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:c,stability:i.stability.start,maxStability:i.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:l,gridRows:Re,gridCols:Be,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:d,veinCol:u,veinDepth:p,accumulatedOre:{},beltName:i.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[]}}function Zs(e,t){e.miningSession&&(e.miningSession.depth=ee(Math.round(t),1,Ae))}function Qs(e,t,n){for(let a=0;a<e.length;a++)for(let s=0;s<e[a].length;s++)e[a][s].selected=a===t&&s===n}function ei(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const s=In(a.systemId,a.beltId),i=ee(Math.round(t),0,Re-1),r=ee(Math.round(n),0,Be-1),c=ee(Math.round(a.depth??3),1,Ae);a.depth=c,a.grid=a.grid??_n(),a.drillsUsed=(a.drillsUsed??0)+1;const l=r-(a.veinCol??0),d=i-(a.veinRow??0),u=c-(a.veinDepth??3),m=Math.sqrt(l*l+d*d)*2.6+Math.abs(u)*1.5,h=Math.max(.2,1-a.drillsUsed*.04),w=(Math.random()*2-1)*h,y=10-m,x=ee(Math.round(y+w),0,10),T=Js(a.veinRow??0,a.veinCol??0,i,r),k=Ks(c,a.veinDepth??3),f=a.grid[i][r],M=!f.drilled;f.drilled=!0,f.signal=x,f.directionClass=T,f.depthHint=k.hint,f.depthClass=k.className,Qs(a.grid,i,r),a.selectedRow=i,a.selectedCol=r,M?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+x/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+x/50);const D=Math.max(0,I.miningThreatMultiplier??.7),b=3+c,_=Math.max(0,Math.round(b*D));a.threat=ee((a.threat??0)+_,0,100),a.currentPirateChance=(a.threat??0)/100;let A=Math.max(0,Math.round(x*.0025));x>0&&A===0&&(A=1);const L=a.resourceId??"aurite_ore",O=Ke(e,L,A);Je(a,L,O);const X=En(a.systemId,L),Z=Math.round(X*O);a.totalValueMined+=Z,a.lastYield={commodityId:L,amount:O,approxValue:Z,rareFind:null},a.lastMessage=`Pulse at X${r+1}, Y${i+1}, Z${c}: signal ${x}. Depth ${k.hint}. Threat +${_}%. Ore +${O}.`;const se=Math.random()*100;let ie=!1;const J=a.threat*.9;if(se<=J){ie=!0,a.runComplete=!0,a.active=!1;const oe=Dn(e,s.id);oe.depletedUntilDay=e.time.day+1,le(Tn,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:x,directionClass:T,depthHint:k.hint,fightTriggered:ie,threat:a.threat}}function ti(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const s=ee(Math.round(t.depth??3),1,Ae),i=a-(t.veinCol??0),r=n-(t.veinRow??0),c=s-(t.veinDepth??3),l=Math.sqrt(i*i+r*r+c*c),d=Math.random()*1.5-.75,u=ee(Math.round(10-l*2+d),0,10),p=1+Math.max(0,s-2)*.12,h=Math.max(0,Math.round((u+p)*.2)),w=Math.min(.4,(t.explorationScore??0)/25),y=Vs(t),x=Math.min(1,y+w);let k=Math.max(1,Math.round(h*x*(1+.1)));k=Math.max(1,Math.round(k*.5));const f=t.resourceId??"aurite_ore",M=Ke(e,f,k);Je(t,f,M);const D=En(t.systemId,f),b=Math.max(.05,I.miningPayoutMultiplier??.35);let _=Math.round(D*M*b),S=null;if(u>=6&&Math.random()<.1+w*.5){const ie=Math.max(1,Math.round(u/3)),J=Ke(e,"stellite_fragment",ie);if(J>0){S={id:"stellite_fragment",amount:J};const oe=Math.max(1,pn(t.systemId,S.id));_+=Math.round(oe*J*b),Je(t,S.id,J)}}t.totalValueMined+=_,t.lastYield={commodityId:f,amount:k,approxValue:_,rareFind:S},t.runComplete=!0,t.active=!1;const A=6+s*2,L=Math.max(0,I.miningThreatMultiplier??.7),O=Math.max(0,Math.round(A*L));t.threat=ee((t.threat??0)+O,0,100),t.currentPirateChance=(t.threat??0)/100,t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${s}: signal ${u}, efficiency ${(x*100).toFixed(0)}%, ore ${k} (${M} stored). Threat +${O}%.`;const X=Math.random()*100;let Z=!1;const se=t.threat*.9;return X<=se&&(Z=!0,le(Tn,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset."),da(M+(S?.amount||0),!!S),{signal:u,yieldAmount:M,commodityId:f,rareFind:S,fightTriggered:Z,threat:t.threat}}function ni(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function Dn(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(s=>s.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function ai(e,t){const n=e.miningSession;n&&(Ys(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function si(e){if(!$)throw new Error("Content has not been loaded.");const t=$.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function ii(e,t){return Math.floor(Math.random()*(t-e+1))+e}function R(e){const t=o.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}function oi(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function ri(e){return e??"main"}function ci(e,t){v.go(ri(e),t)}function le(e,t={}){const n=si(e),s=o.ship.weapons.map(()=>0),i=n.weaponIds.slice(),r=i.map(()=>0),c=N(),l=c.enemyHpMultiplier??1,d=Math.max(1,Math.round(c.enemyCountMin??1)),u=Math.max(d,Math.round(c.enemyCountMax??d)),p=Math.floor(Math.random()*(u-d+1))+d,m=Math.max(1,p);o.combat={enemyId:n.id,enemyName:n.name,enemyHp:Math.max(1,Math.round(n.hull*l*m)),enemyMaxHp:Math.max(1,Math.round(n.hull*l*m)),enemyShields:Math.max(0,Math.round(n.shields*l*m)),enemyMaxShields:Math.max(0,Math.round(n.shields*l*m)),enemyWeapons:i,enemyCooldowns:r,enemyTags:n.tags||[],enemyCount:m,playerCooldowns:s,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:o.ship.hp,round:1,log:[`${n.name} engages you in combat!`],adviceToken:Math.random(),returnTo:t.returnScreen,returnParams:t.returnParams},m>1&&o.combat.log.push(`Multiple bogies detected (${m} ships).`),v.go("combat")}function li(e){const t=di(e);le(t)}function di(e){if(!$?.enemies?.length)return"pirate_cutter";const t=Bs(o),n=kn(o.time.day),a=N(),s=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,o.time.day-1),i=Math.max(0,a.difficultyScalePerShipPower??1),r=t*i*s;let c=r*(.6+.2*n),l=r*(.9+.4*n);e&&De(e,"core")&&(c=t*.4,l=t*.8);const d=$.enemies.map(h=>({id:h.id,power:oi(h)})),u=d.filter(h=>h.power>=c&&h.power<=l);if(u.length)return u[Math.floor(Math.random()*u.length)].id;let p=d[0],m=Math.abs(d[0].power-t);for(const h of d){const w=Math.abs(h.power-t);w<m&&(p=h,m=w)}return p.id}function Pe(e,t,n="normal"){const a=o.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){R("You must choose a weapon to fire.");return}Rn(t,n);break;case"fire_all":ui(n);break;case"brace":pi();break;case"flee":if(mi())return;break}if(o.combat){if(a.enemyHp<=0){yi();return}if(hi(),!!o.combat){if(o.ship.hp<=0){bi();return}gi(),a.adviceToken=Math.random(),a.round+=1,a.totalRounds+=1}}}}function Rn(e,t){const n=o.combat;if(!n)return;const a=o.ship;if(e<0||e>=a.weapons.length){R("Invalid weapon slot.");return}const s=a.weapons[e];if(!s){R("That hardpoint is empty.");return}const i=z(s);if(!i){R("Missing weapon data.");return}const r=q(),c=n.round<=1,l={...i,critChance:Math.min(.95,(i.critChance??0)+(r.critBonus??0)+(c?r.critBonus??0:0))},d=n.playerCooldowns[e]??0;if(d>0){R(`${i.name} is still recharging (${d} turn${d===1?"":"s"}).`);return}const u={shields:n.enemyShields,hp:n.enemyHp},p=t==="called_shot"?Rt.damageMultiplier:1,m=t==="called_shot"?Rt.accuracyMultiplier:1,h=Mi(n.playerStance),w=rn(l,u,{accuracyMultiplier:m,damageMultiplier:p*h*(r.playerDamageBonus??1)});if(w<=0){const k=t==="called_shot"?"called shot goes wide":"misses";R(`You fire ${i.name}, but it ${k}.`),n.playerCooldowns[e]=i.cooldown;return}oa(w);let y=w;if(n.enemyShields>0){const k=Math.min(n.enemyShields,y);n.enemyShields-=k,y-=k}y>0&&(n.enemyHp=Math.max(0,n.enemyHp-y));const x=u.shields>0?"shields":"hull",T=t==="called_shot"?"called shot":"normal shot";R(`You strike the ${n.enemyName}'s ${x} with ${i.name} (${T}) for ${w} damage.`),w>0&&i.tags?.includes("disruptor")&&(n.enemyStatus.weaponJammedTurns=Math.min(2,n.enemyStatus.weaponJammedTurns+1),R(`${n.enemyName}'s weapons are disrupted!`)),n.playerCooldowns[e]=i.cooldown}function ui(e){const t=o.combat;if(!t)return;const a=o.ship.weapons.map((s,i)=>({id:s,idx:i})).filter(({id:s,idx:i})=>!!s&&(t.playerCooldowns[i]??0)<=0).map(s=>s.idx);if(!a.length){R("No weapons are ready to fire.");return}for(const s of a){if(!o.combat||o.combat.enemyHp<=0)break;Rn(s,e)}}function pi(){const e=o.combat;e&&(e.playerBracing=!0,R("You brace for impact, diverting power to shields and hull integrity."))}function mi(){const e=o.combat;if(!e)return!1;if(!e.canEscape)return R("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4,n=e.playerStance==="assault"?-.1:e.playerStance==="evasive"?.15:0,a=(o.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),i=Ce((a-40)*.01,-.15,.15),r=N(),c=q(),l=(r.fleeSuccessBonus??0)/100+(c.fleeBonus??0),d=Ce(t+n+i+l,.05,.95);return Math.random()<=d?(R(`You punch the thrusters and break free! (Flee chance ${(d*100).toFixed(0)}%)`),o.combat=null,ai(o,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),v.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(R(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(d*100).toFixed(0)}%)`),!1)}function hi(){const e=o.combat;if(!e)return;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,R("Enemy weapons are jammed this round!");return}const t=[];if(e.enemyWeapons.forEach((m,h)=>{const w=e.enemyCooldowns[h]??0;m&&w<=0&&t.push(h)}),t.length===0){R(`The ${e.enemyName} reloads while you advance.`);return}const n=t[ii(0,t.length-1)],a=e.enemyWeapons[n],s=z(a);if(!s){R(`The ${e.enemyName} fumbles its weapon.`);return}const i={shields:o.ship.shields,hp:o.ship.hp},r=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),c=N(),l=q(),d=e.round<=1;let u=rn(s,i,{accuracyMultiplier:Math.max(0,(1-r)*(c.enemyAccuracyMultiplier??1)*Math.max(0,1-(l.dodgeBonus??0))*(d?Math.max(0,1-(l.dodgeBonus??0)):1))});if(u=Math.max(0,Math.round(u*(c.enemyDamageMultiplier??1))),e.enemyCount&&e.enemyCount>1&&(u=Math.max(0,Math.round(u*e.enemyCount))),u<=0){R(`The ${e.enemyName} fires ${s.name}, but misses.`),e.enemyCooldowns[n]=s.cooldown;return}e.playerBracing&&(u=Math.round(u*_s)),u=Math.max(0,Math.round(u*$i(e.playerStance))),u=Math.max(0,Math.round(u*(c.playerDamageTakenMultiplier??1)*Math.max(.1,l.damageTakenMultiplier??1)*(d?Math.max(.1,l.damageTakenMultiplier??1):1)));let p=u;if(e.playerStatus.shieldBoost>0){const m=Math.min(e.playerStatus.shieldBoost,p);e.playerStatus.shieldBoost-=m,p-=m}if(o.ship.shields>0){const m=Math.min(o.ship.shields,p);o.ship.shields-=m,p-=m}p>0&&(o.ship.hp=Math.max(0,o.ship.hp-p)),R(`The ${e.enemyName} hits you with ${s.name} for ${u} damage.`),ra(u),e.enemyCooldowns[n]=s.cooldown}function fi(){const e=o.combat;if(!e)return null;const t=e.enemyCooldowns.length>0?e.enemyCooldowns.map(c=>c??Number.MAX_SAFE_INTEGER):[Number.MAX_SAFE_INTEGER],n=Math.min(...t),a=[];if(n<=1){const c=Ce(.6+(1-n)*.2,.65,.95);a.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${n} turn${n===1?"":"s"}—brace to soften the incoming blow.`,suggestion:"brace",confidence:c})}if(e.enemyShields<=0){const l=e.playerCooldowns.filter(u=>u<=0).length/Math.max(1,o.ship.weapons.length),d=Ce(.6+l*.3,.6,.9);a.push({text:"Shields down—called shots are primed to shatter the hull before the enemy recovers.",suggestion:"assault",confidence:d})}o.ship.hp/o.ship.maxHp<.4&&a.push({text:"Hull integrity is low—brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),a.push({text:"Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const s=((e.adviceToken??Math.random())+e.round*.13)%1,i=Math.floor(s*a.length),r=a[i];return{...r,confidence:r.confidence}}function gi(){const e=o.combat;e&&(e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0),e.enemyCooldowns=e.enemyCooldowns.map(t=>t>0?t-1:0),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)))}function yi(){const e=o.combat;if(!e)return;R(`The ${e.enemyName} explodes under your punishing fire. Victory is yours.`);const t=Math.max(0,e.startingHp-o.ship.hp),n=e.totalRounds<=3,a=t<=5,s=Es(e.enemyId,e.enemyName,{quickKill:n,lowDamageTaken:a},e.enemyTags||[]);if(s){o.lastBattleResult=s;const i=[];s.creditsEarned&&i.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&i.push(`Cargo: ${s.commodities.map(r=>`${r.qty} ${r.id}`).join(", ")}`),s.weapons.length&&i.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&i.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&i.push(`Missions: ${s.missionsGranted.join(", ")}`),R(`Loot recovered — ${i.join(" | ")||"nothing notable."}`),n&&R("Because you won quickly, salvage yields are richer."),a&&R("Minimal hull damage preserved more intact cargo.")}else R("No notable loot recovered.");if(ca(),la(),Wa(e.enemyId),e.enemyTags?.some(i=>/pirate|raider/i.test(i))||e.enemyId.includes("pirate")||e.enemyId.includes("raider")){const i=N().repGainMultiplier??1;Cn(Math.round(3*i))}o.combat=null,ci(e.returnTo,e.returnParams)}function bi(){R("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),o.ship.hp=0,o.ship.shields=0,o.combat=null,o.notifications.push("Critical failure — hull integrity dropped to zero."),xn("ship_destroyed","Ship destroyed in combat.")}function vi(e){const t=o.combat;t&&(t.playerStance=e,R(`Stance changed to ${e.charAt(0).toUpperCase()+e.slice(1)}.`))}function Mi(e){switch(e){case"assault":return 1.15;case"evasive":return .8;default:return 1}}function $i(e){switch(e){case"assault":return 1.1;case"evasive":return .7;default:return 1}}function Ce(e,t,n){return Math.max(t,Math.min(n,e))}function xi(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function wi(e,t){Si(e,t).lastRiskSeenDay=e.time.day}function Si(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(s=>s.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function ki(e){e.time.day+=1,pa(e.time.day),mn(e),fs(e),Va(e),xi(e),ni(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{Ri(e)};function Bn(){return $?$.systemsById:null}function An(e){const t=Bn();return t?t[e]??null:null}function Ci(e,t){return e.neighbors.find(n=>n.id===t)??null}let ht=0,At=1;function Ti(e){e!==At&&(At=e,ht=0)}function ft(e){return e<=0?!1:ht<e}function gt(){ht+=1}function ce(e){N().showEncounterDebug&&o.notifications.push(`Encounter debug: ${e}`)}function Fe(){return An(o.location.systemId)}function Ei(){const e=Fe();if(!e)return[];const t=Bn();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:Pn(e,a,n)}:null}).filter(n=>n!==null):[]}function Pn(e,t,n){const a=q(),s=(e.baseDanger+t.baseDanger)/2,i={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},r=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,c=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,l=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,d=(i[e.region]??0)+(i[t.region]??0),u=Math.max(1,Math.round(n.distance*c+Math.max(0,d)*2)),p=Te(.1*n.distance+s*.12+l+d+(n.laneType==="wildspace"?.05:0),.1,.95),m=Math.min(.95,Math.max(.1,p)),h=Math.max(0,m-Math.max(0,a.hazardDetectionBonus??0)),w=Math.max(1,Math.round(n.distance*r*(1+s*.06))),y=Math.max(1,Math.round(w*Math.max(.1,a.fuelCostMultiplier??1))),x=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:u,fuelCost:y,hazardChance:h,hazardMitigation:Math.max(0,m-h),routeType:x,laneType:n.laneType,distance:n.distance}}function Te(e,t,n){return Math.max(t,Math.min(n,e))}function Fn(e){const t=o.ship.cargo||{};let n=0,a=0,s=0;for(const[r,c]of Object.entries(t)){if(!c)continue;const l=K(r);if(!l||l.legalStatus!=="illegal"&&l.legalStatus!=="restricted")continue;const d=G(e.id,r);s+=d.sell*c,l.legalStatus==="illegal"?n+=c:a+=c}const i=n+a;return i<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:i,estimatedValue:s}}function _i(e,t,n,a=q()){let s=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(s*=.65),t.tags.includes("restricted")&&(s+=.12),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(s+=.08),n==="trade_lane"&&(s+=.06);const i=1+Math.min(1.5,e.illegalUnits*.1+e.restrictedUnits*.04),r=Math.max(0,a.scanDetectionMultiplier??1),c=Math.max(.5,a.illegalTolerance??1);return Te(s*i*r/c,0,.95)}function Ii(e,t){const n=Fn(e);if(!n)return!1;const a=q(),s=_i(n,e,t.routeType,a);if(Math.random()>s)return!1;const i=o.ship.cargo||{};let r=0;for(const[p,m]of Object.entries(i)){if(!m)continue;const h=K(p);h&&(h.legalStatus!=="illegal"&&h.legalStatus!=="restricted"||(r+=m,i[p]=0))}o.ship.cargo=i;const c=Math.max(25,Math.round(n.estimatedValue*.35)),l=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,d=c+l;o.player.credits=Math.max(0,o.player.credits-d);const u=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25));return Cn(u),o.notifications.push(`Checkpoint scans flag contraband. Seized ${r} units, fined ${d} credits, wanted +${u}.`),!0}function Di(e,t,n,a){const s=Te((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),i=Te(t,0,.95),r=Math.max(0,Math.round((s-i)*100));r>0&&o.notifications.push(`Hazard scanners trimmed travel risk by ${r}% (current hazard ${(i*100).toFixed(0)}%).`)}function Ri(e){const t=Fe();if(!$||!t)return;const n=Ci(t,e);if(!n){console.warn(`System ${e} is not a neighbor of ${t.id}`);return}const a=An(e);if(!a)return;const s=Pn(t,a,n),i=Math.max(0,I.fuelCostMultiplier??1),r=Math.max(0,Math.round(s.fuelCost*i)),c=Math.max(0,Math.min(3,(I.travelRiskScaling??100)/100)),l=N(),d=Math.max(0,l.globalDangerMultiplier??1),u=Math.min(.95,Math.max(0,s.hazardChance*c*d)),p={...s,fuelCost:r,hazardChance:u};if(o.ship.fuel<p.fuelCost){console.warn("Not enough fuel to travel.");return}o.ship.fuel-=p.fuelCost,o.location.systemId=a.id,o.location.docked=!0,v.advanceActiveRoute(a.id);const m=Zt(s.travelTime);o.time.turn+=m,ls(a.id),ki(o),Ti(o.time.day),wi(o,a.id),ua();const h=qa(o,a.id);h.completed.length&&console.log(`Arrived at ${a.id}: checked ${h.checked} contracts, completed ${h.completed.join(", ")}.`);const w=Number.isInteger(m)?m.toFixed(0):m.toFixed(2),y=Math.abs(m-1)<.01?"":"s",x=`Arrived at ${a.name} after a ${p.routeType.replace("_"," ")} (${w} turn${y}).`;Di(s,p.hazardChance,c,d),Ii(a,p)&&ce("Contraband inspection triggered on arrival."),!Ai(a)&&(Pi(a)||Bi(t,a,p,x)||v.go("main",{message:x}))}function Bi(e,t,n,a){const s=N(),i=Math.max(0,(s.encounterChancePerJump??100)/100),r={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*i),routeType:n.routeType},c=ji(t)??ps(r);return c?(ce(`Travel event triggered: ${c.name||c.id||"unknown"}`),c.type==="mining"?(ce(`Mining event surfaced: ${c.id}`),v.go("event",{eventId:c.id}),!0):!c.choices||c.choices.length===0?(ce(`Auto-resolving event: ${c.name||c.id||"unknown"}`),Fi(c,a)):(v.go("event",{eventId:c.id}),!0)):(v.go("main",{message:`${a} — Uneventful transit.`}),!0)}function Ai(e){const t=N(),n=Math.max(0,t.maxEncountersPerDay??0);if(!ft(n))return!1;const a=Hs({systemId:e.id,state:o,sessionFactor:1});if(Math.random()<=a){gt();const s=`Pirates intercept you near ${e.name}!`;return o.notifications.push(s),ce(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),li(e.id),!0}return!1}function Pi(e){const t=N(),n=Math.max(0,t.maxEncountersPerDay??0);if(!ft(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const s=Math.max(0,(t.encounterChancePerJump??100)/100),i=e.security==="high"?1.15:e.security==="low"?.65:1,r=q(),c=Fn(e),l=c?1+Math.min(1.2,c.totalUnits*.02):1,d=Math.max(0,r.scanDetectionMultiplier??1)/Math.max(.5,r.illegalTolerance??1),u=Math.min(1,a*s*i*l*d);if(Math.random()<=u){gt();const p=`Patrol intercepts you near ${e.name}!`;return o.notifications.push(p),ce(`Patrol encounter triggered near ${e.name} (chance ${u.toFixed(3)})`),le("navy_interceptor"),!0}return!1}function Fi(e,t){const n=hs(e);if(n.triggerCombat?.enemyId){const a=N(),s=Math.max(0,a.maxEncountersPerDay??0);if(!ft(s))return v.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;gt();const i=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return ce(i),le(n.triggerCombat.enemyId),!0}return v.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const Li={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function ji(e){const t=Ni(e);return t?mt(t)??null:null}function Ni(e){const t=[],n=new Set(e.tags||[]),a=s=>{t.includes(s)||t.push(s)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(Li[e.id]??"mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),t.length?t[Math.floor(Math.random()*t.length)]:null}function U(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}window.nav=(e,t={})=>{v.go(e,t)};function Hi(){const e=o,t=Y(e.location.systemId),n=(()=>{const r=(t?.description??"Unknown space").trim(),c=r.split(".")[0];return c===r?r:`${c}.`})(),a=Object.values(e.ship.cargo||{}).reduce((r,c)=>r+c,0),s=e.notifications[e.notifications.length-1],i=(e.notifications||[]).slice(-5).reverse();return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${t?.name??e.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${e.time.day}</span>
          <span>Turn ${U(e.time.turn)}</span>
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
            ${De(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}window.attackPirateBase=e=>{const t=Oi(e);if(!t){console.warn(`Unknown base ${e}`);return}v.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function Oi(e){return $?$.basesById[e]??null:null}function Wi(e){return $?Object.values($.basesById).find(n=>n.systemId===e)??null:null}function qi(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}window.setMapZoom=e=>{v.setZoom(e)};window.focusRoute=e=>{v.go("travel",{...v.params,focusTargetId:e})};function Gi(){const e=Fe(),t=Ei(),n=v.zoom||"local",a=typeof v.params.focusTargetId=="string"?v.params.focusTargetId:"",s=v.activeRoute,i=s?.nodes[s.currentIndex+1],r=s&&s.nodes.length>1?s.nodes.map(y=>Y(y)?.name??y).join(" → "):"",c=Object.values(o.ship.cargo||{}).reduce((y,x)=>y+x,0),l=t.map(({profile:y})=>y.hazardChance).reduce((y,x)=>Math.max(y,x),0),d=Math.round((l||0)*100);if(!e)return`
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
    `;const u=e?Wi(e.id):null,p=qi(u),m=u?`
      <div class="panel-card">
        <p class="label">${p}</p>
        <p class="muted">${u.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${u.id}')">
          Attack Pirate Base (Tier ${u.tier})
        </button>
      </div>
    `:"",h=e?Ji(e,t,n,a,s):"",w=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:y,route:x,profile:T})=>{const k=y.id===a,f=y.id===i,M=zi(y.security),D=Ui(y),b=Vi(T.hazardChance),_=`${T.fuelCost} fuel`,S=`${T.travelTime} turn${T.travelTime===1?"":"s"}`,A=Xi(x.laneType),L=`Distance: ${x.distance}`,O=D.join(" | "),X=["travel-row"];return(k||f)&&X.push("travel-row--focused"),`
              <article class="${X.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${y.name}</span>
                  <span class="travel-row__label">${M}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${A}</span>
                    <span>${L}</span>
                  </div>
                  <span class="travel-row__label">${_} | ${S} | Risk: ${b}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${y.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${y.id}')">Jump to ${y.name}</button>
                </div>
                <span class="travel-row__label">${O}</span>
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
          <span>Turn ${U(o.time.turn)}</span>
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
  `}function zi(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function Ui(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(Yi)}function Yi(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function Vi(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function Xi(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function Ji(e,t,n,a,s){if(!e)return'<p class="muted">Map data unavailable.</p>';const i=320,r=200,c=16,l=36,d=8,u=8,p=st(),m=p&&a?ot(p,e.id,a):[],h=s?.nodes??[],w=new Set([e.id]);a&&w.add(a),(p?it(p,e.id):t.map(({system:g})=>g.id)).forEach(g=>w.add(g)),h.forEach(g=>w.add(g)),m.forEach(g=>w.add(g));const x=g=>g.laneType==="core_lane"?"core":g.laneType==="frontier_lane"?"frontier":"wild",T=p?_a(p,e.id,n):null,k=[],f=[];if(p&&T){const g=new Map(p.nodes.map(P=>[P.id,P])),B=new Set(T.keys());T.forEach((P,te)=>{const Q=g.get(te);Q&&k.push({...Q,depth:P})}),p.lanes.filter(P=>B.has(P.from)&&B.has(P.to)).forEach(P=>{const te=Math.max(T.get(P.from)??0,T.get(P.to)??0);f.push({...P,depth:te})})}else{const g=new Set;k.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),g.add(e.id),t.forEach(({system:B,route:P})=>{g.has(B.id)||(k.push({id:B.id,name:B.name,x:B.coords?.x??0,y:B.coords?.y??0,tags:B.tags??[],depth:1}),g.add(B.id),f.push({from:e.id,to:B.id,type:x(P),distance:P.distance,depth:1}))})}if(!k.length)return'<p class="muted">No coordinate data to render.</p>';const M=k.map(g=>g.x),D=k.map(g=>g.y),b=Math.min(...M),_=Math.max(...M),S=Math.min(...D),A=Math.max(...D),L=_-b||1,O=A-S||1,X=g=>c+(g-b)/L*(i-c*2),Z=g=>r-(c+(g-S)/O*(r-c*2)),se=new Map(k.map(g=>[g.id,{...g,sx:X(g.x),sy:Z(g.y)}])),ie=new Set(k.map(g=>g.id)),J=new Set(h);m.forEach(g=>J.add(g)),!p&&a&&J.add(a);const oe=new Set,xt=g=>{for(let B=0;B<g.length-1;B++)oe.add(Se(g[B],g[B+1]))};xt(h),m.length?xt(m):a&&oe.add(Se(e.id,a));const Wn=f.filter(g=>ie.has(g.from)&&ie.has(g.to)).map(g=>{const B=se.get(g.from),P=se.get(g.to);if(!B||!P)return"";const te=Se(g.from,g.to),Q=g.depth??Math.max(B.depth??0,P.depth??0),Me=oe.has(te),Le=Me?3.2:Q<=1?2.2:1.2,je=Me?1:Q<=1?.9:.35;return`<line x1="${B.sx.toFixed(1)}" y1="${B.sy.toFixed(1)}" x2="${P.sx.toFixed(1)}" y2="${P.sy.toFixed(1)}" stroke="${Ki(g.type)}" stroke-width="${Le}" stroke-linecap="round" opacity="${je}"></line>`}).join(""),qn=Array.from(se.values()).map(g=>{const B=g.id===e.id,te=(g.depth??0)<=1,Q=J.has(g.id),Me=B?7:Q?6:te?5:3.5,Le=B?"#4CE6C3":Q?"#7dd3fc":"#ffffff",je=Q||te?1:.45,wt=w.has(g.id),Gn=g.name.length>16?`${g.name.slice(0,14)}...`:g.name,zn=wt?Gn:"";return`
        <g>
          <circle
            cx="${g.sx.toFixed(1)}"
            cy="${g.sy.toFixed(1)}"
            r="${Me}"
            fill="${Le}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${je}"
          ></circle>
          ${wt?`<text x="${(g.sx+d).toFixed(1)}" y="${(g.sy-u).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${zn}</text>`:""}
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
        ${Wn}
        ${qn}
      </svg>
    </div>
  `}function Ki(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const Pt={high:"^",low:"v",stable:"-"};function Zi(e={}){const t=Y(o.location.systemId);if(!t)return`
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
    `;const n=un();if(!n.length)return`
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
    `;const a=Object.values(o.ship.cargo||{}).reduce((f,M)=>f+M,0),s=Object.entries(o.ship.cargo||{}).filter(([,f])=>f>0).sort((f,M)=>M[1]-f[1]).slice(0,5),i=new Map;ae().filter(f=>f.status==="active").forEach(f=>{const M=f.requirements?.deliver;if(!M?.commodityId)return;const D=i.get(M.commodityId)??{needed:0,deliverable:!1},b=ke(M.commodityId)>=(M.quantity||0),_=!M.systemId||M.systemId===o.location.systemId;i.set(M.commodityId,{needed:D.needed+(M.quantity||0),deliverable:D.deliverable||_&&b})});const r=n.map(f=>{const M=G(t.id,f.id),D=ao(f.tradeTags?.length?f.tradeTags:f.tags),b=ke(f.id),_=so(f,b),S=Ln(M.buy,a,f.id);return{commodity:f,quote:M,tags:D,cargoQty:b,metaLine:_,maxBuyable:S,profit:M.sell-M.buy}}),c=r.reduce((f,M)=>M.profit>f.value?{id:M.commodity.id,value:M.profit}:f,{id:r[0]?.commodity.id??"",value:Number.NEGATIVE_INFINITY}).id,l=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,d=r.find(f=>f.commodity.id===l)||r.find(f=>f.commodity.id===c)||r[0],u=r.map(({commodity:f,quote:M,tags:D,cargoQty:b},_)=>{const S=d?.commodity.id===f.id,A=f.id===c;ze(t.id,f.id,1),Ue(t.id,f.id,1);const L=i.get(f.id),O=["market-row"];S&&O.push("market-row--highlight");const X=L?`<span class="contract-pill contract-pill--target${L.deliverable?" ready":""}">${L.deliverable?"Deliver now":"Contract target"}</span>`:"",Z=A?'<span class="contract-pill">Top margin</span>':"";return`
        <article class="${O.join(" ")}" style="--row-index:${_};" onclick="selectMarketCommodity('${f.id}')">
          <div class="market-row__main">
            <span class="market-row__name">${f.name}</span>
            <span class="market-row__info">
              BUY ${M.buy} · SELL ${M.sell} · Held ${b}
            </span>
          </div>
          <div class="market-row__meta">
            <span class="market-row__trend">${Pt[M.trend]} ${M.trend}</span>
            <span>${D||"Local goods"}</span>
            ${Z}
            ${X}
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
          <strong>${U(o.time.turn)}</strong>
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
        Credits: ${o.player.credits} | Cargo: ${Qi()}
      </p>
      <div class="market-summary__cargo">
        ${s.length?s.map(([f,M])=>{const D=K(f),b=D?.mass??0,_=b?` (Mass ${Math.round(b*M)})`:"";return`<span>${M} × ${D?.name||f}${_}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${p?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,h=d?ze(t.id,d.commodity.id,1):!1,w=d?Ue(t.id,d.commodity.id,1):!1,y=d&&h?"":" disabled",x=d&&d.maxBuyable>1&&h?"":" disabled",T=d&&w&&d.cargoQty>0?"":" disabled",k=d?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${d.commodity.name}</strong>
        <span class="market-row__trend">${Pt[d.quote.trend]} ${d.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${d.quote.buy} · SELL ${d.quote.sell}</span>
        <span>${d.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${y}
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
          ${T}
          onclick="sellCommodityAction('${d.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${T}
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
          <span>Turn ${U(o.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${m}
            ${eo(t.id)}
            ${to(t)}
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
  `}function Qi(){const e=o.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${o.ship.cargoCapacity}`}function eo(e){const t=cs(e);return t.length?`
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
    `}function to(e){const t=bn(),n=vn(),s=(e?.neighbors.map(i=>Y(i.id)).filter(i=>!!i&&t[i.id])||[]).map(i=>{const r=no(e?.id,i.id),c=o.time.turn-(t[i.id]?.turn??o.time.turn),l=r.over?`${r.over.id} overpriced (+${Math.round(r.over.delta*100)}%)`:"no strong overpay",d=r.under?`${r.under.id} underpriced (${Math.round(r.under.delta*100)}% cheaper)`:"no standout bargains";return`<p class="muted">${i.name} (age ${c}t): Sell -> ${l} | Buy -> ${d}</p>`}).join("");return`
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (${n} cr, varies with rep). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${n})</button>
      </div>
      ${s||'<p class="muted">No neighbor intel purchased yet.</p>'}
    </div>
  `}function no(e,t){if(!e)return{over:null,under:null};const a=bn()[t];if(!a)return{over:null,under:null};let s=null,i=null;const r=Math.max(0,o.time.turn-a.turn),c=Math.max(.5,1-r*.05);for(const[l,d]of Object.entries(a.prices)){const u=G(e,l);if(u.sell>0&&d.buy>u.sell){const p=(d.buy-u.sell)/u.sell*c;(!s||p>s.delta)&&(s={id:l,delta:p})}if(u.buy>0&&d.sell<u.buy){const p=(u.buy-d.sell)/u.buy*c;(!i||p>i.delta)&&(i={id:l,delta:p})}}return{over:s,under:i}}function Ln(e,t,n){if(e<=0)return 0;const a=Math.floor(o.player.credits/e),s=Math.max(0,o.ship.cargoCapacity-t);return Math.max(0,Math.min(a,s))}function ao(e){return e?.length?Array.from(new Set(e)).map(n=>yt(n.replace(/_/g," "))).join(" | "):""}function so(e,t){const n=yt(e.tier||"standard"),a=io(e.legalStatus||"legal"),s=typeof e.mass=="number"?`${e.mass}t`:null,i=[`Held ${t}`,`Tier ${n}`,a];return s&&i.push(`Mass ${s}`),i.join(" | ")}function yt(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function io(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??yt(e)}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=o.location.systemId,n=K(e),a=Mn(t,e,1),s=G(t,e).buy,i=document.getElementById("market-message");i&&(i.textContent=a?`Bought 1 ${n?.name||e} for ${s} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=o.location.systemId,n=K(e),a=ut(t,e,1),s=G(t,e).sell,i=document.getElementById("market-message");i&&(i.textContent=a?`Sold 1 ${n?.name||e} for ${s} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=o.location.systemId,a=o.ship.cargo||{},s=Object.values(a).reduce((l,d)=>l+d,0),i=Ln(t,s);if(i<=0){nav("market");return}Mn(n,e,i);const r=K(e),c=document.getElementById("market-message");c&&(c.textContent=`Bought ${i} ${r?.name||e} for ${t*i} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=o.location.systemId,n=ke(e);if(n<=0){nav("market");return}const a=G(t,e).sell;ut(t,e,n);const s=K(e),i=document.getElementById("market-message");i&&(i.textContent=`Sold ${n} ${s?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=o.location.systemId,t=Object.entries(o.ship.cargo||{});let n=0;const a=[];for(const[i,r]of t){if(!r||!ut(e,i,r))continue;n+=r;const l=K(i);a.push(`${r} ${l?.name||i}`)}const s=document.getElementById("market-message");if(s)if(!n)s.textContent="No cargo available to sell.";else{const i=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");s.textContent=`Sold ${n} cargo units (${i}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=ds(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};function oo(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function ro(e={}){const t=typeof e.message=="string"?e.message:"",n=ae(),a=Ba(),s=Object.values(o.ship.cargo||{}).reduce((u,p)=>u+p,0),r=oo(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),c=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(u=>{const p=u.requirements||{},m=Ft(p.travel?.systemId),h=Lt(p.travel?.systemId);return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  ${u.description?`<p class="muted">${u.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${Aa(u)}</span>
                    <span>${Pa(u)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${m}${h?` - ${h}`:""}</span>
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',l=r?[r]:a[0]?[a[0].id]:[],d=a.length>0?`
        <div class="contract-list">
          ${a.map(u=>{const p=Ft(u.requirements?.travel?.systemId),m=Lt(u.requirements?.travel?.systemId),h=["contract-row"];return l.includes(u.id)&&h.push("contract-row--active"),`
                <article class="${h.join(" ")}" onclick="acceptContract('${u.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${u.name}</span>
                    <span class="contract-type">${u.type}</span>
                  </div>
                  <p class="muted">${u.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${p}${m?` - ${m}`:""}</span>
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
          <span>Turn ${U(o.time.turn)}</span>
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
  `}function Ft(e){if(!e)return"Unknown";const t=Y(e);return t?.name?`<strong>${t.name}</strong>`:e}function Lt(e){if(!e)return"";const t=st();if(!t)return"";const n=Ia(t,o.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function co(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,s])=>`${a} ${s>0?"+":""}${s}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=z(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}window.acceptContract=e=>{const t=ct(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=Na(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};const lo={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function bt(e){return $?$.ships.find(t=>t.id===e)??null:null}function uo(){return bt(o.ship.templateId)}function po(){return $?$.ships.filter(e=>e.starter):[]}function mo(){return $?$.ships.filter(e=>!e.starter):[]}function jn(e,t){const n=bt(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),s=[],i={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((r,c)=>lo[`${r.size}:${r.type}`]??a[c]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:s,hardpoints:n.hardpoints.map(r=>({...r})),passive:n.passive??null};o.ship=i,Qe(),tt()}function ho(e){jn(e),o.player.hasChosenStarter=!0}function fo(e){const t=bt(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):o.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(o.player.credits-=t.cost,jn(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function go(){const e=o.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=t+n;if(o.player.credits<a){console.warn("Not enough credits to fully repair.");return}o.player.credits-=a,e.hp=e.maxHp,e.shields=e.maxShields}function yo(){const e=o.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(o.player.credits<a){console.warn("Not enough credits to fully refuel.");return}o.player.credits-=a,e.fuel=e.maxFuel}window.repairShipAction=()=>{go(),nav("ship")};window.refuelShipAction=()=>{yo(),nav("ship")};function bo(){const e=o.ship,t=uo(),n=nn(),a=o.combat?.playerCooldowns??[],s=Object.values(e.cargo||{}).reduce((c,l)=>c+l,0),i=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,r=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(c=>`<li>${c.name} (+${c.value} ${c.effectType})</li>`).join("")}</ul>`;return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${e.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${U(o.time.turn)}</span>
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
            ${e.hardpoints.map((c,l)=>{const d=z(e.weapons[l]),u=d?.name||"Empty",p=a[l]??0,m=d?at(d):null,h=m?`
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
  `}function vo(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=mt(t);if(!n)return`
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
    `;const a=Mo(n.choices);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${$o(n.type)}</p>
        ${n.description?`<p class="event-description">${n.description}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function Mo(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const s=n.description?`<p class="choice-desc">${n.description}</p>`:"",i=n.risk?`<span class="choice-risk">Risk: ${xo(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${i}
          </div>
          ${s}
        </article>
      `}).join("")}</div>`}function $o(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function xo(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=v.params,n=typeof t.eventId=="string"?t.eventId:"",a=mt(n);if(!a){nav("main");return}const s=a.choices?.[e];if(s){const i=ms(s);if(i.triggerCombat?.enemyId){le(i.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${s?.label||a.name}`})};window.beginMiningSession=(e,t)=>{ve(o,o.location.systemId,e||void 0,t||void 0),v.go("mining")};window.fireWeapon=(e,t="normal")=>{Pe("fire",e,t),o.combat&&nav("combat")};window.brace=()=>{Pe("brace"),o.combat&&nav("combat")};window.flee=()=>{Pe("flee"),o.combat&&nav("combat")};window.setStance=e=>{vi(e),o.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{Pe("fire_all",void 0,e),o.combat&&nav("combat")};function wo(){const e=o.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=o.ship,n=e.log.map(y=>`<div class="log-line">${y}</div>`).join(""),a=t.hp/Math.max(1,t.maxHp)<=.35,s=(e.log[e.log.length-1]||"").toLowerCase(),i=s.includes("hits you")||s.includes("damage"),r=["app-root","combat-root"];a&&r.push("low-hull"),i&&r.push("hit-flash");const c=t.hardpoints.map((y,x)=>{const T=t.weapons[x],k=z(T),f=e.playerCooldowns[x]??0,M=!!k&&f===0;return`
        <div class="panel-card">
          <p class="label">Slot ${x+1} · ${y.size.toUpperCase()} ${y.type}</p>
          <p class="value-inline">${k?.name||"Empty"}</p>
          <p class="muted">${f>0?`Cooling (${f})`:"Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${M?"":"disabled"} onclick="fireWeapon(${x}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${M?"":"disabled"} onclick="fireWeapon(${x}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `}).join(""),l=Rs.map(y=>`
        <tr>
          <td>${y.type}</td>
          <td>${y.shieldMultiplier.toFixed(2)}x</td>
          <td>${y.hullMultiplier.toFixed(2)}x</td>
          <td>${y.description}</td>
        </tr>
      `).join(""),d=fi(),u=d?`<p class="combat-advice ${d.suggestion}">
        ${d.text}
        <span class="advice-confidence">Intel confidence: ${(d.confidence*100).toFixed(0)}%</span>
      </p>`:'<p class="combat-advice">No immediate cues.</p>',m=e.enemyShields<=0?"Shields are down—called shots will score more consistently. Aim for the hull!":"Called shots trade accuracy; wait until shields drop for the best payout.",h=So(e),w=ko(e);return`
    <div class="${r.join(" ")}">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${e.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${U(o.time.turn)} · Round ${e.round}</span>
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
          <p class="muted">Current stance: <strong>${e.playerStance}</strong>. ${m}</p>

          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Your Ship</p>
              <p class="value-inline">Fuel ${t.fuel}/${t.maxFuel}</p>
              <div class="status-chips">${h||'<span class="muted">No active buffs</span>'}</div>
            </div>
            <div class="panel-card enemy-reticle">
              <div class="reticle-grid"></div>
              <p class="label">Enemy</p>
              <p class="value-inline">${e.enemyName}</p>
              <div class="status-chips">${w||'<span class="muted">No active debuffs</span>'}</div>
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
            ${c}
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
                ${l}
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
  `}function So(e){const t=[];return t.push(`<span class="buff-chip buff">Stance: ${e.playerStance}</span>`),e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function ko(e){const t=[];return e.enemyStatus.weaponJammedTurns>0&&t.push(`<span class="buff-chip debuff">Weapons jammed (${e.enemyStatus.weaponJammedTurns}t)</span>`),e.enemyShields<=0&&t.push('<span class="buff-chip debuff">Shields down</span>'),t.length===0&&e.enemyShields>0&&t.push('<span class="buff-chip muted-chip">Systems nominal</span>'),t.join("")}window.buyShipAction=e=>{fo(e)};window.buyComponentAction=e=>{fa(e)};window.buyWeaponAction=e=>{Sa(e)};function Co(){if(!De(o.location.systemId,"shipyard"))return`
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
    `;const e=mo(),t=ma(),n=xa(),a=et().map(l=>z(l)?.name).filter(Boolean),s=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(l=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Oe("ship",l.id)}
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
                      ${Oe("module",l.id)}
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
          ${n.map(l=>{const d=at(l),u=d.tagNotes.length?`Traits: ${d.tagNotes.join(", ")}`:"";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${Oe("weapon",l.id)}
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
  `}const jt=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],Nt=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],Ht=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],Ot=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function pe(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function To(e){const t=pe(e)%jt.length;return jt[t]}function vt(e){let t=pe(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function He(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,c=i-s+1,l=Math.floor((t-r)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function Oe(e,t){const n=To(`${e}-${t}`),a=Nt[pe(t)%Nt.length],s=Ht[pe(t+"-mod")%Ht.length],i=Ot[pe(t+"-wpn")%Ot.length],c=He(e==="ship"?Eo(a,t):e==="module"?_o(s,t):Io(i,t)).map(l=>`<rect x="${l.x}" y="${l.y}" width="1" height="1" fill="${n[l.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${c}
    </svg>
  `}function Eo(e,t){const n=vt(t),a=[...e],s=Math.min(...e.map(d=>d.y)),i=Math.max(...e.map(d=>d.y)),r=e.filter(d=>d.y===s),c=e.filter(d=>d.y===i);r.slice(0,2).forEach(d=>{a.push({x:d.x,y:d.y-1,c:"a"})}),c.forEach(d=>{n()>.5&&a.push({x:d.x,y:d.y+1,c:n()>.5?"a":"b"})});const l=n()>.5?-1:1;return a.push({x:c[0]?.x+l,y:i-1,c:"b"}),a.push({x:c[c.length-1]?.x-l,y:i-1,c:"b"}),a}function _o(e,t){const n=vt(t+"-decor"),a=[...e],s=Math.min(...e.map(l=>l.x)),i=Math.max(...e.map(l=>l.x)),r=Math.min(...e.map(l=>l.y)),c=Math.max(...e.map(l=>l.y));return a.push({x:s-1,y:Math.round((r+c)/2),c:"b"}),a.push({x:i+1,y:Math.round((r+c)/2),c:"b"}),n()>.3&&a.push({x:s,y:r-1,c:"a"}),n()>.6&&a.push({x:i,y:r-1,c:"c"}),n()>.4&&a.push({x:s,y:c+1,c:"a"}),a}function Io(e,t){const n=vt(t+"-weapon"),a=[...e],s=Math.max(...e.map(c=>c.y)),i=Math.min(...e.map(c=>c.x)),r=Math.max(...e.map(c=>c.x));return a.push({x:i,y:s+1,c:n()>.5?"a":"b"}),a.push({x:r,y:s+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:i+1,y:s-2,c:"c"}),a.push({x:r+1,y:s-1,c:"b"}),a}const Do={incomeMultiplier:e=>j(e,"income"),eventRewardMultiplier:e=>j(e,"event rewards"),hpBonus:e=>j(e,"hull"),cargoBonus:e=>Bo(e,"cargo capacity"),sellBonus:e=>j(e,"sell price"),buyBonus:e=>j(e,"buy price"),marketTax:e=>j(e,"market tax"),miningYield:e=>j(e,"mining yield"),rareFindChance:e=>j(e,"rare find chance"),miningSpeed:e=>j(e,"mining duration"),dodgeBonus:e=>xe(e,"dodge chance"),critBonus:e=>xe(e,"crit chance"),damageTakenMultiplier:e=>j(e,"damage taken"),fleeBonus:e=>xe(e,"flee chance"),pirateDetectionMultiplier:e=>j(e,"pirate detection"),scanDetectionMultiplier:e=>j(e,"scan detection"),illegalTolerance:e=>j(e,"illegal tolerance"),fuelCostMultiplier:e=>j(e,"fuel cost"),hazardDetectionBonus:e=>xe(e,"hazard detection"),anomalyChance:e=>j(e,"anomaly chance"),shieldRegenBonus:e=>j(e,"shield regen")};function Ro(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>Do[n]?.(a)??null).filter(n=>!!n):[]}function j(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function xe(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Bo(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}window.chooseStarter=e=>{ho(e),tt(),v.go("main")};function Ao(){const e=po();if(e.length===0)return`
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
    `;const t=e.map(n=>{const a=Ro(n),s=n.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${n.passive.name}</p>
          ${a.length?`<div class="passive-summary__list">${a.map(i=>`<span>${i}</span>`).join("")}</div>`:""}
        </div>
      `:"";return`
      <div class="panel-card starter-card">
        <div class="starter-card-head">
          ${No(n.id,n.roleHint??n.name)}
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
    `}).join("");return`
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Starter Hangar</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${U(o.time.turn)}</span>
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
`}const Wt=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],qt={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function Mt(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Po(e){return Wt[Mt(e)%Wt.length]}function Fo(e,t){const n=(()=>{let r=Mt(t);return()=>(r=r*1664525+1013904223|0,(r>>>0)/4294967295)})(),a=[...e],s=Math.max(...e.map(r=>r.y)),i=Math.min(...e.map(r=>r.y));return n()>.5&&a.push({x:e[0]?.x??4,y:i-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:s+1,c:n()>.5?"b":"c"}),a}function Lo(e,t=12){const n=Math.min(...e.map(u=>u.x)),a=Math.max(...e.map(u=>u.x)),s=Math.min(...e.map(u=>u.y)),i=Math.max(...e.map(u=>u.y)),r=a-n+1,c=i-s+1,l=Math.floor((t-r)/2)-n,d=Math.floor((t-c)/2)-s;return e.map(u=>({...u,x:u.x+l,y:u.y+d}))}function jo(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(qt).find(r=>n.includes(r))??"fighter",s=qt[a],i=Mt(`${e}-${t}`)%s.length;return s[i]}function No(e,t){const n=Po(`${e}-${t}`),a=jo(e,t),s=Fo(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${Lo(s).map(c=>`<rect x="${c.x}" y="${c.y}" width="1" height="1" fill="${n[c.c]}" opacity="1" />`).join("")}
    </svg>
  `}function Ho(){const e=o.ship;if(!e.hardpoints.length)return`
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
    `;const t=e.hardpoints.map((n,a)=>{const i=z(e.weapons[a])?.name||"Empty";return`
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
          <span>Turn ${U(o.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{wa(e,t)&&nav("weapon_slots")};function Oo(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=o.ship.hardpoints[t];if(!n)return`
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
    `;const r=et().map(c=>z(c)).filter(c=>!!c).map(c=>{const l=nt(t,c.id),u=z(o.ship.weapons[t])?.id===c.id?"Equipped":"Equip",p=at(c),m=p.tagNotes.length?`<br/>Traits: ${p.tagNotes.join(", ")}`:"";return`
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
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Select Weapon</span>
        </div>
        <div class="app-meta">
          <span>Day ${o.time.day}</span>
          <span>Turn ${U(o.time.turn)}</span>
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
  `}window.leaveMining=()=>{o.miningSession=null,v.go("main")};window.drillCell=(e,t)=>{ei(o,e,t)?.fightTriggered||v.go("mining")};window.setMiningDepth=e=>{Zs(o,e),v.go("mining")};window.finalizeDrill=()=>{if(ti(o)?.fightTriggered)return;const t=o.miningSession?.lastMessage||"Extraction complete.";v.go("main",{message:t})};window.newSurvey=()=>{ve(o,o.location.systemId,o.miningSession?.beltId,o.miningSession?.resourceId,{force:!0}),v.go("mining")};function Wo(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function qo(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const s=e[n][a],i=["mine-cell"];s.drilled&&i.push("drilled"),s.selected&&i.push("selected");const r=["mine-cell-inner"];s.directionClass&&r.push(s.directionClass),s.depthClass&&r.push(s.depthClass),s.signal!=null&&r.push(Wo(s.signal));const c=s.signal!=null?`<span class="cell-signal">${s.signal}</span>`:'<span class="cell-signal muted">·</span>';t.push(`
        <div class="${i.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${r.join(" ")}">
            <div class="cell-center">
              ${c}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function Go(){const e=o.miningSession;if(!e)return`
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
    `;const t=Math.round(e.threat??0),n=$n(o,e.systemId),a=Array.from({length:5},(r,c)=>{const l=c+1;return`<button class="chip-btn ${l===e.depth?"active":""}" onclick="setMiningDepth(${l})">Z${l}</button>`}).join(""),s=qo(e.grid),i=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
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
          <span>Turn ${U(o.time.turn)}</span>
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
  `}window.startNewRun=()=>wn(!1);window.returnToMainMenu=()=>wn(!0);function zo(){const e=o.gameOver?.summary,t=ta(),n=e?.message||"Your run has ended.",a=e?.score??0,s=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],i=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],r=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],c=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],l=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],d=p=>p.map(([m,h])=>`
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
  `}const E=320,C=180;let me=null,he="space",ye=null,ne=1;const Uo=450,$t=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],Ee=[];function Yo(){for(const e of $t){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*E,y:Math.random()*C,size:Math.random()<.6?1:2})}}function Vo(){Ee.length=0;for(let e=0;e<4;e++)Ee.push({x:Math.random()*E,y:C/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function Xo(e){me=e.getContext("2d"),me&&(e.width=E,e.height=C,me.imageSmoothingEnabled=!1,Yo(),Vo())}function Jo(e){e===he&&(!ye||ne<1)||(ye=he,he=e,ne=0)}function Ko(e){if(!me)return;const t=e/16.6667;ne<1&&(ne=Math.min(1,ne+e/Uo),ne>=1&&(ye=null));for(const n of Ee)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=E+20,n.y=C/4+Math.random()*(C/2));for(const n of $t)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=E,a.y=Math.random()*C)}function Nn(e=me,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=ye!==null&&ne<1,a=ir(ne);n?(We(e,ye,t,{alpha:1-a,scale:1+.05*a}),We(e,he,t,{alpha:a,scale:1.04-.04*a})):We(e,he,t),e.restore()}function We(e,t,n,a={}){const s=a.alpha??1,i=a.scale??1;switch(e.save(),e.globalAlpha=s,i!==1&&(e.translate(E/2,C/2),e.scale(i,i),e.translate(-E/2,-C/2)),t){case"mining":tr(e);break;case"hangar":ar(e,n);break;case"ops":sr(e,n);break;default:Zo(e,n);break}er(e,t),t==="combat"&&nr(e),e.restore()}function Zo(e,t){e.fillStyle="#02030b",e.fillRect(0,0,E,C),Qo(e,t)}function Qo(e,t){for(const n of Ee){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),s=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${s})`),a.addColorStop(.5,`rgba(60, 130, 200, ${s*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${s})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of $t){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function er(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let s=0;s<n;s++){const i=Math.random()*E,r=Math.random()*C;e.fillRect(Math.round(i),Math.round(r),1,1)}}function tr(e){e.fillStyle="#0a0604",e.fillRect(0,0,E,C);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const s=a*(C/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(s),E,Math.ceil(C/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,E-80,C-40);const n=e.createLinearGradient(0,C/2,E,C/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,E,C)}function nr(e){const t=e.createLinearGradient(0,0,E,C);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,E,C)}function ar(e,t){e.fillStyle="#04060a",e.fillRect(0,0,E,C);const n=e.createLinearGradient(0,0,0,C);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,E,C);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(E/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,C-46,E,18),e.fillStyle="#0f1a28";for(let s=0;s<7;s++){const i=C-26+s*3;e.fillRect(0,i,E,1)}e.fillStyle="#1a2838";for(let s=0;s<E;s+=22)e.fillRect(s,C-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,E-80,10),e.fillRect(40,70,E-80,6)}function sr(e,t){e.fillStyle="#021014",e.fillRect(0,0,E,C);const n=e.createRadialGradient(E/2,C*.45,10,E/2,C/2,C);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,E,C),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let d=20;d<E;d+=20)e.beginPath(),e.moveTo(d,0),e.lineTo(d,C),e.stroke();for(let d=20;d<C;d+=20)e.beginPath(),e.moveTo(0,d),e.lineTo(E,d),e.stroke();const a=t*.002%(Math.PI*2),s=E/2,i=C/2,r=80,c=e.createRadialGradient(s,i,0,s,i,r);c.addColorStop(0,"rgba(80, 220, 200, 0.18)"),c.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=c,e.beginPath(),e.moveTo(s,i),e.arc(s,i,r,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(s,i,r,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const l=[{x:s+26,y:i-18},{x:s-30,y:i+14},{x:s+6,y:i+32}];for(const d of l)e.fillRect(Math.round(d.x),Math.round(d.y),2,2)}function ir(e){return e*e*(3-2*e)}const Hn=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],or=Hn.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),rr={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function Ze(e){const t=e.split(".");let n=I;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function cr(e,t){const n=e.split(".");let a=I;for(let s=0;s<n.length-1;s++){const i=n[s];a[i]=a[i]??{},a=a[i]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{le(e)};window.devMining=()=>{ve(o,o.location.systemId),v.go("mining")};function lr(){return Hn.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(Ze(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${Ze(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function re(){const e=document.getElementById("app");if(!e)return;const t=rr[v.current]??"space";Jo(t);let n="";if(Nn(null,performance.now()),v.current==="mining"&&!o.miningSession&&o.location?.systemId){const i=Fe(),r=new Set(i?.tags??[]);(r.has("mining_belt")||r.has("mining"))&&ve(o,o.location.systemId)}switch(v.current){case"main":n=Hi();break;case"travel":n=Gi();break;case"market":n=Zi(v.params);break;case"contracts":n=ro();break;case"ship":n=bo();break;case"event":n=vo(v.params);break;case"combat":n=wo(v.params);break;case"weapon_slots":n=Ho();break;case"weapon_select":n=Oo(v.params);break;case"shipyard":n=Co();break;case"ship_select":n=Ao();break;case"mining":n=Go();break;case"gameover":n=zo();break}const a=v.current!=="main"&&v.current!=="event"&&v.current!=="combat"&&v.current!=="mining"?`
        <div class="menu-back">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
        </div>
      `:"",s=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${lr()}
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
  `;e.innerHTML=`${a}${n}${s}`,dr()}let de=!1,Gt=!1;function dr(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),s=document.getElementById("devTriggerMining"),i=document.getElementById("devAddCredits"),r=document.getElementById("devFillCargo"),c=document.getElementById("devGodMode"),l=document.getElementById("devResetMiningSession"),d=document.getElementById("devSpikeThreat"),u=document.getElementById("devLogMiningGrid"),p=document.getElementById("navTravel"),m=document.getElementById("navMarket"),h=document.getElementById("navShip"),w=document.getElementById("devPersistEvents"),y=document.getElementById("devClearEvents"),x=document.getElementById("devHardReset"),T=t?.querySelectorAll("input[data-dev-path]"),k=document.getElementById("devMiningStatus"),f=()=>{t&&t.classList.toggle("hidden")},M=b=>{const _=or[b],S=document.getElementById(`devValue-${b.replace(/\./g,"__")}`);_&&S&&(S.textContent=_.formatter(Ze(b)))};T?.forEach(b=>{const _=()=>{const S=b.dataset.devPath;if(!S)return;const A=Number(b.value);cr(S,A),we(),M(S)};b.addEventListener("input",_)});const D=()=>{if(!k)return;const b=o.miningSession;if(!b){k.textContent="No active mining session.";return}const _=(b.threat??0).toFixed(1),S=b.depth??0;k.innerHTML=`
      <div>System: ${b.systemId}</div>
      <div>Belt: ${b.beltName??b.beltId??"—"}</div>
      <div>Depth: Z${S}</div>
      <div>Threat: ${_}%</div>
      <div>Exploration: ${(b.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${b.drillsUsed??0}</div>
      <div>Selected: ${b.selectedRow!=null?`X${b.selectedCol+1} Y${b.selectedRow+1}`:"none"}</div>
    `};D(),e?.addEventListener("click",f),n?.addEventListener("click",()=>t?.classList.add("hidden")),p?.addEventListener("click",()=>window.nav?.("travel")),m?.addEventListener("click",()=>window.nav?.("market")),h?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),s?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),i?.addEventListener("click",()=>{o.player.credits+=1e3,t?.classList.add("hidden"),re()}),r?.addEventListener("click",()=>{const b=o.ship.cargo||{};b.aurite_ore=(b.aurite_ore||0)+20,o.ship.cargo=b,t?.classList.add("hidden"),re()}),c?.addEventListener("click",()=>{de=!de,o.godMode=de,de&&(o.ship.hp=o.ship.maxHp,o.ship.shields=o.ship.maxShields),alert(`God Mode: ${de?"On":"Off"}`)}),l?.addEventListener("click",()=>{ve(o,o.location.systemId,o.miningSession?.beltId),t?.classList.add("hidden"),re(),D()}),d?.addEventListener("click",()=>{const b=o.miningSession;b&&(b.threat=95,b.currentPirateChance=.95,t?.classList.add("hidden"),re(),D())}),u?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",o.miningSession),console.groupEnd()}),w?.addEventListener("click",()=>{gs(),alert("Events cached locally. Future loads will honor this list.")}),y?.addEventListener("click",()=>{ys(),alert("Event cache cleared. Future loads use the bundled data.")}),x?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),Gt||(document.addEventListener("keydown",b=>{b.key==="`"&&f(),b.key==="Escape"&&v.current!=="main"&&window.nav?.("main")}),Gt=!0)}let $=null,F=null,On=null,zt=performance.now();async function ur(){const e="/space/".replace(/\/+$/,"/"),t=S=>`${e}content/${S}`,[n,a,s,i,r,c,l,d,u]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!s.ok)throw new Error(`Failed to load components.json: ${s.status}`);if(!r.ok)throw new Error(`Failed to load weapons.json: ${r.status}`);if(!i.ok)throw new Error(`Failed to load commodities.json: ${i.status}`);if(!c.ok)throw new Error(`Failed to load enemies.json: ${c.status}`);if(!l.ok)throw new Error(`Failed to load events.json: ${l.status}`);if(!d.ok)throw new Error(`Failed to load loot_tables.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load missions.json: ${u.status}`);const p=await n.json();for(const S of p){const A=new Set(S.tags??[]);S.region&&A.add(S.region),S.security==="high"&&A.add("secure"),S.security==="low"&&A.add("lawless"),S.marketProfile?.blackMarket&&A.add("black_market");const L=S.economyTags??[];L.includes("mining")&&A.add("mining"),L.includes("salvage")&&A.add("salvage"),L.includes("checkpoint")&&A.add("checkpoint"),S.tags=Array.from(A)}const m=await a.json(),h=await s.json(),w=await i.json(),y=await r.json(),x=await c.json(),T=await fetch(t("bases.json"));if(!T.ok)throw new Error(`Failed to load bases.json: ${T.status}`);const k=await T.json(),f={};for(const S of p)f[S.id]=S;const M=await l.json();us(M);const D=await d.json();ws(D);const b=await u.json();Da(b);const _={};for(const S of k)_[S.id]=S;return{systems:p,systemsById:f,bases:k,basesById:_,ships:m,components:h,commodities:w,weapons:y,enemies:x,events:M,lootTables:D,missions:b}}function pr(){F||(F=document.createElement("canvas"),F.id="pixel-background",F.style.position="fixed",F.style.top="0",F.style.left="0",F.style.width="100vw",F.style.height="calc(100vw * 9 / 16)",F.style.maxHeight="100vh",F.style.maxWidth="calc(100vh * 16 / 9)",F.style.objectFit="contain",F.style.zIndex="0",F.style.pointerEvents="none",F.style.background="#02030b",F.style.imageRendering="pixelated",F.style.display="block",document.body.insertBefore(F,document.body.firstChild||null),On=F.getContext("2d"),Xo(F))}function mr(){const e=t=>{const n=t-zt;zt=t,Ko(n),Nn(On,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function hr(){$=await ur(),pr();const e=Ea($.systems),t=Vt();t.map=e,Xt(t),ln(e),Kt();const n=Xn();if(n){const i=o.ship.hardpoints.length,r=[];for(let c=0;c<i;c++)r.push(n.weapons[c]??null);o.ship.weapons=r,o.inventory.weapons=n.inventory}tt();const a=v.go.bind(v);v.go=(i,r)=>{a(i,r),re()};const s=v.setZoom.bind(v);v.setZoom=i=>{v.zoom!==i&&(s(i),re())},window.nav=(i,r={})=>{v.go(i,r)},v.current=o.player.hasChosenStarter?"main":"ship_select",re(),mr()}function Y(e){return $?$.systemsById[e]??null:null}function fr(e){return $?$.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{hr()});
