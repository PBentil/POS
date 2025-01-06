import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FaAlignJustify } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { BsFillCupHotFill } from "react-icons/bs";
import { TbSoupFilled } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { BiSolidSushi } from "react-icons/bi";
import { BiSolidDish } from "react-icons/bi";
import { LuDessert } from "react-icons/lu";
import { RiDrinksFill } from "react-icons/ri";
import { PiWineFill } from "react-icons/pi";
import { SiCashapp } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";


import './App.css'
import './index.css'
// Define the type for the counts state
interface ItemCounts {
  alcohol: number;
  roastChicken: number;
  filletStake: number;
  beefsteak: number;
  roastBeef: number;
  buffaloWings: number;
  lobster: number;
  redCaviar: number;
}

const OrderCard = () => {
  // Use the ItemCounts type for the state
  const [counts, setCounts] = useState<ItemCounts>({
    alcohol: 0,
    roastChicken: 0,
    filletStake: 0,
    beefsteak: 0,
    roastBeef: 0,
    buffaloWings: 0,
    lobster: 0,
    redCaviar: 0,
  });

  const prices = {
    alcohol: 7.50,
    roastChicken: 12.50,
    filletStake: 11.60,
    beefsteak: 10.20,
    roastBeef: 10.50,
    buffaloWings: 8.85,
    lobster: 13.40,
    redCaviar: 12.30,

  }
  const subtotal = Object.keys(counts).reduce((total, item) => {
    const count = counts[item as keyof ItemCounts] || 0;
    const price = prices[item as keyof typeof prices] || 0;
    return total + count * price;
  }, 0);

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const increaseCount = (item: keyof ItemCounts) => {
    setCounts((prevCounts) => ({ ...prevCounts, [item]: prevCounts[item] + 1 }));
  };

  const decreaseCount = (item: keyof ItemCounts) => {
    setCounts((prevCounts) => ({ ...prevCounts, [item]: Math.max(prevCounts[item] - 1, 0) }));
  };

  const orderSummary = Object.keys(counts)
    .filter((item) => (counts[item as keyof ItemCounts] || 0) > 0)
    .map((item) => (
      <div className="bg-back rounded flex justify-between p-2" key={item}>
        <p>{item} x{counts[item as keyof ItemCounts]}</p>
        <p>${((counts[item as keyof ItemCounts] || 0) * (prices[item as keyof typeof prices] || 0)).toFixed(2)}</p>
      </div>
    ));



  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);

    // Optional: Reset back to "Place Order" after a delay
    setTimeout(() => {
      setIsOrderPlaced(false);
    }, 2000); // Reset after 2 seconds (adjust as needed)
  };


  return (
    <div className="flex h-auto sm:h-screen md:h-96 lg:min-h-screen xl:h-80 w-screen fixed overflow-hidden box-border">
      {/* Sidebar */}
      <div className="w-64 h-screen sm:h-screen md:h-96 lg:min-h-screen xl:h-80 sm:w-72 md:w-80 lg:w-56 xl:w-1/5 bg-black text-white p-4 flex flex-col">
        <h1 className="text-3xl flex space-x-2 font-bold mb-6">
          <FaAlignJustify />
          CosyPOS
        </h1>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block p-2 rounded hover:bg-back">
              Reservation
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-back">
              Table Services
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-back">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-back">
              Delivery
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-back">
              Accounting
            </a>
          </li>
        </ul>
        {/* Last Div - Push to Bottom */}
        <div className="mt-96 lg:mt-auto">
          <h1 className="bg-black border  text-white text-center p-2 rounded-2xl w-40">
            Leslie K.
          </h1><br />
          <h1 className="bg-black border text-white text-center p-2 rounded-2xl w-40">
            Cameron W.
          </h1><br />
          <h1 className="bg-black border text-white text-center p-2 rounded-2xl w-40">
            Jacob J.
          </h1><br />
        </div>
        <div className='mt-auto'>
          <h1>© 2022 CosyPOS App</h1>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 bg-black p-8 overflow-auto  lg:w-52" >
        <input className='bg-back p-2 rounded text-gray-600' type='text' placeholder='search.....'></input><br /><br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
          <div className="bg-first p-4 text-white w-full h-36 rounded ">
            <BsFillCupHotFill size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Breakfast</h1>
            <p className="text-gray-600">13 Items</p>
          </div>
          <div className="bg-second p-4 text-white w-full h-36 rounded">
            <TbSoupFilled size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Soups</h1>
            <p className="text-gray-600">8 Items</p>
          </div>
          <div className="bg-third p-4 text-white w-full h-36 rounded">
            <GiNoodles size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Pastas</h1>
            <p className="text-gray-600">10 Items</p>
          </div>
          <div className="bg-fouth p-4 text-white w-full h-36 rounded">
            <BiSolidSushi size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Sushi</h1>
            <p className="text-gray-600">15 Items</p>
          </div>
          <div className="bg-fifth p-4 text-white w-full h-36 rounded">
            <BiSolidDish size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Course</h1>
            <p className="text-gray-600">7 Items</p>
          </div>
          <div className="bg-sixth p-4 text-white w-full h-36 rounded">
            <LuDessert size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Desserts</h1>
            <p className="text-gray-600">9 Items</p>
          </div>
          <div className="bg-seventh p-4 text-white w-full h-36 rounded">
            <RiDrinksFill size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Drinks</h1>
            <p className="text-gray-600">11 Items</p>
          </div>
          <div className="bg-last p-4 text-white w-full h-36 rounded">
            <PiWineFill size={20} color="black" /><br /><br />
            <h1 className="text-black text-2xl lg:text-xl">Alcohol</h1>
            <p className="text-gray-600">12 Items</p>
          </div>
        </div><br /><br />
        <div className="border-t border-gray-400 p-4"><br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
            <div className="bg-back p-4 text-white w-52  h-36 rounded lg:w-full lg:h-auto">
              <p className="text-gray-400">Orders - Kitchen</p>
              <h1 className="text-white text-2xl lg:text-xl">Alcohol</h1>
              <p className="text-gray-400">$7.50</p>
              <div className="flex flex-row justify-end items-center">
                <button onClick={() => decreaseCount('alcohol')} className="bg-back text-white px-2 py-0 rounded-sm border">-</button>
                <p className="text-xl p-2">{counts.alcohol}</p>
                <button onClick={() => increaseCount('alcohol')} className="bg-back text-white px-2 py-0 rounded-sm border">+</button>
              </div>
            </div>
            <div className="bg-fifth p-4 text-white w-52 h-36 rounded lg:w-full lg:h-auto">
              <p className="text-back">Orders - Kitchen</p>
              <h1 className="text-back text-2xl lg:text-xl">Roast Chicken</h1>
              <p className="text-gray-400">$12.50</p>
              <div className="flex flex-row justify-end">
                <button onClick={() => decreaseCount('roastChicken')} className="bg-fifth text-white px-2 py-0 rounded-sm border ">-</button><br />
                <p className="text-1xl p-1">{counts.roastChicken}</p>
                <button onClick={() => increaseCount('roastChicken')} className="bg-fifth text-white px-2 py-0 rounded-sm border ">+</button>
              </div>
            </div>
            <div className="bg-back p-4 text-white w-52 h-36 rounded lg:w-full lg:h-auto ">
              <p className="text-gray-400">Orders - Kitchen</p>
              <h1 className="text-white text-2xl lg:text-xl">Fillet Stake</h1>
              <p className="text-gray-400">$11.60</p>
              <div className="flex flex-row justify-end">
                <button onClick={() => decreaseCount('filletStake')} className="bg-back text-white px-2 py-0 rounded-sm border ">-</button><br />
                <p className="text-1xl p-1">{counts.filletStake}</p>
                <button onClick={() => increaseCount('filletStake')} className="bg-back text-white px-2 py-0 rounded-sm border ">+</button>
              </div>
            </div>
            <div className="bg-back p-4 text-white w-52 h-36 rounded lg:w-full lg:h-auto">
              <p className="text-gray-400">Orders - Kitchen</p>
              <h1 className="text-white text-2xl lg:text-xl">Beefsteak</h1>
              <p className="text-gray-400">$10.20</p>
              <div className="flex flex-row justify-end">
                <button onClick={() => decreaseCount('beefsteak')} className="bg-back text-white px-2 py-0 rounded-sm border ">-</button><br />
                <p className="text-1xl p-1">{counts.beefsteak}</p>
                <button onClick={() => increaseCount('beefsteak')} className="bg-back text-white px-2 py-0 rounded-sm border ">+</button>
              </div>
            </div>
            <div className="bg-back p-4 text-white w-52 h-36 rounded lg:w-full lg:h-auto">
              <p className="text-gray-400">Orders - Kitchen</p>
              <h1 className="text-white text-2xl lg:text-xl">Roast Beef</h1>
              <p className="text-gray-400">$10.50</p>
              <div className="flex flex-row justify-end">
                <button onClick={() => decreaseCount('roastBeef')} className="bg-back text-white px-2 py-0 rounded-sm border ">-</button><br />
                <p className="text-1xl p-1">{counts.roastBeef}</p>
                <button onClick={() => increaseCount('roastBeef')} className="bg-back text-white px-2 py-0 rounded-sm border ">+</button>
              </div>
            </div>
            <div className="bg-back p-4 text-white w-52 h-36 rounded lg:w-full lg:h-auto">
              <p className="text-gray-400">Orders - Kitchen</p>
              <h1 className="text-white text-2xl lg:text-xl">Buffalo Wings</h1>
              <p className="text-gray-400">$8.85</p>
              <div className="flex flex-row justify-end">
                <button onClick={() => decreaseCount('buffaloWings')} className="bg-back text-white px-2 py-0 rounded-sm border ">-</button><br />
                <p className="text-1xl p-1">{counts.buffaloWings}</p>
                <button onClick={() => increaseCount('buffaloWings')} className="bg-back text-white px-2 py-0 rounded-sm border ">+</button>
              </div>
            </div>
            <div className="bg-back p-4 text-white w-52 h-36 rounded lg:w-full lg:h-auto">
              <p className="text-gray-400">Orders - Kitchen</p>
              <h1 className="text-white text-2xl lg:text-xl">Lobster</h1>
              <p className="text-gray-400">$13.40</p>
              <div className="flex flex-row justify-end">
                <button onClick={() => decreaseCount('lobster')} className="bg-back text-white px-2 py-0 rounded-sm border ">-</button><br />
                <p className="text-1xl p-1">{counts.lobster}</p>
                <button onClick={() => increaseCount('lobster')} className="bg-back text-white px-2 py-0 rounded-sm border ">+</button>
              </div>
            </div>
            <div className="bg-fifth p-4 text-white w-52 h-36 rounded lg:w-full lg:h-auto">
              <p className="text-back">Orders - Kitchen</p>
              <h1 className="text-back text-2xl lg:text-xl">Red Caviar</h1>
              <p className="text-gray-400">$12.30</p>
              <div className="flex flex-row justify-end">
                <button onClick={() => decreaseCount('redCaviar')} className="bg-fifth text-white px-2 py-0 rounded-sm border ">-</button><br />
                <p className="text-1xl p-1">{counts.redCaviar}</p>
                <button onClick={() => increaseCount('redCaviar')} className="bg-fifth text-white px-2 py-0 rounded-sm border ">+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 p-4 flex justify-center">
          <div className='w-72 flex space-x-2 border-r  '><div className='bg-fifth rounded text-center text-2xl mt-2 text-black h-8 px-1'>T4</div><div><h1>Lesie K.</h1><h3>6 items - Kitchen</h3></div>
          </div>
          <div className='w-72 flex space-x-2 border-r pl-4 '><div className='bg-back rounded text-center text-2xl mt-2 text-white h-8 px-1'>T2</div><div><h1>Jacob J.</h1><h3>4 items - Kitchen</h3></div><div className='bg-green-400 rounded-xl h-6 px-2  text-black text-center'>In process</div>
          </div>
          <div className='w-72 flex space-x-2 pl-4 '><div className='bg-back rounded text-center text-2xl mt-2 text-white h-8 px-1'>T4</div><div><h1>Cameron W.</h1><h3>6 items - Kitchen</h3></div><div className='bg-green-400 rounded-xl h-6 px-2  text-black text-center'>In process</div>
          </div>
        </div>
      </div>
      <div className="w-96 ml-4 bg-black text-white p-4">
        {/* checkout Place */}
        <div className="flex justify-between">
          <div>
            <h1>Table 5</h1>
            <h3 className="text-gray-500">Leslie K.</h3>
          </div>
          <div className="pt-1">
            <RiEditCircleLine size={30} />
          </div>
        </div><br /><br />
        <div className="flex flex-col gap-4 max-h-60 overflow-y-auto">
          {orderSummary.length > 0 ? (
            <>{orderSummary}</>
          ) : (
            <p className="text-gray-400">No items selected</p>
          )}
             </div>
          <br />

          <div className="bg-back rounded p-4 lg:mt-auto">
            <div className="flex justify-between"><h1>Subtotal</h1><p>${subtotal.toFixed(2)}</p></div><br />
            <div className="flex justify-between"><h1>Tax 10%</h1><p>${tax.toFixed(2)}</p></div><br />
            <div className="border-t border-dashed border-gray-400 p-4">
              <div className="flex justify-between"><h1 className="text-2xl">Total</h1>
                <p className="text-2xl">${total.toFixed(2)}</p>
              </div><br />
              <h1>Payment Method</h1><br />
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="border border-white flex justify-center p-2 py-2 rounded">
                    <SiCashapp color="white" />
                  </div>
                  <p>Cash</p>
                </div>
                <div className="text-center">
                  <div className="border border-white flex justify-center p-2 py-2 rounded">
                    <CiCreditCard1 color="white" />
                  </div>
                  <p>Debit Card</p>
                </div>
                <div className="text-center">
                  <div className="border border-white flex justify-center p-2 py-2 rounded">
                    <CiWallet color="white" />
                  </div>
                  <p>E-wallet</p>
                </div>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="bg-white text-black text-center w-64 p-4 rounded-2xl ml-4 flex justify-center items-center"
              >
                {isOrderPlaced ? (
                  <FaCheck color='black' /> // Replace text with a check icon
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </div>
        </div>
   


    </div>
  );

}


export default OrderCard;





