import { useState, useEffect } from "react";
import { Store } from "./Store";

export function Tamagotchi() {
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [hunger, setHunger] = useState(
    () => parseInt(localStorage.getItem("hunger")) || 50
  );
  const [happiness, setHappiness] = useState(
    () => parseInt(localStorage.getItem("happiness")) || 50
  );
  const [health, setHealth] = useState(
    () => parseInt(localStorage.getItem("health")) || 100
  );
  const [hygiene, setHygiene] = useState(
    () => parseInt(localStorage.getItem("hygiene")) || 100
  );
  const [stamina, setStamina] = useState(
    () => parseInt(localStorage.getItem("stamina")) || 100
  );
  const [experience, setExperience] = useState(
    () => parseInt(localStorage.getItem("experience")) || 0
  );
  const [level, setLevel] = useState(
    () => parseInt(localStorage.getItem("level")) || 1
  );
  const [levelExp, setLevelExp] = useState(
    () => parseInt(localStorage.getItem("levelExp")) || 1
  );
  const [minStats, setMinStats] = useState(
    () => parseInt(localStorage.getItem("minStats")) || 0
  );
  const [speedBar, setSpeedBar] = useState(
    () => parseInt(localStorage.getItem("speedBar")) || 0
  );
  const [coins, setCoins] = useState(
    () => parseInt(localStorage.getItem("coins")) || 100
  );
  const [inventory, setInventory] = useState([
    { name: "cepillo", image: "../../public/diente.webp", price: 15, count: 0 },
    { name: "comida", image: "../../public/cena.webp", price: 10, count: 0 },
    { name: "juguete", image: "../../public/peluche.png", price: 12, count: 0 },
    { name: "energizante", image: "../../public/batery.webp", price: 20,  count: 0 },
  ]);

  useEffect(() => {
    localStorage.setItem("hunger", hunger);
    localStorage.setItem("happiness", happiness);
    localStorage.setItem("health", health);
    localStorage.setItem("hygiene", hygiene);
    localStorage.setItem("stamina", stamina);
    localStorage.setItem("experience", experience);
    localStorage.setItem("level", level);
    localStorage.setItem("levelExp", levelExp);
    localStorage.setItem("minStats", minStats);
    localStorage.setItem("speedBar", speedBar);
  }, [
    hunger,
    happiness,
    health,
    hygiene,
    stamina,
    experience,
    level,
    levelExp,
    minStats,
    speedBar,
  ]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "¡Vuelve porfavor! 😭";
      } else {
        document.title = "Tamagochi";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

 

  const wash = () => {
    setHygiene((prev) => Math.min(prev + 20, 100));
  };
  const feed = () => {
    setHunger((prev) => Math.min(prev + 20, 100));
    setHealth((prev) => Math.min(prev + 5, 100));
  };

  const play = () => {
    setHappiness((prev) => Math.min(prev + 20, 100));
    setHunger((prev) => Math.max(prev - 5, 0));
    setHealth((prev) => Math.max(prev - 5, 0));
    setStamina((prev) => Math.max(prev - 15, 0));
  };

  const sleep = () => {
    setStamina((prev) => Math.min(prev + 20, 100));
    setHappiness((prev) => Math.max(prev - 5, 0));
    setHealth((prev) => Math.min(prev + 10, 100));
  };

  const buyItem  = (value) => {
    switch (value) {
      case "comida":
        if(coins >= 10){
          setInventory((prevInventory) => prevInventory.map((item) => item.name === value ? { ...item, count: item.count + 1 } : item));
        setCoins((prev) => Math.max(prev - 10, 0));}
        break;
      case "juguete":
        if(coins >= 12){
        setInventory((prevInventory) => prevInventory.map((item) => item.name === value ? { ...item, count: item.count + 1 } : item));
        setCoins((prev) => Math.max(prev - 12, 0));}
        break;
      case "cepillo":
        if(coins >= 15){
          setInventory((prevInventory) => prevInventory.map((item) => item.name === value ? { ...item, count: item.count + 1 } : item));
        setCoins((prev) => Math.max(prev - 15, 0));}
        break;
      case "energizante":
        if(coins >= 20){
          setInventory((prevInventory) => prevInventory.map((item) => item.name === value ? { ...item, count: item.count + 1 } : item));
        setCoins((prev) => Math.max(prev - 20, 0));}
        break;
      }
        
   
  }
  const useItem = (itemType) => {

    switch (itemType) {
      case "comida":
        setHunger((prev) => Math.min(prev + 20, 100));
        setInventory((prevInventory) => prevInventory.map((item) => item.name === itemType ? { ...item, count: item.count - 1 } : item));
        break;
      case "juguete":
        setHappiness((prev) => Math.min(prev + 20, 100));
        setInventory((prevInventory) => prevInventory.map((item) => item.name === itemType ? { ...item, count: item.count - 1 } : item));
        break;
      case "cepillo":
        setHygiene((prev) => Math.min(prev + 30, 100));
        setInventory((prevInventory) => prevInventory.map((item) => item.name === itemType ? { ...item, count: item.count - 1 } : item));
        break;
      case "energizante":
        setStamina((prev) => Math.min(prev + 50, 100));
        setInventory((prevInventory) => prevInventory.map((item) => item.name === itemType ? { ...item, count: item.count - 1 } : item));
        break
  } 
}

  useEffect(() => {
    if (experience === 100) {
      setLevel((prev) => Math.min(prev + 1, 99));
      setCoins((prev) => Math.min(prev + 10, 99));
      setExperience(0);
    }
    switch (level) {
      case 1:
        setLevelExp(20);
        setMinStats(50);
        setSpeedBar(1);
        break;
      case 2:
        setLevelExp(15);
        setMinStats(60);
        setSpeedBar(2);
        break;
      case 3:
        setLevelExp(10);
        setMinStats(70);
        setSpeedBar(3);
        break;
      case 4:
        setLevelExp(5);
        setMinStats(80);
        setSpeedBar(5);
        break;
      case level > 5:
        setLevelExp(2);
        setMinStats(85);
        setSpeedBar(10);
        break;
    }

    if (
      hunger === 0 ||
      happiness === 0 ||
      health === 0 ||
      hygiene === 0 ||
      stamina === 0
    ) {
      alert("Game Over");
      setHunger(50);
      setHappiness(50);
      setHealth(100);
      setHygiene(100);
      setStamina(100);
      setExperience(0);
      setLevel(1);
    }
    if (
      hunger > minStats &&
      happiness > minStats &&
      health > minStats &&
      hygiene > minStats &&
      stamina > minStats
    ) {
      setExperience((prev) => Math.min(prev + levelExp, 100));
      console.log(levelExp);
      console.log(experience);
    }
  }, [hunger, happiness, health, hygiene, stamina]);

  useEffect(() => {}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHunger((prev) => Math.max(prev - speedBar, 0));
      setHappiness((prev) => Math.max(prev - speedBar, 0));
      setHealth((prev) => Math.max(prev - speedBar, 0));
      setHygiene((prev) => Math.max(prev - speedBar, 0));
      setStamina((prev) => Math.max(prev - speedBar, 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getProgressColor = (value) => {
    if (value > 65) return "bg-green-500";
    if (value > 35) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getStatusMessage = () => {
    if (hunger < 20) return "I am hungry 😡";
    if (happiness < 20) return "I am sad 😢";
    if (health < 20) return "I am sick 🤒";
    return "I am happy 😊";
  };

 
  return (
    <div className="flex flex-col mt-10 h-full w-full   justify-center items-center">
      <div className="p-5  w-[35%] h-1/4  rounded-lg  font-Terminus overflow-hidden ">
        <div className="text-2xl font-bold text-center mb-4">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">Nivel {level}</h1>
          </div>
          <div className="w-full mt-5 flex flex-row justify-between">
            <div className="w-1/3 flex flex-row  items-center">
              <img className="w-10" src="../../public/coin.webp" />
              <h1 className="  font-bold">{coins}</h1>
            </div>
          
          <div className="flex-1 w-1/3 flex items-center justify-center">
            <img src="../../public/isaac.png" className="w-20" />
          </div>
          <div className="w-1/3 grid grid-cols-2   gap-1">
          {inventory.filter((item) => item.count > 0).map((item) => (
          <li  key={item.name} className="flex text-xs ml-10 items-center">
            <div className="flex flex-col justify-center">
              <button onClick={() => useItem(item.name)}>
            <img src={item.image} alt={item.name} className="w-9 h-10" />
            </button>
            <h1 className="mt-auto text-lg text-center font-bold"> {item.count}</h1>
            </div>
          </li>
        ))}
          </div>
          </div>
       
        </div>
        <div className="mt-10 flex flex-row w-full">
          <div className="w-[22%]">
            <div>
              <div className="mb-1 flex flex-row">
                <img src="../../public/experience.webp" className="w-6" />
                <p className="font-bold ml-1 ">Experience: </p>
                <h2 className="text-white font-medium ml-2"> {experience}</h2>
              </div>
              <div className=" rounded overflow-hidden">
                <div
                //className={`${getProgressColor(experience)} h-full`}
                //style={{ width: `${experience}%` }}
                ></div>
              </div>

              <div className="mb-1 flex flex-row">
                <img src="../../public/food.webp" className="w-6" />
                <p className="font-bold block ml-1 ">Hunger:</p>
                <h1 onClick={feed} className="text-white font-medium ml-2">
                  {" "}
                  {hunger}
                </h1>
                <div className=" h-4 rounded overflow-hidden">
                  <div
                  //className={`${getProgressColor(hunger)} h-full`}
                  //style={{ width: `${hunger}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex flex-row">
                <img src="../../public/happiness.webp" className="w-6" />

                <p className="font-bold block ml-1 ">Happiness:</p>
                <h1 className="text-white font-medium ml-2"> {happiness}</h1>
                <div className=" h-4 rounded overflow-hidden">
                  <div
                  //className={`${getProgressColor(happiness)} h-full`}
                  //style={{ width: `${happiness}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex flex-row">
                <img src="../../public/health.webp" className="w-6 h-5" />
                <p className="font-bold block ml-1 ">Health:</p>
                <h1 className="text-white font-medium ml-2"> {health}</h1>
                <div className=" h-4 rounded overflow-hidden">
                  <div
                  //className={`${getProgressColor(health)} h-full`}
                  //style={{ width: `${health}%` }}
                  ></div>
                </div>
              </div>
              <div className="mb-1 flex flex-row">
                <img src="../../public/papel.webp" className="w-6" />
                <p className="font-bold block ml-1 ">Hygiene:</p>
                <h1 className="text-white font-medium ml-2"> {hygiene}</h1>
                <div className=" h-4 rounded overflow-hidden">
                  <div
                  //className={`${getProgressColor(hygiene)} h-full`}
                  //style={{ width: `${hygiene}%` }}
                  ></div>
                </div>
              </div>
              <div className="mb-2 flex flex-row">
                <img src="../../public/theBattery.png" className="w-6" />
                <p className="font-bold block ml-1 ">Stamina:</p>
                <h1 className="text-white font-medium ml-2"> {stamina}</h1>
                <div className="h-4 rounded overflow-hidden">
                  <div
                  //className={`${getProgressColor(stamina)} h-full`}
                  //style={{ width: `${stamina}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[56%] flex-col ">
            <div>
              <p className="text-center text-lg font-semibold mb4">
                {getStatusMessage()}
              </p>
            </div>
            <div className="flex flex-row gap-5 justify-center mt-10">
              <div>
              <button onClick={feed} className="cursor-pointer">
                <img src="../../public/button.webp" className="w-14" />
                </button>
                <h1 className="text-center font-bold mr-1 mt-1">Feed</h1>
             
              </div>
              <div>
                <button onClick={play} className="cursor-pointer">
                <img src="../../public/button.webp" className="w-14" />
                </button>
                <h1 className="text-center font-bold mr-1 mt-1">Play</h1>
              
              </div>
              <div>
                <button onClick={sleep} className="cursor-pointer">
                <img src="../../public/button.webp" className="w-14" />
                </button>
                <h1 className="text-center font-bold mr-1 mt-1">Sleep</h1>
               
              </div>
              <div>
                <button onClick={wash} className="cursor-pointer">
                <img src="../../public/button.webp" className="w-14" />
                </button>
                <h1 className="text-center font-bold mr-1 mt-1">Wash</h1>
              
              </div>
            </div>
            
          </div>
          <div className="w-[22%]">
          <div className="flex items-center justify-center mt-10">
                <button onClick={() => setIsStoreOpen(true)} className="cursor-pointer"> 
                  <img src="../../public/shopLogo.webp" className="w-20" />
                </button>
            </div>
          </div>
        </div>
       

       <div>
        {isStoreOpen && <Store buyItem={buyItem}  onClose={() => setIsStoreOpen(false)} />}
        </div>
      </div>
    </div>
  );
}
