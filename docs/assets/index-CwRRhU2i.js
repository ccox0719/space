(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ei=[{id:"echo_1_skiff",name:"Echo-1 Skiff",description:"Starter multi-role corvette; Versatility Core boosts income, event rewards, HP, and cargo capacity.",roleHint:"balanced",starter:!0,cost:0,hull:70,shields:50,fuel:40,cargo:40,tags:["starter","balanced"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:45,cpuLimit:45,maneuverRating:55,passive:{id:"versatility-core",name:"Versatility Core",effects:{incomeMultiplier:1.05,eventRewardMultiplier:1.05,hpBonus:1.05,cargoBonus:5}}},{id:"cargo_finch",name:"Cargo Finch",description:"Light trader with reinforced racks; Market Savvy cuts taxes/buy costs while boosting sell value and cargo.",roleHint:"trader",starter:!0,cost:0,hull:65,shields:40,fuel:45,cargo:70,tags:["starter","trader"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,powerGrid:38,cpuLimit:40,maneuverRating:50,passive:{id:"market-savvy",name:"Market Savvy",effects:{sellBonus:1.05,buyBonus:.95,marketTax:.95,cargoBonus:10}}},{id:"drillkite",name:"Drillkite Miner",description:"Entry-level miner with Industrial Efficiency to boost yield, rare chance, and mining speed.",roleHint:"miner",starter:!0,cost:0,hull:75,shields:45,fuel:35,cargo:55,tags:["starter","miner"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:4,powerGrid:50,cpuLimit:46,maneuverRating:45,passive:{id:"industrial-efficiency",name:"Industrial Efficiency",effects:{miningYield:1.25,rareFindChance:1.1,miningSpeed:.9}}},{id:"spearling",name:"Spearling",description:"Nimble interceptor focused on quick strikes; Combat Momentum adds dodge, crit, damage reduction, and flee perks.",roleHint:"fighter",starter:!0,cost:0,hull:60,shields:55,fuel:35,cargo:25,tags:["starter","fighter"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:2,powerGrid:42,cpuLimit:48,maneuverRating:72,passive:{id:"combat-momentum",name:"Combat Momentum",effects:{dodgeBonus:.1,critBonus:.15,damageTakenMultiplier:.9,fleeBonus:.2}}},{id:"shade_runner",name:"Shade Runner",description:"Lean smuggler courier with Shadow Courier passive lowering pirate/scan detection, raising tolerance, and aiding flee attempts.",roleHint:"smuggler",starter:!0,cost:0,hull:60,shields:45,fuel:50,cargo:35,tags:["starter","smuggler"],hardpoints:[{size:"small",type:"projectile"},{size:"small",type:"energy"}],moduleSlots:3,powerGrid:40,cpuLimit:50,maneuverRating:68,passive:{id:"shadow-courier",name:"Shadow Courier",effects:{pirateDetectionMultiplier:.75,scanDetectionMultiplier:.85,illegalTolerance:1.2,fleeBonus:.1}}},{id:"surveyor_v",name:"Surveyor V",description:"Explorer frame with Pathfinder Suite cutting fuel cost, boosting anomaly rewards, and improving hazard detection.",roleHint:"explorer",starter:!0,cost:0,hull:65,shields:50,fuel:60,cargo:30,tags:["starter","explorer"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:3,powerGrid:44,cpuLimit:55,maneuverRating:62,passive:{id:"pathfinder-suite",name:"Pathfinder Suite",effects:{fuelCostMultiplier:.8,anomalyChance:1.2,eventRewardMultiplier:1.1,hazardDetectionBonus:.2}}},{id:"prospector_rig",name:"Prospector Rig",description:"Industrial miner with reinforced cargo pods and dual light turrets.",roleHint:"miner",starter:!1,cost:4500,hull:95,shields:25,fuel:40,cargo:110,tags:["miner","industrial"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"projectile"}],moduleSlots:2,powerGrid:50,cpuLimit:55,maneuverRating:52,passive:{id:"deep-miner",name:"Deep Miner",effects:{miningYield:1.35,rareFindChance:1.2,miningSpeed:.85}}},{id:"gladius_fighter",name:"Gladius Fighter",description:"Agile strike craft combining a beam and missile rack for fast alpha strikes.",roleHint:"fighter",starter:!1,cost:6500,hull:110,shields:50,fuel:35,cargo:45,tags:["fighter","raider"],hardpoints:[{size:"small",type:"energy"},{size:"small",type:"missile"}],moduleSlots:3,powerGrid:70,cpuLimit:60,maneuverRating:65,passive:{id:"shielded-assault",name:"Shielded Assault",effects:{dodgeBonus:.07,critBonus:.1,damageTakenMultiplier:.85}}},{id:"sentinel_frigate",name:"Sentinel Frigate",description:"Balanced line ship with paired medium mounts and reinforced shielding.",roleHint:"combat",starter:!1,cost:9e3,hull:160,shields:70,fuel:30,cargo:65,tags:["combat","frigate"],hardpoints:[{size:"medium",type:"projectile"},{size:"medium",type:"energy"}],moduleSlots:4,powerGrid:90,cpuLimit:60,maneuverRating:45,passive:{id:"phalanx-core",name:"Phalanx Core",effects:{shieldRegenBonus:1.1,damageTakenMultiplier:.9}}},{id:"atlas_hauler",name:"Atlas Heavy Hauler",description:"A lumbering cargo workhorse designed for bulk freight across secure routes.",roleHint:"big_trader",starter:!1,cost:6e3,hull:155,shields:45,fuel:40,cargo:165,tags:["freighter","heavy"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"missile"}],moduleSlots:4,powerGrid:80,cpuLimit:45,maneuverRating:38,passive:{id:"bulk-captain",name:"Bulk Captain",effects:{sellBonus:1.08,buyBonus:.92,marketTax:.9,cargoBonus:20}}},{id:"phantom_raider",name:"Phantom Raider",description:"A stealthy raider outfitted for hit-and-run piracy.",roleHint:"pirate",starter:!1,cost:8e3,hull:115,shields:40,fuel:42,cargo:75,tags:["pirate","raider"],hardpoints:[{size:"small",type:"energy"},{size:"medium",type:"energy"}],moduleSlots:3,powerGrid:75,cpuLimit:55,maneuverRating:48,passive:{id:"ghost-merc",name:"Ghost Mercenary",effects:{pirateDetectionMultiplier:.8,illegalTolerance:1.5,critBonus:.2,fleeBonus:.15}}}],fn=Ei,ee=fn.find(e=>e.starter)??fn[0],Ri=ee?.hardpoints.length??0,Ii={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"},Bi={balanced:{id:"balanced",label:"Balanced",description:"Steady posture that treats every attack equally while keeping systems synced.",damageTakenMultipliers:{},evasionBonus:0},brace:{id:"brace",label:"Brace",description:"Tighten defenses—absorbs kinetic/explosive hits but lets in energy fire.",damageTakenMultipliers:{kinetic:.7,explosive:.7,energy:1.1,disruptive:1.1},evasionBonus:.05},evasive:{id:"evasive",label:"Evasive",description:"Skinny, agile frame—decreases all damage via maneuvering.",damageTakenMultipliers:{kinetic:.85,explosive:.85,energy:.85,disruptive:.85},evasionBonus:.15},overcharge:{id:"overcharge",label:"Overcharge",description:"Pour power to shields and weapons but disruptives tear through you.",damageTakenMultipliers:{disruptive:1.25,kinetic:.95,explosive:.95,energy:.9},evasionBonus:-.05,shieldBonus:15}};function ze(e){return Bi[e]}function Kn(){return{daysSurvived:0,jumpsMade:0,systemsVisited:0,creditsEarnedTotal:0,highestNetWorth:0,tradeProfitTotal:0,commodityVolumes:{},contractsCompleted:0,contractPayoutTotal:0,fightsSurvived:0,shipsDestroyed:0,damageDealtTotal:0,damageTakenTotal:0,miningRuns:0,oreMinedTotal:0,rareFinds:0,xpEarned:0}}let l;const Zn="cosmo_weapon_loadout";function Di(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Zn);if(!e)return null;try{const t=JSON.parse(e);return{weapons:Array.isArray(t.weapons)?t.weapons:[],inventory:Array.isArray(t.inventory)?t.inventory:[]}}catch{return null}}function Pt(){if(typeof window>"u"||!window.localStorage)return;const e={weapons:l.ship.weapons,inventory:l.inventory?.weapons??[]};window.localStorage.setItem(Zn,JSON.stringify(e))}const Qn="cosmo_xp_state";function Pi(){if(typeof window>"u"||!window.localStorage||!l)return;const e={xp:l.player.xp,xpTracks:l.player.xpTracks??{},perksUnlocked:l.player.perksUnlocked??[]};window.localStorage.setItem(Qn,JSON.stringify(e))}function Ai(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Qn);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function ea(){return{version:1,time:{day:1,turn:0},location:{systemId:"helion_prime",docked:!0},player:{credits:1e3,roles:["trader"],wanted:0,hasChosenStarter:!1,xp:0,xpTracks:{mining:0},perksUnlocked:[]},ship:{templateId:ee?.id??"none",name:ee?.name??"Undefined Hull",hp:ee?.hull??0,maxHp:ee?.hull??0,shields:ee?.shields??0,maxShields:ee?.shields??0,fuel:ee?.fuel??0,maxFuel:ee?.fuel??0,cargoCapacity:ee?.cargo??0,cargo:{},modules:[],weapons:ee?.hardpoints.map(e=>Ii[`${e.size}:${e.type}`]??null)??Array(Ri).fill(null),weaponPower:12,evasion:5,maneuverRating:ee?.maneuverRating??0,components:[],hardpoints:ee?.hardpoints.map(e=>({...e}))??[],passive:ee?.passive??null},reputation:{},contracts:[],missions:[],combat:null,miningSession:null,lastMiningSystemId:null,miningBelts:[],notifications:[],transactions:[],inventory:{weapons:["laser_mk1"]},lastBattleResult:null,marketState:{temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{},initialDriftSeeded:!1},tradeStrategy:{taxEvasion:0,smuggling:0,bribery:0},intel:{systems:[]},runStats:Kn(),gameOver:{active:!1,reason:null},map:null,difficulty:{day:1,playerPowerScore:1,tension:0}}}function ta(e){l=e}const na="space-dev-tune",Z={miningYieldMultiplier:1,rareMineralChance:0,miningDuration:5,marketPriceVolatility:100,marketDailyTrendStrength:1,marketBurstChance:5,marketCrashChance:5,tradeProfitMultiplier:1,contractPayoutMultiplier:1.7,contractDifficultyMultiplier:1,fuelCostMultiplier:1,travelRiskScaling:100,eventFrequency:50,eventDangerMultiplier:1,eventRewardMultiplier:1,progressionSpeedMultiplier:1,miningEfficiency:.85,miningPayoutMultiplier:.75,drillDamageMultiplier:1,miningThreatMultiplier:1,combat:{pirateEncounterRateBase:0,pirateCargoValueSensitivity:1,navyEncounterRateBase:0,maxEncountersPerDay:10,enemyHpMultiplier:.6,enemyDamageMultiplier:.65,enemyAccuracyMultiplier:.9,enemyCountMin:1,enemyCountMax:1,difficultyScalePerDay:0,difficultyScalePerShipPower:0,creditsRewardMultiplier:1.4,lootDropChance:100,rareLootChance:12,repGainMultiplier:1,playerDamageTakenMultiplier:1,fleeSuccessBonus:0,globalIncomeMultiplier:1,globalDangerMultiplier:1,encounterChancePerJump:70,nonPirateEventWeight:1,showEncounterDebug:0}};let O={...Z};function Li(e){return{...Z.combat,...e}}function Mt(e){return{...e,enemyHpMultiplier:Math.min(Z.combat.enemyHpMultiplier,Math.max(.1,e.enemyHpMultiplier??Z.combat.enemyHpMultiplier)),enemyDamageMultiplier:Math.min(Z.combat.enemyDamageMultiplier,Math.max(.1,e.enemyDamageMultiplier??Z.combat.enemyDamageMultiplier)),enemyAccuracyMultiplier:Math.min(Z.combat.enemyAccuracyMultiplier,Math.max(.1,e.enemyAccuracyMultiplier??Z.combat.enemyAccuracyMultiplier))}}function aa(){if(typeof window>"u"||!window.localStorage){O={...Z};return}const e=window.localStorage.getItem(na);if(!e){O={...Z,combat:Mt(Z.combat)},et();return}try{const t=JSON.parse(e),n={};typeof t.enemyHpMultiplier=="number"&&(n.enemyHpMultiplier=t.enemyHpMultiplier),typeof t.enemyDamageMultiplier=="number"&&(n.enemyDamageMultiplier=t.enemyDamageMultiplier),typeof t.combatRewardMultiplier=="number"&&(n.creditsRewardMultiplier=t.combatRewardMultiplier),typeof t.pirateEncounterRate=="number"&&(n.pirateEncounterRateBase=t.pirateEncounterRate);const a=Li({...t.combat,...n});O={...Z,...t,combat:Mt(a)},et()}catch{O={...Z,combat:Mt(Z.combat)},et()}}function et(){typeof window>"u"||!window.localStorage||window.localStorage.setItem(na,JSON.stringify(O))}function ia(e){const t=O.progressionSpeedMultiplier??1;return e*t}function K(){return O.combat??Z.combat}function Ni(){return l.ship.passive?.effects??{}}const sa="cosmo_run_high_scores",oa=5;function Fi(){return l?{...l.runStats,commodityVolumes:{...l.runStats.commodityVolumes}}:Kn()}function ji(e){return Math.round(e.creditsEarnedTotal/10+e.contractsCompleted*50+e.shipsDestroyed*30+e.rareFinds*40+e.systemsVisited*5+e.daysSurvived*3)}function ra(){if(typeof window>"u"||!window.localStorage)return[];const e=window.localStorage.getItem(sa);if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,oa):[]}catch{return[]}}function Hi(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(sa,JSON.stringify(e.slice(0,oa)))}function Oi(){return ra()}function zi(e){const t=ra();t.push(e),t.sort((n,a)=>a.score-n.score),Hi(t)}function _e(e){if(!l||e<=0)return;l.runStats.creditsEarnedTotal+=e;const t=l.player.credits;t>l.runStats.highestNetWorth&&(l.runStats.highestNetWorth=t)}function qi(e,t,n){if(!l)return;l.runStats.tradeProfitTotal+=Math.max(0,n);const a=l.runStats.commodityVolumes;a[e]=(a[e]||0)+t;const i=l.runStats.mostTradedCommodityId;(!i||a[e]>a[i])&&(l.runStats.mostTradedCommodityId=e)}function Gi(e){!l||e<=0||(l.runStats.contractPayoutTotal+=e)}function Ui(){l&&(l.runStats.contractsCompleted+=1)}function ke(e){!l||e<=0||(l.runStats.damageDealtTotal+=e)}function Wi(e){!l||e<=0||(l.runStats.damageTakenTotal+=e)}function Vi(){l&&(l.runStats.fightsSurvived+=1)}function Yi(){l&&(l.runStats.shipsDestroyed+=1)}function Xi(e,t){!l||e<=0||(l.runStats.miningRuns+=1,l.runStats.oreMinedTotal+=e,t&&(l.runStats.rareFinds+=1))}function Ji(e,t="mining"){if(!l||e<=0)return;l.player.xp+=e,l.runStats.xpEarned+=e;const n=l.player.xpTracks||{};n[t]=(n[t]??0)+e,l.player.xpTracks=n}function Ki(){l&&(l.runStats.jumpsMade+=1,l.runStats.systemsVisited+=1)}function Zi(e){l&&(l.runStats.daysSurvived=Math.max(l.runStats.daysSurvived,e))}const _={current:"main",params:{},zoom:"local",activeRoute:null,go(e,t={}){this.current=e,this.params=t},setZoom(e){this.zoom=e},setActiveRoute(e){this.activeRoute=e},advanceActiveRoute(e){const t=this.activeRoute;if(!t)return!1;const n=Math.min(t.currentIndex+1,t.nodes.length-1);return t.nodes[n]!==e?!1:(t.currentIndex=n,!0)},clearActiveRoute(){this.activeRoute=null}};function Qi(){return C?C.components:[]}function ca(e){return C?C.components.find(t=>t.id===e)??null:null}function la(){if(!C)return[];const e=l.ship.components;return C.components.filter(t=>e.includes(t.id))}function es(){if(!C)return{};const e={};for(const t of la())if(t.effects)for(const[n,a]of Object.entries(t.effects))typeof a=="number"&&(e[n]=(e[n]??1)*a);return e}function ts(e){if(!C)return!1;const t=C.components.find(n=>n.id===e);return t?l.player.credits<t.cost?(console.warn("Not enough credits to buy this component."),!1):l.ship.components.includes(e)?(console.warn("Component already installed."),!1):(l.player.credits-=t.cost,l.ship.components.push(e),ns(t),!0):(console.warn(`Unknown component: ${e}`),!1)}function ns(e){const t=l.ship;switch(e.effectType){case"hull":t.maxHp+=e.value??0,t.hp+=e.value??0;break;case"shields":t.maxShields+=e.value??0,t.shields+=e.value??0;break;case"fuel":t.maxFuel+=e.value??0,t.fuel+=e.value??0;break;case"cargo":t.cargoCapacity+=e.value??0;break}}function ne(){const e=Ni(),t=es(),n=new Set([...Object.keys(e),...Object.keys(t)]),a={};for(const i of n){const s=typeof e[i]=="number"?e[i]:1,o=typeof t[i]=="number"?t[i]:1;a[i]=s*o}return a}function da(){const e=ne(),t=Math.max(0,e.incomeMultiplier??1),n=Math.max(0,K().globalIncomeMultiplier??1);return t*n}const as=-100,is=100;function ss(e,t){const n=l.reputation[e]||0,a=rs(n+t);return l.reputation[e]=a,a}function ua(e){for(const[t,n]of Object.entries(e))ss(t,n)}function os(e){return l.reputation[e]||0}function rs(e){return Math.max(as,Math.min(is,e))}const gn={damageMultiplier:1.25,accuracyMultiplier:.8},cs=.4,De={kinetic:{vsShields:.8,vsHull:1.2,description:"Kinetic projectiles punch through armor but have less effect on energy shields."},energy:{vsShields:1.2,vsHull:.8,description:"Energy beams focus on shields and finesse hulls."},explosive:{vsShields:1,vsHull:1.3,description:"Explosives blast both layers but leave hull plating the most damaged."},disruptive:{vsShields:1.3,vsHull:1,description:"Disruptive rounds disable shields aggressively while nicking hull."}},ls=Object.keys(De).map(e=>({type:e,shieldMultiplier:De[e].vsShields,hullMultiplier:De[e].vsHull,description:De[e].description})),St=De;function ds(){return C?C.weapons:[]}function pa(){return l.inventory||(l.inventory={weapons:[]}),l.inventory}function At(){return[...pa().weapons]}function Lt(){if(!C)return;const e=At();if(!e.length)return;const t=l.ship;t.weapons=t.weapons.map((n,a)=>{if(n)return n;const i=e.filter(o=>Nt(a,o));return i.length?i[Math.floor(Math.random()*i.length)]:n})}function Nt(e,t){const n=l.ship,a=C?.weapons.find(s=>s.id===t);if(!a)return!1;const i=n.hardpoints[e];return i?a.size===i.size&&a.type===i.type:!1}function us(e,t){return Nt(e,t)?(l.ship.weapons[e]=t,Pt(),!0):!1}function te(e){return!e||!C?null:C.weapons.find(t=>t.id===e)??null}function ps(e){const t=te(e);return!t||l.player.credits<t.price?!1:(pa().weapons.push(e),l.player.credits-=t.price,Pt(),!0)}function ma(e,t={}){const n=e.tags||[];let a=e.accuracy*(t.accuracyMultiplier??1)||0;if(n.includes("accurate")&&(a+=.05),a=Math.min(.95,Math.max(0,a)),Math.random()>a)return 0;let i=e.damage;return Math.random()<e.critChance&&(i*=e.critMultiplier),i*=t.damageMultiplier??1,Math.max(0,Math.round(i))}const ms={kinetic:"Kinetic",energy:"Energy",explosive:"Explosive",disruptive:"Disruptive"},hs={shield_breaker:"Bonus vs shields",armor_piercing:"Bonus vs hull",accurate:"Improved accuracy",disruptor:"Can jam enemy weapons"};function yn(e){return e>1.1?"Strong":e<.95?"Weak":"Normal"}const vn={shields:"Shield-breaker",hull:"Hull buster"};function Ft(e){const t=e.damageType,n=St[t]??St.kinetic,a=yn(n.vsShields),i=yn(n.vsHull);let s="Balanced";a==="Strong"&&i==="Weak"?s=vn.shields:i==="Strong"&&a==="Weak"?s=vn.hull:a==="Strong"&&i==="Strong"&&(s="Devastating");const o=(e.tags||[]).map(d=>hs[d]).filter(Boolean);return{role:s,vsShields:a,vsHull:i,typeLabel:ms[t]??t,tagNotes:o}}let ha=null;function fa(e){ha=e}function ct(){return ha}function fs(e){switch(e){case"core_lane":case"core":return"core";case"frontier_lane":case"frontier":return"frontier";default:return"wild"}}function tt(e,t){return e<t?`${e}::${t}`:`${t}::${e}`}function gs(e){const t=e.map(s=>({id:s.id,name:s.name,x:s.coords?.x??0,y:s.coords?.y??0,tags:s.tags??[]})),n=[],a=new Set;for(const s of e)for(const o of s.neighbors??[]){const d=tt(s.id,o.id);a.has(d)||(a.add(d),n.push({from:s.id,to:o.id,type:fs(o.laneType),distance:Math.max(1,Math.round(o.distance??1))}))}const i={nodes:t,lanes:n};return fa(i),i}function jt(e,t){return e.lanes.filter(n=>n.from===t||n.to===t).map(n=>n.from===t?n.to:n.from)}function ys(e,t,n){const a=n==="local"?1:3,i=new Map([[t,0]]);let s=[t];for(let o=1;o<=a;o++){const d=[];for(const u of s)for(const p of jt(e,u))i.has(p)||(i.set(p,o),d.push(p));if(!d.length)break;s=d}return i}function Ht(e,t,n){if(t===n)return[t];const a=[t],i=new Set([t]),s=new Map;for(;a.length;){const u=a.shift();for(const p of jt(e,u))if(!i.has(p)&&(i.add(p),s.set(p,u),a.push(p),p===n))break}if(!i.has(n))return[];const o=[];let d=n;for(;d;)o.push(d),d=s.get(d);return o.reverse()}function vs(e,t,n){const a=Ht(e,t,n);return a.length?Math.max(0,a.length-1):null}const bs={mining:{id:"mining",displayName:"Mining XP",description:"Progression earned from mining tiles, going deeper, and surviving hazards.",type:"activity",levelThresholds:[0,100,300,600,1e3,1600,2300],maxLevel:20,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"extraction_t1_efficient_strikes"}],4:[{type:"perkUnlock",perkId:"extraction_t2_vein_whisperer"}],6:[{type:"perkUnlock",perkId:"extraction_t3_deep_delver"}],10:[{type:"perkUnlock",perkId:"risk_t5_chain_momentum"}],14:[{type:"perkUnlock",perkId:"economy_t4_hazard_insight"}]}},combat:{id:"combat",displayName:"Combat XP",description:"Progression earned from destroying enemies, dodging, and using combos.",type:"activity",levelThresholds:[0,120,280,520,900,1400],maxLevel:20,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"precision_t1_targeting_assist"}],3:[{type:"perkUnlock",perkId:"survival_t1_hull_plating"}],5:[{type:"perkUnlock",perkId:"precision_t2_headshot_focus"}],7:[{type:"perkUnlock",perkId:"survival_t2_defensive_burst"}],12:[{type:"perkUnlock",perkId:"precision_t3_backline_breach"}],16:[{type:"perkUnlock",perkId:"survival_t3_last_stand_matrix"}]}},travel:{id:"travel",displayName:"Travel XP",description:"Progression from discovering systems, long jumps, and risky routes.",type:"activity",levelThresholds:[0,80,200,420,750,1100],maxLevel:15,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"control_t1_quick_cycle"}],4:[{type:"perkUnlock",perkId:"control_t2_route_insight"}],7:[{type:"perkUnlock",perkId:"control_t3_hazard_mapping"}]}},faction_civilian:{id:"faction_civilian",displayName:"Civilian Reputation",description:"Reputation with civilian factions.",type:"faction",levelThresholds:[0,50,150,300,600,1e3],maxLevel:10,rewardsByLevel:{2:[{type:"discount",scope:"markets_civilian",value:.05}],4:[{type:"perkUnlock",perkId:"diplomacy_t2_courier_favor"}],6:[{type:"specialMission",missionId:"civilian_aid_convoy"}]}},faction_pirate:{id:"faction_pirate",displayName:"Pirate Reputation",description:"Reputation with pirate and syndicate networks.",type:"faction",levelThresholds:[0,60,180,360,720],maxLevel:10,rewardsByLevel:{2:[{type:"perkUnlock",perkId:"diplomacy_t1_rift_graffiti"}],4:[{type:"discount",scope:"black_market",value:.08}],6:[{type:"perkUnlock",perkId:"diplomacy_t3_shadow_outreach"}]}},ship_interceptor:{id:"ship_interceptor",displayName:"Interceptor Mastery",description:"Ship-specific XP earned while piloting the interceptor.",type:"ship",levelThresholds:[0,50,150,300,600],maxLevel:10,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"ship",stat:"evadeBase",operation:"addPercent",value:.05}]}],4:[{type:"modifierUnlock",id:"interceptor_mobility_combo_boost",description:"+10% combo gain from mobility actions."}],6:[{type:"specialAbilityUnlock",abilityId:"phantom_strike",description:"Once per encounter, perform a guaranteed backline strike after a dodge."}]}},ship_hauler:{id:"ship_hauler",displayName:"Hauler Mastery",description:"Progression while piloting large cargo haulers.",type:"ship",levelThresholds:[0,40,120,260,500],maxLevel:8,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"ship",stat:"cargoCapacity",operation:"addFlat",value:15}]}],4:[{type:"perkUnlock",perkId:"ship_hauler_hazard_steadiness"}],6:[{type:"specialAbilityUnlock",abilityId:"emergency_shield_pulse",description:"Deploy a pulse that restores shields equal to 15% of max."}]}},ship_miner:{id:"ship_miner",displayName:"Colonial Miner Mastery",description:"XP gained while using dedicated mining platforms.",type:"ship",levelThresholds:[0,60,180,360,720],maxLevel:10,rewardsByLevel:{2:[{type:"statBoost",effects:[{target:"mining",stat:"signalRadius",operation:"addPercent",value:.1}]}],5:[{type:"modifierUnlock",id:"deep_miner_cluster_focus",description:"Mining shifts reveal two adjacent cells when drilling."}],8:[{type:"specialAbilityUnlock",abilityId:"resonance_burst",description:"Emit a resonance burst that rewards guaranteed uncommon loot next drill."}]}}},Ms={survival_t1_hull_plating:{id:"survival_t1_hull_plating",branch:"survival",tier:1,displayName:"Hull Plating I",description:"+5% hull integrity and -10% mining hazard damage.",requires:[],effects:[{target:"ship",stat:"hullMaxMultiplier",operation:"mul",value:1.05},{target:"mining",stat:"hazardDamageMultiplier",operation:"mul",value:.9}]},precision_t1_targeting_assist:{id:"precision_t1_targeting_assist",branch:"precision",tier:1,displayName:"Targeting Assist",description:"+5% weapon accuracy and +10% accuracy vs backline.",requires:[],effects:[{target:"combat",stat:"accuracyBase",operation:"addPercent",value:.05},{target:"combat",stat:"accuracyBacklineBonus",operation:"addPercent",value:.1}]},extraction_t1_efficient_strikes:{id:"extraction_t1_efficient_strikes",branch:"extraction",tier:1,displayName:"Efficient Strikes",description:"+10% ore yield, -5% drill wear.",requires:[],effects:[{target:"mining",stat:"oreYieldMultiplier",operation:"mul",value:1.1},{target:"mining",stat:"drillWearMultiplier",operation:"mul",value:.95}]},extraction_t2_vein_whisperer:{id:"extraction_t2_vein_whisperer",branch:"extraction",tier:2,displayName:"Vein Whisperer",description:"+10% signal readings and +5% combo gain on surveyed tiles.",requires:["extraction_t1_efficient_strikes"],effects:[{target:"mining",stat:"signalBonus",operation:"addPercent",value:.1},{target:"mining",stat:"comboGainMultiplier",operation:"mul",value:1.05}]},extraction_t3_deep_delver:{id:"extraction_t3_deep_delver",branch:"extraction",tier:3,displayName:"Deep Delver",description:"+8% rare yield and +8% hazard control from Risk Chain perks.",requires:["extraction_t2_vein_whisperer"],effects:[{target:"mining",stat:"rareYieldMultiplier",operation:"mul",value:1.08},{target:"mining",stat:"hazardControlBonus",operation:"addPercent",value:.08}]},precision_t2_headshot_focus:{id:"precision_t2_headshot_focus",branch:"precision",tier:2,displayName:"Headshot Focus",description:"+5% crit chance and +8% backline accuracy.",requires:["precision_t1_targeting_assist"],effects:[{target:"combat",stat:"critChance",operation:"addPercent",value:.05},{target:"combat",stat:"accuracyBacklineBonus",operation:"addPercent",value:.08}]},survival_t2_defensive_burst:{id:"survival_t2_defensive_burst",branch:"survival",tier:2,displayName:"Defensive Burst",description:"Shield hits trigger 12% faster regen for 2 seconds.",requires:["survival_t1_hull_plating"],effects:[{target:"combat",stat:"shieldRegenTriggerBonus",operation:"addPercent",value:.12}]},precision_t3_backline_breach:{id:"precision_t3_backline_breach",branch:"precision",tier:3,displayName:"Backline Breach",description:"Backline strikes ignore 10% of enemy evasion.",requires:["precision_t2_headshot_focus"],effects:[{target:"combat",stat:"backlineAccuracyMultiplier",operation:"mul",value:1.1}]},survival_t3_last_stand_matrix:{id:"survival_t3_last_stand_matrix",branch:"survival",tier:3,displayName:"Last Stand Matrix",description:"When hull drops below 30%, damage taken is reduced by 15%.",requires:["survival_t2_defensive_burst"],effects:[{target:"combat",stat:"lowHullDamageMultiplier",operation:"mul",value:.85}]},control_t1_quick_cycle:{id:"control_t1_quick_cycle",branch:"control",tier:1,displayName:"Quick Cycle",description:"Using different action categories in sequence builds 20% more combo.",requires:[],effects:[{target:"combo",stat:"variationGainMultiplier",operation:"mul",value:1.2}]},control_t2_route_insight:{id:"control_t2_route_insight",branch:"control",tier:2,displayName:"Route Insight",description:"Long-distance jumps refresh 25% faster and reduce hazard chatter.",requires:["control_t1_quick_cycle"],effects:[{target:"travel",stat:"jumpCooldownMultiplier",operation:"mul",value:.75},{target:"travel",stat:"hazardDetectionBonus",operation:"addPercent",value:.08}]},control_t3_hazard_mapping:{id:"control_t3_hazard_mapping",branch:"control",tier:3,displayName:"Hazard Mapping",description:"Gain a partial hazard map for the next jump and +5% fuel efficiency in wildspace.",requires:["control_t2_route_insight"],effects:[{target:"travel",stat:"nextJumpScan",operation:"add",value:1},{target:"travel",stat:"fuelCostMultiplier",operation:"mul",value:.95}]},diplomacy_t1_rift_graffiti:{id:"diplomacy_t1_rift_graffiti",branch:"diplomacy",tier:1,displayName:"Rift Graffiti",description:"+3% intel on pirate routes and first contact goodwill.",requires:[],effects:[{target:"intel",stat:"pirateRouteDetection",operation:"addPercent",value:.03},{target:"faction_pirate",stat:"reachBonus",operation:"addPercent",value:.05}]},diplomacy_t2_courier_favor:{id:"diplomacy_t2_courier_favor",branch:"diplomacy",tier:2,displayName:"Courier Favor",description:"Civilian markets grant +4% trade intel and reduce smuggling detection by 5%.",requires:[],effects:[{target:"economy",stat:"intelGainMultiplier",operation:"addPercent",value:.04},{target:"smuggling",stat:"detectionBaseline",operation:"mul",value:.95}]},diplomacy_t3_shadow_outreach:{id:"diplomacy_t3_shadow_outreach",branch:"diplomacy",tier:3,displayName:"Shadow Outreach",description:"Pirate contacts share unique trade routes and trigger a weekly black market mission.",requires:["diplomacy_t1_rift_graffiti"],effects:[{target:"events",stat:"pirateMissionWeight",operation:"addPercent",value:.05}]},risk_t5_chain_momentum:{id:"risk_t5_chain_momentum",branch:"risk",tier:5,displayName:"Risk Chain Momentum",description:"Maintain a higher Risk Chain level for two extra turns, unlocking bigger rewards.",requires:["extraction_t3_deep_delver"],effects:[{target:"mining",stat:"riskChainDecayDelay",operation:"add",value:2}]},economy_t4_hazard_insight:{id:"economy_t4_hazard_insight",branch:"economy",tier:4,displayName:"Hazard Insight",description:"Hazard readings grant +10% payout on rare minerals during extraction.",requires:["extraction_t2_vein_whisperer"],effects:[{target:"mining",stat:"rareYieldMultiplier",operation:"mul",value:1.1}]},ship_hauler_hazard_steadiness:{id:"ship_hauler_hazard_steadiness",branch:"ship",tier:1,displayName:"Hazard Steadiness",description:"Hauler frame resists hazard damage by 15%.",requires:[],effects:[{target:"ship",stat:"hazardDamageMultiplier",operation:"mul",value:.85}]}},ga={xpTracks:bs,perks:Ms},ya=ga,va=ga.xpTracks;function xs(e){return va[e]}function ws(e,t=0){const n=xs(e);if(!n)return null;const a=n.levelThresholds??[];let i=0;for(let m=0;m<a.length&&t>=a[m];m+=1)i=m;const s=a.length?Math.min(i,a.length-1):0,o=a[s]??0,d=s+1<a.length?a[s+1]:null,u=Math.max(0,t-o),p=d!==null?Math.max(0,d-o):null;return{track:n,level:Math.min(s,n.maxLevel),xpIntoLevel:u,xpNeededForNextLevel:p,nextThreshold:d,currentThreshold:o,xp:t}}function ba(e={}){return Object.values(va).map(t=>ws(t.id,Math.max(0,e[t.id]??0))).filter(t=>t!==null)}const Ma=ya.perks??{},xa=ya.xpTracks??{};function wa(){return l.player.perksUnlocked||(l.player.perksUnlocked=[]),new Set(l.player.perksUnlocked)}function $s(e){return Array.from(e)}function ks(e){return Ma[e]??null}function Ss(e){const t=(e??"").toLowerCase();return/pirate|raider|rift|syndicate/.test(t)?"faction_pirate":"faction_civilian"}function _s(){const e=l.ship?.templateId;if(!e)return null;const t=`ship_${e}`;return xa[t]?t:null}function Cs(){return!l||!l.player?[]:l.player.perksUnlocked??[]}function de(e){return Cs().includes(e)}function Ts(){const e={};for(const[t,n]of Object.entries(xa)){const a=n.rewardsByLevel??{};for(const[i,s]of Object.entries(a)){const o=Number(i);if(!Number.isNaN(o))for(const d of s)d?.type==="perkUnlock"&&d.perkId&&(d.perkId in e||(e[d.perkId]={trackId:t,level:o}))}}return e}const Es=Ts();function Rs(){const e=wa(),t={};for(const[n,a]of Object.entries(Ma)){const i={id:n,displayName:a.displayName,description:a.description,branch:a.branch??"general",tier:a.tier??1,unlocked:e.has(n),requires:a.requires??[],source:Es[n],effectTargets:Array.from(new Set((a.effects??[]).map(s=>s.target)))};t[i.branch]||(t[i.branch]=[]),t[i.branch].push(i)}for(const n of Object.keys(t))t[n].sort((a,i)=>a.tier-i.tier||a.displayName.localeCompare(i.displayName));return t}function Is(){if(!l||!l.player)return[];const e=ba(l.player.xpTracks??{}),t=wa(),n=[];for(const i of e){const s=i.track.rewardsByLevel??{};for(const o of Object.keys(s)){const d=Number(o);if(Number.isNaN(d)||d>i.level)continue;const u=s[o]??[];for(const p of u){if(p?.type!=="perkUnlock"||!p.perkId)continue;const m=p.perkId;if(t.has(m))continue;const h=ks(m);!h||(h.requires??[]).some(f=>!t.has(f))||(t.add(m),n.push(m))}}}const a=$s(t);return l.player.perksUnlocked=a,n.length>0&&l.notifications.push(`Perks unlocked: ${n.join(", ")}.`),Pi(),n}function pe(e,t="mining"){return l?(Ji(e,t),Is()):[]}function Bs(e,t){if(!l)return[];if(e<=0)return[];const n=Ss(t);return pe(e,n)}function Ds(e){if(!l)return[];const t=_s();return t?pe(e,t):[]}let Ot=[];function Ps(e){Ot=e}function As(e){return Ot.find(t=>t.id===e)}function Ls(){const e=new Set(l.contracts.filter(t=>t.status==="active").map(t=>t.id));return Ot.filter(t=>!e.has(t.id))}function fe(){return l.contracts.filter(e=>e.status==="active")}function Ns(e){const t=e.requirements,n=i=>i?`<strong>${Q(i)?.name||i}</strong>`:"",a=[];if(t?.travel?.systemId){const i=n(t.travel.systemId);a.push(`Travel to ${i}`)}if(t?.deliver?.commodityId){const i=t.deliver.quantity||0,s=t.deliver.systemId?` at ${n(t.deliver.systemId)}`:"";a.push(`Deliver ${i} ${t.deliver.commodityId}${s}`)}return t?.combat?.enemyId&&a.push(`Defeat ${t.combat.enemyId}`),a.join(" • ")||"No special requirements."}function Fs(e){const t=e.requirements,n=e.progress||{},a=[];if(t?.travel&&a.push(`Travel: ${n.travelCompleted?"Done":"Pending"}`),t?.deliver){const i=n.deliveredQuantity||0;a.push(`Delivery: ${i}/${t.deliver.quantity||0}`)}return t?.combat&&a.push(`Combat: ${n.combatCompleted?"Done":"Pending"}`),a.join(" | ")||e.status}function zt(e){const t=As(e);if(!t)return{success:!1,reason:"Unknown mission"};if(l.contracts.some(i=>i.id===e&&i.status==="active"))return{success:!1,reason:"Mission already active"};const n=Xs(t.requirements),a={id:t.id,name:t.name,description:t.description,type:t.type,status:"active",sourceFaction:t.factionId,targetSystemId:n,reward:t.reward,requirements:t.requirements,acceptedTurn:l.time.turn,progress:{}};return l.contracts.push(a),n&&Js(a.id,n),{success:!0}}function js(e,t){if(!e.reward)return;const n=e.reward;if(n.credits){const a=Math.max(.1,Math.min(5,O.contractPayoutMultiplier??1)),i=da(),s=Math.max(0,ne().incomeMultiplier??1),o=Math.max(0,Math.round(n.credits*a*i*s));l.player.credits+=o,_e(o),Gi(o),l.notifications.push(`Mission reward: +${o} credits.`)}if(n.rep){ua(n.rep);const a=Object.entries(n.rep).map(([i,s])=>`${i} ${s>=0?"+":""}${s}`).join(", ");a&&l.notifications.push(`Mission reward: Reputation updated (${a}).`);for(const[i,s]of Object.entries(n.rep))s>0&&Bs(Math.max(2,Math.round(s*8)),i)}if(n.weapon){const a=l.inventory??{weapons:[]};a.weapons=a.weapons||[],a.weapons.push(n.weapon),l.inventory=a;const i=te(n.weapon)?.name??n.weapon;l.notifications.push(`Rewarded weapon: ${i}.`)}}function Hs(){fe().forEach(e=>{const t=e.requirements?.failureAfterTurns;if(t&&e.acceptedTurn!=null){const n=Math.max(.1,O.contractDifficultyMultiplier??1),a=Math.max(1,Math.round(t/n));l.time.turn-e.acceptedTurn>=a&&Os(e.id)}})}function Os(e){const t=l.contracts.find(n=>n.id===e&&n.status==="active");t&&(t.status="failed",lt(`Mission failed: ${t.name}`),qt(t.id))}function zs(e){const t=l.contracts.find(n=>n.id===e&&n.status==="active");return t?(t.status="failed",lt(`Mission abandoned: ${t.name}`),qt(t.id),{success:!0}):{success:!1,reason:"Mission not active"}}function qs(e){fe().forEach(t=>{const n=t.requirements?.travel;if(t.progress=t.progress||{},n?.systemId===e&&(t.progress.travelCompleted=!0,Fe(t)),t.requirements?.multiTravel?.length){const i=new Set(t.progress?.multiTravelVisited??[]);i.add(e),t.progress.multiTravelVisited=Array.from(i),Fe(t)}})}function Gs(e,t,n){fe().forEach(a=>{const i=a.requirements?.deliver;if(!i||i.commodityId!==e||i.systemId&&i.systemId!==n)return;const s=a.progress?.deliveredQuantity||0;a.progress=a.progress||{},a.progress.deliveredQuantity=s+t,Fe(a)})}function Us(e){fe().forEach(t=>{t.requirements?.combat?.enemyId===e&&(t.progress=t.progress||{},t.progress.combatCompleted=!0,Fe(t))})}function Ws(e,t){qs(t);const n=e.ship.cargo||={};let a=0;const i=[];for(const s of fe()){const o=s.status,d=s.requirements?.deliver;if(!d||!d.commodityId||(d.systemId??t)!==t||(a+=1,!Vs(n,d)))continue;d.retain||Ys(n,d),s.progress=s.progress||{};const p=s.progress.deliveredQuantity||0;s.progress.deliveredQuantity=p+(d.quantity||1),Fe(s),o!=="completed"&&s.status==="completed"&&i.push(s.name)}if(i.length){const s=`Contracts completed: ${i.join(", ")}`;e.notifications.push(s)}return{checked:a,completed:i}}function Vs(e,t){const n=Math.max(1,t.quantity??1);return(e[t.commodityId]??0)>=n}function Ys(e,t){const n=Math.max(1,t.quantity??1),a=e[t.commodityId]??0;e[t.commodityId]=Math.max(0,a-n)}function Fe(e){if(!e.requirements||e.status!=="active")return;const{travel:t,deliver:n,combat:a}=e.requirements,i=e.progress||{},s=e.requirements?.multiTravel,o=t?!!i.travelCompleted:!0,d=n?i.deliveredQuantity>=(n.quantity||0):!0,u=a?!!i.combatCompleted:!0,p=i.multiTravelVisited??[],m=s?s.every(h=>p.includes(h)):!0;o&&d&&u&&m&&(e.status="completed",js(e),Ui(),lt(`Mission completed: ${e.name}`),qt(e.id))}function lt(e){l.notifications.push(e)}function Xs(e){const t=e;if(t){if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.multiTravel&&t.multiTravel.length)return t.multiTravel[0]}}function Js(e,t){const n=ct();if(!n)return;const a=l.location.systemId,i=Ht(n,a,t);!i.length||i.length<=1||_.setActiveRoute({nodes:i,currentIndex:0,source:"mission",missionId:e})}function qt(e){_.activeRoute?.missionId===e&&_.clearActiveRoute()}function Ks(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",lt(`Mission failed (expired): ${n.name}`))}const xt=25,$a=100,Gt={taxEvasion:{cost:180,gain:10,name:"Tax Evasion Grid",benefit:"whispered import routes and shell accounts"},smuggling:{cost:150,gain:8,name:"Smuggling Ring",benefit:"hidden routes and tolerant contacts"},bribery:{cost:200,gain:12,name:"Bribery Ledger",benefit:"greased palms and friendly inspectors"}};function Ut(){return l.tradeStrategy||(l.tradeStrategy={taxEvasion:0,smuggling:0,bribery:0}),l.tradeStrategy}function ka(e){return Math.max(0,Math.min($a,e))}function Zs(){return Ut()}function Qs(e){return ka(Zs()[e])}function eo(e,t,n){const a=Math.floor(t/xt),i=Math.floor(n/xt);i>a&&l.notifications.push(`Trade Path: ${e} progress ${Math.min(i*xt,$a)}% (${Gt[e].name})`)}function _t(e,t){if(t<=0)return;const n=Ut(),a=n[e];n[e]=ka(a+t),eo(e,a,n[e])}function to(e){const t=Gt[e];return l.player.credits<t.cost?(l.notifications.push("Not enough credits to invest in "+t.name+"."),!1):(l.player.credits-=t.cost,_t(e,t.gain),l.notifications.push(`Invested ${t.cost} cr into ${t.name} (${t.benefit}).`),!0)}function Sa(e){return Gt[e]}function Wt(){const e=Ut();return{detectionReduction:Math.min(.25,e.bribery/400),fineDiscount:Math.min(.35,e.smuggling/280)}}const no=[{id:"dawn_reach_outer_belt",name:"Dawn Reach — Outer Belt",systemId:"dawn_reach",tags:["ore","starter","mining_belt"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.03},{id:"aurora_rich_field",name:"Aurora Belt — Rich Field",systemId:"aurora_belt",tags:["ore","rich","mining_belt"],stability:{start:90,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:12},overchargeLoss:{min:12,max:22}},commonTableId:"rich_ore_common",rareTableId:"rich_ore_rare",baseRareChance:.05},{id:"rift_shadow_grave",name:"Rift Expanses — Shadow Grave",systemId:"rift_expanses",tags:["salvage","black_market","mining_belt"],stability:{start:80,carefulLoss:{min:4,max:8},standardLoss:{min:9,max:15},overchargeLoss:{min:14,max:26}},commonTableId:"salvage_common",rareTableId:"salvage_rare",baseRareChance:.06},{id:"unity_shard_field",name:"Unity Enclave – Shard Pilgrimage Field",systemId:"unity_enclave",tags:["anomaly","restricted","mining_belt"],stability:{start:85,carefulLoss:{min:3,max:6},standardLoss:{min:7,max:13},overchargeLoss:{min:13,max:24}},commonTableId:"relic_common",rareTableId:"relic_rare",baseRareChance:.05},{id:"global_easy_signal_belt",name:"Low-Signal Relay Field",systemId:"global_easy_signal",tags:["mining_belt","easy_signal","global"],stability:{start:70,carefulLoss:{min:1,max:3},standardLoss:{min:3,max:6},overchargeLoss:{min:6,max:10}},commonTableId:"global_easy_common",rareTableId:"global_easy_rare",baseRareChance:.02}],ao=[{id:"basic_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:4,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.45},{type:"commodity",id:"food_rations",min:1,max:2,weight:.25}]},{id:"basic_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.1},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.25}]},{id:"rich_ore_common",entries:[{type:"commodity",id:"aurite_ore",min:2,max:6,weight:1},{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.6},{type:"commodity",id:"synthetic_fuel",min:1,max:2,weight:.35}]},{id:"rich_ore_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.25},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.2}]},{id:"salvage_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:.4},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.6},{type:"commodity",id:"steel_ingots",min:1,max:3,weight:.5}]},{id:"salvage_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.35},{type:"commodity",id:"unity_relics",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.3}]},{id:"relic_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:2,weight:.9},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.4}]},{id:"relic_rare",entries:[{type:"commodity",id:"unity_relics",min:2,max:3,weight:.4},{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.3},{type:"commodity",id:"medical_supplies",min:1,max:2,weight:.2}]},{id:"global_easy_common",entries:[{type:"commodity",id:"aurite_ore",min:0,max:2,weight:1},{type:"commodity",id:"titanium_wire",min:0,max:2,weight:.75},{type:"commodity",id:"purified_water",min:0,max:3,weight:.6},{type:"commodity",id:"textile_fiber",min:0,max:1,weight:.45}]},{id:"global_easy_rare",entries:[{type:"commodity",id:"luxury_spice",min:0,max:1,weight:.3},{type:"commodity",id:"medical_supplies",min:0,max:1,weight:.35},{type:"commodity",id:"contraband_data",min:0,max:1,weight:.2},{type:"commodity",id:"forbidden_ai_logic",min:0,max:1,weight:.1}]},{id:"depth_surface_common",entries:[{type:"commodity",id:"aurite_ore",min:1,max:3,weight:1},{type:"commodity",id:"steel_ingots",min:1,max:2,weight:.5},{type:"commodity",id:"purified_water",min:1,max:2,weight:.35}]},{id:"depth_surface_rare",entries:[{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.45},{type:"commodity",id:"luxury_spice",min:1,max:1,weight:.35},{type:"commodity",id:"textile_fiber",min:1,max:2,weight:.2}]},{id:"depth_mid_common",entries:[{type:"commodity",id:"steel_ingots",min:2,max:4,weight:.8},{type:"commodity",id:"synthetic_fuel",min:1,max:3,weight:.65},{type:"commodity",id:"textile_fiber",min:1,max:2,weight:.45}]},{id:"depth_mid_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:2,weight:.2},{type:"commodity",id:"emberite_pearl",min:1,max:1,weight:.2},{type:"commodity",id:"contraband_data",min:1,max:1,weight:.15},{type:"commodity",id:"medical_supplies",min:1,max:1,weight:.05}]},{id:"depth_deep_common",entries:[{type:"commodity",id:"contraband_data",min:1,max:3,weight:.4},{type:"commodity",id:"boreal_crystal",min:1,max:3,weight:.5},{type:"commodity",id:"synthetic_fuel",min:2,max:4,weight:.55},{type:"commodity",id:"steel_ingots",min:2,max:5,weight:.4}]},{id:"depth_deep_rare",entries:[{type:"commodity",id:"luxury_spice",min:1,max:3,weight:.15},{type:"commodity",id:"umbrite_shard",min:1,max:2,weight:.2},{type:"commodity",id:"unity_relics",min:1,max:2,weight:.2},{type:"commodity",id:"medical_supplies",min:2,max:3,weight:.1}]},{id:"depth_deep_ultra",entries:[{type:"commodity",id:"forbidden_ai_logic",min:0,max:1,weight:.6},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.4}]},{id:"depth_core_common",entries:[{type:"commodity",id:"unity_relics",min:1,max:3,weight:.8},{type:"commodity",id:"contraband_data",min:1,max:2,weight:.5},{type:"commodity",id:"boreal_crystal",min:1,max:2,weight:.4},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.35}]},{id:"depth_core_rare",entries:[{type:"commodity",id:"forbidden_ai_logic",min:1,max:1,weight:.2},{type:"commodity",id:"umbrite_shard",min:1,max:2,weight:.25},{type:"commodity",id:"ship_parts",min:1,max:2,weight:.25},{type:"commodity",id:"unity_relics",min:2,max:3,weight:.15}]},{id:"depth_core_ultra",entries:[{type:"commodity",id:"quantum_tessera",min:1,max:1,weight:.6},{type:"commodity",id:"forbidden_ai_logic",min:1,max:1,weight:.4},{type:"commodity",id:"unity_relics",min:1,max:2,weight:.35}]}],_a={belts:no,tables:ao},Ca="__global__",io={buyMultiplier:1,sellMultiplier:.85},so={basic:.9,standard:1,strategic:1.2,luxury:1.35},oo=new Set((_a.tables??[]).flatMap(e=>(e.entries??[]).map(t=>t.id)));function dt(){return l.ship.cargo||(l.ship.cargo={}),l.ship.cargo}function ro(){const e=dt();return Object.values(e).reduce((t,n)=>t+n,0)}function Ta(){return C?.commodities??[]}function re(e){return Ta().find(n=>n.id===e)??null}function le(){return l.marketState?(l.marketState.temporaryModifiers=l.marketState.temporaryModifiers||{},l.marketState.activeEvents=l.marketState.activeEvents||[],l.marketState.localAdjustments=l.marketState.localAdjustments||{},l.marketState.priceIntel=l.marketState.priceIntel||{},l.marketState.initialDriftSeeded=l.marketState.initialDriftSeeded??!1):l.marketState={temporaryModifiers:{},activeEvents:[],localAdjustments:{},priceIntel:{}},l.marketState}function co(e){l.intel||(l.intel={systems:[]});const t=l.intel.systems.find(n=>n.systemId===e)??(()=>{const n={systemId:e};return l.intel.systems.push(n),n})();t.lastPriceSeenDay=l.time.day}function lo(e){const t=le();let n=1;const a=t.temporaryModifiers[Ca];a&&(n*=Math.max(0,a.multiplier));const i=t.temporaryModifiers[e];return i&&(n*=Math.max(0,i.multiplier)),n}function uo(e,t){const n=t>0?t:1,a=e/n;return a>=1.15?"high":a<=.85?"low":"stable"}function po(e,t){const n=e.marketProfile;if(!n)return 1;let a=1;const i=n.imports?.includes(t.id),s=n.exports?.includes(t.id);return i&&(a*=1.2),s&&(a*=.85),t.legalStatus==="illegal"?a*=n.blackMarket?1.1:1.25:n.blackMarket&&(a*=.95),typeof n.taxRate=="number"&&(a*=1+Math.max(0,n.taxRate)),a}function Vt(e){const t=Math.min(Math.max(e.volatility??.25,0),1),n=Math.min(2,Math.max(0,(O.marketPriceVolatility??100)/100));return Math.min(1,t*n)}function mo(e,t){const n=Math.max(1,t.basePrice),a=so[t.tier??"standard"]??1,i=e.marketModifiers?.[t.id]??1,s=po(e,t),d=1+Vt(t)*.08,u=lo(t.id),p=yo(e.id,t.id),m=Ia(e.id,t.id),h=n*a*i*s*d*u*p*m,y=oo.has(t.id)?.5:1;return Math.max(1,Math.round(h*y))}function bn(e,t){return ie(e,t).base}function ie(e,t){const n=Q(e),a=re(t);if(!n||!a)return{base:0,buy:0,sell:0,high:0,low:0,trend:"stable"};const i=mo(n,a),s=a.baseSpread??io,o=Vt(a),d=ne(),u=Math.max(.1,Math.min(3,O.tradeProfitMultiplier??1)),p=da(),m=Math.max(.5,d.buyBonus??1),h=Math.max(0,d.sellBonus??1),y=Math.max(.5,d.marketTax??1),g=Math.max(1,Math.round(i*(s.buyMultiplier??1)*(1+o*.05)/u*m)),f=Math.max(1,Math.round(i*(s.sellMultiplier??.85)*Math.max(.6,1-o*.05)*u*p*h*y)),b=Math.max(1,Math.min(f,g-1)),v=Math.max(g,b,Math.round(i*(1+o*.1))),E=Math.max(1,Math.min(g,b,Math.round(i*Math.max(.65,1-o*.2)))),T=uo(i,a.basePrice);return co(e),{base:i,buy:g,sell:b,high:v,low:E,trend:T}}function at(e,t,n=2){const a=le(),i=e&&e.length?e:Ca;a.temporaryModifiers[i]={multiplier:Math.max(0,t),remainingTurns:Math.max(1,Math.floor(n))}}function Ea(e=1){if(typeof e=="number"){ho(e);return}fo(e??l)}function ho(e){if(e<=0)return;const t=le(),n=Object.keys(t.temporaryModifiers);for(const i of n){const s=t.temporaryModifiers[i];s.remainingTurns-=e,s.remainingTurns<=0&&delete t.temporaryModifiers[i]}const a=l.time.turn;t.activeEvents=t.activeEvents.filter(i=>i.expiresAtTurn>a),Da(t,.2*e)}function fo(e){const t=le(),n=C?.systems??[],a=C?.commodities??[],i=e.time.day;go(t,n,a);for(const s of n)for(const o of a){const d=Ia(s.id,o.id),u=Vt(o),p=O.marketDailyTrendStrength??1,m=(1-d)*.1*p,h=(Math.random()-.5)*.1*(.5+u)*p,y=Ba(d+m+h);t.localAdjustments[s.id]||(t.localAdjustments[s.id]={}),t.localAdjustments[s.id][o.id]=y}t.activeEvents=t.activeEvents.filter(s=>!(s.expiresAtDay!==void 0&&i>=s.expiresAtDay||s.expiresAtTurn&&s.expiresAtTurn<=e.time.turn)),Da(t,.1)}function go(e,t,n){if(!e.initialDriftSeeded){for(const a of t){e.localAdjustments[a.id]||(e.localAdjustments[a.id]={});for(const i of n){const s=Math.max(.9,Math.min(1.1,1+(Math.random()-.5)*.1));e.localAdjustments[a.id][i.id]=s}}e.initialDriftSeeded=!0}}function it(e){return dt()[e]??0}function yo(e,t){return le().activeEvents.filter(a=>(a.expiresAtDay===void 0||l.time.day<a.expiresAtDay)&&a.expiresAtTurn>l.time.turn&&(!a.systemId||a.systemId===e)&&(!a.commodityId||a.commodityId===t)).reduce((a,i)=>a*Math.max(0,i.multiplier),1)}function vo(e){le().activeEvents.push(e)}function bo(e){return le().activeEvents.filter(n=>n.expiresAtTurn>l.time.turn&&(n.expiresAtDay===void 0||l.time.day<n.expiresAtDay)&&(!n.systemId||n.systemId===e))}function Mo(e){if(Math.random()>.08||!C?.commodities?.length)return;const n=C.commodities[Math.floor(Math.random()*C.commodities.length)],a=Math.ceil(3+Math.random()*3),i=1.15+Math.random()*.35,s={systemId:e,commodityId:n.id,multiplier:i,expiresAtTurn:l.time.turn+a,label:`${n.name} market shift x${i.toFixed(2)} (${a}t)`};vo(s),l.notifications.push(`Market shift in ${e}: ${n.name} prices x${i.toFixed(2)} for ${a} turns.`)}function Ra(e,t,n,a,i){if(n<=0||a<=0)return;const o=n*a/5e3,d=Math.min(.15,.03*o),u=le();u.localAdjustments[e]||(u.localAdjustments[e]={});const p=u.localAdjustments[e][t]??1,m=i==="buy"?1+d:1-d,h=Ba(p*m);u.localAdjustments[e][t]=h}function Ia(e,t){return le().localAdjustments[e]?.[t]??1}function Ba(e){return Math.min(2,Math.max(.5,e))}function Da(e,t){for(const[n,a]of Object.entries(e.localAdjustments)){for(const[i,s]of Object.entries(a)){const o=s-1,d=s-o*t;Math.abs(d-1)<.01?delete a[i]:a[i]=d}Object.keys(a).length||delete e.localAdjustments[n]}}function xo(){const t=Q(l.location.systemId)?.neighbors.map(i=>Q(i.id)).filter(i=>!!i)||[];if(!t.length)return{success:!1,message:"No neighboring systems to scan."};const n=Aa();if(l.player.credits<n)return{success:!1,message:`Intel costs ${n} cr (rep-based). Not enough credits.`};l.player.credits-=n;const a=le();return t.forEach(i=>{const s={};(C?.commodities||[]).forEach(d=>{const u=ie(i.id,d.id);s[d.id]={buy:u.buy,sell:u.sell}});const o={turn:l.time.turn,prices:s};a.priceIntel[i.id]=o}),{success:!0,message:`Purchased neighbor intel for ${n} cr.`}}function Pa(){return le().priceIntel}function Aa(){const t=Q(l.location.systemId)?.neighbors.map(d=>Q(d.id)).filter(d=>!!d)||[],n=80,a=t.map(d=>d.faction?os(d.faction):null).filter(d=>typeof d=="number"),i=a.length?a.reduce((d,u)=>d+u,0)/a.length:0,s=Mn(1-i/200,.5,1.4),o=Math.round(n*s);return Mn(o,40,140)}function Mn(e,t=0,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(n,e))}function La(e,t,n){if(n<=0)return!1;const a=ie(e,t).buy;if(a<=0)return!1;const i=a*n;if(l.player.credits<i)return!1;const s=l.ship.cargoCapacity;return s<=0?!1:ro()+n<=s}function Na(e,t,n){return n<=0?!1:it(t)>=n}function Fa(e,t,n){if(!La(e,t,n))return!1;const a=ie(e,t).buy,i=a*n;l.player.credits-=i;const s=dt();s[t]=(s[t]||0)+n,Ra(e,t,n,a,"buy");const o=re(t);return l.notifications.push(`Bought ${n} ${o?.name||t} @ ${a} each for ${i} cr.`),!0}function Yt(e,t,n){if(!Na(e,t,n))return!1;const a=ie(e,t).sell,i=a*n,s=dt();s[t]=Math.max(0,(s[t]||0)-n),l.player.credits+=i,_e(i),qi(t,n,i),Ra(e,t,n,a,"sell"),Gs(t,n,e);const o=re(t);if(o){const d=Q(e),u=Math.max(0,d?.marketProfile?.taxRate??0);u>0&&i>0&&_t("taxEvasion",Math.max(1,Math.round(i*u*.01))),o.legalStatus&&o.legalStatus!=="legal"&&_t("smuggling",Math.max(1,Math.round(i*.003)))}return l.notifications.push(`Sold ${n} ${o?.name||t} @ ${a} each for ${i} cr.`),!0}function ja(e,t){const n=e.ship.cargo||{};return Object.entries(n).reduce((a,[i,s])=>{if(!s)return a;const o=ie(t,i).sell;return a+o*s},0)}const xn={ship_destroyed:"Ship Destroyed",out_of_fuel:"Stranded Without Fuel",story_fail:"Story Fail",other:"Game Over"};function Ha(e,t){if(!l||l.gameOver.active)return;const n=Fi(),a=ji(n),i={score:a,reason:e,message:t??xn[e]??xn.other,location:l.location.systemId,stats:n};l.combat=null,l.miningSession=null,l.gameOver={active:!0,reason:e,message:i.message,summary:i};const s={score:a,reason:e,daysSurvived:n.daysSurvived,contractsCompleted:n.contractsCompleted,shipsDestroyed:n.shipsDestroyed,timestamp:Date.now(),message:i.message};zi(s),_.go("gameover")}function Oa(e=!1){const t=ea();ta(t),aa(),_.go(e?"main":"ship_select")}const Xt="space-events-cache";let je=[];function wo(e){const t=Ro();je=Eo(e,t),za(je)}function Jt(e){return je.find(t=>t.id===e)}function $o(e){if(!e.to)return;const t=Math.max(0,Math.min(1,e.hazardChance??.4));if(Math.random()>t)return;const n=K(),a=Math.max(0,n.nonPirateEventWeight??1)*Math.max(0,ne().anomalyChance??1),i=Math.min(1,Math.max(0,(O.eventFrequency??50)/100*a));if(Math.random()>i)return;const s=je.map(u=>({ev:u,weight:Do(u,e)})).filter(u=>u.weight>0);if(!s.length)return;const o=s.reduce((u,p)=>u+p.weight,0);let d=Math.random()*o;for(const u of s)if(d-=u.weight,d<=0)return u.ev;return s[0].ev}function ko(e){const t=e.outcomes;if(!t)return{};const n={},a=ne(),i=Math.max(.1,Math.min(5,O.eventRewardMultiplier??1))*Math.max(.1,a.eventRewardMultiplier??1),s=o=>{l.player.credits+=o,_e(o),l.player.credits<0&&(l.player.credits=0)};if(t.giveCredits){const o=t.giveCredits.min??0,d=t.giveCredits.max??o,u=Pe(o,d),p=Math.round(u*i);s(p),l.notifications.push(`Received ${p} credits.`)}if(typeof t.creditsDelta=="number"){const o=Math.round(t.creditsDelta*i);s(o)}if(typeof t.fuelDelta=="number"){const o=l.ship.maxFuel,d=t.fuelDelta>0?Math.max(0,Math.round(t.fuelDelta*i)):t.fuelDelta;l.ship.fuel=Math.max(0,Math.min(o,l.ship.fuel+d))}if(typeof t.turnDelta=="number"){const o=ia(t.turnDelta);l.time.turn+=o,Hs(),Ea(o)}if(t.cargoGain&&wn(Io(t.cargoGain,i,1),1),t.cargoLoss&&wn(t.cargoLoss,-1),t.giveCommodity){const o=Pe(t.giveCommodity.min,t.giveCommodity.max),d=Math.max(0,Math.round(o*i));Ct(t.giveCommodity.id,d),d>0&&l.notifications.push(`Collected ${d} ${t.giveCommodity.id}.`)}if(t.giveWeapon&&(l.inventory.weapons.push(t.giveWeapon),l.notifications.push(`Acquired weapon: ${t.giveWeapon}.`)),t.damageShip){const o=t.damageShip.min??0,d=t.damageShip.max??o,u=Pe(o,d);if(l.ship.hp=Math.max(0,l.ship.hp-u),l.notifications.push(`Ship took ${u} damage.`),l.ship.hp<=0)return Ha("ship_destroyed","Ship destroyed by event."),n}if(t.applyStatus&&l.notifications.push(`Status effect applied: ${JSON.stringify(t.applyStatus)}.`),typeof t.spawnMissionId=="string"&&zt(t.spawnMissionId).success&&l.notifications.push(`New mission received: ${t.spawnMissionId}`),typeof t.flag=="string"&&l.notifications.push(`Event flag: ${t.flag}`),t.market){const o=t.market,d=Math.max(0,o.multiplier),u=Math.max(1,Math.floor(o.duration??2));at(o.commodityId,d,u);const p=l.location?.systemId,m=o.commodityId&&C?.commodities?C.commodities.find(y=>y.id===o.commodityId):void 0,h=`${m?.name||"Local goods"} ${d>=1?"surge":"slip"}`;p&&l.marketState&&l.marketState.activeEvents.push({systemId:p,commodityId:o.commodityId??null,multiplier:d,expiresAtDay:l.time.day+u,expiresAtTurn:l.time.turn+u*2,label:h}),l.notifications.push(`Market shift in ${p??"this system"}: ${m?.name||"local goods"} x${d.toFixed(2)} for ${u} turns.`)}return t.modifyReputation&&ua({[t.modifyReputation.faction]:t.modifyReputation.amount}),t.triggerCombat?.enemyId&&(n.triggerCombat=t.triggerCombat),n}function So(e){const t={},n=e.autoResolve;if(!n)return t;const a=Math.max(.1,Math.min(5,O.eventRewardMultiplier??1))*Math.max(.1,ne().eventRewardMultiplier??1);if(n.mining){const i=Pe(n.mining.quantity.min,n.mining.quantity.max),s=Math.max(0,Math.round(i*a));Ct(n.mining.commodityId,s),l.notifications.push(`Mining yield: ${s} ${n.mining.commodityId} (${n.mining.grade??"standard"}).`)}if(n.anomaly?.effects?.fuelLoss){const i=Pe(n.anomaly.effects.fuelLoss.min,n.anomaly.effects.fuelLoss.max),s=l.ship.maxFuel;l.ship.fuel=Math.max(0,Math.min(s,l.ship.fuel-i)),l.notifications.push(`Anomaly drained ${i} fuel.`)}if(n.exploration?.lootTable?.length){const i=n.exploration.lootTable[Math.floor(Math.random()*n.exploration.lootTable.length)];Ct(i,1),l.notifications.push(`Recovered loot: ${i}.`)}return n.market?.temporaryPriceBoost&&(l.notifications.push(`Market shift: ${n.market.commodityId??"local goods"} prices boosted x${n.market.temporaryPriceBoost} for ${n.market.duration??1} turns.`),at(n.market.commodityId,n.market.temporaryPriceBoost,n.market.duration??2)),n.combat?.enemyId&&(t.triggerCombat={enemyId:n.combat.enemyId,ambush:n.combat.ambush}),t}function _o(e){const t=e.time.day;e.marketState?.activeEvents&&(e.marketState.activeEvents=e.marketState.activeEvents.filter(i=>i.expiresAtDay===void 0||t<i.expiresAtDay));const n=Math.min(1,Math.max(0,(O.marketBurstChance??5)/100)),a=Math.min(1,Math.max(0,(O.marketCrashChance??5)/100));if(e.location?.systemId){const i=C?.commodities?.[Math.floor(Math.random()*(C?.commodities.length||1))];if(i){const s=e.location.systemId,o=2+Math.ceil(Math.random()*2);if(Math.random()<n){const d=1.1+Math.random()*.35;at(i.id,d,o),e.marketState.activeEvents.push({systemId:s,commodityId:i.id,multiplier:Math.max(0,d),expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${i.name} surge`}),e.notifications.push(`Market surge in ${s}: ${i.name} prices x${d.toFixed(2)} for ${o} turns.`)}else if(Math.random()<a){const d=Math.max(.5,.85-Math.random()*.25);at(i.id,d,o),e.marketState.activeEvents.push({systemId:s,commodityId:i.id,multiplier:d,expiresAtDay:t+o,expiresAtTurn:e.time.turn+o*2,label:`${i.name} slip`}),e.notifications.push(`Market slip in ${s}: ${i.name} prices x${d.toFixed(2)} for ${o} turns.`)}}}}function Co(){za(je)}function To(){typeof window>"u"||!window.localStorage||window.localStorage.removeItem(Xt)}function Eo(e,t){if(!t?.length)return e;const n=new Map;for(const a of e)n.set(a.id,a);for(const a of t)n.set(a.id,a);return Array.from(n.values())}function Ro(){if(typeof window>"u"||!window.localStorage)return null;const e=window.localStorage.getItem(Xt);if(!e)return null;try{const t=JSON.parse(e);if(Array.isArray(t))return t}catch{}return null}function za(e){typeof window>"u"||!window.localStorage||window.localStorage.setItem(Xt,JSON.stringify(e))}function wn(e,t){for(const[n,a]of Object.entries(e)){const i=l.ship.cargo[n]??0,s=Math.max(0,i+a*t);l.ship.cargo[n]=s}}function Io(e,t,n=1){const a={};for(const[i,s]of Object.entries(e)){if(s<=0){a[i]=s;continue}const o=Math.max(n,Math.round(s*t));a[i]=o}return a}function Ct(e,t){const n=l.ship.cargo[e]??0,a=Object.values(l.ship.cargo).reduce((o,d)=>o+d,0),i=Math.max(0,l.ship.cargoCapacity-a),s=Math.max(0,Math.min(t,i));l.ship.cargo[e]=n+s,s<t&&l.notifications.push(`Cargo full: stored ${s}/${t} ${e}.`)}function Pe(e,t){const n=Number.isFinite(e)?e:0,a=Number.isFinite(t)?t:n,i=Math.ceil(n),s=Math.floor(Math.max(i,a));return s<=i?i:Math.floor(Math.random()*(s-i+1))+i}function Bo(e){const t=new Set;return(e.to?.tags||[]).forEach(n=>t.add(n)),(e.from?.tags||[]).forEach(n=>t.add(n)),t}function $n(e,t){return e.has(t)}function Do(e,t){let n=e.weight??0;const a=Bo(t);if(t.to?.eventWeights?.[e.id]&&(n+=t.to.eventWeights[e.id]),e.systemModifiers?.onlyInSystemsWithTags&&!e.systemModifiers.onlyInSystemsWithTags.some(o=>a.has(o)))return 0;if(e.systemModifiers?.weightMultiplier&&(n*=e.systemModifiers.weightMultiplier),e.tags.includes("danger")||e.type==="combat"){const s=Math.max(.1,O.eventDangerMultiplier??1);n*=s}t.routeType==="wild_jump"&&e.tags.includes("combat")&&(n+=.15),t.routeType==="trade_lane"&&e.tags.includes("inspection")&&(n+=.25),t.to?.tags.includes("mining_belt")&&(e.type==="mining"||e.tags.includes("mining"))&&(n+=.35),(t.to?.tags.includes("restricted")||t.to?.faction==="unity_church")&&e.tags.includes("inspection")&&(n+=.2),$n(a,"frontier")&&e.tags.includes("combat")&&(n+=.2),$n(a,"black_market")&&e.tags.includes("smuggling")&&(n+=.25);const i=fe().filter(s=>s.requirements?.travel?.systemId===t.to?.id);return i.length&&e.id==="smuggler_contact"&&(n+=.2*i.length),Math.max(0,n)}let Tt=[];function Po(e){Tt=e}function Ao(e,t=[]){const n=Tt.find(s=>s.id===`${e}_loot`);if(n)return n;const a=new Set(t);return Tt.find(s=>(s.enemyTags||[]).some(o=>a.has(o)))??null}function Et(e,t){const n=Math.ceil(e),a=Math.floor(Math.max(n,t));return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function Lo(e){if(!e.length)return null;const t=e.reduce((a,i)=>a+(i.weight||0),0);if(t<=0)return null;let n=Math.random()*t;for(const a of e)if(n-=a.weight||0,n<=0)return a;return e[e.length-1]}function No(e,t){const n=K(),a=Math.max(0,n.creditsRewardMultiplier??1)*Math.max(0,n.globalIncomeMultiplier??1);switch(e.type){case"credits":{const i=e.min??0,s=e.max??i,o=Et(i,s),d=Math.max(0,Math.round(o*a));l.player.credits+=d,t.creditsEarned+=d,_e(d);break}case"commodity":{const i=Et(e.min??1,e.max??e.min??1),s=Math.max(0,Math.round(i*a)),o=Fo(e.id||"unknown",s);o>0&&t.commodities.push({id:e.id||"unknown",qty:o});break}case"weapon":{e.id&&(l.inventory.weapons.push(e.id),t.weapons.push(e.id));break}case"component":{e.id&&(l.ship.components.push(e.id),t.components.push(e.id));break}case"mission":{e.id&&zt(e.id).success&&t.missionsGranted.push(e.id);break}}}function Fo(e,t){const n=l.ship.cargo[e]??0,a=Object.values(l.ship.cargo).reduce((o,d)=>o+d,0),i=Math.max(0,l.ship.cargoCapacity-a),s=Math.max(0,Math.min(t,i));return l.ship.cargo[e]=n+s,s}function jo(e,t,n={},a=[]){const i=K(),s=Math.max(0,i.creditsRewardMultiplier??1)*Math.max(0,i.globalIncomeMultiplier??1),o=Math.max(0,Math.min(1,(i.lootDropChance??100)/100));if(Math.random()>o)return null;const d=Ao(e,a);if(!d)return null;const u=n.quickKill?1.5:1,p=n.lowDamageTaken?1.25:1,m={enemyId:e,enemyName:t,creditsEarned:0,commodities:[],weapons:[],components:[],missionsGranted:[]},h=(g,f)=>{if(!g?.length||Math.random()>f)return;const b=Lo(g);b&&No(b,m)};h(d.common,o),h(kn(d.uncommon,p),.35*o);const y=Math.max(0,Math.min(1,(i.rareLootChance??12)/100));if(h(kn(d.rare,u),y*o),d.guaranteed?.credits){const{min:g,max:f}=d.guaranteed.credits,b=Et(g,f),v=Math.max(0,Math.round(b*s));l.player.credits+=v,m.creditsEarned+=v,_e(v)}return m}function kn(e,t){return!e||t===1?e:e.map(n=>({...n,weight:(n.weight||0)*t}))}function Kt(e){const t=e.ship,n=t.maxHp||t.hp||0,a=t.maxShields||t.shields||0,i=t.cargoCapacity||0,s=zo(t.weapons),o=qo(t.modules),d=e.player?.credits??0,u=Math.log10(d+1)*5,p=n+a+s+o+i/2+u;return Math.max(1,Math.round(p))}function Zt(e){const t=e/40;return t<0?0:t>1?1:t}const qa=30;function Ho(e){e.difficulty&&(e.difficulty.day=e.time.day,e.difficulty.playerPowerScore=Math.max(1,Math.round(Kt(e)/qa)))}function $e(e,t){if(!e.difficulty)return;const n=e.difficulty.tension+t;e.difficulty.tension=Math.max(0,Math.min(100,n))}function Ga(e){if(!e.difficulty)return 1;const t=Math.max(1,Math.round(Kt(e)/qa));e.difficulty.playerPowerScore=t;const n=e.difficulty.day*.03,a=t*.02,i=e.difficulty.tension*.01,s=1+n+a+i;return Math.max(1,s)}function Oo(e){if(!e.difficulty)return;const t=Math.max(.5,Zt(e.time.day))*.05;$e(e,-Math.min(e.difficulty.tension,t))}function zo(e){return e.reduce((t,n)=>{if(!n)return t;const a=te(n);if(!a)return t;const i=a.damage??0,s=a.accuracy??0,o=(a.critChance??0)*(a.critMultiplier??0);return t+i*1.5+s*.2+o},0)}function qo(e){return!e||!e.length?0:e.length*5}function Go(e){return C?C.systemsById[e]??null:null}function ut(e,t){const n=Go(e);return n?n.tags.includes(t):!1}const Uo=0,Wo=100;function Ua(e){const t=Math.max(Uo,Math.min(Wo,(l.player.wanted??0)+e));return l.player.wanted=t,t}function Vo(e,t,n){return Math.max(t,Math.min(n,e))}function Yo(e){const{systemId:t,state:n,sessionFactor:a}=e,i=C?.systems.find($=>$.id===t),s=i?.security??"medium",o=K(),d=ne();let u;switch(s){case"high":u=.02;break;case"low":u=.12;break;default:u=.06;break}i?.tags.includes("mining_belt")&&(u+=.02),i?.marketProfile?.blackMarket&&(u+=.03);const p=ja(n,t),m=qd(n.ship.templateId)?.cost??0,h=p+m,y=Math.min(.15,h/5e3)*Math.max(0,o.pirateCargoValueSensitivity??1),g=Xo(n,t),f=a*.03,b=Math.max(0,Math.min(1,(o.pirateEncounterRateBase??0)/100)),v=Math.max(0,Math.min(1,(O.pirateEncounterRate??0)/100)),E=Math.max(0,(o.encounterChancePerJump??100)/100),T=Math.max(0,o.globalDangerMultiplier??1)*Math.max(0,d.pirateDetectionMultiplier??1);let B=(u+y+f+g+b+v)*T*E;return Jo(B,n,t)}function Xo(e,t){const n=e.ship.cargo||{},a=Object.entries(n);if(!a.length)return 0;let i=0,s=0;for(const[u,p]of a){if(!p)continue;const m=ie(t,u),h=re(u)?.basePrice??m.sell;if(h<=0)continue;const y=(m.sell-h)/h;i+=y*p,s+=p}if(s<=0)return 0;const o=i/s;return Vo(o*.2,0,.15)}function Jo(e,t,n){const a=Zt(t.time.day),i=.4,o=i+(.75-i)*a;let d=e;return ut(n,"core")?(d>.25&&(d=.25),d<.01&&(d=.01),d):(d>o&&(d=o),d<.01&&(d=.01),d)}function Ko(e){return Math.min(10,Math.floor(e/200))}function Qt(e){const t=e?.player?.xp??0,n=Ko(t);return{level:n,fuel:1+n*.015,repair:1+n*.02,shield:1+n*.025}}const Zo=[{id:"surface",label:"Surface",level:0,depthRange:[1,2],valueMultiplier:1,dropWeights:{common:.96,rare:.04},lootTables:{common:"depth_surface_common",rare:"depth_surface_rare"},cluster:{chance:0,minSize:0,maxSize:0,maxClusters:0},comboGain:5},{id:"mid",label:"Mid",level:1,depthRange:[3,3],valueMultiplier:1.5,dropWeights:{common:.9,rare:.08,ultra:.02},lootTables:{common:"depth_mid_common",rare:"depth_mid_rare"},cluster:{chance:.25,minSize:2,maxSize:2,maxClusters:2},comboGain:7},{id:"deep",label:"Deep",level:2,depthRange:[4,4],valueMultiplier:2,dropWeights:{common:.75,rare:.2,ultra:.05},lootTables:{common:"depth_deep_common",rare:"depth_deep_rare",ultra:"depth_deep_ultra"},cluster:{chance:.55,minSize:2,maxSize:3,maxClusters:3},comboGain:9},{id:"core",label:"Core",level:3,depthRange:[5,5],valueMultiplier:3,dropWeights:{common:.7,rare:.25,ultra:.05},lootTables:{common:"depth_core_common",rare:"depth_core_rare",ultra:"depth_core_ultra"},cluster:{chance:.7,minSize:3,maxSize:5,maxClusters:3},comboGain:11}],Qo={threshold:100,duration:3,revealTiles:3,guaranteedRarityCount:2,threatReduction:.15,bandBonus:6,skipBandBonus:8},er={maxAttemptsPerBand:3},tr={hazardBaseChance:.05,hazardPerChain:.02,hazardDamageRange:[1,3],hazardDamageMultiplierPerLevel:.1,rewardMultipliers:[{maxLevel:2,multiplier:1},{maxLevel:4,multiplier:1.2},{maxLevel:7,multiplier:1.5},{maxLevel:10,multiplier:2},{maxLevel:1e3,multiplier:2.5}],milestones:[3,5,8,10],cashOutBase:25,cashOutPerLevel:15},Wa={bands:Zo,combo:Qo,clusterSettings:er,riskChain:tr},Va="pirate_cutter",nr=.5,Rt=_a,qe=9,Ge=9,Ue=5,Sn={1:{yieldMultiplier:.75,noise:.42,stabilityLossScale:.8,drillDamageChance:.01,drillDamageRange:[1,2]},2:{yieldMultiplier:.9,noise:.3,stabilityLossScale:.9,drillDamageChance:.02,drillDamageRange:[1,3]},3:{yieldMultiplier:1,noise:.2,stabilityLossScale:1,drillDamageChance:.04,drillDamageRange:[1,4]},4:{yieldMultiplier:1.18,noise:.14,stabilityLossScale:1.15,drillDamageChance:.08,drillDamageRange:[2,5]},5:{yieldMultiplier:1.32,noise:.22,stabilityLossScale:1.35,drillDamageChance:.12,drillDamageRange:[3,6]}},pt=Wa,He=pt.bands;new Map(He.map(e=>[e.id,e]));const Ya=new Map(He.map(e=>[e.id,e.level])),me=pt.combo,ar=pt.clusterSettings,ue=pt.riskChain,ir=4e-5,sr=.12,or=18e-5,rr=.35,cr=45e-5,lr=.28;function dr(e){const t=Math.max(0,e);return Math.min(sr,t*ir)}function ur(e){return 1+Math.min(rr,Math.max(0,e)*or)}function Xa(e){return 1+Math.min(lr,Math.max(0,e)*cr)}function mt(e){return He.find(n=>e>=n.depthRange[0]&&e<=n.depthRange[1])??He[0]}function Ja(e,t){if(t&&e.lootTables[t])return t;const n=["common","rare","ultra"].map(s=>[s,e.dropWeights[s]??0]),a=n.reduce((s,[,o])=>s+o,0);if(a<=0)return"common";let i=Math.random()*a;for(const[s,o]of n)if(i-=o,i<=0)return s;return"common"}function Ka(e,t){const n=e.lootTables[t]??e.lootTables.common,a=Sr(n);return _r(a)}function Za(e,t,n){if(n<=0)return;const a=e.pendingOre||{};a[t]=(a[t]??0)+n,e.pendingOre=a}function Qa(e,t){const n=e.pendingOre||{},a={};e.pendingOre={};for(const[i,s]of Object.entries(n)){const o=Math.ceil(Math.max(0,s));if(o<=0)continue;const d=oi(t,i,o);d>0&&si(e,i,d),a[i]=d}return a}function ei(e,t,n,a){const i=n-(e.veinCol??0),s=t-(e.veinRow??0),o=a-(e.veinDepth??3),u=Math.sqrt(i*i+s*s)*2.6+Math.abs(o)*1.5,p=Math.max(.2,1-(e.drillsUsed??0)*.04),m=(Math.random()*2-1)*p,h=10-u;let y=oe(Math.round(h+m),0,10);e.lowSignalMode&&(y=oe(y,0,5));const g=$r(e.veinRow??0,e.veinCol??0,t,n),f=kr(a,e.veinDepth??3),b=a<=3?.6:1;return{signal:oe(Math.round(y*b),0,10),directionClass:g,depthHint:f}}function pr(e){const t=e.gridRows??qe,n=e.gridCols??Ge,a=[];for(const i of He){const s=i.cluster.maxClusters;let o=0;for(let d=0;d<ar.maxAttemptsPerBand&&o<s;d++){if(Math.random()>i.cluster.chance)continue;const u=mr(t,n,i.cluster.minSize,i.cluster.maxSize,a);u.length>=i.cluster.minSize&&(a.push({bandId:i.id,cells:u}),o+=1)}}return a}function mr(e,t,n,a,i){const s=new Set(i.flatMap(y=>y.cells.map(g=>`${g.row}:${g.col}`))),o=Math.max(n,Math.min(a,nn(n,a))),d=[],u=Math.floor(Math.random()*e),p=Math.floor(Math.random()*t);d.push({row:u,col:p}),s.add(`${u}:${p}`);const m=[{dr:-1,dc:0},{dr:1,dc:0},{dr:0,dc:-1},{dr:0,dc:1}];let h=0;for(;d.length<o&&h<30;){const y=d[Math.floor(Math.random()*d.length)],g=m[Math.floor(Math.random()*m.length)],f={row:y.row+g.dr,col:y.col+g.dc};if(f.row<0||f.row>=e||f.col<0||f.col>=t||s.has(`${f.row}:${f.col}`)){h+=1;continue}s.add(`${f.row}:${f.col}`),d.push(f)}return d}function hr(e,t,n){return e.clusters?.find(a=>a.cells.some(i=>i.row===t&&i.col===n))}function ye(e,t){e.comboFlash=t,e.comboFlashTimer=40}function fr(e){e.comboFlashTimer&&e.comboFlashTimer>0&&(e.comboFlashTimer-=1,e.comboFlashTimer<=0&&(e.comboFlash=void 0))}function en(e,t){const n=e.lastComboBandId?Ya.get(e.lastComboBandId)??t.level:t.level;let a=t.comboGain;if(t.level>n){const d=t.level-n;a+=me.bandBonus*d,d>1&&(a+=me.skipBandBonus*(d-1))}const i=e.comboGauge??0,s=Math.min(me.threshold,i+a);e.comboGauge=s,e.lastComboBandId=t.id;let o=!1;if(s>=me.threshold){o=!0,e.comboGauge=0,e.comboBonusTurns=me.duration,e.comboGuarantyRemaining=me.guaranteedRarityCount,e.comboThreatReduction=me.threatReduction;const d=gr(e,me.revealTiles);e.comboRevealedCells=d,ti(e,d)}return{gain:s-i,triggered:o}}function gr(e,t){const n=e.grid??[],a=[];for(let s=0;s<n.length;s++)for(let o=0;o<(n[s]??[]).length;o++){const d=n[s][o];d&&!d.drilled&&d.hintSignal==null&&a.push({row:s,col:o})}const i=[];for(let s=0;s<t&&a.length;s++){const o=Math.floor(Math.random()*a.length);i.push(a[o]),a.splice(o,1)}return i}function ti(e,t){const n=oe(Math.round(e.depth??3),1,Ue),a=mt(n);vr(e,a.level,{row:r,col:c}),en(e,a);for(const i of t){const s=e.grid?.[i.row];if(!s)continue;const o=s[i.col];if(!o)continue;const d=ei(e,i.row,i.col,n);o.hintSignal=d.signal}}function tn(e){for(const t of ue.rewardMultipliers)if(e<=t.maxLevel)return t.multiplier;return 1}function ni(e,t=0){const n=dr(t);return Math.min(1,ue.hazardBaseChance+e*ue.hazardPerChain+n)}function Ce(e){e.riskChainLevel=0,e.lastRiskBandLevel=null,e.nextRiskGuaranteedRarity=null,e.riskChainMilestoneLevel=0}function _n(e,t,n){if(!t||!e.grid)return;const a=[{dr:-1,dc:0},{dr:1,dc:0},{dr:0,dc:-1},{dr:0,dc:1}],i=[];for(const s of a){const o=t.row+s.dr,d=t.col+s.dc;if(!(o<0||o>=(e.grid?.length??0))&&!(d<0||d>=(e.grid?.[o]?.length??0))&&(i.push({row:o,col:d}),i.length>=n))break}i.length&&ti(e,i)}function yr(e,t,n){const a=ue.milestones??[];let i=e.riskChainMilestoneLevel??0;for(const s of a)t>=s&&i<s&&(i=s,e.riskChainMilestoneLevel=s,s===3?(ye(e,"Steady Dig! Rewards climbing."),_n(e,n,1)):s===5?(ye(e,"Deep Run! Hidden tiles revealed."),_n(e,n,2),e.nextRiskGuaranteedRarity="rare"):s===8?(ye(e,"Loaded Veins! Next dig at least uncommon."),e.nextRiskGuaranteedRarity="rare"):s>=10&&(ye(e,"Jackpot Depth! Artifacts imminent."),e.nextRiskGuaranteedRarity="rare"))}function ai(e){if(e.comboGuarantyRemaining&&e.comboGuarantyRemaining>0)return e.comboGuarantyRemaining-=1,"rare";const t=e.nextRiskGuaranteedRarity;if(t)return e.nextRiskGuaranteedRarity=null,t}function vr(e,t,n){const a=e.lastRiskBandLevel??-1;t<a&&Ce(e),e.lastRiskBandLevel=t;const i=Math.max(1,(e.riskChainLevel??0)+1);return e.riskChainLevel=i,yr(e,i,n),i}function br(e,t,n,a,i=1){const o=(1+n*ue.hazardDamageMultiplierPerLevel)*ur(a)*Math.max(0,i),d=ci(t,1,[ue.hazardDamageRange[0],ue.hazardDamageRange[1]],o);return ye(e,`Risk hazard! -${d} hull.`),Ce(e),d}function ii(e){e.comboBonusTurns&&e.comboBonusTurns>0&&(e.comboBonusTurns-=1,e.comboBonusTurns<=0&&(e.comboThreatReduction=0))}function si(e,t,n){e.accumulatedOre||(e.accumulatedOre={}),e.accumulatedOre[t]=(e.accumulatedOre[t]??0)+n}function Mr(e,t){if(!t.accumulatedOre)return;const n=e.ship.cargo||{};for(const[a,i]of Object.entries(t.accumulatedOre))n[a]=Math.max(0,(n[a]??0)-i);e.ship.cargo=n,t.accumulatedOre={}}function oi(e,t,n){const a=e.ship.cargo||{},i=Object.values(a).reduce((d,u)=>d+u,0),s=Math.max(0,e.ship.cargoCapacity-i),o=Math.max(0,Math.min(n,s));return o>0&&(a[t]=(a[t]??0)+o,e.ship.cargo=a),e.notifications||(e.notifications=[]),o<n&&e.notifications.push(`Cargo constrained: stored ${o}/${n} ${t}.`),o}function nn(e,t){const n=Math.ceil(e),a=Math.floor(t);return a<=n?n:Math.floor(Math.random()*(a-n+1))+n}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function xr(e){const t=Math.max(.1,O.miningEfficiency??.55),n=Math.min(.4,(e.explorationScore??0)/25);return Math.min(1,t+n)}function ri(){const e=[];for(let t=0;t<qe;t++){const n=[];for(let a=0;a<Ge;a++)n.push({signal:null,drilled:!1,selected:!1,depthHint:null,directionClass:null});e.push(n)}return e}function wr(){const e=Math.floor(Math.random()*(qe-4))+2,t=Math.floor(Math.random()*(Ge-4))+2,n=2+Math.floor(Math.random()*(Ue-2));return{row:e,col:t,depth:n}}function $r(e,t,n,a){const i=t-a,s=e-n;if(Math.sqrt(i*i+s*s)<.5)return null;const d=Math.atan2(s,i)*(180/Math.PI),u=d<0?d+360:d;return u>=337.5||u<22.5?"dir-e":u<67.5?"dir-se":u<112.5?"dir-s":u<157.5?"dir-sw":u<202.5?"dir-w":u<247.5?"dir-nw":u<292.5?"dir-n":"dir-ne"}function kr(e,t){const n=e-t;return Math.abs(n)<=1?{hint:"optimal",className:"depth-perfect"}:n<0?{hint:"shallow",className:"depth-deeper"}:{hint:"deep",className:"depth-shallower"}}function ci(e,t,n,a=1){if(t<=0||Math.random()>t)return 0;const i=nn(n[0],n[1]),s=Math.max(1,Math.round(i*a));e.ship.hp=Math.max(0,e.ship.hp-s),e.notifications||(e.notifications=[]),e.notifications.push(`Drill backlash damaged hull for ${s}.`);const o=Qt(e),d=Math.round(s*(o.shield-1));if(d>0){const u=Math.min(d,e.ship.shields);e.ship.shields=Math.max(0,e.ship.shields-u),u>0&&e.notifications.push(`Shield wear due to upkeep drains ${u} shield.`)}return s}function li(e,t){const n=t?Rt.belts.find(i=>i.id===t):null;if(n)return n;const a=Rt.belts.find(i=>i.systemId===e);return a||{id:"default_belt",name:"Unmapped Belt",systemId:e,tags:["ore"],stability:{start:100,carefulLoss:{min:2,max:4},standardLoss:{min:5,max:10},overchargeLoss:{min:10,max:18}},commonTableId:"basic_ore_common",rareTableId:"basic_ore_rare",baseRareChance:.02}}function Sr(e){return e?Rt.tables.find(t=>t.id===e)??null:null}function _r(e){if(!e||!e.entries.length)return null;const t=e.entries.reduce((o,d)=>o+(d.weight||0),0);if(t<=0)return null;let n=Math.random()*t,a=null;for(const o of e.entries)if(n-=o.weight||0,n<=0){a=o;break}const i=a??e.entries[e.entries.length-1],s=nn(i.min,i.max);return{id:i.id,amount:s}}function Te(e,t,n,a,i){if(e.lastMiningSystemId===t)return e.notifications.push("You need to travel to another system before mining again."),!1;const s=li(t,n),o=di(e,s.id);if(i?.force&&(o.depletedUntilDay=void 0),o.depletedUntilDay!==void 0&&e.time.day<o.depletedUntilDay)return e.notifications.push(`This belt is depleted. It will recover by day ${o.depletedUntilDay}.`),!1;const d=0,u=ri(),{row:p,col:m,depth:h}=wr();return e.miningSession={active:!0,systemId:t,beltId:s.id,resourceId:a??void 0,minesTaken:0,totalValueMined:0,currentPirateChance:d,stability:s.stability.start,maxStability:s.stability.start,depth:3,threat:0,drillsUsed:0,runComplete:!1,grid:u,gridRows:qe,gridCols:Ge,explorationScore:0,uniqueDrills:0,selectedRow:null,selectedCol:null,veinRow:p,veinCol:m,veinDepth:h,lowSignalMode:!!i?.easySignals,accumulatedOre:{},beltName:s.name,lastMessage:"Belt initialized. Stability nominal.",lastYield:void 0,samples:[],comboGauge:0,comboBonusTurns:0,comboGuarantyRemaining:0,comboThreatReduction:0,lastComboBandId:null,comboRevealedCells:[],riskChainLevel:0,lastRiskBandLevel:null,nextRiskGuaranteedRarity:null,riskChainMilestoneLevel:0,clusters:[]},e.miningSession.clusters=pr(e.miningSession),Ce(e.miningSession),e.lastMiningSystemId=t,!0}function Cr(e,t){e.miningSession&&(e.miningSession.depth=oe(Math.round(t),1,Ue))}function Tr(e,t,n){for(let a=0;a<e.length;a++)for(let i=0;i<e[a].length;i++)e[a][i].selected=a===t&&i===n}function Er(e,t,n){const a=e.miningSession;if(!a||!a.active||a.runComplete)return null;const i=li(a.systemId,a.beltId),s=oe(Math.round(t),0,qe-1),o=oe(Math.round(n),0,Ge-1),d=oe(Math.round(a.depth??3),1,Ue);a.depth=d;const u=a.riskChainLevel??0;fr(a),a.grid=a.grid??ri(),a.drillsUsed=(a.drillsUsed??0)+1;const p=ei(a,s,o,d),m=a.grid[s][o],h=!m.drilled;m.drilled=!0,m.signal=p.signal,m.directionClass=p.directionClass,m.depthHint=p.depthHint.hint,m.depthClass=p.depthHint.className,m.hintSignal=null,Tr(a.grid,s,o),a.selectedRow=s,a.selectedCol=o,h?(a.uniqueDrills=(a.uniqueDrills??0)+1,a.explorationScore=Math.min(10,(a.explorationScore??0)+p.signal/20)):a.explorationScore=Math.min(10,(a.explorationScore??0)+p.signal/50);const y=mt(d);en(a,y);const g=hr(a,s,o),f=!!(g&&y.level>=(Ya.get(g.bandId)??-1));m.clusterHint=f;let v=Math.max(0,p.signal*.001);p.signal>0&&v<1&&(v=1),f&&(v+=p.signal*.25);const E=ai(a),T=Ja(y,E),B=Ka(y,T),$=B?.id??a.resourceId??"aurite_ore",A=B?.amount??0,I=v+A;Za(a,$,I);const x=Math.max(0,e.player.xp??0),w=Math.max(0,O.miningThreatMultiplier??.7),S=3+d,L=a.comboThreatReduction??0,G=Xa(x),R=Math.max(0,Math.round(S*w*G*Math.max(0,1-L)));a.threat=oe((a.threat??0)+R,0,100),a.currentPirateChance=(a.threat??0)/100;const F=f?" vein":"";a.lastMessage=`Pulse at X${o+1}, Y${s+1}, Z${d} (${y.label}${F}): signal ${p.signal}. Threat +${R}%. Ore +${Math.round(I)} (queued) Risk x${u}.`,ii(a);const W=Math.random()*100;let V=!1;const H=a.threat*.9;if(W<=H){V=!0,a.runComplete=!0,a.active=!1;const Y=di(e,i.id);Y.depletedUntilDay=e.time.day+1,ge(Va,{returnScreen:"mining",returnParams:{message:"Pirates forced you out of the claim."}}),a.threat=0,e.lastMiningSystemId=null,a.currentPirateChance=0,a.lastMessage="Pirates detected! Threat reset to 0%. Claim locked for 1 day."}return{signal:p.signal,directionClass:p.directionClass,depthHint:p.depthHint.hint,fightTriggered:V,threat:a.threat}}function Rr(e){const t=e.miningSession;if(!t||!t.active||t.runComplete)return null;const n=t.selectedRow??null,a=t.selectedCol??null;if(n===null||a===null)return null;const i=oe(Math.round(t.depth??3),1,Ue),s=mt(i),o=t.riskChainLevel??0,d=en(t,s);d.triggered?ye(t,"Combo bonus ready!"):d.gain>0&&ye(t,`Combo +${d.gain}`);const u=Math.max(0,e.player.xp??0),p=a-(t.veinCol??0),m=n-(t.veinRow??0),h=i-(t.veinDepth??3),y=Math.sqrt(p*p+m*m+h*h),g=Math.random()*1.5-.75,f=oe(Math.round(10-y*2+g),0,10),b=1+Math.max(0,i-2)*.12,E=Math.max(0,Math.round((f+b)*.2)),T=Math.min(.4,(t.explorationScore??0)/25),B=xr(t),$=Math.min(1,B+T);let I=Math.max(1,Math.round(E*$*(1+.1)));I=Math.max(1,Math.round(I*.5));const x=Sn[i]??Sn[3],w=ci(e,x.drillDamageChance,x.drillDamageRange,1+s.level*.1);w>0&&(e.notifications=e.notifications||[],e.notifications.push(`Final drill backlash: -${w} hull.`));const S=ai(t),L=Ja(s,S),G=Ka(s,L),R=G?.id??t.resourceId??"aurite_ore",F=G?.amount??0;I+=F,Za(t,R,I);const V=Qa(t,e)[R]??0,H=Math.max(1,bn(t.systemId,R)),Y=Math.max(.05,(O.miningPayoutMultiplier??.35)*nr);let D=Math.round(H*V*Y*s.valueMultiplier);const q=tn(o);D=Math.round(D*q);const U=Math.max(0,Math.round(V*s.valueMultiplier*q*.35));U>0&&(pe(U,"mining"),t.xpEarned=(t.xpEarned??0)+U);let M=null;if(f>=6&&Math.random()<.1+T*.5){const bt=Math.max(1,Math.round(f/3)),Xe=oi(e,"stellite_fragment",bt);if(Xe>0){M={id:"stellite_fragment",amount:Xe};const Ti=Math.max(1,bn(t.systemId,M.id));D+=Math.round(Ti*Xe*Y),si(t,M.id,Xe)}}const z=M??(L!=="common"?{id:R,amount:V}:null);t.totalValueMined+=D,t.lastYield={commodityId:R,amount:V,approxValue:D,rareFind:z};const se=6+i*2,ce=Math.max(0,O.miningThreatMultiplier??.7),xe=t.comboThreatReduction??0,Re=Xa(u),we=Math.max(0,Math.round(se*ce*Re*Math.max(0,1-xe)));t.threat=oe((t.threat??0)+we,0,100),t.currentPirateChance=(t.threat??0)/100;const Ye=w>0?` Drill backlash: -${w} hull.`:"";t.lastMessage=`Final drill X${a+1}, Y${n+1}, Z${i} (${s.label}): signal ${f}, efficiency ${($*100).toFixed(0)}%, ore ${V} stored. Threat +${we}%.${Ye} Risk x${o}`,Ce(t),ii(t);const yt=de("extraction_t3_deep_delver")?.05:0,vt=Math.max(0,ni(o,u)-yt);if(Math.random()<vt){const bt=de("ship_hauler_hazard_steadiness")?.85:1;br(t,e,o,u,bt)}const _i=Math.random()*100;let hn=!1;const Ci=t.threat*.9;return _i<=Ci?(hn=!0,ge(Va,{returnScreen:"mining",returnParams:{message:t.lastMessage||"Pirate encounter triggered!"}}),t.threat=0,t.currentPirateChance=0,t.lastMessage="Pirates detected during extraction! Threat reset.",e.lastMiningSystemId=null):(t.runComplete=!0,t.active=!1),Xi(V+(M?.amount||0),!!M),{signal:f,yieldAmount:V,commodityId:R,rareFind:M,fightTriggered:hn,threat:t.threat}}function Ir(e){const t=e.time.day;for(const n of e.miningBelts)n.depletedUntilDay!==void 0&&t>=n.depletedUntilDay&&(n.depletedUntilDay=void 0,e.notifications.push(`Mining belt ${n.beltId} has recovered.`))}function di(e,t){e.miningBelts||(e.miningBelts=[]);const n=e.miningBelts.find(i=>i.beltId===t);if(n)return n;const a={beltId:t};return e.miningBelts.push(a),a}function Br(e,t){const n=e.miningSession;n&&(Mr(e,n),n.active=!1,n.runComplete=!0,n.threat=0,n.currentPirateChance=0,n.lastMessage=t,Ce(n),e.notifications||(e.notifications=[]),e.notifications.push(t),e.miningSession=null)}function Dr(e){const t=e.miningSession;if(!t||!t.active)return null;const n=t.riskChainLevel??0;if(n<3)return null;const a=Qa(t,e),i=Object.values(a).reduce((m,h)=>m+h,0),s=Math.max(0,Math.round(ue.cashOutBase+n*ue.cashOutPerLevel)),o=mt(t.depth??3),d=tn(n),u=Math.max(0,Math.round(i*o.valueMultiplier*d*.35));u>0&&(pe(u,"mining"),t.xpEarned=(t.xpEarned??0)+u),_e(s),e.player.credits=Math.max(0,e.player.credits+s),Ce(t),t.runComplete=!0,t.active=!1;const p=`Cash out (Risk ${n}): rounded ${i} ore + ${s} cr bonus.`;return t.lastMessage=p,p}function Pr(e){if(!C)throw new Error("Content has not been loaded.");const t=C.enemies.find(n=>n.id===e);if(!t)throw new Error(`Unknown enemy template: ${e}`);return t}function Cn(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Ar(e){const t=[],n={};for(let a=0;a<e;a+=1){const i=a%3,s=n[i]??0,o=s===0?"front":"back";n[i]=s+1,t.push({lane:i,row:o})}return t}const Lr=1.25;function Nr(e,t,n){const a=Math.max(1,Math.round(e.hull*t)),i=Math.max(0,Math.round(e.shields*t));return n.map((s,o)=>({id:`${e.id}-${s.lane}-${s.row}-${o}-${Math.round(Math.random()*1e4)}`,templateId:e.id,name:e.name,hp:a,maxHp:a,shields:i,maxShields:i,weaponIds:e.weaponIds.slice(),weaponCooldowns:e.weaponIds.map(()=>0),position:s,alive:!0,side:"enemy",factionId:e.faction,factionLabel:C?.factions.find(d=>d.id===e.faction)?.name??void 0,statusEffects:[],tags:e.tags?[...e.tags]:[],canEscape:e.canEscape}))}function Fr(e,t){return t<=1?e.name:`${e.name} Squadron`}function jr(e){const n=1-ze(e).evasionBonus;return Math.max(0,n)}function Hr(e,t,n){const i=ze(n).damageTakenMultipliers?.[t]??1;return Math.max(0,Math.round(e*i))}const Or=1.2,ui=100,zr=5,qr=.4,Gr=2,Ur=2,Wr=3,Tn=2,En=3,Vr=.7;function nt(e,t,n){const a=e.statusEffects.find(i=>i.type===t);return a?(a.duration=Math.max(a.duration,n),!1):(e.statusEffects.push({type:t,duration:n}),!0)}function Rn(e,t){return e.statusEffects.some(n=>n.type===t)}function ae(e,t,n,a){return e.encounter.enemies.find(i=>i.position.lane===t&&i.position.row===n&&(!a||i.side===a))}function Yr(e,t,n){return e.encounter.enemies.filter(a=>a.position.lane===t&&a.side===n)}function It(e,t,n){if(!n.alive)return!1;const a=ae(e,n.position.lane,"front",n.side);if(n.position.row==="back"&&a&&a.alive&&!t.canBypassCover)return!1;switch(t.targetingMode){case"frontOnly":return n.position.row==="front";case"linePierce":return n.position.row==="front";case"splashLane":return n.position.row==="front";default:return!0}}function Xr(e){if(!(!e||!C))return C.factions.find(t=>t.id===e)}const Jr=2;function Kr(e,t,n){let a=0;const i=n.maxShields?n.shields/n.maxShields:0,s=n.maxHp?n.hp/n.maxHp:0;a+=(1-i)*3,a+=(1-s)*5,n.isFragile&&(a+=3),(n.role==="support"||n.role==="artillery")&&(a+=2),!t.canBypassCover&&n.position.row==="front"&&(a+=1),t.linePierce&&n.position.row==="front"&&(a+=1),t.damageType===n.damageProfile&&(a+=1);const o=Xr(e.factionId);return o&&o.preferredDamage.includes(t.damageType)&&(a+=Jr),a}function Zr(){const e=l.ship;return{id:"player",side:"player",templateId:"player",name:e.name,hp:e.hp,maxHp:e.maxHp,shields:e.shields,maxShields:e.maxShields,weaponIds:[],weaponCooldowns:[],position:{lane:1,row:"front"},statusEffects:[],tags:[],canEscape:!1,alive:e.hp>0}}function Qr(e,t,n,a=[]){const i=[...n.encounter.enemies.filter(p=>p.side!==e.side&&It(n,t,p)),...a.filter(p=>p.side!==e.side&&It(n,t,p))];if(!i.length)return null;const s=!t.canBypassCover,o=i.filter(p=>p.position.row==="front");return(s&&o.length?o:i).map(p=>({slot:p,score:Kr(e,t,p)})).sort((p,m)=>m.score-p.score)[0].slot}function ec(e,t,n,a){if(!(!n||n.side!=="enemy")){if(t.linePierce&&n.position.row==="front"){const i=ae(e,n.position.lane,"back");if(i&&i.alive&&i.side!==n.side){const s=Math.max(0,Math.round(a*.5));Me(s,t.damageType,t,i),k(`${t.name} pierces through ${n.name} and grazes ${i.name} for ${s}.`)}}if(t.splashRadius&&n.position.row==="front"){const i=e.encounter.enemies.filter(o=>o.position.lane===n.position.lane&&o.id!==n.id&&o.alive),s=Math.max(0,Math.round(a*.35));for(const o of i)Me(s,t.damageType,t,o),k(`${t.name} splashes ${o.name} for ${s} damage.`)}}}function tc(e,t,n){e==="explosive"&&n.shields<=0&&t>=8&&Math.random()<=.3&&nt(n,"breach",Gr)&&k(`${n.name} suffers a hull breach!`),e==="disruptive"&&t>=5&&Math.random()<=.3&&nt(n,"jammed",Ur)&&k(`${n.name} is jammed and struggles to stay online!`),e==="energy"&&n.shields<=0&&t>=6&&Math.random()<=.25&&nt(n,"burn",Wr)&&k(`${n.name} is singed by the energy barrage!`)}function nc(e){for(const t of[...e.encounter.enemies]){if(t.statusEffects.length===0)continue;const n=[];for(const a of t.statusEffects){if(a.type==="breach"&&t.hp>0){const i=Math.min(t.hp,Tn);t.hp=Math.max(0,t.hp-Tn),i>0&&k(`${t.name} leaks atmosphere from the breach (-${i} hull).`)}if(a.type==="burn"&&t.hp>0){const i=Math.min(t.hp,En);t.hp=Math.max(0,t.hp-En),i>0&&k(`${t.name} suffers burning damage (-${i} hull).`)}a.duration-=1,a.duration>0?n.push(a):k(`${t.name} recovers from ${a.type}.`)}t.statusEffects=n,t.hp<=0&&Se(e,t.id)}}function ac(e){return e.encounter.enemies.find(t=>t.id===e.selectedEnemyId)}function Ee(e){const t=ac(e);if(t)return t;const n=e.encounter.enemies.find(a=>a.position.row==="front")??e.encounter.enemies[0];return n?e.selectedEnemyId=n.id:e.selectedEnemyId=null,n}function ic(e,t){const n=e.encounter.enemies.find(a=>a.position.lane===t&&a.position.row==="back");n&&(n.position.row="front",k(`${n.name} steps forward to lane ${t}.`))}function Se(e,t){const n=e.encounter.enemies.findIndex(i=>i.id===t);if(n===-1)return;const[a]=e.encounter.enemies.splice(n,1);if(a.position.row==="front"&&ic(e,a.position.lane),e.selectedEnemyId===t){const i=e.encounter.enemies.find(s=>s.position.row==="front")??e.encounter.enemies[0];e.selectedEnemyId=i?.id??null}}function In(e,t){const n=e;for(let a=0;a<3;a+=1){const i=ae(n,a,"front",t),s=ae(n,a,"back",t);if(!i||!s||!i.alive||!s.alive)continue;const o=i.maxHp>0?i.hp/i.maxHp:0,d=s.maxHp>0?s.hp/s.maxHp:0,p=(i.shields<i.maxShields||i.hp<i.maxHp)&&(i.shields===0||o<qr),h=!(s.isFragile??!1)&&d>=o;p&&h&&(i.position.row="back",s.position.row="front",k(`${s.name} surges forward in lane ${a+1} as ${i.name} pulls back to recover.`))}}function Bn(e,t){const n=e;for(let a=0;a<3;a+=1){const i=ae(n,a,"front",t);if(i&&i.alive)continue;const s=ae(n,a,"back",t);if(!s||!s.alive)continue;const o=s.isFragile??!1;(s.wantsFrontline||!o)&&(s.position.row="front",k(`${s.name} fills the empty front line in lane ${a+1}.`))}}function sc(e){In(e,"player"),In(e,"enemy"),Bn(e,"player"),Bn(e,"enemy"),rc(e),oc(e),Ee(e)}function oc(e){const t=e;for(let n=0;n<3;n+=1){const a=ae(t,n,"front","enemy"),i=ae(t,n,"back","enemy");if(!a||!a.alive||i&&i.alive)continue;const s=t.encounter.enemies.find(o=>o.side==="enemy"&&o.alive&&o.position.row==="front"&&o.id!==a.id&&o.position.lane!==n&&!(o.wantsFrontline??!1));s&&(s.position={lane:n,row:"back"},k(`${s.name} drops into lane ${n+1} to shelter behind ${a.name}.`))}}function rc(e){const t=e;for(let n=0;n<3;n+=1){const a=ae(t,n,"front","enemy"),i=ae(t,n,"back","enemy");if(!a||!a.alive||i&&i.alive)continue;const s=t.encounter.enemies.find(d=>d.side!=="enemy"||!d.alive||d.position.row!=="front"||d.position.lane===n||(d.wantsFrontline??!1)?!1:Yr(t,d.position.lane,"enemy").filter(p=>p.alive&&p.id!==d.id).length>0);if(!s)continue;s.position={lane:n,row:"back"};const o=a.name??`Lane ${n+1}`;k(`${s.name} maneuvers into lane ${n+1} to take cover behind ${o}.`)}}function Me(e,t,n,a){const i=St[t];if(!i||e<=0)return 0;const s=n.tags||[];if(a.shields>0){let u=i.vsShields*(n.shieldMod??1);s.includes("shield_breaker")&&(u*=1.2);const p=Math.max(0,Math.round(e*u));return a.shields=Math.max(0,a.shields-p),p}let o=i.vsHull*(n.armorMod??1);s.includes("armor_piercing")&&(o*=1.2);const d=Math.max(0,Math.round(e*o));return a.hp=Math.max(0,a.hp-d),a.alive=a.hp>0,d}function k(e){const t=l.combat;if(!t)return;t.log.push(e);const n=10;t.log.length>n&&(t.log=t.log.slice(t.log.length-n))}const cc={near_miss:{amount:5,source:"dodge",label:"near miss"},perfect_dodge:{amount:10,source:"dodge",label:"perfect dodge"},light_damage:{amount:15,source:"risk",label:"light damage"},heavy_damage:{amount:25,source:"risk",label:"heavy damage"},heroic_spike:{amount:40,source:"risk",label:"heroic spike"}},lc={risk:"Retribution Burst",variation:"Adaptive Strike",dodge:"Phantom Strike"};function dc(){return{charge:0,variationPoints:0,riskPoints:0,dodgePoints:0,recentCategories:[]}}function ht(){const e=l.combat;return e?(e.comboMeter||(e.comboMeter=dc()),e.comboMeter):null}function pi(e,t,n){if(e<=0)return;const a=ht();a&&(a.charge=Math.min(ui,a.charge+e),t==="variation"?a.variationPoints+=e:t==="risk"?a.riskPoints+=e:a.dodgePoints+=e,k(`Combo +${e}${n?` (${n})`:""}.`),pc(a))}function ft(e){const t=ht();if(!t)return;t.recentCategories.unshift(e),t.recentCategories.length>zr&&t.recentCategories.pop();const n=t.recentCategories.slice(0,3),a=new Set(n).size;let i=a*5;a>=3&&(i+=10),pi(i,"variation","variation")}function uc(e){const t=[["variation",e.variationPoints],["risk",e.riskPoints],["dodge",e.dodgePoints]];return t.sort((n,a)=>a[1]-n[1]),t[0][1]===0?"variation":t[0][0]}function pc(e){if(e.ready||e.charge<ui)return;const t=uc(e);e.ready={type:t,label:lc[t]},e.charge=0,e.variationPoints=0,e.riskPoints=0,e.dodgePoints=0,e.recentCategories=[],k(`Combo meter ready: ${e.ready.label}!`)}function mc(){const e=ht();if(!e||!e.ready)return null;const t=e.ready.type;return e.ready=void 0,t}function Ie(e){const t=cc[e];t&&pi(t.amount,t.source,t.label)}function hc(){const e=l.ship,t=e.weapons.map(i=>i?te(i)?.damage??0:0).filter(i=>i>0),n=t.length?t.reduce((i,s)=>i+s,0)/t.length:0,a=Math.max(e.weaponPower??10,Math.round(n));return Math.max(10,Math.round(a*1.25))}function an(e={}){return{id:e.id??"combo_finish",name:e.name??(e.tags?.includes("armor_piercing")?"Combo Penetrator":"Combo Burst"),description:e.description,type:e.type??"energy",size:e.size??"small",damage:e.damage??0,damageType:e.damageType??"energy",shieldMod:e.shieldMod??1,armorMod:e.armorMod??1,accuracy:e.accuracy??1,critChance:e.critChance??0,critMultiplier:e.critMultiplier??1,energyCost:e.energyCost??0,cooldown:e.cooldown??0,price:e.price??0,tags:e.tags??[],targetingMode:e.targetingMode,canBypassCover:e.canBypassCover,splashRadius:e.splashRadius,linePierce:e.linePierce}}function mi(e){return e.encounter.enemies.filter(t=>t.alive)}function sn(e,t){return e.encounter.enemies.find(n=>n.alive&&n.position.row==="back"&&n.id!==t)}function fc(e,t){const n=an({tags:["shield_breaker"],armorMod:1.1,shieldMod:1.05}),a=Ee(e);if(!a||!a.alive)return!1;const i=sn(e,a.id)??e.encounter.enemies.find(u=>u.alive&&u.id!==a.id),s=Math.max(10,Math.round(t*1.1)),o=Me(s,"energy",n,a);o>0&&(ke(o),k(`Adaptive Strike slams ${a.name} for ${o} damage.`),a.hp<=0&&Se(e,a.id));let d=0;if(i){const u=Math.max(8,Math.round(t*.85));d=Me(u,"energy",n,i),d>0&&(ke(d),k(`Adaptive Strike pivots to ${i.name} for ${d} damage.`),i.hp<=0&&Se(e,i.id))}return o>0||d>0}function gc(e,t){const n=sn(e)??Ee(e)??mi(e)[0];if(!n)return!1;const a=an({tags:["shield_breaker","armor_piercing"],armorMod:1.35,shieldMod:1.1}),i=Math.max(3,Math.round(t*.5)),s=Math.max(5,t-i);let o=0;if(s>0){const p=Me(s,"energy",a,n);p>0&&(ke(p),o+=p)}if(i>0&&n.alive){const p=n.hp;n.hp=Math.max(0,n.hp-i);const m=p-n.hp;m>0&&(ke(m),o+=m),n.alive=n.hp>0}if(n.hp<=0&&Se(e,n.id),o<=0)return!1;const d=l.ship,u=Math.max(1,Math.round(o*(.02+Math.random()*.03)));return d.hp=Math.min(d.maxHp,d.hp+u),k(`Retribution Burst shreds ${n.name} for ${o} and restores ${u} hull.`),!0}function yc(e,t){const n=sn(e)??Ee(e)??mi(e)[0];if(!n)return!1;const a=an({tags:["shield_breaker"],armorMod:1.2}),i=Math.max(8,Math.round(t*.9)),s=Me(i,"energy",a,n);return s>0&&(ke(s),k(`Phantom Strike ghosts ${n.name} for ${s} damage.`),n.hp<=0&&Se(e,n.id)),e.playerStatus.maneuverBonus=Math.max(e.playerStatus.maneuverBonus||0,20),e.playerStatus.maneuverTurns=Math.max(e.playerStatus.maneuverTurns,1),s>0}function vc(){const e=ht();if(!e||!e.ready)return!1;const t=l.combat;if(!t)return!1;const n=hc(),a=e.ready.type;let i=!1;if(a==="variation"?i=fc(t,n):a==="risk"?i=gc(t,n):a==="dodge"&&(i=yc(t,n)),!i)return!1;mc();const s=10+(a==="risk"?5:a==="dodge"?3:0);return pe(s,"combat"),!0}function bc(e){const t=e.hull+e.shields,n=e.weaponIds.length*15;return t+n}function Mc(e){return e??"main"}function xc(e,t){_.go(Mc(e),t)}function ge(e,t={}){const n=Pr(e),i=l.ship.weapons.map(()=>0),s=K(),o=Ga(l),d=Math.max(1,(s.enemyHpMultiplier??1)*o),u=Math.max(1,Math.round(s.enemyCountMin??1)),p=Math.max(u,Math.round(s.enemyCountMax??u)),m=Math.floor(Math.random()*(p-u+1))+u,h=Math.max(1,m),y=Ar(h),g=Nr(n,d,y),f=Fr(n,g.length);l.combat={encounter:{id:n.id,name:f,enemies:g,tags:n.tags?[...new Set(n.tags)]:[]},selectedEnemyId:g[0]?.id??null,playerCooldowns:i,playerBracing:!1,playerStance:"balanced",playerStatus:{maneuverBonus:0,maneuverTurns:0,shieldBoost:0,shieldTurns:0},enemyStatus:{weaponJammedTurns:0},canEscape:n.canEscape,totalRounds:1,startingHp:l.ship.hp,round:1,log:[`${f} engages you in combat!`],adviceToken:Math.random(),moduleAbilityCooldowns:{},returnTo:t.returnScreen,returnParams:t.returnParams},Ds(8),h>1&&l.combat.log.push(`Multiple bogies detected (${h} ships).`),_.go("combat")}function wc(e){const t=$c(e);ge(t)}function $c(e){if(!C?.enemies?.length)return"pirate_cutter";const t=Kt(l),n=Zt(l.time.day),a=K(),i=1+Math.max(0,a.difficultyScalePerDay??0)/100*Math.max(0,l.time.day-1),s=Math.max(0,a.difficultyScalePerShipPower??1),o=t*s*i;let d=o*(.6+.2*n),u=o*(.9+.4*n);e&&ut(e,"core")&&(d=t*.4,u=t*.8);const p=C.enemies.map(g=>({id:g.id,power:bc(g)})),m=p.filter(g=>g.power>=d&&g.power<=u);if(m.length)return m[Math.floor(Math.random()*m.length)].id;let h=p[0],y=Math.abs(p[0].power-t);for(const g of p){const f=Math.abs(g.power-t);f<y&&(h=g,y=f)}return h.id}function We(e,t,n="normal"){const a=l.combat;if(a){switch(a.playerBracing=!1,e){case"fire":if(t===void 0){k("You must choose a weapon to fire.");return}fi(t,n);break;case"fire_all":Tc(n);break;case"combo_finish":if(!vc()){k("Combo finisher is not ready.");return}break;case"brace":Ec();break;case"flee":if(Rc())return;break}hi()}}function hi(){const e=l.combat;if(e){if(e.encounter.enemies.length===0){Ac();return}if(Bc(),!!l.combat){if(l.ship.hp<=0){Lc();return}sc(e),Pc(),e.adviceToken=Math.random(),e.round+=1,e.totalRounds+=1}}}function kc(){const e=l.combat;return e?C?l.ship.components.map(t=>{const n=ca(t);if(!n?.ability)return null;const a=e.moduleAbilityCooldowns?.[t]??0;return{componentId:t,componentName:n.name,ability:n.ability,cooldown:a,ready:a<=0}}).filter(t=>!!t):[]:[]}function Sc(e){ft("utility");const t=l.combat;if(!t)return;const n=ca(e);if(!n||!n.ability){k("Module ability offline.");return}const a=n.ability;t.moduleAbilityCooldowns=t.moduleAbilityCooldowns??{};const i=Math.max(0,t.moduleAbilityCooldowns[e]??0);if(i>0){k(`${n.name} is recalibrating (${i} turn${i===1?"":"s"}).`);return}const s=Ee(t);if(!s){k("No enemy target available.");return}_c(t,n,a,s)&&(t.moduleAbilityCooldowns[e]=Math.max(a.cooldown??3,1),hi())}function _c(e,t,n,a){const i=e,s=a.position.lane;switch(n.type){case"pull":{if(a.position.row!=="back")return k("Pull modules need a back-line target."),!1;const o=ae(i,s,"front","enemy");o&&o.id!==a.id&&(o.position.row="back",k(`${o.name} is forced back to make room.`)),a.position.row="front",k(`${t.name} hauls ${a.name} into lane ${s+1}'s front line.`);break}case"push":{if(a.position.row!=="front")return k("Push modules need a front-line target."),!1;const o=ae(i,s,"back","enemy");o&&o.id!==a.id&&(o.position.row="front"),a.position.row="back",k(`${t.name} shoves ${a.name} back into cover.`);break}default:return!1}if(n.statusEffect){const o=n.effectDuration??1;nt(a,n.statusEffect,o)&&(n.statusEffect==="jammed"?k(`${a.name}'s systems are jammed for ${o} turn${o===1?"":"s"}.`):k(`${a.name} cannot react for ${o} turn${o===1?"":"s"}.`))}return!0}function fi(e,t,n={}){ft("weapon_attack");const a=l.combat;if(!a)return;const i=l.ship;if(e<0||e>=i.weapons.length){k("Invalid weapon slot.");return}const s=i.weapons[e];if(!s){k("That hardpoint is empty.");return}const o=te(s);if(!o){k("Missing weapon data.");return}const u=i.weapons.filter((x,w)=>w!==e&&!!x&&(a.playerCooldowns[w]??0)<=0).length===0,p=ne(),m=a.round<=1,h={...o,critChance:Math.min(.95,(o.critChance??0)+(p.critBonus??0)+(m?p.critBonus??0:0))},y=a.playerCooldowns[e]??0;if(y>0){k(`${o.name} is still recharging (${y} turn${y===1?"":"s"}).`);return}const g=t==="called_shot"?gn.damageMultiplier:1,f=t==="called_shot"?gn.accuracyMultiplier:1,b=ma(h,{accuracyMultiplier:f,damageMultiplier:g*(p.playerDamageBonus??1)});if(b<=0){const x=t==="called_shot"?"called shot goes wide":"misses";k(`You fire ${o.name}, but it ${x}.`),a.playerCooldowns[e]=o.cooldown;return}const v=Ee(a);if(!v){k("No enemy target available."),a.playerCooldowns[e]=o.cooldown;return}const E=a;if(!It(E,o,v)){const x=ae(E,v.position.lane,"front","enemy");k(x&&x.alive?`${o.name} cannot hit ${v.name} because ${x.name} is covering the lane.`:`${o.name} cannot reach ${v.name}.`),a.playerCooldowns[e]=o.cooldown;return}const T=v.shields>0?"shields":"hull";let B=b;u&&(B=Math.max(1,Math.round(b*Lr)),k(`Solo fire bonus: ${o.name} punches harder this turn.`));const $=!n.isVolley&&v.shields>0?Or:1;B=Math.round(B*$);const A=Me(B,o.damageType,o,v);A>0&&(ke(A),tc(o.damageType,A,v));const I=t==="called_shot"?"called shot":"normal shot";k(`You strike ${v.name}'s ${T} with ${o.name} (${I}) for ${A} damage.`),A>0&&o.tags?.includes("disruptor")&&(a.enemyStatus.weaponJammedTurns=Math.min(2,a.enemyStatus.weaponJammedTurns+1),k(`${v.name}'s weapons are disrupted!`)),a.playerCooldowns[e]=o.cooldown,v.hp<=0&&(k(`${v.name} is destroyed!`),Se(a,v.id))}function Cc(e){if(!C)return[];const t=l.ship,n={disruptive:0,energy:1,kinetic:2,explosive:3},a=[];for(let i=0;i<t.weapons.length;i+=1){const s=t.weapons[i];if(!s)continue;const o=te(s);!o||(e.playerCooldowns[i]??0)>0||a.push({idx:i,weapon:o})}return a.sort((i,s)=>{const o=n[i.weapon.damageType]??4,d=n[s.weapon.damageType]??4;return o!==d?o-d:i.idx-s.idx})}function Tc(e){const t=l.combat;if(!t)return;const n=Cc(t);if(!n.length){k("No weapons are ready to fire.");return}for(const{idx:a}of n){if(!l.combat||l.combat.encounter.enemies.length===0)break;fi(a,e,{isVolley:!0,volleyCount:n.length})}}function Ec(){ft("defense");const e=l.combat;e&&(e.playerBracing=!0,k("You brace for impact, diverting power to shields and hull integrity."))}function Rc(){ft("movement");const e=l.combat;if(!e)return!1;if(!e.canEscape)return k("The enemy objectives lock you in place. Flee attempt denied."),!1;const t=.4;let n=0;e.playerStance==="evasive"&&(n=.15),e.playerStance==="brace"&&(n=-.05),e.playerStance==="overcharge"&&(n=-.1);const a=(l.ship.maneuverRating||0)+(e.playerStatus.maneuverBonus||0),s=st((a-40)*.01,-.15,.15),o=K(),d=ne(),u=(o.fleeSuccessBonus??0)/100+(d.fleeBonus??0),p=st(t+n+s+u,.05,.95);return Math.random()<=p?(k(`You punch the thrusters and break free! (Flee chance ${(p*100).toFixed(0)}%)`),$e(l,-5),l.combat=null,Br(l,"Fled combat; mining mission aborted and ore left behind."),window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind."),_.go("main",{message:"Mining mission aborted by fleeing combat."}),!0):(k(`You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(p*100).toFixed(0)}%)`),!1)}function Ic(e){const t=l.ship.maxHp||100;return e>=Math.max(1,Math.round(t*.25))}function Bc(){const e=l.combat;if(!e)return;const t=l.ship.hp,n=l.ship.shields,a=l.ship.maxHp||100;if(e.enemyStatus.weaponJammedTurns>0){e.enemyStatus.weaponJammedTurns-=1,k("Enemy weapons are jammed this round!");return}const i=e,s=e.encounter.enemies.filter(H=>H.alive&&!Rn(H,"immobilized")&&H.weaponIds.some((Y,D)=>Y&&(H.weaponCooldowns[D]??0)<=0));if(!s.length){k(`The ${e.encounter.name} reloads while you advance.`);return}const o=s[Cn(0,s.length-1)],d=o.weaponIds.map((H,Y)=>({id:H,idx:Y})).filter(({id:H,idx:Y})=>!!H&&(o.weaponCooldowns[Y]??0)<=0);if(!d.length){k(`The ${o.name} catches its breath while reloading.`);return}const u=d[Cn(0,d.length-1)],p=te(u.id);if(!p){k(`The ${o.name} fumbles its weapon.`);return}const m=Zr(),h=Qr(o,p,i,[m]);if(!h){k(`${o.name} finds no valid targets.`);return}const y=Rn(o,"jammed");y&&k(`${o.name} is still recovering from jammed systems.`);const g=Math.min(.3,Math.max(0,e.playerStatus.maneuverBonus||0)*.01),f=K(),b=ne(),v=e.round<=1,E=Math.max(0,(1-g)*(f.enemyAccuracyMultiplier??1)*Math.max(0,1-(b.dodgeBonus??0))*(v?Math.max(0,1-(b.dodgeBonus??0)):1)),T=jr(e.playerStance),B=(de("precision_t1_targeting_assist")?.05:0)+((de("precision_t2_headshot_focus")||de("precision_t3_backline_breach"))&&h.position.row==="back"?.05:0),$=de("precision_t3_backline_breach")&&h.position.row==="back"?1.08:1,A=Math.max(0,E*T*(y?Vr:1)*(1+B)*$);let I=ma(p,{accuracyMultiplier:A});const x=Ga(l),w=Math.max(0,Math.round(I*(f.enemyDamageMultiplier??1)*x)),S=l.ship.hp/(l.ship.maxHp||1)<=.3,L=de("survival_t3_last_stand_matrix")&&S?Math.round(w*.85):w;Ic(L)&&k("Sensors pick up a heavy attack; brace now to soften the blow!"),I=L,e.playerBracing&&(I=Math.round(I*cs)),I=Hr(I,p.damageType,e.playerStance),I=Math.max(0,Math.round(I*(f.playerDamageTakenMultiplier??1)*Math.max(.1,b.damageTakenMultiplier??1)*(v?Math.max(.1,b.damageTakenMultiplier??1):1)));let R=I;if(e.playerStatus.shieldBoost>0){const H=Math.min(e.playerStatus.shieldBoost,R);e.playerStatus.shieldBoost-=H,R-=H}if(l.ship.shields>0&&R>0){const H=Math.min(l.ship.shields,R);l.ship.shields-=H,R-=H}R>0&&(l.ship.hp=Math.max(0,l.ship.hp-R));const F=Math.max(0,R),W=l.ship.hp,V=Math.max(0,n-l.ship.shields);F>0?t<=F&&W===1?Ie("heroic_spike"):F>=a*.25?Ie("heavy_damage"):Ie("light_damage"):V<=0?(Ie("perfect_dodge"),pe(5,"combat")):(Ie("near_miss"),pe(3,"combat")),k(`The ${o.name} hits you with ${p.name} for ${I} damage.`),Wi(I),$e(l,-Math.min(6,Math.floor(I/10))),o.weaponCooldowns[u.idx]=p.cooldown+(y?1:0),ec(i,p,h,I)}function Dc(){const e=l.combat;if(!e)return null;const t=e.encounter.enemies;if(!t.length)return null;const n=t.flatMap(p=>p.weaponCooldowns.map(m=>m??Number.MAX_SAFE_INTEGER)),a=Math.min(...n.length?n:[Number.MAX_SAFE_INTEGER]),i=[];if(a<=1){const p=st(.6+(1-a)*.2,.65,.95);i.push({text:`Enemy shifts into a heavy attack stance; the next shot lands in ${a} turn${a===1?"":"s"} - brace to soften the incoming blow.`,suggestion:"brace",confidence:p})}const s=t.find(p=>p.position.row==="front")??t[0];if(s&&s.shields<=0){const m=e.playerCooldowns.filter(y=>y<=0).length/Math.max(1,l.ship.weapons.length),h=st(.6+m*.3,.6,.9);i.push({text:"Shields down - called shots are primed to shatter the hull before the enemy recovers.",suggestion:"overcharge",confidence:h})}l.ship.hp/l.ship.maxHp<.4&&i.push({text:"Hull integrity is low - brace now to survive the next volley while you recover.",suggestion:"brace",confidence:.75}),i.push({text:"Balanced posture - cycle weapons, wait for openings, and shift stance if needed.",suggestion:"balanced",confidence:.5});const o=((e.adviceToken??Math.random())+e.round*.13)%1,d=Math.floor(o*i.length),u=i[d];return{...u,confidence:u.confidence}}function Pc(){const e=l.combat;if(e){e.playerCooldowns=e.playerCooldowns.map(t=>t>0?t-1:0);for(const t of e.encounter.enemies)t.weaponCooldowns=t.weaponCooldowns.map(n=>n>0?n-1:0);if(nc(e),e.playerStatus.maneuverTurns>0&&(e.playerStatus.maneuverTurns-=1,e.playerStatus.maneuverTurns<=0&&(e.playerStatus.maneuverBonus=0)),e.playerStatus.shieldTurns>0&&(e.playerStatus.shieldTurns-=1,e.playerStatus.shieldTurns<=0&&(e.playerStatus.shieldBoost=0)),e.moduleAbilityCooldowns)for(const t of Object.keys(e.moduleAbilityCooldowns)){const n=e.moduleAbilityCooldowns[t];n>0&&(e.moduleAbilityCooldowns[t]=Math.max(0,n-1))}}}function Ac(){const e=l.combat;if(!e)return;const t=e.encounter;k(`The ${t.name} explodes under your punishing fire. Victory is yours.`);const n=Math.max(0,e.startingHp-l.ship.hp),a=e.totalRounds<=3,i=n<=5,s=jo(t.id,t.name,{quickKill:a,lowDamageTaken:i},t.tags);if(s){l.lastBattleResult=s;const u=[];s.creditsEarned&&u.push(`Credits: +${s.creditsEarned}`),s.commodities.length&&u.push(`Cargo: ${s.commodities.map(p=>`${p.qty} ${p.id}`).join(", ")}`),s.weapons.length&&u.push(`Weapons: ${s.weapons.join(", ")}`),s.components.length&&u.push(`Components: ${s.components.join(", ")}`),s.missionsGranted.length&&u.push(`Missions: ${s.missionsGranted.join(", ")}`),k(`Loot recovered — ${u.join(" | ")||"nothing notable."}`),a&&k("Because you won quickly, salvage yields are richer."),i&&k("Minimal hull damage preserved more intact cargo.")}else k("No notable loot recovered.");const o=3+(a?2:0)+(i?1:0);$e(l,o),s?.creditsEarned&&s.creditsEarned>300&&$e(l,2),t.tags.some(u=>/navy|elite/.test(u))&&$e(l,2);const d=Math.max(15,Math.round(20+t.enemies.length*10+(a?10:0)+(i?5:0)));if(pe(d,"combat"),Vi(),Yi(),Us(t.id),t.tags.some(u=>/pirate|raider/i.test(u))||t.id.includes("pirate")||t.id.includes("raider")){const u=K().repGainMultiplier??1;Ua(Math.round(3*u))}l.combat=null,xc(e.returnTo,e.returnParams)}function Lc(){k("Your ship is crippled. Systems fail one by one as you drift through vacuum..."),l.ship.hp=0,l.ship.shields=0,l.combat=null,l.notifications.push("Critical failure — hull integrity dropped to zero."),Ha("ship_destroyed","Ship destroyed in combat.")}function gi(e){const t=l.combat;if(!t)return;t.playerStance=e;const n=ze(e);k(`Stance changed to ${n.label}.`)}function st(e,t,n){return Math.max(t,Math.min(n,e))}function Nc(e){const t=e.time.day;for(const n of e.contracts)n.status==="active"&&n.dueDay!==void 0&&t>n.dueDay&&(n.status="failed",e.notifications.push(`Contract failed (expired): ${n.name}`))}function Fc(e,t){jc(e,t).lastRiskSeenDay=e.time.day}function jc(e,t){e.intel||(e.intel={systems:[]});const n=e.intel.systems.find(i=>i.systemId===t);if(n)return n;const a={systemId:t};return e.intel.systems.push(a),a}function Hc(e){e.time.day+=1,Ho(e),Oo(e),Zi(e.time.day),Ea(e),_o(e),Ks(e),Nc(e),Ir(e),e.notifications.push(`Day ${e.time.day}: Market conditions shift across the sector.`),e.notifications.push(`Day ${e.time.day}: Some contracts edge closer to expiry.`)}window.travelToSystem=e=>{Vc(e)};function yi(){return C?C.systemsById:null}function vi(e){const t=yi();return t?t[e]??null:null}function Oc(e,t){return e.neighbors.find(n=>n.id===t)??null}let on=0,Dn=1;function zc(e){e!==Dn&&(Dn=e,on=0)}function rn(e){return e<=0?!1:on<e}function cn(){on+=1}function be(e){K().showEncounterDebug&&l.notifications.push(`Encounter debug: ${e}`)}function gt(){return vi(l.location.systemId)}function qc(){const e=gt();if(!e)return[];const t=yi();return t?e.neighbors.map(n=>{const a=t[n.id];return a?{system:a,route:n,profile:bi(e,a,n)}:null}).filter(n=>n!==null):[]}function bi(e,t,n){const a=ne(),i=(e.baseDanger+t.baseDanger)/2,s={core:-.04,border:0,fringe:.08,pirate:.14,wild:.12},o=n.laneType==="core_lane"?.9:n.laneType==="frontier_lane"?1.05:1.3,d=n.laneType==="core_lane"?.85:n.laneType==="frontier_lane"?1:1.25,u=n.laneType==="core_lane"?-.02:n.laneType==="frontier_lane"?.05:.12,p=(s[e.region]??0)+(s[t.region]??0),m=Math.max(1,Math.round(n.distance*d+Math.max(0,p)*2)),h=ot(.1*n.distance+i*.12+u+p+(n.laneType==="wildspace"?.05:0),.1,.95),y=Math.min(.95,Math.max(.1,h)),g=Math.max(0,y-Math.max(0,a.hazardDetectionBonus??0)),f=Math.max(1,Math.round(n.distance*o*(1+i*.06))),b=Math.max(1,Math.round(f*Math.max(.1,a.fuelCostMultiplier??1))),v=n.laneType==="core_lane"?"trade_lane":n.laneType==="wildspace"?"wild_jump":"standard";return{travelTime:m,fuelCost:b,hazardChance:g,hazardMitigation:Math.max(0,y-g),routeType:v,laneType:n.laneType,distance:n.distance}}function ot(e,t,n){return Math.max(t,Math.min(n,e))}function Mi(e){const t=l.ship.cargo||{};let n=0,a=0,i=0;for(const[o,d]of Object.entries(t)){if(!d)continue;const u=re(o);if(!u||u.legalStatus!=="illegal"&&u.legalStatus!=="restricted")continue;const p=ie(e.id,o);i+=p.sell*d,u.legalStatus==="illegal"?n+=d:a+=d}const s=n+a;return s<=0?null:{illegalUnits:n,restrictedUnits:a,totalUnits:s,estimatedValue:i}}function Gc(e,t,n,a=ne()){let i=t.security==="high"?.35:t.security==="low"?.15:.25;t.marketProfile?.blackMarket&&(i*=.65),t.tags.includes("restricted")&&(i+=.08),(t.tags.includes("checkpoint")||t.tags.includes("trade_lane"))&&(i+=.05),n==="trade_lane"&&(i+=.06);const s=1+Math.min(1,e.illegalUnits*.06+e.restrictedUnits*.025),o=Math.max(0,a.scanDetectionMultiplier??1),d=Math.max(.5,a.illegalTolerance??1),u=ot(i*s*o/d,0,.95),{detectionReduction:p}=Wt();return Math.max(0,u-p)}function Uc(e,t){const n=Mi(e);if(!n)return!1;const a=ne(),i=Gc(n,e,t.routeType,a);if(l.notifications.push(`Warning: checkpoint scan imminent (${Math.round(i*100)}% detection chance).`),Math.random()>i)return!1;const s=l.ship.cargo||{};let o=0;for(const[T,B]of Object.entries(s)){if(!B)continue;const $=re(T);$&&$.legalStatus==="illegal"&&(o+=B,s[T]=0)}if(l.ship.cargo=s,typeof window<"u"&&window.confirm("Contraband detected. Fight the authorities to keep your haul?"))return ge("navy_interceptor",{returnScreen:"travel",returnParams:{message:"You chose to fight the checkpoint."}}),!0;const u=Math.max(25,Math.round(n.estimatedValue*.35)),p=(n.illegalUnits||0)*15+(n.restrictedUnits||0)*8,m=u+p,{fineDiscount:h}=Wt(),y=Math.round(m*h),g=Math.max(0,m-y);l.player.credits=Math.max(0,l.player.credits-g);const f=3+Math.min(12,Math.round(n.illegalUnits*.5+n.restrictedUnits*.25)),b=Math.round(f*h*.6),v=Math.max(0,f-b);Ua(v);const E=n.restrictedUnits>0?" (restricted goods fined, not seized)":"";return l.notifications.push(`Checkpoint scans flag contraband. Seized ${o} illegal units, fined ${g} credits${E}, wanted +${v}.`),!0}function Wc(e,t,n,a){const i=ot((e.hazardChance+(e.hazardMitigation??0))*n*a,0,.95),s=ot(t,0,.95),o=Math.max(0,Math.round((i-s)*100));o>0&&l.notifications.push(`Hazard scanners trimmed travel risk by ${o}% (current hazard ${(s*100).toFixed(0)}%).`)}function Vc(e){const t=gt();if(!C||!t)return;const n=Oc(t,e);if(!n){const x=`No direct route from ${t.name} to ${e}.`;console.warn(x),l.notifications.push(x),_.go("main",{message:x});return}const a=vi(e);if(!a){const x=`Destination ${e} is unknown.`;console.warn(x),l.notifications.push(x),_.go("main",{message:x});return}const i=bi(t,a,n),s=Math.max(0,O.fuelCostMultiplier??1),o=de("control_t3_hazard_mapping")?.03:0,d=de("control_t3_hazard_mapping")?.95:1,u=Math.max(0,Math.round(i.fuelCost*s*d)),p=Math.max(0,Math.min(3,(O.travelRiskScaling??100)/100)),m=K(),h=Math.max(0,m.globalDangerMultiplier??1),y=Math.min(.95,Math.max(0,i.hazardChance*p*h-o)),g={...i,fuelCost:u,hazardChance:y},f=Qt(l),b=Math.ceil(g.fuelCost*f.fuel);if(l.ship.fuel<b){console.warn("Not enough fuel to travel.");return}l.ship.fuel-=b,l.location.systemId=a.id,l.lastMiningSystemId=null,l.location.docked=!0,_.advanceActiveRoute(a.id);const v=ia(i.travelTime);l.time.turn+=v,Mo(a.id),Hc(l),zc(l.time.day),Fc(l,a.id),Ki();const E=Ws(l,a.id);E.completed.length&&console.log(`Arrived at ${a.id}: checked ${E.checked} contracts, completed ${E.completed.join(", ")}.`);const T=Number.isInteger(v)?v.toFixed(0):v.toFixed(2),B=Math.abs(v-1)<.01?"":"s",$=`Arrived at ${a.name} after a ${g.routeType.replace("_"," ")} (${T} turn${B}).`;Wc(i,g.hazardChance,p,h),Uc(a,g)&&be("Contraband inspection triggered on arrival.");const I=Math.max(5,Math.round(i.distance*2+g.hazardChance*75+(g.routeType==="wild_jump"?10:0)));pe(I,"travel"),!Xc(a)&&(Jc(a)||Yc(t,a,g,$)||_.go("main",{message:$}))}function Yc(e,t,n,a){const i=K(),s=Math.max(0,(i.encounterChancePerJump??100)/100),o={from:e,to:t,hazardChance:Math.min(1,n.hazardChance*s),routeType:n.routeType},d=Qc(t)??$o(o);return d?(be(`Travel event triggered: ${d.name||d.id||"unknown"}`),d.type==="mining"?(be(`Mining event surfaced: ${d.id}`),_.go("event",{eventId:d.id}),!0):!d.choices||d.choices.length===0?(be(`Auto-resolving event: ${d.name||d.id||"unknown"}`),Kc(d,a)):(_.go("event",{eventId:d.id}),!0)):(_.go("main",{message:`${a} — Uneventful transit.`}),!0)}function Xc(e){const t=K(),n=Math.max(0,t.maxEncountersPerDay??0);if(!rn(n))return!1;const a=Yo({systemId:e.id,state:l,sessionFactor:1});if(Math.random()<=a){cn();const i=`Pirates intercept you near ${e.name}!`;return l.notifications.push(i),be(`Pirate encounter triggered near ${e.name} (chance ${a.toFixed(3)})`),wc(e.id),!0}return!1}function Jc(e){const t=K(),n=Math.max(0,t.maxEncountersPerDay??0);if(!rn(n))return!1;const a=Math.max(0,Math.min(1,(t.navyEncounterRateBase??0)/100));if(a<=0)return!1;const i=Math.max(0,(t.encounterChancePerJump??100)/100),s=e.security==="high"?1.15:e.security==="low"?.65:1,o=ne(),d=Mi(e),{detectionReduction:u,fineDiscount:p}=Wt(),m=d?1+Math.min(1.2,d.totalUnits*.02):1,h=Math.max(.6,m*Math.max(0,1-p*.8)),y=Math.max(0,o.scanDetectionMultiplier??1)/Math.max(.5,o.illegalTolerance??1),g=a*i*s*h*y,f=Math.min(1,Math.max(0,g*Math.max(0,1-u*.6)));if(Math.random()<=f){cn();const b=`Patrol intercepts you near ${e.name}!`;return l.notifications.push(b),be(`Patrol encounter triggered near ${e.name} (chance ${f.toFixed(3)})`),ge("navy_interceptor"),!0}return!1}function Kc(e,t){const n=So(e);if(n.triggerCombat?.enemyId){const a=K(),i=Math.max(0,a.maxEncountersPerDay??0);if(!rn(i))return _.go("main",{message:`${t} — Encounter skipped (cap reached).`}),!0;cn();const s=`Event auto-resolved into combat (${n.triggerCombat.enemyId}).`;return be(s),ge(n.triggerCombat.enemyId),!0}return _.go("main",{message:`${t} — ${e.name||"Event"} resolved automatically.`}),!0}const Zc={dawn_reach:"mining_fragment_field",aurora_belt:"mining_rich_vein"};function Qc(e){const t=el(e);return t?Jt(t)??null:null}function el(e){const t=[],n=new Set(e.tags||[]),a=o=>{t.includes(o)||t.push(o)};return(n.has("frontier")||n.has("pirate_stronghold")||n.has("black_market"))&&a("pirate_ambush"),n.has("mining_belt")&&a(Zc[e.id]??"mining_fragment_field"),["wildspace","anomaly","mining"].some(o=>n.has(o))&&a("mining_fragment_field"),(n.has("checkpoint")||n.has("trade_lane")||n.has("trade_hub"))&&a("navy_inspection"),(n.has("restricted")||n.has("religious")||e.faction==="unity_church")&&a("unity_checkpoint"),Math.random()<.18&&!t.includes("mining_fragment_field")&&a("mining_fragment_field"),t.length?t[Math.floor(Math.random()*t.length)]:null}function Ve(e){if(!Number.isFinite(e))return String(e);const t=Number(e.toFixed(2));return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")}window.nav=(e,t={})=>{_.go(e,t)};window.toggleTools=()=>{const e=document.getElementById("toolsActions"),t=document.getElementById("toolsToggleBtn");if(!e||!t)return;const n=e.classList.toggle("collapsed");t.textContent=n?"Show":"Hide"};window.startMiningSessionFromMain=()=>{const e=l.location.systemId,t=Q(e);if(!t)return;const n="global_easy_signal_belt",a=Array.isArray(t.tags)&&t.tags.includes("mining_belt");Te(l,e,a?void 0:n,void 0,{easySignals:!0})?_.go("mining"):_.go("main",{message:"Travel to a new system before mining again."})};function tl(){const e=l,t=Q(e.location.systemId),n=(()=>{const f=(t?.description??"Unknown space").trim(),b=f.split(".")[0];return b===f?f:`${b}.`})(),a=Object.values(e.ship.cargo||{}).reduce((f,b)=>f+b,0),i=e.player.xpTracks??{},s=ba(i),o=s.length>0?s.map(f=>{const b=f.xpNeededForNextLevel!==null?`${f.xpIntoLevel}/${f.xpNeededForNextLevel} XP`:`${f.xp} XP (max)`,v=f.xpNeededForNextLevel??0,E=v>0?Math.round(f.xpIntoLevel/v*100):100;return{status:f,progress:b,percent:E}}):[],d=o.length>0?o.map(({status:f,progress:b,percent:v})=>`
              <div class="xp-track-card">
                <div class="xp-track-header">
                  <span class="xp-track-title">${f.track.displayName}</span>
                  <span class="xp-track-level">Level ${f.level}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(v,100)}%"></div>
                </div>
                <div class="xp-track-sub">${b}</div>
              </div>
            `).join(""):'<div class="xp-track-card muted">No XP tracked yet.</div>',u=o.length>0?o.map(({status:f,progress:b,percent:v})=>`
              <div class="xp-track-row">
                <div class="xp-track-row-header">
                  <span class="xp-track-title">${f.track.displayName}</span>
                  <span class="xp-track-level">Level ${f.level}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(v,100)}%"></div>
                </div>
                <div class="xp-track-sub">${b}</div>
              </div>
            `).join(""):'<div class="xp-track-row muted">No XP tracked yet.</div>',p=Rs(),m=Object.entries(p),h=e.notifications[e.notifications.length-1],y=(e.notifications||[]).slice(-5).reverse(),g=(e.notifications||[]).slice().reverse().filter(f=>f.toLowerCase().includes("perks unlocked")).slice(0,4);return`
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">${t?.name??e.location.systemId}</span>
        </div>
      </header>

      <div class="top-dashboard-collapse">
        <details class="panel-card xp-dashboard-panel dashboard-collapse">
          <summary>XP Dashboard</summary>
          <div class="details-content">
            <div class="xp-track-grid">
              ${d}
            </div>
          </div>
        </details>
        <details class="panel-card perk-tree-panel dashboard-collapse">
          <summary>Perk Tree</summary>
          <div class="details-content">
            <div class="perk-tree">
              ${m.length?m.map(([f,b])=>`
                          <div class="perk-branch">
                            <h4>${f.charAt(0).toUpperCase()+f.slice(1)}</h4>
                            ${b.map(v=>`
                                  <div class="perk-row${v.unlocked?" unlocked":""}">
                                    <div class="perk-header">
                                      <strong>${v.displayName}</strong>
                                      <span class="perk-tier">Tier ${v.tier}</span>
                                    </div>
                                    <p class="perk-desc">${v.description}</p>
                                    <p class="perk-meta">
                                      ${v.source?`${v.source.trackId} L${v.source.level}`:"No XP track"}
                                      ${v.requires.length?` • requires: ${v.requires.join(", ")}`:""}
                                    </p>
                                    <div class="perk-badges">
                                      ${v.effectTargets.map(E=>`<span class="perk-badge" title="Affects ${E}" style="margin-right:4px;padding:0 6px;border-radius:999px;background:#222;color:#fff;font-size:0.75rem;">${E}</span>`).join("")}
                                    </div>
                                  </div>
                                `).join("")}
                          </div>
                        `).join(""):'<div class="perk-row muted">Perk definitions unavailable.</div>'}
            </div>
          </div>
        </details>
        <details class="panel-card perk-log-panel dashboard-collapse">
          <summary>Recent Perk Activity</summary>
          <div class="details-content">
            <div class="perk-log">
              ${g.length?g.map(f=>`<div class="perk-log-line">${f}</div>`).join(""):'<div class="perk-log-line muted">No perks unlocked recently.</div>'}
            </div>
          </div>
        </details>
      </div>

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

      <section class="panel-card xp-track-panel">
        <p class="label">XP Tracks</p>
        <div class="xp-track-list">
          ${u}
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
          ${h?`<p class="muted">Log: ${h}</p>`:""}
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
                  <strong>Day ${e.time.day} · Turn ${Ve(e.time.turn)}</strong>
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
            ${y.length?y.map(f=>`
                <div class="app-log-line">
                  <span>${f}</span>
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
              ${ut(e.location.systemId,"shipyard")?`<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`:""}
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
  `}window.attackPirateBase=e=>{const t=nl(e);if(!t){console.warn(`Unknown base ${e}`);return}_.go("event",{eventId:"pirate_base_attack",message:`You are entering ${t.name}. Waves: ${t.maxWaves}. Good luck.`})};function nl(e){return C?C.basesById[e]??null:null}function al(e){return C?Object.values(C.basesById).find(n=>n.systemId===e)??null:null}function il(e){return e?`Pirate Base Detected (Tier ${e.tier})`:""}const Pn={pirate:"Sensors pick up razor-thin kinematic volleys—expect raiders and brawlers that favor heavy hull breaks.",raider:"Raiders pressure forward with kinetic + explosive clusters. Keep shields topped and aim for front rows.",ghost:"Ghost Fleet whispers with disruptives—jam vs. shields, then focus on energy weapons.",corsair:"Corsairs hang back with energy/lance beams. Strike their hulls quickly or they will melt your shields."};function sl(e){for(const t of e)if(Pn[t])return Pn[t];return""}window.setMapZoom=e=>{_.setZoom(e)};window.focusRoute=e=>{_.go("travel",{..._.params,focusTargetId:e})};function ol(){const e=gt(),t=qc(),n=_.zoom||"local",a=typeof _.params.focusTargetId=="string"?_.params.focusTargetId:"",i=_.activeRoute,s=i?.nodes[i.currentIndex+1],o=i&&i.nodes.length>1?i.nodes.map($=>Q($)?.name??$).join(" → "):"",d=Object.values(l.ship.cargo||{}).reduce(($,A)=>$+A,0),u=t.map(({profile:$})=>$.hazardChance).reduce(($,A)=>Math.max($,A),0),p=Math.round((u||0)*100),m=l.player.credits,h=l.player.wanted,y=`
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
        ${y}
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
    `;const g=e?al(e.id):null,f=il(g),b=sl(e.tags||[]),v=b?`<div class="panel-card intel-hint">${b}</div>`:"",E=g?`
      <div class="panel-card">
        <p class="label">${f}</p>
        <p class="muted">${g.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${g.id}')">
          Attack Pirate Base (Tier ${g.tier})
        </button>
      </div>
    `:"",T=e?pl(e,t,n,a,i):"",B=t.length===0?'<p class="muted">No nearby systems detected.</p>':t.map(({system:$,route:A,profile:I})=>{const x=$.id===a,w=$.id===s,S=rl($.security),L=cl($),G=dl(I.hazardChance),R=`${I.fuelCost} fuel`,F=`${I.travelTime} turn${I.travelTime===1?"":"s"}`,W=ul(A.laneType),V=`Distance: ${A.distance}`,H=L.join(" | "),Y=["travel-row"];return(x||w)&&Y.push("travel-row--focused"),`
              <article class="${Y.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${$.name}</span>
                  <span class="travel-row__label">${S}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${W}</span>
                    <span>${V}</span>
                  </div>
                  <span class="travel-row__label">${R} | ${F} | Risk: ${G}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${$.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${$.id}')">Jump to ${$.name}</button>
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

      ${y}

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Travel</h1>
          <p class="muted">${e.description}</p>
          ${v}
          <div class="travel-list">
            ${B}
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
                ${t.map(({system:$,profile:A})=>`<li>${$.name} — ${A.travelTime} turn${A.travelTime===1?"":"s"} / ${A.fuelCost} fuel</li>`).join("")}
              </ul>
            </div>
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${E}
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
  `}function rl(e){switch(e){case"high":return"High sec";case"medium":return"Mid sec";case"low":return"Low sec";default:return`${e||"Unknown"} sec`}}function cl(e){const t=[];return e.tags.includes("frontier")&&t.push("Frontier"),e.tags.includes("mining_belt")&&t.push("Mining"),(e.tags.includes("checkpoint")||e.tags.includes("trade_lane"))&&t.push("Trade hub"),(e.tags.includes("restricted")||e.faction==="unity_church")&&t.push("Unity"),t.length?t:(e.tags||[]).map(ll)}function ll(e){switch(e){case"core":return"Core";case"border":return"Border";case"fringe":return"Fringe";case"pirate":return"Pirate Space";case"wildspace":return"Wildspace";case"mining_belt":return"Mining";case"black_market":return"Black Market";case"trade_lane":return"Trade Lane";case"checkpoint":return"Checkpoint";case"navy_base":return"Navy Base";case"anomaly":return"Anomaly";case"salvage":return"Salvage";default:return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}function dl(e){return e<.35?"Safe":e<.65?"Moderate":"Hazardous"}function ul(e){switch(e){case"core_lane":return"Core lane";case"frontier_lane":return"Frontier lane";default:return"Wildspace"}}function pl(e,t,n,a,i){if(!e)return'<p class="muted">Map data unavailable.</p>';const s=320,o=200,d=16,u=36,p=8,m=8,h=ct(),y=h&&a?Ht(h,e.id,a):[],g=i?.nodes??[],f=new Set([e.id]);a&&f.add(a),(h?jt(h,e.id):t.map(({system:M})=>M.id)).forEach(M=>f.add(M)),g.forEach(M=>f.add(M)),y.forEach(M=>f.add(M));const v=M=>M.laneType==="core_lane"?"core":M.laneType==="frontier_lane"?"frontier":"wild",E=h?ys(h,e.id,n):null,T=[],B=[];if(h&&E){const M=new Map(h.nodes.map(z=>[z.id,z])),P=new Set(E.keys());E.forEach((z,se)=>{const ce=M.get(se);ce&&T.push({...ce,depth:z})}),h.lanes.filter(z=>P.has(z.from)&&P.has(z.to)).forEach(z=>{const se=Math.max(E.get(z.from)??0,E.get(z.to)??0);B.push({...z,depth:se})})}else{const M=new Set;T.push({id:e.id,name:e.name,x:e.coords?.x??0,y:e.coords?.y??0,tags:e.tags??[],depth:0}),M.add(e.id),t.forEach(({system:P,route:z})=>{M.has(P.id)||(T.push({id:P.id,name:P.name,x:P.coords?.x??0,y:P.coords?.y??0,tags:P.tags??[],depth:1}),M.add(P.id),B.push({from:e.id,to:P.id,type:v(z),distance:z.distance,depth:1}))})}if(!T.length)return'<p class="muted">No coordinate data to render.</p>';const $=T.map(M=>M.x),A=T.map(M=>M.y),I=Math.min(...$),x=Math.max(...$),w=Math.min(...A),S=Math.max(...A),L=x-I||1,G=S-w||1,R=M=>d+(M-I)/L*(s-d*2),F=M=>o-(d+(M-w)/G*(o-d*2)),W=new Map(T.map(M=>[M.id,{...M,sx:R(M.x),sy:F(M.y)}])),V=new Set(T.map(M=>M.id)),H=new Set(g);y.forEach(M=>H.add(M)),!h&&a&&H.add(a);const Y=new Set,D=M=>{for(let P=0;P<M.length-1;P++)Y.add(tt(M[P],M[P+1]))};D(g),y.length?D(y):a&&Y.add(tt(e.id,a));const q=B.filter(M=>V.has(M.from)&&V.has(M.to)).map(M=>{const P=W.get(M.from),z=W.get(M.to);if(!P||!z)return"";const se=tt(M.from,M.to),ce=M.depth??Math.max(P.depth??0,z.depth??0),xe=Y.has(se),Re=xe?3.2:ce<=1?2.2:1.2,we=xe?1:ce<=1?.9:.35;return`<line x1="${P.sx.toFixed(1)}" y1="${P.sy.toFixed(1)}" x2="${z.sx.toFixed(1)}" y2="${z.sy.toFixed(1)}" stroke="${ml(M.type)}" stroke-width="${Re}" stroke-linecap="round" opacity="${we}"></line>`}).join(""),U=Array.from(W.values()).map(M=>{const P=M.id===e.id,se=(M.depth??0)<=1,ce=H.has(M.id),xe=P?7:ce?6:se?5:3.5,Re=P?"#4CE6C3":ce?"#7dd3fc":"#ffffff",we=ce||se?1:.45,Ye=f.has(M.id),yt=M.name.length>16?`${M.name.slice(0,14)}...`:M.name,vt=Ye?yt:"";return`
        <g>
          <circle
            cx="${M.sx.toFixed(1)}"
            cy="${M.sy.toFixed(1)}"
            r="${xe}"
            fill="${Re}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${we}"
          ></circle>
          ${Ye?`<text x="${(M.sx+p).toFixed(1)}" y="${(M.sy-m).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${vt}</text>`:""}
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
        ${q}
        ${U}
      </svg>
    </div>
  `}function ml(e){switch(e){case"core_lane":case"core":return"#4ce6c3";case"frontier_lane":case"frontier":return"#ffb347";default:return"#ff7a7a"}}const An={high:"^",low:"v",stable:"-"};function hl(e={}){const t=Q(l.location.systemId);if(!t)return`
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
    `;const n=Ta();if(!n.length)return`
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
    `;const a=Object.values(l.ship.cargo||{}).reduce((w,S)=>w+S,0),i=Object.entries(l.ship.cargo||{}).filter(([,w])=>w>0).sort((w,S)=>S[1]-w[1]).slice(0,5),s=new Map;fe().filter(w=>w.status==="active").forEach(w=>{const S=w.requirements?.deliver;if(!S?.commodityId)return;const L=s.get(S.commodityId)??{needed:0,deliverable:!1},G=it(S.commodityId)>=(S.quantity||0),R=!S.systemId||S.systemId===l.location.systemId;s.set(S.commodityId,{needed:L.needed+(S.quantity||0),deliverable:L.deliverable||R&&G})});const o=n.map(w=>{const S=ie(t.id,w.id),L=$l(w.tradeTags?.length?w.tradeTags:w.tags),G=it(w.id),R=kl(w,G),F=xi(S.buy,a,w.id);return{commodity:w,quote:S,tags:L,cargoQty:G,metaLine:R,maxBuyable:F,profit:S.sell-S.buy}}),d=o.reduce((w,S)=>S.profit>w.profit?{profit:S.profit,entry:S}:w,{profit:Number.NEGATIVE_INFINITY,entry:o[0]}),u=d.entry?.commodity.id??"",p=typeof e.selectedCommodityId=="string"?e.selectedCommodityId:null,m=o.find(w=>w.commodity.id===p)||o.find(w=>w.commodity.id===u)||o[0],h=o.reduce((w,S)=>{const L=S.quote.high-S.quote.buy;return L>w.delta?{delta:L,entry:S}:w},{delta:-1/0,entry:o[0]}).entry,y=o.reduce((w,S)=>{const L=S.quote.buy-S.quote.low;return L>w.delta?{delta:L,entry:S}:w},{delta:-1/0,entry:o[0]}).entry,g=["legal","restricted","illegal"];let f=0;const b=g.map(w=>{const S=o.filter(F=>Ln(F.commodity.legalStatus)===w);if(!S.length)return"";const L=Bt(w),G=`
        <div class="market-group__header">
          <div>
            <p class="market-group__label">${L} goods</p>
            <p class="muted market-group__count">${S.length} items</p>
          </div>
          <span class="market-status market-status--${w}">${L}</span>
        </div>
      `,R=S.map(({commodity:F,quote:W,tags:V,cargoQty:H})=>{const Y=m?.commodity.id===F.id,D=s.get(F.id),q=["market-row"];Y&&q.push("market-row--highlight");const U=Ln(F.legalStatus);q.push(`market-row--${U}`);const M=D?`<span class="contract-pill contract-pill--target${D.deliverable?" ready":""}">${D.deliverable?"Deliver now":"Contract target"}</span>`:"",P=`<span class="market-row__status market-row__status--${U}">${Bt(U)}</span>`,z=`${An[W.trend]} ${W.trend}`,se=f++;return`
            <article class="${q.join(" ")}" style="--row-index:${se};" onclick="selectMarketCommodity('${F.id}')">
              <div class="market-row__main">
                <span class="market-row__name">${F.name}</span>
                <span class="market-row__info">
                  BUY ${W.buy} A | SELL ${W.sell} A | Held ${H}
                </span>
              </div>
              <div class="market-row__meta">
                <span class="market-row__trend">${z}</span>
                <div class="market-row__meta-line">
                  <span>${V||"Local goods"}</span>
                  ${P}
                  ${M}
                </div>
              </div>
            </article>
          `}).join("");return`
        <section class="market-group">
          ${G}
          ${R}
        </section>
      `}).join(""),v=a>0,E=`
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
          <strong>${Ve(l.time.turn)}</strong>
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
        Credits: ${l.player.credits} | Cargo: ${fl()}
      </p>
      <div class="market-summary__cargo">
        ${i.length?i.map(([w,S])=>{const L=re(w),G=L?.mass??0,R=G?` (Mass ${Math.round(G*S)})`:"";return`<span>${S} × ${L?.name||w}${R}</span>`}).join(""):'<span class="muted">Cargo empty</span>'}
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${v?"":" disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `,T=m?La(t.id,m.commodity.id,1):!1,B=m?Na(t.id,m.commodity.id,1):!1,$=m&&T?"":" disabled",A=m&&m.maxBuyable>1&&T?"":" disabled",I=m&&B&&m.cargoQty>0?"":" disabled",x=m?`
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${m.commodity.name}</strong>
        <span class="market-row__trend">${An[m.quote.trend]} ${m.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${m.quote.buy} · SELL ${m.quote.sell}</span>
        <span>${m.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${$}
          onclick="buyCommodityAction('${m.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${A}
          onclick="buyAllCommodityAction('${m.commodity.id}', ${m.quote.buy})"
        >
          Buy Max (${m.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${I}
          onclick="sellCommodityAction('${m.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${I}
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
            ${E}
    ${gl(t.id)}
          </aside>
          <div class="market-list">
            <h2 class="panel-title small">Goods</h2>
            ${b}
            ${x}
          </div>
        </section>
        <section class="market-priority">
          <h2 class="panel-title small">Priority Paths</h2>
          ${bl()}
        </section>
        <section class="market-footer">
          ${yl(t,h,y,d.entry)}
        </section>
        ${xl(o)}
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `}function fl(){const e=l.ship.cargo||{};return`${Object.values(e).reduce((n,a)=>n+a,0)}/${l.ship.cargoCapacity}`}function gl(e){const t=bo(e);return t.length?`
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
    `}function yl(e,t,n,a){const i=Pa(),s=Aa(),o=e?.neighbors.map(f=>Q(f.id)).filter(f=>!!f&&i[f.id])||[],d=o.length>0?o.map(f=>{const b=wl(e?.id,f.id),v=l.time.turn-(i[f.id]?.turn??l.time.turn),E=b.over?`${b.over.id} overpriced (+${Math.round(b.over.delta*100)}%)`:"no overpay signal",T=b.under?`${b.under.id} underpriced (${Math.round(b.under.delta*100)}% cheaper)`:"no bargain yet";return`<p class="insight-mini">${f.name}: ↑ ${E} · ↓ ${T} (age ${v}t)</p>`}).join(""):'<p class="insight-mini muted">No neighbor intel yet.</p>',u=[];t&&u.push(`<span>📈</span> ${t.commodity.name} high runs ${Math.round(t.quote.high-t.quote.buy)} above buy (${t.quote.high})`),n&&u.push(`<span>📉</span> ${n.commodity.name} low sits ${Math.round(n.quote.buy-n.quote.low)} below buy (${n.quote.low})`);const p=u.length?u.map(f=>`<p class="insight-mini">${f}</p>`).join(""):'<p class="insight-mini muted">No strong pulses yet.</p>',m=a?`<p class="insight-mini"><span>💡</span> Consider ${a.commodity.name}. Buy @ ${a.quote.buy} A·, sell @ ${a.quote.high} A· (high).</p><p class="insight-mini muted">Profit spread: +${a.profit}</p>`:'<p class="insight-mini muted">No hot tip available.</p>',h=l.notifications.filter(f=>{const b=f.toLowerCase();return b.includes("market")||b.startsWith("bought")||b.startsWith("sold")}).slice(-6).reverse(),y=h.length?h.map(f=>`<p class="insight-mini">${f}</p>`).join(""):'<p class="insight-mini muted">No market-relevant log entries yet.</p>',g=(f,b)=>`<p class="insight-title"><span class="insight-icon" aria-hidden="true">${f}</span>${b}</p>`;return`
    <div class="panel-card market-insights-card">
      <p class="label">Market Insights</p>
      <div class="insight-section">
        ${g("🛰️","Intel Tools")}
        <p class="insight-mini muted">System: ${e?.name||"Unknown"}</p>
        <p class="insight-mini">Neighbor Intel ${s} cr — highlights over/under priced goods (actuals drift on arrival).</p>
        <div class="insight-list">
          ${d}
        </div>
        <div class="app-actions">
          <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${s})</button>
        </div>
      </div>
      <div class="insight-section">
        ${g("📈","Trending")}
        ${p}
      </div>
      <div class="insight-section">
        ${g("💡","Hot Tip")}
        ${m}
      </div>
      <div class="insight-section">
        ${g("📝","Market Log")}
        ${y}
      </div>
    </div>
  `}const vl=["taxEvasion","smuggling","bribery"];function bl(){return`
    <div class="panel-card strategy-panel">
      <p class="label">Profit Paths</p>
      <div class="strategy-panel__cards">
        ${vl.map(t=>Ml(t)).join("")}
      </div>
    </div>
  `}function Ml(e){const t=Sa(e),n=Math.round(Qs(e)),a=`${n}%`;return`
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
  `}function xl(e){if(!e.length)return"";const t=e.map(h=>({label:h.commodity.name,value:h.quote.high})),n=e.map(h=>({label:h.commodity.name,value:h.quote.low})),a=Math.max(...t.map(h=>h.value)),i=Math.min(...n.map(h=>h.value)),s=Math.max(1,a-i),o=280,d=120,u=t.map((h,y)=>{const g=y/Math.max(1,t.length-1)*o,f=d-h.value/a*d;return`${g},${f}`}).join(" "),p=n.map((h,y)=>{const g=y/Math.max(1,n.length-1)*o,f=d-(h.value-i)/s*d;return`${g},${f}`}).join(" "),m=t.slice(0,6).map(h=>`<div class="trend-line">
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
`}function wl(e,t){if(!e)return{over:null,under:null};const a=Pa()[t];if(!a)return{over:null,under:null};let i=null,s=null;const o=Math.max(0,l.time.turn-a.turn),d=Math.max(.5,1-o*.05);for(const[u,p]of Object.entries(a.prices)){const m=ie(e,u);if(m.sell>0&&p.buy>m.sell){const h=(p.buy-m.sell)/m.sell*d;(!i||h>i.delta)&&(i={id:u,delta:h})}if(m.buy>0&&p.sell<m.buy){const h=(m.buy-p.sell)/m.buy*d;(!s||h>s.delta)&&(s={id:u,delta:h})}}return{over:i,under:s}}function xi(e,t,n){if(e<=0)return 0;const a=Math.floor(l.player.credits/e),i=Math.max(0,l.ship.cargoCapacity-t);return Math.max(0,Math.min(a,i))}function $l(e){return e?.length?Array.from(new Set(e)).map(n=>ln(n.replace(/_/g," "))).join(" | "):""}function kl(e,t){const n=ln(e.tier||"standard"),a=Bt(e.legalStatus||"legal"),i=typeof e.mass=="number"?`${e.mass}t`:null,s=[`Held ${t}`,`Tier ${n}`,a];return i&&s.push(`Mass ${i}`),s.join(" | ")}function ln(e){return e.split(" ").filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Bt(e){return{legal:"Legal",restricted:"Restricted",illegal:"Illegal"}[e]??ln(e)}function Ln(e){return e==="restricted"||e==="illegal"?e:"legal"}window.selectMarketCommodity=e=>{nav("market",{selectedCommodityId:e})};window.buyCommodityAction=e=>{const t=l.location.systemId,n=re(e),a=Fa(t,e,1),i=ie(t,e).buy,s=document.getElementById("market-message");s&&(s.textContent=a?`Bought 1 ${n?.name||e} for ${i} cr.`:`Cannot buy ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.sellCommodityAction=e=>{const t=l.location.systemId,n=re(e),a=Yt(t,e,1),i=ie(t,e).sell,s=document.getElementById("market-message");s&&(s.textContent=a?`Sold 1 ${n?.name||e} for ${i} cr.`:`Cannot sell ${n?.name||e}.`),nav("market",{selectedCommodityId:e})};window.buyAllCommodityAction=(e,t)=>{const n=l.location.systemId,a=l.ship.cargo||{},i=Object.values(a).reduce((u,p)=>u+p,0),s=xi(t,i);if(s<=0){nav("market");return}Fa(n,e,s);const o=re(e),d=document.getElementById("market-message");d&&(d.textContent=`Bought ${s} ${o?.name||e} for ${t*s} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCommodityAction=e=>{const t=l.location.systemId,n=it(e);if(n<=0){nav("market");return}const a=ie(t,e).sell;Yt(t,e,n);const i=re(e),s=document.getElementById("market-message");s&&(s.textContent=`Sold ${n} ${i?.name||e} for ${a*n} cr.`),nav("market",{selectedCommodityId:e})};window.sellAllCargoAction=()=>{const e=l.location.systemId,t=Object.entries(l.ship.cargo||{});let n=0;const a=[];for(const[s,o]of t){if(!o||!Yt(e,s,o))continue;n+=o;const u=re(s);a.push(`${o} ${u?.name||s}`)}const i=document.getElementById("market-message");if(i)if(!n)i.textContent="No cargo available to sell.";else{const s=a.length>3?`${a.slice(0,3).join(", ")} +${a.length-3} others`:a.join(", ");i.textContent=`Sold ${n} cargo units (${s}).`}nav("market")};window.purchaseNeighborIntel=()=>{const e=xo(),t=document.getElementById("market-message");t&&(t.textContent=e.message),nav("market")};window.pursueTradeStrategy=e=>{const t=Sa(e),n=to(e),a=document.getElementById("market-message");a&&(a.textContent=n?`Invested in ${t.name}.`:`Need ${t.cost} credits to unlock ${t.name}.`),nav("market")};function Sl(e){if(!e)return[];if(Array.isArray(e))return e.filter(t=>typeof t=="string");if(typeof e=="string")try{const t=JSON.parse(e);if(Array.isArray(t))return t.filter(n=>typeof n=="string")}catch{return e.split(",").map(t=>t.trim()).filter(Boolean)}return[]}function _l(e={}){const t=typeof e.message=="string"?e.message:"",n=fe(),a=Ls(),i=Object.values(l.ship.cargo||{}).reduce((y,g)=>y+g,0),o=Sl(e.selectedMissionIds)[0]??(typeof e.selectedMissionId=="string"?e.selectedMissionId:""),d=n.length>0?`
        <div class="contract-list contract-section">
          ${n.map(y=>{y.requirements;const g=Fn(y),f=Cl(g),b=Nn(g),v=Q(g??""),E=v?.region?`Region: ${Je(v.region)}`:"",T=v?.tags?.length>0?`Keywords: ${v.tags.map(B=>Je(B)).join(", ")}`:"";return`
                <article class="contract-row contract-row--active" onclick="abandonMission('${y.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${y.name}</span>
                    <span class="contract-type">${y.type}</span>
                  </div>
                  ${y.description?`<p class="muted">${y.description}</p>`:""}
                  <div class="contract-row__meta">
                    <span>${Ns(y)}</span>
                    <span>${Fs(y)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${f}${b?` - ${b}`:""}</span>
                    ${E?`<span>${E}</span>`:""}
                    ${T?`<span>${T}</span>`:""}
                    ${g?`<button class="btn btn-ghost btn-small" onclick="event.stopPropagation(); focusContractTravel('${g}')">Travel here</button>`:""}
                  </div>
                </article>
              `}).join("")}
        </div>
      `:'<p class="muted">No active missions.</p>',u=o?[o]:a[0]?[a[0].id]:[],p=a.reduce((y,g)=>{const b=Fn(g)??"unknown",v=y.get(b)??[];return v.push(g),y.set(b,v),y},new Map),m=(y,g)=>{if(!g.length)return"";const f=Q(y),b=f?.region?`Region: ${Je(f.region)}`:"",v=f?.tags?.length?`Keywords: ${f.tags.map(T=>Je(T)).join(", ")}`:"",E=f?f.name:"Unknown Region";return`
      <div class="contract-list contract-section">
        <h3 class="panel-title tiny">${E}</h3>
              ${g.map(T=>{const B=["contract-row"];u.includes(T.id)&&B.push("contract-row--active");const $=Nn(y);return`
                    <article class="${B.join(" ")}" onclick="acceptContract('${T.id}')">
                      <div class="contract-row__main">
                        <span class="contract-row__name">${T.name}</span>
                        <span class="contract-type">${T.type}</span>
                      </div>
                      <p class="muted">${T.description}</p>
                      <div class="contract-row__info">
                        <span>System: ${E}${$?` - ${$}`:""}</span>
                        ${b?`<span>${b}</span>`:""}
                        ${v?`<span>${v}</span>`:""}
                        <span>Reward: ${Tl(T.reward)}</span>
                      </div>
                    </article>
                  `}).join("")}
      </div>
    `},h=p.size?Array.from(p.entries()).map(([y,g])=>m(y,g)).join(""):'<p class="muted">No available missions.</p>';return`
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
  `}function Cl(e){if(!e)return"Unknown";const t=Q(e);return t?.name?`<strong>${t.name}</strong>`:e}function Nn(e){if(!e)return"";const t=ct();if(!t)return"";const n=vs(t,l.location.systemId,e);return n==null?"Uncharted":n===0?"Here":`${n} jump${n===1?"":"s"} away`}function Tl(e){if(!e)return"None";const t=[];if(e.credits&&t.push(`${e.credits} credits`),e.rep){const n=Object.entries(e.rep).map(([a,i])=>`${a} ${i>0?"+":""}${i}`).join(", ");t.push(`Rep: ${n}`)}if(e.weapon){const n=te(e.weapon)?.name||e.weapon;t.push(`Weapon: ${n}`)}return t.join(" | ")||"None"}function Je(e){return e.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Fn(e){const t=e.requirements||{};if(t.travel?.systemId)return t.travel.systemId;if(t.deliver?.systemId)return t.deliver.systemId;if(t.combat?.systemId)return t.combat.systemId;if(Array.isArray(t.multiTravel)&&t.multiTravel.length){const n=t.multiTravel[0];return typeof n=="string"?n:n?.systemId}if(e.description)return El(e.description)}function El(e){const t=ct();if(!t)return;const n=e.toLowerCase();for(const a of t.nodes)if(a.name&&n.includes(a.name.toLowerCase()))return a.id}window.acceptContract=e=>{const t=zt(e),n=t.success?"Mission accepted.":t.reason||"Unable to accept.";nav("contracts",{message:n})};window.abandonMission=e=>{const t=zs(e),n=t.success?"Mission abandoned.":t.reason||"Unable to abandon.";nav("contracts",{message:n})};window.focusContractTravel=e=>{e&&nav("travel",{focusTargetId:e})};const Rl={"small:energy":"laser_mk1","small:projectile":"coil_autocannon","small:missile":"stinger_missiles","medium:energy":"storm_lance","medium:projectile":"railgun_mk1","medium:missile":"hailstorm_pod","large:projectile":"mass_driver"};function dn(e){return C?C.ships.find(t=>t.id===e)??null:null}function Il(){return dn(l.ship.templateId)}function Bl(){return C?C.ships.filter(e=>e.starter):[]}function Dl(){return C?C.ships.filter(e=>!e.starter):[]}function wi(e,t){const n=dn(e);if(!n){console.warn(`Unknown ship template: ${e}`);return}const a=n.hardpoints.map(()=>null),i=[],s={templateId:n.id,name:n.name,hp:n.hull,maxHp:n.hull,shields:n.shields,maxShields:n.shields,fuel:n.fuel,maxFuel:n.fuel,cargo:{},cargoCapacity:n.cargo,modules:[],weapons:n.hardpoints.map((o,d)=>Rl[`${o.size}:${o.type}`]??a[d]),weaponPower:0,evasion:0,maneuverRating:n.maneuverRating,components:i,hardpoints:n.hardpoints.map(o=>({...o})),passive:n.passive??null};l.ship=s,Pt(),Lt()}function Pl(e){wi(e),l.player.hasChosenStarter=!0}function Al(e){const t=dn(e);return t?t.starter?(console.warn("Starter ships are not sold at shipyards."),!1):l.player.credits<t.cost?(console.warn("Not enough credits to buy this ship."),!1):(l.player.credits-=t.cost,wi(e),!0):(console.warn(`Unknown ship template: ${e}`),!1)}function Ll(){const e=l.ship,t=e.maxHp-e.hp,n=e.maxShields-e.shields;if(t<=0&&n<=0)return;const a=Qt(l),i=Math.max(0,Math.round((t+n)*a.repair));if(l.player.credits<i){console.warn("Not enough credits to fully repair.");return}l.player.credits-=i,e.hp=e.maxHp,e.shields=e.maxShields}function Nl(){const e=l.ship,t=e.maxFuel-e.fuel;if(t<=0)return;const a=t*2;if(l.player.credits<a){console.warn("Not enough credits to fully refuel.");return}l.player.credits-=a,e.fuel=e.maxFuel}window.repairShipAction=()=>{Ll(),nav("ship")};window.refuelShipAction=()=>{Nl(),nav("ship")};function Fl(){const e=l.ship,t=Il(),n=la(),a=l.combat?.playerCooldowns??[],i=Object.values(e.cargo||{}).reduce((m,h)=>m+h,0),s=l.player,o=s.credits,d=s.wanted,u=t?`<p class="muted">${t.description}</p>`:`<p class="muted">Unknown template (${e.templateId})</p>`,p=n.length===0?"<p>No components installed.</p>":`<ul>${n.map(m=>`<li>${m.name} (+${m.value} ${m.effectType})</li>`).join("")}</ul>`;return`
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
            <strong>${o}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-cargo"></span>
          <div>
            <span>Cargo</span>
            <strong>${i}/${e.cargoCapacity}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-danger"></span>
          <div>
            <span>Wanted</span>
            <strong>${d}</strong>
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
          <span class="stat-value">${i}/${e.cargoCapacity}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ship Status</h1>
          ${u}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${p}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${e.hardpoints.map((m,h)=>{const y=te(e.weapons[h]),g=y?.name||"Empty",f=a[h]??0,b=y?Ft(y):null,v=b?`
                    <p class="muted">Role: ${b.role} (${b.typeLabel})</p>
                    <p class="muted">Vs Shields: ${b.vsShields} · Vs Hull: ${b.vsHull}</p>
                    ${b.tagNotes.length?`<p class="muted">Traits: ${b.tagNotes.join(", ")}</p>`:""}
                  `:"";return`
                  <div class="panel-card">
                    <p class="label">Slot ${h+1} · ${m.size} ${m.type}</p>
                    <p class="value-inline">${g}</p>
                    <p class="muted">${f>0?`${f} turn${f===1?"":"s"} left`:"Ready"}</p>
                    ${v}
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
  `}const jn={pirate:"Sensors report kinetic and explosive signatures—brace for hull rakes ahead.",disruptive:"Disruptive arcs detected; expect jammed systems if shields fall.",energy:"Energy harmonics in the signal mean shields will sponge the incoming fire.",ghost:"Ghost fleet scouts favor shield-cracking pulses; bring hull-focused damage."};function Hn(e){if(!e)return"";for(const t of e)if(jn[t])return jn[t];return""}function jl(e={}){const t=typeof e.eventId=="string"?e.eventId:"",n=Jt(t);if(!n)return`
      <div class="screen event">
        <h1>No Event</h1>
        <p>No events available here.</p>
      </div>
    `;if(n.type==="mining"){const s=Hn(n.tags);return`
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
    `}const a=Hl(n.choices),i=Hn(n.tags);return`
    <div class="screen event">
      <header class="event-header">
        <h1>${n.name}</h1>
        <p class="event-type">Type: ${Ol(n.type)}</p>
          ${n.description?`<p class="event-description">${n.description}</p>`:""}
          ${i?`<p class="event-hint">${i}</p>`:""}
      </header>
      <section class="event-choices">
        <h2>Choices</h2>
        ${a}
      </section>
    </div>
  `}function Hl(e){return!e||!e.length?"<p>No choices; this event resolves on its own.</p>":`<div class="choice-list">${e.map((n,a)=>{const i=n.description?`<p class="choice-desc">${n.description}</p>`:"",s=n.risk?`<span class="choice-risk">Risk: ${zl(n.risk.dangerChance)}</span>`:"";return`
        <article class="choice-card" onclick="pickChoice(${a})">
          <div class="choice-title">
            <strong>${n.label}</strong>
            ${s}
          </div>
          ${i}
        </article>
      `}).join("")}</div>`}function Ol(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function zl(e){return typeof e!="number"?"0%":`${Math.round(e*100)}%`}window.pickChoice=e=>{const t=_.params,n=typeof t.eventId=="string"?t.eventId:"",a=Jt(n);if(!a){nav("main");return}const i=a.choices?.[e];if(i){const s=ko(i);if(s.triggerCombat?.enemyId){ge(s.triggerCombat.enemyId);return}}nav("main",{message:`Outcome: ${i?.label||a.name}`})};window.beginMiningSession=(e,t)=>{Te(l,l.location.systemId,e||void 0,t||void 0)?_.go("mining"):_.go("main",{message:"Travel to a new system before mining again."})};const ql={balanced:"bi bi-record-circle",brace:"bi bi-shield-lock",evasive:"bi bi-speedometer2",overcharge:"bi bi-lightning"},Ke=["balanced","brace","evasive","overcharge"],Gl={frontline:"Frontline",backline:"Backline",support:"Support"};function Ul(e){if(!e)return"";const t=Gl[e];return t?`<span class="enemy-role-chip">${t}</span>`:""}function Wl(e){return e?`<span class="enemy-faction-chip">${e.toUpperCase()}</span>`:""}window.fireWeapon=(e,t="normal")=>{We("fire",e,t),l.combat&&nav("combat")};window.brace=()=>{We("brace"),l.combat&&nav("combat")};window.flee=()=>{We("flee"),l.combat&&nav("combat")};window.setStance=e=>{gi(e),l.combat&&nav("combat")};window.cycleStance=e=>{const n=l.combat?.playerStance??"balanced",i=(Ke.indexOf(n)+e+Ke.length)%Ke.length,s=Ke[i];gi(s),l.combat&&nav("combat")};window.fireAllWeapons=(e="normal")=>{We("fire_all",void 0,e),l.combat&&nav("combat")};window.activateModuleAbility=e=>{Sc(e),l.combat&&nav("combat")};window.useComboFinish=()=>{We("combo_finish"),l.combat&&nav("combat")};window.selectEnemySlot=e=>{const t=l.combat;t&&(t.selectedEnemyId=e,nav("combat"))};function Vl(e,t,n){return!(!t||t.position.row!=="back"||!n||!n.alive)}function On(e,t,n,a=!1,i=!1){const s=t==="front"?"Front":"Back",o=e+1;if(!n)return`
      <div class="enemy-slot enemy-slot--empty row-${t}">
        <span class="enemy-slot-meta">Lane ${o} · ${s}</span>
        <span class="muted">Empty</span>
      </div>
    `;const d=n.statusEffects.map(h=>`<span class="status-pill">${h.type}</span>`).join(""),u=`Lane ${o} · ${s}`,p=Ul(n.role),m=Wl(n.factionLabel??n.factionId);return`
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
      ${i?'<span class="cover-badge">Covered</span>':""}
    </button>
  `}function Yl(){const e=l.combat;if(!e)return`
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;const t=l.ship,n=e.log.map(D=>`<div class="log-line">${D}</div>`).join(""),a=t.hp/Math.max(1,t.maxHp)<=.35,i=(e.log[e.log.length-1]||"").toLowerCase(),s=i.includes("hits you")||i.includes("damage"),o=e.log[e.log.length-1]||"Awaiting orders.";Ze(o);const d=["app-root","combat-root"];a&&d.push("low-hull"),s&&d.push("hit-flash");const u=e.encounter.enemies.find(D=>D.id===e.selectedEnemyId)??e.encounter.enemies.find(D=>D.position.row==="front")??e.encounter.enemies[0],p=e.encounter.enemies.length,m=[0,1,2],h=p>0?`
        <div class="enemy-formation-grid">
          ${m.map(D=>{const q=e.encounter.enemies.find(P=>P.position.lane===D&&P.position.row==="front"),U=e.encounter.enemies.find(P=>P.position.lane===D&&P.position.row==="back"),M=u?.position.lane===D;return`
                <div class="enemy-lane lane-${D} ${M?"is-active-lane":""}">
                  <div class="lane-header">
                    <span class="lane-label">Lane ${D+1}</span>
                    <span class="lane-subtitle">${q||U?"Engaged":"Empty"}</span>
                  </div>
                  <div class="lane-slot-row lane-front">
                    ${On(D,"front",q,u?.id===q?.id)}
                  </div>
                  <div class="lane-slot-row lane-back">
                    ${On(D,"back",U,u?.id===U?.id,Vl(D,U,q))}
                  </div>
                </div>
              `}).join("")}
        </div>
      `:'<div class="enemy-slot muted-chip">No enemies in formation.</div>',y={energy:"bi-lightning-fill",projectile:"bi-cpu-fill",missile:"bi-rocket-takeoff-fill",hybrid:"bi-shuffle"},g=t.hardpoints.map((D,q)=>{const U=t.weapons[q],M=te(U),P=M?.name??`Slot ${q+1}`,z=M?y[M.type]??"bi-crosshair":"bi-crosshair";return`
        <button class="weapon-chip" onclick="fireWeapon(${q}, 'normal')" title="${P}">
          <i class="bi ${z}"></i>
        </button>
      `}).join("");ls.map(D=>`
        <tr>
          <td>${D.type}</td>
          <td>${D.shieldMultiplier.toFixed(2)}x</td>
          <td>${D.hullMultiplier.toFixed(2)}x</td>
          <td>${D.description}</td>
        </tr>
      `).join("");const f=ze(e.playerStance),b=ql[e.playerStance]??"bi bi-flag",v=e.comboMeter,E=v?.charge??0,T=100,B=Math.min(100,Math.round(E/T*100)),$=v?.ready;$&&`${$.label}`,`${t.hp}${t.maxHp}${t.shields}${t.maxShields}${t.fuel}${t.maxFuel}`,`${Ze(f.description)}${b}${f.label}`;const A=Object.entries(f.damageTakenMultipliers||{}).map(([D,q])=>{const U=q??1;return`<span class="stance-modifier ${U>=1?"debuff":"buff"}">${D}: ${U.toFixed(2)}x</span>`}),I=A.length>0?A.join(""):'<span class="muted">No stance-specific multipliers.</span>',x=Dc();x&&`${x.suggestion}${x.text}${(x.confidence*100).toFixed(0)}`;const w=u?.shields<=0;u&&w&&`${u.name}`;const L=kc().map(({componentId:D,componentName:q,ability:U,ready:M})=>{const P=U.type==="pull"?"bi-box-arrow-in-left":"bi-box-arrow-up-right";return`
        <button
          class="action-chip module-chip ${M?"":"is-disabled"}"
          ${M?"":"disabled"}
          title="${Ze(q)}"
          onclick="activateModuleAbility('${D}')"
        >
          <i class="bi ${P}"></i>
          <span>${Ze(q)}</span>
        </button>
      `}).join(""),R=[{icon:"bi-bolt-fill",label:"Fire",action:"fireAllWeapons('normal')",title:"Fire all ready weapons"},{icon:"bi-asterisk",label:"Called",action:"fireAllWeapons('called_shot')",title:"Called shots"},{icon:"bi-shield-fill",label:"Brace",action:"brace()",title:"Brace for impact"},{icon:"bi-flag-fill",label:"Flee",action:"flee()",title:"Attempt to flee"}].map(({icon:D,label:q,action:U,title:M})=>`
        <button class="action-chip" title="${M}" onclick="${U}">
          <i class="bi ${D}"></i>
          <span>${q}</span>
        </button>
      `).join(""),F=`
    <button
      class="action-chip combo-chip ${$?"":"is-disabled"}"
      ${$?"":"disabled"}
      title="Combo finisher"
      onclick="${$?"useComboFinish()":"void(0)"}"
    >
      <i class="bi bi-lightning-fill"></i>
      <span>${$?$.label:"Combo"}</span>
    </button>
  `;Xl(e);const W=Jl(e,u),V=`
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
        <span class="stance-label">${f.label}</span>
        <button class="stance-nav" onclick="cycleStance(1)">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      <div class="combo-control-meter">
        <div class="combo-meter combo-inner-meter">
          <div class="combo-meter-bar">
            <div class="combo-meter-bar-fill" style="width: ${B}%"></div>
          </div>
          <div class="combo-meter-meta">
            <span>Combo ${E}/${T}</span>
            <span class="combo-meter-ready">
              ${$?`${$.label} ready`:"fill meter"}
            </span>
          </div>
        </div>
      </div>
      <div class="action-grid">
        ${R}
        ${F}
        ${L}
      </div>
      <div class="weapon-chip-row">
        ${g}
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
          ${I}
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
            <div class="status-chips">${W||'<span class="muted">No debuffs</span>'}</div>
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
  `}function Xl(e){const t=[],n=ze(e.playerStance).label;return t.push(`<span class="buff-chip buff">Stance: ${n}</span>`),e.playerBracing&&t.push('<span class="buff-chip buff">Bracing</span>'),e.playerStatus.shieldBoost>0&&t.push(`<span class="buff-chip buff">Shield +${e.playerStatus.shieldBoost} (${e.playerStatus.shieldTurns}t)</span>`),e.playerStatus.maneuverBonus>0&&t.push(`<span class="buff-chip buff">Evasion +${e.playerStatus.maneuverBonus} (${e.playerStatus.maneuverTurns}t)</span>`),e.canEscape||t.push('<span class="buff-chip debuff">Escape blocked</span>'),t.join("")}function Jl(e,t){const n=[];return e.enemyStatus.weaponJammedTurns>0&&n.push(`<span class="buff-chip debuff">Weapons jammed (${e.enemyStatus.weaponJammedTurns}t)</span>`),t?.shields<=0&&n.push('<span class="buff-chip debuff">Shields down</span>'),t?.statusEffects.length&&t.statusEffects.forEach(a=>{n.push(`<span class="buff-chip debuff">${a.type} (${a.duration}t)</span>`)}),n.push(`<span class="buff-chip muted-chip">${e.encounter.enemies.length} adversaries remain</span>`),n.join("")}function Ze(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}window.buyShipAction=e=>{Al(e)};window.buyComponentAction=e=>{ts(e)};window.buyWeaponAction=e=>{ps(e)};function Kl(){if(!ut(l.location.systemId,"shipyard"))return`
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
    `;const e=Dl(),t=Qi(),n=ds(),a=At().map(u=>te(u)?.name).filter(Boolean),i=e.length===0?'<p class="muted">No ships are currently for sale.</p>':`
        <div class="card-list">
          ${e.map(u=>`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${$t("ship",u.id)}
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
      `,s=t.length===0?'<p class="muted">No components in stock.</p>':`
        <div class="card-list">
          ${t.map(u=>{const p=[];if(typeof u.value=="number"&&u.effectType&&p.push(`+${u.value} ${u.effectType}`),u.effects)for(const[h,y]of Object.entries(u.effects)){if(typeof y!="number")continue;const g=Math.round((y-1)*100);switch(h){case"miningYield":p.push(`Mining yield ${g>=0?"+":""}${g}%`);break;case"miningSpeed":p.push(`Mining duration ${g>=0?"+":""}${g}%`);break;case"rareFindChance":p.push(`Rare finds ${g>=0?"+":""}${g}%`);break;case"miningPayoutMultiplier":p.push(`Mining payout ${g>=0?"+":""}${g}%`);break;case"sellBonus":p.push(`Sell bonus ${g>=0?"+":""}${g}%`);break;case"incomeMultiplier":p.push(`Income ${g>=0?"+":""}${g}%`);break;default:p.push(`${h} ${g>=0?"+":""}${g}%`)}}const m=p.length?p.join(" | "):"Utility module";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${$t("module",u.id)}
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
          ${n.map(u=>{const p=Ft(u),m=p.tagNotes.length?`Traits: ${p.tagNotes.join(", ")}`:"";return`
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${$t("weapon",u.id)}
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
  `}const zn=[{a:"#5df4f0",b:"#2cb1ff",c:"#0b1f3f"},{a:"#ffd166",b:"#ff8f66",c:"#3b1f0a"},{a:"#c792ea",b:"#7b5ce6",c:"#25143f"},{a:"#8ef29d",b:"#4fd570",c:"#12361a"},{a:"#f58fb6",b:"#ff6f91",c:"#351021"},{a:"#9ce2ff",b:"#60b7ff",c:"#0e2033"},{a:"#f5a7ff",b:"#c76bff",c:"#2a0c46"}],qn=[[{x:5,y:0,c:"b"},{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:3,y:4,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:7,y:4,c:"c"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"b"},{x:5,y:7,c:"c"}],[{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:3,y:1,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"a"},{x:6,y:1,c:"a"},{x:7,y:1,c:"b"},{x:2,y:2,c:"c"},{x:3,y:2,c:"a"},{x:4,y:2,c:"a"},{x:5,y:2,c:"b"},{x:6,y:2,c:"a"},{x:7,y:2,c:"a"},{x:8,y:2,c:"c"},{x:3,y:3,c:"b"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:4,y:6,c:"c"},{x:5,y:6,c:"c"}],[{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:6,y:1,c:"a"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"b"},{x:6,y:4,c:"a"},{x:4,y:5,c:"b"},{x:5,y:5,c:"a"},{x:6,y:5,c:"b"},{x:5,y:6,c:"c"}]],Gn=[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:2,y:5,c:"b"},{x:3,y:5,c:"c"},{x:4,y:5,c:"a"},{x:5,y:5,c:"a"},{x:6,y:5,c:"c"},{x:7,y:5,c:"b"},{x:3,y:6,c:"b"},{x:4,y:6,c:"b"},{x:5,y:6,c:"b"},{x:6,y:6,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"c"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"c"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"b"},{x:5,y:5,c:"b"},{x:6,y:5,c:"b"}]],Un=[[{x:4,y:2,c:"b"},{x:5,y:2,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"a"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"a"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"c"},{x:5,y:5,c:"c"},{x:6,y:5,c:"b"}],[{x:4,y:1,c:"b"},{x:5,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"c"},{x:5,y:4,c:"c"},{x:6,y:4,c:"b"}]];function Ae(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function Zl(e){const t=Ae(e)%zn.length;return zn[t]}function un(e){let t=Ae(e);return()=>(t=(t^3735928559)+(t<<4)+(t>>7),t|=0,(t>>>0)/4294967295)}function wt(e,t=12){const n=Math.min(...e.map(m=>m.x)),a=Math.max(...e.map(m=>m.x)),i=Math.min(...e.map(m=>m.y)),s=Math.max(...e.map(m=>m.y)),o=a-n+1,d=s-i+1,u=Math.floor((t-o)/2)-n,p=Math.floor((t-d)/2)-i;return e.map(m=>({...m,x:m.x+u,y:m.y+p}))}function $t(e,t){const n=Zl(`${e}-${t}`),a=qn[Ae(t)%qn.length],i=Gn[Ae(t+"-mod")%Gn.length],s=Un[Ae(t+"-wpn")%Un.length],d=wt(e==="ship"?Ql(a,t):e==="module"?ed(i,t):td(s,t)).map(u=>`<rect x="${u.x}" y="${u.y}" width="1" height="1" fill="${n[u.c]}" />`).join("");return`
    <svg class="pixel-icon pixel-icon-${e}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${n.c}" opacity="0.35" />
      ${d}
    </svg>
  `}function Ql(e,t){const n=un(t),a=[...e],i=Math.min(...e.map(p=>p.y)),s=Math.max(...e.map(p=>p.y)),o=e.filter(p=>p.y===i),d=e.filter(p=>p.y===s);o.slice(0,2).forEach(p=>{a.push({x:p.x,y:p.y-1,c:"a"})}),d.forEach(p=>{n()>.5&&a.push({x:p.x,y:p.y+1,c:n()>.5?"a":"b"})});const u=n()>.5?-1:1;return a.push({x:d[0]?.x+u,y:s-1,c:"b"}),a.push({x:d[d.length-1]?.x-u,y:s-1,c:"b"}),a}function ed(e,t){const n=un(t+"-decor"),a=[...e],i=Math.min(...e.map(u=>u.x)),s=Math.max(...e.map(u=>u.x)),o=Math.min(...e.map(u=>u.y)),d=Math.max(...e.map(u=>u.y));return a.push({x:i-1,y:Math.round((o+d)/2),c:"b"}),a.push({x:s+1,y:Math.round((o+d)/2),c:"b"}),n()>.3&&a.push({x:i,y:o-1,c:"a"}),n()>.6&&a.push({x:s,y:o-1,c:"c"}),n()>.4&&a.push({x:i,y:d+1,c:"a"}),a}function td(e,t){const n=un(t+"-weapon"),a=[...e],i=Math.max(...e.map(d=>d.y)),s=Math.min(...e.map(d=>d.x)),o=Math.max(...e.map(d=>d.x));return a.push({x:s,y:i+1,c:n()>.5?"a":"b"}),a.push({x:o,y:i+1,c:n()>.5?"a":"c"}),n()>.4&&a.push({x:s+1,y:i-2,c:"c"}),a.push({x:o+1,y:i-1,c:"b"}),a}const nd={incomeMultiplier:e=>J(e,"income"),eventRewardMultiplier:e=>J(e,"event rewards"),hpBonus:e=>J(e,"hull"),cargoBonus:e=>id(e,"cargo capacity"),sellBonus:e=>J(e,"sell price"),buyBonus:e=>J(e,"buy price"),marketTax:e=>J(e,"market tax"),miningYield:e=>J(e,"mining yield"),rareFindChance:e=>J(e,"rare find chance"),miningSpeed:e=>J(e,"mining duration"),dodgeBonus:e=>Qe(e,"dodge chance"),critBonus:e=>Qe(e,"crit chance"),damageTakenMultiplier:e=>J(e,"damage taken"),fleeBonus:e=>Qe(e,"flee chance"),pirateDetectionMultiplier:e=>J(e,"pirate detection"),scanDetectionMultiplier:e=>J(e,"scan detection"),illegalTolerance:e=>J(e,"illegal tolerance"),fuelCostMultiplier:e=>J(e,"fuel cost"),hazardDetectionBonus:e=>Qe(e,"hazard detection"),anomalyChance:e=>J(e,"anomaly chance"),shieldRegenBonus:e=>J(e,"shield regen")};function ad(e){const t=e.passive?.effects;return t?Object.entries(t).map(([n,a])=>nd[n]?.(a)??null).filter(n=>!!n):[]}function J(e,t){if(!Number.isFinite(e))return null;const n=Math.round((e-1)*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function Qe(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e*100);return n===0?null:`${n>0?"+":""}${n}% ${t}`}function id(e,t){if(!Number.isFinite(e))return null;const n=Math.round(e);return n===0?null:`${n>0?"+":""}${n} ${t}`}function sd(e,t){return`
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
  `}window.chooseStarter=e=>{Pl(e),Lt(),_.go("main")};function od(){const e=Bl(),t={maxHull:Math.max(...e.map(a=>a.hull),100),maxShields:Math.max(...e.map(a=>a.shields),100),maxFuel:Math.max(...e.map(a=>a.fuel),100),maxCargo:Math.max(...e.map(a=>a.cargo),50)};return e.length===0?`
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
            ${e.map(a=>{const i=ad(a),s=a.passive?.name?`
        <div class="passive-summary">
          <p class="muted">Passive: ${a.passive.name}</p>
          ${i.length?`<div class="passive-summary__list">${i.map(o=>`<span>${o}</span>`).join("")}</div>`:""}
        </div>
      `:"";return`
      <button class="panel-card starter-card btn-starter" type="button" onclick="chooseStarter('${a.id}')">
        <div class="starter-card-head starter-card-head--split">
          <div class="starter-head__ship starter-head__ship--stacked">
            ${ud(a.id,a.roleHint??a.name)}
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
          ${sd(a,t)}
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
`}const Wn=[{a:"#00f0ff",b:"#0084d6",c:"#031624"},{a:"#ffd166",b:"#ff8f49",c:"#2c1d0a"},{a:"#bde0fe",b:"#6fb5ff",c:"#0b1a32"},{a:"#ff8ce5",b:"#b14dff",c:"#2d0a46"}],Vn={fighter:[[{x:4,y:1,c:"b"},{x:5,y:1,c:"a"},{x:6,y:1,c:"b"},{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"a"},{x:7,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"a"},{x:6,y:3,c:"b"},{x:7,y:3,c:"a"},{x:8,y:3,c:"c"},{x:4,y:4,c:"b"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"a"}],[{x:3,y:0,c:"a"},{x:4,y:0,c:"b"},{x:5,y:0,c:"a"},{x:6,y:0,c:"b"},{x:4,y:1,c:"a"},{x:5,y:1,c:"b"},{x:5,y:2,c:"a"},{x:4,y:2,c:"a"},{x:6,y:2,c:"a"},{x:5,y:3,c:"c"}]],mining:[[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"c"},{x:3,y:3,c:"a"},{x:4,y:3,c:"b"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"a"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"},{x:5,y:5,c:"c"}],[{x:2,y:3,c:"b"},{x:3,y:3,c:"b"},{x:4,y:3,c:"a"},{x:5,y:3,c:"b"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:5,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:5,c:"a"},{x:6,y:4,c:"a"}]],cargo:[[{x:2,y:3,c:"b"},{x:3,y:3,c:"a"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"a"},{x:7,y:3,c:"b"},{x:2,y:4,c:"b"},{x:3,y:4,c:"c"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"c"},{x:7,y:4,c:"b"},{x:3,y:5,c:"b"},{x:4,y:5,c:"a"},{x:5,y:5,c:"b"}],[{x:3,y:2,c:"b"},{x:4,y:2,c:"a"},{x:5,y:2,c:"a"},{x:6,y:2,c:"b"},{x:2,y:3,c:"b"},{x:3,y:3,c:"c"},{x:4,y:3,c:"a"},{x:5,y:3,c:"a"},{x:6,y:3,c:"c"},{x:7,y:3,c:"b"},{x:3,y:4,c:"b"},{x:4,y:4,c:"a"},{x:5,y:4,c:"a"},{x:6,y:4,c:"b"}]]};function pn(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function rd(e){return Wn[pn(e)%Wn.length]}function cd(e,t){const n=(()=>{let o=pn(t);return()=>(o=o*1664525+1013904223|0,(o>>>0)/4294967295)})(),a=[...e],i=Math.max(...e.map(o=>o.y)),s=Math.min(...e.map(o=>o.y));return n()>.5&&a.push({x:e[0]?.x??4,y:s-1,c:"a"}),a.push({x:e[e.length-1]?.x??5,y:i+1,c:n()>.5?"b":"c"}),a}function ld(e,t=12){const n=Math.min(...e.map(m=>m.x)),a=Math.max(...e.map(m=>m.x)),i=Math.min(...e.map(m=>m.y)),s=Math.max(...e.map(m=>m.y)),o=a-n+1,d=s-i+1,u=Math.floor((t-o)/2)-n,p=Math.floor((t-d)/2)-i;return e.map(m=>({...m,x:m.x+u,y:m.y+p}))}function dd(e,t){const n=t?.toLowerCase()??"fighter",a=Object.keys(Vn).find(o=>n.includes(o))??"fighter",i=Vn[a],s=pn(`${e}-${t}`)%i.length;return i[s]}function ud(e,t){const n=rd(`${e}-${t}`),a=dd(e,t),i=cd(a,e+t);return`
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${ld(i).map(d=>`<rect x="${d.x}" y="${d.y}" width="1" height="1" fill="${n[d.c]}" opacity="1" />`).join("")}
    </svg>
  `}function pd(){const e=l.ship;if(!e.hardpoints.length)return`
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
    `;const t=e.hardpoints.map((n,a)=>{const s=te(e.weapons[a])?.name||"Empty";return`
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
          <span>Turn ${Ve(l.time.turn)}</span>
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
  `}window.equipWeaponAction=(e,t)=>{us(e,t)&&nav("weapon_slots")};function md(e={}){const t=typeof e.slotIndex=="number"&&e.slotIndex>=0?e.slotIndex:0,n=l.ship.hardpoints[t];if(!n)return`
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
    `;const o=At().map(d=>te(d)).filter(d=>!!d).map(d=>{const u=Nt(t,d.id),m=te(l.ship.weapons[t])?.id===d.id?"Equipped":"Equip",h=Ft(d),y=h.tagNotes.length?`<br/>Traits: ${h.tagNotes.join(", ")}`:"";return`
        <div class="panel-card ${u?"":"muted"}">
          <p class="label">${d.size} / ${d.type}</p>
          <p class="value-inline"><strong>${d.name}</strong></p>
          <p class="muted">Damage ${d.damage} (${d.damageType}) · Acc ${Math.round(d.accuracy*100)}% · Crit ${Math.round(d.critChance*100)}% (×${d.critMultiplier}) · CD ${d.cooldown}</p>
          <p class="muted">Role: ${h.role} (${h.typeLabel}) · Vs Shields: ${h.vsShields} · Vs Hull: ${h.vsHull}${y}</p>
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
          <span>Turn ${Ve(l.time.turn)}</span>
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
  `}const Yn=Math.max(1,Wa.combo.threshold);function hd(e){return e>=10?"#ff5c7a":e>=6?"#fb923c":e>=3?"#facc15":"#34d399"}window.leaveMining=()=>{l.miningSession=null,_.go("main")};window.drillCell=(e,t)=>{Er(l,e,t)?.fightTriggered||_.go("mining")};window.setMiningDepth=e=>{Cr(l,e),_.go("mining")};window.finalizeDrill=()=>{if(Rr(l)?.fightTriggered)return;const t=l.miningSession?.lastMessage||"Extraction complete.";_.go("main",{message:t})};window.cashOutMining=()=>{const e=Dr(l);_.go("main",{message:e??"Risk Chain cash out requires level 3+."})};window.newSurvey=()=>{Te(l,l.location.systemId,l.miningSession?.beltId,l.miningSession?.resourceId,{force:!0}),_.go("mining")};function fd(e){return e==null?"":e>=8?"signal-strong":e>=4?"signal-medium":e>0?"signal-weak":"signal-zero"}function gd(e){if(!e||!e.length)return"";const t=[];for(let n=0;n<e.length;n++)for(let a=0;a<e[n].length;a++){const i=e[n][a],s=["mine-cell"];i.drilled&&s.push("drilled"),i.selected&&s.push("selected"),i.clusterHint&&s.push("cluster-hint");const o=["mine-cell-inner"];i.directionClass&&o.push(i.directionClass),i.depthClass&&o.push(i.depthClass),i.hintSignal!=null&&!i.drilled&&o.push("hinted"),i.signal!=null&&o.push(fd(i.signal));const d=i.signal!=null?i.signal:i.hintSignal!=null?i.hintSignal:"A",p=`<span class="${i.signal!=null?"cell-signal":i.hintSignal!=null?"cell-signal hint":"cell-signal muted"}">${d}</span>`;t.push(`
        <div class="${s.join(" ")}" onclick="drillCell(${n}, ${a})">
          <div class="${o.join(" ")}">
            <div class="cell-center">
              ${p}
            </div>
          </div>
        </div>
      `)}return`<div class="mining-grid">${t.join("")}</div>`}function yd(){const e=l.miningSession;if(!e)return`
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
    `;const t=Math.min(Yn,e.comboGauge??0),n=Math.min(100,Math.round(t/Yn*100)),i=(e.comboBonusTurns??0)>0?`Combo bonus active (${e.comboBonusTurns} turns)`:`Combo ${n}% toward bonus`,s=e.comboThreatReduction??0,o=Math.max(0,l.player.xp??0),d=e.riskChainLevel??0,u=tn(d),p=Math.round(ni(d,o)*100),m=Math.min(100,Math.round(d/12*100)),h=`Risk Chain: ${d}`,y=`Reward x${u.toFixed(2)} • Hazard ${p}%`,g=hd(d),f=d>=3&&e.active,b=e.xpEarned??0,v=Math.round(e.threat??0),E=ja(l,e.systemId),T=Array.from({length:5},(A,I)=>{const x=I+1;return`<button class="chip-btn ${x===e.depth?"active":""}" onclick="setMiningDepth(${x})">Z${x}</button>`}).join(""),B=gd(e.grid),$=e.lastYield?`${e.lastYield.amount} ${e.lastYield.commodityId} (~${e.lastYield.approxValue} cr)`:"No ore extracted yet.";return e.runComplete?`
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
            <p>Haul: ${$}</p>
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
          <span>Turn ${Ve(l.time.turn)}</span>
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
          <span class="stat-value stat-risk">${v}%</span>
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
          <span class="stat-value">${Math.round(E)} cr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Mining XP</span>
          <span class="stat-value">${b}</span>
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
            <div class="chip">Threat ${v}%</div>
          </div>
          ${B}
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
          <p class="muted">${i}</p>
          ${s>0?`<p class="muted">Threat -${Math.round(s*100)}% while combo is active.</p>`:""}
        </div>

          <div class="panel-card">
            <p class="label">Threat</p>
            <div class="bar-group">
              <div class="bar-row">
                <span>Pirate Threat</span>
                <span>${v}%</span>
              </div>
              <div class="bar-bg">
                <div class="bar-fill" style="width:${v}%;"></div>
              </div>
            </div>
            <p class="muted">If the roll succeeds, a real pirate combat is started and threat resets to 0%.</p>
          </div>

          <div class="panel-card">
            <p class="label">Risk Chain</p>
            <div class="bar-bg">
              <div class="bar-fill" style="width:${m}%;background:${g};"></div>
            </div>
            <p class="muted">${y}</p>
            ${f?'<button class="chip-btn" onclick="cashOutMining()">Cash Out</button>':'<span class="muted">Reach level 3 to cash out.</span>'}
          </div>

          <div class="panel-card">
            <p class="label">Last haul</p>
            <p class="value-emphasis">${$}</p>
          </div>
        </aside>
      </div>

      <footer class="app-footer"></footer>
    </div>
  `}window.startNewRun=()=>Oa(!1);window.returnToMainMenu=()=>Oa(!0);function vd(){const e=l.gameOver?.summary,t=Oi(),n=e?.message||"Your run has ended.",a=e?.score??0,i=[["Days survived",e?.stats.daysSurvived??0],["Systems visited",e?.stats.systemsVisited??0],["Jumps completed",e?.stats.jumpsMade??0]],s=[["Credits earned",e?.stats.creditsEarnedTotal??0],["Highest net worth",e?.stats.highestNetWorth??0],["Trade profit",e?.stats.tradeProfitTotal??0],["Most traded",e?.stats.mostTradedCommodityId&&e.stats.mostTradedCommodityId.replace(/_/g," ")||"None"]],o=[["Contracts completed",e?.stats.contractsCompleted??0],["Contract payouts",e?.stats.contractPayoutTotal??0]],d=[["Fights survived",e?.stats.fightsSurvived??0],["Ships destroyed",e?.stats.shipsDestroyed??0],["Damage dealt",e?.stats.damageDealtTotal??0],["Damage taken",e?.stats.damageTakenTotal??0]],u=[["Mining runs",e?.stats.miningRuns??0],["Ore mined",e?.stats.oreMinedTotal??0],["Rare finds",e?.stats.rareFinds??0]],p=h=>h.map(([y,g])=>`
      <tr>
        <td>${y}</td>
        <td>${g}</td>
      </tr>
    `).join(""),m=t.length===0?'<p class="muted">No high scores yet.</p>':`<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${t.map((h,y)=>`
                  <tr>
                    <td>${y+1}</td>
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
  `}const j=320,N=180;let Le=null,Ne="space",Oe=null,he=1;const bd=450,mn=[{count:70,speed:.05,color:"#556",stars:[]},{count:50,speed:.12,color:"#889",stars:[]},{count:35,speed:.25,color:"#ccd",stars:[]}],rt=[];function Md(){for(const e of mn){e.stars=[];for(let t=0;t<e.count;t++)e.stars.push({x:Math.random()*j,y:Math.random()*N,size:Math.random()<.6?1:2})}}function xd(){rt.length=0;for(let e=0;e<4;e++)rt.push({x:Math.random()*j,y:N/4+e*20+(Math.random()*10-5),width:140+Math.random()*80,height:32+Math.random()*16,speed:.02+Math.random()*.03,alpha:.12+Math.random()*.12})}function wd(e){Le=e.getContext("2d"),Le&&(e.width=j,e.height=N,Le.imageSmoothingEnabled=!1,Md(),xd())}function $d(e){e===Ne&&(!Oe||he<1)||(Oe=Ne,Ne=e,he=0)}function kd(e){if(!Le)return;const t=e/16.6667;he<1&&(he=Math.min(1,he+e/bd),he>=1&&(Oe=null));for(const n of rt)n.x-=n.speed*t,n.x+n.width<-20&&(n.x=j+20,n.y=N/4+Math.random()*(N/2));for(const n of mn)for(const a of n.stars)a.x-=n.speed*t,a.x<0&&(a.x=j,a.y=Math.random()*N)}function $i(e=Le,t=performance.now()){if(!e)return;e.save(),e.imageSmoothingEnabled=!1;const n=Oe!==null&&he<1,a=Bd(he);n?(kt(e,Oe,t,{alpha:1-a,scale:1+.05*a}),kt(e,Ne,t,{alpha:a,scale:1.04-.04*a})):kt(e,Ne,t),e.restore()}function kt(e,t,n,a={}){const i=a.alpha??1,s=a.scale??1;switch(e.save(),e.globalAlpha=i,s!==1&&(e.translate(j/2,N/2),e.scale(s,s),e.translate(-j/2,-N/2)),t){case"mining":Td(e);break;case"hangar":Rd(e,n);break;case"ops":Id(e,n);break;default:Sd(e,n);break}Cd(e,t),t==="combat"&&Ed(e),e.restore()}function Sd(e,t){e.fillStyle="#02030b",e.fillRect(0,0,j,N),_d(e,t)}function _d(e,t){for(const n of rt){const a=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height),i=n.alpha*(.8+.2*Math.sin(t*2e-4));a.addColorStop(0,`rgba(40, 80, 140, ${i})`),a.addColorStop(.5,`rgba(60, 130, 200, ${i*1.4})`),a.addColorStop(1,`rgba(10, 40, 90, ${i})`),e.fillStyle=a,e.fillRect(Math.floor(n.x),Math.floor(n.y),Math.floor(n.width),Math.floor(n.height))}for(const n of mn){e.fillStyle=n.color;for(const a of n.stars)e.fillRect(Math.round(a.x),Math.round(a.y),a.size,a.size)}}function Cd(e,t){const n=t==="mining"?40:t==="hangar"||t==="ops"?12:25,a=t==="mining"?"rgba(200,180,150,0.2)":t==="hangar"?"rgba(120,180,220,0.12)":t==="ops"?"rgba(80,200,200,0.12)":"rgba(255,255,255,0.1)";e.fillStyle=a;for(let i=0;i<n;i++){const s=Math.random()*j,o=Math.random()*N;e.fillRect(Math.round(s),Math.round(o),1,1)}}function Td(e){e.fillStyle="#0a0604",e.fillRect(0,0,j,N);const t=["#1a100b","#120c08","#22130c","#181008"];for(let a=0;a<6;a++){const i=a*(N/6);e.fillStyle=t[a%t.length],e.fillRect(0,Math.floor(i),j,Math.ceil(N/6))}e.fillStyle="#0f0b09",e.fillRect(40,20,j-80,N-40);const n=e.createLinearGradient(0,N/2,j,N/2);n.addColorStop(0,"rgba(90, 70, 40, 0.1)"),n.addColorStop(.5,"rgba(200, 160, 90, 0.12)"),n.addColorStop(1,"rgba(90, 70, 40, 0.1)"),e.fillStyle=n,e.fillRect(0,0,j,N)}function Ed(e){const t=e.createLinearGradient(0,0,j,N);t.addColorStop(0,"rgba(60, 0, 0, 0.15)"),t.addColorStop(1,"rgba(120, 0, 0, 0.25)"),e.fillStyle=t,e.fillRect(0,0,j,N)}function Rd(e,t){e.fillStyle="#04060a",e.fillRect(0,0,j,N);const n=e.createLinearGradient(0,0,0,N);n.addColorStop(0,"rgba(40, 80, 130, 0.3)"),n.addColorStop(.35,"rgba(30, 60, 100, 0.35)"),n.addColorStop(1,"rgba(10, 20, 40, 0.45)"),e.fillStyle=n,e.fillRect(0,0,j,N);const a=.4+.2*Math.sin(t*.002);e.fillStyle=`rgba(120, 200, 255, ${a})`,e.fillRect(j/2-60,12,120,6),e.fillStyle="#0c1420",e.fillRect(0,N-46,j,18),e.fillStyle="#0f1a28";for(let i=0;i<7;i++){const s=N-26+i*3;e.fillRect(0,s,j,1)}e.fillStyle="#1a2838";for(let i=0;i<j;i+=22)e.fillRect(i,N-44,10,44);e.fillStyle="rgba(70, 140, 190, 0.3)",e.fillRect(40,46,j-80,10),e.fillRect(40,70,j-80,6)}function Id(e,t){e.fillStyle="#021014",e.fillRect(0,0,j,N);const n=e.createRadialGradient(j/2,N*.45,10,j/2,N/2,N);n.addColorStop(0,"rgba(20, 160, 160, 0.4)"),n.addColorStop(.6,"rgba(10, 80, 90, 0.25)"),n.addColorStop(1,"rgba(0, 20, 30, 0.5)"),e.fillStyle=n,e.fillRect(0,0,j,N),e.strokeStyle="rgba(60, 200, 200, 0.2)",e.lineWidth=1;for(let p=20;p<j;p+=20)e.beginPath(),e.moveTo(p,0),e.lineTo(p,N),e.stroke();for(let p=20;p<N;p+=20)e.beginPath(),e.moveTo(0,p),e.lineTo(j,p),e.stroke();const a=t*.002%(Math.PI*2),i=j/2,s=N/2,o=80,d=e.createRadialGradient(i,s,0,i,s,o);d.addColorStop(0,"rgba(80, 220, 200, 0.18)"),d.addColorStop(1,"rgba(10, 40, 40, 0)"),e.fillStyle=d,e.beginPath(),e.moveTo(i,s),e.arc(i,s,o,a,a+Math.PI/4),e.closePath(),e.fill(),e.strokeStyle="rgba(100, 240, 220, 0.35)",e.beginPath(),e.arc(i,s,o,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(120, 250, 230, 0.8)";const u=[{x:i+26,y:s-18},{x:i-30,y:s+14},{x:i+6,y:s+32}];for(const p of u)e.fillRect(Math.round(p.x),Math.round(p.y),2,2)}function Bd(e){return e*e*(3-2*e)}const ki=[{title:"Global",controls:[{path:"combat.globalIncomeMultiplier",label:"Global Income Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.globalDangerMultiplier",label:"Global Danger Multiplier",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Travel & Encounters",controls:[{path:"combat.encounterChancePerJump",label:"Encounter Chance / Jump",min:0,max:200,step:5,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.pirateEncounterRateBase",label:"Pirate Encounter Weight",min:0,max:100,step:1,formatter:e=>`${e.toFixed(0)}%`},{path:"combat.nonPirateEventWeight",label:"Non-Pirate Event Weight",min:0,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Combat",controls:[{path:"combat.enemyHpMultiplier",label:"Enemy HP Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyDamageMultiplier",label:"Enemy Damage Multiplier",min:.25,max:5,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyAccuracyMultiplier",label:"Enemy Accuracy Multiplier",min:.1,max:2,step:.05,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.creditsRewardMultiplier",label:"Combat Credits Reward",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"combat.enemyCountMin",label:"Min Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`},{path:"combat.enemyCountMax",label:"Max Enemy Count",min:1,max:10,step:1,formatter:e=>`${e.toFixed(0)}`}]},{title:"Economy",controls:[{path:"miningYieldMultiplier",label:"Mining Yield Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"tradeProfitMultiplier",label:"Trade Profit Multiplier",min:.1,max:3,step:.1,formatter:e=>`${e.toFixed(2)}x`},{path:"contractPayoutMultiplier",label:"Contract Payout Multiplier",min:.1,max:5,step:.1,formatter:e=>`${e.toFixed(2)}x`}]},{title:"Mining",controls:[{path:"miningEfficiency",label:"Mining Efficiency",min:.1,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningPayoutMultiplier",label:"Mining Payout Mult",min:.05,max:1,step:.1,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"miningThreatMultiplier",label:"Mining Threat Mult",min:.4,max:1,step:.05,formatter:e=>`${(e*100).toFixed(0)}%`},{path:"drillDamageMultiplier",label:"Drill Damage Mult",min:.5,max:2,step:.1,formatter:e=>`${e.toFixed(1)}x`}]},{title:"Debug",controls:[{path:"combat.showEncounterDebug",label:"Show Encounter Debug",min:0,max:1,step:1,formatter:e=>e?"On":"Off"}]}],Dd=ki.flatMap(e=>e.controls).reduce((e,t)=>(e[t.path]=t,e),{}),Pd={main:"space",travel:"space",market:"hangar",contracts:"ops",ship:"space",weapon_slots:"space",weapon_select:"space",event:"space",combat:"combat",shipyard:"hangar",ship_select:"space",mining:"mining",gameover:"space"};function Dt(e){const t=e.split(".");let n=O;for(const a of t){if(n==null)return 0;n=n[a]}return typeof n=="number"?n:0}function Ad(e,t){const n=e.split(".");let a=O;for(let i=0;i<n.length-1;i++){const s=n[i];a[s]=a[s]??{},a=a[s]}a[n[n.length-1]]=t}window.devCombat=(e="pirate_cutter")=>{ge(e)};window.devMining=()=>{Te(l,l.location.systemId)?_.go("mining"):_.go("main",{message:"Travel to a new system before mining again."})};function Ld(){return ki.map(e=>{const t=e.controls.map(n=>`
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${n.label}</span>
            <span class="dev-control__value" id="devValue-${n.path.replace(/\./g,"__")}">
              ${n.formatter(Dt(n.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${n.path}"
            min="${n.min}"
            max="${n.max}"
            step="${n.step}"
            value="${Dt(n.path)}"
          />
        </div>
      `).join("");return`
      <section class="dev-section">
        <h3>${e.title}</h3>
        ${t}
      </section>
    `}).join("")}function Nd(e){const t=()=>{window.prompt("Dev settings snapshot (copy manually):",e)};navigator.clipboard?.writeText?navigator.clipboard.writeText(e).then(()=>{alert("Dev settings copied to clipboard.")}).catch(()=>{t()}):t(),console.log("Dev settings report:",e)}function ve(){const e=document.getElementById("app");if(!e)return;const t=Pd[_.current]??"space";$d(t);let n="";if($i(null,performance.now()),_.current==="mining"&&!l.miningSession&&l.location?.systemId){const i=gt(),s=new Set(i?.tags??[]);(s.has("mining_belt")||s.has("mining"))&&l.lastMiningSystemId!==l.location.systemId&&Te(l,l.location.systemId)}switch(_.current){case"main":n=tl();break;case"travel":n=ol();break;case"market":n=hl(_.params);break;case"contracts":n=_l();break;case"ship":n=Fl();break;case"event":n=jl(_.params);break;case"combat":n=Yl(_.params);break;case"weapon_slots":n=pd();break;case"weapon_select":n=md(_.params);break;case"shipyard":n=Kl();break;case"ship_select":n=od();break;case"mining":n=yd();break;case"gameover":n=vd();break}const a=`
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${Ld()}
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
  `;e.innerHTML=`${n}${a}`,Fd()}let Be=!1,Xn=!1;function Fd(){const e=document.getElementById("navDev"),t=document.getElementById("devPanel"),n=document.getElementById("devClose"),a=document.getElementById("devSpawnPirates"),i=document.getElementById("devTriggerMining"),s=document.getElementById("devAddCredits"),o=document.getElementById("devFillCargo"),d=document.getElementById("devGodMode"),u=document.getElementById("devReportSettings"),p=document.getElementById("devResetMiningSession"),m=document.getElementById("devSpikeThreat"),h=document.getElementById("devLogMiningGrid"),y=document.getElementById("navTravel"),g=document.getElementById("navMarket"),f=document.getElementById("navShip"),b=document.getElementById("devPersistEvents"),v=document.getElementById("devClearEvents"),E=document.getElementById("devHardReset"),T=t?.querySelectorAll("input[data-dev-path]"),B=document.getElementById("devMiningStatus"),$=()=>{t&&t.classList.toggle("hidden")},A=x=>{const w=Dd[x],S=document.getElementById(`devValue-${x.replace(/\./g,"__")}`);w&&S&&(S.textContent=w.formatter(Dt(x)))};T?.forEach(x=>{const w=()=>{const S=x.dataset.devPath;if(!S)return;const L=Number(x.value);Ad(S,L),et(),A(S)};x.addEventListener("input",w)});const I=()=>{if(!B)return;const x=l.miningSession;if(!x){B.textContent="No active mining session.";return}const w=(x.threat??0).toFixed(1),S=x.depth??0;B.innerHTML=`
      <div>System: ${x.systemId}</div>
      <div>Belt: ${x.beltName??x.beltId??"—"}</div>
      <div>Depth: Z${S}</div>
      <div>Threat: ${w}%</div>
      <div>Exploration: ${(x.explorationScore??0).toFixed(2)}</div>
      <div>Drills: ${x.drillsUsed??0}</div>
      <div>Selected: ${x.selectedRow!=null?`X${x.selectedCol+1} Y${x.selectedRow+1}`:"none"}</div>
    `};I(),e?.addEventListener("click",$),n?.addEventListener("click",()=>t?.classList.add("hidden")),y?.addEventListener("click",()=>window.nav?.("travel")),g?.addEventListener("click",()=>window.nav?.("market")),f?.addEventListener("click",()=>window.nav?.("ship")),a?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devCombat?.("pirate_cutter")}),i?.addEventListener("click",()=>{t?.classList.add("hidden"),window.devMining?.()}),s?.addEventListener("click",()=>{l.player.credits+=1e3,t?.classList.add("hidden"),ve()}),o?.addEventListener("click",()=>{const x=l.ship.cargo||{};x.aurite_ore=(x.aurite_ore||0)+20,l.ship.cargo=x,t?.classList.add("hidden"),ve()}),d?.addEventListener("click",()=>{Be=!Be,l.godMode=Be,Be&&(l.ship.hp=l.ship.maxHp,l.ship.shields=l.ship.maxShields),alert(`God Mode: ${Be?"On":"Off"}`)}),u?.addEventListener("click",()=>{const x=JSON.stringify({timestamp:new Date().toISOString(),devTune:O},null,2);Nd(x),t?.classList.add("hidden")}),p?.addEventListener("click",()=>{Te(l,l.location.systemId,l.miningSession?.beltId),t?.classList.add("hidden"),ve(),I()}),m?.addEventListener("click",()=>{const x=l.miningSession;x&&(x.threat=95,x.currentPirateChance=.95,t?.classList.add("hidden"),ve(),I())}),h?.addEventListener("click",()=>{console.group("Mining Debug"),console.log("Mining Session",l.miningSession),console.groupEnd()}),b?.addEventListener("click",()=>{Co(),alert("Events cached locally. Future loads will honor this list.")}),v?.addEventListener("click",()=>{To(),alert("Event cache cleared. Future loads use the bundled data.")}),E?.addEventListener("click",()=>{window.confirm("This will clear saved state (local+session storage) and reload the page. Continue?")&&(window.localStorage?.clear(),window.sessionStorage?.clear(),window.location.reload())}),Xn||(document.addEventListener("keydown",x=>{x.key==="`"&&$(),x.key==="Escape"&&_.current!=="main"&&_.current!=="event"&&window.nav?.("main")}),Xn=!0)}let C=null,X=null,Si=null,Jn=performance.now();async function jd(){const e="/space/".replace(/\/+$/,"/"),t=R=>`${e}content/${R}`,[n,a,i,s,o,d,u,p,m,h,y]=await Promise.all([fetch(t("systems.json")),fetch(t("ships.json")),fetch(t("components.json")),fetch(t("commodities.json")),fetch(t("weapons.json")),fetch(t("enemies.json")),fetch(t("events.json")),fetch(t("loot_tables.json")),fetch(t("missions.json")),fetch(t("encounters.json")),fetch(t("factions.json"))]);if(!n.ok)throw new Error(`Failed to load systems.json: ${n.status}`);if(!a.ok)throw new Error(`Failed to load ships.json: ${a.status}`);if(!i.ok)throw new Error(`Failed to load components.json: ${i.status}`);if(!o.ok)throw new Error(`Failed to load weapons.json: ${o.status}`);if(!s.ok)throw new Error(`Failed to load commodities.json: ${s.status}`);if(!d.ok)throw new Error(`Failed to load enemies.json: ${d.status}`);if(!u.ok)throw new Error(`Failed to load events.json: ${u.status}`);if(!p.ok)throw new Error(`Failed to load loot_tables.json: ${p.status}`);if(!m.ok)throw new Error(`Failed to load missions.json: ${m.status}`);if(!h.ok)throw new Error(`Failed to load encounters.json: ${h.status}`);if(!y.ok)throw new Error(`Failed to load factions.json: ${y.status}`);const g=await n.json();for(const R of g){const F=new Set(R.tags??[]);R.region&&F.add(R.region),R.security==="high"&&F.add("secure"),R.security==="low"&&F.add("lawless"),R.marketProfile?.blackMarket&&F.add("black_market");const W=R.economyTags??[];W.includes("mining")&&F.add("mining"),W.includes("salvage")&&F.add("salvage"),W.includes("checkpoint")&&F.add("checkpoint"),R.tags=Array.from(F)}const f=await a.json(),b=await i.json(),v=await s.json(),E=await o.json(),T=await d.json(),B=await fetch(t("bases.json"));if(!B.ok)throw new Error(`Failed to load bases.json: ${B.status}`);const $=await B.json(),A={};for(const R of g)A[R.id]=R;const I=await u.json();wo(I);const x=await p.json();Po(x);const w=await m.json(),S=await h.json(),L=await y.json();Ps(w);const G={};for(const R of $)G[R.id]=R;return{systems:g,systemsById:A,bases:$,basesById:G,ships:f,components:b,commodities:v,weapons:E,enemies:T,events:I,lootTables:x,missions:w,encounters:S,factions:L}}function Hd(){X||(X=document.createElement("canvas"),X.id="pixel-background",X.style.position="fixed",X.style.top="0",X.style.left="0",X.style.width="100vw",X.style.height="calc(100vw * 9 / 16)",X.style.maxHeight="100vh",X.style.maxWidth="calc(100vh * 16 / 9)",X.style.objectFit="contain",X.style.zIndex="0",X.style.pointerEvents="none",X.style.background="#02030b",X.style.imageRendering="pixelated",X.style.display="block",document.body.insertBefore(X,document.body.firstChild||null),Si=X.getContext("2d"),wd(X))}function Od(){const e=t=>{const n=t-Jn;Jn=t,kd(n),$i(Si,t),requestAnimationFrame(e)};requestAnimationFrame(e)}async function zd(){C=await jd(),Hd();const e=gs(C.systems),t=ea();t.map=e,ta(t),fa(e),aa();const n=Ai();n&&(l.player.xp=n.xp,l.player.xpTracks=n.xpTracks??{},l.player.perksUnlocked=n.perksUnlocked??[]);const a=Di();if(a){const o=l.ship.hardpoints.length,d=[];for(let u=0;u<o;u++)d.push(a.weapons[u]??null);l.ship.weapons=d,l.inventory.weapons=a.inventory}Lt();const i=_.go.bind(_);_.go=(o,d)=>{i(o,d),ve()};const s=_.setZoom.bind(_);_.setZoom=o=>{_.zoom!==o&&(s(o),ve())},window.nav=(o,d={})=>{_.go(o,d)},_.current=l.player.hasChosenStarter?"main":"ship_select",ve(),Od()}function Q(e){return C?C.systemsById[e]??null:null}function qd(e){return C?C.ships.find(t=>t.id===e)??null:null}document.addEventListener("DOMContentLoaded",()=>{zd()});
