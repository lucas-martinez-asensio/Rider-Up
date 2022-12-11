// switch fx

const mapCont = document.querySelector(".map-cont");
const calcCont = document.querySelector(".tip-calc");
const mapBtn = document.getElementById("map-btn");
const calcBtn = document.getElementById("calc-btn");

let bMapOn = 1;
let bCalcOn = 0;

function switchCalc() {
  if (bMapOn) {
    bMapOn = 0;
    bCalcOn = 1;
    mapCont.classList.toggle("map-cont-not");
    calcCont.classList.toggle("tip-calc-not");
  }
}

function switchMap() {
  if (bCalcOn) {
    bMapOn = 1;
    bCalcOn = 0;
    calcCont.classList.toggle("tip-calc-not");
    mapCont.classList.toggle("map-cont-not");
  }
}

calcBtn.addEventListener("click", switchCalc);

mapBtn.addEventListener("click", switchMap);
// map

const getLocations = () => {
  class Local {
    constructor(name, position, returnsMoney, detail, icon) {
      this.name = name;
      this.position = position;
      this.returnsMoney = returnsMoney;
      this.detail = detail;
      this.icon = icon;
    }
  }

  let locationsInfo = [];

  const noRet = "Este local no devuelve el dinero 💩";
  const yesRet = "Este local devuelve el dinero 😄";

  const sushiPop = new Local(
    "Sushi Pop",
    { lat: -34.56038562958827, lng: -58.47175455711277 },
    true,
    `SushiPop: ${yesRet}. 
    <br ><br > Tener en cuenta que devuelve hasta las 23hs.`,
    "./img/ok.png"
  );

  const BKQ = new Local(
    "Burguer King Quesada",
    { lat: -34.55472385657484, lng: -58.46292771455961 },
    true,
    "Burguer King Quesada: " + yesRet,
    "./img/ok.png"
  );

  const BKJH = new Local(
    "Burguer King José Hernández",
    { lat: -34.56594065356634, lng: -58.45300172366507 },
    true,
    "Burguer King José Hernández: " + yesRet,
    "./img/ok.png"
  );

  const STBKS = new Local(
    "Starbucks Juana Azurduy",
    { lat: -34.55100731985768, lng: -58.46683432987497 },
    true,
    "Starbucks Juana Azurduy: " + yesRet,
    "./img/ok.png"
  );

  const McDM = new Local(
    "McDonald Monroe",
    { lat: -34.557857743218165, lng: -58.459977284247394 },
    true,
    "McDonald Monroe: " + yesRet,
    "./img/ok.png"
  );

  const McDLib = new Local(
    "McDonald Libertador",
    { lat: -34.5473425081703, lng: -58.45716340104112 },
    true,
    "McDonald Libertador: " + yesRet,
    "./img/ok.png"
  );

  const McDShow = new Local(
    "McDonald Showcase",
    { lat: -34.55399262493282, lng: -58.45336017675953 },
    true,
    "McDonald Showcase: " + yesRet,
    "./img/ok.png"
  );

  const MostazaJu = new Local(
    "Mostaza Juramento",
    { lat: -34.5615431853697, lng: -58.457508491043995 },
    true,
    "Mostaza Juramento: " + yesRet,
    "./img/ok.png"
  );

  const GreenEatJH = new Local(
    "Green Eat José Hernández",
    { lat: -34.56513528505151, lng: -58.45321870643986 },
    false,
    `Green Eat José Hernández: ${yesRet}.`,
    "./img/ok.png"
  );

  const TeaConLib = new Local(
    "Tea Connection Libertador",
    { lat: -34.55389292845864, lng: -58.449771573662034 },
    false,
    `Tea Connection Libertador: ${yesRet}.`,
    "./img/ok.png"
  );

  const FreddoCr = new Local(
    "Freddo Cramer",
    { lat: -34.56561217799895, lng: -58.46067822511718 },
    false,
    `Freddo Cramer: ${yesRet}.`,
    "./img/ok.png"
  );

  const FreddoLib = new Local(
    "Freddo Libertador",
    { lat: -34.562869727887254, lng: -58.43957599461224 },
    false,
    `Freddo Libertador: ${yesRet}.`,
    "./img/ok.png"
  );

  const FreddoZap = new Local(
    "Freddo Zapiola",
    { lat: -34.56252927984969, lng: -58.4665816325748 },
    false,
    `Freddo Zapiola: ${yesRet}.`,
    "./img/ok.png"
  );

  const FreddoCongr = new Local(
    "Freddo Congreso",
    { lat: -34.55098640020266, lng: -58.45279027289538 },
    false,
    `Freddo Congreso: ${yesRet}.`,
    "./img/ok.png"
  );

  const BarroCaf = new Local(
    "Barro Café",
    { lat: -34.55608693192928, lng: -58.47034085445351 },
    false,
    `Barro Café: ${yesRet}.`,
    "./img/ok.png"
  );

  const Brie = new Local(
    "Brie",
    { lat: -34.5675653785325, lng: -58.457634964458244 },
    false,
    `Brie: ${yesRet}.`,
    "./img/ok.png"
  );

  const TiendaCafJu = new Local(
    "Tienda de Café Juramento",
    { lat: -34.55920813662781, lng: -58.45234938951236 },
    false,
    `Tienda de Café Juramento: ${yesRet} (hubo que discutir para conseguir la devolución).`,
    "./img/ok.png"
  );

  const Praliné = new Local(
    "Praliné",
    { lat: -34.55425928263642, lng: -58.45300741444103 },
    false,
    `Praliné: ${yesRet} (hubo que discutir para conseguir la devolución).`,
    "./img/ok.png"
  );

  const NoahGKCv = new Local(
    "Noah's Green Kitchen (Cervelar)",
    { lat: -34.55872715186808, lng: -58.45788959424267 },
    false,
    `Noah's Green Kitchen (Cervelar): ${yesRet}.`,
    "./img/ok.png"
  );

  const LaFarR = new Local(
    "La Farola Roosvelt",
    { lat: -34.55727982638216, lng: -58.46101412185292 },
    false,
    `La Farola Roosvelt: ${noRet}.
     <br ><br >
      
    Sólo si el cliente cancela durante el viaje, lo cuál nunca sucede ya que si al entregar y el cliente no quiere el pedido, es soporte del rider quien lo cancela.`,
    "./img/not.png"
  );

  const LaFarVP = new Local(
    "La Farola Express Virrey del Pino",
    { lat: -34.56748135613277, lng: -58.455021180682834 },
    false,
    `La Farola Roosvelt: ${noRet}.`,
    "./img/not.png"
  );

  const TomassoAm = new Local(
    "Tomasso Amenabar",
    { lat: -34.56735173199197, lng: -58.455129402918246 },
    false,
    `Tomasso Amenabar: ${noRet}.`,
    "./img/not.png"
  );

  const ChinoCon = new Local(
    "Winning Burguer y otros",
    { lat: -34.556025000789674, lng: -58.46410237364514 },
    true,
    `Winning Burguer y otros: ${yesRet}, es lo que me dijeron pero nunca lo comprobé.`,
    "./img/ok.png"
  );

  const DeanNDennysB = new Local(
    "Dean & Dennys Cuba",
    { lat: -34.56243986992566, lng: -58.454879257484414 },
    false,
    `Dean & Dennys Cuba: ${noRet}.`,
    "./img/not.png"
  );

  const ClubEmpJu = new Local(
    "Club de la empanada Juramento",
    { lat: -34.56347013825546, lng: -58.4565569688719 },
    false,
    `Club de la empanada Juramento: ${noRet}.`,
    "./img/not.png"
  );

  const LoDeJesus = new Local(
    "Lo de Jesus",
    { lat: -34.55994920336248, lng: -58.4625418913439 },
    false,
    `Lo de Jesus: ${noRet}.`,
    "./img/not.png"
  );

  const MaruBot = new Local(
    "Maru Botana 11 de Septiembre",
    { lat: -34.56187988788458, lng: -58.448617172582104 },
    false,
    `Maru Botana 11 de Septiembre: ${noRet}.`,
    "./img/not.png"
  );

  const TentuSushi = new Local(
    "Tentu Sushi",
    { lat: -34.561923976645076, lng: -58.46336993661715 },
    false,
    `Tentu Sushi: ${noRet}.`,
    "./img/not.png"
  );

  const MiGustoBal = new Local(
    "Mi Gusto Balbín",
    { lat: -34.56262179137553, lng: -58.46479516022553 },
    false,
    `Mi Gusto Balbín: ${noRet}.`,
    "./img/not.png"
  );

  const MiGustoOdS = new Local(
    "Mi Gusto 11 de Septiembre",
    { lat: -34.554943417141644, lng: -58.454557203901395 },
    false,
    `Mi Gusto 11 de Septiembre: ${noRet}.`,
    "./img/not.png"
  );

  const KaluSushi = new Local(
    "Kalu Sushi",
    { lat: -34.563372115133475, lng: -58.458798652794805 },
    false,
    `Kalu Sushi: ${noRet}.`,
    "./img/not.png"
  );

  const Oggi = new Local(
    "Oggi Juramento",
    { lat: -34.56242510164326, lng: -58.457561028647305 },
    false,
    `Oggi: ${noRet}.`,
    "./img/not.png"
  );

  const HarinaCaf = new Local(
    "Harina Café Juramento",
    { lat: -34.55788753331046, lng: -58.4496153692405 },
    false,
    `Harina Café Juramento: ${noRet}.`,
    "./img/not.png"
  );

  const ChungoVP = new Local(
    "Chungo Virrey del Pino",
    { lat: -34.56693277028994, lng: -58.45368525173184 },
    false,
    `Chungo Virrey del Pino: ${noRet}.`,
    "./img/not.png"
  );

  const CafeMartMont = new Local(
    "Café Martinez Montañeses",
    { lat: -34.55544390700207, lng: -58.4506615911903 },
    false,
    `Café Martinez Montañeses: ${noRet}.`,
    "./img/not.png"
  );

  const CafeMartNu = new Local(
    "Café Martinez Nuñez",
    { lat: -34.5498524006552, lng: -58.46718405998648 },
    false,
    `Café Martinez Nuñez: ${noRet}.`,
    "./img/not.png"
  );

  const GuitarritaShow = new Local(
    "La Guitarrita Showcase",
    { lat: -34.55393298066773, lng: -58.45310134359941 },
    false,
    `La Guitarrita Showcase: ${noRet}.`,
    "./img/not.png"
  );

  const TacoBoxTdF = new Local(
    "Taco Box 3 de Febrero",
    { lat: -34.55261257763808, lng: -58.45756947233314 },
    false,
    `Taco Box 3 de Febrero: ${noRet}.`,
    "./img/not.png"
  );

  const HomeDeli = new Local(
    "Home Deli",
    { lat: -34.55229900219062, lng: -58.45707730378388 },
    false,
    `Home Deli: devuelven pero ya gestionan pedidos en efectivo, son todos online por el momento sus pedidos.`,
    "./img/ok.png"
  );

  const ElDesem = new Local(
    "El Desembarco Nuñez",
    { lat: -34.54472060688477, lng: -58.46155709866476 },
    false,
    `El Desembarco Nuñez: ${noRet}.`,
    "./img/not.png"
  );

  const Foret = new Local(
    "Foret",
    { lat: -34.551398676872026, lng: -58.454220212341966 },
    false,
    `Foret: ${noRet}.`,
    "./img/not.png"
  );

  const TostCafCl = new Local(
    "Tostado Café Club",
    { lat: -34.560316540555284, lng: -58.4540410608167 },
    false,
    `Tostado Café Club: ${noRet}.`,
    "./img/not.png"
  );

  const Mondo = new Local(
    "Mondo",
    { lat: -34.56449091162871, lng: -58.454325123614595 },
    false,
    `Mondo: ${noRet}.`,
    "./img/not.png"
  );

  const AlmaPizLib = new Local(
    "Almacen de Pizzas Libertador",
    { lat: -34.550727977844666, lng: -58.453146135932336 },
    false,
    `Almacen de Pizzas Libertador: ${noRet}.`,
    "./img/not.png"
  );

  const ClMilMig = new Local(
    "El Club de la Milanesa Migueletes",
    { lat: -34.55245216755988, lng: -58.44987462092721 },
    false,
    `El Club de la Milanesa Migueletes: ${noRet}.`,
    "./img/not.png"
  );

  const FabSushBCH = new Local(
    "Fabric Sushi Barrio Chino",
    { lat: -34.55493568643184, lng: -58.45222413546129 },
    false,
    `Fabric Sushi Barrio Chino: ${noRet}.`,
    "./img/not.png"
  );

  const Dogg = new Local(
    "Dogg",
    { lat: -34.55480102880425, lng: -58.45192853579767 },
    false,
    `Dogg: ${noRet}.`,
    "./img/not.png"
  );

  const CisneBl = new Local(
    "Cisne Blanco",
    { lat: -34.556039899341, lng: -58.451942088984644 },
    false,
    `Cisne Blanco: ${noRet}.`,
    "./img/not.png"
  );

  const DalalMig = new Local(
    "Dalal Migueletes",
    { lat: -34.55424656057061, lng: -58.44852261331436 },
    false,
    `Dalal Migueletes: ${noRet}.`,
    "./img/not.png"
  );

  const WilliamLib = new Local(
    "Williamsburg Libertador",
    { lat: -34.55625234022908, lng: -58.44779385025874 },
    false,
    `Williamsburg Libertador: ${noRet}.`,
    "./img/not.png"
  );

  const MoishMP = new Local(
    "Moisha Manuela Pedraza",
    { lat: -34.550815831661915, lng: -58.4650508896148 },
    false,
    `Moisha Manuela Pedraza: ${noRet}.`,
    "./img/not.png"
  );

  const SubWIb = new Local(
    "Subway Iberá",
    { lat: -34.56690180217193, lng: -58.45016345991342 },
    false,
    `Subway Iberá: ${noRet}.`,
    "./img/not.png"
  );

  const VivaAr = new Local(
    "Viva la Arepa",
    { lat: -34.55712230610645, lng: -58.46214304276559 },
    false,
    `Viva la Arepa: ${noRet}.`,
    "./img/not.png"
  );

  const CremeChic = new Local(
    "Creme Chic",
    { lat: -34.557616878567146, lng: -58.45363437440025 },
    false,
    `Creme Chic: ${noRet}.`,
    "./img/not.png"
  );

  const DalalVid = new Local(
    "Dalal Vidal",
    { lat: -34.56830386308433, lng: -58.4566619589171 },
    false,
    `Dalal Vidal: ${noRet}.`,
    "./img/not.png"
  );

  locationsInfo.push(
    sushiPop,
    BKQ,
    BKJH,
    LaFarR,
    McDM,
    ChinoCon,
    DeanNDennysB,
    ClubEmpJu,
    STBKS,
    McDLib,
    LoDeJesus,
    MaruBot,
    GreenEatJH,
    TentuSushi,
    MiGustoBal,
    MiGustoOdS,
    KaluSushi,
    Oggi,
    HarinaCaf,
    MostazaJu,
    LaFarVP,
    TomassoAm,
    ChungoVP,
    TiendaCafJu,
    CafeMartMont,
    CafeMartNu,
    GuitarritaShow,
    McDShow,
    Praliné,
    FreddoCr,
    FreddoLib,
    TacoBoxTdF,
    HomeDeli,
    ElDesem,
    FreddoZap,
    TostCafCl,
    Mondo,
    AlmaPizLib,
    FreddoCongr,
    ClMilMig,
    FabSushBCH,
    Dogg,
    CisneBl,
    DalalMig,
    WilliamLib,
    BarroCaf,
    TeaConLib,
    MoishMP,
    SubWIb,
    VivaAr,
    NoahGKCv,
    CremeChic,
    Brie,
    DalalVid,
    Foret
  );

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((data) => {
      let currentPosition = {
        lat: data.coords.latitude,
        lng: data.coords.longitude,
      };
      dibujarMapa(currentPosition, locationsInfo);
    });
  }
};

const dibujarMapa = (obj, locationsInfo) => {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: obj,
  });

  let marker = new google.maps.Marker({
    position: obj,
    title: "Tu ubicacion",
  });
  marker.setMap(map);

  let infowindowme = new google.maps.InfoWindow({
    content: "Aquí estás vos.",
  });

  let infowindow = locationsInfo.map((place) => {
    return new google.maps.InfoWindow({
      content: place.detail,
    });
  });

  let markers = locationsInfo.map((place) => {
    return new google.maps.Marker({
      position: place.position,
      map: map,
      title: place.name,
      icon: place.icon,
    });
  });

  marker.addListener("click", () => {
    infowindowme.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  let info = markers.map((places) =>
    places.addListener("click", () => {
      let index = markers.indexOf(places);

      infowindow[index].open({
        anchor: places,
        map,
        shouldFocus: false,
      });
    })
  );
};

window.addEventListener("load", getLocations);

// tip calculator

function calculator() {
  const visor = document.querySelector("#visor");
  const restart = document.querySelector("#restart");
  const ten = document.querySelector("#ten");
  const twenty = document.querySelector("#twenty");
  const thirty = document.querySelector("#thirty");
  const fourty = document.querySelector("#fourty");
  const fifty = document.querySelector("#fifty");
  const hundred = document.querySelector("#hundred");
  const twohundred = document.querySelector("#twohundred");
  const threehundred = document.querySelector("#threehundred");
  const fourhundred = document.querySelector("#fourhundred");
  let counter = 0;
  visor.innerHTML = counter;

  restart.addEventListener("click", () => {
    counter = 0;
    visor.innerHTML = counter;
  });

  ten.addEventListener("click", () => {
    counter += 10;
    visor.innerHTML = counter;
  });

  twenty.addEventListener("click", () => {
    counter += 20;
    visor.innerHTML = counter;
  });

  thirty.addEventListener("click", () => {
    counter += 30;
    visor.innerHTML = counter;
  });

  fourty.addEventListener("click", () => {
    counter += 40;
    visor.innerHTML = counter;
  });

  fifty.addEventListener("click", () => {
    counter += 50;
    visor.innerHTML = counter;
  });

  hundred.addEventListener("click", () => {
    counter += 100;
    visor.innerHTML = counter;
  });

  twohundred.addEventListener("click", () => {
    counter += 200;
    visor.innerHTML = counter;
  });

  threehundred.addEventListener("click", () => {
    counter += 300;
    visor.innerHTML = counter;
  });

  fourhundred.addEventListener("click", () => {
    counter += 400;
    visor.innerHTML = counter;
  });

  const sumVal = document.getElementById("other-sum");
  const subsVal = document.getElementById("other-subs");

  sumVal.addEventListener("click", () => {
    let otherVal = parseInt(document.getElementById("otherval").value);
    if (otherVal) {
      counter += otherVal;
      visor.innerHTML = counter;
    }
  });

  subsVal.addEventListener("click", () => {
    let otherVal = parseInt(document.getElementById("otherval").value);
    if (otherVal) {
      counter -= otherVal;
      visor.innerHTML = counter;
    }
  });
}

calculator();
